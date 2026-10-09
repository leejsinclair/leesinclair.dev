---
name: essay-write
description: Take an idea from article_ideas.md through research, drafting, humanizing, review and site checks, ending with an open pull request
---

Write an essay or thought from an idea in `article_ideas.md` and take it all the way to an
open pull request. Anything I type after the command names the idea to write. Use
`/essay-add` instead when I supply the finished text myself.

There is one stop for my input, in step 1. After that, do not ask me anything: where a
step or a skill it calls would ask, take a sensible default, note it, and carry on. The
notes go in the pull request and the final report.

1. **Idea.** Read `article_ideas.md`. If it has no heading for today, run the `ideas-scan`
   skill first. If I named an idea, use it. Otherwise list the open ideas (not struck
   through) with their pillar and ask me which one to write.
2. **Research.** Run the `research`, `research-deep` and `research-report` skills on the
   idea, in a topic folder in the repo root. Take defaults for their questions (time
   range, batch size, item and field confirmation, approval between batches, table of
   contents fields). Live searches only. A claim is usable only if its primary source was
   actually opened and says what the claim says.
3. **Draft.** Read two existing pieces in the same pillar and match their voice, length,
   heading style and reference format. Then write the piece from the research report:
   - an essay goes in `src/content/essays/<pillar>/<slug>.md`, pillar taken from the
     idea's tag, with the frontmatter `src/content.config.ts` requires: `title`, `date`
     (today), `dek`, `tldr.summary`, two to four `tldr.points`, and `references`;
   - an idea tagged `thought` goes in `src/content/thoughts/<slug>.md` with `title` and
     `date` only.

   UK English. Use only what the research verified, and nothing it marked `[uncertain]`.
   Where the piece builds on an essay already on the site, say so and link to it with a
   relative link that includes the pillar prefix.

4. **Humanize.** Run the `humanizer` skill over the draft and apply the Content style
   rules in `CLAUDE.md` (no em dashes). Do not change facts, figures or quotes.
5. **Review.** Run the `essay-review` skill on the file, edited in place. Where it would
   flag a passage and ask, leave the passage in and note it. Then have the
   `content-integrity-reviewer` agent check the piece against the research report, and fix
   what it finds: overclaims, figures that do not match their source, and a dek or TL;DR
   that no longer matches the body.
6. **Site wiring and checks.** Follow the `essay-add` skill from its homepage-card step
   onward: no hand-written card, move the research folder into `research/`, run
   `npm run check` and `npm run build`, and open the new page and the homepage in a real
   browser (or say plainly that no browser check was done). In `article_ideas.md`, strike
   through the idea and add "Written up <date> as <title>" with the file path, the way
   earlier entries do.
7. **Publish.** Run the `pr-create` skill with exactly the new piece, its research folder
   and the `article_ideas.md` change, leaving any other work in the tree alone. The pull
   request body lists the sources opened, the defaults taken in step 2, anything noted in
   step 5, and whether the browser check happened. Do not merge.
8. **Report.** The pull request URL, the file path, the word count, and the same notes.

If a step fails in a way you cannot fix (the research finds no primary source that can be
verified, or the build will not pass), stop there. Leave the work uncommitted, open no pull
request, and report what happened and what is left.
