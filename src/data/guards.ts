/**
 * Build-time content guards (no library). Imported once from `src/pages/index.astro` so
 * `astro build` fails loudly if the content data drifts out of the ranges the layout and
 * the spec assume. The `linkedInUrl` format/absence check lives in `profile.ts` itself.
 */
import principles from "./principles";
import evidence from "./evidence";
import philosophy from "./philosophy";

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

export {};
