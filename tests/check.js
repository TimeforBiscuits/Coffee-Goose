// Sanity checks for the catalog, matcher and brew log. Run: node tests/check.js
const fs = require('fs');
const path = require('path');
const M = require('../js/match.js');
const L = require('../js/log.js');
const G = require('../js/guide.js');
const I = require('../js/insights.js');

// load exactly as the app does: every file in data/index.json, merged by coffee id
const dataDir = path.join(__dirname, '..', 'data');
const read = (f) => JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'));
const files = read('index.json').files;
const catalog = M.mergeCatalogs(files.map(read));
const coffees = catalog.coffees;

let failures = 0;
function check(cond, msg) {
  if (!cond) { failures++; console.error('FAIL:', msg); }
}

// catalog shape (see data/SCHEMA.md)
check(catalog.schema_version === '2.0', 'schema 2.0');
check(coffees.length === 64, `expected 64 coffees (53 + 11 canephora), got ${coffees.length}`);
check(coffees.flatMap((c) => c.recipes).length === 192, 'expected 192 recipes');
check(catalog.roasters.length === 8 && catalog.roasters.filter((r) => r === 'Mókuska').length === 1, `8 roasters, Mókuska once: ${catalog.roasters}`);
check(coffees.filter((c) => /mr\.? toi/i.test(c.name)).length === 3, 'the three Mr Toi coffees stay separate');
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

// the roaster's published pours always survive into the plan ("to 115 g total", "(120 g total)")
for (const c of coffees) for (const r of c.recipes) {
  if (r.method !== 'v60_pour_over') continue;
  const totals = [...r.steps.join(' ').matchAll(/(\d+)\s*g\s+total/gi)].map((m) => +m[1]);
  const pours = G.guide(r).steps.filter((s) => s.to).map((s) => s.to);
  check(totals.every((t) => pours.includes(t)), `${c.id}: published totals ${totals} kept in ${pours}`);
}
check(plan('quijote--eliane-livio', 'v60_pour_over').steps.map((s) => `${s.time} ${s.to || ''}`).join(',') ===
  '0:00 45,0:40 115,1:15 190,1:50 270,3:00 ', 'addendum timed pours kept, 45 g bloom');

// best practice from the brew log
check(I.sentiment('not bitter at all').score > 0 && I.sentiment('sour and thin').score < 0, 'notes read as good or bad');
check(I.sentiment('best cup I have had').standout, 'superlatives stand out');
check(I.bestPractice([{ method: 'aeropress' }]).scored === 0, 'no ratings or notes: nothing to conclude');
{
  // the README example: 9 V60, 5 Switch, 2 AeroPress, and the AeroPress was the best cup
  const e = [];
  let d = 1;
  const add = (method, rating, notes, grind, extra = {}) =>
    e.push(Object.assign({ method, rating, notes, grinder_setting: grind, brewed_on: `2026-10-${String(d++).padStart(2, '0')}` }, extra));
  [3, 4, 3, 4, 3, 4, 3, 3, 4].forEach((r, i) => add('v60_pour_over', r, ['Fine', 'Nice and sweet', 'A bit sour'][i % 3], i < 5 ? '2.3.1' : '2.2.7'));
  [3, 3, 4, 2, 3].forEach((r) => add('v60_switch_immersion', r, 'okay', '2.4.0'));
  add('aeropress', 5, 'Incredible flavor, best cup I’ve had out of this bean', '1.4.5', { dose_g: 15, water_g: 225, brew_time: '2:10' });
  add('aeropress', 4, 'Really good again', '1.4.5', { dose_g: 15, water_g: 225 });
  const b = I.bestPractice(e);
  check(b.method === 'aeropress' && b.settings.grind === '1.4.5' && b.settings.dose_g === 15 && b.settings.brew_time === '2:10', `AeroPress wins: ${JSON.stringify(b.settings)}`);
  check(/best cup/.test(b.quote) && b.confidence === 'high', 'quotes the best note');
  // ...but one lucky 5-star doesn't beat a long run of 5-stars
  const steady = [5, 5, 5, 5, 5, 5].map((r) => ({ method: 'v60_pour_over', rating: r, grinder_setting: '2.3.0' }));
  check(I.bestPractice(steady.concat([{ method: 'aeropress', rating: 5 }, { method: 'aeropress', rating: 2 }])).method === 'v60_pour_over', 'consistency beats one lucky brew');
  // grind within a brewer
  const grinds = [['2.3.0', 3], ['2.3.0', 3], ['2.2.6', 5], ['2.2.6', 4]].map(([g, r]) => ({ method: 'v60_pour_over', rating: r, grinder_setting: g }));
  check(I.bestPractice(grinds).settings.grind === '2.2.6', 'best grind picked');
}

// Fahrenheit
check(G.toF(92) === 198 && G.toF(100) === 212, 'C to F');
check(G.tempsToF('bloom at 75–80°C, brew at 94°C') === 'bloom at 167–176°F, brew at 201°F', 'temperatures in text');

// matcher
const top = (picks, n = 4) => M.rank(coffees, picks).slice(0, n).map((x) => x.coffee);
check(top(['robusta']).every((c) => /canephora|conilon|robusta/i.test(c.varietal + (c.species || ''))), 'robusta finds canephoras');
check(M.rank(coffees, ['robusta']).filter((x) => x.score === 100).length === 12, 'all 12 canephoras score 100% for robusta');
check(top(['Ethiopia', 'natural']).every((c) => c.country === 'Ethiopia' && /natural/i.test(c.process)), 'Ethiopian naturals');
check(top(['Colombia', 'Kenya']).every((c) => ['Colombia', 'Kenya'].includes(c.country)), 'origins are either/or');
check(top(['dark']).every((c) => M.roastLevel(c.roast) >= 0.9), 'dark finds the dark roasts');
check(M.roastLevel('Light') < M.roastLevel('Light–medium') && M.roastLevel('Medium') < M.roastLevel('Medium-dark espresso') &&
  M.roastLevel('Medium-dark espresso') < M.roastLevel('Dark espresso (5/5 per collection)'), 'roast scale is in order');
check(Math.abs(M.roastLevel('Coffee / filter-style roast; intensity 2.5/4') - 0.525) < 0.01, 'intensity x/y read');
check(top(['dark', 'robusta', 'Vietnam']).every((c) => c.country === 'Vietnam'), 'dark Vietnamese robusta');
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
