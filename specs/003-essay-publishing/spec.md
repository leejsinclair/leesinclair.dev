# Feature Specification: Essay Publishing

**Feature Branch**: `003-essay-publishing`

**Created**: 2026-09-07

**Status**: Draft

**Input**: User description: "Add an essay/article publishing feature to the site: a minimal content collection for long-form essays under the 'Myths' pillar, and a dynamic article page route so individual essays render as full pages. First essay to publish: 'Athena: From Ancient Goddess to Divine Intelligence of the Polis' (full text supplied by the user, covering Bronze Age Linear B evidence, Homeric literary contrasts with Odysseus/Ares/Hephaestus, the birth myth and Arachne narrative, with a references list). The existing 'Myths' scaffold card in src/data/editorial.ts should link to this real article instead of the '#archive' anchor placeholder. Follow the project's existing typed src/data/ content pattern and Astro conventions; keep the implementation minimal per the project's simplicity principle — this is the first real essay, not a general blog engine, but the underlying mechanism (content collection + article route) should be reusable for future essays in Myths, History, and Leadership sections."

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Read a full essay from the homepage (Priority: P1)

A visitor browsing the homepage reaches the Myths section, sees a card referencing an essay on Athena, and clicks through to read the complete piece — not a placeholder or "coming soon" notice.

**Why this priority**: This is the entire point of the feature. Without a real, readable essay at the end of the link, the Myths pillar remains an empty scaffold and the site delivers no actual editorial content.

**Independent Test**: Can be fully tested by loading the homepage, opening the Myths section, following the Athena card's link, and confirming the complete essay text (all sections and the references list) renders on its own page.

**Acceptance Scenarios**:

1. **Given** a visitor is on the homepage Myths section, **When** they select the Athena essay card, **Then** they land on a dedicated page showing the essay's full title, body, and references.
2. **Given** a visitor is reading the Athena essay page, **When** they finish reading, **Then** they can navigate back to the homepage without using the browser back button.
3. **Given** a visitor has JavaScript disabled, **When** they open the essay page, **Then** the full essay text is still readable.

---

### User Story 2 - Publish a new essay without touching shared templates (Priority: P2)

Lee wants to add a second essay — to Myths, History, or Leadership — later, by supplying structured content, without modifying the page template, layout, or routing code that the first essay uses.

**Why this priority**: The request explicitly asks for a reusable mechanism, not a one-off page, since History and Leadership will need the same treatment. This is what turns a single hard-coded page into a "publishing feature."

**Independent Test**: Can be tested by adding a second essay's content data under a different pillar and confirming it renders at its own page using the same template, with no changes required to shared components.

**Acceptance Scenarios**:

1. **Given** the essay mechanism exists for Myths, **When** a new essay is added under History or Leadership, **Then** it renders correctly using the same page structure with no new template code.
2. **Given** an essay is added with a missing required field (e.g. no title or no body), **When** the site is built, **Then** the build fails with a clear error, consistent with the project's existing content-guard pattern.

---

### User Story 3 - Arrive directly at an essay via a shared link (Priority: P3)

A visitor receives a direct link to the Athena essay (e.g. shared on social media) and opens it without first visiting the homepage.

**Why this priority**: Essays are the kind of content people share directly; the page must stand on its own, not assume the visitor arrived via the homepage.

**Independent Test**: Can be tested by loading the essay's URL directly in a fresh browser session and confirming the page is fully rendered with site identity (navigation, styling) intact.

**Acceptance Scenarios**:

1. **Given** a visitor opens the essay URL directly, **When** the page loads, **Then** it displays the same site navigation and branding as the rest of the site, plus a route back to the homepage.

---

### Edge Cases

- What happens when an essay's body contains long-form structure (multiple heading levels, bulleted lists, italicized terms, a closing references list)? All of it must render legibly, matching the site's existing typographic system.
- What happens when a pillar (History, Leadership) has no published essays yet? Its existing scaffold cards continue to point at their current in-page anchors unchanged; only the Myths card for this essay changes.
- What happens when the same essay content is requested at build time twice (e.g. `astro build` re-runs)? Output must be deterministic — the same URL and content every time.
- What happens if the essay's slug collides with an existing site route? The build must fail loudly rather than silently overwriting a page.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: The system MUST store essay content (title, pillar, slug, body text, references) as structured data, separate from page presentation, following the project's existing typed-content convention.
- **FR-002**: The system MUST render each published essay at its own dedicated, linkable page.
- **FR-003**: The Myths section card that currently links to the `#archive` placeholder MUST instead link to the published Athena essay.
- **FR-004**: The essay page MUST preserve the source article's structure — section headings, sub-sections, bulleted lists, emphasized/italicized terms — and MUST render its references list.
- **FR-005**: The essay page MUST provide a visible way to return to the homepage.
- **FR-006**: The essay-rendering mechanism MUST support essays under any of the three existing pillars (Myths, History, Leadership) without requiring a new template per pillar.
- **FR-007**: The essay page MUST use the same site navigation, footer, and visual styling as the rest of the site.
- **FR-008**: The build MUST fail if an essay is missing a required field (title, pillar, slug, or body), consistent with the project's existing `guards.ts` validation pattern.
- **FR-009**: The essay page MUST be fully readable with no client-side JavaScript required, consistent with the project's near-zero-JS goal.
- **FR-010**: The system MUST publish exactly one real essay in this iteration — "Athena: From Ancient Goddess to Divine Intelligence of the Polis" — under the Myths pillar; other pillar cards remain scaffolds.

### Key Entities

- **Essay**: A long-form piece of writing. Attributes: title, pillar (myths / history / leadership), slug (URL segment), summary/dek, body content (structured text with headings, lists, and emphasis), references list, publish status.
- **Pillar card** (existing entity, `EditorialCard`): A homepage card that, once an essay exists for its topic, links to that essay's page instead of an in-page anchor placeholder.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: A visitor can go from the homepage to reading the complete Athena essay in a single click, with zero placeholder or "coming soon" text encountered along the way.
- **SC-002**: 100% of the supplied essay's content — every section, list, and the full references list — appears on the rendered page with no truncation.
- **SC-003**: A second essay can be published to any of the three pillars by adding content data alone, with zero changes to shared page templates or components.
- **SC-004**: The essay page renders and is fully readable with JavaScript disabled.

## Assumptions

- Only the Athena essay ships as real, published content in this iteration; the History and Leadership pillars, and the other Myths cards, remain scaffolds until future essays are written.
- Essay body content is authored as structured text (headings, paragraphs, lists, emphasis) rather than arbitrary embedded HTML, consistent with the project's typed `src/data/` content model.
- No comments, tags, full-text search, or cross-essay pagination are in scope for this iteration.
- The site remains single-author (Lee Sinclair); essays do not need a byline/author field beyond what the site already establishes.
- Essay URLs are namespaced by pillar (e.g. a `myths/<slug>` path) to keep future History and Leadership essays organized under the same mechanism.
