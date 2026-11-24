# Microsoft 365 outage, 12 to 14 November 2026: research report

Sources opened (2026-11-24):

1. Microsoft, Post Incident Report for Microsoft 365, report date 20 November 2026, incident IDs EX1550543 and MO1550821. 15-page PDF written by Microsoft, read in full as text. The copy came from a third-party host (365Fanatic, https://365fanatic.com/wp-content/uploads/2026/11/postincidentreport-mo1550821.pdf), not from Microsoft. The full text is not committed, because Microsoft's document carries a no-reproduction notice. Re-download it from the URL above to check a quote.
2. Chris Stokel-Walker, "Microsoft's outage started with a fix", LeadDev, 17 November 2026. Read in full.

Not opened, so not used: Charles Lamanna's X post (HTTP 402), Microsoft's 15 November preliminary report, the Microsoft 365 admin center posts (sign-in required), BleepingComputer and the other secondary coverage.

## Corrections to the idea in article_ideas.md

| Idea said                                    | Microsoft's report says                                                                                                                                    |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bug ran "about four months"                  | Deployment began in July, saturated globally "over several weeks", and ran "more than three months" without impact. "Four months" is LeadDev's paraphrase. |
| "Roughly 20-hour" outage                     | Active impact from 4:20 PM UTC on 12 Nov to 4:10 PM UTC on 13 Nov is 23 hours 50 minutes. Declared resolved 4:15 AM UTC on 14 Nov.                         |
| Teams moved "about 15 hours" before          | "all services continued to remain healthy for the next ~16 hours" after the 1:07 AM UTC shift.                                                             |
| 14% capacity out "due to an unrelated issue" | "routine operations when we deploy the latest version", with enough spare capacity that it "alone would not have caused impact".                           |
| Three conditions                             | Four factors: the defect, the reduced capacity, the Teams failover, peak load.                                                                             |
| "more than 80% unresponsive"                 | North American fleet, "at the lowest point".                                                                                                               |

## Verified facts

- Cause: lock contention inside an internal Windows process exhausted CPU and memory on gateway servers used by Exchange Online. "neither the underlying defect nor the update applies to broader Windows deployments."
- It hit newer, higher-core hardware and not the older generation. More cores meant more concurrent requests and more contention.
- Testing: "Our normal load testing did not detect the issue because the traffic conditions were different from what was observed during the incident and SKUs used in our labs reduced the likelihood of encountering this defect." The load tests used older hardware with fewer cores. Failover testing "did not identify the defect in isolation".
- The change "went through safe deployment". No issues were seen for more than three months.
- Spread: traffic management rerouted to healthy capacity units in the same region, which absorbed the load and hit the same defect. When a region ran short, traffic went to other regions with the same regression. Every region was affected within about two hours of the broad North American failures.
- Recovery: returned servers "were immediately overwhelmed by queuing client traffic and became unresponsive again". Automated recovery "was not equipped" for it. Because the change was months old, change auditing took longer to find it, and the usual safeguards (stop a rollout, roll back, switch off a feature) "could not quickly revert it". Each server needed five steps (out of service, restart, patch, restart, return).
- Microsoft's own timeline: 7:00 PM UTC paused all deployments; 8:00 PM bypass for failing health checks; 11:55 PM returned servers failed again; 7:20 AM on 13 Nov the revert reached part of the capacity.
- First customer notification "came about 20 minutes after broad impact".
- "This change was not caused by AI tooling." Not a cyberattack. No enterprise mail lost; some delayed messages to consumer mailboxes inactive more than 30 days expired.
- Next steps include admission control and gradual ramp-up when servers rejoin, regional-only Teams failover, partitioning capacity by workload, failover testing at peak conditions, and load tests on the newest highest-core hardware at peak-load limits. Target dates are CY26 Q4, CY27 Q1 or TBD.

## From LeadDev, attributed as commentary only

Panayot Kalinov, Jules Duvivier (Upsun), Corey Nachreiner (WatchGuard) and Dennis Martin (Axians UK) give advice. Their affiliations were not checked. Useful as a pointer, not as evidence.

## [uncertain]

- Wording of the preliminary report.
- The Lamanna post.
- Whether the PDF copy matches the version Microsoft hosts.
