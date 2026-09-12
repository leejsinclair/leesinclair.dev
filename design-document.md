# Design document: professional trust and editorial growth

## Goal
Strengthen first-impression trust, signal real leadership credibility, and make essay discovery scale beyond fixed homepage card limits.

## Delivery guardrails
- Treat this document as direction, not direct production copy.
- Implement non-trivial changes through a spec artifact under `specs/` before coding.
- Keep visitor-facing homepage copy in typed `src/data/*` modules when changes are applied.

## Current-state findings
- The homepage structure and copy are centrally managed in `src/data/editorial.ts`, which is good for controlled edits.
- Homepage sections currently show a fixed number of cards (notably 3 for Myths/History), with guard checks in `src/data/guards.ts`.
- Essay pages include strong metadata and TL;DR support, but no related-reading module to continue a reading journey.

## Design improvements (prioritized)

### P0 — trust and credibility (highest impact)
1. **Sharpen above-the-fold authority**
   - Add one concise proof line beneath the hero (e.g., scope of leadership experience, team scale, or domain depth).
2. **Strengthen social proof in About**
   - Add 2–3 compact, concrete outcomes (institution/team/system results) with measurable language.
3. **Increase source transparency in essays**
   - Encourage references on more essays and surface “last updated” to reinforce editorial discipline.
4. **Clarify contact intent**
   - Keep LinkedIn-only CTA, but label it as the preferred professional contact route.

### P1 — professional reading experience
1. **Add reading metadata on cards**
   - Show publish date, reading time, and pillar label on homepage cards and essay headers.
2. **Improve editorial hierarchy**
   - Reserve strongest contrast for headings and action links; reduce visual weight of secondary descriptive text.
3. **Add an explicit archive path**
   - Add “View all in Myths/History/Leadership” links so users can move beyond homepage highlights.

### P2 — discovery and retention
1. **Related articles module on each essay**
   - Add “Related reading” with 3 links near the footer.
2. **Cross-pillar connection cues**
   - Include “Also in Leadership” / “Also in History” suggestions to support interdisciplinary positioning.
3. **Series and thematic collections**
   - Group compatible essays into named mini-series to make expertise areas legible.

## Scaling beyond the current “3 essays per section” perception
1. **Keep homepage curated, not exhaustive**
   - Use homepage cards as “featured essays,” not full inventory.
2. **Add dedicated pillar index pages**
   - Create `/myths`, `/history`, `/leadership` listing all essays in each pillar (via a new spec and implementation pass).
3. **Use lightweight curation rules**
   - Feature latest or editor-picked essays on homepage; route depth to pillar indexes.

## Related-articles approach
Schema and routing changes below should be captured in a dedicated spec before implementation.

1. Add lightweight frontmatter for:
   - `topics` (array)
   - `theme` (single optional label for the essay’s main framing)
   - `era` (optional list for historical periods when relevant)
2. Ranking logic:
   - Same pillar + shared topics first
   - Cross-pillar shared topics second
   - Most recent fallback if matches are sparse
3. Output:
   - Always show up to 3 related essays with title + one-line dek.

## Success criteria
- Higher trust signals visible in hero and About without adding clutter.
- Users can discover more than featured homepage essays in one click.
- Every essay supports onward reading through related links.
