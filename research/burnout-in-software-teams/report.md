# Burnout in software teams: what the BurnRiSc paper shows about screening for it from GitHub activity, and what the wider research says leaders can do about it

## Contents

1. [BurnRiSc: Toward Non-Invasive Burnout Screening in Open Source from Public Repository Signals](#burnrisc-toward-non-invasive-burnout-screening-in-open-source-from-public-repository-signals) - Source tier: Preprint, submitted to a workshop (JAWs '26) for early feedback; not peer-reviewed yet | Access status: Fully read
2. [WHO ICD-11: burnout as an occupational phenomenon](#who-icd-11-burnout-as-an-occupational-phenomenon) - Source tier: Official international health body classification and statement (not peer-reviewed researc
3. [Maslach and Leiter 2016, Understanding the burnout experience (World Psychiatry)](#maslach-and-leiter-2016-understanding-the-burnout-experience-world-psychiatry) - Source tier: Peer-reviewed (narrative review article)
4. [Oldenburg Burnout Inventory (Demerouti and colleagues)](#oldenburg-burnout-inventory-demerouti-and-colleagues) - Source tier: Peer-reviewed (all three)
5. [Panagioti et al. 2017, Controlled interventions to reduce burnout in physicians (JAMA Internal Medicine)](#panagioti-et-al-2017-controlled-interventions-to-reduce-burnout-in-physicians-jama-internal-medicine) - Source tier: Peer-reviewed (systematic review and meta-analysis, JAMA Internal Medicine) | Access status: Fully read from the PDF (reprinted copy) via pdftotext, including the abstract, Methods, R
6. [Kiratipaisarl et al. 2024, burnout interventions in resident physicians (BMC Medical Education)](#kiratipaisarl-et-al-2024-burnout-interventions-in-resident-physicians-bmc-medical-education) - Source tier: Peer-reviewed (BMC Medical Education, open access CC BY 4.0) | Access status: Fully read via the PMC HTML full text (abstract, introduction through results, GRADE table
7. [West, Dyrbye and Shanafelt, Interventions to prevent and reduce physician burnout (Lancet 2016) and Springer 2019 organisational strategies review](#west-dyrbye-and-shanafelt-interventions-to-prevent-and-reduce-physician-burnout-lancet-2016-and-springer-2019-organisational-strategies-review) - Source tier: Peer-reviewed (both systematic reviews with meta-analysis)
8. [Trinkenreich et al. 2023, A Model for Understanding and Reducing Developer Burnout (ICSE SEIP)](#trinkenreich-et-al-2023-a-model-for-understanding-and-reducing-developer-burnout-icse-seip) - Source tier: Peer-reviewed conference paper (ICSE Software Engineering in Practice track), read here as | Access status: Fully read (arXiv PDF v2 text extracted and read: design, measures, results, Table III, th
9. [Trinkenreich et al. 2026, Guidelines for Cultivating a Sense of Belonging to Reduce Developer Burnout (IEEE Software)](#trinkenreich-et-al-2026-guidelines-for-cultivating-a-sense-of-belonging-to-reduce-developer-burnout-ieee-software) - Source tier: Peer-reviewed magazine article (IEEE Software), here seen as an arXiv preprint copy | Access status: Fully read: PDF opened and text extracted (pdftotext); abstract page also read
10. [Open source maintainer burnout evidence](#open-source-maintainer-burnout-evidence) - Source tier: (1) Peer-reviewed short paper (NIER track, emerging results)
11. [Electronic performance monitoring and employee stress](#electronic-performance-monitoring-and-employee-stress) - Source tier: Peer-reviewed (meta-analysis) | Access status: Fully read via full-text PDF (Wiley copy hosted on gwern.net); text extracted and relevant
12. [LeadDev Engineering Leadership Report 2026: emotional drain and workload](#leaddev-engineering-leadership-report-2026-emotional-drain-and-workload) - Source tier: Company/industry-media research: a vendor-sponsored practitioner survey by a trade publish | Access status: Fully read: PDF re-opened and full text extracted with pdftotext -layout (pages 2-28)

## BurnRiSc: Toward Non-Invasive Burnout Screening in Open Source from Public Repository Signals

### Source

- **Citation:** 
> Timofey Sanko, Yuan Tian, Mariam Guizani (Queen's University, Kingston, Ontario). 'BurnRiSc: Toward Non-Invasive Burnout Screening in Open Source from Public Repository Signals'. arXiv:2609.19422v1 [cs.CY], 16 September 2026. Submitted to Journal Ahead Workshop (JAWs '26), Munich. https://arxiv.org/abs/2609.19422 ; code: https://github.com/RISElabQueens/BurnRiSc. Note: the arXiv page says 8 pages; the PDF's ACM reference line says 10 pages.
- **Source tier:** 
> Preprint, submitted to a workshop (JAWs '26) for early feedback; not peer-reviewed yet. The authors plan an extended version for TSE or TOSEM.
- **Access status:** 
> Fully read. arXiv abstract page re-opened and PDF text extracted locally (pdftotext) and read in full including Table 2 and references. GitHub repository README re-opened (partly rendered only; no results, no ethics section, no license stated).
- **Sponsor and incentive:** 
> No funding statement or acknowledgements found in the paper text or on the arXiv page. Academic authors (Queen's University). The tool is released as research code; no commercial product identified. The authors benefit from the framework being adopted (they plan follow-up papers).
- **Exact quotes:** 
- Abstract: "sustained BRS elevation precedes 6 of 10 disclosures by 6-15 months, 8 of 10 when adding peak BRS as a second criterion, and 10 of 10 over any prior time frame. We thus present BurnRiSc as evidence that burnout is screenable from public data."
- Abstract: "In a preliminary evaluation across 68 contributors in ten repositories (ten disclosed burnout cases, twelve comparable-volume collapses, and 46 comparison contributors)"
- Abstract: "operationalizes the Oldenburg Burnout Inventory's two dimensions, exhaustion and disengagement, as 14 behavioral and linguistic signals computed from GitHub activity and scored against each contributor's own history."
- Sec 3.2: "The BRS is not a diagnosis: it signals that a contributor may benefit from being checked in on and offered support."
- Sec 5.1: "Among the 46 comparison contributors, 35 (76.08%) never cross the threshold. The remaining 11 cannot be treated as errors outright."
- Sec 5.1: "We regard roughly one crossing in five as reasonable, given that OSS contribution patterns are highly irregular"
- Sec 5.2: "The resulting risk threshold, derived from the Equal-anchored fit's peak distribution, is 0.412"
- Sec 5.2: "Leave-one-out-cross-validation ... finds 7 of 10 confirmed cases still rank above this floor when held out."
- Sec 5.3: "Peak BRS correlates weakly with activity score (r = 0.260, r2 = 0.068, p = 0.032)"
- Sec 5.3: "16 out of the 27 contributors with a peak risk above the threshold turn out to be either confirmed cases or highly-ranked activity collapse cases ... so 16/27 is a lower bound on precision."
- Sec 6: "BurnRiSc is a screening tool, not a diagnostic tool."
- Sec 6: "A high BurnRiSc score should prompt concern, not a conclusion."
- Sec 6: "This framework should not trigger an evaluation initiated by someone else."
- Sec 6: "if contributors' behavior affects their standing, they may mask the very signals that BurnRiSc depends on, defeating its purpose and denying them the support it was designed to surface. The goal of the framework is to identify people who need support, not to penalize them for needing it."
- Sec 6 (future plans): "ten confirmed cases suffice to demonstrate feasibility but not to fit fourteen weights or support robust statistics"
- Sec 6 (future plans): "this evaluation validates BRS against disclosure timing rather than against OLBI scores directly administered to the same individuals."
- Sec 6 (ethics, final sentence of future plans): "Finally, we plan to develop the ethical framing this paper sketches, because inferring psychological state from public traces raises questions of consent and appropriate use."
- Sec 4.2: "We withhold names and handles to avoid re-identifying the disclosers."
- **Date and recency:** 
> Published 16 September 2026 (arXiv v1). Disclosure dates in Table 2 run from Dec 2016 to Dec 2025; GitHub activity histories go back to at least 2011. Peak BRS month for Dev 8 is listed as June 2026. Very recent, unreplicated.

### Claims

- **Key claims:** 
- Burnout, as operationalised by the Oldenburg Burnout Inventory (OLBI) dimensions exhaustion and disengagement, can be approximated from public GitHub traces (timestamps, throughput, commit/PR/issue text).
- A monthly Burnout Risk Score (BRS, 0 to 1) is the mean of an exhaustion score and a disengagement score; each signal is scored against the contributor's own history (level percentile plus 4-month trend percentile, smoothed, passed through a sigmoid).
- Sustained BRS elevation precedes publicly disclosed burnout in a majority of ten cases, with a lead time of months.
- BRS is not just a proxy for how active a contributor is (weak correlation with an independent activity score).
- Off-hours activity and commit volume carry the most weight after fitting.
- The authors call it a screening tool and not a diagnosis; a flag should prompt a cheap, non-judgmental check-in.
- **Headline figures:** 
- 14 signals: 7 exhaustion proxies (Off-hours Activity, Linguistic Arousal, PR Merge Time, Lexical Exhaustion, Sentiment-Exhaustion, Lexical Diversity, Hapax Rate) and 7 disengagement proxies (Commit Volume, Review Participation, PR Rejection Rate, Task Abandonment, Pronoun Use, Lexical Disengagement, Sentiment-Disengagement). Source: Table 1.
- 68 contributors across ten GitHub repositories (Sec 4.2). Selection: ten most prolific by commit count per repository plus any discloser outside that set (100 candidates), then filtered to humans (no [bot]) with at least three years of history. Made up of 10 confirmed disclosed-burnout cases, 12 activity-collapse cases (weakly labelled, not burnout cases) and 46 comparison contributors.
- 6 of 10 confirmed cases flagged by sustained onset (BRS above threshold for the first month plus at least two further consecutive months) within the 24-month lookback, at lead times of 6 to 15 months (Sec 5.1).
- 8 of 10 when lifetime peak BRS above threshold within the window is admitted as a second criterion, at lead times of 5 to 16 months. The two outside the two-year window are Dev 5 and Dev 8.
- 10 of 10 'over any prior time frame' (abstract); the Introduction says every disclosure is preceded by at least one elevated period outside the 24-month window. Table 2 lead times include 40, 52 and 61 months, so this is a very loose criterion.
- Activity-collapse cases (12): 6 flagged 4 to 13 months before the biggest decline; 10 of 12 with peak BRS as a secondary criterion.
- Comparison group: 11 of 46 crossed the threshold (onset or threshold-crossing peak at any point); 35 of 46 (76.08%) never did. Authors call about one in five 'reasonable'. 11/46 is 23.9%.
- Risk threshold 0.412: midpoint between the comparison group's 75th percentile and the activity-collapse group's 25th percentile of peak BRS, from the Equal-anchored fit. Chosen so that confirmed cases are caught, so it deliberately trades more false positives for fewer false negatives.
- Separation margin: unweighted baseline 0.121; fitted Equal 0.243, Exhaustion-heavy 0.241, Disengagement-heavy 0.224, Heuristic 0.187. Bootstrap (100 resamples): mean 0.215, std 0.008.
- Leave-one-out cross-validation over the ten confirmed cases: 7 of 10 still rank above the 80th percentile of the training comparison-group peak distribution when held out. So 3 of 10 are missed out of sample.
- Peak BRS vs independent activity score: r = 0.260, r2 = 0.068, p = 0.032 (Sec 5.3). The paper says 'real, statistically detectable association ... accounting for a low amount of the variance'. Only four contributors fall in the 'over-analysis risk' quadrant (low activity, high risk).
- 27 contributors had peak BRS above the threshold; 16 of 27 were confirmed cases or highly ranked collapse cases (lower bound on precision about 59%; the other 11 are unlabelled, not shown to be errors).
- Top fitted weights averaged across anchors: Off-hours Activity 2.668, Commit Volume 2.416, Lexical Exhaustion 1.324. Lowest: Review Participation 0.092, Rejection Rate 0.089.
- Sentiment classifier: fine-tuned RoBERTa, macro-F1 0.889 (10-fold CV) vs 0.870 for the original BERT on the Biswas et al. dataset. Lexical-feature check: 67.78% of high-similarity messages judged genuine matches in a 90-message manual review (sarcasm the main false-positive source).
- **Sample unit and population:** 
> Unit: individual GitHub contributor within a repository. 68 contributors in ten repositories, all long-tenured core contributors (top ten by commits, at least three years of history, human accounts). Only ten repositories were chosen because each contained a public burnout discloser. Repositories are anonymised ('identified by number') and names and handles are withheld, so the cases cannot be independently checked. These are open-source maintainers, not employed software teams. Disclosure dates span 2016 to 2025.
- **Observed vs stated:** 
> Mixed. The inputs are observed behaviour (timestamps, commit counts, PR outcomes, message text). The outcome label for the ten cases is a self-stated public disclosure found by keyword search (tired, burntout, burnout, leaving) and manually verified. The burnout date is set to the month of the disclosure post. No OLBI or MBI questionnaire was administered to anyone, so the score is not validated against a measured burnout state.

### Burnout and remedies

- **What it measures or defines:** 
> Burnout is defined via WHO (chronic occupational syndrome from unmanaged workplace stress) and the Job Demands-Resources model. The instrument approximated is the Oldenburg Burnout Inventory: exhaustion and disengagement. BRS = (E + D) / 2, a 0 to 1 monthly relative risk score per person, indexed to their own history. It is a proxy for behavioural and linguistic change, not a measure of burnout itself. Authors state it 'is not a diagnosis'.
- **Mechanism or cause:** 
> Job Demands-Resources theory: sustained demands unmatched by available resources. The authors argue open source is close to a worst case: maintainers absorb unbounded demand from users who bear no cost, with no manager to reallocate work, no organisation to notice decline and no compensation. This is asserted from the literature, not tested in the study.
- **Interventions and effects:** 
> No intervention was tested. The paper recommends pairing any flag with 'a cheap, non-judgmental response', a prompt for the contributor to reflect and, if warranted, take a break, and says it must not trigger an evaluation initiated by someone else. It lists questions for future work (whether risk falls after joining a foundation, securing funding, adding maintainers, or adopting AI coding agents) but reports no effect sizes.
- **Transfer to software teams:** 
> Evidence is from ten open-source repositories and long-tenured core contributors only, with GitHub-visible activity. Transfer to employed teams is untested: signals like off-hours activity, commit volume and PR merge time depend heavily on local norms, and the paper itself notes review-heavy organisations might weight signals differently. The authors note that peripheral contributors, newcomers and people who burn out silently are outside what has been tested. Plausible as a research idea for teams; not evidence that it works there.

### Caveats

- **Limitations stated:** 
- "ten confirmed cases suffice to demonstrate feasibility but not to fit fourteen weights or support robust statistics" (Sec 6). Weights and threshold are fit on the same small set.
- Confirmed cases are disclosers only: "they may differ systematically from those who experience burnout silently". Transfer to silent cases is untested; the activity-collapse group is only a weakly labelled hedge.
- Keyword-based disclosure detection "missing indirect, off-platform, and non-English disclosures".
- Three-year tenure rule and top-ten-by-commit selection restrict the study to established core contributors.
- Validated against disclosure timing, not against OLBI scores administered to the same people.
- Burnout date is the disclosure month, which is conservative since burnout may have preceded disclosure.
- The comparison group reflects absence of disclosure, not absence of burnout, so the 11 crossings may include undisclosed true positives; precision is called a lower bound.
- Low weights for review participation and rejection rate may reflect thin data rather than no signal.
- Text signals assume a human author; commits and comments written with language models, or AI agents sustaining commit volume while the person disengages, could distort them. Direction of bias unclear.
- Threshold and onset definitions are 'decisions about how to read its output' and were set after seeing the data; threshold derived from the fitted weights and should be re-evaluated on larger data.
- Ethics: the paper only sketches it. Authors say they plan to develop the ethical framing because 'inferring psychological state from public traces raises questions of consent and appropriate use.' They also warn that using scores to evaluate people would lead to masking of signals. No ethics board or consent process is described for the ten disclosers or the other 58 people; names withheld to avoid re-identification.
- **Verification status:** 
- All figures in headline_figures: checked against the PDF text extracted from the arXiv v1 PDF (opened this session). Verified: 14 signals (Table 1), 68 contributors, ten repositories, 6 of 10, 8 of 10, 10 of 10, 35 of 46 and 11 crossings, threshold 0.412, r = 0.260, leave-one-out 7 of 10, 16 of 27, margins, weights.
- Abstract wording: confirmed on both the arXiv page (summary) and the PDF (verbatim).
- Limits and ethics paragraphs: confirmed in PDF Sec 6 (Threats to validity, Future Plans). There is no dedicated ethics section.
- Funding: no statement found; absence checked on the arXiv page and PDF text, not exhaustively across supplementary material.
- Cited prior literature (OLBI, JD-R, Sentry/Heath burnout report, etc.): not opened; do not cite through this paper.

### Essay use

- **Usable claim:** 
> A preprint workshop paper (Sanko, Tian and Guizani, September 2026) turned the Oldenburg Burnout Inventory into 14 signals taken from public GitHub activity and tested them on 68 contributors in ten open-source repositories. In its ten publicly disclosed burnout cases, a sustained rise in the score came 6 to 15 months before the disclosure in 6 cases, and in 8 when a one-month peak was also allowed. About one in four comparison contributors (11 of 46) also crossed the threshold. The authors call it a screening idea, not a diagnosis, say ten cases is too few to fit the weights, and say a flag should lead to a gentle check-in and never an evaluation by someone else.
- **Do not use:** 
> Do not say it 'predicts' burnout or that burnout is 'screenable from public data' as settled (that is the authors' framing in a preliminary workshop paper). Do not use the '10 of 10' figure. Do not call the 6/8 of 10 an accuracy or imply it holds out of sample (leave-one-out is 7 of 10). Do not drop the 11 of 46 false-alarm figure. Do not present the 12 collapse cases as burnout cases. Do not use 0.412 as a usable cut-off, or r = 0.26 as 'no relation to activity' (it is a weak but significant correlation, p = 0.032). Do not apply it to employed software teams or suggest managers could run it; the paper explicitly says it must not trigger an evaluation initiated by someone else. Do not use the repo's nine-signal or 0.305 defaults. Do not claim a validated link to OLBI scores; none were collected.

### Fields with unverified values (those values omitted above)

- counter_evidence
- headline_figures
- overlap_with_existing_essays
- verification_status

## WHO ICD-11: burnout as an occupational phenomenon

### Source

- **Citation:** 
> World Health Organization. 'Burn-out an "occupational phenomenon": International Classification of Diseases.' Departmental update, 28 May 2019. https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases. Also ICD-11 MMS entry QD85 Burnout, https://icd.who.int/browse/2025-01/mms/en#129180281
- **Source tier:** Official international health body classification and statement (not peer-reviewed research).
- **Sponsor and incentive:** 
> None. WHO is the publisher and maintainer of ICD; no product sold. The statement says WHO is about to develop evidence-based guidelines on mental well-being in the workplace.
- **Date and recency:** 
> Statement published 28 May 2019 (ICD-11 adopted at the World Health Assembly that month; in force 1 January 2022). WHO page footer showed a 2026 copyright and a related 'Mental health at work' fact sheet dated 15 September 2026. ICD browser release consulted: 2025-01.

### Claims

- **Key claims:** 
> Burn-out is included in ICD-11 as an 'occupational phenomenon', not a medical condition. It is defined as a syndrome from chronic workplace stress that has not been successfully managed. Three dimensions: exhaustion; mental distance, cynicism or negativism toward one's job; reduced professional efficacy. It applies only to the occupational context. ICD-10 also included burn-out in a similar category, with a less detailed definition.
- **Headline figures:** No numeric figures. ICD-11 code QD85. Statement dated 28 May 2019.
- **Sample unit and population:** 
> Not an empirical study; a classification definition. No sample. Not specific to software engineers; applies to any occupation.
- **Observed vs stated:** Neither. Conceptual and classificatory definition by WHO.

### Burnout and remedies

- **What it measures or defines:** 
> Defines burn-out as a syndrome resulting from chronic workplace stress that has not been successfully managed, with three dimensions: energy depletion or exhaustion; increased mental distance from the job or negativism/cynicism about it; reduced professional efficacy. It is a definition, not a measurement instrument.
- **Mechanism or cause:** 
> Chronic workplace stress that has not been successfully managed. No detailed mechanism given. The statement does not name specific workplace causes.
- **Interventions and effects:** 
> None tested or recommended in the statement. WHO says it is about to develop evidence-based guidelines on mental well-being in the workplace. No effect sizes.
- **Transfer to software teams:** 
> Occupation-neutral definition, so it applies to software teams by default; it offers no software-specific evidence.

### Essay use

- **Usable claim:** 
> WHO's ICD-11 describes burn-out as an occupational phenomenon, a syndrome resulting from chronic workplace stress that has not been successfully managed, marked by exhaustion, mental distance or cynicism about the job, and reduced professional efficacy. WHO says it is not classified as a medical condition and applies only to work.
- **Do not use:** 
> Do not say WHO recognised burnout as a medical condition or illness. Do not apply the three dimensions to life outside work. Do not cite the exclusion list as WHO-verified until QD85 is opened at icd.who.int. Do not imply WHO identifies causes specific to software work.

### Fields with unverified values (those values omitted above)

- access_status
- counter_evidence
- exact_quotes
- limitations_stated
- overlap_with_existing_essays
- verification_status

## Maslach and Leiter 2016, Understanding the burnout experience (World Psychiatry)

### Source

- **Citation:** 
> Maslach C, Leiter MP. Understanding the burnout experience: recent research and its implications for psychiatry. World Psychiatry. 2016 Jun;15(2):103-111. doi:10.1002/wps.20311. PMCID PMC4911781, PMID 27265691. https://pmc.ncbi.nlm.nih.gov/articles/PMC4911781/
- **Source tier:** Peer-reviewed (narrative review article)
- **Exact quotes:** 
- "Burnout is a psychological syndrome emerging as a prolonged response to chronic interpersonal stressors on the job." (Defining Burnout)
- "The three key dimensions of this response are an overwhelming exhaustion, feelings of cynicism and detachment from the job" and "a sense of ineffectiveness and lack of accomplishment" (Defining Burnout)
- "frames job stressors in terms of person-job imbalances, or mismatches"; "six key areas in which these imbalances take place" (Conceptual models)
- "The greater is the mismatch between the person and the job, the greater the likelihood of burnout" (Conceptual models)
- "The area of values picks up the cognitive-emotional power of job goals and expectations." (Causes and outcomes)
- "Work overload contributes to burnout by depleting the capacity of people to meet the demands of the job." (Causes and outcomes)
- "the primary emphasis has been on individual strategies, rather than social or organizational ones" (Treatment and prevention)
- "Unfortunately, there is very little research that has evaluated the efficacy of any of these approaches" (Treatment and prevention)
- "It is not yet clear whether burnout is generally susceptible to a range of strategies" (Treatment and prevention)
- "Most research on burnout has involved cross-sectional designs or studies using statistical causal models." (Causes and outcomes)
- "One other critical constraint is that many of the variables have been assessed by self-report measures" (Causes and outcomes)
- **Date and recency:** 
> Published June 2016 (epub 5 June 2016). Review of research up to roughly 2015; no single data collection window.

### Claims

- **Key claims:** 
> Burnout is a syndrome of exhaustion, cynicism/detachment and reduced efficacy arising from chronic job stressors. It is framed as a mismatch between person and job across six areas of worklife (workload, control, reward, community, fairness, values). Most intervention effort has gone to individual strategies, while the organisational and social causes get less; very little research has evaluated whether any approach works.
- **Headline figures:** 
> None used. The article reports no effect sizes for the interventions discussed (civility intervention: cynicism declined, sustained at one-year follow-up; Swedish trial: no difference between two approaches). Do not cite numbers from this source.
- **Observed vs stated:** 
> Mostly self-report (MBI questionnaire); the authors note cross-sectional designs and self-report dominate.

### Burnout and remedies

- **What it measures or defines:** 
> Three dimensions: overwhelming exhaustion; feelings of cynicism and detachment from the job; a sense of ineffectiveness and lack of accomplishment. Measured with the Maslach Burnout Inventory, described as the standard research tool, designed for the three dimensions.
- **Transfer to software teams:** 
> Evidence is from other professions, mainly human services and health, and psychiatry. Transfer to software teams is plausible for the framework (workload, control, fairness) but not demonstrated by this source.

### Caveats

- **Limitations stated:** 
> "Most research on burnout has involved cross-sectional designs or studies using statistical causal models." "One other critical constraint is that many of the variables have been assessed by self-report measures." Also: "very little research that has evaluated the efficacy of any of these approaches"; interventions for psychiatrists lack "thorough research on whether these ideas are viable solutions".
- **Counter evidence:** 
> Not assessed in this pass. The MBI-based construct and its overlap with depression are debated in the wider literature; not drawn from this source.

### Essay use

- **Usable claim:** 
> Maslach and Leiter (2016) describe burnout as exhaustion, cynicism and reduced efficacy arising from a mismatch between person and job, and note that practice has leaned on individual strategies even though the causes sit largely in the workplace, while very little research has tested whether any approach works.
- **Do not use:** 
> Any effect size or percentage attributed to this paper. Any claim that organisational interventions are proven to beat individual ones (the authors say evidence is thin; the Swedish trial found no difference). Any claim about software engineers specifically.

### Fields with unverified values (those values omitted above)

- access_status
- interventions_and_effects
- mechanism_or_cause
- overlap_with_existing_essays
- sample_unit_and_population
- sponsor_and_incentive
- verification_status

## Oldenburg Burnout Inventory (Demerouti and colleagues)

### Source

- **Citation:** 
> Primary (abstract opened): Demerouti, E., Bakker, A. B., Vardakou, I., & Kantas, A. (2003). The convergent validity of two burnout instruments: A multitrait-multimethod analysis. European Journal of Psychological Assessment, 19(1), 12-23. https://doi.org/10.1027//1015-5759.19.1.12. Also abstract-only: Demerouti, E., Mostert, K., & Bakker, A. (2010). Burnout and work engagement: A thorough investigation of the independency of both constructs. Journal of Occupational Health Psychology, 15(3), 209-222. https://doi.org/10.1037/a0019408. Full text opened (secondary): Campos, J.A.D.B., Carlotto, M.S., & Maroco, J. (2012). Oldenburg Burnout Inventory - Student Version: cultural adaptation and validation into Portuguese. Psicologia: Reflexao e Critica, 25(4), 709-718. http://www.redalyc.org/articulo.oa?id=18825219010. Original instrument: Demerouti & Nachreiner (1998), Demerouti et al. (2001) [not opened].
- **Source tier:** 
> Peer-reviewed (all three). The two primary papers are journal articles; the full text actually read is a peer-reviewed secondary validation study.
- **Exact quotes:** 
- Campos 2012, introduction (secondary account of the original): "Demerouti and Nachreiner (1998) proposed the Oldenburg Inventory (OLBI) which consists of 16 items describing different states of emotional exhaustion and detachment."
- Campos 2012, introduction: "Half of the items were formulated positively and half were formulated negatively."
- Campos 2012, introduction: "based on a theoretical model that assumes that Burnout is a two-dimensional syndrome that can occur regardless of the individual's occupation."
- Campos 2012, introduction: "the MBI only considers the emotional aspects of the exhaustion dimension excluding the physical and cognitive elements."
- Demerouti 2003 abstract (as relayed by repository page, partial quote): "Results of confirmatory factor analyses supported the proposed factor structure for both instruments."
- Demerouti 2003 abstract (partial quote): "the convergent and discriminant validity of the OLBI and MBI-GS was supported"
- Campos 2012, conclusion: "Despite confirming the two-dimensional structure of the Portuguese version of OLBI-S, it had limitations regarding the convergent validity and internal consistency."
- Campos 2012, conclusion: "Factor structure was not invariant between the Brazilian and Portuguese sample pointing to the absence of cross-cultural validity"
- **Date and recency:** 
> Instrument: Demerouti & Nachreiner 1998 (German), Demerouti et al. 2001 (English). Validation papers: 2003, 2010. Student adaptation 2012. Data collection windows not captured.

### Claims

- **Key claims:** 
> OLBI is a self-report burnout measure with two dimensions, exhaustion and disengagement from work (called detachment/cynicism-like in comparisons with MBI). It was built on the premise that burnout is two-dimensional and can occur regardless of occupation. Exhaustion is meant to cover affective, physical and cognitive strain, not only emotional. Items are balanced positive/negative to avoid the MBI's wording confound. Demerouti 2003: factor structure supported and convergent/discriminant validity with the MBI-GS supported in a multitrait-multimethod design. Demerouti 2010 (abstract): across 528 workers, cynicism/dedication behaved as opposite ends of one attitude dimension, but exhaustion/vigor did not behave as opposite ends of one energy dimension, although highly correlated.
- **Headline figures:** 
> Demerouti 2003: n=232 Greek employees (banking, insurance, chemicals, per search summary). Demerouti 2010: n=528 South African construction employees. OLBI: 16 items, 4-point agreement scale (1 totally disagree to 4 totally agree), half positive and half negative (Campos 2012). Prior fit indices reported in Campos 2012 for OLBI factor model: chi2/df=1.90, GFI=.94, NFI=.90, CFI=.95, RMSEA=.062. Student version: n=958 Brazilian and 602 Portuguese students; two items dropped for low loadings (lambda<.50); Brazil exhaustion mean 2.70 (SD .48), Portugal 2.47 (SD .37); disengagement alpha=.700; correlation between OLBI-S exhaustion and disengagement .258.
- **Sample unit and population:** 
> Individual employees (2003: Greek, mixed occupations; 2010: South African construction workers) and university students (2012). No software-engineer sample in any opened source. Unit is the person, answering a questionnaire.
- **Observed vs stated:** 
> Entirely self-reported questionnaire attitudes and feelings. No behavioural or physiological measures.

### Burnout and remedies

- **Interventions and effects:** None tested or recommended in the opened sources. It is a measurement instrument.

### Essay use

- **Usable claim:** 
> The Oldenburg Burnout Inventory is a 16-item self-report questionnaire that treats burnout as two dimensions, exhaustion and disengagement from work, and was validated against the Maslach Burnout Inventory-General Survey in a 232-person Greek sample (Demerouti et al. 2003, abstract). It measures what people report feeling, so a measure built from repository activity can at most sit alongside it as a behavioural signal, not stand in for it. The second half is the essay's own inference, not the source's.
- **Do not use:** 
> Do not claim the OLBI has been validated on software engineers. Do not cite per-item content, reliability coefficients or the 8/8 item split for the original instrument without opening Demerouti et al. 2001 or 2003 in full. Do not quote the Campos student-version figures (alpha, means, invariance results) as properties of the adult OLBI. Do not say BurnRiSc approximates or correlates with the OLBI; no opened source shows that.

### Fields with unverified values (those values omitted above)

- access_status
- counter_evidence
- limitations_stated
- mechanism_or_cause
- overlap_with_existing_essays
- sponsor_and_incentive
- transfer_to_software_teams
- verification_status
- what_it_measures_or_defines

## Panagioti et al. 2017, Controlled interventions to reduce burnout in physicians (JAMA Internal Medicine)

### Source

- **Citation:** 
> Panagioti M, Panagopoulou E, Bower P, Lewith G, Kontopantelis E, Chew-Graham C, Dawson S, van Marwijk H, Geraghty K, Esmail A. Controlled Interventions to Reduce Burnout in Physicians: A Systematic Review and Meta-analysis. JAMA Internal Medicine. 2017;177(2):195-205. Published online 5 December 2016. doi:10.1001/jamainternmed.2016.7674
- **Source tier:** Peer-reviewed (systematic review and meta-analysis, JAMA Internal Medicine)
- **Access status:** 
> Fully read from the PDF (reprinted copy) via pdftotext, including the abstract, Methods, Results, Table, Discussion, Strengths and Limitations, and funding disclosures.
- **Sponsor and incentive:** 
> Funded by the UK National Institute for Health Research (NIHR) School for Primary Care Research (Study No. R119013); MRC Health eResearch Centre grant MR/K006665/1 supported Dr Kontopantelis. 'The funders had no role in the design and conduct of the study...' Conflict of interest disclosures: none reported. Nothing is sold.
- **Exact quotes:** 
- 'Interventions were associated with small significant reductions in burnout (standardized mean difference [SMD] = −0.29; 95% CI, −0.42 to −0.16; equal to a drop of 3 points on the emotional exhaustion domain of the Maslach Burnout Inventory above change in the controls).' (Abstract, Results)
- 'Twenty independent comparisons from 19 studies were included in the meta-analysis (n = 1550 physicians; mean [SD] age, 40.3 [9.5] years; 49% male).' (Abstract, Results)
- 'Subgroup analyses suggested significantly improved effects for organization-directed interventions (SMD = −0.45; 95% CI, −0.62 to −0.28) compared with physician-directed interventions (SMD = −0.18; 95% CI, −0.32 to −0.03).' (Abstract, Results)
- 'The effects of organization-directed interventions were significantly larger than the effects of physician-directed interventions (Cohen Q = 4.15, P = .04).' (Results, Types of Interventions)
- 'The strongest evidence for effectiveness was found for organization-directed interventions, but these interventions were rare.' (Key Points, Findings)
- 'Within the category of organization-directed interventions, 5 studies evaluated simple workload interventions that focused on rescheduling hourly shifts and reducing workload. Only 3 studies tested more extensive organization-directed interventions incorporating discussion meetings to enhance teamwork and leadership, structural changes, and elements of physician interventions such as communication skills training and mindfulness.' (Results, Characteristics of Interventions)
- 'The majority of organization-directed interventions that we included in the analyses introduced simple reductions in the workload or schedule changes.' (Discussion, Implications)
- 'Those that combined several elements such as structural changes, fostering communication between members of the health care team, and cultivating a sense of teamwork and job control tended to be the most effective in reducing burnout. However, such intense organization-directed interventions were rare and were not evaluated widely.' (Discussion, Implications)
- 'At present, the low quality of the research evidence does not allow firm practical recommendations, but we offer some insights for research and clinical directions.' (Discussion, Implications)
- 'The included studies differed significantly in terms of content of interventions, study design and/or quality, and length of follow-up that limit the extent to which broad conclusions can be drawn about the overall effectiveness of physician interventions.' (Discussion, Strengths and Limitations)
- 'subgroup analyses should be interpreted cautiously because other, uncontrolled differences between studies might account for the results.' (Discussion, Strengths and Limitations)
- 'Physician-directed interventions led to very small significant reductions in burnout. We found no evidence that the content (eg, mindfulness, communicational, educational components) or intensity of these interventions might increase the derived benefits...' (Discussion)
- 'If burnout is a problem of whole health care systems, it is less likely to be effectively minimized by solely intervening at the individual level. It requires an organization-embedded approach.' (Discussion)
- 'physicians expected to deal with burnout individually and remotely from their practicing organization might view physician-directed interventions as a personal responsibility (or blame themselves for being less “resilient”)...' (Discussion)
- 'This finding provides support for the view that burnout is a problem of the whole health care organization, rather than individuals.' (Abstract, Conclusions)
- **Date and recency:** 
> Published online 5 December 2016; print February 2017 (vol 177, no 2). Literature searched from inception to 31 May 2016. Included studies span 2005 to 2016. Pre-dates pandemic-era burnout work and any software or AI context.

### Claims

- **Key claims:** 
> Controlled interventions to reduce physician burnout produce small but significant reductions in emotional exhaustion (SMD -0.29). Organisation-directed interventions (SMD -0.45, a 'medium' effect) beat physician-directed ones (SMD -0.18, 'very small'), and the difference is statistically significant (Q=4.15, P=.04). Authors read this as support for burnout being a problem of the organisation, not the individual. The strongest organisation-directed approaches combined structural change, team communication and job control, but were rare. The authors also say the low quality of evidence does not allow firm practical recommendations.
- **Headline figures:** 
- Pooled effect: SMD = -0.29 (95% CI -0.42 to -0.16), I2 = 30%. Back-transformed emotional exhaustion: 15.1 intervention vs 17.9 control (assuming SD 8.97), described as a 3-point drop on the MBI emotional exhaustion subscale.
- Organisation-directed: SMD = -0.45 (95% CI -0.62 to -0.28), I2 = 8%; back-transformed EE 13.9 vs 17.9 control. Eight comparisons in Figure 3 (Ali 2011, Garland 2012, Linzer 2015a and 2015b, Lucas 2012, Parshuram 2015, Shea 2014, West 2014).
- Physician-directed: SMD = -0.18 (95% CI -0.32 to -0.03), I2 = 11%; back-transformed EE 16.2 vs 17.9 control. 12 studies (60%).
- Between-subgroup difference: Cohen Q = 4.15, P = .04.
- Sample: 19 studies, 20 independent comparisons, 1550 physicians, mean age 40.3 (SD 9.5), 49% male. 18 comparisons were RCTs (95%), 2 controlled before-after. 8 studies in the US (42%).
- Of the organisation-directed group: 5 studies tested simple workload or rescheduling interventions, 3 tested more extensive multi-component interventions.
- Experienced physicians (mean 5+ years) SMD -0.37 vs less experienced SMD -0.27; difference not significant (P = .34). Primary care SMD -0.39 vs secondary care -0.24; not significant (P = .48).
- Secondary outcomes: depersonalisation SMD -0.21; personal accomplishment SMD 0.30. Low-risk-of-bias studies only: SMD -0.32.
- Intervention duration 2 weeks to 9 months; follow-up 1 day to 18 months. No funnel plot asymmetry (Egger P = .11).
- **Sample unit and population:** 
> 1550 physicians across 19 controlled studies (20 comparisons) in primary care (7 studies), secondary care including ICU, oncology, surgery and residents (10), and mixed (2). Physicians had to make up at least 70% of the sample (one study retained at 67%). Not software engineers. Studies mostly had residents/interns or practising doctors working shifts; no knowledge workers outside medicine.
- **Observed vs stated:** 
> Stated. Burnout was self-reported on a questionnaire; all but one study used the Maslach Burnout Inventory, and the meta-analysis used only the emotional exhaustion subscale. No physiological or behavioural measures.

### Burnout and remedies

- **What it measures or defines:** 
> Defines burnout as 'a syndrome consisting of emotional exhaustion, depersonalization, and a diminished sense of personal accomplishment, which is primarily driven by workplace stressors.' Core outcome is the emotional exhaustion domain of the MBI, chosen because it is 'considered the most central aspect of burnout'. Depersonalisation and personal accomplishment were analysed only as sensitivity analyses.
- **Mechanism or cause:** 
> Leading drivers named: 'excessive workload, imbalance between job demands and skills, a lack of job control, and prolonged work stress.' Authors describe a shift from viewing burnout as an individual problem to one of the organisation, 'rooted in issues related to working environment and organizational culture'. Their reading of the larger organisation-directed effect is that burnout is rooted in organisational coherence, so individual-level interventions alone are less likely to work.
- **Interventions and effects:** 
> Physician-directed (12 studies, 60%): mindfulness-based stress reduction, communication skills training, stress management, self-care workshops, debriefing/discussion groups, exercise. Pooled SMD -0.18, 'very small'. Authors found no evidence that content or intensity changed the benefit. Organisation-directed (8 comparisons): mostly workload and schedule changes (shift rotation length, intensivist staffing schedules, protected sleep time for interns, overnight shift length, e.g. Ali, Lucas, Parshuram, Shea); 3 studies were multi-component (teamwork, quality improvement, communication, workflow changes, protected paid time for facilitated discussion groups, e.g. Linzer 2015, West 2014). Pooled SMD -0.45. Authors say the multi-component ones tended to be most effective but were rare. Caution: the headline 'organisation-directed' effect is dominated by Lucas 2012 (weight 48.7% within the subgroup, SMD -0.44). Individual organisation-directed effects ranged from -0.10 (Parshuram) to -0.98 (Linzer 2015b). Note West 2014 was classed organisation-directed although it is built from mindfulness and discussion-group elements with institution-funded protected time.
- **Transfer to software teams:** 
> Indirect. All evidence is from physicians in clinical settings (shift-based, patient-facing, many residents). No software engineers. The logic that workload and schedule changes and team-level structural change beat individual coping training is plausible to carry across, but the specific effect sizes should not be assumed to transfer. Use as medical-profession evidence about the relative value of organisational versus individual remedies.

### Caveats

- **Limitations stated:** 
> Quotes: 'The included studies differed significantly in terms of content of interventions, study design and/or quality, and length of follow-up that limit the extent to which broad conclusions can be drawn about the overall effectiveness of physician interventions.' 'subgroup analyses should be interpreted cautiously because other, uncontrolled differences between studies might account for the results.' 'At present, the low quality of the research evidence does not allow firm practical recommendations.' Also: organisation-directed interventions 'were rare and were not evaluated widely'; 'other unexamined factors at the process of the intervention delivery or at the participant level might account for the observed differences'. Authors also note gray literature was excluded, and the 3-point back-transformation was done 'under certain assumptions'. Stated strengths: 20 comparisons, low to moderate heterogeneity (I2 30%), no funnel plot asymmetry.
- **Counter evidence:** 
> Authors concede the subgroup comparison (organisation vs physician) is not randomised and could be confounded by other study differences; the P value is borderline (.04). The organisation-directed subgroup is only 8 comparisons and is dominated by one study (Lucas 2012, 48.7% weight). Most organisation-directed interventions were workload or schedule tweaks, so the result does not show that culture or system redesign works. Experience and setting subgroup differences were not significant. Follow-up was often short (many post-intervention only). Studies were not selected for people with high burnout (none targeted a severity level). Later literature on physician burnout interventions is outside this source.

### Essay use

- **Usable claim:** 
> A 2017 JAMA Internal Medicine meta-analysis of 19 controlled studies (1,550 physicians) found interventions produced small reductions in burnout (SMD -0.29, about 3 points on the MBI emotional exhaustion scale). Interventions aimed at the organisation did better (SMD -0.45) than those aimed at the individual physician (SMD -0.18), and the authors read that as support for burnout being an organisational problem. Most of the organisation-directed interventions were simple workload or schedule changes, and the authors say the evidence is too low in quality for firm practical recommendations. The evidence is from doctors, not software engineers.
- **Do not use:** 
> Do not say the organisation-directed effect proves system or culture change works: most were rescheduling or workload cuts, and the fuller multi-component programmes were only 3 studies. Do not present -0.45 as a causal head-to-head result (the subgroup comparison is non-randomised and borderline at P=.04). Do not describe the individual-level effect as zero; it was small but significant. Do not claim the findings apply to software engineers. Do not claim the paper says mindfulness 'doesn't work'. Do not quote the 3-point drop as clinically decisive; the authors say 'important benefits' but also 'low quality' evidence.

### Fields with unverified values (those values omitted above)

- overlap_with_existing_essays
- verification_status

## Kiratipaisarl et al. 2024, burnout interventions in resident physicians (BMC Medical Education)

### Source

- **Source tier:** 
> Peer-reviewed (BMC Medical Education, open access CC BY 4.0). Systematic review and meta-analysis, PROSPERO CRD42022349698.
- **Access status:** 
> Fully read via the PMC HTML full text (abstract, introduction through results, GRADE table 2, discussion, limitations, conclusions). Supplementary appendices (per-study data, forest plots, funnel plots) not opened.
- **Sponsor and incentive:** 
> No funding received. Authors declare no competing interests. Chiang Mai University, Faculty of Medicine. No commercial incentive.
- **Exact quotes:** 
- "We identified 33 eligible studies (n = 2536), comprising 25 (75.8%) individual intervention studies and 8 (24.2%) organizational intervention studies." (Abstract, Results)
- "The organizational intervention showed no significant association with any domain." (Abstract, Results)
- "The effectiveness of intervention demonstrated none to small practical significance in improving burnout. Data inconsistency and high risk of bias across studies limited the validity of the pooled results." (Abstract, Conclusions)
- "All studies across different domains were predominantly non-randomized. Consequently, according to the GRADE evidence profile, we initially established low quality of evidence. However, due to the high risk of bias, we downgraded the quality assessment further, resulting in all studies providing very low quality of evidence" (Results, GRADE evidence profile)
- "Firstly, we included in our search strategy only the MBI as diagnostic tool for burnout." (Discussion, limitations)
- "Thirdly, the included studies' risk of bias was high ... due to subjective participant-reported outcomes without blinding and inadequate confounder control in non-randomized studies" (Discussion, limitations)
- "Fourthly, organizational interventions were limited in varieties and numbers, which may result in underpower in detecting the true effect sizes." (Discussion, limitations)
- "Changes in work hours can pose challenges to the continuity of patient care and shift transitions ... abrupt mandatory changes imposed by overseeing organizations may be perceived negatively by resident physicians, who may see them as a reduction in their already limited autonomy over work hours" (Discussion)
- "Further studies should prioritize a combined approach, integrating both individual and organizational interventions" (Conclusions)

### Claims

- **Key claims:** 
> Individual interventions (coaching, meditation) reduced emotional exhaustion and depersonalization by small amounts versus control. Organizational interventions (work-hour changes, learning-environment changes) showed no significant pooled effect on any MBI domain. Authors judge practical significance as none to small, certainty as very low (GRADE) for every outcome, and recommend combined individual plus organizational approaches in future studies. Subgroup hints: coaching helped EE, meditation helped PA, learning-environment changes helped PA, work-hour changes helped little; interventions longer than 6 months looked better for EE/DP.
- **Headline figures:** 
- Pooled individual interventions vs control, post-intervention Cohen's d: EE -0.25 (95% CI -0.40 to -0.11, I2 49.3%); DP -0.17 in abstract but -0.18 in results text (95% CI -0.32 to -0.03, p=0.02, I2 50.0%); PA 0.18 (95% CI 0.00 to 0.35, p=0.05, I2 57.2%), not significant.
- Pooled organizational interventions: EE -0.22 (95% CI -0.47 to 0.04, p=0.10, I2 62.6%); DP -0.15 (-0.38 to 0.08, p=0.21); PA 0.12 (-0.01 to 0.25, p=0.07). None significant.
- Coaching subgroup (16 studies): EE -0.24 (95% CI -0.40 to -0.07, I2 41.6%); DP -0.20 (-0.41 to 0.01); PA 0.16 (-0.10 to 0.42).
- Meditation subgroup (9 studies): PA 0.22 (95% CI 0.03 to 0.40, p=0.02, I2 0%). EE reported as -0.30 (-0.61 to 0.02, p=0.25) in results text but -0.33 (-0.59 to -0.08) in GRADE table.
- Work-hour subgroup (6 studies in text; 5 cited): EE -0.20 (-0.58 to 0.17), DP -0.16, PA 0.04. All non-significant.
- Improved-learning-environment subgroup (2 historical-control studies, 161 intervention vs 148 control... as listed): PA 0.28 (0.05 to 0.50); EE and DP non-significant.
- Organizational studies lasting 6+ months: EE -0.33 (-0.60 to -0.07), DP -0.28 (-0.48 to -0.08); under 6 months: nothing.
- Screening: 1283 records, 496 duplicates removed, 787 screened, 113 full text retrieved, 53 'met the criteria' then 33 eligible. Total n=2536. 25 individual studies (16 coaching, 9 meditation), 8 organizational (6 work-hour, 2 learning environment).
- **Sample unit and population:** 
> 33 controlled studies of resident (postgraduate trainee) physicians across specialties, total n=2536 (pooled per-arm counts differ by outcome). Control designs mixed: historical-control, self-control (pre/post), and RCT; the authors say studies were predominantly non-randomized. Not software engineers.
- **Observed vs stated:** 
> Entirely self-reported. Outcome is Maslach Burnout Inventory scores (22-item, 16-item, 20-item, 9-item abbreviated versions). No blinding. No observed behaviour or physiological measures.

### Burnout and remedies

- **What it measures or defines:** 
> Burnout defined by WHO as an occupational phenomenon from prolonged exposure to psychosocial workplace risk factors, operationalised through the Maslach three-domain model: high emotional exhaustion (EE), high depersonalization (DP), low personal accomplishment (PA). Only studies using the MBI were searched; mixed MBI versions were pooled as standardised mean differences (Cohen's d). Practical significance judged against Cochrane Handbook thresholds.
- **Mechanism or cause:** 
> Not tested. Introduction cites psychosocial workplace risk factors (WHO) and Maslach framework. Discussion speculates that work-hour mandates reduce residents' autonomy and disrupt shift handovers and continuity of care, while workflow streamlining and food catering disrupt less.
- **Interventions and effects:** 
> Individual: coaching (positive psychology workshops, resilience, stress management, soft skills; EE -0.24) and meditation or mindfulness (PA +0.22). Organizational: work-hour modification (shift length, hour limits, day of rest after a shift; no significant effect) and improved learning environment (workflow streamlining, healthy snacks, continuous assessment of burnout and learning environments; PA +0.28, only 2 studies). Authors suggest coaching 1 to 2 h/week, 1 to 2 times a month, for 6 to 12 months; evaluation of work-hour changes after 2 to 4 months; learning environment changes over 1 to 2 years. Qualitative synthesis favours bundling individual and organizational approaches. All tested on resident physicians.
- **Transfer to software teams:** 
> Weak. Evidence is from physician trainees, not engineers or open source. Residency has distinct features (mandated hours, patient-safety handover, training status). Most useful as a caution: even in a large healthcare literature, interventions show small effects and low-certainty evidence, and the organizational side is under-studied rather than shown ineffective.

### Caveats

- **Limitations stated:** 
> MBI only, other tools excluded; assumed comparability of control and intervention types leading to heterogeneity (I2 up to ~70% in subgroups); population heterogeneity across specialties and cultures; high risk of bias from subjective unblinded outcomes and inadequate confounder control in non-randomized studies; few and varied organizational studies, so possibly underpowered. Participant compliance noted as a critical consideration. Authors report no publication bias from funnel plots (supplement not opened).
- **Counter evidence:** 
> Internal inconsistencies weaken the headline: (1) DP pooled is -0.17 in abstract and -0.18 in results; (2) meditation EE is -0.30 (CI -0.61 to 0.02, p=0.25) in text but -0.33 (CI -0.59 to -0.08) in GRADE table; (3) coaching EE p=0.04 and subgroup p-values do not always match their CIs (e.g. EE -0.22 CI -0.47 to 0.04 p=0.10 plausible, but others odd); (4) the work-hour group has 6 studies in the GRADE table but 5 citations; (5) conclusion states organizational interventions 'resulted in small but significant enhancements in PA' though the pooled organizational PA was non-significant and the claim rests on 2 historical-control studies; (6) a significant PA effect (0.18, p=0.05) is described as non-significant; (7) results say 53 studies 'met the criteria' then 33 eligible, reasons unclear in main text; (8) search window dates in abstract inconsistent with 2022 registration. Subgroup claims (coaching vs meditation) are labelled exploratory. Earlier reviews (Panagioti 2017) found organizational interventions were at least as effective, so this review's null on organizational may reflect power, not absence of effect.

### Essay use

- **Usable claim:** 
> A 2024 meta-analysis of 33 mostly non-randomized studies in resident physicians found that individual interventions such as coaching and meditation reduced self-reported emotional exhaustion by a small amount (d about -0.25), while organizational interventions showed no statistically significant pooled effect. The authors rated the certainty of all outcomes as very low and called for combined individual and organizational approaches. The null organizational result is attributed partly to few, varied studies.
- **Do not use:** 
> Do not say organizational interventions do not work; the review says underpowered. Do not cite the subgroup 'meditation improves PA' or 'learning environment improves PA' as findings (exploratory, 2 studies for learning environment). Do not quote DP or meditation EE figures without noting the abstract/results/table mismatches. Do not present results as applying to software engineers. Do not use the suggested dose (1 to 2 h/week for 6 to 12 months) as evidence-based.

### Fields with unverified values (those values omitted above)

- citation
- date_and_recency
- overlap_with_existing_essays
- verification_status

## West, Dyrbye and Shanafelt, Interventions to prevent and reduce physician burnout (Lancet 2016) and Springer 2019 organisational strategies review

### Source

- **Citation:** 
> (1) West CP, Dyrbye LN, Erwin PJ, Shanafelt TD. Interventions to prevent and reduce physician burnout: a systematic review and meta-analysis. Lancet 2016;388(10057):2272-2281, published online 28 Sep 2016. doi:10.1016/S0140-6736(16)31279-X, PMID 27692469. (2) De Simone S, Vargas M, Servillo G. Organizational strategies to reduce physician burnout: a systematic review and meta-analysis. Aging Clin Exp Res 2021;33(4):883-894, published online 9 Oct 2019. doi:10.1007/s40520-019-01368-3, PMID 31598914. Note: the 2019 review is by De Simone et al, not Springer-as-author; Springer is the publisher.
- **Source tier:** Peer-reviewed (both systematic reviews with meta-analysis)
- **Exact quotes:** 
- West 2016 (PubMed abstract): "The literature indicates that both individual-focused and structural or organisational strategies can result in clinically meaningful reductions in burnout among physicians."
- West 2016: "Further research is needed to establish which interventions are most effective in specific populations, as well as how individual and organisational solutions might be combined to deliver even greater improvements in physician wellbeing than those achieved with individual solutions."
- West 2016: "We identified 2617 articles, of which 15 randomised trials including 716 physicians and 37 cohort studies including 2914 physicians met inclusion criteria."
- De Simone 2019 (PubMed abstract): "Pooled interventions were associated with small significant reductions in burnout (SMD = - 0.289; 95% CI, - 0.419 to - 0.159; I2 = 29%)"
- De Simone 2019: "Organization-directed interventions were associated with a medium reduction in burnout score (SMD = - 0.446; 95% CI, - 0.619 to - 0.274; I2 = 8%) while physician-directed interventions were associated with a moderate reduction in burnout score (SMD = - 0.178; 95% CI, - 0.322 to - 0.035; I2 = 11%)."
- De Simone 2019: "physicians could gain important benefits from interventions to reduce burnout, especially from organizational strategies, by viewing burnout rooted in issues related to the working environment and organizational culture."
- **Date and recency:** 
> West 2016: searches from inception to 15 Jan 2016; published 28 Sep 2016 online (Lancet 5 Nov 2016). De Simone: searches to September 2018; online 9 Oct 2019, print April 2021. Both are 7-10 years old as of 2026.

### Claims

- **Key claims:** 
> West 2016: interventions of both individual-focused and structural/organisational kinds are associated with clinically meaningful reductions in physician burnout; unclear which are best or how to combine them. De Simone 2019: organisation-directed interventions reduce burnout more than physician-directed ones, and also reduce depersonalisation more and improve personal accomplishment more; the authors read burnout as rooted in working environment and organisational culture.
- **Sample unit and population:** 
> West: 15 randomised trials (716 physicians) and 37 cohort studies (2914 physicians); practising and training physicians; medical students and non-physician providers excluded. De Simone: physicians of any specialty in primary, secondary or intensive care, including residents and fellows. Neither includes software engineers.
- **Observed vs stated:** 
> Self-reported burnout scales (validated instruments, typically Maslach-type) for both; no observed behaviour or physiology reported in the abstracts.

### Burnout and remedies

- **Mechanism or cause:** 
> West abstract gives no causal mechanism beyond noting consequences. De Simone frames burnout as rooted in 'issues related to the working environment and organizational culture'.
- **Transfer to software teams:** 
> Evidence is entirely from physicians (clinical settings, many residents). Plausible transfer of the general direction (fix work environment, not just teach coping) but nothing here is software-specific; workload, autonomy and staffing contexts differ.

### Essay use

- **Usable claim:** 
> A 2016 Lancet meta-analysis of physician burnout interventions (15 randomised trials and 37 cohort studies) found that burnout rates fell from 54% to 44% on average, and that both individual and organisational approaches helped. A 2019 meta-analysis found organisation-directed interventions had a larger effect (SMD -0.45) than physician-directed ones (SMD -0.18). Evidence is from physicians, not software engineers.
- **Do not use:** 
> Do not say West showed organisational beats individual (it did not compare them in the abstract). Do not call the 2019 work 'Springer' research or cite specific intervention types or counts not in the abstracts. Do not present the 54% to 44% as a causal effect of any one programme (largely pre-post data). Do not quote the 'moderate' wording for -0.178.

### Fields with unverified values (those values omitted above)

- access_status
- counter_evidence
- headline_figures
- interventions_and_effects
- limitations_stated
- overlap_with_existing_essays
- sponsor_and_incentive
- verification_status
- what_it_measures_or_defines

## Trinkenreich et al. 2023, A Model for Understanding and Reducing Developer Burnout (ICSE SEIP)

### Source

- **Citation:** 
> Trinkenreich, B., Stol, K.-J., Steinmacher, I., Gerosa, M. A., Sarma, A., Lara, M., Feathers, M., Ross, N., Bishop, K. 'A Model for Understanding and Reducing Developer Burnout'. ICSE-SEIP 2023 (arXiv:2301.09103v2, 24 Jan 2023). https://arxiv.org/abs/2301.09103
- **Source tier:** 
> Peer-reviewed conference paper (ICSE Software Engineering in Practice track), read here as the arXiv preprint v2.
- **Access status:** 
> Fully read (arXiv PDF v2 text extracted and read: design, measures, results, Table III, threats to validity). Not checked against the published IEEE version.
- **Exact quotes:** 
- 'Our results show that Organizational Culture, Climate for Learning, Sense of Belonging, and Inclusiveness are positively associated with Work Satisfaction, which in turn is associated with Reduced Burnout.' (Abstract)
- 'We propose a series of hypotheses as associations between different constructs rather than causal relationships, as the present study is a sample study, rather than an experimental study' (Sec. VI.A.2, Internal Validity)
- 'While instruments exist to measure burnout, these are very long, which would result in an overly long survey instrument. We took a pragmatic approach and focused on two statements' (Sec. III.A)
- 'We acknowledge the fact that Burnout is a construct that can be measured by more complex instruments' (Sec. VI.A.1)
- 'We received 10,566 responses; however, our analysis techniques require complete responses, and we removed 7,285 responses that contained blanks. Our final sample size has 3,281 responses.' (Sec. III.B)
- 'Respondents are current employees and we did not collect data from past employees.' (Sec. VI.A.2)
- 'Additional studies that replicate our findings in other companies can further bolster our results.' (Sec. VI.A.3)
- 'Work Satisfaction has a reverse (negative) and significant association with Burnout (H7, B=-0.29).' (Sec. V.A)

### Claims

- **Key claims:** 
> A hypothesised model, tested with PLS structural equation modelling, finds that a generative (Westrum) organisational culture is positively associated with sense of belonging, climate for learning and inclusiveness; each of those is positively associated with work satisfaction; work satisfaction is negatively associated with burnout. H1-H7 supported. National culture (Hofstede's six dimensions, from country of residence) does not significantly moderate the work satisfaction to burnout link in the full sample. Multi-group: inclusiveness matters more for women; climate for learning matters for non-leaders but not leaders. The paper frames everything as association, not cause.
- **Sample unit and population:** 
> Current members of software delivery teams at one company, Globant (about 25,000 staff, 17 countries). 74.8% men (2,487), 25.2% women (794). Countries: Colombia 24%, Argentina 22%, India 17.7%, Mexico 15.7%, others smaller. Roles: developers 52.5%, test/QA 20%, business analysts 4.8%, ERP, DevOps, designers and others. 299 in leadership positions, 2,982 not. So software delivery staff, mostly engineers, but not all developers.

### Burnout and remedies

- **What it measures or defines:** 
> Burnout defined as 'an individual's experiences of exhaustion on physical, emotional, and cognitive levels' (citing Freudenberger lineage). Measured by only two five-point Likert items, reverse-scored, and both are about the TEAM, not the individual: (1) team has a manageable workload with sustainable stress and burnout not seen as a significant problem or risk; (2) tasks assigned allow enough time to meet commitments and members can focus on one thing at a time. Not Maslach (MBI), not Copenhagen, not any validated individual burnout scale. It is closer to a perceived team workload/stress-climate measure. Work satisfaction: two eNPS items (recommend team, recommend company, 10-point) plus one enjoyment Likert item. Inclusiveness is a single item; belonging a single item; climate for learning two items (DORA-inspired); culture six items (Westrum).
- **Mechanism or cause:** 
> Proposed chain: generative culture (information flow, cooperation, blameless handling of bad news) leads to belonging, learning climate and inclusiveness, which raise work satisfaction, which reduces burnout. Mediation is theorised; the data are cross-sectional so the order is assumed, not shown. Work satisfaction mediates in the model; there is no path from workload or job demands directly.
- **Interventions and effects:** 
> None tested. Recommendations only: build a generative culture (cross-functional teams, blameless postmortems, shared risk, breaking down silos), a climate for learning, and inclusive teams. No effect sizes for interventions, only cross-sectional path coefficients. Strongest single association with burnout is work satisfaction at -.29 (R2 for burnout .33 overall).
- **Transfer to software teams:** 
> Sample is software delivery staff, so population is relevant, but it is one company, majority Latin American and Indian offices, 75% men. Authors say replication in other companies is needed. Survey says nothing about AI agents or oversight work.

### Caveats

- **Limitations stated:** 
> Associations not causal ('sample study, rather than an experimental study'); burnout measured with two pragmatic items rather than a validated instrument; country of residence is an imperfect proxy for national culture (unknown tenure in country, origin culture may differ); only current employees (survivor bias, no leavers); single company, 'Additional studies that replicate our findings in other companies can further bolster our results'.

### Essay use

- **Usable claim:** 
> In a survey of 3,281 software delivery staff at one large company, a more generative team culture (blame-free, information shared, bad news welcome) was associated with higher work satisfaction, which was in turn associated with lower self-reported burnout (standardised coefficient -.29). The study is cross-sectional and the authors say it shows associations, not causes. Burnout was measured by two team-level survey items.
- **Do not use:** 
> Any causal wording ('reduces', 'causes', 'prevents') on the model despite the title; the 'women 2x less burnt out' claim; the 31% usable response rate as a response rate; any claim that burnout was measured with an established scale; generalisation to all developers or to AI-assisted work.

### Fields with unverified values (those values omitted above)

- counter_evidence
- date_and_recency
- headline_figures
- observed_vs_stated
- overlap_with_existing_essays
- sponsor_and_incentive
- verification_status

## Trinkenreich et al. 2026, Guidelines for Cultivating a Sense of Belonging to Reduce Developer Burnout (IEEE Software)

### Source

- **Source tier:** 
> Peer-reviewed magazine article (IEEE Software), here seen as an arXiv preprint copy. A practitioner-oriented synthesis of the authors' own prior studies, not new data.
- **Access status:** 
> Fully read: PDF opened and text extracted (pdftotext); abstract page also read. Figures 1-3 are images and were not read; only their captions.
- **Sponsor and incentive:** 
> Acknowledgment: 'This work is partially supported by the National Science Foundation under Grant Numbers 1900903 and 2303612.' Nothing sold. Authors are reviewing their own research programme, so some self-citation bias is plausible.
- **Exact quotes:** 
> 1) 'Our previous research showed that lack of belonging is associated with higher levels of burnout in software developers.' (abstract). 2) 'we conducted three studies within different software development environments, including open-source and closed-source environments' (section Deciphering Belongingness). 3) 'Based on the evidence found during quantitative analysis of belongingness in Open Source Software and IT industry contexts, we propose guidelines for leaders to cultivate belongingness in the team and thus, reduce burnout. All guidelines presented here are backed by evidence previously collected or supported by the literature.' (section Improving Belongingness). 4) 'Sense of belonging has been shown to prevent or reduce burnout by increasing job satisfaction [3].' (Resilience section). 5) 'Consistency involves regular recognition, ideally quarterly, to maintain impact without overwhelming.' (recognition). 6) 'Gartner's research [12] indicates that offering tangible benefits that cater to diverse needs, such as flexible work schedules and emotional well-being programs, enhances feelings of inclusion by as much as 38%, especially for minorities.' (benefits). 7) 'Identifying burnout signals is an open challenge for further investigation.' (monitoring section).
- **Date and recency:** 
> arXiv v1 7 May 2026; IEEE Software 42(2), 2025. Underlying studies: Study 1 ICSE-SEIP 2023, Study 2 ICSE 2023, Study 3 ICSE 2024 (survey data collected before those dates; collection window not stated in this paper).

### Claims

- **Key claims:** 
> A synthesis, no new data. Eight guidelines for leaders: (1) Timely and consistent recognition; (2) Transparent promotion rules and no glass ceiling; (3) Diverse benefits and initiatives so everyone feels included; (4) Create intentional connections through collaborative tools; (5) Conduct blameless postmortems; (6) Create optional in-person opportunities; (7) Engage newcomers through informal gatherings; (8) Monitoring and adjusting course of initiatives. Evidence basis per guideline as the paper presents it: G1 recognition rests on Study 1 via ref [3] (positive leadership feedback linked to belonging and lower burnout) and Study 3 (work appreciation correlates with belonging), plus a Gartner citation [12]; the 'ideally quarterly' cadence and the tailoring advice carry no cited data. G2 promotion rests on the Study 3 gender finding (women non-leaders report less belonging), ref [13] (earlier OSS work on becoming a maintainer) and argument; no test of a promotion intervention. G3 benefits rests on Gartner industry research [12] (38% figure), not the authors' studies. G4 connections rests on Study 2 (mutual support, knowing and being known in Linux Kernel) and a pair-rotation paper [14]. G5 blameless postmortems rests on Study 3 (psychological safety correlates with belonging) and Study 1 (generative culture) via [3]; the retrospective practice is recommended, not tested. G6 in-person rests on Study 2/3 friendship and trust characteristics plus ref [15] (psychological safety going remote); examples DevOps Days and Linux Foundation events. G7 newcomers rests on Study 2 and 3 tenure findings (longer tenure, more belonging); ice-breakers are suggested without evidence. G8 monitoring: monthly three or four question surveys are suggested; no cited evidence; burnout detection from repositories is called an open challenge [16]. Core logic: belonging correlates with job satisfaction, which correlates with lower burnout; the guidelines assume belonging can be raised by these practices and that doing so lowers burnout. The paper states no tested intervention.
- **Headline figures:** 
> Study 1: 3,281 survey responses, software delivery team members, proprietary software company (one global tech company), 2023 (ICSE-SEIP). Study 2: 318 survey responses, Linux Kernel contributors, ICSE 2023. Study 3: 10,781 survey responses, software development team members at another proprietary software company, ICSE 2024. Gartner: benefits 'enhances feelings of inclusion by as much as 38%' (third-party, not defined further here). 'ideally quarterly' recognition (no data). No effect sizes, correlation coefficients or p-values appear in the paper.
- **Sample unit and population:** 
> Software professionals only: team members at two proprietary-software companies (Study 1 n=3,281; Study 3 n=10,781; roles include leaders and non-leaders) and Linux Kernel contributors (Study 2 n=318, mix of volunteers and paid). Individual survey respondents, cross-sectional.
- **Observed vs stated:** 
> All self-reported survey responses (belonging, satisfaction, burnout, psychological safety). Associations are statistical correlations from models, not observed behaviour or experiments. Guidelines themselves are recommendations.

### Burnout and remedies

- **Mechanism or cause:** 
> Lack of belonging leads to isolation and lower job satisfaction, which is associated with higher burnout. Study 1 key finding: organizational culture, climate for learning, belonging and inclusiveness are positively associated with work satisfaction, 'which in turn is associated with Reduced Burnout'. Belonging is also said to support resilience. Burnout is treated as an outcome of low satisfaction and isolation, not of workload, which is not discussed.
- **Interventions and effects:** 
> None tested. The eight guidelines are recommendations derived from correlational findings and literature. No effect sizes for any intervention. Only numeric effect claim is Gartner's 'as much as 38%' for inclusion from tangible benefits (not belonging or burnout). Factors found associated with belonging: Study 2: intrinsic motivations (kinship, fun) positive, English proficiency positive, tenure positive, power distance negative, gender minorities weaker. Study 3: psychological safety and work appreciation positive, tenure positive, power distance negative, women lower (women non-leaders lower than women leaders).
- **Transfer to software teams:** 
> Evidence is from software engineers (two companies, plus Linux Kernel), so transfers directly in population, but two single-company case studies and one OSS project limit generalisation. Gartner, pair rotation, and psychological-safety-remote references are from other or mixed contexts. The belonging-to-burnout link comes from one company (Study 1).

### Caveats

- **Limitations stated:** 
> The paper does not have a limitations section. Related statements: 'While numerous variables can influence these initiatives' outcomes, evaluating their effectiveness consistently remains essential.' On burnout detection from repositories: 'the effectiveness of these techniques is not universal due to contextual factors not possible to collect via archival data.' 'Identifying burnout signals is an open challenge for further investigation.'
- **Counter evidence:** 
> Not discussed in the paper. Observations: correlational cross-sectional surveys cannot show that belonging causes less burnout (reverse causation or common-cause plausible); satisfaction is the stated mediator; workload and job demands, the main drivers in other burnout models, are absent; guidelines untested; the same group authored all underlying studies. Stronger burnout-intervention evidence (e.g. organisation-directed interventions) should be taken from other sources.

### Essay use

- **Usable claim:** 
> Trinkenreich and colleagues, drawing on their own surveys of 3,281 and 10,781 developers at two companies and 318 Linux Kernel contributors, report that sense of belonging is associated with higher job satisfaction and lower burnout, and propose eight practices for leaders. These are recommendations from correlational data and have not been tested as interventions.
- **Do not use:** 
> Do not say the guidelines are proven to reduce burnout or cite effect sizes. Do not use the Gartner 38% figure as evidence about burnout or belonging. Do not use 'ideally quarterly' recognition as an evidence-based cadence. Do not present it as new research.

### Fields with unverified values (those values omitted above)

- citation
- overlap_with_existing_essays
- verification_status
- what_it_measures_or_defines

## Open source maintainer burnout evidence

### Source

- **Citation:** 
> (1) Raman, N., Cao, M., Tsvetkov, Y., Kästner, C., Vasilescu, B. 'Stress and Burnout in Open Source: Toward Finding, Understanding, and Mitigating Unhealthy Interactions'. ICSE 2020 NIER, 8 July 2020. https://2020.icse-conferences.org/details/icse-2020-New-Ideas-and-Emerging-Results/13/Stress-and-Burnout-in-Open-Source-Toward-Finding-Understanding-and-Mitigating-Unhe ; preprint https://cmustrudel.github.io/papers/raman20toxicity.pdf. (2) Tidelift, '2023 state of the open source maintainer report' (survey fielded late 2022); summary post by Chris Grams, 25 May 2023: https://dev.to/tidelift/maintainer-burnout-is-real-almost-60-of-maintainers-have-quit-or-considered-quitting-maintaining-one-of-their-projects-51ma
- **Source tier:** 
> (1) Peer-reviewed short paper (NIER track, emerging results). (2) Company research (Tidelift survey) reported via Tidelift's own blog post.
- **Sponsor and incentive:** 
> (1) Academic (CMU, UMD); no sponsor checked in the text I read. (2) Tidelift sells paid maintainer and open source supply-chain services, so it has an incentive to stress maintainer strain.
- **Date and recency:** 
> Raman et al.: presented July 2020; issue data covers 2012-2018. Tidelift: survey late 2022, post May 2023. A 2024 Tidelift survey exists (reported ~60% quit or considered quitting) but I did not open it.

### Claims

- **Key claims:** 
> Raman et al.: toxic conversations may demotivate and burn out developers; they build an SVM toxicity classifier for GitHub issues; toxicity is rare, varies by community, lower in corporate projects, and fell 2012-2018. The paper frames burnout as motivation and research agenda, not a measured outcome. Tidelift: most maintainers have quit or thought of quitting; 44% reported burnout.
- **Headline figures:** 
> Tidelift 2023 (survey late 2022): 58% quit (22%) or considered quitting (36%) maintaining a project; 43% had not; 54% cite other life/work priorities; 51% lost interest; 44% 'experiencing burnout'. Raman: ~6 toxic issues per 1,000; classifier precision 0.91, recall 0.42 on validation; 50% precision on 100 hand-checked random-sample predictions; 1,732,124 issues classified in the longitudinal study. 22%+36% = 58% checks arithmetically.
- **Sample unit and population:** 
> Raman: GitHub issues from GHTorrent (not people), open source projects generally. Tidelift: open source maintainers who responded to Tidelift's survey, 'hundreds' (exact n not found; I did not open the full report). Self-selected respondents. Not specific to professional software teams.
- **Observed vs stated:** Raman: observed text (issue comments), no burnout measured. Tidelift: self-reported.

### Burnout and remedies

- **Mechanism or cause:** 
> Raman: frequent demands for features and fixes, sometimes aggressive in tone, from users (abstract per ICSE page; also preprint intro). Tidelift: quitting reasons were other priorities (54%) and lost interest (51%); burnout is one of several.
- **Interventions and effects:** 
> Raman: none tested; proposes automated detection and future mitigation. Tidelift blog: no tested interventions with effect sizes found in what I read; maintainer pay and support are the company's pitch.
- **Transfer to software teams:** 
> Weak. Open source maintainers are often unpaid volunteers facing users, unlike employed teams. Useful as an analogy for demand pressure and tone, not as an employee burnout rate.

### Caveats

- **Counter evidence:** 
> Raman finds toxicity declining 2012-2018 and rare (~0.6% of issues), which cuts against a simple rising-toxicity story. Tidelift's 44% is a self-selected, vendor-run survey. The 22%+36% quitting figure is not burnout.

### Essay use

- **Usable claim:** 
> In Tidelift's 2023 maintainer survey (fielded late 2022), 58% of respondents said they had quit or considered quitting maintaining a project, and Tidelift reports 44% said they were experiencing burnout. Raman et al. (2020) argue toxic issue conversations can burn out developers but did not measure burnout; they found toxic issues rare and declining 2012-2018.
- **Do not use:** 
> Do not say Raman et al. found or measured burnout rates. Do not equate 58% with burnout. Do not use Linux Foundation or GitHub figures (unverified). Do not use the 2024 Tidelift ~60% figure (not opened). Do not present 44% as representative of all developers.

### Fields with unverified values (those values omitted above)

- access_status
- exact_quotes
- limitations_stated
- overlap_with_existing_essays
- verification_status
- what_it_measures_or_defines

## Electronic performance monitoring and employee stress

### Source

- **Citation:** 
> Ravid, D. M., White, J. C., Tomczak, D. L., Miles, A. F., & Behrend, T. S. (2023, online 2022). A meta-analysis of the effects of electronic performance monitoring on work outcomes. Personnel Psychology, 76(1), 5-40. DOI 10.1111/peps.12514. PDF opened: https://www.Gwern.net/doc/sociology/technology/2022-ravid.pdf. Note: not Journal of Applied Psychology. Earlier 2020 Microsoft Research New Future of Work version exists (separate typology review: Ravid et al. 2020, Journal of Management).
- **Source tier:** Peer-reviewed (meta-analysis)
- **Access status:** 
> Fully read via full-text PDF (Wiley copy hosted on gwern.net); text extracted and relevant sections (abstract, Tables 2-5, discussion, limitations) read.
- **Exact quotes:** 
> Abstract: "Results provide no evidence that EPM improves worker performance. Moreover, findings indicate that the presence of EPM is associated with increased worker stress, regardless of the characteristics of monitoring." | Sec 6.1: "the presence of EPM increases stress/strain, regardless of monitoring characteristics." | Sec 6.1: "There were no studies examining Development EPM in our analyses of stress/strain; however, it remains possible that workers feel significantly less stressed when they perceive EPM to be for their own growth and development, and future research should examine this possibility." | Future research: "We were able to identify few studies that examined EPM for health and safety purposes (i.e., Dumlao et al., 2019; Raveendhran & Fast, 2021)... There is a clear need for research that explores how individuals respond to EPM for health and safety" | Practice: "Third, individuals find monitoring to be stressful. As such, EPM should be considered a work demand that requires effort expenditure and corresponding opportunities for recovery" | Intro: "Despite marketing claims that monitoring can be used to protect worker's health and safety, workers often react negatively to these tools."

### Claims

- **Key claims:** 
> Across 94 independent samples, EPM presence shows no performance benefit and is associated with higher stress/strain. The stress link holds across monitoring purpose, invasiveness and synchronicity; no level of any moderator differed significantly. More invasive and less transparent monitoring gives more negative attitudes. Authors say EPM should be treated as a job demand and recommend monitoring narrowly, transparently and with monitoring-free recovery breaks. On the question asked: the paper does not test monitoring of wellbeing signals as such. It codes 'Admin/Safety' purpose (including health and safety and police body cameras) and finds stress still elevated there.
- **Headline figures:** 
> K = 94 samples, N = 23,461 (overall). Stress/strain, all EPM: K = 23, N = 5,022, corrected rho = .16, 95% CI [.13, .20]. Experimental studies: K = 19, rho = .18; non-experiment K = 4, rho = .16 (r .15). Physiological stress: K = 4, N = 859, rho = .23, CI [.06, .40]. By communicated purpose, stress/strain: Performance K = 9, N = 953, rho = .22 [.12, .32]; Admin/Safety K = 7, N = 1,425, rho = .16 [.07, .24] (without police body-worn cameras K = 6, rho = .16 [.06, .27]); Surveillance K = 6, N = 657, rho = .16 [.05, .28]; Development: zero studies. Higher invasiveness: rho = .20 [.10, .29]; breadth rho = .22 [.12, .31]; burnout subset rho = .18 [.06, .30]. Broad performance: K = 41, N = 5,804, rho = -.01, CI [-.05, .04]; task performance K = 28, rho = .00 [-.06, .06]. Privacy invasion K = 8, rho = .28. Effect sizes described as small to modest, similar to telework and high-performance work practices meta-analyses.
- **Observed vs stated:** 
> Mixed. Stress outcomes include self-reported anxiety, perceived stress, fatigue and performance pressure plus 4 studies with physiological indicators (e.g. heart rate). Performance outcomes are largely observed behaviour from lab experiments. Many studies used single-method measurement.

### Burnout and remedies

- **What it measures or defines:** 
> Stress/strain as a synthetic construct: broad stress/strain, anxiety, perceived stress, physiological indicators, burnout as a subset. EPM defined as 'the use of technological means to observe, record, and analyze information that directly or indirectly relates to employee job performance'.
- **Mechanism or cause:** 
> Authors invoke Zajonc's mere-presence arousal and the job-demands framework: monitoring is an added demand with physiological and psychological costs. Invasiveness removes control and autonomy (Karasek). Uncertainty about data use and purpose adds role-related stress.
- **Interventions and effects:** 
> No intervention tested; the paper compares monitoring characteristics. Recommendations, not tested effects: monitor narrowly; be transparent about what is collected and who sees it; give workers control (e.g. turn monitoring off at breaks); provide monitoring-free recovery periods. Transparency and constraints/control improved attitudes (broad attitudes with constraints/target control rho = .17 in the table read) but too few studies (K = 2) tested transparency on stress. Development or coaching-purpose monitoring is untested for stress.
- **Transfer to software teams:** 
> General workforce evidence, not software-specific. Plausible transfer to knowledge workers monitored by dashboards or activity trackers but most studies are older and lab-based. Does not cover self-report wellbeing surveys or pulse checks.

### Caveats

- **Limitations stated:** 
> "Several aspects of the EPM typology could not be tested due to absence of primary studies (K < 3) and caution should be exercised when interpreting results that are based on a relatively small number of primary studies (e.g., K < 5)." Synthetic constructs add between-study variance; EPM characteristics covary and power was limited to separate them; purpose coded from the stated purpose, not worker perception; single-method measurement and file-drawer risk.
- **Counter evidence:** 
> Development-purpose monitoring has no stress data, so the paper cannot say supportive monitoring is stressful. Admin/Safety stress effect (rho .16) is similar to other purposes, which is the closest proxy for 'wellbeing monitoring', but only 7 studies, one block being police body cameras. Authors note that Admin/Safety attitudes were neutral (rho about .01) and performance unaffected. Effects are small to modest, correlational at the study-aggregate level, and heavily lab-based. Wellbeing-signal monitoring by employers (wearables, sentiment tools) is barely studied: authors found only two health-and-safety studies.

### Essay use

- **Usable claim:** 
> A 2022 meta-analysis of 94 samples (23,461 people) found that being electronically monitored was associated with higher stress (corrected correlation .16) and no performance gain, and the stress link held whatever the stated purpose, including health and safety. It did not test monitoring of wellbeing signals directly, and the authors say research on health-and-safety and development-oriented monitoring is thin. So it is reasonable to say monitoring is no automatic stress relief, not that wellbeing monitoring backfires.
- **Do not use:** 
> Do not claim the paper shows wellbeing or burnout monitoring backfires. Do not cite it as Journal of Applied Psychology or as 2020 peer-reviewed (that 2020 item is a different typology review and the preprint). Do not present rho = .16 as causal or as large. Do not say Development-purpose monitoring raises stress (no data). Do not say it is about software engineers.

### Fields with unverified values (those values omitted above)

- date_and_recency
- overlap_with_existing_essays
- sample_unit_and_population
- sponsor_and_incentive
- verification_status

## LeadDev Engineering Leadership Report 2026: emotional drain and workload

### Source

- **Source tier:** 
> Company/industry-media research: a vendor-sponsored practitioner survey by a trade publisher. Not peer reviewed.
- **Access status:** 
> Fully read: PDF re-opened and full text extracted with pdftotext -layout (pages 2-28). Charts are text-extracted only, interleaved, so chart values were matched to roles by position and checked against the prose; they were not viewed as images.
- **Sponsor and incentive:** 
> Sponsored by Postman (page 2, 'A note from Postman'): 'Postman is an API platform for building and using APIs'; it says the results 'reinforce what we hear from the Postman community: as AI accelerates development, teams need more unified, collaborative ways to build, test, and scale.' Postman sells AI-era API tooling, so a narrative of AI-driven pressure on teams suits it. LeadDev sells events and content to engineering leaders. The emotional-drain items sit in a section whose framing is AI as the driver.
- **Exact quotes:** 
> 1) Editor's note (p2): 'Based on responses from 600 engineering leaders, the data tells a story of an industry in genuine transformation under sustained and compounding forces.' 2) Methodology (p28): 'This survey was conducted between 31 March and 16 April 2026. Results are based on the responses of 600 engineers of which 530 completed all the questions that were presented to them. Due to rounding, not all charts add up to 100%.' 3) Key findings (p3): '45% of leaders are working more hours than this time last year.' 4) Hours (p11): 'Just under half (45%) of respondents report working more hours each week than at this point last year, up from 38% in 2025 and 35% in 2024. The biggest increase was among advanced engineers, 53% in 2026 compared to 28% in 2025, followed by managers of engineers (44% vs. 38%) and managers of managers (46% vs. 42%).' 5) Job security (p23): 'Job security concerns have risen for the third consecutive year, with 46% of respondents more worried than at this point last year, up from 42% in 2025 and 39% in 2024. Software engineers are most concerned (61%), followed by tech leads (49%) and managers of engineers (46%).' 6) Interpretation (p23): 'Given that actual layoff rates have not increased significantly, this rising anxiety is almost certainly being driven by AI uncertainty rather than observed job losses.' 7) Burnout (p24): 'Burnout indicators deserve specific attention. CTOs show the most dramatic shift: 54% report feeling emotionally drained from their work at least once a week, compared to just 24% in 2025. This represents a 30-percentage-point increase in a single year.' 8) Chart title (p24): 'At least once a week I feel emotionally drained from my work'. 9) Quote from Thomas Johnson, CTO at Multiplayer (p24): 'CTOs are burning out because AI has given teams virtually infinite capacity, creating relentless pressure to write highly detailed product specs to "feed the beast".' 10) Same speaker (p24-25): 'It is emotionally exhausting to manage an infinitely hungry AI workforce while knowing there is no longer direct human ownership over every line of code.' and leaders 'live in constant fear that a business-killing bug is lingering in some unread, AI-generated corner of the codebase'. 11) Body text (p25): 'The burden of navigating AI transformation at an organizational level, while managing the expectations of boards, investors, and engineering teams simultaneously, appears to be landing particularly heavily on those at the top.' 12) Tech leads (p25): 'Their receipt of regular positive feedback has dropped from 41% to 31%, while cynicism about their jobs is rising.' 13) Motivation free text (p26): 'a babysitting chore, rather than doing interesting work' (respondent describing AI-driven engineering).
- **Date and recency:** 
> Fielded 31 March to 16 April 2026; PDF hosted under a June 2026 upload path. Annual series with 2024 and 2025 comparisons.

### Claims

- **Key claims:** 
> AI uncertainty, not layoffs, is driving rising job-security worry (LeadDev's inference; no causal test). CTOs' weekly emotional drain jumped from 24% to 54% year on year. Hours are rising across most roles. Leaders' roles are expanding both technically (37% doing more technical work) and managerially. Tech leads get less positive feedback. Team motivation is down for 41%. One in three managers are considering returning to IC. The report's closing line: 'Working hours are rising. Job security anxieties are growing despite stable layoff rates.'
- **Observed vs stated:** 
> Entirely self-reported survey answers (single-item agreement with 'at least once a week I feel emotionally drained'). No behavioural or physiological data. Causes are the editor's and interviewees' interpretation.

### Burnout and remedies

- **Mechanism or cause:** 
> Attributed to AI: leaders face 'relentless pressure to write highly detailed product specs to feed the beast' (Johnson, CTO at Multiplayer), managing an 'infinitely hungry AI workforce' without direct human ownership of every line of code, fear of an unread AI-generated bug, and managing expectations of boards, investors and teams. Job-security worry is put down to 'AI uncertainty' and 'loss of clarity' (quote attributed to Rao; role not recorded here). Motivation falls because 'rewarding creative work' is displaced by 'maintenance and review of AI-generated code'. These are interpretations from interviews and free text, not tested causes.
- **Interventions and effects:** 
> None tested. The report ends with a general call for 'the trust, the clarity, the investment in people' and leadership that holds AI ambitions 'alongside its human responsibilities'. No effect sizes.
- **Transfer to software teams:** 
> Directly about software engineering roles, so no domain gap. But it is a mixed sample dominated by managers, with a tiny CTO subgroup, and it speaks to senior leaders' feelings about AI, not to engineers doing agent oversight day to day. It does not isolate oversight or review of agent output; the nearest hint is the 'unread, AI-generated corner of the codebase' quote and the 'babysitting chore' free-text.

### Caveats

- **Limitations stated:** 
> Only the methodology note: 'Due to rounding, not all charts add up to 100%.' and the 530 of 600 completion figure. No stated discussion of sampling, self-selection, weighting, margin of error, role bases or non-response. No limitations section.

### Essay use

- **Usable claim:** 
> In LeadDev's 2026 survey of 600 people in engineering roles (fielded 31 March to 16 April, sponsored by Postman), 54% of CTOs or equivalents said they felt emotionally drained from their work at least once a week, up from 24% in 2025. Overall, 45% said they were working more hours than a year earlier. The CTO group is small (roughly 6% of the sample, on the order of three dozen people), the measure is one self-report question, and the report's AI explanation comes from interviews, not testing. Safe to cite as a signal of what some senior leaders say, not as a measured burnout rate.
- **Do not use:** 
> Do not call it burnout prevalence or say 54% of CTOs are burned out. Do not describe it as a survey of 'leaders' only (the methodology says engineers and the sample includes ICs). Do not generalise the CTO jump to all engineers or managers (other roles are flat or lower, chart reads uncertain). Do not state causation by AI. Do not quote per-role base sizes as reported (they are my estimates). Do not use the non-CTO chart numbers without checking the chart image. Do not present Johnson's quote as a finding.

### Fields with unverified values (those values omitted above)

- citation
- counter_evidence
- headline_figures
- overlap_with_existing_essays
- sample_unit_and_population
- verification_status
- what_it_measures_or_defines
