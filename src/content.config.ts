/**
 * Content collections. `essays` holds long-form pieces published under the Myths, History,
 * and Leadership pillars (specs/003-essay-publishing). Each file's path is its identity:
 * `src/content/essays/<pillar>/<slug>.md` — the route derives `pillar`/`slug` from that path
 * (see `src/pages/[pillar]/[slug].astro`), so two essays can never collide on a URL; the
 * filesystem makes that structurally impossible rather than something checked at build time.
 * Schema failures fail `astro build` with the offending file named, the same guarantee
 * `src/data/guards.ts` gives typed data.
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const essays = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string().min(1),
    dek: z.string().min(1),
    tldr: z.object({
      summary: z.string().min(1),
      points: z.array(z.string().min(1)).min(2).max(4),
    }),
    references: z.array(z.string().min(1)).optional(),
  }),
});

export const collections = { essays };
