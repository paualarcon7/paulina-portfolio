# Paulina Alarcón — Portfolio

Personal portfolio built with **React + Vite**. All content is data-driven from
[`src/data.js`](src/data.js) — edit that file to update copy, experience, projects and skills.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # outputs static site to /dist
npm run preview  # preview the production build
```

## Deploy — Vercel (recommended, free)

1. Push this folder to a GitHub repo (e.g. `paulina-portfolio`).
2. Go to **vercel.com → Add New → Project** and import the repo.
3. Vercel auto-detects Vite. Defaults are correct:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. You get a free `https://<project>.vercel.app` URL with auto-deploys on every push.

## Deploy — GitHub Pages (free alternative)

1. Push to a public repo.
2. `npm run build`, then publish `/dist` (e.g. with the `gh-pages` package or a GitHub Action).
3. `vite.config.js` already uses `base: './'`, so assets resolve correctly under a project subpath.

## Customize

- **Content:** `src/data.js`
- **Colors / design:** CSS variables at the top of `src/index.css` (`--accent` is the coral brand color).
- **CV download:** replace `public/CV-Paulina-Alarcon-en.pdf` with your latest CV (keep the filename or update the link in `data.js`).
