# Would anyone notice if we stopped using AI tools? How engineering leaders measure whether AI tools pay off (activity vs business outcomes, the seniority gap in doubt, workload vs productivity)

Generated from results/*.json. Values marked [uncertain] and fields in each file's uncertain list are left out.

## Contents

1. [Atlassian State of DevEx 2026](#atlassian-state-of-devex-2026) - data_type: Survey (self-report), with two callouts citing separate Atlassian DX telemetry research (Q2 2026 State of AI Impact in Engineering, sample from 500+ companies).
2. [DORA 2025 State of AI assisted](#dora-2025-state-of-ai-assisted) - data_type: Survey (cross-sectional, analysed with Bayesian models and DAG-based confounder adjustment; effects reported as standardised coefficients with 89% credible intervals), supplemented by 78 qualitative interviews.
3. [DORA ROI of AI assisted development 2026](#dora-roi-of-ai-assisted-development-2026) - data_type: Model. A financial framework plus a sample ROI calculator with assumed inputs. No new data collection; it borrows the direction of effects from the DORA 2025 State of AI-assisted Software Development survey and cites market studies (several from Google Cloud).
4. [DORA tokenmaxxing](#dora-tokenmaxxing) - data_type: Commentary / opinion piece. No new data. It cites one DORA survey figure and otherwise relies on 11 press, blog and podcast references (accessed May 4 to June 1, 2026).
5. [Faros 2026 and CircleCI 2026](#faros-2026-and-circleci-2026) - data_type: Telemetry from both vendors, observational and correlational. Faros: within-team comparison of low vs high AI adoption quarters. CircleCI: CI/CD pipeline run data, year-on-year comparison; no direct measure of AI use.
6. [GitClear AI code quality 2025](#gitclear-ai-code-quality-2025) - data_type: Telemetry: commit and code-change line analysis (repository data), observational trend over time. No direct attribution of each line to AI.
7. [HBR AI intensifies work](#hbr-ai-intensifies-work) - data_type: Ethnography (in-person observation, internal communication channels, semi-structured interviews). Described by the authors as 'in-progress research'. No quantitative measures reported.
8. [Harness State of Engineering Excellence 2026](#harness-state-of-engineering-excellence-2026) - data_type: Survey (commissioned vendor survey, self-report). No telemetry.
9. [LeadDev Berlin 2026 survey](#leaddev-berlin-2026-survey) - data_type: Survey (voluntary, anonymous, self-report) of conference attendees, plus free-text respondent quotes.
10. [LeadDev Multitudes struggle to prove](#leaddev-multitudes-struggle-to-prove) - data_type: Survey plus interviews (whitepaper 2: two surveys and 29 interviews; free-text answers coded with LLM-assisted thematic analysis reviewed by humans). Whitepaper 1 adds telemetry (500+ developers at 4 organisations). LeadDev piece is journalism with expert quotes.
11. [METR RCT and uplift update](#metr-rct-and-uplift-update) - data_type: RCT (task-level randomisation, self-reported task times plus screen recordings) for the 2025 paper; the 2026 update reports raw results of a second task-randomised RCT plus participant surveys and interviews.
12. [Temporal State of Development 2026](#temporal-state-of-development-2026) - data_type: Survey (commissioned online panel via Qualtrics, self-report), with some free-text word-frequency charts.

## Atlassian State of DevEx 2026

### basic_info

**source**

Atlassian, 'The State of Developer Experience in 2026' (report PDF, 24 numbered pages, cover subtitle 'The AI experiment is over. The hard part of operationalizing it has just begun.'; PDF created 14 Oct 2026). Foreword by Taroon Mandhana, Chief Technology Officer, AI & Teamwork. Opened: landing page https://www.atlassian.com/teams/software-development/state-of-developer-experience-2026 and the full PDF linked from it, https://dam-cdn.atl.orangelogic.com/CDNLink/AT12P1R5.pdf. Secondary opened: Steef-Jan Wiggers, 'Developers Reporting Double-Digit Weekly Time Savings from AI Fell from 68% to 26%', InfoQ, Oct 27, 2026, https://www.infoq.com/news/2026/10/atlassian-devex-2026/

**data_type**

Survey (self-report), with two callouts citing separate Atlassian DX telemetry research (Q2 2026 State of AI Impact in Engineering, sample from 500+ companies).

**sample_and_method**

Methodology page: 'This report draws on survey responses from 1,155 individual contributors and 405 engineering leaders, collected in 2026 across a range of organization sizes, industries, and geographies.' No fieldwork dates, recruitment method, panel provider, country list or weighting published. Landing page describes it as 'a survey of 1,500+ software practitioners'. InfoQ notes the 2025 edition surveyed 3,500 developers and managers across six countries, so year-on-year comparisons use a different, larger base.

**vendor_interest**

Yes, strong. Atlassian sells developer tooling (Jira, Bitbucket, Pipelines, Rovo AI) and owns DX, a product marketed on the landing page as 'Measure productivity and AI impact'. The report recommends the DX Core 4 framework and an Atlassian DX AI measurement framework, and its central recommendation (formalize AI-native delivery through an 'engineering system of work' with shared context and a 'shared system of record') aligns with Atlassian's products. InfoQ flags this: 'vendor research from a company selling developer tooling, arriving at a conclusion that favors formalizing AI delivery'.

### findings

**headline_figures**

Executive summary: 'Nearly everyone in this year's survey, 95% of developers and 96% of engineering leaders say their organization actively uses AI in engineering'; 'Developers still report meaningful local benefit from AI: 87% say it helps them ship work faster, and 80% say it helps them deliver more without longer hours.'; 'In 2025, 68% of developers reported saving 10 or more hours a week with AI. In 2026, that figure is 26%.' Chapter 1: 'Only 28% of developers say they have noticeably less friction than before AI; 50% say they have about the same friction'. Time table (developers / leaders): 'Spend 4+ hours per week managing AI tools' 49% / 57%; 'I spend time correcting AI-generated work that missed original intent' 65% / 72%; 'Save 11+ hours per week using AI' 26% / 31%. '29% of developers say reviewing or managing AI-generated code and output is a source of friction.' Snapshot: '60% of developers say AI use is treated as a productivity signal in their organization'; '42% of leaders say they have the right metrics to separate real gains from activity'. Chapter 4 panel: developers 60% 'say greater AI use is treated as a signal of productivity', 41% 'say they sometimes use AI more than necessary because they feel expected to', 68% 'say greater AI use does not accurately reflect the value they deliver', 85% 'say they know when AI tools genuinely help versus create extra work'; leaders 64% 'say greater AI use correlates with better outcomes', 59% 'worry about performative AI use', 81% 'agree that measuring AI use can create the wrong incentives', 42% 'say they have the right metrics to distinguish genuine gains from inflated AI activity.' Strategy: 17% of developers and 23% of leaders report a clear, actively implemented AI strategy across the SDLC; 41% of developers with such a strategy report noticeably less friction vs 22% with an inconsistent or poorly communicated one.

**metric_layer**

Input/usage (adoption, AI use treated as signal) and self-reported activity/output (ship faster, deliver more, hours saved, hours managing AI), plus perceived quality (59%/60% say output higher quality; 73% say speed can cost quality). The report itself says it does not measure delivery or financial outcomes: findings are 'not system-level telemetry such as deployment frequency, cycle time, or revenue impact.' One telemetry callout (DX, 500+ companies, Q1 to Q2 2026): code maintainability +3.8%, change confidence -6.1%.

**respondent_role_split**

Developers (ICs, n=1,155) vs engineering leaders (n=405) throughout; no director/executive split. Examples: ship faster 87% / 88%; deliver more without longer hours 80% / 77%; save 11+ hours 26% / 31%; 4+ hours managing AI 49% / 57%; correcting AI work that missed intent 65% / 72%; clear AI strategy 17% / 23%. Measurement table (leaders 'How are you measuring developer productivity?' vs developers 'What is the best way...'): hours worked 37% / 17%; story points 36% / 26%; code volume 35% / 17%; deployment frequency 35% / 19%; AI tool usage 26% / 12%; SPACE 20% / 41%; 'can't/shouldn't be measured' 16% / 33%. Seniority split among developers: saves 11+ hours 21% junior, 27% software engineer, 28% senior; AI officially standardized 8% / 21% / 26%. Leaders on hiring: '37% say they have hired fewer junior developers in the past 12 months.'

**workload_signal**

'49% of developers say they spend 4+ hours per week reviewing AI output, correcting prompts, and more' (landing page); table wording 'Spend 4+ hours per week managing AI tools' 49% developers, 57% leaders. 65% of developers (72% leaders) spend time correcting AI work that missed original intent. 18% 'lose time configuring and training AI to reliably work within their workflows.' Pressure to use AI: 41% of developers 'sometimes use AI more than necessary because they feel expected to'. Counter-signal: 80% say AI helps them deliver more without longer hours. Report: 'Managing AI itself is becoming a significant addition to a developer's workweek.' No burnout measure. 66% of developers say leadership does not fully understand their challenges (44% in 2024, 63% in 2025).

**definition_of_value_offered**

Yes, explicitly. Chapter 4, 'Measuring AI impact without mistaking activity for value': AI's 'most visible signals—tool use, token consumption, generated output, and code volume—are also the easiest to count, game, and remain weak evidence that engineering is creating more value.' Recommends outcome questions: 'Are teams delivering valuable changes with greater confidence? Are developers spending less time waiting for context, approvals, or information? Is quality improving without creating hidden review or rework burdens? Are teams able to invest more in new capabilities rather than maintenance and overhead? Are engineers gaining the judgment required to direct, evaluate, and safely use AI?' Telemetry such as adoption, token use, accepted suggestions and agent activity are 'diagnostic signals, not proof of success. A rise in AI usage is meaningful only when leaders can connect it to impact and outcomes.' Points to DX Core 4 (speed, effectiveness, quality, business impact) and a DX framework of AI utilization, cost and impact.

**removal_counterfactual**

None. No comparison of teams or periods without AI tools. Only adjacent figure: 'only 2% say they don't currently use AI at all'. Before/after comparisons are respondents' own recall ('noticeably less friction than before AI').

**key_quotes**

1. 'Developer productivity measurement—an already fraught conversation—is at even greater risk of rewarding AI usage over impact' (report snapshot heading; contains em dashes, paraphrase for site use). 2. 'Those questions are harder to answer than "How often is the tool used?", which is precisely why they matter.' (report, chapter 4)

### caveats

**caveats**

Self-report survey by a vendor with products in this space; the report says findings 'should not be interpreted as causal proof' and are not telemetry. No fieldwork dates or recruitment detail. Year-on-year comparison bases differ (2025: 3,500 respondents across six countries per InfoQ; 2026: 1,560). Internal inconsistencies in the PDF: the 2026 hours-saved figure appears as '10 or more hours' 26% (exec summary), '10+ hours' 25% (chapter 1) and 'Save 11+ hours' 26% (table), so the threshold and figure are not stable; quality appears as 60% (chapter 1) and 59% (speed-quality section); juniors citing more cross-functional coordination are 62% 'vs 56% overall' in text, but the role table gives 29% of developers for 'More cross-functional coordination and communication' while the seniority table gives 55% for mid-level engineers. Landing page/PDF conflict: landing page says '75% of developers say they have more responsibility for validating the quality and safety of AI-generated output', but the PDF role table gives 41% developers / 37% leaders for that statement; treat 75% as unverified. Landing page frames the 64% leaders figure under 'AI usage is—incorrectly—being treated as a productivity signal', whereas the 60% figure is the developers' 'productivity signal' item; InfoQ uses the 60% developer figure correctly. Landing page sample '1,500+' vs PDF 1,560.

**access**

Primary opened in full: landing page text and all 26 pages of the PDF (image-based PDF, read page by page visually). InfoQ write-up opened in full and its figures checked against the PDF. Not verified: the separate DX Q2 2026 AI Impact report telemetry, and the 2025 edition's 68% figure and sample (taken from this report and InfoQ, not the 2025 report itself).

## DORA 2025 State of AI assisted

### basic_info

**source**

"State of AI-assisted Software Development 2025" (the 2025 DORA Report), DORA / Google Cloud; PDF version v. 2025.2 (142 pages, PDF created 15 Oct 2025). Chapter authors include Nathen Harvey (DORA Lead), Derek DeBellis, Kevin M. Storer, Daniella Villalba; premier research partner IT Revolution; research partners GitHub, GitLab, SkillBench, Workhelix. Companion announcement: "Announcing the 2025 DORA Report: State of AI-Assisted Software Development", Google Cloud blog, Nathen Harvey and Derek DeBellis, September 24, 2025. URLs opened: https://dora.dev/research/2025/dora-report/ ; https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf ; https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report

**data_type**

Survey (cross-sectional, analysed with Bayesian models and DAG-based confounder adjustment; effects reported as standardised coefficients with 89% credible intervals), supplemented by 78 qualitative interviews.

**sample_and_method**

"This year, a total of 4,867 respondents answered our survey." Global survey "conducted between June 13 and July 21, 2025", localised into English, Spanish, French, Portuguese, Japanese and Simplified Chinese. Recruitment: organic (blog posts, email campaigns, social media, snowball sampling) supplemented by a panel aimed at under-represented groups and industries; the report says organic responses alone were sufficient. Respondents were randomly assigned to one of four overlapping survey flows (AI, platform engineering, sociocognitive aspects, AI capabilities), so not every respondent answered every question. Interviews: 78 participants, July 2024 to July 2025, about 90 minutes each, remote. Respondents: median age 41; 62.8% men, 19.2% women; most common roles full-stack developer 15.0%, engineering manager 9.3%, back-end developer 9.3%; senior executives 4.2%; median six years in role. AI adoption is a latent factor built from three items: reliance, trust and reflexive use.

**vendor_interest**

Yes. Published by Google Cloud (sells Gemini and AI tooling); sponsors and research partners include GitHub and GitLab (AI coding tools), SkillBench and Workhelix (AI measurement/adoption tooling). The blog post page carries a "Try Gemini today" promotion.

### findings

**headline_figures**

(1) "Ninety percent of this year's survey respondents report using AI at work, a 14.1% increase over the same metric in last year's report." (2) "More than 80% of this year's survey respondents report a perception that AI has increased their productivity. Although more than 40% report that their productivity has increased only 'slightly,' fewer than 10% of respondents perceive AI contributing to any decrease in their productivity." (chart: 13% extremely, 31% moderately, 41% slightly increased; 9% no impact). (3) "a majority (59%) of survey respondents also observe that AI has positively impacted their code quality." (4) Trust: "While 30% of those surveyed indicate a more reserved stance, with 'a little' (23%) or 'no trust at all' (7%) in the quality of AI-generated output"; 70% have some confidence, "nearly a quarter of respondents (24%) who report having 'a great deal' or 'a lot' of trust." (5) "Survey respondents report spending a median of two hours of their most recent workday interacting with AI, representing about one-quarter of an eight-hour workday." (6) Experience: "a median of 16 months and a mean of 16.22 months of experience." (7) "Among AI users, only 7% report 'always' using AI when faced with a problem to solve or a task to complete, while 39% only 'sometimes' seek AI for help." (8) "Daily use is also common, with 47% of respondents using AI tools every day." (9) Agents: "a majority (61%) of respondents reporting 'never' interacting with AI tools in an agentic mode." (10) "the number one use for AI tools among this year's survey respondents is writing new code, with 71% of respondents who write code using AI to assist them in doing so." (11) Outcomes: "the person with higher AI adoption will report: Higher levels of individual effectiveness; Higher levels of software delivery instability; Higher levels of organizational performance; A higher percentage of time doing valuable work; Higher levels of code quality; Higher levels of product performance; Higher levels of software delivery throughput; Higher levels of team performance; Similar levels of burnout; Similar levels of friction." (12) Restated from DORA 2024: "an estimated 1.5% reduction in software delivery throughput and an estimated 7.2% increase in software delivery instability for every 25% increase in AI adoption." (13) Restated from METR: "developers who were slowed down by AI tools by 19% still believed the tools had made them 20% more efficient." (14) "90% of organizations have adopted platform engineering." (15) Blog: "However, skepticism remains as 30% report little or no trust in the code generated by AI, a slightly lower percentage than last year but a key trend to note." The standardised effect sizes in Figure 28 are shown only on a chart (axis -0.05 to 0.20); the report text does not print the coefficients, so exact magnitudes are not given here.

**metric_layer**

Input/usage: AI adoption factor (reliance, trust, reflexive use), time with AI, task use, interaction mode. Activity/perceived output: individual effectiveness (self-assessed; called "productivity" in 2024), valuable work, perceived productivity and code quality. Delivery: software delivery throughput (lead time, deployment frequency, failed deployment recovery time) and instability (change fail rate, rework rate), both self-reported in the survey. Quality: code quality, product performance. Organisational: organizational performance (self-reported profitability, market share, customer satisfaction). Wellbeing: burnout, friction. No direct financial outcome is measured.

**respondent_role_split**

Not given for the AI findings. The report publishes the role distribution of respondents (full-stack 15.0%, engineering manager 9.3%, back-end 9.3%, senior executive 4.2%, etc.) but does not split adoption, productivity or trust figures by IC, manager or executive. The adoption measure was deliberately designed so it "shouldn't be biased toward any single role".

**workload_signal**

Median two hours a day interacting with AI. No relationship between AI adoption and burnout or friction. On friction: "For an individual, friction doesn't vanish so much as move: It shifts from manual grind to deciding and verifying, possibly in the form of prompt iteration, result vetting, and assessing code that looks remarkably similar to correct code." On intensification: "some clear signals are emerging from our qualitative work which are aligned with literature on work intensification, suggesting perceived capacity gains from AI-assisted development tools have invited higher expectations of work output in some organizations." Interviewee: "Stakeholders are expecting more work to be done within [the product] in a quicker manner. So deadlines and projects are on a shorter time crunch". Pressure to adopt: 2024 interviewees described "fear of missing out" and "getting left behind". No hours-worked or time-correcting-AI figures.

**definition_of_value_offered**

Partly. The report frames value as organisational, not tool-level: "The greatest returns on AI investment come not from the tools themselves, but from a strategic focus on the underlying organizational system." It measures value across ten outcomes (above) and warns that "Widespread adoption doesn't automatically equal widespread value." The Metrics frameworks chapter tells organisations to define the goals and decisions measurement will inform, pick a framework (SPACE, DevEx, HEART, DORA delivery metrics), add AI-specific measures such as suggestion acceptance rate and trust while keeping existing baselines, and follow Plan-Do-Check-Adjust. It does not define ROI or financial payback. Closing line: "The greatest risk in this evolving landscape isn't falling behind, but rather investing heavily in chaotic activity that fails to deliver meaningful results."

**removal_counterfactual**

No direct evidence. All findings are between-person comparisons of higher vs lower AI adoption at one point in time. The ownership analysis compares AI vs no-AI responses ("78% certainty that AI adoption is not associated with developers feeling a diminished sense of personal ownership"). The report cites the METR RCT (19% slower, believed 20% faster) as evidence of a perception gap, but runs no withdrawal or control-group study.

**key_quotes**

1) "AI doesn't fix a team; it amplifies what's already there." (Google Cloud blog, 24 Sep 2025) 2) "instability still has significant detrimental effects on crucial outcomes like product performance and burnout, which can ultimately negate any perceived gains in throughput." (report, p. 41)

### caveats

**access**

Primary opened in full but read selectively: the 142-page PDF (v. 2025.2) was downloaded and text-extracted; I read the executive summary, foreword, AI adoption and use, Exploring AI's relationship to key outcomes, sociocognitive impact, Metrics frameworks, Final thoughts, and parts of Demographics and Methodology. Not read in full: DORA AI Capabilities Model, Platform engineering, Value stream management, The AI mirror, and the research model chapters. Landing page and Google Cloud blog post opened in full (blog quotes checked against raw HTML). Not verified: the DORA 2024 report figures and METR study figures it restates.

### Uncertain fields (omitted)

- caveats

## DORA ROI of AI assisted development 2026

### basic_info

**source**

"The ROI of AI-assisted Software Development" (report version v. 2026.1, 60 pages). Publisher: DORA (Google Cloud), a joint effort with Google Cloud's delta consulting practice. Authors listed: Eva Dong, Andre Ellis Jr., Nathen Harvey, Vivian Hu, Ursula Löbbert-Passing, Eric Maxwell, Aaron Wanjala. Date: PDF created 22 April 2026; landing page says "Last updated: April 22, 2026"; report says "Unless otherwise noted, all citations retrieved February, 2026." URLs opened: https://dora.dev/ai/roi/report (landing page) and https://services.google.com/fh/files/misc/dora-roi-of-ai-assisted-software-development-2026.pdf (full PDF). The PDF states the licence as CC BY-NC-SA 4.0.

**data_type**

Model. A financial framework plus a sample ROI calculator with assumed inputs. No new data collection; it borrows the direction of effects from the DORA 2025 State of AI-assisted Software Development survey and cites market studies (several from Google Cloud).

**sample_and_method**

No sample of its own. The method is a one-year ROI model: ROI (%) = (Value - Investment) / Investment. Value = headcount reinvestment capacity + revenue from extra feature deployments + revenue or costs avoided by reducing downtime. Investment = direct hard costs (licences, extra AI/token costs, training, infrastructure) + a J-Curve cost (staff size x salary x productivity drop x duration/12). The worked example uses a hypothetical organisation: 500 technical FTE, $176,000 fully loaded salary, $100M portfolio revenue, $100k cost of downtime per hour, 50 deployments and 50 features a year rising to 56 (a 12% increase), 33% idea success rate, 0.5% revenue impact per successful feature, change failure rate rising from 5% to 6%, 4-hour failed deployment recovery time, 12.5% net time saved per developer, $250 licence + $80 extra AI costs + $9,600 training per user, $100,000 infrastructure, a 15% J-Curve drop lasting three months. Effect directions come from the DORA 2025 survey (4,867 respondents, fieldwork June 13 to July 21, 2025, per that report). The report calls its own numbers "a high-uncertainty estimate meant to spark a conversation, rather than a rigid mathematical formula."

**vendor_interest**

Yes. Google Cloud sells AI models, AI tooling and cloud infrastructure, and the report advertises Google Cloud Consulting's delta team ("Reach out to us to go beyond the calculator") and cites Google Cloud customer ROI figures. DORA is a Google Cloud programme.

### findings

**metric_layer**

Covers every layer and is explicit about the chain between them. Input/usage: AI adoption, licence and token costs. Capabilities: the seven DORA AI Capabilities (the report says "AI adoption needs to be underpinned by capabilities in order to improve DORA key metrics"). Delivery: throughput (lead time, deployment frequency, failed deployment recovery time) and instability (change failure rate, rework). Non-financial value: productivity, developer experience, user experience, which it calls leading indicators. Financial outcome: cost savings (framed as cost avoided, i.e. not hiring) and revenue, which it calls lagging indicators. It also proposes experiment frequency and deployment frequency as leading metrics and change failure rate and rework as a "stability gauge".

**respondent_role_split**

None. The report has no respondents of its own and gives no figures by IC, manager, director or executive. The calculator's staff count covers "all roles that may use AI", including product managers, engineers, designers, tech leads and SREs.

**workload_signal**

Strong qualitative signal, no measured hours. The "verification tax": "Developers invest time reviewing generated code due to concerns about the trustworthiness of output and hallucinations. Furthermore, the tools increase the sheer volume of code produced, which expands the overall review burden." Restating DORA 2025: "burnout remains stubbornly resistant to purely technological solutions" and "AI does not necessarily make friction vanish; rather, the friction moves." The J-Curve dip is modelled as an assumed 15% capacity loss for three months. On headcount: "We strongly recommend organizations do not adopt a headcount-reduction strategy, which has a negative impact on morale and organizational culture, can reduce efficiencies, and can even incentivize workers to not improve their work processes." No figures on pressure to use AI.

**definition_of_value_offered**

Yes, in detail. Paying off means first-year ROI and payback period computed from a value model that runs left to right: AI adoption, underpinned by capabilities, improves DORA delivery metrics; those show up first as non-financial value (productivity, developer experience, user experience) and later as revenue or cost. Value = headcount reinvestment capacity (staff x salary x net time saved, explicitly cost avoided, not payroll cut) + revenue from extra successful features + revenue or costs avoided through less downtime, which can be negative (the "instability tax"). Investment includes a J-Curve "tuition cost" as well as licences, tokens, training and infrastructure. It warns against double counting the same saved hour and admits the levers differ in "solidity": "Tying an increase in deployments to a revenue lift is speculative and may be challenged by a CFO." It recommends scenario multipliers (conservative 0.8 value / 1.5 cost; optimistic 1.2 value / 0.8 cost). Framing line: "We don't measure AI by the code it writes but by the bottlenecks it clears." Its five-pillar value framework (cost efficiency, productivity, developer experience, user experience, business growth) is adapted from Google Cloud's FinOps value framework.

**removal_counterfactual**

None. The report offers no evidence on what happens when tools are withdrawn. It stresses the need for a pre-adoption baseline instead: "it is difficult to measure the direct impact of AI without an understanding of 'before.' Do you have a baseline?"

**key_quotes**

1) "We don't measure AI by the code it writes but by the bottlenecks it clears." 2) "Think of this dip as the tuition cost of transformation."

### caveats

**access**

Primary opened in full: the 60-page PDF (v. 2026.1) was downloaded and read end to end as extracted text, and the landing page was opened. Not opened: the interactive calculator at dora.dev/ai/roi/calculator, the errata page, and every secondary source the report cites (Google Cloud ROI of AI 2025, MIT NANDA, Stanford AI Index, Stanford SE productivity research, Google Cloud 727% study, Howdy.com salary figure). Figure 5 (the value model diagram) is an image; its content is known only from the surrounding text.

### Uncertain fields (omitted)

- caveats
- headline_figures

## DORA tokenmaxxing

### basic_info

**source**

"Finding balance in the era of tokenmaxxing", DORA Insights (dora.dev, a Google Cloud programme), by Evan Conaway, 2 June 2026 (page says "Last updated: June 2, 2026"). URL opened: https://dora.dev/insights/finding-balance-in-the-era-of-tokenmaxxing/

**data_type**

Commentary / opinion piece. No new data. It cites one DORA survey figure and otherwise relies on 11 press, blog and podcast references (accessed May 4 to June 1, 2026).

**sample_and_method**

No sample or method. An argument from DORA's prior research (vanity metrics, SPACE, Goodhart's Law) plus press reports. The one statistic, ~30% low trust, comes from the DORA 2025 survey (4,867 respondents, June 13 to July 21, 2025).

**vendor_interest**

Indirect but real. DORA is run by Google Cloud, which sells AI models priced by the token; the post nonetheless argues against maximising token use. The page carries a banner for the DORA ROI of AI-assisted Software Development report and promotes the DORA AI Capabilities Model.

### findings

**metric_layer**

Input/usage. The post's core point is that token consumption is an input metric: "Because raw token count is purely a measure of input, it is incredibly easy to game, making it a vanity metric that is essentially just for show." It recommends moving to delivery and quality outcomes (DORA metrics, incident resolution, cost per accepted change, code rework rate) and mentions Salesforce's Agentic Work Units as an output-layer alternative.

**respondent_role_split**

None given.

**removal_counterfactual**

None.

**key_quotes**

1) "At DORA, we believe company-wide aggregates are meaningless, and individual scores are harmful." 2) "Because raw token count is purely a measure of input, it is incredibly easy to game, making it a vanity metric that is essentially just for show."

### caveats

**caveats**

Opinion piece with no original data. Company examples and behavioural anecdotes are relayed from press and newsletters (WSJ, TechCrunch, Pragmatic Engineer, Axios, Medium, Substack, podcasts) and phrased as "we have seen reports" / "we have heard reports". The 10x cost figure is unsourced beyond a Medium post. The ~30% trust figure is reported as "developers" while the DORA report's denominator is all survey respondents, which includes managers and executives. Meta and Amazon, mentioned in the research brief, do not appear in the post.

**access**

Primary opened in full (the post's HTML downloaded and read in full). None of the 11 cited references were opened, so all company case details (Salesforce, Shopify, Starburst) and the Masood 10x claim are unverified against their own sources. The ~30% figure was checked against the DORA 2025 report PDF.

### Uncertain fields (omitted)

- definition_of_value_offered
- headline_figures
- workload_signal

## Faros 2026 and CircleCI 2026

### basic_info

**source**

(1) Faros, 'AI Engineering Report 2026: The Acceleration Whiplash' (PDF, 'This version of the report reflects analysis as of March 2026'; landing page labels it 'AI ENGINEERING REPORT Q2 2026'). Opened landing page https://www.faros.ai/research/ai-acceleration-whiplash and the full PDF https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf . No named individual authors. (2) Ron Powell and Jacob Schmitt, '5 key takeaways from the 2026 State of Software Delivery', CircleCI blog, Feb 18, 2026. Opened: https://circleci.com/blog/five-takeaways-2026-software-delivery-report/ . Full report 'The 2026 State of Software Delivery' (CircleCI, sponsored by Thoughtworks per the blog; authors Ron Powell, Jacob Schmitt). Opened: https://circleci.com/landing-pages/assets/2026-state-of-software-delivery-report.pdf . (3) Critique: Rob Bowley, 'More code, less delivery but does the CircleCI 2026 Report really show 1 in 20 teams are benefiting?', blog.robbowley.net, April 2, 2026. Opened: https://blog.robbowley.net/2026/04/02/more-code-less-delivery-but-does-the-circleci-2026-report-really-show-1-in-20-teams-are-benefiting/

**data_type**

Telemetry from both vendors, observational and correlational. Faros: within-team comparison of low vs high AI adoption quarters. CircleCI: CI/CD pipeline run data, year-on-year comparison; no direct measure of AI use.

**sample_and_method**

Faros: 'two years of data from 22,000 developers and 4,000 teams across the Faros platform' (customers; 'Organizations running on non-standard infrastructure were excluded'). Telemetry 'aggregated from task management systems, IDEs, static code analysis tools, CI/CD pipelines, version control systems, incident management systems, and HR system metadata.' Method: metrics standardised per company; Spearman's rank correlation with AI usage; only metrics 'with data from at least 6 companies and statistically significant correlations (p-value < 0.05)'; for each team, percent change between 'the two quarters of lowest AI adoption and the two quarters of highest AI adoption'; focus on teams moving above the 50% weekly-active-user threshold. Deployment frequency and lead time come from only about 10% of the dataset. The 2025 comparison is to a different cross-section ('not a longitudinal panel'; prior dataset 'more than 10,000 developers and 1,255 teams'). CircleCI: '28,738,317 workflows', every day September 1 to 28, 2025, CircleCI projects with more than one contributor and workflows that ran at least 5 times; compared with the prior year's equivalent data; industry data from Clearbit. Teams are banded by throughput percentile (bottom 25%, median, top 25/10/5%).

**vendor_interest**

Yes, both. Faros sells an engineering-intelligence platform for AI spend, productivity and governance ('Track token spend, outcomes, and AI engineering efficiency'); the report closes recommending an 'AI harness' and 'context engine' and says deeper churn analysis 'is available to individual organizations ... using Faros.' CircleCI sells CI/CD and closes by pitching its 'autonomous validation' product as the fix for the bottleneck it describes. Each vendor's data points to the stage of the pipeline it sells into.

### findings

**headline_figures**

Faros PDF: 'Task completion is up 34%. Epics completed per developer are up 66%. Tasks involving code specifically have increased 210%.' / 'Bugs per developer are up 54%. The incidents-to-PR ratio has more than tripled. Median review time has increased 5X. 31% more PRs are merging without any review.' Throughput table (low to high AI adoption): '+33.7% task throughput per developer', '+66.2% epics completed per developer', '+16.2% PR merge rate per developer', '+210% tasks completed per team with an associated PR', '-11% deployments per week (measured by 10% of the dataset)', '+861% code churn (lines deleted to lines added per quarter, for merged code)'. Text: 'deployments per week are down 11.7%. More code is being written and merged, but it is not being released to production as frequently.' / 'For the organizations that instrument this, lead time has increased 480.4%... the specific figure should be treated directionally.' Quality: '+242.7% incidents per PR', '+57.9% monthly incidents', '+54% bugs per developer, up from +9% in our prior report', '+28.7% bugs per PR', '+12.6% percentage of reopened Jira tickets'. Complexity: '+51.3% average PR size'. Flow: '+225.2% average time a task spends in progress', '+441.5 median time in PR review' (percent). Adoption: '60% acceptance rate of AI-generated code (up from 20% in prior dataset)'. CircleCI blog: 'the average number of daily workflow runs increased 59% year over year'; 'The top 5% of teams nearly doubled their throughput, increasing daily workflow runs by 97%. The median team? Up just 4%, while the bottom quartile saw no measurable increase at all.'; 'For the median team, feature branch throughput increased 15%, but on the main branch, throughput fell by 7%.'; 'Main branch success rates dropped to 70.8%, the lowest in over five years'; '72 minutes to get back to green for the typical team, up 13% from last year.'; top 5%: 'main branch throughput increased 26% while feature branch activity grew 85%'; 'they represent fewer than 1 in 20 teams.' CircleCI PDF charts: median team all branches 4.3%, feature 15.2%, main -6.8%; p90 all 47.2%, feature 49.3%, main 1.0%; p95 all 96.8%, feature 85.1%, main 26.2%.

**metric_layer**

Faros covers input/usage (adoption, acceptance rate), activity/output (tasks, epics, PRs merged, PR size, churn), delivery (deployments per week, lead time, both from about 10% of teams), and quality (bugs, incidents, reopened tickets, unreviewed merges). CircleCI covers activity (workflow runs on all and feature branches), a delivery proxy (main-branch workflow runs, which are not deployments) and pipeline quality (main-branch success rate, time to recover). Neither measures financial outcomes; CircleCI's '250 additional hours' and '12 full-time engineers' are illustrative calculations, not observed costs.

**respondent_role_split**

Not applicable: telemetry, no respondents. Faros reports no role split, though it argues review load falls on senior engineers ('the tax falling on senior engineers'). This is interpretation, not a measured split. CircleCI splits by throughput band, company size, team size, industry and region, not by role.

**workload_signal**

Faros: '+67.4% daily PR contexts per developer', '+17.7% daily task contexts per developer', '+13.8% work restarts per developer', '+26% in-progress tasks with no PR or activity in the past 7 days'; median time to first PR review +156.6%, average time in PR review +199.6%. Faros says reviewers 'appear to be working harder to bring that code up to a standard it should have met before the PR was opened.' No hours, burnout or pressure measures. CircleCI: recovery time 72 minutes, up 13%; feature-branch MTTR up 25%, 'from 64 minutes in 2024 to nearly 80 minutes in 2025'. Its hours lost and 'higher burnout' are asserted or modelled, not measured.

**definition_of_value_offered**

Partly, in both cases. Faros treats epics completed as 'the single finding most directly tied to business outcomes' and says 'Throughput measures what was shipped, not what survived. Code churn is the asterisk on every output number in this section.' Its recommendations ask leaders to track incident-to-PR ratio, monthly incidents normalised to lines changed, PR size, work restarts and churn, net of quality. CircleCI defines success as shipped changes, not code written: 'success in the AI era isn't determined by how fast code gets written. It's determined by how fast it can be validated, integrated, and recovered.' It uses main-branch throughput as the delivery measure. Bowley sharpens this: 'Throughput should be an end-to-end metric... The only meaningful "throughput" measure is against the main branch.' None defines a financial return or a threshold for 'paying off'.

**removal_counterfactual**

None directly. Faros compares each team's lowest and highest AI-adoption quarters, which is a within-team before/after on adoption, not tool removal. CircleCI compares year on year with no AI/no-AI split.

**key_quotes**

1. 'Throughput measures what was shipped, not what survived.' (Faros, The Acceleration Whiplash, 2026). 2. 'Writing code is no longer the constraint. Review, validation, integration, recovery.' (CircleCI blog, Feb 18, 2026).

### caveats

**caveats**

Both are vendor telemetry, observational and correlational; neither isolates AI as the cause. Faros says 'Correlation, not coincidence' on its landing page, but its method is correlational (Spearman, p<0.05), and it admits churn 'cannot resolve the ambiguity' (rework vs productive refactoring). Faros's 2026 data does not show flat delivery overall: epics per developer rose 66.2% and PR merges 16.2%, while deployments fell 11.7% and lead time rose 480.4%, both from only about 10% of teams and with 'High variance'. The 'activity up, delivery flat' framing fits CircleCI (median main branch -6.8%) better than Faros. Faros landing-page figures are rounded or differ from the PDF ('+28% Bugs per PR' vs 28.7%; '10X Code Churn' vs +861%, which the PDF calls '9.6 times'). Its comparisons with the 2025 report are 'directional' because the samples differ. CircleCI never measures AI use. Its blog heading 'AI-generated code breaks more often' attributes pipeline failures to AI without evidence in the data. CircleCI's blog says top-10% main-branch throughput 'increased only 1%'; the PDF says 'essentially flat' (1.0%). Bowley's critique: CI pipeline runs are 'not production deployments, it is not features shipped'; the top 5% have an odd average pipeline duration of '6 seconds' (he suggests 'an error in the report'). The PDF summary table (p.24) does show Top 5% duration '6s', and also top-5% mean time to recovery '1m 36s', against an average of '26h 32m 21s'; one team running about 130,000 workflows a day (the PDF shows #1 at 135,888) could skew aggregates. Bowley also writes 'Average teams are up 4%' where CircleCI says median, and 'top 10% ... aggregated throughput up nearly 50%' where the PDF shows 47.2% all-branch and 49.3% feature-branch. The CircleCI figures are a single 28-day window compared with a prior year.

**access**

Opened in full: Faros landing page and PDF; CircleCI blog and 27-page report PDF (text extracted with pdftotext; the p.24 summary table is an image and was read by rendering the page, confirming Top 5% duration '6s'); Bowley's post. Not verified: the Thoughtworks sponsorship rests on the CircleCI blog only; Faros appendix charts are images and were not read; the Faros 2025 report (source of earlier 'delivery flat' claims) was not opened in this task.

## GitClear AI code quality 2025

### basic_info

**source**

(1) GitClear, 'AI Copilot Code Quality: Evaluating 2024's Increased Defect Rate with Data' ('211m lines of analyzed code + projections for 2025'), William Harding, Lead Researcher & CEO, Alloy.dev Research, 'Published January, 2025', version label 'GitClear AI Code Quality Research v2025.2.4 Beta' (from the cover image on the landing page). Opened landing page with abstract and chart: https://www.gitclear.com/ai_assistant_code_quality_2025_research . Full PDF is behind an email form and was NOT opened. (2) Follow-up: GitClear, 'The Maintainability Gap: AI Code Quality in 2026' (same content also published as 'Write-Only Mode: AI Code Quality in 2026'). Opened landing pages with abstract: https://www.gitclear.com/the_ai_code_quality_maintainability_gap and https://www.gitclear.com/write_only_mode_ai_research . Full PDF gated, not opened; no author or exact publication date shown on the pages opened.

**data_type**

Telemetry: commit and code-change line analysis (repository data), observational trend over time. No direct attribution of each line to AI.

**vendor_interest**

Yes. GitClear sells developer analytics, code review and code-quality measurement tools (Diff Delta, PR review, AI code-quality charts), and the 2026 page promotes 'Live-updating AI code-quality graphs' and 'measure structure, not (just) volume'. It does not sell an AI coding assistant. The reports are lead-generation assets gated behind a business email form.

### findings

**metric_layer**

Quality and maintainability of code changes (activity/output layer, structural quality): duplication, copy/paste, moved (refactored) lines, churn, cross-file calls, legacy updates, error-masking. No usage, delivery or financial outcome measures. The 2026 page mentions a separate January 2026 GitClear study on velocity (activity layer).

**respondent_role_split**

Not applicable: telemetry, no respondents. The 2026 page says the debt 'concentrates among developers who haven't recognized the failure modes', and its January 2026 study split heavy AI users from non-users ('heavy AI users out-produce non-users by 4–10x, but most of that gap pre-dated AI — compared to their past selves, heavy AI users enjoyed a more modest 25% velocity gain'). There is no IC/manager/executive split.

**workload_signal**

Indirect only. Duplication is framed as a future workload cost: 'when a developer changes one copy of a five-line block, they inherit the obligation to find and evaluate every sibling' (2026). Two-week churn up 15% (2026) suggests rework. Legacy maintenance down 74% implies deferred work. No hours, time correcting AI, pressure or burnout measured on the pages opened.

**definition_of_value_offered**

Yes, in maintainability terms. 2025 abstract: 'if you ask a Senior Developer "what would unlock your team's full potential?" their answer won't be "more code lines added." To retain high project velocity over years, research suggests that a DRY (Don't Repeat Yourself), modular approach to building is essential.' It asks how 'today's profusion of LLM-authored code is influencing the maintainability of tomorrow's systems.' 2026: the cost that matters is 'how expensive a codebase is to own in year three'; recommendations: '(1) budget for refactoring and legacy maintenance, (2) put a tripwire on duplicate blocks, (3) review for error-masking explicitly, (4) direct coaching where judgment is thinnest, (5) measure structure, not (just) volume.' It argues lines added or commit count is the wrong measure of payoff but gives no financial method.

**removal_counterfactual**

None. The comparison is pre-AI years (2020 to 2022) vs AI-influenced years (2023 onward), not tool removal. The 2026 page cites 2022 as 'the final year of Pre-AI', when a 'Coding on Copilot' report showed 'a 2x preference for refactor over redundant', as a historical baseline.

**key_quotes**

1. 'The throughput is real, but so is the debt it accrues' (GitClear, The Maintainability Gap, 2026). 2. 'The biggest risk isn't that AI writes code your team can't maintain. It's that it writes that code faster than ever, and the bill arrives when you can least afford it.' (GitClear, The Maintainability Gap, 2026).

### caveats

**caveats**

Correlation over time, not causation: the data shows trends during the years AI assistants spread, and the visible material does not attribute each duplicated block to AI. Industry-wide changes in the repo mix over time could also affect results. Duplication multiples conflict across GitClear's own write-ups and press coverage: '4x' (2025 landing page; matches the 2023 to 2024 chart rise), 'roughly 10x over two years' (2026 abstract; matches 2022 to 2024), and '8-fold' (LeadDev, secondary). Use the precise metric and years when citing. The 2026 page says refactoring moves are 'down 70%', but its own figures (21% in 2022 to 3.8% in 2026) imply about an 82% fall, and the 13% (2023) to 3.8% fall is about 71%, so the base year for the 70% is unclear. It also says 'eight' signals in one place and 'seven' in another. 2026 values are partial-year. The 2025 refactoring figure is phrased as moved lines 'associated with refactoring', a proxy. Vendor-produced, not peer reviewed, and the PDFs are gated.

### Uncertain fields (omitted)

- access
- headline_figures
- sample_and_method

## HBR AI intensifies work

### basic_info

**source**

Aruna Ranganathan and Xingqi Maggie Ye, 'AI Doesn't Reduce Work—It Intensifies It', Harvard Business Review (Digital Article), published February 9, 2026. Opened: https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it (full article body read from the page's embedded article data). Also opened: Laura Counts, 'Does AI Actually Free up Workers' Time?', UC Berkeley Research, February 18, 2026, https://vcresearch.berkeley.edu/node/29618 (Q&A with Ye).

**data_type**

Ethnography (in-person observation, internal communication channels, semi-structured interviews). Described by the authors as 'in-progress research'. No quantitative measures reported.

**sample_and_method**

One U.S.-based technology company 'with about 200 employees'. 'From April to December last year [2025], we studied how generative AI tools changed work habits at the tech company. We did this through in-person observation two days a week, tracking internal communication channels, and more than 40 in-depth interviews across engineering, product, design, research, and operations.' The Berkeley Q&A calls it an 'eight-month ethnography' with 'more than 40 semi-structured interviews across functional groups'; Ye attended meetings and everyday conversations. The company 'did not mandate AI use (though it did offer enterprise subscriptions to commercially available AI tools).' How the company or interviewees were recruited is not stated.

**vendor_interest**

No. Authors are UC Berkeley Haas academics; HBR is a management publisher that does not sell AI or measurement tooling. The studied company is unnamed.

### findings

**headline_figures**

No quantitative findings. The only figures are sample descriptors: 'In an eight-month study of how generative AI changed work habits at a U.S.-based technology company with about 200 employees, we found that employees worked at a faster pace, took on a broader scope of tasks, and extended work into more hours of the day, often without being asked to do so.' and 'more than 40 in-depth interviews across engineering, product, design, research, and operations.'

**metric_layer**

None measured numerically. Qualitative observation of work activity and workload (pace, scope, hours, multitasking). Touches quality only as a projected risk ('lower quality work'), not measured.

**respondent_role_split**

No numeric split. Qualitative role effects: 'Product managers and designers began writing code; researchers took on engineering tasks'; 'engineers, in turn, spent more time reviewing, correcting, and guiding AI-generated or AI-assisted work produced by colleagues', including coaching colleagues who were 'vibe-coding' and finishing partially complete pull requests. No manager/director/executive split.

**workload_signal**

Central to the piece. Three forms of intensification: task expansion (workers 'absorbed work that might previously have justified additional help or headcount'), blurred boundaries (prompting during lunch, meetings, a 'quick last prompt' before leaving; work spilling into evenings or early mornings; 'downtime no longer provided the same sense of recovery'), and more multitasking ('continual switching of attention, frequent checking of AI outputs, and a growing number of open tasks'). Engineers took on extra review and correction of colleagues' AI-assisted work, often informally in Slack or desk-side. Pressure came not from mandates but norms: 'this rhythm raised expectations for speed—not necessarily through explicit demands, but through what became visible and normalized'. 'Many workers noted that they were doing more at once—and feeling more pressure—than before they used AI'. Projected consequences: workload creep, cognitive fatigue, burnout, weakened decision-making, turnover.

**definition_of_value_offered**

Partly. The authors do not define a payoff metric, but warn that short-run output can mislead: 'What looks like higher productivity in the short run can mask silent workload creep and growing cognitive strain' and overwork can 'make it harder for organizations to distinguish genuine productivity gains from unsustainable intensity.' Their remedy is an 'AI practice': 'a set of intentional norms and routines that structure how AI is used, when it is appropriate to stop, and how work should and should not expand in response to newfound capability', built from intentional pauses (e.g. a decision pause requiring one counterargument and one link to organizational goals), sequencing (batching notifications, protecting focus windows) and human grounding. Implied definition: gains count only if sustainable and not bought with hidden extra load.

**removal_counterfactual**

None. No comparison group or period without AI tools; contrasts with pre-AI work are participants' retrospective accounts (e.g. tasks they 'would have outsourced, deferred, or avoided entirely in the past').

**key_quotes**

1. 'You had thought that maybe, oh, because you could be more productive with AI, then you save some time, you can work less. But then really, you don't work less. You just work the same amount or even more.' (engineer quoted in HBR) 2. 'Our findings suggest that without intention, AI makes it easier to do more—but harder to stop.' (authors, HBR). Note: both quotes contain em dashes or will need paraphrase/ellipsis for site style; quote 2's em dash is in the original.

### caveats

**caveats**

Single company of about 200 people, unnamed, U.S. tech sector; qualitative and in-progress, not peer reviewed at time of publication. No measures of hours, output or burnout; consequences such as burnout, turnover and lower quality are presented as risks ('can'), not observed outcomes. Causation inferred from interviews and observation. Some secondary coverage reports the sample as '40 workers' or 'about 200 employees' interchangeably; the primary says the company had about 200 employees and the authors did more than 40 interviews plus observation. The Berkeley Q&A dates Ye's affiliation as 'PhD 28'.

**access**

Primary opened in full: HBR article text was present in the page's embedded data (article is paywall-eligible; full body extracted and read). Berkeley summary opened in full. Not verified: any underlying working paper or interview data (none linked).

## Harness State of Engineering Excellence 2026

### basic_info

**source**

(1) Trevor Stuart (SVP and GM, Harness), 'We're measuring the gains and missing the costs', Harness blog, May 13, 2026 (page shows 'Last updated: 2026-10-09'). Opened: https://www.harness.io/blog/we-re-measuring-the-gains-and-missing-the-costs . (2) Harness press release 'Harness Report Reveals AI Has Outpaced How Engineering Organizations Measure Developer Productivity', San Francisco, May 13, 2026. Opened: https://www.harness.io/press-and-news/ai-has-outpaced-how-engineering-organizations-measure-developer-productivity . (3) The report itself, 'The State of Engineering Excellence 2026: AI Productivity Is Up. The Way We Measure It Is Falling Behind.' (Harness, 10-page PDF), linked from https://www.harness.io/state-of-engineering-excellence . Opened in full: https://cdn.prod.website-files.com/69e786e187c925d08ee02b90/6a3e278e99281bfdec295728_The%20State%20of%20Engineering%20Excellence%20report%202026_letter%20size%20(1).pdf

**data_type**

Survey (commissioned vendor survey, self-report). No telemetry.

**sample_and_method**

Press release, 'About the Research': 'This report is based on a survey of 700 software engineering practitioners and managers from large enterprises, commissioned by Harness and conducted by independent research firm Sapio Research in April 2026. The sample included 300 respondents from the United States and 100 each from the United Kingdom, India, France, and Germany.' The report PDF says 'we commissioned a survey of 700 engineering practitioners and their managers from large enterprises across the U.S., U.K., France, Germany, and India' but does not name Sapio or give fieldwork dates. Neither source gives the manager/practitioner split, recruitment method (presumably a panel), company-size threshold, question wording, or margin of error.

**vendor_interest**

Yes. Harness sells an AI software delivery platform and an engineering-measurement product, Software Engineering Insights (SEI). The blog closes by pitching new SEI capabilities that show 'how much of it is shipping, what the review and validation overhead actually looks like, and where AI spend is producing returns versus producing churn.' The findings point straight at the gap its product claims to fill.

### findings

**headline_figures**

Report PDF: '89% of engineering leaders say productivity metrics have improved since deploying AI.' / '81% say code review time has increased.' / 'When 81% of engineering leaders report that code review time has increased since deploying AI, that's not a footnote to the productivity story. It's a direct offset to it.' / '31% of a developer's day is now consumed by AI-related invisible work that appears in no metric.' / Top sources of AI friction: 'Reviewing AI code for accuracy 53%', 'Fixing subtle bugs from AI code 52%', 'Explaining AI code to teammates 48%', 'Context switching between tools 45%'. / 'the largest source of invisible overhead — reviewing AI-generated code — is only tracked by 38% of organizations.' / '94% say tech debt, validation time, and developer burnout are missing from their current metrics.' / 'And only 6% believe their current frameworks are sufficient to close that gap.' / '15% of Managers have no concerns.' '4% of Practitioners have no concerns.' / '54% fear individual performance evaluations based on AI data.' / Developers prioritise: 55% separating improvement data from performance data, 50% transparency about what is measured, 49% developer involvement in defining metrics. Press release only (not in PDF): '89% of engineering leaders say developer productivity has improved since adopting AI coding tools, and 88% say developer satisfaction has improved.' / '81% say developers spend more time in code review since adopting AI coding tools, with 28% reporting a significant increase of more than 30%.' / '89% say their current metrics accurately reflect AI's impact, yet 94% say key factors, including tech debt, validation time, and developer burnout, are missing from those same metrics.' / biggest challenge: 'measuring true productivity impact (26%), maintaining code quality with AI (24%), and proving ROI to leadership (18%)' (this one is also in the landing page text) / '46% of respondents cite struggling with pressure to work faster than is sustainable, and the same share report privacy or surveillance concerns.' Blog: 'Managers, by contrast, show far greater comfort with these systems: they are nearly four times more likely than developers to report having no concerns at all.'

**metric_layer**

Mostly input/usage and perceived activity/output (leader-reported productivity and satisfaction), plus self-reported workload overhead (review time, share of day on invisible AI work) and what measurement systems capture. Delivery is discussed as a recommendation ('Know your ship rate') and an anecdote, not measured. Quality appears only as reported friction and as a factor missing from metrics. No financial outcome is measured; the blog's 'a 20% productivity improvement' to show a CFO is a hypothetical, and the report's '20% gain alongside an unmeasured 31% overhead' is an illustration, not a survey result.

**workload_signal**

81% say code review time has increased since deploying AI; press release adds 28% report a significant increase of more than 30%. 31% of a developer's day consumed by AI-related invisible work that appears in no metric. Friction: reviewing AI code 53%, fixing subtle bugs from AI code 52%, explaining AI code to teammates 48%, context switching 45%. Press release: 46% cite 'pressure to work faster than is sustainable'. Burnout is named only as a factor 94% say is missing from metrics. Blog gives anecdotes: 'a developer sitting with a pull request for 45 minutes because the AI-generated code is technically correct but written in a style nobody on the team recognizes', and debugging an edge case 'which takes longer to track down than writing the function would have.'

**definition_of_value_offered**

Partly. It argues for net rather than gross productivity and for shipped value over generated output. Blog: 'Most organizations can tell you how much AI code was accepted. Very few can tell you how much of it actually landed in production, and that's the number that matters.' Report: 'Organizations are measuring gross output. They are not measuring where the productivity gains are actually being spent.' Recommendations (report p.9): measure validation work alongside output (AI review time, debugging overhead, context-switching costs); 'Know your ship rate: Generating more code is not the same as shipping more value... AI increases code volume. It does not automatically increase delivery.'; treat measurement confidence as a risk signal; design for increasing complexity; build trust in first. Press release adds: track 'AI agent accuracy, acceptance, and cost separately from human developer output, with a shared definition of "good" across the organization.' It keeps DORA, cycle time and velocity ('These frameworks remain foundational') and proposes extending them. It does not define a financial ROI method or a threshold for 'paying off'.

**removal_counterfactual**

None. No data on teams without AI tools or after tool removal; all figures are 'since deploying AI' self-reports.

**key_quotes**

1. 'Organizations are measuring gross output. They are not measuring where the productivity gains are actually being spent.' (report PDF, p.4). 2. 'Most organizations can tell you how much AI code was accepted. Very few can tell you how much of it actually landed in production, and that's the number that matters.' (Trevor Stuart, Harness blog, 13 May 2026).

### caveats

**caveats**

Vendor-commissioned self-report survey; Harness sells the measurement product the findings argue for. No question wording, no manager/practitioner counts, no margin of error. Figures shift across Harness's own write-ups: the 89% is 'developer productivity has improved' in the blog and press release but 'productivity metrics have improved' in the PDF; the 31% is 'developers estimate' (blog), 'Organizations estimate' (press release) and an unattributed fact in the PDF, and is a perception of time, not measured time. The '89% say their current metrics accurately reflect AI's impact' figure appears in the blog and press release but not in the PDF. The 6% is 'think they're equipped to close them' (blog), 'believe the frameworks they have today can fix it' (press release), and 'believe their current frameworks are sufficient to close that gap' (PDF). The 20% productivity gain is illustrative, not a finding. The 89% and 94% coexisting may reflect different question framings rather than contradictory beliefs by the same people. Sample is large enterprises in five countries only.

**access**

Opened in full: the blog, the press release, and the 10-page report PDF (extracted with pdftotext). Not verified: question wording, role counts, and whether the 89%/81%/94% bases are leaders only or all 700 respondents (the press release and PDF/blog disagree in phrasing); the press-release-only figures (88%, 28%, 46%, 89% metrics accurate) are not in the PDF and rely on Harness's press release; no separate methodology appendix from Sapio Research was found.

### Uncertain fields (omitted)

- respondent_role_split

## LeadDev Berlin 2026 survey

### basic_info

**source**

Nathen Harvey, 'Engineering leaders can't prove AI is paying off', LeadDev, published 26 November 2026 (article:published_time 2026-11-26T07:52:11Z). Dek: 'What 165 engineering leaders told us at LeadDev Berlin 2026.' Opened in full: https://leaddev.com/leadership/engineering-leaders-cant-prove-ai-is-paying-off

**data_type**

Survey (voluntary, anonymous, self-report) of conference attendees, plus free-text respondent quotes.

**sample_and_method**

From the article's 'About the survey' note: '165 LeadDev Berlin attendees (November 9–10, 2026) took a voluntary, anonymous survey. Results describe this group, not the wider industry, and show association, not causation.' Body text: 'Most were engineering managers and directors.' Usage groups: heavy = 'a lot' or 'a great deal' (64%), moderate = 'a moderate amount' (30%), light = 'a little' or 'not at all' (7%); 'As the light group is small (11), comparisons are mainly heavy versus moderate.' Recruitment: conference attendees at the event; no further sampling method, response rate or exact role counts are given. Figure 3 says workload and trust differences are 'statistically confirmed' but no test or numbers are given in text.

**vendor_interest**

Indirect. LeadDev is a media and events company (sells conference tickets and sponsorship), not an AI tool vendor. The author bio says Nathen Harvey 'is a Principal Technologist on the Developer Experience team at AWS', and AWS sells AI developer tooling. The article promotes no product.

### findings

**headline_figures**

- 'That's what we heard from 165 LeadDev Berlin 2026 attendees in November. Most were engineering managers and directors. Nearly two-thirds (64%) say their team relies on AI "a lot" or "a great deal." Only 7% use it a little or not at all.'
- 'When we asked how teams measure the impact of AI, the most common answers described activity: delivery speed (52%) and adoption (45%). Business outcomes, such as revenue or customer satisfaction, came last at 20%.'
- 'When we asked what they find most rewarding about engineering work, helping their team succeed (34%) and delivering for customers (33%) far outranked pay or career growth (under 3% each).'
- 'Of the respondents who gave a view, 45% have little or no confidence that their team's measures are what senior leaders want. Only 20% are very or extremely confident.'
- 'One in four individual contributors don't know what their leaders want from AI. Not one director said the same.'
- 'Directors aren't immune: 40% have little or no confidence their own measures are what senior leaders want. However, not one said "I don't know."'
- 'Questions about whether AI is paying off rise with seniority, from 10% of individual contributors to 32% of directors. About one in five individual contributors and managers raised concerns about quality and risk. No director did.'
- 'Heavy AI users are far more likely to report heavier workloads and to trust AI output but not reliably to feel more productive.'
- 'About two-thirds of teams have officially committed to at least one change for 2027, most often to how they deliver software. Many are also "letting practices emerge through experimentation" (57%). Structural changes are rarer: only 16% plan new roles.'
- 'Half of heavy AI users have committed to two or more changes, compared with a quarter of moderate users. Moderate users were nearly three times as likely to be experimenting with no concrete commitment at all (31% vs. 11%). The samples are small here so you should treat these gaps as directional.'
- 'Only 53% of individual contributors say their team has committed to a change, compared with 73% of engineering managers.'

**metric_layer**

Reports which layers teams measure: activity/delivery (delivery speed 52%) and input/usage (adoption 45%) dominate; financial/business outcome (revenue, customer satisfaction) is last at 20%. The survey itself measures self-reported perceptions (confidence in measures, workload, trust, felt productivity), not delivery or financial data. 'ROI came up more than anything else' when asked what leaders want.

**respondent_role_split**

Given for several items, as text (chart values for Figure 2 not transcribed): about one in four ICs don't know what leaders want vs no directors; 40% of directors have little or no confidence their measures match what senior leaders want, but none said 'I don't know'; questions about whether AI is paying off rise from 10% of ICs to 32% of directors; about one in five ICs and managers raised quality and risk concerns, no directors did; 53% of ICs vs 73% of engineering managers say their team has committed to a change. No executive tier is reported; per-role sample sizes are not given.

**workload_signal**

Strong. Heavy users are 'far more likely to report heavier workloads' (statistically confirmed per Figure 3) 'but not reliably to feel more productive' (productivity gap not statistically confirmed). 'Put simply: we can say with confidence that heavy users are working more. We can't say with confidence that they feel more productive.' Direction of causation unknown: 'Busy teams may reach for AI to cope, or AI may make it easier to take on more.' Author's hunch: load moves 'especially in review and verification'. Burnout quote from an engineering manager. Recommendation: 'Treat workload as a success measure. Check in on load explicitly, and make deciding what not to build part of planning.' No hours or time-correcting-AI figures.

**definition_of_value_offered**

Yes, as advice rather than a single definition. 'Name two or three business outcomes AI should move, such as faster time to customer value, fewer incidents, or lower cost per feature. Write them down and share them with the whole team, not just your peers.' 'Pair every activity metric with an outcome. Keep tracking AI-assisted pull requests, but put them next to your change failure rate. Keep reporting time saved, but check whether lead time to customer value actually drops. Attribution will be imperfect, so look for a consistent direction across several measures.' Also treat workload as a success measure and 'Put a date on your experiments. Pick a point in 2027 to review what you've learned, adopt what worked, stop what didn't'. Team questions include 'Would our current measures tell us if AI stopped helping?' and 'where did the time AI saved your team actually go?'

**removal_counterfactual**

No evidence. The article frames the question through a director's quote ('Would anyone notice if we stopped using AI tools?') and asks 'Would our current measures tell us if AI stopped helping?', but reports no data on teams without the tools. The light-use group (n=11) was too small for comparison. It says: 'None of this calls for slowing down. It calls for being more deliberate.'

**key_quotes**

- "Would anyone notice if we stopped using AI tools?" (a director of engineering and heavy AI user, quoted in the article)
- "We talk about efficiency but there is no [consensus] about what that is." (an engineering manager and heavy AI user, quoted in the article)

### caveats

**caveats**

Self-report from a convenience sample of 165 conference attendees, mostly managers and directors; the article itself says results describe this group, not the industry, and show association, not causation. Per-role subgroup sizes are not given, so role splits (e.g. 'not one director') may rest on small counts. The 45%/20% confidence figures are among respondents 'who gave a view', a denominator not stated. Commitment comparisons between heavy and moderate users are flagged by the author as directional only. The usage split (64/30/7) sums to 101% from rounding. The productivity difference by usage is explicitly not statistically confirmed. Author works at AWS. This is the only write-up; no conflicting figures found.

**access**

Primary opened in full (raw HTML of the LeadDev page, full body text read). Not verified: exact values plotted in Figures 1-3 (images; only figures stated in text are used), the statistical method behind 'statistically confirmed', per-role counts, and the survey instrument. No separate survey report or dataset was linked.

## LeadDev Multitudes struggle to prove

### basic_info

**source**

(1) Michael Hill (LeadDev Managing Editor), 'The struggle to prove AI productivity gains', LeadDev, 25 March 2026. Opened in full: https://leaddev.com/ai/the-struggle-to-prove-ai-productivity-gains. Note: the article is by Michael Hill and reports on Multitudes; it is not authored by Multitudes. (2) Primary: Lauren Peate and Youxiang Lei, Multitudes, 'What matters most for embedding AI: How you adapt' (AI Impact Whitepaper 2, March 2026), 32-page PDF opened in full via https://www.multitudes.com/what-matters-most-for-embedding-ai-how-you-adapt (PDF: cdn.prod.website-files.com/.../AI Impact Whitepaper 2 - March 2026.pdf). (3) Also opened for the out-of-hours claim: Multitudes, 'What matters most for AI rollouts: How you lead' (Whitepaper 1), linked from https://www.multitudes.com/data-to-cut-through-the-hype.

**data_type**

Survey plus interviews (whitepaper 2: two surveys and 29 interviews; free-text answers coded with LLM-assisted thematic analysis reviewed by humans). Whitepaper 1 adds telemetry (500+ developers at 4 organisations). LeadDev piece is journalism with expert quotes.

**sample_and_method**

Whitepaper 2: 'Our survey dataset has 428 responses' (54% ICs, 46% leaders; 45% from orgs with 250+ engineers, 34% 20-249, 21% 1-19). Phase 1 deep-dive: 202 survey responses from four organisations, July-October 2025, plus 19 interviews Aug-Oct 2025. Phase 2 industry survey: 226 responses, October 2025-February 2026, plus 10 interviews March 2026. Overall programme: '500+ individual contributors (ICs) and 200+ engineering leaders' over 15 months (Jan 2025-Mar 2026). Organisations were a mix of Multitudes customers and non-customers (per the whitepaper 1 landing page). Recruitment method for the industry survey is not described beyond 'hundreds of organizations'. Crucially, the OKR and board-pressure figures come from the 226-response industry survey with small chart bases: outcomes wanted N=203; OKR metrics N=63; hard-to-measure N=47 (respondents with OKRs); board pressures N=75 leaders; managing pressures N=45 leaders. LeadDev's 'more than 700 engineering professionals' does not match the whitepaper's 428 survey responses (it appears to sum 500+ ICs and 200+ leaders across the whole programme).

**vendor_interest**

Yes. Multitudes is an 'engineering intelligence platform' that sells an 'AI impact feature' and an AI ROI calculator; the whitepaper pages carry a customer case study (Eucalyptus). LeadDev is a media and events company.

### findings

**metric_layer**

Measures what organisations track. Finding: AI OKRs, where they exist, sit at the input/usage and activity layers (AI adoption rates 71%, AI feature delivery 71%) more than delivery (velocity 44%, speed 37%). Desired outcomes are delivery and developer-experience goals (move faster, reduce tedious work, more features). Board pressure is mostly adoption (input layer) shifting toward outcomes, mainly productivity. Financial outcome ('Demonstrating ROI') appears only as a small theme in Figure 9 (value not stated in text). Whitepaper 1 measures delivery (merge frequency) and wellbeing (out-of-hours commits) from telemetry.

**respondent_role_split**

Partial. Sample split 54% ICs, 46% leaders. Board-pressure and managing-pressure questions were asked of leaders only (N = 75 and N = 45). Desired-outcomes question was asked of engineering leaders (N = 203 of 226). Leaders are defined as 'Managers of ICs, Engineering Managers, Directors, Vice Presidents, and Executive or C-suite roles'; no split by manager vs director vs executive for the measurement figures. One IC/leader split elsewhere: ICs '4.7x more likely to cite lack of tool availability as a barrier (14% of ICs vs 3% of leaders)'.

**workload_signal**

Board pressure for productivity gains: one CTO quote, '[The board expects] a 50% productivity improvement across my team, but I'm not going to get that – so I need a quantification of what I am getting right now.' Whitepaper 1 telemetry: 'a 19.6% increase in out-of-hours commits. This means that developers were doing more work in evenings and weekends than they did before the AI rollout... It could be that 19.6% of the merge frequency increase is just from longer hours, which would leave just 7.6 percentage points of change that could be explained by the AI tooling itself.' Multitudes stresses these are 'relational rather than causal'. LeadDev paraphrases Peate: 'AI rollouts are bringing more out-of-hours work, so teams should track this as an indicator of the human impact.'

**definition_of_value_offered**

Yes. Whitepaper 2 recommendations: choose good-enough metrics tied to the 'why' for AI; 'Done is better than perfect: Choose good-enough metrics, and then focus on trends over time. Looking at the change in metrics before versus after interventions is also a good way to tease out the impact of your actions instead of confounding factors'; 'Boards are starting to shift their focus from AI adoption to AI outcomes – get ahead by looking at outcome metrics now'; use metrics to manage up. Suggests change lead time (move faster), developer experience (reduce tedious work) and velocity (more features) as matching metrics. In LeadDev, Peate names four buckets: 'AI usage data, customer value delivered, customer pain created, and the impact on human engineers' (tokens, lines accepted, cost, intervention dates; features or fallback PRs/tickets; incidents and bug reports with leading indicators; out-of-hours work). LinkedIn's Krishnan Sridhar: 'Ultimately, the most important question is whether teams are delivering on their roadmaps faster and with confidence.'

**removal_counterfactual**

None directly. The nearest is Whitepaper 1's before/after comparison around AI rollouts (27.2% more PRs merged, 19.6% more out-of-hours commits), which Multitudes says is relational, not causal. LeadDev mentions comparing high vs low AI adopters and before/after experiments as methods, not results.

**key_quotes**

- "[The board expects] a 50% productivity improvement across my team, but I'm not going to get that – so I need a quantification of what I am getting right now." (CTO, Multitudes whitepaper 2)
- "Before, they wanted to know we were doing something. What it's started to turn into is the expectation of something coming out the other side." (CTO, Multitudes whitepaper 2)

### caveats

**access**

LeadDev article opened in full. Multitudes Whitepaper 2 PDF (32 pages) opened in full as text; chart bar values not visible as text, so only figures stated in prose are used. Whitepaper 1 PDF opened and searched for the out-of-hours passage only (not read end to end). Not opened: LeadDev AI Impact Report 2025 (the 98%/60% figures).

### Uncertain fields (omitted)

- caveats
- headline_figures

## METR RCT and uplift update

### basic_info

**source**

(1) Joel Becker, Nate Rush, Elizabeth Barnes, David Rein, 'Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity', arXiv:2507.09089 (v1 12 Jul 2025, v2 25 Jul 2025), METR. Opened: https://arxiv.org/abs/2507.09089 and full text https://arxiv.org/html/2507.09089v2. (2) Joel Becker, Nate Rush, Tom Cunningham, David Rein, Khalid Mahamud, 'We are Changing our Developer Productivity Experiment Design', METR blog, February 24, 2026. Opened: https://metr.org/blog/2026-02-24-uplift-update/

**data_type**

RCT (task-level randomisation, self-reported task times plus screen recordings) for the 2025 paper; the 2026 update reports raw results of a second task-randomised RCT plus participant surveys and interviews.

**sample_and_method**

2025 paper: 16 experienced open-source developers 'with moderate AI experience' completed 246 tasks in mature projects where they averaged 5 years of prior experience (about 1,500 commits each to the repo). Repositories averaged 23,000 stars and 1,100,000 lines of code. Recruited from METR's professional networks and outreach to active contributors to large GitHub repos; paid $150/hour. Developers pre-specified issues, each issue randomly assigned AI-allowed or AI-disallowed; tools mostly Cursor Pro with Claude 3.5/3.7 Sonnet; fieldwork February to June 2025. Screen recordings collected; 128 recordings (143 hours) labelled at fine grain, with a filtered subset of 74 issues used for activity analysis. 2026 update: second study started August 2025 with 10 developers from the original study plus 47 new developers from 'a more diverse set of open-source projects' (smaller, more greenfield, less mature repos), median 10 years experience, paid $50/hour; 'We have data from 57 developers, across 143 repos, and 800+ tasks.'

**vendor_interest**

No. METR is a nonprofit studying frontier AI agents and does not sell AI or measurement tooling. Its stated interest is AI R&D acceleration and risk. The 2025 study provided Cursor Pro subscriptions but was not vendor funded as far as the pages state.

### findings

**headline_figures**

2025 abstract: 'Before starting tasks, developers forecast that allowing AI will reduce completion time by 24%. After completing the study, developers estimate that allowing AI reduced completion time by 20%. Surprisingly, we find that allowing AI actually increases completion time by 19%--AI tooling slowed developers down. This slowdown also contradicts predictions from experts in economics (39% shorter) and ML (38% shorter).' Paper factor table: 'Developers accept 44% of AI generations' and '9% of time spent reviewing/cleaning AI outputs'. Paper: 'developers write 47% (p = 0.16) more code per hour of AI-disallowed forecasts, on issues where AI is allowed. This is not statistically significant'. 2026 update: 'Our early 2025 study found the use of AI causes tasks to take 19% longer, with a confidence interval between +2% and +39%. For the subset of the original developers who participated in the later study, we now estimate a speedup of -18% with a confidence interval between -38% and +9%. Among newly-recruited developers the estimated speedup is -4%, with a confidence interval between -15% and +9%.' (In METR's sign convention here a negative figure means less time taken, i.e. a speedup.) 'When surveyed, 30% to 50% of developers told us that they were choosing not to submit some tasks because they did not want to do them without AI.'

**metric_layer**

Activity/output at task level: wall-clock time to complete a developer-defined issue (self-reported time, checked against screen recordings), plus perceived speedup (forecast and post-hoc self-estimate). Some input/usage data (Cursor accepted lines, activity labels). Quality is held roughly constant by repository review standards but not measured as an outcome; no delivery or financial layer.

**respondent_role_split**

Not applicable. All participants are individual open-source contributors (ICs); no manager, director or executive split. The 2026 update splits only by returning (original) versus newly recruited developers.

**workload_signal**

2025 paper: with AI allowed, developers spent less time actively coding and reading, and more time 'reviewing AI outputs, prompting AI systems, and waiting for AI generations', plus 'a somewhat higher proportion of their time idle'; 9% of time spent reviewing/cleaning AI outputs; majority reported making major changes to clean up AI code. 2026 update: developers using agents 'would often work an unrelated task while waiting for the agent to complete its work', making time-spent hard to report; one developer described working without AI as 'trying to get across the city walking when all of a sudden I was more used to taking an Uber.' No hours, burnout or pressure-to-use measures.

**definition_of_value_offered**

Implicitly yes: value is defined as reduction in time to complete a fixed, pre-specified real task with quality held to the repository's normal bar, measured by randomisation rather than self-report. The paper's design rationale is that self-reported and forecast speedups are unreliable (devs believed 20% faster while measured 19% slower). The 2026 update argues this measure is now 'likely a bad proxy for the real productivity impact' because task selection, task-type substitution and quality differences mean 'the time-differences within the study may not represent value-differences'. It lists alternatives: shorter intensive experiments, observational data, questionnaires with time-use studies, fixed-task experiments, agent evals, and developer-level randomisation.

**removal_counterfactual**

The AI-disallowed arm is a removal condition. In 2025 removing AI made tasks faster on average (AI-allowed took 19% longer). By 2026 the removal condition itself drove attrition: 'developers choosing not to participate in the study because they do not wish to work without AI'; 'An increased share of developers say they would not want to do 50% of their work without AI'; '30% to 50% of developers told us that they were choosing not to submit some tasks because they did not want to do them without AI. This implies we are systematically missing tasks which have high expected uplift from AI.' Also: 'Some developers were less likely to complete tasks that they submitted if they were assigned to the AI-disallowed condition. One developer did not complete any of the tasks that were assigned to the AI-disallowed condition.' METR concludes its estimate is 'a lower-bound on the true productivity effects' but its data 'is only very weak evidence for the size of this increase.'

**key_quotes**

1. 'Surprisingly, we find that allowing AI actually increases completion time by 19%--AI tooling slowed developers down.' (arXiv abstract) 2. 'I avoid issues like AI can finish things in just 2 hours, but I have to spend 20 hours. I will feel so painful if the task is decided as AI-disallowed.' (developer quoted in METR 2026 update)

### caveats

**caveats**

Small 2025 sample (16 developers) of highly experienced devs in large mature repos; paper explicitly says it does not show AI fails to speed up most developers. 2026 raw estimates have confidence intervals crossing zero and are biased by selection (developer opt-out, task withholding, pay cut from $150 to $50/hour, multi-agent time-tracking problems, task substitution, quality differences). Withholding figure (30% to 50%) is survey self-report. Figure conflict within the 2026 post itself: its opening sentence says the earlier paper 'found the use of AI tools caused a 20% slowdown', while later the same post and the paper abstract say 19% longer; 19% is the paper's figure (20% is the developers' post-hoc perceived speedup). Self-reported speedups described by METR as 'quite unreliable'.

**access**

Primary sources opened in full: arXiv abstract page, arXiv HTML full text v2 (searched for specific passages, not read line by line), and the full METR 2026 blog post. All quotes taken verbatim from downloaded page text. Not verified: the underlying datasets linked from the blog; the companion METR survey of 349 technical workers (only seen as a teaser on the page, not opened).

## Temporal State of Development 2026

### basic_info

**source**

Temporal Technologies, 'The State of Development Report 2026', dated August 25, 2026. No named individual author on the page. Opened in full via the Markdown version https://temporal.io/reports/state-of-development-2026.md (canonical page https://temporal.io/reports/state-of-development-2026). The linked PDF (downloads.ctfassets.net/.../The_State_of_Development_2026_-_Temporal.pdf) was not opened.

**data_type**

Survey (commissioned online panel via Qualtrics, self-report), with some free-text word-frequency charts.

**sample_and_method**

'Between April 29 to May 25, 2026 we commissioned the survey provider Qualtrics to solicit responses from 650 respondents currently using AI agents following strict criteria around role and location. We removed all responses we considered low quality and were left with 554 respondents.' Location: two-thirds US, one-third UK/EMEA. Roles: 'Engineer / AI engineer (25.6%), VP / director of IT (13.9%), data engineer (11.9%), DevOps/platform engineer, architect, data scientist, CEO / management'. Experience: 32.9% 6-10 years, 48.4% 11+ years. Company size: 251-1000 employees 29.2%, 51-250 22.7%, 1,001-5000 18.8%. Industry: software 37.5%. All respondents already use AI agents. The page's meta description says 550 and the intro says '500+'; the methodology and chart totals say 554. 'Successful' cohort is self-reported.

**vendor_interest**

Yes. Temporal sells a durable-execution/orchestration platform marketed for AI agents; the report ends with 'Develop AI agents 50% faster with an orchestrator...' and compares Temporal users with others.

### findings

**headline_figures**

- 'No surprise, though, some of this exuberance is driven by leadership: CEOs, management, VPs, and directors were 1.4x more likely to say their organization is ‘very successful’ (43.7% vs 32.4%).'
- Pull quote: 'Leadership is 35.1% more likely to say their organization is ‘very successful’ compared to the engineers.'
- Summary: '84.5% believe they are better than their competitors at using AI agents. This is somewhat driven by executives, who are 35.1% more likely than their teams to say this.'
- Chart 2.5, 'In your opinion, how successful is your company at using AI agents relative to peers?': Very successful 201 (36.3%), Somewhat successful 267 (48.2%), About the same 63 (11.4%), Somewhat less 11 (2%), Much less 8 (1.4%); total 554.
- 'A great majority of teams we polled think they’re in the 85th percentile of agent excellence which is, statistically, unlikely. (Possible, but unlikely.)'
- '91.1% say agents have ‘improved’ or ‘revolutionized’ their productivity' (Chart 2.1: Improved 72%, Revolutionized 19.1%, No impact 6.7%, Worsened 1.8%).
- 'A 70.8% leap in AI agent use: 80.8% use agents daily, up from 47.3% a year ago'
- 'Trust is high. One quarter (24.7%) completely trust the outputs. A majority (60.8%) at least somewhat trust. Only 4.0% distrust.'
- '41.1% encounter issues daily or more; 9.0% say “continuously”'
- '79.8% say token and compute cost is a limiting factor'
- '44.6% are less stressed than one year ago (the successful are much less stressed)'

**metric_layer**

Perception only: self-rated organisational success relative to peers, self-rated personal productivity, adoption frequency (input/usage), prototype-to-production time (self-reported delivery speed), trust, issue frequency, cost as a factor, stress. No measured delivery, quality or financial outcome data.

**respondent_role_split**

Yes for the key item: 'CEOs, management, VPs, and directors' 43.7% vs (engineers) 32.4% say their organisation is 'very successful' at using AI agents relative to peers. The report describes this as '1.4x more likely' and, in the pull quote, '35.1% more likely ... compared to the engineers'. Subgroup sizes are not given in the text. Most other splits are 'successful' vs 'everyone else' or Temporal users vs non-users, not by role.

**workload_signal**

Mixed. Stress vs one year ago: 14.1% much less, 30.5% slightly less, 22.7% same, 26.7% slightly more, 5.8% much more stressed. 'Respondents worry that no matter how much more efficient they grow, leadership will just keep raising expectations. People at successful companies are less likely to say this.' (no figure given). 'The more stressed the team, the more issues they encounter: 52.2% of those who are more stressed encounter agent issues daily, versus 32.4% of those who are less stressed.' Free-text on stress weighted 'reduces' highest, with 'workload' and 'increases' also present. No hours or time-correcting-AI figures; 'there is a difference between trusting enough to proceed and trusting enough to put your name on the commit.'

**definition_of_value_offered**

No. 'Successful' is self-rated relative to peers ('When we discuss those who are “successful at using AI agents,” that is self-reported data'). Productivity is self-rated ('improved'/'revolutionized'). The report does not define what paying off should mean or how to measure it; it frames success around solving state, debugging, cost and reliability (its product's area).

**removal_counterfactual**

None. All respondents currently use AI agents; no data on teams without them.

**key_quotes**

- "No surprise, though, some of this exuberance is driven by leadership: CEOs, management, VPs, and directors were 1.4x more likely to say their organization is ‘very successful’ (43.7% vs 32.4%)."
- "A great majority of teams we polled think they’re in the 85th percentile of agent excellence which is, statistically, unlikely."

### caveats

**caveats**

Vendor-commissioned panel survey of existing agent users only, so selection favours enthusiasts; self-report throughout, including the 'successful' cohort. Internal inconsistency on the headline ratio: 43.7/32.4 = 1.35, which the report calls both '1.4x more likely' and '35.1% more likely'; 1.35 rounds to 1.3x or 1.35x, not 1.4x. Safer to quote the raw percentages. The comparison group is labelled 'the engineers' in the pull quote but its exact membership (all non-leadership roles, or engineer titles only) is not defined; the summary calls it 'their teams'. Subgroup n not given, so no significance test is possible. Sample size stated variously as 550, 500+ and 554 (554 is the methodology figure). Note 32.4% also appears as an unrelated stress statistic in the same report; do not confuse them. The question asks about the company's success relative to peers, not whether AI paid off financially.

**access**

Primary opened in full (the report's official Markdown rendering on temporal.io, including methodology and chart tables). Not opened: the PDF version, so any PDF-only content or differences were not verified; leadership/engineer subgroup sizes not published in the page.
