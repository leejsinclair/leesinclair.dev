---
name: pr-create
description: Commit the current work, push it to a branch and open a pull request against main
---

Commit the work in the tree, push it and open a pull request against `main`. Anything I
type after the command is guidance on scope, branch name or title.

1. Run `git status` and `git diff` and work out what belongs to this change. If the tree
   holds unrelated work (other essays, research folders, tooling), list the groups and ask
   which to include. Never use `git add -A` or `git add .`.
2. Run `npm run check` and `npm run build`. Stop and report if either fails.
3. Branch. Running this skill is the request for a branch, so:
   - on `main`, create one named for the change in kebab case with a type prefix:
     `essay/<slug>`, `thought/<slug>`, `site/<what-changed>` or `chore/<what-changed>`;
   - on any other branch, stay on it.
4. Stage the chosen files by path. Check that nothing git-ignored or runtime is staged
   (lock files, caches, `dist/`, `.astro/`, `.claude/settings.local.json`).
5. Commit in the style of `git log`: an imperative subject under about 70 characters, then
   a short body saying what changed and why when the subject is not enough. End with the
   commit trailers the harness requires.
6. Push with `git push -u origin <branch>`. Never force-push.
7. If the branch already has an open pull request (`gh pr view`), the push has updated it:
   report its URL and stop. Otherwise open one with `gh pr create --base main`:
   - title: the commit subject, or a summary if there are several commits;
   - body: what changed, how it was verified (check, build, and browser if the change is
     visual, saying plainly if no browser check was done), and anything left out of the
     change or still unverified. End with the attribution line the harness requires.
8. Report the pull request URL, the branch, and any files left uncommitted. Do not merge:
   merging to `main` publishes the site.
