# Highlight Reference

> Show dictionary meanings on hover over `==highlighted==` words in Obsidian.
>
> نمایش معنی واژه‌ها روی هایلایت‌ها در Obsidian — بدون نیاز به باز کردن واژه‌نامه.

![Obsidian](https://img.shields.io/badge/Obsidian-Plugin-7C3AED?style=flat-square\&logo=obsidian\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square)

---

<!-- ==================== ENGLISH ==================== -->

<details open>
<summary><b>🇬🇧 English</b></summary>

## ✨ Features

* **Hover to see meaning** — move your mouse over a highlight and a tooltip appears.
* **Quick add for missing words** — if a word isn't in the glossary, add it with one click.
* **Edit existing meanings** — the tooltip has an edit button.
* **Open in source** — jump to the exact line in your glossary with one click.
* **Inline meaning** — show the meaning as a small label next to the highlight (reading view only).
* **Multiple glossaries** — each note can reference several glossary files.
* **Bilingual UI** — Persian (فارسی) and English.
* **Markdown support** — meanings can include links, lists, and formatting.

---

## 🚀 Installation

### From the official Obsidian marketplace

1. Open Obsidian.
2. Go to **Settings → Community plugins**.
3. Click **Browse** and search for "Highlight Reference".
4. Click **Install**, then **Enable**.

### Manual installation

1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/singhaf9270/obsidian-highlight-reference/releases/latest).
2. In your vault, create the folder `.obsidian/plugins/highlight-reference/`.
3. Copy the three files into it.
4. Restart Obsidian and enable the plugin from **Settings → Community plugins**.

### Using BRAT (for beta versions)

1. Install the **BRAT** plugin.
2. In BRAT settings, click **Add Beta plugin**.
3. Enter the repository URL:
   `https://github.com/singhaf9270/obsidian-highlight-reference`
4. Click **Add Plugin**.

---

## 📖 Usage

### 1. Create a glossary

Create a note (e.g. `Glossary.md`) and write one entry per line:

```markdown
term :: meaning
```

Example:

```markdown
==highlight== :: Text surrounded by == that becomes bold.
==frontmatter== :: The section at the top of a note, between two --- lines.
  Continuation of the meaning goes on the next line with indentation.
```

You can also use the highlight syntax directly:

```markdown
==term== meaning of the term
```

### 2. Link a note to a glossary

In the **frontmatter** of your note, write:

```yaml
---
reference: "Glossary"
---
```

Other accepted keys:

`dictionary`, `glossary`, `vocab`, `lexicon`, `reference`, `source`

You can list multiple glossaries:

```yaml
---
reference:
  - "Main Glossary"
  - "Specialized Glossary"
---
```

### 3. Interact with highlights

| Action                   | Result                                            |
| ------------------------ | ------------------------------------------------- |
| **Hover**                | Show the meaning tooltip                          |
| **Click**                | Existing word: tooltip · Missing word: add dialog |
| **Ctrl + Click**         | Open the entry's line in the glossary             |
| **Shift + Click**        | Edit an existing meaning or add a new word        |
| **Ctrl + Shift + Click** | Open or add, depending on whether the word exists |

### 4. Command palette

* **Reload this note's glossary** — reload the glossary.
* **Choose reference note for this note** — pick a reference note.
* **Add/Edit highlighted word at cursor** — add or edit the word under the cursor.

---

## ⚙️ Settings

| Setting                   | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| **Language**              | Persian or English                                       |
| **Frontmatter key**       | Default key for the glossary path (default: `reference`) |
| **Show meaning on hover** | Enable/disable the tooltip                               |
| **Hover delay**           | Time to wait before showing the tooltip (0–1000 ms)      |
| **"Not found" message**   | Show a tooltip with an add button for missing words      |
| **Inline meaning**        | Show the meaning as a small label (reading view only)    |

---

## 💡 Notes

* Continuation lines must be **indented** or start with `>`.
* Meanings support Markdown: links, lists, bold, italic, etc.
* If the reference note isn't found, an error notice appears.
* For quick edits, use **Shift + Click** on a highlight.
* Terms are normalized: `ي` → `ی`, `ك` → `ک`, ZWNJ and extra spaces are removed.

---

## 🔧 Troubleshooting

**Words aren't showing:**

* Make sure the frontmatter key `reference` exists in your note.
* The reference note must exist in your vault.
* Run **Reload this note's glossary** from the command palette.

**The tooltip doesn't appear:**

* Check the **Show meaning on hover** setting.
* If the delay is too long, lower the **Hover delay** value.

**Meanings aren't updating:**

* Save the glossary file; the plugin detects changes automatically.
* Or use the reload command.

---

## 🤝 Contributing

Ideas, suggestions, and bug reports are welcome:

* **Issues**: [GitHub Issues](https://github.com/singhaf9270/obsidian-highlight-reference/issues)
* **Pull Requests**: welcome!

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

</details>

---

<!-- ==================== PERSIAN ==================== -->

<details open>
<summary><b>🇮🇷 فارسی</b></summary>

## ✨ ویژگی‌ها

* **نمایش معنی با هاور** — موس را روی هایلایت ببرید، معنی به‌صورت تولتیپ ظاهر می‌شود.
* **افزودن سریع واژهٔ غایب** — اگر واژه در واژه‌نامه نبود، با یک کلیک به آن اضافه کنید.
* **ویرایش معنی موجود** — روی تولتیپ دکمهٔ ویرایش دارد.
* **باز کردن در منبع** — با یک کلیک به خط مربوطه در واژه‌نامه بروید.
* **معنی درج‌شده کنار هایلایت** — در حالت خواندن، بدون نیاز به هاور.
* **پشتیبانی از چند واژه‌نامه** — هر یادداشت می‌تواند چند مرجع داشته باشد.
* **دو زبانه** — رابط کاربری فارسی و انگلیسی.
* **پشتیبانی از Markdown** — معنی‌ها می‌توانند شامل لینک، لیست و قالب‌بندی باشند.

---

## 🚀 نصب

### از بازار رسمی Obsidian

1. Obsidian را باز کنید.
2. به **Settings → Community plugins** بروید.
3. **Browse** را بزنید و «Highlight Reference» را جستجو کنید.
4. **Install** و سپس **Enable** را بزنید.

### نصب دستی

1. فایل‌های `main.js`، `manifest.json` و `styles.css` را از [آخرین نسخه](https://github.com/singhaf9270/obsidian-highlight-reference/releases/latest) دانلود کنید.
2. در پوشهٔ vault خود، مسیر `.obsidian/plugins/highlight-reference/` را بسازید.
3. سه فایل را داخل آن کپی کنید.
4. Obsidian را ری‌استارت کنید و از **Settings → Community plugins** پلاگین را فعال کنید.

### نصب با BRAT (برای نسخه‌های آزمایشی)

1. پلاگین **BRAT** را نصب کنید.

2. در تنظیمات BRAT، گزینهٔ **Add Beta plugin** را بزنید.

3. آدرس مخزن را وارد کنید:

   `https://github.com/singhaf9270/obsidian-highlight-reference`

4. **Add Plugin** را بزنید.

---

## 📖 نحوهٔ استفاده

### ۱. ساخت واژه‌نامه

یک یادداشت بسازید (مثلاً `واژه‌نامه.md`) و هر خط یک واژه با فرمت زیر بنویسید:

```markdown
واژه :: معنی
```

مثال:

```markdown
==هایلایت== :: متنی که با == احاطه شده و برجسته می‌شود.
==فرانت‌متر== :: بخش بالای یادداشت که بین دو --- قرار می‌گیرد.
  ادامهٔ توضیح در خط بعدی با تورفتگی نوشته می‌شود.
```

می‌توانید از فرمت هایلایتی هم استفاده کنید:

```markdown
==واژه== معنی آن
```

### ۲. اتصال یادداشت به واژه‌نامه

در **فرانت‌متر** یادداشت خود بنویسید:

```yaml
---
reference: "واژه‌نامه"
---
```

کلیدهای دیگری هم پذیرفته می‌شوند:

`dictionary`، `glossary`، `vocab`، `lexicon`، `مرجع`، `منبع`، `واژه‌نامه`، `لغتنامه`، `واژگان`

می‌توانید چند مرجع بدهید:

```yaml
---
reference:
  - "واژه‌نامه اصلی"
  - "واژه‌نامه تخصصی"
---
```

### ۳. تعامل با هایلایت‌ها

| عمل                     | نتیجه                                           |
| ----------------------- | ----------------------------------------------- |
| **هاور**                | نمایش تولتیپ معنی                               |
| **کلیک**                | واژهٔ موجود: تولتیپ · واژهٔ غایب: پنجرهٔ افزودن |
| **Ctrl + کلیک**         | باز کردن خط واژه در واژه‌نامه                   |
| **Shift + کلیک**        | ویرایش معنی موجود یا افزودن واژهٔ جدید          |
| **Ctrl + Shift + کلیک** | باز کردن یا افزودن بسته به وجود واژه            |

### ۴. دستورات پالت

* **Reload this note's glossary** — بارگذاری دوبارهٔ واژه‌نامه.
* **Choose reference note for this note** — انتخاب یادداشت مرجع.
* **Add/Edit highlighted word at cursor** — افزودن یا ویرایش واژهٔ زیر نشانگر.

---

## ⚙️ تنظیمات

| تنظیم                     | توضیح                                                   |
| ------------------------- | ------------------------------------------------------- |
| **زبان**                  | فارسی یا انگلیسی                                        |
| **کلید فرانت‌متر**        | کلید پیش‌فرض برای مسیر واژه‌نامه (پیش‌فرض: `reference`) |
| **نمایش معنی با هاور**    | فعال/غیرفعال کردن تولتیپ                                |
| **تاخیر هاور**            | مدت انتظار قبل از نمایش تولتیپ (۰ تا ۱۰۰۰ میلی‌ثانیه)   |
| **پیام «پیدا نشد»**       | نمایش تولتیپ با دکمهٔ افزودن برای واژه‌های غایب         |
| **درج معنی کنار هایلایت** | نمایش معنی به‌صورت برچسب کوچک (فقط حالت خواندن)         |

---

## 💡 نکات

* ادامهٔ معنی در خط بعدی باید **تورفتگی** داشته باشد یا با `>` شروع شود.
* معنی‌ها از Markdown پشتیبانی می‌کنند: لینک، لیست، برجسته‌سازی و...
* اگر یادداشت مرجع پیدا نشد، پیام خطا نمایش داده می‌شود.
* برای ویرایش سریع، از **Shift + کلیک** روی هایلایت استفاده کنید.
* واژه‌ها نرمال‌سازی می‌شوند: `ي` به `ی`، `ك` به `ک`، حذف نیم‌فاصله و فاصله‌های اضافی.

---

## 🔧 عیب‌یابی

**واژه‌ها نمایش داده نمی‌شوند:**

* مطمئن شوید در فرانت‌متر یادداشت، کلید `reference` وجود دارد.
* یادداشت مرجع باید در vault شما موجود باشد.
* از دستور **Reload this note's glossary** استفاده کنید.

**تولتیپ نمایش داده نمی‌شود:**

* تنظیم **نمایش معنی با هاور** را بررسی کنید.
* اگر تاخیر زیاد است، مقدار **تاخیر هاور** را کم کنید.

**معنی به‌روزرسانی نمی‌شود:**

* فایل واژه‌نامه را ذخیره کنید؛ پلاگین به‌طور خودکار تغییرات را تشخیص می‌دهد.
* یا از دستور بارگذاری دوباره استفاده کنید.

---

## 🤝 مشارکت

اگر ایده، پیشنهاد یا باگی دارید، خوشحال می‌شوم بشنوم:

* **Issue**: [GitHub Issues](https://github.com/singhaf9270/obsidian-highlight-reference/issues)
* **Pull Request**: خوش‌آمدید!

---

## 📄 مجوز

این پروژه تحت مجوز **MIT** منتشر شده است. جزئیات را در فایل [LICENSE](LICENSE) ببینید.

---

## 🌐 ما را دنبال کنید

آموزش‌ها و مطالب بیشتر دربارهٔ Obsidian در کانال‌های ما:

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
