---
title: "The First Rung"
date: 2026-10-11
dek: "Payroll data suggests fewer young people are being hired into AI-exposed jobs, and a randomised trial found that people who learned a new library with AI help understood less of what they had built. Neither finding is as firm as its headline. Both point at the same question for leaders: who is going to be senior in five years, and what are we doing about it now?"
tldr:
  summary: "The evidence that AI is thinning out entry-level hiring is descriptive and contested, and the evidence that AI weakens learning is narrower than it is usually reported. Together they are still enough to act on. I want to try small, regular practice inside the team: short challenges and treasure hunts through our own codebase, possibly drafted by AI. The learning research is consistent with the shape of that idea. I could not find a study that has tested it on working engineers."
  points:
    - "Stanford's August 2026 update puts employment of 22 to 25 year olds in AI-exposed occupations 19% below where it would be had it kept pace with less-exposed peers, mostly through reduced hiring. The authors say plainly that this is descriptive and not a causal estimate."
    - "In Anthropic's trial, the AI group averaged 50% on a comprehension quiz against 67% for those coding by hand. That is 17 percentage points. Most participants were experienced programmers new to the library, and the test came minutes after the task."
    - "Working code is weak evidence of understanding. In data gathered before ChatGPT, 27% of 291 students got at least one simple question wrong about a program they had just written themselves."
    - "AI can draft questions about code cheaply, but someone has to check the answers. In one classroom deployment, students flagged 57 generated questions as wrong and were right about one."
references:
  - "Brynjolfsson, E., Chandar, B., & Chen, R. (2026, August 12). Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence (August 2026 revision). Stanford Digital Economy Lab working paper, with the lab's accompanying post of the same date."
  - "Brynjolfsson, E., Chandar, B., & Chen, R. (2026, February 9). Canaries, Interest Rates, and Timing: More on the Recent Drivers of Employment Changes for Young Workers. Stanford Digital Economy Lab."
  - "Humlum, A., & Vestergaard, E. (2026). Still Waters, Rapid Currents: Early Labor Market Transformation under Generative AI. NBER Working Paper 33777 (May 2025, revised March 2026)."
  - "Atkinson, T., & Yamco, S. (2026, January 6). Young workers' employment drops in occupations with high AI exposure. Federal Reserve Bank of Dallas."
  - "Davis, S. (2026, February 24). AI is simultaneously aiding and replacing workers, wage data suggest. Federal Reserve Bank of Dallas."
  - "Shen, J. H., & Tamkin, A. (2026). How AI Impacts Skill Formation. arXiv:2601.20245. With Anthropic's summary post, How AI assistance impacts the formation of coding skills (2026, January 29)."
  - "Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakci, O., & Mariman, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. PNAS, 122(26), e2422633122."
  - "Bassner, P., Lenk-Ostendorf, B., Beinstingel, R., Wasner, T., & Krusche, S. (2026). Less stress, better scores, same learning: The dissociation of performance and learning in AI-supported programming education. Computers and Education: Artificial Intelligence, 10, 100537. Abstract only."
  - "Lehtinen, T., Seppälä, O., & Korhonen, A. (2023). Automated Questions About Learners' Own Code Help to Detect Fragile Knowledge. ITiCSE 2023. arXiv:2306.16267."
  - "Lehtinen, T., Koutcheme, C., & Hellas, A. (2024). Let's Ask AI About Their Programs: Exploring ChatGPT's Answers To Program Comprehension Questions. ICSE-SEET 2024. arXiv:2404.11734."
  - "Goodfellow, M., Lambert, A., Booth, R., & Fagan, A. (2026). From Code to Questions: Leveraging Generative AI to Support Code Comprehension in Introductory Programming. Human-Centric Intelligent Systems."
  - "Roediger, H. L., & Karpicke, J. D. (2006). Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention. Psychological Science, 17(3), 249-255."
  - "Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis. Psychological Bulletin, 132(3), 354-380."
  - "Bjork, E. L., & Bjork, R. A. Making Things Hard on Yourself, But in a Good Way: Creating Desirable Difficulties to Enhance Learning. In Psychology and the Real World."
  - "Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The Expertise Reversal Effect. Educational Psychologist, 38(1), 23-31."
  - "Naur, P. (1985). Programming as Theory Building. Read in the reprint in A. Cockburn, Agile Software Development."
  - "Thomas, D. CodeKata. codekata.com."
  - "Agarwal, G. (2026, October 8). Your junior engineers are getting faster but are they getting better? LeadDev."
  - "Fore, P. (2026, February 13). IBM is tripling the number of Gen Z entry-level jobs after finding the limits of AI adoption. Fortune."
---

Two findings from this year belong side by side. The first is about hiring. Stanford's Digital Economy Lab, working from ADP payroll records, reported in August that employment of 22 to 25 year olds in AI-exposed occupations "now stands 19% below where it would be had it kept pace with that of their less-exposed peers". The second is about learning. In January, Anthropic published a randomised trial in which people who learned a new programming library with AI help scored well below those who coded by hand on a quiz about what they had just built.

So fewer people may be starting, and the ones who do start may be learning less. Every senior engineer was a junior once, which makes this a leadership problem with a five-year fuse. Before proposing anything, I want to be careful about what each finding does and does not show.

## Fewer hires at the bottom

The authors give a like-for-like comparison: the same measure would have stood at 15% on data to July 2025, and stands at 19% on data to June 2026. Underneath it, employment of the young group in the more exposed occupations fell about 11% from November 2022, while the same age group in the less exposed ones grew about 10%.

The authors trace the gap to hiring. They find "no evidence that increased separations explain the divergence", with the caution that hiring and exits affect each other. Fewer young people were being let in, and no more were leaving. The Dallas Fed, using different data, saw the same shape: lower employment for young workers in exposed occupations was "primarily driven by a decline in people transitioning directly from out of the workforce into employment rather than by layoffs".

Is AI the cause? The Stanford authors won't say so. "These are descriptive patterns, not causal estimates of the effect of AI," their summary reads. In a February note they conceded that, once firm-level shocks are controlled for, the decline "starts becoming notable in 2024 (not late 2022 or 2023)", so the earlier drop was at least partly down to other things. Two economists working with Danish records, Humlum and Vestergaard, found the same early-career decline there but no difference between workplaces that encouraged chatbot use and those that did not. Their data stops in December 2024.

I take the hiring evidence as a warning. Something has narrowed the entry point, and it has not yet widened again.

## What the trial measured

The Anthropic trial is usually summarised as junior engineers scoring 17% lower with AI. Each part of that needs adjusting.

There were 52 participants, 26 in each group. The AI group averaged 50% on the quiz and the hand-coding group 67%. That is a gap of 17 percentage points, and it was statistically significant. The AI group finished about two minutes sooner, which was not.

Anthropic's post calls the participants "mostly junior". The paper's own table shows that 29 of the 52 had seven or more years of coding experience and only four had three years or fewer. They were new to the library, not to programming. I find that more worrying than the headline. If experienced people absorb less of an unfamiliar tool when an assistant does the typing, the problem belongs to everyone who has to learn something new.

Two other results matter for what follows. The largest gap between the groups was on debugging questions, though that breakdown was exploratory. And inside the AI group, how people used the assistant went with very different scores. The seven who asked only conceptual questions averaged 65%. The four who delegated the whole task averaged 39%. These are tiny groups, and the authors say their analysis "does not draw a causal link between interaction patterns and learning outcomes".

The quiz came minutes after a task capped at 35 minutes, in a session of about an hour. Nobody was tested a week later, and nobody was learning something their job depended on.

Other studies give a mixed picture. In a field experiment with nearly 1,000 Turkish high school students, those given unrestricted GPT-4 for maths practice scored 17% lower than the control group in relative terms, about five points out of 100, on an exam taken without it, while a version built to give hints instead of answers showed no significant harm. A three-arm trial with 275 programming students in Munich found that AI support raised scores on the exercise without improving what students learned. That makes one significant loss and one null, and neither study involved working engineers.

## Working code hides thin understanding

One finding predates all of this and should make us uneasy anyway. In spring 2021, researchers at Aalto University asked 291 students two or three multiple-choice questions about a small program each had just written. They were plain questions: which line can execution jump to this handler from, what is this line for. Seventy-nine of the students, 27%, got at least one wrong. Some of that will be carelessness, as the authors allow.

They had written the code themselves, with no AI involved. A program that runs was never proof that its author could explain it. Assistants make running code cheaper, so the distance between "it works" and "I understand it" has more room to grow.

Peter Naur argued in 1985 that a program is a theory held in its programmers' heads, and that the theory does not transfer through text. A newcomer needs "the opportunity to work in close contact with the programmers who already possess the theory". I called the organisational version of this loss capability debt in [an earlier essay on AI-assisted engineering](/leadership/ai-assisted-software-engineering). What I didn't offer there was much of a remedy.

## Practice, on purpose

Here is the remedy I have been thinking about for our organisation: continuous training, small and regular. A short coding challenge. A treasure hunt through our own codebase, with questions like where a request enters the system and what happens to it before it reaches the database. The exercises might be drafted by AI. What matters is that they arrive consistently.

The idea is old. Dave Thomas made the case for code kata years ago: "In software we do our practicing on the job, and that's why we make mistakes on the job." The learning research gives it a firmer base. In Roediger and Karpicke's classic experiment, students who studied a passage in one session and were then tested on it three times recalled 61% a week later. Students who spent all four sessions studying it recalled 40%, and they were the more confident group. Five minutes after studying, the re-readers had been ahead. An immediate test can mislead, and the Anthropic quiz was an immediate test. Spacing helps too. A review of 317 experiments concluded that separating learning episodes by at least a day "is extremely useful for maximizing long-term retention".

Put together, that describes something modest: a few questions, every week, about code people have recently touched, with feedback. The treasure hunt suits this better than a generic puzzle because it builds knowledge of our system, and because the Anthropic trial's largest gap, in that exploratory breakdown, was on debugging.

One engineering manager has published something close. Garima Agarwal's team has new engineers attempt "learning tasks" without AI first, walk a senior through one merged pull request a week, and spend their first two weeks answering set questions about the codebase. She reports that time to the first incident a junior could handle alone "fell from seven months to four". It is one team's before and after, with no control group. She is candid about the price, which includes 30 minutes of senior time every week.

## Where AI-written exercises go wrong

Generating the questions is the cheap part. A team at Strathclyde used a small model to write 4,704 comprehension questions about students' own code for a total of 50 cents. When the authors checked 72 questions by hand in a pilot, one was wrong.

That is encouraging, with a catch. Students could flag questions they thought were wrong. They flagged 57, and one of those was actually incorrect. The authors think the reverse also happened, with students believing a wrong question and "doubting their own understanding". These were small programs from a beginners' Java course, and the authors expect more errors on larger code. In a separate test, GPT-4 answered 88% of template questions about short programs correctly, and 14 times it defended a wrong answer with an invented justification.

So the model can draft, and somebody who knows the system has to check the answer key. This is Naur's point again. A treasure hunt with a wrong answer will mislead whoever takes it, and it does so with authority.

## What I could not find

I have not found a controlled study showing that kata, quizzes or codebase treasure hunts make working engineers better at their jobs. The Aalto work shows that questions detect thin understanding, and Strathclyde that they can be generated cheaply. Whether answering them repairs it is untested, and the classic memory experiments tested recall of prose passages and other verbal material, not code. Roediger and Karpicke themselves limited their claim to "fact-based courses".

There are known ways for this to fail. Difficulty only helps a learner who has the background to meet it, so a hunt that is too hard for a new starter just wastes their time. Guidance that helps a novice can get in an expert's way, which means one set of exercises won't suit a whole team. Voluntary practice can also decay. At Strathclyde, participation in the question sets fell from over half the class on the early sets to around 40% on the later ones.

That is why I think "consistently delivered" is the hard part and the part worth protecting. It also means measuring. If we run this, I want to know whether people can handle an incident sooner. How many challenges they completed tells me much less.

Scott Davis at the Dallas Fed put the economics bluntly. Firms will find that AI makes developing entry-level staff "cost-ineffective, at least in the short run", and yet "leaving new employees off the job ladder is not sustainable in the long run". IBM's head of HR said in February, without giving numbers, that the company is "tripling our entry-level hiring, and yes, that is for software developers".

Hiring juniors is half an answer. The other half is making sure the first rung still teaches what it used to, now that the work that once did the teaching can be delegated. I don't know yet whether a weekly treasure hunt does that. I'd rather try it and measure it than wait for the study.
