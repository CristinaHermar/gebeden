/* ============================================================
   GEBEDEN — app.js
   ============================================================ */

const FONT_SIZES = [14, 16, 18, 20, 22, 24];
const DEFAULT_FONT_SIZE_INDEX = 3; // 20px

const STORAGE_KEYS = {
  tab: "gebeden-tab",
  secondLang: "gebeden-second-lang",
  showLatin: "gebeden-show-latin",
  darkMode: "gebeden-dark-mode",
  vibration: "gebeden-vibration",
  fontSizeIndex: "gebeden-font-size-index",
  precesLang: "gebeden-preces-lang"
};

const state = {
  tab: "daily",
  showLatin: false,
  secondLang: "nl", // "nl" or "de" — which language shows in the right-hand column
  precesLang: "", // "es", "en", "nl", "de", or "" (empty = Latin only)
  selectedMystery: null, // set once MYSTERIES is available, see renderRosary
  fontSizeIndex: DEFAULT_FONT_SIZE_INDEX,
  darkMode: false,
  vibration: true,
  expandedPrayers: new Set(), // prayer ids currently expanded when shown as collapsible (Rosary tab)
  dailySearchQuery: ""
};

/* ---------- Persistence ---------- */

function loadSetting(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : raw;
  } catch (e) {
    return fallback;
  }
}

function saveSetting(key, value) {
  try {
    localStorage.setItem(key, String(value));
  } catch (e) {
    /* localStorage unavailable (private browsing, etc.) — ignore */
  }
}

function loadAllSettings() {
  const savedTab = loadSetting(STORAGE_KEYS.tab, state.tab);
  if (["daily", "rosary", "opusdei", "settings"].includes(savedTab)) state.tab = savedTab;

  const savedLang = loadSetting(STORAGE_KEYS.secondLang, state.secondLang);
  if (savedLang === "nl" || savedLang === "de" || savedLang === "es") state.secondLang = savedLang;

  const savedPrecesLang = loadSetting(STORAGE_KEYS.precesLang, state.precesLang);
  if (["", "es", "en", "nl", "de"].includes(savedPrecesLang)) state.precesLang = savedPrecesLang;

  state.showLatin = loadSetting(STORAGE_KEYS.showLatin, String(state.showLatin)) === "true";
  state.darkMode = loadSetting(STORAGE_KEYS.darkMode, String(state.darkMode)) === "true";
  state.vibration = loadSetting(STORAGE_KEYS.vibration, String(state.vibration)) === "true";

  const savedFontIdx = parseInt(loadSetting(STORAGE_KEYS.fontSizeIndex, String(state.fontSizeIndex)), 10);
  if (!Number.isNaN(savedFontIdx) && savedFontIdx >= 0 && savedFontIdx < FONT_SIZES.length) {
    state.fontSizeIndex = savedFontIdx;
  }
}

/* ---------- Haptics ---------- */

function vibrate(ms = 12) {
  if (state.vibration && navigator.vibrate) {
    try { navigator.vibrate(ms); } catch (e) { /* ignore */ }
  }
}

/* UI chrome strings that follow the chosen second language */
const UI = {
  jumpTo: { en: "Jump to", nl: "Ga naar", de: "Gehe zu", es: "Ir a" },
  selectPlaceholder: { en: "select", nl: "kies", de: "wähle", es: "selecciona" },
  opening: { en: "Prayers to Keep in Mind", nl: "Gebeden om te onthouden", de: "Wichtige Gebete", es: "Oraciones para Recordar" },
  closing: { en: "Closing Prayer", nl: "Slotgebed", de: "Schlussgebet", es: "Oración de Cierre" },
  chooseMystery: { en: "Choose which mysteries to pray", nl: "Kies welke geheimen u wilt bidden", de: "Wähle, welche Geheimnisse du beten möchtest", es: "Elige qué misterios rezar" },
  mysteriesNav: { en: "The Mysteries", nl: "De Geheimen", de: "Die Geheimnisse", es: "Los Misterios" },
  searchPlaceholder: { en: "Search prayers…", nl: "Zoek gebeden…", de: "Gebete suchen…", es: "Buscar oraciones…" },
  searchNoResults: { en: "No prayers match your search.", nl: "Geen gebeden gevonden.", de: "Keine Gebete gefunden.", es: "No hay oraciones que coincidan con tu búsqueda." },
  tabDaily: { nl: "Dagelijks", de: "Täglich", es: "Diarios" },
  tabRosary: { nl: "Rozenkrans", de: "Rosenkranz", es: "Rosario" },
  tabOpusDei: { nl: "Opus Dei", de: "Opus Dei", es: "Opus Dei" },
  tabSettings: { en: "Settings", nl: "Instellingen", de: "Einstellungen", es: "Configuración" },
  settingsLanguage: { en: "Default second language", nl: "Standaard tweede taal", de: "Standard-Zweitsprache", es: "Idioma secundario por defecto" },
  settingsLanguageDesc: {
    en: "Which language appears next to English on every prayer.",
    nl: "Welke taal naast het Engels verschijnt bij elk gebed.",
    de: "Welche Sprache neben Englisch bei jedem Gebet erscheint.",
    es: "Qué idioma aparece junto al inglés en cada oración."
  },
  settingsLatin: { en: "Show Latin by default", nl: "Toon Latijn standaard", de: "Latein standardmäßig anzeigen", es: "Mostrar latín por defecto" },
  settingsLatinDesc: {
    en: "Always show the Latin text alongside each prayer.",
    nl: "Toon altijd de Latijnse tekst naast elk gebed.",
    de: "Den lateinischen Text immer neben jedem Gebet anzeigen.",
    es: "Muestra siempre el texto en latín junto a cada oración."
  },
  settingsDark: { en: "Dark mode", nl: "Donkere modus", de: "Dunkler Modus", es: "Modo oscuro" },
  settingsDarkDesc: {
    en: "Easier on the eyes for night prayer.",
    nl: "Rustiger voor de ogen bij avondgebed.",
    de: "Angenehmer für die Augen beim Abendgebet.",
    es: "Más cómodo para los ojos al rezar por la noche."
  },
  settingsVibration: { en: "Vibration", nl: "Trilling", de: "Vibration", es: "Vibración" },
  settingsVibrationDesc: {
    en: "Brief haptic feedback when switching tabs or selecting.",
    nl: "Korte trilfeedback bij het wisselen van tabblad of selecteren.",
    de: "Kurze haptische Rückmeldung beim Wechseln oder Auswählen.",
    es: "Retroalimentación háptica breve al cambiar de pestaña o seleccionar."
  },
  settingsFontSize: { en: "Text size", nl: "Tekstgrootte", de: "Textgröße", es: "Tamaño del texto" },
  settingsReset: { en: "Reset to defaults", nl: "Terugzetten naar standaard", de: "Auf Standard zurücksetzen", es: "Restaurar valores por defecto" },
  on: { en: "On", nl: "Aan", de: "An", es: "Activado" },
  off: { en: "Off", nl: "Uit", de: "Aus", es: "Desactivado" }
};

const contentEl = document.getElementById("content");
const tabsEl = document.getElementById("tabs");
const latinToggleEl = document.getElementById("toggle-latin");
const langSwitchEl = document.getElementById("lang-switch");
const fontSizeControlEl = document.getElementById("font-size-control");
const backToTopEl = document.getElementById("back-to-top");

function findPrayer(id) {
  return PRAYERS.find(p => p.id === id);
}

/* ---------- Card renderers ---------- */

function renderPrecesLine(line, precesLang) {
  const langLabels = { es: "ES", en: "EN", nl: "NL", de: "DE" };
  if (line.type === "rubric") {
    let html = `<div class="preces-rubric">${line.la}</div>`;
    if (precesLang) {
      html += `<div class="preces-sub"><span class="preces-sub-label">${langLabels[precesLang]}</span>${line[precesLang] || line.en}</div>`;
    }
    return html;
  }
  const badge = line.type === "v" ? "V." : line.type === "r" ? "R." : "";
  let html = `<div class="preces-la">${badge ? `<span class="preces-badge">${badge}</span>` : ""}${line.la}</div>`;
  if (precesLang) {
    html += `<div class="preces-sub"><span class="preces-sub-label">${langLabels[precesLang]}</span>${line[precesLang] || line.en}</div>`;
  }
  return html;
}

function renderPrecesLines(prayer) {
  const precesLang = state.precesLang;
  let html = `
    <div class="preces-lang-selector">
      <label>Translation / Traducción:</label>
      <div class="preces-lang-buttons">
        <button class="preces-lang-btn ${precesLang === '' ? 'active' : ''}" data-preces-lang="">Latín only</button>
        <button class="preces-lang-btn ${precesLang === 'es' ? 'active' : ''}" data-preces-lang="es">Español</button>
        <button class="preces-lang-btn ${precesLang === 'en' ? 'active' : ''}" data-preces-lang="en">English</button>
        <button class="preces-lang-btn ${precesLang === 'nl' ? 'active' : ''}" data-preces-lang="nl">Nederlands</button>
        <button class="preces-lang-btn ${precesLang === 'de' ? 'active' : ''}" data-preces-lang="de">Deutsch</button>
      </div>
    </div>
  `;
  let groupOpen = false;
  prayer.lines.forEach((line) => {
    if (line.type !== "r") {
      if (groupOpen) html += `</div>`;
      html += `<div class="preces-group">`;
      groupOpen = true;
    }
    html += renderPrecesLine(line, precesLang);
  });
  if (groupOpen) html += `</div>`;
  return html;
}

function renderPrayerCard(prayer, opts = {}) {
  const collapsible = !!opts.collapsible;
  const isExpanded = !collapsible || state.expandedPrayers.has(prayer.id);
  const t = prayer.text;
  const lang2 = state.secondLang;
  let html = `
    <article class="prayer-card ${collapsible ? "collapsible" : ""} ${isExpanded ? "expanded" : ""}" id="prayer-${prayer.id}">
      <div class="prayer-title${collapsible ? " prayer-title-toggle" : ""}"${collapsible ? ` data-toggle-prayer="${prayer.id}" role="button" tabindex="0"` : ""}>
        <span class="col-title en">${prayer.title.en}</span>
        <span class="col-title nl">${prayer.title[lang2]}</span>
        ${collapsible ? `<span class="prayer-toggle-caret">${isExpanded ? "▲" : "▼"}</span>` : ""}
      </div>
  `;

  if (isExpanded && prayer.latinPrimary) {
    html += `<div class="preces-body">${renderPrecesLines(prayer)}</div>`;
    if (prayer.source) {
      const sourceText = [prayer.source.la, prayer.source.en, prayer.source[lang2]].filter(Boolean).join(" · ");
      html += `<p class="prayer-source">${sourceText}</p>`;
    }
  } else if (isExpanded) {
    html += `
      <div class="prayer-columns">
        <div class="col col-en">${t.en}</div>
        <div class="col col-nl">${t[lang2]}</div>
      </div>
    `;

    if (state.showLatin && t.la) {
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
      if (state.showLatin && prayer.source.la) {
        sourceText = prayer.source.la;
      } else {
        sourceText = [prayer.source.en, prayer.source[lang2]].join(" · ");
      }
      html += `<p class="prayer-source">${sourceText}</p>`;
    }
  }

  html += `</article>`;
  return html;
}

/* ---------- Search helpers ---------- */

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, " ");
}

function escapeAttr(str) {
  return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function prayerMatchesQuery(prayer, query, lang2) {
  const haystack = [
    prayer.title.en, prayer.title[lang2], prayer.title.la,
    stripHtml(prayer.text.en), stripHtml(prayer.text[lang2])
  ].filter(Boolean).join(" ").toLowerCase();
  return haystack.includes(query);
}

/* ---------- Tab: Daily ---------- */

function renderDaily() {
  const lang2 = state.secondLang;
  const allItems = PRAYERS.filter(p => p.category === "daily");
  const query = state.dailySearchQuery.trim().toLowerCase();
  const items = query ? allItems.filter(p => prayerMatchesQuery(p, query, lang2)) : allItems;
  const navItems = allItems.map(p => ({ id: `prayer-${p.id}`, en: p.title.en, second: p.title[lang2] }));
  return `
    <div class="search-wrap">
      <input
        type="search"
        id="daily-search"
        class="search-input"
        placeholder="${UI.searchPlaceholder.en} / ${UI.searchPlaceholder[lang2]}"
        value="${escapeAttr(state.dailySearchQuery)}"
      />
    </div>
    ${items.length
      ? items.map(p => renderPrayerCard(p, { collapsible: true })).join("")
      : `<p class="search-empty">${UI.searchNoResults.en} / ${UI.searchNoResults[lang2]}</p>`}
  `;
}

/* ---------- Tab: Opus Dei ---------- */

function renderOpusDei() {
  const items = PRAYERS.filter(p => p.category === "opusdei");
  return `
    ${items.map(p => renderPrayerCard(p, { collapsible: true })).join("")}
  `;
}

/* ---------- Tab: Rosary ---------- */

function mysterySelectorHtml(selectedKey, todayKey) {
  const lang2 = state.secondLang;
  const order = ["joyful", "sorrowful", "glorious", "luminous"];
  return `
    <div class="mystery-select-wrap" id="mystery-selector">
      <p class="mystery-select-label">${UI.chooseMystery.en} <span class="mystery-select-label-nl">/ ${UI.chooseMystery[lang2]}</span></p>
      <div class="mystery-select">
        ${order.map(key => {
          const set = MYSTERIES[key];
          return `
            <button class="mystery-select-btn ${key === selectedKey ? "active" : ""}" data-mystery="${key}">
              <span class="en">${set.name.en}</span>
              <span class="nl">${set.name[lang2]}</span>
              ${key === todayKey ? `<span class="today-dot" title="Today · Vandaag"></span>` : ""}
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function mysterySetHtml(key, isToday) {
  const set = MYSTERIES[key];
  const lang2 = state.secondLang;
  return `
    <div id="mystery-${key}">
      <div class="mystery-set ${isToday ? "is-today" : ""}">
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
  const openingPrayers = ["signum-crucis", "credo"].map(findPrayer);
  const closing = findPrayer(CLOSING_REF);
  const fatima = findPrayer("fatima");
  const threeHailMarys = findPrayer("three-hail-marys");
  const litany = findPrayer("litany-loreto");

  if (!state.selectedMystery) state.selectedMystery = todayKey;

  const navItems = [
    { id: "mystery-selector", en: UI.mysteriesNav.en, second: UI.mysteriesNav[lang2] },
    ...openingPrayers.map(p => ({ id: `prayer-${p.id}`, en: p.title.en, second: p.title[lang2] })),
    { id: "prayer-fatima", en: fatima.title.en, second: fatima.title[lang2] },
    { id: `prayer-${threeHailMarys.id}`, en: threeHailMarys.title.en, second: threeHailMarys.title[lang2] },
    { id: `prayer-${litany.id}`, en: litany.title.en, second: litany.title[lang2] },
    { id: `prayer-${closing.id}`, en: UI.closing.en, second: UI.closing[lang2] }
  ];

  return `
    ${mysterySelectorHtml(state.selectedMystery, todayKey)}
    ${mysterySetHtml(state.selectedMystery, state.selectedMystery === todayKey)}

    <h2 class="section-title" id="section-opening"><span class="en">${UI.opening.en}</span> <span class="nl">${UI.opening[lang2]}</span></h2>
    ${openingPrayers.map(p => renderPrayerCard(p, { collapsible: true })).join("")}

    ${renderPrayerCard(fatima, { collapsible: true })}

    ${renderPrayerCard(threeHailMarys, { collapsible: true })}

    ${renderPrayerCard(litany, { collapsible: true })}

    ${renderPrayerCard(closing, { collapsible: true })}
  `;
}

/* ---------- Tab: Settings ---------- */

function toggleSwitchHtml(id, isOn) {
  return `
    <button class="toggle-switch ${isOn ? "on" : ""}" id="${id}" role="switch" aria-checked="${isOn}">
      <span class="toggle-knob"></span>
    </button>
  `;
}

function renderSettings() {
  const lang2 = state.secondLang;
  return `
    <div class="settings-section">
      <div class="settings-row">
        <div class="settings-row-text">
          <span class="settings-row-title">${UI.settingsLanguage.en} <span class="settings-row-title-nl">/ ${UI.settingsLanguage[lang2]}</span></span>
          <span class="settings-row-desc">${UI.settingsLanguageDesc.en} ${UI.settingsLanguageDesc[lang2]}</span>
        </div>
        <div class="lang-switch settings-lang-switch" id="settings-lang-switch">
          <button class="lang-switch-btn ${state.secondLang === "nl" ? "active" : ""}" data-lang="nl">Nederlands</button>
          <button class="lang-switch-btn ${state.secondLang === "de" ? "active" : ""}" data-lang="de">Deutsch</button>
          <button class="lang-switch-btn ${state.secondLang === "es" ? "active" : ""}" data-lang="es">Español</button>
        </div>
      </div>

      <div class="settings-row">
        <div class="settings-row-text">
          <span class="settings-row-title">${UI.settingsLatin.en} <span class="settings-row-title-nl">/ ${UI.settingsLatin[lang2]}</span></span>
          <span class="settings-row-desc">${UI.settingsLatinDesc.en} ${UI.settingsLatinDesc[lang2]}</span>
        </div>
        ${toggleSwitchHtml("settings-toggle-latin", state.showLatin)}
      </div>

      <div class="settings-row">
        <div class="settings-row-text">
          <span class="settings-row-title">${UI.settingsDark.en} <span class="settings-row-title-nl">/ ${UI.settingsDark[lang2]}</span></span>
          <span class="settings-row-desc">${UI.settingsDarkDesc.en} ${UI.settingsDarkDesc[lang2]}</span>
        </div>
        ${toggleSwitchHtml("settings-toggle-dark", state.darkMode)}
      </div>

      <div class="settings-row">
        <div class="settings-row-text">
          <span class="settings-row-title">${UI.settingsVibration.en} <span class="settings-row-title-nl">/ ${UI.settingsVibration[lang2]}</span></span>
          <span class="settings-row-desc">${UI.settingsVibrationDesc.en} ${UI.settingsVibrationDesc[lang2]}</span>
        </div>
        ${toggleSwitchHtml("settings-toggle-vibration", state.vibration)}
      </div>

      <div class="settings-row">
        <div class="settings-row-text">
          <span class="settings-row-title">${UI.settingsFontSize.en} <span class="settings-row-title-nl">/ ${UI.settingsFontSize[lang2]}</span></span>
          <span class="settings-row-desc">${FONT_SIZES[state.fontSizeIndex]}px</span>
        </div>
        <div class="font-size-control" id="settings-font-size-control">
          <button class="font-size-btn" data-action="decrease" aria-label="Decrease text size" ${state.fontSizeIndex === 0 ? "disabled" : ""}>A−</button>
          <button class="font-size-btn" data-action="increase" aria-label="Increase text size" ${state.fontSizeIndex === FONT_SIZES.length - 1 ? "disabled" : ""}>A+</button>
        </div>
      </div>
    </div>

    <button class="settings-reset" id="settings-reset">
      ${UI.settingsReset.en} <span class="settings-reset-nl">/ ${UI.settingsReset[lang2]}</span>
    </button>
  `;
}

/* ---------- Router ---------- */

function render() {
  let html = "";
  if (state.tab === "daily") html = renderDaily();
  else if (state.tab === "rosary") html = renderRosary();
  else if (state.tab === "opusdei") html = renderOpusDei();
  else if (state.tab === "settings") html = renderSettings();

  contentEl.innerHTML = html;
  syncSettingsControls();
}

function updateChrome() {
  const lang2 = state.secondLang;

  const tabNlEls = tabsEl.querySelectorAll(".tab-nl");
  if (tabNlEls[0]) tabNlEls[0].textContent = UI.tabDaily[lang2];
  if (tabNlEls[1]) tabNlEls[1].textContent = UI.tabRosary[lang2];
  if (tabNlEls[2]) tabNlEls[2].textContent = UI.tabOpusDei[lang2];
  if (tabNlEls[3]) tabNlEls[3].textContent = UI.tabSettings[lang2];

  [...langSwitchEl.querySelectorAll(".lang-switch-btn")].forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang2);
  });

  [...tabsEl.querySelectorAll(".tab")].forEach(t => t.classList.toggle("active", t.dataset.tab === state.tab));

  latinToggleEl.setAttribute("aria-pressed", String(state.showLatin));
}

/* Re-applies state to any settings controls currently in the DOM
   (both the settings tab and the header controls). */
function syncSettingsControls() {
  const darkToggle = document.getElementById("settings-toggle-dark");
  if (darkToggle) {
    darkToggle.classList.toggle("on", state.darkMode);
    darkToggle.setAttribute("aria-checked", String(state.darkMode));
  }
  const vibrationToggle = document.getElementById("settings-toggle-vibration");
  if (vibrationToggle) {
    vibrationToggle.classList.toggle("on", state.vibration);
    vibrationToggle.setAttribute("aria-checked", String(state.vibration));
  }
  const latinToggleInSettings = document.getElementById("settings-toggle-latin");
  if (latinToggleInSettings) {
    latinToggleInSettings.classList.toggle("on", state.showLatin);
    latinToggleInSettings.setAttribute("aria-checked", String(state.showLatin));
  }
}

/* ---------- Dark mode ---------- */

function applyDarkMode() {
  document.documentElement.setAttribute("data-theme", state.darkMode ? "dark" : "light");
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) themeColorMeta.setAttribute("content", state.darkMode ? "#16110d" : "#7a1f3d");
  saveSetting(STORAGE_KEYS.darkMode, state.darkMode);
}

/* ---------- Font size ---------- */

function applyFontSize() {
  document.documentElement.style.fontSize = FONT_SIZES[state.fontSizeIndex] + "px";
  if (fontSizeControlEl) {
    const decBtn = fontSizeControlEl.querySelector('[data-action="decrease"]');
    const incBtn = fontSizeControlEl.querySelector('[data-action="increase"]');
    if (decBtn) decBtn.disabled = state.fontSizeIndex === 0;
    if (incBtn) incBtn.disabled = state.fontSizeIndex === FONT_SIZES.length - 1;
  }
  saveSetting(STORAGE_KEYS.fontSizeIndex, state.fontSizeIndex);
}

function increaseFontSize() {
  if (state.fontSizeIndex < FONT_SIZES.length - 1) state.fontSizeIndex++;
  applyFontSize();
  if (state.tab === "settings") render();
}

function decreaseFontSize() {
  if (state.fontSizeIndex > 0) state.fontSizeIndex--;
  applyFontSize();
  if (state.tab === "settings") render();
}

/* ---------- Event listeners ---------- */

tabsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  state.tab = btn.dataset.tab;
  saveSetting(STORAGE_KEYS.tab, state.tab);
  vibrate();
  [...tabsEl.querySelectorAll(".tab")].forEach(t => t.classList.toggle("active", t === btn));
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

latinToggleEl.addEventListener("click", () => {
  state.showLatin = !state.showLatin;
  saveSetting(STORAGE_KEYS.showLatin, state.showLatin);
  vibrate();
  latinToggleEl.setAttribute("aria-pressed", String(state.showLatin));
  render();
});

langSwitchEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".lang-switch-btn");
  if (!btn) return;
  state.secondLang = btn.dataset.lang;
  saveSetting(STORAGE_KEYS.secondLang, state.secondLang);
  vibrate();
  updateChrome();
  render();
});

/* Jump-to-prayer selectors, mystery buttons, settings controls, and Preces language buttons
   are re-created on every render, so listen via delegation on the content container. */
contentEl.addEventListener("click", (e) => {
  const precesLangBtn = e.target.closest(".preces-lang-btn");
  if (precesLangBtn) {
    const newLang = precesLangBtn.dataset.precesLang;
    if (["", "es", "en", "nl", "de"].includes(newLang)) {
      state.precesLang = newLang;
      saveSetting(STORAGE_KEYS.precesLang, state.precesLang);
      vibrate();
      render();
    }
    return;
  }
});

function togglePrayerExpanded(id) {
  if (state.expandedPrayers.has(id)) state.expandedPrayers.delete(id);
  else state.expandedPrayers.add(id);
  vibrate();
  render();
}

contentEl.addEventListener("keydown", (e) => {
  const toggle = e.target.closest(".prayer-title-toggle");
  if (!toggle) return;
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    togglePrayerExpanded(toggle.dataset.togglePrayer);
  }
});

contentEl.addEventListener("input", (e) => {
  const searchInput = e.target.closest("#daily-search");
  if (!searchInput) return;
  state.dailySearchQuery = searchInput.value;
  const cursorPos = searchInput.selectionStart;
  render();
  const newInput = document.getElementById("daily-search");
  if (newInput) {
    newInput.focus();
    newInput.setSelectionRange(cursorPos, cursorPos);
  }
});

contentEl.addEventListener("click", (e) => {
  const toggle = e.target.closest(".prayer-title-toggle");
  if (toggle) {
    togglePrayerExpanded(toggle.dataset.togglePrayer);
    return;
  }

  const mysteryBtn = e.target.closest(".mystery-select-btn");
  if (mysteryBtn) {
    state.selectedMystery = mysteryBtn.dataset.mystery;
    vibrate();
    render();
    document.getElementById("mystery-selector")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const settingsLangBtn = e.target.closest("#settings-lang-switch .lang-switch-btn");
  if (settingsLangBtn) {
    state.secondLang = settingsLangBtn.dataset.lang;
    saveSetting(STORAGE_KEYS.secondLang, state.secondLang);
    vibrate();
    updateChrome();
    render();
    return;
  }

  if (e.target.closest("#settings-toggle-latin")) {
    state.showLatin = !state.showLatin;
    saveSetting(STORAGE_KEYS.showLatin, state.showLatin);
    vibrate();
    updateChrome();
    render();
    return;
  }

  if (e.target.closest("#settings-toggle-dark")) {
    state.darkMode = !state.darkMode;
    applyDarkMode();
    vibrate();
    render();
    return;
  }

  if (e.target.closest("#settings-toggle-vibration")) {
    state.vibration = !state.vibration;
    saveSetting(STORAGE_KEYS.vibration, state.vibration);
    vibrate();
    render();
    return;
  }

  const settingsFontBtn = e.target.closest("#settings-font-size-control .font-size-btn");
  if (settingsFontBtn) {
    if (settingsFontBtn.dataset.action === "increase") increaseFontSize();
    else decreaseFontSize();
    return;
  }

  if (e.target.closest("#settings-reset")) {
    state.secondLang = "nl";
    state.showLatin = false;
    state.darkMode = false;
    state.vibration = true;
    state.fontSizeIndex = DEFAULT_FONT_SIZE_INDEX;
    saveSetting(STORAGE_KEYS.secondLang, state.secondLang);
    saveSetting(STORAGE_KEYS.showLatin, state.showLatin);
    saveSetting(STORAGE_KEYS.vibration, state.vibration);
    applyDarkMode();
    applyFontSize();
    vibrate(20);
    updateChrome();
    render();
  }
});

if (fontSizeControlEl) {
  fontSizeControlEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".font-size-btn");
    if (!btn) return;
    if (btn.dataset.action === "increase") increaseFontSize();
    else decreaseFontSize();
  });
}

/* ---------- Back to top ---------- */

if (backToTopEl) {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      backToTopEl.hidden = window.scrollY < 400;
      ticking = false;
    });
  });

  backToTopEl.addEventListener("click", () => {
    vibrate();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Init ---------- */

loadAllSettings();
applyDarkMode();
applyFontSize();
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
