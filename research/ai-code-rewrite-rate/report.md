# Developers rewrite a third of what the agent hands them — AI code rewrite/correction-rate data as a sharper lens on the verification gap

_15 sources, generated from `results`._

## Table of Contents

1. [To What Extent Does Agent-generated Code Require Maintenance? An Empirical Study (arXiv:2605.06464)](#to-what-extent-does-agent-generated-code-require-maintenance-an-empirical-study-arxiv260506464) — Confidence: primary_verified
2. [DORA / Google Cloud ROI of AI-assisted Software Development (2026.01)](#dora-google-cloud-roi-of-ai-assisted-software-development-202601) — Confidence: secondary_unverified
3. [Debt Behind the AI Boom: A Large-Scale Empirical Study of AI-Generated Code in the Wild (arXiv:2603.28592)](#debt-behind-the-ai-boom-a-large-scale-empirical-study-of-ai-generated-code-in-the-wild-arxiv260328592) — Confidence: conflicting_figures_found
4. [Faros AI Acceleration Whiplash report 2026](#faros-ai-acceleration-whiplash-report-2026) — Confidence: primary_verified
5. [GitClear Maintainability Gap 2026 report](#gitclear-maintainability-gap-2026-report) — Confidence: conflicting_figures_found
6. [GitHub Octoverse 2025](#github-octoverse-2025) — Confidence: primary_verified
7. [GitLab AI Accountability Survey 2026](#gitlab-ai-accountability-survey-2026)
8. [How AI Coding Agents Modify Code (arXiv:2601.17581)](#how-ai-coding-agents-modify-code-arxiv260117581)
9. [JetBrains Developer Ecosystem Survey 2026](#jetbrains-developer-ecosystem-survey-2026) — Confidence: conflicting_figures_found
10. [LinearB 2026 Software Engineering Benchmarks Report](#linearb-2026-software-engineering-benchmarks-report)
11. [METR 2025 RCT + 2026 disclosure](#metr-2025-rct-2026-disclosure) — Confidence: primary_verified
12. [Programming by Chat: A Large-Scale Behavioral Analysis of 11,579 Real-World AI-Assisted IDE Sessions (arXiv:2604.00436)](#programming-by-chat-a-large-scale-behavioral-analysis-of-11579-real-world-ai-assisted-ide-sessions-arxiv260400436) — Confidence: primary_verified
13. [Qodo State of AI Code Quality Report 2026](#qodo-state-of-ai-code-quality-report-2026) — Confidence: primary_verified
14. [Sonar State of Code Developer Survey 2026](#sonar-state-of-code-developer-survey-2026) — Confidence: primary_verified
15. [Stack Overflow Developer Survey 2025](#stack-overflow-developer-survey-2025)

---

## To What Extent Does Agent-generated Code Require Maintenance? An Empirical Study (arXiv:2605.06464)
<a id="to-what-extent-does-agent-generated-code-require-maintenance-an-empirical-study-arxiv260506464"></a>

*Category: telemetry / empirical study*

**Basic Info**

- **Publisher**: 
    > Shota Sawada, Tatsuya Shirai, Yutaro Kashiwa, Ken'ichi Yamaguchi, Hiroshi Iwata, Hajimu Iida; accepted at the 30th International Conference on Evaluation and Assessment in Software Engineering (EASE 2026)
- **Date Published**: Submitted 2026-05-07 (v1); revised 2026-05-09 (v2)
- **Sample Size Method**: 
    > 508 AI-generated files matched against 508 human-generated files (1,016 files total) across 100 popular GitHub repositories (>100 stars each), drawn from the AIDev dataset of AI-generated pull requests. 3,238 total maintenance commits tracked over a 6-month post-creation window (files created before 2025-07-31, data collected through 2026-01-31): 1,543 maintenance commits on AI-generated files, 1,695 on human-generated files. AI files are from four agents: Copilot, Claude Code, Cursor, Devin (Codex excluded for attribution reasons).

**Core Stat**

- **Stat Value**: 
    > 83.21% of maintenance commits on AI-generated files are human-authored (1,284 of 1,543), versus 92.98% on human-generated files (1,576 of 1,695); the remainder, 16.79% vs. 7.02%, are AI-agent-authored follow-up commits. AI-generated files show 5.03 percentage points fewer bug-fix ('fix') commits than human files (11.73% vs. 16.76%), and correspondingly more feature-addition ('feat') commits (21.78% vs. 15.10%, a +6.68 point gap).
- **Stat Definition**: 
    > Counts post-merge maintenance commits touching a tracked file within 6 months of its creation, classified by (a) who authored the follow-up commit (human developer vs. AI agent) and (b) what type of change it was (bug fix, feature addition, refactor, docs, etc., via commit-message/diff classification). This is a correction-volume measurement, not a pre-commit or review-stage one: it captures how much human effort goes into fixing/extending code after it has already been merged, and whether that follow-up work looks like bug-fixing or like feature work.
- **Measurement Locus**: 
    > Post-merge / maintenance. All commits studied are follow-up commits to files already merged into the repository; the paper does not address pre-commit rewriting or pre-merge review-queue behavior.

**Measurement Type**

- **Method**: 
    > Telemetry (behavioral mining of GitHub history). Files and their originating commits are attributed to specific AI agents via the AIDev dataset and PR metadata; every subsequent commit touching each tracked file within the 6-month window is then classified by author type (human vs. AI) and change type. No self-report survey component.

**Trust / Check Relationship**

- **Measures**: 
    > correction_volume (primary, via maintenance-commit counts and authorship split); problem_persistence (secondary/inferred): the paper's own framing is that the lower bug-fix rate on AI files suggests problems are being folded into later feature/refactor commits rather than being caught and logged as explicit bug fixes, i.e. partially masked rather than cleanly resolved.
- **Correction Performer**: 
    > Mostly human developer. 83.21% of maintenance-commit volume on AI-generated files is human-authored versus 16.79% AI-agent-authored (compare 92.98%/7.02% on human-generated files) -- so even when the original code was AI-written, the overwhelming majority of post-merge correction and extension work is still done by a human, and AI agents do proportionally more of their own follow-up maintenance on AI files than on human files, but remain a minority contributor either way.

**Seniority Breakdown**

- **Has Breakdown**: yes
- **Breakdown Summary**: 
    > Breaks down maintenance-commit share by author type (human vs. AI agent) separately for AI-generated vs. human-generated files, and by commit-message change-type category (fix, feat, refactor, docs) for both file groups; AI files consistently skew toward feature/extension work and away from explicit bug-fix commits relative to human files.

**Source Confidence**

- **Confidence**: primary_verified
- **Notes**: 
    > Figures in the task brief (508/508 files, 100 repos, 3,238 commits, 83.21%, 92.98%, 5.03% bug-fix gap) match the arXiv HTML text retrieved directly; no conflicting secondary restatements found. The abstract alone (without full text) omits these exact percentages, so a reader relying only on the abstract would not see the numeric headline.

**Overlap With Existing Essay**

- **New Angle**: 
    > Not previously cited in this site's content as far as checked in this session; if used, its distinctive angle versus other AI-code studies is the direct post-merge correction-volume and authorship split (who actually does the fixing) combined with the change-type composition finding, i.e. that AI-generated code isn't fixed less because it needs less work, but because its follow-up work shows up as feature/refactor commits rather than flagged bug fixes, suggesting defects get smoothed over rather than caught.

**Uncertain fields (excluded above):**

- self_report_vs_behaviour_gap
- already_cited

---

## DORA / Google Cloud ROI of AI-assisted Software Development (2026.01)
<a id="dora-google-cloud-roi-of-ai-assisted-software-development-202601"></a>

*Category: research framework*

**Basic Info**

- **Publisher**: DORA (DevOps Research and Assessment) team, Google Cloud

**Core Stat**

- **Stat Value**: 
    > Headline ROI worked example: a 500-person engineering organisation at $176,000 fully-loaded cost per developer, modelled against an $8.4M AI investment, projects roughly $11.6M in value, yielding a 39% ROI and an ~8-month payback period. J-curve default assumption: a 15% productivity dip lasting 3 months before gains accrue (illustrative cost of that dip in the worked example: 500 FTE x $176K x 15% x 3/12 = $3.3M). Separately cited (not DORA's own primary finding): 35-40% productivity gains on simple/greenfield tasks vs roughly 10% on complex legacy code; a 727% three-year average return figure from the separate Google Cloud 24-country survey; a 280x drop in inference cost between November 2022 and October 2024.
- **Stat Definition**: 
    > These are explicitly framed as a modelling/scenario tool, not a measured outcome: the report provides default inputs (dip size, dip duration, salary cost) for an ROI calculator and says results should be treated as 'high-uncertainty estimates meant to spark a conversation, rather than a rigid mathematical formula.' The underlying capability findings (amplification, instability vs throughput tradeoffs) come from DORA's survey/interview research, which is self-reported perception of delivery and organisational outcomes, not commit-level or defect-level telemetry.

**Measurement Type**

- **Method**: 
    > Primarily a self-report survey and interview synthesis (DORA's own survey base plus qualitative interviews), combined with a prescriptive ROI-calculator framework; it also cites third-party behavioral/telemetry research (the Denisov-Blanch Stanford work) as corroborating evidence rather than as its own measurement.
- **Self Report Vs Behaviour Gap**: 
    > The report explicitly separates its two headline numbers by evidentiary strength: it flags the 727% three-year return figure (from the 24-country Google Cloud survey) as self-report with potential self-reporting bias, distinct from its own 39% ROI calculator estimate, which it also hedges as a high-uncertainty illustrative model rather than a hard measurement. The report's central claim, that strong engineering foundations protect organisations from AI's downsides, is itself survey/interview-derived. This is notable because a separate, independently-run telemetry study (Faros AI's 2026 Acceleration Whiplash report, also in this research set) explicitly contrasts itself against this DORA finding: Faros' behavioral telemetry finds no such protective effect for high-performing organisations, while DORA's self-report finds one. Direction: self-report (DORA) skews positive/protective; telemetry (Faros) skews negative/universal-risk. This is a notable source-level self-report-vs-behaviour gap even though it spans two different publishers' reports rather than one report containing both methods.

**Source Confidence**

- **Confidence**: secondary_unverified
- **Notes**: 
    > This entry is built from secondary summaries (InfoQ, a Japanese-language explainer on Zenn, and several vendor blog posts referencing the report) rather than a directly fetched primary PDF from dora.dev, which could not be retrieved with full figure-level content in this pass. Core framing claims (amplifier language, J-curve, 15%/3-month default dip, 39% ROI/8-month payback worked example, 727% survey figure, 35-40% vs ~10% task-complexity split) appear consistently across multiple independent secondary sources, which raises confidence in them, but none were cross-checked against the report's own PDF pagination. The exact publication date is inconsistent across sources (22 April vs 11 May 2026) and the precise respondent count behind the ROI report specifically (as opposed to the 2025 DORA survey it builds on, or the separately-cited 3,466-respondent/24-country survey) was not confirmed. Before citing specific figures from this report in the essay, verify against the primary PDF at dora.dev.

**Overlap With Existing Essay**

- **Already Cited**: no
- **New Angle**: 
    > Not yet cited in the essay. The useful new angle versus the essay's existing telemetry sources (GitClear, Faros, GitHub Octoverse, the arXiv commit studies) is a maturity-curve framing: this report argues the 'rewrite tax' documented elsewhere is not a permanent property of AI-assisted development but a predictable early-adoption cost (the J-curve dip) that organisations with strong platform/workflow/trust foundations grow out of, while organisations without those foundations stay stuck in it or see it worsen as instability compounds. It also supplies an explicit, named counter-claim to Faros AI's 2026 telemetry finding (no protective effect from strong foundations), which the essay could use to stage a direct self-report-vs-telemetry contrast on the specific question of whether organisational maturity changes the rewrite/correction burden.

**Uncertain fields (excluded above):**

- date_published
- sample_size_method
- measurement_locus
- measures
- correction_performer
- has_breakdown
- breakdown_summary

---

## Debt Behind the AI Boom: A Large-Scale Empirical Study of AI-Generated Code in the Wild (arXiv:2603.28592)
<a id="debt-behind-the-ai-boom-a-large-scale-empirical-study-of-ai-generated-code-in-the-wild-arxiv260328592"></a>

*Category: telemetry / empirical study*

**Basic Info**

- **Publisher**: 
    > Yue Liu, Ratnadira Widyasari, Yanjie Zhao, Ivana Clairine Irsan, Junkai Chen, David Lo (academic preprint, cs.SE)
- **Date Published**: Submitted 2026-03-30; revised 2026-04-26 (v2)

**Core Stat**

- **Stat Definition**: 
    > Counts issues flagged by static analysis that are newly present in a repository's code immediately after an AI-authored commit versus immediately before it (an 'introduced' issue). Persistence/survival is whether that same issue is still detectable in the repository's HEAD (latest revision) at the time of the study, i.e. whether it was ever fixed by anyone after introduction, not whether it was caught pre-commit or in review. Code smells make up 89.1-89.3% of all issues found; correctness and security issues are a smaller but higher-severity share.
- **Measurement Locus**: 
    > Post-merge / maintenance persistence. The study diffs static-analysis results before vs. after each commit (so introduction is captured at commit time), then separately checks, as of the latest repository revision, whether each introduced issue still exists. There is no pre-merge/review-queue stage in this design; all commits studied were already merged to the repositories analyzed.

**Measurement Type**

- **Method**: 
    > Telemetry (behavioral + static-analysis). Large-scale mining of real GitHub repository history: commits are attributed to specific AI coding assistants, then a static-analysis pipeline is run on the pre- and post-commit snapshots to detect introduced and fixed issues. No self-report survey component.

**Trust / Check Relationship**

- **Measures**: 
    > problem_persistence (primary); also correction_volume in the sense of net introduced-vs-fixed counts per issue category (code smells, correctness, security).

**Seniority Breakdown**

- **Has Breakdown**: yes
- **Breakdown Summary**: 
    > Breaks down by AI assistant (Copilot, Claude, Cursor, Gemini, Devin) and by issue category (code smells 89.1-89.3%, correctness ~6.0%, security ~4.7%). Net introduced-vs-fixed differs by category: code smells show a net reduction (AI fixes more than it introduces), while security and correctness issues show a net increase (AI introduces more than it fixes, ~1.5x for security).

**Source Confidence**

- **Confidence**: conflicting_figures_found

**Overlap With Existing Essay**

- **New Angle**: 
    > Not previously cited in this site's content as far as checked in this session; if used, its new angle vs. other AI-code-quality sources is the direct before/after static-analysis measurement of what fraction of AI-introduced defects are ever corrected (24.2% never fixed) rather than relying on developer self-report or review-stage proxies, plus the net vulnerability math (AI introduces more security issues than it removes) across five named commercial assistants at GitHub scale.

**Uncertain fields (excluded above):**

- self_report_vs_behaviour_gap
- correction_performer
- already_cited
- sample_size_method
- stat_value
- notes

---

## Faros AI Acceleration Whiplash report 2026
<a id="faros-ai-acceleration-whiplash-report-2026"></a>

*Category: telemetry*

**Basic Info**

- **Publisher**: Faros AI
- **Sample Size Method**: 
    > Telemetry from 22,000 developers across 4,000+ teams, aggregated from task management systems, IDEs, static code analysis, CI/CD pipelines, version control systems, incident management systems, and HR system metadata, spanning approximately two years. Teams analysed are those that increased AI tool adoption above a 50% weekly-active-user threshold. For each team, Faros computed percent change in metric values between the two calendar quarters of lowest AI adoption and the two quarters of highest AI adoption within the observation window; metrics were standardised per company to remove inter-organisational variance, related to AI usage via Spearman rank correlation, and reported only where at least 6 companies had data and the correlation was statistically significant (p < 0.05).

**Core Stat**

- **Stat Value**: 
    > Volume/throughput up: epics completed per developer +66.2%, task throughput per developer +33.7% (tasks with an associated PR +210% per team), PR merge rate per developer +16.2%. Verification down: average PR size +51.3%, PRs merged without any review +31.3%, average files edited per PR +59.7%, median time in PR review +441.5% (average +199.6%), median time to first PR review +156.6%. Quality fallout: bugs per developer +54%, incidents per PR +242.7%, monthly incidents +57.9%, code churn (lines deleted:added ratio on merged code) +861%, deployments per week -11.7%, lead time (commit to production) +480.4%.
- **Stat Definition**: 
    > Percent change in each metric, per team, comparing that team's two lowest-AI-adoption quarters against its two highest-AI-adoption quarters within the ~2-year observation window. This is a within-team, cross-sectional correlational comparison, not a before/after causal claim and not a simple year-over-year trend. Code churn is lines deleted to lines added for merged code in a quarter (a proxy that conflates rework of recently-shipped AI code, legacy refactoring, and ordinary iteration; the report explicitly says it cannot disambiguate these). 'Reviewed' excludes PRs opened and/or reviewed by AI agents, which the report tracks separately (agentic review rose from 0% to 25% of PRs).
- **Measurement Locus**: 
    > Covers the full lifecycle: pre-commit/authorship (PR size, files touched, files edited per PR, repos touched per developer), pre-merge/review queue (review comments, time to first review, time in review, PRs merged without review), and post-merge/production (bugs per developer, incidents per PR, monthly incidents, code churn, reopened tickets, deployment frequency, lead time).

**Measurement Type**

- **Method**: 
    > telemetry (behavioral), aggregated cross-system: work-tracking tools (Jira/Azure DevOps), IDE/coding-assistant usage, static code analysis, CI/CD pipelines, version control, incident-management systems, and HR metadata; correlational statistical analysis (Spearman's rho), not a survey and not an RCT
- **Self Report Vs Behaviour Gap**: 
    > The report explicitly contrasts itself with DORA's 2025 State of AI-Assisted Software Development report, a survey-based source. DORA concludes strong engineering foundations protect teams from AI's downsides; Faros' telemetry finds no such protective effect, with high-performing organisations showing the same downstream quality deterioration as everyone else. Faros attributes the gap to self-report capturing how developers feel (more productive, because individual task completion is genuinely up) while missing downstream effects invisible to the person doing the work: review queues backing up, incidents accumulating, bugs reaching customers later. Direction: self-report (DORA) skews positive/protective; telemetry (Faros) skews negative/universal-risk.

**Trust / Check Relationship**

- **Measures**: 
    > checking_action (PRs merged without review, time to first review, time in review) and correction_volume (code churn, bugs per developer, incidents per PR/month, reopened tickets) and review_attention_latency (median/average time in PR review, time to first review); this report bundles all three rather than isolating one

**Seniority Breakdown**

- **Has Breakdown**: no
- **Breakdown Summary**: 
    > No quantified split of the core metrics by developer experience level is reported. The report makes a qualitative, non-numeric claim that senior engineers absorb a disproportionate 'tax': AI-generated code looks idiomatic and well-structured, so catching its structural/logical errors requires reconstructing intent rather than pattern-matching for obviously bad code, which the report frames as a skill senior reviewers have and juniors are still building. This is argued narratively, not measured as a breakdown.

**Source Confidence**

- **Confidence**: primary_verified
- **Notes**: 
    > Verified directly against the primary PDF (pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf). All headline figures in the essay's existing citation (PR size +51%, bugs/developer +54%, review time +441%, zero-review merges +31%, epics +66%, task throughput +34%, incidents/PR +243%) match the primary source. One precision note: the essay's '441%' review-time figure corresponds to the report's MEDIAN time-in-review stat (+441.5%); the report separately gives an AVERAGE time-in-review figure of +199.6%, a different number in the source, not interchangeable. Also note the report's own caveat that its 2026 dataset (22,000 devs/4,000+ teams) and its July 2025 predecessor report (10,000+ devs/1,255 teams) are independent cross-sections, not a longitudinal panel, so phrases like 'PR size up 51.3%, down from 154% in the prior report' describe directional consistency across two different samples, not a true year-over-year trend for the same population.

**Overlap With Existing Essay**

- **Already Cited**: yes
- **New Angle**: 
    > Already cited and quoted extensively in src/content/essays/leadership/verification-gap-ai-code.md (PR size +51%, review time +441%, zero-review merges +31%, bugs/developer +54%, epics +66%, task throughput +34%, incidents/PR +243%). This research task's framing (volume-up/verification-down pairing) suggests presenting PR-size +51.3% and zero-review-merges +31.3% directly paired against epics +66.2% and task throughput +33.7% as a single explicit contrast, rather than the essay's current scattered mentions. Additional data points from the primary source not yet used in the essay: code churn +861% (and the report's three competing explanations for it, which it says the metric itself cannot disambiguate: AI rework, legacy refactoring, or ordinary iteration); PR merge rate per developer +16.2%, explicitly down from +98% in the 2025 predecessor report, which Faros reads as review capacity throttling throughput rather than tool fatigue; deployments per week -11.7% and lead time (commit-to-production) +480.4%, showing the slowdown reaches all the way to release; cognitive-load/thrashing metrics (daily PR contexts per developer +67.4%, work restarts +13.8%, in-progress tasks stalled 7+ days +26%); AI code-acceptance rate rising from 20% to 60% and agentic PR review rising from 0% to 25% of PRs; and the report's direct, named rebuttal of DORA's 2025 survey finding that strong engineering foundations protect against AI's downsides, which Faros' telemetry contradicts.

**Uncertain fields (excluded above):**

- date_published
- correction_performer

---

## GitClear Maintainability Gap 2026 report
<a id="gitclear-maintainability-gap-2026-report"></a>

*Category: telemetry*

**Basic Info**

- **Publisher**: GitClear
- **Sample Size Method**: 
    > 623 million code changes analyzed across the 2023-2026 window via GitClear's own repository-analysis platform, tracking eight code-quality signals (four 'risk' behaviors: duplication, copy/paste, error-masking, churn; four 'reuse' behaviors: refactoring, cross-file connectivity, legacy updates, long-term maintenance)

**Core Stat**

- **Stat Value**: 
    > Copy-pasted code rose from 9.4% of changed lines (2022) to 15.7% (H1 2026); moved/refactored code fell from 21% (2022) to 3.8% (H1 2026); cross-file function calls down 35% since 2023; within-commit copy/paste up 41%; code block duplication up 81%; error-masking constructs up 47%; two-week code churn up 15%; legacy-code maintenance down 74% since 2023; long-term update activity fell from 1.7% (2023) to 0.46% (H1 2026)
- **Stat Definition**: 
    > Static-analysis classification of committed code lines/blocks by origin and type: whether a changed line was copy-pasted versus genuinely moved/refactored, whether a function call crosses file boundaries (a proxy for architectural reuse), whether code was touched again as churn within two weeks, and whether old ('legacy') code received maintenance. This measures what kind of code gets written and whether it gets cleaned up or revisited, not whether any specific defect was caught, rejected, or reverted.
- **Measurement Locus**: 
    > post-merge (maintenance/persistence) -- all signals are read from the committed history of repositories over time, not from pre-commit drafts or the review queue

**Measurement Type**

- **Method**: telemetry (static analysis of committed code)
- **Self Report Vs Behaviour Gap**: 
    > This is the behavioral/telemetry counterpart to self-report sources like Qodo's and Sonar's surveys, which show developers aware of a trust problem but still describing review as merely more effortful (a 'trust tax') rather than collapsing. GitClear's telemetry shows the underlying reuse/refactoring discipline itself eroding sharply (refactored code down from 21% to 3.8%, a roughly 5.5x drop) over the same period, suggesting the behavioral decline in actually revisiting and cleaning up code is considerably starker than developers' self-reported sense of a manageable 'tax' implies.

**Trust / Check Relationship**

- **Measures**: 
    > problem_persistence -- the falling refactor/reuse signals and rising copy-paste/duplication/error-masking signals describe code quality problems accumulating and not being cleaned up, rather than any single check or correction event
- **Correction Performer**: 
    > unspecified -- static analysis of commit history does not attribute remaining refactoring/reuse activity to human developers versus AI agents

**Seniority Breakdown**

- **Has Breakdown**: no
- **Breakdown Summary**: 
    > No experience-level or seniority split is reported; findings are aggregated across all analyzed repositories/commits.

**Source Confidence**

- **Confidence**: conflicting_figures_found
- **Notes**: 
    > Core stats in the task description (15.7% copy-paste, 3.8% refactored, -35% cross-file calls) were confirmed directly on GitClear's own report page (gitclear.com/the_ai_code_quality_maintainability_gap) and match secondary restatements exactly. However, two things could not be fully reconciled: (1) the widely circulated '861% churn increase' figure is NOT from this GitClear report at all -- it traces to Faros AI's Acceleration Whiplash report (code churn up 861% under high AI adoption), and appears to have been misattributed to GitClear by aggregator blogs; GitClear's own report states two-week churn up only 15%. (2) One source referenced a separate 'GitClear January 2026 report' citing '9.4x higher code churn' for regular AI users, a different and much larger figure than the 15% in the Maintainability Gap report, suggesting this is a distinct, earlier GitClear publication being conflated with the Maintainability Gap report in some secondary coverage. The essay's existing citation of a 'GitClear five-year analysis of 211 million changed lines' (refactored ~25% to <10%, review participation down ~30%) also does not numerically match this report's 623-million-change, 21%-to-3.8% figures, confirming these are two different GitClear analyses with overlapping but non-identical numbers.

**Overlap With Existing Essay**

- **Already Cited**: yes
- **New Angle**: 
    > verification-gap-ai-code.md currently cites a different GitClear analysis (211 million changed lines, five-year window: refactored code falling from ~a quarter to under a tenth of changes, review participation down ~30%, copy-pasted code overtaking moved code). This Maintainability Gap report is a larger, more recent dataset (623 million changes) with sharper, more precise figures (refactored code down to 3.8%, copy-paste up to 15.7%, cross-file function calls down 35%) and adds a new signal not in the existing citation: cross-file function calls as a direct architectural-reuse proxy. It also surfaces the important correction that the frequently cited '861% churn increase' belongs to Faros AI, not GitClear -- worth flagging if the new essay or its research notes repeat that figure under GitClear's name.

**Uncertain fields (excluded above):**

- date_published

---

## GitHub Octoverse 2025
<a id="github-octoverse-2025"></a>

*Category: telemetry*

**Basic Info**

- **Publisher**: GitHub (Microsoft)
- **Sample Size Method**: 
    > Platform-wide activity across public (and some private) GitHub repositories for the Sept 1, 2024 to Aug 31, 2025 period, compared against the prior Octoverse year. GitHub applies bot-filtering heuristics, minimum-activity thresholds, and backtested time-series forecasting (under 30% Mean Absolute Percentage Error) to its Innovation Graph and Linguist language-detection data, plus self-reported developer locations. Headline scale figures: nearly 1 billion commits/code pushes (986 million per the companion post, +25.1% YoY), 36 million new developers (+23% YoY), 518.7 million pull requests merged across public projects (+29% YoY), 43.2 million PRs merged per month on average (+23% YoY).

**Core Stat**

- **Stat Value**: 
    > Comments on commits: down 27% year-over-year ('sharp decline'). Comments on issues/PRs: essentially flat, +0.35% year-over-year. This sits against commits/pushes rising toward 1 billion in 2025 (+25.1% YoY) and PR merges up 23-29% YoY.
- **Stat Definition**: 
    > Count of comment events attached directly to commits, compared year-over-year (2024 Octoverse-year monthly average vs 2025 Octoverse-year monthly average), separately from comment events attached to issues or pull requests. This is a pure volume-of-commentary measure, not a rewrite, rejection, revert, or defect metric; it is a proxy for how much discussion/scrutiny accompanies code as it moves through the platform, not a direct correction or quality measurement.
- **Measurement Locus**: 
    > Post-commit, at the commit-level discussion layer specifically (distinct from PR/issue-level review comments, which the report tracks as a separate, flat metric). It sits just before/alongside the pre-merge review queue rather than inside a structured PR review process, and it measures attention/engagement volume rather than any checking action or outcome.

**Measurement Type**

- **Method**: telemetry (behavioral): GitHub's own platform activity logs, not a survey and not an RCT
- **Self Report Vs Behaviour Gap**: 
    > Not directly comparable within this same report, since Octoverse is pure platform telemetry with no paired self-report survey on the same question. It functions as independent corroboration of a behavioral finding (declining review/discussion engagement despite rising code volume) that elsewhere in this research set is also shown via Faros AI's telemetry; GitHub itself draws no comparison to survey data and explicitly declines to assert causality.

**Trust / Check Relationship**

- **Measures**: 
    > checking_action (commentary volume as a proxy for review/discussion engagement, though an indirect one: GitHub does not claim comment count equals review rigour)

**Seniority Breakdown**

- **Has Breakdown**: no
- **Breakdown Summary**: 
    > No split of the commit-comment decline by developer experience or seniority is given. The report separately tracks new-developer adoption (36 million new developers, +23% YoY; nearly 80% of new developers use GitHub Copilot within their first week) but does not cross-tabulate that against the comment-volume decline.

**Source Confidence**

- **Confidence**: primary_verified
- **Notes**: 
    > The -27% commit-comments figure and the +0.35% issues/PRs figure were confirmed directly from GitHub's primary Octoverse 2025 report page, quoted verbatim from its data table: 'Comments on issues/PRs: essentially flat (+0.35%)' / 'Comments on commits: down -27% (sharp decline).' GitHub's own text flags these as 'observational signals rather than causal claims' and states 'more work is needed to understand the full impact AI is having in software development' -- GitHub does not itself attribute the decline to AI, even though secondary commentary (Medium, It's FOSS, and other aggregator pieces) does draw that causal line. One terminology wrinkle worth flagging: GitHub's own posts use 'commits pushed' and 'code pushes' somewhat interchangeably (986 million code pushes vs. 'nearly 1 billion commits, +25.1% YoY') without a precise technical distinction between a commit and a push event, so the exact base rate against which the -27% comment decline is being compared should be read as directionally precise rather than exactly reconciled.

**Overlap With Existing Essay**

- **Already Cited**: yes
- **New Angle**: 
    > GitHub Octoverse 2025 is already cited in src/content/essays/leadership/verification-gap-ai-code.md, but only for adoption/volume framing (PRs merged per month up 23%, commits up 25%, 'none of it paired with a defect rate or a revert rate'). The commit-comments -27% YoY figure is not currently used and is a genuinely new angle: it is a second, independent telemetry source (distinct from Faros and GitClear, pulled from GitHub's own platform logs rather than a third-party analytics vendor) showing declining review/discussion attention even as commit volume approaches 1 billion. The flat +0.35% issues/PR-comment figure is a useful contrast to cite alongside it, since it shows the attention drop is concentrated specifically at the commit-comment layer rather than across all discussion channels, which sharpens rather than dilutes the claim. GitHub's own explicit 'observational signals rather than causal claims' caveat is also worth quoting directly, as a model of appropriately hedged telemetry reporting that the essay's own argument about not overclaiming from volume stats could point to approvingly.

**Uncertain fields (excluded above):**

- date_published
- correction_performer

---

## GitLab AI Accountability Survey 2026
<a id="gitlab-ai-accountability-survey-2026"></a>

*Category: self-report survey*

**Basic Info**

- **Publisher**: GitLab, Inc. (fieldwork conducted by The Harris Poll)
- **Date Published**: Released June 23, 2026
- **Sample Size Method**: 
    > 1,528 developers and technology/IT buyers surveyed across 6 countries, conducted by The Harris Poll on behalf of GitLab

**Core Stat**

- **Stat Value**: 
    > 79% agree individual developer productivity has improved with AI; 85% agree AI has shifted the bottleneck from writing code to reviewing and validating it; 43% say they cannot reliably distinguish AI-generated code from human-written code in their own codebase; 92% report governance challenges with AI-generated code; 87% are confident they could identify AI code's role in a production incident within 24 hours, but only 34% of organizations that actually had such an incident in the past year could do so.
- **Stat Definition**: 
    > Self-reported organizational/individual perception of (a) productivity improvement, (b) where the review bottleneck sits, and (c) ability to attribute code origin (AI vs human) within their own codebase. Not a direct measurement of rewrite, rejection, or revert rates; it is a belief/capability self-assessment, partly cross-checked against a behavioral claim (incident attribution) within the same survey.
- **Measurement Locus**: 
    > Spans the lifecycle: productivity belief is pre-commit/authoring-stage; the review-bottleneck stat is pre-merge (review queue); the code-attribution and incident-detection stats are post-merge/maintenance (determining origin of code already in the codebase, including code implicated in production incidents).

**Measurement Type**

- **Method**: self-report survey
- **Self Report Vs Behaviour Gap**: 
    > The survey contains an internal self-report-vs-reality gap: 87% self-report confidence they could identify AI code's role in a production incident within 24 hours, but among organizations that actually had an incident, only 34% could actually do so, a roughly 53-point gap between stated confidence and demonstrated capability.

**Trust / Check Relationship**

- **Measures**: belief, checking_action

**Source Confidence**

- **Notes**: 
    > Figures (79%, 85%, 43%, 87%/34%) were corroborated consistently across GitLab's own press release and multiple secondary outlets (InfoQ, SecurityBrief, Tech Edition, tech-insider.org). The primary GitLab report/press release was fetched directly for this entry, so confidence is higher than pure secondary aggregation, but the full methodology document (exact fielding dates, question wording) was not independently retrieved.

**Overlap With Existing Essay**

- **Already Cited**: yes
- **New Angle**: 
    > The internal gap between the 87% who believe they could trace an AI-code incident within 24 hours and the 34% who actually could when tested by a real incident is a stronger, more specific illustration of overconfidence than the headline 43% traceability stat alone, and pairs well with the 'review is now the actual constraint' framing (85%) to show the bottleneck has moved but confidence hasn't caught up to capability.

**Uncertain fields (excluded above):**

- correction_performer
- has_breakdown
- breakdown_summary
- confidence

---

## How AI Coding Agents Modify Code (arXiv:2601.17581)
<a id="how-ai-coding-agents-modify-code-arxiv260117581"></a>

*Category: telemetry / empirical study*

**Basic Info**

- **Publisher**: 
    > Daniel Ogenrwot and John Businge; submitted to arXiv, accepted at the 23rd IEEE/ACM International Conference on Mining Software Repositories (MSR 2026), Mining Challenge Track.
- **Date Published**: Submitted 2026-01-24; revised 2026-04-06 (per arXiv abstract page).
- **Sample Size Method**: 
    > Static analysis of the AIDev dataset (GitHub PRs), retrieved 2025-11-01: 24,014 merged agentic PRs (440,295 commits) across agent tools (GitHub Copilot, OpenAI Codex, Claude Code, Cursor, Devin) compared against 5,081 merged human PRs (23,242 commits), spanning 116,211 repositories.

**Core Stat**

- **Stat Value**: 
    > Agentic PRs differ substantially from human PRs in commit count (Cliff's delta = 0.5429); moderate effect-size differences in files touched and deleted lines; agentic PR descriptions show description-to-diff (lexical/semantic) similarity comparable to, and in some metrics slightly higher than, human PRs. Claude Code and OpenAI Codex show greater variability in additions per PR; Devin, Cursor, and especially Copilot produce more consistently small, localized changes.
- **Measurement Locus**: 
    > post-merge characterization of already-merged PRs (the dataset is restricted to merged PRs), describing the shape of the final merged change rather than the pre-commit drafting or pre-merge review process.

**Measurement Type**

- **Method**: telemetry (large-scale static analysis of GitHub PR/commit metadata), not self-report or RCT.
- **Self Report Vs Behaviour Gap**: 
    > Not applicable / not addressed — this is a purely behavioral/telemetry study with no self-report comparison surfaced in the abstract or fetched HTML content.

**Trust / Check Relationship**

- **Measures**: 
    > correction_volume-adjacent only in a structural sense (commit counts, files touched, lines deleted as proxies for how much a PR was iterated on before merge); does not directly measure belief, checking_action, problem_persistence, or review_attention_latency.

**Seniority Breakdown**

- **Has Breakdown**: yes
- **Breakdown Summary**: 
    > Breaks out by specific AI agent/tool: Claude Code and OpenAI Codex show more variable (larger, less predictable) additions per PR; Devin, Cursor, and Copilot produce more consistently small, localized changes. No breakdown by human contributor seniority/experience was found.

**Uncertain fields (excluded above):**

- stat_definition
- correction_performer
- confidence
- already_cited
- new_angle

---

## JetBrains Developer Ecosystem Survey 2026
<a id="jetbrains-developer-ecosystem-survey-2026"></a>

*Category: self-report survey*

**Basic Info**

- **Publisher**: JetBrains
- **Date Published**: 
    > Fielded May-July 2026; AI-generation-share findings published 2026-08 in "How Much Code Do Developers Really Let Agents Write?" (blog.jetbrains.com/research). 10th edition of JetBrains' annual Developer Ecosystem Survey.
- **Sample Size Method**: 
    > Over 15,000 professional developers surveyed worldwide, self-selected via JetBrains channels; data reweighted by region, employment status, programming language, and JetBrains familiarity; unrealistic responses filtered with sum-of-bounds validation.

**Measurement Type**

- **Method**: self-report survey
- **Self Report Vs Behaviour Gap**: 
    > Not a self-report-vs-telemetry comparison; this entry concerns source verification. Note the verified 47/38/27 authorship-share figure is itself self-reported, and the source post explicitly states bucketed self-report answers can sum above 100% and may not be fully accurate.

**Trust / Check Relationship**

- **Measures**: correction_volume

**Seniority Breakdown**

- **Has Breakdown**: no
- **Breakdown Summary**: 
    > No seniority breakdown exists for the unverified 34% figure since no primary source for it was found. The verified, different 47/38/27 authorship-share figure does break down by seniority: senior developers lead adoption, with roughly a quarter generating over 80% of their code via agents.

**Source Confidence**

- **Confidence**: conflicting_figures_found
- **Notes**: 
    > Central finding of this pass: the 34% average AI-code rewrite-rate figure (with its 5%/35%/24% distribution) is widely repeated by secondary aggregator content and by automated web-search summaries, but repeated direct fetches of JetBrains' own 2026 research blog posts (the May 2026 survey-announcement post, the April 2026 'Understanding AI's Impact on Developer Workflows' post, the August 2026 'AI Coding Agents: Adoption Trends' post, and especially the August 2026 'How Much Code Do Developers Really Let Agents Write?' post, which secondary sources most often point to as its origin) found NO mention of a rewrite rate, a 34% average, or a 5%/35%/24% distribution anywhere in that primary content. The only statistic those primary posts actually contain on this general topic is the code-generation-share split: ~47% fully agent-written, ~38% AI-assisted, ~27% manual. Separately, 'Understanding AI's Impact on Developer Workflows' cites a different, unrelated rewrite-adjacent figure attributed to a third-party study (not JetBrains' own survey data): 'of the code that is at first accepted, almost a fifth is later deleted, and about 7% is heavily rewritten.' No JetBrains PDF or dedicated report page containing the 34%/5%/35%/24% figures was located despite targeted search. CONCLUSION: this essay should NOT cite the 34% rewrite-rate figure as sourced from the JetBrains Developer Ecosystem Survey 2026. It is either a misattribution/fabrication that has propagated across secondary content and search summarization, or it comes from a JetBrains document not surfaced here, in which case it remains unusable until that primary document is produced and checked directly. The figure safely attributable to JetBrains 2026 is the 47% agent-written / 38% AI-assisted / 27% manual code-generation-share split, which is an authorship-share metric, not a rewrite/correction metric.

**Overlap With Existing Essay**

- **Already Cited**: no
- **New Angle**: 
    > Not applicable: insufficient verification to cite the 34% rewrite-rate figure at all. If the essay wants a JetBrains 2026 data point, use the verified 47/38/27 authorship-share split instead, clearly framed as measuring who wrote the code rather than how much of it got corrected, so it is not substituted for the unverifiable rewrite claim.

**Uncertain fields (excluded above):**

- stat_value
- stat_definition
- measurement_locus
- correction_performer

---

## LinearB 2026 Software Engineering Benchmarks Report
<a id="linearb-2026-software-engineering-benchmarks-report"></a>

*Category: telemetry*

**Basic Info**

- **Publisher**: LinearB
- **Sample Size Method**: 
    > Telemetry analysis of 8.1+ million pull requests from 4,800+ organizations / teams, 163,820 contributors, across 42 countries; supplemented with a companion '2026 AI in Engineering Leadership' survey for qualitative/leader commentary.

**Core Stat**

- **Stat Value**: 
    > AI-generated PRs wait 4.6x longer for first reviewer pickup than unassisted PRs (>16 hours vs. ~200 minutes, i.e. ~3.3 hours); widens to 5.3x at the 75th percentile for agentic PRs. Once picked up, AI PRs are reviewed roughly 2x faster than unassisted PRs. AI PRs merge within 30 days only 32.7% of the time vs. 84.4% for unassisted PRs. At the 75th percentile, AI-assisted PRs were 2.6x larger than unassisted PRs (408 vs. 157 lines of code).
- **Stat Definition**: 
    > Measures review-queue attention latency (time-to-first-reviewer-pickup) and review duration once started, plus a separate 30-day merge/acceptance rate. This is not measuring whether code was rewritten, rejected in review, or reverted post-merge; it is measuring how long AI-authored PRs sit unattended in the review queue and how often they ultimately land within a 30-day window.
- **Measurement Locus**: 
    > pre-merge (review queue): time-to-pickup and review duration are measured between PR open and reviewer action; the 30-day merge-rate stat is also pre/at-merge, tracking whether the PR lands at all within that window.

**Measurement Type**

- **Method**: 
    > telemetry (behavioral, pulled from engineering-analytics platform data across customer orgs), not self-report; cross-referenced with a parallel self-report leadership survey for narrative framing.

**Trust / Check Relationship**

- **Measures**: 
    > review_attention_latency (primary); also correction_volume-adjacent via PR size (2.6x larger at p75) and problem_persistence-adjacent via the 30-day merge rate (32.7% vs 84.4%, implying most AI PRs stall or are abandoned rather than merged quickly).

**Seniority Breakdown**

- **Has Breakdown**: yes

**Overlap With Existing Essay**

- **New Angle**: 
    > If not already cited, this adds the queue/attention-latency angle specifically: AI PRs are not reviewed less thoroughly once a human looks at them (they're actually reviewed faster once picked up), the gap is almost entirely in how long they sit waiting for a reviewer to start, plus the low 30-day merge completion rate as a distinct 'stalls out' phenomenon separate from 'reviewer didn't check.'

**Uncertain fields (excluded above):**

- date_published
- self_report_vs_behaviour_gap
- correction_performer
- breakdown_summary
- confidence
- already_cited

---

## METR 2025 RCT + 2026 disclosure
<a id="metr-2025-rct-2026-disclosure"></a>

*Category: RCT*

**Basic Info**

- **Publisher**: METR (Model Evaluation & Threat Research)
- **Date Published**: 
    > Original study published 10 July 2025 ('Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity', covering data collected February-June 2025). Follow-up disclosure published 24 February 2026 ('We are Changing our Developer Productivity Experiment Design', by Joel Becker, Nate Rush, Tom Cunningham, David Rein, and Khalid Mahamud), covering a second experiment that began in August 2025.
- **Sample Size Method**: 
    > Original (2025): randomized controlled trial with 16 experienced open-source developers completing 246 real tasks (bug fixes, features, refactors) on large, high-quality repositories (22k+ stars, 1M+ lines of code) they already worked on. Each task was pre-specified by the developer, then randomly assigned to an 'AI allowed' (primarily Cursor Pro with Claude 3.5/3.7 Sonnet) or 'AI disallowed' condition; developers self-recorded time spent. Average task duration ~2 hours; developers paid $150/hour. Follow-up (2026 disclosure): a second experiment starting August 2025 with 10 developers retained from the original study plus 47 newly recruited developers from a more diverse set of open-source projects, same pre-specify-then-randomize design, but pay reduced to $50/hour.

**Core Stat**

- **Stat Value**: 
    > Original 2025 result: AI use caused tasks to take 19% longer (i.e., developers were slower with AI), with a 95% confidence interval of +2% to +39%. Before the study, developers forecast AI would speed them up by 24%; after completing the study and experiencing the slowdown, they still believed AI had sped them up by about 20%, a roughly 39-percentage-point gap between belief and measured outcome. 2026 disclosure's re-estimate: for the subset of original developers who took part in the second experiment, estimated speedup was -18% (CI -38% to +9%); among newly-recruited developers in the second experiment, estimated speedup was -4% (CI -15% to +9%). The disclosure states these are likely a lower bound, not the true effect, because of the selection effects described below.
- **Stat Definition**: 
    > The core measurement is wall-clock time for a developer to complete a pre-specified, real task to the point they are satisfied it will pass code review (including style, testing, and documentation requirements), compared between AI-allowed and AI-disallowed conditions for otherwise-comparable tasks. This is a productivity/speed measure, not a rewrite, rejection, or revert rate: it says nothing directly about how much AI-authored code the developer kept, discarded, or rewrote within a task, only how long the whole task took under each condition. The 2026 disclosure's central finding is methodological rather than a new productivity number: it reports that developers increasingly declined to participate, or declined to submit specific tasks, because they did not want to work without AI, and that this selection is likely correlated with exactly the developers and tasks that would show the largest AI uplift, biasing the measured effect downward and making the newer estimate 'only very weak evidence' for AI's actual current productivity effect.
- **Measurement Locus**: 
    > Pre-commit/task-completion: the clock runs from task start to the point the developer considers the work review-ready, i.e., before code review and before merge. The study does not separately measure pre-merge (review-queue) or post-merge (maintenance/persistence) outcomes.

**Measurement Type**

- **Method**: 
    > RCT (randomized controlled trial): real tasks from developers' own repositories, randomly assigned to AI-allowed vs AI-disallowed conditions, with self-recorded completion time as the outcome measure. Pre- and post-task beliefs about speedup were collected via self-report survey alongside the RCT, so the study directly pairs a behavioral/RCT measure with a self-report measure on the same question.
- **Self Report Vs Behaviour Gap**: 
    > This is the paradigm case of the gap: the RCT (behavioral/measured) found developers 19% slower with AI, while the self-report (belief) found developers expected a 24% speedup beforehand and still believed they'd achieved a ~20% speedup afterward, even after living through the slower condition. Direction: self-report skews strongly positive/optimistic; measured behaviour was negative. The 2026 disclosure adds a second, distinct self-report-vs-behaviour wrinkle: it is not just that developers misjudge their own speed, but that the developers most confident AI helps them increasingly opt out of having that belief tested at all (by declining to participate, or declining to submit their most AI-favourable tasks, in a design that would force an AI-disallowed comparison). That is a selection-driven version of the same gap: the people and tasks most likely to validate the optimistic self-report are structurally underrepresented in the behavioral measurement.

**Trust / Check Relationship**

- **Measures**: 
    > belief (pre- and post-task self-reported expected/perceived speedup) and, in the 2025 study, an implicit problem_persistence-adjacent outcome in that task completion required reaching review-ready status; the study does not separately quantify checking_action, correction_volume, or review_attention_latency as distinct metrics.
- **Correction Performer**: 
    > Human developer. The study measures the time for the human developer themselves to reach a point of being satisfied the work (whether self-written or AI-assisted) will pass review; it does not track a separate AI-agent correction step.

**Seniority Breakdown**

- **Has Breakdown**: no

**Source Confidence**

- **Confidence**: primary_verified
- **Notes**: 
    > Both figures were checked against METR's own primary blog posts (metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ and metr.org/blog/2026-02-24-uplift-update/), not secondary restatements, and the numbers match: 19% slower with CI +2% to +39% in 2025; -18% (CI -38% to +9%) for retained developers and -4% (CI -15% to +9%) for new developers in the 2026 update. One precision note for the essay: the task description's framing ('developers most convinced AI helped avoided having that belief tested') is a fair paraphrase of METR's own stated mechanism, but METR's exact language is about developers declining to participate or declining to submit specific tasks because they 'do not wish to work without AI' or 'would not want to do 50% of their work without AI' and because 30-50% of surveyed developers said they withheld AI-favourable tasks from the study, not a direct quote using the word 'tested'. METR explicitly frames its own 2026 numbers as a likely lower bound, not a confirmed smaller effect, and states the true current speedup 'could be much higher' among the developers and tasks selected out of the experiment. The pay rate also dropped from $150/hr to $50/hr between the two experiments, which METR flags as a second, separate contributor to selection effects, not isolated from the AI-belief selection effect.

**Overlap With Existing Essay**

- **Already Cited**: yes
- **New Angle**: 
    > Confirmed already cited per the task description. The new angle this deep-research pass adds beyond the familiar '19% slower, believed 20% faster' headline is the full 2026 disclosure mechanism and its numbers: METR's second experiment (10 retained + 47 new developers, started August 2025) found developers increasingly refusing to participate or withholding tasks specifically because they didn't want to work without AI, with 30-50% of surveyed developers admitting to withholding AI-favourable tasks, which METR itself says biases its own re-estimate (-18% / -4%) downward and makes it 'only very weak evidence.' This gives the essay a sharper, source-acknowledged version of the self-report caution: not just that developers overestimate their own speed, but that the research methodology itself loses the ability to test the belief of exactly the people most convinced it's true, which is a structural, not just psychological, limitation on self-report data.

**Uncertain fields (excluded above):**

- breakdown_summary

---

## Programming by Chat: A Large-Scale Behavioral Analysis of 11,579 Real-World AI-Assisted IDE Sessions (arXiv:2604.00436)
<a id="programming-by-chat-a-large-scale-behavioral-analysis-of-11579-real-world-ai-assisted-ide-sessions-arxiv260400436"></a>

*Category: behavioral study*

**Basic Info**

- **Publisher**: 
    > Academic research group (Ningzhi Tang, Chaoran Chen, Zihan Fang, Gelei Xu, Maria Dhakal, Yiyu Shi, Collin McMillan, Yu Huang, Toby Jia-Jun Li); accepted to ASE '26 (41st IEEE/ACM International Conference on Automated Software Engineering)
- **Sample Size Method**: 
    > Behavioral telemetry analysis of 74,998 developer messages across 11,579 AI-assisted IDE chat sessions, drawn from 1,300 public GitHub repositories and 899 developers. Sessions are chat histories with Cursor or GitHub Copilot exported via the SpecStory tool and committed into public repos; CLI-based agents (primarily Claude Code) were excluded. Clustering analysis was restricted to sessions with at least four user messages.

**Core Stat**

- **Stat Value**: 
    > Developers issued an explicit 'Alignment Correction' (correcting AI output that diverged from intent) in 7.21% of all developer messages. 'Iterative Modification' was the most common coded intent at 24.84% of messages, versus 5.86% for new-feature implementation requests, roughly 4x more refinement than fresh generation. Alignment Correction co-occurred with Iterative Modification in 43.02% of cases. Validation was explicitly delegated to the AI in only 3.99% of messages (Code Review 2.74%, Runtime Inspection 1.26%). Symptom Description (reporting a problem without self-diagnosing it) occurred in 14.77% of messages.
- **Stat Definition**: 
    > These are message-level intent-classification rates within AI chat sessions, not commit-level or PR-level outcomes. 'Alignment Correction' means the developer's chat message explicitly corrects/redirects AI output that diverged from what was intended, at the moment of conversation, i.e. before anything is committed. The paper does not measure rejection-in-review or post-merge revert rates; it is a within-session, pre-commit measure of correction and validation behavior.
- **Measurement Locus**: 
    > Pre-commit, and specifically pre-commit-conversational: the unit of analysis is the developer-AI chat turn inside the IDE, upstream of any git commit, PR review, or merge. The paper does not track what happens to the code after the session ends (no review-queue or post-merge/maintenance data).

**Measurement Type**

- **Method**: 
    > telemetry (behavioral log analysis) of real-world, in-the-wild IDE chat transcripts, using a coding scheme/intent taxonomy applied to developer messages (qualitative coding plus quantitative frequency analysis). Not a survey and not an RCT.

**Trust / Check Relationship**

- **Measures**: 
    > checking_action and correction_volume primarily (rate of explicit alignment-correction messages, rate of validation-delegation messages), with problem_persistence implied qualitatively (the paper warns that when diagnosis, comprehension, and validation are all delegated to the AI, 'the assistant may become the only judge of both what the code does and whether it is correct, with no independent check on its own errors') rather than quantified. Belief/trust is not directly measured; review_attention_latency is not measured.
- **Correction Performer**: 
    > Human developer performs the correction in the 'Alignment Correction' category (the developer's chat message redirects the AI). Separately, the paper finds validation work (code review, runtime inspection) is frequently delegated TO the AI rather than performed by the human, and diagnosis is often skipped by the human (developers report symptoms rather than diagnosing), so the human-vs-AI correction/validation split is mixed and task-dependent rather than one consistent performer.

**Seniority Breakdown**

- **Has Breakdown**: no
- **Breakdown Summary**: 
    > No developer-seniority or experience breakdown is reported. Developers are identified only via git commit author identity, with no demographic or experience-level data captured; the paper itself notes this is an identified gap, not a finding.

**Source Confidence**

- **Confidence**: primary_verified
- **Notes**: 
    > Figures above (7.21% alignment correction, 24.84% iterative modification, 5.86% new implementation, 43.02% co-occurrence, 3.99% validation delegation with 2.74%/1.26% split, 14.77% symptom description) were read directly from the arXiv HTML full text of the paper itself, not a secondary restatement, so no discrepancy was found. No conflicting figures found in secondary sources (aimodels.fyi, tldr.takara.ai summaries) checked against the primary abstract/methodology description.

**Overlap With Existing Essay**

- **Already Cited**: no

**Uncertain fields (excluded above):**

- self_report_vs_behaviour_gap
- new_angle
- date_published

---

## Qodo State of AI Code Quality Report 2026
<a id="qodo-state-of-ai-code-quality-report-2026"></a>

*Category: self-report survey*

**Basic Info**

- **Publisher**: Qodo
- **Date Published**: Published September 23, 2026; fielded August 7-14, 2026 (Censuswide survey)
- **Sample Size Method**: 
    > 500 US software developers + 300 US engineering leaders, surveyed separately (each group blind to the other's answers) at organizations where AI already does meaningful work in the SDLC

**Core Stat**

- **Stat Value**: 
    > 89% of organizations report at least one AI-related production incident; only 3.7% of engineering leaders say existing process is sufficient as agents take on more work; 26% of both developers and leaders rank reviewing/validating AI-generated code as their top delivery bottleneck; 36% of developers describe a 'trust tax' (review takes the same time but demands more cognitive effort); 90% of leaders are confident reporting AI's impact to executives/the board, but only 45% have traceability evidence linking AI activity to the resulting code changes
- **Stat Definition**: 
    > A set of self-reported beliefs and experiences: whether the org has ever had an AI-related incident (historical recall, not a rate), whether current process is believed adequate, which stage of the pipeline is perceived as the bottleneck, whether review feels more effortful, and whether leaders can produce actual evidence for what they report upward versus merely feeling confident reporting it
- **Measurement Locus**: 
    > Mixed and mostly not lifecycle-specific: the incident rate is a post-merge/production outcome; the bottleneck ranking and trust-tax figure describe the pre-merge review queue; the leader confidence/traceability gap is an organizational-reporting measure sitting above any single commit's lifecycle

**Measurement Type**

- **Method**: self-report survey
- **Self Report Vs Behaviour Gap**: 
    > The report's own central finding is itself a belief-vs-evidence gap rather than a comparison to an external behavioral source: 90% of leaders feel confident reporting AI's impact upward, but only 45% can actually produce traceability evidence for that reporting. This is a self-report-against-itself gap (stated confidence vs. stated possession of evidence), not yet validated against independent telemetry.

**Trust / Check Relationship**

- **Measures**: 
    > belief (incident recall, process-sufficiency belief, confidence reporting upward) with one checking_action data point (26% ranking review/validation as the top bottleneck, which is a perception of where checking effort concentrates rather than a measured action)
- **Correction Performer**: 
    > unspecified -- the report does not attribute who performs corrections when an AI-related incident or issue is caught (human developer vs. AI agent)

**Seniority Breakdown**

- **Has Breakdown**: no
- **Breakdown Summary**: 
    > The published findings split the sample by role (developer vs. engineering leader), not by experience/seniority level within either group.

**Source Confidence**

- **Confidence**: primary_verified
- **Notes**: 
    > Figures (89% incident rate, 3.7% process sufficiency, 26% bottleneck ranking for both groups, 36% trust tax, 90% leader confidence vs. 45% traceability evidence) were confirmed directly against Qodo's own blog post (qodo.ai/blog/state-of-ai-code-quality-report-2026) and match the press-release restatements (vmblog, financialcontent, Futurum). No discrepancy found between primary and secondary sources on these specific numbers.

**Overlap With Existing Essay**

- **Already Cited**: yes
- **New Angle**: 
    > verification-gap-ai-code.md already cites the 89% incident rate and 3.7% process-sufficiency figure. This deep-research pass adds three stats not currently in the essay: the 26% review/validation bottleneck ranking (shared by both developers and leaders), the 36% 'trust tax' framing (same review time, more cognitive effort), and -- most useful for a belief-vs-action essay -- the 90% leader confidence vs. 45% traceability-evidence gap, which is a cleaner within-report illustration of leaders' stated confidence outrunning their actual evidence than anything currently cited.

---

## Sonar State of Code Developer Survey 2026
<a id="sonar-state-of-code-developer-survey-2026"></a>

*Category: self-report survey*

**Basic Info**

- **Publisher**: Sonar (SonarSource)
- **Date Published**: Released 2026-01-08; survey fielded around October 2025.
- **Sample Size Method**: 
    > Over 1,100 professional developers surveyed globally, drawn from Sonar's community and the wider software-engineering community. Self-report online survey.

**Core Stat**

- **Stat Value**: 
    > 96% of developers report they do not fully trust that AI-generated code is functionally correct; only 48% say they always check AI-assisted code before committing it. Also: AI accounts for 42% of all committed code today, expected to reach 65% by 2027; developers spend about 24% of their work week on toil (checking, fixing, validating); 38% say reviewing AI-generated code requires more effort than reviewing a human colleague's code; 72% of developers who have tried AI coding tools use them every day.
- **Stat Definition**: 
    > Two distinct, non-equivalent figures: (1) 96% is a STATED BELIEF ('I do not fully trust this code is functionally correct'), not an action. (2) 48% is a CHECKING ACTION ('I always verify AI-assisted code before committing it'), self-reported. Neither figure measures how much code actually gets rewritten/corrected, or what fraction of problems are ever caught; the 24%-of-week toil figure is the closest proxy for correction volume/effort but is not itself a rewrite rate.
- **Measurement Locus**: 
    > Pre-commit for the 48% verification figure (checking happens before the code is committed). The 96% trust figure and the 24% toil figure are not lifecycle-staged; they describe general attitude and overall time allocation respectively, not a single pipeline stage.

**Measurement Type**

- **Method**: self-report survey
- **Self Report Vs Behaviour Gap**: 
    > This source IS the self-report side of a self-report-vs-behaviour comparison: it documents a gap between a stated belief (96% don't fully trust AI code) and a self-reported checking action (only 48% always verify), i.e. even developers' own account of their checking behaviour falls well short of their own stated distrust. No independent telemetry/behavioral source was checked in this pass to see whether actual checking behaviour (e.g., via commit/review logs) runs even lower than this self-reported 48%, which self-report data of this kind typically overstates relative to telemetry.

**Trust / Check Relationship**

- **Measures**: belief

**Seniority Breakdown**

- **Has Breakdown**: yes
- **Breakdown Summary**: 
    > Junior developers report the highest productivity gains from AI (40%) but are also more likely than senior colleagues to say reviewing AI code takes more effort, i.e. junior developers get more raw output benefit from AI but pay a larger relative review-cost penalty.

**Source Confidence**

- **Confidence**: primary_verified
- **Notes**: 
    > The core 96%/48% figures and the 42% (rising to 65% by 2027) committed-code-share figure were confirmed directly from Sonar's own press release (sonarsource.com/company/press-releases/sonar-data-reveals-critical-verification-gap-in-ai-coding/) and corroborated on Sonar's own community forum post announcing the report, both of which quote the same numbers verbatim. No discrepancy found between the primary source and secondary press coverage (The Register, The New Stack) on these two headline figures.

**Overlap With Existing Essay**

- **Already Cited**: yes
- **New Angle**: 
    > verification-gap-ai-code.md already uses the 96%-don't-trust / 48%-always-verify pairing as its central belief-vs-action gap. This pass adds material not yet in that essay: (1) the 42%-of-committed-code-is-AI figure, projected to 65% by 2027, which sizes the scale of the gap against rising AI code share; (2) the 24%-of-week toil figure, a concrete cost measure for the checking that supposedly only 48% of people do; (3) the 38%-say-AI-review-takes-more-effort figure, which complicates the narrative that AI saves review time; (4) the junior-vs-senior breakdown (juniors get the biggest productivity gain at 40% but also feel the biggest review-effort penalty), useful as a seniority angle this new essay could use alongside the JetBrains data, once the JetBrains 34% figure (unverifiable, see companion JSON) is dropped or replaced with JetBrains' verified 47/38/27 authorship-share figure.

**Uncertain fields (excluded above):**

- correction_performer

---

## Stack Overflow Developer Survey 2025
<a id="stack-overflow-developer-survey-2025"></a>

*Category: self-report survey*

**Basic Info**

- **Publisher**: Stack Overflow
- **Sample Size Method**: 
    > 49,000+ developers surveyed globally, self-selected respondents to Stack Overflow's annual online survey

**Core Stat**

- **Stat Value**: 
    > Among developers with 10+ years of experience: 2.5% report 'highly trust' AI output accuracy (lowest of any experience group), 20.7% report 'highly distrust' (highest of any experience group). Overall, only 29% of all developers trust AI output accuracy (down from 40% prior year); 46% distrust it; 66% say AI answers are 'almost right, but not quite'; 45% lose significant time debugging AI-generated code.
- **Stat Definition**: 
    > Self-reported belief/trust in the accuracy of AI tool output, not a behavioral or code-level measurement. Captures stated trust level (on a trust/distrust scale) rather than rewrite, rejection, or revert rates.
- **Measurement Locus**: 
    > Pre-commit / upstream of any commit: this is a belief measured at the point of using or evaluating AI output, not a measurement of what happens to code after it enters a review queue or codebase.

**Measurement Type**

- **Method**: self-report survey

**Trust / Check Relationship**

- **Measures**: belief
- **Correction Performer**: Not applicable / not specified: this stat measures stated trust, not who performs any correction.

**Seniority Breakdown**

- **Has Breakdown**: yes
- **Breakdown Summary**: 
    > Trust in AI accuracy decreases monotonically with experience; developers with 10+ years show the lowest 'highly trust' rate (2.5%) and the highest 'highly distrust' rate (20.7%) of any seniority group in the survey.

**Source Confidence**

- **Notes**: 
    > Core finding corroborated across multiple secondary writeups (particula.tech, byteiota.com, shiftmag.dev, intelligenttools.co) citing the same 2.5% / 20.7% figures, but direct confirmation from Stack Overflow's own published survey results/report page (survey.stackoverflow.co/2025) was not fetched in this pass, so figures should be treated as secondary until checked against the primary report.

**Overlap With Existing Essay**

- **Already Cited**: yes
- **New Angle**: 
    > The specific magnitude of the seniority split (2.5% highly-trust vs 20.7% highly-distrust among 10+ year developers, the most distrustful cohort in the entire survey) is a sharper, more citable figure than a general 'trust is low' statement, and supports framing senior engineers as the most reliable AI-output reviewers rather than mere skeptics.

**Uncertain fields (excluded above):**

- date_published
- self_report_vs_behaviour_gap
- confidence

---
