#!/usr/bin/env bash
# Stop hook: before Claude finishes, run the project's type/template check and a
# production build. Blocks (exit 2) with the failure output if either fails.
# No-ops until the project is bootstrapped and dependencies are installed.
set -uo pipefail
cd "$CLAUDE_PROJECT_DIR" 2>/dev/null || exit 0

payload=$(cat)
# Avoid loops: if this Stop was already triggered by a prior verify block, let it go.
printf '%s' "$payload" | grep -q '"stop_hook_active" *: *true' && exit 0

[ -f package.json ] || exit 0
[ -d node_modules ] || exit 0

has_script() {
  node -e "process.exit(((require('./package.json').scripts || {})['$1']) ? 0 : 1)" 2>/dev/null
}

log=$(mktemp)
problems=""

run_check() {
  local script="$1"
  has_script "$script" || return 0
  if ! npm run "$script" --silent >"$log" 2>&1; then
    problems="${problems}
=== npm run ${script} failed ===
$(tail -n 50 "$log")
"
  fi
}

run_check check
run_check build
rm -f "$log"

if [ -n "$problems" ]; then
  {
    echo "Blocking stop — project checks are failing. Fix these before finishing:"
    echo "$problems"
  } >&2
  exit 2
fi
exit 0
