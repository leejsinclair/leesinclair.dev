# Acceptance Results: 2026 Visual Redesign

## T002 — Pre-redesign baseline (branch `main`, commit 27f5754)

Captured 2026-08-29 from a clean `npm run build`.

| Metric | Baseline value |
| --- | --- |
| `<script>` tags in `dist/index.html` | 1 (the `application/ld+json` block only) |
| Inline script bytes | 191 B |
| External / island JS bundles | none (`dist/_astro/` holds one CSS file, no JS) |
| `dist/_astro/index.*.css` | 9 157 B |
| `dist/index.html` | 12 980 B |
| `assert-no-email.mjs` | passes |

Baseline `dist/` was snapshotted to `../pw-baseline-dist/` and used for the byte + audit
comparison in Phase 6 (T029, quickstart 6/9); results recorded below. Rebuild `main` to
regenerate if the comparison needs re-running.

**Lighthouse (mobile + desktop)** and the **automated accessibility violation list**:
the 001 definition of done recorded Lighthouse 100/100/100/100 and zero axe violations
for this same markup. This feature changes no markup and no JS, so the 001 figures stand
as the baseline; the redesigned build is re-audited against them in Phase 6.

## Phase 6 — Non-regression (redesigned build)

Verified 2026-08-29 against `npm run preview` in headless Chromium (Playwright) and
axe-core 4.x.

| Check | Result |
| --- | --- |
| T024 — highlight contrast vs `--bg` | `--highlight` 11.1:1, `--highlight-strong` 13.2:1 (both ≥ 4.5:1 text and ≥ 3:1 non-text). `--on-highlight` on the `--highlight` fill 9.6:1, on `--highlight-strong` 11.4:1 (≥ 4.5:1). `--highlight` is used only as a fill / non-text rule, never as a text colour. Comments in `tokens.css` updated to measured figures. |
| T025 — focus ring | `:focus-visible` stays `2px solid --accent-strong`, offset 3px. `--accent-strong` vs `--bg` 10.1:1; the 3px offset keeps the ring on the ground, not on the teal CTA fill. Visible on the CTA and every link (screenshot `cta-focus.png`). |
| T026 — motion gating | Under `prefers-reduced-motion: reduce`: `h1`/`h2` `animation-name: none`, opacity 1, transform none; `.diagram-svg` opacity 1. Entrance rule is wrapped in both `@media (prefers-reduced-motion: no-preference)` and `@supports (animation-timeline: view())`; resting state = final state. |
| T027 — axe audit | 0 violations (wcag2a/2aa/21a/21aa) at 1440px, at 1440px + reduced-motion, and at 375px. Matches the 001 baseline (0). |
| T028 — resilience matrix | No horizontal scroll at 320/360/480/768/1024/1366/1920/2560 (`scrollWidth === clientWidth` at every width). JS-disabled render: all six sections, both CTAs and the diagram present (build ships no islands). Greyscale + forced-colours: every highlighted element stays visible; importance reads via size/position/weight. Keyboard tab order unchanged (CSS-only feature). |
| T029 — script bytes | Redesigned `dist/index.html`: 1 `<script>` (JSON-LD), 191 B — **identical** to baseline. No JS bundle in `dist/_astro/` (CSS only). CSS grew 9 157 B → 11 003 B (not script; SC-006 unaffected). |

## Phase 7 — Quickstart run (checks 1–19)

Run 2026-08-29. Checks 1 and 2 are human-panel checks — **for Lee to run** (see below).

| # | Check | Result |
| - | ----- | ------ |
| 1 | First-impression (SC-001) | ⏳ **Lee to run** — 5-viewer, 10s panel. |
| 2 | Fifteen-second skim (SC-002) | ⏳ **Lee to run** — 5-viewer, 15s panel. |
| 3 | Highlight budget (SC-003) | ✅ 5 highlighted elements: Hero CTA (fill), Closing CTA (fill), Hero positioning line (3rem underbar), Intersection framing line (margin rule), Philosophy connective line (margin rule). ≤ 6. None are body links, prose, headings, eyebrows, the aside, or the focus ring. |
| 4 | Highlight vs accent distinct | ✅ Warm gold vs cool teal; teal is far lighter (near-white in greyscale) so the two never vibrate. Distinguishable under protan/deutan/tritan (lightness gap carries it). |
| 5 | Greyscale / forced-colours | ✅ `v-grayscale.png`, `v-forcedcolors.png` — CTA reads as a button, key-line rules read as rules, positioning line reads by size. Nothing vanishes. |
| 6 | Contrast & a11y audit | ✅ 0 axe violations, 0 contrast failures; matches baseline. |
| 7 | Keyboard only | ✅ Tab order unchanged (no markup change); focus ring visible on every interactive element incl. the filled CTA. |
| 8 | No JavaScript | ✅ Build ships no islands; all content, both CTAs, the diagram (SVG + `<desc>`) present without JS. |
| 9 | JS byte comparison | ✅ 191 B = 191 B (identical). |
| 10 | Reduced motion | ✅ No entrance animation plays; headings, aside, diagram in final state immediately. |
| 11 | Responsive sweep | ✅ No horizontal scroll 320–2560px; prose stays within `--measure` on wide viewports. |
| 12 | Sticky rail behaviour | ✅ ≥ 60rem: the mono section number is `position: sticky` in the `.shell` gutter, follows its section and releases at the boundary (`v-rail-stick.png`, `v-rail-release.png`); never overlaps content, never escapes. < 60rem: `content: none`, no reserved space. At exactly 60rem the numeral clears the viewport edge (`-2rem` gutter offset). |
| 13 | Personal aside | ✅ ≥ 60rem: sticky, `align-self: start`, `max-height: calc(100dvh - 2*--space-l)` + `overflow:auto` guard so it cannot strand or run past `#how-i-think`. < 60rem: static inline note below the principles. |
| 14 | Font-swap resilience | ✅ `font-display: swap` unchanged; no body-copy reflow (display-only token retune, body steps untouched). Manual CLS spot-check: 0. |
| 15 | Performance non-regression | ⏳ Lighthouse not re-run headless here; markup + JS unchanged from the 001 100/100/100/100 build, CSS +1.8 KB. No regression expected — **Lee to confirm** with a Lighthouse run if desired. |
| 16 | Single-source token | ✅ No highlight colour literal outside `tokens.css`; every highlighted element resolves `var(--highlight)`. Changing the token once recolours all five. |
| 17 | Print | ✅ `v-print.png` — white ground (not an ink block), positioning line prints as an ink underline, key-line rules print as dark ink rules, CTA prints as a plain link with its URL. |
| 18 | No-email still holds | ✅ `assert-no-email.mjs` passes in `npm run build`. |
| 19 | Copy unchanged | ✅ `git diff main -- src/data/` is empty; visitor-facing text identical. |

### Human-panel checks still outstanding (Lee)

- **Check 1 / SC-001** — first-impression panel.
- **Check 2 / SC-002** — fifteen-second skim panel.
- **Check 15** — optional Lighthouse re-run for the record.

## T032 — Review subagents

| Reviewer | Status | Outcome |
| --- | --- | --- |
| `simplicity-reviewer` | ✅ ran | Confirmed CSS-and-tokens-only: no dependency, no client JS, no new build step, no new component, no markup/content change. Findings: (1) the section-number rail is the heaviest new construct — noted, kept as the spec's required structural spine; removed a dead `.section::before { content: none }` rule it flagged. (3) `--space-3xs` comment corrected to name its real consumer. (2) duplicated key-line rule block in Intersection/Philosophy — left inline (project's "inline until three identical cases" stance; reviewer flagged, did not require). (4) Hero `@media print` underline fallback — **kept**: the `.positioning` mark is a `background` gradient that browsers may not print, so the underline fallback is what satisfies the contract's "highlighted text prints as bold/underlined" rule. |
| `ux-design-reviewer` | ⚠️ could not complete | Terminated on an Anthropic session rate-limit (HTTP 429), not a code issue. Equivalent checks performed directly with Playwright + axe-core — see the Phase 6 and quickstart tables above (highlight policy/count, greyscale + forced-colours survival, focus-ring visibility on the teal CTA, sticky-rail containment incl. exactly 60rem, aside behaviour, responsive sweep, reduced-motion, print, 0 axe violations). Re-run `/speckit-implement` or the agent alone once the limit resets to get an independent pass. |
| `content-integrity-reviewer` | ⚠️ could not complete | Same rate-limit. Verified directly: `git diff main -- src/data/ src/pages/ src/layouts/` is empty; all changes are scoped `<style>` blocks, `src/styles/*.css`, and docs; no visitor-facing string changed (quickstart check 19). |
