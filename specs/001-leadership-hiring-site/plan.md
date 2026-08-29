# Implementation Plan: Personal Leadership Website — An Argument for Hiring Lee Sinclair

**Branch**: `001-leadership-hiring-site` | **Date**: 2026-08-29 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-leadership-hiring-site/spec.md`

## Summary

A single static page that persuades a senior technology hiring decision-maker to start a
conversation with Lee. Six sections in a fixed order (Hero, The Intersection, How I Think,
Evidence, Leadership Philosophy, Closing), dark-mode-first, editorial and restrained, read
end to end in under three minutes.

Technical approach: Astro 5 + TypeScript (strict), no UI framework, hand-written modern CSS
with design tokens, all visitor-facing text held in typed data modules so content is edited
without touching markup. The only client JavaScript is a ~20-line IntersectionObserver that
plays the system diagram's one-time reveal; every section, the call to action, and the
diagram work fully with JavaScript disabled and under `prefers-reduced-motion`. Output is
portable static files (`dist/`) with no host adapter. One cookieless analytics script
(Plausible), deferred and production-only, behind a single config flag.

Contact is via LinkedIn only: a single "Let's talk" link (Hero + Closing) to Lee's LinkedIn
profile. No email address is published anywhere on the page or in its metadata (FR-012a), to
avoid address harvesting. The LinkedIn URL is a required config value with no fallback — an
unset URL renders a marked placeholder and warns at build.

## Technical Context

**Language/Version**: TypeScript 5.x (strict), Node.js 20 LTS or newer

**Primary Dependencies**: Astro 5.x (static output, zero framework integrations). Dev-only:
Prettier + `prettier-plugin-astro`. No runtime npm dependencies. `@playwright/mcp` is run
on-demand via `npx` from `.mcp.json` (research.md R11) — a session tool, not a `package.json`
dependency.

**Storage**: None. All content lives in typed `.ts` modules under `src/data/`; binary assets
(one variable font, favicon, Open Graph image) under `public/`.

**Testing**: `astro check` (TypeScript + template diagnostics) and `astro build` as the
blocking gates (wired to the repo's `verify.sh`). No unit-test framework and no test-runner
devDependency — the page has no runtime logic to unit-test. Acceptance verification is the
scenario list in `quickstart.md`, mapped to the spec's Success Criteria; its browser-observed
checks are run by the implementing agent through a project-scoped **Playwright MCP server**
(`.mcp.json`, headless Chromium — research.md R11), which ships nothing and adds no build or CI
surface.

**Target Platform**: Static hosting, any modern browser from ~320px to ~2560px. Deploy target
deliberately undecided (per project intent) — build stays adapter-free.

**Project Type**: Single static site (one page).

**Performance Goals**: Readable, usable state within ~1s on typical broadband (SC-006); text
readable before decorative assets (font, SVG) settle; Lighthouse Performance / Accessibility /
Best Practices / SEO ≥ 95 on a mid-tier throttled profile. Total transferred weight target
< 150 KB excluding the Open Graph image; < 5 KB of JavaScript.

**Constraints**: No backend, no cookies, no consent banner, no client-side routing. No email
address rendered in any form — contact is LinkedIn-only (FR-012a). WCAG 2.1 AA contrast
against the dark palette. Exactly one authoritative definition per editable value (FR-022).
Draft positioning wording carried in source and marked as draft until sign-off (FR-004,
Constitution IV).

**Scale/Scope**: One page, six sections, ~6 typed content modules, ~11 Astro components,
~700–1000 words of copy, 1–4 evidence examples.

## Constitution Check

_GATE: evaluated against Constitution v1.0.0 (Principles I–VI + the two constraint sections)._

| Principle                                 | Status | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| I — Modern, Minimal Stack                 | PASS   | Astro + TS strict, static output, no host adapter, content in typed data modules. Toolchain is Astro + TS + Prettier only; `prettier-plugin-astro` is required for `.astro` formatting and is the sole addition. The brief's "modern CSS framework" suggestion is **declined** in favour of hand-written CSS with tokens — a one-page site does not clear the "load-bearing dependency" bar (see research.md R2). Not a constitution deviation; the constitution outranks the brief here.                                                                                                                                                                                                                                                         |
| II — Least Code That Does the Job         | PASS   | Near-zero JS: one IntersectionObserver island, CSS-first motion, graceful no-JS degradation. Zero runtime dependencies. The "Let's talk" link (Hero, Closing) is a two-line plain `<a>` reading `profile.linkedInUrl` — rendered inline in both places, no `ContactActions` component until a third call site exists. Section components are one-call-site organisational splits of a single page (each rendered once in `index.astro`), not reusable abstractions, and keep every file well under the 200-line advisory. The Playwright MCP server (research.md R11) is a session-only verification aid — no `package.json` entry, no test tree, no CI surface, removable by deleting `.mcp.json` — so it does not count against this principle. |
| III — Accessible and Resilient by Default | PASS   | Semantic landmarks, exactly one `<h1>`, full function with JS disabled, keyboard-operable CTAs with visible focus, AA contrast baked into `tokens.css`, no horizontal scroll 320–2560px via fluid layout, `prefers-reduced-motion` suppresses the reveal (diagram renders in final state), text paints before font/SVG. Enforced by the `quickstart.md` checklist.                                                                                                                                                                                                                                                                                                                                                                                |
| IV — Factual Integrity — Invent Nothing   | PASS   | Every visitor-facing claim originates in `src/data/*.ts`, sourced from `LSINCLAIR_Resume_TechLead.pdf` (spec §Factual Source Material). `profile.ts` carries `positioning.status: "draft"` and the components render a source-only draft marker (not visitor-facing) until sign-off. Optional/empty fields render nothing — no placeholder facts. AI work framed per FR-008 in `evidence.ts` copy. `profile.ts` holds no email field — nothing to leak.                                                                                                                                                                                                                                                                                           |
| V — Restraint in Design and Copy          | PASS   | Dark-first token set, single accent, subtle borders, generous whitespace, strong type hierarchy; none of the FR-018 "avoid" patterns. Copy is UK English, direct, no competency jargon, < 3-minute read. `ux-design-reviewer` + `content-integrity-reviewer` run before done.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| VI — Spec-Driven Change                   | PASS   | This plan carries the Constitution Check; `specify → plan` gates respected; `/speckit.tasks` and `/speckit.implement` follow.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

**Constraint sections**: Technology/Delivery — satisfied (static, one cookieless analytics
service behind a flag, specified metadata + JSON-LD Person, single-source editable values).
Workflow/Quality Gates — `check` + `build` scripts wired for `verify.sh`; review agents
scheduled in `quickstart.md` Definition of Done.

**Result**: PASS, no violations. Complexity Tracking table left empty.

**Post-design re-check (after Phase 1)**: still PASS. The design artifacts introduce no new
runtime or `package.json` dependencies, no new client script beyond `reveal.ts`, and no shared
abstraction below three call sites. The Playwright MCP server added in research.md R11 is a
session-only verification tool run via `npx` — it ships nothing and is excluded from the
dependency count for the same reason the review subagents are. `data-model.md` keeps every editable value single-sourced; `contracts/` encode the
no-JS, reduced-motion, and factual-integrity guarantees.

## Project Structure

### Documentation (this feature)

```text
specs/001-leadership-hiring-site/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output — content entity shapes
├── quickstart.md        # Phase 1 output — setup + acceptance verification
├── contracts/           # Phase 1 output
│   ├── page-contract.md      # Rendered DOM structure, landmarks, heading outline, CTA + no-JS behaviour
│   └── metadata-contract.md  # <title>, meta description, Open Graph, Twitter card, JSON-LD Person
└── tasks.md             # Phase 2 output (/speckit.tasks — NOT created here)
```

### Source Code (repository root)

```text
/
├── package.json              # scripts: dev, build, preview, check (astro check), format
├── .mcp.json                 # project-scoped Playwright MCP server (verification aid — R11)
├── astro.config.mjs          # output: 'static', no adapter, site URL, no integrations
├── tsconfig.json             # extends astro/tsconfigs/strict
├── .prettierrc               # + prettier-plugin-astro
├── public/
│   ├── favicon.svg
│   ├── fonts/                # one self-hosted variable font (woff2)
│   └── og-image.png          # 1200×630; placeholder committed, real asset swapped in later
├── src/
│   ├── data/
│   │   ├── types.ts          # Profile, DisciplineNode, Principle, EvidenceExample, PhilosophyPillar, PersonalThread
│   │   ├── profile.ts        # name, positioning (draft), supporting statement, linkedInUrl (required, sole contact route), siteUrl, ogImage — no email field
│   │   ├── disciplines.ts    # 5 nodes (Technology, People, Product, Delivery, Systems) + connections + diagram alt text
│   │   ├── principles.ts     # 3–4 principles
│   │   ├── evidence.ts       # 1–4 examples (currently 4 drafted from résumé)
│   │   ├── philosophy.ts     # Autonomy, Mastery, Purpose
│   │   └── personal.ts       # personal thread (UX/design confirmed; rest pending) — may be null
│   ├── styles/
│   │   ├── tokens.css        # palette, type scale, spacing, accent, radius, motion durations
│   │   └── global.css        # reset, base element styles, layout primitives (.shell, .section)
│   ├── lib/
│   │   └── reveal.ts         # ~20 line IntersectionObserver; guarded by matchMedia(prefers-reduced-motion)
│   ├── components/
│   │   ├── SEO.astro             # <head> meta, OG, Twitter, JSON-LD Person
│   │   ├── SystemDiagram.astro   # inline SVG, <title>/<desc>, data-driven from disciplines.ts
│   │   ├── Hero.astro
│   │   ├── Intersection.astro
│   │   ├── Principles.astro
│   │   ├── PersonalAside.astro   # rendered only if personal.ts is non-null
│   │   ├── Evidence.astro        # layout adapts to 1–4 items
│   │   ├── Philosophy.astro
│   │   └── Closing.astro
│   ├── layouts/
│   │   └── Base.astro            # <html lang="en">, <head> via SEO.astro, global styles, <slot/>
│   └── pages/
│       └── index.astro          # composes the six sections in order
└── .specify/ …
```

**Structure Decision**: Single Astro project at the repository root (Constitution I; the site
is one deployable). Content is fully separated from presentation: `src/data/*.ts` are the only
files a content editor touches (FR-022, US6). Each of the six sections is its own component
for legibility and to keep `index.astro` a thin composition; `SystemDiagram` is split out
because it is the largest single piece of markup. `src/lib/reveal.ts` is the only shipped
script. No `tests/` tree — see Testing above.

## Complexity Tracking

> No Constitution Check violations. Table intentionally empty.

| Violation | Why Needed | Simpler Alternative Rejected Because |
| --------- | ---------- | ------------------------------------ |
| —         | —          | —                                    |
