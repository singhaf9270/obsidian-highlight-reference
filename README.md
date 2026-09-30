# Highlight Reference 

> **Turn any `==highlight==` into an instant knowledge lookup.**
>
> **هر `==هایلایت==` رو به یه مرجع دانش لحظه‌ای تبدیل کن.**

[![Version](https://img.shields.io/badge/version-1.0.2-229ED9?style=flat-square)](https://github.com/singhaf9270/obsidian-highlight-reference/releases)
[![License](https://img.shields.io/badge/license-MIT-22A06B?style=flat-square)](LICENSE)
[![Obsidian](https://img.shields.io/badge/Obsidian-1.0.0%2B-7C3AED?style=flat-square&logo=obsidian)](https://obsidian.md)
[![Spaced Repetition](https://img.shields.io/badge/Works%20with-Spaced%20Repetition-FF6B6B?style=flat-square)](https://github.com/st3v3nmw/obsidian-spaced-repetition)

---

<details open>
<summary><b>🇬🇧 English</b></summary>

## 💡 What is Highlight Reference?

**Highlight Reference** is an Obsidian plugin that turns every `==highlighted==` word in your notes into a **live reference link**. Hover over it, and its description appears instantly — no need to leave your note, no need to open a separate file.

Think of it as a **personal dictionary that lives inside your notes**. Whether you're reading a technical article, studying a new language, or reviewing your own notes, every highlight becomes a doorway to its definition.

### The idea in one line

> **Write `==word==` → see its meaning on hover → add or edit it on the fly.**

### Why it's different

Most glossary plugins force you to either:
- Open a separate panel
- Use a specific syntax that breaks your flow
- Store definitions in a rigid format

Highlight Reference works with **your existing `==highlight==` syntax**, reads references from **frontmatter**, and supports **multiple reference notes per file**. It stays out of your way until you need it.

---

## 🎯 Who is this for?

- 📚 **Language learners** — highlight new vocabulary and see translations instantly
- 🔬 **Researchers** — annotate technical terms with definitions
- ✍️ **Writers** — keep a personal style guide linked to every note
- 🧠 **Students** — build a study reference that grows with your notes
- 🗂️ **PKM enthusiasts** — connect notes to central glossaries without duplication

---

## ✨ Features at a glance

| Feature | Description |
|---------|-------------|
| 🖱️ **Hover to see meaning** | Move your mouse over a highlight; a tooltip appears |
| ➕ **Quick add** | If a word isn't in the reference, add it with one click |
| ✏️ **Inline editing** | Edit existing entries from the tooltip or via `Shift+Click` |
| 📂 **Open in reference** | Jump to the exact line in your reference note |
| 📌 **Inline meaning** | Show the meaning as a small label (reading view only) |
| 🗂️ **Multiple references** | Each note can link to several reference files |
| 🌐 **Bilingual UI** | Persian (فارسی) and English |
| 📝 **Markdown support** | Meanings can include links, lists, bold, etc. |
| 🔁 **Spaced Repetition ready** | Highlights work seamlessly with SR flashcards |
| ⚡ **Smart caching** | Reference files are cached and only re-read on change |

---

## 🔁 Works with Spaced Repetition

This plugin is **designed to cooperate with the [Spaced Repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition) plugin**.

### The workflow

1. You highlight a term in your note: `==photosynthesis==`
2. Highlight Reference shows its meaning on hover (from your reference note).
3. Spaced Repetition picks up the same highlight as a **flashcard** for review.
4. During review, you see the term and can recall its meaning — the same meaning stored in your reference.

### Why this matters

- **No duplication** — you write the definition once, in your reference note.
- **Consistent** — every flashcard uses the same definition.
- **Review-friendly** — the highlight syntax is already SR-compatible.
- **Zero configuration** — both plugins read `==...==` natively.

> 💡 **Tip:** Combine Highlight Reference with Spaced Repetition to turn your notes into a **self-quizzing knowledge base**.

---

## 🚀 Installation

### From the official Obsidian marketplace

1. Open Obsidian.
2. Go to **Settings → Community plugins**.
3. Click **Browse** and search for **Highlight Reference**.
4. Click **Install**, then **Enable**.

### Manual installation

1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/singhaf9270/obsidian-highlight-reference/releases/latest).
2. Create the folder `.obsidian/plugins/highlight-reference/` in your vault.
3. Copy the three files into it.
4. Restart Obsidian.
5. Enable the plugin from **Settings → Community plugins**.

### Using BRAT (for beta versions)

1. Install the **BRAT** plugin.
2. In BRAT settings, click **Add Beta plugin**.
3. Enter: `https://github.com/singhaf9270/obsidian-highlight-reference`
4. Click **Add Plugin**.

---

## 📖 Quick start (2 minutes)

### Step 1 — Create a reference note

Create a new note (e.g. `My Reference.md`) and write one entry per line:

```markdown
term :: meaning
```

Real example:

```markdown
==highlight== :: Text wrapped in `==` that becomes bold.
==frontmatter== :: The section at the top of a note, between two `---` lines.
  Continuation of the meaning goes on the next line with indentation.
  You can continue on multiple lines.
```

Or use the highlight syntax directly:

```markdown
==term== meaning of the term
```

### Step 2 — Link your note to the reference

In the **frontmatter** of your note (between the two `---` lines), add:

```yaml
---
reference: "My Reference"
---
```

Multiple references:

```yaml
---
reference:
  - "Main Reference"
  - "Specialized Reference"
---
```

**Accepted keys:** `reference`, `dictionary`, `glossary`, `vocab`, `lexicon`, `source`, `مرجع`, `منبع`, `واژه‌نامه`, `لغتنامه`, `واژگان`

### Step 3 — Highlight and use

In your note, wrap any word with `==`:

```markdown
This is a ==highlight== example.
```

Now hover over it 👆

---

## 🖱️ Interactions

| Action | Result |
|--------|--------|
| **Hover** | Show the meaning tooltip |
| **Click** | Existing word: tooltip · Missing word: add dialog |
| **Ctrl + Click** | Open the entry's line in the reference note |
| **Shift + Click** | Edit an existing meaning |
| **Ctrl + Shift + Click** | Open or add, depending on whether the word exists |

> 💡 **On mobile:** tap for tooltip, use the buttons inside the tooltip for edit/open.

---

## ⚡ Command palette

Open with `Ctrl/Cmd + P`:

- **Reload this note's reference** — if you changed the reference file manually.
- **Choose reference note for this note** — pick from a fuzzy search dialog.
- **Add/Edit highlighted word at cursor** — no clicking needed.

---

## ⚙️ Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Language** | Persian or English | Persian |
| **Frontmatter key** | Default key for the reference path | `reference` |
| **Show meaning on hover** | Enable/disable the tooltip | On |
| **Hover delay** | Time before showing the tooltip (0–1000 ms) | 200 ms |
| **"Not found" message** | Show a tooltip with an add button for missing words | On |
| **Inline meaning** | Show meaning as a small label (reading view only) | Off |

---

## 🧠 Technical details

### Reference format

Each line follows this pattern:

```
term :: meaning
```

**Continuation lines** must be indented (2+ spaces) or start with `>`:

```markdown
==photosynthesis== :: The process by which plants convert light into energy.
  Occurs in the chloroplasts.
  Produces oxygen as a byproduct.
```

**Direct highlight syntax** is also supported:

```markdown
==term== its meaning here
```

### Frontmatter resolution

The plugin reads the reference path from frontmatter using this priority:

1. The custom key you set in settings (default: `reference`)
2. A list of built-in aliases:
   - English: `reference`, `dictionary`, `glossary`, `vocab`, `lexicon`, `source`
   - Persian: `مرجع`, `منبع`, `واژه‌نامه`, `لغتنامه`, `واژگان`

Both single strings and arrays are supported. Paths can be plain text, `[[wikilinks]]`, or quoted strings.

### Term normalization

To make matching robust, terms are normalized before comparison:

| Transformation | Example |
|----------------|---------|
| Arabic `ي` → Persian `ی` | `كتاب` → `کتاب` |
| Arabic `ك` → Persian `ک` | `كتاب` → `کتاب` |
| `أ` `إ` `آ` → `ا` | `أحمد` → `احمد` |
| `ة` → `ه` | `مدرسة` → `مدرسه` |
| Remove ZWNJ and zero-width chars | `می‌رود` → `میرود` |
| Collapse whitespace | `a   b` → `a b` |
| Lowercase | `Word` → `word` |

This means `كتاب` (Arabic kaf) and `کتاب` (Persian kaf) match the same entry.

### Caching

- Reference files are **cached by modification time**.
- When a reference file changes, the cache is invalidated automatically.
- Manual reload is available via the command palette.

### Technical stack

- **Obsidian API**: `Plugin`, `Modal`, `FuzzySuggestModal`, `MarkdownRenderer`
- **Storage**: frontmatter via `metadataCache`
- **Rendering**: `registerMarkdownPostProcessor` for inline meanings
- **Mobile**: uses `visualViewport` API to avoid the keyboard overlap
- **No external dependencies**

### File structure

```
.obsidian/plugins/highlight-reference/
├── main.js        # Plugin logic
├── manifest.json  # Plugin metadata
└── styles.css     # UI styling
```

---

## 💡 Pro tips

### Combine with Spaced Repetition

```markdown
# Biology

The ==mitochondria== is the powerhouse of the cell.
```

- Highlight Reference shows the definition of `mitochondria` on hover.
- Spaced Repetition treats `==mitochondria==` as a flashcard.
- Your reference note is the single source of truth for the definition.

### Use multiple references for different topics

```yaml
---
reference:
  - "Biology Terms"
  - "Chemistry Terms"
---
```

Now the same note can pull definitions from both.

### Inline meanings for review notes

Enable **Inline meaning** in settings, and every highlight will show its meaning directly in the reading view — perfect for printing or exporting to PDF.

---

## 🔧 Troubleshooting

<details>
<summary><b>Meanings aren't showing</b></summary>

1. Make sure the frontmatter key `reference` (or one of the aliases) exists in your note.
2. Verify the reference note exists in your vault and the path is correct.
3. Run **Reload this note's reference** from the command palette.
4. Check the status bar for the loaded entry count.

</details>

<details>
<summary><b>Tooltip doesn't appear</b></summary>

1. Check the **Show meaning on hover** setting.
2. Lower the **Hover delay** if it's too high.
3. Tooltips work best in reading view; some editor modes may behave differently.

</details>

<details>
<summary><b>Meanings aren't updating</b></summary>

1. Save the reference file; the plugin detects changes automatically.
2. If not, run the reload command.

</details>

<details>
<summary><b>Modal goes under the keyboard on mobile</b></summary>

Fixed in version 1.0.2. Make sure you're on the latest version.

</details>

<details>
<summary><b>Words match incorrectly</b></summary>

Terms are normalized (see the Technical section). If you need exact matching, use a more specific key.

</details>

---

## 🤝 Contributing

Ideas, suggestions, or bug reports? I'd love to hear them:

- 🐛 **Issues**: [GitHub Issues](https://github.com/singhaf9270/obsidian-highlight-reference/issues)
- 🔧 **Pull Requests**: welcome!
- ⭐ **Star** the repo if you find it useful.

---

## 📄 License

Released under the **MIT** license. See [LICENSE](LICENSE) for details.

---

## 🌐 Follow us

More Obsidian tutorials and content on our channels:

<table>
  <tr>
    <td align="center">
      <a href="https://t.me/obsidiantut">
        <img src="https://img.shields.io/badge/Telegram-%40obsidiantut-229ED9?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
      </a>
    </td>
    <td align="center">
      <a href="https://ble.ir/obsidiantut">
        <img src="https://img.shields.io/badge/Bale-%40obsidiantut-22A06B?style=for-the-badge" alt="Bale">
      </a>
    </td>
    <td align="center">
      <a href="https://youtube.com/@obsidiantut">
        <img src="https://img.shields.io/badge/YouTube-%40obsidiantut-FF0033?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center"><b>Telegram</b><br>@obsidiantut</td>
    <td align="center"><b>Bale</b><br>@obsidiantut</td>
    <td align="center"><b>YouTube</b><br>@obsidiantut</td>
  </tr>
</table>

---

<p align="center">
  Made with ❤️ for the Obsidian community
</p>

</details>

---

<details open>
<summary><b>🇮🇷 فارسی</b></summary>

## 💡 هایلایت رفرنس چیه؟

**هایلایت رفرنس** یه پلاگین Obsidian هست که هر `==هایلایت==` توی یادداشت‌هات رو به یه **مرجع زنده** تبدیل می‌کنه. موس رو روش ببر، توضیحش همون لحظه ظاهر می‌شه — بدون اینکه از یادداشتت بیرون بری یا فایل جدا باز کنی.

بهش فکر کن مثل یه **واژه‌نامهٔ شخصی که داخل یادداشت‌هات زندگی می‌کنه**. چه داری یه مقالهٔ تخصصی می‌خونی، چه داری یه زبان جدید یاد می‌گیری، چه داری یادداشت‌های خودت رو مرور می‌کنی — هر هایلایت تبدیل می‌شه به یه در به سمت تعریفش.

### ایده در یک خط

> **`==کلمه==` رو بنویس → با هاور معنی‌ش رو ببین → همون‌جا اضافه یا ویرایشش کن.**

### چرا متفاوته؟

اکثر پلاگین‌های واژه‌نامه مجبورت می‌کنن یا:
- یه پنل جدا باز کنی
- از یه سینتکس خاص استفاده کنی که جریان کارت رو به هم می‌زنه
- تعریف‌ها رو توی یه فرمت خشک ذخیره کنی

هایلایت رفرنس با **همون سینتکس `==هایلایت==`** کار می‌کنه، مرجع رو از **فرانت‌متر** می‌خونه، و از **چند یادداشت مرجع برای هر فایل** پشتیبانی می‌کنه. تا وقتی نیازش نداشته باشی، سر راهت نیست.

---

## 🎯 این پلاگین برای کیه؟

- 📚 **زبان‌آموزها** — کلمات جدید رو هایلایت کن و ترجمه‌ش رو همون لحظه ببین
- 🔬 **پژوهشگرها** — اصطلاحات تخصصی رو با تعریفشون حاشیه‌نویسی کن
- ✍️ **نویسنده‌ها** — یه راهنمای سبک شخصی بساز که به هر یادداشت وصل باشه
- 🧠 **دانشجوها** — یه مرجع مطالعه بساز که با یادداشت‌هات رشد کنه
- 🗂️ **علاقه‌مندان PKM** — یادداشت‌ها رو به واژه‌نامه‌های مرکزی وصل کن، بدون تکرار

---

## ✨ قابلیت‌ها در یک نگاه

| قابلیت | توضیح |
|--------|-------|
| 🖱️ **نمایش توضیح با هاور** | موس رو روی هایلایت ببر، تولتیپ ظاهر می‌شه |
| ➕ **افزودن سریع** | اگه عنوان توی مرجع نبود، با یه کلیک اضافه‌ش کن |
| ✏️ **ویرایش فوری** | از دکمهٔ ویرایش توی تولتیپ یا `Shift+کلیک` |
| 📂 **باز کردن در مرجع** | با یه کلیک برو سر خط مربوطه توی یادداشت مرجع |
| 📌 **توضیح درون‌خطی** | توضیح به‌صورت برچسب کوچک بعد از هایلایت (حالت خواندن) |
| 🗂️ **چند مرجع** | هر یادداشت می‌تونه چند مرجع مختلف داشته باشه |
| 🌐 **دو زبانه** | رابط کاربری فارسی و انگلیسی |
| 📝 **پشتیبانی از Markdown** | توضیح‌ها می‌تونن لینک، لیست، بولد و هر چیز دیگه داشته باشن |
| 🔁 **آماده برای Spaced Repetition** | هایلایت‌ها با فلش‌کارت‌های SR هماهنگ کار می‌کنن |
| ⚡ **کش هوشمند** | فایل‌های مرجع کش می‌شن و فقط با تغییر دوباره خونده می‌شن |

---

## 🔁 هماهنگی با Spaced Repetition

این پلاگین **برای همکاری با پلاگین [Spaced Repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition) طراحی شده**.

### جریان کار

1. یه اصطلاح رو توی یادداشتت هایلایت می‌کنی: `==فتوسنتز==`
2. هایلایت رفرنس با هاور معنی‌ش رو از یادداشت مرجع نشون می‌ده.
3. Spaced Repetition همون هایلایت رو به‌عنوان **فلش‌کارت** برای مرور برمی‌داره.
4. موقع مرور، اصطلاح رو می‌بینی و معنی‌ش رو به یاد میاری — همون معنی‌ای که توی مرجعت ذخیره شده.

### چرا مهمه؟

- **بدون تکرار** — تعریف رو یه بار می‌نویسی، توی یادداشت مرجع.
- **یکدست** — هر فلش‌کارت از همون تعریف استفاده می‌کنه.
- **مناسب مرور** — سینتکس هایلایت از قبل با SR سازگاره.
- **بدون تنظیمات** — هر دو پلاگین به‌صورت پیش‌فرض `==...==` رو می‌خونن.

> 💡 **نکته:** هایلایت رفرنس رو با Spaced Repetition ترکیب کن تا یادداشت‌هات رو به یه **پایگاه دانش خودآزمون** تبدیل کنی.

---

## 🚀 نصب

### از بازار رسمی Obsidian

1. Obsidian رو باز کن.
2. برو به **تنظیمات → افزونه‌های انجمن**.
3. **Browse** رو بزن و «Highlight Reference» رو جستجو کن.
4. **Install** و بعد **Enable** رو بزن.

### نصب دستی

1. از [آخرین نسخه](https://github.com/singhaf9270/obsidian-highlight-reference/releases/latest) سه فایل `main.js`، `manifest.json` و `styles.css` رو دانلود کن.
2. توی vault خودت پوشهٔ `.obsidian/plugins/highlight-reference/` رو بساز.
3. سه فایل رو داخلش کپی کن.
4. Obsidian رو یه بار ببند و باز کن.
5. از **تنظیمات → افزونه‌های انجمن** فعالش کن.

### نصب با BRAT (برای نسخه‌های بتا)

1. پلاگین **BRAT** رو نصب کن.
2. توی تنظیمات BRAT، **Add Beta plugin** رو بزن.
3. آدرس زیر رو وارد کن:
   ```
   https://github.com/singhaf9270/obsidian-highlight-reference
   ```
4. **Add Plugin** رو بزن.

---

## 📖 شروع سریع (۲ دقیقه‌ای)

### قدم ۱ — یه مرجع بساز

یه یادداشت جدید بساز (مثلاً `مرجع من.md`) و هر خط یه عنوان با این فرمت بنویس:

```markdown
عنوان :: توضیح
```

مثال واقعی:

```markdown
==هایلایت== :: متنی که با `==` احاطه شده و برجسته می‌شه.
==فرانت‌متر== :: بخش بالای یادداشت که بین دو خط `---` قرار می‌گیره.
  ادامهٔ توضیح با تورفتگی در خط بعدی نوشته می‌شه.
  می‌تونی چند خط ادامه بدی.
```

یا از فرمت هایلایتی مستقیم استفاده کن:

```markdown
==عنوان== توضیح این عنوان
```

### قدم ۲ — یادداشتت رو به مرجع وصل کن

توی **فرانت‌متر** یادداشتت (بالای فایل، بین دو خط `---`) بنویس:

```yaml
---
reference: "مرجع من"
---
```

اگه می‌خوای چند مرجع داشته باشی:

```yaml
---
reference:
  - "مرجع اصلی"
  - "مرجع تخصصی"
---
```

**کلیدهای پذیرفته‌شده:** `reference`، `dictionary`، `glossary`، `vocab`، `lexicon`، `source`، `مرجع`، `منبع`، `واژه‌نامه`، `لغتنامه`، `واژگان`

### قدم ۳ — هایلایت کن و استفاده کن

توی یادداشتت هر جا خواستی، کلمه رو با `==` بپوشون:

```markdown
این یه ==هایلایت== نمونه‌ست.
```

حالا موس رو ببر روش 👆

---

## 🖱️ تعامل با هایلایت‌ها

| عمل | نتیجه |
|-----|-------|
| **هاور** | نمایش توضیح به‌صورت تولتیپ |
| **کلیک ساده** | عنوان موجود: نمایش تولتیپ · عنوان غایب: پنجرهٔ افزودن |
| **Ctrl + کلیک** | باز کردن خط مربوطه توی یادداشت مرجع |
| **Shift + کلیک** | ویرایش توضیح موجود |
| **Ctrl + Shift + کلیک** | باز کردن یا افزودن (بسته به وجود عنوان) |

> 💡 **روی موبایل:** از تپ ساده برای نمایش، و از دکمه‌های داخل تولتیپ برای ویرایش یا باز کردن استفاده کن.

---

## ⚡ دستورات پالت

با `Ctrl/Cmd + P` بازشون کن:

- **بارگذاری دوبارهٔ مرجع این یادداشت** — اگه مرجع رو دستی تغییر دادی.
- **انتخاب یادداشت مرجع برای این یادداشت** — از یه پنجرهٔ جستجو انتخاب کن.
- **افزودن/ویرایش عنوان هایلایت زیر نشانگر** — بدون نیاز به کلیک، از روی کیبورد.

---

## ⚙️ تنظیمات

| تنظیم | توضیح | پیش‌فرض |
|-------|-------|---------|
| **زبان** | فارسی یا انگلیسی | فارسی |
| **کلید فرانت‌متر** | کلید پیش‌فرض برای مسیر مرجع | `reference` |
| **نمایش توضیح با هاور** | فعال/غیرفعال کردن تولتیپ | فعال |
| **تاخیر هاور** | مدت انتظار قبل از نمایش (۰ تا ۱۰۰۰ms) | ۲۰۰ms |
| **پیام «پیدا نشد»** | نمایش تولتیپ با دکمهٔ افزودن برای عنوان‌های غایب | فعال |
| **درج توضیح کنار هایلایت** | نمایش توضیح به‌صورت برچسب (فقط حالت خواندن) | غیرفعال |

---

## 🧠 جزئیات فنی

### فرمت مرجع

هر خط از این الگو پیروی می‌کنه:

```
عنوان :: توضیح
```

**خطوط ادامه** باید تورفتگی داشته باشن (۲+ فاصله) یا با `>` شروع بشن:

```markdown
==فتوسنتز== :: فرایندی که گیاهان نور رو به انرژی تبدیل می‌کنن.
  توی کلروپلاست‌ها اتفاق می‌افته.
  اکسیژن به‌عنوان محصول جانبی تولید می‌شه.
```

**سینتکس هایلایت مستقیم** هم پشتیبانی می‌شه:

```markdown
==عنوان== توضیحش اینجا
```

### خواندن از فرانت‌متر

پلاگین مسیر مرجع رو با این اولویت از فرانت‌متر می‌خونه:

1. کلید سفارشی که توی تنظیمات تعیین کردی (پیش‌فرض: `reference`)
2. لیست کلیدهای پیش‌فرض:
   - انگلیسی: `reference`، `dictionary`، `glossary`، `vocab`، `lexicon`، `source`
   - فارسی: `مرجع`، `منبع`، `واژه‌نامه`، `لغتنامه`، `واژگان`

هم رشتهٔ تکی و هم آرایه پشتیبانی می‌شه. مسیرها می‌تونن متن ساده، `[[ویکی‌لینک]]`، یا رشتهٔ کوتیشن‌دار باشن.

### نرمال‌سازی واژه‌ها

برای تطبیق قوی‌تر، واژه‌ها قبل از مقایسه نرمال می‌شن:

| تبدیل | مثال |
|-------|------|
| `ي` عربی → `ی` فارسی | `كتاب` → `کتاب` |
| `ك` عربی → `ک` فارسی | `كتاب` → `کتاب` |
| `أ` `إ` `آ` → `ا` | `أحمد` → `احمد` |
| `ة` → `ه` | `مدرسة` → `مدرسه` |
| حذف نیم‌فاصله و کاراکترهای صفر-عرض | `می‌رود` → `میرود` |
| جمع کردن فاصله‌های اضافی | `a   b` → `a b` |
| کوچک کردن حروف | `Word` → `word` |

یعنی `كتاب` (با کاف عربی) و `کتاب` (با کاف فارسی) به یه ورودی match می‌شن.

### کش

- فایل‌های مرجع با **زمان تغییر** کش می‌شن.
- وقتی فایل مرجع تغییر کنه، کش خودکار باطل می‌شه.
- بارگذاری دستی از پالت دستورات در دسترسه.

### پشتهٔ فنی

- **Obsidian API**: `Plugin`، `Modal`، `FuzzySuggestModal`، `MarkdownRenderer`
- **ذخیره‌سازی**: فرانت‌متر از طریق `metadataCache`
- **رندر**: `registerMarkdownPostProcessor` برای توضیح‌های درون‌خطی
- **موبایل**: از API `visualViewport` برای جلوگیری از تداخل با کیبورد استفاده می‌کنه
- **بدون وابستگی خارجی**

### ساختار فایل‌ها

```
.obsidian/plugins/highlight-reference/
├── main.js        # منطق پلاگین
├── manifest.json  # متادیتای پلاگین
└── styles.css     # استایل رابط کاربری
```

---

## 💡 نکات حرفه‌ای

### ترکیب با Spaced Repetition

```markdown
# زیست‌شناسی

==میتوکندری== نیروگاه سلوله.
```

- هایلایت رفرنس با هاور تعریف `میتوکندری` رو نشون می‌ده.
- Spaced Repetition همون `==میتوکندری==` رو به‌عنوان فلش‌کارت برمی‌داره.
- یادداشت مرجعت تنها منبع حقیقت برای تعریفه.

### چند مرجع برای موضوعات مختلف

```yaml
---
reference:
  - "اصطلاحات زیست"
  - "اصطلاحات شیمی"
---
```

حالا یه یادداشت می‌تونه از هر دو مرجع تعریف بگیره.

### توضیح درون‌خطی برای یادداشت‌های مرور

گزینهٔ **درج توضیح کنار هایلایت** رو فعال کن، و هر هایلایت توضیحش رو مستقیم توی حالت خواندن نشون می‌ده — عالی برای چاپ یا خروجی PDF.

---

## 🔧 عیب‌یابی

<details>
<summary><b>توضیح‌ها نمایش داده نمی‌شن</b></summary>

1. مطمئن شو توی فرانت‌متر یادداشت، کلید `reference` (یا یکی از کلیدهای پذیرفته‌شده) وجود داره.
2. مطمئن شو یادداشت مرجع واقعاً توی vault هست و مسیرش درسته.
3. از پالت دستورات **بارگذاری دوبارهٔ مرجع این یادداشت** رو اجرا کن.
4. توی نوار وضعیت پایین صفحه، ببین تعداد موارد بارگذاری‌شده چنده.

</details>

<details>
<summary><b>تولتیپ نمایش داده نمی‌شه</b></summary>

1. تنظیم **نمایش توضیح با هاور** رو چک کن.
2. اگه **تاخیر هاور** زیاد تنظیم شده، کمش کن.
3. تولتیپ‌ها توی حالت خواندن بهتر کار می‌کنن؛ بعضی حالت‌های ویرایش ممکنه متفاوت رفتار کنن.

</details>

<details>
<summary><b>توضیح‌ها به‌روزرسانی نمی‌شن</b></summary>

1. فایل مرجع رو ذخیره کن؛ پلاگین خودکار تغییرات رو detect می‌کنه.
2. اگه نشد، از دستور **بارگذاری دوباره** استفاده کن.

</details>

<details>
<summary><b>روی موبایل مودال زیر کیبورد می‌ره</b></summary>

توی نسخهٔ ۱.۰.۲ این مشکل حل شده. مطمئن شو آخرین نسخه رو داری.

</details>

<details>
<summary><b>واژه‌ها اشتباه match می‌شن</b></summary>

واژه‌ها نرمال می‌شن (بخش فنی رو ببین). اگه تطبیق دقیق می‌خوای، از کلید خاص‌تری استفاده کن.

</details>

---

## 🤝 مشارکت

ایده، پیشنهاد، یا باگ داری؟ خوشحال می‌شم بشنوم:

- 🐛 **Issue**: [GitHub Issues](https://github.com/singhaf9270/obsidian-highlight-reference/issues)
- 🔧 **Pull Request**: خوش‌آمدی!
- ⭐ اگه برات مفید بود، به مخزن **ستاره** بده.

---

## 📄 مجوز

این پروژه تحت مجوز **MIT** منتشر شده. جزئیات توی فایل [LICENSE](LICENSE).

---

## 🌐 ما رو دنبال کن

آموزش‌ها و مطالب بیشتر دربارهٔ Obsidian:

<table>
  <tr>
    <td align="center">
      <a href="https://t.me/obsidiantut">
        <img src="https://img.shields.io/badge/Telegram-%40obsidiantut-229ED9?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
      </a>
    </td>
    <td align="center">
      <a href="https://ble.ir/obsidiantut">
        <img src="https://img.shields.io/badge/Bale-%40obsidiantut-22A06B?style=for-the-badge" alt="Bale">
      </a>
    </td>
    <td align="center">
      <a href="https://youtube.com/@obsidiantut">
        <img src="https://img.shields.io/badge/YouTube-%40obsidiantut-FF0033?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center"><b>تلگرام</b><br>@obsidiantut</td>
    <td align="center"><b>بله</b><br>@obsidiantut</td>
    <td align="center"><b>یوتیوب</b><br>@obsidiantut</td>
  </tr>
</table>

---

<p align="center">
  ساخته شده با ❤️ برای جامعهٔ Obsidian فارسی
</p>

</details>
