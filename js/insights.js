/* Coffee Goose — best practice from the brew log.
   Reads every logged brew of one coffee and works out which brewer, and which settings,
   gave the best cups. Runs on the device: no network, no account, nothing leaves the phone.
   Runs in the browser and in node (tests). */
(function (root) {
  'use strict';

  /* ---------- reading the notes ---------- */

  // Words people use about a cup they loved or didn't. Stems match longer words ("delicious", "balanced").
  const STRONG_GOOD = ['incredible', 'best', 'perfect', 'amazing', 'outstanding', 'phenomenal', 'stunning', 'superb', 'unreal', 'wow', 'honk-worthy', 'favourite', 'favorite'];
  const GOOD = ['great', 'delicious', 'excellent', 'lovely', 'love', 'fantastic', 'wonderful', 'tasty', 'yum', 'nice', 'good', 'sweet', 'balanced', 'clean', 'juicy', 'bright', 'smooth', 'rich', 'complex', 'vibrant', 'round', 'silky', 'clear', 'happy'];
  const BAD = ['sour', 'bitter', 'astringent', 'harsh', 'muddy', 'flat', 'weak', 'thin', 'hollow', 'dull', 'muted', 'burnt', 'ashy', 'bad', 'meh', 'disappoint', 'drying', 'watery', 'stall', 'choke', 'over-extract', 'overextract', 'under-extract', 'underextract', 'boring', 'awful', 'gross', 'undrinkable', 'rubbery', 'papery', 'chalky'];
  const NEGATORS = /\b(not|no|never|wasn'?t|isn'?t|less|without|hardly|barely|too little)\s+(?:\w+\s+)?$/i;

  const words = (text) => (String(text || '').toLowerCase().match(/[a-z][a-z'-]*/g) || []);
  const stemHit = (w, list) => list.some((s) => w.startsWith(s));

  // -1 (hated it) … +1 (loved it), and whether a superlative showed up.
  function sentiment(text) {
    const t = String(text || '').toLowerCase();
    let pos = 0, neg = 0, standout = false;
    const ws = words(t);
    ws.forEach((w, i) => {
      const before = ws.slice(Math.max(0, i - 2), i).join(' ') + ' ';
      const negated = NEGATORS.test(before);
      if (stemHit(w, STRONG_GOOD)) { if (negated) neg += 1; else { pos += 2; standout = true; } }
      else if (stemHit(w, GOOD)) { if (negated) neg += 1; else pos += 1; }
      else if (stemHit(w, BAD)) { if (negated) pos += 0.5; else neg += 1; }
    });
    if (/best (cup|brew|coffee)|ever had|blew me away/.test(t)) { pos += 2; standout = true; }
    if (!pos && !neg) return { score: null, standout: false };
    return { score: (pos - neg) / (pos + neg), standout };
  }

  /* ---------- scoring one brew ---------- */

  // 0 (bad) … 1 (great), or null when the brew carries no opinion at all.
  function brewScore(e) {
    const said = sentiment([e.notes, e.flavours_observed].filter(Boolean).join('. '));
    const parts = [];
    if (e.rating) parts.push([0.65, (e.rating - 1) / 4]);
    if (said.score != null) parts.push([0.35, (said.score + 1) / 2]);
    // sweetness and clarity on the scorecard read as quality; acidity and body are taste, not quality
    const sc = ['sweetness_1_to_5', 'clarity_1_to_5'].filter((k) => e[k]).map((k) => (e[k] - 1) / 4);
    if (sc.length) parts.push([0.15, sc.reduce((a, b) => a + b, 0) / sc.length]);
    if (!parts.length) return { score: null, standout: false };
    const w = parts.reduce((a, [x]) => a + x, 0);
    let score = parts.reduce((a, [x, v]) => a + x * v, 0) / w;
    if (said.standout) score = Math.min(1, score + 0.1);
    return { score, standout: said.standout };
  }

  /* ---------- the verdict ---------- */

  const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
  // Pull small samples toward the overall average, so one lucky brew doesn't outrank ten good ones.
  const shrunk = (xs, prior, k = 1) => (xs.reduce((a, b) => a + b, 0) + k * prior) / (xs.length + k);
  const mode = (xs) => {
    const n = new Map();
    for (const x of xs) n.set(x, (n.get(x) || 0) + 1);
    return [...n.entries()].sort((a, b) => b[1] - a[1])[0][0];
  };
  const stars = (score) => Math.round((1 + score * 4) * 10) / 10;

  // The most quotable bit of a brew's notes: the sentence with the strongest praise.
  function quote(e) {
    const sentences = [e.notes, e.flavours_observed].filter(Boolean).join('. ').split(/(?<=[.!?])\s+|\n+/).map((s) => s.trim()).filter(Boolean);
    let best = null, bestScore = 0;
    for (const s of sentences) {
      const r = sentiment(s);
      const v = (r.score || 0) + (r.standout ? 1 : 0);
      if (v > bestScore) { best = s; bestScore = v; }
    }
    if (!best) return null;
    return best.length > 90 ? best.slice(0, 87).replace(/\s+\S*$/, '') + '…' : best.replace(/[.]+$/, '');
  }

  // entries: every brew of ONE coffee. Returns null when there's nothing to go on.
  function bestPractice(entries) {
    const scored = entries.map((e) => Object.assign({ e }, brewScore(e))).filter((x) => x.score != null);
    if (!scored.length) return { brews: entries.length, scored: 0 };
    const prior = mean(scored.map((x) => x.score));

    // which brewer?
    const byMethod = new Map();
    for (const x of scored) {
      if (!byMethod.has(x.e.method)) byMethod.set(x.e.method, []);
      byMethod.get(x.e.method).push(x);
    }
    const methods = [...byMethod.entries()].map(([method, xs]) => ({
      method,
      count: entries.filter((e) => e.method === method).length,
      rated: xs.length,
      avg: mean(xs.map((x) => x.score)),
      fair: shrunk(xs.map((x) => x.score), prior),
      standout: xs.some((x) => x.standout),
      ratings: entries.filter((e) => e.method === method && e.rating).map((e) => e.rating),
    })).sort((a, b) => b.fair - a.fair || b.rated - a.rated);
    const top = methods[0];
    const pool = byMethod.get(top.method);

    // which grind, within that brewer? same idea, one level down
    const byGrind = new Map();
    for (const x of pool) {
      const g = (x.e.grinder_setting || '').trim();
      if (!g) continue;
      if (!byGrind.has(g)) byGrind.set(g, []);
      byGrind.get(g).push(x.score);
    }
    const grinds = [...byGrind.entries()].map(([grind, xs]) => ({ grind, n: xs.length, fair: shrunk(xs, top.avg) }))
      .sort((a, b) => b.fair - a.fair || b.n - a.n);
    const grind = grinds.length ? grinds[0].grind : null;

    // the other settings: from the best brews with that brewer (and grind, if known)
    const bestScore = Math.max(...pool.map((x) => x.score));
    const winners = pool.filter((x) => x.score >= bestScore - 0.1 && (!grind || (x.e.grinder_setting || '').trim() === grind));
    const pick = (k) => {
      const vals = winners.map((x) => x.e[k]).filter((v) => v != null && v !== '');
      return vals.length ? mode(vals) : null;
    };
    const champion = winners.slice().sort((a, b) => b.score - a.score || (b.e.brewed_on || '').localeCompare(a.e.brewed_on || ''))[0];
    const lastNote = pool.map((x) => x.e).filter((e) => e.change_next_time)
      .sort((a, b) => (b.brewed_on || '').localeCompare(a.brewed_on || ''))[0];

    const scoredTotal = scored.length;
    const confidence = scoredTotal >= 6 ? 'high' : scoredTotal >= 3 ? 'medium' : 'low';
    const runnerUp = methods[1];
    const close = runnerUp && top.fair - runnerUp.fair < 0.05;

    return {
      brews: entries.length,
      scored: scoredTotal,
      confidence,
      close,
      method: top.method,
      settings: {
        grind,
        dose_g: pick('dose_g'),
        water_g: pick('water_g'),
        temperature_c: pick('temperature_c'),
        brew_time: pick('brew_time'),
      },
      // shown: the plain star average where there are stars; ranking uses the blend of stars and notes
      methods: methods.map((m) => ({ method: m.method, count: m.count, rated: m.rated, standout: m.standout,
        stars: m.ratings.length ? Math.round(mean(m.ratings) * 10) / 10 : stars(m.avg) })),
      grinds: grinds.map((g) => ({ grind: g.grind, n: g.n, stars: stars(g.fair) })),
      quote: champion ? quote(champion.e) : null,
      quoteDate: champion ? champion.e.brewed_on : null,
      nextTime: lastNote ? lastNote.change_next_time : null,
    };
  }

  const api = { sentiment, brewScore, bestPractice };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CGInsights = api;
})(typeof window !== 'undefined' ? window : globalThis);
