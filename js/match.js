/* Coffee Goose — taste matcher + catalog helpers. Runs in the browser and in node (tests). */
(function (root) {
  'use strict';

  const METHODS = [
    { id: 'v60_pour_over', label: 'V60', long: 'V60 Pour-over', icon: 'assets/v60.png', c: '#ffd60a', t: '#000' },
    { id: 'v60_switch_immersion', label: 'Switch', long: 'Hario Switch', icon: 'assets/switch.png', c: '#3d5afe', t: '#fff' },
    { id: 'aeropress', label: 'AeroPress', long: 'AeroPress', icon: 'assets/aeropress.png', c: '#ff3d7f', t: '#fff' },
  ];

  const SOURCE_TYPES = {
    roaster_coffee_specific: { label: 'Roaster recipe', blurb: 'Published by the roaster for this coffee.', cls: 'src-roaster' },
    roaster_house_guide: { label: 'Roaster house guide', blurb: 'The roaster’s general recipe for this brewer, not tuned to this bean.', cls: 'src-house' },
    roaster_house_guide_incomplete: { label: 'House guide · gaps', blurb: 'The roaster’s general recipe leaves out a key number. Missing values are shown as not published.', cls: 'src-gap' },
    editorial_suggestion: { label: 'Goose suggestion', blurb: 'An editorial starting point, not published by the roaster.', cls: 'src-goose' },
  };

  const FLAGS = {
    Ethiopia: '🇪🇹', Kenya: '🇰🇪', Colombia: '🇨🇴', Brazil: '🇧🇷', Panama: '🇵🇦', Mexico: '🇲🇽',
    'Costa Rica': '🇨🇷', Ecuador: '🇪🇨', 'El Salvador': '🇸🇻', Guatemala: '🇬🇹', Nicaragua: '🇳🇮', Honduras: '🇭🇳',
  };

  // Picker checkboxes. `any` groups score a coffee by its best-matching box (Ethiopian OR Kenyan);
  // `all` groups average the boxes (fruity AND chocolatey).
  const GROUPS = [
    { id: 'roast', label: 'Roast', mode: 'any', weight: 2, items: [
      { id: 'light', label: 'Light roast' },
      { id: 'medium', label: 'Medium roast' },
      { id: 'dark', label: 'Dark roast' },
    ] },
    { id: 'body', label: 'Body & feel', mode: 'all', weight: 2, items: [
      { id: 'full', label: 'Full-bodied' },
      { id: 'delicate', label: 'Delicate' },
      { id: 'bright', label: 'Bright & juicy' },
    ] },
    { id: 'flavour', label: 'Flavours', mode: 'all', weight: 3, items: [
      { id: 'fruity', label: 'Fruity' },
      { id: 'berry', label: 'Berries' },
      { id: 'citrus', label: 'Citrus' },
      { id: 'stone', label: 'Stone fruit' },
      { id: 'tropical', label: 'Tropical' },
      { id: 'floral', label: 'Floral' },
      { id: 'tea', label: 'Tea-like' },
      { id: 'chocolate', label: 'Chocolatey' },
      { id: 'caramel', label: 'Caramel & honey' },
      { id: 'nutty', label: 'Nutty' },
      { id: 'boozy', label: 'Boozy & winey' },
    ] },
    { id: 'process', label: 'Process', mode: 'any', weight: 2, items: [
      { id: 'washed', label: 'Washed' },
      { id: 'natural', label: 'Natural' },
      { id: 'honey', label: 'Honey' },
      { id: 'fermented', label: 'Fermented / anaerobic' },
    ] },
    { id: 'origin', label: 'Origin', mode: 'any', weight: 2, items: [
      { id: 'Ethiopia', label: 'Ethiopian' },
      { id: 'Kenya', label: 'Kenyan' },
      { id: 'Colombia', label: 'Colombian' },
      { id: 'Brazil', label: 'Brazilian' },
      { id: 'Panama', label: 'Panamanian' },
      { id: 'Costa Rica', label: 'Costa Rican' },
      { id: 'Guatemala', label: 'Guatemalan' },
      { id: 'El Salvador', label: 'Salvadoran' },
      { id: 'Mexico', label: 'Mexican' },
      { id: 'Ecuador', label: 'Ecuadorian' },
      { id: 'Honduras', label: 'Honduran' },
      { id: 'Nicaragua', label: 'Nicaraguan' },
    ] },
    { id: 'species', label: 'Plant', mode: 'any', weight: 1.5, items: [
      { id: 'arabica', label: 'Arabica' },
      { id: 'robusta', label: 'Robusta' },
      { id: 'geisha', label: 'Geisha' },
      { id: 'decaf', label: 'Decaf' },
    ] },
  ];

  // Flavour words, matched against the roaster's tasting descriptors.
  const WORDS = {
    berry: ['berry', 'berries', 'blueberry', 'strawberry', 'raspberry', 'currant', 'grape', 'pomegranate', 'cherry'],
    citrus: ['citrus', 'lemon', 'lime', 'orange', 'bergamot', 'kumquat', 'grapefruit'],
    stone: ['peach', 'apricot', 'nectarine', 'plum', 'stone fruit', 'cherry'],
    tropical: ['mango', 'lychee', 'passion fruit', 'pineapple', 'papaya', 'guava', 'tropical', 'kiwi', 'melon', 'honeydew'],
    otherFruit: ['apple', 'pear', 'fig', 'raisin', 'dried fruit', 'dark fruit', 'fruit', 'juice', 'sangria', 'coffee cherry'],
    floral: ['jasmine', 'floral', 'flower', 'hibiscus', 'lavender', 'elderflower', 'bergamot', 'nectar', 'florals'],
    tea: ['tea', 'rooibos', 'oolong'],
    chocolate: ['chocolate', 'cocoa', 'ganache'],
    caramel: ['caramel', 'honey', 'sugar', 'toffee', 'vanilla', 'brûlée', 'nougat', 'praline', 'candy', 'syrup', 'muffin', 'waffle', 'shortbread', 'macarons', 'banana bread'],
    nutty: ['almond', 'nut', 'pecan', 'macadamia', 'praline', 'nougat', 'amaretti', 'cantuccini', 'hazelnut'],
    boozy: ['cognac', 'rum', 'port wine', 'wine', 'sangria', 'champagne', 'whisky'],
  };

  const wordRe = (w) => new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  // the tasting descriptors (not words) that mention any of `words`, so "chocolate ganache" counts once
  const has = (descriptors, words) => descriptors.filter((d) => words.some((w) => wordRe(w).test(d)));
  const fromCount = (n) => (n >= 2 ? 1 : n === 1 ? 0.85 : 0);
  const clamp = (x) => Math.max(0, Math.min(1, x));

  // 0..1 affinity for every picker box, plus the tasting words behind each flavour.
  function profile(c) {
    const tasting = c.tasting.join(' · ').toLowerCase();
    const descriptors = c.tasting.map((t) => t.toLowerCase());
    const proc = c.process.toLowerCase();
    const roast = c.roast.toLowerCase();
    const varietal = c.varietal.toLowerCase();
    const f = {}, hits = {};

    for (const k of Object.keys(WORDS)) hits[k] = has(descriptors, WORDS[k]);
    for (const k of ['berry', 'citrus', 'stone', 'tropical', 'floral', 'tea', 'chocolate', 'caramel', 'nutty']) f[k] = fromCount(hits[k].length);
    f.boozy = Math.max(fromCount(hits.boozy.length), /rum|barrel/.test(proc) ? 0.75 : 0);
    const fruit = new Set([...hits.berry, ...hits.citrus, ...hits.stone, ...hits.tropical, ...hits.otherFruit]).size;
    f.fruity = clamp(fruit * 0.34 + (c.flavour_style === 'fruity' ? 0.3 : 0));
    hits.fruity = [...new Set([...hits.berry, ...hits.citrus, ...hits.stone, ...hits.tropical, ...hits.otherFruit])];

    // roast
    const isMediumStrong = /medium.?strong/.test(roast);
    const isLightMedium = /light.?medium/.test(roast);
    const isMedium = !isLightMedium && !isMediumStrong && /medium/.test(roast);
    f.light = isLightMedium ? 0.6 : (isMedium || isMediumStrong) ? 0.1 : 1;
    f.medium = isMedium ? 1 : isMediumStrong ? 0.8 : isLightMedium ? 0.7 : 0.15;
    f.dark = isMediumStrong ? 0.85 : isMedium ? 0.6 : isLightMedium ? 0.3 : 0;

    // process
    const fermented = /anaerobic|carbonic|maceration|yeast|ferment|cascara|tyoxidator/.test(proc);
    f.washed = /washed/.test(proc) ? (fermented ? 0.75 : 1) : 0;
    f.natural = /natural|tree-dried|slow dry/.test(proc) ? (fermented ? 0.75 : 1) : 0;
    f.honey = /honey/.test(proc) ? 1 : 0;
    f.fermented = fermented ? 1 : c.flavour_style === 'experimental' ? 0.5 : 0;

    // plant
    const robusta = /canephora|conilon|robusta/.test(varietal);
    f.robusta = robusta ? 1 : 0;
    f.arabica = robusta ? 0 : 1;
    f.geisha = /geisha|gesha/.test(varietal) ? 1 : 0;
    f.decaf = /decaf/.test(c.category) ? 1 : 0;

    // origin
    for (const it of GROUPS.find((g) => g.id === 'origin').items) f[it.id] = c.country === it.id ? 1 : 0;

    // body & feel
    const sweetHeavy = Math.max(f.chocolate, f.caramel, f.nutty);
    f.full = clamp((c.flavour_style === 'round' ? 0.45 : 0) + sweetHeavy * 0.35 +
      (f.natural || f.honey ? 0.15 : 0) + (f.medium >= 0.7 ? 0.2 : 0) + (robusta ? 0.6 : 0));
    f.delicate = clamp((c.flavour_style === 'delicate' ? 0.6 : 0) + Math.max(f.floral, f.tea) * 0.3 +
      (f.washed ? 0.15 : 0) + (f.geisha ? 0.15 : 0) - (robusta ? 1 : 0));
    f.bright = clamp(Math.max(f.citrus, f.berry, f.tropical) * 0.5 + (/kenya/i.test(c.country) ? 0.3 : 0) +
      (c.flavour_style === 'fruity' || c.flavour_style === 'delicate' ? 0.2 : 0) + (f.washed ? 0.1 : 0) +
      (/acidity|juice/.test(tasting) ? 0.2 : 0));

    return { f, hits };
  }

  const ITEM = new Map(GROUPS.flatMap((g) => g.items.map((it) => [it.id, Object.assign({ group: g.id }, it)])));

  // picks: array of item ids. Returns every coffee sorted best first, with score 0..100 and reasons.
  function rank(coffees, picks, { hideUnavailable = false } = {}) {
    const chosen = GROUPS.map((g) => ({ g, ids: g.items.map((i) => i.id).filter((id) => picks.includes(id)) })).filter((x) => x.ids.length);
    const totalW = chosen.reduce((s, x) => s + x.g.weight, 0);
    return coffees
      .filter((c) => !hideUnavailable || !/sold out/i.test(c.availability || ''))
      .map((c) => {
        const { f, hits } = profile(c);
        let sum = 0;
        const reasons = [];
        for (const { g, ids } of chosen) {
          const vals = ids.map((id) => f[id] || 0);
          sum += g.weight * (g.mode === 'any' ? Math.max(...vals) : vals.reduce((a, b) => a + b, 0) / vals.length);
          for (const id of ids) if ((f[id] || 0) >= 0.5) reasons.push({ id, label: ITEM.get(id).label, words: hits[id] || [] });
        }
        const flavourHits = picks.reduce((n, id) => n + ((hits[id] || []).length), 0);
        // nobody wants a surprise decaf
        const decafPenalty = f.decaf && !picks.includes('decaf') ? 15 : 0;
        const score = totalW ? Math.max(0, Math.round((sum / totalW) * 100) - decafPenalty) : 0;
        return { coffee: c, score, reasons, flavourHits };
      })
      .sort((a, b) => b.score - a.score || b.flavourHits - a.flavourHits ||
        Number(!!a.coffee.availability) - Number(!!b.coffee.availability) || a.coffee.name.localeCompare(b.coffee.name));
  }

  /* ---------- recipe helpers ---------- */

  // X-Ultra R.N.C notation: 60 clicks per rotation, 10 per number.
  function clicksToSetting(n) {
    const r = Math.floor(n / 60), rest = n % 60;
    return `${r}.${Math.floor(rest / 10)}.${rest % 10}`;
  }
  function settingToClicks(s) {
    const m = /^(\d+)\.([0-5])\.(\d)$/.exec(s);
    return m ? 60 * +m[1] + 10 * +m[2] + +m[3] : null;
  }

  function ratio(r) {
    if (r.dose_g == null || !r.water_g) return null;
    const x = r.water_g / r.dose_g;
    return '1:' + (Math.round(x * 10) / 10).toString().replace(/\.0$/, '');
  }

  const api = { METHODS, SOURCE_TYPES, FLAGS, GROUPS, profile, rank, clicksToSetting, settingToClicks, ratio };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CGMatch = api;
})(typeof window !== 'undefined' ? window : globalThis);
