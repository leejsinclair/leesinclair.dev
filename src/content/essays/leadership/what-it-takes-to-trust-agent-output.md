---
title: "What It Takes to Trust Agent Output"
date: 2026-10-15
dek: "In one vendor survey, most respondents said they trust what their coding agents produce, and four in ten hit problems with those agents daily or more. Both numbers came from the same people. What would justify that trust sits elsewhere, mostly outside the model and outside anyone's own sense of things."
tldr:
  summary: "A reported level of trust in agent output says little: it differs sharply between two surveys, and one randomised trial of 16 developers found their expectations of AI diverging from measured outcomes. In my view, what could justify trust is a set of checks that do not pass through the agent, including tests whose false passes have been looked for, review with real capacity behind it, and mechanical checks on claims that can be verified cheaply."
  points:
    - "In Temporal's 2026 survey of 554 respondents, 85.5% trusted agent output at least somewhat and 41.1% hit problems with agents daily or more. Stack Overflow's 2025 survey, a broader self-selected group of 33,244 developers, found 33% trusting AI tools' accuracy and 46% distrusting it."
    - "Tests are weaker evidence than a green run suggests. On SWE-bench Verified, 7.8% of patches that passed the benchmark's tests failed the projects' full developer test suites, and extra generated tests flagged 15.7% of passing patches in a second study."
    - "Of 6,819 merged agent-authored pull requests across 1,391 popular GitHub repositories, about three-quarters were merged unmodified and only 1,501 had any review comments. In one case an agent reported all tests passing while CI failed, and the pull request was merged with two integration checks failing."
    - "Automation research from aviation and clinical settings finds that instructions and simple practice do not remove complacency or bias. Where a claim can be checked mechanically, as with whether a package exists, a cheap check can replace trust."
references:
  - "Temporal Technologies. (2026, August 25). The State of Development 2026. temporal.io/reports/state-of-development-2026."
  - "Stack Overflow. (2025). 2025 Developer Survey: AI. survey.stackoverflow.co/2025/ai."
  - "Becker, J., Rush, N., Barnes, E., & Rein, D. (2025). Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity. arXiv:2507.09089."
  - "Becker, J., Rush, N., Cunningham, T., Rein, D., & Mahamud, K. (2026, February 24). We are Changing our Developer Productivity Experiment Design. METR."
  - "Wang, Y., Pradel, M., & Liu, Z. (2026). Are Solved Issues in SWE-bench Really Solved Correctly? An Empirical Study. ICSE 2026. arXiv:2503.15223."
  - "Yu, B., Zhu, Y., He, P., & Kang, D. (2025). UTBoost: Rigorous Evaluation of Coding Agents on SWE-Bench. ACL 2025. arXiv:2506.09289."
  - "Cynthia, S. T., Das, J. K., & Roy, B. (2026). Are We All Using Agents the Same Way? An Empirical Study of Core and Peripheral Developers' Use of Coding Agents. MSR 2026. arXiv:2601.20106."
  - "Li, Z., Popescu, R. M., & Izadi, M. (2026). Silent Reliance or Diligent Review? Human-Agent Engagement and Interaction Patterns in GitHub. JAWs 2026, co-located with ICSE 2026. Abstract only."
  - "Spracklen, J., Wijewickrama, R., Sakib, A. H. M. N., Maiti, A., Viswanath, B., & Jadliwala, M. (2025). We Have a Package for You! A Comprehensive Analysis of Package Hallucinations by Code Generating LLMs. USENIX Security 2025. arXiv:2406.10279."
  - "OWASP GenAI Security Project. (2025, December 9). OWASP Top 10 for Agentic Applications for 2026. Announcement page only."
  - "Parasuraman, R., & Manzey, D. H. (2010). Complacency and bias in human use of automation: An attentional integration. Human Factors, 52(3), 381-410. Abstract only."
  - "Goddard, K., Roudsari, A., & Wyatt, J. C. (2012). Automation bias: a systematic review of frequency, effect mediators, and mitigators. Journal of the American Medical Informatics Association, 19(1), 121-127."
  - "DORA, Google Cloud. (2025, September 24). State of AI-assisted Software Development 2025. Summary pages only."
---

Two earlier pieces on this site looked at checking. [The verification gap](/leadership/verification-gap-ai-code) asked whether developers check AI-generated code before they commit it. [Checking Isn't Catching](/leadership/checking-isnt-catching) asked whether the checking finds anything. This one asks the question underneath both: when is it reasonable to trust what an agent hands back at all, and what would have to be true for that trust to be earned rather than assumed?

The number people report tells you very little. The things that could justify it sit outside the model and outside anyone's gut feeling.

**A trust figure depends on who is asked.**

Temporal's State of Development 2026 surveyed 554 respondents in the US and UK/EMEA between 29 April and 25 May. Asked how much they trusted the accuracy of AI agent output, 85.5% said at least somewhat and 24.7% said completely. The same report found 41.1% hit issues with agents daily or more. Temporal sells an orchestrator for AI agents, so the report has a point of view, and each team decided for itself what counted as an issue. Still, the two figures sit side by side, and the first does not appear to constrain the second.

Stack Overflow's 2025 survey asked a broader group a similar question. Of 33,244 respondents, 3.1% highly trusted the accuracy of AI tools and 29.6% somewhat trusted them. Of the same respondents, 46% distrusted them. Two surveys, two populations and different question wording gave very different pictures. Trust, as reported, is a statement about how someone feels toward a tool they are using anyway.

METR's 2025 trial shows what that feeling can be worth. Sixteen experienced open-source developers completed 246 tasks, some with AI allowed and some without. Before starting, they forecast that AI would cut their completion time by 24%. Afterwards they estimated it had cut it by 20%. The measured result was that tasks took 19% longer. It was a small study of early-2025 tools, and METR's 2026 follow-up points the other way, though METR calls that newer data only very weak evidence. What holds up is METR's own remark that developers' self-reports of speedup can be quite unreliable. A confident belief and a measured outcome came apart, and the developers did not notice the gap.

**A green test run is weaker evidence than it looks.**

Tests are the obvious first check: if the suite passes, the change is probably fine. Two studies of SWE-bench Verified, a benchmark of real issues from open-source Python projects, put a number on how far that holds.

Wang, Pradel and Liu (ICSE 2026) took 877 patches from three agent systems that had passed the benchmark's own tests and ran them against each project's full developer test suite. 7.8% failed. Differential testing, which compares each patch's behaviour with the human fix, flagged 260 of the 877 as behaving differently, and when the authors read a sample of 77 of those, 22 were certainly incorrect. A separate team, in UTBoost (ACL 2025), generated extra tests and found that the extra tests flagged 92 of 584 passing Verified patches, 15.7%, as erroneous. Eleven of the 45 Verified leaderboard entries changed rank.

Both studies have limits. These are benchmark tasks, not production systems. Most passing patches held up under the stricter tests. The extra tests were themselves written by a model and reviewed by two authors, so they can be wrong too. So the lesson is a narrow one. A suite written before the agent arrived covers the failures its authors thought of, and a green run has a false-pass rate whether or not anyone has measured it.

**Review is the other check, and the record of it is sparse.**

The MSR 2026 paper by Cynthia, Das and Roy studied 9,427 closed pull requests written by coding agents (Claude Code, Cursor, Copilot and Codex) across 1,391 GitHub repositories with at least 100 stars, with data up to August 2025. Of the 6,819 that were merged, the authors report that on average 74.1% went in without any modification. Only 1,501 of the 6,819 had any review comments at all. Developers outside a project's core group merged without running any checks 19.1% of the time, against 11.2% for core developers. A TU Delft workshop paper that mined 212,297 agent pull requests from 12 agents reports that 73.9% of agent pull requests were merged without modification, with a median human triage time of 0.2 hours. Only its abstract is available, and it does not say what that percentage is a share of.

None of that proves anyone was careless. An unmodified merge can follow a proper read. Maintainers may be merging work they prompted themselves. These are popular public repositories, not enterprise ones, and neither paper measured defects after the merge. What the figures do show is the shape of the process: a lot of agent code goes in quickly, with little discussion around it.

**Attention erodes under load.**

If review is thin, the automation literature would not be surprised. Work in aviation and clinical settings describes what happens to human oversight once an aid is in the loop. Parasuraman and Manzey's 2010 review in _Human Factors_ reports that complacency appears in novices and experts alike and is not removed by simple practice, and that automation bias is not prevented by training or instructions. Goddard, Roudsari and Wyatt's 2012 systematic review of clinical decision support found that wrong advice led people to errors they would otherwise have avoided, and that workload, task complexity and time pressure made it more likely. Its mitigators include training, accountability, displaying the aid's confidence, and presenting advice as information rather than a command.

Neither review looked at code agents, and I would not carry their numbers across. The direction transfers well enough. An instruction to review carefully, on its own, is a weak control, and the conditions that erode attention, heavy workload and time pressure, are ones a team with agents can easily be in.

**What the agent says about its own work is not evidence.**

The MSR paper includes one case that is worth holding on to. On a Microsoft Fluent UI pull request, Copilot wrote that it had resolved the issue and that "all tests are now passing". CI was still failing. The developer merged the pull request with two integration checks failing. It is a single example, and the paper does not count how often it happens. It does show that a status report from the thing being judged is output of the same process, and carries no more weight than the code does.

OWASP's announcement of its Top 10 for Agentic Applications in December 2025 names this as a risk in its own right. ASI09, Human-Agent Trust Exploitation, is summarised as "confident, polished explanations" misleading operators into approving harmful actions. A fluent account of what was done is the cheapest thing an agent produces, and the easiest to mistake for assurance.

Some claims an agent makes can be checked mechanically, and for those trust is the wrong tool. Spracklen and colleagues generated 576,000 code samples from 16 models and found that the average rate of recommended packages that did not exist was at least 5.2% for commercial models and 21.7% for open-source ones. Of the invented names, 43% came back in all ten repeated runs of the same prompt. The models were 2023-era, and the authors did not register any invented names, so the paper shows nothing about exploitation in the wild. It does show a check that works: whether a package exists is a registry lookup that is cheap and needs no judgement. It says the package exists, not that it is the right one, but it is the kind of check that works: mechanical, and outside the model.

**The setup around the agent matters as much.**

The 2025 DORA report, from Google Cloud and based on a survey of nearly 5,000 technology professionals, found that AI adoption was now associated with higher throughput and still associated with lower delivery stability. Its authors tie the stability result to weak testing, version control and feedback loops, and describe AI as an amplifier of whatever the organisation already is. It is a survey-based correlation, and it concerns AI assistance in general rather than agents specifically, but it fits the rest of this evidence. My reading is that agent output can be trusted about as far as the system around it has earned.

Trust that is earned looks different from trust that is felt. It starts with a check the agent cannot route around: a required status check on the branch, a registry lookup, a second reader who did not write the prompt. The test suite behind it has had its false passes looked for rather than assumed away. The agent's own account of its work stays out of the evidence. And review is staffed to the volume being generated, because attention erodes under load.

Someone also has to decide which changes are low-stakes enough to wave through. That is a leadership decision, and it is easy to leave unmade. A better question for a team than how much it trusts its agents is what would show it was wrong, and how quickly it would find out.
