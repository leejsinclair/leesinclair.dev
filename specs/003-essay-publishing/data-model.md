# Phase 1 Data Model: Essay Publishing

## Entity: Essay

Represented as a Markdown content-collection entry under `src/content/essays/`. The filename
(minus `.md`) is not treated as the slug — slug is an explicit frontmatter field so it can
differ from the filename and so renames of the source file never change a published URL.

| Field        | Type                                       | Required | Notes                                                                                          |
| ------------ | ------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| `title`      | `string`                                    | yes      | Rendered as the page's single `<h1>` (Constitution III).                                        |
| `pillar`     | `"myths" \| "history" \| "leadership"`      | yes      | Selects the URL namespace (`/myths/...`, `/history/...`, `/leadership/...`) and any pillar label shown on the page. |
| `slug`       | `string`                                    | yes      | URL segment after the pillar, e.g. `athena`. Must be unique within its pillar (FR "collision" edge case). |
| `dek`        | `string`                                    | yes      | One-sentence standfirst shown under the title; also usable as the OG/description text.          |
| `references` | `{ text: string }[]`                        | no       | Rendered as a "References" list at the end of the page, in array order. Omitted entirely if absent — never a placeholder (matches the project's existing "absent optional field renders nothing" rule, `src/data/types.ts`). |
| body         | Markdown content (not frontmatter)          | yes      | Headings (`##`/`###`), paragraphs, bulleted lists, emphasis/strong, and blockquotes as needed. Must not contain a top-level `#` heading — the page template supplies the single `<h1>` from `title`. |

### Validation rules (enforced by a Zod schema in `src/content.config.ts`)

- `title`, `dek`, `slug`: non-empty strings.
- `pillar`: enum of exactly `"myths" | "history" | "leadership"` — any other value fails the
  build (FR-008).
- `slug`: lowercase, `[a-z0-9-]+` — fails the build on anything else, so it is always a valid,
  predictable URL segment.
- `references[].text`: non-empty string when the array is present.
- Uniqueness of `(pillar, slug)` across all entries is checked in the route's
  `getStaticPaths()` (a duplicate throws at build time — the "slug collision" edge case in
  spec.md). Content collections do not express cross-entry uniqueness in their schema, so this
  check lives in the one place that reads the whole collection.

### State

Essays have no publish-status field in this iteration — every entry in the collection is
published. (Spec's Assumptions section rules out anything beyond the single Athena essay for
now; a `draft` flag can be added later the same way `DraftStatus` was added to `src/data/types.ts`
for other content, without touching the route.)

## Entity: Pillar card (existing, modified — not new)

`EditorialCard` (`src/data/types.ts`) is unchanged as a type. Only the **data** in
`src/data/editorial.ts` changes: the `myths-archetypes` card's `href` moves from `"#archive"`
to the real essay's URL (`/myths/athena`), and its `linkLabel`/`description` are revised to
describe the actual essay rather than a scaffold ("Read the essay" rather than "See the
archive scaffold").

No relationship needs to be encoded in data between a card and an essay entry (e.g. no foreign
key) — the card simply links to the essay's known URL, the same way it currently links to an
in-page anchor. This keeps `src/data/editorial.ts` decoupled from the content collection,
which matters because most Myths/History/Leadership cards will keep pointing at anchors for a
long time, one essay at a time, per SC-003.
