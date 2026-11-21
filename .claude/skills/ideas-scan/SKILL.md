---
name: ideas-scan
description: Scan past writing for core themes, search the web for new angles, and append fresh article ideas to article_ideas.md
---

Scan the `./src/content` directory to identify the core themes of my past writing. Search
the web for recently published articles on these subjects. If you find new angles or
trending discussions, append brief article ideas to `article_ideas.md`. Always review
`article_ideas.md` first to ensure you do not add duplicates.

1. Read `article_ideas.md` in full before searching, including struck-through ideas that
   have already been written up. An idea that restates an existing entry is a duplicate
   even if the wording differs.
2. Read the essays and thoughts under `src/content/` and note the themes. Update the "Core
   themes" line at the top of `article_ideas.md` only if the themes have actually moved.
   Treat each theme on that line as its own search area. Do not let the newest essays
   decide what to search for.
3. Use live web searches. Do not log an idea from memory. Search every theme on the
   "Core themes" line at least once per run, and always include at least one theme that has
   no entry in the last seven days of `article_ideas.md`. Engineering leadership without AI
   (hiring, one-to-ones, incidents, decision records) counts as its own theme.

   How to search (tested 2026-10-24; broad theme queries and phrases like "this week" or
   "October 2026" returned undated blog posts and old items):
   - Pass `allowed_domains` on every query, so results come from one place that publishes
     dated work. Put the year and month pattern from that site's URLs in the query.
   - Technical leadership: `leaddev.com` (query "engineering leaders"), the Pragmatic
     Engineer (`newsletter.pragmaticengineer.com`, `blog.pragmaticengineer.com`),
     `infoq.com`, and `arxiv.org` with a query like "arxiv 2610 software engineering
     developers study" (2610 is October 2026, 2611 is November, and so on) or "psychological
     safety", "code review", "documentation" for non-AI angles.
   - Documentation and prompting: `arxiv.org` (cs.CL, cs.SE) with the same month code, plus
     `mediawiki.org` and `stackoverflow.blog` for developer surveys.
   - Mythology and ancient history: `archaeology.org` (query "archaeology.org news
     2026/10"), `phys.org` (query "phys.org news 2026-10 ancient history classics"),
     `thehistoryblog.com`, `heritagedaily.com`, `theconversation.com`, and
     `bmcr.brynmawr.edu` for book reviews.
   - Resilience and heroism: `infoq.com`, `leaddev.com` and `increment.com` for incident and
     on-call writing, and `arxiv.org` for organisational studies.
   - Read the listing first, then open one or two promising items. Run two or three queries
     per theme, not one.
4. Before logging a headline statistic, open the primary source it is attributed to and
   confirm the figure is there. Corroboration from search summaries is not enough. If you
   cannot confirm it, leave the figure out or drop the idea.
5. Append the new ideas under a single `## YYYY-MM-DD` heading for today at the end of the
   file, in the existing format: `- **Title** (pillar). Two to five sentences.` Name the
   source and its date, say what the angle is, and say how it differs from related ideas
   already logged and from published pieces. If today's heading already exists, add to it;
   never create a second heading for the same date or copy earlier entries under it.
6. Add at most four ideas per run. If a topic already has three or more entries in the
   last two weeks of the file (at the moment, AI agents in engineering teams), add at most
   one more idea on it per run unless it opens a clearly different angle, and put the other
   slots on other themes. If nothing new turned up, add nothing and say so.
7. Edit `article_ideas.md` only. Do not draft the article, create research folders, or
   commit.
8. Report the ideas added, or that there were none.
