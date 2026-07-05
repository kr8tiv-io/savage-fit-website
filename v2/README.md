# Savage Fit v2 — wethesavage.com rebuild

Awwwards-grade rebuild of the Savage Fit site for Xenia Busigin (IFBB Figure Pro).
Replaces the Framer export with a hand-built Vite + React app.

## Stack

- **Vite + React 19 + TypeScript**
- **GSAP 3.13** (ScrollTrigger + SplitText) — scroll choreography, line reveals, horizontal transformation rail
- **Lenis** — smooth scroll
- **Three.js** — hero particle nebula (brand-tinted, cursor-reactive)
- **Framer Motion** — page transitions, menu overlay, magnetic buttons, accordions
- **Type**: Clash Display (display) + Satoshi (body) via Fontshare, Instrument Serif italic accents via Google Fonts

## Design system

Onyx `#0b0b0d` canvas · bone `#f5f2ec` ink · Savage Pink `#ff3d8a` → steel `#6fa8ff` gradient
(gradient pulled from Xenia's studio-shot backdrop). Tokens + all component classes in
`src/styles/global.css`. Component contract for contributors in `CONTRACT.md`.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks + builds to dist/
```

## Pages

`/` home · `/subscription` Savage Society · `/training` 1-on-1 coaching · `/challenges` Si6
· `/spring-aesthetic` Glute Growth Protocol · `/products` catalog

All checkout links route to Trainerize (single source of truth: `src/data/site.ts`).

## Deploying

`npm run build`, serve `dist/` as a SPA (rewrite all routes to `index.html`).
For GitHub Pages, copy `dist/index.html` to `dist/404.html` as the SPA fallback.

---

Built by [kr8tiv.io](https://kr8tiv.io).
