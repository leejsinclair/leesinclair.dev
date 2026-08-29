import type { DisciplineNode } from "./types";

/**
 * The five parts of the system shown in "The Intersection" (FR-005). Exactly five nodes.
 * `connectsTo` lists undirected edges (both directions given for legibility; the diagram
 * dedupes). The structure is deliberate and legible: Systems is the hub, joined to all
 * four of the others; Technology, People, Delivery and Product sit in a ring, so each
 * also touches its two neighbours. `diagramAltText` describes exactly this shape (FR-027).
 */
const disciplines = [
  {
    id: "technology",
    label: "Technology",
    blurb:
      "Hands-on across the stack, with architectural oversight of the platform.",
    connectsTo: ["people", "product", "systems"],
  },
  {
    id: "people",
    label: "People",
    blurb:
      "Mentoring, 1:1s and competency frameworks that build durable team ownership.",
    connectsTo: ["technology", "delivery", "systems"],
  },
  {
    id: "product",
    label: "Product",
    blurb: "Six years as product owner of the same platform he now engineers.",
    connectsTo: ["technology", "delivery", "systems"],
  },
  {
    id: "delivery",
    label: "Delivery",
    blurb:
      "Engineering governance, SDLC and CI/CD that keep a long-lived platform moving.",
    connectsTo: ["people", "product", "systems"],
  },
  {
    id: "systems",
    label: "Systems",
    blurb:
      "Looking at how the parts affect each other and where a change will matter most.",
    connectsTo: ["technology", "people", "product", "delivery"],
  },
] satisfies DisciplineNode[];

/**
 * Text alternative for the SVG (`<desc>`) and FR-027. Names every node, states that they
 * form one system, and matches the edges the diagram actually draws.
 */
export const diagramAltText =
  "A diagram of Technology, People, Product, Delivery and Systems as one connected system. " +
  "Systems sits at the centre, joined to each of the other four. Technology, People, " +
  "Delivery and Product form a ring around it, so every discipline also connects to its " +
  "neighbours. A change in one is considered by its effect on the rest.";

export default disciplines;
