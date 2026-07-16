/* ============================================================
   GEBEDEN — app.js
   ============================================================ */

const FONT_STEPS = [15, 16, 17, 18, 19, 21, 23, 25, 27];
const FONT_STORAGE_KEY = "gebeden-font-step";
const MYSTERY_STORAGE_KEY = "gebeden-selected-mystery";

function todayMysteryKey() {
  const day = new Date().getDay(); // 0 = Sunday
  return Object.keys(MYSTERIES).find(key => MYSTERIES[key].days.includes(day));
}

function loadFontStep() {
  const saved = parseInt(localStorage.getItem(FONT_STORAGE_KEY), 10);
  if (!Number.isNaN(saved) && saved >= 0 && saved < FONT_STEPS.length) return saved;
  return 1; // default matches the base 16px root
}

function loadSelectedMystery() {
  const saved = localStorage.getItem(MYSTERY_STORAGE_KEY);
  if (saved && MYSTERIES[saved]) return saved;
  return todayMysteryKey();
}

const state = {
  tab: "daily",
  showLatin: false,
  fontStep: loadFontStep(),
  selectedMystery: loadSelectedMystery(),
  litanyLangs: { es: false, en: false, nl: false }
};

const contentEl = document.getElementById("content");
const tabsEl = document.getElementById("tabs");
const latinToggleEl = document.getElementById("toggle-latin");
const fontDecreaseEl = document.getElementById("font-decrease");
const fontIncreaseEl = document.getElementById("font-increase");

function findPrayer(id) {
  return PRAYERS.find(p => p.id === id);
}

/* ---------- Font size control ---------- */

function applyFontSize() {
  document.documentElement.style.fontSize = FONT_STEPS[state.fontStep] + "px";
  if (fontDecreaseEl) fontDecreaseEl.disabled = state.fontStep === 0;
  if (fontIncreaseEl) fontIncreaseEl.disabled = state.fontStep === FONT_STEPS.length - 1;
}

/* ---------- Card renderers ---------- */

function renderPrayerCard(prayer) {
  const t = prayer.text;
  let html = `
    <article class="prayer-card">
      <div class="prayer-title">
        <span class="col-title en">${prayer.title.en}</span>
        <span class="col-title nl">${prayer.title.nl}</span>
      </div>
      <div class="prayer-columns">
        <div class="col col-en">${t.en}</div>
        <div class="col col-nl">${t.nl}</div>
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
          <div class="col col-nl" style="padding:0 0 0 10px;">${prayer.note.nl}</div>
        </div>
        ${state.showLatin ? `<div class="prayer-latin" style="margin:10px 0 0;">${prayer.note.la}</div>` : ""}
      </div>
    `;
  }

  if (prayer.source) {
    html += `<p class="prayer-source">${state.showLatin ? prayer.source.la : (prayer.source.en + " · " + prayer.source.nl)}</p>`;
  }

  html += `</article>`;
  return html;
}

/* ---------- Preces litany (Opus Dei) ---------- */

const LITANY_LANG_LABELS = { es: "ES", en: "EN", nl: "NL" };

function litanyTranslationsHtml(entry) {
  const active = ["es", "en", "nl"].filter(l => state.litanyLangs[l]);
  if (!active.length) return "";
  return `
    <div class="litany-translations">
      ${active.map(l => `<div class="litany-tr litany-tr-${l}"><span class="litany-tr-tag">${LITANY_LANG_LABELS[l]}</span>${entry[l]}</div>`).join("")}
    </div>
  `;
}

function renderLitanyItem(item) {
  if (item.kind === "label") {
    return `
      <div class="litany-label">
        <div class="litany-la">${item.la}</div>
        ${litanyTranslationsHtml(item)}
      </div>
    `;
  }
  if (item.kind === "rubric") {
    return `
      <div class="litany-rubric">
        <div class="litany-la">${item.la}</div>
        ${litanyTranslationsHtml(item)}
      </div>
    `;
  }
  if (item.kind === "prayer") {
    return `
      <div class="litany-prayer">
        <div class="litany-la">${item.la}</div>
        ${litanyTranslationsHtml(item)}
      </div>
    `;
  }
  if (item.kind === "responseOnly") {
    return `
      <div class="litany-verse litany-response-only">
        <div class="litany-line litany-r">
          <span class="litany-tag">R.</span>
          <span class="litany-la">${item.r.la}</span>
        </div>
        ${litanyTranslationsHtml(item.r)}
      </div>
    `;
  }
  if (item.kind === "verse") {
    return `
      <div class="litany-verse">
        <div class="litany-line litany-v">
          <span class="litany-tag">V.</span>
          <span class="litany-la">${item.v.la}</span>
        </div>
        ${litanyTranslationsHtml(item.v)}
        <div class="litany-line litany-r">
          <span class="litany-tag">R.</span>
          <span class="litany-la">${item.r.la}</span>
        </div>
        ${litanyTranslationsHtml(item.r)}
      </div>
    `;
  }
  return "";
}

function renderLitanyCard() {
  const lit = PRECES_LITANY;
  const langButtons = ["es", "en", "nl"].map(l => `
    <button class="litany-lang-btn" data-lang="${l}" aria-pressed="${state.litanyLangs[l]}">${LITANY_LANG_LABELS[l]}</button>
  `).join("");

  return `
    <article class="prayer-card litany-card">
      <div class="prayer-title">
        <span class="col-title en">Preces</span>
        <span class="col-title nl">Preces</span>
      </div>
      <div class="litany-intro">
        <p class="intro-text" style="margin:0 0 10px;">
          Latin text, prayed in the Prelature of Opus Dei. Tap ES / EN / NL to also show a translation for each line.<br/>
          Latijnse tekst, gebeden in het Opus Dei. Tik op ES / EN / NL om ook een vertaling per regel te tonen.
        </p>
        <div class="litany-lang-switch" id="litany-lang-switch">
          ${langButtons}
        </div>
      </div>
      <div class="litany-body">
        ${lit.items.map(renderLitanyItem).join("")}
      </div>
      <p class="prayer-source">${lit.source.en} · ${lit.source.nl}</p>
    </article>
  `;
}

/* ---------- Tab: Daily ---------- */

function renderDaily() {
  const items = PRAYERS.filter(p => p.category === "daily");
  return `
    <p class="intro-text">
      Common prayers for morning, evening, and any moment of the day.<br/>
      Gewone gebeden voor ochtend, avond en elk moment van de dag.
    </p>
    ${items.map(renderPrayerCard).join("")}
  `;
}

/* ---------- Tab: Opus Dei ---------- */

function renderOpusDei() {
  const items = PRAYERS.filter(p => p.category === "opusdei");
  return `
    <p class="intro-text"> </p>
    ${items.map(renderPrayerCard).join("")}
    ${renderLitanyCard()}
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
        </li>
      `).join("")}
    </ul>
  `;
}

function mysterySetHtml(key, isToday) {
  const set = MYSTERIES[key];
  return `
    <div class="mystery-set ${isToday ? "is-today" : ""}">
      <div class="mystery-set-title">
        <span class="en">${set.name.en}</span>
        <span class="nl">${set.name.nl}</span>
      </div>
      <ol class="mystery-list">
        ${set.items.map(item => `
          <li>
            <span class="en">${item.en}</span>
            <span class="nl">${item.nl}</span>
            ${state.showLatin ? `<span class="la">${item.la}</span>` : ""}
          </li>
        `).join("")}
      </ol>
    </div>
  `;
}

function mysterySelectorHtml() {
  const todayKey = todayMysteryKey();
  const order = ["joyful", "sorrowful", "glorious", "luminous"];
  return `
    <div class="mystery-selector" id="mystery-selector">
      ${order.map(key => {
        const set = MYSTERIES[key];
        const isSelected = key === state.selectedMystery;
        const isToday = key === todayKey;
        return `
          <button class="mystery-chip ${isSelected ? "active" : ""}" data-mystery="${key}" aria-pressed="${isSelected}">
            <span class="en">${set.name.en}</span>
            <span class="nl">${set.name.nl}</span>
            ${isToday ? `<span class="mystery-chip-today">•</span>` : ""}
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderRosary() {
  const todayKey = todayMysteryKey();
  const selectedKey = state.selectedMystery;
  const isToday = selectedKey === todayKey;
  const selectedSet = MYSTERIES[selectedKey];

  const openingPrayers = ["signum-crucis", "credo", "pater-noster", "ave-maria", "gloria-patri"]
    .map(findPrayer);
  const closing = findPrayer(CLOSING_REF);
  const fatima = findPrayer("fatima");

  return `
    ${mysterySelectorHtml()}

    <div class="today-banner">
      <strong>${selectedSet.name.en} · ${selectedSet.name.nl}</strong>
      <span>${isToday
        ? "Today's mysteries — De geheimen van vandaag"
        : "Selected mysteries — Geselecteerde geheimen"}</span>
    </div>

    <h2 class="section-title"><span class="en">1. Opening Prayers</span> <span class="nl">Beginnende gebeden</span></h2>
    ${[...new Map(openingPrayers.map(p => [p.id, p])).values()].map(renderPrayerCard).join("")}

    <h2 class="section-title"><span class="en">2. Each Decade</span> <span class="nl">Elk tientje</span></h2>
    <div class="prayer-card" style="padding:6px 4px;">
      ${decadeStepsHtml()}
    </div>
    <p class="intro-text">See the prayer texts above (Our Father, Hail Mary, Glory Be) and below (Fatima Prayer).<br/>Zie de gebedsteksten hierboven (Onze Vader, Weesgegroet, Eer aan de Vader) en hieronder (Fátima-gebed).</p>
    ${renderPrayerCard(fatima)}

    <h2 class="section-title"><span class="en">3. The Mysteries</span> <span class="nl">De Geheimen</span></h2>
    ${mysterySetHtml(selectedKey, isToday)}

    <h2 class="section-title"><span class="en">4. Closing Prayer</span> <span class="nl">Slotgebed</span></h2>
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

if (fontDecreaseEl && fontIncreaseEl) {
  fontDecreaseEl.addEventListener("click", () => {
    if (state.fontStep > 0) {
      state.fontStep -= 1;
      localStorage.setItem(FONT_STORAGE_KEY, String(state.fontStep));
      applyFontSize();
    }
  });
  fontIncreaseEl.addEventListener("click", () => {
    if (state.fontStep < FONT_STEPS.length - 1) {
      state.fontStep += 1;
      localStorage.setItem(FONT_STORAGE_KEY, String(state.fontStep));
      applyFontSize();
    }
  });
}

/* Delegated clicks for dynamically-rendered controls */
contentEl.addEventListener("click", (e) => {
  const mysteryBtn = e.target.closest(".mystery-chip");
  if (mysteryBtn) {
    state.selectedMystery = mysteryBtn.dataset.mystery;
    localStorage.setItem(MYSTERY_STORAGE_KEY, state.selectedMystery);
    render();
    return;
  }

  const langBtn = e.target.closest(".litany-lang-btn");
  if (langBtn) {
    const lang = langBtn.dataset.lang;
    state.litanyLangs[lang] = !state.litanyLangs[lang];
    render();
    return;
  }
});

applyFontSize();
render();

/* ---------- Service worker registration (PWA) ---------- */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      /* offline support is optional — ignore failures */
    });
  });
}
