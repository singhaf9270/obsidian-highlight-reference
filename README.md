# Highlight Reference

> Turn highlighted words into interactive glossary references.
>
> هایلایت‌ها را به واژه‌های قابل‌ارجاع با نمایش معنی و توضیح تبدیل کنید.

Highlight Reference lets you hover over any `==highlighted==` term and instantly see its definition, explanation, note, or translation from your personal glossary.

No searching. No switching notes. No interruptions.

---

## 🎬 Demo

assets/demo.gif

---

## 💡 What problem does this solve?

When writing technical notes, studying languages, documenting concepts, or building a personal knowledge base, many terms need explanations.

Normally you have to:

- Open a glossary note
- Search for the term
- Return to your original note

With Highlight Reference:

1. Highlight the term.
2. Hover the mouse.
3. See the meaning instantly.

---

## ✨ Features

- ✅ Hover tooltips for highlighted words
- ✅ Quick add for missing terms
- ✅ Edit meanings directly from the tooltip
- ✅ Open glossary source with one click
- ✅ Multiple glossary support
- ✅ Markdown rendering inside definitions
- ✅ Inline meanings in Reading View
- ✅ Persian and English interface
- ✅ Works completely offline
- ✅ Fast dictionary caching and auto reload

---

## 🚀 Quick Start

### Step 1: Create a glossary

Create a note such as `Glossary.md`.

```markdown
Artificial Intelligence :: The simulation of human intelligence by machines.

Machine Learning :: A branch of AI focused on learning from data.

Frontmatter :: Metadata stored at the beginning of a note.
```

---

### Step 2: Connect a note to the glossary

Add a frontmatter reference:

```yaml
---
reference: Glossary
---
```

---

### Step 3: Use highlighted terms

```markdown
==Artificial Intelligence== is transforming many industries.

==Machine Learning== is a subset of AI.
```

---

### Step 4: Hover

Move your mouse over a highlighted term.

A tooltip appears instantly with its definition.

---

## 📖 Glossary Formats

### Standard Format

```markdown
Term :: Meaning
```

Example:

```markdown
Markdown :: A lightweight markup language.
```

---

### Highlight Format

```markdown
==Term== Meaning
```

Example:

```markdown
==Markdown== A lightweight markup language.
```

---

### Multi-line Definitions

```markdown
Machine Learning :: A branch of artificial intelligence.

  Focuses on learning patterns from data.

  Used in prediction, classification and recommendations.
```

---

## 📚 Multiple Glossaries

You can reference more than one glossary:

```yaml
---
reference:
  - Main Glossary
  - AI Glossary
  - Medical Terms
---
```

The plugin automatically combines all entries.

---

## 🖱️ Interactions

| Action | Result |
|----------|----------|
| Hover | Show definition |
| Click | Open tooltip or add missing term |
| Shift + Click | Edit definition |
| Ctrl + Click | Open source entry |
| Ctrl + Shift + Click | Open or create entry |

---

## ⌨️ Commands

Available from the Command Palette:

- Reload this note's glossary
- Choose reference note for this note
- Add/Edit highlighted word at cursor

---

## ⚙️ Settings

| Setting | Description |
|----------|-------------|
| Language | Persian or English UI |
| Frontmatter Key | Custom reference field name |
| Hover Tooltip | Enable or disable hover behavior |
| Hover Delay | Delay before showing tooltip |
| Not Found Message | Allow quick adding of missing terms |
| Inline Meaning | Show meanings beside highlights in Reading View |

---

## 📝 Notes

- Definitions support Markdown formatting.
- Internal links and wiki links are supported.
- Multiple glossary files can be attached to a single note.
- Meanings update automatically when glossary files change.
- Terms are normalized to improve Persian text matching.

---

## 🔧 Troubleshooting

### Definitions do not appear

Make sure:

- Your note contains a valid `reference` field.
- The glossary note exists.
- The highlighted term exists in the glossary.
- The glossary has been reloaded.

---

### Tooltip does not appear

Check:

- Hover tooltips are enabled.
- Hover delay is not too high.
- The term is highlighted using:

```markdown
==term==
```

---

### Changes are not visible

Try:

- Saving the glossary note.
- Running **Reload this note's glossary** from the Command Palette.

---

## 📦 Installation

### Community Plugins

1. Open **Settings → Community Plugins**
2. Click **Browse**
3. Search for **Highlight Reference**
4. Install and enable

---

### Manual Installation

Download:

- `main.js`
- `manifest.json`
- `styles.css`

from the latest release and place them in:

```text
.obsidian/plugins/highlight-reference/
```

Restart Obsidian and enable the plugin.

---

### BRAT

Use the repository URL:

```text
https://github.com/singhaf9270/obsidian-highlight-reference
```

---

## 🤝 Contributing

Ideas, suggestions, bug reports, and pull requests are welcome.

- Issues: https://github.com/singhaf9270/obsidian-highlight-reference/issues
- Pull Requests: Welcome

---

## 📄 License

MIT License

See LICENSE.

---

# فارسی 🇮🇷

## Highlight Reference چیست؟

Highlight Reference به شما اجازه می‌دهد روی هر عبارت هایلایت‌شده با فرمت:

```markdown
==واژه==
```

مکث کنید و معنی، توضیح، ترجمه یا یادداشت آن را از واژه‌نامه شخصی خود مشاهده کنید.

بدون باز کردن واژه‌نامه، بدون جستجو و بدون ترک یادداشت فعلی.

---

## 🎬 نمایش

![Highlight Reference Demo قابلیت‌ها

- ✅ نمایش معنی با هاور
- ✅ افزودن سریع واژه‌های موجود‌نبودن
- ✅ ویرایش مستقیم توضیحات
- ✅ باز کردن محل واژه در مرجع
- ✅ پشتیبانی از چند واژه‌نامه
- ✅ پشتیبانی از Markdown
- ✅ نمایش توضیح کنار هایلایت
- ✅ رابط فارسی و انگلیسی
- ✅ کاملاً آفلاین
- ✅ بارگذاری سریع و خودکار واژه‌نامه

---

## 🚀 شروع سریع

### ۱. ساخت واژه‌نامه

```markdown
هوش مصنوعی :: شبیه‌سازی توانایی‌های هوشمند توسط ماشین‌ها

یادگیری ماشین :: شاخه‌ای از هوش مصنوعی
```

---

### ۲. اتصال یادداشت به واژه‌نامه

```yaml
---
reference: واژه‌نامه
---
```

---

### ۳. استفاده از واژه‌ها

```markdown
==هوش مصنوعی== یکی از مهم‌ترین حوزه‌های فناوری است.
```

---

### ۴. مشاهده توضیح

موس را روی واژه ببرید تا توضیح آن نمایش داده شود.

---

## 📖 فرمت‌های پشتیبانی‌شده

```markdown
واژه :: معنی
```

یا

```markdown
==واژه== معنی
```

---

## 🖱️ میانبرها

| عمل | نتیجه |
|------|--------|
| هاور | نمایش معنی |
| کلیک | نمایش یا افزودن |
| Shift + کلیک | ویرایش |
| Ctrl + کلیک | باز کردن منبع |
| Ctrl + Shift + کلیک | باز کردن یا افزودن |

---

## 📄 مجوز

MIT License

---

<p align="center">
Made with ❤️ for the Obsidian community
</p>
