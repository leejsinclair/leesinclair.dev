// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Static output only, deployed to GitHub Pages via Actions. No adapter needed.
  output: "static",
  // Canonical URL. PLACEHOLDER pending sign-off — must match profile.siteUrl and the
  // real domain before deploy. Used for absolute Open Graph / JSON-LD URLs.
  site: "https://leesinclair.me",
  // No framework integrations by design.
});
