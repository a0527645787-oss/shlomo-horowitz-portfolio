# Shlomo Horowitz — Portfolio

A responsive portfolio for Shlomo Horowitz, a Junior DevOps & Cloud Engineer. Built with React and Vite, with a custom dark visual system, accessible navigation, responsive layouts, SEO metadata, and a GitHub Pages deployment workflow.

## Local setup

Requirements: Node.js 20 or later and pnpm.

```bash
git clone https://github.com/a0527645787-oss/shlomo-horowitz-portfolio.git
cd shlomo-horowitz-portfolio
pnpm install
pnpm dev
```

Vite will print the local preview URL. Open it in a browser.

## Quality checks

```bash
pnpm lint
pnpm build
```

The production build is written to `dist/`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site whenever a change is pushed to `main`.

1. Create a public GitHub repository named `shlomo-horowitz-portfolio`.
2. Push this project to the `main` branch.
3. In **Settings → Pages**, set **Source** to **GitHub Actions**.
4. Run the workflow, or push a new commit to `main`.

The site will be available at:

`https://a0527645787-oss.github.io/shlomo-horowitz-portfolio/`

## Project structure

```text
src/
  App.jsx         Page content and components
  main.jsx        React entry point
  styles.css      Visual system and responsive styles
.github/
  workflows/
    deploy.yml    GitHub Pages deployment
```

## Content

Portfolio project descriptions are based on the contents of the linked public repositories. The site intentionally makes no claim of employment history, seniority, certification, or proficiency beyond the information supplied by Shlomo and demonstrated in those repositories.
