---
title: "Tested on the Wrong Machine"
date: 2026-11-24
dek: "Microsoft's report on its November Microsoft 365 outage says a defect in a change that passed safe deployment sat in production for more than three months before routine conditions lined up around it. The lab tests ran on older hardware, the rerouting meant to protect users spread the damage, and the usual rollback tools were slow to help. A leader can ask where the test environment differs from production, whether recovery has been rehearsed, and whether failover has been tested under the failure it exists for."
tldr:
  summary: "On 12 November 2026 a latent Windows defect, introduced by a change that began deploying in July, knocked out the gateway servers in front of Exchange Online and took close to a full day to clear. Microsoft's own report says the defect showed up only on newer, higher-core servers while its load tests ran on older ones, and that it surfaced when the defect met three routine conditions at once. Automatic rerouting then spread the damage, restarted servers fell over again under queued traffic, and the usual rollback tools could not quickly revert it. I would ask where test hardware and traffic differ from production, whether recovery has been rehearsed, and whether failover has been tested at its limits."
  points:
    - "Microsoft's report dated 20 November says the change began deploying in July, went through safe deployment, and ran worldwide for more than three months without impact. LeadDev says about four months. I use Microsoft's wording."
    - "The defect was lock contention in an internal Windows process. It hit newer servers with more cores, and the lab load tests used older, fewer-core hardware under different traffic. Microsoft says its failover testing also did not find the defect in isolation."
    - "The defect was exposed when about 14% of gateway capacity was out for routine deployment, Teams traffic failed over onto the shared gateway, and North American traffic neared its daily peak. At the lowest point more than 80% of North American servers were unresponsive, and within about two hours of the broad failures every region was affected."
    - "Recovery was slow because returned servers were overwhelmed by queued traffic and fell over again, a months-old change was hard to identify, and the usual safeguards for recent changes could not quickly revert it. Each server needed five steps, and the first revert reached part of the capacity at 7:20 AM UTC on 13 November."
references:
  - "Microsoft. (2026, November 20). Post Incident Report for Microsoft 365, incident IDs EX1550543 and MO1550821. Read in full as a 15-page PDF. I read a copy hosted on 365fanatic.com (https://365fanatic.com/wp-content/uploads/2026/11/postincidentreport-mo1550821.pdf), not one hosted by Microsoft. This is the final report. I did not open the preliminary report of 15 November."
  - "Stokel-Walker, C. (2026, November 17). Microsoft's outage started with a fix. LeadDev. https://leaddev.com/technical-direction/microsofts-outage-started-with-a-fix. Read in full. It gives the outage as about twenty hours and the defect's age as about four months, and links no Microsoft document. The advice from the commentators it quotes is theirs, and I did not check their affiliations."
---

On 12 November 2026 a Microsoft 365 outage began that took close to a full day to clear. The root of it, according to Microsoft's own report, was a defect in a change that had gone out in July. It took three more conditions to expose it.

I read the report to see why a change that followed the process still got through, and what a leader of a much smaller engineering team could take from it. What stands out is how ordinary every step looks. The change went through safe deployment. Nothing happened for months. When something did, the mechanisms meant to catch or contain a bad change either missed it or made it worse.

A note on sources. The primary document is Microsoft's Post Incident Report for Microsoft 365, dated 20 November. I read it in full, but from a copy hosted by a third party. I have not seen the preliminary report of 15 November. LeadDev's article of 17 November, which prompted this piece, refers to a statement from Charles Lamanna that links to X, and I could not open it. Where the two sources differ, I use Microsoft's wording.

## What happened

The gateway servers in front of Exchange Online run Windows. A change enabled on those servers in July introduced what Microsoft calls a latent defect: lock contention inside an internal Windows process, which under certain load used up the machine's processor and memory until it stopped responding. Microsoft says neither the defect nor the update applies to wider Windows deployments.

The report says the update "went through safe deployment and saturated globally over several weeks, during which time no issues were observed. For more than three months, the change was deployed worldwide without impact." LeadDev says about four months. Microsoft's own phrase is July and more than three months, so that is what I use.

Then three routine conditions arrived, and the defect made them matter.

1. Nearly 14% of the gateway's server capacity was out of service as part of routine operations while the latest version was being deployed. Microsoft says there was enough spare capacity that this alone would not have caused impact. LeadDev calls it an unrelated issue, which is not how the final report puts it.
2. At 1:07 AM UTC on 12 November a routing problem in Teams' own gateway in US East triggered an automatic failover of Teams traffic onto the redundant gateway that also serves Exchange Online. Microsoft says such shifts are routine, and that services stayed healthy for about the next sixteen hours, though its timeline records isolated server failures in some regions during that time. LeadDev says about fifteen hours, which is closer to the gap between 1:07 AM and the broad failures.
3. North American traffic rose towards its daily peak, and from about 4:00 PM UTC the servers began to fail.

Microsoft counts the defect as a fourth factor. Each of the other three is within normal operating limits, and the report says so. It is the combination, on top of a defect nobody knew about, that did the damage.

## Why the tests did not find it

This is the part I keep coming back to. Microsoft's explanation is short: "Our normal load testing did not detect the issue because the traffic conditions were different from what was observed during the incident and SKUs used in our labs reduced the likelihood of encountering this defect."

The defect affected newer server hardware, which has more cores and so handles more concurrent requests, which means more lock contention. The older generation did not trigger it. The load tests used the older generation.

I can only guess why the labs used older hardware. Older hardware is still in service. What the report shows is that the test environment differed from production in the one dimension that mattered. Microsoft's failover testing also did not find the defect "in isolation", and among its next steps are expanding load testing to "our newest, highest-core hardware and with production-representative traffic, including running regular tests at peak-load limits", and scoping failover tests to cover peak conditions and other changes in flight.

I would not say any of that was avoidable in advance. The question for a leader is whether anyone has written down how test and production differ, and whether that list is reviewed when the production fleet changes.

## The mechanisms that spread it

Once servers began failing, the platform did what it was built to do. Traffic management routes around unhealthy capacity, in the same region first. The remaining servers took on the extra load, which made them more likely to hit the same defect, and so the failures spread. The report calls the result a cascading failure. In less than two hours the defect had been triggered across a significant portion of the North American fleet. At the lowest point more than 80% of servers there were unresponsive. That figure is for North America, not the global fleet.

When a region ran low, traffic was redirected to other regions. They had the same defect. "Within about two hours of the broad failures that began in North America, servers in every region were affected globally."

So the machinery for resilience carried the fault from one place to the next. Microsoft's next steps include fixing how traffic is distributed between regions, designing for smaller fault zones, and partitioning gateway capacity by workload to isolate failures. It has also put temporary guardrails in place against automatic traffic distribution.

I find this the most transferable part of the report. Any team with failover, retries or autoscaling has a mechanism whose job is to move load around a failure. If every target carries the same flaw, that mechanism moves the flaw as well.

## Why recovery took longer

The report gives three reasons recovery took longer than usual.

Servers brought back into service were "immediately overwhelmed by queuing client traffic and became unresponsive again". The timeline records Microsoft determining this at 11:55 PM UTC, after servers returned to service had stayed healthy and then failed once they received traffic. Microsoft says its automated recovery processes "were not equipped to restore service reliably" under widespread failure and sustained reconnection demand. Among its next steps is gradual ramp-up and admission control when servers rejoin, and better procedures for fleet-wide recovery.

Diagnosis was slow. The defect came from a change made months earlier, so "our change auditing and diagnostics processes took longer to identify the Windows change as the root cause." The timeline shows other mitigations tried first, including a change to bypass health checks and an alternative health check, before the picture settled.

And the usual escape routes were slow. Once Microsoft understood the cause, its "usual safeguards for recent changes (stopping a config rollout, rolling back a deployment, or switching off a newly enabled feature) could not quickly revert it." I read that as there being no recent rollout to stop. Because the defect was already across the fleet, recovery had to run for each capacity unit around the world. Each affected server needed five steps: take it out of service, restart it from its unresponsive state, apply the patch, restart it again, and return it to service. The first update that reverted the defect reached part of the capacity at 7:20 AM UTC on 13 November.

The report also lists, among the things to fix, that the first customer notification "came about 20 minutes after broad impact".

## How long it lasted

LeadDev says twenty hours. Microsoft's report gives the start as 4:20 PM UTC on 12 November. Most major access methods had recovered by 3:54 PM UTC on 13 November, and by 4:10 PM Microsoft says customers were no longer experiencing active impact. That is 23 hours and 50 minutes from start to end of active impact. The incident was declared resolved at 4:15 AM UTC on 14 November, after extended monitoring. Regions recovered at different times, so any single figure is a simplification.

Microsoft also says no enterprise mail was lost, though some delayed messages to consumer mailboxes inactive for more than 30 days expired and senders received non-delivery reports.

## What it says it was not

The report states: "This incident was confirmed not to be caused by a cyberattack, and we found no evidence of malicious activity. This change was not caused by AI tooling." I include it because the lessons do not depend on the answer. A defect that passes safe deployment and testing, then sits dormant until conditions line up, is an old kind of failure.

## What I would take from it

Some of this is Microsoft's own list. The rest is my reading, and I have not tested it.

**Write down how your test environment differs from production.** Hardware generation, data volume, traffic shape, which failover paths are switched on. If someone can say which differences are known and which are assumed, you are better placed than you were. Review the list when production changes.

**Test failover under the condition it exists for.** Microsoft's failover testing did not find the defect, and it now plans to cover peak conditions and other changes in flight. LeadDev quotes Panayot Kalinov advising teams to check whether health checks could remove working servers during high demand. That is his advice, a reasonable reading of the report, and not something Microsoft has said.

**Treat a restart as a load event, and rehearse recovery as its own skill.** Servers returned to service were hit again by the traffic waiting for them. Jules Duvivier, also quoted by LeadDev, calls restarting a fleet with waiting traffic "a different problem, and one that is rarely tested". If people retry against your service, work out what happens when it comes back up cold.

**Ask what you can still undo.** A feature flag is a good rollback tool for a change made last week. It is slow to help with a change the whole fleet has carried since July. For anything low in the stack, have an answer ready for how to get it out when the usual switches no longer apply.

**Practise the bad day away from your own system.** LeadDev quotes Corey Nachreiner, whom it describes as being at WatchGuard, suggesting teams rehearse a 24-hour Microsoft 365 outage, including finding other ways to talk to each other: "Most teams discover during the exercise that their runbook lives in SharePoint." I have not checked his affiliation or the basis for the remark, but I recognise the problem. A runbook you cannot open during the failure it describes is a small, common version of this one.

## The part I would not over-read

This is one incident, described by the company that suffered it. The report is a good one, with a full timeline, named factors and next steps with target quarters, some still marked TBD. It is still Microsoft's account of its own incident. I read a copy of it hosted elsewhere, and a few of the figures in the LeadDev article differ from the final report in small ways.

I also cannot say how much applies to a team with a few dozen servers and one region. The cascade needed a fleet of thousands of capacity units, and the lab difference needed two generations of hardware. A smaller team may have little to spread across.

What I think carries over is the order of events. Nothing broke when the change shipped, or when the routine conditions appeared one at a time. The process was followed, and one of the things that failed was the assumption that the test environment stood in for the real one. Microsoft's own next steps include testing on the newest hardware, at peak, with real traffic, alongside several on limiting the blast radius and speeding recovery. I would start with the same question on my own systems: where is the machine we test on different from the one we run on?
