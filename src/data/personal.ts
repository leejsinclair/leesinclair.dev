import type { PersonalThread } from "./types";

/**
 * The personal aside on "How I Think" (FR-011). Exports `PersonalThread | null`; when it is
 * `null`, or yields zero `confirmed` threads, `PersonalAside.astro` renders nothing.
 *
 * Only UX / design is résumé-supported ("Usability & UX", directed UX/UI design, former UX
 * Architect). History, philosophy, mythology, Stoicism, drawing and painting are NOT in the
 * résumé and stay `confirmed: false` until Lee confirms them (Constitution IV).
 */
const personal: PersonalThread | null = {
  lead: "I pay attention to how things are made and whether they work well for the people using them.",
  threads: [
    { interest: "user experience and design", confirmed: true },
    { interest: "history", confirmed: false },
    { interest: "philosophy and Stoicism", confirmed: false },
    { interest: "mythology", confirmed: false },
    { interest: "drawing and painting", confirmed: false },
  ],
};

export default personal;
