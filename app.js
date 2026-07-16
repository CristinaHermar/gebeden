/* ============================================================
   GEBEDEN — app.js
   ============================================================ */

const FONT_STEPS = [15, 17, 19, 21, 23];
const DEFAULT_FONT_INDEX = 1;

const state = {
  tab: "daily",
  showLatin: false,
  rosaryMystery: null, // set on init to today's
  fontIndex: DEFAULT_FONT_INDEX
};

const contentEl = document.getElementById("content");
const tabsEl = document.getElementById("tabs");
const latinToggleEl = document.getElementById("toggle-latin");
const fontSmallerEl = document.getElementById("font-smaller");
const fontLargerEl = document.getElementById("font-larger");
const fontIndicatorEl = document.getElementById("font-indicator");

function findPrayer(id) {
  return PRAYERS.find(p => p.id === id);
}

/* ---------- Font size ---------- */

function applyFontSize() {
  const px = FONT_STEPS[state.fontIndex];
  document.documentElement.style.fontSize = px + "px";
  fontIndicatorEl.textContent = px + "px";
  fontSmallerEl.disabled = state.fontIndex === 0;
  fontLargerEl.disabled = state.fontIndex === FONT_STEPS.length - 1;
  try { localStorage.setItem("gebeden-font-index", String(state.fontIndex)); } catch (e) {}
}

function loadFontSize() {
  try {
    const saved = localStorage.getItem("gebeden-font-index");
    if (saved !== null && FONT_STEPS[Number(saved)] !== undefined) {
      state.fontIndex = Number(saved);
    }
  } catch (e) {}
  applyFontSize();
}

fontSmallerEl.addEventListener("click", () => {
  state.fontIndex = Math.max(0, state.fontIndex - 1);
  applyFontSize();
});

fontLargerEl.addEventListener("click", () => {
  state.fontIndex = Math.min(FONT_STEPS.length - 1, state.fontIndex + 1);
  applyFontSize();
});

/* ---------- Card renderers ---------- */

function renderPrayerCard(prayer, opts = {}) {
  const t = prayer.text;
  const showLatin = opts.forceLatin || state.showLatin;

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

  if (showLatin) {
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
        ${showLatin ? `<div class="prayer-latin" style="margin:10px 0 0;">${prayer.note.la}</div>` : ""}
      </div>
    `;
  }

  if (opts.spanish && t.es) {
    html += `
      <details class="es-details">
        <summary>Ver traducción en español</summary>
        <div class="prayer-spanish">
          ${t.es}
          ${prayer.source && prayer.source.es ? `<span class="prayer-spanish-source">${prayer.source.es}</span>` : ""}
        </div>
      </details>
    `;
  } else if (prayer.source) {
    html += `<p class="prayer-source">${showLatin ? prayer.source.la : (prayer.source.en + " · " + prayer.source.nl)}</p>`;
  }

  html += `</article>`;
  return html;
}

/* ---------- Tab: Daily ---------- */

function renderDaily() {
  const items = PRAYERS.filter(p => p.category === "daily");
  return `
    <p class="intro-text">
      Common prayers for morning, evening, and any moment of the day.<br/>
      Gewone gebeden voor ochtend, avond en elk moment van de dag.
    </p>
    ${items.map(p => renderPrayerCard(p)).join("")}
  `;
}

/* ---------- Tab: Opus Dei ---------- */

function renderOpusDei() {
  const items = PRAYERS.filter(p => p.category === "opusdei");
  return `
    <p class="intro-text">
      Two short prayers in Latin to frame a time of personal prayer, as taught by St. Josemaría Escrivá.
      Tap "Ver traducción en español" to read them in Spanish — no official Spanish version is published, so this is an unofficial translation.<br/>
      Twee korte Latijnse gebeden om een moment van persoonlijk gebed te omkaderen, zoals onderwezen door de heilige Jozefmaria Escrivá.
    </p>
    ${items.map(p => renderPrayerCard(p, { forceLatin: true, spanish: true })).join("")}
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

function mysterySetHtml(key) {
  const set = MYSTERIES[key];
  return `
    <div class="mystery-set">
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

function todayMysteryKey() {
  const day = new Date().getDay(); // 0 = Sunday
  return Object.keys(MYSTERIES).find(key => MYSTERIES[key].days.includes(day));
}

function mysteryPickerHtml(todayKey) {
  const order = ["joyful", "sorrowful", "glorious", "luminous"];
  return `
    <div class="mystery-picker">
      ${order.map(key => {
        const set = MYSTERIES[key];
        const selected = state.rosaryMystery === key;
        return `
          <button data-mystery="${key}" class="${selected ? "selected" : ""}">
            <span class="en">${set.name.en}${key === todayKey ? '<span class="today-dot" title="Today / Vandaag"></span>' : ""}</span>
            <span class="nl">${set.name.nl}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderRosary() {
  const todayKey = todayMysteryKey();
  if (!state.rosaryMystery) state.rosaryMystery = todayKey;

  const selectedKey = state.rosaryMystery;
  const selectedSet = MYSTERIES[selectedKey];
  const isToday = selectedKey === todayKey;

  const openingIds = ["signum-crucis", "credo", "pater-noster", "ave-maria", "gloria-patri"];
  const openingPrayers = [...new Map(openingIds.map(findPrayer).map(p => [p.id, p])).values()];
  const closing = findPrayer(CLOSING_REF);
  const fatima = findPrayer("fatima");

  return `
    <div class="today-banner">
      <strong>${selectedSet.name.en} · ${selectedSet.name.nl}</strong>
      <span>${isToday ? "Today's mysteries — De geheimen van vandaag" : "Selected mysteries — Geselecteerde geheimen"}</span>
    </div>

    ${mysteryPickerHtml(todayKey)}

    <h2 class="section-title"><span class="en">1. Opening Prayers</span> <span class="nl">Beginnende gebeden</span></h2>
    ${openingPrayers.map(p => renderPrayerCard(p)).join("")}

    <h2 class="section-title"><span class="en">2. Each Decade</span> <span class="nl">Elk tientje</span></h2>
    <div class="prayer-card" style="padding:6px 4px;">
      ${decadeStepsHtml()}
    </div>
    <p class="intro-text">See the prayer texts above (Our Father, Hail Mary, Glory Be) and below (Fatima Prayer).<br/>Zie de gebedsteksten hierboven (Onze Vader, Weesgegroet, Eer aan de Vader) en hieronder (Fátima-gebed).</p>
    ${renderPrayerCard(fatima)}

    <h2 class="section-title"><span class="en">3. The Mysteries</span> <span class="nl">De Geheimen</span></h2>
    ${mysterySetHtml(selectedKey)}

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

contentEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".mystery-picker button");
  if (!btn) return;
  state.rosaryMystery = btn.dataset.mystery;
  render();
});

loadFontSize();
render();

/* ---------- Service worker registration (PWA) ---------- */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      /* offline support is optional — ignore failures */
    });
  });
}
