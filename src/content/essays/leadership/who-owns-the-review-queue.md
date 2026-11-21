---
title: "Who Owns the Review Queue?"
date: 2026-11-21
dek: "Agents have sped up writing code, and the queue for reviewing it has grown. The telemetry is mostly vendor data, but it points the same way. The fixes on offer, from smaller pull requests to AI reviewers, have thin evidence behind them. What a leader can do is name an owner, cap what agents hand over, route review by risk and measure the queue."
tldr:
  summary: "In my view the review bottleneck is a leadership problem because the constraint appears to have moved, and I found no source that says who is responsible for managing it. Telemetry from Faros, CircleCI and LinearB, all vendors, and from a Harvard working paper built on Jellyfish's data, shows more code and bigger pull requests arriving, with review waits and review time rising. The remedies I checked are stacked pull requests, executable standards, deterministic gates, AI reviewers, risk routing and work-in-progress limits. Only routing has measured evidence of a shorter queue, from one company, and none has been shown to work without lowering quality. A leader can still name an owner for review capacity, cap what agents hand over, route by risk, and measure the queue."
  points:
    - "Jellyfish telemetry analysed by Harvard researchers Chen and Stratton (445 million events, 655 firms, a working paper) finds that after firms adopted coding agents the time from submitting a pull request to merging it rose 56.1%, while resolved Jira issues rose 13.7%, a borderline significant result. Faros (10,000+ developers) reports bigger pull requests and 91% longer review time, and LinearB (8.1 million pull requests) reports bigger pull requests and longer waits for a first reviewer. All of it is observational, and most of it comes from companies that sell measurement."
    - "The usual cap of about 400 lines comes from a 2006 SmartBear study of Cisco changes reviewed before check-in. It is a vendor recommendation about defect density, not a measured cliff, and it is not about pull requests. Google and Microsoft studies support small changes for faster feedback and more useful comments, and none of them studied agent output."
    - "Routing low-risk changes past human review is the best-evidenced intervention I found, and the evidence is one company. Meta reports a median review wall time 35% lower for diffs its risk system handled than for human-reviewed diffs, with an observational design and confounding the authors acknowledge. AI reviewers are weaker still: Microsoft reports a 10 to 20% median improvement in completion time with no baseline, and an industrial study found closure time rose."
    - "I found no source showing who is accountable for review capacity or that a review rota works. A leader can fill that gap with an owner, a visible queue, a cap on what agents hand over and a limit on new starts, and treat each as an experiment."
references:
  - "Faros AI. (2025, July 23). AI coding assistants increase developer output, but not company productivity (The AI Productivity Paradox Report 2025). faros.ai/blog/ai-productivity-paradox-report-2025. Blog page opened; the full downloadable report was not."
  - "Chen, F., & Stratton, J. (2026). Artificial Intelligence in the Firm: Bottlenecks in Software Production. Harvard University job market paper, version of 19 November 2026, read as an author-hosted PDF. Not peer reviewed. I read the abstract, introduction, section 5 and conclusion, and did not read the model and appendix sections in full."
  - "CircleCI. (2026, February). The 2026 State of Software Delivery. circleci.com. Full PDF read."
  - "LinearB. (2025, December). 2026 Software Engineering Benchmarks Report: The AI productivity edition. linearb.io. Full PDF read."
  - "Muiruri, J. (2026, August 4). Turn one giant AI-generated pull request to a reviewable stack. The GitHub Blog (Engineering). Also GitHub Docs, About stacked PRs."
  - "SmartBear. Best Practices for Peer Code Review (includes the Cisco study; see also Cohen, J., Best Kept Secrets of Peer Code Review). Read through a mirrored PDF and SmartBear's live page; the original 2006 chapter was not opened."
  - "Sadowski, C., Soderberg, E., Church, L., Sipko, M., & Bacchelli, A. (2018). Modern Code Review: A Case Study at Google. ICSE-SEIP 2018."
  - "Bosu, A., Greiler, M., & Bird, C. (2015). Characteristics of Useful Code Reviews: An Empirical Study at Microsoft. MSR 2015."
  - "Garg, R. (2026, March 31). Encoding Team Standards. martinfowler.com, in the series Patterns for Reducing Friction in AI-Assisted Development."
  - "Farrag, S. E. (2026, May 1). The Productivity-Reliability Paradox: Specification-Driven Governance for AI-Augmented Software Development. arXiv:2605.01160. Single-author preprint."
  - "Zhang, Pan, Zhang, Xing, & Sun. Deployability-Centric Infrastructure-as-Code Generation: Fail, Learn, Refine, and Succeed through LLM-Empowered DevOps Simulation. arXiv:2506.05623 (v3, January 2026), accepted at FSE 2026. Read as an arXiv preprint."
  - "Fu, Y., Liang, P., Tahir, A., Li, Z., Shahin, M., Yu, J., & Chen, J. (2025). Security Weaknesses of Copilot-Generated Code in GitHub Projects: An Empirical Study. ACM TOSEM. arXiv:2310.02059. Abstract page only."
  - "Meta authors. (2026). Automating Low-Risk Code Review at Meta: RADAR, Risk Calibration, and Review Efficiency. arXiv:2605.30208 (v2, 12 June 2026). Read through a summarising tool; some figures were garbled, and I used only those that were stated clearly."
  - "Orosz, G. (2026, September 8). What is happening with code reviews. The Pragmatic Engineer. Partly paywalled; the sections on routing were read, and the section on pull request size limits was not."
  - "Tuli, S. (2025, July 14). Enhancing Code Quality at Scale with AI-Powered Code Reviews. Engineering@Microsoft."
  - "Cihan, U., et al. (2025). Automated Code Review In Practice. ICSE 2025, SEIP track. arXiv:2412.18531. Abstract page only."
  - "Lin, Liang, Thongtanunam, & Tantithamthavorn. (2026). Is Agentic Code Review Helpful? Mining Developers' Feedback to CodeRabbit Reviews in the Wild. arXiv:2607.03316. Preprint; abstract page only."
  - "Martian. Code Review Bench. github.com/withmartian/code-review-benchmark. The live leaderboard is a JavaScript page that would not load for me."
  - "Theory of Constraints Institute. Five Focusing Steps. tocinstitute.org/five-focusing-steps.html."
  - "Yeret, Y. (2026, June 15). AI Coding Made Code Review the Bottleneck. Now What? Scrum.org blog, a repost of his own site. I read it through a summarising tool, so I have paraphrased it and quote none of it."
  - "Williams, K. (2026, May 11). Cal.com blog on dedicated PR review. cal.com/blog/dedicated-pr-review-rotation."
---

Two earlier pieces here dealt with the people at the review stage. [One](/leadership/what-it-takes-to-trust-agent-output) argued that review has to be staffed to match the volume of agent output, and [another](/leadership/overseeing-agents-is-the-tiring-part) asked what that work costs the person doing it. This one asks the question underneath both: who is in charge of the queue itself?

My view is that the review bottleneck is a leadership problem, and I mean that narrowly. The best telemetry I found points to review as the stage that now sets the pace. I found no source that says who is responsible for managing it, and most of the remedies on offer have little evidence behind them.

**The queue grew.**

The data comes mostly from companies that sell engineering measurement, so I will say whose it is as I go. Faros looked at telemetry from over 10,000 developers in 1,255 teams and compared each team's two lowest-adoption quarters with its two highest. High-adoption teams merged 98% more pull requests. Their pull requests were 154% bigger on average, and review time rose 91%. At company level Faros found no significant correlation between AI adoption and delivery improvement. It says its own analysis is correlational.

The Harvard working paper by Fiona Chen and James Stratton is the most careful estimate I found. It uses Jellyfish data on 445 million events from 655 firms and compares firms with their own earlier baselines. After a firm adopted coding agents, the average time from submitting a pull request to merging it rose by 56.1%. Time waiting for a first reviewer rose 59.9%, and time in active review rose 58.5%. Pull requests opened rose 35.7%. Resolved Jira issues rose 13.7%, which the authors call borderline significant. They write that "code review explains much of this gap". The earlier generation of assistants showed no significant effect on these review times. The paper is not peer reviewed, Jellyfish sells analytics and the effects cover only the 12 to 16 months after adoption.

CircleCI's data fits. Across 28.7 million workflows in September 2025, the median team's feature-branch throughput rose about 15% year on year while its main-branch throughput fell 7%, and main-branch success hit 70.8%, the lowest in five years. The widely quoted 59% is an average across all branches that top performers skew. CircleCI has no review-time data, so "review" is its reading of throughput. LinearB, with 8.1 million pull requests, reports sizes at the 75th percentile of 157 lines unassisted, 408 AI-assisted and 293 agentic. At the 75th percentile, agentic pull requests waited 5.3 times longer for a first look (1,055 minutes against 201). LinearB concedes that agents are often given low-priority work, which muddies the comparison. AI-assisted ones, once picked up, were reviewed faster than unassisted ones, which fits the survey remark in the same report that leaders describe AI-driven review as faster and more shallow.

I would not claim more than this from the data: the stage after writing now sets the pace.

**Who holds the queue?**

Chen and Stratton also give a reason that stage may be hard to widen. Reviewers are not interchangeable. 82.8% of reviews are by someone who already knows the code, and senior engineers do 75.7% of the reviewing of senior-written code. One junior engineer they interviewed described new senior-approval rules after AI-caused outages that "created even more review bottlenecks". One reaction to a risk is to add an approval, and in this account the approval became the queue.

I looked for who owns review capacity and found little. None of the sources I opened tests an owner or a review rota, and none shows how teams actually assign the job. LinearB says only that agent pull requests lack a natural human owner whose goal is to get them approved and merged, and hedges even that. Cal.com's post on dedicated PR review has a rota in its address, but what it describes is a personal norm: no more than five open pull requests per author, and split anything well past about 1,000 lines. A norm in a blog post is not a tool setting and comes with no outcome data. I read that gap as the finding. The literature measures throughput and says little about who answers for the stage that decides how fast the work lands, so it is worth checking who that is on your team.

**Cap what gets handed over.**

If the queue is the constraint, the cheapest lever is the size of what enters it. The number people reach for is 400 lines. It comes from a SmartBear white paper on a study of 2,500 reviews by 50 programmers at Cisco, tracked over ten months. The advice was to review fewer than 200 to 400 lines at a time. The data behind it are defects logged per thousand lines, which fall as the size of a review grows. SmartBear sold the review tool the data came from, and the reviews were of changes before check-in, not pull requests. It is a recommendation read off a chart, not a measured cliff. Some retellings add a 10-file limit. I could not find one in that study.

Better evidence supports the direction but not the number. At Google the median change is 24 lines, and first feedback arrives in under an hour for small changes against about five hours for very large ones. A Microsoft study of 1.5 million review comments found the share of useful comments falls as a change touches more files. Useful there means the comment led to a nearby code change, which is not the same as catching a defect. None of the studies looked at agent output.

GitHub's answer for agent output is to have agents deliver stacked pull requests, small ordered layers that each carry one concern. Its engineering post turns a 1,721-line pull request into four. That example is a constructed demo, the post has no measured outcome, and GitHub sells the feature. The hard part, as GitHub's documentation puts it, is rebasing the layers when the bottom one changes, which is why the tooling exists. I would still try it, since the Google and Microsoft studies both point towards small changes. I would not tell a team it has been shown to work.

**Write the standard down, and don't expect numbers from it.**

Another upstream idea is to encode what reviewers know. Rahul Garg describes interviewing senior engineers and turning their judgement into versioned instructions kept in the repository and changed by pull request. His example is two seniors on one project whose thresholds for a critical security concern were, in his words, "quietly different". Writing a shared instruction made the difference explicit. The article does not say how it was settled, and it gives no figures. A single-author preprint by Sabry Farrag reports a Spec Kit pilot with median feature lead times falling from 8 to 12 working days to 6 to 9, reported as approximate ranges. That pilot had 14 engineers in one unnamed organisation, no control group, and a before-and-after design the paper itself calls indicative. It was not run by GitHub. I would use the first idea and ignore the figures.

**Let machines do what machines can check.**

Deterministic checks are the cheapest part to adopt. In a benchmark of 153 AWS CloudFormation tasks, six older models deployed their first attempt only 20.8 to 30.2% of the time. The security result was worse: 8.4% security compliance when scored by Checkov, a policy checker, on its built-in policies. That figure is a filtered rate on benchmark tasks, not on production changes. A separate study of Copilot-generated code in real GitHub projects found static analysis flagged 733 snippets across 43 weakness types, and that feeding the warnings back to the assistant fixed up to 55.5% of them. Neither study measures whether a gate lowers the load on reviewers. The case for gating first is a plain one all the same: a human should not be spending attention on what a script can reject.

Routing is the step after that, and the best evidence I found for any intervention. Meta describes a system called RADAR that sends low-risk diffs through a funnel of checks, a risk model and an LLM reviewer, and lets them land without human review. A human can still reject during a delay before landing. For the 535,290 diffs it reviewed, median review wall time was 35% lower than for human-reviewed diffs. Diffs were not randomly assigned, the authors say confounding is possible, and one of their own reported figures does not add up, so I would read the 35% as a rough direction only. It is also one company with unusually mature tooling. At the other end, Duckbill Group, a small team, told The Pragmatic Engineer it kept human review for the public API, auth and design system only. It reports merged pull requests rising from 353 to 684 and a median merge time of 26 hours with human review against one hour without. The period was not stated in the part of the article I could read, and the figures are self-reported.

**Be careful with AI reviewers.**

Review agents are the other obvious remedy. In July 2025 Microsoft reported that its internal assistant covered over 90% of the company's pull requests, more than 600,000 a month. The only benefit it measures is a 10 to 20% median improvement in completion time across 5,000 repositories, with no baseline, period or definition given. The other figures describe adoption. Microsoft sells the product the work informed.

Published studies are mixed. A study of an industrial deployment found 73.8% of automated comments were resolved, and mean pull request closure time rose from 5 hours 52 minutes to 8 hours 20 minutes. A preprint on CodeRabbit comments on public repositories found 36.4% accepted and 56.3% rejected. Martian's benchmark reports precision and recall for named tools, and its online precision counts a suggestion as good when a developer later made a matching fix, so it measures adoption, not defects caught. Chen and Stratton found 79.1% of firms using AI review tools while only 23.3% of review comments were written by AI. Whether a tool shortens the queue is a question about your own repositories, and a leader can find out by tracking accepted comments and closure time before and after.

**What the old rule says to do.**

Goldratt's five focusing steps give a sequence: identify the constraint, exploit it, subordinate everything else to it, elevate it, and prevent inertia from becoming the constraint. For review, exploit means getting more from the reviewers you have: smaller changes, clear descriptions, mechanical checks done before a human opens the diff. Subordinate means holding back the rest. Yuval Yeret applies this to agent coding in a June 2026 post: limit the work in progress so that when review is full, people stop starting and start finishing, and add review capacity only when it raises what the business actually gets. It is reasoning from the theory plus anecdote, with no data, and he consults for a living. The order is what matters to me. Buying a review agent or hiring reviewers is elevating, and it comes after subordinating. Subordinating means telling people to stop launching agents, which will be unpopular.

**What I would do about it.**

The evidence does not say any of these will work for you. It says the problem is real and that the common fixes are mostly untested, so treat each as an experiment with a measure attached.

Name an owner for review capacity. One person is accountable for pickup time and the age of the oldest open pull request, and has the authority to change what enters the queue. I found no evidence that this helps, which is why it is cheap to try and easy to drop.

Cap what agents hand over. Set a size above which an agent's change has to be split, and a limit on open pull requests per person. Pick numbers from your own review times and change them when the data says so, not because a study said 400.

Route by risk, and put checks first. Name the paths that always get a human, such as auth, public interfaces and anything touching money, and enforce that in tooling. Let deterministic checks reject what they can before anyone is asked to look.

Stop starting when the queue is full. A limit on work in progress means someone has to say no to a new agent run, which is a decision only a leader can make.

Measure the queue and not the output. Pickup time, pull request age and rework after review show whether the constraint is moving. Lines generated and merges per week do not.

Throttling work to the pace of the slowest stage is decades old. What changed is the stage. Writing code got cheap, so the slowest step is now one we assumed would keep up. Ask who on your team has been told it is theirs to run.
