# Acceptance Results — quickstart.md checklist

Run during `/speckit.implement`, against `npm run build` output and a headless-Chromium
preview of `npm run preview`. The Playwright MCP server was not connected in the implement
session; browser checks were run instead through the local Chromium at
`~/.cache/ms-playwright/chromium-1234/` (via `npx playwright screenshot` and a short
`playwright-core` script) and Lighthouse CLI. Human/social checks are marked as such.

| # | Check | Result |
|---|-------|--------|
| 1 | 60–90s argument / < 3-min read (SC-001, SC-003) | **Partial** — structure and length support it (~700 visible words, ~3-min read). The 5-reader comprehension dry-run (SC-001) and blind comparison (SC-012) are **human tasks, not yet run.** Copy nowhere implies Lee left engineering (verified). |
| 2 | Hero above the fold at 1366×768 (SC-002) | **Pass** — name, role line, positioning line, supporting sentence and the CTA all render without scrolling (screenshot `hero-1366`). |
| 3 | Contact path / no email (US2, SC-015) | **Pass (static)** — `scripts/assert-no-email.mjs` finds no email/`mailto:` in `dist/`; JSON-LD has no `email`. Unset `linkedInUrl` → marked placeholder span + build `console.warn`, no broken link. CTA markup is `target="_blank" rel="noopener"`, works with no JS. *Live "opens LinkedIn in a new tab" needs the real URL.* |
| 4 | Keyboard only (SC-004) | **Pass** — with a URL set, both CTAs are focusable in DOM order, each with a 2px `:focus-visible` ring, ≥44px target, no trap. With the URL unset there are zero interactive elements (correct). |
| 5 | No JavaScript (FR-020, US4) | **Pass** — `javaScriptEnabled:false`: all six `<section>`s render, CTA present, diagram SVG + nodes at opacity 1. Output contains no `<script>` except the JSON-LD block. |
| 6 | Responsive, no horizontal scroll (SC-005) | **Pass** — `scrollWidth === clientWidth` at 320/360/480/768/1024/1366/1920/2560. Diagram collapses to the stacked text form ≤480px. |
| 7 | Reduced motion (SC-007) | **Pass** — `prefers-reduced-motion: reduce`: diagram `animation-name: none`, nodes opacity 1 (final state). Global guard also neutralises transitions. |
| 8 | Performance / resilience (SC-006) | **Pass** — Lighthouse (CLI): **mobile 100 / 100 / 100 / 100**, **desktop 100 / 100 / 100 / 100**. Total transfer ≈ 45 KB (font 37 KB, doc 4 KB, CSS 3 KB, favicon 0.8 KB); **script 0 B**; CLS 0; TBT 0 ms. Desktop LCP 0.3 s; throttled-mobile LCP 1.2 s (text paints far earlier via `font-display: swap`). |
| 9 | Sharing / discoverability (US5, SC-008) | **Pass (static)** — `<title>` and description match `metadata-contract.md` verbatim; canonical, `color-scheme: dark`, OG + Twitter tags with absolute image URL, one JSON-LD `Person` (valid JSON, no `email`, `sameAs` omitted while URL unset), exactly one `<h1>`, clean h1→h2→h3 outline. *Live social/messaging preview needs a deployed URL.* |
| 10 | Design restraint (US3, SC-009) | **`ux-design-reviewer` subagent run; all findings resolved (see tasks.md T041).** Dark near-black ground, single amber accent, hairline borders, generous whitespace, editorial serif display + system body + mono labels. Diagram is an understated hub-and-ring 5-node graph, not cards/logos. No FR-018 avoid-list pattern present. Independent human designer + hiring-reviewer sign-off (SC-009) still to do. |
| 11 | Evidence count 1–4 (SC-013, US6) | **Pass** — rebuilt at 1, 2, 3, 4 items: balanced single-column layout each time. Guard rejects 0 and >4. |
| 12 | Factual integrity (SC-010) | **`content-integrity-reviewer` subagent run; no blocking findings, fixes applied (see tasks.md T063).** Every concrete claim traces to the résumé / spec Factual Source Material; no employer name, no dated timeline, no CV layout; AI framed as operating-model change; hero lines marked draft. |
| 13 | Analytics (SC-014, FR-025) | **Pass (static)** — a `PROD` build with `PUBLIC_ANALYTICS_DOMAIN` set emits exactly one `<script defer src="https://plausible.io/js/script.js" data-domain=…>` and no other third-party host; no build without the var emits it; no cookies/`localStorage`. *Runtime "blocked === identical" check needs a browser network-block.* |

## Review subagents

- `ux-design-reviewer` — no blocking findings unresolved; 2 medium + 4 low + 2 nits, all applied (tasks.md T041).
- `content-integrity-reviewer` — no blocking findings; 4 copy fixes applied (tasks.md T063).
- `simplicity-reviewer` — 8 findings; 3 applied, 5 waived with recorded reasons (tasks.md T064).

## Blocking gates

- `npm run check` — clean (0 errors / 0 warnings / 0 hints).
- `npm run build` — clean, then `assert-no-email.mjs` passes.

## Still outstanding (owned by Lee / require humans or a live deploy)

- ~~LinkedIn profile URL~~ — **set** to `https://www.linkedin.com/in/leejsinclair/`; both CTAs
  now render as real links, JSON-LD `sameAs` populated, build no longer warns.
- Positioning / role-line sign-off (flip `status` to `"signed-off"` in `profile.ts`).
- Review of the four résumé-drafted evidence examples.
- Personal-thread confirmation (only UX/design is résumé-supported today).
- Real 1200×630 Open Graph image (placeholder committed).
- Real domain in `astro.config.mjs` + `profile.siteUrl`.
- SC-001 comprehension dry-run (5 target readers) and SC-012 blind comparison.
- SC-009 independent designer + hiring-reviewer sign-off.
