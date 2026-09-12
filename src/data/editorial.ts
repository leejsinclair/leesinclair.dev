import type {
  EditorialCard,
  EditorialSection,
  LinkDefinition,
} from "./types";

export const editorialStructure = {
  navigationItems: 4,
  contentPillars: 3,
  mythsCards: 3,
  historyCards: 3,
  leadershipCards: 1,
  aboutCards: 2,
  aboutEvidencePreview: 3,
} as const;

export const navigation = [
  { label: "Myths", href: "/#myths" },
  { label: "History", href: "/#history" },
  { label: "Leadership", href: "/#leadership" },
  { label: "About", href: "/#about" },
] satisfies LinkDefinition[];

export const homeTrustSection = {
  ariaLabel: "Why this writing is trustworthy",
  title: "Why readers trust this work",
} as const;

export const homeTrustHighlights = [
  {
    title: "Grounded in practice",
    body: "Leadership writing anchored in real technology delivery, not abstract commentary.",
  },
  {
    title: "Disciplined editorial lens",
    body: "Myth, history, and leadership are treated as connected tools for judgement.",
  },
  {
    title: "Transparent argumentation",
    body: "Long-form essays use clear structure, concise summaries, and direct argument.",
  },
] satisfies { title: string; body: string }[];

export const contentPillars = [
  {
    id: "myths",
    title: "Myths",
    description:
      "Interpretations of archetype, ritual, order, and the stories institutions tell about themselves.",
    href: "#myths",
    linkLabel: "Explore myths",
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
    id: "leadership",
    title: "Leadership",
    description:
      "Working principles, decision frameworks, and reflections from leading teams and technology systems.",
    href: "#leadership",
    linkLabel: "Explore leadership",
  },
] satisfies EditorialCard[];

export const pillarsOverview = {
  eyebrow: "Three pillars",
  title: "Clear lanes for myth, history, and leadership.",
  intro:
    "Myths explain why institutions behave as they do, history supplies the evidence, and leadership turns both into practice. Start wherever your problem sits.",
} as const;

export const mythsSection = {
  eyebrow: "Myths",
  title: "Recurring stories, modern consequences.",
  intro:
    "Old stories read seriously, not as museum pieces: essays that connect symbol, ritual, and archetype to the language institutions still use to describe themselves.",
  cards: [
    {
      id: "myths-archetypes",
      title: "Athena: goddess of disciplined intelligence",
      description:
        "From a Bronze Age cult title to the Classical patron of the polis: how Athena's warfare, craft, and wisdom trace one idea — skilled intelligence applied to human order.",
      href: "/myths/athena",
      linkLabel: "Read the essay",
    },
    {
      id: "myths-klumpe-dumpe",
      title: "Klumpe-Dumpe and the Tragedy of Grantræet",
      description:
        "Andersen borrowed a happy ending from the untitled fragment that would become his Klods-Hans tale eleven years later — and The Fir Tree dies of mistaking that borrowed plot for how the world actually works.",
      href: "/myths/klumpe-dumpe",
      linkLabel: "Read the essay",
    },
    {
      id: "myths-gilgamesh",
      title: "From God to Man: Gilgamesh's Descent into Humanity",
      description:
        "The Epic of Gilgamesh traces a semi-divine king's slow acceptance of mortality — from tyrannical excess through Enkidu's death to a truer, human idea of what endures.",
      href: "/myths/gilgamesh",
      linkLabel: "Read the essay",
    },
  ],
} satisfies EditorialSection;

export const historySection = {
  eyebrow: "History",
  title: "Case studies, long memory, and the cost of shallow timelines.",
  intro:
    "Events read in sequence, not as isolated anecdotes: turning points, comparisons across eras, and essays that make the present less narrow.",
  cards: [
    {
      id: "history-rod-of-asclepius",
      title: "The Rod of Asclepius: from divine attribute to medical emblem",
      description:
        "The single-serpent staff is the most historically authentic emblem of medicine — not because of one founding myth, but because institutional transmission, Roman and then modern, carried it forward while a nineteenth-century publishing habit gave clinical medicine a second, unrelated symbol.",
      href: "/history/rod-of-asclepius",
      linkLabel: "Read the essay",
    },
    {
      id: "history-beowulf-and-gilgamesh",
      title:
        "Heroic Greatness and the Corruption of the Soul: Beowulf and Gilgamesh",
      description:
        "Beowulf begins as an admirable warrior and Gilgamesh as an oppressive king, yet both epics arrive at the same question — what happens when a society's highest virtues become insufficient for the world that society must preserve.",
      href: "/history/beowulf-and-gilgamesh",
      linkLabel: "Read the essay",
    },
    {
      id: "history-context",
      title: "Context before certainty",
      description:
        "Timelines and context that support slower, better arguments than the instant take.",
      href: "#pillars",
      linkLabel: "See the three pillars",
    },
  ],
} satisfies EditorialSection;

export const leadershipSection = {
  eyebrow: "Leadership",
  title: "Principles that hold, and the writing that tests them.",
  intro:
    "How I think about leading teams — standing principles and a philosophy of autonomy, mastery, and purpose — and writing that puts those ideas to work.",
  cards: [
    {
      id: "leadership-ai-assisted-engineering",
      title: "AI-assisted software engineering",
      description:
        "Why the productivity story is far less settled than most organisations assume, and what leaders risk losing in developer capability, wellbeing, and identity if they reinvest time they never actually saved.",
      href: "/leadership/ai-assisted-software-engineering",
      linkLabel: "Read the essay",
    },
  ],
} satisfies EditorialSection;

export const aboutSection = {
  eyebrow: "About",
  title: "Why this site exists, and where it meets practice.",
  intro:
    "This site is designed to hold long-form thinking without drifting away from real responsibility. It connects ideas about myth and history with the daily work of leading technology, teams, and institutions.",
  cards: [
    {
      id: "about-site",
      title: "What belongs here",
      description:
        "Essays that argue, history that sharpens judgement, and leadership writing that stays accountable to lived practice.",
      href: "#pillars",
      linkLabel: "See the three pillars",
    },
    {
      id: "about-context",
      title: "What anchors it",
      description:
        "The site stays grounded in current leadership practice rather than drifting into detached commentary.",
      href: "#leadership",
      linkLabel: "See the leadership section",
    },
  ],
} satisfies EditorialSection;

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
