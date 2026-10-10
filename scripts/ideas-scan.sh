#!/usr/bin/env bash
# Run the /ideas-scan skill headlessly: scan src/content, search the web, and append new
# ideas to article_ideas.md. Nothing is committed.
#
#   scripts/ideas-scan.sh
#
# Daily at 07:00 via cron (crontab -e):
#   0 7 * * * /home/lee/Projects/personal-website/scripts/ideas-scan.sh >> "$HOME/.claude/ideas-scan.log" 2>&1
set -euo pipefail

# cron starts with a minimal PATH that does not include the claude binary.
export PATH="$HOME/.local/bin:$PATH"

cd "$(dirname "$0")/.."

# Skip if a previous run is still going.
exec 9>"${TMPDIR:-/tmp}/personal-website-ideas-scan.lock"
if ! flock -n 9; then
  echo "ideas-scan: another run is in progress, skipping" >&2
  exit 0
fi

echo "=== ideas-scan $(date -Is) ==="
claude -p "/ideas-scan" \
  --allowedTools "Skill" "Read" "Glob" "Grep" "WebSearch" "WebFetch" "Edit(article_ideas.md)"
