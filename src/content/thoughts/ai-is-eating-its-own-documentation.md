---
title: AI is eating its own documentation
date: 2026-09-24
---

We have decent tools for catching code decay. Linters, static analysis, test coverage and complexity metrics can all flag AI-generated code as it starts to rot. Documentation has nothing like that, and I think it is decaying faster.

The pattern is easy to spot once you look for it. Someone asks an assistant to document a module. What comes back is long, confident and mostly plausible. Nobody reads it closely because it looks finished. A few months later the code has moved on and the docs haven't. The next assistant is handed those stale pages as context and writes more documentation on top of them, a little more wrong each time.

It's an ouroboros, with AI eating its own output. Every pass adds bulk and loses precision, and because the prose reads so fluently, the drift is hard to see. People stop trusting the docs and go back to reading the code. The documentation ends up existing mainly to be fed to the next model.

This deserves serious effort, and I'd put it ahead of a lot of code-quality work. Broken code usually trips a test or a build. A wrong paragraph just sits there, misleading people and machines alike until someone gets burned.

In practice, documentation needs real time in the plan, not whatever is left at the end of a story. Short beats comprehensive: one page a new engineer can read in five minutes and trust is worth more than twenty generated ones. Docs get reviewed like code, have a named owner, and get deleted when they stop being true. The parts that explain _why_ the system is the way it is should be written, or at least rewritten, by someone who understands it, because that is exactly what a model can't recover from the code.

Good documentation used to be a courtesy to the next person. Now it is also the input to every AI tool the team uses, so its quality compounds. That works in both directions.
