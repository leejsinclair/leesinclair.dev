import type {
  EditorialCard,
  EditorialSection,
  HeroContent,
  LinkDefinition,
  ReadingPath,
} from "./types";

export const navigation = [
  { label: "Essays", href: "#essays" },
  { label: "Research", href: "#research" },
  { label: "Leadership", href: "#leadership" },
  { label: "About", href: "#about" },
  { label: "Archive", href: "#archive" },
] satisfies LinkDefinition[];

export const homeHero = {
  eyebrow: "Lee Sinclair",
  title: "Myth, history, and leadership for people shaping institutions.",
  intro:
    "A bold front page for essays, research notes, and field-tested reflections: part editorial publication, part notebook, part practical guide to power, memory, and capable teams.",
  primaryCta: { label: "Read Essays", href: "#essays" },
  secondaryCta: { label: "Start Here", href: "#start-here" },
  highlights: [
    {
      title: "Myths",
      description:
        "The stories people inherit, repeat, and mistake for common sense.",
    },
    {
      title: "History",
      description:
        "Case studies, turning points, and the long memory behind present decisions.",
    },
    {
      title: "Leadership",
      description:
        "Principles, frameworks, and reflections for building capable teams.",
    },
  ],
} satisfies HeroContent;

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

export const featuredWriting = [
  {
    id: "featured-myth",
    label: "Flagship essay scaffold",
    title: "The stories institutions live by",
    description:
      "Reserved for a lead essay on myth as a living force in organisations, politics, and public language.",
    href: "#myths",
    linkLabel: "Open the myths section",
    meta: "Lead slot",
  },
  {
    id: "featured-history",
    label: "Historical case study scaffold",
    title: "What a turning point looks like from inside it",
    description:
      "A place for essays that use history to make present choices less shallow and less fashionable.",
    href: "#history",
    linkLabel: "Open the history section",
    meta: "Case study slot",
  },
  {
    id: "featured-research",
    label: "Research note scaffold",
    title: "Annotated sources behind the argument",
    description:
      "A research-led card for source notes, timelines, and the working bibliography behind future essays.",
    href: "#research",
    linkLabel: "Open the research notebook",
    meta: "Notebook slot",
  },
  {
    id: "featured-leadership",
    label: "Leadership reflection scaffold",
    title: "What still matters when the pressure rises",
    description:
      "A space for practical reflections on standards, judgement, and responsibility in leadership.",
    href: "#leadership",
    linkLabel: "Open the leadership section",
    meta: "Reflection slot",
  },
] satisfies EditorialCard[];

export const startHerePaths = [
  {
    id: "start-myths",
    title: "Begin with myths",
    description:
      "Start with the stories people use to explain order, duty, and destiny, then follow their consequences into the present.",
    href: "#myths",
    steps: [
      "Start with the framing question behind the myths section.",
      "Move to the historical case studies that test the story against events.",
      "End with the leadership question the story leaves behind.",
    ],
  },
  {
    id: "start-history",
    title: "Begin with history",
    description:
      "Use history as the grounding discipline: begin with a turning point, then read outward into myth and leadership.",
    href: "#history",
    steps: [
      "Start with a historical turning point or recurring pattern.",
      "Follow the inherited story that helped people interpret it.",
      "Finish with the practical leadership judgement it suggests now.",
    ],
  },
  {
    id: "start-leadership",
    title: "Begin with leadership",
    description:
      "Come in through practice first, then work backwards into the myths and histories that shape leadership choices.",
    href: "#leadership",
    steps: [
      "Start with a leadership principle or framework.",
      "Trace it back to the historical pattern it responds to.",
      "Return to the myths that still influence how authority is understood.",
    ],
  },
] satisfies ReadingPath[];

export const mythsSection = {
  eyebrow: "Myths",
  title: "A place for recurring stories and modern consequences.",
  intro:
    "The myths section is for essays that read old stories seriously without treating them as museum pieces. It connects symbol, ritual, and archetype to the language institutions still use to describe themselves.",
  cards: [
    {
      id: "myths-archetypes",
      title: "Archetypes in public life",
      description:
        "Scaffold space for essays on heroism, sacrifice, exile, renewal, and the shapes people keep reaching for.",
      href: "#archive",
      linkLabel: "See the archive scaffold",
    },
    {
      id: "myths-institutions",
      title: "Institutional stories",
      description:
        "A lane for writing on how organisations narrate legitimacy, crisis, and responsibility to themselves.",
      href: "#research",
      linkLabel: "See supporting research",
    },
    {
      id: "myths-modernity",
      title: "Modern relevance",
      description:
        "Notes and essays that connect inherited stories to present decisions rather than leaving them as abstraction.",
      href: "#start-here",
      linkLabel: "Use the guided path",
    },
  ],
} satisfies EditorialSection;

export const historySection = {
  eyebrow: "History",
  title: "Case studies, long memory, and the cost of shallow timelines.",
  intro:
    "The history section is for reading events in sequence, not as isolated anecdotes. It creates room for turning points, comparisons across eras, and essays that make the present less narrow.",
  cards: [
    {
      id: "history-turning-points",
      title: "Turning points",
      description:
        "A scaffold for essays on moments when institutions, cultures, or leaders suddenly reveal what they really are.",
      href: "#essays",
      linkLabel: "Browse writing slots",
    },
    {
      id: "history-patterns",
      title: "Recurring patterns",
      description:
        "A place for comparisons across periods, with attention to continuity, drift, and repeated mistakes.",
      href: "#archive",
      linkLabel: "Open the archive scaffold",
    },
    {
      id: "history-context",
      title: "Context before certainty",
      description:
        "Research-led notes for timelines and context blocks that support slower, better arguments.",
      href: "#research",
      linkLabel: "Open the research notebook",
    },
  ],
} satisfies EditorialSection;

export const researchSection = {
  eyebrow: "Research Notebook",
  title: "Sources, timelines, and idea maps behind the essays.",
  intro:
    "This is the working layer beneath the polished writing: annotated sources, timelines, idea maps, marginalia, and connective notes that make long-form arguments sharper.",
  cards: [
    {
      id: "research-sources",
      title: "Annotated sources",
      description:
        "Short notes on primary texts, commentaries, and references worth keeping in view.",
      href: "#research",
      linkLabel: "Keep building the notebook",
      items: [
        "Primary source notes",
        "Commentary worth revisiting",
        "Questions left open",
      ],
    },
    {
      id: "research-timelines",
      title: "Timelines",
      description:
        "Chronologies that keep cause, sequence, and consequence visible while an argument is still forming.",
      href: "#research",
      linkLabel: "Add timeline entries",
      items: [
        "Turning-point sequence",
        "Parallel developments",
        "Aftermath and echoes",
      ],
    },
    {
      id: "research-idea-maps",
      title: "Idea maps and notes",
      description:
        "Working maps that connect themes across myth, history, and leadership before they become finished essays.",
      href: "#research",
      linkLabel: "Capture notes",
      items: ["Concept clusters", "Open comparisons", "Future essay prompts"],
    },
  ],
} satisfies EditorialSection;

export const leadershipSection = {
  eyebrow: "Leadership",
  title: "Principles, frameworks, and reflections that stay practical.",
  intro:
    "The leadership section is where abstract thinking is forced back into practice. It is for standards, decisions, team design, and reflections on what holds up when responsibility becomes real.",
  cards: [
    {
      id: "leadership-principles",
      title: "Principles",
      description:
        "Short, durable rules for shaping teams, ownership, quality, and judgement.",
      href: "#leadership-principles",
      linkLabel: "Read the principles",
    },
    {
      id: "leadership-frameworks",
      title: "Frameworks",
      description:
        "Scaffold space for playbooks, decision frames, and repeatable ways of thinking under pressure.",
      href: "#leadership-philosophy",
      linkLabel: "Read the philosophy",
    },
    {
      id: "leadership-reflections",
      title: "Reflections",
      description:
        "Notes on leadership in lived practice: what worked, what failed, and what is worth keeping.",
      href: "#about",
      linkLabel: "See current context",
    },
  ],
} satisfies EditorialSection;

export const archiveSection = {
  eyebrow: "Archive",
  title: "A clean structure ready for a growing body of work.",
  intro:
    "The archive makes room for depth before the catalogue is full. It groups future essays and notebook entries by theme so new writing has an obvious home from the moment it is published.",
  cards: [
    {
      id: "archive-myths",
      title: "Myths shelf",
      description:
        "A future shelf for essays, notes, and source trails on symbol, ritual, order, and recurring narrative patterns.",
      href: "#myths",
      linkLabel: "Jump to myths",
      items: ["Essays", "Notebook entries", "Source clusters"],
    },
    {
      id: "archive-history",
      title: "History shelf",
      description:
        "A future shelf for timelines, case studies, and comparative essays anchored in sequence and context.",
      href: "#history",
      linkLabel: "Jump to history",
      items: ["Turning points", "Comparisons", "Chronologies"],
    },
    {
      id: "archive-leadership",
      title: "Leadership shelf",
      description:
        "A future shelf for principles, frameworks, and reflections tied back to real responsibility.",
      href: "#leadership",
      linkLabel: "Jump to leadership",
      items: ["Principles", "Frameworks", "Field notes"],
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
        "Essays that argue, research notes that show the working, and leadership writing that stays accountable to lived practice.",
      href: "#start-here",
      linkLabel: "Use the guided path",
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
