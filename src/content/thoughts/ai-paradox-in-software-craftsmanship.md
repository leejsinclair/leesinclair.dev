---
title: The AI paradox in software craftsmanship
date: 2026-09-16
---

Generative AI promises real speed in software engineering, but the way most people use it works against their own skill. Guess-and-check prompting hands the actual thinking to the model: the architectural decisions, and the edge cases nobody thought to ask about. The code that comes out often looks finished. It can also be the version that falls apart the moment it meets real load.

Prompting deserves to be treated as a discipline, not a chat. A one-shot result, a prompt that produces a complete, working solution first time, means holding the whole system in your head before you write a word. The constraints go in up front (type safety, failure modes) instead of being left for the model to guess. You map the inputs and edge cases before you hit generate, and you write clearly enough that none of it gets lost. Get that right and prompting looks less like magic and more like seniority. The AI becomes a fast way to carry out intent you already understood.

The risk is teams drifting into passive consumption, where nobody holds that understanding anymore. One practical guard is asking a few pointed competency questions once a story's spec is drafted, before anyone starts building. Left to answer alone, people will happily let an AI do it for them. Answered in pairs, the same questions turn into something closer to an architectural review, because you can't fake explaining your reasoning out loud to another person the way you can paste a response. The conversation naturally drifts from what was decided to why it was decided that way. It's also one of the few places left where a junior engineer gets to watch a senior one simulate failure modes in real time, rather than just reading the result.

Tight upfront prompting and paired validation, used together, let a team get the speed AI promises without trading away the judgement that makes the speed worth having.
