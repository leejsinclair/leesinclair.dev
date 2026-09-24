---
title: "The Myth of the Heroic Developer"
date: 2026-09-24
dek: "Saving the day is sometimes necessary. Building an organisation that needs saving every month is a leadership failure, and the hero is usually the last person to blame for it."
tldr:
  summary: "Heroic effort is fine as an exception and dangerous as an operating model. When one person keeps rescuing the system, they also hide the fact that the system keeps needing rescue."
  points:
    - "A hero who holds knowledge nobody else has is a single point of failure, however capable they are."
    - "The real test is the Monday after an incident: does the organisation just thank the hero, or does it learn from the rescue?"
    - "Leaders get the behaviour they reward. Praise the weekend fix and ignore the Friday spent on test automation, and the team will learn which one counts."
    - "A good measure of a leader or senior engineer is how well the team runs when they are not there."
references:
  - "Beyer, B., Jones, C., Petoff, J., & Murphy, N. R. (Eds.) (2016). Site Reliability Engineering: How Google Runs Production Systems. O'Reilly. Chapters 5 (Eliminating Toil) and 15 (Postmortem Culture). sre.google/sre-book"
  - "DORA. Capabilities: Continuous delivery. dora.dev/capabilities/continuous-delivery"
  - "Edmondson, A. (1999). Psychological Safety and Learning Behavior in Work Teams. Administrative Science Quarterly, 44(2), 350–383."
  - "Jabrayilzade, E., Evtikhiev, M., Tüzün, E., & Kovalenko, V. (2022). Bus Factor In Practice. ICSE-SEIP 2022. arXiv:2202.01523."
  - "Skelton, M., & Pais, M. (2019). Team Topologies: Organizing Business and Technology Teams for Fast Flow. IT Revolution Press."
---

Most of us have worked with the software hero, and plenty of us have been one.

They are the developer who works through the weekend to drag an impossible release over the line. The engineer who knows production so well that everyone calls them when something breaks. The person logged into the production database at 2am because nobody else knows what to do.

Organisations celebrate these people. We thank them in all-hands meetings, and sometimes we quietly treat their willingness to give up evenings as proof that the team can do more than its normal capacity suggests.

Exceptional effort is not the problem. Systems fail, some deadlines really do matter, and occasionally one person has to step forward and fix something nobody else can. The trouble starts when exceptional effort becomes the operating model.

So it helps to separate heroic action from hero culture. Heroic action is sometimes necessary. Hero culture is what you get when an organisation keeps relying on extraordinary individuals to cover for weaknesses in its systems, architecture, processes or leadership. The difference matters because a hero can save a system and, in the same act, hide the fact that it needed saving.

## The hero as a single point of failure

The heroic developer's real problem is that their knowledge sits in one place.

A developer becomes the person who understands the odd legacy database, the undocumented deployment sequence or the integration nobody else will touch. They become invaluable, and that makes the organisation fragile. If a team cannot comfortably get through that person's holiday, illness, resignation or move to another project, it hasn't built resilience. It has built a dependency.

Software research has a name for this: the bus factor, the number of people who would have to disappear before a project stalls. A 2022 study at JetBrains surveyed 269 engineers and found they treat it as a real problem. It also found that code authorship tells only part of the story. Knowledge moves through code reviews, meetings, chat and issue trackers too, so an estimate built on authorship alone is incomplete (Jabrayilzade et al., 2022). That is useful news for leaders, because those are all channels a team can deliberately use.

The old stories got here first. In the _Epic of Gilgamesh_, Gilgamesh starts out as a ruler of enormous power and very little restraint. His people cry out to the gods, and the gods create Enkidu as his counterweight. What the epic warns against is unchecked power and what it does to the people around it. By the end, Gilgamesh finds what lasts in Uruk's walls and institutions rather than in himself.

The software lesson isn't "great developers are dangerous." It is closer to this:

> Capability that isn't shared turns into dependency.

The organisation ends up adapted to one exceptional person instead of becoming capable as a whole.

## The Beowulf problem

The end of _Beowulf_ makes the point even more sharply.

Beowulf has spent his life protecting his people through personal courage. In his last battle he faces a dragon, and when the fight turns against him, his retainers run for the woods. Only Wiglaf stays. Together they kill the dragon, but Beowulf dies of his wounds, and Wiglaf's speech after the battle warns that the Geats, now without their protector, are exposed to their enemies.

Beowulf is no villain here; his courage is the heart of the poem. What goes wrong is that a whole kingdom's safety has come to rest on one man. (I look at that ending in more depth in [Beowulf and Gilgamesh](/history/beowulf-and-gilgamesh).)

A kingdom or an engineering organisation cannot depend forever on one person being stronger, braver or better informed than everyone else. So the useful question isn't "who is our Beowulf?" It is "what happens when Beowulf isn't here?"

## Heroism can hide a failing system

Take a team that keeps missing deadlines. At the last moment, the most experienced developer steps in, works late, cuts a few architectural corners and gets the release out.

Management sees a success. So do the customer and the team. And the organisation may learn exactly the wrong lesson: that the deadline was realistic, the workload was manageable and the architecture is good enough. What nobody examines is the system that produced the crisis in the first place.

Reliability engineering has been making this point for years. Google's SRE practice treats incidents as something to learn from, not just survive. Its blameless postmortems cover detection and response as well as the technical fix, and the resulting action items are tracked like any other engineering work (Beyer et al., 2016).

The interesting question is what happened after the rescue. A healthy organisation asks:

- Why did this happen, and why did it need this particular person?
- What knowledge was missing from everyone else?
- Which manual steps could be automated, documented or removed?
- What architectural weakness or planning assumption contributed?
- How do we make the next response easier?

A hero culture asks who saved us. A resilient one asks why we needed saving.

## The Monday-after test

That gives a simple way to tell healthy heroism from hero culture.

An engineer spends Sunday night restoring a critical service. Now picture two versions of Monday.

In the first, everyone thanks the engineer and moves on. The backlog carries on as before. The undocumented process stays undocumented, and the same engineer is still the only one who knows how to fix it. Six months later, their phone rings again.

In the second, the engineer is thanked too. Then the incident gets treated as something to learn from. Someone writes up the recovery procedure. Monitoring improves, a test gets added, a manual step is automated away, and a second engineer learns how that part of the system works. The underlying weakness goes on the backlog with a name attached.

There was a hero in both organisations. Only the second one learned anything from them.

## Heroism and technical debt

Code written under pressure isn't automatically bad. Experienced engineers do excellent work during incidents, and sometimes an emergency fix is exactly what a system needs.

But emergency work optimises for one thing: restore service now. That is the right goal during an incident. It becomes a problem when temporary decisions quietly harden into permanent architecture. The workaround becomes an interface. The one-off database fix becomes the procedure. The script someone ran in production becomes tribal knowledge. And the debt is at its worst when the only person who understands the workaround is the person who wrote it at 3am.

Individual excellence can't fix this on its own. You need systems that make good engineering the easy path. DORA's research links continuous delivery practices (test and deployment automation, continuous integration and the rest) with better delivery performance, higher availability, less deployment pain and lower burnout (DORA).

So telling engineers to stop working so hard is not the answer to heroic firefighting. Having fewer fires is.

## The cognitive-load problem

A hero usually carries a great deal of context in their head. They know why the system works the way it does, which parts are fragile, and which apparently unrelated service falls over when a particular query changes. They know which customer depends on behaviour nobody wrote down, and the history behind design decisions that no longer look rational.

That knowledge is valuable. Held by one person, it is also a liability for the organisation.

_Team Topologies_ (Skelton & Pais, 2019) puts cognitive load at the centre of team design. Teams shouldn't be asked to own more complexity than they can understand and run, and architecture, team boundaries, platform teams and enabling teams are all tools for keeping that load in check.

That changes the leadership question from "who is our expert?" to "how do we turn this person's expertise into something the team can do?" The answer varies. Sometimes it's pairing or mentoring, sometimes documentation or more deliberate code review. Sometimes the right move is to simplify the architecture or redraw a team boundary so the knowledge doesn't need to be so rare.

The expert stays just as valuable. The organisation stops depending on knowledge only they hold.

## "But someone has to be the expert"

Yes. Complex systems need deep expertise, and a mature engineering organisation should have specialists. Turning everyone into interchangeable generalists would be neither realistic nor desirable.

Expertise is fine. The risk is expertise that leaves with the person. An expert who teaches makes the organisation more capable. An expert who is the only person able to operate a system safely makes it more fragile. A healthy organisation keeps its specialists and builds routes for what they know to reach everyone else.

That depends on psychological safety. Amy Edmondson's research on work teams found that psychological safety was strongly associated with learning behaviour: asking questions, admitting mistakes, seeking feedback (Edmondson, 1999). A team where nobody can comfortably say "I don't understand this part of the system" will produce heroes by accident.

## The management trap

The uncomfortable part is that the heroic developer is rarely the cause of the problem. They are the adaptation to it.

If an organisation keeps setting impossible deadlines, shifting priorities and rewarding emergency effort, the person who keeps staying late is responding sensibly to the incentives in front of them. That is why leaders need to be careful about celebrating sacrifice. If the engineer who spends Saturday rescuing the release gets the public thanks and the one who spent Friday improving the test suite gets nothing, the organisation has told everyone what it values.

Leaders are responsible for making the quiet work visible: paying down technical debt, improving test coverage and observability, simplifying the architecture, writing down operational knowledge, automating repetitive tasks, making deployments safer and mentoring other engineers. None of it makes a good story at the all-hands, but it may well be the reason there is no crisis to tell a story about.

## Boring is good

Google's SRE practice has a name for the repetitive, manual, automatable operational work that leaves a service no better than it found it: toil. The aim is to engineer it away, not get faster at enduring it. Google's SRE teams set a goal of keeping toil below 50% of each engineer's time so that at least half their effort goes into improving the system itself (Beyer et al., 2016).

That is the opposite of hero culture. Hero culture says, "We have an amazing engineer who can handle this." Resilient engineering asks, "Why does this still need an amazing engineer?"

The first uses people to absorb the system's failures. The second uses them to redesign the system so its failures ask less of anyone.

## The real measure of leadership

A leader shouldn't measure success by how indispensable they become. Part of the measure is what happens when they are away:

- Can the team make decisions without them?
- Can someone else diagnose the system, deploy safely or handle an incident without calling the same person?
- Can people find knowledge instead of having to remember it?
- Do developers understand the architecture well enough to challenge it?
- Could the system cope if its most experienced engineer left?

If the answers are moving towards yes, the leader's value has spread through the team.

The same goes for senior engineers. Knowing the answer is good. Making the team steadily better at finding the answer without you is better.

## From heroic engineering to resilient engineering

Heroes will keep appearing. What matters is what happens after one does.

When someone pulls off an extraordinary rescue, thank them, then investigate. If one person has become the only one who understands a subsystem, learn from them and spread what they know. A deadline that took extraordinary effort deserves recognition, and a hard look at why the plan needed it. And after a midnight intervention in production, the job isn't finished until the next one is less likely and less dependent on one person.

Good engineering still needs exceptional people. What it removes is exceptional sacrifice as a routine part of how the work gets done. Good leadership works the same way, making the organisation more capable without the leader.

The best measure of an engineering organisation may be an unglamorous one. Not how often it saves the day, but how rarely it needs to.
