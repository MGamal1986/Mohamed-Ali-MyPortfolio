# Mohamed Ali — Portfolio (React SPA)

A single-page portfolio built with React + Vite, generated from your CV.

## Project structure

```
cv-react/
├── src/
│   ├── data.js              ← EDIT THIS to change any text/content
│   ├── App.jsx               main layout + scroll-spy nav
│   ├── styles.css            all visual design lives here
│   └── components/
│       ├── Rail.jsx          left navigation sidebar
│       ├── Hero.jsx          header with photo + tagline
│       ├── SignalTrace.jsx   the career-timeline diagram
│       └── Section.jsx       renders each section by "type"
├── public/
│   └── profile.jpg           your photo (swap the file to change it)
├── index.html
├── package.json
└── vite.config.js
```

## Editing content

Everything you see on the page — your name, summary, jobs, skills,
certifications, education, training — comes from **`src/data.js`**.
You do not need to touch any `.jsx` file to update text or add a new
job/cert/skill.

To add a whole new section (e.g. "Projects"), open `src/data.js` and
follow the instructions in the comment block at the top of the file —
copy an existing section object, give it a new `id`, and it will
appear automatically in the page and the nav.

To change your photo, replace `public/profile.jpg` with a new image
(keep the same filename, or update the `photo` path in `data.js`).

## Running locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Building for production

```bash
npm run build
```

This creates a `dist/` folder with the static site — this is what
gets deployed.

## Deploying to Cloudflare Pages

**Option A — connect your Git repo (recommended, auto-deploys on push)**

1. Push this project to a GitHub or GitLab repo.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git**, and select the repo.
3. Set the build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Every future push to the repo will
   redeploy automatically.

**Option B — direct upload (no Git required)**

1. Run `npm run build` locally to generate `dist/`.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Upload assets**.
3. Drag in the contents of the `dist/` folder.
4. Click **Deploy**.

Either way, Cloudflare gives you a free `*.pages.dev` URL immediately,
and you can attach a custom domain afterward under the project's
**Custom domains** tab.

## Notes

- The site is fully static after build — no server or database needed.
- Contact details shown are city, phone, and email only (your full
  street address from the CV was left out for privacy, since this
  page will be public). Add it back in `data.js` if you'd like it
  included.
