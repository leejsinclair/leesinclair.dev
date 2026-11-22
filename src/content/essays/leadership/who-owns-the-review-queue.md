---
title: "Who Owns the Review Queue?"
date: 2026-11-21
dek: "Agents can produce code faster than teams can review it. Give the review queue an owner, limit what enters it and measure whether changes are getting through without sacrificing quality."
tldr:
  summary: "Review capacity needs an owner. Give that person authority to limit incoming work, route changes by risk and track pickup time, pull request age and rework. The evidence suggests review queues are growing, but it does not prove which remedies will shorten them without affecting quality. Test changes against your own results."
  points:
    - "A Harvard working paper found that time from pull request to merge rose 56.1% after firms adopted coding agents. The data is observational and comes from an engineering analytics vendor."
    - "Smaller changes can make review easier, but the familiar 400-line limit is a vendor recommendation, not a proven threshold for agent-written pull requests."
    - "Meta reports shorter review times for changes routed through its low-risk system. The comparison was not randomised, so it does not prove the system caused the difference."
    - "Assign an owner, limit incoming work and measure the queue. Treat each change as an experiment, not an established fix."
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

Agents can produce pull requests faster than a team can review them. When that happens, the answer is not to keep launching agents and hope the queue clears. Someone needs authority over the work entering it.

Make one person accountable for review capacity. Give them a visible queue, a way to limit incoming work and the authority to stop new starts when reviewers are full. Measure whether changes reach production without more rework. The aim is a manageable queue and reliable delivery, not a higher count of generated lines.

The evidence points to a growing review bottleneck, but most proposed fixes have not been tested well enough to promise a result. The measures below are decisions to try and evaluate, not proven thresholds. Two earlier pieces looked at [staffing review to match agent output](/leadership/what-it-takes-to-trust-agent-output) and [the cost to the people doing it](/leadership/overseeing-agents-is-the-tiring-part).

## The queue grew

Much of the data comes from companies that sell engineering measurement. Faros looked at telemetry from over 10,000 developers in 1,255 teams, comparing each team's two lowest-adoption quarters with its two highest.

High-adoption teams merged 98% more pull requests. Their pull requests were 154% bigger on average, and review time rose 91%. At company level Faros found no significant correlation between AI adoption and delivery improvement. Its analysis is correlational: it does not establish that adoption caused these differences.

The Harvard working paper by Fiona Chen and James Stratton is the most careful estimate I found. It uses Jellyfish data on 445 million events from 655 firms and compares firms with their own earlier baselines. After a firm adopted coding agents, the average time from submitting a pull request to merging it rose by 56.1%. Time waiting for a first reviewer rose 59.9%, and time in active review rose 58.5%.

Pull requests opened rose 35.7%. Resolved Jira issues rose 13.7%, which the authors call borderline significant. They write that "code review explains much of this gap". The earlier generation of assistants showed no significant effect on these review times. The paper is not peer reviewed, Jellyfish sells analytics and the effects cover only the 12 to 16 months after adoption.

CircleCI's data fits. Across 28.7 million workflows in September 2025, the median team's feature-branch throughput rose about 15% year on year while its main-branch throughput fell 7%. Main-branch success hit 70.8%, the lowest in five years. The widely quoted 59% is an average across all branches that top performers skew. CircleCI has no review-time data, so "review" is its reading of throughput.

LinearB examined 8.1 million pull requests. At the 75th percentile, sizes were 157 lines unassisted, 408 AI-assisted and 293 agentic. Agentic pull requests at that percentile waited 5.3 times longer for a first look (1,055 minutes against 201). LinearB concedes that agents are often given low-priority work, which muddies the comparison.

Once picked up, AI-assisted pull requests were reviewed faster than unassisted ones. In the same report, leaders describe AI-driven review as faster and more shallow.

These studies point to the stage after writing becoming a constraint. They do not establish that review is the bottleneck for every team.

## Who holds the queue?

Chen and Stratton also give a reason that stage may be hard to widen. Reviewers are not interchangeable. 82.8% of reviews are by someone who already knows the code, and senior engineers do 75.7% of the reviewing of senior-written code. One junior engineer they interviewed described new senior-approval rules after AI-caused outages that "created even more review bottlenecks". One reaction to a risk is to add an approval, and in this account the approval became the queue.

I looked for who owns review capacity and found little. None of the sources I opened tests an owner or a review rota, and none shows how teams actually assign the job. LinearB suggests that agent pull requests lack a natural human owner whose goal is to get them approved and merged.

Cal.com's post on dedicated PR review has a rota in its address, but describes a personal norm: no more than five open pull requests per author, and split anything well past about 1,000 lines. A norm in a blog post is not a tool setting and comes with no outcome data.

The gap matters. The literature measures throughput and says little about who answers for the stage that decides how fast work lands. Check who has that responsibility on your team.

## Cap what gets handed over

If the queue is the constraint, consider the size of what enters it. The number people reach for is 400 lines. It comes from a SmartBear white paper on a study of 2,500 reviews by 50 programmers at Cisco, tracked over ten months. The advice was to review fewer than 200 to 400 lines at a time. The data behind it are defects logged per thousand lines, which fall as the size of a review grows.

SmartBear sold the review tool the data came from, and the reviews were of changes before check-in, not pull requests. It is a recommendation read off a chart, not a measured cliff. Some retellings add a 10-file limit. I could not find one in that study.

Better evidence supports the direction but not the number. At Google the median change is 24 lines, and first feedback arrives in under an hour for small changes against about five hours for very large ones. A Microsoft study of 1.5 million review comments found the share of useful comments falls as a change touches more files. Useful there means the comment led to a nearby code change, which is not the same as catching a defect. None of the studies looked at agent output.

GitHub's answer for agent output is to have agents deliver stacked pull requests, small ordered layers that each carry one concern. Its engineering post turns a 1,721-line pull request into four. That example is a constructed demo, the post has no measured outcome, and GitHub sells the feature. The hard part, as GitHub's documentation puts it, is rebasing the layers when the bottom one changes, which is why the tooling exists. I would still try it, since the Google and Microsoft studies both point towards small changes. I would not tell a team it has been shown to work.

## Write the standard down

Another upstream idea is to encode what reviewers know. Rahul Garg describes interviewing senior engineers and turning their judgement into versioned instructions kept in the repository and changed by pull request. His example is two seniors on one project whose thresholds for a critical security concern were, in his words, "quietly different". Writing a shared instruction made the difference explicit. The article does not say how it was settled, and it gives no figures.

A single-author preprint by Sabry Farrag reports a Spec Kit pilot with median feature lead times falling from 8 to 12 working days to 6 to 9, reported as approximate ranges. That pilot had 14 engineers in one unnamed organisation, no control group, and a before-and-after design the paper itself calls indicative. It was not run by GitHub. Use the first idea without relying on the figures.

## Let machines do what machines can check

Deterministic checks are the cheapest part to adopt. In a benchmark of 153 AWS CloudFormation tasks, six older models deployed their first attempt only 20.8 to 30.2% of the time. Security compliance was 8.4% when scored by Checkov, a policy checker, on its built-in policies. That figure is a filtered rate on benchmark tasks, not on production changes.

A separate study of Copilot-generated code in real GitHub projects found static analysis flagged 733 snippets across 43 weakness types. Feeding the warnings back to the assistant fixed up to 55.5% of them. Neither study measures whether a gate lowers the load on reviewers. The case for gating first is a plain one all the same: a human should not be spending attention on what a script can reject.

Routing is the step after that, and the best evidence I found for any intervention. Meta describes a system called RADAR that sends low-risk diffs through a funnel of checks, a risk model and an LLM reviewer, and lets them land without human review. A human can still reject during a delay before landing. For the 535,290 diffs it reviewed, median review wall time was 35% lower than for human-reviewed diffs.

Diffs were not randomly assigned, the authors say confounding is possible, and one of their own reported figures does not add up, so I would read the 35% as a rough direction only. It is also one company with unusually mature tooling.

At the other end, Duckbill Group, a small team, told The Pragmatic Engineer it kept human review for the public API, auth and design system only. It reports merged pull requests rising from 353 to 684 and a median merge time of 26 hours with human review against one hour without. The period was not stated in the part of the article I could read, and the figures are self-reported.

## Be careful with AI reviewers

Review agents are the other obvious remedy. In July 2025 Microsoft reported that its internal assistant covered over 90% of the company's pull requests, more than 600,000 a month. The only benefit it measures is a 10 to 20% median improvement in completion time across 5,000 repositories, with no baseline, period or definition given. The other figures describe adoption. Microsoft sells the product the work informed.

Published studies are mixed. A study of an industrial deployment found 73.8% of automated comments were resolved, and mean pull request closure time rose from 5 hours 52 minutes to 8 hours 20 minutes. A preprint on CodeRabbit comments on public repositories found 36.4% accepted and 56.3% rejected.

Martian's benchmark reports precision and recall for named tools. Its online precision counts a suggestion as good when a developer later made a matching fix, so it measures adoption, not defects caught. Chen and Stratton found 79.1% of firms using AI review tools while only 23.3% of review comments were written by AI. Whether a tool shortens the queue is a question about your own repositories. Track accepted comments and closure time before and after.

## Manage the constraint

Goldratt's five focusing steps give a sequence: identify the constraint, exploit it, subordinate everything else to it, elevate it, and prevent inertia from becoming the constraint. For review, exploit means getting more from the reviewers you have: smaller changes, clear descriptions, mechanical checks done before a human opens the diff. Subordinate means holding back the rest.

Yuval Yeret applies this to agent coding in a June 2026 post: limit the work in progress so that when review is full, people stop starting and start finishing, and add review capacity only when it raises what the business actually gets. It is reasoning from the theory plus anecdote, with no data, and he consults for a living.

The order matters. Buying a review agent or hiring reviewers is elevating, and it comes after subordinating. Subordinating means telling people to stop launching agents, which will be unpopular.

## Put someone in charge of review

The evidence does not say any of these will work for you. It says the problem is real and that the common fixes are mostly untested, so treat each as an experiment with a measure attached.

Name an owner for review capacity. Make one person accountable for pickup time and the age of the oldest open pull request, with authority to change what enters the queue. I found no evidence that an owner improves these measures, so test the arrangement and change it if it does not help.

Cap what agents hand over. Set a size above which an agent's change has to be split, and a limit on open pull requests per person. Pick numbers from your own review times and change them when the data says so, not because a study said 400.

Route by risk, and put checks first. Name the paths that always get a human, such as auth, public interfaces and anything touching money, and enforce that in tooling. Let deterministic checks reject what they can before anyone is asked to look.

Stop starting when the queue is full. A limit on work in progress means someone has to say no to a new agent run, which is a decision only a leader can make.

Measure the queue and not the output. Pickup time, pull request age and rework after review show whether the constraint is moving. Lines generated and merges per week do not.

Throttling work to the pace of the slowest stage is decades old. Agents can change which stage sets that pace. If review is holding up your team, make ownership explicit and judge the changes by whether the queue becomes manageable without creating more rework.
