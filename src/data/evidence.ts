import type { EvidenceExample } from "./types";

/**
 * "Evidence" — 1 to 4 examples (FR-007), target 3–4. All four below are drawn from the
 * current Credit Sense role in `LSINCLAIR_Resume_TechLead.pdf` and stay present-focused,
 * not chronological (FR-023). Wording is pending Lee's review for tone and emphasis.
 * Every concrete detail traces to the résumé — no invented metrics or outcomes (FR-024).
 */
const evidence = [
  {
    id: "regulated-platform",
    title: "Leading engineering for a regulated lending platform",
    body: "For more than six years, I have led the nine-person engineering team responsible for a long-lived platform in regulated lending. My role covers the team, its engineering practice and the quality and delivery of the platform. Before that, I spent six years as its product owner.",
    theme: "leadership",
  },
  {
    id: "operating-standard",
    title: "Raising the engineering operating standard",
    body: "I set our coding and documentation standards, along with the approach to testing, observability, SDLC and CI/CD. I have helped bring a legacy codebase back to a maintainable state and run workshops to share what we learn across the team.",
    theme: "engineering-practice",
  },
  {
    id: "durable-capability",
    title: "Building capability that outlasts the individual",
    body: "Through mentoring, regular 1:1s and a technical competency framework, I helped the team rely less on individual experts. The platform now has broader ownership and the team can operate more independently.",
    theme: "capability",
  },
  {
    id: "ai-operating-model",
    title: "Working out what AI changes about engineering",
    body: "I lead the team’s adoption of AI-assisted engineering. That includes a structured onboarding programme for agentic workflows and internal tools for code review and test generation. I am interested in what changes when AI can produce a substantial amount of code, and I am still working through the answer.",
    theme: "ai-operating-model",
    aiFraming: true,
  },
] satisfies EvidenceExample[];

export default evidence;
