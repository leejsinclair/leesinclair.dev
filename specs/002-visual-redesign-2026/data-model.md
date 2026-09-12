# Phase 1 Data Model: 2026 Visual Redesign

This feature has no runtime data and no content-schema change. The "model" here is the
**design token set** in `src/styles/tokens.css` and the **highlight usage policy** that
governs it. Both are single-source (Constitution: "exactly one authoritative place").

## Entity: Colour role

A named CSS custom property on `:root` with one authoritative value and a documented contrast
figure against `--bg` (`#0d0f12`).

| Role | Token | Status | Purpose | Contrast requirement |
| --- | --- | --- | --- | --- |
| Background | `--bg` | unchanged | Page ground | — |
| Text | `--text` | unchanged | Body and headings | ≥ 7:1 (AAA, as today) |
| Muted text | `--text-muted` | unchanged | Secondary prose, eyebrows | ≥ 4.5:1 |
| Accent | `--accent` | unchanged | **Interactive**: inline links, diagram nodes, evidence counters, `::selection` | ≥ 4.5:1 text / ≥ 3:1 non-text |
| Accent strong | `--accent-strong` | unchanged | Link hover, focus outline | ≥ 4.5:1 |
| On-accent | `--on-accent` | unchanged | Ink on an accent fill | ≥ 4.5:1 on `--accent` |
| **Highlight** | `--highlight` | **NEW** | **Attention**: the CTA fill, one key line per section | ≥ 4.5:1 text / ≥ 3:1 non-text vs `--bg` |
| **Highlight strong** | `--highlight-strong` | **NEW** | CTA hover/active, highlighted-line emphasis | ≥ 4.5:1 |
| **On-highlight** | `--on-highlight` | **NEW** | Dark ink on the highlight fill (CTA label) | ≥ 4.5:1 on `--highlight` |
| Border | `--border` | unchanged | Hairline section/list rules | ≥ 3:1 non-text not required (decorative) |
| Border strong | `--border-strong` | unchanged | Aside rule, placeholder CTA border | — |

**Validation rules**:
- Every new token carries a `/* contrast ≈ N:1 vs --bg */` comment, as the existing palette block does.
- `--highlight` and `--accent` must be distinguishable for protan/deutan/tritan vision — verified in R6, not by a value rule.
- No component `<style>` block may define a colour literal; all reference tokens (enforced by review, grep in `quickstart.md`).
- `@media print` remaps `--highlight` to a dark ink (`~#5a4a00` range or a neutral), consistent with the existing `--accent` print remap.

## Entity: Highlight usage policy

The rule set the `ux-design-reviewer` and code review check against.

**MAY appear on** (max 6 instances page-wide — SC-003):
1. The "Let's talk" CTA in Hero (fill).
2. The "Let's talk" CTA in Closing (fill).
3. The Hero positioning line — a marker/underline, not a fill.
4. At most one key line per section, for at most two sections (Intersection framing line, Philosophy connective line) — a rule or marker.

**MUST NOT appear on**: body links, running prose, headings, borders/dividers of general
content, section backgrounds, the diagram, eyebrows, the personal aside, focus outlines
(those stay `--accent-strong`).

**Reinforcement rule (FR-005)**: each highlighted element must also be distinguished by
position, size, or weight, such that removing hue (greyscale / forced-colours) preserves the
"this matters most" reading.

## Entity: Signature element

A deliberate design device with defined responsive and reduced-motion behaviour.

| Element | Wide viewport (≥ 60rem) | Narrow viewport | Reduced motion | Location |
| --- | --- | --- | --- | --- |
| Sticky eyebrow rail | Section label/number in left margin, `position: sticky`, releases at section end | Inline eyebrow above the heading (as today) | Unchanged (sticky ≠ motion) | every `.section` |
| Personal aside | Sticky margin note beside principles, offset aligned to the rail, `align-self: start`, cannot overflow `#how-i-think` | Inline note below the principles | Unchanged | `PersonalAside.astro` |
| Heading entrance | One-time CSS `view()` fade-and-rise on enter | Same if supported | No animation; final state | `global.css` / component `<style>` |
| Diagram reveal | Existing `view()` fade (retimed for new palette) | Existing stacked fallback ≤ 30rem | Final state (as today) | `SystemDiagram.astro` |

## Entity: Type & space scale (retune only)

Values change in `tokens.css`; **names are stable** so component styles barely move.

| Token | Today (max) | Proposed (max) | Note |
| --- | --- | --- | --- |
| `--step-4` | ~4.1rem | ~4.75rem | Hero `<h1>`; mobile min unchanged |
| `--step-3` | ~3rem | ~3.25rem | unused today; reserved |
| `--step-2` | ~2.1rem | ~2.2rem | `<h2>` |
| `--space-3xs` | — | ~0.25rem (NEW) | tight mono-label stacks |
| `--space-xl` | clamp(4–7rem) | ~+10% | section rhythm |
| `--space-2xl` | clamp(6–10rem) | ~+10% | hero / large gaps |
| `--dur-*`, `--ease` | unchanged | unchanged | — |

**State transitions**: none. Tokens are static; there is no light theme, no runtime theme
switch. The only conditional rendering is `@media` (viewport, `prefers-reduced-motion`,
`prefers-contrast`/`forced-colors`, `print`) and `@supports (animation-timeline: view())`.
