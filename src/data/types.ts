/**
 * Content entity shapes. All visitor-facing content is compile-time typed data in
 * `src/data/`, sourced only from material Lee has supplied (Constitution IV, FR-024).
 * Optional fields that are absent render nothing — never a placeholder.
 * Copy is UK English; string fields are plain text unless noted as inline-markup-allowed.
 */

/** Draft state for wording that is pending Lee's sign-off (FR-004). */
export type DraftStatus = "draft" | "signed-off";

export interface DraftLine {
  text: string;
  status: DraftStatus;
}

/** Single source of identity and contact facts (`src/data/profile.ts`). One record. */
export interface Profile {
  /** "Lee Sinclair". Rendered in the `<h1>` and JSON-LD `Person.name`. */
  name: string;
  /** Hero positioning line. Draft marker shown in source only while `status === "draft"`. */
  positioning: DraftLine;
  /** Short hero role line. Same draft-marker rule. */
  roleLine: DraftLine;
  /** Exactly one concise sentence under the positioning line (FR-002). Résumé-sourced. */
  supportingStatement: string;
  /**
   * The sole contact route (FR-012). A set `https://…linkedin.com/…` profile URL for a
   * deployable build. When `undefined`, the "Let's talk" CTA renders as a clearly marked,
   * non-interactive placeholder and the build warns; the site MUST NOT deploy (FR-013).
   */
  linkedInUrl: string | undefined;
  /**
   * Site-relative path to the 1200×630 Open Graph image (FR-026). The canonical origin
   * lives in `astro.config.mjs` (`site`), read as `Astro.site` — not duplicated here.
   */
  ogImage: string;
}

/** One of the five parts of the system shown in "The Intersection" (FR-005). */
export type DisciplineId =
  "technology" | "people" | "product" | "delivery" | "systems";

export interface DisciplineNode {
  id: DisciplineId;
  /** Display name. */
  label: string;
  /** One short phrase on how Lee works at this node (≤ ~12 words). */
  blurb: string;
  /**
   * Undirected edges. The union of all edges must make the five nodes a single connected
   * graph (no isolated node). Rendered as lines in the SVG.
   */
  connectsTo: DisciplineId[];
}

/** Internal provenance tag for a principle; never rendered. */
export type SourceIdea =
  "systems-thinking" | "leverage" | "activity-vs-progress" | "autonomy-clarity";

/** "How I Think" — 3 or 4 records (`src/data/principles.ts`) (FR-006). */
export interface Principle {
  id: string;
  /** Specific, non-generic; no competency jargon (Constitution V). */
  title: string;
  /** 1–3 sentences. Inline markup allowed. Traces to a core leadership idea. */
  body: string;
  sourceIdea: SourceIdea;
}

export type EvidenceTheme =
  | "leadership"
  | "engineering-practice"
  | "capability"
  | "ai-operating-model"
  | "product-delivery";

/** "Evidence" — 1 to 4 records (`src/data/evidence.ts`), target 3–4 (FR-007). */
export interface EvidenceExample {
  id: string;
  /** Concise, outcome- or capability-oriented. */
  title: string;
  /** 1–3 sentences. Every concrete detail must exist in supplied source material (FR-024). */
  body: string;
  /** Optional tag; may drive a small caption/label. */
  theme?: EvidenceTheme;
  /**
   * When `true`, copy frames AI work as *understanding how the engineering operating model
   * changes when AI can produce substantial amounts of code*, never as expertise (FR-008).
   */
  aiFraming?: boolean;
}

/** "Leadership Philosophy" — exactly 3 records: autonomy, mastery, purpose (FR-009). */
export interface PhilosophyPillar {
  id: "autonomy" | "mastery" | "purpose";
  label: string;
  /** One or two sentences connecting the pillar to building capable teams. */
  body: string;
}

/**
 * The personal aside on "How I Think" (`src/data/personal.ts`). The module exports
 * `PersonalThread | null`; `null` ⇒ the component renders nothing (FR-011, R10).
 */
export interface PersonalThread {
  /** One sentence framing the interests as observation / curiosity / deliberate practice. */
  lead: string;
  /** 1–5 items. Only `confirmed: true` items render (Constitution IV). */
  threads: { interest: string; confirmed: boolean }[];
}
