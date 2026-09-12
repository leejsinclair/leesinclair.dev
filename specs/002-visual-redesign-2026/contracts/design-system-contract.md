# Contract: Design System (2026 Redesign)

The observable design rules the redesigned page must satisfy. Verification steps are in
`quickstart.md`. This contract supplements — does not replace —
`specs/001-leadership-hiring-site/contracts/page-contract.md`, which still governs document
structure, section order, CTA behaviour, no-email, and analytics. Everything in that contract
still holds; nothing below changes markup or content.

## Colour

- `:root` in `src/styles/tokens.css` defines exactly these colour roles: `--bg`, `--text`,
  `--text-muted`, `--accent`, `--accent-strong`, `--on-accent`, `--highlight`,
  `--highlight-strong`, `--on-highlight`, `--border`, `--border-strong`. No more.
- `--highlight` is visually distinct from `--accent` (a cool vs warm break) and from
  `--text`.
- Contrast against `--bg` (`#0d0f12`): `--highlight` ≥ 4.5:1 where it colours text, ≥ 3:1
  where it colours a non-text UI indicator. `--on-highlight` ≥ 4.5:1 on a `--highlight` fill.
  Every colour token keeps a contrast comment in the source.
- No colour literal (`#…`, `rgb(…)`, `hsl(…)`, named colours) appears in any component
  `<style>` block or in `global.css` outside `:root` / `@media` token redefinitions. All
  colour comes from `var(--…)`.
- `@media print` remaps `--highlight` to a dark ink; highlighted text prints as bold or
  underlined, never as an invisible light-on-white.

## Highlight usage

- `--highlight` (as fill or marker) appears on **at most 6 elements** across the whole
  rendered page.
- Permitted: the "Let's talk" CTA in Hero and in Closing (fill); the Hero positioning line
  (marker/underline); at most one key line in at most two other sections (marker/rule).
- Forbidden: body links, running prose, headings, general content borders, section
  backgrounds, the system diagram, eyebrows, the personal aside, and the focus outline
  (focus stays `--accent-strong`).
- Every highlighted element is also distinguished by position, size, or weight — verified by
  a greyscale check: the "most important" reading survives with hue removed.

## Focus & interaction

- `:focus-visible` outline stays clearly visible against the retuned ground: 2px solid
  `--accent-strong`, offset 3px (or better) — re-measured, not assumed.
- The CTA keeps a ≥ 44px target, keyboard operability, and visible focus with the new fill.
- Hover/focus transitions ≤ 200ms, opacity/transform/colour only.

## Typography & layout

- Token **names** in `tokens.css` are unchanged; only values are retuned. Any new token
  (`--space-3xs`, highlight roles) is additive.
- Exactly one `<h1>`; `h1 → h2 → h3` hierarchy intact (CSS-only feature — must not regress).
- Running prose stays within a readable measure (`--measure`) on wide viewports.
- No horizontal scroll at any width from 320px to 2560px.
- Body text renders in the fallback font before Fraunces loads (`font-display: swap`), with
  no reflow of body copy on font swap.

## Signature elements

- **Sticky eyebrow rail**: on viewports ≥ 60rem, each section's eyebrow/label is
  `position: sticky` within its section and releases at the section boundary; it never
  overlaps content and never escapes its `.section`. Below 60rem it is a normal inline
  eyebrow above the heading.
- **Personal aside**: retains the sticky left-border margin-note behaviour; on ≥ 60rem it
  tracks the principles without overlapping them or extending past `#how-i-think`; on a tall
  viewport it stays visually anchored; below 60rem it is an inline note below the principles
  with no loss of meaning.

## Motion

- New entrance motion is CSS only, via `animation-timeline: view()`, wrapped in **both**
  `@media (prefers-reduced-motion: no-preference)` and `@supports (animation-timeline:
  view())`. The element's resting (non-animated) state is its final styled state.
- Under `prefers-reduced-motion: reduce`: no entrance animation plays; every element renders
  in its final state immediately.
- No looping, parallax, particle, or scroll-jacking motion (unchanged from 001).
- Client-side JavaScript is unchanged: no islands, no `<script>` beyond the JSON-LD block
  and the optional production Plausible tag. The redesigned `dist/` ships no more script
  bytes than the pre-redesign `dist/`.

## Non-regression

- Lighthouse (mobile + desktop) stays at the 001 baseline (100/100/100/100), CLS 0, script 0 B.
- Automated accessibility audit: zero contrast failures, zero new violations vs the
  pre-redesign build.
- All content and both CTAs available with JavaScript disabled.
- `scripts/assert-no-email.mjs` still passes; no email introduced.
