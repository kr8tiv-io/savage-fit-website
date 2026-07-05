# Body by Xenia — wethesavage.com rebuild

Awwwards-grade rebuild for Xenia Busigin (IFBB Figure Pro), rebranded from Savage Fit
to **Body by Xenia**: porcelain-white palette, rose→lilac gradient accents, elegant
serif typography, and photography blended straight into the page (AI background
removal via rembg). Replaces the Framer export with a hand-built Vite + React app.

## Stack

- **Vite + React 19 + TypeScript**
- **GSAP 3.13** (ScrollTrigger + SplitText) — scroll choreography, line reveals, horizontal transformation rail
- **Lenis** — smooth scroll
- **Three.js** — hero particle nebula (brand-tinted, cursor-reactive)
- **Framer Motion** — page transitions, menu overlay, magnetic buttons, accordions
- **Type**: Fraunces (display serif) + Great Vibes (script signature) + Manrope (body), via Google Fonts

## Design system

Porcelain `#fdfbfa` canvas · plum `#251c2e` ink · rose `#d94f96` → lilac `#8a63d2` gradient.
Portrait photography is background-removed (`public/img/cut/`, generated with rembg) and
floats on pastel radial washes — no boxed photos. Tokens + all component classes in
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
