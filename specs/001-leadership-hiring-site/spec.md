# Feature Specification: Personal Leadership Website — An Argument for Hiring Lee Sinclair

**Feature Branch**: `001-leadership-hiring-site`

**Created**: 2026-08-29

**Status**: Draft

**Input**: User description: "One-page personal leadership website for Lee Sinclair. Not a portfolio template — an argument for hiring Lee. A CTO / Head of Engineering / Engineering Director should understand within 60–90 seconds what Lee does, what makes him different, why his technical depth is credible, how he thinks about people and organisations, and why they should talk to him. Positioning: an experienced technology leader (Engineering → Product → Delivery → People → Systems) with deep technical experience whose greatest leverage is now through leadership. Differentiator: deep technical experience + systems thinking + genuine people leadership. Six sections: Hero, The Intersection, How I Think, Evidence, Leadership Philosophy, Closing. Dark-mode-first, sophisticated, restrained, editorial design. Strict factual integrity — invent nothing."

## Overview

This is a single web page whose job is to persuade a senior technology hiring decision-maker to start a conversation with Lee Sinclair. It is not a résumé, a portfolio, or a career summary. Every section exists to advance one argument: _Lee understands the whole system — technology, people, product, delivery and organisation — and can make those parts work well together._

The page must land that argument fast (target: 60–90 seconds of reading), back it with real evidence, and demonstrate judgement through its own restraint in writing and design.

## Clarifications

### Session 2026-08-29

- Q: For the first public version, must the Evidence section contain Lee's real examples, or can it launch with that section hidden? → A: v1 launches with however many real examples are ready (minimum 1–2); the section scales up to 3–4 as Lee supplies more. It never ships empty or with invented content.
- Q: Should the intersection system diagram have subtle motion or be completely static? → A: One subtle, one-time reveal when the section scrolls into view; fully static (no reveal) under reduced-motion. No ongoing/ambient motion.
- Q: Should the site include visitor analytics, or none at all? → A: One privacy-friendly, cookieless analytics service — aggregate page views and referrers only, no personal data, no cross-site tracking, no consent banner required.
- Q: Lock the hero positioning wording now, or carry it as a draft pending Lee's sign-off? → A: Carry proposed default wording that the build uses, explicitly marked as pending Lee's sign-off. Proposed: positioning line "I build the conditions for people and technology to do their best work together."; hero role line "Technology leader with engineering depth, systems thinking and a focus on people."
- Q: Where should the personal dimension live on the page? → A: As a brief aside / margin note attached to the "How I Think" section — not a dedicated section and not a hobby list. Page stays at six major sections.
- Q: How should visitors contact Lee — email, LinkedIn, or both? → A: LinkedIn only, to avoid email-address harvesting. No email address, `mailto:` link, obfuscated email, or email field in structured data appears anywhere on the page. The single "Let's talk" call to action opens Lee's LinkedIn profile. The LinkedIn URL becomes a hard launch blocker — there is no fallback contact route.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Hiring decision-maker grasps the argument in 60–90 seconds (Priority: P1)

A CTO, Head of Engineering, Engineering Director, technology executive, founder, or senior hiring manager opens the page — often from a LinkedIn message, referral, or search. In roughly a minute they need to understand what Lee does, what makes him different, why his technical depth is credible, how he thinks about people and organisations, and why a conversation is worth their time. The intended reaction: _"This person understands the whole system. I'd like to talk to him."_

**Why this priority**: This is the entire purpose of the site. If a busy executive cannot extract the argument quickly, nothing else matters.

**Independent Test**: Give five people from the target audience the URL, let them read for up to 90 seconds, then ask them to state Lee's role, his differentiator, and why they might contact him. The story passes if at least four answer all three correctly and describe Lee as a _current_ technology leader (not a former engineer).

**Acceptance Scenarios**:

1. **Given** a first-time visitor on a standard laptop viewport (1366×768), **When** the hero renders, **Then** Lee's name, a short role line, a leadership positioning line, exactly one supporting statement, and the single "Let's talk" call to action are all visible without scrolling.
2. **Given** a visitor who scrolls the whole page, **When** they reach the end, **Then** they have passed through, in order: the hero, the intersection of disciplines, three to four thinking principles (with the personal-dimension aside), one to four evidence examples, the Autonomy / Mastery / Purpose philosophy, and a closing invitation with the LinkedIn call to action.
3. **Given** a visitor who has read for 90 seconds, **When** asked to summarise, **Then** they describe Lee as an experienced technology leader with deep technical experience, and name his differentiator as the combination of technical depth, systems thinking, and people leadership.
4. **Given** the full page of copy, **When** measured, **Then** the core narrative can be read end to end in under three minutes.

---

### User Story 2 - Starting a conversation is frictionless (Priority: P1)

A convinced visitor wants to reach Lee immediately. The single "Let's talk" call to action opens Lee's LinkedIn profile, where they can connect or message him. It appears in the hero and is repeated in the closing section so a visitor who reads to the end never has to scroll back. No email address is published anywhere on the page — contact is via LinkedIn only, to avoid address harvesting.

**Why this priority**: A persuaded reader who cannot easily act is a lost opportunity. Contact is the conversion event for this page.

**Independent Test**: Click "Let's talk" in the hero and confirm Lee's LinkedIn profile opens in a new tab. Repeat from the closing section. Inspect the rendered page and its HTML source and confirm no email address, `mailto:` link, or email field in structured data appears anywhere. Passes if both LinkedIn actions work and no email is exposed.

**Acceptance Scenarios**:

1. **Given** any visitor, **When** they activate "Let's talk" (in the hero or the closing), **Then** Lee's LinkedIn profile opens in a new browsing context.
2. **Given** the rendered page and its HTML source, **When** inspected, **Then** no email address, `mailto:` link, obfuscated email, or email field in structured data is present.
3. **Given** the LinkedIn URL has not been supplied, **When** the site is built, **Then** the build emits a visible warning and the call to action renders as a clearly marked, non-interactive placeholder — never a broken or empty link — and the site MUST NOT be deployed in this state.
4. **Given** a visitor with JavaScript disabled, **When** they use the call to action, **Then** it still works (a plain link to the LinkedIn profile).

---

### User Story 3 - The design itself demonstrates judgement (Priority: P2)

The visual and editorial design is dark-mode-first, sophisticated, restrained, and editorial — closer to a technical notebook, an architecture sketch, or a dark IDE than a SaaS landing page. The "intersection" of disciplines is shown as an understated system visualisation, not a logo wall or a grid of cards. The reader should register, subconsciously, that the person behind this page exercises restraint and taste.

**Why this priority**: The medium is part of the message. A cluttered or clichéd page undermines the claim of systems-level judgement, but it does not block the core argument from being read.

**Independent Test**: Have a designer and a hiring reviewer inspect the page against the explicit "avoid" list. Passes if none of those patterns are present and both reviewers independently describe the design as restrained, considered, and editorial.

**Acceptance Scenarios**:

1. **Given** the page loads, **When** inspected, **Then** the background is near-black or charcoal, a single restrained accent colour is used, borders are subtle, whitespace is generous, and typographic hierarchy is strong and clear.
2. **Given** the intersection section, **When** viewed, **Then** Technology, People, Product, Delivery and Systems are presented as visibly connected parts of one system, rendered as an understated diagram rather than logos or a card grid.
3. **Given** the page, **When** checked against the avoid list, **Then** it contains no SaaS landing-page patterns, gradient overload, particle effects, stock photography, tech-logo walls, excessive cards, excessive animation, or generic developer-portfolio patterns.
4. **Given** a visitor who prefers reduced motion, **When** the page loads, **Then** no decorative animation plays.

---

### User Story 4 - Accessible and fast for every visitor (Priority: P2)

The page works for keyboard users, screen-reader users, visitors on slow connections, and everyone from a small phone to a large desktop display. It uses semantic HTML, loads quickly, and ships minimal client-side JavaScript.

**Why this priority**: A senior audience uses varied devices and environments; a page that fails on a phone or a keyboard reads as careless. Not a blocker for the argument itself, hence P2.

**Independent Test**: Navigate the entire page with the keyboard only; resize from 320px to 2560px; load with JavaScript disabled and on a throttled connection. Passes if every interactive element is reachable with visible focus, there is no horizontal scrolling at any width, and all content is readable in every condition.

**Acceptance Scenarios**:

1. **Given** a keyboard-only visitor, **When** they tab through the page, **Then** every interactive element is reachable in a logical order with a clearly visible focus indicator.
2. **Given** any viewport width from 320px to 2560px, **When** the page renders, **Then** there is no horizontal scrolling, line lengths stay readable, and the hierarchy is preserved.
3. **Given** a visitor with JavaScript disabled, **When** the page loads, **Then** all content and the call to action are fully available.
4. **Given** a throttled connection, **When** the page loads, **Then** the text content becomes readable before any decorative asset finishes loading.

---

### User Story 5 - Discoverable and shareable (Priority: P2)

When someone searches for Lee or shares the page in a message or on social media, the result presents well: a clear title, a clear description, and a rich preview. Search engines and assistants can identify the page as being about Lee as a person.

**Why this priority**: Referrals and shares are a primary distribution path for this page; a broken or blank preview wastes that reach.

**Independent Test**: Inspect the page metadata; paste the URL into a social composer and a messaging app. Passes if the title and description match the specified copy and a rich preview with title, description and image appears.

**Acceptance Scenarios**:

1. **Given** the page, **When** its metadata is inspected, **Then** the title is "Lee Sinclair | Technology Leader & Systems Thinker" and the description is "Technology leader combining engineering, product, delivery and people leadership to build capable teams and better technology systems."
2. **Given** the URL is shared on a major platform, **When** the preview renders, **Then** it shows the configured title, description, and a share image.
3. **Given** the page structure, **When** examined, **Then** there is exactly one top-level heading and a logical heading hierarchy throughout.
4. **Given** the page, **When** a search engine or assistant parses it, **Then** structured metadata identifies Lee as a person.

---

### User Story 6 - Content stays editable without redesign (Priority: P3)

Positioning copy, the three-to-four principles, the one-to-four evidence examples, the personal-interest thread, and the LinkedIn URL can all be revised by editing content, not layout or markup. Missing content degrades gracefully rather than breaking the page or showing invented detail.

**Why this priority**: The evidence and wording will be refined over time and some facts are not yet supplied; the page must accommodate that without a rebuild. It is P3 because the initial launch can proceed once the structure exists.

**Independent Test**: Change an evidence example, a principle, and the LinkedIn URL by editing content only, then rebuild. Passes if all three changes appear with no layout code touched, and adding or removing one evidence example still produces a well-laid-out section (tested at 1, 2, 3, and 4 examples).

**Acceptance Scenarios**:

1. **Given** an editor updates an evidence example's text, **When** the site is rebuilt, **Then** the change appears with no change to structural markup or layout.
2. **Given** the number of evidence examples changes between one and four, **When** the site is built, **Then** the section lays out well at every count and no fabricated facts are shown to end visitors.
3. **Given** the LinkedIn URL changes, **When** updated in one place, **Then** every reference on the page (both call-to-action instances and the structured data) reflects the new value.

---

### Edge Cases

- **LinkedIn URL not configured**: because LinkedIn is the only contact route, this is a release-blocking misconfiguration. The build emits a visible warning; the "Let's talk" call to action renders as a clearly marked, non-interactive placeholder (never a broken or empty link); the site is not fit to deploy until the URL is set.
- **Evidence content partially supplied**: the section renders with whatever real examples exist (minimum one) and lays them out well at one, two, three, or four; it is never shown empty and is never padded with invented employers, projects, metrics or outcomes.
- **JavaScript disabled or fails to load**: all six sections, all copy, and the call to action work; only enhancement-level motion is absent.
- **Reduced-motion preference**: all decorative transitions and the diagram's one-time reveal are suppressed; the diagram renders immediately in its final state and remains fully legible.
- **Very small viewport (~320px)**: the system diagram collapses to a legible stacked or simplified form; no content is clipped or overflowed.
- **Very large viewport (~2560px)**: content is constrained to a readable measure; the layout does not stretch to unreadable line lengths.
- **Print / PDF export**: the page is readable, link destinations are discernible, and dark backgrounds do not render as unusable ink-heavy blocks.
- **Slow connection**: text is readable before decorative SVG or images arrive.
- **Screen reader**: the system diagram has a meaningful text alternative describing the relationship between the disciplines.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: The site MUST be a single page composed of six major sections in this order: Hero, The Intersection, How I Think, Evidence, Leadership Philosophy, Closing.
- **FR-002**: The Hero MUST present Lee's name, a short role line, a leadership positioning line, exactly one concise supporting statement, and a single call to action labelled "Let's talk" that opens Lee's LinkedIn profile. The role line and positioning line wording is fixed by FR-004. There is no secondary call to action.
- **FR-003**: All positioning and body copy MUST present Lee as a current technology leader with deep technical experience and MUST NOT imply that he has left engineering.
- **FR-004**: The page MUST express the central idea that Lee builds the conditions for people and technology to work well together (not merely that he builds software). The build MUST use this proposed default wording, carried in content as an explicitly marked draft pending Lee's sign-off: positioning line "I build the conditions for people and technology to do their best work together."; hero role line "Technology leader with engineering depth, systems thinking and a focus on people." The wording MAY be revised on sign-off, but this meaning MUST be preserved.
- **FR-005**: The Intersection section MUST present Technology, People, Product, Delivery and Systems as connected parts of one system, using an understated visual representation (e.g. a system diagram in SVG/CSS) rather than a logo wall or a grid of cards.
- **FR-005a**: The intersection diagram MAY play a single, subtle, one-time reveal animation when the section first scrolls into view. It MUST NOT use ongoing or ambient motion. When reduced motion is requested, the diagram MUST render immediately in its final state with no reveal.
- **FR-006**: The How I Think section MUST present three or four distinct principles derived from the core leadership ideas (systems thinking; leverage that increases system capability rather than dependence on the leader; activity versus progress and the Why → What → How → Feedback → Learning chain; autonomy requiring clarity, boundaries, feedback, psychological safety and capability). It MUST avoid generic leadership-competency language.
- **FR-007**: The Evidence section MUST present concise examples that connect Lee's philosophy to real experience, drawn only from factual source material supplied by Lee (see **Factual Source Material**). It MUST render correctly with as few as one and as many as four examples, MUST NOT display fewer than one, and MUST NOT pad with invented content; the target once content is complete is three or four.
- **FR-008**: The Evidence section MUST be able to represent Lee's AI-assisted and agentic engineering work (e.g. PR/code analysis, multi-agent test generation, supervised agentic task loops, specification auditing, AI-assisted engineering workflows) framed as _understanding how the engineering operating model changes when AI can produce substantial amounts of code_ — and MUST NOT frame Lee as an "AI expert".
- **FR-009**: The Leadership Philosophy section MUST address Autonomy, Mastery and Purpose and MUST briefly connect them to building capable teams.
- **FR-010**: The Closing section MUST present a concise invitation to discuss leadership problems where technology matters but the hardest problems are not purely technical, and MUST repeat the "Let's talk" call to action that opens Lee's LinkedIn profile.
- **FR-011**: A small personal dimension (drawn from history, philosophy, mythology, Stoicism, drawing and painting, and UX/design) MUST appear as a brief aside or margin note attached to the How I Think section — not as a dedicated major section and not as a hobby list. It MUST reinforce intellectual curiosity, observation, systems thinking or deliberate practice, and MUST remain legible and correctly placed on small viewports (e.g. collapsing inline rather than into a true margin).
- **FR-012**: The "Let's talk" call to action MUST open Lee's configured LinkedIn profile URL in a new browsing context (`target="_blank"` with `rel="noopener"`), as a plain link that works without JavaScript. The same call to action appears in the Hero and the Closing, both resolving from one configured value.
- **FR-012a**: The page MUST NOT expose an email address anywhere — not as visible text, a `mailto:` link, an encoded or script-assembled form, an image, or a field in structured metadata. Contact is via LinkedIn only.
- **FR-013**: When the LinkedIn profile URL is not configured, the call to action MUST render as a clearly marked, non-interactive placeholder (never a broken or empty link) and the build MUST emit a visible warning. Because LinkedIn is the sole contact route, the site MUST NOT be deployed until the URL is configured.
- **FR-014**: Every interactive element MUST be reachable and operable by keyboard, in a logical order, with a visible focus indicator.
- **FR-015**: The page MUST use semantic HTML with exactly one top-level heading and a correct, logical heading hierarchy.
- **FR-016**: The layout MUST be responsive and free of horizontal scrolling from 320px to at least 2560px viewport width, preserving readable line length and visual hierarchy.
- **FR-017**: The visual design MUST be dark-mode-first: a near-black or charcoal background, a single restrained accent colour, subtle borders, generous whitespace, and strong typographic hierarchy.
- **FR-018**: The design MUST NOT use SaaS landing-page patterns, gradient overload, particle effects, stock photography, tech-logo walls, excessive cards, excessive animation, or generic developer-portfolio patterns.
- **FR-019**: Any motion MUST be purposeful and subtle, MUST NOT interfere with reading, and MUST be fully suppressed when the visitor has requested reduced motion.
- **FR-020**: All primary content and the call to action MUST function without client-side JavaScript; JavaScript MUST be enhancement only.
- **FR-021**: The page MUST include SEO metadata: the specified title and description, Open Graph metadata (title, description, type, URL, image), and structured metadata describing Lee as a person.
- **FR-022**: Editable content — positioning copy, principles, evidence examples, personal-dimension items, and the LinkedIn URL — MUST be maintainable without altering structural markup or layout code, and MUST be defined in a single authoritative place per value.
- **FR-023**: The site MUST NOT reproduce Lee's LinkedIn profile as a curriculum vitae or a chronological job history.
- **FR-024**: Where required factual content is not yet available, the affected section MUST be structured to accept it later and MUST NOT display fabricated facts (employers, roles, dates, metrics, team sizes, technologies, outcomes, or comparative claims) to end visitors.
- **FR-025**: The page MUST NOT load any analytics or tracking beyond a single privacy-friendly, cookieless service that records aggregate page views and referrers only. That service MUST NOT set cookies, collect personal data, fingerprint visitors, or track across sites, and MUST NOT require a consent banner. No other third-party trackers, advertising, or behavioural analytics are permitted.
- **FR-025a**: The analytics service MUST be loaded such that its failure or absence has no visible effect on the page and does not delay content becoming readable.
- **FR-026**: An Open Graph share image MUST be referenced; if the final image is not yet available, the metadata structure MUST support adding it without other changes.
- **FR-027**: The system diagram in the Intersection section MUST have a meaningful text alternative for assistive technology that conveys the relationship between the disciplines.

### Key Entities _(content model)_

- **Profile**: the single source of identity and contact facts — name, leadership positioning line, hero supporting statement, central-idea statement, LinkedIn profile URL (the only contact route), canonical site URL, Open Graph share image reference. No email address is stored or rendered.
- **Discipline Node**: one of Technology, People, Product, Delivery, Systems — a label plus its connections to the other nodes, used to render the intersection diagram and its text alternative.
- **Principle**: a short title and a concise explanation; three or four exist, each traceable to one of the core leadership ideas.
- **Evidence Example**: a short title, a concise description, and an optional theme tag; between one and four exist at any time (target three or four once content is complete); each is sourced only from factual material supplied by Lee.
- **Philosophy Pillar**: one of Autonomy, Mastery, Purpose — a short statement connecting it to building capable teams.
- **Personal Thread**: a small ordered set of interests, expressed as narrative texture rather than a list, each chosen because it reinforces curiosity, observation, systems thinking or deliberate practice.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: In a usability check with five people from the target audience, after no more than 90 seconds on the page, at least four correctly state Lee's current role type, his differentiator, and that the way to reach him is via LinkedIn.
- **SC-002**: On a 1366×768 viewport, the hero shows Lee's name, role line, positioning line, supporting statement, and the "Let's talk" call to action without any scrolling.
- **SC-003**: The full six-section narrative can be read end to end in under three minutes.
- **SC-004**: 100% of interactive elements are operable by keyboard alone, each with a visible focus indicator, in a logical order.
- **SC-005**: At every viewport width from 320px to 2560px there is no horizontal scrolling and no body text below a legible size.
- **SC-006**: The page reaches a readable, usable state within one second on a typical broadband connection, and remains fully readable with JavaScript disabled.
- **SC-007**: When reduced motion is requested, 100% of decorative motion is suppressed and the system diagram remains legible.
- **SC-008**: Sharing the URL on major social and messaging platforms produces a preview showing the configured title, description, and share image.
- **SC-009**: An independent design reviewer confirms that zero patterns from the "avoid" list (FR-018) are present.
- **SC-010**: A fact-check review confirms that every concrete claim on the page traces to source material supplied by Lee, with zero invented employers, roles, dates, metrics, team sizes, technologies, or outcomes.
- **SC-011**: A content editor can update any evidence example, principle, or contact detail, and see it reflected everywhere, in under five minutes without editing layout code.
- **SC-012**: In a blind comparison against five other candidate pages, at least four of five hiring reviewers recall Lee's positioning unprompted and express interest in a conversation.
- **SC-013**: The Evidence section renders with a balanced, intentional layout at every example count from one to four, and is never shown with zero examples.
- **SC-014**: With the analytics service blocked or removed, the page is visually and functionally identical and reaches a readable state no later than with it present.
- **SC-015**: A review of the rendered page and its HTML source finds zero email addresses, `mailto:` links, or email fields in structured data; the only contact affordance is the "Let's talk" link to LinkedIn.

## Assumptions

- The only contact route is Lee's LinkedIn profile, opened by the "Let's talk" call to action in the hero and the closing. No email address is published anywhere on the page or in its metadata, to avoid address harvesting. There is no server-side contact form.
- Lee's LinkedIn profile URL is a hard launch blocker: it is the sole contact route, so the site cannot be deployed until it is configured. Until then the call to action renders as a clearly marked placeholder and the build emits a warning.
- Specific evidence content is drawn from Lee's supplied résumé (`LSINCLAIR_Resume_TechLead.pdf`, repo root); the drafted examples are recorded under **Factual Source Material** below. This spec defines the structure and the factual guardrails; the drafted wording still needs Lee's review for tone and emphasis.
- Exactly one privacy-friendly, cookieless analytics service is included (aggregate page views and referrers only); no other cookies or third-party trackers, consistent with the restraint ethos and portable static output. The specific provider is a planning decision.
- The site is a single page in English, with no navigation menu required; in-page anchor links are optional given the short length.
- The design is dark-mode-first with no mandatory light theme in the initial version; a light theme is an optional later enhancement.
- The deploy target is undecided (per project intent); build output stays portable static files with no host-specific configuration.
- One Open Graph share image will be produced at conventional dimensions (1200×630).
- "60–90 seconds" is the comprehension goal for a human reader, not a technical performance metric.
- Content that is not yet supplied is acceptable at spec-approval time. The launch blockers are: the LinkedIn URL (hard — the only contact route, no fallback), positioning sign-off, Lee's review of the résumé-drafted evidence examples, personal-thread confirmation, and the share image (all tracked under Dependencies). Evidence examples can still be revised or added after launch without a rebuild.

## Dependencies

- **From Lee, before launch**: the LinkedIn profile URL (hard blocker — the only contact route, no fallback; the site cannot deploy without it); sign-off on (or revision of) the draft positioning line and hero role line carried in the spec; review of the four evidence examples drafted from his résumé (see **Factual Source Material**), confirming wording and emphasis; confirmation of the personal-interest thread (only UX/design is résumé-supported — the rest need Lee's confirmation); and an Open Graph share image.
- **Supplied**: Lee's résumé `LSINCLAIR_Resume_TechLead.pdf` (repo root) — the authoritative factual source for the evidence examples, career arc, and technical-credibility claims. Used as supporting fact only, never reproduced as a CV (FR-023).
- **From the repository**: the existing Astro + TypeScript scaffolding described in the project intent.
- **Project constitution**: `.specify/memory/constitution.md` is currently an unfilled template. It does not block this spec, but populating it (via `/speckit.constitution`) before planning would let the plan reference real project principles.

## Factual Source Material

Lee supplied his résumé (`LSINCLAIR_Resume_TechLead.pdf`, repo root) as the authoritative factual source. It is used as supporting fact, never reproduced as a chronological CV (FR-023). Facts it establishes:

- **Career arc**: 20+ years across software engineering, product ownership, and people leadership — consistent with the Engineering → Product → Delivery → People → Systems positioning.
- **Current role**: since December 2019, Technical Team Leader & Engineering Manager at Credit Sense — leads a nine-person engineering team delivering a complex, long-lived platform in Australia's regulated lending environment; owns people, engineering practice, delivery, product, and technical governance; was Product Owner of the same platform for six years.
- **Current technical credibility**: hands-on across the stack (Node.js, TypeScript, T-SQL, Bash, React) with architectural oversight of the platform — supports FR-003 (Lee is a current, not former, engineer).
- **Leadership framing**: the résumé summary independently describes "a leadership approach grounded in autonomy, mastery, and purpose" — corroborates the Leadership Philosophy section and the central idea (FR-004, FR-009).
- **Earlier career** (available as optional supporting texture, not primary evidence): independent consulting with two CTO placements (BETIA, newNRG); Product Director / Product Manager roles; a User Experience Architect role. Graduate Certificate of eBusiness and Bachelor of Business (University of Southern Queensland).
- **Personal dimension**: only UX / design is résumé-supported ("Usability & UX", directed UX/UI design, former UX Architect). History, philosophy, mythology, Stoicism, drawing and painting are **not** in the résumé and require Lee's confirmation before use (FR-011).
- **Contact details**: the résumé lists an email address and phone number. These are deliberately **not** published on the site — contact is via LinkedIn only (FR-012a). The email is retained only for internal identification/attribution, never rendered.

### Drafted evidence examples (pending Lee's review)

All four are drawn from the current Credit Sense role and stay present-focused rather than chronological. They satisfy FR-007 (one-to-four examples, target three-to-four) and FR-008 (AI framing).

1. **Leading engineering for a regulated fintech platform** — 6+ years leading a nine-person engineering team responsible for the delivery, quality and evolution of a complex, long-lived platform in a regulated lending environment; owns people, practice, delivery, product and technical governance, and held Product Ownership of the platform for six years.
2. **Raising the engineering operating standard** — established coding and documentation standards and engineering governance covering software quality, testing, observability, SDLC and CI/CD; guided a legacy codebase toward a maintainable state; runs internal best-practice workshops to lift capability across the team.
3. **Building capability that outlasts the individual** — structured mentorship, regular 1:1s and technical competency frameworks that moved the platform from reliance on individual expertise to sustainable team ownership, reducing key-person risk and letting the team operate with more independence.
4. **Working out what AI changes about engineering** — leads the team's adoption of AI-assisted engineering, including a structured onboarding program on agentic workflows and internal tooling for automated code review and test generation, framed as how the engineering operating model changes when AI can produce substantial amounts of code.

The résumé also contains quantified outcomes from earlier roles (2010–2018). These are deliberately omitted from the drafted evidence set to keep it current and non-CV, but are available if Lee wants to use them.

## Out of Scope

- A blog, articles section, or writing feed.
- A CV / résumé page or a downloadable résumé.
- A project portfolio or case-study gallery.
- A server-side contact form or any backend service.
- Any email-based contact route — a published address, a `mailto:` link, an obfuscated or script-assembled email, or a contact form. Contact is via LinkedIn only.
- A content management system or admin interface.
- Multiple pages, routing, or a navigation structure beyond in-page anchors.
- Internationalisation or multiple languages.
- A light theme (initial version).
- Any analytics beyond a single privacy-friendly, cookieless page-view/referrer counter; no dashboards, behavioural tracking, or cross-site tracking.
