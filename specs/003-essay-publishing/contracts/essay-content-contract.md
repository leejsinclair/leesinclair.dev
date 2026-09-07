# Contract: Essay Content → Page

This project has no external API; the "contract" that matters is the interface between an
essay's content file and the page it renders as — i.e. what a future essay author (adding a
History or Leadership piece) must supply, and what the route guarantees back.

## Input contract — what an essay content file MUST provide

A file at `src/content/essays/<anything>.md` with frontmatter matching:

```yaml
---
title: string # required, non-empty
pillar: myths | history | leadership # required
slug: string # required, lowercase [a-z0-9-]+, unique within its pillar
dek: string # required, one sentence
references: # optional — omit entirely if there are none
  - text: string
  - text: string
---
Markdown body. No top-level `#` heading — start at `##`.
```

Violating any required-field or shape rule above fails `npm run build` with a schema error
naming the offending file (Zod's default behaviour) — this satisfies FR-008 without any
hand-written validation code.

## Output contract — what the route guarantees

Given a valid entry with `pillar: "myths"` and `slug: "athena"`, the build produces exactly
one static page at `/myths/athena/` that:

- Has exactly one `<h1>`, set to `title`.
- Shows `dek` immediately under the title.
- Renders the Markdown body with the site's existing heading hierarchy, paragraph, list, and
  emphasis styles.
- Renders a "References" section listing every `references[].text` in array order, only when
  `references` is present and non-empty.
- Includes a visible link back to the homepage (`/`), independent of the persistent site
  navigation.
- Uses the same `<head>` (`Base.astro`) and site navigation as every other page — no separate
  visual system.
- Requires no client-side JavaScript to display any of the above.

## Failure contract

- Two entries sharing the same `(pillar, slug)` pair fail `npm run build` with an explicit
  error identifying both files, rather than silently producing one page or overwriting the
  other (the "slug collision" edge case in spec.md).
- An entry with `pillar` outside the three allowed values fails the build at the schema stage
  before routing is ever attempted.
