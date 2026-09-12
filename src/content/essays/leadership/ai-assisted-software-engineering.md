---
title: "AI-Assisted Software Engineering: The Changing Nature of Developer Work, Wellbeing, Identity and Long-Term Capability"
dek: "AI coding assistants are shifting engineering work from creation to supervision — and the productivity story is far less settled than most organisations assume, with real stakes for capability, wellbeing, and identity."
tldr:
  summary: "AI coding assistants are shifting engineering work from creation to supervision — and the productivity story is far less settled than vendor claims suggest, with real, measurable costs to learning, wellbeing, and long-term capability."
  points:
    - "A 2025 randomised trial found developers using AI tools took 19% longer on real tasks, despite believing afterward they'd been 20% faster."
    - "A longitudinal study found time shifting from creation toward verification, plus negative developer experience nearly doubling (14% to 27%) even as perceived productivity stayed high."
    - "Passive AI use measurably degrades skill formation and comprehension; active, question-driven use does not — a coachable distinction, not an inherent cost."
    - "Leaders should measure local time savings before reinvesting them, and track capability and wellbeing alongside delivery speed, not instead of it."
references:
  - "Ahmad, M. O. (2026). Comprehension debt in GenAI-assisted software engineering projects. 30th International Conference on Evaluation and Assessment in Software Engineering (EASE 2026), Glasgow. arXiv:2604.13277."
  - "Anthropic (2026). How AI assistance impacts the formation of coding skills. anthropic.com/research/AI-assistance-coding-skills"
  - "Becker, J., Rush, N., Barnes, E., & Rein, D. (2025). Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity. METR. arXiv:2507.09089."
  - "Bjork, R. A. (1994). Memory and metacognition considerations in the training of human beings. In Metcalfe, J. & Shimamura, A. (Eds.), Metacognition: Knowing about Knowing. MIT Press."
  - "Borg, M., et al. (2026). Echoes of AI: Investigating the Downstream Effects of AI Assistants on Software Maintainability. Empirical Software Engineering. arXiv:2507.00788."
  - 'Deci, E. L., & Ryan, R. M. (2000). The "what" and "why" of goal pursuits: Human needs and the self-determination of behavior. Psychological Inquiry, 11(4), 227–268.'
  - "Forsgren, N., Humble, J., & Kim, G. (2018). Accelerate: The Science of Lean Software and DevOps. IT Revolution Press."
  - "Larson, W. (2019). An Elegant Puzzle: Systems of Engineering Management. Stripe Press."
  - "LeadDev (2026). Code maintainability plummets in the AI coding era, summarising GitClear/GitKraken research and DORA reporting. leaddev.com/ai/code-maintainability-plummets-in-the-ai-coding-era"
  - "Kimura, N. (2026). Review of When Help Hurts: Verification Load and Fatigue with AI Coding Assistants, CHI 2026. ACM DL: doi.org/10.1145/3772318.3791176"
  - "Vella, A., & Blincoe, K. (2026). The Impact of AI Coding Assistants on Software Engineering: A Longitudinal Study. arXiv:2605.23135."
  - "Vella, A. (2026). The Middle Loop. annievella.com/posts/the-middle-loop/"
---

## Introduction

The rapid adoption of AI coding assistants is changing software engineering at a level deeper than tooling. The immediate attraction is obvious: developers can generate, transform, test and explain code much faster. Yet software engineering is not simply the production of source code. It is a socio-technical system involving judgement, learning, collaboration, feedback, ownership, reliability and the development of people.

This creates an important leadership question:

> If AI changes the amount of code developers personally write, what happens to the capabilities, motivation, identity and wellbeing that have historically been developed through writing and working with code?

The emerging evidence suggests the answer is neither "AI is bad for developers" nor "AI simply makes developers more productive." A more useful — and more current — conclusion is that AI changes the _distribution_ of work, and that its effect on measured productivity is far less settled than most organisational narratives assume. Creation is increasingly supplemented by generation; implementation is increasingly accompanied by orchestration; and coding is increasingly balanced by evaluation and verification — but the net effect on output, and the toll it takes, varies by task, codebase, and how the tools are used.

This document distinguishes between:

- **Direct evidence**: findings from named, checkable empirical studies.
- **Interpretation / synthesis**: conclusions drawn by connecting findings across sources.
- **Hypothesis**: plausible risks or opportunities for which the evidence is still developing.

The central leadership principle:

> AI should increase human leverage without reducing human capability — and leaders should not assume leverage exists until they've measured it.

## 1. Productivity Is Not the Same Thing as a Healthy Engineering System

One of the easiest mistakes in the AI era is to equate increased output with increased productivity — or to assume AI produces a time saving at all.

_Accelerate_ (Forsgren, Humble & Kim, 2018) frames technology performance through system-level delivery measures rather than individual output: deployment frequency, lead time for changes, change failure rate, and time to restore service. The underlying argument is that software delivery performance emerges from the characteristics of the whole system, not from maximising an individual's local activity.

Will Larson's _An Elegant Puzzle_ (2019) treats developer velocity the same way. Increasing the rate at which pull requests or commits are produced doesn't necessarily increase the rate at which useful software reaches customers; bottlenecks simply move elsewhere. Larson also emphasises **organisational slack**: teams running near 100% utilisation lose the capacity to absorb constraints, react to incidents, or improve architecture. Slack is an investment in resilience, not waste.

**A necessary caveat.** Both books predate the current generation of coding assistants, and it would be a mistake to assume their "increase the rate of X" scenario is even happening by default. METR's 2025 randomised controlled trial — 16 experienced open-source developers completing 246 real tasks in their own mature repositories — found that when developers were allowed to use AI tools, they took **19% longer**, not shorter, despite forecasting a 24% speedup beforehand and still believing, after the fact, that they'd been 20% faster (Becker et al., 2025). The gap between perceived and measured effect was large and persisted across the study's robustness checks. This doesn't mean AI never helps — later work and other settings show real gains — but it means the premise "AI produces a 30% improvement" needs local measurement, not assumption.

**Leadership implication.** The right sequence of questions is now:

1. Are we actually measuring whether AI is saving time on our tasks, in our codebase — or assuming it from vendor claims and individual perception?
2. If it is, where is the bottleneck now, and how should we invest the recovered capacity?

## 2. The Nature of Developer Work Is Changing

### Direct Evidence: The Creation-to-Verification Shift

Annie Vella and Kelly Blincoe's longitudinal study (University of Auckland, 2026) tracked professional software engineers across two questionnaires six months apart — 158 eligible participants at the first time point, 101 at the second, 95 matched across both, spanning 28 countries.

Key findings:

- 82% of participants reported spending less time writing code by the second time point.
- Five of six measured development activities (designing, writing, refactoring, testing, debugging) showed reduced time; **reviewing was the only activity that increased**, and only slightly.
- The balance between creation-oriented and verification-oriented work shifted measurably toward verification (p = 0.006, moderate effect).

Vella names this new category **supervisory engineering work**, comprising three activities:

- **Directing** — specifying intent, crafting prompts, managing context, and codifying standards into reusable agent instructions.
- **Evaluating** — reading AI-generated output and deciding what to accept, modify, or reject.
- **Correcting** — fixing errors, integrating output into existing code, and maintaining consistency.

_(Retaining accountability for what ships is a real and important leadership concern, but it is a synthesis point added for this document — not part of Vella's published taxonomy.)_

### Interpretation

The underlying complexity of software development doesn't vanish; its locus shifts from generation to critical appraisal. Crucially, Vella's data also shows the "obvious" reallocation — freed-up coding time flowing into design and architecture — did not occur. Time compressed across nearly everything, including design, rather than shifting to it.

## 3. The Productivity–Experience Paradox

Vella's study also found a genuine tension: productivity _perceptions_ held stable and positive — 84% of participants reported improvement at both time points — while, among the matched cohort, the proportion reporting **negative developer experience nearly doubled, from 14% to 27%**, over the same six months.

This is the productivity–experience paradox: conventional engineering metrics can look healthy while a developer's subjective experience of flow, agency, and satisfaction with the work erodes.

**Leadership risk.** If speed of output becomes the dominant metric, leadership risks optimising away the psychological and environmental conditions that make software engineering sustainable. A developer completing tickets faster is not automatically a developer who understands the domain more deeply, feels connected to the codebase, or is building architectural intuition.

## 4. Developer Experience Is More Than Removing Friction

DevEx is often oversimplified as the elimination of operational friction. AI excels at removing mechanical friction — but not all friction in engineering is wasteful.

| Friction Category | Example                                                    | Recommended Action |
| ----------------- | ---------------------------------------------------------- | ------------------ |
| Mechanical        | Boilerplate, repetitive syntax, structural transformations | Automate           |
| Tooling           | Slow build pipelines, flaky CI environments                | Eliminate          |
| Information       | Missing documentation, ambiguous API specs                 | Resolve            |
| Coordination      | Unclear ownership, approval bottlenecks                    | Streamline         |
| Developmental     | Working through complex domain boundaries                  | Preserve           |
| Learning          | Wrestling with an unfamiliar algorithm or pattern          | Preserve           |
| Reflective        | Root-cause analysis during post-mortems                    | Preserve           |
| Judgement         | Evaluating architectural trade-offs                        | Preserve           |

The underlying research basis for "preserve the struggle" rows is Robert Bjork's concept of **desirable difficulties** in learning science: certain kinds of effort that slow performance in the short term measurably improve retention and transfer of skill (Bjork, 1994). Indiscriminately automating away developmental, learning, and judgement friction removes exactly the struggle through which engineers build durable mental models of the systems they maintain.

## 5. Learning and the Capability Paradox

AI dramatically shortens the traditional trial-failure-debug-resolve loop through which engineers build intuition. That's valuable for speed, but it risks bypassing the cognitive struggle through which real comprehension forms.

### Direct Evidence: Skill Formation Under AI Assistance

Anthropic's 2026 randomised controlled trial on AI and skill formation had 52 software engineers learn a new library, split between AI-assisted and unassisted conditions. Both groups completed the task in similar time, but the AI-assisted group scored **17% lower on a follow-up comprehension quiz** (50% vs. 67%), with the largest gaps in debugging and smaller but still significant drops in conceptual understanding. Critically, the study found the effect was conditional on _how_ AI was used: participants who asked conceptual questions and used AI to check their own reasoning scored as well as, or better than, the unassisted group; those who passively delegated ("just make it work") scored worst. Academic work on this same phenomenon has begun calling it **comprehension debt** (Ahmad, 2026).

This is a more precise and better-sourced replacement for the "IEEE TSE" claim in the original draft, and it changes the leadership takeaway: the risk isn't AI use itself, it's _passive_ AI use.

### Contextual Counter-Evidence

A separate, controlled experiment by Borg et al. ("Echoes of AI," 2026) — 151 participants, mostly professional developers, extending a Java web application with and without AI assistance, followed by a second phase where new developers evolved the resulting code — found no evidence that AI-assisted code was inherently worse in readability or complexity, using the CodeHealth metric.

This appears to sit in tension with large-scale industry telemetry: GitClear and GitKraken's 2026 analysis of over 600 million real-world code changes found rising code duplication (+81%) and increased short-lived code churn as AI adoption grew (LeadDev, 2026). The likely reconciliation is methodological — a bounded, single-application controlled experiment measures something different from longitudinal telemetry across thousands of repositories and teams with varying review discipline. The honest summary is that the maintainability question is **not yet settled**, and any claim that AI-generated code is safe (or unsafe) for long-term maintenance "by default" is overstating the current evidence in either direction.

## 6. Verification Is Work — and It Has a Cognitive Cost

A 2026 CHI study, "When Help Hurts: Verification Load and Fatigue with AI Coding Assistants" (N = 60, three Python tasks), gives the clearest available measurement of this. AI assistance, pooled across interaction styles, **reduced self-reported workload by 18.2 points** on the NASA-TLX scale and cut task time by 22% versus no-AI, while also improving correctness. The same study introduced a behavioural "verification-load" index (compile/test failures, churn, pauses, context switches) and found it **partially explained rising stress and fatigue over repeated use** — meaning the net benefit on any single task can be real and measurable, while the cumulative cost of sustained verification work still builds over time.

That's a more accurate statement than "AI reduces creation effort while increasing verification effort in a straight offset" — the picture is a short-term net gain with a longer-run fatigue tax, not a wash on every task.

## 7. Autonomy, Competence, and Relatedness (SDT Perspective)

Self-Determination Theory (Deci & Ryan) holds that motivation and wellbeing depend on three basic psychological needs:

1. **Autonomy** — _Positive_: developers can prototype independently and unblock themselves on syntax. _Risk_: if management converts tool efficiency into tighter deadlines, autonomy collapses into an imposed production quota.
2. **Competence** — _Positive_: AI can act as a tutor, explaining unfamiliar APIs. _Risk_: over-reliance prevents developers from mastering underlying principles — consistent with the comprehension-debt evidence above.
3. **Relatedness** — _Positive_: teams use AI to aggregate domain knowledge and onboard faster. _Risk_: if developers consult AI instead of pairing with peers, knowledge transfer and team cohesion degrade.

## 8. Identity and the Evolution of Craftsmanship

Engineering identity has historically been tied to craftsmanship — the tactile act of constructing systems, refactoring algorithms, and solving problems manually. As AI assumes more generation tasks, engineering identity evolves toward direction, evaluation, and judgement rather than manual construction. This is not inherently negative — professions routinely advance up levels of abstraction — but leadership must ensure the new role still offers real mastery, agency, and pride in execution, not just supervision of output the engineer doesn't fully understand.

## 9. The Inner, Middle, and Outer Loops

Vella's "three-loop model" (2026) gives leadership a concrete way to talk about where supervisory work actually lives:

```
+-----------------------------------------------------------------+
|                         INNER LOOP                              |
|               (Write -> Build -> Test -> Debug)                 |
|                   * Heavily AI-Automated *                      |
+-----------------------------------------------------------------+
                                |
                                v
+-----------------------------------------------------------------+
|                         MIDDLE LOOP                             |
|    (Direct AI -> Evaluate Output -> Correct Errors)              |
|              * The Critical Human Judgement Zone *              |
+-----------------------------------------------------------------+
                                |
                                v
+-----------------------------------------------------------------+
|                         OUTER LOOP                              |
|        (Commit -> Code Review -> CI/CD -> Observability)        |
|                  * System & Team Integration *                  |
+-----------------------------------------------------------------+
```

The middle loop is, by Vella's own account, still largely unoptimised — engineers are assembling it from chat windows, terminal agents, and IDEs that weren't designed for supervisory work. It was independently identified as a standout concept at ThoughtWorks' 2026 "Future of Software Development" retreat, described there as a "first-mover concept" that "nobody in the industry has named yet" — a useful, checkable signal that this framing has traction beyond one paper.

This is where engineering leadership should focus: it's where human domain knowledge, architectural vision, and verification rigor prevent AI-generated technical debt from reaching production.

## 10. Strategic Task Allocation: What to Automate

To maintain team capability while leveraging AI speed:

- **Automate (High Machine Agency)**: standard boilerplate, routine syntax conversion, unit test scaffolding, basic documentation drafts.
- **Shared / Collaborative (Human Orchestration + AI Speed)**: exploratory prototyping, complex refactoring strategies, initial root-cause diagnosis for obscure errors.
- **Preserve for Humans (High Human Agency)**: core architecture and domain boundary design; threat modelling and security review; trade-off analysis and incident post-mortems; mentoring and junior developer growth.

## 11. Avoiding "Capability Debt"

Analogous to technical debt, **capability debt** occurs when an organisation successfully delivers software in the short term but fails to maintain the internal human understanding required to evolve, debug, and operate those systems long-term. The academic literature is beginning to converge on similar language — "comprehension debt" (Ahmad, 2026) describes essentially the same phenomenon at the individual level.

Indicators of capability debt:

- Engineers can't explain the internal mechanics of recently committed AI-generated modules.
- Code reviews focus on formatting rather than structural correctness.
- High variance in resolution time for complex incidents where AI tools can't supply an answer.
- Junior engineers struggle to progress from execution to architectural design due to missing foundational practice.

## 12. A Balanced Engineering Scorecard

Evaluating AI adoption purely by commit volume or velocity induces local optimisation at the expense of system health. A balanced framework tracks system outcomes, quality, and human capability together:

| Dimension            | Primary Focus         | Recommended Metrics                                                |
| -------------------- | --------------------- | ------------------------------------------------------------------ |
| System Delivery      | Throughput & Speed    | Lead time for changes, deployment frequency                        |
| System Stability     | Reliability           | Change failure rate, mean time to restore (MTTR)                   |
| Verification Load    | Review Health         | Review churn, time-in-review, post-release defect rate             |
| Developer Experience | Sustainability        | Qualitative flow-state surveys, friction indicators, SDT sentiment |
| Capability & Growth  | Learning & Mentorship | Knowledge-sharing cadence, architecture comprehension checks       |
| Business Outcomes    | Value Delivered       | Customer value metrics, system resilience, feature impact          |

On System Stability specifically: Google's DORA research has reported that increased AI usage correlates with _reduced_ stability in some cohorts (roughly 7% more instability per 25% increase in AI usage, per DORA's 2024–2025 reporting cycles, as summarised in LeadDev, 2026) — a reminder that "stability" deserves its own line on the scorecard rather than being assumed to move in step with delivery speed.

## 13. Summary Leadership Principles

- **Measure before you reinvest.** Don't assume AI has created spare capacity — METR's data shows perceived and measured speed can point in opposite directions. Check locally before reallocating time.
- **Leverage over replacement.** Use AI to remove mechanical burden without eliminating developmental learning opportunities.
- **Focus on system constraints.** Treat any real velocity gains as capacity to reinvest into architecture, testing, slack, and capability — not as mandatory output-volume increases.
- **Elevate the middle loop.** Explicitly teach and evaluate prompt intent, context boundary definition, and output verification as core engineering competencies.
- **Protect engineering mastery.** Ensure senior engineers mentor juniors through complex problem-solving rather than delegating foundational understanding entirely to automated tools.
- **Design for active, not passive, AI use.** The skill-formation evidence is consistent: comprehension holds up when engineers interrogate AI output and degrades when they accept it passively. That distinction is coachable, and worth making explicit in onboarding and review norms.

> AI should make the organisation more capable — not merely more output-dense — and leadership shouldn't take the "more output" part on faith either.
