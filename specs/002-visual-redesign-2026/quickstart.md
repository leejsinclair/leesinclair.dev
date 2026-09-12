# Quickstart: Validating the 2026 Visual Redesign

Run during `/speckit-implement`, against `npm run build` output and a headless-Chromium
preview of `npm run preview`. Human-panel checks (SC-001, SC-002) are marked as such and are
run by Lee or a stand-in, not the agent.

## Prerequisites

```bash
npm install          # no new dependencies expected
npm run check        # astro check — must be clean
npm run build        # astro build + assert-no-email — must be clean
npm run preview      # serve dist/ for browser checks
```

Keep a copy of the **pre-redesign** `dist/` (e.g. `git stash` the branch or build `main`
into `dist-baseline/`) for the byte and audit comparisons in checks 6 and 9.

## Scenario checks (mapped to Success Criteria)

| # | Check | How | Pass when |
| - | ----- | --- | --------- |
| 1 | First-impression (SC-001) | **Human panel.** Show 5 target-audience viewers the page for 10s each; ask for a first impression of the design. | ≥ 4 say "current" *and* "crafted/considered/restrained"; none say generic/dated/template. |
| 2 | Fifteen-second skim (SC-002) | **Human panel.** 5 viewers, 15s, "what stood out / what are you meant to do next?" | ≥ 4 name the CTA or a key positioning statement. |
| 3 | Highlight budget (SC-003, contract §Highlight usage) | Grep the rendered HTML/CSS for `--highlight` uses; count distinct highlighted elements on the page. | ≤ 6 elements; none are body links, prose, headings, eyebrows, the aside, or the focus ring. |
| 4 | Highlight vs accent distinct (US2 AS3, R6) | Visual inspection where the CTA (highlight) sits near an inline link (accent); colour-blindness simulation (protan/deutan/tritan). | The two are clearly different; no vibration; importance still reads under each simulation. |
| 5 | Greyscale / forced-colours (US2 AS4, contract §Highlight usage) | Render with hue removed and in a forced-colours / high-contrast mode. | Every highlighted element stays visible and legible; the "most important" reading survives via position/size/weight. |
| 6 | Contrast & a11y audit (SC-004, R6) | Automated accessibility audit on every section; compare violation list to the baseline build. | Zero colour-contrast failures for text and interactive elements; zero new violations vs baseline. |
| 7 | Keyboard only (SC-004, contract §Focus) | Tab through the page; observe the focus ring on the new ground and on the highlight-filled CTA. | Every interactive element reachable in logical order; focus ring clearly visible everywhere; ≥ 44px CTA target. |
| 8 | No JavaScript (contract §Motion, page-contract) | `javaScriptEnabled: false`; load the page. | All six sections, both CTAs, the diagram, and any "revealed" content are fully present. |
| 9 | JS byte comparison (SC-006) | Diff total `<script>` + island JS bytes in the redesigned `dist/` vs the baseline `dist/`. | Redesigned ≤ baseline. |
| 10 | Reduced motion (SC-009, contract §Motion) | `prefers-reduced-motion: reduce`; load and scroll. | No entrance animation plays; headings, aside, diagram all in final state immediately. |
| 11 | Responsive sweep (SC-005) | `scrollWidth === clientWidth` at 320/360/480/768/1024/1366/1920/2560; check the measure on wide widths. | No horizontal scroll at any width; prose stays within a readable measure. |
| 12 | Sticky rail behaviour (US4, contract §Signature elements) | At ≥ 60rem, scroll each section; at < 60rem, check the eyebrow position; check a tall (e.g. 1440×1200) viewport. | Rail stays put within its section, never overlaps, never escapes; collapses to inline below 60rem; aside looks anchored, not stranded. |
| 13 | Personal aside (US4 AS1–2) | Wide viewport: scroll `#how-i-think`. Narrow: same section. | Aside tracks the principles without overlap and does not run past the section; inline and legible when narrow. |
| 14 | Font-swap resilience (SC-008) | Throttle; observe body copy paint vs Fraunces load; measure CLS. | Body copy readable in the fallback first; no layout shift attributable to font or decoration. |
| 15 | Performance non-regression (contract §Non-regression) | Lighthouse mobile + desktop on the preview. | 100/100/100/100, CLS 0, script 0 B — no regression vs the 001 baseline. |
| 16 | Single-source token (SC-010) | Change `--highlight` in `tokens.css`; rebuild. | Every highlighted element updates; no other file edited. Grep confirms no colour literal in component `<style>` or `global.css` outside `:root`/`@media`. |
| 17 | Print (contract §Colour) | Print-preview / `@media print` emulation. | Dark ground not a solid ink block; highlighted text renders as bold/underlined dark ink; link targets discernible. |
| 18 | No-email still holds (contract §Non-regression) | `scripts/assert-no-email.mjs` (runs in `npm run build`). | Passes; no email anywhere. |
| 19 | Copy unchanged (FR-007) | `git diff main -- src/data/` and the rendered text. | No change to `src/data/*.ts`; visitor-facing text identical. |

## Review subagents (before "done")

- `ux-design-reviewer` — against `contracts/design-system-contract.md` and the constitution
  "avoid" list; highlight usage policy; sticky-rail and aside behaviour; focus visibility.
- `simplicity-reviewer` — confirm no new dependency, no new JS, no new component, no build
  step; CSS-only diff.
- `content-integrity-reviewer` — confirm the change is presentational and no copy shifted.

Blocking findings must be resolved or explicitly waived with a recorded reason.

## Governance precondition

Before this feature is "done", Constitution v1.1.0 (Principle V amendment permitting the
highlight colour) must be ratified — see `plan.md` Complexity Tracking. If it is declined,
switch to the no-hue fallback: drop checks 3–5's colour specifics, deliver emphasis via
type/weight/size/space, and re-run checks 1–2.
