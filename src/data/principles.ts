import type { Principle } from "./types";

/**
 * "How I Think" — 3 or 4 principles (FR-006), each traceable to a core leadership idea via
 * `sourceIdea` (never rendered). No generic competency language (Constitution V).
 */
const principles = [
  {
    id: "whole-system",
    title: "The problem is usually the system, not the person",
    body: "When delivery slips or quality drops, asking people to try harder rarely fixes it. I look first at ownership, handovers, incentives and the way the work is set up.",
    sourceIdea: "systems-thinking",
  },
  {
    id: "leverage-outlasts",
    title: "Make yourself less necessary",
    body: "Good leadership should make a team less dependent on its leader. I invest in people, clear standards and shared context so that good decisions do not have to come through me.",
    sourceIdea: "leverage",
  },
  {
    id: "motion-vs-progress",
    title: "Motion is not progress",
    body: "A busy team can still be going nowhere. I keep the reason for the work connected to what we build and how we build it. Feedback and lessons from delivery are part of the work, not an afterthought.",
    sourceIdea: "activity-vs-progress",
  },
  {
    id: "autonomy-needs-clarity",
    title: "Autonomy needs clarity to work",
    body: "Ownership works when people understand the goal, the boundaries and how they will get feedback. They also need to be able to say when they are wrong. Without that clarity, autonomy is just ambiguity.",
    sourceIdea: "autonomy-clarity",
  },
] satisfies Principle[];

export default principles;
