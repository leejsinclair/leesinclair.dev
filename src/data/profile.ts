import type { Profile } from "./types";

/**
 * Identity and contact facts — the single authoritative source (FR-022).
 *
 * Draft wording (FR-004): `positioning` and `roleLine` carry the proposed defaults and are
 * marked `status: "draft"` until Lee signs off. The components render a source-only draft
 * marker while that holds — nothing visitor-facing changes on sign-off beyond the words.
 *
 * Contact is LinkedIn only (FR-012a): there is no email field on this record. `linkedInUrl`
 * is the sole contact route and is a hard launch blocker — see the guard below.
 */
const profile = {
  name: "Lee Sinclair",

  positioning: {
    text: "I build the conditions for people and technology to do their best work together.",
    status: "draft",
  },

  roleLine: {
    text: "Technology leader with engineering depth, systems thinking and a focus on people.",
    status: "draft",
  },

  // One sentence, present-focused, traceable to the résumé's "20+ years across software
  // engineering, product ownership, and people leadership" and current hands-on role.
  supportingStatement:
    "After two decades across engineering, product and people leadership, I still work hands-on with the platform and team I lead.",

  // The sole contact route (FR-012). When unset the CTA renders as a marked placeholder and
  // the build warns; MUST be set before deploy (FR-013).
  linkedInUrl: "https://www.linkedin.com/in/leejsinclair/",

  // Committed placeholder; the real 1200×630 asset is swapped in with no markup change (FR-026).
  ogImage: "/og-image.png",
} satisfies Profile;

// --- Build-time guards (no library) -----------------------------------------
// LinkedIn URL: throw on a malformed value, warn (don't fail) when it is simply unset.
if (profile.linkedInUrl === undefined) {
  console.warn(
    '[profile] linkedInUrl is not set — the "Let\'s talk" CTA will render as a placeholder. ' +
      "This build is NOT deployable: LinkedIn is the only contact route (FR-013).",
  );
} else if (
  !/^https:\/\/([a-z]{2,3}\.)?linkedin\.com\/.+/i.test(profile.linkedInUrl)
) {
  throw new Error(
    `[profile] linkedInUrl is malformed: ${profile.linkedInUrl} — expected a https://…linkedin.com/… profile URL.`,
  );
}

export default profile;
