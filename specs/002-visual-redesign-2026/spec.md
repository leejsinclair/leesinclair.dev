# Feature Specification: 2026 Visual Redesign

**Feature Branch**: `002-visual-redesign-2026`

**Created**: 2026-08-29

**Status**: Draft

**Input**: User description: "a new feature. redesign the style of this website so that it looks like it's been built in 2026, i would like the experience to feel special for example the sticky aside is a very nice touch. Right now i think that we are missing a 3rd colour for highlighting important elements"

## Overview

The website already carries the right argument in the right order. This feature is about how that
argument _looks and feels_. A senior hiring decision-maker should register, in the first few
seconds, that the page is current, crafted, and considered — and that a small number of the right
things are pulling their eye. Two concrete moves define the work:

1. **A design that reads as made in 2026** — contemporary editorial styling, sharper typographic
   hierarchy, and one or two deliberate "signature" moments (the sticky margin-note aside is the
   reference example of the feeling to reach for).
2. **A third colour role — a highlight** — added alongside the existing neutrals and the gold
   accent, reserved for drawing attention to a few genuinely important elements (the call to
   action, a key positioning line, an evidence outcome).

This is a presentation change. It does not alter the copy, the section order, the number of
sections, or the single-page structure. It must hold every accessibility, performance,
no-JavaScript, and responsive guarantee the current site already meets, and it must stay inside
the constitution's restraint rules — with one governance dependency noted below.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - The page reads as current and crafted (Priority: P1)

A CTO, Head of Engineering, or technology executive opens the page, usually from a LinkedIn
message or a referral. Before they read a word, the visual impression should say "this person has
taste and keeps up" — not "this is a template" and not "this was built years ago". The design
itself should feel deliberate and a little special, reinforcing the argument the copy is making.

**Why this priority**: The medium is part of the message. A dated or generic look quietly
undermines the claim of systems-level judgement before the reader reaches the evidence.

**Independent Test**: Show the redesigned page to five people from the target audience for ten
seconds each, then ask for their first impression of the design. Passes if at least four describe
it, unprompted, as current/modern _and_ as crafted, considered, restrained, or editorial — and
none describe it as generic, dated, or template-like.

**Acceptance Scenarios**:

1. **Given** a first-time visitor on a standard laptop viewport, **When** the page renders, **Then** the visual hierarchy, spacing, and typography present as a contemporary editorial page, not a SaaS landing page or a developer portfolio.
2. **Given** the page, **When** a reviewer inspects it against the constitution's "avoid" list, **Then** none of those patterns are present.
3. **Given** the redesigned page beside the previous version, **When** both are shown to a reviewer, **Then** the reviewer identifies the redesigned one as the more recently made.
4. **Given** at least one deliberate signature element (the sticky aside being the reference), **When** a reviewer describes the page, **Then** they can name a specific detail that felt considered or memorable.

---

### User Story 2 - The right elements pull the eye (Priority: P1)

Some elements on the page matter more than others: the single "Let's talk" call to action, the
core positioning statement, the outcome in each evidence example. A visitor skimming for fifteen
seconds should land on those first. A third colour — a highlight, distinct from body text and from
the accent used on links — makes that possible without adding clutter.

**Why this priority**: A skimming executive who lands on the wrong things, or on nothing in
particular, leaves without the argument and without acting.

**Independent Test**: Give five target-audience reviewers the page for fifteen seconds, then ask
what stood out and what they think they are meant to do next. Passes if at least four name the
call to action or a key positioning statement.

**Acceptance Scenarios**:

1. **Given** the design token set, **When** inspected, **Then** it defines a distinct highlight colour role separate from the background/text neutrals and from the existing gold accent.
2. **Given** the full page, **When** every use of the highlight colour is counted, **Then** it appears only on a small, deliberate set of elements and never on ordinary body links or running prose.
3. **Given** the highlight and the accent appearing near each other, **When** viewed, **Then** they are clearly distinguishable and do not clash or visually vibrate.
4. **Given** a colour-blind visitor or a forced-colours / high-contrast mode, **When** the page renders, **Then** importance is still conveyed by position, size, or weight — not by hue alone — and no highlighted element becomes invisible or illegible.

---

### User Story 3 - Nothing that already works regresses (Priority: P1)

The current site is accessible, fast, works with JavaScript disabled, and never scrolls
horizontally from a small phone to a large display. The redesign must keep every one of those
properties. New colour, type, and motion choices must not break contrast, focus visibility,
reduced-motion behaviour, or the client-JavaScript budget.

**Why this priority**: A redesign that looks better but fails a keyboard user, a screen reader, or
a throttled connection is a net loss — it trades the credibility argument away.

**Independent Test**: Run the redesigned page through the existing definition-of-done checks:
keyboard-only navigation, JavaScript disabled, 320px–2560px resize, reduced-motion, automated
accessibility audit, and a client-JS byte comparison against the pre-redesign build. Passes if all
hold.

**Acceptance Scenarios**:

1. **Given** the new palette, **When** every text and interactive element is measured, **Then** colour contrast meets WCAG 2.1 AA against the dark background, including the highlight colour in every context it is used.
2. **Given** a keyboard-only visitor, **When** they tab through the page, **Then** every interactive element is reachable in a logical order with a focus indicator that stays clearly visible against the new palette.
3. **Given** a visitor with JavaScript disabled, **When** the page loads, **Then** all content, both calls to action, and any revealed sections are fully available.
4. **Given** a visitor who prefers reduced motion, **When** the page loads, **Then** no decorative animation plays and any revealed content is shown in its final state immediately.
5. **Given** the redesigned build, **When** its client-side JavaScript is compared to the previous build, **Then** it has not grown beyond the single existing scroll-reveal observer.
6. **Given** any viewport width from 320px to 2560px, **When** the page renders, **Then** there is no horizontal scrolling and running prose keeps a readable line length.

---

### User Story 4 - The sticky aside stays a signature, and it travels well (Priority: P2)

The margin-note aside attached to "How I Think" is the reference for the feeling this redesign is
chasing. It should remain — refined if useful — as an intentional device, sit correctly beside the
content it annotates on wide screens, and collapse cleanly inline on narrow ones.

**Why this priority**: It is the one detail the user singled out as working. Losing or breaking it
would remove the clearest existing example of the intended character.

**Independent Test**: View "How I Think" at a wide viewport and confirm the aside tracks the
principles as a true margin note without overlapping or detaching awkwardly on a tall display;
narrow the viewport and confirm it collapses to a legible inline note below the principles.

**Acceptance Scenarios**:

1. **Given** a wide viewport, **When** the reader scrolls through "How I Think", **Then** the aside stays beside the principles as a margin note and never overlaps other content or runs past its section.
2. **Given** a narrow viewport, **When** the section renders, **Then** the aside appears as a readable inline note below the principles with no loss of meaning.
3. **Given** a very tall display, **When** the section is short relative to the viewport, **Then** the sticky behaviour still looks intentional rather than stranded.

---

### User Story 5 - Design values stay editable in one place (Priority: P3)

Colour, type scale, spacing, and motion values remain defined once, in the design-token module.
Components reference tokens, not literal values. Adding the highlight colour, and any later
adjustment to it, is a one-file change.

**Why this priority**: The palette will be tuned after launch; that tuning must not mean touching
every component. P3 because the launch can proceed once the token structure holds.

**Acceptance Scenarios**:

1. **Given** the redesigned styles, **When** searched for colour, spacing, or motion literals outside the token module, **Then** none are found in component styles.
2. **Given** the highlight colour value, **When** changed in the token module, **Then** every highlighted element on the page updates with no other edit.

---

### Edge Cases

- The highlight colour placed directly next to the gold accent — must not clash or vibrate.
- Importance signalled to a colour-blind viewer or in forced-colours / high-contrast mode — must not depend on hue alone.
- Print / PDF output — the highlight must degrade to an ink-frugal treatment, consistent with the existing print styles.
- A very tall or very wide display — the sticky aside must still look deliberate, not stranded or detached.
- A throttled connection — body text must be readable before the web font and any decorative assets finish loading; no reflow of body copy when they arrive.
- `prefers-reduced-motion` — every decorative motion suppressed, revealed content shown immediately in final state.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: The design token set MUST define a third colour role — a "highlight" — distinct from the background/text neutrals and from the existing gold accent, for drawing attention to a small number of important elements.
- **FR-002**: The highlight colour MUST be applied sparingly — as a default, to at most the primary call to action and one class of key statement per section — and MUST NOT be used for ordinary body links, running prose, borders, or backgrounds of large areas.
- **FR-003**: The highlight and the accent MUST be visually distinguishable from one another, and MUST NOT clash or vibrate when placed adjacently.
- **FR-004**: The highlight colour MUST meet WCAG 2.1 AA contrast for every context it appears in (text contrast where it styles text, non-text contrast where it styles a UI indicator) against the dark background.
- **FR-005**: Importance MUST be reinforced by at least one non-colour cue (position, size, or weight) wherever the highlight is used, so the page still communicates with hue removed.
- **FR-006**: The redesign MUST present as a contemporary editorial page to a 2026 professional audience, verified by a target-audience reviewer panel, and MUST NOT introduce any pattern on the constitution's "avoid" list.
- **FR-007**: The redesign MUST preserve all visitor-facing copy, the six-section order, the section count, and the single-page structure unchanged.
- **FR-008**: The sticky aside MUST be retained as an intentional signature element, remain legible across viewports, track its section as a margin note on wide screens, and collapse inline on narrow screens without loss of meaning.
- **FR-009**: Any motion introduced or changed MUST be CSS-first, MUST respect `prefers-reduced-motion` by rendering the final state immediately, and MUST NOT increase the client-side JavaScript beyond the single existing scroll-reveal observer.
- **FR-010**: The redesign MUST NOT add horizontal scrolling at any viewport width from 320px to 2560px, and MUST preserve a readable running-prose measure.
- **FR-011**: Every interactive element MUST remain keyboard-operable in a logical order with a focus indicator that stays clearly visible against the new palette.
- **FR-012**: All content and both calls to action MUST remain fully available with JavaScript disabled.
- **FR-013**: The page MUST remain dark-mode-first with no light theme added; existing print styles are the only exception and MUST be updated to cover the highlight colour.
- **FR-014**: All colour, type, spacing, and motion values MUST remain defined once in the design-token module; component styles MUST reference tokens rather than literals.
- **FR-015**: Body text MUST become readable before the web font and any decorative assets finish loading, with no reflow of body copy when they arrive.
- **FR-016**: The redesign MUST NOT add any runtime dependency; any new development-only tooling MUST be justified in the plan against a simpler alternative.

### Key Entities

- **Colour role set**: the named colour roles in the design token module — background and text neutrals, the existing gold accent (links, interactive affordances), and the new highlight (rare emphasis). Each role has one authoritative value and documented contrast figures.
- **Highlight usage policy**: the written rule for where the highlight may and may not appear, and the required non-colour reinforcement — the reference for review and for `src/data/guards.ts`-style enforcement if added.
- **Signature elements**: the small set of deliberate design moments (the sticky aside, and any others the plan proposes), each with a defined responsive and reduced-motion behaviour.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: In a first-impression test with five target-audience reviewers, at least four describe the design, unprompted, as both current and crafted/considered/restrained, and none as generic, dated, or template-like.
- **SC-002**: In a fifteen-second skim test with five target-audience reviewers, at least four name the call to action or a key positioning statement as what stood out or what they should do next.
- **SC-003**: On the full page, the highlight colour appears on no more than six elements in total, verifiable by inspection.
- **SC-004**: An automated accessibility audit of the redesigned page reports zero colour-contrast failures for text and interactive elements, and zero new violations versus the pre-redesign build.
- **SC-005**: There is no horizontal scrolling at any viewport width from 320px to 2560px.
- **SC-006**: The redesigned build ships no more client-side JavaScript, by byte count, than the pre-redesign build.
- **SC-007**: The core narrative is still readable end to end in under three minutes (copy unchanged).
- **SC-008**: Body copy paints and holds its position before the web font and decorative assets load — no cumulative layout shift attributable to those assets.
- **SC-009**: With `prefers-reduced-motion` set, no decorative animation plays and all revealed content is shown in its final state immediately.
- **SC-010**: Changing the highlight colour value in the design token module updates every highlighted element with no other file edited.

## Assumptions

- The redesign is presentation-only: no copy edits, no change to section order or count, no new page or route, no content-data schema change beyond adding colour roles.
- "Looks like it was built in 2026" is judged qualitatively by a reviewer panel drawn from the target audience; the design direction is proposed during `/speckit-plan` and approved at the plan review gate.
- The highlight colour is an addition to the existing gold accent, not a replacement, unless the design direction argued in the plan makes a deliberate case otherwise at the review gate.
- Motion stays CSS-first; the existing single IntersectionObserver scroll-reveal is the ceiling for client-side JavaScript.
- Deploy target remains undecided; build output stays static with no host adapter.
- The reference to the sticky aside describes the _feeling_ to reach for (deliberate, quietly special), not a request for more sticky elements specifically.

## Dependencies

- **Constitution amendment (governance)**: Constitution Principle V ("Restraint in Design and Copy") currently mandates "a single restrained accent colour". Adding a highlight colour requires a MINOR amendment permitting one accent plus one sparingly-used highlight, with the usage policy recorded. This amendment MUST be ratified (via `/speckit-constitution`) and approved before implementation begins. If the amendment is not adopted, this feature falls back to reinforcing importance through typography, weight, size, and spacing only, with no new hue — and User Story 2's colour-specific requirements (FR-001 through FR-004) are dropped in favour of the non-colour cues in FR-005.
- The existing definition-of-done checks (`npm run check`, `npm run build`, `scripts/assert-no-email.mjs`) and the `ux-design-reviewer`, `simplicity-reviewer`, and `content-integrity-reviewer` subagents remain the acceptance gate.
