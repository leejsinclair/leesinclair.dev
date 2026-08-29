# Phase 0 Research: Personal Leadership Website

All decisions below resolve the Technical Context. No `NEEDS CLARIFICATION` markers remain.

## R1 — Framework and build

**Decision**: Astro 5.x, `output: 'static'`, no adapter, no framework integrations. Node 20
LTS+. `tsconfig.json` extends `astro/tsconfigs/strict`.

**Rationale**: Mandated by Constitution I and the project intent. Astro renders to zero-JS
HTML by default, supports scoped component CSS and inline SVG with no extra tooling, and its
content stays plain. Static output with no adapter keeps the deploy target reversible.

**Alternatives considered**: Eleventy (less TypeScript-native, weaker component story);
plain Vite + lit-html (more custom plumbing for no gain); Next.js/SvelteKit (server
runtime and framework weight the spec explicitly rejects).

## R2 — Styling approach

**Decision**: Hand-written modern CSS. Two global files (`tokens.css`, `global.css`) plus
Astro component-scoped `<style>` blocks. Use native nesting, custom properties, `@layer`,
`clamp()` for fluid type/space, container or media queries for the diagram's small-viewport
collapse. No CSS framework.

**Rationale**: The brief suggests "a modern CSS framework"; Constitution I and II outrank the
brief and require any dependency to be load-bearing. A one-page site with ~8 components does
not generate enough surface for Tailwind/UnoCSS to pay for its config, build step, and
class-noise cost. Design tokens in one file give the same consistency guarantee with less
machinery and a cleaner path to a future light theme.

**Alternatives considered**: Tailwind (utility churn, another build integration, works
against the "editorial restraint" of the markup); Open Props (a dependency for what is ~40
lines of custom properties); CSS Modules (Astro already scopes component styles).

**Follow-up**: none. Recorded as a declined brief suggestion in the Constitution Check, not a
deviation.

## R3 — Content model

**Decision**: Typed ES modules under `src/data/`, with all interfaces in `src/data/types.ts`.
Each module default-exports a typed constant (`satisfies` the relevant interface). Evidence is
an array; components derive layout from `array.length` (1–4). `personal.ts` may export `null`.
Not Astro Content Collections.

**Rationale**: Content Collections shine for many markdown files with frontmatter; here there
are six small structured records. Plain typed modules give compile-time checking via
`astro check`, a single obvious edit point per value (FR-022), and zero schema library.
Import graph makes "one authoritative place" enforceable.

**Alternatives considered**: Content Collections + Zod (schema dependency, indirection for six
records); a single JSON file (no type safety, no comments for the draft-status notes); MDX
(overkill — no long-form prose here).

## R4 — System diagram

**Decision**: Hand-authored inline SVG inside `SystemDiagram.astro`, node positions and edges
generated from `disciplines.ts`. `<title>` + `<desc>` elements plus `role="img"` and
`aria-labelledby`; the `<desc>` text comes from `disciplines.ts` so it stays in sync
(FR-027). Default (no-JS) rendered state is the **final, fully visible** diagram. A one-time
reveal is applied only when `src/lib/reveal.ts` adds a `data-revealed` attribute after the
section intersects the viewport; `reveal.ts` early-returns when
`matchMedia('(prefers-reduced-motion: reduce)').matches`. Below ~480px the SVG switches (via
CSS) to a stacked, simplified layout; the text alternative is unchanged.

**Rationale**: Inline SVG needs no library, is stylable by the token set, and is
screen-reader-addressable. Making the default state the finished diagram guarantees FR-020
(no-JS) and the reduced-motion requirement without a separate code path — animation is purely
additive.

**Alternatives considered**: An animation library (GSAP/anime.js — a dependency for one
transition); CSS-only scroll-driven animation via `animation-timeline: view()` (browser
support still uneven in 2026 for the primary audience; JS IntersectionObserver degrades more
predictably); a raster image (fails scaling, theming, and accessibility).

## R5 — Call to action (contact)

**Decision**: One call to action, "Let's talk", is a plain
`<a href="{profile.linkedInUrl}" target="_blank" rel="noopener">`. Rendered inline in
`Hero.astro` and `Closing.astro`, both importing `profile.ts`. **No email address anywhere**
— no `mailto:`, no obfuscated/script-assembled address, no email in the JSON-LD (FR-012a).
`profile.linkedInUrl` is a required value; when it is absent the component renders a clearly
marked, non-interactive placeholder and `profile.ts` calls `console.warn` at build time.
Because LinkedIn is the only contact route, an unset URL means the build is not
deployable (FR-013). No `ContactActions` component until a third call site appears
(Constitution II).

**Rationale**: The user chose LinkedIn-only contact to avoid email-address harvesting by
scrapers. LinkedIn is the natural first-contact channel for the target audience (CTOs,
founders, hiring managers), and a plain anchor needs no backend, works with JS disabled, and
is keyboard-native. Removing the address entirely — rather than obfuscating it — is the only
approach that fully prevents harvesting and keeps the markup honest.

**Trade-off accepted**: readers without a LinkedIn account cannot contact Lee from the site,
and there is no fallback if the URL is wrong. Judged acceptable for this audience; revisit
only if it proves limiting.

**Alternatives considered**: keeping a `mailto:` as a secondary CTA (address still fully
exposed in source); a JS-assembled `mailto:` (fragile, needs JS, still leaks once rendered,
adds an island the constitution would question); a contact form (needs a backend — out of
scope).

## R6 — Analytics

**Decision**: Plausible Analytics hosted script —
`<script defer data-domain="…" src="https://plausible.io/js/script.js">` — injected by
`SEO.astro` only when `import.meta.env.PROD` **and** a `PUBLIC_ANALYTICS_DOMAIN` env var is
set. Cookieless, no consent banner, aggregate page views + referrers only. `defer` keeps it
off the critical path; a load failure has no visible effect (FR-025a, SC-014).

**Rationale**: Meets FR-025 and the constitution's privacy constraint out of the box. Single
`<script>` tag, no npm dependency, removable by unsetting one env var. Provider was left as a
planning decision by the spec.

**Alternatives considered**: GoatCounter and Umami (equally compliant; Plausible chosen for
the smallest script and zero-config hosted option — swappable later by editing one line in
`SEO.astro`); self-hosted analytics (needs a server — out of scope); no analytics (spec
clarification chose to include one).

## R7 — Typography

**Decision**: One self-hosted variable font for display/headings and the wordmark — **Fraunces**
(SIL OFL, variable, optical-size axis) — shipped as a single subset `woff2` in `public/fonts/`,
`font-display: swap`, `<link rel="preload">`. Body text and UI in the system stack
(`-apple-system, "Segoe UI", Roboto, …`). Small technical labels (discipline nodes, captions)
in the system monospace stack (`ui-monospace, "SF Mono", …`).

**Rationale**: A serif display face carries the "editorial / technical notebook" register; a
system body stack keeps payload near zero and text readable before the font loads (SC-006,
Constitution III). One downloaded file, licence-clean, self-hosted (no third-party font CDN,
consistent with the privacy stance).

**Alternatives considered**: All-system (loses the editorial signal the design brief wants);
Google Fonts CDN (third-party request, privacy inconsistency); two self-hosted families (more
weight than the design needs).

**Follow-up**: subset the font to Latin + the punctuation actually used; final family may be
swapped (Newsreader is the fallback candidate) — it is a single `@font-face` + token change.

## R8 — Testing and quality gates

**Decision**: `npm run check` → `astro check`; `npm run build` → `astro build`. Both are wired
into the repo's `verify.sh` Stop hook and block on failure. No unit/integration/e2e framework
and **no test-runner devDependency in `package.json`**. Acceptance is the checklist in
`quickstart.md` (keyboard pass, JS-disabled pass, 320–2560 no-scroll, reduced-motion,
Lighthouse, metadata inspection, evidence-count 1–4 rebuild, fact-check), plus the
`ux-design-reviewer`, `simplicity-reviewer`, and `content-integrity-reviewer` subagents before
"done". The browser-driven checks in that checklist are executed by the agent through the
**Playwright MCP server** (see R11), not by a committed test suite.

**Rationale**: The page has no runtime logic worth unit-testing; `astro check` already covers
type and template correctness. A committed Playwright/axe/pa11y suite would each be a
devDependency and a CI surface the constitution says to justify — the checklist is
proportionate for one static page and is itself the Definition of Done.

**Alternatives considered**: `@axe-core/cli` or `pa11y-ci` (useful but a dependency + a
browser download; revisit only if a11y regressions recur); Lighthouse CI (defer until a
deploy target and CI exist); Vitest (nothing to test); a checked-in `@playwright/test` suite
(rejected — R11 covers why the MCP server is preferred over repo test code).

## R11 — Browser-driven verification (Playwright MCP)

**Decision**: Add a project-scoped **Playwright MCP server** (`.mcp.json` at the repo root,
`npx @playwright/mcp`, headless Chromium, `--isolated`). It gives the implementing agent a
real browser to load `npm run preview`, inspect the rendered DOM, set viewport sizes, toggle
`prefers-reduced-motion`, disable JavaScript, block requests, and screenshot — i.e. to
actually perform the `quickstart.md` acceptance checks and drive fix iterations. It is
configured **before** implementation begins (tasks.md Phase 1). Nothing is added to
`package.json`; no test files enter `src/` or a `tests/` tree; the browser binary lives in the
user's Playwright cache, not the repo.

**Rationale**: The `quickstart.md` checklist is mostly browser observation (above-the-fold at
1366×768, no horizontal scroll 320–2560px, focus order, no-JS render, reduced-motion, the
analytics-blocked comparison). Doing this by hand each iteration is slow and error-prone; a
committed test suite is the dependency/CI surface Constitution II tells us to avoid for one
static page. An MCP server is a session tool — it ships nothing, changes no build output, and
can be removed by deleting one file — so it stays on the right side of "least code that does
the job" while making the Definition of Done genuinely checkable.

**Scope limits**: The MCP browser assists verification only. It does not become a required
gate (that is still `astro check` + `astro build` + the checklist + review subagents), and no
findings it surfaces are auto-fixed without the normal implement-phase judgement. Lighthouse
scoring (SC-006) is still run from Chrome DevTools / CLI, not scripted here.

**Alternatives considered**: `@playwright/test` committed under `tests/` (adds a devDependency,
a config file, and CI expectations the constitution says to justify — and the page has no
logic that regresses, so the suite would mostly re-assert static facts); manual browser checks
only (status quo — too slow for tight fix loops, and easy to skip); `chrome-devtools`/other
MCP browsers (Playwright MCP is the most capable and is already in this toolchain's ecosystem).

## R9 — Deploy target

**Decision**: Remain undecided. `astro build` emits `dist/` static files; `astro.config.mjs`
sets only `site` (the canonical URL, needed for absolute OG tags and JSON-LD) with no adapter.
Picking a host later is a config-only change and must be recorded in the repo per Constitution I.

**Rationale**: Project intent explicitly defers this; portability is a stated goal.

**Alternatives considered**: committing to a host now (premature; would add adapter/config the
constitution forbids until chosen).

## R10 — Personal dimension handling

**Decision**: `personal.ts` exports either a `PersonalThread` or `null`. `PersonalAside.astro`
renders nothing when it is `null`. Initial content uses only the résumé-supported UX/design
thread; history / philosophy / mythology / Stoicism / drawing / painting are added only after
Lee confirms (spec §Factual Source Material, FR-011). Rendered as a bordered aside beside
"How I Think" on wide viewports, collapsing to an inline block below the principles on narrow
ones — never a `<ul>` hobby list.

**Rationale**: Keeps the page at six sections (clarification Q5), honours factual integrity
for the unconfirmed interests, and degrades to nothing rather than a placeholder.

**Alternatives considered**: Hard-coding all interests now (Constitution IV violation until
confirmed); a dedicated section (rejected by clarification Q5).
