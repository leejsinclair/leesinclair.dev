# Implementation Plan: 2026 Visual Redesign

**Branch**: `002-visual-redesign-2026` | **Date**: 2026-08-29 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/002-visual-redesign-2026/spec.md`

## Summary

Restyle the existing single page so it reads as made in 2026 — contemporary editorial, more
confident typographic hierarchy, and a few deliberate signature moments (the sticky margin-note
aside is the reference for the feeling). Add one new colour role — a **highlight**, cool against
the warm gold accent — reserved for a handful of genuinely important elements (the "Let's talk"
call to action, one key line per section).

Technical approach: this is a **CSS-and-tokens change only**. No new components, no markup
restructure of the six sections, no copy edits, no new runtime or dev dependencies, no added
client JavaScript. Work happens in `src/styles/tokens.css`, `src/styles/global.css`, and the
scoped `<style>` blocks of the eight existing components. New motion is CSS scroll-driven
(`animation-timeline: view()`), `@supports`-guarded, and collapses to the final state under
`prefers-reduced-motion` — matching the pattern `SystemDiagram.astro` already uses. The print
block gains coverage for the highlight.

One governance dependency: Constitution Principle V mandates "a single restrained accent
colour". Adding the highlight requires a MINOR constitution amendment (v1.0.0 → v1.1.0). This
plan assumes that amendment is ratified at the plan review gate; if it is declined, the feature
falls back to typographic emphasis only (see Complexity Tracking and spec Dependencies).

## Technical Context

**Language/Version**: TypeScript 6.x (strict, `astro/tsconfigs/strict`), Node.js ≥ 22.12 (dev on 24.x)

**Primary Dependencies**: Astro 7.2.x (static output, no integrations). Dev-only: `@astrojs/check`,
`prettier`, `prettier-plugin-astro`. No runtime dependencies. **No change** — this feature adds none.

**Storage**: None. Design values live in `src/styles/tokens.css`; visitor copy stays in `src/data/*.ts` (untouched).

**Testing**: `npm run check` (`astro check`) and `npm run build` (`astro build` + `scripts/assert-no-email.mjs`)
as blocking gates. Acceptance verification is the scenario list in `quickstart.md`, run against
`npm run preview` in headless Chromium plus an automated accessibility audit and a JS byte comparison.

**Target Platform**: Static hosting, any modern browser ~320px–2560px. Deploy target still undecided — build stays adapter-free.

**Project Type**: Single static site (one page, six sections, eight components).

**Performance Goals**: No regression against the 001 baseline — Lighthouse 100/100/100/100
(mobile and desktop), 0 B script, CLS 0, total transfer ≈ 45 KB. Text readable before the web
font and decorative assets settle (`font-display: swap`).

**Constraints**: Dark-mode-first, no light theme (print block excepted). WCAG 2.1 AA contrast
against the dark palette for every text and interactive element, including the highlight in
every context. No horizontal scroll 320–2560px. Client JavaScript stays at its current level
(the CSS-only `view()` reveal; no islands, no `<script>` beyond the JSON-LD block and the
optional Plausible tag). Every colour/type/space/motion value defined once in `tokens.css`;
components reference tokens, not literals.

**Scale/Scope**: ~2 global CSS files + 8 component `<style>` blocks touched. ~1 new token
group (highlight colour, 2–3 values). 0 new files in `src/`. ~4 signature elements.

## Constitution Check

_GATE: evaluated against Constitution v1.0.0 (Principles I–VI + the two constraint sections)._

| Principle | Status | Notes |
| --------- | ------ | ----- |
| I — Modern, Minimal Stack | PASS | No toolchain change. No integrations, no PostCSS chain, no CSS framework, no CI step added. Hand-written CSS with tokens, as today. |
| II — Least Code That Does the Job | PASS | Zero new JS; new motion is CSS-only and `@supports`-guarded with a no-motion resting state. No new components or abstractions — the eight section components stay one-call-site splits. No dependency added. Signature elements are CSS on existing markup. |
| III — Accessible and Resilient by Default | PASS | Semantic HTML and heading hierarchy unchanged (CSS-only feature). New palette values carry documented AA contrast figures in `tokens.css`; focus ring re-checked against the new ground. Every signature motion suppressed under `prefers-reduced-motion` with content shown in final state. No horizontal scroll 320–2560px re-verified. Text paints before font/decoration. |
| IV — Factual Integrity — Invent Nothing | PASS | No visitor-facing copy changes; `src/data/*.ts` untouched. Purely presentational. |
| V — Restraint in Design and Copy | **DEVIATION — amendment required** | The redesign keeps the dark-first ground, subtle borders, generous whitespace, strong hierarchy, and none of the "avoid" patterns. It **adds a second hue** (the highlight) beyond the constitution's "a single restrained accent colour". This is the explicit purpose of the feature. Requires a MINOR amendment (v1.1.0) permitting one accent + one sparingly-used highlight, with the usage policy recorded. See Complexity Tracking. Design direction (the "2026" language, the hue) is proposed in `research.md` for approval at this review gate. |
| VI — Spec-Driven Change | PASS | `specify → clarify → plan` gates followed; this plan carries the Constitution Check; `/speckit-tasks` and `/speckit-implement` follow. The Principle V deviation is recorded here with its path to compliance. |

**Constraint sections**: Technology/Delivery — satisfied (static output, no adapter, no new
dependency, no analytics change, metadata untouched, every design value single-sourced in
`tokens.css`). Development Workflow — `npm run check` / `npm run build` stay the gates;
`ux-design-reviewer`, `simplicity-reviewer`, and `content-integrity-reviewer` run before done;
no dependency to call out.

**Gate result**: PASS conditional on the Principle V amendment being ratified at the review
gate. If it is not, implementation switches to the no-hue fallback and the gate is
unconditionally PASS.

**Post-design re-evaluation (after Phase 1)**: unchanged. The design artifacts introduce no
new dependency, no new component, no client JS, and no markup change — `data-model.md` is a
token retune plus three additive colour tokens, and `contracts/design-system-contract.md`
tightens rather than expands the constraints. Principle V remains the only deviation, with
the same recorded path to compliance.

## Project Structure

### Documentation (this feature)

```text
specs/002-visual-redesign-2026/
├── plan.md              # This file
├── research.md          # Phase 0 — the 2026 design direction (review-gate artifact)
├── data-model.md        # Phase 1 — colour-role + token model, highlight usage policy
├── quickstart.md        # Phase 1 — validation scenarios mapped to Success Criteria
├── contracts/
│   └── design-system-contract.md   # Observable design contract (tokens, highlight policy, motion budget)
├── checklists/
│   └── requirements.md  # Spec quality checklist (from /speckit-specify)
└── tasks.md             # /speckit-tasks output — NOT created here
```

### Source Code (repository root)

```text
src/
├── styles/
│   ├── tokens.css        # CHANGED — add highlight colour role(s); retune type scale, spacing, motion tokens
│   └── global.css        # CHANGED — .cta restyle, focus ring, ::selection, links, print block, layout primitives
├── components/
│   ├── Hero.astro        # CHANGED — <style> only: display treatment, highlight on CTA / positioning line
│   ├── Intersection.astro# CHANGED — <style> only: heading + framing rhythm
│   ├── Principles.astro  # CHANGED — <style> only: grid, sticky index rail, aside relationship
│   ├── PersonalAside.astro # CHANGED — <style> only: refine the signature sticky aside
│   ├── Evidence.astro    # CHANGED — <style> only: counter treatment, highlight on the one key outcome line
│   ├── Philosophy.astro  # CHANGED — <style> only: pillars, connective line
│   ├── Closing.astro     # CHANGED — <style> only: CTA repeat, closing rhythm
│   └── SystemDiagram.astro # CHANGED — <style> only: stroke/node colours vs new palette, reveal timing
├── layouts/Base.astro    # UNCHANGED (no new font, no head change)
├── pages/index.astro     # UNCHANGED
└── data/*.ts             # UNCHANGED
```

**Structure Decision**: Single static site, no structural change. The feature is entirely
within `src/styles/` and the scoped `<style>` blocks of the eight existing components. No
files added or removed in `src/`. `astro check` + `astro build` remain the gates.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
| --------- | ---------- | ----------------------------------- |
| Second colour hue beyond Constitution V's "single restrained accent colour" (the highlight) | The spec's core requirement: important elements (the CTA, one key line per section) must reliably pull a skimming reader's eye (US2, SC-002). A single accent already carries the "interactive" meaning (links, diagram nodes); overloading it for "look here" makes neither legible. | Typography/weight/size/space-only emphasis was considered (and is the documented fallback). It is weaker for a fifteen-second skim: without a colour break, the eye does not reliably land on the CTA over a same-weight heading. The feature was explicitly requested to fix this. Mitigation: exactly one highlight role, ≤ 6 uses page-wide (SC-003), never on body links/prose, always paired with a non-colour cue (FR-005), and recorded as a ratified MINOR amendment (v1.1.0) with a usage policy — not an open-ended palette expansion. |

**Planned path to compliance**: run `/speckit-constitution` to adopt v1.1.0 amending
Principle V to "one restrained accent colour plus, optionally, one sparingly-used highlight
colour governed by a recorded usage policy", refreshing the Sync Impact Report. Do this before
`/speckit-implement`, or as the first implementation task.
