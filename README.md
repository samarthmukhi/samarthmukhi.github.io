# samarthmukhi.com

Personal portfolio for Samarth Mukhi. React + Vite + Tailwind CSS v4 + React Three Fiber.

## Structure

```
src/
  components/   Layout, CustomCursor, ParticleField, DataGlobe, Section
  pages/        Home, About, Experience, Projects, Research, Awards, Contact, NotFound
  data/         content.js — all site copy, lives in one place
public/
  CNAME         samarthmukhi.com (custom domain for GitHub Pages)
.github/workflows/deploy.yml   builds and deploys to GitHub Pages on every push to main
```

## Local development

```bash
npm install
npm run dev
```

## Deploying

This repo is meant to be pushed to a GitHub repo named exactly `samarthmukhi.github.io`
(using your username as the repo name serves the site at the domain root).

1. Push to `main` — the GitHub Actions workflow in `.github/workflows/deploy.yml`
   builds the site and deploys it automatically.
2. In the repo, go to **Settings → Pages** → set **Source** to **GitHub Actions**
   (one-time setup).
3. In **Settings → Pages → Custom domain**, enter `samarthmukhi.com` and save.
   The `CNAME` file in `public/` already points Pages at this domain.
4. At your domain registrar, point DNS at GitHub Pages:

   **Apex (samarthmukhi.com) — four A records:**
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   **www → CNAME:**
   ```
   www  →  <your-username>.github.io
   ```

5. Once DNS verifies (minutes to a few hours), tick **Enforce HTTPS** in Pages settings.

## Editing content

All page copy (experience, projects, research, awards, etc.) lives in
[`src/data/content.js`](src/data/content.js) — edit there rather than in the page
components.

## Contact form

The contact form posts to Formspree. Before going live, create a free form at
[formspree.io](https://formspree.io) and replace `YOUR_FORM_ID` in
[`src/pages/Contact.jsx`](src/pages/Contact.jsx) with your real form ID.
