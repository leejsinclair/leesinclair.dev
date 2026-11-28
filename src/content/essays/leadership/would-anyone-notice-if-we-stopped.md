---
title: "Would Anyone Notice If We Stopped?"
date: 2026-11-28
dek: "A survey of 165 people at LeadDev Berlin, mostly engineering managers and directors, found that most teams measure AI by speed and adoption, few measure it against business outcomes, and questions about whether it is paying off rise with seniority. The developers would notice if the tools went. Whether the business would is a question most measures cannot answer, and a team cannot choose better ones until its leaders say what paying off would look like."
tldr:
  summary: "In a November 2026 survey of LeadDev Berlin attendees, 64% said their team relies heavily on AI, but only 20% measure it against business outcomes, and questions about whether it is paying off rose from 10% of individual contributors to 32% of directors. Atlassian's 2026 survey found 60% of developers say their organisation treats AI use as a productivity signal, and 68% say greater use does not accurately reflect the value they deliver. Developers would notice if the tools went away. The business might not, unless someone has said in advance what the tools are for. I would name the outcomes first, pair every activity measure with one of them, count workload, and keep a baseline."
  points:
    - "LeadDev's Berlin survey is a voluntary sample of 165 conference attendees, mostly managers and directors. Teams mostly measure delivery speed (52%) and adoption (45%). Business outcomes came last at 20%."
    - "Atlassian's 2026 survey found 60% of developers say AI use is treated as a productivity signal, and 41% sometimes use it more than necessary because they feel expected to. Only 42% of leaders say they have metrics that separate real gains from activity."
    - "Developers would notice. In METR's February 2026 update, 30% to 50% said they held back some tasks because they did not want to do them without AI. That shows how much they want the tools, not what the business gets from them."
    - "Directors were the most doubtful group in Berlin, while Temporal's survey found senior people more confident than engineers. The questions differ. I read the Berlin result as directors being asked to show a return they are not sure they can show."
references:
  - "Harvey, N. (2026, November 26). Engineering leaders can't prove AI is paying off. LeadDev. https://leaddev.com/leadership/engineering-leaders-cant-prove-ai-is-paying-off. Read in full. A voluntary, anonymous survey of 165 LeadDev Berlin attendees on 9 and 10 November 2026. The chart values are images and only figures stated in the text are used. The author works at AWS."
  - "Atlassian. (2026). The State of Developer Experience in 2026. https://www.atlassian.com/teams/software-development/state-of-developer-experience-2026. Full PDF read (1,155 individual contributors and 405 leaders, self-reported, no fieldwork dates). Atlassian sells developer tooling and owns DX, a measurement product."
  - "Wiggers, S.-J. (2026, October 27). Developers reporting double-digit weekly time savings from AI fell from 68% to 26%. InfoQ. https://www.infoq.com/news/2026/10/atlassian-devex-2026/. Read in full."
  - "Conaway, E. (2026, June 2). Finding balance in the era of tokenmaxxing. DORA. https://dora.dev/insights/finding-balance-in-the-era-of-tokenmaxxing/. Read in full. Opinion, no new data."
  - "DORA. (2025). State of AI-assisted Software Development 2025 (v. 2025.2). Google Cloud. https://dora.dev/research/2025/dora-report/. Read in part: executive summary, adoption, outcomes and metrics chapters. 4,867 respondents, surveyed 13 June to 21 July 2025."
  - "Dong, E., Ellis, A., Jr., Harvey, N., Hu, V., Löbbert-Passing, U., Maxwell, E., & Wanjala, A. (2026, April 22). The ROI of AI-assisted Software Development (v. 2026.1). DORA and Google Cloud. https://dora.dev/ai/roi/report. Read in full, including the sample calculator in the appendix, where I checked the $11,000,000 headcount reinvestment and $11,646,000 total value figures. A model with assumed inputs, not a study."
  - "Becker, J., Rush, N., Barnes, E., & Rein, D. (2025). Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity. arXiv:2507.09089. Abstract and full text read."
  - "Becker, J., Rush, N., Cunningham, T., Rein, D., & Mahamud, K. (2026, February 24). We are Changing our Developer Productivity Experiment Design. METR. https://metr.org/blog/2026-02-24-uplift-update/. Read in full."
  - "Powell, R., & Schmitt, J. (2026). The 2026 State of Software Delivery. CircleCI. Report PDF and the blog post of 18 February 2026 read. 28.7 million workflows from September 2025. CircleCI does not measure AI use."
  - "Faros. (2026). AI Engineering Report 2026: The Acceleration Whiplash. https://www.faros.ai/research/ai-acceleration-whiplash. Full PDF read (analysis as of March 2026, 22,000 developers on the Faros platform). Faros sells engineering measurement."
  - "Ranganathan, A., & Ye, X. M. (2026, February 9). AI Doesn't Reduce Work, It Intensifies It. Harvard Business Review. Full text read. Eight months of observation at one US technology company of about 200 employees."
  - "Peate, L., & Lei, Y. (2026, March). What matters most for embedding AI: How you adapt (AI Impact Whitepaper 2). Multitudes. Full PDF read, along with the out-of-hours passage of Whitepaper 1. Multitudes sells AI impact measurement. LeadDev's coverage (Hill, M., 2026, March 25, The struggle to prove AI productivity gains) misstates the sample (more than 700 against the whitepaper's 428 survey responses) and some figures, so I use the whitepaper."
  - "Harness. (2026, May 13). The State of Engineering Excellence 2026. Report PDF, press release and Trevor Stuart's blog post read. 700 practitioners and managers at large enterprises, surveyed by Sapio Research in April 2026. Harness sells engineering measurement."
  - "Temporal Technologies. (2026, August 25). The State of Development Report 2026. https://temporal.io/reports/state-of-development-2026. Read in full in its Markdown version. 554 people already using AI agents."
---

In November LeadDev surveyed 165 people at its Berlin conference, most of them engineering managers and directors, about AI in their teams. The article that reports it opens with a question from a director of engineering who uses AI heavily: "Would anyone notice if we stopped using AI tools?"

It is a good question because it is easy to ask and hard to answer. Most teams I know could tell you how much they use AI. Far fewer could tell you what would change for a customer, or in the budget, if they stopped. The survey suggests that is common, and that the people most uneasy about it are the ones who will be asked to answer for the money.

My argument is short. A team cannot choose the right measure for AI until its leaders say what paying off would look like. Until then it measures what is easy to count, which is use.

A note on sources. Most of the figures below come from self-reported surveys, several run by companies that sell measurement tools, plus vendor telemetry and two METR trials, the first of them small. They show patterns, not cause and effect, and I flag the weaker ones where they come up.

## What the Berlin survey found

The survey was voluntary and anonymous, taken on 9 and 10 November 2026. Nathen Harvey, who wrote it up for LeadDev and works at AWS, says the results describe that group, not the industry. Treat it as one well-informed room.

Nearly two-thirds (64%) said their team relies on AI "a lot" or "a great deal". Only 7% use it a little or not at all. Asked how they measure its impact, the most common answers were delivery speed (52%) and adoption (45%). Business outcomes such as revenue or customer satisfaction came last, at 20%.

Of those who gave a view, 45% had little or no confidence that their team's measures were what senior leaders wanted, and 20% were very or extremely confident. When people were asked what their leaders did want, "ROI came up more than anything else". One engineering manager put the gap plainly: "We talk about efficiency but there is no [consensus] about what that is."

Two more findings matter here. Questions about whether AI is paying off rose with seniority, from 10% of individual contributors to 32% of directors. And heavy users were more likely to report heavier workloads, a difference the article calls statistically confirmed, without reliably feeling more productive. In Harvey's words: "we can say with confidence that heavy users are working more. We can't say with confidence that they feel more productive."

## Counting use

If you have not decided what AI is for, the obvious thing to measure is how much people use it. Atlassian's State of Developer Experience 2026, a survey of 1,155 developers and 405 leaders, shows where that leads.

Sixty percent of developers said AI use is treated as a productivity signal in their organisation. Forty-one percent said they sometimes use AI more than necessary because they feel expected to, and 68% said greater use does not accurately reflect the value they deliver. Leaders saw the risk too: 81% agreed that measuring AI use can create the wrong incentives, and 59% worried about performative use. Only 42% said they had the metrics to tell genuine gains from inflated activity.

The same report has developers saving 10 or more hours a week falling from 68% in 2025 to 26% in 2026. The two years used different samples, and the report's own 2026 figure shifts between 25% and 26% and between 10 and 11 hours, so I would not lean on the size of the drop. The direction is still worth noticing.

DORA's position on token counts is blunt. Evan Conaway wrote in June: "At DORA, we believe company-wide aggregates are meaningless, and individual scores are harmful." I covered the token leaderboards in [Overseeing Agents Is the Tiring Part](/leadership/overseeing-agents-is-the-tiring-part). The point here is simpler. Usage is an input. It tells you the tool is switched on.

## Why it is hard to tell from inside

The obvious fallback is to ask people whether AI helps, and that is not much better. In METR's 2025 trial, 16 experienced open-source developers working on mature projects they had contributed to for years expected AI to cut their task time by 24%, and afterwards estimated it had cut it by 20%. Measured, the tasks where AI was allowed took 19% longer.

That was early-2025 tooling and a small group. METR's later results lean towards a speedup, though METR calls them only very weak evidence and the confidence intervals include no effect. The lesson is the gap between what people felt and what was measured. DORA's 2025 survey, which records only the feeling, found more than 80% of 4,867 respondents believed AI had raised their productivity, with over 40% saying only slightly.

Telemetry has its own trap: activity is easy to mistake for delivery. Across 28.7 million CircleCI pipeline runs in September 2025, the median team's runs on feature branches were up about 15% year on year, and runs on the main branch were down about 7%. CircleCI does not measure AI use, so this shows more work in progress without more of it landing, not what caused it.

Faros, which sells measurement tools and reports correlations, not causes, compared each team's quarters of lowest and highest AI adoption across 22,000 developers. Epics completed per developer rose 66%, which Faros calls its finding most tied to business outcomes, but incidents per pull request rose 243%. Deployments per week fell 11.7% and lead time rose sharply, though only about a tenth of the dataset measures those, and Faros says the lead-time figure should be read as directional. Its own line is the one I would keep: "Throughput measures what was shipped, not what survived."

The easiest things to count can all rise while the thing a business cares about stays unclear. That is not evidence AI is failing, only that these measures cannot tell.

## Where the saved time went

Harvey's survey asks leaders a question I like: where did the time AI saved your team actually go?

Some of it seems to go into more work. Aruna Ranganathan and Xingqi Maggie Ye spent eight months observing a US technology company of about 200 people and found staff worked faster, took on more and stretched work into more hours of the day, often without being asked. One engineer told them: "You just work the same amount or even more." It is one company, qualitative and in progress. Multitudes saw something similar in telemetry from the organisations it studied: merged pull requests up 27.2% after AI rollouts, alongside a 19.6% rise in out-of-hours commits, which could explain part of the gain.

The rest often goes into checking. Harness surveyed 700 practitioners and managers at large companies, and 81% of engineering leaders said code review time had gone up since deploying AI. Its report puts it well: "Organizations are measuring gross output. They are not measuring where the productivity gains are actually being spent."

If the saved time turns into longer days and longer reviews, a usage dashboard will look excellent and the team will be more tired. That is why I think workload belongs on the scorecard, which is also Harvey's advice.

## Why directors are the doubtful ones

The seniority finding surprised me at first. Temporal's State of Development 2026, a survey of 554 people already using agents, found the opposite: CEOs, managers, VPs and directors were more likely than engineers to call their organisation "very successful" with agents, 43.7% against 32.4%. Harness found managers more relaxed than practitioners about how AI productivity data might be used: 15% of managers had no concerns, against 4% of practitioners.

The questions are not the same, though. Harness asked about how the data might be used on people. Temporal asked how successful the company is at using agents compared with its peers. That is a question about adoption, and I would expect the people who sponsored it to rate it highly. In Berlin, the share of people raising questions about whether AI is paying off rose with seniority. That is a question about return, and the return is what directors are asked to show.

A CTO quoted in the Multitudes whitepaper describes the pressure: the board expects a large productivity gain, "so I need a quantification of what I am getting right now." In Berlin, one in four individual contributors said they did not know what their leaders wanted from AI. No director said so, yet 40% of directors had little or no confidence their own measures were what senior leaders wanted. They know what they will be asked. They are less sure they can answer it.

I read that doubt as healthy. It sits with the people who hold the budget, and it is the right question for them to be asking. The worry would be a team where nobody senior has it.

## The removal test

Back to the director's question. The one piece of evidence about stopping comes from METR's attempt to repeat its trial, which began in August 2025 and by February 2026 had data from 57 developers and more than 800 tasks. It ran into a problem: developers did not want to work without AI. "When surveyed, 30% to 50% of developers told us that they were choosing not to submit some tasks because they did not want to do them without AI." One developer completed none of the tasks assigned to the no-AI condition. METR says this probably makes its new estimate a lower bound, and its data only very weak evidence of how large the effect is.

So yes, the developers would notice. That matters: a tool people do not want to give up is doing something for them, and morale and retention are real costs.

It still does not answer the business question. People can strongly prefer a tool that makes work feel easier without the customer seeing any difference. Whether the customer or the budget would notice depends on whether anyone said, in advance, what the tools were supposed to change, and measured it before they arrived.

## What I would do

None of this needs a new framework. Most of it is in Harvey's own advice, and I agree with it.

**Write down two or three outcomes AI should move.** Harvey's examples are faster time to customer value, fewer incidents and lower cost per feature. Share them with the whole team, not just with peers. Every other measure depends on this step.

**Pair every activity measure with an outcome.** Keep counting AI-assisted pull requests, and put the change failure rate next to them. Keep reporting time saved, and check whether lead time to customers actually falls. Attribution will never be clean, so look for several measures moving the same way.

**Say what the saved capacity is for.** DORA's ROI report is useful here because it is honest about its own example. In its sample calculation for a 500-person organisation, $11.0 million of the $11.6 million first-year value is "headcount reinvestment capacity", which comes from an assumed 12.5% time saving and means hiring avoided, not cash returned. The authors say a link from more deployments to more revenue is speculative and "may be challenged by a CFO". Capacity only becomes a return when someone decides what it will be spent on.

**Count workload.** Track hours, out-of-hours commits and review time alongside output. Gains paid for with people's evenings are unlikely to last.

**Keep a baseline.** DORA's report asks "Do you have a baseline?", and for teams already using AI heavily it may be too late to take a clean one. I wrote in a [thought](/thoughts) earlier this year that the no-AI comparison group is getting harder to keep. It is worth capturing what you can before it disappears.

**Put a date on it.** Pick a point next year to look at the outcomes you named, keep what moved them and stop what did not.

Then ask Harvey's other question of your own measures: would they tell you if AI stopped helping? If the honest answer is no, you are measuring use. The director in Berlin was asking the right thing. The useful response is to decide now what a good answer would look like.
