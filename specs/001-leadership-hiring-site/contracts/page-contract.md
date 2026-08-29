# Contract: Rendered Page

The single page's observable structure and behaviour. This is the UI contract the
implementation must satisfy; verification steps are in `quickstart.md`.

## Document

- `<!doctype html>`, `<html lang="en">`.
- Exactly one `<h1>` (Lee's name, in the Hero). All other section headings are `<h2>`;
  sub-items within a section use `<h3>` (FR-015, SC-009, Constitution III).
- One `<main>` landmark wrapping all six sections. No `<header>`/`<nav>` site chrome
  (single page, no navigation — Assumptions).
- Each section is a `<section>` with an `aria-labelledby` pointing at its heading `id`.

## Section order and required content

| #   | Section               | Element                       | Must contain                                                                                                                                                                                                                            |
| --- | --------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Hero                  | `<section id="hero">`         | `<h1>` name; role line; positioning line; exactly one supporting statement; the single CTA "Let's talk" → LinkedIn (see CTA rules). All above the fold at 1366×768 (SC-002).                                                            |
| 2   | The Intersection      | `<section id="intersection">` | `<h2>`; `SystemDiagram` showing Technology, People, Product, Delivery, Systems as one connected graph; visible text naming the five and stating they are one system. Understated diagram — not logos, not a card grid (FR-005, SC-009). |
| 3   | How I Think           | `<section id="how-i-think">`  | `<h2>`; 3–4 principles, each with a title and body; the personal aside (only if `personal.ts` yields ≥1 confirmed thread). No generic competency language.                                                                              |
| 4   | Evidence              | `<section id="evidence">`     | `<h2>`; 1–4 evidence examples, each title + body; balanced layout at every count; no fabricated detail (FR-007, SC-013).                                                                                                                |
| 5   | Leadership Philosophy | `<section id="philosophy">`   | `<h2>`; Autonomy, Mastery, Purpose, each with body; one connective line about capable teams (FR-009).                                                                                                                                   |
| 6   | Closing               | `<section id="closing">`      | `<h2>`; concise invitation (technology matters, hardest problems aren't purely technical); the "Let's talk" → LinkedIn CTA repeated (FR-010).                                                                                           |

Sections 1→6 appear in DOM order; no client-side reordering.

## Call-to-action rules

- **Single CTA ("Let's talk")**: `<a href="{profile.linkedInUrl}" target="_blank" rel="noopener">Let's talk</a>`.
  Present in Hero and Closing, both resolving from the one `profile.linkedInUrl` value.
  Keyboard-focusable, visible focus ring, ≥ 44px target. Works with JavaScript disabled
  (plain anchor, no `onclick`, no JS navigation) (FR-012, FR-020).
- **No email**: the page MUST contain no email address, `mailto:` link, obfuscated or
  script-assembled address, email-bearing image, or email field in structured data —
  anywhere in the rendered output or HTML source (FR-012a, SC-015).
- **`profile.linkedInUrl` unset**: the CTA renders as a clearly marked, non-interactive
  placeholder (e.g. a disabled-styled span reading "LinkedIn — coming soon"), never
  `href="#"`, empty, or a broken link; the build emits a `console.warn`. The site is **not
  deployable** in this state because LinkedIn is the only contact route (FR-013, US2
  scenario 3).

## System diagram

- Inline `<svg>` with `role="img"` and `aria-labelledby` referencing a `<title>` and `<desc>`.
- `<desc>` text = `disciplines.diagramAltText` (FR-027).
- Default rendered state (no JS) = final, fully legible diagram.
- With JS and no reduced-motion preference: a single one-time reveal transition plays when the
  section first enters the viewport, then never again (FR-005a). Implemented by `reveal.ts`
  toggling a `data-revealed` attribute; CSS does the motion.
- `prefers-reduced-motion: reduce` → `reveal.ts` early-returns; diagram is shown in final
  state with no transition (FR-019, SC-007).
- ≤ ~480px viewport: diagram switches (CSS only) to a stacked/simplified legible form; nothing
  clipped or overflowing (Edge Cases).

## Motion

- The diagram reveal is the only non-trivial motion. Any other transitions (hover/focus) are
  ≤ 200ms, opacity/transform only, and suppressed under `prefers-reduced-motion`.
- No looping, parallax, particle, or scroll-linked ambient motion (FR-018).

## Responsive / resilience

- No horizontal scroll from 320px to 2560px; body text never below a legible size; line length
  constrained to a readable measure on wide viewports (FR-016, SC-005).
- All text content readable before the web font and SVG finish loading; `font-display: swap`
  (SC-006).
- Full content and the "Let's talk" CTA available with JS disabled and on a throttled
  connection (FR-020, US4).
- Print / PDF: readable, link destinations discernible, dark background not rendered as a
  solid ink block (Edge Cases) — a `@media print` block handles this.

## Analytics

- At most one `<script defer src="https://plausible.io/js/script.js" data-domain="…">`,
  emitted only when `import.meta.env.PROD && PUBLIC_ANALYTICS_DOMAIN`.
- No cookies, no `localStorage`, no consent UI, no other third-party requests (FR-025).
- Removing or blocking the script leaves the page visually and functionally identical and no
  slower to become readable (FR-025a, SC-014).
