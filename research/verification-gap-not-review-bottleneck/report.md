# The verification gap, not the review bottleneck (leadership)

The gap between developers' stated distrust of AI-generated code and their actual verification behaviour before committing it. Distinct from the review-bottleneck angle (PR size, wait time, capacity) already logged elsewhere: this is a culture and incentive question about why stated caution doesn't translate into checking behaviour.

## Table of Contents

1. [Two paired radiology automation-bias studies: (1) Dratsch et al., 'Automation Bias in Mammography: The Impact of Artificial Intelligence BI-RADS Suggestions on Reader Performance'; (2) Kim et al., 'Automation Bias in AI-Assisted Detection of Cerebral Aneurysms on Time-of-Flight MR Angiography'. A related 2026 eye-tracking follow-up, Chen et al., 'Automation Bias in Action: Eye Tracking of Humans Reading Screening Mammograms with and without AI Prompts,' is also relevant and cited as corroboration.](#two-paired-radiology-automation-bias-studies-1-dratsch-et-al-automation-bias-in-mammography-the-impact-of-artificial-intelligence-bi-rads-suggestions-on-reader-performance-2-kim-et-al-automation-bias-in-ai-assisted-detection-of-cerebral-aneurysms-on-time-of-flight-mr-angiography-a-related-2026-eye-tracking-follow-up-chen-et-al-automation-bias-in-action-eye-tracking-of-humans-reading-screening-mammograms-with-and-without-ai-prompts-is-also-relevant-and-cited-as-corroboration) - Publication date: Mammography (Dratsch et al.): 2 May 2023. Cerebral aneurysm/TOF-MRA (Kim et al.): February 2025. Eye-tracking follow-up (Chen et al.): 2026. | Methodology type: Instrumented behavioral experiment, not self-report. Both core studies had radiologists actually read and score real cases under controlled conditions with planted correct/incorrect AI suggestions, and measured their actual diagnostic accuracy, ratings and reading time, not their stated attitudes toward AI. The 2026 follow-up adds eye-tracking (gaze/fixation data) as a further behavioral measure.
2. [State of AI-assisted Software Development 2025 (DORA Report)](#state-of-ai-assisted-software-development-2025-dora-report) - Publication date: 2025 (annual DORA report; released alongside Google Cloud coverage in the second half of 2025) | Methodology type: Primarily self-report survey/attitude data: nearly 5,000 technology professionals surveyed on AI adoption, trust, and perceived productivity/quality effects, supplemented by roughly 100 hours of qualitative interviews. Not instrumented telemetry; throughput/stability/performance figures are respondents' reported outcomes and cluster-analysis-derived team archetypes, not measured system metrics.
3. [AI Engineering Report 2026: The Acceleration Whiplash](#ai-engineering-report-2026-the-acceleration-whiplash) - Publication date: Q2 2026 (approx. April-June 2026; a Q3 2026 follow-up titled 'The Speed Trap' also exists) | Methodology type: Instrumented telemetry, not self-report. Faros compared each organization's own metrics between its lowest and highest periods of AI adoption, using engineering-lifecycle data (authoring, review, testing, production) pulled directly from tooling on the Faros platform, rather than surveyed attitudes or estimates.
4. [AI Copilot Code Quality: 2025 Data Suggests 4x Growth in Code Clones (AI Copilot Code Quality research report)](#ai-copilot-code-quality-2025-data-suggests-4x-growth-in-code-clones-ai-copilot-code-quality-research-report) - Publication date: 2025-02 (published February 2025, analyzing data from January 2020 through December 2024) | Methodology type: Action/behavioral telemetry: direct static analysis of git commit history (lines added, deleted, moved, copy-pasted, churned) across real repositories, not a self-report survey. This is the study's main value for the essay: it measures what actually happened in the codebase rather than what developers say they do.
5. [Octoverse 2025: A new developer joins GitHub every second as AI leads TypeScript to #1](#octoverse-2025-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1) - Publication date: 2025-11 (Octoverse 2025 annual report, published around GitHub Universe, November 2025) | Methodology type: Action/telemetry: platform-wide usage and repository data drawn from GitHub's own activity logs (sign-ups, commits, pull requests, language usage, Copilot adoption timing), not a self-report attitude survey. This makes it a behavioral counterpart to the self-reported trust/verification surveys in the other two sources, but it does not itself measure verification behavior.
6. [GitLab AI Accountability Report 2026 (AI Accountability/Governance Survey)](#gitlab-ai-accountability-report-2026-ai-accountabilitygovernance-survey) - Publication date: June 23, 2026 | Methodology type: Self-report survey/attitude data: an online survey of developers and technology buyers reporting their own and their organizations' perceptions of AI code quality, productivity, and governance capability. Not instrumented telemetry; figures like '78% report faster code output' and '73% note quality has improved' are perceptions, not measured delivery-pipeline data, which matters directly for the essay's attitude-vs-action framing.
7. [The State of Developer Ecosystem 2025: Coding in the Age of AI, New Productivity Metrics, and Changing Realities](#the-state-of-developer-ecosystem-2025-coding-in-the-age-of-ai-new-productivity-metrics-and-changing-realities) - Publication date: 2025-10 (survey fieldwork April-June 2025) | Methodology type: Self-report attitude survey: an online questionnaire of developers reporting their own AI usage, sentiment, and concerns. It is not instrumented/behavioral telemetry, so any 'we review our AI code carefully' response is a stated claim, not an observed action -- exactly the attitude-vs-action gap this research set is tracking.
8. [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity (original RCT), plus METR's February 2026 methodology update/caveat blog post](#measuring-the-impact-of-early-2025-ai-on-experienced-open-source-developer-productivity-original-rct-plus-metrs-february-2026-methodology-updatecaveat-blog-post) - Publication date: Original study: mid-2025 (fieldwork February-June 2025). Methodology caveat/update: February 24, 2026 ('We are Changing our Developer Productivity Experiment Design'). | Methodology type: Instrumented/behavioral: a randomized controlled trial, not a self-report survey. 16 experienced open-source developers completed 246 real tasks on repositories they personally maintained, with each task randomly assigned to an AI-allowed or AI-forbidden condition, and completion time measured directly. The perception figure (20% believed-faster) is self-report layered on top of the measured (19% actually slower) result, which is exactly the perceived-vs-measured contrast the essay needs. The February 2026 update is itself a self-critical methodological analysis of recruitment and task-selection behavior in the follow-up experiment, not new telemetry.
9. [Qodo 2026 State of AI Code Quality Report](#qodo-2026-state-of-ai-code-quality-report) - Publication date: September 23, 2026 | Methodology type: Self-report survey (Censuswide fielding), attitude data. Developers and engineering leaders were run as two separate questionnaires that did not see each other's responses; no telemetry or instrumented behavioral data is used.
10. [Sonar State of Code Developer Survey 2026](#sonar-state-of-code-developer-survey-2026) - Publication date: January 8, 2026 | Methodology type: Self-report survey, attitude data. The published materials describe 'over 1,100 professional developers' surveyed globally but do not state whether any telemetry or commit-log data backs the self-reported figures; recruitment platform, geography split and response rate are not disclosed in the public blog/press materials.
11. [Stack Overflow Developer Survey 2025 (AI trust section)](#stack-overflow-developer-survey-2025-ai-trust-section) - Publication date: Fielded 2025, results published starting July 29, 2025 (main report); follow-on 'leaders' analysis and blog coverage ran through October 2025 and into early 2026. | Methodology type: Self-report survey, attitude data. Over 49,000 responses from 177 countries on the full survey; the AI-accuracy-trust question specifically drew 33,244 responses (a 67.8% response rate against those who saw that question). No telemetry or behavioral/commit data backs the trust figures, only stated attitudes.
12. ['Trust, but verify' idiom history (Wikipedia's 'Trust, but verify' article and sources it draws on; supplementary check of the one unrelated software usage, Vekris, Cosman & Jhala, 'Trust, but Verify: Two-Phase Typing for Dynamic Languages,' ECOOP 2015)](#trust-but-verify-idiom-history-wikipedias-trust-but-verify-article-and-sources-it-draws-on-supplementary-check-of-the-one-unrelated-software-usage-vekris-cosman-jhala-trust-but-verify-two-phase-typing-for-dynamic-languages-ecoop-2015) - Publication date: Idiom's documented English-language rise: December 1987 (INF Treaty signing). Type-checking paper: 2015 (ECOOP conference; arXiv preprint 1504.08039).

## Detailed Findings

## Two paired radiology automation-bias studies: (1) Dratsch et al., 'Automation Bias in Mammography: The Impact of Artificial Intelligence BI-RADS Suggestions on Reader Performance'; (2) Kim et al., 'Automation Bias in AI-Assisted Detection of Cerebral Aneurysms on Time-of-Flight MR Angiography'. A related 2026 eye-tracking follow-up, Chen et al., 'Automation Bias in Action: Eye Tracking of Humans Reading Screening Mammograms with and without AI Prompts,' is also relevant and cited as corroboration.

### Basic info

- **Source name:** > Two paired radiology automation-bias studies: (1) Dratsch et al., 'Automation Bias in Mammography: The Impact of Artificial Intelligence BI-RADS Suggestions on Reader Performance'; (2) Kim et al., 'Automation Bias in AI-Assisted Detection of Cerebral Aneurysms on Time-of-Flight MR Angiography'. A related 2026 eye-tracking follow-up, Chen et al., 'Automation Bias in Action: Eye Tracking of Humans Reading Screening Mammograms with and without AI Prompts,' is also relevant and cited as corroboration.
- **Publisher:** > Radiology (RSNA journal), for the mammography and eye-tracking studies; La Radiologia Medica (Springer Nature), for the cerebral aneurysm/TOF-MRA study
- **Publication date:** > Mammography (Dratsch et al.): 2 May 2023. Cerebral aneurysm/TOF-MRA (Kim et al.): February 2025. Eye-tracking follow-up (Chen et al.): 2026.
- **Methodology type:** > Instrumented behavioral experiment, not self-report. Both core studies had radiologists actually read and score real cases under controlled conditions with planted correct/incorrect AI suggestions, and measured their actual diagnostic accuracy, ratings and reading time, not their stated attitudes toward AI. The 2026 follow-up adds eye-tracking (gaze/fixation data) as a further behavioral measure.
- **Sample size:** > Mammography study: 27 radiologists (11 inexperienced, 11 moderately experienced, 5 very experienced with 15+ years average), reading 50 mammograms (10 training cases with correct AI suggestions, then 40 test cases of which 12 carried an incorrect AI-suggested BI-RADS category), cases drawn from mammograms taken January 2017-December 2019. Cerebral aneurysm study: 9 radiologists (3 inexperienced with 6-12 months neuroradiology experience, 3 moderately experienced/board-certified, 3 very experienced/board-certified neuroradiologists) reading 20 TOF-MRA exams twice each (with and without AI assistance, 4-week washout), 10 of 20 cases seeded with at least one false-positive AI finding; 360 total readings. Eye-tracking follow-up: 10 breast radiologists, 60 cases (26 true-positive, 14 false-negative, 14 false-positive, 6 true-negative AI suggestions), two rounds six weeks apart.

### Trust and verification metrics

- **Pct always verify:** > Not measured as a stated-verification percentage. The closest behavioral equivalent is the finding that reading time dropped with AI assistance across all experience bands in the TOF-MRA study (inexperienced 164.1s vs 228.2s unaided, p<0.001; moderately experienced 126.2s vs 156.5s, p<0.009; very experienced 117.9s vs 153.5s, p<0.001), i.e. readers spent measurably less time checking once AI support was present, regardless of whether the support was correct.
- **Stated behavioral gap:** > The parallel to the software stat is structural rather than a single computed delta: readers are not asked about trust, but their accuracy and scrutiny visibly track the AI's suggestion rather than the case itself. In mammography, inexperienced readers' accuracy on correctly-flagged cases (~80%) collapsed to under 20% when the AI suggestion was wrong; very experienced readers held up better (82% correct-suggestion accuracy vs. 45.5% on incorrect-suggestion cases) but still dropped by roughly half. In the aneurysm study, a false-positive AI flag pushed inexperienced readers' 'unremarkable' calls down from 63.3% to 23.3% (p=0.002), while very experienced readers showed no significant shift (p=0.59) on that specific measure, even though their reading time still fell.
- **Verification behavior detail:** > 'Checking' in these studies means the actual diagnostic read: assigning a BI-RADS category or rating each arterial segment on a Likert scale, and how long that visual/cognitive process takes. The 2026 eye-tracking study shows the mechanism directly: fixation and visual-search patterns changed only when the AI's suggestion was wrong, meaning readers' scanning behavior was being steered by the tool rather than by the image; with false-negative AI suggestions, unassisted sensitivity was 32 points higher than AI-assisted sensitivity (71% vs 39%), and with false-positive suggestions AI-assisted specificity was paradoxically higher, showing the effect cuts both ways depending on the direction of the AI's error. Across all three studies, reading time consistently fell with AI assistance regardless of whether the AI was right, which is the direct parallel to reduced code review time/scrutiny once an AI suggestion is present.

### Who carries the gap

- **Seniority breakdown:** > Both core studies explicitly stratify by experience level and find the same shape: less experienced readers are more susceptible to being misled by an incorrect AI suggestion (inexperienced mammography readers' accuracy fell far further than very experienced readers'; inexperienced aneurysm readers' false-positive over-reading was large and significant while very experienced readers' was not). But automation bias is not confined to juniors: 'inexperienced, moderately experienced, and very experienced radiologists reading mammograms are prone to automation bias when being supported by an AI-based system,' and reading-time reduction with AI assistance was significant across all three experience bands in the aneurysm study, including the most experienced readers.

### Comparative and framing material

- **Human factors parallel:** > This item is itself the human-factors parallel referenced for the software analogy. Its core structural finding: expressed caution/awareness of AI limitations coexists with measurably reduced scrutiny once the AI tool is actually present in the workflow, whether the domain is code review or diagnostic image review. The mechanism proposed across these papers is automation bias: humans default to treating a plausible-looking automated suggestion as evidence, which both anchors their judgment toward the AI's answer and shortens the time they spend independently verifying it, and this happens 'regardless of accuracy' of the underlying AI.
- **Leadership implication:** > The papers' recommendations are aimed at clinical practice design, but translate directly to review-process design: (1) don't rely on the reviewer's stated diligence, since experienced practitioners are also susceptible; (2) surface the AI's confidence/uncertainty rather than a bare suggestion, since the mammography authors recommend displaying AI confidence levels and educating users on the system's reasoning; (3) preserve reviewer accountability for the final call explicitly, rather than letting the AI's suggestion become the default; (4) build in a deliberate, systematic review step (e.g. 'review all arterial segments') that doesn't shortcut just because AI flagged something already; (5) address the liability/incentive layer directly, since the aneurysm study argues practitioners need explicit organizational and legal cover to overrule AI without penalty.
- **Methodological caveat:** > Both core studies are controlled lab experiments with artificially elevated error rates (e.g. a 50% false-positive rate in the aneurysm study, and a seeded 12/40 wrong-suggestion rate in mammography) that do not reflect real-world AI error prevalence, so effect sizes likely overstate what happens in typical clinical use; the authors of the aneurysm study explicitly flag this. The aneurysm study's reference standard also relied on expert consensus reads rather than a harder ground truth (catheter angiography) in all but one case. Both studies are small (9 and 27 readers respectively), which limits statistical power, especially for the very-experienced subgroups. The 2026 eye-tracking follow-up is a different, independent study design (gaze tracking) that corroborates the direction of the effect but should be treated as a separate replication, not the same dataset.

### Uncertain fields

- pct_distrust_ai_code
- culture_incentive_angle
- measured_proxy_angle

---

## State of AI-assisted Software Development 2025 (DORA Report)

### Basic info

- **Source name:** State of AI-assisted Software Development 2025 (DORA Report)
- **Publisher:** DORA (DevOps Research and Assessment) team, Google Cloud
- **Publication date:** 2025 (annual DORA report; released alongside Google Cloud coverage in the second half of 2025)
- **Methodology type:** > Primarily self-report survey/attitude data: nearly 5,000 technology professionals surveyed on AI adoption, trust, and perceived productivity/quality effects, supplemented by roughly 100 hours of qualitative interviews. Not instrumented telemetry; throughput/stability/performance figures are respondents' reported outcomes and cluster-analysis-derived team archetypes, not measured system metrics.
- **Sample size:** > Nearly 5,000 technology professionals worldwide (developers, product managers, and other software delivery roles), plus over 100 hours of supplementary qualitative interview data. Exact recruitment method not published in the summary materials reviewed.

### Trust and verification metrics

- **Verification behavior detail:** > The report does not detail individual verification acts (e.g. line-by-line read vs. running tests). Instead it identifies team-level 'safety net' practices, chiefly strong automated testing, mature version control, fast feedback loops, and loosely coupled architecture, as the structural equivalent of verification: teams with these practices convert AI adoption into throughput and quality gains, while teams without them see AI expose and amplify existing weaknesses, particularly on delivery stability.

### Why the gap persists

- **Culture incentive angle:** > Central thesis is explicitly non-individual: 'AI doesn't fix a team; it amplifies what's already there. Strong teams use AI to become even better and more efficient. Struggling teams will find that AI only highlights and intensifies their existing problems.' The implicit incentive critique is organizational rather than personal: teams that already under-invest in stability practices get punished harder once AI accelerates code volume, because nothing catches the resulting defects.

### Comparative and framing material

- **Human factors parallel:** > Not present in the report; DORA frames the finding purely in software-delivery-system terms (archetypes, capabilities, platform engineering) rather than drawing an analogy to non-software automation-bias research.
- **Leadership implication:** > Report offers an explicit six-step roadmap for leaders: (1) clarify and socialize AI policies, (2) connect AI to internal/organizational context, (3) prioritize foundational engineering practices before scaling AI use, (4) fortify safety nets (automated testing, version control, feedback loops), (5) invest in internal developer platforms (linked to unlocking AI value, ~90% of surveyed orgs have adopted platform engineering), and (6) keep a user-centric focus, since teams lacking this see AI adoption correlate with worse, not better, outcomes. Overall framing: treat AI adoption as organizational transformation, not tool rollout.

### Uncertain fields

- pct_distrust_ai_code
- pct_always_verify
- stated_behavioral_gap
- seniority_breakdown
- measured_proxy_angle
- methodological_caveat

---

## AI Engineering Report 2026: The Acceleration Whiplash

### Basic info

- **Source name:** AI Engineering Report 2026: The Acceleration Whiplash
- **Publisher:** Faros AI
- **Publication date:** Q2 2026 (approx. April-June 2026; a Q3 2026 follow-up titled 'The Speed Trap' also exists)
- **Methodology type:** > Instrumented telemetry, not self-report. Faros compared each organization's own metrics between its lowest and highest periods of AI adoption, using engineering-lifecycle data (authoring, review, testing, production) pulled directly from tooling on the Faros platform, rather than surveyed attitudes or estimates.
- **Sample size:** > Two years of telemetry from roughly 22,000 developers across more than 4,000 teams, all customers of the Faros engineering-analytics platform. Recruitment/instrumentation is simply 'organizations already using Faros'; the report does not describe a separate sampling process.

### Trust and verification metrics

- **Pct always verify:** > Not measured directly as a stated-verification percentage, but the closest behavioral proxy is that 31.3% more PRs are merged with zero review under high AI adoption, i.e. the inverse of 'always verify' behavior actually increased.
- **Stated behavioral gap:** > Not a distrust-vs-verification gap in the survey sense. The analogous gap here is between output/throughput gains (epics per developer +66%, task throughput +33.7%, PR merge rate +16.2%) and quality/verification indicators moving the wrong way (bugs per developer +54%, PR review time +441.5%, no-review merges +31.3%, incidents per PR +242.7%, code churn +861%).
- **Verification behavior detail:** > Verification here means human code review, measured as median PR review duration (up 441.5%) and time to first review (reported elsewhere as up ~156.6%). The report's core claim is that AI-generated code is 'idiomatic, well-named, and stylistically consistent,' so surface-level scanning no longer catches its structural/logical failures; reviewers must reason about intent rather than pattern-match for errors, which is why thorough review now takes far longer, and why many reviews are skipped instead (31.3% no-review merge rate).

### Why the gap persists

- **Measured proxy angle:** > Yes. The report explicitly frames the danger as organizations reading throughput proxies (epics completed per developer, task throughput, PR merge rate) as clean wins and using them to justify headcount cuts, while the same period shows bugs, incidents, review time and churn all rising sharply. Its own headline warning is that 'every organization cutting engineering headcount on the basis of AI output gains should read this report.'

### Comparative and framing material

- **Human factors parallel:** > Not present in this source itself; the report is software-only. (The cross-domain automation-bias parallel is covered separately in the human-factors research item.)
- **Leadership implication:** > Recommends moving quality checks upstream, to 'the point of authorship, before the code ever reaches review,' rather than relying on downstream review to catch problems; explicitly warns against cutting engineering headcount based on AI output metrics alone, since the same period shows a large rise in quality-maintenance work; recommends organizations investigate their own code-churn numbers locally to distinguish rework from healthy refactoring; and argues that high pre-AI engineering maturity (strong DORA scores, mature DevOps) does not insulate a team from these effects, contradicting DORA's 2025 findings that maturity acts as a shield.

### Uncertain fields

- pct_distrust_ai_code
- seniority_breakdown
- culture_incentive_angle

---

## AI Copilot Code Quality: 2025 Data Suggests 4x Growth in Code Clones (AI Copilot Code Quality research report)

### Basic info

- **Source name:** > AI Copilot Code Quality: 2025 Data Suggests 4x Growth in Code Clones (AI Copilot Code Quality research report)
- **Publisher:** GitClear
- **Publication date:** 2025-02 (published February 2025, analyzing data from January 2020 through December 2024)
- **Methodology type:** > Action/behavioral telemetry: direct static analysis of git commit history (lines added, deleted, moved, copy-pasted, churned) across real repositories, not a self-report survey. This is the study's main value for the essay: it measures what actually happened in the codebase rather than what developers say they do.
- **Sample size:** > 211 million changed lines of code analyzed across five years (2020-2024), drawn from a combination of anonymized private repositories (including enterprise organizations such as Google, Microsoft, and Meta among the customer base analyzed) and 25 of the largest open-source projects. The report separately cites Stack Overflow's 2024 Developer Survey (63% of professional developers currently using AI, 14% planning to; sample of 36,894 developers) as external corroboration, but that figure is a different, self-report source cited within the report, not GitClear's own telemetry sample.

### Trust and verification metrics

- **Stated behavioral gap:** > Not directly computable as a stated-vs-actual delta, since this source measures actions rather than attitudes. The behavioral trend itself is the evidence: code review participation fell by roughly 30% over the period studied, even as AI-generated code volume rose, which is the structural, observed version of the gap the other two (attitude) sources describe as a stated intention to check.
- **Verification behavior detail:** > Verification here means team code review (pull-request review by other humans), which the report finds declined by nearly 30% over the study period, with senior developers reported as the ones increasingly skipping review of small PRs on the assumption they were low-risk. The report also tracks a proxy for post-hoc, informal 'verification': short-term code churn (code revised within two weeks of being written), which rose from 3.1% of new code in 2020 to 5.7% in 2024 (7.9% of all newly added code was revised within two weeks in 2024, versus 5.5% in 2020) -- i.e., more code is being caught and fixed shortly after the fact rather than checked before commit.

### Why the gap persists

- **Culture incentive angle:** > The report's implicit account is that AI's speed made trusting the output 'out of the box' feel low-risk for small changes, which let review norms erode gradually rather than through a deliberate policy choice; a third-party reviewer of the report separately notes that concurrent tech-sector layoffs over the same period are a plausible confound, since fewer available reviewers (independent of AI) could also explain reduced review participation and declining code quality. No explicit discussion of blame allocation for AI-introduced bugs was found.
- **Measured proxy angle:** > The report's core argument is structured around exactly this Goodhart's-law point without using that term: it explicitly frames the risk as organizations optimizing for shipping speed/output volume while proxy metrics for code health (moved/refactored code share, duplication rate, churn rate) degrade underneath. Refactored/moved code fell from about 24-25% of changed lines in 2021 to under 10% in 2024, while copy-pasted code rose from 8.3% (2020/2021) to 12.3% (2024) and overtook moved code for the first time in the dataset's history; the report separately reports a maintainability index drop of 17%, attributed to fragmented structures and shallow hierarchies. The report's closing question to readers ('What code quality metrics are threatened by the proliferation of AI?') is explicitly aimed at leaders who track velocity/output metrics.

### Comparative and framing material

- **Leadership implication:** > The report explicitly argues for maintaining DRY, modular coding discipline as 'essential' to retaining velocity over time, implying that leaders should not let short-term AI-driven output gains come at the cost of code-reuse and refactoring discipline, and poses the code-quality-metrics question above directly to organizational decision-makers. It stops short of a specific process prescription (e.g. mandatory review thresholds).
- **Methodological caveat:** > The report itself discloses no explicit caveats about causation, confounds, or sample representativeness; its own text does not distinguish correlation from causation for the AI-adoption/quality-decline relationship. A third-party review of the report (Rob Bowley) flags a specific confound the report does not address: concurrent tech-sector layoffs over the same 2020-2024 window could independently explain part of the decline in review participation and code quality, separate from AI's effect. Coverage of the report is also careful to note that duplicated/churned code cannot be attributed line-by-line to AI assistants specifically; the study measures aggregate code-change trends during the period AI coding assistants spread through the industry, not a controlled AI-vs-no-AI comparison.

### Uncertain fields

- pct_distrust_ai_code
- pct_always_verify
- seniority_breakdown
- human_factors_parallel

---

## Octoverse 2025: A new developer joins GitHub every second as AI leads TypeScript to #1

### Basic info

- **Source name:** Octoverse 2025: A new developer joins GitHub every second as AI leads TypeScript to #1
- **Publisher:** GitHub (Microsoft)
- **Publication date:** 2025-11 (Octoverse 2025 annual report, published around GitHub Universe, November 2025)
- **Methodology type:** > Action/telemetry: platform-wide usage and repository data drawn from GitHub's own activity logs (sign-ups, commits, pull requests, language usage, Copilot adoption timing), not a self-report attitude survey. This makes it a behavioral counterpart to the self-reported trust/verification surveys in the other two sources, but it does not itself measure verification behavior.
- **Sample size:** > Platform-wide telemetry across GitHub's full user base: 180 million total developers, 36 million+ new developers added in the past year, 630 million+ repositories, drawn from GitHub's own logs rather than a recruited sample.

### Trust and verification metrics

- **Verification behavior detail:** > Not addressed. The report tracks adoption speed (nearly 80% of new developers use Copilot within their first week) and output volume (43.2 million PRs merged/month, +23% YoY; ~1 billion commits in 2025, +25.1% YoY) but contains no data on testing, manual review, or tooling checks applied to AI-generated code before it is committed.

### Why the gap persists

- **Culture incentive angle:** > Not addressed directly; the report is descriptive telemetry rather than an analysis of incentive structures. Its framing is notable for the essay's angle, though: it casts the shift as developers becoming 'creative directors of code' as AI handles boilerplate, and frames TypeScript's rise to the #1 language as evidence that developers now choose stronger typing because AI removes the old cost of that choice (verbosity), i.e. leaning on type systems as a structural, low-effort verification aid rather than manual review.
- **Measured proxy angle:** > The report itself repeatedly foregrounds volume/throughput metrics as headline success indicators: PRs merged per month (+23% YoY), commits pushed (+25.1% YoY), new repos created per minute, and speed of Copilot adoption. It does not name these as targets management optimizes for, but the report's own choice of headline metrics is itself an example of the velocity-over-verification framing the essay critiques: none of the headline stats measure defect rates, revert rates, or review thoroughness.

### Comparative and framing material

- **Leadership implication:** > No explicit recommendation for managers or leaders. The report's framing implies an identity-shift narrative for individual developers (from code producer to 'creative director'/orchestrator of AI-written code) that leadership content could extend into a management recommendation, but the source itself stops at descriptive framing.
- **Methodological caveat:** > The report includes a general caveat about its productivity-related correlations: GitHub describes such findings as 'observational signals rather than causal claims' and states 'more work is needed to understand the full impact AI is having.' This caveat is stated for productivity correlations generally and is not specific to verification or trust claims, which the report does not make.

### Uncertain fields

- pct_distrust_ai_code
- pct_always_verify
- stated_behavioral_gap
- seniority_breakdown
- human_factors_parallel

---

## GitLab AI Accountability Report 2026 (AI Accountability/Governance Survey)

### Basic info

- **Source name:** GitLab AI Accountability Report 2026 (AI Accountability/Governance Survey)
- **Publisher:** GitLab Inc., survey fieldwork conducted by The Harris Poll
- **Publication date:** June 23, 2026
- **Methodology type:** > Self-report survey/attitude data: an online survey of developers and technology buyers reporting their own and their organizations' perceptions of AI code quality, productivity, and governance capability. Not instrumented telemetry; figures like '78% report faster code output' and '73% note quality has improved' are perceptions, not measured delivery-pipeline data, which matters directly for the essay's attitude-vs-action framing.
- **Sample size:** > 1,528 developers and technology buyers surveyed across six countries; recruited and fielded by The Harris Poll on GitLab's behalf. Exact recruitment/sampling method beyond 'six countries' and the Harris Poll panel was not detailed in the public summary materials reviewed.

### Trust and verification metrics

- **Pct distrust ai code:** > Not framed as direct distrust; the closest equivalent is the 43% who say they cannot reliably distinguish AI-generated code from human-written code in their own codebase, which functions as a confidence/trust proxy (if you can't identify it, you can't selectively distrust it) rather than a stated-distrust percentage.
- **Pct always verify:** > No discrete 'always verify before committing' figure reported. Closest equivalents: 85% agree AI has shifted the bottleneck from writing code to reviewing/validating it (implying review effort has increased organization-wide), and 87% report confidence they could determine within 24 hours whether AI-generated code contributed to a production incident.
- **Stated behavioral gap:** > The report's central 'AI paradox' is itself the gap: 79% agree individual developer productivity has improved with AI and 73% say quality has improved, yet 85% say review/validation, not code generation, is now the delivery bottleneck. A second, sharper confidence-vs-reality gap: 87% are confident they could identify within 24 hours whether AI-generated code caused a production incident, but among organizations that actually had such an incident in the past year, only 34% could actually make that determination, a roughly 53-point gap between stated confidence and demonstrated capability.
- **Verification behavior detail:** > Verification here is organizational/process-level rather than an individual line-by-line check: 'reviewing and validating' AI-generated code is named as the new bottleneck (85%), and three structural barriers to doing this reliably are named: difficulty distinguishing AI-authored from human-authored code (43%), fragmented toolchains across the pipeline (40%), and systems that don't track code origin/provenance (39%). No time-cost or specific verification-method (tests vs. manual read vs. static analysis) breakdown was reported.

### Why the gap persists

- **Culture incentive angle:** > 80% say their organization adopted AI coding tools faster than it developed policies to govern them, framing the gap as a pace mismatch (adoption outrunning governance) rather than an explicit blame-allocation or career-risk mechanism. 92% report governance challenges with AI-generated code, and 83% now view accumulated AI-generated code as a risk to actively manage (44% rank it a top technology risk), suggesting the incentive to keep shipping fast has outpaced the incentive to build traceability, though the report does not name an individual-level career-risk or blame dynamic the way some other items in this research set do.

### Comparative and framing material

- **Human factors parallel:** > Not present in the source; this is a governance/process survey with no reference to non-software automation-bias literature.
- **Leadership implication:** > GitLab's Chief Product and Marketing Officer Manav Khurana is quoted with the report's core leadership recommendation: organizations that will 'ship trusted software faster are the ones building the foundations of accountability, with context, traceability, and governance baked into the platform,' i.e. treat traceability/governance as infrastructure to invest in now rather than a later compliance add-on. Consistent with this, 91% of respondents say they are likely to invest in AI code governance tooling within the next 12 months.

### Uncertain fields

- seniority_breakdown
- measured_proxy_angle
- leadership_confidence_vs_evidence_exact_figures

---

## The State of Developer Ecosystem 2025: Coding in the Age of AI, New Productivity Metrics, and Changing Realities

### Basic info

- **Source name:** > The State of Developer Ecosystem 2025: Coding in the Age of AI, New Productivity Metrics, and Changing Realities
- **Publisher:** JetBrains
- **Publication date:** 2025-10 (survey fieldwork April-June 2025)
- **Methodology type:** > Self-report attitude survey: an online questionnaire of developers reporting their own AI usage, sentiment, and concerns. It is not instrumented/behavioral telemetry, so any 'we review our AI code carefully' response is a stated claim, not an observed action -- exactly the attitude-vs-action gap this research set is tracking.
- **Sample size:** > 24,534 developers across 194 countries, surveyed April-June 2025, with geographic, employment, programming-language, and product-use balancing applied to the sample.

### Trust and verification metrics

- **Pct distrust ai code:** > No single 'percent who distrust AI code' figure is published, but the survey's top concern about AI is the 'inconsistent/quality of AI-generated code' at 23% of respondents naming it their #1 concern, followed by AI's 'limited understanding of complex code and logic' (18%), privacy/security (13%), negative effect on developer skills (11%), and lack of context awareness (10%). Together these code-quality-adjacent concerns (23% + 18% + 10% = 51%) indicate roughly half of respondents flag code-correctness-related worries as a top concern, even though 85% say they use AI regularly and 62% rely on at least one AI coding assistant/agent/editor day to day.
- **Verification behavior detail:** > The report distinguishes 'checking' effort by experience level rather than giving one aggregate figure: less-experienced developers report that reviewing AI-generated code takes greater effort than their most-experienced peers report. Less-experienced developers also estimate about 45% of their committed code is AI-assisted, versus about 40% estimated by their most-experienced peers. No figure is given for time spent per review, nor whether checking means running tests, reading line by line, or using static analysis tooling.

### Who carries the gap

- **Seniority breakdown:** > Experience level shapes both usage and framing of AI, not just verification effort. Less experienced developers estimate a higher share of their own committed code is AI-assisted (about 45%) than the most experienced developers do (about 40%), and less-experienced developers report AI-code review taking more effort than their senior peers report. The two groups also frame AI's role differently: more experienced developers are more likely to describe AI as a 'junior colleague', a content generator, or assign it no defined role, while less experienced developers are more likely to describe AI in a 'teacher' role.

### Comparative and framing material

- **Methodological caveat:** > No documented correction, walk-back, or contested-methodology flag was found for this specific edition. The survey does apply sampling balancing (geography, employment, language, product use) as a stated control, and as a self-report instrument its figures on 'review effort' and 'AI-generated code share' are developers' own estimates rather than measured/instrumented values, which is a standing limitation of the format rather than a specific admitted error.

### Uncertain fields

- pct_always_verify
- stated_behavioral_gap
- culture_incentive_angle
- measured_proxy_angle
- human_factors_parallel
- leadership_implication

---

## Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity (original RCT), plus METR's February 2026 methodology update/caveat blog post

### Basic info

- **Source name:** > Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity (original RCT), plus METR's February 2026 methodology update/caveat blog post
- **Publisher:** METR (Model Evaluation and Threat Research)
- **Publication date:** > Original study: mid-2025 (fieldwork February-June 2025). Methodology caveat/update: February 24, 2026 ('We are Changing our Developer Productivity Experiment Design').
- **Methodology type:** > Instrumented/behavioral: a randomized controlled trial, not a self-report survey. 16 experienced open-source developers completed 246 real tasks on repositories they personally maintained, with each task randomly assigned to an AI-allowed or AI-forbidden condition, and completion time measured directly. The perception figure (20% believed-faster) is self-report layered on top of the measured (19% actually slower) result, which is exactly the perceived-vs-measured contrast the essay needs. The February 2026 update is itself a self-critical methodological analysis of recruitment and task-selection behavior in the follow-up experiment, not new telemetry.
- **Sample size:** > Original RCT: 16 experienced open-source developers, 246 tasks, on repositories they personally maintained; developers were paid (reports cite up to $50/hour) to participate. February 2026 follow-up: a new but related experiment where METR found a substantially higher share of approached developers refused to participate specifically because they were unwilling to work without AI tools, and 30-50% of participating developers withheld tasks they believed would most benefit from AI, rather than risk being assigned to the no-AI condition.

### Trust and verification metrics

- **Pct distrust ai code:** > Not directly measured; the closest equivalent is behavioral rather than attitudinal: developers spent significant additional time double-checking AI outputs, which the study cites as the primary driver of the 19% slowdown ('low AI reliability' requiring verification). No discrete 'percentage who distrust AI code' figure was reported.
- **Pct always verify:** > Not reported as a percentage; the RCT measured that checking/double-checking AI output consumed enough time to make AI-assisted work slower overall, which functions as the study's behavioral verification signal even though it isn't expressed as a headline percentage.
- **Stated behavioral gap:** > Headline gap is the perception-vs-measurement gap itself: developers estimated AI made them about 20% faster (some report a pre-registered prediction of 24% faster) while the RCT measured them as 19% slower, a swing of roughly 40 percentage points between belief and measured outcome.
- **Verification behavior detail:** > The study attributes the slowdown chiefly to time spent reviewing, correcting, and double-checking AI-generated suggestions rather than to typing/generation speed itself; this is described as 'low AI reliability' imposing a verification tax on developers working in mature, unfamiliar-to-the-AI codebases. Verification here means active correction and re-checking of suggested code within real task completion, not a separate audit step.

### Why the gap persists

- **Culture incentive angle:** > The February 2026 update surfaces a strong incentive/culture-adjacent effect even though it's about experiment participation rather than workplace culture: developers who felt AI benefited them most were the ones most likely to refuse the no-AI condition or route around it (avoiding assignment of AI-friendly tasks to the no-AI arm), meaning the population willing to be measured without AI was self-selected toward those with less to lose. That is itself a small-scale version of the essay's broader point: stated belief in a tool's value and willingness to have that belief checked pull in opposite directions.
- **Measured proxy angle:** > Not applicable in the workplace-Goodhart's-law sense (this is a research study, not an organization optimizing a delivery metric); however, the update notes that when developers were financially incentivized (paid per task) and could choose which condition to risk a task in, they systematically protected the tasks where an AI speed benefit was most likely, which is a close analogue: the incentive structure of the experiment itself was gamed in a way that would flatter AI's apparent value if left uncorrected.

### Comparative and framing material

- **Leadership implication:** > No explicit leadership recommendation is issued by METR (it is a research organization, not a practice guide), but the practical implication drawn by secondary commentary is that team- and self-reported AI productivity gains should not be trusted without direct measurement, and that low-reliability AI output imposes a verification cost leaders should budget for rather than assume away.
- **Methodological caveat:** > Significant, and central to why this item is in the essay: in the February 24, 2026 post, METR disclosed that its newer follow-up experiment suffers from selection and task-withholding bias, a much higher share of developers refused to take part specifically because they didn't want to work without AI, and 30-50% of participants avoided assigning their most AI-favorable tasks to the no-AI arm. METR states this creates a likely downward bias on measured AI speedup versus the true population effect, and that the new data provide 'only very weak evidence' for how AI's effect has changed since early 2025. METR itself now calls the original 19%-slower finding 'historical' and cautions it may not reflect current tools or workflows. This is presented in the essay not as a discrediting of the original RCT's internal validity (which remains a rigorously randomized design) but as a live demonstration of the paper's own thesis: even a rigorous measurement of the perception-reality gap is vulnerable to the same self-selection dynamic when repeated on a population that has strong stated preferences about the tool being tested.

### Uncertain fields

- seniority_breakdown
- human_factors_parallel

---

## Qodo 2026 State of AI Code Quality Report

### Basic info

- **Source name:** Qodo 2026 State of AI Code Quality Report
- **Publisher:** Qodo (AI code quality and governance platform)
- **Publication date:** September 23, 2026
- **Methodology type:** > Self-report survey (Censuswide fielding), attitude data. Developers and engineering leaders were run as two separate questionnaires that did not see each other's responses; no telemetry or instrumented behavioral data is used.
- **Sample size:** > 500 U.S. software developers and 300 U.S. engineering leaders, recruited from organizations where AI already performs meaningful work across the software development lifecycle. Response rate, weighting and confidence intervals are not disclosed.

### Trust and verification metrics

- **Verification behavior detail:** > Qodo frames verification as reviewer cognitive load rather than time: reviewing AI code takes about as long as reviewing human code but demands 'greater cognitive effort to catch subtle bugs' because the diff looks clean and gives no signal about which alternatives the agent considered or whether it understood the decision it made. The report describes single changes carrying 'chains of AI-influenced decisions' where an early error gets reinforced at every later stage, rather than detailing specific practices like running tests or static analysis.

### Why the gap persists

- **Culture incentive angle:** > The report frames the gap structurally rather than as individual failure: 'generation scaled across the entire lifecycle, and verification never scaled with it.' It does not name career risk, blame allocation, or deadline pressure explicitly as mechanisms.
- **Measured proxy angle:** > Not explicitly named. Qodo implies a context/tooling gap (43% of leaders cite insufficient agent context; only 42.6% of developers work with centralized context/rules systems) rather than naming a specific leadership-optimized metric like velocity or PR throughput that discourages verification time.

### Comparative and framing material

- **Leadership implication:** > Qodo argues for a 'context layer' that gives agents proper organizational context before generation and verifies agent work before it reaches human review, rather than adding more human review capacity after the fact. It positions a persistent 'wisdom base' of documented review decisions and coding standards as the durable asset, on the reasoning that specific AI tools will turn over but organizational knowledge compounds.
- **Methodological caveat:** > Report does not disclose response rate, margin of error, or weighting. Sampling was restricted to organizations 'where AI already does meaningful work,' which likely selects for more mature or optimistic AI adopters and excludes skeptical or early-stage shops. Most importantly for this project: the widely-quoted 96% distrust / 48% always-verify anchor stat is not Qodo's own finding, it belongs to Sonar's separately-published 2026 State of Code Developer Survey and has been miscited to Qodo in some secondary coverage (see Sonar record for the correctly-sourced figures).

### Uncertain fields

- pct_distrust_ai_code
- pct_always_verify
- stated_behavioral_gap
- seniority_breakdown
- human_factors_parallel

---

## Sonar State of Code Developer Survey 2026

### Basic info

- **Source name:** Sonar State of Code Developer Survey 2026
- **Publisher:** Sonar (SonarSource)
- **Publication date:** January 8, 2026
- **Methodology type:** > Self-report survey, attitude data. The published materials describe 'over 1,100 professional developers' surveyed globally but do not state whether any telemetry or commit-log data backs the self-reported figures; recruitment platform, geography split and response rate are not disclosed in the public blog/press materials.
- **Sample size:** > More than 1,100 professional developers, global. Exact recruitment method, country breakdown and response rate are not published in the material available.

### Trust and verification metrics

- **Pct distrust ai code:** > 96% of developers do not fully trust AI-generated code. This is the anchor stat for the piece and is Sonar's own top-line figure (not, contrary to some secondary coverage, Qodo's).
- **Pct always verify:** Only 48% always verify/check AI-generated code before committing it.
- **Stated behavioral gap:** > 48-point gap between stated distrust (96%) and stated always-verify behavior (48%): roughly half of developers who say they don't fully trust AI output do not report always checking it before it ships. Sonar also reports 38% say reviewing AI code takes more effort than reviewing a human colleague's code, and that developers spend close to a quarter of their work week (24%) checking, fixing and validating AI output, which Sonar frames as a 'trust tax': the same or greater cognitive effort spent on verification without a matching reduction in overall workload.
- **Verification behavior detail:** > Sonar names the effort as cognitive rather than purely time-based: 61% agree 'AI often produces code that looks correct but isn't reliable,' meaning defects are harder to spot than typical human mistakes. 38% report reviewing AI code demands more effort than reviewing a colleague's code, and teams report roughly 24% of the work week goes to checking, fixing and validating AI output. The public material does not break this down into discrete practices (tests run vs. manual line read vs. static analysis tooling); it names automated quality/security checks paired with AI generation as an organizational lever ('organizations that pair rapid AI generation with automated quality and security checks achieve speed') rather than detailing individual developer verification steps.

### Comparative and framing material

- **Leadership implication:** > Sonar frames verification capability as 'the critical differentiator' between organizations that get real speed from AI and those that don't, and states organizations that pair rapid AI code generation with automated quality and security checks are the ones that actually achieve speed gains. Specific organizational process recommendations beyond this framing were not detailed in the pages reviewed.
- **Methodological caveat:** > No response rate, margin of error, weighting, or full demographic breakdown is disclosed in the public blog and press-release pages reviewed; those details may exist only in the full downloadable PDF report. Cross-check against the Qodo 2026 report: the 96%/48% figures are Sonar's own and are sometimes miscited to Qodo (a separate, concurrently-published survey of 500 US developers and 300 US engineering leaders) in secondary press coverage. The two surveys appear to be independent efforts published in the same window (Sonar Jan 2026, Qodo Sept 2026) rather than the same underlying data cited twice, but they measure different things: Sonar's 96%/48% is a direct trust/verification pair, while Qodo's report centers on governance and incident-rate figures (89% of orgs report an AI-related production incident; 26% name review/validation as the top bottleneck) and does not independently reproduce the 96%/48% numbers. Treat the two as thematically convergent (both find a large trust/verification shortfall) but not as two independent confirmations of the same statistic.

### Uncertain fields

- seniority_breakdown
- culture_incentive_angle
- measured_proxy_angle
- human_factors_parallel

---

## Stack Overflow Developer Survey 2025 (AI trust section)

### Basic info

- **Source name:** Stack Overflow Developer Survey 2025 (AI trust section)
- **Publisher:** Stack Overflow
- **Publication date:** > Fielded 2025, results published starting July 29, 2025 (main report); follow-on 'leaders' analysis and blog coverage ran through October 2025 and into early 2026.
- **Methodology type:** > Self-report survey, attitude data. Over 49,000 responses from 177 countries on the full survey; the AI-accuracy-trust question specifically drew 33,244 responses (a 67.8% response rate against those who saw that question). No telemetry or behavioral/commit data backs the trust figures, only stated attitudes.
- **Sample size:** > 49,000+ total respondents across 177 countries; 33,244 responses to the AI-trust-in-accuracy question specifically. Recruitment is Stack Overflow's standard annual survey panel (site visitors and community outreach), not a controlled random sample.

### Trust and verification metrics

- **Verification behavior detail:** > The survey frames the cost of low trust mainly as debugging time rather than a discrete checking ritual: 45% call debugging AI-generated code time-consuming, and complex-task performance is rated poorly by 39.6% of respondents (only 4.4% rate it 'very well'). It does not break down specific verification methods (running tests, manual line-by-line reading, static analysis tooling) the way this project's fields ask for.

### Comparative and framing material

- **Leadership implication:** > Limited to a vendor-style recommendation rather than a management practice: then-CEO Prashanth Chandrasekar is quoted saying an approach 'that leans heavily on trustworthy, responsible use of data from curated knowledge bases is critical,' positioning Stack Overflow's own community-vetted content as the fix for AI's trust problem. No explicit guidance for engineering managers on review process, staffing, or incentives was found in the material reviewed.
- **Methodological caveat:** > This is an opt-in community survey (Stack Overflow's own site visitors and community), not a random or representative sample of all developers, so the trust figures may skew toward respondents already engaged with the Stack Overflow ecosystem. The precise prior-year trust baseline (40% vs. 43% cited across different secondary write-ups) was not resolved to a single authoritative figure from the pages reviewed, and the 2.6%-highly-trust figure in the task's own note was not found verbatim; the closest confirmed figures are 2.5% (10+ years experience) and 2.7% (professional developers overall).

### Uncertain fields

- pct_distrust_ai_code
- pct_always_verify
- stated_behavioral_gap
- seniority_breakdown
- culture_incentive_angle
- measured_proxy_angle
- human_factors_parallel

---

## 'Trust, but verify' idiom history (Wikipedia's 'Trust, but verify' article and sources it draws on; supplementary check of the one unrelated software usage, Vekris, Cosman & Jhala, 'Trust, but Verify: Two-Phase Typing for Dynamic Languages,' ECOOP 2015)

### Basic info

- **Source name:** > 'Trust, but verify' idiom history (Wikipedia's 'Trust, but verify' article and sources it draws on; supplementary check of the one unrelated software usage, Vekris, Cosman & Jhala, 'Trust, but Verify: Two-Phase Typing for Dynamic Languages,' ECOOP 2015)
- **Publisher:** > Wikipedia (tertiary source aggregating Reagan-era and Russian-proverb history); arXiv/Dagstuhl (ECOOP 2015 conference proceedings) for the type-checking paper
- **Publication date:** > Idiom's documented English-language rise: December 1987 (INF Treaty signing). Type-checking paper: 2015 (ECOOP conference; arXiv preprint 1504.08039).
- **Sample size:** Not applicable; this is a single idiom's documented history, not a study with respondents.

### Trust and verification metrics

- **Verification behavior detail:** > No clean software-QA origin exists for the phrase. Its documented lineage is: a Russian proverb ('doveryay, no proveryay,' доверяй, но проверяй) of uncertain age, not present in Vladimir Dal's 19th-century compilation of Russian sayings, so likely late 19th/early 20th century in origin; echoed in spirit (not exact wording) by Lenin in 1914 ('subject everything to the closest scrutiny') and by Stalin ('healthy distrust makes a good basis for cooperation'); it appears in the 1958-released Soviet film 'A Great Life, 2'; it entered English usage when Suzanne Massie, a scholar of Russian history, taught it to President Reagan between 1984 and 1987 as a proverb to use with Soviet counterparts; Reagan made it his signature line, most famously at the 8 December 1987 INF Treaty signing, in the context of nuclear arms-control verification, not software or quality assurance.

### Why the gap persists

- **Culture incentive angle:** > The one clear 'incentive' point worth using in the essay is that the phrase's real pedigree is political/diplomatic (verifying a rival superpower's compliance with a treaty it has its own incentive to violate), which is a very different trust problem from a developer deciding whether to read their own AI-generated code. Reaching for 'trust, but verify' to describe code review borrows the idiom's rhetorical weight (it sounds authoritative and battle-tested) without actually inheriting any engineering-specific reasoning about why the check gets skipped.

### Comparative and framing material

- **Human factors parallel:** > Not directly present in the idiom's own history, but the essay should note the ironic fit: the phrase's most famous use (arms-control verification) is itself a domain-level instance of the same 'trust the counterpart but build in independent checking' logic explored in the automation-bias literature, even though the mechanism (institutional/treaty verification vs. individual cognitive shortcutting) is different.
- **Leadership implication:** > For the essay: don't invent or imply a software-engineering or QA pedigree for this phrase. It has no documented origin in coding practice, testing culture, or code review discipline. The two documented lineages are (1) a borrowed political/diplomatic idiom (Reagan-era arms control) and (2) a single, unrelated, and narrow technical usage in programming-language type-checking research (the 2015 'two-phase typing' paper on gradual/dynamic type systems), which is about static type verification of untrusted-by-construction dynamic code, not about human developers checking AI output. Citing the arms-control history is honest and rhetorically useful (it underlines that even superpowers needed verification, not trust); citing an 'engineering tradition' behind the phrase would be an invented lineage and should be avoided.
- **Methodological caveat:** > The exact age and first attestation of the Russian proverb is itself uncertain; sources describe it as 'relatively recent' (turn of the 20th century) rather than an ancient saying, and no single first-use citation is confirmed. The 2015 type-checking paper ('Trust, but Verify: Two-Phase Typing for Dynamic Languages' by Vekris, Cosman and Jhala) is a real, citable engineering-adjacent use of the phrase, but it concerns static analysis/type-soundness for dynamic programming languages, a compiler-theory context, not code review or AI-generated code verification; using it as if it were about human review practice would misrepresent the paper.

### Uncertain fields

- methodology_type
- pct_distrust_ai_code
- pct_always_verify
- stated_behavioral_gap
- seniority_breakdown
- measured_proxy_angle

---
