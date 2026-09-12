# Phase 0 Research: 2026 Visual Redesign

This document proposes the concrete design direction. It is the artifact to approve (or
adjust) at the plan review gate. All decisions respect Constitution I–IV and VI unchanged;
decision R1 depends on the Principle V amendment recorded in `plan.md`.

No `NEEDS CLARIFICATION` markers remain.

---

## R1 — The third colour: a cool highlight

**Decision**: Add one highlight colour role, **cool (teal/aqua family)**, sitting opposite the
existing warm gold accent. Target value ≈ `#6fd7c4` on the charcoal ground, tuned during
implementation to land at contrast ratio ≥ 4.5:1 for text use and ≥ 3:1 for non-text use
against `--bg` (`#0d0f12`), and to read as considered rather than neon. A slightly brighter
`--highlight-strong` pairs with it for hover/active, mirroring the existing
`--accent` / `--accent-strong` pattern.

**Where it is used** (the whole budget — SC-003 caps it at six page-wide):

| Element | Treatment |
| --- | --- |
| "Let's talk" CTA (Hero) | Highlight fill, dark text on it; the one unmistakable action |
| "Let's talk" CTA (Closing) | Same |
| Hero positioning line | A short highlight underline / marker on the single positioning sentence |
| One key line per section (Intersection framing, Philosophy connective line) | Highlight rule or marker — at most one such mark per section, ≤ 2 sections use it |

The gold accent keeps its current job: inline links, the diagram nodes, the evidence
counters, `::selection`. So the page carries a clean division of meaning — **gold = "this is
interactive", highlight = "look here first"** — and the two never compete for the same role.

**Rationale**: A warm accent plus a cool highlight is the classic editorial move for drawing
the eye without clutter — the temperature break does the work, so the highlight can stay
physically small and rare. A second warm tone (coral, amber-2) would muddy against the gold
and, in coral's case, read as an error state. A brighter cream "spotlight" is too close to
the body text to register in a fifteen-second skim. Electric lime reads as SaaS.

**Non-colour reinforcement (FR-005)**: every highlighted element also wins on position, size,
or weight — the CTA is a large pill at a section's end, the positioning line is the largest
non-heading text on the page. With hue removed (greyscale, forced-colours) the hierarchy still
holds.

**Alternatives considered**: coral/vermilion (clashes with gold, reads as "error");
brighter off-white spotlight (too subtle for the skim test); electric lime (loud, generic);
replacing gold with a two-tone cool system (throws away a working, on-brand accent and a
larger change than asked for).

---

## R2 — What "built in 2026" means here

**Decision**: A contemporary *editorial* refresh, not a restyle toward any trend. Five moves:

1. **Bigger, more optical display type.** Push `--step-4` max from ~4.1rem toward ~4.75rem on
   wide viewports; use Fraunces' optical-size and soft axes at display sizes for a warmer,
   more intentional headline; tighten display tracking a touch further. Body text unchanged.
2. **A visible structural spine.** Section eyebrows / numbers set in mono in a left-hand rail
   that stays put while its section scrolls (see R3) — the page reads like a well-set
   document with running heads, not a stack of blocks.
3. **Hairline discipline.** One consistent 1px `--border` rule between sections and inside
   lists; remove any doubled dividers; let whitespace, not boxes, do the grouping. No cards.
4. **Considered micro-motion.** Section headings and the aside get a single CSS scroll-driven
   fade-and-rise as they enter (the `view()` pattern already in `SystemDiagram.astro`),
   `@supports`-guarded, off under reduced motion. Nothing loops, nothing parallaxes.
5. **The highlight, used with restraint** (R1) — the one clearly "current" colour signal.

**Rationale**: The audience is senior technology leaders in 2026. "Current" to them is
restraint executed precisely — good type, real hierarchy, deliberate space — not motion or
gradients. Every move above is subtractive or a sharpening of what exists, which is also the
cheapest to build and the safest against the "avoid" list.

**Explicitly not doing**: no added typeface, no dark/light toggle, no full-bleed imagery, no
grain/noise texture, no gradient meshes, no scroll-jacking, no view-transitions (single page —
nothing to transition), no component library.

**Alternatives considered**: a "bento" grid layout (on the avoid list — excessive cards);
a serif-everywhere treatment (hurts body readability); adding a variable mono webfont (weight
budget + a dependency-shaped choice for ~30 label characters); a light theme (out of scope,
Constitution + spec).

---

## R3 — The sticky aside as a site-wide signature

**Decision**: Keep `PersonalAside.astro`'s sticky margin-note behaviour and generalise the
*idea* — not by adding more asides, but by giving every section a **sticky eyebrow rail** on
wide viewports: the section label/number (mono, muted) sits in the left margin and stays
fixed (`position: sticky; top: …`) while the section's content scrolls past it, releasing at
the section boundary. On narrow viewports it collapses to a normal inline eyebrow above the
heading (today's behaviour).

The personal aside itself is refined, not replaced: same left-border margin note, retuned
spacing, and its sticky offset aligned with the new rail so the two feel like one system. It
must not overlap the principles list, must not run past `#how-i-think`, and on a very tall
viewport must still look anchored rather than stranded (Edge Cases) — achieved with
`align-self: start` in the grid and a `max-height`/overflow guard.

**Rationale**: The user named the sticky aside as the detail that already feels special. The
strongest way to make the whole page feel that way is to make that device the page's
structural signature, consistently, rather than a one-off.

**Implementation note**: pure CSS. `position: sticky` on the rail element inside each
`.section`; the existing two-column grid in `Principles.astro` is the model. No JS, no
`IntersectionObserver`. Under `prefers-reduced-motion` stickiness stays (it is not motion);
only the entrance fades are suppressed.

**Alternatives considered**: a single fixed side-nav for the whole page (the site has no
navigation by design — Constitution scope); a scroll-progress indicator (decorative, adds
JS or fragile CSS, no reader value on a 3-minute page); JS-driven scroll-spy (violates the
JS budget for no functional gain).

---

## R4 — Motion and the JavaScript budget

**Decision**: All new motion is CSS scroll-driven animation via `animation-timeline: view()`,
wrapped in `@media (prefers-reduced-motion: no-preference)` **and** `@supports
(animation-timeline: view())`, with the resting state being the final, styled state — exactly
the technique in `SystemDiagram.astro` today. Applied to: section headings, the personal
aside, and (optionally) evidence list items. Hover/focus transitions stay ≤ 200ms,
opacity/transform only.

**Client JS stays exactly as it is**: no islands, no `<script>` beyond the JSON-LD block and
the optional production Plausible tag. SC-006 (byte comparison vs the pre-redesign build) is
the gate.

**Rationale**: `view()` timelines are broadly supported in 2026 evergreen browsers and
degrade cleanly to "no animation, final state" everywhere else — which is also the
reduced-motion outcome. Zero JS keeps the performance baseline and the constitution's Least
Code principle intact.

**Alternatives considered**: `IntersectionObserver` + class toggle (adds JS the site
currently avoids); the Web Animations API (same); no entrance motion at all (loses a cheap,
tasteful "special" cue that costs nothing when unsupported).

---

## R5 — Type scale, spacing, and token retune

**Decision**: Adjust values in `tokens.css` only; keep the token *names* stable so component
`<style>` blocks change little:

- `--step-4` max → ~4.75rem; `--step-3` max → ~3.25rem; keep the mobile minimums (no
  horizontal-scroll risk at 320px).
- `--leading-tight` stays; add slightly more display letter-spacing via the existing
  `h1,h2,h3` rule.
- Introduce `--space-3xs` (~0.25rem) for tight mono-label stacks; nudge `--space-xl` /
  `--space-2xl` section rhythm up ~10%.
- Add `--highlight`, `--highlight-strong`, `--on-highlight` (dark ink for text on the
  highlight fill), each with a contrast comment like the existing palette block.
- Print block (`@media print`): map `--highlight` to a dark ink and render highlighted text
  as bold/underlined, consistent with how `--accent` is already handled.

**Rationale**: Retuning tokens rather than restructuring keeps the change small, keeps
SC-010 (change the highlight in one place) true by construction, and limits review surface.

**Alternatives considered**: a full modular-scale overhaul (larger blast radius, no
proportional benefit on a six-section page); per-component overrides (breaks single-source
tokens, Constitution constraint).

---

## R6 — Accessibility re-verification scope

**Decision**: Because the palette and focus treatment change, re-run the full 001
definition-of-done matrix, not a subset: keyboard-only pass with the new focus ring on the
new ground; JS-disabled render; 320–2560px no-scroll sweep; reduced-motion (all entrance
animations → final state); automated accessibility audit with **zero** contrast failures and
zero new violations vs baseline; forced-colours / high-contrast spot check that no
highlighted element vanishes and importance still reads; colour-blindness simulation
(protan/deutan/tritan) confirming the non-colour cues carry.

**Rationale**: A colour change is exactly the kind of "looks fine" edit that regresses
contrast or focus visibility. The matrix already exists (`specs/001-.../quickstart.md`); this
feature's `quickstart.md` reuses it plus the highlight-specific checks.

---

## Summary of review-gate decisions

| # | Decision | Depends on |
| - | -------- | ---------- |
| R1 | Cool teal/aqua highlight, ≤ 6 uses, gold accent unchanged | Principle V amendment (v1.1.0) |
| R2 | Editorial refresh: bigger optical display type, structural spine, hairline discipline, micro-motion | — |
| R3 | Sticky eyebrow rail site-wide; aside refined not replaced | — |
| R4 | New motion is CSS `view()` only; JS budget unchanged | — |
| R5 | Retune `tokens.css` values, keep token names; add highlight tokens + print mapping | — |
| R6 | Full 001 a11y matrix re-run + highlight-specific checks | — |
