/* Coffee Goose 95 — app */
(function () {
  'use strict';

  const M = window.CGMatch;
  const VERSION = window.CG_VERSION || 'dev';
  const STORE_KEY = 'coffeeGoose.v1';

  const ROASTER_STYLE = {
    'Mókuska': { emoji: '🐿️', c: '#8cf02c', t: '#000' },
    'Leuchtfeuer': { emoji: '🔦', c: '#ffd60a', t: '#000' },
    'The Barn': { emoji: '🌾', c: '#c2132f', t: '#fff' },
  };
  const FALLBACK_STYLE = { emoji: '☕', c: '#00bfa5', t: '#000' };
  const RATING_LABELS = ['', 'Down the drain', 'Meh', 'Solid cup', 'Really good', 'Honk-worthy!'];
  const SCALE_LABELS = { acidity_1_to_5: 'Acidity', sweetness_1_to_5: 'Sweetness', body_1_to_5: 'Body', clarity_1_to_5: 'Clarity' };

  const TIPS = [
    ['Natural process', 'The whole coffee cherry dries in the sun, fruit and all, before the seed comes out. Expect jammy, fruit-forward cups.'],
    ['Washed process', 'The fruit is stripped off before the beans dry. Washed coffees tend to taste cleaner, brighter and more transparent.'],
    ['Honey process', 'Some of the sticky fruit flesh (mucilage) stays on the bean while it dries. Somewhere between washed and natural.'],
    ['Carbonic maceration', 'Borrowed from winemaking: whole cherries ferment in sealed, CO₂-rich tanks. Often wild, boozy, candied fruit.'],
    ['Hario Switch sizes', 'Most Goose immersion recipes (20 g / 320 g) need the Switch 03 (360 mL). On a Switch 02, use 12 g / 180 g at the same time and temperature.'],
    ['Reading the X-Ultra', 'Settings are R.N.C: full rotations, dial number (0–5), extra clicks (0–9). 2.1.5 = 2×60 + 1×10 + 5 = 135 clicks from zero.'],
    ['Finding zero', 'Turn the X-Ultra counter-clockwise until the burrs just start to resist. Stop there. Don’t overtighten.'],
    ['Dialling in', 'Sour, thin or hollow? Go a few clicks finer. Bitter, drying or slow? Go coarser. Change one thing at a time.'],
    ['Grind numbers are a start', 'Every X-Ultra setting in Coffee Goose is an editorial starting estimate, not something the roaster published. Your tongue wins.'],
    ['Missing numbers stay missing', 'The Barn’s AeroPress guide doesn’t publish a dose, so Coffee Goose shows “not published” instead of inventing one.'],
    ['Geisha', 'The Geisha (Gesha) variety comes from the Gesha area of Ethiopia and made its name in Panama. Famous for jasmine and bergamot.'],
    ['Rinse your paper', 'Pour hot water through the paper filter before brewing. It washes out the papery taste and warms the brewer.'],
    ['Grams, not millilitres', 'Weigh your water: 1 g of water is 1 mL, and a scale is far more accurate than a jug.'],
    ['Robusta', 'Coffea canephora, aka robusta, is hardier than arabica and carries roughly twice the caffeine. Party On from Mókuska is one.'],
  ];

  let catalog = null;
  let coffees = [];
  const byId = new Map();
  let state = loadState();
  let beanListExpanded = !state.bean;
  let activeTimer = null; // { stop() }

  let storage;
  try { storage = window.localStorage; } catch (e) { storage = { getItem: () => null, setItem: () => {} }; }
  const log = window.CGLog.createStore(storage);

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const layer = $('#modal-layer');
  const wide = window.matchMedia('(min-width: 900px)');

  /* ============ state ============ */

  function loadState() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(STORE_KEY)); } catch (e) { /* ignore */ }
    s = s && typeof s === 'object' ? s : {};
    return Object.assign({ tab: 'brew', roaster: null, bean: null, method: null, picks: [], hideSold: false, tips: true, tipSeen: '', tipIndex: 0 }, s);
  }
  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* private mode etc. */ }
  }

  /* ============ catalog ============ */

  async function loadCatalog() {
    const res = await fetch('data/catalog.json', { cache: 'no-cache' });
    if (!res.ok) throw new Error('Could not load data/catalog.json');
    catalog = await res.json();
    coffees = catalog.coffees;
    byId.clear();
    for (const c of coffees) byId.set(c.id, c);
    if (state.bean && !byId.has(state.bean)) Object.assign(state, { bean: null, roaster: null });
    if (state.roaster && !catalog.roasters.includes(state.roaster)) state.roaster = null;
  }

  const roasterStyle = (name) => ROASTER_STYLE[name] || FALLBACK_STYLE;
  const methodInfo = (id) => M.METHODS.find((m) => m.id === id);
  const recipeFor = (c, method) => c.recipes.find((r) => r.method === method);
  const flag = (c) => M.FLAGS[c.country] || '🌍';
  const roastShort = (c) => c.roast.replace(/\s*\(.*\)/, '');
  const processShort = (c) => c.process.split(';')[0];

  function coffeeTags(c) {
    const t = [];
    if (/decaf/.test(c.category)) t.push('<span class="tag decaf">DECAF</span>');
    if (/sold out/i.test(c.availability || '')) t.push('<span class="tag out">SOLD OUT</span>');
    else if (c.availability) t.push('<span class="tag last">LAST CHANCE</span>');
    if (log.count(c.id)) t.push(`<span class="tag logged">📓${log.count(c.id)}</span>`);
    return t.join('');
  }

  // Escapes, then allows **bold** and bare links. Catalog text is data, never HTML.
  function richText(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
      .replace(/https?:\/\/[^\s<]+[^\s<.,;:)]/g, (u) => `<a href="${u}" target="_blank" rel="noopener">${u.replace(/^https?:\/\//, '')}</a>`);
  }

  /* ============ tabs ============ */

  const TAB_TITLES = { brew: 'Brew Station', picker: 'Bean Picker', log: 'Brew Log' };
  function showTab(tab) {
    state.tab = tab;
    saveState();
    for (const t of Object.keys(TAB_TITLES)) $('#pane-' + t).hidden = t !== tab;
    $$('.toolbar .tab').forEach((b) => {
      const on = b.dataset.action === tab;
      b.classList.toggle('pressed', on);
      b.setAttribute('aria-selected', String(on));
    });
    $('#main-title').textContent = 'Coffee Goose — ' + TAB_TITLES[tab];
    $('#task-main span').textContent = TAB_TITLES[tab];
    if (tab === 'log') renderLog();
    if (tab === 'picker') setStatus('Tick a few boxes, then Find my coffee.');
    if (tab === 'brew') setStatus(brewStatus());
  }

  function brewStatus() {
    const c = byId.get(state.bean);
    if (!c) return state.roaster ? `Pick a ${state.roaster} bean.` : 'Pick a roaster to start.';
    const m = methodInfo(state.method);
    return m ? `${c.name} · ${m.long}` : `${c.name}: now pick a brewer.`;
  }

  /* ============ brew pane ============ */

  function renderRoasters() {
    $('#roasters').innerHTML = catalog.roasters.map((r) => {
      const s = roasterStyle(r);
      const n = coffees.filter((c) => c.roaster === r).length;
      return `<button class="tile ${state.roaster === r ? 'selected' : ''}" style="--c:${s.c};--t:${s.t}" data-roaster="${esc(r)}" aria-pressed="${state.roaster === r}">
        <span class="emoji">${s.emoji}</span><span class="name">${esc(r)}</span><span class="count">${n} beans</span></button>`;
    }).join('');
  }

  function renderBeans() {
    const list = $('#bean-list');
    if (!state.roaster) {
      list.innerHTML = '<div class="empty-msg">⬆️ Pick a roaster first.</div>';
      list.classList.remove('collapsed');
      return;
    }
    const beans = coffees.filter((c) => c.roaster === state.roaster);
    const collapsed = !beanListExpanded && beans.some((c) => c.id === state.bean);
    list.classList.toggle('collapsed', collapsed);
    list.innerHTML = beans.map((c) => `
      <button class="bean ${c.id === state.bean ? 'on' : ''}" data-bean="${esc(c.id)}" aria-pressed="${c.id === state.bean}">
        <span class="flag" aria-hidden="true">${flag(c)}</span>
        <span class="bean-main">
          <span class="bean-name">${esc(c.name)}</span>
          <span class="bean-sub">${esc(c.country)} · ${esc(processShort(c))} · ${esc(roastShort(c))}</span>
        </span>
        <span class="bean-tags">${coffeeTags(c)}</span>
      </button>`).join('') +
      (collapsed ? `<button class="more" data-expand>Show all ${beans.length} ${esc(state.roaster)} beans</button>` : '');
  }

  function renderCoffeeCard() {
    const card = $('#coffee-card');
    const c = byId.get(state.bean);
    if (!c) { card.innerHTML = ''; return; }
    const facts = [
      ['Origin', [c.region, c.country].filter(Boolean).join(', ')],
      ['Producer', c.producer], ['Farm', c.farm], ['Variety', c.varietal],
      ['Process', c.process], ['Roast', c.roast],
      ['Altitude', c.altitude_m != null ? `${c.altitude_m} m` : ''],
      ['Category', c.category.replace(/;/g, ' ·')],
      ['Checked', c.checked_on + (c.availability ? ` (${c.availability.toLowerCase()})` : '')],
    ].filter(([, v]) => v);
    card.innerHTML = `
      <article class="coffee-card sunken">
        <div class="cc-head">
          <span class="cc-flag" aria-hidden="true">${flag(c)}</span>
          <div>
            <h2 class="cc-name">${esc(c.name)}</h2>
            <div class="cc-sub">${esc(c.roaster)} · ${esc(c.country)} · ${esc(processShort(c))} · ${esc(roastShort(c))}</div>
          </div>
        </div>
        <div class="chips">${c.tasting.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div>
        <p class="cc-bio">${esc(c.bio)}</p>
        ${c.personal_tasting_observation ? `<p class="legacy" style="margin-top:8px">📝 <b>Your earlier note:</b> ${esc(c.personal_tasting_observation)}</p>` : ''}
        <details class="cc-more">
          <summary>More about this coffee</summary>
          <dl class="facts">${facts.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
          <p class="cc-bio"><b>Brewing hunch:</b> ${esc(c.recommendation)}</p>
          ${c.warnings.map((w) => `<p class="caveat">⚠️ ${esc(w)}</p>`).join('')}
          <p class="small" style="margin:8px 0 0">Tasting words are the roaster’s, not measured results.</p>
          <div class="cc-actions"><a class="btn small" href="${esc(c.url)}" target="_blank" rel="noopener">🔗 Roaster page</a></div>
        </details>
      </article>`;
  }

  function renderMethods() {
    const box = $('#methods');
    const c = byId.get(state.bean);
    if (!c) {
      box.innerHTML = '<p class="methods-empty">Pick a bean, then choose how you’re brewing it.</p>';
      return;
    }
    box.innerHTML = M.METHODS.map((m) => {
      const r = recipeFor(c, m.id);
      const src = r ? M.SOURCE_TYPES[r.source_type] : null;
      return `<button class="tile method-tile ${state.method === m.id ? 'selected' : ''}" style="--c:${m.c};--t:${m.t}" data-method="${m.id}" aria-pressed="${state.method === m.id}" ${r ? '' : 'disabled'}>
        <img src="${m.icon}" alt="">
        <span class="name">${m.label}</span>
        <span class="src">${src ? esc(src.label) : 'No recipe'}</span></button>`;
    }).join('');
  }

  function renderRecipeInline() {
    const host = $('#recipe-inline');
    const c = byId.get(state.bean);
    if (!wide.matches) { host.innerHTML = ''; return; }
    stopTimer();
    host.innerHTML = '';
    if (!c || !state.method || !recipeFor(c, state.method)) {
      host.innerHTML = c ? '<div class="empty-msg">⬆️ Pick a brewer to see the recipe.</div>' : '';
      return;
    }
    host.append(buildRecipe(c, state.method, { onMethod: (m) => chooseMethod(m) }));
  }

  function renderBrew() {
    renderRoasters();
    renderBeans();
    renderCoffeeCard();
    renderMethods();
    renderRecipeInline();
    renderStatusCount();
    if (state.tab === 'brew') setStatus(brewStatus());
  }

  function chooseRoaster(r) {
    if (state.roaster !== r) Object.assign(state, { roaster: r, bean: null });
    beanListExpanded = true;
    saveState();
    renderBrew();
    if (!wide.matches) scrollPaneTo($('#bean-list').closest('.groupbox'));
  }

  function chooseBean(id) {
    state.bean = id;
    beanListExpanded = false;
    saveState();
    renderBrew();
    if (!wide.matches) scrollPaneTo($('#coffee-card'));
    else $('#brew-right').scrollTop = 0;
  }

  function chooseMethod(m) {
    state.method = m;
    saveState();
    renderMethods();
    setStatus(brewStatus());
    if (wide.matches) renderRecipeInline();
    else openRecipeWindow(state.bean, m);
  }

  function scrollPaneTo(el) {
    if (!el) return;
    const pane = $('#pane-brew');
    pane.scrollTo({ top: el.offsetTop - pane.offsetTop - 6, behavior: 'smooth' });
  }

  // Jump to a coffee from the picker or the log.
  function goToCoffee(id, method) {
    const c = byId.get(id);
    if (!c) return;
    while (layer.lastElementChild) closeWindow(layer.lastElementChild);
    Object.assign(state, { roaster: c.roaster, bean: c.id });
    if (method) state.method = method;
    beanListExpanded = false;
    saveState();
    showTab('brew');
    renderBrew();
    if (wide.matches) {
      const el = $('.bean.on');
      if (el) el.scrollIntoView({ block: 'nearest' });
      $('#brew-right').scrollTop = 0;
    } else if (method) {
      openRecipeWindow(id, method);
    } else {
      scrollPaneTo($('#coffee-card'));
    }
  }

  /* ============ recipe ============ */

  function openRecipeWindow(coffeeId, method) {
    const c = byId.get(coffeeId);
    let win;
    const mount = (m) => {
      stopTimer();
      const body = $('.modal-body', win);
      body.innerHTML = '';
      body.append(buildRecipe(c, m, { onMethod: (next) => { state.method = next; saveState(); renderMethods(); mount(next); body.scrollTop = 0; } }));
      $('.tb-title', win).textContent = `${c.name} — ${methodInfo(m).long}`;
      $('.tb-icon', win).src = methodInfo(m).icon;
    };
    win = openWindow({ title: c.name, icon: methodInfo(method).icon, body: '', cls: 'recipe-win' });
    win._onClose = () => stopTimer();
    mount(method);
  }

  function buildRecipe(c, method, { onMethod }) {
    const r = recipeFor(c, method);
    const m = methodInfo(method);
    const g = r.grind_x_ultra;
    const src = M.SOURCE_TYPES[r.source_type] || { label: r.source_type, blurb: '', cls: 'src-goose' };
    const ratio = M.ratio(r);
    const el = document.createElement('div');
    el.className = 'recipe sunken';

    const stat = (label, val, sub = '', cls = '') =>
      `<div class="stat sunken ${cls}"><div class="stat-label">${label}</div><div class="stat-val ${String(val).length > 6 ? 'long' : ''}">${val}</div>${sub ? `<div class="stat-sub">${sub}</div>` : ''}</div>`;
    const missing = (label, why) => stat(label, 'Not published', why, 'missing');
    // "3:30 closed steep, then drain" → big 3:30, the words underneath
    const timeStat = (t) => {
      const m = /^(approximately\s*|~)?(\d{1,2}:\d{2}(?:–\d{1,2}:\d{2})?)\s*(.*)$/i.exec(t);
      if (!m) return missing('Time', esc(t));
      const big = (m[1] ? '~' : '') + m[2];
      return stat(m[3] ? 'Steep' : 'Total time', esc(big), esc(m[3].replace(/^,\s*/, '')));
    };

    // a little dial: the start setting within its suggested range
    const lo = g.range_clicks[0], hi = g.range_clicks[1];
    const span = 20, from = g.start_clicks - span, to = g.start_clicks + span;
    const ticks = [];
    for (let i = 0; i < 21; i++) {
      const v = from + (i * (to - from)) / 20;
      const cls = Math.abs(v - g.start_clicks) < 1 ? 'at' : v >= lo && v <= hi ? 'in' : '';
      ticks.push(`<span class="${cls}"></span>`);
    }

    el.innerHTML = `
      <div class="recipe-head">
        <img src="${m.icon}" alt="">
        <div>
          <h2 class="rh-title">${esc(c.name)}</h2>
          <div class="rh-sub">${flag(c)} ${esc(c.roaster)} · ${esc(m.long)}</div>
        </div>
      </div>
      <div class="method-tabs" role="tablist">
        ${M.METHODS.map((x) => `<button class="btn ${x.id === method ? 'pressed' : ''}" data-m="${x.id}" role="tab" aria-selected="${x.id === method}" ${recipeFor(c, x.id) ? '' : 'disabled'}><img src="${x.icon}" alt="">${x.label}</button>`).join('')}
      </div>
      <div class="src-badge ${src.cls}">
        <span>${r.source_type === 'editorial_suggestion' ? '🪿' : r.source_type === 'roaster_house_guide_incomplete' ? '⚠️' : '✅'}</span>
        <span><b>${esc(src.label)}</b><br>${esc(src.blurb)}</span>
      </div>

      <div class="stats">
        ${r.dose_g != null ? stat('Coffee', `${r.dose_g}<small> g</small>`) : missing('Coffee', 'Roaster left it out')}
        ${stat('Water', `${r.water_g}<small> g</small>`)}
        ${ratio ? stat('Ratio', ratio) : stat('Ratio', '—', 'needs a dose')}
        ${r.temperature_c != null ? stat('Water temp', `${r.temperature_c}<small>°C</small>`) : missing('Water temp', 'Roaster left it out')}
        ${timeStat(r.target_time)}
        ${stat('X-Ultra', esc(g.start_setting), `${g.start_clicks} clicks`, 'grind')}
      </div>

      <div class="recipe-cols">
        <div>
          <h3><span class="grow">Steps</span>
            <span class="timer">
              <span class="timer-face" aria-live="off">0:00</span>
              <button class="btn" data-timer="go">▶ Start</button>
              <button class="btn" data-timer="reset" aria-label="Reset timer">↺</button>
            </span>
          </h3>
          <ol class="steps-list">
            ${r.steps.map((s) => {
              const t = M.stepTime(s);
              const text = t != null ? esc(s).replace(/^((?:by\s+)?\d{1,2}:\d{2})/i, '<span class="t">$1</span>') : richText(s);
              return `<li data-t="${t == null ? '' : t}"><span>${text}</span></li>`;
            }).join('')}
          </ol>
          <p class="target"><b>Target:</b> ${esc(r.target_time)}</p>

          ${r.notes ? `<h3>Notes</h3><div class="notes"><p>${richText(r.notes)}</p></div>` : ''}
          ${r.source_url ? `<p class="small">Source: <a href="${esc(r.source_url)}" target="_blank" rel="noopener">${esc(r.source_url.replace(/^https?:\/\//, ''))}</a></p>` : ''}
        </div>
        <div>
          <h3>Grind · ${esc(g.model)}</h3>
          <div class="grind-box">
            <div class="grind-row"><span class="grind-big">${esc(g.start_setting)}</span><span>${g.start_clicks} clicks from zero · <i>${esc(r.grind)}</i></span></div>
            <div class="dial" aria-hidden="true">${ticks.join('')}</div>
            <p>Range <b>${esc(g.range_settings[0])}–${esc(g.range_settings[1])}</b> (${lo}–${hi} clicks). Adjust in steps of <b>${g.adjustment_step_clicks}</b>.</p>
            <details><summary>How to dial in</summary><p>${esc(g.dial_in)}</p><p class="small">${esc(g.basis)}</p></details>
            <p class="small">🪿 Editorial starting estimate, not roaster-published or brew-tested.</p>
          </div>

          <h3><span class="grow">My brew log</span><span class="small" data-log-count></span></h3>
          <div data-log></div>
        </div>
      </div>`;

    $$('.method-tabs .btn', el).forEach((b) => b.addEventListener('click', () => { if (b.dataset.m !== method) onMethod(b.dataset.m); }));
    wireTimer(el);
    renderLogSection($('[data-log]', el), c, r);
    return el;
  }

  /* ---------- brew timer ---------- */

  function stopTimer() {
    if (activeTimer) activeTimer.stop();
    activeTimer = null;
  }

  function wireTimer(el) {
    const face = $('.timer-face', el);
    const goBtn = $('[data-timer="go"]', el);
    const steps = $$('.steps-list li', el);
    let started = 0, elapsed = 0, tick = null, lock = null;

    const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
    function paint() {
      const s = elapsed / 1000;
      face.textContent = fmt(s);
      let now = -1;
      steps.forEach((li, i) => { if (li.dataset.t !== '' && +li.dataset.t <= s && (tick || elapsed)) now = i; });
      steps.forEach((li, i) => {
        li.classList.toggle('now', i === now);
        li.classList.toggle('done', now >= 0 && i < now && li.dataset.t !== '');
      });
    }
    function pause() {
      clearInterval(tick);
      tick = null;
      goBtn.textContent = elapsed ? '▶ Resume' : '▶ Start';
      if (lock) { lock.release().catch(() => {}); lock = null; }
    }
    goBtn.addEventListener('click', () => {
      if (tick) { pause(); return; }
      stopTimer(); // only one timer at a time
      started = Date.now() - elapsed;
      tick = setInterval(() => { elapsed = Date.now() - started; paint(); }, 250);
      goBtn.textContent = '⏸ Pause';
      activeTimer = { stop: pause };
      paint();
      if (navigator.wakeLock) navigator.wakeLock.request('screen').then((l) => { lock = l; }).catch(() => {});
    });
    $('[data-timer="reset"]', el).addEventListener('click', () => { pause(); elapsed = 0; goBtn.textContent = '▶ Start'; paint(); });
  }

  /* ---------- brew log (per recipe) ---------- */

  function todayISO() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  function fmtDate(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T12:00:00');
    return isNaN(d) ? iso : d.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  }
  const starText = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);

  function entryHTML(e, { withDelete = true } = {}) {
    const pips = window.CGLog.SCALES.filter((k) => e[k]).map((k) => `<span>${SCALE_LABELS[k]} <i>${'■'.repeat(e[k])}${'□'.repeat(5 - e[k])}</i></span>`).join('');
    const kv = [
      ['Grind', e.grinder_setting], ['Coffee', e.dose_g != null ? e.dose_g + ' g' : ''], ['Water', e.water_g != null ? e.water_g + ' g' : ''],
      ['Temp', e.temperature_c != null ? e.temperature_c + '°C' : ''], ['Roasted', e.bean_roast_date ? fmtDate(e.bean_roast_date) : ''],
    ].filter(([, v]) => v).map(([k, v]) => `${k} <b>${esc(v)}</b>`).join(' · ');
    return `
      <div class="entry-body">
        <div class="entry-date">${esc(fmtDate(e.brewed_on))} ${e.rating ? `<span class="entry-stars">${starText(e.rating)}</span>` : ''}</div>
        ${kv ? `<div class="entry-kv">${kv}</div>` : ''}
        ${pips ? `<div class="pips">${pips}</div>` : ''}
        ${e.flavours_observed ? `<div class="entry-text">👅 ${esc(e.flavours_observed)}</div>` : ''}
        ${e.notes ? `<div class="entry-text">${esc(e.notes)}</div>` : ''}
        ${e.change_next_time ? `<div class="entry-text">🔁 <b>Next time:</b> ${esc(e.change_next_time)}</div>` : ''}
      </div>
      ${withDelete ? `<button class="btn small" data-del="${esc(e.id)}" aria-label="Delete this entry">🗑️</button>` : ''}`;
  }

  function renderLogSection(host, c, r) {
    const draft = { rating: 0 };
    const g = r.grind_x_ultra;
    const scaleRow = (k) => `<div class="scale" data-scale="${k}"><span class="scale-name">${SCALE_LABELS[k]}</span>${[1, 2, 3, 4, 5].map((n) => `<button type="button" class="btn" data-v="${n}">${n}</button>`).join('')}</div>`;

    function paint() {
      const entries = log.forRecipe(c.id, r.method);
      const counter = host.parentElement && $('[data-log-count]', host.parentElement);
      if (counter) counter.textContent = entries.length ? `${entries.length} brew${entries.length > 1 ? 's' : ''}` : '';
      $('.entries', host).innerHTML = entries.length
        ? entries.map((e) => `<li class="entry">${entryHTML(e)}</li>`).join('')
        : '<li class="entry empty">No brews logged yet. How did it taste?</li>';
    }

    host.innerHTML = `
      <form class="log-form" autocomplete="off">
        <div class="field-row two">
          <label class="field">Brewed on<input class="win-input" type="date" name="brewed_on" value="${todayISO()}" required></label>
          <label class="field">Grind used<input class="win-input" name="grinder_setting" value="${esc(g.start_setting)}"></label>
        </div>
        <div class="stars-row">
          <span class="stars" role="radiogroup" aria-label="Rating">${[1, 2, 3, 4, 5].map((n) => `<button type="button" class="star" data-star="${n}" aria-label="${n} star${n > 1 ? 's' : ''}">★</button>`).join('')}</span>
          <span class="rating-label"></span>
        </div>
        <label class="field">Notes<textarea class="win-input" name="notes" rows="2" placeholder="Sweet, a bit sharp at the end…"></textarea></label>
        <details>
          <summary>Scorecard &amp; details</summary>
          <div style="display:grid;gap:6px;margin-top:6px">
            ${window.CGLog.SCALES.map(scaleRow).join('')}
            <label class="field">Flavours I tasted<input class="win-input" name="flavours_observed" placeholder="${esc(c.tasting.slice(0, 2).join(', ').toLowerCase())}…"></label>
            <label class="field">Change next time<input class="win-input" name="change_next_time" placeholder="2 clicks finer"></label>
            <div class="field-row">
              <label class="field">Coffee g<input class="win-input" name="dose_g" inputmode="decimal" value="${r.dose_g ?? ''}"></label>
              <label class="field">Water g<input class="win-input" name="water_g" inputmode="decimal" value="${r.water_g ?? ''}"></label>
              <label class="field">Temp °C<input class="win-input" name="temperature_c" inputmode="decimal" value="${r.temperature_c ?? ''}"></label>
            </div>
            <label class="field">Bag roast date<input class="win-input" type="date" name="bean_roast_date"></label>
          </div>
        </details>
        <div class="form-foot"><button class="btn primary" type="submit">💾 Save brew</button></div>
      </form>
      <ul class="entries"></ul>`;

    const form = $('form', host);
    const paintStars = () => {
      $$('.star', form).forEach((s) => s.classList.toggle('on', +s.dataset.star <= draft.rating));
      $('.rating-label', form).textContent = RATING_LABELS[draft.rating] || 'Tap to rate';
    };
    $$('.star', form).forEach((s) => s.addEventListener('click', () => {
      draft.rating = draft.rating === +s.dataset.star ? 0 : +s.dataset.star;
      paintStars();
    }));
    $$('[data-scale]', form).forEach((row) => row.addEventListener('click', (e) => {
      const b = e.target.closest('[data-v]');
      if (!b) return;
      const k = row.dataset.scale, v = +b.dataset.v;
      draft[k] = draft[k] === v ? 0 : v;
      $$('[data-v]', row).forEach((x) => x.classList.toggle('pressed', +x.dataset.v === draft[k]));
    }));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = Object.fromEntries(new FormData(form));
      if (!draft.rating && !fd.notes.trim() && !fd.flavours_observed.trim() && !fd.change_next_time.trim() &&
          !window.CGLog.SCALES.some((k) => draft[k])) {
        toast('Add a rating or a note first ✍️');
        return;
      }
      const saved = log.add(Object.assign({ coffee_id: c.id, method: r.method }, fd, draft));
      if (!saved) { toast('⚠️ Couldn’t save. Is private browsing on?'); return; }
      toast('📓 Brew saved. Honk!');
      // reset the form for the next brew
      Object.keys(draft).forEach((k) => { draft[k] = 0; });
      form.reset();
      $$('[data-v]', form).forEach((x) => x.classList.remove('pressed'));
      paintStars();
      paint();
      renderBeans();
      renderStatusCount();
    });
    host.addEventListener('click', (e) => {
      const d = e.target.closest('[data-del]');
      if (d) confirmDelete(d.dataset.del, paint);
    });
    paintStars();
    paint();
  }

  function confirmDelete(id, after) {
    showDialog({
      title: 'Delete Brew', icon: '🗑️',
      html: '<p>Delete this brew from your log?</p>',
      buttons: [
        { label: 'Delete', primary: true, onClick: () => { log.remove(id); after(); renderBeans(); renderStatusCount(); toast('Deleted.'); } },
        { label: 'Cancel' },
      ],
    });
  }

  /* ============ brew log pane ============ */

  function renderLog() {
    const host = $('#log-list');
    const entries = log.all();
    if (!entries.length) {
      host.innerHTML = `
        <div class="log-empty sunken">
          <img src="assets/logo.png" alt="">
          <p><b>Your brew log is empty.</b><br>Open any recipe, brew it, and save how it tasted.<br>Everything stays on this device.</p>
          <button class="btn primary" data-action="brew">☕ Start brewing</button>
        </div>`;
      return;
    }
    host.innerHTML = `
      <div class="log-head">
        <b>${entries.length} brew${entries.length > 1 ? 's' : ''} logged</b><span class="spacer"></span>
        <button class="btn small" data-action="backup">💾 Back up</button>
        <button class="btn small" data-action="restore">📂 Restore</button>
      </div>` +
      entries.map((e) => {
        const c = byId.get(e.coffee_id);
        const m = methodInfo(e.method) || { icon: 'assets/favicon.png', long: e.method };
        return `<div class="log-card raised">
          <img src="${m.icon}" alt="">
          <div class="entry-body" data-open="${esc(e.coffee_id)}" data-method="${esc(e.method)}">
            <div class="lc-name">${c ? esc(c.name) : esc(e.coffee_id)}</div>
            <div class="small">${c ? esc(c.roaster) + ' · ' : ''}${esc(m.long)}</div>
            ${entryHTML(e, { withDelete: false })}
          </div>
          <button class="btn small" data-del="${esc(e.id)}" aria-label="Delete this entry">🗑️</button>
        </div>`;
      }).join('');
  }
  $('#log-list').addEventListener('click', (e) => {
    const d = e.target.closest('[data-del]');
    if (d) { confirmDelete(d.dataset.del, renderLog); return; }
    const o = e.target.closest('[data-open]');
    if (o && byId.has(o.dataset.open)) goToCoffee(o.dataset.open, o.dataset.method);
  });

  function backupLog() {
    const text = log.exportJSON();
    const name = `coffee-goose-brew-log-${todayISO()}.json`;
    const file = typeof File === 'function' ? new File([text], name, { type: 'application/json' }) : null;
    if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({ files: [file], title: 'Coffee Goose brew log' }).catch(() => {});
      return;
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
    a.download = name;
    document.body.append(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    toast('💾 Backup saved');
  }

  $('#restore-file').addEventListener('change', async (e) => {
    const f = e.target.files[0];
    e.target.value = '';
    if (!f) return;
    try {
      const n = log.importJSON(await f.text());
      toast(n ? `📂 Restored ${n} brew${n > 1 ? 's' : ''}` : 'Nothing new in that backup.');
      renderLog();
      renderBeans();
      renderStatusCount();
    } catch (err) {
      showDialog({ title: 'Restore', icon: '⚠️', html: `<p>${esc(err.message || 'Couldn’t read that file.')}</p>`, buttons: [{ label: 'OK', primary: true }] });
    }
  });

  /* ============ bean picker ============ */

  function renderPicker() {
    $('#picker-groups').innerHTML = M.GROUPS.map((g) => `
      <fieldset class="groupbox">
        <legend>${esc(g.label)}</legend>
        <div class="check-grid">
          ${g.items.map((it) => `<label class="check"><input type="checkbox" value="${esc(it.id)}" ${state.picks.includes(it.id) ? 'checked' : ''}><span>${esc(it.label)}</span></label>`).join('')}
        </div>
      </fieldset>`).join('');
    $('#hide-sold').checked = !!state.hideSold;
    updatePickerCount();
  }
  function updatePickerCount() {
    const n = state.picks.length;
    $('#picker-go span:last-child').textContent = n ? `Find my coffee (${n})` : 'Find my coffee';
  }
  $('#picker-groups').addEventListener('change', (e) => {
    const box = e.target;
    if (box.type !== 'checkbox') return;
    state.picks = state.picks.filter((p) => p !== box.value);
    if (box.checked) state.picks.push(box.value);
    saveState();
    updatePickerCount();
  });
  $('#hide-sold').addEventListener('change', (e) => { state.hideSold = e.target.checked; saveState(); });
  $('#picker-clear').addEventListener('click', () => { state.picks = []; saveState(); renderPicker(); });
  $('#picker-go').addEventListener('click', runPicker);

  function runPicker() {
    if (!state.picks.length) {
      showDialog({ title: 'Bean Picker', icon: '🎯', html: '<p>Tick at least one box (a roast, a flavour, an origin…) and Coffee Goose will sniff out your matches.</p>', buttons: [{ label: 'OK', primary: true }] });
      return;
    }
    const top = M.rank(coffees, state.picks, { hideUnavailable: state.hideSold }).slice(0, 4);
    const medals = ['🥇', '🥈', '🥉', '🏅'];
    const notes = [];
    if (state.picks.includes('dark')) notes.push('None of these roasters sells a truly dark filter roast, so “dark” leans toward the most developed roasts available.');
    if (top.length && top[0].score < 60) notes.push('Nothing ticks every box, so these are the closest neighbours.');
    const picked = M.GROUPS.flatMap((g) => g.items).filter((it) => state.picks.includes(it.id)).map((it) => it.label);
    const body = `
      <p class="small" style="margin:0 0 8px">You asked for: <b>${picked.map(esc).join(', ')}</b></p>
      ${notes.map((n) => `<p class="match-note">${esc(n)}</p>`).join('')}
      <div class="results-grid">
      ${top.map((x, i) => {
        const c = x.coffee;
        return `<article class="match raised">
          <span class="medal" aria-hidden="true">${medals[i]}</span>
          <div class="m-name">${esc(c.name)}</div>
          <div class="m-sub">${flag(c)} ${esc(c.roaster)} · ${esc(c.country)} · ${esc(processShort(c))} · ${esc(roastShort(c))} ${coffeeTags(c)}</div>
          <div class="m-body">
            <div class="meter"><div class="bar sunken"><div class="fill" style="width:${x.score}%"></div></div><b>${x.score}%</b></div>
            ${x.reasons.length ? `<div class="why">${x.reasons.map((r) => `<span>✓ ${esc(r.label)}${r.words.length ? ': ' + esc(r.words.slice(0, 2).join(', ')) : ''}</span>`).join('')}</div>` : ''}
            <div class="m-taste">Roaster says: ${esc(c.tasting.join(', '))}</div>
            <button class="btn primary" data-go="${esc(c.id)}">☕ Brew this</button>
          </div>
        </article>`;
      }).join('')}
      </div>`;
    const win = openWindow({
      title: 'Bean Picker — Your matches', icon: 'assets/favicon.png', body, cls: 'results',
      foot: [button('🔄 Change my picks', () => closeWindow(win))],
    });
    win.addEventListener('click', (e) => {
      const g = e.target.closest('[data-go]');
      if (g) goToCoffee(g.dataset.go);
    });
    setStatus(top.length ? `Top match: ${top[0].coffee.name} (${top[0].score}%)` : 'No matches.');
  }

  /* ============ windows ============ */

  function openWindow({ title, icon = 'assets/favicon.png', body, foot, cls = '' }) {
    const win = document.createElement('section');
    win.className = `window modal ${cls}`;
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-modal', 'true');
    win.setAttribute('aria-label', title);
    win.innerHTML = `
      <header class="titlebar">
        <img src="${icon}" alt="" class="tb-icon">
        <span class="tb-title">${esc(title)}</span>
        <button class="tb-close" aria-label="Close">×</button>
      </header>
      <div class="modal-body"></div>
      <footer class="modal-foot"></footer>`;
    const b = $('.modal-body', win), f = $('.modal-foot', win);
    if (typeof body === 'string') b.innerHTML = body; else if (body) b.append(body);
    if (foot) f.append(...foot); else f.remove();
    $('.tb-close', win).addEventListener('click', () => closeWindow(win));
    layer.append(win);
    layer.hidden = false;
    closeStartMenu();
    return win;
  }

  function closeWindow(win) {
    if (win._onClose) win._onClose();
    win.remove();
    if (!layer.children.length) layer.hidden = true;
  }

  function button(label, onClick, { primary = false, cls = '' } = {}) {
    const b = document.createElement('button');
    b.className = `btn ${primary ? 'primary' : ''} ${cls}`;
    b.innerHTML = `<span>${label}</span>`;
    b.addEventListener('click', onClick);
    return b;
  }

  function showDialog({ title, icon = 'ℹ️', html, buttons }) {
    let win;
    const foot = buttons.map((bt) => button(esc(bt.label), () => { closeWindow(win); bt.onClick && bt.onClick(); }, { primary: bt.primary }));
    win = openWindow({
      title, cls: 'narrow',
      body: `<div class="dialog-row"><div class="dialog-ico">${icon}</div><div>${html}</div></div>`,
      foot,
    });
    const primary = $('.btn.primary', win);
    if (primary) primary.focus();
    return win;
  }

  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.textContent = msg;
    document.body.append(t);
    setTimeout(() => t.remove(), 2200);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!$('#start-menu').hidden) { closeStartMenu(); return; }
    const top = layer.lastElementChild;
    if (top) closeWindow(top);
  });

  /* ============ tip of the day, cheat sheet, about ============ */

  function showTip() {
    let i = state.tipIndex % TIPS.length;
    const render = () => `
      <div class="dialog-row" style="padding:0">
        <div class="tip-art"><span>💡</span></div>
        <div style="flex:1">
          <p class="tip-head">Did you know…</p>
          <div class="tip-text sunken"><b>${esc(TIPS[i][0])}</b><br>${esc(TIPS[i][1])}</div>
          <label class="check" style="margin-top:8px"><input type="checkbox" id="tip-startup" ${state.tips ? 'checked' : ''}><span>Show tips at startup</span></label>
        </div>
      </div>`;
    let win;
    const next = button('Next Tip', () => {
      i = (i + 1) % TIPS.length;
      state.tipIndex = i;
      saveState();
      $('.modal-body', win).innerHTML = render();
    });
    win = openWindow({ title: 'Welcome to Coffee Goose', body: render(), cls: 'narrow', foot: [next, button('Close', () => closeWindow(win), { primary: true })] });
    win.addEventListener('change', (e) => { if (e.target.id === 'tip-startup') { state.tips = e.target.checked; saveState(); } });
    state.tipIndex = i + 1;
    state.tipSeen = todayISO();
    saveState();
  }

  function showCheatSheet() {
    const g = catalog.grinder_calibration;
    const body = document.createElement('div');
    body.className = 'cheat';
    body.innerHTML = `
      <p><b>${esc(g.model)}</b> · ${g.clicks_per_rotation} clicks per rotation · ${g.clicks_per_number} per number · ~${g.burr_travel_microns_per_click} µm per click.</p>
      <p><b>Notation:</b> ${esc(g.display_format)}</p>
      <p><b>Zero:</b> ${esc(g.zero)}</p>
      <table>
        <tr><th>Brewer</th><th>Typical start</th></tr>
        ${M.METHODS.map((m) => {
          const s = coffees.map((c) => recipeFor(c, m.id)).filter(Boolean).map((r) => r.grind_x_ultra.start_clicks);
          const lo = Math.min(...s), hi = Math.max(...s);
          return `<tr><td>${esc(m.long)}</td><td>${M.clicksToSetting(lo)} – ${M.clicksToSetting(hi)} <span class="small">(${lo}–${hi} clicks)</span></td></tr>`;
        }).join('')}
      </table>
      <fieldset class="groupbox" style="margin-top:10px">
        <legend>Click converter</legend>
        <div class="field-row two">
          <label class="field">Clicks<input class="win-input" id="cv-clicks" inputmode="numeric" placeholder="135"></label>
          <label class="field">R.N.C<input class="win-input" id="cv-set" placeholder="2.1.5"></label>
        </div>
      </fieldset>
      <p class="small">${esc(g.grind_estimate_policy)}</p>`;
    const clicks = $('#cv-clicks', body), set = $('#cv-set', body);
    clicks.addEventListener('input', () => { const n = parseInt(clicks.value, 10); set.value = n >= 0 && n < 600 ? M.clicksToSetting(n) : ''; });
    set.addEventListener('input', () => { const n = M.settingToClicks(set.value.trim()); clicks.value = n == null ? '' : n; });
    let win;
    win = openWindow({ title: 'X-Ultra Cheat Sheet', body, cls: 'narrow', foot: [button('OK', () => closeWindow(win), { primary: true })] });
  }

  function showAbout() {
    const recipes = coffees.reduce((n, c) => n + c.recipes.length, 0);
    showDialog({
      title: 'About Coffee Goose', icon: '<img src="assets/logo.png" alt="" style="width:72px;border-radius:50%">',
      html: `<p><b>Coffee Goose 95</b><br>Version ${esc(VERSION)}</p>
             <p>${coffees.length} coffees from ${catalog.roasters.map(esc).join(', ')}.<br>${recipes} recipes for V60, Hario Switch and AeroPress.</p>
             <p class="small">Catalog snapshot ${esc(catalog.checked_on)}. Roaster details come from their product pages and may have changed since.<br>Your brew log is saved on this device only. Use Back Up to keep a copy.</p>`,
      buttons: [{ label: 'OK', primary: true }],
    });
  }

  /* ============ start menu, toolbar, misc ============ */

  const startBtn = $('#start-btn');
  const startMenu = $('#start-menu');
  function closeStartMenu() {
    startMenu.hidden = true;
    startBtn.classList.remove('pressed');
    startBtn.setAttribute('aria-expanded', 'false');
  }
  startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = startMenu.hidden;
    startMenu.hidden = !open;
    startBtn.classList.toggle('pressed', open);
    startBtn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (e) => {
    if (!startMenu.hidden && !startMenu.contains(e.target)) closeStartMenu();
  });

  function runAction(action) {
    closeStartMenu();
    switch (action) {
      case 'brew': case 'picker': case 'log':
        while (layer.lastElementChild) closeWindow(layer.lastElementChild);
        showTab(action);
        break;
      case 'grinder': showCheatSheet(); break;
      case 'tip': showTip(); break;
      case 'backup': backupLog(); break;
      case 'restore': $('#restore-file').click(); break;
      case 'about': showAbout(); break;
    }
  }
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-action]');
    if (a) runAction(a.dataset.action);
  });
  $('#task-main').addEventListener('click', () => { while (layer.lastElementChild) closeWindow(layer.lastElementChild); });

  $('#roasters').addEventListener('click', (e) => { const t = e.target.closest('[data-roaster]'); if (t) chooseRoaster(t.dataset.roaster); });
  $('#bean-list').addEventListener('click', (e) => {
    if (e.target.closest('[data-expand]')) { beanListExpanded = true; renderBeans(); return; }
    const b = e.target.closest('[data-bean]');
    if (!b) return;
    if (b.dataset.bean === state.bean && !wide.matches && !beanListExpanded) { beanListExpanded = true; renderBeans(); return; }
    chooseBean(b.dataset.bean);
  });
  $('#methods').addEventListener('click', (e) => { const t = e.target.closest('[data-method]'); if (t && !t.disabled) chooseMethod(t.dataset.method); });

  // rotating an iPad or resizing a window can cross the phone/tablet line
  wide.addEventListener('change', () => {
    if (wide.matches) $$('.recipe-win', layer).forEach(closeWindow);
    renderBrew();
  });

  function setStatus(msg) { $('#status-msg').textContent = msg; }
  function renderStatusCount() {
    const n = log.all().length;
    $('#status-count').textContent = `${coffees.length} coffees · ${n} brew${n === 1 ? '' : 's'} logged`;
  }

  function tickClock() {
    $('#clock').textContent = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }

  /* ============ boot ============ */

  async function boot() {
    document.querySelectorAll('[data-version]').forEach((el) => { el.textContent = 'v' + VERSION; });
    tickClock();
    setInterval(tickClock, 15000);

    const bootEl = $('#boot'), bar = $('#boot-bar'), msg = $('#boot-msg');
    const steps = ['Starting Coffee Goose…', 'Grinding beans…', 'Heating kettle to 94°C…', 'Rinsing paper filters…', 'Zeroing the X-Ultra…', 'Letting it bloom…'];
    let i = 0;
    const timer = setInterval(() => {
      i = Math.min(i + 1, steps.length - 1);
      msg.textContent = steps[i];
      bar.style.width = Math.min(90, (i + 1) * 16) + '%';
    }, 320);
    bar.style.width = '10%';
    const minTime = new Promise((res) => setTimeout(res, 1900));
    let skip;
    const skipped = new Promise((res) => { skip = res; });

    try {
      await loadCatalog();
    } catch (err) {
      clearInterval(timer);
      msg.textContent = 'Error: ' + err.message + '. Refresh to try again.';
      return;
    }
    bootEl.addEventListener('click', () => skip());
    await Promise.race([minTime, skipped]);
    clearInterval(timer);
    bar.style.width = '100%';
    msg.textContent = `Ready! ${coffees.length} coffees in the hopper.`;

    renderBrew();
    renderPicker();
    showTab(['brew', 'picker', 'log'].includes(state.tab) ? state.tab : 'brew');

    await new Promise((res) => setTimeout(res, 300));
    bootEl.classList.add('done');
    setTimeout(() => bootEl.remove(), 600);
    if (state.tips && state.tipSeen !== todayISO()) setTimeout(showTip, 650);
  }

  boot();
})();
