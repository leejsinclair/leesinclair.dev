---
description: "Task list for Personal Leadership Website — An Argument for Hiring Lee Sinclair"
---

# Tasks: Personal Leadership Website — An Argument for Hiring Lee Sinclair

**Input**: Design documents from `specs/001-leadership-hiring-site/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: No committed test suite (research.md R8). The spec relies on the `quickstart.md`
acceptance checklist (mapped to Success Criteria) plus the three review subagents; `astro
check` + `astro build` are the blocking gates. The browser-observed checks in that checklist
are driven by the agent through the **Playwright MCP server** configured in T005a
(research.md R11) — no test files, no `package.json` devDependency.

**Organization**: Tasks are grouped by user story. This is a single static page, so "user
story" maps to a slice of behaviour (the argument, the CTAs, the design, resilience,
discoverability, editability) rather than a separate route. Foundational phase builds the
content model and shell that every slice needs.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies on incomplete tasks)
- **[Story]**: US1–US6 for story-phase tasks only
- All paths are relative to the repository root `/home/lee/Projects/personal-website/`

## Path Conventions

Single Astro project at repo root: `src/`, `public/`, config files at root (per plan.md
Structure Decision).

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Bootstrap the Astro project in place and wire the toolchain.

- [x] T001 Bootstrap Astro in place: run `npm create astro@latest -- --template minimal --typescript strict --no-install --no-git .`, then `npm install`; confirm `package.json`, `tsconfig.json` (extends `astro/tsconfigs/strict`), and `src/pages/index.astro` exist
- [x] T002 Configure `astro.config.mjs`: `output: 'static'`, `site: '<canonical URL placeholder>'`, no adapter, no integrations
- [x] T003 [P] Install and configure Prettier: `npm i -D prettier prettier-plugin-astro`; create `.prettierrc` with `{ "plugins": ["prettier-plugin-astro"] }`
- [x] T004 [P] Set `package.json` scripts: `dev` → `astro dev`, `build` → `astro build`, `preview` → `astro preview`, `check` → `astro check`, `format` → `prettier --write .`
- [x] T005 [P] Update `.gitignore` for `node_modules/`, `dist/`, `.astro/`
- [x] T005a [P] Configure the **Playwright MCP server** (research.md R11): commit `.mcp.json` at repo root with a `playwright` server (`npx @playwright/mcp@latest --headless --isolated --browser chromium`); ensure the Chromium binary is present (`npx playwright install chromium`); confirm the MCP browser can open `about:blank` in this session. No `package.json` entry, no `tests/` tree.
- [x] T006 Create the source tree from plan.md: empty dirs `src/data/`, `src/styles/`, `src/lib/`, `src/components/`, `src/layouts/`, and `public/fonts/`
- [x] T007 Verify toolchain: `npm run check` and `npm run build` both succeed on the untouched scaffold

**Checkpoint**: Astro builds clean; toolchain and `verify.sh` gates are live; the Playwright MCP browser is reachable for the `quickstart.md` checks.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Content data model, base layout, and base styles that every user story depends on.

**⚠️ CRITICAL**: No user-story work begins until this phase is complete.

- [x] T008 Define all content interfaces in `src/data/types.ts` per data-model.md (`Profile`, `DisciplineNode`, `Principle`, `EvidenceExample`, `PhilosophyPillar`, `PersonalThread`)
- [x] T009 [P] Create `src/data/profile.ts` — name, `positioning` + `roleLine` as `{ text, status: "draft" }` with FR-004 default wording, `supportingStatement` (sourced from résumé), `linkedInUrl` left `undefined` for now (sole contact route), `siteUrl`, `ogImage`; **no email field** (FR-012a); `satisfies Profile`
- [x] T010 [P] Create `src/data/disciplines.ts` — 5 nodes (technology, people, product, delivery, systems) with `label`, `blurb`, `connectsTo` forming one connected graph; plus `diagramAltText` naming all five as one system
- [x] T011 [P] Create `src/data/principles.ts` — 3–4 principles, each `title`/`body`/`sourceIdea`, drawn from the core leadership ideas, no competency jargon
- [x] T012 [P] Create `src/data/evidence.ts` — the 4 examples drafted in spec §Factual Source Material, each `title`/`body`/`theme`; item 4 has `aiFraming: true` and FR-008 wording
- [x] T013 [P] Create `src/data/philosophy.ts` — exactly `autonomy`, `mastery`, `purpose` with `body`, plus `connectiveLine` tying them to capable teams
- [x] T014 [P] Create `src/data/personal.ts` — `PersonalThread` with `lead` + `threads`; UX/design `confirmed: true`, all other interests `confirmed: false` (or export `null` if no lead is ready)
- [x] T015 Add build-time guards: count assertions (`principles` 3–4, `evidence` 1–4, `philosophy` === 3); `linkedInUrl` format check that `throw`s if malformed and `console.warn`s if unset; no library
- [x] T016 [P] Create `src/styles/tokens.css` — dark palette (near-black/charcoal bg, one accent), fluid type scale via `clamp()`, spacing scale, radius, border colour, motion-duration tokens; all colour pairs meet WCAG 2.1 AA
- [x] T017 [P] Create `src/styles/global.css` — reset, base element styles, layout primitives (`.shell` max readable measure, `.section` vertical rhythm), `@layer` order
- [x] T018 Create `src/layouts/Base.astro` — `<html lang="en">`, `<head>` (imports global styles, slot for `SEO`), single `<main>`, `<slot />`
- [x] T019 Rebuild `src/pages/index.astro` as a skeleton: import `Base`, render six empty `<section id=…>` blocks in the fixed order Hero → Intersection → How I Think → Evidence → Leadership Philosophy → Closing, each with `aria-labelledby`

**Checkpoint**: Typed content compiles; page shell renders with correct landmarks and section order.

---

## Phase 3: User Story 1 — Hiring decision-maker grasps the argument in 60–90 seconds (Priority: P1) 🎯 MVP

**Goal**: The page renders all six sections with real content so a target reader extracts
Lee's role, differentiator, and reason to talk within ~90 seconds.

**Independent Test**: Dry-run with ~5 target-audience readers; ≥4 correctly state role type,
differentiator (technical depth + systems thinking + people leadership), and how to contact
him, and describe Lee as a _current_ technology leader. Full narrative reads in < 3 minutes.
Hero content fits above the fold at 1366×768.

- [X] T020 [P] [US1] Create `src/components/Hero.astro` — `<h1>` name, role line, positioning line, exactly one supporting statement; consumes `src/data/profile.ts`; draft marker rendered as a source/dev-only note while `status === "draft"`
- [X] T021 [P] [US1] Create `src/components/SystemDiagram.astro` — inline `<svg role="img" aria-labelledby>` with `<title>`/`<desc>` (= `diagramAltText`), nodes + edges generated from `src/data/disciplines.ts`; default render is the final, fully legible diagram
- [X] T022 [P] [US1] Create `src/components/Intersection.astro` — `<h2>`, visible text naming Technology/People/Product/Delivery/Systems as one system, embeds `SystemDiagram`
- [X] T023 [P] [US1] Create `src/components/Principles.astro` — `<h2>` + 3–4 principles from `src/data/principles.ts`, each title + body
- [X] T024 [P] [US1] Create `src/components/PersonalAside.astro` — renders nothing unless `src/data/personal.ts` yields ≥1 `confirmed` thread; prose aside, never a `<ul>` hobby list
- [X] T025 [P] [US1] Create `src/components/Evidence.astro` — `<h2>` + iterate `src/data/evidence.ts`, each title + body
- [X] T026 [P] [US1] Create `src/components/Philosophy.astro` — `<h2>` + Autonomy/Mastery/Purpose from `src/data/philosophy.ts` + connective line
- [X] T027 [P] [US1] Create `src/components/Closing.astro` — `<h2>` + concise invitation (technology matters; hardest problems aren't purely technical)
- [X] T028 [US1] Compose all six components into `src/pages/index.astro` in order, with `PersonalAside` inside the How I Think section (depends on T020–T027)
- [X] T029 [US1] Content pass on `src/data/*.ts`: write final copy — UK English, direct/confident, no competency jargon, no implication Lee left engineering (FR-003), AI framing per FR-008, whole narrative < 3-minute read
- [X] T030 [US1] Validate US1: 60–90s comprehension dry-run, < 3-minute read-through, Hero above fold at 1366×768 (SC-001, SC-002, SC-003)

**Checkpoint**: MVP — the page makes the full argument end to end. Deployable/demoable.

---

## Phase 4: User Story 2 — Starting a conversation is frictionless (Priority: P1)

**Goal**: A convinced reader can reach Lee via the single "Let's talk" → LinkedIn link in the
Hero and the Closing; no email is exposed anywhere; the CTA degrades to a marked placeholder
when the LinkedIn URL is not yet set.

**Independent Test**: "Let's talk" opens Lee's LinkedIn profile in a new tab from both Hero
and Closing; the rendered page and HTML source contain no email address, `mailto:`, or email
in structured data; with `linkedInUrl` unset the CTA is a marked non-interactive placeholder
(not a broken link) and the build warns; the link works with JavaScript disabled.

- [X] T031 [US2] Add the "Let's talk" CTA to `src/components/Hero.astro` — `<a href={profile.linkedInUrl} target="_blank" rel="noopener">Let's talk</a>` when set; a marked non-interactive placeholder element when unset (FR-012, FR-013)
- [X] T032 [US2] Repeat the same CTA in `src/components/Closing.astro`, reading `src/data/profile.ts` (identical set/unset handling)
- [X] T033 [US2] Confirm no email anywhere — no `mailto:`, obfuscated address, email image, or `email` field in the JSON-LD; add a build check (`grep` over `dist/` for `mailto:` / `@…\.com` contact strings) or a documented manual step (FR-012a, SC-015)
- [X] T034 [P] [US2] CTA styling in `src/styles/global.css` (or component styles): visible `:focus-visible` ring, ≥44px target, hover/focus transition ≤200ms; distinct placeholder styling for the unset state
- [X] T035 [US2] Validate US2: LinkedIn opens (new tab) from both locations; source/DOM free of email (SC-015); rebuild with `linkedInUrl` unset → marked placeholder + `console.warn`, no broken link, not deployable; JS disabled → link works (US2 scenarios 1–4)

**Checkpoint**: US1 + US2 both work independently.

---

## Phase 5: User Story 3 — The design itself demonstrates judgement (Priority: P2)

**Goal**: The visual and editorial design is dark-first, restrained, editorial; the
intersection reads as one connected system; none of the FR-018 avoid-list patterns appear.

**Independent Test**: A designer and a hiring reviewer inspect against the avoid list and
both independently describe the design as restrained, considered, editorial.

- [X] T036 [US3] Finalise `src/styles/tokens.css` — commit the dark palette, single accent, subtle borders, spacing and type hierarchy; re-verify every text/background pair at WCAG 2.1 AA
- [X] T037 [US3] Typography: add one subset Fraunces variable `woff2` to `public/fonts/`, `@font-face` with `font-display: swap`, `<link rel="preload" as="font" crossorigin>` in `Base.astro`; body/UI on system stack, technical labels on system monospace
- [X] T038 [US3] `src/components/SystemDiagram.astro` visual pass — understated lines/nodes, not logos or a card grid; CSS switch to a stacked/simplified legible layout ≤480px
- [X] T039 [P] [US3] Per-section layout and rhythm across all six components — generous whitespace, strong hierarchy, readable measure capped on wide viewports
- [X] T040 [US3] Audit against FR-018 avoid-list (SaaS hero clichés, gradient overload, particles, stock photos, logo walls, card overload, animation overload, generic-portfolio patterns); remove any occurrence
- [X] T041 [US3] Ran `ux-design-reviewer` subagent. Findings resolved: personal aside re-attached to "How I Think" (tighter grid track + sticky + capped measure); hero role line promoted from mono caption to a legible subheading; system-diagram edges thinned to a hub-and-ring that matches `diagramAltText`; philosophy grid switched to `auto-fit` (no 3-col cramp at ~768px); diagram reveal range adjusted so an in-view figure never paints pre-reveal; `role="list"` added to the de-styled `ul`/`ol` for VoiceOver. `<dl>` for the three pillars kept (reviewer: defensible).
- [ ] T042 [US3] Validate US3: independent designer + hiring reviewer confirm restraint and zero avoid-list patterns (SC-009)

**Checkpoint**: US1–US3 complete; the page looks the part.

---

## Phase 6: User Story 4 — Accessible and fast for every visitor (Priority: P2)

**Goal**: Keyboard-operable, screen-reader-sound, responsive 320–2560px, fast, fully
functional with JavaScript disabled and under reduced-motion.

**Independent Test**: Keyboard-only navigation with visible focus throughout; no horizontal
scroll at any width 320–2560px; JS disabled and throttled connection — all content and both
CTAs available and readable.

- [X] T043 [P] [US4] Diagram reveal implemented **CSS-only** (no `src/lib/reveal.ts`, no `<script>`) — a subtle one-time fade on the SVG via a `view()` scroll timeline in `SystemDiagram.astro`, guarded by `@supports (animation-timeline: view())` + `@media (prefers-reduced-motion: no-preference)`, `animation-range: entry 20% entry 95%` so an already-visible figure shows finished. Removes the last client JS; the IntersectionObserver approach left an empty hole in any non-scrolling render. Deviation from the R4 sketch, consistent with Constitution II (CSS-first motion, least code).
- [X] T044 [P] [US4] CSS reveal + reduced-motion: default (unsupported/no-JS) state is the final diagram; `@media (prefers-reduced-motion: reduce)` and the global reduced-motion guard suppress the reveal and all decorative transitions; verified `animation-name: none` and node opacity 1 under reduced motion (FR-005a, FR-019, SC-007)
- [X] T045 [P] [US4] Focus states: logical DOM/tab order, visible `:focus-visible` indicator on every interactive element (SC-004)
- [X] T046 [P] [US4] Responsive pass: fluid layout with `clamp()`; verify no horizontal scroll and legible text at 320, 375, 768, 1024, 1366, 1920, 2560px; diagram collapses cleanly (SC-005)
- [X] T047 [P] [US4] Add `@media print` block — readable text, discernible link destinations, no ink-heavy dark fill
- [X] T048 [US4] Semantic-HTML audit: exactly one `<h1>`, correct heading hierarchy, every `<section>` `aria-labelledby`, `<main>` landmark, SVG text alternative present (FR-015, FR-027)
- [X] T049 [US4] No-JS + throttled verification: disable JS and throttle — all six sections, all copy, the "Let's talk" CTA work; text paints before font swap and SVG (FR-020, SC-006)
- [X] T050 [US4] Lighthouse (throttled mobile): Performance/Accessibility/Best-Practices/SEO ≥95; confirm JS < 5 KB and transfer < 150 KB excluding OG image
- [X] T051 [US4] Validate US4: keyboard-only pass, 320–2560 sweep, JS-disabled pass, reduced-motion pass (US4 scenarios 1–4, SC-007)

**Checkpoint**: US1–US4 complete; the page is robust everywhere.

---

## Phase 7: User Story 5 — Discoverable and shareable (Priority: P2)

**Goal**: Correct title/description, Open Graph + Twitter previews, JSON-LD Person, one `<h1>`.

**Independent Test**: View source — title and description match the contract exactly; OG and
Twitter tags present with an absolute image URL; one JSON-LD Person block; pasting the URL in
a social composer and a messaging app yields a rich preview.

- [X] T052 [US5] Create `src/components/SEO.astro` — verbatim `<title>` and `<meta name="description">` from metadata-contract.md, `<link rel="canonical">`, viewport, `color-scheme: dark`
- [X] T053 [US5] Add Open Graph + Twitter card tags to `SEO.astro`, image as absolute URL built from `profile.siteUrl` + `profile.ogImage`, `og:type=profile`, `og:image:width/height` 1200/630
- [X] T054 [US5] Add JSON-LD `Person` block to `SEO.astro` per metadata-contract.md — `sameAs: [profile.linkedInUrl]`, **no `email` property** (FR-012a), no unverified facts (no `worksFor`, dates, awards); `sameAs` omitted only in the non-deployable unset state
- [X] T055 [P] [US5] Add `public/favicon.svg` and `public/og-image.png` (1200×630 placeholder, swappable later with no markup change)
- [X] T056 [US5] Wire `SEO.astro` into `Base.astro` `<head>`; set real `site` in `astro.config.mjs` and `profile.siteUrl` to match
- [X] T057 [US5] Conditional analytics in `SEO.astro` — single `<script defer src="https://plausible.io/js/script.js" data-domain>` emitted only when `import.meta.env.PROD && import.meta.env.PUBLIC_ANALYTICS_DOMAIN`; document the env var in README
- [X] T058 [US5] Validate US5: view-source matches metadata-contract.md; social + messaging preview render; exactly one `<h1>`; JSON-LD validates (US5 scenarios 1–4, SC-008)
- [X] T058a [US5] Validate analytics resilience: a `PROD` build with `PUBLIC_ANALYTICS_DOMAIN` set emits exactly one deferred Plausible `<script>` and no other third-party request, sets no cookies/`localStorage`, and shows no consent UI; block that request in DevTools and confirm the page is visually, functionally, and timing-wise identical and reaches a readable state no later than with it present (FR-025, FR-025a, SC-014)

**Checkpoint**: US1–US5 complete.

---

## Phase 8: User Story 6 — Content stays editable without redesign (Priority: P3)

**Goal**: Positioning, principles, evidence (1–4), personal thread, and the LinkedIn URL are
all editable by changing `src/data/*.ts` only; missing content degrades gracefully.

**Independent Test**: Change an evidence example, a principle, and the LinkedIn URL by editing
data only, rebuild — all three appear with no layout code touched; set evidence to 1, 2, 3, 4
items and each rebuild produces a balanced section.

- [X] T059 [US6] `src/components/Evidence.astro` — confirm/finish a layout that stays balanced and intentional at 1, 2, 3, and 4 items; rebuild at each count; no invented padding, never empty (SC-013)
- [X] T060 [US6] Single-source audit: confirm no visitor-facing string or the LinkedIn URL is duplicated in components — every editable value resolves to exactly one `src/data/*.ts` field (FR-022)
- [X] T061 [US6] Confirm the build-time guards from T015 cover principle/evidence/philosophy counts and `linkedInUrl` format/absence; add any missing
- [X] T062 [US6] Validate US6: edit one evidence item + one principle + the LinkedIn URL in data, rebuild, verify propagation (CTA ×2 + JSON-LD) with zero markup/layout changes; test evidence counts 1–4 (US6 scenarios 1–3, SC-011)

**Checkpoint**: All six user stories independently functional.

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Whole-page verification and project hygiene.

- [X] T063 [P] Ran `content-integrity-reviewer` subagent. No blocking findings. Fixes applied: "regulated fintech platform" → "regulated lending platform" (fintech not in source); hero supporting statement re-scoped to "engineering, product and people leadership" (matches the résumé's 20-year attribution) and "now spent" → "now focused"; personal-aside lead "works on the people" → "works for the people". Verified: every claim traces to the résumé / spec Factual Source Material; present-tense throughout (FR-003); AI framed as operating-model change (FR-008); no employer name, no dated timeline, no CV structure (FR-023); only the confirmed UX/design interest renders; draft markers present; UK English; ~650–700-word narrative.
- [X] T064 [P] Ran `simplicity-reviewer` subagent. Applied: removed dead CSS (`--radius-lg`, `--bg-raised`, unused `.visually-hidden` + its `@layer`); collapsed the duplicated conjunction-join into `Intl.ListFormat`; dropped `profile.siteUrl` — `SEO.astro` now reads the canonical origin from `Astro.site` (one source, FR-022). Waived with reason: (1) analytics is spec-mandated (FR-025, clarification), not speculative — it is fully gated and absent by default; (2) the `positioning`/`roleLine` `{ text, status }` draft shape is mandated by data-model.md and FR-004 and verified by content review; (3) `SystemDiagram` stays data-driven from `disciplines.ts` per T021 (the connected-graph guarantee lives in the data); (4) `.mcp.json` Playwright is mandated by T005a and was used for this review round. `assert-no-email.mjs`, `guards.ts`, the six once-used section components and the inlined CTA confirmed already-minimal.
- [X] T065 Run the full `quickstart.md` acceptance checklist (all 13 checks) and record results
- [X] T066 Confirm `npm run check` and `npm run build` are clean; `dist/` is portable static with no adapter/host config
- [X] T067 [P] Add `README.md` (setup, dev/build/check/format commands, `PUBLIC_ANALYTICS_DOMAIN` note) and replace the "Status: greenfield" / build sections of `CLAUDE.md` with the real commands
- [X] T068 Final copy proofread across `src/data/*.ts` — UK English, no competency jargon, < 3-minute read, FR-003 and FR-008 honoured

---

## Dependencies & Execution Order

### Phase dependencies

- **Setup (Phase 1)**: no dependencies.
- **Foundational (Phase 2)**: depends on Setup. **Blocks all user stories.**
- **US1 (Phase 3)**: depends on Foundational. MVP.
- **US2 (Phase 4)**: depends on Foundational; edits `Hero.astro`/`Closing.astro` created in US1, so runs after T020/T027 (practically after US1).
- **US3 (Phase 5)**: depends on Foundational + the components existing (US1). Independent of US2.
- **US4 (Phase 6)**: depends on Foundational + components (US1). `reveal.ts` pairs with `SystemDiagram`/`Intersection` from US1. Independent of US2/US3/US5.
- **US5 (Phase 7)**: depends on Foundational + `Base.astro` (Phase 2). Largely independent — only needs `profile.ts`.
- **US6 (Phase 8)**: depends on Foundational + `Evidence.astro` (US1).
- **Polish (Phase 9)**: after all targeted stories.

### Story independence

- US5 is the most independent (only `Base.astro` + `profile.ts`); it could be built right
  after Phase 2.
- US2, US3, US4, US6 all touch components introduced in US1, so US1 is the practical
  prerequisite for them even though each is tested independently.
- No story depends on another story's _tests_ passing.

### Within a story

- Component files marked [P] are independent (different files) and can be built in parallel.
- The `index.astro` composition task depends on its component tasks.
- Validation task is last in each phase.

---

## Parallel Opportunities

- **Setup**: T003, T004, T005 in parallel after T001/T002.
- **Foundational**: T009–T014 (six data modules) in parallel after T008; T016 and T017
  (styles) in parallel with the data modules.
- **US1**: T020–T027 (eight components) in parallel; then T028 composition, T029 copy, T030
  validation.
- **US4**: T043–T047 in parallel (script, CSS, focus, responsive, print — mostly different
  files).
- **US5**: T055 (assets) parallel with T052–T054 (SEO component); T058 and T058a are independent validation passes.
- **Polish**: T063, T064, T067 in parallel.

The Playwright MCP browser (T005a) is the tool for the browser-observed validation tasks —
T030 (hero above the fold at 1366×768), T035 (no email in DOM, JS-disabled link), T046
(320–2560px no-scroll sweep), T049 (no-JS render), T051 (keyboard order, reduced-motion),
T058a (analytics request blocked vs. present), and the T065 checklist run. Lighthouse (T050,
SC-006) is still run from Chrome DevTools / CLI, not the MCP server.

### Parallel example — Foundational data modules

```text
Task: "Create src/data/profile.ts per data-model.md"
Task: "Create src/data/disciplines.ts per data-model.md"
Task: "Create src/data/principles.ts per data-model.md"
Task: "Create src/data/evidence.ts per data-model.md"
Task: "Create src/data/philosophy.ts per data-model.md"
Task: "Create src/data/personal.ts per data-model.md"
```

### Parallel example — User Story 1 components

```text
Task: "Create src/components/Hero.astro"
Task: "Create src/components/SystemDiagram.astro"
Task: "Create src/components/Intersection.astro"
Task: "Create src/components/Principles.astro"
Task: "Create src/components/PersonalAside.astro"
Task: "Create src/components/Evidence.astro"
Task: "Create src/components/Philosophy.astro"
Task: "Create src/components/Closing.astro"
```

---

## Implementation Strategy

### MVP first (US1 only)

1. Phase 1 Setup → 2. Phase 2 Foundational → 3. Phase 3 US1 → 4. **STOP and validate** the
   argument reads in 60–90s and the page is coherent → 5. demo.

### Incremental delivery

Foundational → US1 (MVP: the argument) → US2 (contact works) → US3 (design restraint) →
US4 (accessible + fast) → US5 (shareable) → US6 (editability hardened) → Polish. Each phase
leaves the page shippable.

### Recommended cut lines

- **Thin MVP**: Phases 1–4 (argument + working contact). Everything a reader needs to act.
- **Launch-ready**: Phases 1–7 + Polish. US6 (Phase 8) mostly formalises guarantees the data
  model already provides and can trail launch.

---

## Notes

- `[P]` = different files, no dependency on incomplete work.
- Every task names a concrete file path.
- No committed test suite by design — `astro check` + `astro build` + `quickstart.md` + the
  three review subagents are the quality gates (research.md R8). The `quickstart.md`
  browser checks are executed via the Playwright MCP server (T005a, research.md R11), which
  adds nothing to `package.json` and no CI surface.
- Launch blockers owned by Lee (LinkedIn URL — **hard**, the only contact route; positioning
  sign-off; evidence review; personal-thread confirmation; OG image) are tracked in spec.md
  §Dependencies — not tasks here. The build ships with marked drafts and a placeholder CTA
  until the LinkedIn URL lands, but MUST NOT be deployed without it (no fallback contact).
- Commit after each task or logical group; the repo still needs `git init` before the first
  commit (CLAUDE.md).
