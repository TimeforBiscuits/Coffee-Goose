/* Coffee Goose — guided brew plans.
   Turns each recipe's roaster wording into one timed step per pour, so the brew timer
   can walk through them. The catalog's own `steps` are never changed; the app shows
   them underneath as the roaster's original wording. Runs in the browser and in node. */
(function (root) {
  'use strict';

  /* ---------- small helpers ---------- */

  const r5 = (s) => Math.round(s / 5) * 5;
  const clock = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
  const secs = (m, s) => +m * 60 + +s;
  const toF = (c) => Math.round((c * 9) / 5 + 32);

  // "75–80°C" → "167–176°F", anywhere in a sentence
  function tempsToF(text) {
    return String(text).replace(/(\d+(?:\.\d+)?)(?:\s*[–-]\s*(\d+(?:\.\d+)?))?\s*°C/g,
      (_, a, b) => (b ? `${toF(+a)}–${toF(+b)}°F` : `${toF(+a)}°F`));
  }

  // When the cup should be finished, in seconds. Ranges aim for the middle.
  function targetSeconds(text) {
    const m = /(\d{1,2}):(\d{2})(?:\s*[–-]\s*(\d{1,2}):(\d{2}))?/.exec(text || '');
    if (!m) return null;
    const lo = secs(m[1], m[2]);
    return m[3] ? r5((lo + secs(m[3], m[4])) / 2) : lo;
  }

  const timeAt = (step) => {
    const m = /^(?:by\s+)?(\d{1,2}):(\d{2})\b/i.exec(step.trim());
    return m ? secs(m[1], m[2]) : null;
  };
  const grams = (s) => [...s.matchAll(/(\d+)\s*g\b/g)].map((m) => +m[1]);

  /* ---------- V60 pour-over ---------- */

  // Cumulative scale readings for each pour, read from however the roaster phrased it.
  function readPours(steps, water) {
    const all = steps.join(' ');
    let m;
    // "Five pours of 40 g, 80 g, … (cumulative: 40 / 120 / 180 / 240 / 300 g)"
    if ((m = /cumulative:\s*([\d\s/]+)\s*g/i.exec(all))) return m[1].split('/').map((x) => +x.trim());

    const bloom = /bloom\s+(?:with\s+|to\s+)?(\d+)\s*g/i.exec(all);
    if (!bloom) return null;
    const out = [+bloom[1]];
    const after = all.slice(bloom.index + bloom[0].length);
    // "three additional pours of 75 g each" / "four more 50 g pours"
    const words = { two: 2, three: 3, four: 4, five: 5, six: 6 };
    if ((m = /(two|three|four|five|six)\s+(?:additional|more)\s+(?:pours\s+of\s+)?(\d+)\s*g/i.exec(after))) {
      for (let i = 0; i < words[m[1].toLowerCase()]; i++) out.push(out[out.length - 1] + +m[2]);
      return out;
    }
    // "Pour 75 g, then 75 g, then 50 g to reach 250 g" / "Then pour 100 g, 75 g, and 75 g, reaching 300 g total"
    if ((m = /pour\s+((?:\d+\s*g(?:\s*,?\s*(?:then|and)\s+|,\s*)?)+)/i.exec(after))) {
      for (const g of grams(m[1])) out.push(out[out.length - 1] + g);
      return out;
    }
    return null;
  }

  // Already-timed schedules ("0:30 pour to 125 g total"): keep the roaster's times.
  function readTimedPours(steps) {
    const pours = [];
    for (const s of steps) {
      const t = timeAt(s);
      if (t == null) return null;
      const to = /(?:to|bloom(?: with)?)\s+(\d+)\s*g/i.exec(s);
      if (!to) return null;
      pours.push({ t, to: +to[1], text: s });
    }
    return pours.length > 1 ? pours : null;
  }

  // Bloom first, then the rest evenly spaced so the last pour lands ~1 minute before drawdown.
  function schedule(cumulative, done, bloomWait = 30) {
    const lastPour = Math.max(bloomWait, done - 60);
    const n = cumulative.length - 1;
    return cumulative.map((to, i) => ({ t: i === 0 ? 0 : n === 1 ? bloomWait : r5(bloomWait + ((lastPour - bloomWait) * (i - 1)) / (n - 1)), to }));
  }

  // No schedule at all: bloom with twice the dose, then three equal pours.
  function inventPours(dose, water) {
    const bloom = Math.min(r5((dose || water / 15) * 2), Math.round(water / 4));
    const rest = water - bloom;
    return [bloom, r5(bloom + rest / 3), r5(bloom + (rest * 2) / 3), water];
  }

  function v60(r) {
    const notes = [];
    const all = r.steps.join(' ');
    const hint = /\((optional(?:ly)?[^)]*)\)/i.exec(all);
    const bloomHint = hint ? ' ' + hint[1].replace(/^optional(?:ly)?\s*/i, '').replace(/^(.)/, (c) => c.toUpperCase()) + '.' : '';
    const targetText = r.target_time || all;
    let done = targetSeconds(/not specified/i.test(targetText) ? '' : targetText);
    let plan, invented = false;

    const timed = readTimedPours(r.steps);
    if (timed) {
      plan = timed;
      const by = /draw\s*down\s+by\s+~?(\d{1,2}):(\d{2})/i.exec(all);
      if (by) done = secs(by[1], by[2]);
      if (done == null || done <= plan[plan.length - 1].t) done = plan[plan.length - 1].t + 60;
    } else {
      let cum = readPours(r.steps, r.water_g);
      if (!cum) { cum = inventPours(r.dose_g, r.water_g); invented = true; }
      if (done == null) done = 180;
      const wait = /~?(\d+)\s*s\b/i.exec(all) || /wait\s+(\d+)/i.exec(all);
      plan = schedule(cum, done, wait ? r5(+wait[1]) : 30);
      notes.push(invented
        ? 'The roaster gave a dose and water amount but no pour schedule, so these pours and times are Coffee Goose’s best guess.'
        : 'The roaster gave the pour sizes, not the times. The timings are Coffee Goose’s best guess.');
    }

    const steps = plan.map((p, i) => {
      const prev = i ? plan[i - 1].to : 0;
      const spiral = /spiral/i.test(p.text || '') ? 'Spiral pour' : 'Pour';
      const slow = /slowly/i.test(p.text || '') ? ' slowly' : '';
      return i === 0
        ? { t: p.t, to: p.to, add: p.to, text: `Bloom: pour to ${p.to} g`, sub: `Wet all the grounds, then wait.${bloomHint}` }
        : { t: p.t, to: p.to, add: p.to - prev, text: `${spiral}${slow} to ${p.to} g`, sub: `+${p.to - prev} g` + (i === plan.length - 1 ? ' · last pour' : '') };
    });
    steps.push({ t: done, text: 'Drawdown done', sub: rangeNote(r.target_time) + 'Lift off the dripper, swirl the carafe and pour.' });
    return {
      prep: ['Rinse the paper filter with hot water and dump the rinse water.', 'Add the coffee, shake it level, and tare the scale.'],
      steps, notes,
    };
  }

  function rangeNote(target) {
    return /[–-]/.test(target || '') && /\d:\d\d/.test(target) ? `Roaster’s window: ${target}. ` : '';
  }

  /* ---------- Hario Switch ---------- */

  function switchImmersion(r) {
    const all = r.steps.join(' ');
    const steep = /steep\s+(\d{1,2}):(\d{2})/i.exec(all);
    const open = steep ? secs(steep[1], steep[2]) : targetSeconds(r.target_time) || 180;
    return {
      prep: [
        /pre-rinse/i.test(all) ? 'Rinse the paper filter, then close the Switch valve.' : 'Close the Switch valve.',
        `Add ${r.dose_g != null ? r.dose_g + ' g' : 'the'} coffee and tare the scale.`,
      ],
      steps: [
        { t: 0, to: r.water_g, add: r.water_g, text: `Pour to ${r.water_g} g`, sub: 'All the water in one go. Wet every bit of the grounds.' },
        { t: 30, text: 'Gentle swirl, lid on', sub: 'Then leave it alone.' },
        { t: open, text: 'Open the valve', sub: 'Let it drain through the paper.' },
        { t: open + 75, text: 'Should be drained', sub: 'If it’s still dripping a lot, grind coarser next time.' },
      ],
      notes: ['The swirl and drain times are Coffee Goose’s best guess; the steep time is the recipe’s.'],
    };
  }

  /* ---------- AeroPress ---------- */

  function aeropress(r) {
    const all = r.steps.join(' ');
    const press = /(\d{1,2}):(\d{2})\s+begin a slow press/i.exec(all);
    const finish = /(?:finish|complete)\s+around\s+(\d{1,2}):(\d{2})/i.exec(all);
    const end = finish ? secs(finish[1], finish[2]) : targetSeconds(r.target_time) || 120;
    const stirAgain = /(\d{1,2}):(\d{2})\s+stir again/i.exec(all);
    const dose = r.dose_g != null ? `${r.dose_g} g coffee` : 'the coffee (the roaster doesn’t say how much)';
    if (stirAgain) {
      // The Barn's two-stir method
      const stir2 = secs(stirAgain[1], stirAgain[2]);
      return {
        prep: ['Rinse the paper filter and preheat the AeroPress (standard upright).', `Add ${dose} and tare the scale.`],
        steps: [
          { t: 0, to: r.water_g, add: r.water_g, text: `Quickly pour to ${r.water_g} g`, sub: 'All the water, fast.' },
          { t: 10, text: 'Stir', sub: 'Three turns clockwise, a quarter-turn back. Done by 0:20.' },
          { t: 20, text: 'Plunger in', sub: 'Pull up slightly to seal so it stops dripping.' },
          { t: stir2, text: 'Stir again', sub: 'Take the plunger out, stir, put it back.' },
          { t: stir2 + 5, text: 'Press slowly', sub: `Steady pressure, finishing around ${clock(end)}.` },
          { t: end, text: 'Done', sub: 'Stop when you hear the hiss.' },
        ],
        notes: ['The roaster’s times are kept; the first stir and the press start are Coffee Goose’s best guess.'],
      };
    }
    const pressAt = press ? secs(press[1], press[2]) : Math.max(30, end - 30);
    const stirs = /(\d+–\d+|\d+)\s+gentle stirs/i.exec(all);
    return {
      prep: ['Rinse the paper filter (standard orientation) and set the AeroPress on a sturdy cup.', `Add ${dose} and tare the scale.`],
      steps: [
        { t: 0, to: r.water_g, add: r.water_g, text: `Pour to ${r.water_g} g`, sub: `Then ${stirs ? stirs[1] : 'a few'} gentle stirs.` },
        { t: 15, text: 'Plunger in', sub: 'Just slightly, to stop the dripping.' },
        { t: pressAt, text: 'Start pressing', sub: `Slow and steady, finishing around ${clock(end)}.` },
        { t: end, text: 'Done', sub: 'Stop when you hear the hiss.' },
      ],
      notes: ['The plunger time is Coffee Goose’s best guess; the press times are the recipe’s.'],
    };
  }

  /* ---------- entry point ---------- */

  function guide(r) {
    const plan = r.method === 'aeropress' ? aeropress(r) : r.method === 'v60_switch_immersion' ? switchImmersion(r) : v60(r);
    for (const s of plan.steps) s.time = clock(s.t);
    plan.end = plan.steps[plan.steps.length - 1].t;
    return plan;
  }

  const api = { guide, tempsToF, toF, targetSeconds, clock };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CGGuide = api;
})(typeof window !== 'undefined' ? window : globalThis);
