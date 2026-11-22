---
title: "Seeing Burnout Is Not Fixing It"
date: 2026-10-26
dek: "A burnout score cannot fix an unsustainable workload. Reduce the load, ask people how the work feels and keep activity data out of performance reviews."
tldr:
  summary: "A preliminary study tried to flag burnout risk from public GitHub activity, but its test was small and the score was not checked against a burnout questionnaire. Evidence on interventions is mixed and mostly comes from healthcare. Start by reducing demands that the team cannot sustain, ask people directly and keep activity signals out of performance reviews. Check whether the workload improves rather than treating a dashboard as the outcome."
  points:
    - "The BurnRiSc preprint found a sustained rise in its score before six of ten public burnout disclosures. Eleven of 46 comparison contributors also crossed the threshold."
    - "Studies of interventions in physicians offer mixed, low-certainty evidence; they do not establish which changes work for software teams."
    - "Look at workload and control, ask people directly and judge whether conditions improve. Do not use individual activity signals in performance ratings."
    - "A meta-analysis linked workplace monitoring with higher stress, although it did not test monitoring intended to support wellbeing."
references:
  - "Sanko, T., Tian, Y., & Guizani, M. (2026, September 16). BurnRiSc: Toward Non-Invasive Burnout Screening in Open Source from Public Repository Signals. arXiv:2609.19422. Workshop preprint (JAWs 2026). Read in full; the project's GitHub README lists a different signal count and threshold from the paper, so I use the paper."
  - "World Health Organization. (2019, May 28). Burn-out an 'occupational phenomenon': International Classification of Diseases. who.int. I did not open the ICD-11 entry itself."
  - "Maslach, C., & Leiter, M. P. (2016). Understanding the burnout experience: recent research and its implications for psychiatry. World Psychiatry, 15(2), 103-111. Read on PubMed Central."
  - "Demerouti, E., Bakker, A. B., Vardakou, I., & Kantas, A. (2003). The convergent validity of two burnout instruments: A multitrait-multimethod analysis. European Journal of Psychological Assessment, 19(1), 12-23. Abstract only."
  - "Panagioti, M., Panagopoulou, E., Bower, P., Lewith, G., Kontopantelis, E., Chew-Graham, C., Dawson, S., van Marwijk, H., Geraghty, K., & Esmail, A. (2017). Controlled Interventions to Reduce Burnout in Physicians: A Systematic Review and Meta-analysis. JAMA Internal Medicine, 177(2), 195-205. Full text read."
  - "Kiratipaisarl, W., Surawattanasakul, V., & Sirikul, W. (2024). Individual and organizational interventions to reduce burnout in resident physicians: a systematic review and meta-analysis. BMC Medical Education, 24, 1234. doi:10.1186/s12909-024-06195-3. Read in full (PMC full text)."
  - "West, C. P., Dyrbye, L. N., Erwin, P. J., & Shanafelt, T. D. (2016). Interventions to prevent and reduce physician burnout: a systematic review and meta-analysis. The Lancet, 388(10057), 2272-2281. Abstract only."
  - "Trinkenreich, B., Stol, K.-J., Steinmacher, I., Gerosa, M. A., Sarma, A., Lara, M., Feathers, M., Ross, N., & Bishop, K. (2023). A Model for Understanding and Reducing Developer Burnout. ICSE-SEIP 2023. arXiv:2301.09103. Read in full (arXiv version)."
  - "Trinkenreich, B., Gerosa, M. A., Sarma, A., & Steinmacher, I. (2026). Guidelines for Cultivating a Sense of Belonging to Reduce Developer Burnout. arXiv:2605.06827. A synthesis of the authors' earlier surveys; the journal version is listed as IEEE Software. Read in full (arXiv version)."
  - "Ravid, D. M., White, J. C., Tomczak, D. L., Miles, A. F., & Behrend, T. S. (2023). A meta-analysis of the effects of electronic performance monitoring on work outcomes. Personnel Psychology, 76(1), 5-40. Full text read."
  - "Grams, C. (2023, May 25). Maintainer burnout is real: almost 60% of maintainers have quit or considered quitting maintaining one of their projects. Tidelift, on DEV Community. Summary post of Tidelift's 2023 maintainer survey; I did not open the full report."
  - "LeadDev. (2026). The Engineering Leadership Report 2026. Sponsored by Postman. Survey fielded 31 March to 16 April 2026. Full report read; the publication date is not printed in it (uploaded to leaddev.com in June 2026)."
---

If a team is struggling with its workload, change the work. Cut or cap demands, ask people how the work feels and check whether the load improves. Do not wait for a burnout score, and do not turn individual activity data into a performance measure.

That is a leadership judgement, not a proven treatment. The research on interventions is mixed and mostly comes from healthcare. A September preprint offers a way to look for risk in public GitHub activity, but its small test does not justify using the score to assess a team.

The [previous piece](/leadership/overseeing-agents-is-the-tiring-part) looked at the load of supervising agents. This one looks at recognising excessive load and changing it.

## What the paper does

BurnRiSc, by Timofey Sanko, Yuan Tian and Mariam Guizani at Queen's University, builds a score from what a person leaves in public on GitHub, around the two dimensions of a standard questionnaire, the Oldenburg Burnout Inventory: exhaustion and disengagement. The authors turn each into seven signals: timestamps (off-hours work), commit volume, how long pull requests take to merge, review participation, and the wording of commit messages, pull requests and comments. Each signal is scored against the person's own history, not an absolute threshold, and the 14 are weighted into a monthly risk score between 0 and 1.

They tested it on 68 contributors from ten open-source repositories. Ten had publicly said they were burnt out, found by searching for words like "tired" and "burnout" and checking by hand. Twelve more had seen their activity fall to half or less of their peak for at least two months, a group the authors do not count as burnout cases. The other 46 were comparison contributors.

A sustained rise in the score, held for at least three months, came before the disclosure in 6 of the 10 cases, 6 to 15 months ahead. Counting a single peak as well brought it to 8 of 10.

## What ten cases can show

The authors are candid about the limits. Ten cases is too few to fit 14 weights, and the weights and threshold were fitted on the same people the score was then tested on. A leave-one-out check, which refits the model with each case held out in turn, found 7 of 10 still ranked above the 80th percentile of the comparison group's peak scores.

Eleven of the 46 comparison contributors also crossed the threshold. The authors read that as reasonable, partly because some may be real cases who never said anything. The people tested were long-serving core contributors, with at least three years of history. The score was never compared with the questionnaire it is meant to approximate, given to the same people. Nobody knows how closely it tracks the thing it is named after.

The abstract also says every disclosure was preceded by an elevated score "over any prior time frame". I would not repeat that figure. The table behind it has gaps of more than four years.

What the paper does show is narrower. In a handful of cases, some behaviour in public data moved months before the person said anything. Off-hours activity and commit volume carried the most weight in the fitted model. I read that as a lead for researchers, not as a tool to run on your team.

## What the score is and is not measuring

The World Health Organization describes burn-out as a syndrome "resulting from chronic workplace stress that has not been successfully managed", with three marks: exhaustion, mental distance or cynicism about the job, and reduced professional efficacy. It also says burn-out is not classified as a medical condition and applies only to work. Maslach and Leiter frame it as a mismatch between a person and the job across six areas: workload, control, reward, community, fairness and values.

That framing matters for what a screening score is for. It points at the job, and a score built from one person's timestamps points at the person. The authors are explicit that theirs is a screening tool, not a diagnostic one. The contrast is my reading: a questionnaire asks people how they feel, and a commit log records what they did.

## What the research says helps

The evidence is less solid than the confident advice around it. A 2017 meta-analysis in JAMA Internal Medicine covered 19 controlled studies of physicians, 1,550 in all. Interventions gave a small reduction in emotional exhaustion, a standardised difference of -0.29.

Those aimed at the organisation did better (-0.45) than those aimed at the physician (-0.18). The authors read that as support for treating burnout as an organisational problem. It is a comparison between different sets of studies, not a trial of one against the other, and it is only just significant.

Most organisational interventions were simple changes to workload or schedules. Only three tested fuller programmes with teamwork and leadership changes, and one study carries nearly half the weight in the organisational group. The authors write that the low quality of the evidence "does not allow firm practical recommendations".

A 2024 meta-analysis of 33 mostly non-randomised studies of resident physicians found a different pattern. Individual interventions, mainly coaching and meditation, gave a small reduction in exhaustion (d of -0.25). The organisational pooled effect was similar in size (-0.22) but not statistically significant, from only eight studies.

Every outcome in both reviews is a self-reported questionnaire score. The authors of the 2024 review rate the certainty of every outcome as very low and recommend combining the two approaches. They attribute the null result partly to the small number and variety of studies.

Maslach and Leiter made the same point in 2016. Effort has gone mostly into individual coping, although the causes sit largely in the workplace, and there is "very little research" on whether any approach works. A 2016 Lancet review of 15 randomised trials and 37 cohort studies of physicians reported burnout rates falling from 54% to 44% on average, mostly in before-and-after studies without comparison groups, with both individual and organisational approaches helping. From the abstract I cannot say which did more.

All of this is from doctors. It would be a mistake to treat a rota change in a hospital as evidence for what works in a platform team, and I have no software study that tests an intervention.

## What the software evidence adds

What exists for developers is survey data about associations. Trinkenreich and colleagues surveyed 3,281 people in software delivery at one large company and found that a more open team culture, where information is shared and bad news is welcome, went with higher work satisfaction, and that higher satisfaction went with lower burnout. The authors say they found associations, not causes. Their burnout measure was two questions about the team's workload and time, not a validated scale. Their 2026 follow-up proposes eight practices for leaders, from regular recognition and clear promotion rules to blameless postmortems and a monthly short survey on belonging. It draws on their own earlier surveys and tests none of the eight as an intervention.

Two other numbers are worth knowing about, with their caveats. A Tidelift survey of open-source maintainers reported by its own staff found 58% had quit or thought of quitting maintaining a project, and 44% said they were experiencing burnout. Tidelift sells support for maintainers, so it has an interest in the answer. The sample was self-selected, and I read a summary, not the report. LeadDev's 2026 report, sponsored by Postman, found 54% of CTOs or equivalents said they felt emotionally drained at least weekly, up from 24% a year earlier. That group is a small subgroup (about three dozen people on my arithmetic), the question is a single one, and the report's explanation for the jump is its own interpretation. Neither is a measure of burnout.

## Watching people costs something too

The BurnRiSc authors raise this themselves. They say a flag should lead to a gentle check-in and never to an evaluation started by someone else, and that if people's behaviour affects their standing they may hide the very signals the score depends on. The authors also write that inferring a psychological state from public traces "raises questions of consent and appropriate use".

The wider research on monitoring is not encouraging. A 2023 meta-analysis of 94 samples, 23,461 people, found no performance gain from electronic monitoring. In the 23 samples that measured stress, it was associated with higher stress (a correlation of .16, a small effect, from a mix of lab and field studies). The link was similar whatever the stated purpose, including safety and administration, and no study looked at monitoring meant to support development. None tested monitoring of wellbeing signals, so I cannot say a burnout dashboard would backfire. I can say there is no sign that being watched is calming, and a dashboard that someone reads is a form of watching.

## Change the work first

Start with the load. That is a judgement call, not a finding: the controlled evidence is thin and mixed, but the causes the research names, workload, control and fairness among them, sit in the work. Cutting load is cheap to try and easy to reverse.

Look at hours, on-call, the size of the review queue and, if you have agents running, how many each person is expected to supervise. Cut or cap before you offer a wellbeing programme. Go through Maslach and Leiter's six areas with your team as a checklist, since the gap that is hurting someone may be control or fairness, not volume.

Ask people. A short, voluntary check-in on how heavy the work feels, every month, is cheap and gives you the thing BurnRiSc is trying to approximate. It is untested: the guidelines paper suggests short monthly surveys but cites no evidence for them. But it asks the person, which a commit log cannot. The thing to avoid is a score you act on without asking.

If you do look at activity data, keep it at the level of the team. A long run of late-night commits across a team is a reason to look at the plan. The same pattern for one named person is a reason to have a private conversation, not a line in a review. Do not feed it into ratings. If people believe it is, they may hide the very signals you are relying on, as the BurnRiSc authors warn.

And look at yourself. Leaders carry loads of their own. LeadDev's CTO figure is small and shaky, but it is a reason to ask who checks in on you.

None of these steps is proven to prevent burnout in a software team. The outcome to look for is a workload people can sustain, not a lower score on a dashboard. Ask whether the changes have helped and keep adjusting the work.
