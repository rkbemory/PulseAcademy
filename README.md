# Pulse for Nurses

**🩺 Live at <https://pulsefornurses.com>**

A static, browser-based admission prep platform for Bangladeshi nursing students. Three programs (MSN, Post Basic BSc, BNMC RN), 60+ model tests, topic discussions with check-in MCQs, subject-wise evaluation graphs, and a password-gated admin panel.

Built to run from a folder (`file://`) or any static host — no server, no build step, no database required to start.

## Hosting

- **Primary:** [Netlify](https://pulsefornurses.netlify.app) — auto-deploys from this repo on every `git push` to `main`
- **Backup:** [GitHub Pages](https://rkbemory.github.io/PulseAcademy/) — same content, same host pattern as the [Caregiver Village](https://rkbemory.github.io/general/) app
- **Domain:** `pulsefornurses.com` (Cloudflare registrar, free Let's Encrypt SSL via Netlify)
- **PWA:** installable on phone home screens via "Add to Home Screen"

---

## Quick start

1. Open `index.html` in any modern browser. That's it.
2. Browse to **MSN**, **Post Basic**, or **BNMC RN** from the homepage.
3. Read a topic → take its check-in → take a model test → review your subject-wise graph on the results page.

When you're ready to host it: any static host works (Netlify, Vercel, GitHub Pages, Cloudflare Pages — all free tiers). Just drop the whole `PulseAcademy/` folder.

---

## Admin panel

URL: `admin.html`

### Passwords

Default passwords are stored as **SHA-256 hashes** in `admin.js`, so the actual passwords never appear in the source. The owner of this repo sets the Main Admin password; the Deputy role is disabled by default and can be enabled via **Admin Accounts** if you want a second admin.

Once you sign in for the first time, use **Admin Accounts** to rotate either password. New values are saved in `localStorage` on the device you used.

### What each role can do

| | Main Admin | Deputy Admin |
|---|---|---|
| Dashboard | ✓ | ✓ |
| Add / edit / delete questions | ✓ | ✓ |
| Add / edit / delete tests | ✓ | ✓ |
| Add / delete topics | ✓ | ✓ |
| Export / import overrides | ✓ | ✓ |
| Manage admin passwords | ✓ | — |
| View backend roadmap | ✓ | — |

### How edits are saved

Admin edits don't touch the static `.js` data files. They're stored as a single JSON blob in `localStorage` under the key `pulse:admin:overrides`. The loader (`data/pulse-loader.js`) reads that blob on every page load and merges it on top of the static data.

That means:

- ✓ You can add/edit/delete content immediately, no server required.
- ✓ Your edits survive page reloads.
- ✗ Edits are **per-browser**. They don't sync across devices yet (that comes with the backend — see below).

Use **Export / Import** to back up your overrides to a JSON file. Email it to yourself, commit it to git, do whatever. Restore by uploading the same file.

---

## File map

```
PulseAcademy/
├── index.html           Landing page (3 program cards)
├── msn.html             MSN program page (topics + tests + book)
├── post-basic.html      Post Basic program page
├── rn.html              BNMC RN program page
├── tests.html           Unified tests catalog (?program=msn|post-basic|rn)
├── quiz.html            Quiz runner (?program=…&test=…)
├── results.html         Subject-wise evaluation + question review
├── topic.html           Topic discussion + check-in launcher
├── books.html           Book showcase + Meghla Medical Book Center info
├── admin.html           Password-gated admin panel
├── admin.js             Admin app logic
├── quiz-engine.js       Program-aware quiz engine
├── scripts.js           Misc site behavior
├── styles.css           Brand stylesheet
├── data/
│   ├── pulse-core.js    Brand, bookstore, subjects, program configs
│   ├── msn.js           MSN topics + questions + tests
│   ├── post-basic.js    Post Basic topics + questions + tests
│   ├── rn.js            RN topics + questions + tests
│   └── pulse-loader.js  Assembles window.Pulse with localStorage overrides
├── Photo & Logo/        Logo + book cover images
├── Book_PDF Copy/       Source PDFs (Vol I, Vol II, Post Basic)
└── archive/             Earlier program pages (diploma, midwifery, etc.)
```

---

## Content stats (seeded)

| Program | Topics | Question bank | Live tests | Scaffold tests |
|---|---|---|---|---|
| MSN | 8 | ~140 | 3 model + 1 full-100Q | 17 model + 1 full-100Q |
| Post Basic | 6 | ~85 | 2 model | 18 model |
| BNMC RN | 8 | ~80 | 2 model | 18 model |

The scaffold tests are intentionally empty so you can populate them via the admin panel as you finalize content from the books or external references.

---

## Adding new content via admin

### Add a question
1. **Admin → Questions → choose program → "+ Add Question"**
2. Fill in: ID (e.g. `msn-fn-101`), subject, stem, options (one per line), correct-answer index (0-based), rationale.
3. Save. Question is now available across all tests for that program.

### Populate a scaffold test (e.g. `msn-mt-04`)
1. **Admin → Tests → choose program → click `msn-mt-04` → Edit test**
2. Click **Show available IDs** to see the question pool, click chips to add them to the test.
3. Paste 30 IDs (one per line). Change status to **live**. Save.

### Add a topic
1. **Admin → Topics → "+ Add Topic (JSON)"**
2. Edit the sample JSON in the prompt. Keep the same shape: `id`, `title`, `subject`, `readMinutes`, `summary`, `content[]`, `checkIn[]`.

---

## Backend migration (Supabase, when ready)

The current build is offline-first. When traffic or multi-device sync demands a backend, **Supabase free tier** is the recommended path:

| Need | Supabase feature | Free-tier limit |
|---|---|---|
| Question / test storage | Postgres | 500 MB DB |
| Per-user attempt history | Postgres | included |
| Admin authentication | Supabase Auth | 50,000 MAU |
| Course images (later) | Storage | 1 GB |

**Migration steps** (collapsed):
1. Create a free Supabase project.
2. Create the schema (`programs`, `subjects`, `topics`, `questions`, `tests`, `attempts`, `admins`).
3. **Admin → Export / Import → Download as JSON** — that's your seed data.
4. Import the JSON into Supabase via SQL or their dashboard.
5. Replace `data/pulse-loader.js` with a Supabase fetch call.
6. Replace the password gate with Supabase Auth + Row Level Security.

Estimated cost for the first year of operation at expected traffic: **$0/month** on the free tier. Beyond that, $25/month Supabase Pro.

---

## Brand assets

- **Logo:** `Photo & Logo/Pulse For Nurses Logo.png`
- **MSN Vol I cover:** `Photo & Logo/MSN_Book Cover_V4_Volume 1.jpeg`
- **MSN Vol II cover:** `Photo & Logo/MSN_Book Cover_V4_Volume 2.jpeg`
- **Post Basic cover:** `Photo & Logo/Post Basic_V1_Book Cover Photo.jpeg`
- **Source palette:** `--maroon #6B2424 · --amber #E89B2C · --red #C0392B` (see `styles.css` `:root`)

---

## Contact / book sales

**Meghla Medical Book Center** · মেঘলা মেডিকেল বুক সেন্টার
Shop #69, Lane #3, Islamia Market, Nilkhet, Dhaka-1205
দোকান নং #৬৯, লেন #৩, ইসলামিয়া মার্কেট, নীলখেত, ঢাকা-১২০৫
Cell: 01833700087 · Courier Available, all over the country
(কুরিয়ার করা হয় - ঢাকাসহ সারাদেশে)

- **MSN Bundle (Vol I + II, 4th Edition):** ৳620
- **Post Basic Guide (V1):** ৳420

## Social

- 📘 Facebook: <https://www.facebook.com/Pulsefornurses>
- ▶ YouTube: <https://www.youtube.com/@pulsefornursesbd6887>

---

© 2026 Pulse for Nurses. Built with care for Bangladesh's nursing students.
