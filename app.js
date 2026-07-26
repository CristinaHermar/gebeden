/* ============================================================
   PRECES — app.js
   ============================================================ */

const state = {
  tab: "daily",
  showLatin: false,
  showGerman: false
};

const contentEl = document.getElementById("content");
const tabsEl = document.getElementById("tabs");
const latinToggleEl = document.getElementById("toggle-latin");
const germanToggleEl = document.getElementById("toggle-german");

function findPrayer(id) {
  return PRAYERS.find(p => p.id === id);
}

/* ---------- Jump-to-prayer selector ---------- */

function renderJumpNav(items, navId) {
  const options = items
    .map(it => `<option value="${it.id}">${it.en} / ${it.nl}</option>`)
    .join("");

  return `
    <div class="jump-nav-wrap">
      <label class="jump-nav-label" for="${navId}">
        Jump to <span class="jump-nav-nl">/ Ga naar</span>
      </label>
      <select class="jump-nav" id="${navId}">
        <option value="">— select / kies —</option>
        ${options}
      </select>
    </div>
  `;
}

/* ---------- Card renderers ---------- */

function renderPrayerCard(prayer) {
  const t = prayer.text;
  let html = `
    <article class="prayer-card" id="prayer-${prayer.id}">
      <div class="prayer-title">
        <span class="col-title en">${prayer.title.en}</span>
        <span class="col-title nl">${prayer.title.nl}</span>
      </div>
      <div class="prayer-columns">
        <div class="col col-en">${t.en}</div>
        <div class="col col-nl">${t.nl}</div>
      </div>
  `;

  if (state.showGerman) {
    html += `
      <div class="prayer-german">
        <span class="german-label">Deutsch · ${prayer.title.de}</span>
        ${t.de}
      </div>
    `;
  }

  if (state.showLatin) {
    html += `
      <div class="prayer-latin">
        <span class="latin-label">Latin · ${prayer.title.la}</span>
        ${t.la}
      </div>
    `;
  }

  if (prayer.note) {
    html += `
      <div class="prayer-note">
        <span class="col-title">V. / R.</span>
        <div class="prayer-columns" style="grid-template-columns:1fr 1fr; padding:0;">
          <div class="col col-en" style="border-right:1px solid var(--line); padding:0 10px 0 0;">${prayer.note.en}</div>
          <div class="col col-nl" style="padding:0 0 0 10px;">${prayer.note.nl}</div>
        </div>
        ${state.showGerman ? `<div class="prayer-german" style="margin:10px 0 0;">${prayer.note.de}</div>` : ""}
        ${state.showLatin ? `<div class="prayer-latin" style="margin:10px 0 0;">${prayer.note.la}</div>` : ""}
      </div>
    `;
  }

  if (prayer.source) {
    let sourceText;
    if (state.showLatin) {
      sourceText = prayer.source.la;
    } else {
      const parts = [prayer.source.en, prayer.source.nl];
      if (state.showGerman && prayer.source.de) parts.push(prayer.source.de);
      sourceText = parts.join(" · ");
    }
    html += `<p class="prayer-source">${sourceText}</p>`;
  }

  html += `</article>`;
  return html;
}

/* ---------- Tab: Daily ---------- */

function renderDaily() {
  const items = PRAYERS.filter(p => p.category === "daily");
  const navItems = items.map(p => ({ id: `prayer-${p.id}`, en: p.title.en, nl: p.title.nl }));
  return `
    ${renderJumpNav(navItems, "jump-daily")}
    ${items.map(renderPrayerCard).join("")}
  `;
}

/* ---------- Tab: Opus Dei ---------- */

function renderOpusDei() {
  const items = PRAYERS.filter(p => p.category === "opusdei");
  const navItems = items.map(p => ({ id: `prayer-${p.id}`, en: p.title.en, nl: p.title.nl }));
  return `
    <p class="intro-text">
      Two short prayers to frame a time of personal prayer, as taught by St. Josemaría Escrivá.<br/>
      Twee korte gebeden om een moment van persoonlijk gebed te omkaderen, zoals onderwezen door de heilige Jozefmaria Escrivá.
    </p>
    ${renderJumpNav(navItems, "jump-opusdei")}
    ${items.map(renderPrayerCard).join("")}
  `;
}

/* ---------- Tab: Rosary ---------- */

function decadeStepsHtml() {
  return `
    <ul class="decade-steps">
      ${DECADE_PATTERN.map(step => `
        <li>
          <span class="en">${step.label.en}</span>
          <span class="nl">${step.label.nl}</span>
          ${state.showGerman ? `<span class="de">${step.label.de}</span>` : ""}
        </li>
      `).join("")}
    </ul>
  `;
}

function mysterySetHtml(key, isToday) {
  const set = MYSTERIES[key];
  return `
    <div class="mystery-set ${isToday ? "is-today" : ""}" id="mystery-${key}">
      <div class="mystery-set-title">
        <span class="en">${set.name.en}</span>
        <span class="nl">${set.name.nl}</span>
      </div>
      ${state.showGerman ? `<div class="mystery-set-title-de">${set.name.de}</div>` : ""}
      <ol class="mystery-list">
        ${set.items.map(item => `
          <li>
            <span class="en">${item.en}</span>
            <span class="nl">${item.nl}</span>
            ${state.showGerman ? `<span class="de">${item.de}</span>` : ""}
            ${state.showLatin ? `<span class="la">${item.la}</span>` : ""}
          </li>
        `).join("")}
      </ol>
    </div>
  `;
}

function todayMysteryKey() {
  const day = new Date().getDay(); // 0 = Sunday
  return Object.keys(MYSTERIES).find(key => MYSTERIES[key].days.includes(day));
}

function renderRosary() {
  const todayKey = todayMysteryKey();
  const todaySet = MYSTERIES[todayKey];
  const openingPrayers = ["signum-crucis", "credo", "pater-noster", "ave-maria", "gloria-patri"]
    .map(findPrayer);
  const closing = findPrayer(CLOSING_REF);
  const fatima = findPrayer("fatima");

  const order = ["joyful", "sorrowful", "glorious", "luminous"];

  const navItems = [
    { id: "section-opening", en: "Opening Prayers", nl: "Beginnende gebeden" },
    { id: "section-decade", en: "Each Decade", nl: "Elk tientje" },
    { id: "prayer-fatima", en: fatima.title.en, nl: fatima.title.nl },
    ...order.map(key => ({ id: `mystery-${key}`, en: MYSTERIES[key].name.en, nl: MYSTERIES[key].name.nl })),
    { id: "section-closing", en: "Closing Prayer", nl: "Slotgebed" }
  ];

  return `
    ${renderJumpNav(navItems, "jump-rosary")}

    <div class="today-banner">
      <strong>${todaySet.name.en} · ${todaySet.name.nl}${state.showGerman ? " · " + todaySet.name.de : ""}</strong>
      <span>Today's mysteries — De geheimen van vandaag</span>
    </div>

    <h2 class="section-title" id="section-opening"><span class="en">1. Opening Prayers</span> <span class="nl">Beginnende gebeden</span></h2>
    ${[...new Map(openingPrayers.map(p => [p.id, p])).values()].map(renderPrayerCard).join("")}

    <h2 class="section-title" id="section-decade"><span class="en">2. Each Decade</span> <span class="nl">Elk tientje</span></h2>
    <div class="prayer-card" style="padding:6px 4px;">
      ${decadeStepsHtml()}
    </div>
    <p class="intro-text">See the prayer texts above (Our Father, Hail Mary, Glory Be) and below (Fatima Prayer).<br/>Zie de gebedsteksten hierboven (Onze Vader, Weesgegroet, Eer aan de Vader) en hieronder (Fátima-gebed).</p>
    ${renderPrayerCard(fatima)}

    <h2 class="section-title"><span class="en">3. The Mysteries</span> <span class="nl">De Geheimen</span></h2>
    ${order.map(key => mysterySetHtml(key, key === todayKey)).join("")}

    <h2 class="section-title" id="section-closing"><span class="en">4. Closing Prayer</span> <span class="nl">Slotgebed</span></h2>
    ${renderPrayerCard(closing)}
  `;
}

/* ---------- Router ---------- */

function render() {
  let html = "";
  if (state.tab === "daily") html = renderDaily();
  else if (state.tab === "rosary") html = renderRosary();
  else if (state.tab === "opusdei") html = renderOpusDei();

  contentEl.innerHTML = html;
}

tabsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  state.tab = btn.dataset.tab;
  [...tabsEl.querySelectorAll(".tab")].forEach(t => t.classList.toggle("active", t === btn));
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

latinToggleEl.addEventListener("click", () => {
  state.showLatin = !state.showLatin;
  latinToggleEl.setAttribute("aria-pressed", String(state.showLatin));
  render();
});

germanToggleEl.addEventListener("click", () => {
  state.showGerman = !state.showGerman;
  germanToggleEl.setAttribute("aria-pressed", String(state.showGerman));
  render();
});

/* Jump-to-prayer selectors are re-created on every render, so listen
   via delegation on the content container. */
contentEl.addEventListener("change", (e) => {
  const select = e.target.closest(".jump-nav");
  if (!select || !select.value) return;
  const target = document.getElementById(select.value);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  select.value = "";
});

render();

/* ---------- Service worker registration (PWA) ---------- */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      /* offline support is optional — ignore failures */
    });
  });
}
