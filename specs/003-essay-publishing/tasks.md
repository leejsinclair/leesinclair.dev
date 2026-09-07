---
description: "Task list for feature implementation"
---

# Tasks: Essay Publishing

**Input**: Design documents from `/specs/003-essay-publishing/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/essay-content-contract.md, quickstart.md

**Tests**: Not requested in the spec. This project has no test runner beyond `astro check` /
`astro build` (which double as the schema-validation gate) and manual acceptance passes
against quickstart.md — verification tasks below point at specific quickstart sections
instead of a separate test suite.

**Organization**: Tasks are grouped by user story (spec.md) to allow independent
implementation and testing of each.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependency on an incomplete task)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)

## Phase 1: Setup

- [X] T001 Define the `essays` content collection in `src/content.config.ts`: a Zod schema
      with `title` (non-empty string), `pillar` (enum `"myths" | "history" | "leadership"`),
      `slug` (string matching `^[a-z0-9-]+$`), `dek` (non-empty string), and `references`
      (optional array of `{ text: string }`, non-empty strings). See
      `contracts/essay-content-contract.md` for the exact shape.

## Phase 2: Foundational (blocking prerequisite for all user stories)

- [X] T002 Implement the dynamic essay route `src/pages/[pillar]/[slug].astro`:
  - `getStaticPaths()` iterates the `essays` collection, grouping by `(pillar, slug)`; throw a
    build-time error naming both files if any pair collides (the "slug collision" edge case in
    spec.md).
  - Render through the existing `src/layouts/Base.astro` (so `<head>`/SEO and `SiteNav` are
    shared with every other page).
  - Emit exactly one `<h1>` from `title`, the `dek` as a standfirst, the rendered Markdown
    body (via `render(entry)` / `<Content />`), and — only when `references` is present and
    non-empty — a "References" section listing each `references[].text` in order.
  - Include a visible link back to the homepage (`/`), independent of `SiteNav`'s own
    home link (FR-005).
  - Add scoped `<style>` rules for the essay body: restore list bullets/indent that
    `src/styles/global.css`'s `:where(ul, ol) { list-style: none; padding: 0; }` reset
    strips, and constrain prose to the existing `.measure` line-length token so it reads
    consistently with the rest of the site.
  - No client-side script — must render fully with JavaScript disabled (FR-009).

**Checkpoint**: `npm run check` passes with the route in place, even with zero essay content
files yet (an empty collection is valid).

## Phase 3: User Story 1 - Read a full essay from the homepage (Priority: P1) 🎯 MVP

**Goal**: A visitor can click through from the homepage Myths section and read the complete
Athena essay, including its references, on its own page.

**Independent Test**: Load the homepage, open the Myths section, follow the Athena card, and
confirm the full essay text and references render with no truncation or placeholder text.

- [X] T003 [P] [US1] Author `src/content/essays/athena.md`: frontmatter with
      `title: "Athena: From Ancient Goddess to Divine Intelligence of the Polis"`,
      `pillar: myths`, `slug: athena`, a one-sentence `dek` summarising the essay's thesis, and
      a `references` array with one `{ text: ... }` entry per citation in the supplied
      article's References list (Beekes 2010 through Ventris & Chadwick 1973). Body: the full
      Markdown text of the supplied article from "Athena is among the most recognizable
      figures..." through "...mirrored the exact capabilities required for the Greek polis to
      flourish," using `##`/`###` for the existing section/sub-section headings (no top-level
      `#`, since the route supplies the `<h1>` from `title`), preserving the bulleted list in
      "Linguistic Roots: Indo-European vs. Pre-Greek" and all italicised terms (*mētis*,
      *technē*, etc.).
- [X] T004 [P] [US1] In `src/data/editorial.ts`, update the `myths-archetypes` card in
      `mythsSection.cards`: change `href` from `"#archive"` to `/myths/athena`, and revise
      `title`/`description`/`linkLabel` so the card describes the real Athena essay rather
      than the "Scaffold space for essays on..." placeholder wording.
- [X] T005 [US1] Run `npm run check` and `npm run build`, then follow quickstart.md Section 2:
      confirm the Myths card links to `/myths/athena`, the full essay and its complete
      references list render with no truncation, and the back-to-homepage link works.

**Checkpoint**: User Story 1 is independently functional — this alone is a shippable MVP.

---

## Phase 4: User Story 2 - Publish a new essay without touching shared templates (Priority: P2)

**Goal**: Confirm the mechanism built in Phase 2 generalises to other pillars and enforces its
schema, without any template changes.

**Independent Test**: Add a second essay under a different pillar and confirm it renders via
the same template with zero `.astro` changes; confirm a malformed essay fails the build.

- [X] T006 [P] [US2] Follow quickstart.md Section 5: add a throwaway
      `src/content/essays/test-history-essay.md` (pillar `history`), run `npm run build`,
      confirm a page exists at `/history/test-essay/` with no `.astro` file changes, then
      delete the throwaway file.
- [X] T007 [P] [US2] Follow quickstart.md Section 1: temporarily remove a required frontmatter
      field (e.g. `title`) from `src/content/essays/athena.md`, run `npm run build`, confirm
      it fails with a schema error naming the file, then restore the field.

**Checkpoint**: User Stories 1 and 2 both function independently.

---

## Phase 5: User Story 3 - Arrive directly at an essay via a shared link (Priority: P3)

**Goal**: Confirm the essay page stands on its own for a visitor who never touches the
homepage.

**Independent Test**: Load the essay URL directly in a fresh session and confirm full site
identity and full content with JavaScript disabled.

- [X] T008 [US3] Follow quickstart.md Sections 3 and 4: load `/myths/athena` directly in a
      fresh browser tab and confirm the same navigation/header/styling as the rest of the
      site; then confirm (via disabled JS or `curl`) that the full essay text and references
      are present in the raw HTML with no client-side rendering required.

**Checkpoint**: All three user stories function independently.

---

## Phase 6: Polish & Cross-Cutting Concerns

- [X] T009 [P] Run the `ux-design-reviewer`, `simplicity-reviewer`, and
      `content-integrity-reviewer` subagents against the new route, styles, and essay content
      per the constitution's Development Workflow gate; resolve or explicitly record any
      waived findings.
- [X] T010 [P] Manual accessibility pass per quickstart.md's final section: keyboard-only tab
      order and focus visibility on the essay page, no horizontal scroll from 320px–2560px,
      and `prefers-reduced-motion` produces no regression.
- [X] T011 [P] Update `README.md`'s Content table to add a row documenting
      `src/content/essays/` alongside the existing `src/data/` table, since essay content is
      now part of the visitor-facing content model.

## Dependencies

- **Phase 1 (T001)** blocks **Phase 2 (T002)** — the route needs the collection schema to
  exist.
- **Phase 2 (T002)** blocks all of Phases 3–5 — no essay page exists until the route does.
- **T003** and **T004** (Phase 3) are independent of each other (different files) but both
  depend on T002; **T005** depends on both.
- **Phase 4 (T006, T007)**: T006 depends only on Phase 2 (T002). T007 depends on T003 (needs
  `athena.md` to exist to remove/restore a field from it).
- **Phase 5 (T008)** depends on Phase 3 being complete (needs a real, published essay to load
  directly).
- **Phase 6** depends on Phases 3–5 being complete.

## Parallel Example: Phase 3

```text
T003 [P] [US1] Author src/content/essays/athena.md
T004 [P] [US1] Update the myths-archetypes card in src/data/editorial.ts
# then, sequentially once both land:
T005 [US1] Build + quickstart Section 2 verification
```

## Implementation Strategy

**MVP = User Story 1** (Phases 1–3, tasks T001–T005): this alone publishes the real, readable
Athena essay linked from the homepage, satisfying the feature's primary purpose. Phases 4–5
(T006–T008) are verification that the mechanism is genuinely reusable and link-shareable, not
additional shipped content — they can follow immediately after the MVP checkpoint since they
touch no new production code beyond what Phase 2 already built. Phase 6 closes out the
project's standard Definition of Done.
