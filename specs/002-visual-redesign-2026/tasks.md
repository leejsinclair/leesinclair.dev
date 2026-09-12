---
description: "Task list for the 2026 Visual Redesign"
---

# Tasks: 2026 Visual Redesign

**Input**: Design documents from `specs/002-visual-redesign-2026/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/design-system-contract.md, quickstart.md

**Tests**: No automated test suite exists for this site (no runtime logic to unit-test). "Tests"
here are the browser-observed and audit checks in `quickstart.md`, run during implementation.
No TDD test tasks are generated.

**Organization**: Tasks are grouped by user story. This is a CSS-and-tokens-only change —
no new files in `src/`, no new dependencies, no client JavaScript, no markup restructure of
the six sections, no copy edits.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependency on an incomplete task)
- **[Story]**: US1–US5 from spec.md
- Every task names the exact file(s) it touches

## Path Conventions

Single static site. All work is in `src/styles/tokens.css`, `src/styles/global.css`, and the
scoped `<style>` blocks of the eight components under `src/components/`. Governance file:
`.specify/memory/constitution.md`.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Governance precondition and a measurement baseline

- [X] T001 Adopt Constitution **v1.1.0** via `/speckit-constitution`: amend Principle V to "one restrained accent colour plus, optionally, one sparingly-used highlight colour governed by a recorded usage policy"; add the highlight usage policy (from `data-model.md`); refresh the Sync Impact Report and `LAST_AMENDED_DATE` in `.specify/memory/constitution.md`. (If the amendment is declined, switch every highlight task below to the no-hue fallback in `plan.md` / `quickstart.md`.)
- [X] T002 [P] Capture the pre-redesign baseline for later comparison: build `main` into a scratch location (e.g. `git worktree add ../pw-baseline main && (cd ../pw-baseline && npm ci && npm run build)`), and record baseline Lighthouse (mobile + desktop), total `<script>` byte count, and the automated accessibility violation list. Save figures to `specs/002-visual-redesign-2026/acceptance-results.md`.

**Checkpoint**: Amendment ratified (or fallback selected); baseline numbers recorded.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: The token layer and shared `global.css` rules every story builds on

**⚠️ CRITICAL**: No user-story work can begin until this phase is complete

- [X] T003 In `src/styles/tokens.css` `:root`, add `--highlight`, `--highlight-strong`, `--on-highlight` with placeholder values (cool teal/aqua per research R1) and a `/* contrast ≈ N:1 vs --bg */` comment on each. Keep all existing token **names** unchanged.
- [X] T004 In `src/styles/tokens.css`, retune values only (names stable): `--step-4` max → ~4.75rem, `--step-3` max → ~3.25rem, `--step-2` max → ~2.2rem; add `--space-3xs` (~0.25rem); raise `--space-xl` / `--space-2xl` ~10%. Verify the clamp minimums are unchanged (no 320px scroll risk).
- [X] T005 In `src/styles/global.css` (base layer): restyle `.cta` to a `--highlight` fill with `--on-highlight` text and `--highlight-strong` hover/active; leave `a` (inline links), `a:hover`, and `::selection` on `--accent` / `--accent-strong`. Keep the ≥44px target and `.cta--placeholder` dashed treatment.
- [X] T006 In `src/styles/global.css` (layout layer): hairline-discipline pass — one consistent `--border` rule between sections, remove any doubled dividers; apply the retuned section rhythm (`--space-xl`/`--space-2xl`). Add a CSS counter on `.section` and a sticky mono section-number rendered in the left margin via `.section::before` on viewports ≥ 60rem (no markup change); hidden / not reserved below 60rem.
- [X] T007 In `src/styles/global.css` (`@media print`): map `--highlight` to a dark ink and render highlighted text as bold/underlined; keep the existing `--accent` print behaviour. Confirm the dark ground still prints as white, not a solid block.
- [X] T008 In `src/styles/global.css`: add a reusable one-time entrance animation (opacity + small translateY) driven by `animation-timeline: view()`, wrapped in **both** `@media (prefers-reduced-motion: no-preference)` and `@supports (animation-timeline: view())`, resting state = final state. Do not apply it yet.

**Checkpoint**: Tokens and shared rules in place; `npm run check` clean; page still renders (unstyled-per-component is fine at this point).

---

## Phase 3: User Story 1 — The page reads as current and crafted (Priority: P1) 🎯 MVP

**Goal**: The editorial 2026 refresh — bigger optical display type, structural spine, hairline discipline, restrained micro-motion — applied across all six sections.

**Independent Test**: First-impression panel (quickstart check 1): ≥ 4 of 5 target-audience viewers call the design current *and* crafted/considered, none call it generic or dated; a reviewer picks the redesigned page over the old one as more recently made.

### Implementation for User Story 1

- [X] T009 [P] [US1] `src/components/Hero.astro` `<style>`: display treatment for `<h1>` (Fraunces optical size, tighter tracking) and `.positioning`; move spacing to retuned tokens; apply the T008 entrance animation to the heading.
- [X] T010 [P] [US1] `src/components/Intersection.astro` `<style>`: heading + framing-paragraph rhythm to new tokens; apply the entrance animation to the `<h2>`.
- [X] T011 [P] [US1] `src/components/Principles.astro` `<style>`: grid gutters and heading spacing to new tokens; `align-items: start` retained; entrance animation on the `<h2>`.
- [X] T012 [P] [US1] `src/components/Philosophy.astro` `<style>`: pillar `dt` display treatment, grid gaps, connective-line spacing to new tokens; entrance animation on the `<h2>`.
- [X] T013 [P] [US1] `src/components/Closing.astro` `<style>`: closing rhythm and CTA spacing to new tokens; entrance animation on the `<h2>`.
- [X] T014 [P] [US1] `src/components/Evidence.astro` `<style>`: counter (`::before`) treatment against the new palette, hairline between items, spacing to new tokens; entrance animation on the `<h2>`.
- [X] T015 [P] [US1] `src/components/SystemDiagram.astro` `<style>`: keep node fill on `--accent` and edge stroke on `--border-strong` (verify both still read against the retuned ground); retime the existing `view()` reveal if the rhythm changed; update the ≤30rem stacked-fallback left border.

**Checkpoint**: All six sections restyled; `npm run check` + `npm run build` clean; no horizontal scroll 320–2560px; the page reads as a coherent editorial redesign.

---

## Phase 4: User Story 2 — The right elements pull the eye (Priority: P1)

**Goal**: The highlight colour applied to a deliberate ≤ 6-element set so a skimming reader lands on the CTA and the key lines.

**Independent Test**: Fifteen-second skim panel (quickstart check 2): ≥ 4 of 5 viewers name the CTA or a key positioning statement as what stood out / what to do next.

### Implementation for User Story 2

- [X] T016 [P] [US2] `src/components/Hero.astro` `<style>`: a short `--highlight` underline/marker on `.positioning` (not a fill); confirm the Hero `.cta` inherits the `--highlight` fill from `global.css`. (Same file as T009 — run after it.)
- [X] T017 [P] [US2] `src/components/Intersection.astro` `<style>`: a `--highlight` rule or marker on the single framing key line. (Same file as T010 — run after it.)
- [X] T018 [P] [US2] `src/components/Philosophy.astro` `<style>`: a `--highlight` marker on the connective line (`.connective`). (Same file as T012 — run after it.)
- [X] T019 [US2] Verify in built `dist/` that both "Let's talk" CTAs (Hero + Closing) render the `--highlight` fill and that no other element does unintentionally.
- [X] T020 [US2] Enforce the usage policy (`data-model.md` / contract §Highlight usage): count highlighted elements in the rendered page (must be ≤ 6: 2 CTAs + Hero positioning + Intersection line + Philosophy line = 5); confirm none are body links, prose, headings, eyebrows, the aside, or the focus ring; confirm each highlighted element also wins on position/size/weight (greyscale + forced-colours checks, quickstart 3–5).

**Checkpoint**: Highlight applied and within budget; accent vs highlight visibly distinct with no vibration; importance survives hue removal.

---

## Phase 5: User Story 4 — The sticky aside as a site-wide signature (Priority: P2)

**Goal**: The sticky margin-note device becomes the page's structural signature (sticky section numbers from T006) and the personal aside is refined and made robust.

**Independent Test**: quickstart checks 12–13 — the sticky number/rail stays within its section and never overlaps or escapes; the personal aside tracks the principles without overlap, does not run past `#how-i-think`, looks anchored on a tall viewport, and collapses to a legible inline note below 60rem.

### Implementation for User Story 4

- [X] T021 [US4] `src/components/PersonalAside.astro` `<style>`: refine the sticky margin note — `sticky` offset aligned to the T006 number rail, `align-self: start`, and a `max-height` / overflow guard so it cannot extend past its section or strand on a tall viewport. Keep the inline collapse below 60rem.
- [X] T022 [US4] `src/components/Principles.astro` `<style>`: verify the two-column grid (principles + aside) hosts the refined aside with no overlap across 60rem–100rem+, adjusting column min/max if needed. (Same file as T011 — run after it.)
- [X] T023 [US4] `src/styles/global.css`: tune the sticky section-number `top` offset and release behaviour so it reads as a deliberate running head on tall and short sections alike; confirm it never overlaps heading or body text at any width ≥ 60rem. (Same file as T006 — run after it.)

**Checkpoint**: Sticky signature consistent site-wide; aside robust at all viewport heights and widths.

---

## Phase 6: User Story 3 — Nothing that already works regresses (Priority: P1)

**Goal**: Every accessibility, resilience, and performance property from the 001 baseline still holds with the new palette, focus treatment, and motion.

**Independent Test**: The full 001 definition-of-done matrix passes (quickstart checks 6–11, 14–18) with zero contrast failures, zero new a11y violations, no script growth, no horizontal scroll, and reduced-motion final-state rendering.

### Implementation for User Story 3

- [X] T024 [US3] `src/styles/tokens.css`: tune `--highlight` / `--highlight-strong` / `--on-highlight` to measured ratios — ≥ 4.5:1 where they colour text and ≥ 3:1 where they colour a non-text indicator against `--bg`; `--on-highlight` ≥ 4.5:1 on the `--highlight` fill. Update the contrast comments to the real figures.
- [X] T025 [US3] `src/styles/global.css`: re-check `:focus-visible` against the retuned ground and on the highlight-filled CTA; adjust outline colour (stay `--accent-strong`), width, or offset until the ring is clearly visible on every interactive element and every background it can sit on.
- [X] T026 [US3] Confirm every `view()` entrance animation (T008 usages + the existing `SystemDiagram` reveal) is gated by `@media (prefers-reduced-motion: no-preference)` and renders the final state at rest; verify under `prefers-reduced-motion: reduce` that nothing animates.
- [X] T027 [US3] Run the automated accessibility audit on `npm run preview`; diff the violation list against the T002 baseline. Resolve any colour-contrast failure and any new violation before proceeding.
- [X] T028 [US3] Manual resilience matrix on the preview: keyboard-only tab order + visible focus; `javaScriptEnabled: false` full render incl. both CTAs and the diagram; `scrollWidth === clientWidth` at 320/360/480/768/1024/1366/1920/2560; protan/deutan/tritan simulation (quickstart 7, 8, 11, 4).
- [X] T029 [US3] Compare total `<script>` + island JS bytes in the redesigned `dist/` against the T002 baseline (SC-006); confirm no `<script>` was added beyond the JSON-LD block and optional Plausible tag.

**Checkpoint**: Non-regression proven against the recorded baseline.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Single-source verification, docs, reviews, and the acceptance run

- [X] T030 [P] Grep every component `<style>` block and `src/styles/global.css` for colour literals (`#`, `rgb(`, `hsl(`, named colours) outside `:root` / `@media` token redefinitions; replace any with `var(--…)`. Then change `--highlight` once in `tokens.css`, rebuild, and confirm every highlighted element updates and no other file needs editing (SC-010).
- [X] T031 [P] Update `CLAUDE.md`: the "hand-written CSS with design tokens" note and any "single accent" phrasing → "one accent plus one sparingly-used highlight"; add a one-line pointer to `specs/002-visual-redesign-2026/`.
- [X] T032 Run the review subagents and resolve or record-and-waive every blocking finding: `simplicity-reviewer` (CSS-only diff; no dependency, JS, component, or build step added), `ux-design-reviewer` (against `contracts/design-system-contract.md` and the constitution "avoid" list; highlight policy; sticky rail + aside behaviour; focus visibility), `content-integrity-reviewer` (change is presentational; `git diff main -- src/data/` is empty; visitor text identical — FR-007).
- [X] T033 `npm run check` and `npm run build` both clean (includes `scripts/assert-no-email.mjs` — quickstart 18).
- [X] T034 Execute `quickstart.md` checks 1–19; record results in `specs/002-visual-redesign-2026/acceptance-results.md`, flagging the human-panel checks (1, 2) as Lee's to run and the Lighthouse non-regression (15) against the T002 figures.
- [X] T035 `npm run format` (prettier) over the touched files.

---

## Dependencies & Execution Order

### Phase dependencies

- **Setup (Phase 1)**: T001 and T002 are independent of each other. T001 gates *completion* (governance); T002 gates the comparison checks in Phase 6.
- **Foundational (Phase 2)**: depends on Phase 1. T003 → T004 (same file). T005 → T006 → T007 → T008 (same file, `global.css`). **Blocks all user stories.**
- **US1 (Phase 3)**: depends on Phase 2. T009–T015 are all `[P]` (distinct component files).
- **US2 (Phase 4)**: depends on Phase 2; T016/T017/T018 each depend on the same-file US1 task (T009/T010/T012 respectively). T019/T020 depend on T005 + T016–T018.
- **US4 (Phase 5)**: depends on Phase 2 (esp. T006); T022 depends on T011, T023 depends on T006. Independent of US1/US2 otherwise.
- **US3 (Phase 6)**: verification — run after US1, US2, US4 are in place. T024 may start once T003 exists but its sign-off needs the finished palette.
- **Polish (Phase 7)**: after all stories. T030 depends on all component `<style>` edits being done.

### Within a story

- US1: all seven component tasks parallelizable; no ordering among them.
- US2: apply after the matching US1 component task; `global.css` `.cta` (T005) must exist first.
- US4: aside (T021) and grid check (T022) after the Principles US1 task.

### Parallel opportunities

- T001 ‖ T002 (Setup).
- T009 ‖ T010 ‖ T011 ‖ T012 ‖ T013 ‖ T014 ‖ T015 — the entire US1 implementation, once Phase 2 is done.
- T016 ‖ T017 ‖ T018 — once their US1 counterparts are done.
- T030 ‖ T031 (Polish, distinct files).

---

## Parallel Example: User Story 1

```text
# Once Phase 2 (Foundational) is complete, launch all seven together:
Task: "Hero.astro <style> — display type + spacing to new tokens + entrance anim"
Task: "Intersection.astro <style> — heading + framing rhythm + entrance anim"
Task: "Principles.astro <style> — grid + heading spacing + entrance anim"
Task: "Philosophy.astro <style> — pillar dt treatment + gaps + entrance anim"
Task: "Closing.astro <style> — closing rhythm + CTA spacing + entrance anim"
Task: "Evidence.astro <style> — counter treatment + hairline + entrance anim"
Task: "SystemDiagram.astro <style> — palette check + reveal retime + stack border"
```

---

## Implementation Strategy

### MVP (the visible redesign)

1. Phase 1 Setup — ratify the amendment, record the baseline.
2. Phase 2 Foundational — tokens + shared `global.css`.
3. Phase 3 US1 — editorial refresh across all sections.
4. Phase 4 US2 — the highlight colour.
5. Phase 6 US3 — prove non-regression against the baseline.
6. **STOP and VALIDATE**: run `quickstart.md`; get Lee's first-impression + skim panels.

This is the shippable increment: a current-looking page where the right things pull the eye,
with every existing guarantee intact.

### Then

7. Phase 5 US4 — the sticky signature and aside hardening (polish that raises the "special" bar).
8. Phase 7 — single-source check, docs, review subagents, acceptance run.

### Notes

- `[P]` = different files, no dependency on an incomplete task.
- No task changes `src/data/*.ts`, `src/pages/index.astro`, `src/layouts/Base.astro`, section order, or any visitor-facing string.
- No task adds a dependency, an Astro integration, a build step, or client JavaScript.
- Commit after each task or each parallel batch; keep the working tree `npm run check`-clean.
- If T001's amendment is declined: drop T003, T005's highlight fill, T007's highlight print map, and T016–T020; deliver emphasis via type/weight/size/space in those same files, and re-run the panels.
