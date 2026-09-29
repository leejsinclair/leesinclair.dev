---
title: Your AGENTS.md is policy, not documentation
date: 2026-09-30
---

Two different studies on AGENTS.md files landed this year, and it's worth keeping their findings separate. One is a length problem: too much context dilutes an agent's attention, the same way a bloated onboarding doc loses a new hire. The other is a staleness problem, and it's a different animal entirely. Wrong context isn't just useless, it's actively worse than no context at all, because the agent still follows it.

That distinction matters because of what AGENTS.md actually is. Ordinary documentation describes: "the app uses Postgres" is a claim a person can check against the code and shrug off if it's slightly wrong. AGENTS.md is behavioural: "never modify generated files, always run the migration script before touching schemas" is an instruction an agent executes. That makes it closer to configuration, or even source code, than to a README, and it deserves the same question we ask of source code: not just whether it reads well, but whether it's correct.

The asymmetry is what makes stale AGENTS.md files dangerous in a way stale docs aren't. A stale function usually fails loudly: it doesn't compile, or a test catches it. A stale instruction doesn't fail at all. The agent reads it, obeys it, produces plausible code that satisfies the obsolete rule, passes the tests that don't know any better, and merges. Nothing trips.

The evidence backs this up from two directions. A study of 466 open-source AGENTS.md files found five completely different writing styles in use, no shared structure, and roughly half the files unchanged since the day they were created, quietly drifting out of sync with a codebase that kept moving. A follow-up study testing agents against real tasks found that AI-generated context files actually made agents worse, cutting success by about 3%, while short, human-written ones improved it by about 4%, and both approaches cost more in inference either way. Bigger and better-written aren't the same fix. One is a size problem. The other is a trust problem.

So the answer isn't a longer, more careful AGENTS.md. It's a narrower one. Write down only what the code genuinely can't tell an agent on its own, the conventions no config file expresses, the invariant nobody wants violated. Then treat it like any other claim about the system: revisit it when the thing it describes changes, not on a schedule and not never. Everything else belongs in package.json, not in prose.
