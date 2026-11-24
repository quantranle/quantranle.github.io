# Quan Tran — Portfolio

A portfolio website with a home page and five pages: About me, Experience, Projects, Skills, Contact.
Plain HTML, CSS and JavaScript: nothing to install, nothing to build.

Everything lives in one file, `index.html`, but only one page is shown at a time. Each page has its
own address, for example `index.html#projects`, so you can link straight to it.

## View it

Double-click `index.html`. It opens in your browser.

## Where things are

| File | What it is | Edit it when… |
| --- | --- | --- |
| `js/content.js` | **All the text**: introduction, education, experience, projects, skills | you want to change or add content (almost always this one) |
| `css/style.css` | Colours, fonts, spacing | you want to change the look |
| `index.html` | Page skeleton, navigation buttons, browser-tab title | you want to rename a page or a button |
| `js/main.js` | Builds the page and runs the interactions | rarely |
| `assets/` | Your photo, favicon, and any images or PDFs you add | you add a picture or your CV |

## Common changes

All of these are in `js/content.js`. After each change: save, then refresh the browser (F5).

**Add an experience**
Find `experience: [`. Copy one block from `{` to `},`, paste it at the top of the list, and change the text.

**Add a project**
Find `projects: [`. Copy one block from `{` to `},`, paste it where you want it, and change the text.

- `category` creates the filter buttons. Re-use an existing category or type a new one.
- `featured: true` makes the card full width with its details open. Best used on one project.
- `links: [ { label: "GitHub", url: "https://..." } ]` adds buttons to the card.

**Add pictures to an experience or a project**

1. Copy the picture into `assets/experience` or `assets/projects`.
   Use a simple file name without spaces, for example `rover-outdoor-test.jpg`.
2. In `js/content.js`, find the entry and write the path in its `images` line:

   ```js
   images: ["assets/projects/rover-outdoor-test.jpg"],
   ```

   Several pictures:

   ```js
   images: [
     "assets/projects/rover-1.jpg",
     "assets/projects/rover-2.jpg",
   ],
   ```

   A picture with a caption:

   ```js
   images: [
     { src: "assets/projects/rover-1.jpg", caption: "Testing the rover outdoors" },
   ],
   ```

Visitors see small pictures and can click one to view it large.
Tips: JPG files about 1600 pixels wide and under 500 KB load quickly. The file name in `content.js`
must match the real file exactly, including capital letters and `.jpg` / `.png`.
Only use pictures you are allowed to publish, especially from an employer.

**Give a project its own story page**
Add a `cover` picture and a `story` to the project. The card then shows the cover and a
"Read the story" button, which opens a page with the full story told in chapters, each with its
own text and captioned pictures. The "Wireless Emergency Stop Button" entry in `js/content.js`
is a complete example: copy its `cover:` and `story:` lines into another project and change the text.
Put that project's pictures in their own folder, for example `assets/projects/mars-rover/`.

**Change your introduction**
Edit `headline` and `intro` in the `profile` block, and the paragraphs in the `about` block.

**Change your photo**
Replace `assets/profile.jpg` with a new square photo of the same name (400 × 400 pixels or larger looks sharpest).

**Add a CV download button**
Copy your CV into `assets`, then set `cv: "assets/CV_Quan_Tran.pdf"` in the `profile` block.
The CV is public once the site is online, so check which address and phone number it shows.

**Change what the Email button does**
`emailOpensIn: "gmail"` in the `profile` block opens a new Gmail message to you in the visitor's browser.
`emailOpensIn: "app"` opens the visitor's own mail program instead.

**Show a status badge** (for example "Open to working student roles")
Set `availability: "Open to working student roles"` in the `profile` block. Set it back to `""` to hide it.

## If the page shows an error after an edit

There is a typo in `content.js` — usually a missing comma, quote or bracket.
Press **F12** in the browser and open the **Console** tab: it shows the line number.

The three rules:

1. Text goes between `"double quotes"`.
2. Every line inside a block ends with a comma.
3. Every `{` needs a `}` and every `[` needs a `]`.

## Change the colours

Open `css/style.css`. The first section, **1. Theme colours**, lists every colour:
one list for the dark navy theme and one for the light grey theme. Change a value and the whole site follows.

- `--bg` is the page background.
- `--card` is the colour of boxes and cards.
- `--accent` is the highlight colour (amber in the dark theme).

## The moving buttons

Any element with `data-magnetic="0.2"` leans towards the mouse. The number is the strength:
`0.1` is subtle, `0.4` is strong. Remove the attribute to switch the effect off for that button.
The navigation buttons are in `index.html`; the others are created in `js/main.js`.

## Rename or add a navigation button

In `index.html`, find `NAVIGATION BUTTONS`. Change the text between `>` and `</a>`.
Every navigation button also appears as a big button on the home page.

To add a whole new page: copy one `<section class="section" id="..."> ... </section>` block in
`index.html`, give it a new `id`, and add a navigation button with `href="#that-id"`.

## Put it online (free, with GitHub Pages)

This folder is already a git repository with everything committed.

**Step 1 — store it privately on GitHub (not visible to anyone else)**

1. On github.com, create a new repository named `quantranle.github.io`. Choose **Private**.
   Do not add a README or licence.
2. In this folder, run:

   ```
   git remote add origin https://github.com/quantranle/quantranle.github.io.git
   git push -u origin main
   ```

**Step 2 — publish, when you are ready**

1. In the repository: **Settings → General → Danger Zone → Change visibility → Public**.
   (On a free GitHub account, Pages only works for public repositories.)
2. **Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder `/ (root)` → Save**.
3. After a minute the site is live at `https://quantranle.github.io`.

**Updating the live site later**

If you changed a file in `js/` or `css/`, first open `index.html` and change the three
`?v=...` numbers (for example to today's date, `?v=2026-12-01`). Otherwise visitors' browsers
may keep showing the old version for a while.

```
git add -A
git commit -m "Update portfolio"
git push
```

**Using your own address** (for example `quantran.dev`)

Buy the domain from a registrar, then enter it under **Settings → Pages → Custom domain** and
follow GitHub's instructions for the DNS records. The `github.io` address keeps working too.
