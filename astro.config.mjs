// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Static output only — the deploy target is deliberately undecided, so no adapter
  // and no host-specific config until one is chosen and recorded (Constitution I).
  output: "static",
  // Canonical URL. PLACEHOLDER pending sign-off — must match profile.siteUrl and the
  // real domain before deploy. Used for absolute Open Graph / JSON-LD URLs.
  site: "https://leesinclair.dev",
  // No framework integrations by design.
});
