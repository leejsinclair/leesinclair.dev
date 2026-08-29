# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project intent

Lee Sinclair's personal website. Replaces the old site (`github.com/leejsinclair/personal-website`, no longer public). Goals, in priority order:

1. **Modern technology** — current tooling, no legacy baggage.
2. **Simple implementation** — the least code that does the job; avoid frameworks-on-frameworks.
3. **Direct and flattering** — copy and design are concise and put Lee's work in the best light. When writing content or UI, favour clarity and confident tone over cleverness.

## Stack and build

**Astro 7 + TypeScript (strict)**, hand-written CSS with design tokens, near-zero client JS
(one inlined IntersectionObserver for the diagram reveal). Static output to `dist/`, no host
adapter — deploy target stays undecided. No CSS framework, no runtime dependencies; the only
dev dependencies are `@astrojs/check`, `prettier`, and `prettier-plugin-astro`.

```bash
npm run dev       # dev server
npm run check     # astro check — blocking gate
npm run build     # astro build + scripts/assert-no-email.mjs — blocking gate
npm run preview   # serve dist/
npm run format    # prettier --write .
```

All visitor-facing copy lives in typed modules under `src/data/` (see `README.md`) — edit
those, never hard-code strings in components. `src/data/guards.ts` enforces the content
count rules at build time. Contact is LinkedIn-only: no email address anywhere, enforced by
the post-build `assert-no-email.mjs` check.

The feature spec, plan, contracts and task list are in
`specs/001-leadership-hiring-site/`; `.specify/memory/constitution.md` is ratified (v1.0.0)
and governs.

## Spec-driven development workflow

This project is initialized with **Spec Kit** (`.specify/`). Non-trivial features go through the SDD cycle rather than ad-hoc edits. Slash commands (backed by skills in `.claude/skills/speckit-*`):

- `/speckit.specify <description>` — create/update the feature spec (`specs/<n>-<slug>/spec.md`)
- `/speckit.clarify` — resolve underspecified areas via targeted questions
- `/speckit.plan` — generate design artifacts (`plan.md` and supporting docs)
- `/speckit.tasks` — produce dependency-ordered `tasks.md`
- `/speckit.analyze` — cross-check spec/plan/tasks for consistency
- `/speckit.implement` — execute `tasks.md`

The full `specify → [review gate] → plan → [review gate] → tasks → implement` sequence is defined in `.specify/workflows/speckit/workflow.yml`. The review gates are human checkpoints — stop and surface the artifact for approval, don't blow through them.

`.specify/scripts/bash/` holds the helper scripts the skills call (`create-new-feature.sh`, `setup-plan.sh`, `check-prerequisites.sh`, etc.). `.specify/memory/constitution.md` is ratified (v1.0.0) — treat its six principles as binding.

## Git

`git init` has been run; there are no commits yet. Remember the commit-message trailers
your harness requires when you make the first one.
