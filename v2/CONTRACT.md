# Savage Fit v2 — Page Build Contract

You are building ONE page component for a Vite + React 19 + TypeScript app. Write EXACTLY ONE file: `src/pages/<Name>.tsx`, default-exporting the page component. Do not create or modify any other file. No new dependencies.

## Stack available
- `react-router-dom` (`Link`) — internal links MUST use `Link`, external checkout/social links use `<a target="_blank" rel="noreferrer">`.
- `framer-motion` (`motion`, `AnimatePresence`) — for micro-interactions if needed.
- GSAP via shared lib: `import { gsap } from '../lib/gsap'` + `import { useGSAP } from '@gsap/react'` (already registered ScrollTrigger/SplitText). Always scope: `useGSAP(() => {...}, { scope: ref })`.
- React 19: set the tab title with a bare `<title>...</title>` element at the top of the returned fragment.

## Shared components (import paths relative to `src/pages/`)
- `import PageHero from '../components/PageHero'` — `<PageHero chip="..." title={<>Big <span className="serif-i">word</span></>} lede="...">{optional CTA row}</PageHero>`. Every page STARTS with this.
- `import SectionHead from '../components/SectionHead'` — `{ num?: '01', kicker: string, title: ReactNode, lede?: ReactNode, align?: 'left'|'center', size?: 'd-1'|'d-2' }`.
- `import { SplitReveal, FadeUp, Frame } from '../components/Reveal'`
  - `SplitReveal`: heading line-reveal. Props: `as` (default h2), `className` (use `display d-1` etc.), `delay`.
  - `FadeUp`: block fade+rise on scroll. Props: `as`, `className`, `delay`, `y`.
  - `Frame`: image w/ curtain reveal + parallax. Props: `src, alt, className?, ratio? ('4 / 5'), parallax? (number)`.
- `import PriceCard from '../components/PriceCard'` — `{ plan, was?, price, per, features: string[], href, cta?, hot?, tag?, delay? }`.
- `import Accordion, { type QA } from '../components/Accordion'` — `{ items: QA[] }` where `QA = { q, a }`.
- `import Marquee from '../components/Marquee'` — `{ items: string[], reverse?, speed? }`.
- `import Magnetic from '../components/Magnetic'` — wrap buttons: `<Magnetic><a className="btn btn--pink" ...>Label <span className="arr">→</span></a></Magnetic>`.
- `import Stat from '../components/Stat'` — `{ value: number, suffix?, prefix?, label, decimals? }`.
- `import { checkout, social } from '../data/site'` — ALL Trainerize checkout URLs and social/mailto links live here. NEVER hardcode a trainerize.me URL; use these keys.

## Design system (global.css classes — USE THESE, avoid new CSS)
- Headings: `className="display d-1"` (section), `d-2` (sub), `d-3` (card). Inside titles, accent ONE word: `<span className="serif-i">word</span>` (italic serif w/ gradient). Outline word: `<span className="hollow-text">word</span>`. Gradient text: `className="gt"`.
- Kicker label: `<span className="kicker">Label</span>` or numbered via SectionHead `num`.
- Body copy: `<p className="lede">` (dim, max 58ch). `<strong>` inside lede renders bright.
- Buttons: `.btn` + `.btn--pink` (primary) / `.btn--ghost` (secondary). Arrow: `<span className="arr">→</span>`.
- Chips: `<span className="chip chip--pink"><span className="dot" />Label</span>`.
- Cards: `className="card"` (padded panel). Layout: `className="container"`, `section` + `section--line` (top border), `grid-2`, `grid-3`.
- Sticky column pattern: `<div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)' }}>` inside `grid-2` with `alignItems: 'start'`.
- CSS vars: `var(--pink) var(--dim) var(--faint) var(--line) var(--panel) var(--ink)`.
- Inline styles are fine for one-off layout tweaks; keep them small.

## Images available in /img/ (use ABSOLUTE paths like src="/img/...")
- `xenia-wide.png` 2048×682 — Xenia studio shot, pink→blue gradient bg (subject center-left)
- `xenia-crop.png` 500×682 — same shoot, tight portrait
- `xenia-portrait.png` 900×1256 — Xenia portrait, pale gray bg
- `xenia-face.png` 795×1284 — Xenia close-up, white bg
- `coach-matt.png` 900×1256 — coach Matt with french bulldog
- `coach-angie.png` 900×1256 — coach Angie flexing
- `stage-winners.jpg` 1080×1077 — IFBB stage, trophies overhead
- `ifbb-procard.jpg` 768×1024 — Xenia + winner backstage at IFBB show
- `beach.jpg` 1170×1142 — beach lifestyle shot
- `transform-1.png` … `transform-6.png` 2048×1542 — client before/after side-by-sides
Use `<Frame>` for imagery, or plain `<img>` inside `.frame` divs with a chip overlay. Always meaningful `alt`.

## Voice & copy rules
- Fierce, confident, women-first ("queens", "sisterhood", "no BS"), but PROFESSIONAL — no broken template text.
- Coach is **Xenia Busigin, IFBB Figure Pro** (never "Xena", never "Mark").
- Keep all real prices/offers EXACTLY as given in your brief. Every price card links to its `checkout.*` key.
- Do NOT invent statistics or fake scarcity. Keep the medical disclaimer where the brief includes it.

## Quality bar
- TypeScript strict — no TS errors, no `any` except where unavoidable.
- Every section reveals on scroll (SplitReveal/FadeUp/Frame). Vary rhythm: alternate grid-2 orientations, use a Marquee once if it fits, stats/accordion/pricing where the content calls for it.
- Responsive: grids collapse via global classes; avoid fixed px widths beyond `clamp()`.
- End the page with a strong CTA section ABOVE the global footer (the footer itself already has a big CTA — your page-end CTA should be content-specific, e.g. enrollment deadline).
