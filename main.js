"use strict";

const {
  Plugin,
  PluginSettingTab,
  Setting,
  TFile,
  Component,
  MarkdownView,
  MarkdownRenderer,
  Modal,
  FuzzySuggestModal,
  prepareFuzzySearch,
  Notice,
} = require("obsidian");

const DEFAULT_SETTINGS = {
  fmKey: "reference",
  hoverEnabled: true,
  hoverDelay: 200,
  showNotFound: true,
  inlineMeaning: false,
  language: "fa", // "fa" | "en"
};

/* ---------- ترجمه‌ها ---------- */
const I18N = {
  fa: {
    settingsTitle: "معنی هایلایت",
    hint1: "هاور = نمایش معنی · کلیک = واژهٔ موجود: تولتیپ / واژهٔ غایب: افزودن · Ctrl+کلیک = باز کردن در واژه‌نامه · Shift+کلیک = ویرایش",
    hint2: "فرمت واژه‌نامه: هر خط «واژه :: معنی» — ادامهٔ معنی در خط بعدی با تورفتگی. مرجع هر یادداشت از فرانت‌متر خوانده می‌شود.",
    language: "زبان",
    languageDesc: "زبان رابط کاربری پلاگین را انتخاب کن.",
    fmKey: "کلید فرانت‌متر",
    fmKeyDesc: "در فرانت‌متر هر یادداشت، مسیر واژه‌نامه جلوی همین کلید نوشته می‌شود. این کلیدها هم پذیرفته می‌شوند: dictionary، glossary، vocab، مرجع، منبع، واژه‌نامه، لغتنامه",
    hoverEnabled: "نمایش معنی با هاور",
    hoverEnabledDesc: "وقتی موس روی هایلایت می‌رود، معنی به‌صورت تولتیپ نشان داده شود.",
    hoverDelay: "تاخیر هاور (میلی‌ثانیه)",
    showNotFound: "پیام «پیدا نشد»",
    showNotFoundDesc: "اگر واژه در مرجع نبود، تولتیپی با دکمهٔ افزودن نشان بده (فقط وقتی مرجع تنظیم شده باشد).",
    inlineMeaning: "درج معنی کنار هایلایت (فقط حالت خواندن)",
    inlineMeaningDesc: "معنی به‌صورت برچسب کوچک بعد از هایلایت نمایش داده شود؛ بدون نیاز به هاور.",
    activeNoteStatus: "وضعیت یادداشت فعال",
    noNoteOpen: "یادداشتی باز نیست.",
    reload: "بارگذاری دوباره",
    reloaded: (n) => `📖 ${n} معنی بارگذاری شد.`,
    noRef: (name) => `«${name}» مرجع ندارد. روی یک هایلایت کلیک کن یا از پالت دستورات «انتخاب یادداشت مرجع» را بزن.`,
    refStatus: (name, refs, count) => `«${name}» → مرجع: ${refs.join(" ، ")} (${count} معنی)`,
    channelsTitle: "🌐 ما را دنبال کنید",
    channelsDesc: "آموزش‌ها و مطالب بیشتر دربارهٔ ابسیدین در کانال‌های ما:",
    telegram: "تلگرام",
    bale: "بله",
    youtube: "یوتیوب",

    cmdReloadDict: "بارگذاری دوباره واژه‌نامهٔ این یادداشت",
    cmdChooseRef: "انتخاب یادداشت مرجع برای این یادداشت",
    cmdAddEditCursor: "افزودن/ویرایش واژهٔ هایلایت زیر نشانگر",
    ribbonTitle: "واژه‌نامهٔ این یادداشت",

    notFoundRef: (raw) => `یادداشت مرجع «${raw}» پیدا نشد.`,
    cursorNotInHighlight: "نشانگر را داخل یک هایلایت ==واژه== بگذار.",
    noNoteOpenShort: "یادداشتی باز نیست.",
    frontmatterWriteFailed: (msg) => "❌ نوشتن فرانت‌متر ناموفق بود: " + msg,
    frontmatterWritten: (noteName, refName) => `📌 «${noteName}» → مرجع: «${refName}» (در فرانت‌متر ذخیره شد)`,
    currentNoteNotFound: "یادداشت فعلی پیدا نشد.",
    invalidTerm: "واژه نامعتبر است.",
    chooseRefFirst: "اول یادداشت مرجع را انتخاب کن (روی واژهٔ غایب کلیک کن).",
    saveFailed: (msg) => "ذخیره ناموفق بود: " + msg,
    entrySaved: (term, fileName) => `✅ «${term}» در «${fileName}» ذخیره شد.`,

    addModalTitleEdit: "ویرایش معنی",
    addModalTitleAdd: "افزودن به واژه‌نامه",
    labelTerm: "واژه:",
    labelMeaning: "معنی",
    labelSaveIn: (name) => "📍 ذخیره در: " + name,
    keysHint: "↵ ذخیره · Shift+↵ خط جدید",
    btnCancel: "انصراف",
    btnSave: "ذخیره",

    filePickerPlaceholder: "یادداشت مرجع (واژه‌نامه) را انتخاب کن…",

    tooltipNotFound: (term) => `«${term}» در واژه‌نامه پیدا نشد.`,
    tooltipAdd: "＋ افزودن به واژه‌نامه",
    tooltipEdit: "ویرایش",
    tooltipOpenSource: "باز کردن در منبع",

    statusEmpty: "📖 —",
    statusHasRefs: (count, names) => `📖 ${count} · ${names}`,
    statusAriaHas: (names) => `واژه‌نامهٔ این یادداشت: ${names} (کلیک = باز کردن)`,
    statusAriaEmpty: "این یادداشت واژه‌نامه ندارد (کلیک = انتخاب)",

    langNameFa: "فارسی",
    langNameEn: "English",
    dir: "rtl",
  },
  en: {
    settingsTitle: "Highlight Reference",
    hint1: "Hover = show meaning · Click = existing word: tooltip / missing word: add · Ctrl+Click = open in glossary · Shift+Click = edit",
    hint2: "Glossary format: each line «term :: meaning» — continue meaning on next line with indentation. Each note's reference is read from frontmatter.",
    language: "Language",
    languageDesc: "Choose the plugin UI language.",
    fmKey: "Frontmatter key",
    fmKeyDesc: "In each note's frontmatter, the glossary path is written under this key. These keys are also accepted: dictionary, glossary, vocab, reference, source.",
    hoverEnabled: "Show meaning on hover",
    hoverEnabledDesc: "When the mouse hovers over a highlight, show the meaning as a tooltip.",
    hoverDelay: "Hover delay (ms)",
    showNotFound: "“Not found” message",
    showNotFoundDesc: "If a word isn't in the glossary, show a tooltip with an add button (only when a reference is set).",
    inlineMeaning: "Inline meaning next to highlight (reading view only)",
    inlineMeaningDesc: "Show the meaning as a small label after the highlight; no hover needed.",
    activeNoteStatus: "Active note status",
    noNoteOpen: "No note is open.",
    reload: "Reload",
    reloaded: (n) => `📖 ${n} meanings loaded.`,
    noRef: (name) => `“${name}” has no reference. Click a highlight or run “Choose reference note” from the command palette.`,
    refStatus: (name, refs, count) => `“${name}” → reference: ${refs.join(", ")} (${count} meanings)`,
    channelsTitle: "🌐 Follow us",
    channelsDesc: "More Obsidian tutorials and content on our channels:",
    telegram: "Telegram",
    bale: "Bale",
    youtube: "YouTube",

    cmdReloadDict: "Reload this note's glossary",
    cmdChooseRef: "Choose reference note for this note",
    cmdAddEditCursor: "Add/Edit highlighted word at cursor",
    ribbonTitle: "This note's glossary",

    notFoundRef: (raw) => `Reference note “${raw}” not found.`,
    cursorNotInHighlight: "Place the cursor inside a ==word== highlight.",
    noNoteOpenShort: "No note is open.",
    frontmatterWriteFailed: (msg) => "❌ Failed to write frontmatter: " + msg,
    frontmatterWritten: (noteName, refName) => `📌 “${noteName}” → reference: “${refName}” (saved in frontmatter)`,
    currentNoteNotFound: "Current note not found.",
    invalidTerm: "Invalid term.",
    chooseRefFirst: "Choose a reference note first (click a missing word).",
    saveFailed: (msg) => "Save failed: " + msg,
    entrySaved: (term, fileName) => `✅ “${term}” saved in “${fileName}”.`,

    addModalTitleEdit: "Edit meaning",
    addModalTitleAdd: "Add to glossary",
    labelTerm: "Term:",
    labelMeaning: "Meaning",
    labelSaveIn: (name) => "📍 Save in: " + name,
    keysHint: "↵ Save · Shift+↵ new line",
    btnCancel: "Cancel",
    btnSave: "Save",

    filePickerPlaceholder: "Choose the reference (glossary) note…",

    tooltipNotFound: (term) => `“${term}” not found in glossary.`,
    tooltipAdd: "＋ Add to glossary",
    tooltipEdit: "Edit",
    tooltipOpenSource: "Open in source",

    statusEmpty: "📖 —",
    statusHasRefs: (count, names) => `📖 ${count} · ${names}`,
    statusAriaHas: (names) => `This note's glossary: ${names} (click = open)`,
    statusAriaEmpty: "This note has no glossary (click = choose)",

    langNameFa: "فارسی",
    langNameEn: "English",
    dir: "ltr",
  },
};

const FM_ALIASES = [
  "reference", "dictionary", "glossary", "vocab", "lexicon",
  "مرجع", "منبع", "واژه‌نامه", "لغتنامه", "واژگان",
];

/* ---------- توابع کمکی ---------- */

function normalizeTerm(raw) {
  return (raw || "")
    .replace(/[\u200b\u200c\u200e\u200f\ufeff]/g, "")
    .replace(/\u064a/g, "\u06cc")
    .replace(/\u0643/g, "\u06a9")
    .replace(/[\u0623\u0625\u0622]/g, "\u0627")
    .replace(/\u0629/g, "\u0647")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function cleanTerm(raw) {
  return (raw || "")
    .replace(/`/g, "")
    .replace(/^=+/, "")
    .replace(/=+$/, "")
    .replace(/^[\s*_]+/, "")
    .replace(/[\s*_]+$/, "")
    .trim();
}

function stripBullet(s) {
  return String(s || "").replace(/^\s*(?:[-*+>]\s+|\d+[.)]\s+)+/, "");
}

function basename(path) {
  return (path || "").split("/").pop();
}

/* ---------- پنجرهٔ انتخاب یادداشت مرجع ---------- */

class FilePickerModal extends FuzzySuggestModal {
  constructor(app, onPick, t) {
    super(app);
    this.onPick = onPick;
    this.t = t || I18N.fa;
    this.setPlaceholder(this.t.filePickerPlaceholder);
  }

  getSuggestions(query) {
    const q = (query || "").trim().toLowerCase();
    const files = this.app.vault.getMarkdownFiles();
    if (!q) return files.slice(0, 100).map((f) => ({ item: f, match: null }));
    const fuzzy = prepareFuzzySearch(q);
    const scored = [];
    for (const f of files) {
      const r = fuzzy(f.path) || fuzzy(f.basename);
      if (r) scored.push({ item: f, match: r });
    }
    scored.sort((a, b) => (b.match ? b.match.score : 0) - (a.match ? a.match.score : 0));
    return scored.slice(0, 100);
  }

  renderSuggestion(hit, el) {
    const f = hit && hit.item ? hit.item : hit;
    el.addClass("hm-suggest-item");
    el.createDiv({ cls: "hm-suggest-name", text: f.basename });
    el.createDiv({ cls: "hm-suggest-path", text: f.path });
  }

  getItemText(f) {
    return f.path;
  }

  onChooseItem(f) {
    if (this.onPick) this.onPick(f);
  }
}

/* ---------- مودال افزودن / ویرایش معنی ---------- */

class AddMeaningModal extends Modal {
  constructor(app, plugin, term, existing) {
    super(app);
    this.plugin = plugin;
    this.term = term || "";
    this.existing = existing || null;
  }

  onOpen() {
    const { contentEl } = this;
    const t = this.plugin.t();
    contentEl.addClass("hm-add-modal");

    contentEl.createEl("h3", {
      text: this.existing ? t.addModalTitleEdit : t.addModalTitleAdd,
    });

    const termRow = contentEl.createDiv({ cls: "hm-term-row" });
    termRow.createSpan({ cls: "hm-term-label", text: t.labelTerm });
    termRow.createSpan({
      cls: "hm-term-pill",
      text: this.existing ? this.existing.term : this.term,
    });

    contentEl.createDiv({ cls: "hm-field-label", text: t.labelMeaning });
    this.areaEl = contentEl.createEl("textarea", { cls: "hm-full-width" });
    this.areaEl.rows = 5;
    this.areaEl.value =
      this.existing && this.existing.meaning !== "—" ? this.existing.meaning : "";
    this.areaEl.setAttribute("spellcheck", "false");

    const target =
      this.existing
        ? basename(this.existing.path)
        : this.plugin.activeRefs && this.plugin.activeRefs[0]
        ? basename(this.plugin.activeRefs[0].path)
        : "—";
    contentEl.createDiv({ cls: "hm-add-hint", text: t.labelSaveIn(target) });
    contentEl.createDiv({ cls: "hm-add-keys", text: t.keysHint });

    const buttons = contentEl.createDiv({ cls: "hm-add-buttons" });
    const cancel = buttons.createEl("button", { text: t.btnCancel });
    cancel.addEventListener("click", () => this.close());
    this.saveBtn = buttons.createEl("button", { text: t.btnSave, cls: "mod-cta" });
    this.saveBtn.addEventListener("click", () => this.submit());

    this.areaEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey || !e.shiftKey)) {
        e.preventDefault();
        this.submit();
      }
    });

    setTimeout(() => this.areaEl.focus(), 30);
  }

  async submit() {
    if (this.saving) return;
    this.saving = true;
    if (this.saveBtn) this.saveBtn.disabled = true;
    const term = this.existing ? this.existing.term : this.term;
    const ok = await this.plugin.saveEntry(term, this.areaEl.value, this.existing);
    if (ok) {
      this.close();
    } else {
      this.saving = false;
      if (this.saveBtn) this.saveBtn.disabled = false;
    }
  }

  onClose() {
    this.contentEl.empty();
  }
}

/* ---------- پلاگین ---------- */

class HighlightReferencePlugin extends Plugin {
  async onload() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.dictionary = new Map();
    this.dictionaryPaths = [];
    this.activeNote = null;
    this.activeRefs = [];
    this.dictCache = new Map();
    this.tooltip = null;
    this.tooltipComponent = null;
    this.tooltipOpen = false;
    this.currentTrigger = null;
    this.showTimer = null;
    this.hideTimer = null;
    this.commandIds = [];
    this.ribbonEl = null;

    this.addSettingTab(new HighlightReferenceSettingTab(this.app, this));

    this.statusEl = this.addStatusBarItem();
    this.statusEl.addClass("hm-status");
    this.registerDomEvent(this.statusEl, "click", () => this.openActiveReferenceOrPrompt());
    this.updateStatus();

    this.registerCommands();

    this.ribbonEl = this.addRibbonIcon("book", this.t().ribbonTitle, () =>
      this.openActiveReferenceOrPrompt()
    );

    this.registerEvent(this.app.workspace.on("file-open", () => this.loadDictionaryForActive()));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.loadDictionaryForActive()));

    this.registerEvent(
      this.app.metadataCache.on("changed", (file) => {
        if (file instanceof TFile && this.activeNote && file.path === this.activeNote.path) {
          this.loadDictionaryForActive();
        }
      })
    );

    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (file instanceof TFile && this.dictCache.has(file.path)) {
          this.dictCache.delete(file.path);
          this.loadDictionaryForActive();
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("rename", (file, oldPath) => {
        if (this.dictCache.has(oldPath)) {
          this.dictCache.delete(oldPath);
          this.loadDictionaryForActive();
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("delete", (file) => {
        if (this.dictCache.has(file.path)) {
          this.dictCache.delete(file.path);
          this.loadDictionaryForActive();
        }
      })
    );

    this.registerDomEvent(document.body, "mouseover", (evt) => this.onMouseOver(evt), { passive: true });
    this.registerDomEvent(document.body, "mouseout", (evt) => this.onMouseOut(evt), { passive: true });
    this.registerDomEvent(document.body, "click", (evt) => this.onClick(evt));

    this.registerMarkdownPostProcessor((el, ctx) => {
      if (!this.settings.inlineMeaning || !this.dictionary.size) return;
      if (el.closest && el.closest(".hm-tooltip")) return;
      if (ctx && this.activeNote && ctx.sourcePath && ctx.sourcePath !== this.activeNote.path) return;
      const marks = [];
      if (el.matches && el.matches("mark")) marks.push(el);
      el.querySelectorAll("mark").forEach((m) => marks.push(m));
      marks.forEach((mark) => {
        const term = cleanTerm(mark.textContent);
        const info = this.dictionary.get(normalizeTerm(term));
        if (!info) return;
        const span = document.createElement("span");
        span.className = "hm-inline-meaning";
        span.setText(info.meaning || "—");
        mark.insertAdjacentElement("afterend", span);
      });
    });

    await this.loadDictionaryForActive();
  }

  onunload() {
    this.hideTooltip();
    if (this.statusEl) this.statusEl.remove();
  }

  t() {
    return I18N[this.settings.language] || I18N.fa;
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  registerCommands() {
    const t = this.t();
    const cmds = [
      {
        id: "reload-dictionary",
        name: t.cmdReloadDict,
        callback: async () => {
          this.dictCache.clear();
          const n = await this.loadDictionaryForActive();
          new Notice(t.reloaded(n));
        },
      },
      {
        id: "choose-reference",
        name: t.cmdChooseRef,
        callback: () => this.chooseReferenceForActive(),
      },
      {
        id: "add-or-edit-at-cursor",
        name: t.cmdAddEditCursor,
        callback: () => {
          const term = this.findHighlightAtCursor();
          if (!term) {
            new Notice(t.cursorNotInHighlight);
            return;
          }
          this.addToDictionary(term);
        },
      },
    ];
    for (const c of cmds) {
      this.addCommand(c);
      this.commandIds.push(c.id);
    }
  }

  async reloadCommandsForLanguage() {
    const internal = this.app.commands;
    if (internal && internal.commands) {
      for (const id of this.commandIds) {
        const fullId = `${this.manifest.id}:${id}`;
        if (internal.commands[fullId]) delete internal.commands[fullId];
      }
    }
    this.commandIds = [];
    this.registerCommands();

    if (this.ribbonEl) {
      this.ribbonEl.setAttribute("aria-label", this.t().ribbonTitle);
      this.ribbonEl.setAttribute("data-tooltip-position", "right");
    }

    this.updateStatus();
  }

  getActiveNoteFile() {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (view && view.file) return view.file;
    try {
      const f = this.app.workspace.getActiveFile();
      if (f) return f;
    } catch (e) {}
    return null;
  }

  frontmatterKeys() {
    const primary = (this.settings.fmKey || "reference").trim() || "reference";
    return [...new Set([primary, ...FM_ALIASES])];
  }

  getReferencePaths(file) {
    const cache = this.app.metadataCache.getFileCache(file);
    const fm = cache && cache.frontmatter;
    if (!fm) return [];
    const out = [];
    for (const k of this.frontmatterKeys()) {
      let v = fm[k];
      if (v == null) continue;
      const arr = Array.isArray(v) ? v : [v];
      for (const x of arr) {
        let s;
        if (x && typeof x === "object" && x.link) s = String(x.link);
        else s = String(x).trim();
        if (s) out.push(s);
      }
    }
    return [...new Set(out)];
  }

  resolveRefFile(raw, sourcePath) {
    let s = String(raw || "").trim();
    s = s.replace(/^["']|["']$/g, "");
    s = s.replace(/^\[\[(.*)\]\]$/, "$1");
    s = s.split("|")[0].split("#")[0].trim();
    if (!s) return null;
    let f = this.app.vault.getAbstractFileByPath(s);
    if (f instanceof TFile) return f;
    const guess = s.toLowerCase().endsWith(".md") ? s : s + ".md";
    f = this.app.metadataCache.getFirstLinkpathDest(guess, sourcePath || "");
    return f instanceof TFile ? f : null;
  }

  resolveRefFiles(paths, sourcePath, notify) {
    const t = this.t();
    const files = [];
    for (const raw of paths) {
      const f = this.resolveRefFile(raw, sourcePath);
      if (f) files.push(f);
      else if (notify) new Notice(t.notFoundRef(raw));
    }
    return files;
  }

  async writeReferenceToFrontmatter(noteFile, refFile) {
    const t = this.t();
    const key = (this.settings.fmKey || "reference").trim() || "reference";
    try {
      const data = await this.app.vault.read(noteFile);
      const lines = data.split(/\r?\n/);
      const entry = `${key}: "${refFile.path}"`;

      const hasFM = lines.length > 0 && lines[0].trim() === "---";
      if (hasFM) {
        let end = -1;
        for (let i = 1; i < lines.length; i++) {
          if (lines[i].trim() === "---") { end = i; break; }
        }
        if (end === -1) {
          lines.splice(1, 0, entry, "---");
        } else {
          let replaced = false;
          for (let i = 1; i < end; i++) {
            const m = lines[i].match(/^([^\s:][^:]*?)\s*:/);
            if (m) {
              const k = m[1].trim().replace(/^["']|["']$/g, "");
              if (k === key || FM_ALIASES.includes(k)) {
                lines[i] = entry;
                replaced = true;
                break;
              }
            }
          }
          if (!replaced) lines.splice(end, 0, entry);
        }
      } else {
        lines.unshift("---", entry, "---", "");
      }

      await this.app.vault.modify(noteFile, lines.join("\n"));
      new Notice(t.frontmatterWritten(noteFile.basename, refFile.basename));
      return true;
    } catch (e) {
      new Notice(t.frontmatterWriteFailed(e && e.message ? e.message : e));
      return false;
    }
  }

  promptReferenceChoice(noteFile, pendingTerm) {
    const t = this.t();
    new FilePickerModal(this.app, async (refFile) => {
      const ok = await this.writeReferenceToFrontmatter(noteFile, refFile);
      if (!ok) return;
      this.dictCache.delete(refFile.path);
      this.activeNote = noteFile;
      await this.setActiveRefs([refFile]);
      if (pendingTerm) {
        const existing = this.dictionary.get(normalizeTerm(pendingTerm));
        this.openAddModal(pendingTerm, existing);
      }
    }, t).open();
  }

  chooseReferenceForActive() {
    const t = this.t();
    const noteFile = this.getActiveNoteFile();
    if (!noteFile) {
      new Notice(t.noNoteOpenShort);
      return;
    }
    this.promptReferenceChoice(noteFile, null);
  }

  async openActiveReferenceOrPrompt() {
    if (this.activeRefs && this.activeRefs.length) {
      this.app.workspace.openLinkText(this.activeRefs[0].path, "", false);
    } else {
      this.chooseReferenceForActive();
    }
  }

  async setActiveRefs(files) {
    this.activeRefs = files;
    this.dictionary = new Map();
    this.dictionaryPaths = [];
    for (const f of files) {
      const entries = await this.getEntries(f);
      entries.forEach((e, k) => {
        if (!this.dictionary.has(k)) this.dictionary.set(k, e);
      });
      this.dictionaryPaths.push(f.path);
    }
    this.updateStatus();
  }

  async getEntries(file) {
    const cached = this.dictCache.get(file.path);
    if (cached && cached.mtime === file.stat.mtime) return cached.entries;
    const content = await this.app.vault.cachedRead(file);
    const entries = this.parseDictionary(content, file.path);
    this.dictCache.set(file.path, { mtime: file.stat.mtime, entries });
    return entries;
  }

  async loadDictionaryForActive() {
    const file = this.getActiveNoteFile();
    this.activeNote = file || null;
    if (!file) {
      await this.setActiveRefs([]);
      return 0;
    }
    const refPaths = this.getReferencePaths(file);
    const refFiles = this.resolveRefFiles(refPaths, file.path);
    await this.setActiveRefs(refFiles);
    return this.dictionary.size;
  }

  parseDictionary(content, path) {
    const map = new Map();

    const make = (term, meaning, line) => {
      const key = normalizeTerm(term);
      const existing = map.get(key);
      const m = (meaning || "").trim();
      if (existing) {
        if (m && existing.meaning !== m) {
          existing.meaning += (existing.meaning ? "\n\n" : "") + m;
        }
        existing.merged = true;
        return existing;
      }
      const e = { term, meaning: m, line, endLine: line, path, merged: false };
      map.set(key, e);
      return e;
    };

    const cont = (entry, text) => {
      const t2 = text.trim().replace(/^>\s?/, "");
      if (!t2) return;
      entry.meaning += (entry.meaning ? "\n" : "") + t2;
    };

    const lines = content.split(/\r?\n/);
    let inFence = false;

    let i = 0;
    if (lines.length && lines[0].trim() === "---") {
      for (i = 1; i < lines.length; i++) {
        if (lines[i].trim() === "---") { i++; break; }
      }
    }

    for (; i < lines.length; i++) {
      const raw = lines[i];

      if (/^\s*```/.test(raw)) { inFence = !inFence; continue; }
      if (inFence) continue;

      const t = raw.trim();
      if (!t) continue;
      if (t.startsWith("#")) continue;

      if (raw.includes("::")) {
        const idx = raw.indexOf("::");
        const term = cleanTerm(stripBullet(raw.slice(0, idx)));
        if (!term) continue;
        const meaning = raw
          .slice(idx + 2)
          .replace(/^[\s:،;؛\-–—•*>]+/, "")
          .trim();
        const e = make(term, meaning, i);
        let k = i + 1;
        while (
          k < lines.length &&
          lines[k].trim() &&
          /^(\s+|>)/.test(lines[k]) &&
          !lines[k].includes("::") &&
          !lines[k].includes("==")
        ) {
          cont(e, lines[k]);
          k++;
        }
        e.endLine = k - 1;
        i = k - 1;
      } else if (raw.includes("==")) {
        const parts = raw.split("==");
        let last = null;
        for (let j = 1; j <= parts.length - 2; j += 2) {
          const term = cleanTerm(parts[j]);
          if (!term) continue;
          const meaning = (parts[j + 1] || "")
            .replace(/^[\s:،;؛\-–—•*>]+/, "")
            .trim();
          last = make(term, meaning, i);
        }
        if (last) {
          let k = i + 1;
          while (
            k < lines.length &&
            lines[k].trim() &&
            /^(\s+|>)/.test(lines[k]) &&
            !lines[k].includes("::")
          ) {
            cont(last, lines[k]);
            k++;
          }
          last.endLine = k - 1;
          i = k - 1;
        }
      }
    }
    return map;
  }

  updateStatus() {
    if (!this.statusEl) return;
    const t = this.t();
    const names = this.dictionaryPaths.map((p) => basename(p)).join("، ");
    this.statusEl.setText(names ? t.statusHasRefs(this.dictionary.size, names) : t.statusEmpty);
    this.statusEl.setAttribute(
      "aria-label",
      names ? t.statusAriaHas(names) : t.statusAriaEmpty
    );
  }

  async addToDictionary(term) {
    const t = this.t();
    const noteFile = this.getActiveNoteFile();
    if (!noteFile) {
      new Notice(t.currentNoteNotFound);
      return;
    }
    const refs = this.resolveRefFiles(this.getReferencePaths(noteFile), noteFile.path);
    if (!refs.length) {
      this.promptReferenceChoice(noteFile, term);
      return;
    }
    this.activeNote = noteFile;
    await this.setActiveRefs(refs);
    const existing = this.dictionary.get(normalizeTerm(term));
    this.openAddModal(term, existing);
  }

  openAddModal(term, existing) {
    new AddMeaningModal(this.app, this, term, existing).open();
  }

  formatEntryLines(term, meaning) {
    const safe = (meaning || "").replace(/::/g, ":").split("==").join("=").trim();
    const parts = safe
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (!parts.length) return `${term} ::`;
    return [`${term} :: ${parts[0]}`, ...parts.slice(1).map((p) => "  " + p)].join("\n");
  }

  async appendToFile(file, addition) {
    const makeAdd = (data) => {
      let d = data;
      if (d.length && !d.endsWith("\n")) d += "\n";
      return d + addition;
    };
    if (typeof this.app.vault.process === "function") {
      await this.app.vault.process(file, makeAdd);
    } else {
      const data = await this.app.vault.read(file);
      await this.app.vault.modify(file, makeAdd(data));
    }
  }

  async saveEntry(termRaw, meaningRaw, existing) {
    const t = this.t();
    const term = cleanTerm(String(termRaw || ""))
      .replace(/=+/g, "")
      .replace(/::/g, ":")
      .trim();
    if (!term) {
      new Notice(t.invalidTerm);
      return false;
    }
    const meaning = (meaningRaw || "").trim();

    let file = null;
    if (existing) {
      file = this.app.vault.getAbstractFileByPath(existing.path) || null;
    }
    if (!file) file = (this.activeRefs && this.activeRefs[0]) || null;
    if (!file) {
      new Notice(t.chooseRefFirst);
      return false;
    }

    const entryText = this.formatEntryLines(term, meaning);

    try {
      if (existing && file.path === existing.path && typeof existing.line === "number") {
        const data = await this.app.vault.read(file);
        const lines = data.split(/\r?\n/);
        const start = Math.max(0, Math.min(existing.line, lines.length - 1));
        const end = Math.max(
          start,
          Math.min(existing.endLine != null ? existing.endLine : existing.line, lines.length - 1)
        );
        lines.splice(start, end - start + 1, ...entryText.split("\n"));
        await this.app.vault.modify(file, lines.join("\n"));
      } else {
        await this.appendToFile(file, entryText + "\n");
      }
    } catch (e) {
      new Notice(t.saveFailed(e && e.message ? e.message : e));
      return false;
    }

    this.dictCache.delete(file.path);
    await this.loadDictionaryForActive();
    new Notice(t.entrySaved(term, file.basename));
    return true;
  }

  findHighlightAtCursor() {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view || !view.editor) return null;
    const ed = view.editor;

    const sel = ed.getSelection();
    if (sel && !sel.includes("\n")) {
      const t = cleanTerm(sel.replace(/=+/g, ""));
      if (t) return t;
    }

    const cur = ed.getCursor();
    const line = ed.getLine(cur.line) || "";
    const re = /==([^=\n]+)==/g;
    let m;
    while ((m = re.exec(line))) {
      if (cur.ch >= m.index && cur.ch <= m.index + m[0].length) return cleanTerm(m[1]);
    }
    return null;
  }

  getHighlightFromEvent(evt) {
    const target = evt.target;
    if (!(target instanceof Element)) return null;
    const el = target.closest("mark, .cm-highlight");
    if (!el) return null;
    if (el.classList.contains("cm-search-match")) return null;
    if (this.tooltip && this.tooltip.contains(el)) return null;
    const term = cleanTerm(el.textContent);
    return term ? { el, term } : null;
  }

  onMouseOver(evt) {
    if (!this.settings.hoverEnabled) return;
    if (!this.dictionary.size && (!this.settings.showNotFound || !this.dictionaryPaths.length)) return;
    const hit = this.getHighlightFromEvent(evt);
    if (!hit) return;

    // اگه قبلاً روی همین trigger بودیم و موس فقط بین فرزندانش جابه‌جا شده، کاری نکن
    if (this.currentTrigger === hit.el) {
      clearTimeout(this.hideTimer);
      return;
    }

    this.hideTooltip();
    this.currentTrigger = hit.el;
    this.showTimer = window.setTimeout(() => {
      this.showTooltip(hit.el, hit.term);
    }, Math.max(0, Number(this.settings.hoverDelay) || 0));
  }

  onMouseOut(evt) {
    const hit = this.getHighlightFromEvent(evt);
    if (!hit) return;

    // اگه موس فقط بین فرزندان همون mark جابه‌جا شده، hide نکن
    const related = evt.relatedTarget;
    if (related instanceof Element && hit.el.contains(related)) return;
    if (this.tooltip && this.tooltip.contains(related)) return;

    clearTimeout(this.showTimer);
    this.scheduleHide(250);
  }

  onClick(evt) {
    const hit = this.getHighlightFromEvent(evt);
    if (!hit) return;
    evt.stopPropagation();

    const info = this.dictionary.get(normalizeTerm(hit.term));

    if (evt.shiftKey && (evt.ctrlKey || evt.metaKey)) {
      evt.preventDefault();
      if (info) {
        this.openEntry(info);
      } else {
        this.addToDictionary(hit.term);
      }
      return;
    }

    if (evt.shiftKey) {
      evt.preventDefault();
      this.addToDictionary(hit.term);
      return;
    }

    if (evt.ctrlKey || evt.metaKey) {
      evt.preventDefault();
      if (info) {
        this.showTooltip(hit.el, hit.term);
      } else {
        this.addToDictionary(hit.term);
      }
      return;
    }

    this.showTooltip(hit.el, hit.term);
  }

  showTooltip(triggerEl, term) {
    const t = this.t();
    const info = this.dictionary.get(normalizeTerm(term));
    if (!info && !this.settings.showNotFound) return;

    this.hideTooltip();
    this.currentTrigger = triggerEl;

    const tip = document.createElement("div");
    tip.className = "hm-tooltip";
    tip.addEventListener("mouseenter", () => clearTimeout(this.hideTimer));
    tip.addEventListener("mouseleave", () => this.scheduleHide(150));
    document.body.appendChild(tip);
    this.tooltip = tip;
    this.tooltipOpen = true;

    if (!info) {
      tip.createDiv({
        cls: "hm-tooltip-notfound",
        text: t.tooltipNotFound(term),
      });
      const add = tip.createDiv({ cls: "hm-tooltip-add", text: t.tooltipAdd });
      add.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideTooltip();
        this.addToDictionary(term);
      });
    } else {
      tip.createDiv({ cls: "hm-tooltip-term", text: info.term });
      const body = tip.createDiv({ cls: "hm-tooltip-meaning" });
      this.renderMeaning(body, info.meaning);

      const src = tip.createDiv({ cls: "hm-tooltip-src" });
      src.createSpan({ text: "📚 " + basename(info.path) });
      const acts = src.createDiv({ cls: "hm-tooltip-actions" });
      const edit = acts.createSpan({ cls: "hm-open", text: t.tooltipEdit });
      edit.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideTooltip();
        this.addToDictionary(info.term);
      });
      const open = acts.createSpan({ cls: "hm-open", text: t.tooltipOpenSource });
      open.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openEntry(info);
        this.hideTooltip();
      });
    }

    this.positionTooltip(triggerEl);
  }

  async renderMeaning(el, meaning) {
    try {
      const comp = new Component();
      comp.load();
      this.tooltipComponent = comp;
      if (MarkdownRenderer && typeof MarkdownRenderer.render === "function") {
        await MarkdownRenderer.render(this.app, meaning, el, this.dictionaryPaths[0] || "", comp);
        return;
      }
    } catch (e) {}
    el.setText(meaning || "—");
  }

  positionTooltip(triggerEl) {
    const tip = this.tooltip;
    if (!tip) return;
    const rect = triggerEl.getBoundingClientRect();
    const tw = tip.offsetWidth;
    const th = tip.offsetHeight;

    let left = rect.left + rect.width / 2 - tw / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));

    let top = rect.bottom + 8;
    if (top + th > window.innerHeight - 8) {
      top = rect.top - th - 8;
      if (top < 8) top = Math.max(8, Math.min(window.innerHeight - th - 8, rect.bottom + 8));
    }

    tip.style.left = left + "px";
    tip.style.top = top + "px";
  }

  scheduleHide(delay) {
    clearTimeout(this.hideTimer);
    this.hideTimer = window.setTimeout(() => this.hideTooltip(), delay);
  }

  hideTooltip() {
    clearTimeout(this.showTimer);
    clearTimeout(this.hideTimer);
    if (this.tooltip) {
      this.tooltip.remove();
      this.tooltip = null;
    }
    this.tooltipOpen = false;
    this.currentTrigger = null;
    if (this.tooltipComponent) {
      try { this.tooltipComponent.unload(); } catch (e) {}
      this.tooltipComponent = null;
    }
  }

  async openEntry(entry) {
    const file = this.app.vault.getAbstractFileByPath(entry.path);
    if (!(file instanceof TFile)) return;

    const leaf = this.app.workspace.getLeaf("tab");
    await leaf.openFile(file);

    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (view && view.editor) {
      const line = Math.min(entry.line, Math.max(0, view.editor.lineCount() - 1));
      view.editor.setCursor({ line, ch: 0 });
      view.editor.scrollIntoView({ from: { line, ch: 0 }, to: { line, ch: 0 } }, true);
    }
  }
}

/* ---------- تب تنظیمات ---------- */

class HighlightReferenceSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();
    const L = this.plugin.t();

    // راست‌چین/چپ‌چین کردن کل تب (مثل نسخه اصلی)
    const isFa = this.plugin.settings.language === "fa";
    containerEl.setAttribute("dir", isFa ? "rtl" : "ltr");
    if (isFa) {
      containerEl.addClass("hm-rtl");
    } else {
      containerEl.removeClass("hm-rtl");
    }

    // انتخاب زبان
    new Setting(containerEl)
      .setName(L.language)
      .setDesc(L.languageDesc)
      .addDropdown((dd) => {
        dd.addOption("fa", L.langNameFa);
        dd.addOption("en", L.langNameEn);
        dd.setValue(this.plugin.settings.language);
        dd.onChange(async (v) => {
          this.plugin.settings.language = v;
          await this.plugin.saveSettings();
          await this.plugin.reloadCommandsForLanguage();
          this.display();
        });
      });

    containerEl.createEl("p", { cls: "hm-setting-hint", text: L.hint1 });
    containerEl.createEl("p", { cls: "hm-setting-hint", text: L.hint2 });

    new Setting(containerEl)
      .setName(L.fmKey)
      .setDesc(L.fmKeyDesc)
      .addText((text) => {
        text
          .setPlaceholder("reference")
          .setValue(this.plugin.settings.fmKey)
          .onChange(async (value) => {
            this.plugin.settings.fmKey = value.trim() || "reference";
            await this.plugin.saveSettings();
            await this.plugin.loadDictionaryForActive();
          });
        text.inputEl.setAttribute("spellcheck", "false");
      });

    new Setting(containerEl)
      .setName(L.hoverEnabled)
      .setDesc(L.hoverEnabledDesc)
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.hoverEnabled).onChange(async (v) => {
          this.plugin.settings.hoverEnabled = v;
          await this.plugin.saveSettings();
        })
      );

    // اسلایدر تاخیر با نمایش مقدار
    const delaySetting = new Setting(containerEl)
      .setName(L.hoverDelay)
      .addSlider((slider) =>
        slider
          .setLimits(0, 1000, 50)
          .setValue(this.plugin.settings.hoverDelay)
          .setDynamicTooltip()
          .onChange(async (v) => {
            this.plugin.settings.hoverDelay = v;
            await this.plugin.saveSettings();
            if (delaySetting._valEl) delaySetting._valEl.setText(v + " ms");
          })
      );
    delaySetting._valEl = delaySetting.controlEl.createSpan({ cls: "hm-slider-value" });
    delaySetting._valEl.setText(this.plugin.settings.hoverDelay + " ms");

    new Setting(containerEl)
      .setName(L.showNotFound)
      .setDesc(L.showNotFoundDesc)
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.showNotFound).onChange(async (v) => {
          this.plugin.settings.showNotFound = v;
          await this.plugin.saveSettings();
        })
      );

    new Setting(containerEl)
      .setName(L.inlineMeaning)
      .setDesc(L.inlineMeaningDesc)
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.inlineMeaning).onChange(async (v) => {
          this.plugin.settings.inlineMeaning = v;
          await this.plugin.saveSettings();
        })
      );

    const note = this.plugin.activeNote;
    const refs = this.plugin.dictionaryPaths;
    new Setting(containerEl)
      .setName(L.activeNoteStatus)
      .setDesc(
        note
          ? refs.length
            ? L.refStatus(note.basename, refs, this.plugin.dictionary.size)
            : L.noRef(note.basename)
          : L.noNoteOpen
      )
      .addButton((button) =>
        button.setButtonText(L.reload).onClick(async () => {
          this.plugin.dictCache.clear();
          const n = await this.plugin.loadDictionaryForActive();
          new Notice(L.reloaded(n));
          this.display();
        })
      );

    this.renderChannelsSection(containerEl, L);
  }

  renderChannelsSection(containerEl, L) {
    const wrap = containerEl.createDiv({ cls: "hm-channels" });

    const header = wrap.createDiv({ cls: "hm-channels-header" });
    header.createEl("h4", { cls: "hm-channels-title", text: L.channelsTitle });
    header.createEl("p", { cls: "hm-channels-desc", text: L.channelsDesc });

    const row = wrap.createDiv({ cls: "hm-channels-row" });

    const channels = [
      {
        name: L.telegram,
        handle: "@obsidiantut",
        url: "https://t.me/obsidiantut",
        cls: "hm-ch-telegram",
        svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>`,
      },
      {
        name: L.bale,
        handle: "@obsidiantut",
        url: "https://ble.ir/obsidiantut",
        cls: "hm-ch-bale",
        svg: `<svg viewBox="0 0 64 64" width="18" height="18" aria-hidden="true"><defs><linearGradient id="hmBaleGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3ED598"/><stop offset="100%" stop-color="#22A06B"/></linearGradient></defs><circle cx="32" cy="32" r="30" fill="url(#hmBaleGrad)"/><path d="M20 33 L28 41 L46 23" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        name: L.youtube,
        handle: "@obsidiantut",
        url: "https://youtube.com/@obsidiantut",
        cls: "hm-ch-youtube",
        svg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>`,
      },
    ];

    for (const ch of channels) {
      const a = row.createEl("a", { cls: "hm-ch-card " + ch.cls, href: ch.url });
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
      a.setAttribute("aria-label", ch.name);

      const iconWrap = a.createDiv({ cls: "hm-ch-icon-ring" });
      iconWrap.innerHTML = ch.svg;

      const info = a.createDiv({ cls: "hm-ch-info" });
      info.createDiv({ cls: "hm-ch-name", text: ch.name });
      info.createDiv({ cls: "hm-ch-handle", text: ch.handle });
    }
  }
}

module.exports = HighlightReferencePlugin;