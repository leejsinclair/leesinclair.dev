---
title: "The Machine at the Edge of Gilgamesh"
date: 2026-09-27
dek: "AI now helps at several points between broken clay and a readable epic: reading signs, matching fragments, drafting rough translations. Deciding what a damaged line actually means is still a human job."
tldr:
  summary: "Machines are useful to Assyriology where the problem is scale: searching, matching and first-pass reading. Judgement about what the evidence means stays human, and good tools keep that boundary visible."
  points:
    - "The 2025 recovery of the Hymn to Babylon began with the eBL Fragmentarium matching scattered fragments, including a Berlin tablet published in 1925 and never recognised. Two scholars did the reading."
    - "ProtoSnap works a step earlier, modelling the stroke structure of cuneiform signs and generating synthetic training data that roughly doubled accuracy on rare signs."
    - "Neural translation of Akkadian holds up on formulaic texts and breaks down on literature, which is exactly where Gilgamesh sits."
    - "The real risk is fluency: a confident, readable translation hides the difference between what is on the tablet and what a model filled in."
references:
  - "Electronic Babylonian Library (eBL), LMU Munich. Poem of Gilgameš (Standard Babylonian corpus) and Fragmentarium. https://www.ebl.lmu.de/about/corpus."
  - 'Gutherz, Gai, Shai Gordin, Luis Sáenz, Omer Levy, and Jonathan Berant. "Translating Akkadian to English with Neural Machine Translation." PNAS Nexus 2, no. 5 (2023): pgad096. https://doi.org/10.1093/pnasnexus/pgad096.'
  - 'Mikulinsky, Rachel, Morris Alper, Shai Gordin, Enrique Jiménez, Yoram Cohen, and Hadar Averbuch-Elor. "ProtoSnap: Prototype Alignment for Cuneiform Signs." International Conference on Learning Representations (ICLR), 2025. https://arxiv.org/abs/2502.00129.'
  - 'Fadhil, Anmar A., and Enrique Jiménez. "Literary Texts from the Sippar Library V: A Hymn in Praise of Babylon and the Babylonians." Iraq 86 (2024): 21–78. https://doi.org/10.1017/irq.2024.23.'
  - "George, Andrew, trans. The Babylonian Gilgamesh Epic: Introduction, Critical Edition and Cuneiform Texts. 2 vols. Oxford University Press, 2003."
  - "George, Andrew, trans. The Epic of Gilgamesh: The Babylonian Epic Poem and Other Texts in Akkadian and Sumerian. London: Penguin Classics, 1999."
  - "Sandars, N. K. The Epic of Gilgamesh: An English Version with an Introduction. London: Penguin Classics, 1960."
  - "Armitage, Simon. Gilgamesh: A New Verse Translation. New York: Liveright / W. W. Norton, 2026."
  - "Helle, Sophus. Gilgamesh: A New Translation of the Ancient Epic. Yale University Press, 2021."
  - "Mitchell, Stephen. Gilgamesh: A New English Version. New York: Free Press, 2004."
---

_The Epic of Gilgamesh_ has never been a finished story.

That is one of the odd things about a poem that has lasted roughly four thousand years. We tend to picture an ancient epic as something written once, preserved, and eventually dug up by modern scholars. Gilgamesh didn't work like that. It was copied, changed, broken, lost, found again and translated, over and over, across millennia.

Even the version we call _The Epic of Gilgamesh_ is a reconstruction. The tablets are incomplete and the manuscripts disagree. Some episodes survive only in older versions and never made it into the Standard Babylonian epic. New fragments still turn up, and now and then a line everyone had written off is filled in because a fragment in some other museum turns out to carry the missing words.

Artificial intelligence has started to take part in that process. The headline version of this story is a machine that will one day translate an ancient poem. The more interesting version is already happening, in the unglamorous stretch between damaged clay and a readable text: identifying signs, matching fragments, searching huge corpora, drafting rough translations. The Assyriologist is still doing the reading. They can just reach much further than before.

## From Tablets to a Story

Imagine reconstructing a book whose pages have been smashed into hundreds of thousands of pieces and scattered across museums on several continents. That is roughly the Assyriologist's problem.

Cuneiform tablets aren't old books waiting for a translator. Many are damaged, and plenty survive only in part. Two copies of the same work can disagree. A fragment catalogued a century ago can sit in a drawer for decades before anyone realises which poem it belongs to.

The Electronic Babylonian Library (eBL) at LMU Munich is the most ambitious answer to this so far. Its Fragmentarium holds digital records of fragments, including transliterations, so scholars can search and compare pieces that physically live in different collections. Its digital edition of Gilgamesh goes further, bringing manuscripts, reconstructed lines, translations, notes and parallels into one resource that keeps changing. A printed critical edition is fixed the day it's published. The eBL edition can absorb new finds, and it keeps the link between each reconstructed line and the manuscripts behind it.

That changes the question computers get asked. For a long time it was "can a computer translate this tablet?" Now it can also be "can a computer tell us which tablets belong together?" I think the second question matters more.

## Finding What Nobody Knew They Had

The 2025 recovery of the Hymn to Babylon is the best example I know.

The hymn was a school text. Babylonian students copied it for something like six centuries, and by the number of surviving classroom excerpts it sits alongside _Enuma elish_ as one of the standard works. Modern scholarship had no idea it existed. Its pieces were spread between Baghdad, London, Berlin and Istanbul. One of them, a school tablet in Berlin, had been published in 1925 and read for decades as part of something else entirely.

Anmar Fadhil and Enrique Jiménez started from a tablet excavated at Sippar in 1986 and searched its text against the Fragmentarium. The search, built to tolerate the variant spellings cuneiform is full of, turned up duplicates across collections. In the editors' own words, the eBL made it possible to use 21 manuscripts made up of 31 fragments.

The press ran it as AI reviving a lost hymn. The paper tells a more careful story. The matching was a search over transliterations that people had entered by hand, some of them from older handwritten notes by W. G. Lambert and Andrew George. After the matches came the real work: confirming them, joining fragments, collating the originals, and producing an edition with transliteration, normalised Akkadian, an English translation, commentary and photographs.

The software found the connection. Two scholars, one in Baghdad and one in Munich, worked out what it meant. That split is the most useful lesson I've taken from this whole field. Software is very good at searching an enormous space of possibilities, and a scholar is still the one who decides which of them hold up.

## Seeing the Signs

Some of the problem comes before translation even starts.

A cuneiform tablet is a set of wedge impressions in clay. Reading it means recognising individual signs, often from photographs of damaged or irregular surfaces. ProtoSnap, a 2025 project from Tel Aviv University, Cornell and LMU, works at this stage. Instead of treating a sign as a label ("this is sign X"), it models the arrangement of the strokes inside it. It takes a clean prototype of a sign, snaps it onto the wedges in a real photograph, and then uses those aligned skeletons to generate synthetic training images with realistic variation.

That matters because cuneiform signs were never standardised the way a typeface is. They shift with period, scribal tradition and the individual hand. Rare signs are the hardest for any recognition system, because there are so few examples to learn from. ProtoSnap's synthetic data lifted classifier accuracy on rare signs from about 26% to 53%. Here a generative model's job is to make better training material for another model, which I find a far more interesting use than asking it for an answer.

ProtoSnap isn't interpreting Gilgamesh. It helps establish what is physically on the tablet, and the authors are open that it fails when a scribe used a structurally different variant of a sign. That happens to be exactly the case where a trained human reader earns their keep.

Put the stages together and the pipeline looks something like this:

photograph → sign recognition → transliteration → fragment matching → reconstruction → translation → interpretation

Machines can help at nearly every step. Help is a long way from autonomy.

## Translation Is Where It Gets Hard

Translation is the obvious application, and the hardest one.

In 2023 Gai Gutherz and colleagues published neural machine translation models for Akkadian, going from transliteration into English and from cuneiform Unicode directly into English. They trained on around 50,000 sentences, which is tiny by modern AI standards, and compared the results against translation-memory approaches.

The models did best on repetitive, formulaic genres: royal inscriptions, administrative reports, letters. Kings boasting and officials reporting, the least poetic Akkadian there is. On literary texts the output could be fluent English with little connection to the source. The authors presented the system as an aid for scholars, and they never tested it on Gilgamesh, so nobody should turn their result into a claim that AI has translated the epic.

Gilgamesh is poetry, and poetry is where the models struggle. A royal inscription repeats its formulas. An epic punishes guesswork. A model can get every word right and still misread the sentence. It can produce smooth English the source doesn't support, or settle an ambiguity that should have been left open. The Assyriologist Nathan Wasserman put it well: "even when you have the words correct, it doesn't mean you understand."

Fluency makes all of this worse. The better the English sounds, the less likely anyone is to check it.

## Coherence Is Not Evidence

Nancy Sandars's 1960 Penguin version is a useful comparison. She built one continuous narrative out of several ancient traditions (Standard Babylonian, Old Babylonian, Hittite and Sumerian), smoothing over the gaps and blending sources into a story people could actually read. It became hugely influential. It also blurred the line between recovering evidence and building a coherent narrative out of it.

Language models are extremely good at the second thing. Hand one some fragments and some context and it will make a whole.

Ancient scholarship sometimes has to resist that impulse. A gap in a tablet is not always a missing sentence waiting to be written. Sometimes it's an uncertainty that should stay on the page. A damaged sign is no invitation to pick the statistically likeliest word, and a disputed reading doesn't get better because someone forced it down to a single answer.

This is where the eBL gets it right. Its edition shows reconstructed text next to the manuscript evidence, so nobody mistakes the reconstruction for what actually survived in the clay. If I had to pick one principle for AI-assisted scholarship, it would come from that: the aim is to make uncertainty easier to investigate, and eliminating it was never on the table.

## AI as a Research Multiplier

The usual question about AI in the humanities is whether it will replace the expert. Gilgamesh suggests a better one: how much more evidence can an expert get through with its help?

Something like half a million cuneiform tablets sit in museum collections, and only a fraction have been published. The shortage is people, not intelligence: a vast archive against the small number of specialists who can read it. Machines suit that kind of problem well. They can compare huge numbers of fragments, flag candidate matches, classify images, generate training examples, draft preliminary translations and point a specialist at the passages worth a closer look. Then they can do it all again tomorrow without getting bored.

None of that makes the machine a scholar. It makes it a multiplier for the scholars we have.

## The Human Remains at Both Ends

Simon Armitage's 2026 translation shows the same division of labour, without a machine anywhere in it.

Armitage doesn't read Akkadian. He worked from a literal translation prepared by the Oxford Assyriologist Jacob L. Dahl and turned it into English verse. The specialist supplied the linguistic knowledge; the poet supplied the judgement.

An AI system can plausibly do something like Dahl's first step, a rough literal crib showing what it thinks the words mean. After that, someone still has to decide what gets repeated and what gets stressed, where ambiguity stays, how the rhythm moves, which ancient versions to combine and whether a lacuna shows. In the end they decide what the poem should sound like in English.

Armitage is candid about those choices. He calls it "absolutely right to recognize the poem's inherent incompleteness", yet in places he chose to "favor readability and a sense of poetic wholeness over the worship of its accidental breakages." Elsewhere he is blunter: "All translation is an illusion. All translation is a compromise."

Deciding where to make that compromise is judgement, and no amount of compute settles it. It will matter more as the computational parts get easier.

## The Machine Suggests, the Scholar Judges

So the useful position sits somewhere between "AI replaces scholarship" and "AI has no place in scholarship". AI generates possibilities. Scholarship tests them.

That sounds obvious, but it changes what a good tool should produce. Suppose a system finds a possible link between two fragments. "These fragments belong together" is the wrong output. The right one is closer to "these fragments may belong together because of these textual similarities; here is the evidence, and here are the alternatives."

Translation should work the same way. A system shouldn't announce that a damaged line means X. It should lay out the likeliest readings, the evidence for each, the parallel passages, and where the uncertainty still sits.

One approach generates answers. The other helps people navigate evidence, and for ancient literature I'd take the second every time.

## The Danger Is Fluency

Nobody serious expects AI to become the Assyriologist any time soon. The nearer risk is that it becomes fluent enough for people to stop noticing when it's wrong.

The Gutherz results are a fair warning: useful on some kinds of Akkadian, much less reliable on literary and unfamiliar material. Ancient texts raise the stakes. A hallucination in an ordinary chat is just a mistake. A hallucinated reconstruction of an ancient text can end up in someone's understanding of history.

Once an invented reading appears in a fluent translation, it gets quoted, copied into a dataset and absorbed by the next model. By then the original error is very hard to trace.

That's why provenance matters. A trustworthy workflow keeps four things apart: what survives on the tablet, what the algorithm suggests, what the scholar reconstructs, and what the translator chooses. AI should make those boundaries sharper, and at the moment it tends to smudge them.

## The Unfinished Epic

There is something fitting about AI turning up in the story of Gilgamesh, because the epic has always been rebuilt. Sumerian stories fed into later Babylonian traditions. Versions circulated and drifted apart. Scribes copied and adapted what they inherited, later scholars pieced the fragments back together, and modern translators made their own literary choices.

Computers are the latest hands on it. The eBL links manuscripts across collections. Computer vision helps read the structure of signs. Machine translation can draft rough Akkadian. Digital editions show how manuscript, reconstruction, translation and commentary relate to one another.

None of it gives us a definitive Gilgamesh. It gives us more evidence, more connections and more leads for people to chase. To me that is the real promise of AI in the humanities: historians, philologists and poets working at a scale that used to be impossible.

The ancient scribes couldn't search every surviving tablet for a matching line. A nineteenth-century Assyriologist couldn't check a newly found fragment against every known manuscript. A twentieth-century translator couldn't query a corpus of thousands of texts in seconds. We can, and AI is increasingly part of how.

## The Machine at the Edge of the Story

Gilgamesh is a story about limits. The king tries to get past the hardest ones, death, loss and being forgotten, and he fails. What he brings home instead is the understanding that comes from facing them.

Recovering Gilgamesh has limits of its own. Tablets will stay broken and signs will stay ambiguous. Some passages are gone for good, translators will keep disagreeing, and there are questions the surviving evidence will never answer.

AI can't remove those limits. It can help us get closer to them.

I find that a better picture of artificial intelligence than the familiar one where machines replace expertise. The machine doesn't need to be the Assyriologist. It needs to be a very capable assistant to one: searching where people can't search exhaustively, comparing at a scale nobody could manage by hand, and proposing connections a scholar can test. And when it's wrong, the record should make that visible.

The last step is still human. Someone has to look at the evidence and ask whether this is really what the tablet says, then decide what it means. Eventually someone turns the fragments into a story another person can read.

The clay is still talking. AI is helping us hear more of it.
