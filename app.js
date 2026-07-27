/* ============================================================
   PRECES — app.js
   ============================================================ */

const state = {
  tab: "daily",
  showLatin: false,
  secondLang: "nl" // "nl" or "de" — which language shows in the right-hand column
};

/* UI chrome strings that follow the chosen second language */
const UI = {
  jumpTo: { en: "Jump to", nl: "Ga naar", de: "Gehe zu" },
  selectPlaceholder: { en: "select", nl: "kies", de: "wähle" },
  opening: { en: "Opening Prayers", nl: "Beginnende gebeden", de: "Eröffnungsgebete" },
  decade: { en: "Each Decade", nl: "Elk tientje", de: "Jedes Gesätz" },
  decadeIntro: {
    en: "See the prayer texts above (Our Father, Hail Mary, Glory Be) and below (Fatima Prayer).",
    nl: "Zie de gebedsteksten hierboven (Onze Vader, Weesgegroet, Eer aan de Vader) en hieronder (Fátima-gebed).",
    de: "Siehe die Gebetstexte oben (Vaterunser, Ave Maria, Ehre sei dem Vater) und unten (Fátima-Gebet)."
  },
  mysteries: { en: "The Mysteries", nl: "De Geheimen", de: "Die Geheimnisse" },
  closing: { en: "Closing Prayer", nl: "Slotgebed", de: "Schlussgebet" },
  todaysMysteries: { en: "Today's mysteries", nl: "De geheimen van vandaag", de: "Die Geheimnisse von heute" },
  opusDeiIntro: {
    en: "Two short prayers to frame a time of personal prayer, as taught by St. Josemaría Escrivá.",
    nl: "Twee korte gebeden om een moment van persoonlijk gebed te omkaderen, zoals onderwezen door de heilige Jozefmaria Escrivá.",
    de: "Zwei kurze Gebete, um eine Zeit des persönlichen Gebets zu umrahmen, wie vom heiligen Josefmaria Escrivá gelehrt."
  },
  tabDaily: { nl: "Dagelijks", de: "Täglich" },
  tabRosary: { nl: "Rozenkrans", de: "Rosenkranz" },
  tabOpusDei: { nl: "Opus Dei", de: "Opus Dei" }
};

const contentEl = document.getElementById("content");
const tabsEl = document.getElementById("tabs");
const latinToggleEl = document.getElementById("toggle-latin");
const langSwitchEl = document.getElementById("lang-switch");

function findPrayer(id) {
  return PRAYERS.find(p => p.id === id);
}

/* ---------- Jump-to-prayer selector ---------- */

function renderJumpNav(items, navId) {
  const options = items
    .map(it => `<option value="${it.id}">${it.en} / ${it.second}</option>`)
    .join("");

  return `
    <div class="jump-nav-wrap">
      <label class="jump-nav-label" for="${navId}">
        ${UI.jumpTo.en} <span class="jump-nav-nl">/ ${UI.jumpTo[state.secondLang]}</span>
      </label>
      <select class="jump-nav" id="${navId}">
        <option value="">— ${UI.selectPlaceholder.en} / ${UI.selectPlaceholder[state.secondLang]} —</option>
        ${options}
      </select>
    </div>
  `;
}

/* ---------- Card renderers ---------- */

function renderPrayerCard(prayer) {
  const t = prayer.text;
  const lang2 = state.secondLang;
  let html = `
    <article class="prayer-card" id="prayer-${prayer.id}">
      <div class="prayer-title">
        <span class="col-title en">${prayer.title.en}</span>
        <span class="col-title nl">${prayer.title[lang2]}</span>
      </div>
      <div class="prayer-columns">
        <div class="col col-en">${t.en}</div>
        <div class="col col-nl">${t[lang2]}</div>
      </div>
  `;

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
          <div class="col col-nl" style="padding:0 0 0 10px;">${prayer.note[lang2]}</div>
        </div>
        ${state.showLatin ? `<div class="prayer-latin" style="margin:10px 0 0;">${prayer.note.la}</div>` : ""}
      </div>
    `;
  }

  if (prayer.source) {
    let sourceText;
    if (state.showLatin) {
      sourceText = prayer.source.la;
    } else {
      sourceText = [prayer.source.en, prayer.source[lang2]].join(" · ");
    }
    html += `<p class="prayer-source">${sourceText}</p>`;
  }

  html += `</article>`;
  return html;
}

/* ---------- Tab: Daily ---------- */

function renderDaily() {
  const items = PRAYERS.filter(p => p.category === "daily");
  const navItems = items.map(p => ({ id: `prayer-${p.id}`, en: p.title.en, second: p.title[state.secondLang] }));
  return `
    ${renderJumpNav(navItems, "jump-daily")}
    ${items.map(renderPrayerCard).join("")}
  `;
}

/* ---------- Tab: Opus Dei ---------- */

function renderOpusDei() {
  const items = PRAYERS.filter(p => p.category === "opusdei");
  const navItems = items.map(p => ({ id: `prayer-${p.id}`, en: p.title.en, second: p.title[state.secondLang] }));
  return `
    <p class="intro-text">
      ${UI.opusDeiIntro.en}<br/>
      ${UI.opusDeiIntro[state.secondLang]}
    </p>
    ${renderJumpNav(navItems, "jump-opusdei")}
    ${items.map(renderPrayerCard).join("")}
  `;
}

/* ---------- Tab: Rosary ---------- */

function decadeStepsHtml() {
  const lang2 = state.secondLang;
  return `
    <ul class="decade-steps">
      ${DECADE_PATTERN.map(step => `
        <li>
          <span class="en">${step.label.en}</span>
          <span class="nl">${step.label[lang2]}</span>
        </li>
      `).join("")}
    </ul>
  `;
}

function mysterySetHtml(key, isToday) {
  const set = MYSTERIES[key];
  const lang2 = state.secondLang;
  return `
    <div id="mystery-${key}">
      <p class="mystery-eyebrow"><span class="en">3. ${UI.mysteries.en}</span> <span class="nl">${UI.mysteries[lang2]}</span></p>
      <div class="mystery-set ${isToday ? "is-today" : ""}">
        <div class="mystery-set-title">
          <span class="en">${set.name.en}</span>
          <span class="nl">${set.name[lang2]}</span>
        </div>
        <ol class="mystery-list">
          ${set.items.map(item => `
            <li>
              <span class="en">${item.en}</span>
              <span class="nl">${item[lang2]}</span>
              ${state.showLatin ? `<span class="la">${item.la}</span>` : ""}
            </li>
          `).join("")}
        </ol>
      </div>
    </div>
  `;
}

function todayMysteryKey() {
  const day = new Date().getDay(); // 0 = Sunday
  return Object.keys(MYSTERIES).find(key => MYSTERIES[key].days.includes(day));
}

function renderRosary() {
  const lang2 = state.secondLang;
  const todayKey = todayMysteryKey();
  const todaySet = MYSTERIES[todayKey];
  const openingPrayers = ["signum-crucis", "credo", "pater-noster", "ave-maria", "gloria-patri"]
    .map(findPrayer);
  const closing = findPrayer(CLOSING_REF);
  const fatima = findPrayer("fatima");

  const order = ["joyful", "sorrowful", "glorious", "luminous"];

  const navItems = [
    { id: "section-opening", en: UI.opening.en, second: UI.opening[lang2] },
    { id: "section-decade", en: UI.decade.en, second: UI.decade[lang2] },
    { id: "prayer-fatima", en: fatima.title.en, second: fatima.title[lang2] },
    ...order.map(key => ({ id: `mystery-${key}`, en: MYSTERIES[key].name.en, second: MYSTERIES[key].name[lang2] })),
    { id: "section-closing", en: UI.closing.en, second: UI.closing[lang2] }
  ];

  return `
    ${renderJumpNav(navItems, "jump-rosary")}

    <div class="today-banner">
      <strong>${todaySet.name.en} · ${todaySet.name[lang2]}</strong>
      <span>${UI.todaysMysteries.en} — ${UI.todaysMysteries[lang2]}</span>
    </div>

    <h2 class="section-title" id="section-opening"><span class="en">1. ${UI.opening.en}</span> <span class="nl">${UI.opening[lang2]}</span></h2>
    ${[...new Map(openingPrayers.map(p => [p.id, p])).values()].map(renderPrayerCard).join("")}

    <h2 class="section-title" id="section-decade"><span class="en">2. ${UI.decade.en}</span> <span class="nl">${UI.decade[lang2]}</span></h2>
    <div class="prayer-card" style="padding:6px 4px;">
      ${decadeStepsHtml()}
    </div>
    <p class="intro-text">${UI.decadeIntro.en}<br/>${UI.decadeIntro[lang2]}</p>
    ${renderPrayerCard(fatima)}

    ${order.map(key => mysterySetHtml(key, key === todayKey)).join("")}

    <h2 class="section-title" id="section-closing"><span class="en">4. ${UI.closing.en}</span> <span class="nl">${UI.closing[lang2]}</span></h2>
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

function updateChrome() {
  const lang2 = state.secondLang;

  const tabNlEls = tabsEl.querySelectorAll(".tab-nl");
  if (tabNlEls[0]) tabNlEls[0].textContent = UI.tabDaily[lang2];
  if (tabNlEls[1]) tabNlEls[1].textContent = UI.tabRosary[lang2];
  if (tabNlEls[2]) tabNlEls[2].textContent = UI.tabOpusDei[lang2];

  [...langSwitchEl.querySelectorAll(".lang-switch-btn")].forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang2);
  });
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

langSwitchEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".lang-switch-btn");
  if (!btn) return;
  state.secondLang = btn.dataset.lang;
  updateChrome();
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

updateChrome();
render();

/* ---------- Service worker registration (PWA) ---------- */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      /* offline support is optional — ignore failures */
    });
  });
}
