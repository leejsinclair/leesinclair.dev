# Implementation Plan: Essay Publishing

**Branch**: `003-essay-publishing` | **Date**: 2026-09-07 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/003-essay-publishing/spec.md`

## Summary

Publish long-form essays as real, dedicated pages instead of homepage scaffold placeholders.
Use Astro's built-in content collections (no new dependency) to hold essay content as
Markdown with a typed frontmatter schema (title, pillar, slug, dek, references), and a single
dynamic route (`src/pages/[pillar]/[slug].astro`) that renders any essay in any of the three
pillars through one shared template. Ship one real essay — "Athena: From Ancient Goddess to
Divine Intelligence of the Polis" — under the Myths pillar, and repoint the existing
`myths-archetypes` scaffold card in `src/data/editorial.ts` at it.

## Technical Context

**Language/Version**: TypeScript (strict), Astro 7.2

**Primary Dependencies**: Astro content collections (`astro:content`, built into Astro core —
no new package). No MDX integration: plain Markdown covers headings, lists, emphasis, and a
references list, which is all this essay needs.

**Storage**: Filesystem — Markdown files under `src/content/essays/`, validated at build time
by a Zod schema declared in `src/content.config.ts`.

**Testing**: `astro check` (existing `npm run check` gate) for type/template diagnostics;
`astro build` (existing `npm run build` gate) fails on schema-invalid frontmatter, satisfying
FR-008. Manual acceptance pass against spec.md's acceptance scenarios (documented in
quickstart.md) — the project has no other test runner.

**Target Platform**: Static site, portable output to `dist/`, no host adapter (unchanged).

**Project Type**: Single Astro project (unchanged) — no frontend/backend split.

**Performance Goals**: N/A beyond the site's existing static-output baseline; no client JS is
added.

**Constraints**: Zero client-side JavaScript for reading an essay (Constitution II, III;
FR-009). Every essay page carries its own single `<h1>` and correct heading hierarchy
(Constitution III, as clarified in v1.1.0).

**Scale/Scope**: One real essay at launch; mechanism must generalise to History and Leadership
pillars with zero template changes (FR-006, SC-003).

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

Checked against Constitution v1.1.0 (amended this session to unblock this feature — see
`.specify/memory/constitution.md` Sync Impact Report).

- **I. Modern, Minimal Stack** — PASS. Content collections are core Astro, not a new
  dependency. Output stays static, no adapter. Content is Markdown, as the constitution's
  Stack constraint explicitly allows.
- **II. Least Code That Does the Job** — PASS. One dynamic route template serves all three
  pillars (no per-pillar template). The "three concrete call sites" bar for abstraction is
  satisfied by the spec's explicit requirement that Myths, History, and Leadership all use
  the same mechanism (FR-006) — this is a required generalisation, not a premature one.
- **III. Accessible and Resilient by Default** — PASS, carried as an explicit design
  constraint: single `<h1>` per essay page, semantic heading hierarchy from Markdown
  headings, no JS required to read, keyboard/focus behaviour inherited from the shared
  `Base.astro` layout already in use.
- **IV. Factual Integrity — Invent Nothing** — PASS. The essay is scholarly content
  (mythology/history) with its own citations, not a claim about Lee; nothing here asserts an
  unsupported fact about Lee's career.
- **V. Restraint in Design and Copy** — PASS. Essay page reuses the existing dark-mode design
  tokens and typographic system (`src/styles/tokens.css`, `global.css`); no new visual
  language introduced.
- **VI. Spec-Driven Change** — PASS. This feature is going through the full
  specify → plan → tasks → implement cycle. The scope conflict this feature exposed was
  resolved by amending the constitution (v1.0.0 → v1.1.0) rather than working around it.

No violations requiring the Complexity Tracking table.

**Post-Phase 1 re-check**: design artifacts (data-model.md, contracts/, quickstart.md)
introduce nothing that changes the above — still zero new dependencies, one shared route
template, no new visual language. One implementation detail to carry into tasks.md: the
site's global CSS reset strips list bullets/indent (`src/styles/global.css`'s
`:where(ul, ol) { list-style: none; padding: 0; }`), so the essay page's scoped styles must
explicitly restore list styling for the essay body's bulleted lists — otherwise the "Linguistic
Roots" section's list would render as unmarked, unindented paragraphs. This is a template
detail, not a principle violation.

## Project Structure

### Documentation (this feature)

```text
specs/003-essay-publishing/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit-tasks — not created by this command)
```

### Source Code (repository root)

**Structure Decision**: Single Astro project (existing structure, no new top-level
directories beyond `src/content/`).

```text
src/
├── content.config.ts          # NEW — defines the `essays` content collection + Zod schema
├── content/
│   └── essays/
│       └── athena.md           # NEW — the Athena essay (frontmatter + Markdown body)
├── pages/
│   ├── index.astro             # EXISTING — unchanged except no direct essay content
│   └── [pillar]/
│       └── [slug].astro        # NEW — dynamic essay page, shared by all pillars
├── layouts/
│   └── Base.astro              # EXISTING — reused by the new essay page (nav/footer/SEO)
├── data/
│   └── editorial.ts             # MODIFIED — myths-archetypes card links to the real essay
└── styles/                      # EXISTING — reused, no new tokens
```
