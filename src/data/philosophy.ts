import type { PhilosophyPillar } from "./types";

/**
 * "Leadership Philosophy" — exactly three pillars (FR-009). The résumé summary independently
 * describes "a leadership approach grounded in autonomy, mastery, and purpose", so this
 * framing is Lee's own. Each body connects the pillar to building capable teams.
 */
const philosophy = [
  {
    id: "autonomy",
    label: "Autonomy",
    body: "People take ownership when they know the goal and the limits. My job is to make those clear, give them room to work and make it safe to admit mistakes.",
  },
  {
    id: "mastery",
    label: "Mastery",
    body: "Teams do not improve by accident. Clear standards, mentoring and honest feedback help people get better through the work they do every day.",
  },
  {
    id: "purpose",
    label: "Purpose",
    body: "People make better decisions when they understand who the work is for and why it matters. Purpose gives autonomy and mastery a direction.",
  },
] satisfies PhilosophyPillar[];

/** The section's thesis — one sentence tying the three pillars to capable teams. */
export const connectiveLine =
  "Put together, autonomy, mastery and purpose help a team do good work without needing me in the room.";

export default philosophy;
