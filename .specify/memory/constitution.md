<!--
Sync Impact Report
- Version change: (unratified template) → 1.0.0
- Bump rationale: Initial ratification. All placeholder tokens replaced with concrete,
  project-specific governance derived from CLAUDE.md project intent and
  specs/001-leadership-hiring-site/spec.md.
- Principles defined (6):
  1. Modern, Minimal Stack
  2. Least Code That Does the Job
  3. Accessible and Resilient by Default
  4. Factual Integrity — Invent Nothing (NON-NEGOTIABLE)
  5. Restraint in Design and Copy
  6. Spec-Driven Change
- Added sections:
  - Technology and Delivery Constraints
  - Development Workflow and Quality Gates
  - Governance
- Removed sections: none (template slots SECTION_2 / SECTION_3 realised as the two
  sections above).
- Templates and tooling requiring awareness:
  - .specify/templates/plan-template.md — "Constitution Check" gate should reference
    Principles 1–6 by name; verified present as a generic gate, no edit forced.
  - .specify/templates/spec-template.md — no change required.
  - .specify/templates/tasks-template.md — no change required.
  - .claude/agents/{ux-design-reviewer,simplicity-reviewer,content-integrity-reviewer}.md —
    already aligned with Principles 2, 3, 4, 5.
- Deferred TODOs: none. RATIFICATION_DATE set to project constitution adoption date
  (2026-08-29), consistent with the greenfield status of the repository.
-->

# Personal Website Constitution

The project is Lee Sinclair's personal leadership website: a single page whose job is to
persuade a senior technology hiring decision-maker to start a conversation. This constitution
governs how the site is built and changed. It supersedes convenience, habit, and tooling
defaults wherever they conflict.

## Core Principles

### I. Modern, Minimal Stack

The site MUST be built on Astro with TypeScript in strict mode, using current, actively
maintained tooling and no legacy compatibility layers. Build output MUST be portable static
files: no server runtime, no host-specific adapters, and no host-specific configuration until
a deploy target is explicitly chosen and recorded. Content MUST be authored in Markdown/MDX
or typed data files. The toolchain baseline is Astro + TypeScript + Prettier; adding anything
beyond it (linters, PostCSS chains, Astro integrations, CI steps, frameworks) requires a
written justification in the feature plan.

Rationale: a one-page site carries no excuse for infrastructure. Portability keeps the deploy
decision reversible; a small toolchain keeps the whole project legible.

### II. Least Code That Does the Job

Every feature MUST be implemented with the least code that satisfies its acceptance criteria.
Client-side JavaScript MUST be treated as a cost: the site targets near-zero JS, motion is
CSS-first, and every Astro island or `<script>` block MUST be justified by genuine
interactivity and MUST degrade gracefully without JS. Abstractions (shared components,
config, generic helpers) MUST NOT be introduced until there are at least three concrete
call sites. Each runtime dependency MUST be load-bearing and MUST NOT be a substitute for a
few lines of local code or a built-in platform feature; `devDependencies` are held to the
same bar.

Rationale: complexity compounds silently. The cheapest code to maintain is the code that was
never written, and restraint in implementation mirrors the argument the page is making.

### III. Accessible and Resilient by Default

Every page MUST use semantic HTML with exactly one top-level heading and a correct heading
hierarchy. All content and both calls to action MUST function with JavaScript disabled.
Every interactive element MUST be keyboard-operable in a logical order with a visible focus
indicator. Colour contrast MUST meet WCAG 2.1 AA against the dark palette. The layout MUST
be free of horizontal scrolling from 320px to 2560px and MUST preserve a readable line
length. When `prefers-reduced-motion` is set, all decorative motion MUST be suppressed and
any revealed content MUST render immediately in its final state. Text MUST become readable
before decorative assets finish loading.

Rationale: a senior audience uses varied devices and environments; a page that fails on a
phone, a keyboard, or a throttled connection reads as careless and undermines the claim of
systems-level judgement.

### IV. Factual Integrity — Invent Nothing (NON-NEGOTIABLE)

No visitor-facing claim about Lee — employer, role, date, metric, team size, technology,
project, or outcome — MUST appear unless it traces to source material Lee has supplied. When
required factual content is not yet available, the affected section MUST be structured to
receive it later and MUST NOT display a fabricated placeholder fact to visitors. Draft
wording that is pending Lee's sign-off MUST be marked as draft in the source until signed
off. AI and agentic engineering work MUST be framed as understanding how the engineering
operating model changes, never as expertise claims.

Rationale: the entire page is a credibility argument. A single invented detail, if noticed,
discredits everything around it. This principle is absolute and is not subject to
convenience trade-offs.

### V. Restraint in Design and Copy

The visual design MUST be dark-mode-first: near-black or charcoal background, a single
restrained accent colour, subtle borders, generous whitespace, and strong typographic
hierarchy. The design MUST NOT use SaaS landing-page patterns, gradient overload, particle
effects, stock photography, tech-logo walls, excessive cards, excessive animation, or
generic developer-portfolio patterns. Copy MUST be direct, confident, and flattering without
cleverness or hedging, MUST use UK English, and MUST avoid competency jargon. The core
narrative MUST be readable end to end in under three minutes.

Rationale: the medium is part of the message. A cluttered or clichéd page contradicts the
argument that Lee exercises taste and restraint.

### VI. Spec-Driven Change

Non-trivial features MUST go through the Spec Kit cycle — `specify → plan → tasks →
implement` — rather than ad-hoc edits. The review gates between stages are human
checkpoints: work MUST stop at each and surface the artifact for approval. `plan.md` MUST
include a Constitution Check confirming the design against Principles I–VI, and any
deviation MUST be recorded there with its justification. Trivial changes (copy tweaks,
dependency bumps, content-data edits with no structural change) MAY skip the cycle but still
MUST satisfy every principle.

Rationale: a small project drifts fastest when changes are cheap to make and easy to
forget. The cycle keeps intent, design, and implementation in agreement.

## Technology and Delivery Constraints

- **Stack**: Astro + TypeScript (strict). Content in Markdown/MDX or typed data files. Each
  editable value (positioning copy, principles, evidence examples, personal-thread items,
  contact email, LinkedIn URL) MUST be defined in exactly one authoritative place.
- **Output**: static files only. No backend, no database, no CMS, no server-side contact
  form, no authentication. No host adapter or host-specific config until a deploy target is
  chosen and documented in this repository.
- **Client JS budget**: the page MUST reach a readable, usable state with JavaScript
  disabled. Islands are permitted only for genuine interactivity and MUST degrade
  gracefully.
- **Privacy**: at most one privacy-friendly, cookieless analytics service recording
  aggregate page views and referrers only. It MUST NOT set cookies, collect personal data,
  fingerprint visitors, or track across sites, and MUST NOT require a consent banner. Its
  failure or absence MUST have no visible effect and MUST NOT delay content. No other
  third-party trackers, advertising, or behavioural analytics are permitted.
- **Metadata**: the page MUST ship the specified title and description, Open Graph metadata,
  and structured data identifying Lee as a person. The Open Graph image reference MUST be
  addable without other changes if the final asset is not yet ready.
- **Scope**: single page, English, no navigation beyond optional in-page anchors. No blog,
  no CV/résumé page, no portfolio gallery, no internationalisation, no light theme in the
  initial version.

## Development Workflow and Quality Gates

- **Automated checks**: `on-edit.sh` formats touched files and raises complexity advisories;
  `verify.sh` runs `npm run check` and `npm run build` before a working session ends and
  blocks on failure. A change MUST NOT be considered done while either check fails.
- **Review agents**: the `ux-design-reviewer`, `simplicity-reviewer`, and
  `content-integrity-reviewer` subagents SHOULD be run before completing any non-trivial UI
  or content change. Their blocking findings MUST be resolved or explicitly waived with a
  recorded reason.
- **Definition of done** for a feature: acceptance scenarios in the spec pass; `npm run
check` and `npm run build` are clean; keyboard-only and JS-disabled paths verified; no
  horizontal scroll from 320px to 2560px; reduced-motion path verified; every concrete
  claim traced to source; the "avoid" list confirmed absent.
- **Dependencies**: adding a dependency MUST be called out in the plan or PR description
  with its justification and the simpler alternative that was rejected.

## Governance

This constitution supersedes other practices and conventions for this repository. When a
principle and a convenience conflict, the principle wins or the work stops for an amendment.

**Amendment procedure**: changes are made by editing this file in a pull request (or the
first real commit, pre-remote). Each amendment MUST update the version line, refresh
`LAST_AMENDED_DATE`, and prepend an updated Sync Impact Report. Amendments that materially
change a principle SHOULD note any follow-up needed in dependent templates or agents.

**Versioning policy** (semantic):

- **MAJOR**: a principle is removed or redefined in a backward-incompatible way, or
  governance rules change incompatibly.
- **MINOR**: a new principle or section is added, or existing guidance is materially
  expanded.
- **PATCH**: clarifications, wording, and non-semantic refinements.

**Compliance review**: every Spec Kit review gate and every pull request MUST verify the
change against Principles I–VI and the two constraint sections. `/speckit.analyze` treats an
unjustified deviation as a blocking finding. Unavoidable deviations MUST be documented in
`plan.md` with rationale and, where possible, a planned path back to compliance.

**Runtime guidance**: `CLAUDE.md` holds day-to-day build and workflow guidance for agents
and contributors and MUST stay consistent with this constitution; on conflict, this
document governs.

**Version**: 1.0.0 | **Ratified**: 2026-08-29 | **Last Amended**: 2026-08-29
