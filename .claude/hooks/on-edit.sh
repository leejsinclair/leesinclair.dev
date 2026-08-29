#!/usr/bin/env bash
# PostToolUse (Write|Edit): auto-format the touched file, then emit non-blocking
# complexity advisories back to Claude. Never blocks; no-ops before bootstrap.
set -uo pipefail
cd "$CLAUDE_PROJECT_DIR" 2>/dev/null || exit 0

payload=$(cat)

file=$(printf '%s' "$payload" | node -e '
  let d = "";
  process.stdin.on("data", c => d += c);
  process.stdin.on("end", () => {
    try {
      const j = JSON.parse(d);
      const t = j.tool_input || {};
      process.stdout.write(t.file_path || t.path || "");
    } catch (e) {}
  });
' 2>/dev/null)

[ -n "$file" ] || exit 0
[ -f "$file" ] || exit 0
rel="${file#"$CLAUDE_PROJECT_DIR"/}"

# --- Auto-format (only with a local prettier; silent) -----------------------
case "$file" in
  *.ts|*.tsx|*.js|*.mjs|*.cjs|*.astro|*.json|*.jsonc|*.md|*.mdx|*.css)
    if [ -x node_modules/.bin/prettier ]; then
      node_modules/.bin/prettier --write --log-level silent "$file" 2>/dev/null || true
    fi
    ;;
esac

# --- Complexity advisories (non-blocking) ---------------------------------
notes=""
add() { notes="${notes:+$notes
}- $1"; }

case "$file" in
  package.json|*/package.json)
    summary=$(node -e '
      const p = require(process.argv[1]);
      const d = Object.keys(p.dependencies || {});
      const v = Object.keys(p.devDependencies || {});
      console.log(`runtime: ${d.length} [${d.join(", ")}] | dev: ${v.length} [${v.join(", ")}]`);
    ' "$file" 2>/dev/null || true)
    [ -n "$summary" ] && add "package.json changed — ${summary}. This site targets near-zero runtime dependencies; confirm any addition is load-bearing and not replaceable by a few lines or a built-in Astro/web-platform feature."
    ;;
esac

case "$file" in
  *.astro)
    lines=$(wc -l < "$file" | tr -d ' ')
    [ "${lines:-0}" -gt 200 ] && add "${rel} is ${lines} lines — consider splitting into smaller components or moving content into a data file."
    if grep -qE '<script(\s|>)' "$file" && ! grep -q 'application/ld+json' "$file"; then
      add "${rel} has a <script> block. Spec: JS is enhancement only and every section/CTA must work without it. Keep the island minimal, prefer CSS, and verify the no-JS path."
    fi
    if grep -qE 'client:(load|visible|idle|only|media)' "$file"; then
      add "${rel} hydrates a component (client:*). Confirm it is genuinely interactive and degrades gracefully without JS."
    fi
    ;;
esac

if [ -n "$notes" ]; then
  printf '%s' "$notes" | node -e '
    let d = "";
    process.stdin.on("data", c => d += c);
    process.stdin.on("end", () => {
      process.stdout.write(JSON.stringify({
        hookSpecificOutput: {
          hookEventName: "PostToolUse",
          additionalContext: "Complexity check:\n" + d
        }
      }));
    });
  '
fi
exit 0
