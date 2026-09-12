# Quickstart: Essay Publishing

Validates the feature end-to-end against spec.md's acceptance scenarios. Run after
`/speckit.implement` completes the tasks in `tasks.md`.

## Prerequisites

- `npm install` already run.
- On branch `003-essay-publishing` (or wherever the implementation landed).

## 1. Build-time validation (FR-008, User Story 2 scenario 2)

```bash
npm run check   # astro check — no type/template errors
npm run build   # astro build — content schema validated, no-email guard still passes
```

Expected: both commands exit 0. The Athena essay and its frontmatter pass schema validation.

To confirm the guard actually fires, temporarily remove a required frontmatter field (e.g.
`title`) from `src/content/essays/athena.md`, re-run `npm run build`, confirm it fails with a
schema error naming the file, then restore the field.

## 2. Read the essay from the homepage (User Story 1)

```bash
npm run dev
```

- Open `http://localhost:4321/`.
- Navigate to the Myths section (`#myths`).
- Confirm the essay card now reads as a real essay (not "scaffold") and links to
  `/myths/athena`.
- Click through. Confirm the full essay — every section from "An Ancient Athena" through
  "Conclusion and Working Model", plus the complete References list — renders with no
  truncation (SC-001, SC-002).
- Confirm a link back to the homepage is visible on the essay page (FR-005) and works.

## 3. Direct link / no-homepage entry (User Story 3)

- Open `http://localhost:4321/myths/athena` directly in a fresh tab (not via the homepage).
- Confirm the same site navigation, header, and styling appear as on any other page.

## 4. JavaScript-disabled path (FR-009, SC-004, Constitution III)

- Disable JavaScript in the browser (or use a text-only fetch:
  `curl -s http://localhost:4321/myths/athena | less`).
- Confirm the full essay text and references are present in the raw HTML response — nothing
  depends on client-side rendering.

## 5. Reusability check (User Story 2, SC-003)

Add a second, throwaway essay to prove no template changes are needed:

```bash
cat > src/content/essays/test-history-essay.md <<'EOF'
---
title: "Test Essay"
pillar: history
slug: test-essay
dek: "A throwaway entry to confirm the mechanism generalises."
---
## A section

Some body text.
EOF
npm run build
```

Expected: the build succeeds and a page exists at `/history/test-essay/` with no changes to
any `.astro` file. Delete the test file afterwards — it is not part of the shipped content.

## Manual accessibility pass (Constitution III, part of Definition of Done)

- Keyboard-only: tab through the essay page's nav, back-to-homepage link, and any in-body
  links; confirm a visible focus indicator at each stop.
- Resize the viewport from 320px to 2560px; confirm no horizontal scroll.
- Enable `prefers-reduced-motion`; confirm no motion-dependent content is hidden (the essay
  page has no motion to begin with, so this should be trivially true — verifying it stays
  true).
