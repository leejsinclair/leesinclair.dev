---
title: "The Contextual Anchor: Reimagining Leadership Purpose in the Era of AI Coding Agents"
dek: "As AI agents take on more of the mechanics of coding, purpose becomes the anchor that helps engineers judge whether an AI-assisted solution is actually good, but it only works alongside autonomy, mastery, and psychological safety, not in place of them."
tldr:
  summary: "AI coding agents are changing the mechanics of software production, but the leadership response isn't to replace lost technical identity with purpose alone: it's to make the link between technical work, business outcomes, and human development explicit, while still investing in verification, competence, and safety."
  points:
    - "A 2025 randomised trial found developers using AI tools took 19% longer on real tasks, yet still believed afterwards they'd been faster. Sentiment alone isn't a reliable signal that AI is helping."
    - "Context about a codebase, its constraints, and its intent is itself an engineering capability: teams that can articulate it direct and evaluate AI output better than teams that can't."
    - "Purpose gives engineers criteria for choosing between plausible AI-generated solutions, but it doesn't replace tests, security review, or human accountability."
    - "Mastery should expand to cover problem definition, system-level debugging, and verification design, not shrink to 'orchestration' at the expense of technical depth."
references:
  - "Becker, J., Rush, N., Barnes, E., & Rein, D. (2025). Measuring the impact of early-2025 AI on experienced open-source developer productivity. METR. arXiv:2507.09089."
  - "Sergeyuk, A., Golubev, Y., Bryksin, T., & Ahmed, I. (2025). Using AI-based coding assistants in practice: State of affairs, perceptions, and ways forward. Information and Software Technology, 178, 107610."
  - "DORA (Google Cloud). (2025). State of AI-assisted Software Development."
  - "Stack Overflow. (2024). 2024 Developer Survey: AI."
  - "Stack Overflow. (2025). 2025 Developer Survey: AI."
  - 'Deci, E. L., & Ryan, R. M. (2000). The "what" and "why" of goal pursuits: Human needs and the self-determination of behavior. Psychological Inquiry, 11(4), 227–268.'
  - "Edmondson, A. (1999). Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350–383."
  - "Pink, D. H. (2009). Drive: The Surprising Truth About What Motivates Us. Riverhead Books."
---

## Introduction

AI coding assistants, and increasingly autonomous coding agents, are changing how software is designed, built, tested and maintained. Generating code, writing tests, refactoring and investigating defects all used to take substantial human effort. AI can now support or do much of it.

So if the mechanics of software production change, how should engineering leaders help developers understand their value, keep growing, and contribute to the organisation?

Abandoning technical mastery is the wrong answer. So is hoping that purpose alone will absorb the disruption. Leaders need to make the link between technical work, business outcomes, customer needs and people's development far more explicit than it used to be.

That is where purpose becomes a contextual anchor. It tells engineers what they are trying to achieve, why it matters, and how to judge whether an AI-assisted solution is any good. It doesn't work on its own, though. Autonomy, mastery, psychological safety and room to grow still matter just as much.

The framing draws on Daniel Pink's account of intrinsic motivation as autonomy, mastery and purpose (Pink, 2009), extended with Deci and Ryan's Self-Determination Theory (2000) and Amy Edmondson's research on psychological safety (1999).

AI changes the distribution of work. The leader's job is to make sure that change produces better engineering and meaningful human contribution, and not just more code, faster.

## 1. The Changing Nature of Developer Identity

Software engineering has never been solely about writing code. It includes understanding problems, modelling domains, designing systems, making trade-offs, testing assumptions, collaborating with stakeholders, and maintaining software over time.

Still, coding skill has always been the most visible sign of engineering capability. Developers build confidence by solving hard problems, learning new technologies and watching their work become a working product. For many, craftsmanship is a big part of who they are professionally.

AI-assisted development can disrupt all of that.

A developer who once spent hours implementing a complex feature may now achieve a working first draft in minutes. This can create opportunities for higher-value work, but it can also introduce uncertainty:

- What does expertise mean when implementation becomes easier?
- How do developers demonstrate competence when an agent produces much of the code?
- How will early-career engineers develop judgement if they have fewer opportunities to implement systems themselves?
- Does increased output translate into greater ownership, or merely more work to review?

These questions matter, but not every developer feels them. People value different things, and AI adoption doesn't automatically bring dissatisfaction or a fear of being made obsolete.

Stack Overflow's 2025 Developer Survey found that 64% of respondents did not see AI as a threat to their jobs, even as adoption grew. The same survey found falling positive sentiment and widespread distrust of AI output. This is self-reported opinion from a large but self-selected sample of the platform's own users, and no independently sampled study of similar scale has asked the same question yet. Still, the pattern (seeing the benefits while doubting the reliability) fits the harder evidence discussed below. A controlled trial found a persistent gap between how much developers believed AI was helping them and how much it actually was (Becker, Rush, Barnes, & Rein, 2025).

So the leadership challenge is bigger than replacing a lost identity. Developers need to see how their capabilities fit into an engineering system that is changing around them.

## 2. From Code Production to Engineering Judgement

The distinction between creating code and evaluating code is useful, but incomplete.

An AI coding agent may generate an implementation, propose an architecture, write tests or investigate a defect. An engineer is still responsible for knowing whether the result solves the actual problem, fits the system, carries acceptable risk and can be maintained.

And the human contribution starts well before the agent's output arrives for review. It starts before the agent is invoked.

**The contextual engineering loop**

```
Business and customer purpose
  Why does this matter?
        |
        v
Problem definition and constraints
  What must be achieved, and what must not change?
        |
        v
Human-directed AI execution
  Generate, explore, implement, iterate
        |
        v
Verification and engineering judgement
  Tests, review, security, maintainability, domain correctness
        |
        v
Customer and business outcome
  Did the software solve the right problem?
        |
        v
  Feedback informs the next cycle
```

Purpose is valuable because it informs each stage of this loop. However, purpose is not a substitute for technical requirements, automated tests, security controls, or human accountability.

**Context is an engineering capability**

AI tools often know little about a codebase, its architecture or the organisation's unwritten rules. A peer-reviewed study of how developers use AI assistants found this to be a concrete, recurring barrier. Besides general worries about trust and company policy, developers said assistants lacked project-level context, so they didn't rely on them for work like bug triage and refactoring that depends on knowing a codebase well (Sergeyuk et al., 2025).

Stack Overflow's 2024 Developer Survey (self-reported data rather than a controlled study) found a similar pattern at larger scale: 63% of respondents identified insufficient organisational context as a top concern with AI tools at work, nearly twice the share who blamed user error or lack of training for the challenges they encountered.

A team that can clearly articulate customer problems, business rules, system boundaries, and acceptance criteria is better positioned to direct AI tools and evaluate their results.

That makes context an engineering capability in its own right. A developer who knows why a change is needed, what constrains it and how success will be measured contributes more than one who simply produces more code.

## 3. Purpose as an Operational Requirement

Purpose is usually talked about as motivation. In AI-assisted development it also has a practical job to do.

When an agent can generate several plausible implementations, engineers need criteria for deciding between them. Those criteria may include:

- Does the solution address the customer's actual problem?
- Does it satisfy the business rules and acceptance criteria?
- Is the architecture consistent with the system's intended direction?
- Does it introduce security, reliability, or maintenance risks?
- Is the complexity justified by the expected value?

Purpose supplies the reason behind these decisions. It helps engineers tell a solution that merely works from one that is right.

Be wary of the claim that the cost of producing software is heading towards zero. Generating code can get cheaper while clarifying requirements, integration, verification, operations and maintenance stay expensive. AI can also increase the amount of code that needs review and create new kinds of technical debt.

The strongest evidence here isn't a survey. METR, an independent AI evaluation organisation with no AI product to sell, ran a randomised controlled trial with sixteen experienced open-source developers working through 246 real tasks in codebases they knew well. Each task was randomly assigned to allow or disallow AI tools. Tasks where AI was allowed took 19% longer, the opposite of what the developers and outside experts had predicted. Before starting, developers forecast that AI would cut their time by 24%. Afterwards, they still believed it had made them about 20% faster (Becker, Rush, Barnes, & Rein, 2025). That gap is a leadership problem in itself: developer sentiment alone can't tell you whether AI is helping.

Self-reported industry data points the same way, though it is opinion rather than measurement. Stack Overflow's 2025 survey found that 66% of developers cited "AI solutions that are almost right, but not quite" as their top frustration, and 45% said debugging AI-generated code had become more time-consuming; the same survey found developer trust in AI accuracy had fallen to 29%, down from roughly 40% the year before.

AI doesn't eliminate engineering work. Leaders have to make sure the organisation invests in the work that turns generated output into reliable software.

## 4. Redefining Mastery Without Diminishing Craftsmanship

A common response to AI is to say developers should stop coding and become orchestrators. That is a fair description of how responsibilities are shifting. It goes wrong when orchestration is treated as a replacement for technical competence.

Engineering judgement rests on technical understanding. Developers need enough depth to spot a wrong abstraction, find a security hole, see a performance problem coming and challenge an agent's assumptions.

So mastery should expand, not disappear.

| Traditional sources of mastery  | Expanded engineering mastery                         |
| ------------------------------- | ---------------------------------------------------- |
| Writing correct code            | Defining correct problems and constraints            |
| Understanding frameworks        | Understanding systems and architectural trade-offs   |
| Debugging implementation errors | Investigating failures across the full system        |
| Writing tests                   | Designing effective verification strategies          |
| Implementing features           | Delivering measurable customer and business outcomes |
| Individual technical expertise  | Shared domain knowledge and team capability          |

The aim is to keep technical expertise pointed at the work humans are still accountable for, not to make developers less technical.

This matters most for early-career engineers. If AI does too much of the implementation and they never get to understand the concepts underneath, they gain short-term productivity and end up with weaker independent judgement.

Leaders should deliberately protect time for learning, experimenting, designing, debugging and hands-on investigation.

## 5. Beyond Purpose: Autonomy, Competence, and Psychological Safety

Purpose alone can't create a healthy engineering culture. Pink's account draws on Self-Determination Theory, which names three basic psychological needs behind motivation and wellbeing: autonomy, competence and relatedness (Deci & Ryan, 2000). Purpose isn't one of them. The three needs are a good lens for seeing why AI adoption brings both opportunity and risk.

**Autonomy.** Developers need meaningful influence over how they approach their work. If AI is introduced primarily as a mechanism for increasing output targets or monitoring individual productivity, it may reduce perceived autonomy. A stronger approach gives engineers ownership of problems, encourages experimentation, and allows them to help shape the team's AI-assisted workflows.

**Competence.** Developers need opportunities to build and demonstrate capability. If agents handle every difficult implementation task, developers may have fewer opportunities to practise foundational skills. Leaders should establish learning pathways that include both AI-assisted work and independent technical development. Competence should be assessed through the ability to understand, design, verify, and maintain systems, not simply the volume of generated code.

**Relatedness and psychological safety.** Developers need to feel that they belong, that their contribution matters, and that they can raise concerns without fear of humiliation or retaliation. Psychological safety is particularly important when AI-generated code introduces uncertainty. Engineers must be able to say that an agent's output is incorrect, that a proposed architecture is risky, or that a workflow is creating unsustainable review burdens (Edmondson, 1999). Psychological safety does not mean removing accountability. It means creating conditions in which people can identify problems, learn from mistakes, and improve without fear of interpersonal punishment.

## 6. The Leadership Responsibility: Redesigning the Engineering System

DORA's 2025 research describes AI as an amplifier of whatever strengths and dysfunctions an organisation already has. That is a good warning against treating AI adoption as a tooling exercise.

A team with clear requirements, good testing and strong engineering standards can use AI to do better work. A team with unclear priorities, weak feedback loops and poor ownership will just produce problems faster.

That gives leaders five connected responsibilities:

- **Clarify purpose and outcomes.** Connect technical work to customer needs, business strategy, and measurable outcomes. Make the reason for a task explicit before implementation begins.
- **Build verification into the workflow.** Establish appropriate standards for testing, security, architecture review, documentation, and code quality. AI-generated output must remain subject to engineering accountability.
- **Develop people, not just processes.** Provide opportunities for developers to learn, practise, experiment, and gain confidence. Make career progression meaningful in an AI-assisted environment.
- **Maintain open feedback and challenge.** Encourage engineers to question AI output, raise risks, and discuss whether the workflow is improving or degrading the quality of work.
- **Measure outcomes rather than activity alone.** Evaluate customer value, reliability, maintainability, learning, and team health alongside delivery performance.

Each of these props up the others. Drop one and the rest get harder.

## Conclusion

AI coding agents are changing the mechanics of software development. They don't remove the need for human judgement, technical understanding or leadership.

The real shift is bigger than coder to evaluator. Engineering used to put the visible weight on implementation. Now more of it sits on problem definition, context, design, verification and ownership of outcomes.

Purpose is a good anchor through that change. It tells developers why their work matters and gives them a way to judge whether an AI-assisted solution is right. But it has to come with real autonomy, psychological safety and room to keep developing technically.

> The job is to build a team where AI expands what people can solve, while keeping the human skills that make software reliable.
