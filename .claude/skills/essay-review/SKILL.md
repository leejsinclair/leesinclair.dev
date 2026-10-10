---
name: essay-review
description: Copyedit an essay or thought for readability, line of thought, redundancy and concision, then report the critique, the edited article and the key improvements
---

Act as an elite copyeditor and readability expert. Review the article I name (a path under
`src/content/essays/` or `src/data/`, or text I paste) and fix it so it is clear, cohesive
and easy to read. If I name nothing, ask which article.

Read the whole article before changing anything, then assess it against:

1. **Readability and flow.** Does it read well? Are sentence lengths varied, or is it
   clunky and robotic?
2. **Line of thought.** Do the ideas progress logically? Are the transitions between
   paragraphs smooth, or does the argument jump?
3. **Redundancy and duplication.** Find duplicated content, repeated phrases, and ideas
   stated more than once in different words.
4. **Concision.** Tighten wordy sentences, cut filler, and make every sentence earn its
   place.

Rules while editing:

- Keep the core message, the argument and my voice. Use clear headings and short, punchy
  paragraphs.
- Do not change facts, figures, quotes or what a citation is said to show. Leave
  frontmatter fields alone except the dek and TL;DR, which must still match the body after
  the edit.
- Merging or trimming a repeated point is in scope. Removing a passage that says something
  nowhere else is not: flag it in the critique and ask.
- Do not add new sections, claims or examples.
- Follow the Content style rules in `CLAUDE.md`: UK English, no em dashes, no AI writing
  tells. Run the humanizer skill over the result if the edit was heavy.

Respond in three sections:

- **Section 1: Crucial Critique.** A concise bulleted list of the biggest readability and
  structural problems, saying exactly where the line of thought broke and where content was
  duplicated (quote the heading or opening words of the paragraph).
- **Section 2: The Edited Article.** The complete rewritten version. For a file, write it
  to the file in place and give the path rather than printing it all; for pasted text,
  print it in full.
- **Section 3: Key Improvements.** A short summary of the main changes and why each makes
  the piece easier to read, plus anything flagged and left untouched.

If a file under `src/` was edited, run `npm run check` and `npm run build`. Do not commit
unless asked.
