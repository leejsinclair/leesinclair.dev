# Phase 0 Research: Essay Publishing

No `NEEDS CLARIFICATION` markers remained after `/speckit.specify` or in this plan's Technical
Context, so this phase records the technical decisions made and the alternatives rejected,
rather than resolving open unknowns.

## Decision: Content mechanism — Astro content collections (Markdown), not typed TS data

- **Decision**: Store essay bodies as Markdown files with frontmatter, validated by a Zod
  schema in `src/content.config.ts`, using Astro's built-in `astro:content` module.
- **Rationale**: The constitution's Stack constraint explicitly allows "Markdown/MDX or typed
  data files." Every essay so far (Athena) is prose with headings, lists, emphasis, and a
  references list — exactly what Markdown renders natively. Content collections are part of
  Astro core (no new dependency, satisfying Principle I), and the Zod schema gives the
  build-time validation FR-008 requires "consistent with the project's existing `guards.ts`
  pattern" without hand-rolling that validation.
- **Alternatives considered**:
  - **Typed TS data file, essay body as a plain string or array of typed blocks** (the
    pattern every other `src/data/*.ts` module uses). Rejected: representing headings, nested
    lists, and emphasis as a hand-rolled block-array type would require a bespoke renderer
    component — more code than reusing Astro's Markdown pipeline, for less capability, and it
    fights the grain of how the source article is actually structured (Markdown-shaped prose
    with a references list).
  - **MDX** (via `@astrojs/mdx`). Rejected: the article needs no embedded interactive
    components; MDX would add a real dependency for a capability (JSX-in-content) this essay
    never uses, violating Principle II's "each runtime dependency MUST be load-bearing."

## Decision: Routing — one dynamic `[pillar]/[slug].astro` route, not per-pillar routes

- **Decision**: A single dynamic route file generates static paths for every essay in the
  collection, keyed by `(pillar, slug)`, using `getStaticPaths()`.
- **Rationale**: FR-006 and SC-003 require the mechanism to serve Myths, History, and
  Leadership without new template code per pillar. A single route file is the direct
  implementation of that requirement.
- **Alternatives considered**:
  - **Separate route per pillar** (`src/pages/myths/[slug].astro`,
    `src/pages/history/[slug].astro`, …). Rejected: three files with identical logic fails
    Principle II ("least code") the moment a second essay is added, and duplicates the
    template drift risk the spec's User Story 2 is explicitly testing against.
  - **One hard-coded page for the Athena essay only** (e.g. `src/pages/myths/athena.astro`).
    Rejected: satisfies User Story 1 alone but fails User Story 2 and FR-006 entirely — it is
    not a "mechanism," it is a one-off, and the spec explicitly asks for reusability.

## Decision: Page chrome — reuse `Base.astro`, no new layout primitives

- **Decision**: The essay page uses the existing `src/layouts/Base.astro` for `<head>`/SEO,
  plus the existing `SiteNav`/footer treatment, styled with the existing design tokens.
- **Rationale**: Constitution V (Restraint) and the "no new visual language" bar; the site
  already has one dark-mode typographic system, and essay prose is exactly what that system
  needs to render well (it already sets heading hierarchy and readable line-length rules).
- **Alternatives considered**: A dedicated "article" visual theme distinct from the homepage.
  Rejected: no requirement calls for it, and it would introduce a second design language for
  a single site (Constitution V).
