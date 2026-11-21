# The review bottleneck is a leadership problem: how AI code generation moved the constraint to code review, and what leaders can do about it

## Contents

1. [Faros AI: The AI Productivity Paradox Report](#faros-ai-the-ai-productivity-paradox-report) - Source tier: Vendor research (telemetry analysis, not peer reviewed)
2. [CircleCI 2026 State of Software Delivery](#circleci-2026-state-of-software-delivery) - Source tier: Vendor research (CI platform telemetry) | Access status: Fully read
3. [Chen and Stratton, Artificial Intelligence in the Firm: Bottlenecks in Software Production](#chen-and-stratton-artificial-intelligence-in-the-firm-bottlenecks-in-software-production) - Source tier: Working paper / job market paper, not peer reviewed (author-hosted PDF) | Access status: Fully read (author-hosted PDF downloaded and text-extracted; intro, section 5, conclusion,
4. [Farrag, The Productivity-Reliability Paradox](#farrag-the-productivity-reliability-paradox) - Source tier: Preprint (arXiv, single author)
5. [LinearB 2026 Software Engineering Benchmarks: AI PR size and pickup time](#linearb-2026-software-engineering-benchmarks-ai-pr-size-and-pickup-time) - Source tier: Vendor research (LinearB sells software engineering intelligence / AI productivity tooling | Access status: Fully read via local text extraction (pdftotext) of the downloaded PDF. Relevant pages (PR
6. [GitHub Blog on stacked pull requests and splitting large PRs](#github-blog-on-stacked-pull-requests-and-splitting-large-prs) - Source tier: Vendor practitioner/product post (GitHub engineering blog) plus vendor documentation
7. [Evidence on PR size and review quality](#evidence-on-pr-size-and-review-quality) - Source tier: SmartBear/Cisco: vendor research (white paper, not peer reviewed)
8. [Martin Fowler / Rahul Garg: Encoding Team Standards](#martin-fowler--rahul-garg-encoding-team-standards) - Source tier: Practitioner post (hosted on Martin Fowler's site; author is a Thoughtworks employee)
9. [GitHub Spec Kit and any measured outcomes](#github-spec-kit-and-any-measured-outcomes) - Source tier: Preprint (not peer-reviewed)
10. [Yuval Yeret on constraints, WIP and AI coding](#yuval-yeret-on-constraints-wip-and-ai-coding) - Source tier: Practitioner post (blog, agile coach/consultant)
11. [Goldratt's Five Focusing Steps](#goldratts-five-focusing-steps) - Source tier: Practitioner/vendor organisation page (TOC Institute) plus encyclopedia (Wikipedia, second
12. [Independent evaluations of AI code review tools](#independent-evaluations-of-ai-code-review-tools) - Source tier: Martian benchmark: independent-of-vendors open-source benchmark run by a third party, not 
13. [Microsoft Engineering: AI-assisted code review at scale](#microsoft-engineering-ai-assisted-code-review-at-scale) - Source tier: Practitioner post (vendor corporate engineering blog, written by the product's PM)
14. [Policy-as-code and deterministic gates for AI-generated code](#policy-as-code-and-deterministic-gates-for-ai-generated-code) - Source tier: DPIaC-Eval: peer-reviewed (FSE 2026 accepted; read as arXiv preprint)
15. [Review ownership and reviewer capacity in practice](#review-ownership-and-reviewer-capacity-in-practice)

## Faros AI: The AI Productivity Paradox Report

### Source

- **Citation:** 
> Faros Research, 'AI coding assistants increase developer output, but not company productivity' (The AI Productivity Paradox Report 2025), Faros AI blog, listed 23 July 2025, data as of June 2025. https://www.faros.ai/blog/ai-productivity-paradox-report-2025
- **Source tier:** Vendor research (telemetry analysis, not peer reviewed)
- **Sponsor and incentive:** 
> Faros sells an engineering intelligence platform. The page carries CTAs ('Book a demo', 'Try Faros Platform') and emphasises measurement, governance and lifecycle tooling, which aligns with its product. Self-funded research on its own customer telemetry; the customer mix is undisclosed.
- **Exact quotes:** 
- "we observed no significant correlation between AI adoption and improvements at the company level." (core findings)
- "the gains observed in team behavior do not scale when aggregated." (core findings)
- "PR review time increases 91%" (team-level figures, high-adoption teams)
- "a system moves only as fast as its slowest link" (Amdahl's Law explanation)

### Claims

- **Key claims:** 
> Developers on high-AI-adoption teams produce more (tasks, PRs), but there is no significant correlation between AI adoption and company-level delivery improvement. Faros attributes this to downstream bottlenecks (review, testing, release; Amdahl's Law), uneven adoption across teams, adoption skewed to newer-tenure engineers, and shallow use (mostly autocomplete). Warns of bigger, buggier PRs shifting pressure onto review and more context switching from orchestration and oversight.
- **Headline figures:** 
- PRs merged +98%: MATCHES lead. High-AI-adoption teams, compared with the same teams in their two lowest-adoption quarters; as of June 2025.
- Average PR size +154%: MATCHES lead. Same comparison.
- Sample 10,000+ developers: MATCHES lead ('over 10,000 developers across 1,255 teams', multiple companies, count of companies not stated).
- Also: tasks completed +21%, tasks touched per day +9%, PRs per day +47%, bugs per developer +9%.
- Not given on the page: absolute PR counts, absolute review hours, number of companies.
- Do not mix with the 2026 follow-up (Acceleration Whiplash; 22,000 developers, 4,000 teams per Faros page; secondary sources report +441% median review time, ~+51% PR size) [uncertain, 2026 figures not opened].
- **Sample and method:** 
> Telemetry (not surveys) from task management, IDEs, static analysis, CI/CD, version control, incident management and HR metadata. 10,000+ developers, 1,255 teams, multiple companies, up to two years of history aggregated by quarter, data as of June 2025. Per team, percent change between the two lowest-adoption and two highest-adoption quarters. Spearman rank correlation; only metrics with data from at least 6 companies and p<0.05 reported; metrics standardised per company; outliers removed. Adoption means use of developer AI assistants (Copilot, Cursor, Claude Code, Windsurf); how usage was measured is not explained.
- **Limitations:** 
> Stated: correlational, no causation; quality findings rest on limited time series; company-level result may reflect inconsistent adoption. Visible: vendor with product interest; company mix and count undisclosed; time-trend comparison confounds AI adoption with other changes over the period (team growth, seasonality); no absolute numbers; review-time metric definition unclear; the 154% larger PRs and 98% more PRs may partly reflect how PRs are split, and PRs are not equal units of value; adoption skew toward newer engineers.

### Leadership relevance

- **Overlap with site essays:** 
> Strong overlap with The Verification Gap and Checking Isn't Catching (review load rising as output and PR size grow, bugs per developer up 9%). Overlaps with Overseeing Agents Is the Tiring Part (context switching from orchestration and oversight). Limited direct overlap with What It Takes to Trust Agent Output.

### Fields with unverified values (those values omitted above)

- access_status
- headline_figures
- what_a_leader_can_do

## CircleCI 2026 State of Software Delivery

### Source

- **Citation:** 
> Ron Powell, Jacob Schmitt (authors); Gillian Kieser (editor). The 2026 State of Software Delivery. CircleCI, February 2026 (PDF creation date Feb 2026). https://circleci.com/landing-pages/assets/2026-state-of-software-delivery-report.pdf ; companion blog: https://circleci.com/blog/five-takeaways-2026-software-delivery-report (Feb 18, 2026)
- **Source tier:** Vendor research (CI platform telemetry)
- **Access status:** 
> Fully read. PDF opened and text extracted locally with pdftotext (report pages 3, 7, 11, 12, 24, 25-26 read); companion blog fetched. Not read: Q2 2026 Pulse report (only seen in search results).
- **Sponsor and incentive:** 
> Published by CircleCI, a CI/CD vendor that sells validation and delivery tooling. The report's framing (validation must keep pace with AI code generation) supports its product pitch. Analysis is of CircleCI's own platform data.
- **Exact quotes:** 
- "Analysis of more than 28 million CI workflows across thousands of teams shows a sharp increase in development activity." (p.3 intro)
- "Across all projects building on CircleCI, average throughput (the number of daily workflows run) grew 59% year over year." (p.7)
- "The median team, for example, saw a 15% increase in throughput on feature branches. Throughput on the main branch, however, declined 7% from last year, indicating new difficulties reviewing, validating, and promoting AI-generated changes into shared code." (p.11)
- "success rates on the main branch fell to their lowest level in over 5 years, to 70.8%. In other words, attempts at merging changes into production code bases now fail 30% of the time." (p.12)
- "...this result is well below our recommended benchmark of 90%..." (p.12)
- "To create this report, we pulled data from over 28 million CircleCI workflows within the first 28 days of September 2025." (p.26 Methodology)
- "Even teams in the top 10% struggled to move changes into production. Throughput on feature branches increased by almost 50% for this group, while main branch activity was essentially flat." (p.11)

### Claims

- **Key claims:** 
> AI-driven code generation has raised workflow volume sharply (average +59% YoY), but gains are concentrated in the top performers; the bottom half saw little to no improvement. For the median team, feature-branch throughput rose while main-branch throughput fell, which CircleCI reads as an integration bottleneck: reviewing, validating and promoting AI-generated changes. Main-branch success rate fell to its lowest in over 5 years. Top 5% teams grew throughput 97% (feature +85%, main +26%), which CircleCI attributes to validation keeping pace with generation. Report claims causation by AI adoption; the data is workflow telemetry, not a direct measure of AI use.
- **Headline figures:** 
- 28 million CI runs: MATCHES lead. Exact wording 'more than 28 million' workflows; exact count 28,738,317 workflows, 1-28 Sept 2025, projects with 2+ contributors (all time) and workflows run 5+ times in the period. Unit is workflows, not 'runs' strictly.
- Feature-branch throughput +59% YoY: DOES NOT MATCH. 59% is the AVERAGE change in daily workflows across ALL branches, all projects (p.7), not feature branches. Median team all-branch throughput +4.3%. Median team FEATURE-branch throughput +15.2% (p.11 chart; text says 15%). Top 10% (p90) feature branches +49.3% (all +47.2%, main +1.0%). Top 5%: feature +85%, main +26%, overall +97% (per blog; report p.~11 also gives 26% main for top group).
- Main-branch throughput down nearly 7%: MATCHES, for the MEDIAN team only. Chart -6.8%, text 'declined 7%' (p.11). Not an all-team average. Top 10% main +1.0%, top 5% main +26%.
- Main-branch success rate 70.8%: MATCHES. 'fell to their lowest level in over 5 years, to 70.8%' (p.12, chart 2022-2025). Benchmark 90%. Report does not state in the text whether it is mean, median or pooled; blog also does not say. Equivalent to 30% of main-branch merge attempts failing.
- Other: blog cites 72-minute median recovery time on main branch for the typical team (blog only, not re-verified in PDF text); report example: 5 changes/day at 70% vs 90% success. Later Q2 2026 Pulse (Jul 2026) reportedly gives feature +7.7% YoY, main flat, success 76.7% (secondary source for 76.7%; not opened).
- **Sample and method:** 
> Observed platform telemetry, not self-report. 28,738,317 CircleCI workflows, every day 1-28 September 2025, compared year over year with the prior-year period. Filtered to projects with more than one contributor (all time) and workflows that ran at least 5 times in the period. Main-branch analysis uses the project's current default branch, possibly missing older data where default branch changed. Industry data from Clearbit, not available for all orgs. 'Thousands of teams' (exact number of projects/orgs not given in the text I read).
- **Limitations:** 
> Stated by source: default-branch caveat; Clearbit industry coverage incomplete; filter to 2+ contributor projects and 5+ runs. Visible to a careful reader: single month (September) snapshot each year; CircleCI customers only and CircleCI-hosted CI, not all delivery; throughput counts workflow runs, which can rise from retries, failures or smaller commits rather than shipped value; feature-branch growth does not mean more merged work; the 59% mean is skewed by top performers (median all-branch +4.3%); no direct measurement of AI use, so attribution to AI is inference; main-branch success rate falling can partly mean CI catching real defects (the report concedes failures are not always negative); no review-time or human-review data, so 'review bottleneck' is inferred from throughput and success rate; vendor with product interest. Critics (e.g. Rob Bowley blog, Apr 2026) question the '1 in 20 teams benefiting' reading and the weakness of feature-branch throughput as a metric (not opened).

### Leadership relevance

- **What a leader can do:** 
> Source supports investing in validation and integration capacity (faster, more reliable pipelines, faster recovery) rather than only code generation; top-5% teams are the evidence offered. Strength: moderate to weak, correlational vendor data and the causal story (validation keeps pace, so changes ship) is asserted, not tested. Useful as evidence that the constraint sits after generation, not as proof of what review changes work.
- **Overlap with site essays:** 
> Strong overlap with The Verification Gap and Checking Isn't Catching (more AI output, the checking stage is where it stalls). Moderate with What It Takes to Trust Agent Output (success-rate decline as trust signal). Light with Overseeing Agents Is the Tiring Part (report mentions burnout only as a general impact, no data).

### Fields with unverified values (those values omitted above)

- headline_figures (72-minute MTTR and the Q2 2026 Pulse figures are from the blog or secondary sources, not verified in the PDF)
- limitations (Rob Bowley critique seen only in search results, not opened)
- sample_and_method ('thousands of teams' count and prior-year comparison window not confirmed in text read)

## Chen and Stratton, Artificial Intelligence in the Firm: Bottlenecks in Software Production

### Source

- **Source tier:** Working paper / job market paper, not peer reviewed (author-hosted PDF)
- **Access status:** 
> Fully read (author-hosted PDF downloaded and text-extracted; intro, section 5, conclusion, appendix quotes checked). Not read in full: model and appendix sections.
- **Sponsor and incentive:** 
> Data is proprietary from Jellyfish, an engineering analytics vendor that sells measurement of engineering teams (a commercial interest in AI-impact metrics). Funding per the paper: Stripe Economics of AI Fellowship; Harvard Kennedy School Stone Program; Schmidt Sciences AI at Work Program. Paper states conclusions are the authors' not Jellyfish's, and Jellyfish reviewed the manuscript only for disclosure of proprietary information, not scientific content. Authors thank Jellyfish staff for partnership.
- **Exact quotes:** 
- Abstract: "AI substantially increases code output but has small effects on final software output and no detectable effect on employment. Code review becomes the bottleneck. Code waits longer to reach a reviewer, spends longer in active review, and receives more requested changes."
- Abstract: "covering 445M work events — GitHub coding activity, Jira issues, and Google Calendar events — for 720,542 workers at 655 firms."
- Introduction: "after adoption of AI agents, the average time from the code's review submission to its merge increases by 56.1%. This change represents both an increase in the time that code waits in a 'backlog,' by 59.9%, and an increase in the time after code has begun active review, by 58.5%."
- Introduction: "79.1% of firms have adopted AI code review tools, but still largely keep humans in the loop, with the overwhelming majority of reviews and comments being written by humans."
- Section 5.2: "AI agents significantly lengthen the review process, by 1.99 days, or 56.1% of the baseline mean of 3.56 days."
- Section 5.2: backlog "by 1.67 days, or 59.9% of the baseline mean of 2.78 days, and ... active review, by 2.33 days, or 58.5% of the baseline mean of 3.98 days."
- Conclusion: "Code review explains much of this gap." (gap between PRs +35.7% and Jira issues +13.7%)
- Interview, junior engineer (appendix and intro): "People could make a huge number of commits quickly, but code review was still the bottleneck. ... After some outages that were caused by AI-generated commits, there were also new rules requiring senior engineer approval for AI-generated code, which created even more review bottlenecks."
- Interview, senior engineer (appendix): "If you speed up coding, the bottleneck shifts somewhere else. ... the real bottleneck has been communication between business and product teams, as well as review and QA."
- Conclusion: "As one stage of production speeds up, the bottleneck shifts to another, and labor must be reallocated towards it."

### Claims

- **Key claims:** 
> Paper exists, by Chen and Stratton. Staggered difference-in-differences (event study) on firm adoption of two generations of AI coding tools. Assistants (Copilot-style) raise code output moderately; agents raise it more. Final output (resolved Jira issues/epics) rises far less, and employment shows no detectable change. Review is identified as the bottleneck: after agent adoption code waits longer for a reviewer (capacity constraint) and spends longer in active review with more comments (consistent with lower quality of code entering review). Reviewers are not interchangeable: they review code they know (82.8% of reviews vs 17.2% if random) and senior code is mostly reviewed by seniors (75.7%) vs junior code (32.8%). AI review tools do not remove the bottleneck: 79.1% of firms used them by July 2026, but only 23.3% of review comments are AI-generated and 10.8% of PRs get an AI comment. Calibrated model: agents raise coding productivity 73.7%, slightly lower review productivity (-7.0%), firms shift labour from coding (-22.7%) to review (+43.4%). Long run: output +16.1% and employment -13.2% once firms adjust; if review productivity does not keep pace, output +57.8% by 2031, if it does, up to +341.4% output and up to -76.2% employment. Implication stated: measure the whole production process, and invest in complementary organisational changes.
- **Headline figures:** 
- 56.1%: rise in average days from PR submission to merge after AI agent adoption (+1.99 days on baseline mean 3.56). Matches lead in number, but the paper says 'to its merge' (section 5.2/intro); a secondary article (beri.net) described it as 'to approval'. Compared with pre-adoption baseline, staggered DiD; AI assistants show no significant effect.
- 59.9%: rise in backlog wait before review starts (+1.67 days on baseline 2.78). Matches lead.
- 58.5%: rise in active review time (+2.33 days on baseline 3.98). Matches lead. Footnote: baseline means do not sum to the overall baseline.
- 35.7%: rise in PRs opened after agent adoption (12 months after adoption, per intro; extra effect of agents); lines of code +44.0%, commits +36.0%. Assistants: LOC +30.4%, commits +16.8%, PRs +20.9%.
- 13.7%: rise in Jira issues resolved from agents (borderline significant; can rule out increases above 30.7%); epics +18.0%; assistants -1.5% issues, +3.4% epics.
- Review intensity: share of code changes with at least one review comment +13.1%; comments per change +38.6%; share of PRs formally blocked +1.07 pp (38.5% of 2.77% baseline), marginally insignificant.
- Engineers spend 30 to 40% of time writing code (Prolific survey of 100 engineers plus external estimates); interviews with 21 workers.
- **Sample and method:** 
> Proprietary Jellyfish telemetry: GitHub, Jira, Google Calendar, plus firm- and worker-level usage of GitHub Copilot, Cursor and Claude Code. 445M events, 720,542 workers, 655 firms, Jan 2021 to Aug 2026. Observed behaviour, not self-report (except 21 interviews and a 100-person Prolific survey used for colour). Staggered difference-in-differences event study using firm adoption timing, with robustness to modern staggered estimators, plus IV for worker take-up. Effects measured roughly 12 to 16 months post adoption. Sample is mostly medium-to-large established firms.
- **Limitations:** 
> Stated: short-run (12 to 16 months) so employment may respond slowly; partial equilibrium only (business-stealing could hide negative general equilibrium employment effects); sample largely medium-to-large established firms, may not hold for start-ups; imperfect observation of individual take-up; unobserved confounders may remain; larger firms adopted earlier (controlled). Visible to a careful reader: not peer reviewed; proprietary data cannot be replicated; vendor partner has commercial interest; time-to-merge conflates queueing and quality and says nothing about whether longer review improved quality; Jira issue counts are a noisy output proxy (authors attempt size adjustment with LLM labels); review-productivity decline is inferred from a model, not observed; the long-run predictions (e.g. up to 341.4% output) are model simulations, not measurements. Note the 56.1% is a rise in average merge time versus a firm's own baseline, not a comparison of agent PRs against human PRs.

### Leadership relevance

- **What a leader can do:** 
> Source supports: measure the whole pipeline (issues shipped, not lines or PRs), and reallocate people and capacity toward review as coding speeds up; the paper's model shows firms already shift labour from coding to review (+43.4%). It also supports expecting that AI review tools alone do not fix it (humans stay in loop, AI writes 23.3% of comments), that reviewer expertise is scarce (single-approver and senior-approval rules after outages created extra queues), and that policies like senior sign-off for AI code lengthen queues. Evidence strength: observational but large and quasi-experimental for the existence of the bottleneck; weak for which specific management interventions work, since the paper tests none. Its implication about 'complementary organisational investments' is stated, not tested.

### Fields with unverified values (those values omitted above)

- citation
- headline_figures
- overlap_with_site_essays

## Farrag, The Productivity-Reliability Paradox

### Source

- **Citation:** 
> Sabry E. Farrag (School of Architecture, Computing and Engineering, University of East London), 'The Productivity-Reliability Paradox: Specification-Driven Governance for AI-Augmented Software Development', arXiv:2605.01160v1 [cs.SE], 1 May 2026, CC BY 4.0. https://arxiv.org/abs/2605.01160 (HTML: https://arxiv.org/html/2605.01160v1)
- **Source tier:** 
> Preprint (arXiv, single author). Page does not state peer-review status. It is a multivocal literature review, so its figures are second-hand.
- **Exact quotes:** 
- 'Specification discipline, not model capability, is the binding constraint on AI-assisted software dependability.' (Abstract)
- 'a 98% increase in merged pull requests coincides with a 91% increase in review time' (Abstract)
- 'teams with high AI adoption completed 21% more tasks and merged 98% more pull requests, but PR review time increased by 91%' (Sec 4.2.6, citing Faros AI 2025)
- 'the verification tax on senior developers (4.3 minutes per suggestion, DZone 2024)' (Sec 8.1)
- 'We derive the Specification Governance Model from Transaction Cost Economics' (Sec 6.1)
- 'This review was conducted by a single research team without independent inter-rater reliability assessment' (Sec 3.4)
- 'It involved only fourteen engineers across three projects within a single organisation' (Sec 7.4.5)

### Claims

- **Key claims:** 
> Conflicting evidence on AI coding tools (20-56% gains on well-scoped tasks; a 19% slowdown for experienced developers in the most rigorous RCT; telemetry showing more PRs but longer reviews and flat delivery) is a systematic 'Productivity-Reliability Paradox', driven by non-deterministic generators plus weak specification discipline. Contributions: the paradox with moderating variables and amplifying mechanisms, a six-methodology taxonomy, the Specification Governance Model (SGM) grounded in Transaction Cost Economics (Williamson 1985), and a governance decision guide. Governance level should scale with task risk (Sec 6.4). Specification discipline is the binding constraint. 'Verification tax' appears as a term, citing DZone 2024, not a coined measurement.
- **Headline figures:** 
- 98% more merged PRs and 91% longer PR review time, high-AI-adoption teams vs low-adoption, Faros AI 2025 telemetry (10,000+ developers, 1,255 teams); 21% more tasks completed. Secondary, cited not original. Matches the site's existing Faros lead, not the user's pickup lead.
- Verification tax: 4.3 minutes per suggestion for senior developers vs 1.2 minutes for juniors (DZone 2024, estimate). Secondary.
- 20-56% productivity gains on well-scoped tasks vs 19% slowdown for experienced developers (METR-style RCT) per abstract. Secondary.
- 67 sources: 312 candidates, 128 full-text, 29 peer-reviewed, 18 preprints, 12 industry reports, 8 grey literature; searched Feb to Apr 2026.
- 445 million work events: NOT FOUND in this paper. Does not match; the lead's source is something else or misattributed.
- Pickup latency of AI PRs 2.47x to 5.3x longer than human PRs: NOT FOUND. Only coincidences: '+2.47%' maintainability in Dohmke 2024 (Sec 2.3, unrelated) and '5.3' as a section number. Likely a conflation or a different paper.
- **Sample and method:** 
> Multivocal systematic literature review, single research team, Feb to Apr 2026, seven databases and sources, 67 included sources. No original telemetry. Also a 14-engineer, three-project, single-organisation pilot of GitHub Spec Kit, no control group.

### Leadership relevance

- **What a leader can do:** 
> Source supports: tie governance level to task risk (post-hoc review for low-risk greenfield, executable contracts or constitutions for cross-cutting or security work); invest in review capacity not only generation speed; keep human approval gates for production; train specification writing and keep unaided skill-building. Evidence strength is weak to moderate: literature synthesis plus a small uncontrolled pilot.
- **Overlap with site essays:** 
> Substantial overlap with The Verification Gap and Checking Isn't Catching (review cost, verification tax). Some overlap with What It Takes to Trust Agent Output (specification and gates) and Overseeing Agents Is the Tiring Part (senior verification burden). Its numbers are a re-citation of Faros, already in the research set, so it adds the specification-governance framing, not new data.

### Fields with unverified values (those values omitted above)

- access_status
- exact_quotes
- limitations
- sponsor_and_incentive

## LinearB 2026 Software Engineering Benchmarks: AI PR size and pickup time

### Source

- **Citation:** 
> LinearB, '2026 Software Engineering Benchmarks Report: The AI productivity edition', 48-page PDF, created 9 Dec 2025. https://assets.linearb.io/image/upload/v1765300694/resources/LinearB_2026_Software_Engineering_Benchmarks_Report.pdf (landing page https://linearb.io/resources/engineering-benchmarks-report)
- **Source tier:** Vendor research (LinearB sells software engineering intelligence / AI productivity tooling)
- **Access status:** 
> Fully read via local text extraction (pdftotext) of the downloaded PDF. Relevant pages (PR size p.17-18, pickup/review p.19-20, acceptance p.12-13 and p.21-23, conclusion p.38) read in full. Other-site secondary coverage seen only as search snippets and not relied on.
- **Sponsor and incentive:** 
> Produced by LinearB itself. It sells engineering metrics and AI-productivity tooling, and frames AI productivity as 'the next evolution of Software Engineering Intelligence'. Findings showing AI friction in review support its product category. The survey part also has the vendor's selection of respondents.
- **Exact quotes:** 
- "CREATED FROM A STUDY OF 8.1+ M PRS FROM 4,800 ENGINEERING TEAMS ACROSS 42 COUNTRIES." (cover, p.1)
- "At the p75 mark, Agentic AI PRs reach 293 lines of code compared to 157 lines for Unassisted PRs, which means reviewers suddenly have much more to process." (p.17)
- "AI-Assisted PRs are now the largest of all three groups, hitting 408 lines at P75" (p.18)
- "[INSIGHT 02] Agentic AI PRs have a PR Pickup Time 5.3x longer than Unassisted ones." (p.19)
- "At the P75 mark, Agentic AI PRs sit idle for 1,055 minutes before a reviewer even opens them, compared to just 201 minutes for Unassisted PRs." (p.20)
- "With manual PRs merging at 84.4% and AI PRs merging at just 32.7%, teams are clearly treating AI-generated code differently." (p.21)
- "Some of this gap likely stems from unclear ownership: the AI PRs don't typically have a natural human owner whose goal is to get them approved and merged." (p.21)
- "context (not just correctness) is the single biggest barrier to merging AI-generated PRs." (p.13, survey commentary)
- "Acceptance Rate is the percentage of PRs that get merged within X=30 days of being created (or moved out of draft)." (p.12)
- "Heavier Agentic AI adoption is not translating to greater value delivery." / "orgs with higher AI PR adoption rarely outperform those with lower adoption." (p.22-23)
- "Leaders described AI-driven reviews as faster yet more shallow" and "A larger amount of code slips into production without proper review (rubber stamping)." (p.20)
- "For aggregation, we used the P75 (75th percentile) calculation." (p.3)

### Claims

- **Key claims:** 
> AI involvement makes PRs bigger, slower to be picked up and far less likely to merge. Agentic AI PRs (Devin, Copilot Coding Agent, Codex style) wait about 5.3x longer for a first reviewer than unassisted PRs, then get reviewed relatively quickly or shallowly. Agentic AI PRs merge within 30 days far less often than manual PRs. Higher AI adoption does not lift acceptance, except for one outlier org using Devin. The report attributes this to missing context, unclear ownership (no human champion), low-priority work given to agents, and reviewer distrust of larger diffs. It does not show that context packets or small PRs raise first-pass acceptance as a measured result; it only reports leaders saying missing context is the main barrier and, separately, that only about 22% strongly agree their team works in small batches (readiness survey).
- **Headline figures:** 
- PR size, P75 lines (p.17): Agentic AI 293, AI-Assisted 408, Unassisted 157. Median lines: Agentic 89, AI-Assisted 96, Unassisted 26. LEAD CHECK: '157' is the P75 for unassisted, NOT an average. 'Over 400' matches AI-assisted P75 (408), not an average and not agentic (293). Median gap is larger (about 3.4x to 3.7x). Report headline 'AI-Assisted PRs are 2.6x larger than Unassisted' equals 408/157 at P75. The '2.5x larger' lead is close to but not the report's 2.6x (AI-assisted) and agentic is 1.9x at P75 (293/157) and 3.4x at median (89/26).
- Pickup time, P75, minutes (p.19-20): Agentic 1,055; AI-Assisted 496; Unassisted 201. Agentic/Unassisted = 5.25, reported as 5.3x. AI-Assisted/Unassisted = 2.5x (computed by me, not stated). LEAD CHECK: '5x longer' matches agentic only, P75, in minutes (about 17.6 h vs 3.4 h), not all AI PRs. The ~5x 'AI PRs 2.5x larger and waiting 5x longer' pairing mixes groups: the 2.5x pickup applies to AI-assisted, 5.3x to agentic.
- Review time after pickup, P75, minutes (p.20): Agentic 382; AI-Assisted 194; Unassisted 252. AI-assisted PRs are reviewed faster than unassisted.
- Acceptance benchmark tiers (p.12): Manual PRs elite >95%, good 92-95%, fair 87-91%, needs focus <87%. Agentic AI PRs elite >71%, good 61-71%, fair 42-60%, needs focus <42%. 'Most teams find it hard to exceed 60%' for AI PRs.
- Commit-level (p.18): assisted commits average 4.2 files vs 7.51 unassisted; 273 vs 498 lines per commit; 65 vs 66 lines per file. So AI commits are smaller but PRs larger.
- Context packets: no figure. Not found. Small PRs: no figure linking PR size to acceptance in the AI section. Lead not supported by the report.
- **Limitations:** 
> Stated: MTTR dropped because definitions vary too much; P75 used to limit outlier effect. Not stated but visible: vendor-authored; no sample counts per PR type; no confounder control (agentic PRs often target low-priority backlog work, which the report itself concedes); acceptance is merge within 30 days, so abandonment and low priority count as rejection, not poor quality; P75 not mean, so 'average' phrasing is wrong; survey is qualitative and self-selected; correlation only, no causal test that context or smaller PRs fix anything; pickup time measured in minutes at P75 and the 5.3x depends on the unassisted P75 of 201 minutes.

### Leadership relevance

- **What a leader can do:** 
> The report supports naming a human owner for every AI PR, routing agent work to someone accountable, and giving reviewers intent and context. It also supports watching pickup time and acceptance as separate AI metrics and expecting tool-by-tool differences (acceptance varies widely by tool; one Devin-heavy org near parity). Evidence strength is weak to moderate: observational vendor data plus leader opinion, with the ownership explanation hedged ('likely stems from'). Evidence that small PRs or context packets lift first-pass acceptance is NOT in this report.
- **Overlap with site essays:** 
> Strong overlap with Overseeing Agents Is the Tiring Part and What It Takes to Trust Agent Output (missing context, trust, reviewer hesitation, shallow review, rubber stamping). Some overlap with The Verification Gap and Checking Isn't Catching: fast, shallow reviews once started and 'slips into production without proper review' are survey quotes, not measured defect data.

### Fields with unverified values (those values omitted above)

- headline_figures: whether the 32.7% acceptance figure refers to agentic PRs only or all AI PRs
- sample_and_method: per-group PR counts, detection method, time window and survey n not found

## GitHub Blog on stacked pull requests and splitting large PRs

### Source

- **Citation:** 
> Julia Muiruri, 'Turn one giant AI-generated pull request to a reviewable stack', The GitHub Blog (Engineering), 4 August 2026. https://github.blog/engineering/turn-one-giant-ai-generated-pull-request-to-a-reviewable-stack/. Also: GitHub Docs 'About stacked PRs' https://docs.github.com/en/pull-requests/get-started/about-stacked-prs
- **Source tier:** Vendor practitioner/product post (GitHub engineering blog) plus vendor documentation. Not research.
- **Exact quotes:** 
- '1,721 lines changed!! This description isn't very helpful. I'll review this later.' (reviewer aside, 'A closer look' section)
- 'Instead of one huge, un-reviewable pull request, teach coding agents to decompose work into a clean, ordered stack' (subtitle)
- 'Stacked pull requests introduce a different and better structure of delivery.' (GitHub stacked pull requests section)
- 'Some branches in this stack have diverged and must be rebased' (Reviewing and updating the stack)
- 'resets the committer to whoever clicked the button, the resulting commits aren't signed' (Reviewing and updating the stack)
- Docs: 'Smaller pull requests are faster to review, less likely to be skimmed'
- Docs: 'Reviewing a single change out of context from the rest of the stack can reduce review quality.'
- Docs: 'Rebasing is the trickiest part of working with stacks, and GitHub handles it automatically.'

### Claims

- **Key claims:** 
> A single giant AI-generated PR just sits there, reviewers lose context and feedback quality drops; it becomes slower to merge. Stacking makes changes small enough to hold in a reviewer's head. The post demonstrates teaching coding agents to build a shopping-assistant feature as an ordered four-layer stack: L1 feat/catalog-data (data modeler agent: typed catalog, seed data, validation, data access), L2 feat/search-api (backend agent, /api/products/search), L3 feat/chat-grounding (frontend agent, chat calls API), L4 feat/grounded-ui (frontend agent, product citation cards). Rebasing after a fix to the bottom layer is the hard part: GitHub offers a one-click 'Rebase stack' button (server-side, resets committer, unsigned commits, may break signed-commit branch protection) and recommends local `gh stack rebase` then `gh stack push`; `gh stack sync` fetches, cascades rebases, pushes and syncs PR state. Docs add that merging the bottom PR auto-rebases the rest.
- **Sample and method:** 
> No sample, no method. The 1,721-line PR is a constructed demo, not a measured case. No review times, defect rates, merge statistics or customer data. Outcome: guidance only, no measured outcome exists in the post or the docs page.

### Leadership relevance

- **What a leader can do:** 
> Set a norm that agent output arrives as small ordered layers, each with its own description, and adopt tooling that removes rebase cost (gh-stack, which GitHub also ships as an agent skill). Evidence strength: weak. It is a plausible, vendor-supported practice with no measured effect on review quality or throughput, and no size threshold to adopt from this source.
- **Overlap with site essays:** 
> Light overlap with The Verification Gap and Overseeing Agents Is the Tiring Part (review load from agent-generated volume). Little overlap with Checking Isn't Catching or What It Takes to Trust Agent Output, since the post is about structuring diffs, not whether review actually catches defects. Useful as a counterpoint: a vendor remedy for size, with no evidence it improves catching.

### Fields with unverified values (those values omitted above)

- access_status
- headline_figures
- limitations
- sponsor_and_incentive

## Evidence on PR size and review quality

### Source

- **Citation:** 
> PRIMARY: SmartBear Software, 'Best Practices for Peer Code Review' white paper (Cisco study, wrapped up 2006; also chapter 5 of 'Best Kept Secrets of Peer Code Review', Jason Cohen), opened via a mirrored PDF at https://files-cdn.cnblogs.com/files/dangjian/BestPracticesForPeerCodeReview.pdf and the live SmartBear page https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/. SECONDARY 1: Sadowski, Soederberg, Church, Sipko, Bacchelli, 'Modern Code Review: A Case Study at Google', ICSE-SEIP 2018, https://storage.googleapis.com/gweb-research2023-media/pubtools/4476.pdf. SECONDARY 2: Bosu, Greiler, Bird, 'Characteristics of Useful Code Reviews: An Empirical Study at Microsoft', MSR 2015, https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/bosu2015useful.pdf. NOT OPENED: Baum, Schneider, Bacchelli 2019; di Biase et al. change decomposition experiment (PeerJ CS 2019); Rigby and Bird 2013.
- **Source tier:** 
> SmartBear/Cisco: vendor research (white paper, not peer reviewed). Google ICSE-SEIP 2018 and Microsoft MSR 2015: peer-reviewed conference papers from industry labs.
- **Sponsor and incentive:** 
> SmartBear sells Code Collaborator, the review tool used to collect the Cisco data and to run the study. The study was conducted by SmartBear with Cisco's MeetingPlace team, so the vendor has a commercial interest in code review findings. Google and Microsoft studies: authors are employees (plus academic co-authors) studying their own companies; no product being sold.
- **Exact quotes:** 
- SmartBear white paper, section 1: "Review fewer than 200-400 lines of code at a time. The Cisco code review study (see sidebar for details) showed that for optimal effectiveness, developers should review fewer than 200-400 lines of code (LOC) at a time. Beyond that, the ability to find defects diminishes. At this rate, with the review spread over no more than 60-90 minutes, you should get a 70-90% yield; in other words, if 10 defects existed, you'd find 7-9 of them."
- SmartBear white paper, section 1: "Defect density is the number of defects per 1000 lines of code. As the number of lines of code under review grows beyond 300, defect density drops off considerably."
- SmartBear white paper, Figure 1 caption: "Defect density dramatically decreases when the number of lines of inspection goes above 200, and is almost zero after 400."
- SmartBear white paper, section 2: "Aim for an inspection rate of less than 300-500 LOC/hour ... reviewing faster than 400-500 LOC/hour results in a severe drop-off in effectiveness. And at rates above 1000 LOC/hour, you can probably conclude that the reviewer isn't actually looking at the code at all."
- SmartBear white paper, sidebar: "encompassing 2500 code reviews, 50 programmers, and 3.2 million lines of code at Cisco Systems. For ten months, the study tracked the MeetingPlace product team, distributed across Bangalore, Budapest, and San Jose." Rules: all code reviewed before check-in to Perforce; Code Collaborator used; in-person meetings not allowed.
- SmartBear white paper, section 4 (about author preparation, not size): "We took a random sample of 300 reviews to investigate, and the evidence definitively showed that the reviewers were indeed carefully reviewing the code - there were just fewer bugs."
- SmartBear live page (fetch summary of headings): "Review fewer than 400 lines of code at a time"; "developers should review no more than 200 to 400 lines of code (LOC) at a time."; "SmartBear research shows a significant drop in defect density at rates faster than 500 LOC per hour." The page does not mention pull requests.
- Google ICSE-SEIP 2018, Review size: "At Google, over 35% of the changes under consideration modify only a single file and about 90% modify fewer than 10 files. Over 10% of changes modify only a single line of code, and the median number of lines modified is 24."
- Google 2018, review speed: "developers have to wait for initial feedback on their change a median time of under an hour for small changes and about 5 hours for very large changes. The overall (all code sizes) median latency for the entire review process is under 4 hours."
- Google 2018, discussion: "Previous studies have found that the number of useful comments decreases [11, 14] and the review latency increases [8, 24] as the size of the change increases." And: "A correlation between change size and review quality is acknowledged by Google and developers are strongly encouraged to make small, incremental changes."
- Google 2018: "the average number of comments per change grows with the number of lines changed, reaching a peak of 12.5 comments per change for changes of about 1250 lines. Changes larger than this often contain auto-generated code or large deletions, resulting in a lower average number of comments."
- Microsoft MSR 2015, Sec. on changeset size: "The trendline shows that as number of files in the change increases, the proportion of comments that are useful drops. This result supports Rigby's recommendation for smaller changesets." And: "Our results suggest that review effectiveness decreases with the number of files in the change set. Therefore, we recommend that developers submit smaller and incremental changes whenever possible."

### Claims

- **Key claims:** 
> (1) SmartBear/Cisco: in lightweight tool-based reviews at Cisco, defect density (defects found per 1000 LOC) fell as the lines under review per review rose, falling off beyond ~300 LOC and near zero after ~400; hence the advice to review 200-400 LOC at a time over 60-90 minutes. Separately, faster inspection rates (above 400-500 LOC/hour) coincided with fewer defects found. (2) Google 2018: most changes are small (median 24 lines, ~90% under 10 files); first-feedback latency is under an hour for small changes and about 5 hours for very large ones; the paper cites earlier work for the claim that useful comments fall and latency rises with size. The Google paper does not itself measure defect detection against size. (3) Microsoft 2015 (Bosu, Greiler, Bird): the proportion of useful review comments drops as the number of files in a change grows (Fig. 8, x-axis 0 to 40 files); authors recommend smaller, incremental changesets.
- **Headline figures:** 
- SmartBear: '200-400 lines of code at a time' (white paper); live page heading says 'fewer than 400 lines'. Unit: LOC per review. Comparison: defect density across reviews of different sizes. Date: study ended 2006. MATCHES the lead's '400 lines' only loosely: the paper says 200-400 and shows the drop starting near 200-300; it does not say 'sharply above 400', it says defect density is 'almost zero after 400'.
- SmartBear: defect density drops 'beyond 300' LOC and 'dramatically' above 200 (Figure 1 caption). Defect density = defects per 1000 LOC. Note this metric is partly an artefact: a larger review gives the reviewer less time per line, and the paper itself frames low density as lower reviewer effectiveness, though the white paper also says low density can mean fewer bugs existed (author preparation finding).
- SmartBear: inspection rate under 300-500 LOC/hour (section heading) and severe drop-off above 400-500 LOC/hour; 1000+ LOC/hour implies not looking. Unit: LOC reviewed per hour. This is a speed figure, not a change-size figure.
- Sample: 2500 reviews, 50 programmers, 3.2 million LOC, ten months, MeetingPlace team across Bangalore, Budapest and San Jose.
- '10 files' in the lead: NOT in SmartBear. The only 10-file figure found is Google's descriptive statistic that about 90% of Google changes modify fewer than 10 files. That is a size distribution, not a quality threshold. Microsoft's figure 8 plots usefulness density against 0-40 files with a declining trendline but no cliff at 10 files in the text I read [uncertain on exact curve values].
- Google: median change 24 lines; over 35% single-file; ~90% under 10 files; initial feedback median under 1 hour (small) vs about 5 hours (very large); overall median review latency under 4 hours; mean reviewing time 3.2 hours per week (median 2.6). Data: review logs of 9 million changes, 12 interviews, survey of 44 (from the Google abstract page).
- Microsoft: ~1.5 million review comments from five projects classified by a trained classifier; 844 comments manually classified for training; a figure of 34.50% non-useful comments is cited by later work.
- **Sample and method:** 
> SmartBear/Cisco: observational data automatically collected by Code Collaborator from 2500 reviews (50 developers, 3.2M LOC, 10 months, one product team). The white paper says defect data was checked on a random sample of 300 reviews (in the author-preparation discussion). Defects are those logged in the tool by reviewers, so 'defect density' is a count of logged findings per 1000 LOC, not seeded or independently verified bugs. The reviews were of code changes before check-in to Perforce, i.e. changelist reviews, not pull requests (Perforce, 2005-06, no mention of pull requests). Google: mixed methods (interviews, survey, logs of 9 million changes); size analysis is descriptive. Microsoft: interviews plus classifier-labelled comments; usefulness is defined by whether a comment triggers a nearby code change, so 'usefulness density' is not defect detection.

### Leadership relevance

- **What a leader can do:** 
> Supported: set an expectation of small, incremental changes; both Google (strongly encouraged, median 24 lines) and Microsoft (recommend smaller changesets) support this, and Google ties small size to faster first feedback (under 1 hour vs about 5 hours). Evidence strength: moderate for speed and comment usefulness, weak and vendor-sourced for defect detection thresholds. Supported, weakly: give reviewers enough time per line (SmartBear's inspection-rate result). Not supported: citing a hard '400 lines or 10 files' cliff. For an AI-agent context, none of these sources studied agent-generated changes, so they say nothing direct about review of agent output volume; they support the general point that review quality depends on how much is put in front of the reviewer and how long they have.

### Fields with unverified values (those values omitted above)

- access_status (SmartBear original 2006 chapter and mirror date unverified)
- headline_figures (70-90% yield basis; Microsoft Fig. 8 exact values)
- limitations (no independent replication search was exhaustive; di Biase result unverified)
- overlap_with_site_essays

## Martin Fowler / Rahul Garg: Encoding Team Standards

### Source

- **Citation:** 
> Rahul Garg (Principal Engineer, Thoughtworks), 'Encoding Team Standards', martinfowler.com, part of 'Patterns for Reducing Friction in AI-Assisted Development', 31 March 2026. https://martinfowler.com/articles/reduce-friction-ai/encoding-team-standards.html
- **Source tier:** Practitioner post (hosted on Martin Fowler's site; author is a Thoughtworks employee)
- **Exact quotes:** 
- 'AI coding assistants respond to whoever is prompting.' (thesis, The Consistency Problem)
- 'This is a systems problem, not a skills problem. And it requires a systems solution.'
- 'The governance is the workflow.' (Executable Governance)
- 'quietly different thresholds for what counted as a "critical" security concern' (two senior engineers on one project; Surfacing the Tacit Knowledge) [uncertain: fragment-level wording]
- 'The act of writing a shared instruction forced the distinction to be made explicit.'
- 'first review flagged a missing authorization check on a newly added endpoint' (junior developer) [uncertain: fragment]
- 'They made their inexperience less costly.'
- 'They evolve through pull requests.' (Standards as Shared Infrastructure)
- 'versioned artifacts'
- 'Teams of five may not need this. Teams of fifteen almost certainly do.' (Calibration)
- 'Overly prescriptive instructions become brittle'
- 'from judgment that lives in people's heads to judgment that executes as shared infrastructure' (Conclusion)

### Claims

- **Key claims:** 
> Team standards encoded as shared AI instructions (generation, refactoring, security, review) apply regardless of who prompts. Two moves: tacit to explicit (interviewing senior engineers), documentation to execution. Instructions have a role, context requirements, categorised standards (blockers vs advisories) and output format; they live as versioned artifacts in the repo, are owned collectively and change through pull requests. Security instructions encode the team's threat model with severity grading. Applied at generation, development, review and optionally CI. Risks named: documentation graveyard, extraction effort, maintenance burden, over-engineering, brittleness and false positives.
- **Headline figures:** 
> None. The article has no numbers, metrics or studies. Lead check: 'encoding senior judgment into versioned repository instructions' MATCHES (interviews with seniors, versioned artifacts in repo, PR changes). Lead 'resolved silent disagreements between senior engineers on security thresholds' is an EMBELLISHMENT: the article says two seniors had 'quietly different thresholds' and writing the shared instruction 'forced the distinction to be made explicit' (surfaced it). It does not say how or whether it was settled. It is also one disagreement on one project, not disagreements plural.
- **Sample and method:** 
> Anecdotal. Single project example and the author's own observations; no measurement, no sample, no comparison group.
- **Limitations:** 
> Stated: most useful for larger teams; extraction and maintenance cost; over-engineering and brittleness risk. Visible: no evidence of outcomes, author-reported anecdotes, author's employer has commercial interest, 'first review flagged' is one instance, no data on false positive rates or whether instructions reduce human review load. Also, the junior example shows AI catching what only seniors caught before, which is a detection claim, not evidence review time or bottlenecks fell.

### Leadership relevance

- **What a leader can do:** 
> Interview senior reviewers, write their thresholds into a small single-purpose review instruction kept in the repo and changed by PR, start with one instruction (generation or review). Evidence strength: weak (one anecdote, no data). Useful framing: writing the standard down exposes hidden disagreement between seniors, which is a leadership task.

### Fields with unverified values (those values omitted above)

- access_status
- exact_quotes
- overlap_with_site_essays
- sponsor_and_incentive

## GitHub Spec Kit and any measured outcomes

### Source

- **Citation:** 
> Farrag, S. E. 'The Productivity-Reliability Paradox: Specification-Driven Governance for AI-Augmented Software Development', arXiv:2605.01160v1 (cs.SE), submitted 1 May 2026, https://arxiv.org/abs/2605.01160. Sec 7.4 and Table 4. No GitHub primary source found for the numbers (checked github/spec-kit README, github.blog Spec Kit launch post).
- **Source tier:** 
> Preprint (not peer-reviewed). The pilot is first-party to this preprint, not GitHub. The lead's attribution to 'GitHub's Spec Kit pilot' is wrong: GitHub did not run or publish it.
- **Exact quotes:** 
- Sec 7.4: 'an illustrative pilot study of Spec Kit was conducted within three full-stack web development teams over a four-month period. The objective was not to produce a controlled experiment...'
- Sec 7.4.1: 'Fourteen engineers participated across three long-running full-stack web projects.' (8 mid-level, 6 senior, juniors excluded; unnamed 'mid-sized software organisation')
- Sec 7.4.3: 'While precise effect sizes cannot be claimed given the study's retrospective design and absence of a parallel control group, the approximate operational metrics observed during the two phases are reported in Table 4 to provide indicative magnitudes.'
- Table 4 note: 'These figures are drawn from Git, CI/CD, and issue-tracking systems and developer self-reports. They are reported as approximate ranges rather than point estimates because the study was not instrumented as a controlled experiment. Temporal confounds (e.g. improving AI model capabilities during the study period) cannot be excluded.'
- Sec 7.4.5: 'It involved only fourteen engineers across three projects within a single organisation, and thus cannot support claims of statistical generalisation.' and 'The absence of a parallel control group ... introduces the possibility that observed improvements are attributable to temporal confounds'
- spec-kit README: '/speckit-constitution Create principles focused on code quality, testing, and maintainability.' and 'Create a constitution once per project and repeat the remaining steps for each feature.'
- spec-driven.md: 'At the heart of SDD lies a constitution—a set of immutable principles that govern how specifications become code. The constitution (`memory/constitution.md`) acts as the architectural DNA of the system...'
- templates/commands/constitution.md description: 'Create or update the project constitution from interactive or provided principle inputs.'

### Claims

- **Key claims:** 
> Farrag reports a retrospective, within-team before/after pilot (2 months baseline, 2 months with Spec Kit) of 14 engineers in 3 projects in one unnamed organisation, concluding Spec Kit governance is operationally viable and effects are 'qualitative and indicative'. Spec Kit is a GitHub open-source toolkit; neither its README nor GitHub's launch post reports any measured outcomes (README only popularity stats; blog says 'less guesswork, fewer surprises, and higher-quality code' qualitatively). /speckit.constitution (now written /speckit-constitution in the README) is the first step of the flow: creates or updates the project's constitution (memory/constitution.md), a set of principles for code quality, testing and maintainability that later specify/plan/tasks steps are checked against; run once per project. The hypothetical dot form /speckit.constitution is used in the Farrag paper and older docs.
- **Headline figures:** 
- Median lead time per feature: 8-12 working days baseline to 6-9 working days with Spec Kit (Table 4). Matches the lead's numbers. Comparison is the same teams, earlier 2 months; no control group.
- Code churn (lines reverted <2 weeks): 12-18% of changed lines to 6-10%. Matches the lead.
- Also in Table 4: late-stage hotfixes per sprint 3-5 to 1-2 across projects; rollbacks per month 2-4 to 0-1; developer-reported confidence Likert 3.1 to 3.9 mean; spec/plan authoring overhead 45-90 min per medium feature.
- Lead's statement 'GitHub's pilot' does not match: source is Farrag's preprint, not GitHub. Lead's 'cut' wording overstates: paper calls them indicative approximate ranges. 'Short-horizon churn' wording is from the paper.
- **Sample and method:** 
> 14 engineers (8 mid-level 3-5 yrs, 6 senior), 3 projects (B2B SaaS React/Node; consumer Vue/Nuxt/NestJS; internal admin React/Go/Python), four months, retrospective before/after at team level. Data from Git, CI/CD, issue trackers plus self-reports, interviews and Likert questionnaires. Raw data, organisation and per-team numbers not published in the text read.

### Leadership relevance

- **What a leader can do:** 
> Weak evidence only. Source supports trying a short constitution plus spec/plan/tasks gate on medium and high-impact changes and measuring lead time, churn, hotfixes and authoring overhead against a concurrent control. It does not support claiming Spec Kit cuts review burden or lead time. Paper also says verification effort shifted earlier rather than disappeared. Do not cite the numbers as GitHub results; if used at all, attribute to a single-author preprint's uncontrolled pilot.
- **Overlap with site essays:** 
> Overlaps with The Verification Gap and Checking Isn't Catching (verification effort shifted earlier, 'verification tax' framing); and What It Takes to Trust Agent Output (constitution as a trust constraint). Little on Overseeing Agents Is the Tiring Part beyond reduced review cognitive overhead claim. Recommendation: drop as GitHub evidence; at most a hedged mention of the preprint.

### Fields with unverified values (those values omitted above)

- access_status
- limitations
- sponsor_and_incentive

## Yuval Yeret on constraints, WIP and AI coding

### Source

- **Citation:** 
> Yuval Yeret, 'AI Coding Made Code Review the Bottleneck. Now What?', yuvalyeret.com (original), reposted on Scrum.org blog, 15 June 2026. https://www.scrum.org/resources/blog/ai-coding-made-code-review-bottleneck-now-what . Companion: Yuval Yeret, 'Spec-Driven Development: Step Forward or Back for Product Development?', Scrum.org, 9 June 2026. https://www.scrum.org/resources/blog/spec-driven-development-step-forward-or-back-product-development
- **Source tier:** Practitioner post (blog, agile coach/consultant)
- **Sponsor and incentive:** 
> No sponsor stated. Author is an agile coach/consultant whose bio says he helps leaders 'move from agile theater to evidence-informed, outcome-oriented delivery' and links to more insights on his site, so there is a general consulting incentive. Scrum.org sells training.

### Claims

- **Key claims:** 
> AI coding raises pull request arrival rate faster than teams can review, producing queues, bigger batches, rubber-stamp approvals and concentrated cognitive load on a few reviewers. This is a constraint shift, not an AI failure. Apply Theory of Constraints five focusing steps: identify review as the constraint, exploit it (agent-prepared review packets with goals, approved specs, risk areas, test evidence, suggested review paths; agent pre-reviews; small batches), subordinate (limit WIP so that when the limit is reached teams stop starting and start finishing), elevate (add review capacity only when it raises validated business throughput), repeat. An 'SDD Kanban view' tracks each feature/spec from intent to validation using WIP, work item age, blocked markers and cumulative flow. Review plans/specs before code to catch wrong direction without recreating waterfall. Suggested metrics (per search summary, not confirmed in fetch): review queue size, time to first meaningful review, PR age, batch size, rework after review, reviewer concentration. The 9 June post argues spec-driven development is a higher-level language, backlog items carry intent while detailed specs are written during execution by builders, and Kanban visualises where review backs up.
- **Sample and method:** 
> No sample or method. Support is anecdotal: a Reddit question from a founder, conversations with scaled engineering organisations and CI/CD practitioners, and the author's observations of internal and public repositories. Uncited 'I'm seeing engineering organizations...' statements in the 9 June post.
- **Limitations:** 
> Opinion and practitioner reasoning applied from Theory of Constraints, not empirical evidence. No data, no named organisations, no before/after results. Anecdotes are unquantified and unverifiable. Author has consulting interest. Quotes come via a summarising fetch tool; original site not opened directly. Does not address whether review quality (versus throughput) improves under WIP limits.

### Leadership relevance

- **What a leader can do:** 
> Treat review as the system constraint: make review queue visible on a flow board, set a WIP limit on work waiting for or in review and enforce stop-starting, shrink batch size, require review packets and spec/plan review before code, and fund review capacity only when it raises delivered business throughput. Evidence strength: weak (reasoned from TOC and anecdote, no measurements), though TOC and Kanban WIP logic is long established in lean literature.
- **Overlap with site essays:** 
> Strong overlap with Overseeing Agents Is the Tiring Part (concentrated reviewer load) and The Verification Gap (review as the limiting step). Moderate with What It Takes to Trust Agent Output (review packets, test evidence). Little with Checking Isn't Catching, since Yeret addresses throughput and queues, not whether reviewers catch defects. Yeret supplies the leadership/flow-management framing those essays may lack, but only as opinion.

### Fields with unverified values (those values omitted above)

- access_status
- exact_quotes
- headline_figures

## Goldratt's Five Focusing Steps

### Source

- **Citation:** 
> (1) Theory of Constraints Institute, 'Five Focusing Steps', https://www.tocinstitute.org/five-focusing-steps.html (undated). (2) Wikipedia, 'Theory of constraints', https://en.wikipedia.org/wiki/Theory_of_constraints, citing Cox & Goldratt (1986) The Goal, North River Press; Goldratt & Fox (1986) The Race; Goldratt (1990) The Haystack Syndrome. (3) TOCI home page https://www.tocinstitute.org/theory-of-constraints.html.
- **Source tier:** 
> Practitioner/vendor organisation page (TOC Institute) plus encyclopedia (Wikipedia, secondary). Neither is The Goal itself.
- **Sponsor and incentive:** 
> TOC Institute sells TOC training and certification, so it has an incentive to promote TOC. Wikipedia has no sponsor.
- **Exact quotes:** 
> TOCI (five-focusing-steps page, headings): 'IDENTIFY the system's constraint'; 'EXPLOIT the constraint'; 'SUBORDINATE everything else to the constraint'; 'ELEVATE the constraint'; 'PREVENT INERTIA from becoming the constraint'. TOCI origin anecdote: a reporter asked Goldratt to summarise TOC in a sentence; he answered with one word, 'FOCUS!'. Wikipedia, Five Focusing Steps section: 'Identify the system's constraint(s).'; 'Decide how to exploit the system's constraint(s).'; 'Subordinate everything else to the above decision.'; 'Elevate the system's constraint(s).'; 'Warning! If in the previous steps a constraint has been broken, go back to step 1, but do not allow inertia to cause a system's constraint.' Wikipedia, DBR section: 'The rope is the work release mechanism for the plant.' Drum: 'the rate at which the physical constraint of the plant can work.' Orders released 'at one buffer time before they are due to be processed by the constraint.'

### Claims

- **Key claims:** 
> Five steps: identify the constraint, exploit it (get the most from it with what you have), subordinate everything else to that decision, elevate it (add capacity), then repeat and do not let inertia become the constraint. Step 5 is a loop, not a separate action: the TOCI wording is 'prevent inertia', Wikipedia's is 'go back to step 1'. Wikipedia attributes the theory to Goldratt's The Goal (1984 per text; citation is the 1986 Cox & Goldratt edition). Drum-buffer-rope: drum is the constraint's pace, buffer protects the constraint from starvation (measured in time), rope releases work to the shop floor so upstream does not outrun the constraint. Wikipedia cites The Race (1986) and The Haystack Syndrome (1990) for DBR.
- **Headline figures:** 
> None. No numbers in the sources beyond dates (The Goal 1984/1986; The Race 1986; Haystack Syndrome 1990). Not applicable to the user's lead.
- **Sample and method:** 
> Not empirical. Conceptual management framework, originally developed in manufacturing scheduling and presented in Goldratt's business novel The Goal.

### Leadership relevance

- **What a leader can do:** 
> Apply the sequence to review: name the review step as the constraint, get more from it without new capacity (prioritise, shrink changes, stop wasting reviewer time), then subordinate upstream work (limit how much AI-generated work is released, which is the rope's job) before adding reviewers or tooling (elevate). Evidence is conceptual and from manufacturing; strength for AI code review specifically is weak and untested here.
- **Overlap with site essays:** 
> Overlaps with Overseeing Agents Is the Tiring Part and The Verification Gap (verification as limited capacity); little overlap with Checking Isn't Catching or What It Takes to Trust Agent Output beyond the idea that throttling input matters.

### Fields with unverified values (those values omitted above)

- access_status
- limitations

## Independent evaluations of AI code review tools

### Source

- **Citation:** 
> Primary: Martian (Zverianskii, Zhang, Clyne, Garcia, Barez, Upadhyay), Code Review Bench, https://codereview.withmartian.com/ and https://github.com/withmartian/code-review-benchmark (MIT, launched Feb 2026 as v0). Academic: (1) Lin, Liang, Thongtanunam, Tantithamthavorn, 'Is Agentic Code Review Helpful? Mining Developers' Feedback to CodeRabbit Reviews in the Wild', arXiv:2607.03316, Jul 2026 (v2 23 Jul). (2) Cynthia, Widyasari, Roy, Zhang, Lo, 'Go Home Copilot, You're Drunk', arXiv:2607.21997, Jul 2026. (3) Chowdhury, Banik, Ferdous, Shamim, 'From Industry Claims to Empirical Reality: An Empirical Study of Code Review Agents in Pull Requests', MSR 2026, arXiv:2604.03196. (4) Cihan et al., 'Automated Code Review In Practice', ICSE 2025 SEIP, arXiv:2412.18531. (5) Kumar, Bararia, Raj, 'Bigger Isn't Always Better', arXiv:2606.15689 (Apr 2026).
- **Source tier:** 
> Martian benchmark: independent-of-vendors open-source benchmark run by a third party, not peer reviewed. Academic: MSR 2026 (peer reviewed), ICSE 2025 SEIP (peer reviewed), three arXiv preprints (2607.03316, 2607.21997, 2606.15689) with no venue named on the page.
- **Exact quotes:** 
- Martian README: "50 PRs from 5 major open-source projects, each with human-verified golden comments." (offline track; 173 golden comments)
- Martian README: "Static datasets risk training data leakage" (reason given for the online track)
- Martian README: "the top 5 tools are identical across all three judges, with most tools varying by at most 2 rank positions."
- Martian README: leaderboard requires "Roughly at least 600-1,000 reviewed public PRs"; private installs cannot be counted.
- aicodereviews.io (third-party, 5 Oct 2026 board): "The online benchmark continuously samples fresh PRs where review bots already left comments."
- arXiv 2607.03316 abstract (paraphrase by fetch tool, not verbatim): reviews receive 'mixed reception'; rejections mainly tied to invalid suggestions such as false positives, redundant, or out of scope.

### Claims

- **Key claims:** 
> Martian Code Review Bench: two tracks. Offline = 50 PRs (Sentry, Grafana, Cal.com, Discourse, Keycloak) with 173 human golden comments, LLM judge (Claude Opus 4.5, GPT-5.2, Sonnet 4.5). Online = fresh public PRs where bots commented; a three-step LLM pipeline extracts bot suggestions, extracts human fixes, matches them. Online precision = share of bot suggestions that matched a real post-review fix; recall = share of developer fixes the bot had flagged. It does NOT report a false positive rate. Academic: Lin et al. find agentic CodeRabbit reviews mostly rejected (56.3%). Chowdhury et al. find CRA-only PRs merge less than human-only PRs and most closed CRA-only PRs are low signal. Cynthia et al. find inline code suggestions the strongest predictor of comment resolution, and incorrect suggestions and intentional design decisions the main reasons comments go unresolved. Cihan et al. find 73.8% of automated comments resolved but PR closure time rose. Kumar et al. find real-PR F1 collapses versus synthetic bugs.
- **Sample and method:** 
> Martian: observational, LLM-judged matching of bot comments to later human fixes (online) and to golden comments (offline). Maintainers run the pipeline themselves. Tool must be attributable (bot account or marker). Lin et al.: mined GitHub review/feedback pairs, manual and LLM classification. Cynthia et al.: mined Python repos, open card sort of 470 unresolved discussions. Chowdhury et al.: AIDev dataset comparison of CRA-only vs human-only PRs. Cihan et al.: industrial case study with PR data and surveys (22-person broader survey). Kumar et al.: 150 samples, 100 synthetic mutations plus 50 real bug-fix PRs, five LLMs (not commercial review products).

### Leadership relevance

- **What a leader can do:** 
> Do not buy on a vendor's '#1 on Martian' claim; ask for the date, sample size and precision/recall split. Measure your own acceptance rate of AI comments per tool (the studies show 36-74% depending on tool and setting). Require concrete inline suggestions, which Cynthia et al. link to resolution. Keep humans in the loop: CRA-only PRs merged less often. Evidence strength: moderate for acceptance-rate measurement (several observational studies); weak for any causal effect on quality.
- **Overlap with site essays:** 
> Strong overlap with What It Takes to Trust Agent Output (need independent, dated measurement rather than vendor claims) and Checking Isn't Catching (accepted or resolved comments are not the same as caught defects; Martian precision is an adoption proxy). Some overlap with The Verification Gap (low-signal comments add checking load, closure time rose in Cihan et al.). Little direct overlap with Overseeing Agents Is the Tiring Part, beyond noise adding reviewer load.

### Fields with unverified values (those values omitted above)

- access_status
- headline_figures
- limitations
- sponsor_and_incentive

## Microsoft Engineering: AI-assisted code review at scale

### Source

- **Citation:** 
> Sneha Tuli (Principal Product Manager, Microsoft), 'Enhancing Code Quality at Scale with AI-Powered Code Reviews', Engineering@Microsoft, 14 July 2025. https://devblogs.microsoft.com/engineering-at-microsoft/enhancing-code-quality-at-scale-with-ai-powered-code-reviews/
- **Source tier:** Practitioner post (vendor corporate engineering blog, written by the product's PM)
- **Sponsor and incentive:** 
> Microsoft wrote it about its own internal tool built with the Developer Division Data & AI team. Microsoft sells GitHub Copilot code review, which the post says was informed by this work. Promotional tone, author works on the product.

### Claims

- **Key claims:** 
> An internal AI PR reviewer began as an experiment and now covers over 90% of Microsoft PRs, over 600K PRs a month. It posts PR summaries and review comments and suggested fixes, with a human in the loop. Claims faster PR completion, occasional bugs caught that humans might have missed, and positive reviewer feedback. Says lessons shaped GitHub's AI code review. Problem framing: PRs sometimes waited days or weeks to merge.
- **Headline figures:** 
> (1) 'over 90% of PRs across the company': adoption/coverage, matches lead. (2) 'more than 600K pull requests per month': the post says 600K, lead said 600,000, same figure; adoption, not outcome. (3) '10 – 20% median PR completion time improvements' for '5000 repositories onboarded': the only measured outcome, unit is median PR completion time, comparison group and baseline not stated, date unspecified (post dated July 2025), basis 'early experiments and data science studies'. Not in the user's lead as a number, lead only said 'accelerated review resolution'. No comment-acceptance rate, no adoption rate, no bug counts given.
- **Sample and method:** 
> 5000 repositories for the completion-time figure. Method not described: no baseline, control group, period, or definition of completion time. Observational internal data, apparently company-run. Qualitative feedback described as direct from engineering teams, no survey numbers.
- **Limitations:** 
> Stated: results described as from early experiments. Visible: no methodology, no control, self-selected onboarded repos (selection bias likely), 'median' hides distribution, no false-positive or comment-acceptance data, no quality outcome counts, no reviewer workload or fatigue measures, vendor author with commercial interest. Coverage and volume figures show adoption, not benefit.

### Leadership relevance

- **What a leader can do:** 
> Supports the idea that leaders can deploy AI as first-pass reviewer at scale with a human approver kept in the loop. Evidence for benefit is weak: one unexplained 10-20% median completion-time figure. Does not show review quality improved or reviewer load fell. Honest reading: measured benefit is thin, mostly adoption.
- **Overlap with site essays:** 
> Light overlap with Checking Isn't Catching and The Verification Gap (AI review volume without measured catch rate). Touches What It Takes to Trust Agent Output (human stays in control, applies changes explicitly). Does not address Overseeing Agents Is the Tiring Part: reviewer fatigue not discussed.

### Fields with unverified values (those values omitted above)

- exact_quotes

## Policy-as-code and deterministic gates for AI-generated code

### Source

- **Citation:** 
> (1) DPIaC-Eval: Zhang, Pan, Zhang, Xing, Sun. 'Deployability-Centric Infrastructure-as-Code Generation: Fail, Learn, Refine, and Succeed through LLM-Empowered DevOps Simulation'. arXiv:2506.05623 (v1 5 Jun 2025, v3 11 Jan 2026), accepted FSE 2026. https://arxiv.org/abs/2506.05623v3 . (2) OPA CI/CD docs: https://www.openpolicyagent.org/docs/cicd and Terraform docs https://www.openpolicyagent.org/docs/terraform . (3) SAST study: Fu, Liang, Tahir, Li, Shahin, Yu, Chen. 'Security Weaknesses of Copilot-Generated Code in GitHub Projects: An Empirical Study'. arXiv:2310.02059 v4 (6 Feb 2025), accepted ACM TOSEM 2025. https://arxiv.org/abs/2310.02059
- **Source tier:** 
> DPIaC-Eval: peer-reviewed (FSE 2026 accepted; read as arXiv preprint). OPA: official vendor/project documentation. Fu et al.: peer-reviewed (TOSEM 2025, read as arXiv preprint).

### Claims

- **Key claims:** 
> DPIaC-Eval: LLM IaC evaluation usually checks syntax, not whether templates deploy. Six LLMs deploy only about 20.8-30.2% first attempt. IaCGen (iterative feedback: format, syntax, live deployment) raises deployability. Generated templates score poorly on user intent (25.2%) and security compliance (8.4%). OPA docs: OPA/Conftest can enforce policy-as-code guardrails in CI/CD, failing the pipeline by exit code (--fail, --fail-defined), and unit-test Terraform plans (terraform show -json then opa exec). Fu et al.: static analysis of Copilot/CodeWhisperer/Codeium snippets in real GitHub projects flagged 733 snippets across 43 CWEs; feeding analyzer warnings to Copilot Chat fixed up to 55.5% of issues (19.3% with plain fix command).
- **Sample and method:** 
> DPIaC-Eval: 153 AWS CloudFormation tasks (Terraform only in a small syntax-only generalizability test on IaC-Eval, 79.7% passItr@1), live deployment validation, Checkov for security policies; observed, not self-reported. Fu et al.: real-world GitHub projects, Copilot-attributed snippets analysed with static analysis tools (tool names unconfirmed), then Copilot Chat repair experiment.
- **Limitations:** 
> DPIaC-Eval stated: model currency (older models), benchmark coverage, difficulty categorisation, not all IaC languages. Visible: CloudFormation only; no OPA/Rego evidence; the 8.4% is a filtered rate on Checkov's built-in policies; benchmark tasks, not production PRs; no measure of human review load. Fu et al.: snippet-level static analysis, false positives not resolved in what I read, no measure of reviewer time saved; the weakness rate shifted between versions (earlier preprint 35.8%). Neither source measures whether gates reduce review burden. No primary source found or opened that shows an OPA/Rego gate blocking unencrypted S3 at plan time; OPA docs pages opened contain no S3 or encryption example, so that lead is unsupported by these pages.

### Leadership relevance

- **What a leader can do:** 
> Supports: automate objective checks (deployability, policy compliance, static analysis) in CI so humans review intent and design. Evidence moderate for the idea that AI IaC needs policy gates (8.4% compliance, Checkov) and that feeding analyzer output back to the model improves fixes (55.5%, Fu et al.). Weak for the claim that gates cut human review load: not measured. Use OPA docs only for 'policy-as-code guardrails can run in CI', not for the S3 example.
- **Overlap with site essays:** 
> High with Checking Isn't Catching and The Verification Gap (deterministic checks versus judgement); moderate with What It Takes to Trust Agent Output (gates as a trust mechanism); low with Overseeing Agents Is the Tiring Part.

### Fields with unverified values (those values omitted above)

- access_status
- exact_quotes
- headline_figures
- sponsor_and_incentive

## Review ownership and reviewer capacity in practice

### Source

- **Sponsor and incentive:** 
> CloudBees sells CI/CD and 'governance' tooling and commissioned TrendCandy for the survey. Meta authors are Meta employees describing Meta's own system. Pragmatic Engineer is an independent newsletter (paid tier). Cal.com and Honeycomb are product companies writing about their own practice. Kimani is a freelance Linux engineer/consultant. Rahman et al. are academic (no sponsor seen in abstract). Semgrep, CodeRabbit and other vendor blogs surfaced in search were not used as evidence.
- **Exact quotes:** 
- Pragmatic Engineer 8 Sep 2026 (via fetch, sections 1-3): at Anthropic 'a human merges even low-risk changes', goal eventually 'another Claude instance merge low-risk changes'.
- Pragmatic Engineer 8 Sep 2026: Duckbill Group moved to risk-based review; changes to 'the public API/MCP, auth, design system' needed human review, enforced by a shell script adding a GitHub label.
- Pragmatic Engineer 8 Sep 2026: Weaviate CTO Etienne Dilocker: '90% is left to agents, with humans in the loop for critical scope decisions.'
- Meta RADAR (arXiv:2605.30208): ACE 'is intended to allow changes from automated sources to land without any human review.'
- Meta RADAR: 'Diffs that pass receive RADAR Approval, meaning no human review is required'; also 'a human reviewer can still reject the diff.'
- Meta RADAR limitation: 'because diffs are not randomly assigned to RADAR, unobserved confounding can influence observed changes.'
- Kimani, LeadDev: '57% identified reviewing, testing, and deploying code as the delivery bottleneck.' (Kimani attributes this to a CloudBees survey.)
- Kimani, LeadDev: 'Reassess if review capacity grows slower than implementation' (assumption-table trigger, review time as signal).
- Kimani, LeadDev: 'The leader responsible for a strategic bet should own its decision threshold.'
- CloudBees State of Code Abundance blog: 'writing code is no longer the primary bottleneck. Governing it is.'
- CloudBees press release: '70% now view test suite maintenance as a bigger burden than writing code itself.'
- Cal.com: 'If you have 5 PRs open, draft and non-draft combined, do not start something new.'
- Cal.com: a 'focused ~1,000-line PR that solves one clear problem is fine'; well past 1,000 lines is 'a strong signal to split.'
- Honeycomb (Hebert): 'we need to review the plan and prompt given to the AI that is writing the code.'

### Claims

- **Key claims:** 
- Pragmatic Engineer (8 Sep 2026): CTOs are responding to review overload with blast-radius or risk-based routing. Anthropic and OpenAI (per Orosz's conversations) keep a human merge even for low-risk changes. Duckbill Group (about 15 people) dropped human review for low-risk PRs and kept it for public API/MCP, auth and design system. Uber's Code Inbox flags high-impact changes. Review rotas not mentioned in the visible text.
- Pragmatic Engineer Pulse (Jul 2026): Cloudflare, Faire and HubSpot each built in-house AI review tools; the visible text says nothing about who owns review capacity. Uber Code Inbox has 'smart assignments' and 'Risk Profiles'.
- Meta RADAR: a layered funnel (eligibility checks, heuristics, ML Diff Risk Score, LLM review agent, deterministic validation) routes low-risk diffs to automated approval and everything else to human review. Motivation is code volume growth outpacing human review. Accountability stays with authors, with a delayed landing window in which a human can reject.
- Rahman et al. (survey of 239 practitioners from 31 countries): AI authorship alone did not make reviewers reject a PR. Willingness to review depended on accountability: bounded scope, project-grounded rationale, validation beyond CI, contributor responsiveness, and clear ownership after merge. Missing these is 'reviewability debt'. Respondents report routing and deferral when human oversight is hard to see.
- Kimani (LeadDev): strategy goes stale as AI shifts delivery constraints. Treats review capacity as a leading signal to monitor and says leaders should own decision thresholds. Does not discuss code review ownership in depth.
- CloudBees: writing code is no longer the primary bottleneck, governing it is. The specific 57%/35% comparison is cited by Kimani but I could not find it on CloudBees pages.
- Cal.com: individual authors cap open PRs at five and split PRs past about 1,000 lines. This is a norm in a blog post, not shown as tooling enforcement. No review rota or turnaround target described in the body, despite the URL slug.
- Honeycomb: reviews the plan and prompt, not just code; reviewer involvement scales with complexity; reports velocity held. No rota or size cap.
- **Headline figures:** 
- Rahman et al.: n=239 practitioners, 31 countries, self-reported plus scenario questions.
- Cal.com: cap of 5 open PRs per author; about 1,000 lines as the point to split. No turnaround numbers.
- **Sample and method:** 
> Meta: production telemetry from Meta's monorepo, observational before/after on threshold change (P25 to P50) and difference-in-differences for efficiency. Rahman et al.: online survey of 239 practitioners in 31 countries, scenario-based plus self-report. CloudBees: survey of 213 leaders by TrendCandy. Pragmatic Engineer: Orosz's interviews with CTOs and founders, anecdotal, small named companies. Cal.com, Honeycomb, Kimani: single-author practitioner accounts, no measurement beyond self-report.

### Leadership relevance

- **What a leader can do:** 
> Supported actions: (1) route by what a change touches, with named high-risk paths needing human review enforced by labels or checks (Duckbill, Uber Risk Profiles, Meta RADAR). Evidence: moderate at Meta (large observational data, one company), weak elsewhere (anecdote). (2) Track review capacity against implementation volume as an explicit leading signal and owner-assigned trigger (Kimani; opinion, weak evidence). (3) Require accountability evidence on incoming PRs: bounded scope, rationale, validation beyond CI, named post-merge owner (Rahman et al.; survey of stated willingness, moderate). (4) Cap open PRs per author and split large PRs (Cal.com; practitioner norm, no outcome data). Not supported by anything opened: that a rota fixes capacity, or that a leader-level owner of review capacity improves outcomes. That gap is itself worth stating in the essay.
- **Overlap with site essays:** 
> High with Checking Isn't Catching and What It Takes to Trust Agent Output (risk-based routing, human-in-loop limits, Meta finding that automated review caught issues humans would not). Moderate with The Verification Gap (CloudBees governance framing, Kimani). Low with Overseeing Agents Is the Tiring Part, except Rahman et al. 'scarce reviewer attention' and 'reviewability debt'.

### Fields with unverified values (those values omitted above)

- access_status
- citation
- exact_quotes
- headline_figures
- limitations
- source_tier
