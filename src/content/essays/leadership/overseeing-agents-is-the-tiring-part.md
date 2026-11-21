---
title: "Overseeing Agents Is the Tiring Part"
date: 2026-10-21
dek: "Agents have made writing code cheap, and the effort has moved to watching, reviewing and deciding. One consultancy survey ties heavy oversight to more mental fatigue. Older research on monitoring automation says the job was never easy. A leader can set a local limit, stop rewarding raw usage, and treat reviewer fatigue as a quality risk."
tldr:
  summary: "In my view the cost of agent work has moved from producing code to supervising it, and supervising automated work has been a studied problem since at least 1983. A 2026 BCG survey of 1,488 US workers associates heavy AI oversight with more reported mental fatigue, and some software practitioners describe the effort moving from writing to reviewing. The evidence is self-reported and mostly from other fields, and I found no research that sets a safe number of agents per person. A leader can still set a local limit, make review time visible, stop rewarding raw usage, and treat reviewer fatigue as a quality risk."
  points:
    - "BCG's survey of 1,488 US workers at large companies (published in Harvard Business Review in March 2026) found that people whose AI work needed high oversight reported 14% more mental effort and 12% more mental fatigue than those with low oversight, and 14% of AI users said they had experienced 'AI brain fry', mental fatigue from excessive use or oversight of AI tools. All of it is self-reported, from consultants who sell AI transformation."
    - "Bainbridge argued in 1983 that automation leaves the human with the tasks nobody could automate, watching and stepping in at failure, and that skills decay with disuse. A 2008 review concluded that vigilance 'requires hard mental work and is stressful'. A 2019 drone study found workload was low and its authors said the standard explanation did not fully fit, so the evidence is mixed."
    - "In a 2026 interview study and survey of people who build software engineering agents, one interviewee said they now write code effortlessly and put the effort into reviewing it. In the one survey I found that counts agents per person, Temporal's, the median respondent ran five and the mean was 10.7, but it says nothing on how heavy the supervising is."
    - "I found no independent research that sets how many agents one person can safely oversee. Measuring usage is a poor substitute: LeadDev reports 58% of respondents say their organisation measures AI impact by token usage, and 57% say that is ineffective at gauging real value."
references:
  - "Bedard, J., Kropp, M., Hsu, M., Karaman, O. T., Hawes, J., & Rosen Kellerman, G. (2026, March 5). When Using AI Leads to 'Brain Fry'. Harvard Business Review. The live page is paywalled; the full text was read in a printed copy of the article, and the figures are as the article states them."
  - "Ranganathan, A., & Ye, X. M. (2026, February 9). AI Doesn't Reduce Work, It Intensifies It. Harvard Business Review. Article paywalled; read their interview with the Berkeley Haas newsroom (2026, February 18)."
  - "Bainbridge, L. (1983). Ironies of Automation. Automatica, 19(6), 775-779."
  - "Warm, J. S., Parasuraman, R., & Matthews, G. (2008). Vigilance requires hard mental work and is stressful. Human Factors, 50(3), 433-441. Abstract only."
  - "Wohleber, R. W., Matthews, G., Lin, J., Szalma, J. L., Calhoun, G. L., Funke, G. J., Chiu, C.-Y. P., & Ruff, H. A. (2019). Vigilance and Automation Dependence in Operation of Multiple Unmanned Aerial Systems (UAS): A Simulation Study. Human Factors, 61(3), 488-505."
  - "Greenlee, E. T., DeLucia, P. R., & Newton, D. C. (2019). Driver Vigilance in Automated Vehicles: Effects of Demands on Hazard Detection Performance. Human Factors, 61(3), 474-487. Abstract only."
  - "Mishler, S., & Chen, J. (2024). Boring But Demanding: Using Secondary Tasks to Counter the Driver Vigilance Decrement for Partially Automated Driving. Human Factors, 66(6), 1798-1811."
  - "Mark, G., Gudith, D., & Klocke, U. (2008). The Cost of Interrupted Work: More Speed and Stress. CHI 2008, 107-110."
  - "Lyu, Y., Shi, J., Sun, Z., Lo, D., Williams, D., Sarro, F., Peng, C., & Yang, Z. (2026). How Do Practitioners Build SE Agents? Insights from a Mixed-Methods Study. arXiv:2607.10856. Preprint."
  - "Agarwal, S., Miller, C., Kästner, C., & Vasilescu, B. (2026). 3100 Opinions on Code Review in an AI World: Building Causal Theory from Practitioner Discourse. arXiv:2607.07980. Preprint."
  - "Sehn, T. (2026, January 15). A Day in Gas Town. DoltHub Blog. dolthub.com/blog/2026-01-15-a-day-in-gas-town/."
  - "Temporal Technologies. (2026, August 25). The State of Development 2026. temporal.io/reports/state-of-development-2026."
  - "Kapani, C. (2026, August 17). The tokenmaxxing hype didn't last long. LeadDev."
  - "Perez, S. (2026, July 14). Meta's Adam Mosseri says AI token budgets could soon be capped per engineer. TechCrunch."
  - "Harter, J. (2026, January 13). Span of control: optimal team size for managers. Gallup."
  - "Yegge, S. Gas Town README. github.com/steveyegge/gastown."
---

[The previous piece here](/leadership/what-it-takes-to-trust-agent-output) argued that trust in agent output has to be built from checks, and that review has to be staffed to match the volume of code. It did not ask what that review does to the person doing it. This one does, because the checks only work if the people running them still have something left.

My view is that agents have moved the effort of software work from writing to supervising, and monitoring automated work has been a studied problem since at least 1983. I suspect most teams have not planned for it.

**The survey that put a number on it.**

In March 2026, Harvard Business Review published a study by a team at Boston Consulting Group. They surveyed 1,488 full-time US workers at large companies, 58% individual contributors and 41% leaders, about how they used AI and how their work felt. Workers who said their AI use needed a high degree of direct monitoring reported 14% more mental effort than those with low oversight, 12% more mental fatigue and 19% more information overload. At the end of the survey the authors asked whether people had experienced "mental fatigue that results from excessive use of, interaction with, and/or oversight of AI tools beyond one's cognitive capacity". They call it AI brain fry. Fourteen percent of the AI users said yes, from 6% in legal roles to 26% in marketing, with engineering among the higher functions.

The authors link it to costs. People who endorsed brain fry scored 33% higher on decision fatigue and 11% and 39% higher on minor and major error frequency. Intent to leave rose from 25% to 34%. Those are differences in average scores on self-report scales, and the authors say "predicted" and "may be causing", not "caused". The people who ran the study sell AI transformation. The sample is not engineers. And the three-tool finding is narrower than it sounds: the finding was that perceived productivity rose with a second and third tool and then dipped, across all kinds of AI tools, which the leader advice later turns into a limit of three agents.

The same study found something that runs the other way. People who used AI to replace routine tasks reported 15% lower burnout. Mental fatigue did not fall with it. So the study does not say AI is bad for workers. Its data associate the cost with heavy oversight.

**Researchers saw this coming.**

Lisanne Bainbridge wrote the founding paper in 1983, about industrial plants, not software. Her argument was that "the designer who tries to eliminate the operator still leaves the operator to do the tasks which the designer cannot think how to automate". The human is left to monitor and to take over when the automation fails. Skills decay with disuse, so at the moment of failure the operator "needs to be more rather than less skilled, and less rather than more loaded, than average". She also doubted that a person can check a faster system in real time, and cited vigilance research suggesting that attention on a source where very little happens cannot be held for more than about half an hour. That figure is from Mackworth's 1950 work, not hers, and I would not carry it over to code review.

A 2008 review by Warm, Parasuraman and Matthews concluded that converging evidence "shows that vigilance requires hard mental work and is stressful", and said it applies to most human-machine systems that need monitoring, particularly automated ones. I read the abstract only.

The later evidence is less tidy. In a 2019 simulation of drone surveillance, Wohleber and colleagues had 131 students supervise automated drones for two hours. Accuracy on the harder task fell over time, more so when the automation was unreliable, and people relied on the automation less as time went on. But their measured workload was low, distress did not rise, and the authors say the standard resource-depletion account "does not fully explain the effects observed". A 2019 driving study found hazard detection got worse as monitoring demands rose and as time passed, and a 2024 study found that a small, intermittent non-driving task reduced the drop in vigilance. Students, simulators and drones are a long way from a developer reading a diff, and I use them only for the shape: watching automation is real work, it degrades with time, and how bad it gets depends on how the job is set up.

Interruption research is similar. Mark and colleagues interrupted 48 people every couple of minutes while they worked through an email task. The interrupted people finished faster, with no difference in quality, and reported more stress, frustration and effort. The authors say they cannot tell whether people would cope over time. It is a lab study of students and not about agents. It is a reason to suspect that moving between several agent sessions is paid for in strain even when the output looks fine. The interruptions were imposed, not chosen, and BCG found only a weak link between task switching and brain fry.

**What practitioners say.**

The software evidence is mostly what people report, and it points the same way. A 2026 preprint by Lyu and colleagues interviewed 20 practitioners at 12 organisations who build software engineering agents and surveyed 80 more. One interviewee put it this way: "We effortlessly write code, but we put a lot of effort into reviewing it, so the effort point changed." These are people who build agents, mostly from large technology firms, so they are not typical users.

A July 2026 preprint from Carnegie Mellon (Agarwal and colleagues) coded 3,100 blog and Reddit documents on code review and built a proposed theory from them. In it, heavy review load, polished-looking AI code and missing author intent all reduce how deeply, and how willingly, people review. The authors say the theory is unvalidated and confirm none of its relationships. The same paper mined public GitHub pull requests and found that 40.1% of agent-associated pull requests were reviewed only by the person who had invoked the agent, against 21.5% of human ones. It also found that the share merged with no human review fell from over 50% in mid-2025 to about 12% to 14% in early 2026, close to the human rate. That is some good news. The authors warn that the first figure reads as more or less independent review depending on whether you count the person who invoked the agent as the author or as a reviewer, and nothing here says whether the reviewing is any good.

Then there are the accounts of what orchestrating many agents feels like. Tim Sehn of DoltHub tried Steve Yegge's Gas Town, which runs swarms of Claude Code agents, and wrote: "there's really too much going on for you to reasonably comprehend and I'm just watching the Mayor thread." He also wrote: "I had a palpable sense of stress watching it. Gas Town was moving too fast for me." One person's afternoon with a tool built for enthusiasts is an anecdote. I include it because it describes the experience the survey numbers are trying to measure.

Berkeley researchers Aruna Ranganathan and Xingqi Maggie Ye spent eight months observing and interviewing employees at a 200-person US technology company and reported that AI use led people to work faster, take on more and work longer, often unprompted. I could read their interview with the Haas newsroom but not the full article. It is in-progress work from one firm, not peer-reviewed, and it is not limited to engineers.

**What nobody is measuring.**

The one survey I found that counts agents per person, Temporal's State of Development 2026, has the median respondent running five and the mean at 10.7. Temporal sells infrastructure for agents, so it has a point of view. The report says the number of agents a team runs and the frequency of issues are "not correlated", though the page gives no statistic. It says nothing about how tiring the supervising was, because the report does not ask. The same report found leaders more likely than engineers to call their organisation very successful with agents, 43.7% against 32.4%, which is self-reported and tells you who is looking at which part of the system.

Nor does anything I found tell a leader how many agents one person can oversee. Gallup's January 2026 figures put the average manager at 12.1 direct reports in 2025, up from 10.9 a year earlier, with a median team of five to six. Gas Town's README says 4 to 10 agents becomes chaotic without its tooling and 20 to 30 is manageable with it, which is the author's claim about his own tool and untested. The BCG authors say limits should be defined for human and agent oversight, as they are for spans of control.

What leaders do measure is usage. HBR says Meta includes the number of lines of code generated by AI as a performance metric for engineers. LeadDev reports that 58% of respondents say their organisation measures AI impact through token usage, and 57% say that is ineffective at gauging real value. Meta has shut down an internal token leaderboard, and Adam Mosseri told TechCrunch: "It's not that hard to build a token incinerator, and that doesn't create a lot of value." Pay for consumption and you pay for more things to supervise.

**What I would do about it.**

None of the evidence above proves that supervising agents damages judgement. It is self-reported, mostly from other fields, and the software studies are small or about builders of agents. What it supports is a reasonable worry, and the actions that follow from the worry are cheap.

Set a local limit and treat it as a hypothesis. I found no published number, so the number is whatever your team can review properly this quarter. Ask reviewers what they can do well, write it down, and change it when they tell you it has moved.

Stop rewarding raw usage. A metric that counts agent output grows the supervising load while saying nothing about whether the output was any good. If you must count something, count what got through review and stayed fixed.

Make review time visible. If the trust essay is right that review has to be staffed to volume, then a team running more agents needs more hours set aside for reading, not the same hours with more in them. The BCG authors' advice not to rush to backfill work that someone has just automated points the same way: the saved time is the supervising time.

Build in breaks the way the driving study hints at. A small intermittent task helped drivers, and Ranganathan and Ye suggest intentional pauses before major decisions and sequencing work. These are suggestions from a handful of studies, none of them on code reviewers. They cost almost nothing to try.

And treat a tired reviewer as a quality risk. Every check I described in the trust essay depends on a person reading carefully. If the load makes them skim, the check is still on the process diagram and has stopped working. Nobody has to decide that on purpose for it to happen, which is why a leader has to decide the opposite on purpose.
