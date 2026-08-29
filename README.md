# Lee Sinclair — personal leadership website

A single static page that makes the case for hiring Lee: an experienced technology leader
with deep technical experience, systems thinking, and genuine people leadership. Built with
Astro + TypeScript, hand-written CSS, near-zero JavaScript, portable static output.

Spec and design live in [`specs/001-leadership-hiring-site/`](specs/001-leadership-hiring-site/).

## Requirements

- Node.js 20 LTS or newer, npm.

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server (http://localhost:4321)
npm run check     # astro check — TypeScript + template diagnostics (blocking gate)
npm run build     # astro build → dist/, then the no-email guard (blocking gate)
npm run preview   # serve the production build from dist/
npm run format    # prettier --write .
```

`.claude/hooks/verify.sh` runs `check` and `build` before a working session ends and blocks
on failure.

## Content

Every visitor-facing string lives in a typed module under [`src/data/`](src/data/) — edit
those, not the components:

| File             | Holds                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| `profile.ts`     | name, positioning/role lines (draft), supporting statement, **LinkedIn URL**, OG image path |
| `disciplines.ts` | the five intersection nodes + the diagram's text alternative                                |
| `principles.ts`  | 3–4 "How I think" principles                                                                |
| `evidence.ts`    | 1–4 evidence examples (target 3–4)                                                          |
| `philosophy.ts`  | Autonomy / Mastery / Purpose + the connective line                                          |
| `personal.ts`    | the personal aside (only `confirmed: true` interests render)                                |

Build-time guards in `src/data/guards.ts` fail the build if the principle/evidence/philosophy
counts drift out of range or the LinkedIn URL is malformed.

## Analytics

Optional, off by default. Set `PUBLIC_ANALYTICS_DOMAIN` (see `.env.example`) and run a
**production** build to emit one deferred, cookieless [Plausible](https://plausible.io)
script for that domain. Nothing is loaded in dev, and the page is identical with the script
blocked or absent.

```bash
PUBLIC_ANALYTICS_DOMAIN=leesinclair.dev npm run build
```

## Deploy

`npm run build` emits portable static files to `dist/` with no host adapter — deploy target
is deliberately undecided. Before deploying:

- **Set `profile.linkedInUrl`** — it is the only contact route; the build warns and the CTA
  renders as a placeholder until it is set, and the site must not ship in that state.
- Set the real domain in `astro.config.mjs` (`site`) — it is the single source for the
  canonical and Open Graph URLs.
- Sign off the draft hero wording in `profile.ts` (flip `status` to `"signed-off"`).
- Swap `public/og-image.png` for the final 1200×630 share image (no markup change needed).
