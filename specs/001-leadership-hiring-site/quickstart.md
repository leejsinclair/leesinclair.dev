# Quickstart: Build and Verify

How to bring the project up and confirm it meets the spec. Implementation detail (component
bodies, CSS, copy) belongs in `tasks.md` / the implementation phase — this is the run and
acceptance guide.

## Prerequisites

- Node.js 20 LTS or newer, npm.
- Repo checked out at `/home/lee/Projects/personal-website`.
- Playwright MCP server configured (`.mcp.json`, committed) with Chromium installed
  (`npx playwright install chromium`) — the agent uses it to run the browser checks below
  (research.md R11).

## First-time setup

The repo is greenfield (no `package.json` yet). Bootstrap Astro **in place**:

```bash
npm create astro@latest -- --template minimal --typescript strict --no-install --no-git .
npm install
npm install -D prettier prettier-plugin-astro
```

Then align with this plan:

- `astro.config.mjs`: `output: 'static'`, `site: '<canonical URL>'`, no adapter, no integrations.
- `package.json` scripts: `dev`, `build`, `preview`, `check` → `astro check`, `format` → `prettier --write .`.
- `.prettierrc`: `{ "plugins": ["prettier-plugin-astro"] }`.
- Create the `src/data/`, `src/styles/`, `src/lib/`, `src/components/`, `src/layouts/` trees
  from `plan.md` and `data-model.md`.

## Everyday commands

```bash
npm run dev      # local dev server
npm run check    # astro check — TypeScript + template diagnostics (blocking gate)
npm run build    # astro build — static output to dist/ (blocking gate)
npm run preview  # serve dist/ locally
npm run format   # prettier
```

`verify.sh` runs `check` and `build` before a session ends and blocks on failure.

## Acceptance verification

Run every check below against `npm run preview` (production build). Each maps to spec
Success Criteria / User Stories. Checks 2–7, 9, 11, and 13 are performed through the
Playwright MCP browser (viewport sizing, `prefers-reduced-motion` / JS-disabled emulation,
request blocking, DOM and source inspection, screenshots); checks 1, 8, 10, and 12 stay
human / subagent / DevTools-Lighthouse work.

### 1. The 60–90 second argument (US1, SC-001, SC-003)

- Open the page cold. Within ~90s a reader can state: Lee's current role type, his
  differentiator (technical depth + systems thinking + people leadership), and how to contact
  him. Ideally dry-run with 5 people from the target audience; ≥4 correct passes.
- Read the full six-section narrative aloud — under 3 minutes.
- Copy nowhere implies Lee has left engineering (FR-003).

### 2. Hero above the fold (SC-002)

- At exactly 1366×768, no scrolling: name, role line, positioning line, one supporting
  sentence, the "Let's talk" CTA all visible.

### 3. Contact path (US2, SC-015)

- "Let's talk" (Hero and Closing) opens Lee's LinkedIn profile in a new tab; both instances
  resolve from the one `profile.linkedInUrl` value.
- View source + rendered DOM: **no** email address, `mailto:` link, obfuscated email, or
  email field in the JSON-LD anywhere (`grep -ri 'mailto\|@gmail\|@.*\.com' dist/` is clean of
  contact addresses).
- Rebuild with `linkedInUrl` unset → CTA shows a clearly marked non-interactive placeholder,
  build logs a `console.warn`, no broken link; note the build is **not deployable** in this
  state (FR-013).

### 4. Keyboard only (SC-004)

- Tab through the whole page: every CTA reachable in logical order, each with a clearly
  visible focus indicator. No keyboard trap.

### 5. No JavaScript (FR-020, US4)

- Disable JS, reload. All six sections, all copy, the "Let's talk" CTA work. The system diagram is fully
  visible and legible (just no reveal animation).

### 6. Responsive, no horizontal scroll (SC-005)

- Sweep viewport width 320 → 2560px. No horizontal scrollbar at any width; body text stays
  legible; diagram collapses to its stacked form below ~480px with nothing clipped; line
  length stays readable on wide screens.

### 7. Reduced motion (SC-007)

- Set `prefers-reduced-motion: reduce`. Reload. No reveal animation; diagram renders in final
  state; no other decorative motion plays.

### 8. Performance / resilience (SC-006)

- Lighthouse (throttled, mobile): Performance, Accessibility, Best Practices, SEO ≥ 95.
- On a throttled connection, text is readable before the web font swaps and before the SVG
  paints.
- JS payload < 5 KB; total transfer < 150 KB excluding the OG image.

### 9. Sharing and discoverability (US5, SC-008)

- View source: `<title>` and description exactly match `metadata-contract.md`.
- OG + Twitter tags present with absolute image URL; one JSON-LD `Person` block carrying
  `sameAs: [linkedInUrl]` and **no `email` property** (SC-015).
- Paste the URL into a social composer and a messaging app — rich preview with title,
  description, image.
- Exactly one `<h1>`; heading outline is well-formed.

### 10. Design restraint (US3, SC-009)

- `ux-design-reviewer` subagent: dark near-black/charcoal background, single accent colour,
  subtle borders, generous whitespace, strong hierarchy; **none** of the FR-018 avoid-list
  patterns (SaaS hero clichés, gradients, particles, stock photos, logo walls, card overload,
  animation overload, generic-portfolio patterns).
- The intersection reads as one connected system, not logos or a card grid.

### 11. Evidence count 1–4 (SC-013, US6)

- Temporarily set `evidence.ts` to 1, then 2, then 3, then 4 items; rebuild each time. Layout
  is balanced and intentional at every count; never empty; never padded with invented items.

### 12. Factual integrity (SC-010, Constitution IV)

- `content-integrity-reviewer` subagent: every concrete claim (role, scope, practice,
  technology, outcome) traces to `LSINCLAIR_Resume_TechLead.pdf` or other material Lee
  supplied. Zero invented employers, dates, metrics, team sizes, technologies, outcomes, or
  comparative claims.
- Draft positioning/role lines are still marked draft in source if not yet signed off
  (FR-004).
- AI evidence is framed as operating-model change, not expertise (FR-008).
- The page reads as an argument, not a résumé: no dated timeline, no chronological
  employer list, no CV layout (FR-023).

### 13. Analytics (SC-014, FR-025)

- Production build with `PUBLIC_ANALYTICS_DOMAIN` set: exactly one deferred Plausible script,
  no cookies, no consent banner, no other third-party requests.
- Block the script (DevTools request blocking): page is visually and functionally identical
  and no slower to become readable.

## Definition of done

All 13 checks pass **and** `npm run check` + `npm run build` are clean **and** the
`ux-design-reviewer`, `simplicity-reviewer`, and `content-integrity-reviewer` subagents have
no unresolved blocking findings (or each is explicitly waived with a recorded reason).
