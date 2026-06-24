# Quokka Web Build

Standalone recreation of the Quokka Coffee Roasters website — Vite + React + TypeScript + Tailwind CSS v4.

This project is a clean, dependency-light rebuild that mirrors the design, copy, and bilingual (EN/AR) content of the original `quokka-cafe` site, without its TanStack Start/SSR stack. It deploys as a static SPA, so there is no server runtime to misconfigure on Vercel.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploying on Vercel

- Framework Preset: **Vite**
- Root Directory: **/** (repo root)
- Build Command: `npm run build`
- Output Directory: `dist`
- Production Branch: `main`

## Images

All photographic imagery currently uses clean SVG placeholders (see `src/Placeholder.tsx`) so the site never 404s on a missing asset. Drop real photos into `src/assets/` and swap the `<Placeholder ... />` calls for `<img src={...} ... />` once available. See the project notes for the exact list of images needed.
