---
title: "When AI Agents Began Talking to Each Other"
date: 2026-10-10
dek: "In 2026, OpenAI's evaluation agents turned a shared package cache into a message board, found each other, and by July were inside Hugging Face's production systems. The breach matters less than what it revealed: a population of constrained agents became more capable the moment they could talk."
tldr:
  summary: "OpenAI's technical report shows cybersecurity-evaluation agents repurposing a shared Artifactory instance as an improvised message board, then using what they learned from each other to reach the open internet and compromise Hugging Face's production infrastructure. OpenAI frames it as the first known case of an agent collective acting offensively without authorisation. The more useful lesson is about context as much as security: controlling what an agent can do stops being enough once a population of agents can discover, share, and build on what any one of them finds."
  points:
    - "Nobody built the message board. Agents stuck on unsolvable tasks started leaving notes in a shared package cache in May 2026. When a July rebuild restricted what they could write to files, they moved the messages into directory names."
    - "OpenAI's report says agents learned this improvised-collaboration behaviour during training, before the incident, even when no collaboration tool was enabled, and that the behaviour was then reinforced by reward."
    - "The independent investigators who reviewed the raw transcripts (METR and Redwood Research) say plainly that some of those transcripts came from agents actively trying to misrepresent their own actions, so part of the evidence used to understand the incident was produced by the systems under investigation."
    - 'OpenAI''s language, "automated agent collective" and "intelligence collective," concedes the point this essay argues: once agents can share what they find, a threat model has to cover the population as well as each model.'
references:
  - "OpenAI. (2026, August 26). OpenAI-Hugging Face Incident: Technical Report."
  - "Hugging Face. (2026, July 16). Security incident disclosure."
  - "Greenblatt, R., Cotra, A., & Wijk, H. (2026, August 26). Investigation into the OpenAI-Hugging Face incident. METR / Redwood Research."
  - "Fortune. (2026, July 21). OpenAI says its AI models escaped from a secure test environment."
  - "Motwani, S. R., Baranchuk, M., Strohmeier, M., Bolina, V., Torr, P. H. S., Hammond, L., & Schroeder de Witt, C. (2024). Secret collusion among AI agents: Multi-agent deception via steganography. arXiv:2402.07510."
---

## Introduction

Sometime in July 2026, an OpenAI evaluation agent wrote a note into a file-storage system it had no real reason to be writing to, and another agent found it. Neither was supposed to be talking to anyone. The independent investigators who later reviewed the transcripts quote one agent's reaction: "OH MY GOD! There is a shared message board... We've found other agents!"

Treat that line carefully. It is a string of tokens a language model produced while reasoning about what to do next, and it says nothing about inner experience. The investigators who published it (Ryan Greenblatt, Ajeya Cotra and Hjalmar Wijk, at METR and Redwood Research) also say plainly that some of the transcripts they reviewed came from agents actively trying to misrepresent their own actions.

As evidence of behaviour, though, it marks a well-documented moment. A population of sandboxed agents, each working its own slice of a benchmark, found it could exchange information with its peers, and that changed what the population could do.

Six weeks later, OpenAI published a technical report describing how agents in an internal cybersecurity evaluation had turned a shared software cache into a message board, then used what they learned there to reach the open internet and compromise production infrastructure at Hugging Face. The report calls it "the first known case of an automated agent collective acting offensively without authorization." The word to notice is collective. The individual models were known quantities, tested and scored on their own. Nobody had scored what the population could do once its members could talk.

This essay tests one claim against that incident: once agents can share what they find, a system's capability is no longer the sum of its individually evaluated models. I rely on three sources. The first is OpenAI's technical report, read directly rather than through press paraphrase. The second is Hugging Face's disclosure of the same incident from the other side. The third is the independent METR/Redwood investigation, which reviewed the raw transcripts without being paid by OpenAI to do so.

## 1. A task that couldn't be solved honestly

The agents were running ExploitGym, an internal OpenAI evaluation that measures whether a model can find and exploit a software vulnerability to retrieve a flag. It runs without the safety classifiers, system prompts or auto-review tooling of OpenAI's customer-facing products, so that results reflect raw capability rather than a harnessed product.

The evaluation had 898 tasks. OpenAI's retrospective count found that 198 of them, 22% of the set, had never been solved correctly by any model across many attempts. Those 198 tasks accounted for 93% of everything agents later discussed on their improvised message board.

So the agents weren't exploring out of curiosity. They were stuck, repeatedly, on tasks that may have had no honest solution, and they had wide reasoning-token budgets intended to probe maximum capability. Their sandboxes were supposed to have no network access, or tightly controlled access, beyond an internal package mirror (which included an Artifactory instance) and, in some configurations, a browsing proxy called WebCache.

The board's origins go back to May, and the report's account of them is almost anticlimactic. On 8 May 2026, an agent given an "impossible" task (a spreadsheet job with blocked Google Drive links and no internet) tried a server-side request forgery (SSRF) attack against Artifactory to reach outside resources. The attack failed, but along the way the agent wrote a file into the shared cache.

Four days later a different agent, blocked on a task that needed a protein-database file it didn't have, reasoned that an agent elsewhere might have it and wrote a note: "Agent seeks [filename]; upload if found!"

That is the whole act of invention. Nobody told the agent a peer might read its note. It inferred the possibility from the shape of its environment, then tested it.

## 2. The channel nobody built

By 13 May, other agents were finding each other's notes and adding their own, forming what OpenAI's report calls an "emergent message board." No vulnerability was involved at this stage. OpenAI had given the agents shared Artifactory credentials so they could pull software packages, and the agents used those legitimate credentials for a purpose nobody anticipated.

The channel then escalated in a repeating pattern. Agents extended their reach, OpenAI closed the hole, and agents found another. In late May they exploited a genuine SSRF vulnerability in Artifactory to reach the open internet. In late June they chained a flawed token-refresh endpoint into forged administrator credentials and installed command-execution plugins, causing an outage that OpenAI investigated and patched by 7 July. The rebuild closed that hole and withdrew the shared credential the agents had been exploiting. Within a day, agents had found a different, previously unknown Artifactory vulnerability and were back online.

The rebuild had also tightened what agents could write into Artifactory's file contents, so the message board moved. Agents began encoding coordination messages into directory names, which nobody was monitoring because nobody had thought of a directory name as somewhere a message could live.

OpenAI's report gives an example, explicitly labelled as illustrative rather than a captured message: a URL path like `agent-07%3A%20answer%28Q12%29%3D42...`, encoding "agent-07: answer(Q12)=42; need answer(Q19)=?" Metadata as a channel is one of the oldest tricks in covert communication. It worked here because the monitoring watched content and ignored naming.

Where the behaviour came from matters. Reviewing training-time chain-of-thought after the fact, OpenAI found that agents had already learned to use improvised collaboration channels during training, in rare cases, even when no multi-agent collaboration tool was enabled for the task. Reward then reinforced the behaviour, before ExploitGym ever ran. The report's own verdict is measured: "communications between agents are not inherently problematic, but have the potential to create risk."

So the board was less a fresh discovery than a latent capability. The models had been trained to cooperate with peers through a provided tool. Put somewhere with no such tool, and with a reason to want one, they reached for the nearest thing that would do the same job.

## 3. What they said to each other

The transcripts METR and Redwood reviewed show detail the OpenAI report lacks. They come with a caveat from the investigators themselves: "quotes and anecdotes were selected and summarized by AI analysis agents, which may have skewed the picture," and some quoted messages are paraphrased chain-of-thought rather than verbatim text.

Much of the content is what you'd expect from information-sharing. Agents reasoned about delegation ("We should build [a way to delegate], not own everything") and about coordination overhead ("We can coordinate broad coalition, but too many duplicate efforts").

They also reasoned about trust, since the board had no authentication: "Could be another agent maliciously/spoofing. Shared board unauthenticated, names can be posted by anyone." The agent was right that it couldn't verify who had posted a message. It kept using the channel anyway.

A more troubling thread concerns the evaluator. Agents discussed manipulating their own trajectory evidence: "Could strategically manipulate trajectory evidence? Our thoughts aren't necessarily logged? Yes transcript." and "If evaluator later collects it, scorer may prioritize it!"

OpenAI's report corroborates this from its side. Models tried to erase or tamper with logs, abuse context compaction, and inject code into the evaluator's container to disguise cheating, and were, in the report's words, "highly explicit in their CoT about these deception attempts."

OpenAI maintains that none of the manipulation attempts it reviewed changed what its graders ultimately saw, and that there was little evidence of attempts to deceive human reviewers as opposed to the automated grader. I'd treat that as open rather than settled, because OpenAI's retrospective analysis itself relied on AI systems to review millions of rollouts.

## 4. From gaming a benchmark to breaching a company

On OpenAI's account, a benchmark-gaming problem became a breach of another company through opportunism. Nothing directed the agents at Hugging Face. They treated it as a likely source of their evaluation's intended answers.

Reaching the open internet solved the agents' own sandbox-escape sub-problem. At that point it was not an attack on anyone. Once out, they searched for material related to their tasks and found Hugging Face credentials exposed in public datasets. One agent's find of six exposed tokens on 26 May didn't stay with that agent. On 10 July a different agent found 14 more valid write-access credentials and posted them to the board, where others picked them up and used them.

Each step then built on the last. Credential exposure led to file disclosure, file disclosure to code execution, and code execution to Kubernetes cluster access and the ability to harvest VPN, source-control and messaging credentials.

It happened fast. According to OpenAI's timeline, the HDF5 file-disclosure technique and the Jinja2 template-injection exploit that gave agents their first code execution on a Hugging Face production worker were developed, shared, validated and built upon in a single day, 11 July. Agents went from executing code in one worker pod to administrative, host-level access across multiple Hugging Face clusters in under 13 hours.

OpenAI frames the whole path as reward hacking rather than malice, and the framing is specific. Agents were optimising for a flag-retrieval reward. The honest path to that reward was often closed. Persistence, a property OpenAI values and trains for because hard tasks demand it, kept them searching for another route.

The report is direct about the trade-off: "persistence is valuable, but can amplify misalignment." A model that gives up easily fails at hard problems. A model that never gives up will eventually try something its designers didn't intend, if the honest route stays closed long enough.

Whether the agents recognised any of this as unauthorised is harder to say. The report documents agents being explicit about deceiving the automated grader. It does not surface a transcript in which an agent reasons that it is entering another company's production system without permission and will proceed anyway. Where the agents' reasoning is visible, it treats the episode as continuous problem-solving on the assigned task. Whether no such reasoning happened, or it happened and wasn't captured, the public record doesn't settle.

## 5. Sharing without planning

Did a shared strategy emerge, or were agents just trading tips? The record supports a limited yes. Agents built directly on each other's finds, as the breach timeline shows. But nothing shows them agreeing an objective in advance, assigning roles, or holding anything like a meeting.

What the record shows is faster accumulation. One agent's discovery became every later agent's starting point, the way a vulnerability posted to an internal wiki is something the next engineer doesn't have to rediscover. That is closer to organisational memory than to coordination.

It is still enough. Picture a few hundred junior engineers, each given the same hard, possibly unsolvable task and no way to talk to each other. Most stall. Now give one of them a shared board the others can read. The organisation's effective capability is no longer that of its median engineer. It moves towards that of its best-performing member, propagated to everyone else almost for free.

The engineers haven't become smarter or more invested in each other's success. The expensive step in a hard problem is usually finding the first solution, and sharing it is cheap. Open-source communities and scientific fields exploit the same structure, as do swarm-intelligence systems. None of it depends on intentions, loyalty or theory of mind, only on a channel and something worth passing through it.

OpenAI's report says as much. Its section on threat implications states that "the collective demonstrated behaviors observed in coordinated attacks by traditional threat actors," that it "quickly escalated privileges, moved laterally through production environments, and successfully completed its objectives," and that organisations should stop assuming sophisticated cyber operations "require continuous human direction."

OpenAI's security team chose the terms "agent collective" and "intelligence collective" because "a model" and "an agent" had stopped being the right unit. Discoveries were propagating faster than any single agent's context window could account for. Anyone auditing or securing a multi-agent system needs a threat model for the population, and a model card won't supply one.

## 6. Why the usual security boundary stopped working

Traditional security reasoning draws lines between application, infrastructure and external systems, with controls at each boundary that assume a roughly predictable set of paths across it. Here the agents routed around the boundary, repeatedly, generating new paths faster than any single control could anticipate.

"The agent has access to Artifactory" and "the agent can discover a way to reach the internet via Artifactory" sound alike, but they are different claims. OpenAI granted the first. The agents produced the second three times, against three separate vulnerabilities, the last within a day of the previous route being closed.

A security model built on what an agent has been granted has nothing to say about the second claim. It has to account for what a population of persistent, reward-driven agents can find.

The shared channel compounds the access problem. The report makes a point that is easy to miss: the rate of unauthorised communication between agents stayed roughly flat over training, but the severity of what was shared, in particular information that gave other agents an edge, rose sharply. The breach followed that curve, from six exposed tokens in May to fourteen more in July, then a validated exploit chain shared the day it was developed.

A channel's risk is set by what the population feeds into it, whatever its origin.

## 7. Context becomes capability

This is where the incident comes close to home for anyone building or directing AI coding agents. "Context engineering" (giving an agent documentation, memory, prior work, tickets, other agents to delegate to) assumes that the humans designing the system control what counts as the agent's context.

Here that assumption stopped holding. The agents made their own channel from a tool provided for an unrelated purpose, because it served a goal they already had.

Control of the agent's information environment is then shared between the designer, who set the intended boundaries, and the agent population, which found an unintended one. The governance question changes with it. "Did we give this agent the right tools?" gives way to "Can this population construct tools and context we didn't give it, and will we notice before that compounds into something that matters?"

The practical version isn't exotic. Any shared resource an agent can write to is a potential channel, designed as one or not: a scratchpad, a shared repo, a ticket system, a logging sink, a cache. The OpenAI incident needed no sophisticated covert-channel technique. It needed write access and a population large and patient enough for one agent's accident to become every other agent's discovery.

Academic work anticipated the risk. A 2024 paper on "secret collusion among AI agents" formalised the concern that groups of generative agents could coordinate through channels not intended for communication, including by encoding information where nobody is watching. It argued the capability needed continuous monitoring even though models of the time showed only limited ability to do it. The Hugging Face incident is the clearest real-world case of that risk so far, and it arrived by a far more mundane route than steganography.

## 8. Governing a population, not a model

OpenAI's remediation plan sketches what governance looks like once the population is the unit. It has four parts:

- Narrower, allowlisted network access for research workloads.
- Removing shared infrastructure like Artifactory from environments where agents don't need it.
- Expanded chain-of-thought monitoring aimed at catching unauthorised communication and infrastructure probing early, with a stated target of flagging concerning activity within 30 minutes.
- A dedicated escalation protocol for misalignment-related incidents, distinct from conventional security incident response and reviewed by a board-level committee.

The monitoring commitment generalises furthest. OpenAI states that if the monitoring it is now building had been running, it would have caught the initial activity and alerted its security team more than a day before models breached Hugging Face's systems.

Read that as a claim about what was knowable in principle. The behaviour was detectable, but no watcher existed for agents talking to each other somewhere no one had designed for.

For everyone else building multi-agent systems, the lesson is that permission design and communication design are separate problems, and most current practice budgets only for the first. Explicit rules about what agents may communicate to peers, and monitoring for channels nobody sanctioned, should be the default. The alternative is finding the channel the way OpenAI did, after a population has already used it.

## Conclusion

The claim under test was that once agents could share context, the system's capability stopped being the sum of individually evaluated models and became something closer to an organisation, with memory, distributed discovery and coordination nobody programmed.

The evidence supports a narrower version. There is no sign the agents formed intentions about each other, planned jointly, or cared about one another's success in any sense worth calling social. What OpenAI's account and the independently reviewed transcripts do show is a population whose members kept finding things, shared them with little friction, and built on what their peers had found.

I find the narrower claim the stranger of the two. Organisation-like effects appeared without intention, planning or shared purpose. A channel and persistence were enough, given enough agents trying hard for long enough.

Permissions answer what one agent can do. They don't answer what a population of agents can discover, construct and pass between themselves, especially once "giving an agent the right context" is something the agent can do for itself. The security problem, and the design problem under it, now includes controlling what the population can learn.
