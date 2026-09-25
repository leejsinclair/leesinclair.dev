import type { EditorialCard, EditorialSection, LinkDefinition } from "./types";

export const editorialStructure = {
  navigationItems: 5,
  contentPillars: 3,
  /** Homepage shows this many of each pillar's most recent essays, newest first. */
  homeEssayCards: 2,
  aboutEvidencePreview: 3,
} as const;

export const navigation = [
  { label: "Leadership", href: "/#leadership" },
  { label: "History", href: "/#history" },
  { label: "Myths", href: "/#myths" },
  { label: "Thoughts", href: "/thoughts" },
  { label: "About", href: "/#about" },
] satisfies LinkDefinition[];

export const homeCredibilityLine =
  "Every essay here links myth, history, and leadership is part of my journey, I'm and engaged learner and problem solver. This page is an small insight into the things I consider";

export const contentPillars = [
  {
    id: "leadership",
    title: "Leadership",
    description:
      "Working principles, decision frameworks, and reflections from leading teams and technology systems.",
    href: "#leadership",
    linkLabel: "Explore leadership",
  },
  {
    id: "history",
    title: "History",
    description:
      "Historical reading, turning points, and case studies that sharpen judgement about the present.",
    href: "#history",
    linkLabel: "Explore history",
  },
  {
    id: "myths",
    title: "Myths",
    description:
      "Interpretations of archetype, ritual, order, and the stories institutions tell about themselves.",
    href: "#myths",
    linkLabel: "Explore myths",
  },
] satisfies EditorialCard[];

export const essayLinkLabel = "Read the essay";

export const pillarsOverview = {
  eyebrow: "Three pillars",
} as const;

export const mythsSection = {
  eyebrow: "Myths",
  title: "Recurring stories, modern consequences.",
  intro:
    "Old stories read seriously, not as museum pieces: essays that connect symbol, ritual, and archetype to the language institutions still use to describe themselves.",
  archive: { href: "/myths", label: "View all myths essays" },
} satisfies EditorialSection;

export const historySection = {
  eyebrow: "History",
  title: "Case studies, long memory, and the cost of shallow timelines.",
  intro:
    "Events read in sequence, not as isolated anecdotes: turning points, comparisons across eras, and essays that make the present less narrow.",
  archive: { href: "/history", label: "View all history essays" },
} satisfies EditorialSection;

export const leadershipSection = {
  eyebrow: "Leadership",
  title: "Principles that hold, and the writing that tests them.",
  intro:
    "How I think about leading teams: standing principles, a philosophy of autonomy, mastery, and purpose, and writing that puts those ideas to work.",
  archive: { href: "/leadership", label: "View all leadership essays" },
} satisfies EditorialSection;

export const aboutSection = {
  eyebrow: "About",
  title: "Why this site exists, and where it meets practice.",
  intro:
    "This site is designed to hold long-form thinking without drifting away from real responsibility. It connects ideas about myth and history with the daily work of leading technology, teams, and institutions.",
  thoughts: {
    title: "Random thoughts",
    summary:
      "Short, unfiled notes, posted as they come to mind rather than worked into a full essay.",
    archive: { href: "/thoughts", label: "See all random thoughts" },
  },
};

export const leadershipDetailLabels = {
  principlesEyebrow: "How I think",
  principlesTitle: "Principles that guide the work",
  philosophyEyebrow: "Leadership philosophy",
  philosophyTitle: "Autonomy, mastery, and purpose",
} as const;

export const contactLabels = {
  linkedIn: "LinkedIn",
  linkedInPlaceholder: "LinkedIn coming soon",
} as const;
