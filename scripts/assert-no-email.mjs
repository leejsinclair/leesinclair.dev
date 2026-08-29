/**
 * Post-build guard (FR-012a, SC-015): the published output must contain no email address,
 * `mailto:` link, or email in structured data — contact is LinkedIn only. Runs as part of
 * `npm run build`; exits non-zero (failing the build) if anything email-shaped appears in
 * `dist/`.
 */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const DIST = "dist";

// An email address, or a mailto: link. Kept deliberately broad.
const EMAIL = /\bmailto:|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

let offences = 0;
for await (const file of walk(DIST)) {
  if (!/\.(html|js|json|xml|txt|svg|css)$/i.test(file)) continue;
  const text = await readFile(file, "utf8");
  const match = text.match(EMAIL);
  if (match) {
    offences++;
    console.error(`✗ ${file}: found email-shaped string "${match[0]}"`);
  }
}

if (offences > 0) {
  console.error(
    `\nBuild rejected: ${offences} email-shaped string(s) in dist/. ` +
      "The page must expose no email address anywhere (FR-012a).",
  );
  process.exit(1);
}

console.log(
  "✓ no-email check passed — dist/ exposes no email address or mailto: link",
);
