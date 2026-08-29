# Contract: Page Metadata

Emitted by `src/components/SEO.astro` into `<head>`. Values marked _fixed_ are verbatim from
the spec (FR-021); values marked _from data_ come from `src/data/profile.ts`.

## Primary meta

| Tag                          | Value                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<title>`                    | _fixed_: `Lee Sinclair \| Technology Leader & Systems Thinker`                                                                                     |
| `<meta name="description">`  | _fixed_ — `Technology leader combining engineering, product, delivery and people leadership to build capable teams and better technology systems.` |
| `<link rel="canonical">`     | _from data_ — `profile.siteUrl`                                                                                                                    |
| `<meta name="viewport">`     | `width=device-width, initial-scale=1`                                                                                                              |
| `<meta name="color-scheme">` | `dark`                                                                                                                                             |
| `<html lang>`                | `en`                                                                                                                                               |

## Open Graph

| Property                                   | Value                                                   |
| ------------------------------------------ | ------------------------------------------------------- |
| `og:type`                                  | `profile`                                               |
| `og:title`                                 | same as `<title>`                                       |
| `og:description`                           | same as description                                     |
| `og:url`                                   | `profile.siteUrl`                                       |
| `og:image`                                 | absolute URL from `profile.siteUrl` + `profile.ogImage` |
| `og:image:width` / `og:image:height`       | `1200` / `630`                                          |
| `og:image:alt`                             | short description of the image                          |
| `profile:first_name` / `profile:last_name` | `Lee` / `Sinclair`                                      |

## Twitter card

| Name                                                      | Value                 |
| --------------------------------------------------------- | --------------------- |
| `twitter:card`                                            | `summary_large_image` |
| `twitter:title` / `twitter:description` / `twitter:image` | mirror the OG values  |

## Structured data (JSON-LD)

One `<script type="application/ld+json">` describing Lee as a `Person` (FR-021, US5
scenario 4):

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lee Sinclair",
  "url": "<profile.siteUrl>",
  "jobTitle": "Technology Leader",
  "sameAs": ["<profile.linkedInUrl>"]
}
```

Rules:

- **No `email` property** — the page publishes no email address in any form, structured data
  included (FR-012a, SC-015).
- `sameAs` carries the LinkedIn URL. It is omitted entirely only in a non-deployable build
  where `profile.linkedInUrl` is unset (no empty array, no null).
- `jobTitle` is a stable role descriptor, not a claimed employer or title from the résumé
  (Constitution IV).
- No `Organization`, `worksFor`, dates, or awards — nothing that asserts unverified facts.
- The `on-edit.sh` hook treats `application/ld+json` as an allowed `<script>` (not an island).

## Assets referenced

| Asset            | Path                                     | Status                                                                                     |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------ |
| Favicon          | `/favicon.svg`                           | committed                                                                                  |
| Open Graph image | `profile.ogImage` (e.g. `/og-image.png`) | committed placeholder, real 1200×630 asset swapped in later with no markup change (FR-026) |
| Preloaded font   | `/fonts/<display-font>.woff2`            | `<link rel="preload" as="font" type="font/woff2" crossorigin>`                             |
