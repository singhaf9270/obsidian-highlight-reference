# Highlight Reference

> **Turn any `==highlight==` into an instant knowledge lookup.**
> **هر `==هایلایت==` را به یک مرجع دانش لحظه‌ای تبدیل کن.**



---

<details open> <summary><strong>🇬🇧 English</strong></summary>

## What is Highlight Reference?

**Highlight Reference** turns Obsidian's built-in `==highlight==` syntax into an interactive knowledge reference.

Hover over a highlighted word and instantly see its meaning — without opening another note or leaving your current workflow.

It works like a **personal dictionary, glossary, or knowledge base that lives inside your notes.**

### The idea

```text
==word== → hover → see the meaning
                     ↓
              edit or add it
```

### Why Highlight Reference?

Instead of opening a separate glossary, using a custom syntax, or duplicating definitions across notes, Highlight Reference lets you keep your existing Markdown workflow.

* Uses Obsidian's native `==highlight==` syntax
* Definitions are stored in regular Markdown notes
* References are connected through frontmatter
* Multiple reference notes are supported
* Definitions can contain Markdown
* Missing terms can be added directly from the tooltip

---

## Who is it for?

**Language learners**
Highlight vocabulary and instantly see translations or definitions.

**Researchers**
Keep technical terms and concepts connected to your notes.

**Students**
Build a personal study reference while taking notes.

**Writers**
Create a personal terminology or style reference.

**PKM users**
Connect notes to central reference files without duplicating information.

---

## Features

| Feature                 | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| 🖱️ Hover lookup        | See a term's meaning instantly                             |
| ➕ Quick add             | Add missing terms directly from the tooltip                |
| ✏️ Inline editing       | Edit existing meanings without leaving your note           |
| 📂 Open reference       | Jump directly to the matching line                         |
| 📌 Inline meanings      | Display definitions next to highlights in Reading View     |
| 🗂️ Multiple references | Connect one note to multiple reference files               |
| 🌐 Bilingual UI         | English and Persian interface                              |
| 📝 Markdown support     | Definitions can contain links, lists, formatting, and more |
| 🔁 Spaced Repetition    | Use reference entries as flashcards                        |
| ⚡ Smart caching         | Reference files are cached and refreshed when changed      |
| 📱 Mobile support       | Designed to work on desktop and mobile                     |

---

## Quick Start

### 1. Create a reference note

Create a normal Markdown note such as:

```text
My Reference.md
```

Add one entry per line:

```markdown
term :: meaning
```

For example:

```markdown
==highlight== :: Text wrapped in == that becomes highlighted.

==frontmatter== :: Metadata stored at the top of an Obsidian note.
```

You can also write:

```markdown
==term== Meaning of the term.
```

---

### 2. Connect the reference to your note

Add the reference to your note's frontmatter:

```yaml
---
reference: "My Reference"
---
```

You can also use a wikilink:

```yaml
---
reference: "[[My Reference]]"
---
```

---

### 3. Highlight a term

Write:

```markdown
This is a ==highlight== example.
```

Now hover over `highlight`.

The definition appears instantly.

---

## Example

### Reference note

```markdown
==photosynthesis== :: The process by which plants convert light energy into chemical energy.

==chloroplast== :: The organelle where photosynthesis takes place.

==glucose== :: A simple sugar produced during photosynthesis.
```

### Study note

```markdown
---
reference: "Biology Reference"
---

Plants use ==photosynthesis== to produce ==glucose==.
The process takes place inside the ==chloroplast==.
```

Hover over any highlighted term to see its definition.

---

## Interactions

| Action                       | Result                                           |
| ---------------------------- | ------------------------------------------------ |
| **Hover**                    | Show the definition                              |
| **Click**                    | Show the definition; if missing, offer to add it |
| **Ctrl/Cmd + Click**         | Open the matching reference entry                |
| **Shift + Click**            | Edit the existing definition                     |
| **Ctrl/Cmd + Shift + Click** | Open or add the entry                            |
| **Mobile tap**               | Show the tooltip                                 |

On mobile, editing and opening the reference can be done using the buttons inside the tooltip.

---

## Command Palette

Open the Command Palette with `Ctrl/Cmd + P`.

Available commands include:

* **Reload this note's reference**
* **Choose reference note for this note**
* **Add/Edit highlighted word at cursor**

These commands are useful when you want to manage references without using the mouse.

---

## Frontmatter References

The default frontmatter key is:

```yaml
reference: "My Reference"
```

However, Highlight Reference also recognizes several common keys.

### English keys

```text
reference
dictionary
glossary
vocab
lexicon
source
```

### Persian keys

```text
مرجع
منبع
واژه‌نامه
لغتنامه
واژگان
```

The primary key can also be changed in plugin settings.

---

## Multiple References

A note can use more than one reference.

For example:

```yaml
---
reference: "Main Reference"
glossary: "Technical Terms"
---
```

Both reference files are loaded and merged.

If the same term exists in multiple references, the first matching entry takes priority.

This makes it possible to combine:

```text
General Dictionary
        +
Technical Glossary
        +
Personal Vocabulary
```

without copying the definitions into your study note.

---

## Reference Paths

All of these formats are supported:

### Simple name

```yaml
---
reference: "Glossary"
---
```

### Wikilink

```yaml
---
reference: "[[Main Glossary]]"
---
```

### Full path

```yaml
---
reference: "Folder/Subfolder/Glossary.md"
---
```

---

## Multi-line Definitions

Definitions can span multiple lines.

Indent continuation lines with at least two spaces:

```markdown
==photosynthesis== :: The process by which plants convert light energy
  into chemical energy.
  It takes place mainly inside chloroplasts.
  Oxygen is released as a byproduct.
```

You can also use blockquote continuation:

```markdown
==photosynthesis== :: The process by which plants convert light energy.
> It takes place inside chloroplasts.
> Oxygen is released as a byproduct.
```

---

## Markdown in Definitions

Definitions are not limited to plain text.

You can use Markdown such as:

```markdown
==Obsidian== :: A knowledge management application with support for
**Markdown**, [[Wikilinks]], lists, and other Markdown features.
```

This allows reference entries to contain:

* **Bold text**
* *Italic text*
* Links
* Wikilinks
* Lists
* Other Markdown formatting

---

# Spaced Repetition

Highlight Reference can work alongside the **Spaced Repetition** plugin.

[Spaced Repetition on GitHub](https://github.com/st3v3nmw/obsidian-spaced-repetition?utm_source=chatgpt.com)

This allows the same reference note to serve two purposes:

```text
Reference Note
      │
      ├── Highlight Reference
      │      └── Hover definitions
      │
      └── Spaced Repetition
             └── Flashcards
```

### Example

Your reference note:

```markdown
==mitochondria== :: The organelle responsible for producing ATP. #flashcard

==ribosome== :: The cellular structure responsible for protein synthesis. #flashcard

==nucleus== :: The organelle that contains most of the cell's DNA. #flashcard
```

Your study note:

```markdown
---
reference: "Biology Reference"
---

The ==mitochondria== produces energy, while ==ribosome==s
are responsible for protein synthesis.
```

Highlight Reference displays the definitions when you hover.

Spaced Repetition can use the same entries for review.

### Why use both?

**One source, multiple uses.**

You write the definition once and reuse it for:

* Reading
* Note-taking
* Reference lookup
* Flashcards
* Spaced repetition

No need to maintain duplicate definitions.

> **Note:** The exact flashcard hashtag depends on your Spaced Repetition settings.

For example:

```text
#flashcard
```

or another tag configured in the plugin.

Check the **Flashcard tags** section in Spaced Repetition settings for the tag used by your vault.

---

# Inline Meanings

Highlight Reference can optionally display definitions directly beside highlighted terms in **Reading View**.

For example:

```text
The mitochondria [the organelle responsible for producing ATP]
```

This can be useful for:

* Study notes
* Revision notes
* Printed documents
* PDF exports
* Reading material

Enable **Inline meaning** in the plugin settings.

---

# Term Normalization

Highlight Reference normalizes terms before comparing them.

This is especially useful for Persian and Arabic text.

| Transformation               | Example            |
| ---------------------------- | ------------------ |
| Arabic `ي` → Persian `ی`     | `كتاب` → `کتاب`    |
| Arabic `ك` → Persian `ک`     | `كتاب` → `کتاب`    |
| `أ`, `إ`, `آ` → `ا`          | `أحمد` → `احمد`    |
| `ة` → `ه`                    | `مدرسة` → `مدرسه`  |
| Remove zero-width characters | `می‌رود` → `میرود` |
| Collapse extra spaces        | `a   b` → `a b`    |
| Lowercase English            | `Word` → `word`    |

For example:

```text
كتاب
کتاب
```

are treated as the same term after normalization.

---

# Smart Caching

Reference files are cached to avoid unnecessary repeated parsing.

The cache is associated with the file's modification state.

When a reference file changes:

1. The plugin detects the change.
2. The old cache is invalidated.
3. The reference is loaded again.

You can also manually reload a reference from the Command Palette:

```text
Reload this note's reference
```

---

# Settings

| Setting                   | Description                        | Default     |
| ------------------------- | ---------------------------------- | ----------- |
| **Language**              | Plugin interface language          | Persian     |
| **Frontmatter key**       | Primary reference key              | `reference` |
| **Show meaning on hover** | Enable/disable tooltips            | On          |
| **Hover delay**           | Delay before tooltip appears       | 200 ms      |
| **Not found message**     | Show add option for missing terms  | On          |
| **Inline meaning**        | Show definitions beside highlights | Off         |

### Hover Delay

The hover delay can be adjusted between:

```text
0–1000 ms
```

A shorter delay makes lookup feel more immediate.

A longer delay can reduce accidental tooltips while moving the mouse across the page.

---

# Mobile Support

Highlight Reference supports mobile Obsidian.

The plugin uses the browser's `visualViewport` API when displaying input interfaces on mobile.

This helps prevent dialogs from being hidden behind the on-screen keyboard.

**Version 1.0.2** includes a fix for mobile dialogs appearing underneath the keyboard.

---

# Troubleshooting

<details> <summary><strong>Definitions are not showing</strong></summary>

Check the following:

1. Make sure your note contains a valid reference in frontmatter.
2. Make sure the reference note exists.
3. Check that the path or note name is correct.
4. Run **Reload this note's reference** from the Command Palette.
5. Check the status bar for the number of loaded entries.

</details>

<details> <summary><strong>The tooltip does not appear</strong></summary>

1. Make sure **Show meaning on hover** is enabled.
2. Try lowering the **Hover delay**.
3. Test the highlight in Reading View.
4. Make sure the highlighted term exists in the connected reference.

</details>

<details> <summary><strong>Changes to the reference are not appearing</strong></summary>

Save the reference note first.

The plugin automatically detects changes and refreshes its cache.

If the change still does not appear, use:

```text
Command Palette → Reload this note's reference
```

</details>

<details> <summary><strong>Terms are matching unexpectedly</strong></summary>

Highlight Reference normalizes terms before comparison.

For example:

```text
كتاب
کتاب
```

are considered equivalent.

If exact matching is important, use more specific reference entries.

</details>

<details> <summary><strong>Mobile dialog appears behind the keyboard</strong></summary>

Make sure you are using **Highlight Reference 1.0.2 or later**.

The mobile viewport handling was improved in version 1.0.2.

</details>

---

# Technical Details

### Built with the Obsidian API

Highlight Reference uses:

```text
Plugin
Modal
FuzzySuggestModal
MarkdownRenderer
metadataCache
registerMarkdownPostProcessor
```

### Storage

Reference paths are read from note frontmatter through Obsidian's metadata cache.

### Rendering

Inline meanings are rendered using:

```text
registerMarkdownPostProcessor
```

### Mobile

Mobile positioning uses:

```text
visualViewport
```

### Dependencies

Highlight Reference has:

```text
No external dependencies
```

---

# File Structure

```text
.obsidian/plugins/highlight-reference/
├── main.js
├── manifest.json
└── styles.css
```

---

# Installation

## Community Plugins

1. Open **Obsidian**.
2. Go to **Settings → Community plugins**.
3. Click **Browse**.
4. Search for **Highlight Reference**.
5. Click **Install**.
6. Click **Enable**.

## Manual Installation

Download the latest release:

[Highlight Reference Releases](https://github.com/singhaf9270/obsidian-highlight-reference/releases?utm_source=chatgpt.com)

Copy these files:

```text
main.js
manifest.json
styles.css
```

into:

```text
.obsidian/plugins/highlight-reference/
```

Then restart Obsidian and enable the plugin.

## BRAT

For development or beta versions:

1. Install **BRAT**.
2. Open BRAT settings.
3. Select **Add Beta plugin**.
4. Enter:

```text
https://github.com/singhaf9270/obsidian-highlight-reference
```

5. Click **Add Plugin**.

---

# Contributing

Bug reports, ideas, suggestions, and pull requests are welcome.

[Report an issue](https://github.com/singhaf9270/obsidian-highlight-reference/issues?utm_source=chatgpt.com)

[View the source code on GitHub](https://github.com/singhaf9270/obsidian-highlight-reference?utm_source=chatgpt.com)

If you find Highlight Reference useful, consider giving the repository a ⭐.

---

# License

Released under the **MIT License**.

See the `LICENSE` file for details.

---

# Follow

Obsidian tutorials and Persian content:

* [Telegram — @obsidiantut](https://t.me/obsidiantut?utm_source=chatgpt.com)
* [Bale — @obsidiantut](https://ble.ir/obsidiantut?utm_source=chatgpt.com)
* [YouTube — @obsidiantut](https://youtube.com/@obsidiantut?utm_source=chatgpt.com)

</details>

---

<details open> <summary><strong>🇮🇷 فارسی</strong></summary>

# هایلایت رفرنس چیست؟

**Highlight Reference** سینتکس معمولی `==هایلایت==` در Obsidian را به یک **مرجع دانش تعاملی** تبدیل می‌کند.

کافی است موس را روی یک کلمهٔ هایلایت‌شده ببری تا معنی یا توضیح آن بدون باز کردن فایل دیگری نمایش داده شود.

در واقع می‌توانی آن را مثل یک:

> **واژه‌نامه، فرهنگ اصطلاحات یا پایگاه دانش شخصی داخل یادداشت‌ها**

در نظر بگیری.

### ایدهٔ اصلی

```text
==کلمه== → هاور → نمایش معنی
                    ↓
              ویرایش یا افزودن
```

---

## چرا Highlight Reference؟

لازم نیست:

* پنل جداگانه‌ای باز کنی.
* سینتکس جدیدی یاد بگیری.
* تعریف یک کلمه را در چند یادداشت تکرار کنی.

پلاگین با همان قابلیت داخلی هایلایت Obsidian کار می‌کند:

```markdown
==کلمه==
```

و تعریف‌ها را در فایل‌های Markdown معمولی نگه می‌دارد.

---

## مناسب چه کسانی است؟

**زبان‌آموزها**
برای دیدن سریع معنی و ترجمهٔ واژه‌های جدید.

**دانشجوها**
برای ساخت یک مرجع شخصی در کنار یادداشت‌های درسی.

**پژوهشگران**
برای ثبت اصطلاحات تخصصی و علمی.

**نویسنده‌ها**
برای ساخت واژه‌نامه یا راهنمای اصطلاحات شخصی.

**کاربران PKM**
برای اتصال یادداشت‌ها به مراجع مرکزی بدون ایجاد اطلاعات تکراری.

---

# قابلیت‌ها

| قابلیت                          | توضیح                                    |
| ------------------------------- | ---------------------------------------- |
| 🖱️ نمایش معنی با هاور          | نمایش فوری توضیح                         |
| ➕ افزودن سریع                   | اضافه کردن عنوان‌های جدید                |
| ✏️ ویرایش سریع                  | ویرایش تعریف بدون ترک یادداشت            |
| 📂 باز کردن مرجع                | رفتن مستقیم به خط مربوطه                 |
| 📌 معنی درون‌خطی                | نمایش توضیح کنار هایلایت در Reading View |
| 🗂️ چند مرجع                    | اتصال یک یادداشت به چند مرجع             |
| 🌐 رابط دو زبانه                | فارسی و انگلیسی                          |
| 📝 پشتیبانی از Markdown         | لینک، لیست، بولد و سایر قالب‌ها          |
| 🔁 سازگاری با Spaced Repetition | استفاده از مرجع برای فلش‌کارت            |
| ⚡ کش هوشمند                     | جلوگیری از پردازش غیرضروری               |
| 📱 پشتیبانی از موبایل           | مناسب برای Obsidian موبایل               |

---

# شروع سریع

## ۱. ساخت مرجع

یک یادداشت معمولی بساز:

```text
واژه‌نامه.md
```

و داخل آن بنویس:

```markdown
عنوان :: توضیح
```

مثلاً:

```markdown
==فتوسنتز== :: فرایندی که گیاهان با استفاده از نور، انرژی شیمیایی تولید می‌کنند.

==کلروپلاست== :: اندامکی که فرایند فتوسنتز در آن انجام می‌شود.
```

---

## ۲. اتصال مرجع

در ابتدای یادداشتت بنویس:

```yaml
---
reference: "واژه‌نامه"
---
```

یا:

```yaml
---
reference: "[[واژه‌نامه]]"
---
```

---

## ۳. استفاده از هایلایت

در متن بنویس:

```markdown
گیاهان از طریق ==فتوسنتز== انرژی تولید می‌کنند.
```

حالا موس را روی `فتوسنتز` ببر.

تعریف آن نمایش داده می‌شود.

---

# مثال کامل

### یادداشت مرجع

```markdown
==میتوکندری== :: اندامکی که نقش مهمی در تولید ATP و تأمین انرژی سلول دارد.

==ریبوزوم== :: ساختاری که در فرایند ساخت پروتئین نقش دارد.

==هسته== :: بخشی از سلول که بیشتر DNA سلول در آن قرار دارد.
```

### یادداشت مطالعه

```markdown
---
reference: "مرجع زیست"
---

سلول دارای بخش‌های مختلفی است.
==میتوکندری== در تأمین انرژی نقش دارد و ==ریبوزوم==
در ساخت پروتئین فعالیت می‌کند.
```

با قرار دادن موس روی هر کلمه، توضیح آن نمایش داده می‌شود.

---

# تعامل با هایلایت‌ها

| عمل                         | نتیجه                         |
| --------------------------- | ----------------------------- |
| **هاور**                    | نمایش توضیح                   |
| **کلیک**                    | نمایش توضیح یا پیشنهاد افزودن |
| **Ctrl/Cmd + کلیک**         | باز کردن خط مربوطه در مرجع    |
| **Shift + کلیک**            | ویرایش تعریف                  |
| **Ctrl/Cmd + Shift + کلیک** | باز کردن یا افزودن            |
| **تپ در موبایل**            | نمایش توضیح                   |

در موبایل، دکمه‌های داخل تولتیپ برای ویرایش و باز کردن مرجع در دسترس هستند.

---

# دستورات پالت

با `Ctrl/Cmd + P` می‌توانی به این دستورات دسترسی داشته باشی:

* **بارگذاری دوبارهٔ مرجع این یادداشت**
* **انتخاب یادداشت مرجع برای این یادداشت**
* **افزودن/ویرایش عنوان هایلایت زیر نشانگر**

---

# چند مرجع هم‌زمان

می‌توانی یک یادداشت را به چند مرجع متصل کنی:

```yaml
---
reference: "مرجع اصلی"
glossary: "اصطلاحات تخصصی"
---
```

پلاگین هر دو فایل را می‌خواند و ورودی‌ها را با هم ترکیب می‌کند.

اگر یک عنوان در چند مرجع وجود داشته باشد، **اولین ورودی پیدا‌شده اولویت دارد.**

مثلاً می‌توانی داشته باشی:

```text
واژه‌نامه عمومی
        +
اصطلاحات تخصصی
        +
واژه‌های شخصی
```

بدون اینکه تعریف‌ها را در یادداشت‌های مختلف کپی کنی.

---

# کلیدهای Frontmatter

کلید پیش‌فرض:

```yaml
reference: "واژه‌نامه"
```

اما پلاگین کلیدهای دیگری را نیز می‌شناسد.

### انگلیسی

```text
reference
dictionary
glossary
vocab
lexicon
source
```

### فارسی

```text
مرجع
منبع
واژه‌نامه
لغتنامه
واژگان
```

کلید اصلی نیز از بخش تنظیمات قابل تغییر است.

---

# مسیر مرجع

### نام ساده

```yaml
---
reference: "واژه‌نامه"
---
```

### ویکی‌لینک

```yaml
---
reference: "[[واژه‌نامه اصلی]]"
---
```

### مسیر کامل

```yaml
---
reference: "پوشه/زیرپوشه/واژه‌نامه.md"
---
```

---

# توضیحات چندخطی

تعریف‌ها می‌توانند چندخطی باشند.

برای ادامهٔ توضیح، خط‌های بعدی را با حداقل دو فاصله شروع کن:

```markdown
==فتوسنتز== :: فرایندی که گیاهان با استفاده از نور
  انرژی شیمیایی تولید می‌کنند.
  این فرایند عمدتاً در کلروپلاست انجام می‌شود.
```

یا:

```markdown
==فتوسنتز== :: فرایندی که گیاهان با استفاده از نور انرژی تولید می‌کنند.
> این فرایند در کلروپلاست انجام می‌شود.
> اکسیژن نیز به‌عنوان محصول جانبی آزاد می‌شود.
```

---

# پشتیبانی از Markdown

تعریف‌ها می‌توانند Markdown داشته باشند:

```markdown
==Obsidian== :: یک برنامهٔ مدیریت دانش با پشتیبانی از
**Markdown**، [[Wikilink]] و فهرست‌ها.
```

بنابراین می‌توانی داخل تعریف‌ها از موارد زیر استفاده کنی:

* **متن ضخیم**
* *متن ایتالیک*
* لینک
* ویکی‌لینک
* فهرست
* قالب‌بندی Markdown

---

# Spaced Repetition

Highlight Reference می‌تواند در کنار پلاگین **Spaced Repetition** استفاده شود.

[Spaced Repetition در GitHub](https://github.com/st3v3nmw/obsidian-spaced-repetition?utm_source=chatgpt.com)

ایده ساده است:

```text
              یادداشت مرجع
                   │
          ┌────────┴────────┐
          ↓                 ↓
 Highlight Reference   Spaced Repetition
          ↓                 ↓
      نمایش معنی          فلش‌کارت
```

مثلاً:

```markdown
==میتوکندری== :: اندامکی که در تولید ATP نقش دارد. #flashcard

==ریبوزوم== :: ساختار مسئول ساخت پروتئین است. #flashcard

==هسته== :: محل قرارگیری بیشتر DNA سلول است. #flashcard
```

در یادداشت مطالعه:

```markdown
---
reference: "مرجع زیست"
---

==میتوکندری== در تأمین انرژی سلول نقش دارد.
```

حالا:

* Highlight Reference هنگام هاور، تعریف را نشان می‌دهد.
* Spaced Repetition می‌تواند همان ورودی‌ها را برای مرور استفاده کند.

### مزیت اصلی

**یک بار بنویس، چند بار استفاده کن.**

همان تعریف می‌تواند برای:

* مطالعه
* یادداشت‌برداری
* مرجع سریع
* فلش‌کارت
* مرور فاصله‌دار

استفاده شود.

> نوع هشتگ فلش‌کارت به تنظیمات Spaced Repetition بستگی دارد. بخش **Flashcard tags** را در تنظیمات آن بررسی کن.

---

# معنی درون‌خطی

با فعال کردن گزینهٔ **درج توضیح کنار هایلایت**، معنی در Reading View کنار کلمه نمایش داده می‌شود.

این قابلیت برای موارد زیر مفید است:

* یادداشت‌های آموزشی
* مرور درسی
* چاپ
* خروجی PDF
* متون آموزشی

---

# نرمال‌سازی واژه‌ها

برای اینکه تطبیق فارسی و عربی بهتر انجام شود، واژه‌ها قبل از مقایسه نرمال می‌شوند.

| تبدیل                     | مثال               |
| ------------------------- | ------------------ |
| `ي` → `ی`                 | `كتاب` → `کتاب`    |
| `ك` → `ک`                 | `كتاب` → `کتاب`    |
| `أ`، `إ`، `آ` → `ا`       | `أحمد` → `احمد`    |
| `ة` → `ه`                 | `مدرسة` → `مدرسه`  |
| حذف کاراکترهای صفرعرض     | `می‌رود` → `میرود` |
| حذف فاصله‌های اضافی       | `a   b` → `a b`    |
| حروف انگلیسی کوچک می‌شوند | `Word` → `word`    |

بنابراین:

```text
كتاب
کتاب
```

به‌عنوان یک عنوان در نظر گرفته می‌شوند.

---

# کش هوشمند

فایل‌های مرجع برای جلوگیری از پردازش اضافی کش می‌شوند.

وقتی فایل مرجع تغییر کند:

1. تغییر شناسایی می‌شود.
2. کش قبلی کنار گذاشته می‌شود.
3. فایل دوباره خوانده می‌شود.

همچنین می‌توانی از Command Palette به‌صورت دستی مرجع را Reload کنی.

---

# تنظیمات

| تنظیم                      | توضیح                          | پیش‌فرض     |
| -------------------------- | ------------------------------ | ----------- |
| **زبان**                   | زبان رابط پلاگین               | فارسی       |
| **کلید Frontmatter**       | کلید اصلی مرجع                 | `reference` |
| **نمایش معنی با هاور**     | فعال/غیرفعال کردن تولتیپ       | فعال        |
| **تاخیر هاور**             | زمان انتظار برای نمایش         | ۲۰۰ms       |
| **پیام پیدا نشد**          | نمایش گزینهٔ افزودن عنوان جدید | فعال        |
| **درج توضیح کنار هایلایت** | نمایش معنی در Reading View     | غیرفعال     |

تاخیر هاور بین:

```text
0 تا 1000 میلی‌ثانیه
```

قابل تنظیم است.

---

# پشتیبانی از موبایل

Highlight Reference برای Obsidian موبایل نیز طراحی شده است.

برای مدیریت بهتر موقعیت پنجره‌ها هنگام باز شدن کیبورد از:

```text
visualViewport
```

استفاده می‌شود.

مشکل قرار گرفتن پنجره زیر کیبورد در **نسخهٔ 1.0.2** برطرف شده است.

---

# عیب‌یابی

<details> <summary><strong>معنی‌ها نمایش داده نمی‌شوند</strong></summary>

1. وجود `reference` یا یکی از کلیدهای مجاز را در Frontmatter بررسی کن.
2. مطمئن شو فایل مرجع وجود دارد.
3. مسیر مرجع را بررسی کن.
4. دستور **بارگذاری دوبارهٔ مرجع این یادداشت** را اجرا کن.
5. تعداد ورودی‌های بارگذاری‌شده را در Status Bar بررسی کن.

</details>

<details> <summary><strong>تولتیپ نمایش داده نمی‌شود</strong></summary>

1. گزینهٔ **نمایش معنی با هاور** را بررسی کن.
2. مقدار **تاخیر هاور** را کاهش بده.
3. در Reading View امتحان کن.
4. مطمئن شو عنوان موردنظر در مرجع وجود دارد.

</details>

<details> <summary><strong>تغییرات مرجع نمایش داده نمی‌شوند</strong></summary>

ابتدا فایل مرجع را ذخیره کن.

پلاگین تغییرات را به‌صورت خودکار تشخیص می‌دهد.

اگر تغییر نمایش داده نشد:

```text
Command Palette
→ Reload this note's reference
```

را اجرا کن.

</details>

<details> <summary><strong>کلمات به‌صورت غیرمنتظره Match می‌شوند</strong></summary>

پلاگین واژه‌ها را قبل از مقایسه نرمال می‌کند.

برای مثال:

```text
كتاب
کتاب
```

معادل در نظر گرفته می‌شوند.

اگر تطبیق دقیق‌تری لازم داری، از عنوان‌های مشخص‌تر استفاده کن.

</details>

<details> <summary><strong>پنجره در موبایل زیر کیبورد قرار می‌گیرد</strong></summary>

از نسخهٔ **1.0.2 یا جدیدتر** استفاده کن.

مدیریت موقعیت پنجره‌ها در این نسخه بهبود یافته است.

</details>

---

# جزئیات فنی

Highlight Reference از APIهای زیر Obsidian استفاده می‌کند:

```text
Plugin
Modal
FuzzySuggestModal
MarkdownRenderer
metadataCache
registerMarkdownPostProcessor
```

### ذخیره‌سازی

مسیر مراجع از Frontmatter یادداشت و از طریق `metadataCache` خوانده می‌شود.

### رندر

معنی‌های درون‌خطی با:

```text
registerMarkdownPostProcessor
```

پردازش می‌شوند.

### موبایل

برای مدیریت موقعیت رابط کاربری:

```text
visualViewport
```

استفاده می‌شود.

### وابستگی خارجی

این پلاگین:

```text
هیچ وابستگی خارجی ندارد.
```

---

# ساختار فایل‌ها

```text
.obsidian/plugins/highlight-reference/
├── main.js
├── manifest.json
└── styles.css
```

---

# نصب

## نصب از Community Plugins

1. Obsidian را باز کن.
2. به **Settings → Community plugins** برو.
3. روی **Browse** کلیک کن.
4. عبارت **Highlight Reference** را جستجو کن.
5. روی **Install** کلیک کن.
6. پلاگین را **Enable** کن.

## نصب دستی

[آخرین نسخه Highlight Reference](https://github.com/singhaf9270/obsidian-highlight-reference/releases?utm_source=chatgpt.com)

این سه فایل را دانلود کن:

```text
main.js
manifest.json
styles.css
```

و داخل این مسیر قرار بده:

```text
.obsidian/plugins/highlight-reference/
```

سپس Obsidian را دوباره اجرا و پلاگین را فعال کن.

## نصب با BRAT

برای نسخه‌های آزمایشی:

1. BRAT را نصب کن.
2. وارد تنظیمات BRAT شو.
3. **Add Beta plugin** را انتخاب کن.
4. این آدرس را وارد کن:

```text
https://github.com/singhaf9270/obsidian-highlight-reference
```

5. روی **Add Plugin** کلیک کن.

---

# مشارکت

اگر ایده، پیشنهاد یا باگی داری، خوشحال می‌شوم آن را در GitHub مطرح کنی.

[گزارش Issue](https://github.com/singhaf9270/obsidian-highlight-reference/issues?utm_source=chatgpt.com)

[مشاهده کد منبع در GitHub](https://github.com/singhaf9270/obsidian-highlight-reference?utm_source=chatgpt.com)

اگر پلاگین برایت مفید بود، می‌توانی به مخزن ⭐ بدهی.

---

# مجوز

این پروژه تحت مجوز **MIT License** منتشر شده است.

برای جزئیات، فایل `LICENSE` را ببین.

---

# آموزش‌های Obsidian

برای آموزش‌ها و مطالب فارسی Obsidian:

* [تلگرام — @obsidiantut](https://t.me/obsidiantut?utm_source=chatgpt.com)
* [بله — @obsidiantut](https://ble.ir/obsidiantut?utm_source=chatgpt.com)
* [یوتیوب — @obsidiantut](https://youtube.com/@obsidiantut?utm_source=chatgpt.com)

---

<p align="center">

**ساخته شده با ❤️ برای جامعهٔ Obsidian**

</p>

</details>
