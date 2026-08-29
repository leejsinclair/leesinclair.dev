# Phase 1 Data Model: Content Entities

All content is compile-time typed data in `src/data/`, sourced only from material Lee has
supplied (spec §Factual Source Material, FR-024, Constitution IV). Interfaces live in
`src/data/types.ts`; one module per entity group. No runtime store, no database.

## Conventions

- Each data module default-exports one typed constant using `satisfies <Interface>`.
- Optional fields that are absent render **nothing** — never a placeholder.
- Copy is UK English. String fields hold plain text unless noted as inline-markup-allowed.
- Ordering in arrays is display order.

---

## Profile

Single source of identity and contact facts. One record (`src/data/profile.ts`).

| Field                 | Type                                                | Rules                                                                                                                                                                                                                                                                                                              |
| --------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                | `string`                                            | Required. "Lee Sinclair". Rendered in the `<h1>` and the JSON-LD `Person.name`.                                                                                                                                                                                                                                    |
| `positioning`         | `{ text: string; status: "draft" \| "signed-off" }` | Required. `text` is the hero positioning line. While `status === "draft"` the source shows a draft marker (build-time comment / dev-only note), never visitor-facing. Default text per FR-004: _"I build the conditions for people and technology to do their best work together."_                                |
| `roleLine`            | `{ text: string; status: "draft" \| "signed-off" }` | Required. Short hero role line. Default per FR-004: _"Technology leader with engineering depth, systems thinking and a focus on people."_                                                                                                                                                                          |
| `supportingStatement` | `string`                                            | Required. Exactly one concise sentence under the positioning line (FR-002). Sourced from résumé (career arc / current role).                                                                                                                                                                                       |
| `linkedInUrl`         | `string` (URL) \| `undefined`                       | **The sole contact route** (FR-012). Should be a set `https://` LinkedIn profile URL for a deployable build. When `undefined`, the "Let's talk" CTA renders as a clearly marked, non-interactive placeholder and `profile.ts` calls `console.warn` at build; the site MUST NOT be deployed in that state (FR-013). |
| `ogImage`             | `string` (path)                                     | Required. Site-relative path to the 1200×630 Open Graph image; a committed placeholder is acceptable until the real asset lands (FR-026).                                                                                                                                                                          |
| `siteUrl`             | `string` (URL)                                      | Required. Canonical absolute URL; also set as `site` in `astro.config.mjs`. Used for absolute OG/JSON-LD URLs.                                                                                                                                                                                                     |

**No email field.** `Profile` deliberately has no email property — the page publishes no email
address in any form (FR-012a). Lee's address is used only for repo authorship/attribution,
never imported into a component.

**Validation**: `astro check` enforces types. When `linkedInUrl` is set, its format
(`https://…linkedin.com/…`) is asserted by a small inline type guard in `profile.ts` (throws
at build if malformed); when unset, the guard emits `console.warn` — no library.

---

## DisciplineNode

The five parts of the system shown in "The Intersection" (`src/data/disciplines.ts`).
Exactly five records: `Technology`, `People`, `Product`, `Delivery`, `Systems` (FR-005).

| Field        | Type                                                               | Rules                                                                                                                                                  |
| ------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`         | `"technology" \| "people" \| "product" \| "delivery" \| "systems"` | Required, unique.                                                                                                                                      |
| `label`      | `string`                                                           | Required. Display name.                                                                                                                                |
| `blurb`      | `string`                                                           | Required. One short phrase on how Lee works at this node (≤ ~12 words).                                                                                |
| `connectsTo` | `DisciplineNode["id"][]`                                           | Required. Undirected edges; the union of all edges must make the five nodes a single connected graph (no isolated node). Rendered as lines in the SVG. |

Plus one module-level constant:

| Field            | Type     | Rules                                                                                                                                                                                                       |
| ---------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `diagramAltText` | `string` | Required. Full-sentence description of the relationship between all five disciplines, used as the SVG `<desc>` and the text alternative (FR-027). Must name every node and state that they form one system. |

---

## Principle

"How I Think" — 3 or 4 records (`src/data/principles.ts`) (FR-006).

| Field        | Type                                                                               | Rules                                                                                                                                                                       |
| ------------ | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`         | `string` (kebab)                                                                   | Required, unique.                                                                                                                                                           |
| `title`      | `string`                                                                           | Required. Specific, non-generic; no competency-jargon (Constitution V).                                                                                                     |
| `body`       | `string` (inline markup allowed)                                                   | Required. 1–3 sentences. Must trace to a core leadership idea (systems thinking / leverage / activity-vs-progress / autonomy-requires-clarity) without quoting it verbatim. |
| `sourceIdea` | `"systems-thinking" \| "leverage" \| "activity-vs-progress" \| "autonomy-clarity"` | Required. Internal provenance tag; not rendered. Two principles MAY share an idea, but at least three of the four ideas must be represented across the set.                 |

**Count rule**: `principles.length` is 3 or 4 (build-time assertion in the module).

---

## EvidenceExample

"Evidence" — 1 to 4 records (`src/data/evidence.ts`), target 3–4 (FR-007). Currently 4,
drafted from the résumé (spec §Factual Source Material).

| Field       | Type                                                                                                                  | Rules                                                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`        | `string` (kebab)                                                                                                      | Required, unique.                                                                                                                                                                                     |
| `title`     | `string`                                                                                                              | Required. Concise, outcome- or capability-oriented.                                                                                                                                                   |
| `body`      | `string` (inline markup allowed)                                                                                      | Required. 1–3 sentences. Every concrete detail (role, scope, practice, technology) must exist in supplied source material — no invented metrics, team sizes, employers, or outcomes (FR-024, SC-010). |
| `theme`     | `"leadership" \| "engineering-practice" \| "capability" \| "ai-operating-model" \| "product-delivery"` \| `undefined` | Optional tag; may drive a small caption/label.                                                                                                                                                        |
| `aiFraming` | `boolean` (default `false`)                                                                                           | When `true`, copy must frame AI work as _understanding how the engineering operating model changes when AI can produce substantial amounts of code_, never as expertise (FR-008).                     |

**Count rule**: `1 ≤ evidence.length ≤ 4` (build-time assertion). `Evidence.astro` must lay out
cleanly at 1, 2, 3, and 4 (SC-013, US6 independent test).

---

## PhilosophyPillar

"Leadership Philosophy" — exactly 3 records (`src/data/philosophy.ts`): `Autonomy`, `Mastery`,
`Purpose` (FR-009).

| Field   | Type                                   | Rules                                                                           |
| ------- | -------------------------------------- | ------------------------------------------------------------------------------- |
| `id`    | `"autonomy" \| "mastery" \| "purpose"` | Required, unique, all three present.                                            |
| `label` | `string`                               | Required.                                                                       |
| `body`  | `string`                               | Required. One or two sentences connecting the pillar to building capable teams. |

Plus:

| Field            | Type     | Rules                                                                                                   |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `connectiveLine` | `string` | Required module constant. One sentence tying the three pillars to capable teams (the section's thesis). |

---

## PersonalThread

The personal aside on "How I Think" (`src/data/personal.ts`). Exports `PersonalThread | null`.
`null` ⇒ `PersonalAside.astro` renders nothing (FR-011, R10).

| Field     | Type                                         | Rules                                                                                                                                                                       |
| --------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lead`    | `string`                                     | Required when non-null. One sentence framing the interests as observation / curiosity / deliberate practice — not "hobbies".                                                |
| `threads` | `{ interest: string; confirmed: boolean }[]` | Required, 1–5 items. Only `confirmed: true` items render. `confirmed` is `true` only for interests Lee has confirmed (UX/design is résumé-supported; others start `false`). |

**Render rule**: if zero `confirmed` threads, the component renders nothing even when the
record is non-null.

---

## Entity relationships

```text
Profile ──1─── page (Hero, Closing consume name/positioning + linkedInUrl CTA; SEO consumes meta fields)
DisciplineNode ×5 ──edges──> connected graph ──> SystemDiagram (SVG + diagramAltText)
Principle ×3–4 ──> Principles
PersonalThread? ──> PersonalAside (attached to Principles section)
EvidenceExample ×1–4 ──> Evidence
PhilosophyPillar ×3 + connectiveLine ──> Philosophy
```

No entity references another entity by id across modules; the page composition in
`index.astro` is the only place they meet.
