/* Coffee Goose — brew log. Kept on this device, separate from the roaster catalog,
   keyed by coffee_id + method so a catalog refresh can't overwrite it. */
(function (root) {
  'use strict';

  const KEY = 'coffeeGoose.log.v1';
  const SCALES = ['acidity_1_to_5', 'sweetness_1_to_5', 'body_1_to_5', 'clarity_1_to_5'];

  function createStore(storage) {
    let entries = read();

    function read() {
      try {
        const d = JSON.parse(storage.getItem(KEY));
        return d && Array.isArray(d.entries) ? d.entries : [];
      } catch (e) { return []; }
    }
    function write() {
      try { storage.setItem(KEY, JSON.stringify({ version: 1, entries })); return true; } catch (e) { return false; }
    }
    const newest = (a, b) => (b.brewed_on || '').localeCompare(a.brewed_on || '') || (b.created || '').localeCompare(a.created || '');

    function clean(e) {
      const out = {
        id: e.id || 'b' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        coffee_id: String(e.coffee_id || ''),
        method: String(e.method || ''),
        brewed_on: String(e.brewed_on || ''),
        created: e.created || new Date().toISOString(),
        rating: Math.max(0, Math.min(5, +e.rating || 0)),
      };
      for (const k of SCALES) if (+e[k] >= 1 && +e[k] <= 5) out[k] = +e[k];
      for (const k of ['bean_roast_date', 'grinder_setting', 'flavours_observed', 'change_next_time', 'notes']) {
        if (e[k] != null && String(e[k]).trim()) out[k] = String(e[k]).trim();
      }
      for (const k of ['dose_g', 'water_g', 'temperature_c']) if (e[k] !== '' && e[k] != null && isFinite(+e[k])) out[k] = +e[k];
      return out;
    }

    return {
      all: () => entries.slice().sort(newest),
      forRecipe: (coffeeId, method) => entries.filter((e) => e.coffee_id === coffeeId && e.method === method).sort(newest),
      count: (coffeeId) => entries.filter((e) => e.coffee_id === coffeeId).length,
      add(e) { const c = clean(e); entries.push(c); return write() ? c : null; },
      remove(id) { entries = entries.filter((e) => e.id !== id); write(); },
      exportJSON: () => JSON.stringify({ app: 'Coffee Goose', version: 1, exported: new Date().toISOString(), entries }, null, 2),
      // Merges a backup in; entries already here (same id) are kept as they are.
      importJSON(text) {
        const d = JSON.parse(text);
        const list = Array.isArray(d) ? d : d && d.entries;
        if (!Array.isArray(list)) throw new Error('That file isn’t a Coffee Goose backup.');
        const have = new Set(entries.map((e) => e.id));
        let added = 0;
        for (const e of list) {
          if (!e || !e.coffee_id || have.has(e.id)) continue;
          entries.push(clean(e));
          added++;
        }
        write();
        return added;
      },
    };
  }

  const api = { createStore, SCALES };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CGLog = api;
})(typeof window !== 'undefined' ? window : globalThis);
