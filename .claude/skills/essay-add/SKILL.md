---
name: essay-add
description: Add a supplied essay to the site and verify it
---

1. Create the file at `src/content/essays/<pillar>/<slug>.md` in the pillar I name, matching
   the frontmatter of the existing essays there (it must have a `date`).
2. Adapt citations to site style and verify each against a primary source you actually open.
3. Remove em dashes and AI writing tells (use the humanizer skill); do not overstate claims
   or change the meaning of quotes.
4. Do not hand-write a homepage card: the homepage picks up each pillar's two newest essays
   by `date`. Make sure the essay's dek and TL;DR match the body. Links to other
   essays in the body are root-relative and include the pillar (`/myths/talos`, not
   `myths/talos` or `/talos`). The relative form is for homepage links only.
5. If the essay had a research folder in the repo root, move it into `research/`.
6. Run `npm run check` and `npm run build`.
7. Open the new essay page and the homepage in a real browser (Playwright or the Chrome
   extension) and confirm they render and the links resolve. If no browser is available,
   say plainly that visual verification was not done.
8. Report what was changed and anything you could not verify. Do not commit unless asked.
   If asked to commit and push, use the branch I name and do not create a new one.
