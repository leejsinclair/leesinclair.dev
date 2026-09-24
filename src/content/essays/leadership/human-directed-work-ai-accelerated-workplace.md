---
title: "Human-Directed Work in an AI-Accelerated Workplace"
date: 2026-09-24
dek: "The question for leaders is no longer whether people work alongside AI, but who sets the direction for what it accelerates. Machines can supply the leverage, provided people keep authority over what is worth doing."
tldr:
  summary: "AI can now draft, summarise and propose work faster than many teams can review it. The sustainable response is human-directed acceleration: machines gather and structure context continuously, while people form their own intent first and keep final authority over priorities and consequential actions."
  points:
    - "Higher AI adoption has gone with more output but heavier review load. Faros telemetry from more than 10,000 developers showed 98% more merged pull requests, 91% longer review times and no company-level delivery gain."
    - "The risk is reactivity: when the first thing a person sees is machine-generated, it sets the frame for what feels important. The evidence is early, so treat it as a well-grounded concern rather than a proven effect."
    - "Draw governance boundaries by authority, consequence and reversibility, not by the clock. Target friction at consequential decisions, and decide what not to accelerate as well as what to."
references:
  - "Ye, X. M., & Ranganathan, A. (2026, February 18). AI promised to free up workers' time. UC Berkeley Haas researchers found the opposite. UC Berkeley Haas School of Business: eight-month study of a 200-person technology company, also reported in Harvard Business Review."
  - "Rastogi, C., Zhang, Y., Wei, D., Varshney, K. R., Dhurandhar, A., & Tomsett, R. (2022). Deciding Fast and Slow: The Role of Cognitive Biases in AI-assisted Decision-making. Proceedings of the ACM on Human-Computer Interaction, 6(CSCW1). arXiv:2010.07938."
  - "Buçinca, Z., Malaya, M. B., & Gajos, K. Z. (2021). To Trust or to Think: Cognitive Forcing Functions Can Reduce Overreliance on AI in AI-assisted Decision-making. Proceedings of the ACM on Human-Computer Interaction, 5(CSCW1). arXiv:2102.09692."
  - "Lee, H.-P., Sarkar, A., Tankelevitch, L., Drosos, I., Rintel, S., Banks, R., & Wilson, N. (2025). The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers. CHI 2025."
  - "Laux, J., & Ruschemeier, H. (2025). Automation Bias in the AI Act: On the Legal Implications of Attempting to De-Bias Human Oversight of AI. European Journal of Risk Regulation. arXiv:2502.10036."
  - "Regulation (EU) 2024/1689 (AI Act), Article 14: Human oversight."
  - "DORA (Google Cloud). (2025). State of AI-assisted Software Development."
  - "Faros AI. (2025, July 23). The AI Productivity Paradox Research Report: telemetry from more than 10,000 developers across 1,255 teams."
  - "Becker, J., Rush, N., Barnes, E., & Rein, D. (2025). Measuring the impact of early-2025 AI on experienced open-source developer productivity. METR. arXiv:2507.09089."
  - "METR. (2026, February 24). We are Changing our Developer Productivity Experiment Design."
  - "Laker, B. (2025). When Not to Use AI. MIT Sloan Management Review."
  - "Zenity. Governing Agentic AI: A Practical Enterprise Framework. Vendor blog."
  - "NiCE. Essential Guide to Agentic AI Governance Frameworks. Vendor blog."
---

The core challenge in AI-enabled workplaces is no longer whether people should work alongside intelligent machines. That integration is already underway. The question for leaders is who sets the direction for what those machines accelerate.

The idea that knowledge workers should begin the day with an AI-free block is a useful provocation, and versions of it are already circulating, including scheduled "AI-free thinking" time for leaders. Rigid timing misses the point, though. The value is not the sixty minutes. It is that a person forms their own intent before meeting machine-generated priorities.

Generative and agentic systems can now draft, summarise, and propose work faster than many teams can review it. One telemetry study of more than 10,000 developers found that teams with high AI adoption merged 98% more pull requests, but review time rose 91% and company-level delivery metrics did not improve (Faros AI, 2025). An engineer may start the day facing a queue of agent-authored pull requests and automated findings. An executive may receive overnight scenario briefings before deciding their own strategic focus. The risk goes beyond distraction. Call it cognitive capture: the first thing a person sees sets the frame for what feels important. Anchoring research points the same way. In lab experiments on AI-assisted decisions, people adjusted too little away from an AI's suggestion, and giving them more time reduced the effect. Those were narrow tasks with lay participants, so this is a well-grounded concern about workplace priorities, not a proven effect on them.

That suggests a shift in operating principles:

**Do not try to protect humans from AI. Protect them from becoming reactive to it.**

The evidence for the reactive pattern is early but consistent. An eight-month study of a 200-person technology company found that employees with broad AI access worked faster, took on more, let work seep into breaks, and kept several AI threads running at once. The researchers warned that this can strain judgement over time. It is one company and the work is still in progress. A survey of 319 knowledge workers found that higher confidence in generative AI went with less critical thinking, though the measures were self-reported and correlational.

The distinction matters. An autonomous agent that analyses telemetry overnight, runs test suites, or flags edge cases delivers real leverage, and abstaining from it as a ritual adds little. Machines should gather, compile, and structure context continuously. Humans should keep final authority over priorities and over what gets acted on. Holding that authority on paper is not enough. Research on automation bias shows that human overseers often over-rely on AI output, and the EU AI Act explicitly requires that people overseeing high-risk systems be enabled to stay aware of that tendency. Keeping authority means designing for it.

The boundary matters more as systems move from passive assistance to acting on their own. Observing, summarising, recommending, drafting and executing each carry a different level of risk. Governance practitioners increasingly describe tiered authority: agents act on their own for low-risk work, humans monitor exceptions for medium-risk work, and humans approve high-risk or irreversible actions. A read-only summarisation agent is a different proposition from one that can modify account balances. In the same way, an agent that detects a software defect sits at a lower consequence threshold than one that deploys code to production.

**Governance boundaries should therefore be drawn by authority, consequence, and reversibility, not by the clock.**

This changes how we should think about productivity. Generative AI makes raw output cheap, while human evaluative capacity stays finite. The 2025 DORA report, based on nearly 5,000 respondents, found that AI adoption went with higher delivery throughput but lower stability, and concluded that AI amplifies the system around it: weak review, testing, and deployment practices become the constraint. Without explicit triage, teams risk trading an execution bottleneck for a verification and decision bottleneck. This is not universal. Where the constraint sits varies by team, repository, and risk level, and the productivity evidence is mixed. In one randomised trial, 16 experienced open-source developers took 19% longer with early-2025 AI tools while expecting to be 24% faster (Becker et al., 2025). METR's follow-up suggests the gap has probably narrowed since, but selection effects undermined its design, so the question is still open.

The goal of AI integration should not be frictionless speed. Administrative friction is waste, but some cognitive friction does real work. In experiments on cognitive forcing functions, interface designs that made people think before accepting an AI suggestion reduced overreliance on wrong recommendations more than explanations alone. There were two caveats: participants rated those designs least favourably, and the benefit was larger for people who enjoy effortful thinking. Friction should be targeted at consequential decisions, not applied everywhere.

The sustainable model is human-directed acceleration. Machines should operate continuously where they provide scale. Humans should step back periodically to decide what is worth accelerating. For a strategic leader that may mean an hour of uninterrupted synthesis. For an operational role, a few minutes of intent-setting before opening an automated queue may suffice. These durations are a design judgement, not a research finding. The anchoring work suggests extra time pays off where machine confidence is low, because anchoring to a correct suggestion does no harm. Applying the same logic to high-stakes work is my extension of it. During active incident response, the boundary temporarily compresses. The principle stays adaptable because its goal is not compliance with a ritual. It is preserving human agency.

Human direction also has to include deciding what not to accelerate. The Berkeley researchers describe a cycle in which self-driven expansion feels exciting, expectations quietly reset upward, and workloads swell. Their remedy is an "AI practice": intentional pauses before major decisions, batching non-urgent updates, and protected focus windows. Direction that only decides what to add is not sustainable.

The central question for leaders is not "How much AI should our teams use?" It is "How do we ensure our people keep ownership of deciding what is worth doing while AI greatly expands what can be done?"

The aim is a workplace designed so that machines supply the leverage and people set the direction. That rules out banning AI, and it rules out stripping away every bit of reflective friction too.
