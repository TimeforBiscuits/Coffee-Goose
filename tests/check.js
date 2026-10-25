// Sanity checks for the catalog, matcher and brew log. Run: node tests/check.js
const fs = require('fs');
const path = require('path');
const M = require('../js/match.js');
const L = require('../js/log.js');
const G = require('../js/guide.js');

const catalog = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'catalog.json'), 'utf8'));
const coffees = catalog.coffees;

let failures = 0;
function check(cond, msg) {
  if (!cond) { failures++; console.error('FAIL:', msg); }
}

// catalog shape (see data/SCHEMA.md)
check(catalog.schema_version === '2.0', 'schema 2.0');
check(coffees.length === 53, `expected 53 coffees, got ${coffees.length}`);
check(new Set(coffees.map((c) => c.id)).size === coffees.length, 'coffee ids are unique');
for (const c of coffees) {
  check(catalog.roasters.includes(c.roaster), `${c.id}: known roaster`);
  check(M.FLAGS[c.country], `${c.id}: flag for ${c.country}`);
  check(c.tasting.length && c.bio, `${c.id}: has tasting notes and a bio`);
  check(c.recipes.length === 3, `${c.id}: three recipes`);
  for (const m of M.METHODS) check(c.recipes.some((r) => r.method === m.id), `${c.id}: has ${m.id}`);
  for (const r of c.recipes) {
    const g = r.grind_x_ultra;
    check(M.SOURCE_TYPES[r.source_type], `${c.id}/${r.method}: known source type ${r.source_type}`);
    check(r.steps.length > 0 && r.water_g > 0, `${c.id}/${r.method}: steps and water`);
    check(M.settingToClicks(g.start_setting) === g.start_clicks, `${c.id}/${r.method}: ${g.start_setting} = ${g.start_clicks} clicks`);
    check(M.clicksToSetting(g.start_clicks) === g.start_setting, `${c.id}/${r.method}: clicks render back to ${g.start_setting}`);
    check(g.range_clicks[0] <= g.start_clicks && g.start_clicks <= g.range_clicks[1], `${c.id}/${r.method}: start inside range`);
    g.range_settings.forEach((s, i) => check(M.settingToClicks(s) === g.range_clicks[i], `${c.id}/${r.method}: range ${s}`));
  }
}
const barn = coffees.find((c) => c.roaster === 'The Barn');
check(barn.recipes.find((r) => r.method === 'aeropress').dose_g === null, 'The Barn AeroPress dose stays null');
check(M.ratio({ dose_g: null, water_g: 230 }) === null, 'no ratio without a dose');
check(M.ratio({ dose_g: 15, water_g: 250 }) === '1:16.7', 'ratio rounds to one decimal');

// guided brew plans: every recipe gets a timer-ready plan that pours all the water
for (const c of coffees) for (const r of c.recipes) {
  const p = G.guide(r);
  const id = `${c.id}/${r.method}`;
  check(p.steps.length >= 3 && p.prep.length, `${id}: plan has prep and steps`);
  check(p.steps[0].t === 0, `${id}: first step at 0:00`);
  check(p.steps.every((s, i) => i === 0 || s.t > p.steps[i - 1].t), `${id}: step times go up`);
  const pours = p.steps.filter((s) => s.to != null);
  check(pours.length && pours[pours.length - 1].to === r.water_g, `${id}: pours reach ${r.water_g} g`);
  check(pours.every((s, i) => i === 0 || s.to > pours[i - 1].to), `${id}: each pour adds water`);
  check(p.steps.every((s) => s.text && !/undefined|NaN/.test(s.text + s.sub)), `${id}: step text is clean`);
  if (r.method === 'v60_pour_over') check(pours.length >= 3, `${id}: pour-over split into separate pours`);
}
const plan = (id, m) => G.guide(coffees.find((c) => c.id === id).recipes.find((r) => r.method === m));
const daily = plan('leuchtfeuer--caballero-pedernal', 'v60_pour_over').steps.map((s) => `${s.time} ${s.to || ''}`);
check(daily.join(',') === '0:00 40,0:30 120,1:00 180,1:30 240,2:00 300,3:00 ', `Leuchtfeuer five pours, drawdown mid-window: ${daily}`);
check(plan('the-barn--jairo-arcila', 'v60_pour_over').steps.map((s) => s.time).join(',') === '0:00,0:30,1:00,1:30,2:30', 'roaster times kept');
check(plan('mokuska--good-night', 'v60_pour_over').steps.filter((s) => s.to).map((s) => s.to).join(',') === '50,125,200,250', '"then … then" pours');
check(G.targetSeconds('2:30–3:30') === 180 && G.targetSeconds('~2:15') === 135 && G.targetSeconds('not specified') === null, 'target times');

// Fahrenheit
check(G.toF(92) === 198 && G.toF(100) === 212, 'C to F');
check(G.tempsToF('bloom at 75–80°C, brew at 94°C') === 'bloom at 167–176°F, brew at 201°F', 'temperatures in text');

// matcher
const top = (picks, n = 4) => M.rank(coffees, picks).slice(0, n).map((x) => x.coffee);
check(top(['robusta'], 1)[0].varietal.includes('canephora'), 'robusta finds the canephora');
check(top(['Ethiopia', 'natural']).every((c) => c.country === 'Ethiopia' && /natural/i.test(c.process)), 'Ethiopian naturals');
check(top(['Colombia', 'Kenya']).every((c) => ['Colombia', 'Kenya'].includes(c.country)), 'origins are either/or');
check(top(['dark']).every((c) => /medium/i.test(c.roast)), 'dark leans to the most developed roasts');
check(top(['light', 'floral']).every((c) => /^light/i.test(c.roast)), 'light + floral stays light');
check(!top(['chocolate', 'caramel']).some((c) => /decaf/.test(c.category)), 'decaf only when asked for');
check(top(['decaf']).every((c) => /decaf/.test(c.category)), 'decaf box finds decafs');
check(top(['fermented', 'boozy']).every((c) => /anaerobic|carbonic|ferment|yeast|maceration/i.test(c.process)), 'fermented + boozy');
check(M.rank(coffees, ['geisha'], { hideUnavailable: true }).every((x) => !/sold out/i.test(x.coffee.availability || '')), 'hide sold out');
for (const g of M.GROUPS) for (const it of g.items) {
  check(M.rank(coffees, [it.id])[0].score > 0, `some coffee matches "${it.label}"`);
}

// brew log
const mem = { data: {}, getItem(k) { return this.data[k] ?? null; }, setItem(k, v) { this.data[k] = v; } };
const log = L.createStore(mem);
const e = log.add({ coffee_id: 'mokuska--adnan', method: 'aeropress', brewed_on: '2026-10-25', rating: 4, acidity_1_to_5: 3, notes: ' tasty ', dose_g: '' });
check(e && e.notes === 'tasty' && !('dose_g' in e) && e.acidity_1_to_5 === 3, 'log entry cleaned');
check(L.createStore(mem).forRecipe('mokuska--adnan', 'aeropress').length === 1, 'log persists');
const backup = log.exportJSON();
const other = L.createStore({ data: {}, getItem() { return null; }, setItem() {} });
check(other.importJSON(backup) === 1 && other.importJSON(backup) === 0, 'restore merges without duplicates');
log.remove(e.id);
check(log.all().length === 0, 'log entry removed');

// summary
const recipes = coffees.flatMap((c) => c.recipes);
const bySource = {};
for (const r of recipes) bySource[r.source_type] = (bySource[r.source_type] || 0) + 1;
console.log(`${coffees.length} coffees, ${recipes.length} recipes`);
for (const [k, v] of Object.entries(bySource)) console.log(`  ${k}: ${v}`);

if (failures) { console.error(`\n${failures} check(s) failed`); process.exit(1); }
console.log('All checks passed.');
