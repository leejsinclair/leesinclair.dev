/**
 * Build-time content guards (no library). Imported once from `src/pages/index.astro` so
 * `astro build` fails loudly if the content data drifts out of the ranges the layout and
 * the spec assume. The `linkedInUrl` format/absence check lives in `profile.ts` itself.
 */
import { getCollection } from "astro:content";
import principles from "./principles";
import evidence from "./evidence";
import philosophy from "./philosophy";
import {
  aboutSection,
  contentPillars,
  editorialStructure,
  historySection,
  leadershipSection,
  mythsSection,
  navigation,
} from "./editorial";

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(`[content guard] ${message}`);
}

// FR-006 — 3 or 4 principles.
assert(
  principles.length >= 3 && principles.length <= 4,
  `principles must be 3–4, got ${principles.length}`,
);
assert(
  new Set(principles.map((p) => p.id)).size === principles.length,
  "principle ids must be unique",
);

// FR-007 / SC-013 — 1 to 4 evidence examples, never zero, never padded.
assert(
  evidence.length >= 1 && evidence.length <= 4,
  `evidence must be 1–4, got ${evidence.length}`,
);
assert(
  new Set(evidence.map((e) => e.id)).size === evidence.length,
  "evidence ids must be unique",
);

// FR-009 — exactly Autonomy, Mastery, Purpose.
assert(
  philosophy.length === 3,
  `philosophy must have exactly 3 pillars, got ${philosophy.length}`,
);
assert(
  ["autonomy", "mastery", "purpose"].every((id) =>
    philosophy.some((p) => p.id === id),
  ),
  "philosophy must contain autonomy, mastery and purpose",
);

assert(
  navigation.length === editorialStructure.navigationItems,
  `navigation must be ${editorialStructure.navigationItems}, got ${navigation.length}`,
);
assert(
  new Set(navigation.map((item) => item.label)).size === navigation.length,
  "navigation labels must be unique",
);
assert(
  contentPillars.length === editorialStructure.contentPillars,
  `content pillars must be ${editorialStructure.contentPillars}, got ${contentPillars.length}`,
);
assert(
  new Set(contentPillars.map((card) => card.id)).size === contentPillars.length,
  "content pillar ids must be unique",
);
assert(
  mythsSection.cards.length === editorialStructure.mythsCards,
  `myths cards must be ${editorialStructure.mythsCards}, got ${mythsSection.cards.length}`,
);
assert(
  historySection.cards.length === editorialStructure.historyCards,
  `history cards must be ${editorialStructure.historyCards}, got ${historySection.cards.length}`,
);
assert(
  leadershipSection.cards.length === editorialStructure.leadershipCards,
  `leadership cards must be ${editorialStructure.leadershipCards}, got ${leadershipSection.cards.length}`,
);
assert(
  aboutSection.cards.length === editorialStructure.aboutCards,
  `about cards must be ${editorialStructure.aboutCards}, got ${aboutSection.cards.length}`,
);

// specs/003-essay-publishing FR-022 — a pillar card's href is a second, hand-typed source of
// truth for an essay's URL alongside its content-collection path; catch drift loudly rather
// than shipping a silently broken link.
const essayIds = new Set(
  (await getCollection("essays")).map((entry) => entry.id),
);
for (const section of [mythsSection, historySection, leadershipSection]) {
  for (const card of section.cards) {
    const match = /^\/(myths|history|leadership)\/(.+)$/.exec(card.href);
    if (!match) continue;
    const essayId = `${match[1]}/${match[2]}`;
    assert(
      essayIds.has(essayId),
      `card "${card.id}" links to "${card.href}" but no essay exists at src/content/essays/${essayId}.md`,
    );
  }
}

export {};
