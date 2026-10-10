# Context engineering — is it a coherent discipline displacing prompt engineering, or a rebrand, and what does the evidence actually support

_17 sources, generated from `results`._

## Table of Contents

1. [CRAFT framework origin (Rishi Jain)](#craft-framework-origin-rishi-jain)
2. [Context Engineering 2.0: The Context of Context Engineering (arXiv:2510.26493)](#context-engineering-20-the-context-of-context-engineering-arxiv251026493)
3. [Context Engineering: From Prompts to Corporate Multi-Agent Architecture (arXiv:2603.09619)](#context-engineering-from-prompts-to-corporate-multi-agent-architecture-arxiv260309619)
4. [Context Engineering for Agents (LangChain blog + filesystem post)](#context-engineering-for-agents-langchain-blog-filesystem-post)
5. [Context Rot (Chroma research)](#context-rot-chroma-research) — Confidence: primary_verified
6. [Diagnosing and Mitigating Context Rot in Long-horizon Search (arXiv:2606.29718)](#diagnosing-and-mitigating-context-rot-in-long-horizon-search-arxiv260629718) — Confidence: primary_verified
7. [Effective context engineering for AI agents (Anthropic, Sept 2025)](#effective-context-engineering-for-ai-agents-anthropic-sept-2025) — Confidence: primary_verified
8. [How Contexts Fail / How to Fix Your Context (Drew Breunig)](#how-contexts-fail-how-to-fix-your-context-drew-breunig) — Confidence: primary_verified
9. [Just-in-time context loading / agentic retrieval patterns](#just-in-time-context-loading-agentic-retrieval-patterns)
10. [The Karpathy/Lütke origin tweets (June 2025)](#the-karpathyltke-origin-tweets-june-2025) — Confidence: primary_verified
11. [Lost in the Middle (Liu et al.)](#lost-in-the-middle-liu-et-al) — Confidence: primary_verified
12. [NoLiMa benchmark (arXiv:2502.05167)](#nolima-benchmark-arxiv250205167) — Confidence: primary_verified
13. [Philipp Schmid (Google DeepMind) context engineering piece](#philipp-schmid-google-deepmind-context-engineering-piece)
14. [Positional Failures in Long-Context LLMs (arXiv:2605.23170)](#positional-failures-in-long-context-llms-arxiv260523170) — Confidence: primary_verified
15. [State of Context Management Report 2026 (DataHub)](#state-of-context-management-report-2026-datahub) — Confidence: conflicting_figures_found
16. [A Survey of Context Engineering for Large Language Models (arXiv:2507.13334)](#a-survey-of-context-engineering-for-large-language-models-arxiv250713334) — Confidence: primary_verified
17. [The state of context engineering 2026 (Redis)](#the-state-of-context-engineering-2026-redis) — Confidence: conflicting_figures_found

---

## CRAFT framework origin (Rishi Jain)
<a id="craft-framework-origin-rishi-jain"></a>

*Category: practitioner framework / content marketing*

**Basic Info**

- **Publisher**: 
    > Rishi Jain, individual content marketer and prompting-course creator (founder of Digital Scholar, co-founder of echoVME Digital; self-described "India's most-followed AI Influencer")
- **Source Type**: practitioner framework (content-marketing mnemonic published via personal blog and paid courses)

**Core Claim**

- **Claim Value**: 
    > CRAFT is a 5-step prompt-writing mnemonic: Context (set the scene / establish who you are and your situation), Role (tell the model who to be), Action (state the task with a precise verb), Format (define the deliverable: length, structure, constraints), Tone (frame the style, ideally with a counter-example of what to avoid). Jain states he built it in 2022 after frameworks with "7 steps, 10 components, nested templates" didn't stick with his students, and designed CRAFT to be memorised and applied in 60 seconds.
- **Claim Definition**: 
    > This is a practitioner's taxonomy/mnemonic for structuring prompts, not a benchmark result or empirical finding. No controlled comparison, user study, or measured output-quality improvement is presented; the claim is pedagogical and anecdotal (what helped Jain's own students remember prompt structure), then repackaged as a general-purpose technique.

**Evidence Type**

- **Evidence Category**: practitioner anecdote / marketing assertion
- **Reproducibility**: 
    > Not applicable in the benchmark sense: no code, dataset, or eval harness exists because no quantitative claim is being made. The only "evidence" offered is Jain's personal teaching anecdote; no independent replication of any output-quality improvement has been found.

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > Yes. Jain sells prompting/AI courses that use CRAFT as teaching material and as a lead-generation hook, including the "30 Days AI Mastery Challenge," "AI Marketer Pro," a free "CRAFT Prompt Builder" tool, and corporate AI training delivered through Digital Scholar across Indian cities. CRAFT functions as branded content for these commercial offerings rather than a disinterested research contribution.
- **Conflict Notes**: 
    > CRAFT is structurally derivative of the earlier RACE framework (Role, Action, Context, Expectation), which predates it in circulation as a prompt-engineering mnemonic. The two frameworks share three of four/five core elements (Role, Action, Context) nearly verbatim; CRAFT's distinguishing moves are (1) renaming Expectation to the narrower, more concrete Format, (2) adding a fifth element, Tone, and (3) reordering Context to the front of the acronym to form a more pronounceable, brandable word (CRAFT vs. RACE). No source reviewed credits RACE or any other predecessor; Jain's own account presents CRAFT as built from scratch out of frustration with "7-step, 10-component" frameworks, with no acknowledgment of structural overlap with RACE or other contemporaneous Role/Action/Context-style mnemonics common in the prompt-engineering influencer space.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Complicates the 'prompt engineering is dead, context engineering is what matters now' framing from the opposite direction than most sources in this set: CRAFT is itself prompt-engineering content (a mnemonic for writing better prompts), produced for an audience of marketers and course buyers, not context engineering. Citing CRAFT as evidence that 'context engineering' is a mature discipline would be a category error; it is better used as an example of how much of the public prompt/context-engineering discourse is influencer content-marketing mnemonics rather than research, which is useful ammunition for distinguishing genuine engineering discipline claims from reskinned teaching acronyms.

**Audience Register**

- **Register**: 
    > practitioner/engineer (aimed at marketers, students, and general AI users learning to write prompts; not aimed at researchers or enterprise IT buyers)

**Source Confidence**

- **Notes**: 
    > The 2022 origin date and the five-component definition are taken directly from Jain's own blog post (rrishijain.com/blog/craft-framework), which counts as a primary-ish source for the claim of authorship, but no independently dated artifact (a 2022 tweet, video, or slide deck) was located to verify the 2022 date itself; it rests on Jain's own retrospective account written later. The RACE-derivative relationship is based on comparing the two frameworks' published definitions side by side; no document was found where either framework's creator acknowledges the other, so the derivative-of claim is an inference from structural similarity, not a confirmed admission.

**Overlap With Existing Content**

- **Already Cited**: no
- **New Angle**: 
    > Adds a concrete, named predecessor (RACE) that CRAFT is structurally derivative of, which sharpens the general point already logged in article_ideas.md (09-27, 'Context engineering didn't retire the prompt') that current framing vocabulary is often repackaged rather than new. This source is a clean example of a content-marketing mnemonic with explicit commercial motive (course sales, corporate training) presented as a prompting innovation, useful as a contrast case against the academic survey and vendor-blog sources already in this research set.

**Uncertain fields (excluded above):**

- date_published
- derivative_of
- confidence

---

## Context Engineering 2.0: The Context of Context Engineering (arXiv:2510.26493)
<a id="context-engineering-20-the-context-of-context-engineering-arxiv251026493"></a>

*Category: academic critique*

**Basic Info**

- **Publisher**: 
    > GAIR-NLP / SII research group (Qishuo Hua, Lyumanshan Ye, Dayuan Fu, Yang Xiao, Xiaojie Cai, Yunze Wu, Jifan Lin, Junfei Wang, Pengfei Liu); arXiv preprint
- **Date Published**: 2025-10-30 (arXiv:2510.26493v1, submitted)
- **Source Type**: academic paper

**Core Claim**

- **Claim Value**: 
    > Context engineering is not a product of the 2023-2025 agent/LLM boom but a practice with over 20 years of history, which the paper periodizes into four eras: Era 1.0 (1990s-2020, 'Primitive Computation', rigid structured-input HCI/ubiquitous-computing systems), Era 2.0 (2020-present, 'Agent-Centric Intelligence', LLM-driven agents handling prompt engineering, RAG, tool calling, and long-term memory), Era 3.0 (future, 'Human-Level Intelligence', nuanced reasoning over ambiguous context), and Era 4.0 (speculative, 'Superhuman Intelligence', systems that construct context for humans rather than the reverse). It defines context engineering as an entropy-reduction process converting high-entropy, ambiguous human context into low-entropy, machine-interpretable representations, and proposes design principles ('Minimal Sufficiency', 'Semantic Continuity') meant to apply across the whole pipeline (collection, storage, representation, multimodal fusion, abstraction/'self-baking', selection, dynamic adaptation).
- **Claim Definition**: 
    > This is a conceptual/theoretical framework and historical survey, not a benchmark or empirical study. It asserts a taxonomy (the four eras) and a formal framing (entropy reduction, set-theoretic/functional composition of context operations) rather than measuring anything. Prompt engineering and RAG are explicitly treated as techniques subordinate to context engineering, not as separate or competing terms.

**Evidence Type**

- **Evidence Category**: survey opinion / conceptual framework (no benchmark or empirical result)
- **Reproducibility**: 
    > Not applicable: paper has no code-dependent empirical claims. It does provide a public GitHub repo (github.com/GAIR-NLP/Context-Engineering-2.0) and companion site (context.opensii.ai) with supplementary material, but these support the conceptual framework/taxonomy rather than a reproducible experiment.

**Commercial Interest**

- **Conflict Notes**: 
    > No specific figure-level discrepancy found versus how this paper is cited elsewhere (it is too recent, Oct 2026 submission, to have accumulated secondary citations with numeric claims). The paper itself flags its own gaps: the entropy-reduction framing has no quantified metric tying it to task performance, the four-era transitions have no operational/empirical criteria, and 'Minimal Sufficiency'/'Semantic Continuity' are asserted conceptually without algorithms or measurable constraints - i.e., the paper's own stated limitations undercut how 'rigorous' a reader might otherwise take the discipline claim to be.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Complicates the 'prompt engineering is dead, context engineering is what matters now' framing from a different angle than most industry sources: rather than disputing whether prompt engineering still matters, it denies that context engineering is a new or 2025-coined idea at all, arguing it has been continuously practiced for 20+ years and that prompt engineering/RAG/tool calling/memory are just techniques nested inside it. This reframes the whole debate as a terminology/periodization dispute rather than a question of which skill is obsolete.
- **Derivative Of**: 
    > Explicitly extends Mei et al., 'A Survey of Context Engineering for Large Language Models' (arXiv:2507.13334), which the authors say was LLM-practice-focused; this paper broadens that into a longer historical trajectory (HCI/ubiquitous computing through agentic LLMs) and adds a formal (set-theoretic/entropy) framing. It cites Anthropic, LangChain, AutoGPT, and Letta as examples of 'Era 2.0' implementations of principles the authors say predate them, effectively positioning current industry blog-post framings (Anthropic's, LangChain's) as instances of an older pattern rather than original insights.

**Audience Register**

- **Register**: 
    > academic researcher, with secondary relevance to practitioner/engineer readers (via its taxonomy of techniques); not pitched at enterprise IT buyers.

**Source Confidence**

- **Notes**: 
    > Two independent extraction attempts (arXiv HTML render and a third-party summarizer) agreed on the four-era structure, the entropy-reduction definition, and the paper's self-identified lack of empirical validation, which gives reasonable confidence in those points. No numeric/statistical claim exists in this source to cross-check against secondary citations elsewhere.

**Overlap With Existing Content**

- **New Angle**: 
    > Adds an academic, non-vendor voice arguing the 'context engineering' label itself is not novel terminology from the 2025 agent boom but a 20+ year old practice, which is a different and sharper version of the 'rebrand' critique than most blog-level commentary offers: it doesn't just say 'this is just RAG with a new name,' it historicizes the whole lineage back to 1990s HCI and offers a four-era taxonomy plus an explicit, self-acknowledged lack of empirical grounding (no metrics, no benchmarks, no transition criteria) for the 'discipline' it proposes. Useful as the strongest 'this is old wine' counterpoint available from inside academia rather than from a competing vendor or blogger.

**Uncertain fields (excluded above):**

- publisher_sells_relevant_product
- confidence
- already_cited

---

## Context Engineering: From Prompts to Corporate Multi-Agent Architecture (arXiv:2603.09619)
<a id="context-engineering-from-prompts-to-corporate-multi-agent-architecture-arxiv260309619"></a>

*Category: academic paper*

**Basic Info**

- **Publisher**: 
    > Vera V. Vishnyakova, affiliated with HSE University (Higher School of Economics); single-author preprint posted to arXiv, not yet confirmed peer-reviewed/published in a venue.
- **Date Published**: v1 submitted March 10, 2026; v2 revised March 13, 2026 (arXiv:2603.09619). Categories: cs.AI, cs.MA.
- **Source Type**: academic paper (conceptual/framework paper, not an empirical study)

**Core Claim**

- **Claim Value**: 
    > Argues that as AI systems move from stateless chatbots to autonomous multi-step agents, prompt engineering is 'necessary but insufficient,' and proposes context engineering (CE) as a standalone discipline covering the design, structuring, and management of an agent's entire informational environment, framed as the agent's 'operating system.' Introduces five context-quality criteria (relevance, sufficiency, isolation, economy, provenance) and, beyond CE itself, proposes two further disciplines: intent engineering (encoding organizational goals, values, and trade-off hierarchies into agent infrastructure) and specification engineering (a machine-readable corpus of corporate policies/standards enabling autonomous multi-agent operation at scale). These are combined into a four-level cumulative maturity pyramid (prompt -> context -> intent -> specification engineering), each level subsuming the one below as a necessary foundation. The paper is roughly 25 pages and cites a Deloitte 2026 figure that 75% of enterprises plan agentic AI adoption within two years, alongside a KPMG 2026 citation on enterprise agentic AI scaling challenges and references to vendor architectures (Google ADK, Anthropic, LangChain).
- **Claim Definition**: 
    > A conceptual framework/taxonomy paper, not a benchmark or empirical study: the five context-quality criteria and the three-discipline maturity pyramid (context, intent, specification engineering) are the author's own proposed classification scheme, argued from enterprise research citations (Deloitte, KPMG) and vendor architecture examples rather than from new experiments, user studies, or measured output-quality data generated by the author.

**Evidence Type**

- **Evidence Category**: 
    > survey opinion / practitioner-adjacent conceptual argument, supported by secondary enterprise-survey citations (Deloitte, KPMG) rather than original empirical data
- **Reproducibility**: 
    > Not applicable in the benchmark sense: the paper presents no original experiment, dataset, or eval harness of its own to replicate. Its factual backbone (the 75% Deloitte adoption figure, the KPMG scaling-challenge point) is secondary citation of other organizations' survey data, which would need to be verified against those original reports rather than against this paper.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Extends and complicates the 'prompt engineering is dead, context engineering is what matters now' framing rather than simply restating it: it accepts the premise that prompt engineering alone is insufficient for agentic systems, but immediately argues that context engineering itself is also insufficient at enterprise scale, needing to be subsumed by intent engineering and specification engineering. This is useful as a source that takes the 'context engineering is the new discipline' claim one step further than most of the research set, while implicitly conceding that each successive relabeling (prompt -> context -> intent -> specification) is itself an escalation of the same naming pattern already visible in the 2025 survey and the Karpathy/Lutke origin tweets.

**Audience Register**

- **Register**: 
    > primarily academic researcher and enterprise IT buyer (the paper is framed academically but its content, maturity model, and Deloitte/KPMG citations target an enterprise architecture/governance audience, not a general ML research audience).

**Source Confidence**

- **Notes**: 
    > Core bibliographic facts (author, affiliation, dates, abstract, five criteria, three-discipline pyramid, Deloitte/KPMG citations, vendor references) were corroborated across the arXiv abstract page and a third-party summary (alphaxiv), but the full PDF could not be parsed as text in this session (binary/compressed stream content only), so page-level detail such as an explicit citation list, funding disclosure, or a direct citation/non-citation of arXiv:2507.13334 could not be independently confirmed from the primary PDF itself. Treat the 'no direct citation found' conclusion in derivative_of as based on secondary summaries, not a full-text citation check.

**Overlap With Existing Content**

- **Already Cited**: no
- **New Angle**: 
    > Adds a concrete 2026 example of the 'context engineering' framing being extended one level further (into intent engineering and specification engineering) for an enterprise-governance audience, which is useful evidence for the article_ideas.md point that today's framing escalates year over year (prompt -> context -> intent -> specification) rather than settling on a stable claim. Also surfaces the paper's own 'surged and retreated' characterization of enterprise agentic AI adoption, a useful qualifier against breezier claims elsewhere in this research set that context engineering has already delivered enterprise-scale results.

**Uncertain fields (excluded above):**

- publisher_sells_relevant_product
- conflict_notes
- derivative_of
- confidence

---

## Context Engineering for Agents (LangChain blog + filesystem post)
<a id="context-engineering-for-agents-langchain-blog-filesystem-post"></a>

*Category: vendor blog*

**Basic Info**

- **Publisher**: 
    > LangChain (langchain.com / blog.langchain.com) - commercial AI agent infrastructure vendor, maker of LangGraph, LangSmith, and the Deep Agents SDK
- **Source Type**: vendor blog

**Core Claim**

- **Claim Value**: 
    > Two linked claims. (1) A four-strategy taxonomy for agent context engineering: Write (save information outside the context window, e.g. scratchpads/memories), Select (pull relevant information into context, e.g. RAG/memory retrieval), Compress (reduce tokens via summarization/trimming), Isolate (split context across multi-agent architectures or sandboxes). (2) The filesystem follow-up claims a filesystem is the right interface for implementing these strategies in practice, citing four concrete uses: offloading large tool outputs (e.g. web search results) to files and re-reading only relevant excerpts to fight token bloat; writing plans and subagent outputs to files to scale beyond context limits; using ls/glob/grep/read_file for precise retrieval in structured technical docs instead of semantic search; and having agents write feedback-derived instructions back to files for adaptive learning.
- **Claim Definition**: 
    > A vendor's practitioner framework/technique recommendation, not an original empirical benchmark. Both posts synthesize and re-label prior public work (Karpathy's context-as-RAM analogy, Cognition AI's '#1 job' framing, Anthropic's multi-agent research and agent-skills work, Manus's recitation/filesystem pattern, Cursor's search blog, and explicitly Drew Breunig's four-failure-mode taxonomy and six-tactic list) into a LangChain-branded framework, then maps that framework onto LangChain's own products (LangGraph, LangSmith, Deep Agents SDK).

**Evidence Type**

- **Evidence Category**: 
    > marketing assertion with embedded citations to others' practitioner anecdotes and (secondhand) benchmark figures; not itself a new benchmark/empirical result

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > Yes. LangChain sells LangGraph (agent orchestration framework), LangSmith (observability/eval platform), and the open-source Deep Agents SDK. Both posts end with explicit calls to action promoting these products as the implementation path for the context engineering patterns described; the filesystem post in particular frames Deep Agents' filesystem tools as the productized version of the pattern it just described.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Supports the "prompt engineering is dead, context engineering is what matters now" framing explicitly and enthusiastically, citing Cognition AI's claim that context engineering is effectively the #1 job for agent builders and Karpathy's context-as-operating-system-RAM analogy. Both posts treat context engineering as a settled successor discipline to prompt engineering rather than complicating or contradicting that narrative.
- **Derivative Of**: 
    > Directly derivative of Drew Breunig's essays "How Long Contexts Fail" (June 22, 2025) and "How to Fix Your Context" (June 26, 2025) for the four-failure-mode taxonomy (poisoning, distraction, confusion, clash) and the six-tactic list (RAG, Tool Loadout, Context Quarantine, Pruning, Summarization, Offloading) - named and cited in the main blog post, and explicitly operationalized in the companion GitHub repo (langchain-ai/how_to_fix_your_context). Also cites Andrej Karpathy (context-as-RAM framing), Cognition AI (context engineering as top job), Anthropic (multi-agent researcher system, agent skills), and, for the filesystem post, Manus's "context engineering for AI agents" post and Cursor's search-architecture blog. LangChain's own original contribution is primarily the Write/Select/Compress/Isolate packaging and the product tie-in, not the underlying failure/fix taxonomy.

**Audience Register**

- **Register**: 
    > practitioner/engineer primary audience, with enterprise IT buyer undertones via the LangSmith observability/evaluation pitch at the end of both posts

**Source Confidence**

- **Notes**: 
    > Content for both LangChain posts and the GitHub repo was retrieved via automated fetch-and-summarize rather than a full manual line-by-line read of raw HTML, so exact wording of attributions and the precise ordering of citations within each post have not been independently re-verified beyond the summarized excerpts. The core finding, that LangChain's taxonomy is substantially built on Breunig's prior public work and that LangChain's own repo admits this, is corroborated across three independent fetches (both blog posts, plus the GitHub README) and is consistent with Simon Willison's and others' public commentary tracing the lineage back to Breunig.

**Overlap With Existing Content**

- **Already Cited**: no
- **New Angle**: 
    > article_ideas.md's existing 09-27 'Context engineering didn't retire the prompt' entry cites a different data point (a 2026 industry survey claiming 82% of IT/data leaders say prompts alone no longer suffice) and argues a counterpoint about prompt precision as a design skill; it does not reference LangChain or Breunig by name. This research adds the specific provenance chain: LangChain's popular context-engineering framing is largely a repackaging of Drew Breunig's independently-coined failure taxonomy and six-tactic framework, confirmed by LangChain's own GitHub repo credit line, which is a sharper and more concrete angle for a piece on who actually originates 'context engineering' ideas versus who popularizes and monetizes them.

**Uncertain fields (excluded above):**

- date_published
- reproducibility
- conflict_notes
- confidence

---

## Context Rot (Chroma research)
<a id="context-rot-chroma-research"></a>

*Category: empirical benchmark*

**Basic Info**

- **Publisher**: Chroma (Chroma Research team: Kelly Hong, Anton Troynikov, Jeff Huber)
- **Date Published**: July 2025 (technical report and GitHub reproduction toolkit published together)
- **Source Type**: vendor blog / technical report (vendor-published empirical benchmark)

**Core Claim**

- **Claim Value**: 
    > Tested 18 frontier LLMs (including GPT-4.1, Claude Opus/Sonnet 4 family, Gemini 2.5, Qwen3) across three experiment families (NIAH extension with semantic/distractor variants, LongMemEval conversational QA, and a Repeated Words replication task). Every model's accuracy degrades as input length grows, not only near the stated context limit: degradation is visible from the shortest increments tested and is non-uniform, with some models showing large drops by roughly 113K tokens (about one-tenth of a 1M-token window) and measurable rot even around 50K tokens on models advertising much larger windows.
- **Claim Definition**: 
    > A benchmark result: controlled experiments varying input length while holding task difficulty constant, measuring retrieval/replication accuracy as a function of token count. It is a direct empirical measurement, not a survey, anecdote, or taxonomy.

**Evidence Type**

- **Evidence Category**: benchmark/empirical result

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > Yes. Chroma is a vector/embedding database vendor. A finding that 'more context is harmful, not just costly' directly supports the case for retrieval-based context curation (Chroma's product category) over naive long-context stuffing, which is a textbook vendor-interest alignment.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Supports the context-engineering framing, but as a technical justification rather than a referendum on prompting: the finding is that longer context is unreliable per se, which argues for curating/compressing what goes into context (context engineering) rather than for abandoning precise prompting. It does not claim prompt wording is unimportant; it is compatible with the counterpoint already logged in article_ideas.md that a prompt is still required to say what you want retrieved or kept.
- **Derivative Of**: 
    > Explicitly extends the needle-in-a-haystack (NIAH) retrieval-testing tradition and is positioned by Chroma as going beyond simple NIAH by adding semantic (non-literal) matches, distractors, and a conversational-memory task (LongMemEval); it treats 'Lost in the Middle' (Liu et al. 2023) as part of the same lineage of positional/length-sensitivity findings it builds on.

**Audience Register**

- **Register**: 
    > practitioner/engineer primarily, with enterprise-IT-buyer secondary appeal (the report is framed as actionable guidance for teams deciding how much context to feed production LLM systems); it is not written or peer-reviewed as an academic paper.

**Source Confidence**

- **Confidence**: primary_verified

**Overlap With Existing Content**

- **Already Cited**: 
    > No. Neither 'Context Rot' nor Chroma is named in article_ideas.md's 'Context engineering didn't retire the prompt' entry (2026-09-27) or its cited 82%-of-leaders survey figure; that entry cites a different, unnamed 2026 industry report. This Chroma report would be a new citation if added.
- **New Angle**: 
    > Adds a concrete, vendor-produced empirical mechanism (degradation starts well before the stated context limit, not just at it) that the existing article_ideas.md entry lacks: that entry currently rests on an opinion survey (82% of leaders agreeing prompts alone don't suffice), not a benchmark. Pulling in Context Rot would let the thought argue 'context engineering has a real technical basis' while the commercial-interest angle (vector-DB vendor benefiting from the problem it diagnoses) gives the counterpoint sharper teeth: the existing entry's point that 'a prompt is still required to state what you want' could be extended to 'and so is judgement about whether this vendor's framing of the fix serves the vendor.'

**Uncertain fields (excluded above):**

- reproducibility
- conflict_notes
- notes

---

## Diagnosing and Mitigating Context Rot in Long-horizon Search (arXiv:2606.29718)
<a id="diagnosing-and-mitigating-context-rot-in-long-horizon-search-arxiv260629718"></a>

*Category: academic paper*

**Basic Info**

- **Publisher**: 
    > Shijie Xia, Yikun Wang, Zhen Huang, Pengfei Liu (Shanghai Jiao Tong University / Fudan University, under the GAIR research group)
- **Date Published**: Submitted 29 June 2026 (v1); revised 4 August 2026. arXiv:2606.29718, cs.IR/cs.CL/cs.AI.
- **Source Type**: academic paper

**Core Claim**

- **Claim Value**: 
    > In long-horizon agentic search (deep-search tasks using tools over many turns), models exhibit 'premature termination': as accumulated context grows, models increasingly give up or output low-confidence wrong answers well before the context window is exhausted, rather than continuing to explore. This rot gets worse with longer accumulated context even after controlling for query difficulty. The authors test seven mitigation methods across three categories (context compaction: length-based, turn-based, semantic-trigger variants; context trimming: discard-all, keep-latest, keep-latest-with-summarization; context isolation: a FoldAgent sub-agent approach) on BrowseComp, BrowseComp-Plus, and xbench-DeepSearch. 'Keep-latest with summarization' gave the best balance of cost and accuracy; results were model-dependent (e.g. FoldAgent: 54.0% accuracy for Qwen vs 44.0% for GLM-4.7 on BrowseComp). A behavior-aware (rot-aware) filtering strategy for rejection sampling/parallel sampling improved performance by 2.6-4.9 percentage points across three aggregation methods, and the approaches could be combined for further gains.
- **Claim Definition**: 
    > This is a benchmark/empirical result from an academic paper, not a vendor claim. It measures agent behavior (premature termination rate, task accuracy) on established deep-search benchmarks (BrowseComp, BrowseComp-Plus, xbench-DeepSearch) under varying accumulated-context length, and separately measures the effect of applying context-management and sampling-aggregation mitigation techniques on those same benchmarks.

**Evidence Type**

- **Evidence Category**: benchmark/empirical result

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > No. Authors are academic researchers (Shanghai Jiao Tong University, Fudan University, GAIR research group), not a vendor of a context/memory/vector-DB product. No commercial product is promoted; the GitHub repo is a research artifact, not a sold tool.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Complicates/extends the 'prompt engineering is dead, context engineering is what matters' framing in a nuanced way: it shows that naive context accumulation (more tool-call history, more retrieved documents) actively harms agentic search performance, so simply dumping more context into an agent's working memory is not a substitute for careful context management. It supports the broader context-engineering narrative (how context is managed/trimmed/compacted matters a lot) but undercuts a simplistic 'just give the model more context/tools and let it loop' version of agentic design.
- **Derivative Of**: 
    > Explicitly builds on and extends Chroma's 'Context Rot' technical report (2025), applying the context-rot concept from single-turn long-context QA to multi-turn, tool-using, long-horizon agentic search. Also situates itself relative to general agentic-search/deep-research literature (BrowseComp, xbench-DeepSearch) and context-management agent designs (e.g. sub-agent/FoldAgent-style isolation).

**Audience Register**

- **Register**: 
    > Primarily academic researcher / ML practitioner audience (an arXiv cs.IR/cs.CL paper with a public GitHub implementation), secondarily useful to engineers building production agentic search/deep-research systems who need concrete mitigation techniques.

**Source Confidence**

- **Confidence**: primary_verified

**Overlap With Existing Content**

- **Already Cited**: no
- **New Angle**: 
    > Adds an independent, non-vendor academic data point that the 'context rot' phenomenon generalizes beyond Chroma's original single-turn long-context QA setting into multi-turn agentic tool-use search, with a newly characterized failure mode (premature termination / giving up) rather than just accuracy decay. Also contributes concrete, benchmarked mitigation techniques (context compaction/trimming/isolation, rot-aware rejection sampling) with effect sizes, which is new material beyond what's logged in article_ideas.md or AGENTS.md so far.

**Uncertain fields (excluded above):**

- reproducibility
- conflict_notes
- notes

---

## Effective context engineering for AI agents (Anthropic, Sept 2025)
<a id="effective-context-engineering-for-ai-agents-anthropic-sept-2025"></a>

*Category: vendor blog*

**Basic Info**

- **Publisher**: 
    > Anthropic (Applied AI team: Prithvi Rajasekaran, Ethan Dixon, Carly Ryan, Jeremy Hadfield, with contributions from Rafi Ayub, Hannah Moran, Cal Rueb, and Connor Jennings)
- **Date Published**: 2025-09-29
- **Source Type**: vendor blog

**Core Claim**

- **Claim Value**: 
    > No stat or benchmark number; the article is a set of named techniques: (1) calibrate system prompts to the 'right altitude' (specific enough to guide, flexible enough to avoid brittle if-else logic), (2) design minimal, non-overlapping, token-efficient tools, (3) curate a small number of diverse canonical few-shot examples rather than exhaustive edge-case lists, (4) prefer just-in-time retrieval (lightweight identifiers + runtime lookup) over pre-loading all data, (5) use compaction to summarize conversation history while preserving key decisions, (6) have agents maintain structured notes/memory files outside the context window for long-horizon tasks, (7) use sub-agent architectures where specialized agents return condensed summaries to an orchestrating agent.
- **Claim Definition**: 
    > Practitioner guidance and a taxonomy of techniques for managing an LLM agent's context window, drawn from Anthropic's own observations of customer deployments and internal agent-building experience, not a benchmark result or survey finding.

**Evidence Type**

- **Evidence Category**: practitioner anecdote
- **Reproducibility**: 
    > Not applicable: the article presents no benchmark, dataset, or eval harness of its own. It is guidance, not an empirical study, so there is nothing here for a third party to replicate.

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > Yes, indirectly. Anthropic sells Claude and Claude Code, and has shipped related product features (a memory tool and context-editing/compaction capability) that this guidance implicitly encourages developers to adopt. However the article itself reads as general engineering advice rather than a pitch for a specific paid feature, and it does not cite Anthropic product performance numbers to make its case.
- **Conflict Notes**: 
    > Secondary summaries and search snippets sometimes attach specific performance numbers (a '39% improvement' and an '84% reduction in token consumption' on a 100-round web-search agent task) to this article's title. A direct fetch of the article's full text found no such numbers anywhere in it; those figures belong to a separate, related Anthropic announcement about the memory tool and context-editing feature launch, published around the same period, not to this 'Effective context engineering for AI agents' essay. Any citation that credits this article with the 39%/84% stats is conflating two different Anthropic posts.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Complicates the 'prompt engineering is dead' framing rather than straightforwardly supporting it. Anthropic explicitly frames context engineering as 'the natural progression of prompt engineering,' an evolution and broadening of scope (from optimizing a single prompt to curating the full token budget across a multi-turn agent run), not a replacement that makes prompting obsolete. Several of its recommended techniques (writing clear, well-calibrated system prompts; curating canonical examples) are themselves prompt-engineering practices, just applied at agent scale.
- **Derivative Of**: 
    > Extends Anthropic's own earlier prompt-engineering guidance and documentation rather than countering or repackaging an external paper, benchmark, or framework. It is a first-party, non-derivative practitioner essay.

**Audience Register**

- **Register**: practitioner/engineer

**Source Confidence**

- **Confidence**: primary_verified
- **Notes**: 
    > Verified directly from the live article at anthropic.com/engineering. Confirmed no quantitative claims appear in the piece itself, despite that being a commonly repeated misattribution in secondary coverage. Publication date and author list confirmed from the live page.

**Overlap With Existing Content**

- **Already Cited**: no
- **New Angle**: 
    > Supplies a credible, first-party counterpoint to the vendor-survey entries in this research set: it is Anthropic speaking from its own product and customer experience, it explicitly declines to claim prompt engineering is obsolete, and it makes no empirical/benchmark claims at all, in contrast to the survey-stat vendors (Redis, DataHub-style reports) whose numbers are being scrutinized elsewhere in this set. Useful for the essay's counterpoint that a precise prompt is still foundational, since Anthropic's own 'right altitude' system-prompt guidance is itself a description of good prompt engineering.

---

## How Contexts Fail / How to Fix Your Context (Drew Breunig)
<a id="how-contexts-fail-how-to-fix-your-context-drew-breunig"></a>

*Category: independent practitioner essay*

**Basic Info**

- **Source Type**: independent practitioner essay

**Core Claim**

- **Claim Value**: 
    > Essay 1 names and defines four distinct ways a long/accumulated LLM context window degrades agent performance: Context Poisoning (a hallucination or error enters context and is repeatedly re-referenced, illustrated by Google's Gemini 2.5 Pokemon-playing agent fixating on a corrupted 'goals' section), Context Distraction (as context grows past roughly 100k tokens, the model over-relies on accumulated history over its training knowledge, shown by the same Gemini agent favoring repeated actions), Context Confusion (superfluous information degrades response quality, evidenced by the Berkeley Function-Calling Leaderboard where a quantized Llama 3.1 8B succeeded with 19 tool definitions but failed with 46), and Context Clash (conflicting information within the assembled context actively hurts reasoning, citing a Microsoft/Salesforce study where sharding a single prompt into multi-turn delivery caused a 39% average performance drop, with OpenAI's o3 falling from 98.1 to 64.1). Essay 2 proposes six concrete mitigation tactics: RAG, Tool Loadout (keeping tool counts low, citing the same <30-tools finding), Context Quarantine (isolating subtasks into separate agent threads/contexts), Context Pruning (stripping irrelevant content, citing tools like Provence removing up to ~95% of extraneous text), Context Summarization (condensing history, particularly once contexts exceed ~100k tokens), and Context Offloading (storing information outside the context window via tools, e.g. scratchpad/notepad files).
- **Claim Definition**: 
    > A practitioner's original taxonomy and framework: Breunig coins and names the four failure-mode terms and the six-tactic vocabulary himself, synthesizing and interpreting third-party empirical findings (Google's own Gemini/Pokemon case study writeup, the Berkeley Function-Calling Leaderboard, a Microsoft/Salesforce multi-turn prompting study, and tool benchmarks like Provence) rather than running new experiments of his own.

**Evidence Type**

- **Evidence Category**: 
    > practitioner anecdote and synthesis, built on top of cited benchmark/empirical results from other named sources (Google, Berkeley Function-Calling Leaderboard, Microsoft/Salesforce study)

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > No. No vendor product, platform, or commercial context-engineering offering is promoted in either essay; the task brief and search results identify Breunig as an independent writer with a data-science background (Overture Maps Foundation, Reddit) rather than a vendor selling a context/data/caching platform.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Complicates the simple "prompt engineering is dead" framing by giving it technical teeth: Breunig doesn't just declare context engineering important, he specifies the exact mechanisms (poisoning, distraction, confusion, clash) by which stuffing more context into a prompt backfires, which argues against a naive 'just add more context' reading of the context-engineering trend and for disciplined curation instead. It is more a mechanistic complication/refinement of the narrative than a simple endorsement or contradiction.
- **Derivative Of**: 
    > Explicitly builds on and extends third-party empirical findings rather than prior framework papers: Google DeepMind's own public writeup of the Gemini 2.5 Pokemon-playing agent, the Berkeley Function-Calling Leaderboard's multi-tool accuracy results, and a Microsoft/Salesforce study on multi-turn vs single-turn prompt performance. The taxonomy and six-tactic framework themselves appear to be Breunig's own coinage/packaging rather than a relabeling of a prior named framework, which is consistent with the task brief's characterization of this as the 'connective tissue' between context-rot benchmark data and the context-engineering discipline label; LangChain's and others' later frameworks are the derivative works, not the reverse.

**Audience Register**

- **Register**: 
    > practitioner/engineer, written for people building LLM agents day to day; no enterprise-buyer or academic framing (no abstract, no citations list, informal blog format)

**Source Confidence**

- **Confidence**: primary_verified
- **Notes**: 
    > Both essays were fetched and reviewed directly from dbreunig.com. Author's professional background (ex-Overture Maps/Reddit) comes from the task brief and general search context rather than a successfully fetched About/bio page on his own site (that page returned 404), so the specific employment history is not independently confirmed from a primary source in this pass, though it is consistent with how he is described elsewhere (e.g. in commentary by Simon Willison and Armin Ronacher amplifying these posts). No numeric contradiction was found between Breunig's essays and how LangChain, Simon Willison, or Armin Ronacher cite them.

**Overlap With Existing Content**

- **Already Cited**: no
- **New Angle**: 
    > article_ideas.md's existing 09-27 entry on 'Context engineering didn't retire the prompt' cites a different, vendor-sourced statistic (an industry survey claiming 82% of IT/data leaders say prompts alone no longer suffice) and does not reference Breunig, his four-failure-mode taxonomy, or his six-tactic framework by name. This research establishes that the specific vocabulary now used across the industry (context poisoning, distraction, confusion, clash; RAG, tool loadout, quarantine, pruning, summarization, offloading) traces to these two independent, non-commercial essays from June 2025, giving the counterpoint piece a documented, high-confidence origin point to cite against vendors who present the same ideas as their own framework.

**Uncertain fields (excluded above):**

- date_published
- reproducibility
- conflict_notes
- publisher

---

## Just-in-time context loading / agentic retrieval patterns
<a id="just-in-time-context-loading-agentic-retrieval-patterns"></a>

*Category: practitioner technique*

**Basic Info**

- **Publisher**: 
    > Cross-cutting technique synthesized across multiple publishers: Anthropic (Effective context engineering for AI agents, Sept 2025, and the separate Managing context on the Claude Developer Platform / context-editing + memory tool launch post, also Sept 2025), LangChain (Context Engineering for Agents, July 2025; How agents can use filesystems for context engineering, Nov 2025), Drew Breunig (independent, June 2025, under the 'Offloading' and 'RAG' tactics), Philipp Schmid (Google DeepMind, personal blog), plus secondary vendor explainers (TrueFoundry, Sourcegraph, Elastic, dev.to) that repackage the same pattern under the 'JIT context' label.
- **Source Type**: 
    > practitioner framework (synthesized across vendor blogs and one independent practitioner essay; no single primary source owns this technique)

**Core Claim**

- **Claim Value**: 
    > The technique: instead of pre-loading all potentially relevant data into the context window up front, an agent keeps small, cheap references (file paths, stored queries, URLs, document IDs, database handles) in context and uses tools (file read, bash grep/head/tail, a search call, a DB query) to pull the actual content in only at the moment it is needed, then can discard or re-summarize it afterward. Anthropic frames this as mirroring how humans use filing systems and bookmarks rather than memorizing full corpora. Concretely cited implementations: Claude Code uses the pattern to analyze large datasets by writing targeted queries and using Bash (head/tail) instead of loading full files into context. LangChain's filesystem post and Deep Agents SDK operationalize the same idea as agent filesystem tools (ls/glob/grep/read_file), explicitly citing Manus's 'recitation/filesystem' pattern and Cursor's search architecture as prior art. No independently-run A/B benchmark comparing JIT loading against up-front loading, holding task and model constant, was found anywhere in this research pass; the quantitative evidence that exists (Anthropic's 39% improvement / 84% token reduction figures) belongs to a different, related Anthropic feature (context editing + memory tool) rather than to JIT retrieval itself, and even that figure is a single-vendor, single-task (100-turn web search) internal eval, not an independently replicated benchmark.
- **Claim Definition**: 
    > This is a practitioner technique recommendation repeated across several non-academic sources, not a benchmark result or a formal ablation study. No source in this set runs a controlled experiment isolating 'JIT retrieval' as the only variable against a 'load everything up front' baseline on the same task/model; the supporting evidence is instead (a) anecdotal description of how Claude Code or Deep Agents are built, (b) the indirect, mechanistic case made by Lost in the Middle / NoLiMa / Context Rot that stuffing more tokens into context degrades performance (which argues against up-front loading in general but was not designed to test JIT retrieval specifically), and (c) a numeric result (39%/84%) that is real but belongs to a sibling feature (context editing/compaction + memory tool), not to JIT retrieval as such, despite being informally attached to the 'context engineering' narrative that includes JIT retrieval.

**Evidence Type**

- **Evidence Category**: 
    > practitioner anecdote and architectural description, reinforced by adjacent (not directly on-point) benchmark results about long-context degradation; no dedicated benchmark/empirical result isolates JIT retrieval itself

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > Mixed, and this matters for how the technique is being pushed. Anthropic sells Claude/Claude Code and a memory-tool/context-editing product feature that operationalizes a close cousin of JIT retrieval; LangChain sells LangGraph, LangSmith, and the Deep Agents SDK, whose filesystem tools are explicitly pitched as the productized implementation of JIT retrieval; secondary explainers (TrueFoundry, Elastic, Sourcegraph) each sell adjacent infrastructure (ML platform, search/relevance engine, code intelligence) and use the JIT framing to argue for their own retrieval/relevance tooling. Breunig (the independent originator of the underlying 'Offloading' tactic) sells nothing and has no product stake.
- **Conflict Notes**: 
    > The specific 39% improvement / 84% token reduction figures that circulate attached to 'Anthropic's context engineering advice' (and sometimes to JIT retrieval specifically, since both appear in the same September 2025 cluster of Anthropic posts) actually belong to a separate post, 'Managing context on the Claude Developer Platform,' about the context-editing and memory-tool features, not to the 'Effective context engineering for AI agents' essay where JIT retrieval is named and defined, and not to JIT retrieval as an isolated variable. Confirmed again in this pass via web search: context editing alone gave 29% improvement, context editing + memory tool gave 39%, and the 84% token reduction was measured on a 100-turn web-search eval, none of which isolates the just-in-time-retrieval tactic from compaction/memory. Citing these numbers as evidence 'JIT retrieval works' overstates what was actually measured.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Supports the context-engineering narrative as its single most concrete, implementable piece of advice (it is literally the first fully mechanical technique Anthropic names that a developer can go build), but the evidence base behind it is weaker than its prominence suggests: it is presented confidently across every source in this set as self-evidently correct, while the actual empirical support is either anecdotal (Claude Code 'uses this pattern') or borrowed from adjacent-but-distinct findings (long-context degradation studies, a different feature's eval numbers). This is worth flagging for a piece arguing that context engineering's 'main actionable advance' runs ahead of its evidence.
- **Derivative Of**: 
    > Substantively, this is retrieval-augmented generation (RAG) under agentic control, not a new invention. RAG (Lewis et al. 2020 and the broader RAG literature) already established the core move: don't put the whole corpus in the prompt, retrieve the relevant slice at query time. What 'just-in-time context loading' adds, and it is a real but incremental addition, is (a) applying that retrieve-at-the-moment-of-need logic to an agent's own working state (tool outputs, prior turns, file contents), not just an external knowledge corpus, and (b) giving the agent itself the tool-calling agency to decide when and what to retrieve, rather than a fixed retrieval step hard-wired before generation. LangChain's own taxonomy folds JIT retrieval into its 'Select' strategy, one of four, alongside Write/Compress/Isolate, and credits Breunig's 'Offloading' and classic 'RAG' tactics as the direct lineage. So: real technique, genuinely useful, but best described as RAG generalized to agent-internal state and put under the agent's own tool-use control, rather than a substantively new retrieval paradigm.

**Audience Register**

- **Register**: 
    > practitioner/engineer primarily, across every source in this synthesis (Anthropic's engineering blog, LangChain's blog, Breunig's essay, secondary vendor explainers); none of this is pitched at enterprise IT buyers or academic researchers specifically, in contrast to the survey-stat vendor reports elsewhere in this research set.

**Source Confidence**

- **Notes**: 
    > The discrepancy worth carrying into any essay: 'just-in-time context loading' is presented industry-wide as context engineering's signature actionable technique, with real adoption (Claude Code, LangChain's Deep Agents SDK, Manus, Cursor all described as using some version of it), but the case for it rests on architecture description and adjacent degradation benchmarks (Lost in the Middle, NoLiMa, Context Rot) rather than a direct test of JIT vs. up-front loading. The 39%/84% Anthropic figures that often get attached to this story belong to a sibling feature (context editing/memory tool), which several secondary explainers blur together with JIT retrieval. Treat the technique as plausible and widely adopted, but not as benchmark-proven relative to the alternative it claims to beat.

**Overlap With Existing Content**

- **Already Cited**: 
    > no - not referenced by name in article_ideas.md's 09-27 'Context engineering didn't retire the prompt' entry or the AGENTS.md thought.
- **New Angle**: 
    > Gives the planned piece its sharpest 'is this actually new' finding: just-in-time context loading is the one technique every source in this research set converges on as context engineering's real, implementable contribution, yet (1) it is RAG applied to agent-internal state under the agent's own tool-calling control rather than a new retrieval paradigm, (2) the headline quantitative support circulating for it (39%/84%) is misattributed, it belongs to a different Anthropic feature (context editing + memory tool), not to JIT retrieval in isolation, and (3) no source, vendor or academic, has run a direct controlled comparison of JIT retrieval against up-front loading; the supporting evidence is architectural anecdote plus adjacent long-context-degradation benchmarks that were not designed to test this specific claim. This lets the piece credit the technique as sensible and widely adopted while being precise that 'works better than up-front loading' is asserted, not measured.

**Uncertain fields (excluded above):**

- date_published
- reproducibility
- confidence

---

## The Karpathy/Lütke origin tweets (June 2025)
<a id="the-karpathyltke-origin-tweets-june-2025"></a>

*Category: primary source / origin event*

**Basic Info**

- **Publisher**: 
    > Individual posts on X (Twitter) by Tobi Lütke (CEO, Shopify) and Andrej Karpathy (independent AI researcher, formerly OpenAI/Tesla, founder of Eureka Labs)
- **Date Published**: 
    > Tobi Lütke, X post, June 19, 2025, ~03:01 UTC (status/1935533422589399127). Andrej Karpathy, X post, June 25, 2025, ~15:54 UTC (status/1937902205765607626), six days later, explicitly endorsing Lütke's term.
- **Source Type**: primary source (tweet)

**Core Claim**

- **Claim Value**: 
    > Lütke (June 19, 2025): "I really like the term 'context engineering' over prompt engineering. It describes the core skill better: the art of providing all the context for the task to be plausibly solvable by the LLM." Karpathy (June 25, 2025): "+1 for 'context engineering' over 'prompt engineering'. People associate prompts with short task descriptions you'd give an LLM in your day-to-day use. When in every industrial-strength LLM app, context engineering is the delicate art and science of filling the context window with just the right information for the next step," going on to list the inputs in play (task descriptions/explanations, few-shot examples, RAG, related multimodal data, tools, state and history, compaction) and warning that too little or the wrong-shaped context leaves the LLM unable to perform well, while too much raises cost and can itself degrade performance.
- **Claim Definition**: 
    > A historical/coinage fact: this is the specific two-tweet exchange the industry points to as the moment 'context engineering' displaced 'prompt engineering' as the preferred term. Lütke proposed the relabeling first; Karpathy, with a much larger and more technically-credentialed following, publicly seconded it six days later and gave it a fuller technical definition (the context window as the thing being 'filled' with the right information, not just a prompt being written). The exchange itself contains no benchmark or empirical claim, only a definitional/terminological one.

**Evidence Type**

- **Evidence Category**: primary historical artifact

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > No. Shopify (Lütke) sells an e-commerce platform, not a context-engineering, vector-database, or LLM-tooling product; any benefit to Shopify from the term's popularity is indirect (Shopify has shipped AI shopping/agent features, but the tweet itself is not product marketing). Karpathy sells no product related to the term; he was between ventures/at Eureka Labs at the time and has no commercial stake in 'context engineering' as a category.
- **Conflict Notes**: 
    > Several outlets and summaries (seen in this search pass) describe the origin as 'mid-2025' without dates, or round Lütke's post to 'June 18, 2025' rather than June 19. Snowflake-ID decoding of status 1935533422589399127 places it at 2025-06-19 03:01:43 UTC, which is the morning of June 19 in UTC but could read as June 18 evening in US Pacific time, likely explaining the date drift in secondary sources. A second, later Lütke tweet (status 1938270308563099971, June 26, 2025) exists and is sometimes conflated with the original June 19 post in casual citations; it is a follow-up, not the coining tweet.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Supports the 'prompt engineering is dead, context engineering is what matters now' framing, but the primary artifacts themselves are more measured than the framing that grew up around them: Lütke only says he 'likes the term... better,' and Karpathy frames it as context engineering being the real skill 'in every industrial-strength LLM app' while still describing prompts as a real (if narrower) category people use 'day-to-day.' Neither tweet declares prompt engineering dead or obsolete; that stronger claim is a later embellishment added by secondary commentary, not present in the origin artifacts.
- **Derivative Of**: 
    > Not a repackaging of a prior paper or benchmark; it is a terminological proposal. Karpathy's tweet is explicitly derivative of Lütke's in that it is a direct public endorsement/extension of Lütke's specific wording six days earlier, adding Karpathy's own technical elaboration of what filling the context window involves.

**Audience Register**

- **Register**: 
    > practitioner/engineer (both authors are addressing an audience of people building LLM applications day to day, via a casual, informal social-media register rather than an academic or enterprise-buyer one)

**Source Confidence**

- **Confidence**: primary_verified

**Overlap With Existing Content**

- **Already Cited**: no
- **New Angle**: 
    > Pins the coining event to two specific, dated, independently-timestamp-verified tweets rather than the vague 'mid-2025' most outlets use, and flags that the primary artifacts are more hedged ('I really like the term... better,' 'the delicate art and science of filling the context window') than the 'prompt engineering is dead' framing commonly attributed to them, which is useful ammunition for a counterpoint piece like 'Context engineering didn't retire the prompt.' Also flags a secondary Lütke tweet (June 26) that gets conflated with the original in casual citation.

**Uncertain fields (excluded above):**

- claim_value (verbatim tweet wording, not independently re-fetched from x.com directly)
- reproducibility

---

## Lost in the Middle (Liu et al.)
<a id="lost-in-the-middle-liu-et-al"></a>

*Category: academic paper*

**Basic Info**

- **Publisher**: 
    > Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, Percy Liang (Stanford University, with co-authors from Samaya AI)
- **Date Published**: 
    > July 6, 2023 (arXiv v1, arXiv:2307.03172); later published in Transactions of the Association for Computational Linguistics (TACL), 2023/2024
- **Source Type**: academic paper (peer-reviewed, TACL)

**Core Claim**

- **Claim Value**: 
    > Across multi-document question answering and key-value retrieval tasks, model accuracy follows a U-shaped curve as a function of where the relevant information sits in the input: highest when it is at the very start (primacy) or very end (recency) of the context, and substantially lower, sometimes dropping below performance with no relevant document at all in some settings, when the relevant information is placed in the middle. This held across GPT-3.5-Turbo, several open models, and extended-context model variants; performance degraded even when total context length was well within the stated window limit.
- **Claim Definition**: 
    > An academic benchmark finding: controlled position-manipulation experiments (moving the one relevant document to different indices within a fixed-length, multi-document context) measuring QA/retrieval accuracy as a function of position, isolating a positional-bias effect distinct from pure length effects.

**Evidence Type**

- **Evidence Category**: benchmark/empirical result
- **Reproducibility**: 
    > Code and data are public (Stanford NLP group released the evaluation code and data alongside the paper; the arXiv PDF and project materials are openly available at cs.stanford.edu/~nfliu). The finding has been widely replicated and extended by independent follow-up work, not just cited: 'Found in the Middle' (2024) studies and attempts to calibrate the same positional-attention bias, and multiple long-context benchmark papers (including NoLiMa, 2025) explicitly reproduce or build on the lost-in-the-middle phenomenon in new model generations. This is a well-replicated academic result, unlike the single-publisher Chroma report.

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > No. Authors are Stanford University researchers (with two co-authors affiliated with Samaya AI, a search/retrieval startup at the time); Samaya AI's retrieval focus is a mild adjacency, but the paper is an academic publication in a peer-reviewed venue (TACL), not vendor marketing, and the paper's framing is diagnostic rather than promotional.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Supports the technical case for context engineering by establishing, well before the 'context engineering' label existed, that simply having relevant information somewhere in the context window is not sufficient; position matters independently of whether the model 'knows' the fact. This underpins practices like reordering or re-ranking retrieved chunks so key evidence lands near the start or end of the prompt. It does not address prompt wording/instruction quality at all, so it neither supports nor contradicts 'prompt engineering is dead'; it is orthogonal to that claim and is sometimes misapplied as if it settled it.
- **Derivative Of**: 
    > Not derivative; this is treated by later work (Context Rot, NoLiMa, 'Found in the Middle', and general context-engineering commentary) as the foundational empirical result they extend, confirm, or complicate, rather than something it itself repackages. It builds methodologically on earlier needle-in-a-haystack-style long-context probes but is the first widely-cited paper to isolate and name the positional U-curve specifically.

**Audience Register**

- **Register**: 
    > academic researcher primarily, with heavy secondary uptake by practitioner/engineer audiences (it is the most frequently cited academic paper in practitioner context-engineering blog posts) and some enterprise-IT-buyer secondary citation as justification for retrieval re-ranking products.

**Source Confidence**

- **Confidence**: primary_verified

**Overlap With Existing Content**

- **Already Cited**: 
    > No. article_ideas.md's 'Context engineering didn't retire the prompt' entry (2026-09-27) does not name this paper, Liu et al., Stanford, or the lost-in-the-middle finding; it cites an unnamed 2026 industry survey instead. No other article_ideas.md or AGENTS.md entry reviewed in this pass names it either.
- **New Angle**: 
    > Supplies the missing academic backbone under the existing thought: where the logged entry currently argues from an opinion survey (82% of leaders), this paper gives a mechanistic, peer-reviewed, independently-replicated reason why 'put it in context' isn't enough, which is a stronger foundation than a survey stat. It also supplies a built-in complication (via NoLiMa) that keeps the piece honest: the tidy 'middle is bad' story softens once you remove literal keyword overlap, so the piece can avoid overclaiming the geometry while still using the core positional-sensitivity finding.

**Uncertain fields (excluded above):**

- conflict_notes
- notes

---

## NoLiMa benchmark (arXiv:2502.05167)
<a id="nolima-benchmark-arxiv250205167"></a>

*Category: academic benchmark*

**Basic Info**

- **Date Published**: Submitted to arXiv 2025-02-07; revised v3 2025-07-09; accepted at ICML 2025
- **Source Type**: academic paper

**Core Claim**

- **Claim Value**: 
    > Across 13 state-of-the-art LLMs claiming 128K+ context support, tested from 250 to 128K tokens: most score above 90% at short context, but 11 of 13 models fall below 50% of their own short-context baseline by 32K tokens. GPT-4o, the strongest model (99.3% base score), drops to 69.7% at 32K and 56% at 128K. Models' 'effective context length' (context length at which performance stays above 85% of baseline) is far shorter than their advertised context window, in many cases 2K tokens or less.
- **Claim Definition**: 
    > A benchmark result: NoLiMa measures retrieval and reasoning over long context when the question and the 'needle' (the fact the model must find) share no literal keyword overlap and instead require inferring a latent/associative link (e.g. real-world or commonsense knowledge connecting the question's wording to the needle's wording). This is distinct from classic Needle-in-a-Haystack (NIAH), which allows literal/lexical matching between question and needle.

**Evidence Type**

- **Evidence Category**: benchmark/empirical result
- **Reproducibility**: 
    > Public: the paper states dataset and evaluation code are released on GitHub, and the benchmark has been adopted/cited by independent follow-on work (e.g. Chroma's 'Context Rot' report, and later papers such as 'Context Length Alone Hurts LLM Performance Despite Perfect Retrieval'), indicating independent reuse rather than only self-reported results. Accepted at ICML 2025, i.e. peer-reviewed.

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > No. Adobe Research and LMU Munich are not selling a context/retrieval/vector-DB product tied to this benchmark; this is academic research, not a vendor benchmark.
- **Conflict Notes**: 
    > None found for this item specifically. One nuance worth flagging: Chroma's later 'Context Rot' report (which cites NoLiMa approvingly) also notes a limitation in NoLiMa's own design: it found 72.4% of NoLiMa's needle-question pairs require external/commonsense knowledge to bridge, meaning NoLiMa tests a blend of non-lexical matching AND general knowledge recall at once, not purely non-lexical matching in isolation. This is a critique of NoLiMa from a source that otherwise relies on it, not a contradiction of NoLiMa's headline degradation numbers.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Supports the 'context engineering matters, not just prompt engineering' framing, but from the angle of exposing a measurement gap rather than prescribing a technique. NoLiMa shows that strong NIAH scores (which can be gamed via literal keyword matching) do not mean a model can actually use long context when retrieval requires semantic/associative reasoning. This strengthens the broader context-engineering argument that just stuffing more tokens into a prompt, or trusting a vendor's advertised context window, is not sufficient; how information is presented and whether it can be found without lexical shortcuts matters a great deal.
- **Derivative Of**: 
    > Explicitly extends Needle-in-a-Haystack (NIAH), the earlier long-context evaluation method that tests retrieval of a fact planted in a long document. NoLiMa's stated motivation is that NIAH's literal keyword overlap between question and needle lets models rely on surface pattern matching, inflating apparent long-context competence; NoLiMa removes that lexical shortcut. NoLiMa is itself later cited and built upon by Chroma's 'Context Rot' report (2025) and by later papers probing long-context degradation (e.g. arXiv:2510.05381).

**Audience Register**

- **Register**: 
    > academic researcher, though its findings are widely cited downstream for a practitioner/engineer audience (it's one of the most-cited sources used to argue that advertised context-window sizes overstate real usable context).

**Source Confidence**

- **Confidence**: primary_verified
- **Notes**: 
    > Verified directly against the arXiv abstract/page content (v3) and cross-checked against Chroma's Context Rot report, which both cites NoLiMa's results and offers a methodological critique of it (the 72.4% external-knowledge-dependency point). No numeric discrepancies found between the paper's own abstract/summary and how it's described in secondary sources (DigiAlps summary, Chroma report) for the core stats (99.3% to 69.7% to 56% for GPT-4o; 11/13 models below 50% of baseline at 32K).

**Overlap With Existing Content**

- **Already Cited**: no
- **New Angle**: 
    > Adds the specific quantitative degradation curve (GPT-4o: 99.3% to 69.7% at 32K to 56% at 128K; 11/13 models below 50% of baseline at 32K) and the 'effective context length' concept (often far below advertised context window, sometimes 2K tokens or less), plus the explicit derivative relationship to NIAH and the fact that Chroma's Context Rot report both relies on and critiques NoLiMa's design (the 72.4% external-knowledge overlap point). None of this specific detail is in article_ideas.md's existing 09-27 entry.

**Uncertain fields (excluded above):**

- publisher

---

## Philipp Schmid (Google DeepMind) context engineering piece
<a id="philipp-schmid-google-deepmind-context-engineering-piece"></a>

*Category: vendor blog*

**Basic Info**

- **Publisher**: 
    > Philipp Schmid, Staff Engineer / AI developer-relations lead at Google DeepMind, publishing on his personal blog (philschmid.de), not an official Google DeepMind channel
- **Date Published**: 
    > 2025-06-30 (original piece, 'The New Skill in AI is Not Prompting, It's Context Engineering'); a follow-up, 'Context Engineering for AI Agents: Part 2', was published 2025-12-04
- **Source Type**: 
    > independent practitioner essay (personal blog by a Google DeepMind staff engineer; not a corporate/official Google publication, but he writes from that vantage point)

**Core Claim**

- **Claim Value**: 
    > Defines context engineering as 'the discipline of designing and building dynamic systems that provides the right information and tools, in the right format, at the right time, to give a LLM everything it needs to accomplish a task.' States that prompt engineering is about crafting a single perfect instruction string, while context engineering is 'a far broader' systems discipline that subsumes it, alongside RAG (external/up-to-date knowledge), short- and long-term memory, and tool/function definitions. Central qualitative claim: 'Most agent failures are not model failures anymore, they are context failures.' No quantitative benchmark figures are given.
- **Claim Definition**: 
    > A practitioner's taxonomy/opinion piece, not a measured result. It asserts a definition and a causal attribution (agent failures = context failures, not model failures) based on Schmid's own observation of agent-building practice, not a controlled study.

**Evidence Type**

- **Evidence Category**: 
    > practitioner anecdote / survey opinion (first-person synthesis of practitioner experience and other practitioners' public commentary, not an empirical study)
- **Reproducibility**: 
    > Not applicable - no benchmark or code-dependent empirical claim is made. The piece is conceptual/advisory.

**Commercial Interest**

- **Conflict Notes**: 
    > No numeric figure exists in this source to create a factual discrepancy with secondary citations. One nuance worth flagging for the article: this piece (June 30, 2025) predates Anthropic's widely-cited 'Effective context engineering for AI agents' post (September 2025) by about three months, and it already cites LangChain's earlier blog post on context engineering plus tweets from Andrej Karpathy and Tobi Lutke as its own inspirations - meaning the term's circulation through LangChain/Karpathy predates both the Schmid and Anthropic posts, so neither major lab coined it independently.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Complicates the 'prompt engineering is dead, context engineering is what matters now' framing in a specific way: Schmid explicitly frames context engineering as broader than and inclusive of prompt engineering (prompt engineering is a subset/component, the single-string-instruction part), not a successor that makes prompting obsolete. This is a more moderate position than framings that declare prompt engineering dead.
- **Derivative Of**: 
    > Explicitly cites and builds on a prior LangChain blog post on context engineering, and credits tweets by Andrej Karpathy and Tobi Lutke (Shopify) as direct inspiration for using the term. The December 2025 follow-up ('Part 2') explicitly credits Peak Ji (Manus AI) and Lance Martin (LangChain) plus 'latest industry research' on context rot and multi-agent coordination as what it extends.

**Audience Register**

- **Register**: 
    > practitioner/engineer, with secondary relevance to enterprise AI teams building agents; written in an accessible, implementation-focused style rather than academic register.

**Source Confidence**

- **Notes**: 
    > Confirmed via independent search that Schmid is a Staff Engineer on Google DeepMind's AI developer-experience/developer-relations team (joined 2025), which supports the 'major AI lab voice' framing in the task description even though the post itself runs on his personal domain, not a deepmind.google or research.google URL. The December 2025 'Part 2' piece was found but not deeply fetched in this pass; it postdates Anthropic's post, so only the June 2025 original is relevant to the 'predates Anthropic' angle.

**Overlap With Existing Content**

- **New Angle**: 
    > Establishes that the 'context engineering' framing was already circulating among practitioners (LangChain, Karpathy, Tobi Lutke) and picked up by a second major lab voice (Google DeepMind's Schmid) a full three months before Anthropic's September 2025 post, which is the piece's main use for the 'did labs converge independently or echo each other' question: the timeline points to convergence-via-circulation (LangChain and Twitter/X practitioner chatter first, then Schmid, then Anthropic) rather than two labs independently arriving at the same term. It also offers a slightly softer stance than 'prompt engineering is dead': prompting is a subset of context engineering here, not its replacement.

**Uncertain fields (excluded above):**

- publisher_sells_relevant_product
- confidence
- already_cited

---

## Positional Failures in Long-Context LLMs (arXiv:2605.23170)
<a id="positional-failures-in-long-context-llms-arxiv260523170"></a>

*Category: academic paper*

**Basic Info**

- **Date Published**: Submitted 22 May 2026 (v1, 02:42:41 UTC). arXiv:2605.23170, cs.CL.
- **Source Type**: academic paper

**Core Claim**

- **Claim Value**: 
    > Full title: 'Positional Failures in Long-Context LLMs: A Blind Spot in Reasoning Benchmarks.' The authors audit 11 long-context benchmarks and find none jointly controls task position, filler content, and context length for reasoning tasks (as opposed to pure retrieval tasks like Needle-in-a-Haystack/RULER, where position control is standard). An audit of four flagship long-context model releases finds no main result-table entry for NIAH, RULER, or LongBench-family benchmarks, while agentic/coding benchmarks appear in all four. They propose a new framework, Context Rot Evaluation (CRE), varying task position, filler content, and context length, and evaluate 9 LLMs on GSM8K and ARC-Challenge across two rounds (an initial 5-model set, then 4 newer vendor releases). Results: models can drop sharply in accuracy when the target task moves from the end to the middle of context, and this drop worsens with context length for vulnerable models. MiMo-v2-Flash drops 88 percentage points at 64K context under 'with_solutions' filler (middle-position accuracy falls to 8%). Newer model releases show smaller drops (3 of 4 stay within +/-6pp of end-position accuracy at 64K; MiMo-V2.5-Pro narrows the 88pp drop to 32pp), but under a different filler type ('questions_only_v2') middle-position drops persist across all four newer models (range -16pp to -56pp across 8K/32K/64K). A diagnostic probe (adding a copy of the target task at the end of an 8K context) brings middle-position accuracy within +/-4pp of the end-position baseline across all nine models, supporting a positional explanation. In the initial five-model set, 76% of middle-position errors matched surrounding filler text, versus 22% at end positions, consistent with filler-answer interference as the dominant failure mechanism (rather than pure attention/positional decay).
- **Claim Definition**: 
    > A benchmark/empirical result from an academic paper: it introduces a new controlled evaluation methodology (CRE) and reports accuracy deltas (in percentage points) across 9 LLMs, 2 reasoning benchmarks (GSM8K, ARC-Challenge), 3 context lengths (8K/32K/64K), and multiple filler-content conditions, plus a benchmark-literature audit of 11 existing long-context benchmarks and 4 vendor model-card result tables.

**Evidence Type**

- **Evidence Category**: benchmark/empirical result

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > No. The authors appear to be independent academic researchers; no vendor product, platform, or commercial context-engineering tool is promoted or sold by this source.
- **Conflict Notes**: 
    > No specific numeric discrepancy was found between this paper's findings and how it might be cited elsewhere, since it does not yet appear to be widely cited. One internal nuance worth flagging if cited elsewhere: the severity of the middle-position drop is highly filler-dependent and model-dependent (88pp for one older model under one filler type, but only 6pp or less for most newer models under the same filler type, while a different filler type still produces large drops on the same newer models) -- a secondary source could easily overstate or understate the effect by citing only the 88pp figure without the filler-type and model-version caveats.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Complicates the simple 'context engineering is what matters now' framing by showing that most reasoning benchmarks (as opposed to retrieval benchmarks) do not even measure positional sensitivity, meaning vendor claims of long-context robustness based on standard reasoning benchmarks may be systematically blind to a real failure mode. It supports the broader context-engineering thesis that *how* information is placed/structured in context materially affects output quality, independent of model choice or prompt wording, but it also shows the field's own evaluation tooling has a structural gap, which is itself a context-engineering-adjacent critique of benchmark practice rather than a simple confirmation of vendor narratives.
- **Derivative Of**: 
    > Explicitly extends 'Lost in the Middle' (Liu et al., 2023), which first showed LLMs struggle to access information placed in the middle of long contexts, and NoLiMa (Modarressi et al., 2025), cited as showing position bias affects reasoning benchmarks specifically. This paper's contribution is the CRE framework plus a systematic audit showing reasoning benchmarks (unlike retrieval benchmarks) generally fail to control for position, and a mechanistic finding (filler-answer interference) for why middle-position errors occur, which is a more specific causal mechanism than the attention-decay explanation often assumed from 'Lost in the Middle.'

**Audience Register**

- **Register**: 
    > Academic researcher audience primarily (an arXiv cs.CL paper introducing a new evaluation framework), with secondary relevance to enterprise IT buyers evaluating vendor long-context claims and practitioners designing benchmarks or context layouts for reasoning-heavy agents.

**Source Confidence**

- **Confidence**: primary_verified

**Overlap With Existing Content**

- **Already Cited**: no
- **New Angle**: 
    > Adds a distinct mechanism and a methodological critique not previously logged: that mainstream reasoning benchmarks (unlike retrieval benchmarks) lack positional controls entirely, that vendors therefore cannot and do not report positional robustness for reasoning tasks, and that the dominant error mechanism at middle positions is filler-answer interference (wrong answers lifted from surrounding filler text) rather than pure attention decay. Provides a quantified, model-version comparison showing the failure mode is improving across newer releases for some filler types but persists for others, which nuances any blanket claim that 'lost in the middle' is a solved problem.

**Uncertain fields (excluded above):**

- publisher
- reproducibility
- notes

---

## State of Context Management Report 2026 (DataHub)
<a id="state-of-context-management-report-2026-datahub"></a>

*Category: vendor-commissioned survey*

**Basic Info**

- **Publisher**: 
    > DataHub (commercial vendor), survey fielded by TrendCandy (independent research firm) via online B2B panels
- **Source Type**: vendor-commissioned survey

**Core Claim**

- **Claim Value**: 
    > n=250 IT and data leaders. Primary materials (report landing page and GlobeNewswire press release) state: 83% believe agentic AI cannot reach production value without a dedicated context platform; 88% report fully operational context platforms; 90% describe their data as AI-ready; 92% expect on-time delivery of AI initiatives; 66% frequently get biased or misleading AI insights; 87% cite data readiness as a significant impediment to AI production; 61% frequently delay AI initiatives due to lack of trusted data; 89% investing in context management infrastructure in the next 12 months; 91% building or buying context platform tools; 95% agree context engineering is important to power AI agents at scale; 91% see context management as an executive/C-level priority; 77% agree RAG alone is insufficient for production AI. The '82% say prompt engineering alone is no longer sufficient' figure (matching article_ideas.md's 09-27 entry) does NOT appear on the report landing page or the press release; it appears only in DataHub's own later blog posts (e.g. context-engineering-vs-prompt-engineering, dated 2026-04-20, and context-aware-ai-agents), each attributing it to 'the State of Context Management Report 2026.'
- **Claim Definition**: 
    > A vendor-commissioned opinion survey of enterprise IT/data leaders, not a benchmark or empirical model-performance test. It measures self-reported attitudes and confidence levels about AI/agentic initiatives and context infrastructure, not measured model behaviour.

**Evidence Type**

- **Evidence Category**: survey opinion

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > Yes. DataHub sells a 'Context Platform for AI Agents' product (datahub.com/products/context-platform/), a context/data-catalog platform that is the exact category of product this report's headline findings argue enterprises need. The survey's central conclusions (agentic AI needs a dedicated context platform, prompt engineering alone is insufficient) directly promote the case for DataHub's own product.
- **Conflict Notes**: 
    > Resolved: the 82% figure is NOT a rounding or misattribution of the 83% 'agentic AI needs a context platform' stat; it is a separate, specifically-worded claim ('prompt engineering alone is no longer sufficient') that does not appear anywhere in the report's own primary surfaces (the report landing page or the GlobeNewswire press release), both of which enumerate the report's statistics exhaustively and list 83%, not 82%, for the context-platform claim and never mention prompt engineering at all. The 82% figure instead appears only in DataHub's own secondary/marketing blog posts published weeks after the report (context-engineering-vs-prompt-engineering, dated 2026-04-20; context-aware-ai-agents), each citing 'the State of Context Management Report 2026' as its source. A site-restricted search additionally found DataHub using '82%' inconsistently across its own blog content, attached to at least three distinct claims in different posts: (1) 'prompt engineering alone is no longer sufficient,' (2) 'agentic AI cannot reach production value without a context platform' (elsewhere given as 83% in the primary materials), and (3) '82% would somewhat or completely trust AI agents with high-stakes tasks even without reliable context, lineage, observability, and governance.' This pattern, the same rounded figure reused loosely across different claims in vendor blog content without the number appearing in the report's own primary release materials, is consistent with marketing paraphrase/rounding drift rather than a single precise reported statistic, and closely parallels the previously-flagged JetBrains 34% case: unverifiable against the primary source as cited, even though the vendor itself is the one doing the citing. The full gated PDF could not be accessed to make a final determination with certainty.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Supports the 'context engineering matters, not just prompt engineering' framing on its face, but as vendor-commissioned opinion research designed to sell a context-platform product, not as independent evidence. Should be weighted accordingly: it reflects self-reported buyer sentiment, not a measured or independently audited finding about model or team performance.
- **Derivative Of**: 
    > Not derivative of a prior academic work; it is an original vendor-commissioned opinion survey (TrendCandy panel data for DataHub). It sits in the same genre as other 2026 vendor surveys on context engineering (e.g. Redis's 'State of Context Engineering 2026') but no direct lineage or shared methodology was found between them.

**Audience Register**

- **Register**: enterprise IT buyer

**Source Confidence**

- **Confidence**: conflicting_figures_found
- **Notes**: 
    > The specific '82%' figure already logged in article_ideas.md (09-27 entry) could not be verified against this report's own primary release materials (landing page, press release), which list 83% for the closest related claim and omit any prompt-engineering-specific statistic entirely. The 82% figure traces only to DataHub's own later blog restatements of the report, and those restatements are internally inconsistent about which claim 82% actually attaches to. Recommend treating the 82% figure as unverified/likely-imprecise vendor paraphrase rather than a citable report statistic; if citing this report, cite the 83% context-platform figure instead, which is confirmed on both primary surfaces checked.

**Overlap With Existing Content**

- **Already Cited**: yes
- **New Angle**: 
    > Resolves the open question from the prior research pass: the 82% figure is not a misattributed/rounded version of this report's 83% headline stat, and not from a different uncited report either, as far as could be determined. It most likely originates from DataHub's own later marketing blog content loosely restating (and internally re-using inconsistently across separate claims) a report whose own primary materials never state 82% for any claim, let alone a prompt-engineering-specific one. This is a vendor self-citation drift problem, distinct from, but structurally similar to, the previously-flagged JetBrains 34% unverifiable-figure case.

**Uncertain fields (excluded above):**

- date_published
- reproducibility

---

## A Survey of Context Engineering for Large Language Models (arXiv:2507.13334)
<a id="a-survey-of-context-engineering-for-large-language-models-arxiv250713334"></a>

*Category: academic survey*

**Basic Info**

- **Publisher**: 
    > Academic research group, primarily affiliated with the Institute of Computing Technology (ICT), Chinese Academy of Sciences (lead and corresponding authors' email domain is ict.ac.cn); 15 listed authors: Lingrui Mei, Jiayu Yao, Yuyao Ge, Yiwei Wang, Baolong Bi, Yujun Cai, Jiazhi Liu, Mingyu Li, Zhong-Zhi Li, Duzhen Zhang, Chenlin Zhou, Jiayi Mao, Tianze Xia, Jiafeng Guo, Shenghua Liu. Posted to arXiv (preprint, not yet confirmed peer-reviewed/published venue).
- **Date Published**: 
    > v1 submitted July 17, 2025; v2 revised July 21, 2025 (arXiv:2507.13334). Described by the authors as 'ongoing work,' so later versions may exist beyond v2 at time of writing.
- **Source Type**: academic paper (survey)

**Core Claim**

- **Claim Value**: 
    > Formalizes 'Context Engineering' as, in the authors' words, 'a formal discipline that transcends simple prompt design to encompass the systematic optimization of information payloads for LLMs.' Builds a taxonomy with two main axes: foundational components (context retrieval and generation, context processing, context management) and system implementations (RAG, memory systems, tool-integrated reasoning, multi-agent systems). The paper is 166 pages and its reference list runs to roughly 1,400 cited papers, reviewed and synthesized into the taxonomy. A headline finding is a stated capability imbalance: current models show strong context comprehension but comparatively weaker ability to generate long, sophisticated, context-grounded output, which the authors flag as a priority gap for future work.
- **Claim Definition**: 
    > This is a taxonomy/survey-opinion claim, not a benchmark result: the authors are proposing a classification scheme for the field and synthesizing existing literature under it, not reporting a new experiment. The '1,400 citations' figure in the task description refers to the number of papers this survey cites and analyzes (its own reference list), not the number of times other papers have since cited this survey; conflating the two is a likely source of confusion in casual citation.

**Evidence Type**

- **Evidence Category**: survey opinion

**Commercial Interest**

- **Conflict Notes**: 
    > The task description states '14 authors'; the actual byline lists 15 authors (Lingrui Mei through Shenghua Liu). This is a minor but checkable discrepancy worth correcting if cited. Separately, the widely-repeated 'roughly 1,400 citations' figure should be stated precisely as the survey's own reference count (papers it cites), not citations received by the survey; several secondary mentions blur this distinction, which risks overstating the survey's influence/reception if taken as citation count in the normal (cited-by) sense.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Complicates the 'prompt engineering is dead, context engineering is what matters now' framing rather than simply supporting it: the survey treats context engineering as a genuine, broader engineering discipline (retrieval, generation, processing, management) rather than a rebrand of prompting, which supports the stronger framing in spirit, but its own headline finding (strong comprehension, weak long-form generation) is a limitations finding about current LLMs, not a triumphant claim that context engineering has solved output quality. It is useful as an academic counterweight to vendor-blog claims precisely because it treats the term as real taxonomy work rather than marketing language, while still surfacing where the field falls short.
- **Derivative Of**: 
    > Explicitly builds on and systematizes prior work in retrieval-augmented generation (RAG), memory-augmented LLM systems, tool-use/tool-integrated reasoning, and multi-agent LLM systems; it is a synthesis/taxonomy of roughly 1,400 prior papers across these lines rather than a single extension of one prior benchmark or framework. It post-dates (by about three to four weeks) the Lütke/Karpathy X exchange of June 2025 that popularized the term 'context engineering,' and the survey can reasonably be read as the academic field's attempt to formalize a term that originated informally on social media.

**Audience Register**

- **Register**: 
    > academic researcher (written as a formal literature survey with a taxonomy, aimed at researchers and, secondarily, engineers building production LLM systems who want a structured map of the field)

**Source Confidence**

- **Confidence**: primary_verified
- **Notes**: 
    > Verified directly against the arXiv abstract page and PDF rather than relying on secondary paraphrase: confirmed submission/revision dates (July 17 and July 21, 2025), full 15-person author list, 166-page length, and the taxonomy's four-part structure (retrieval, generation, processing, management) plus the two system-implementation categories (RAG, multi-agent systems) mentioned in the task description. The author-count discrepancy (14 claimed vs. 15 actual) and the 'citations' ambiguity (reference-list size vs. cited-by count) are both flagged above as corrections to carry into any citing essay.

**Overlap With Existing Content**

- **Already Cited**: no
- **New Angle**: 
    > Corrects the author count (15, not 14) and clarifies that the 'roughly 1,400 citations' figure is the survey's own reference list, not a citation count the survey has received, which is a distinction worth making explicit given this research set's general caution about vague or inflated secondary-source statistics. Also surfaces the paper's own headline limitation finding (models comprehend context well but generate long sophisticated output comparatively poorly), which is a useful, specific counterweight to assert against breezier vendor claims that context engineering has already solved output quality.

**Uncertain fields (excluded above):**

- publisher_sells_relevant_product
- reproducibility

---

## The state of context engineering 2026 (Redis)
<a id="the-state-of-context-engineering-2026-redis"></a>

*Category: vendor-commissioned survey*

**Basic Info**

- **Publisher**: Redis
- **Source Type**: vendor-commissioned survey

**Core Claim**

- **Claim Value**: 
    > 97% of surveyed IT/AI infrastructure leaders say context engineering is important to AI success, but only 4% have actually built the systems for it. Related figures: 73% agree agents fail more often from broken context than from broken models; 83% believe fresh context matters more than larger models; 81% operate at an 'ad hoc or exploratory' maturity stage; 80% of AI projects reportedly stall on data, governance, or infrastructure gaps.
- **Claim Definition**: 
    > A self-reported opinion survey of IT and AI infrastructure leaders on context-engineering maturity, belief vs. implementation gaps, and barriers to production AI agents, commissioned and published by Redis as a lead-generation/thought-leadership report.

**Evidence Type**

- **Evidence Category**: survey opinion / marketing assertion
- **Reproducibility**: 
    > Not applicable in the benchmark sense. No code or eval harness involved; this is a leader-opinion survey. Critically, the published report page and PDF do not disclose sample size, respondent count, job titles, company sizes, industries, or survey timeframe, so even the survey's own rigor cannot be independently checked.

**Commercial Interest**

- **Publisher Sells Relevant Product**: 
    > Yes. Redis sells caching and vector/agent-memory infrastructure directly implicated by the report's conclusions: Redis Iris ('real-time context for agents'), Redis LangCache (token-cost caching), Redis Agent Memory, Redis Context Retriever, and Redis Data Integration (CDC for 'fresh' data). The report's named barriers (latency, staleness, fragmented vector stores, lack of a unified memory layer) map near 1:1 onto Redis's product lineup, and the report explicitly recommends investing in 'context engine' infrastructure now.
- **Conflict Notes**: 
    > The 82% figure logged in article_ideas.md (09-27 entry: '82% of IT and data leaders agreeing prompts alone no longer suffice') does NOT appear anywhere in Redis's 'State of Context Engineering 2026' report. A direct fetch of the Redis report page found no instance of '82%'; the closest adjacent figures are 83% (fresh context beats bigger models) and 81% (early maturity stage / context called 'very important'). Web search results instead attribute the exact 82% wording to a separately-named '2026 State of Context Management Report', which is the DataHub-style report already flagged elsewhere in this research set, not Redis's. Secondary coverage (e.g. aggregator blog posts) sits the Redis 97%/4% stat and the 82% DataHub-style stat in the same paragraph without distinguishing publishers, which is likely how the two numbers got conflated in circulation. Conclusion: the 82% stat does not originate with Redis; it is being cross-attributed from a different vendor survey.

**Prompt Engineering Relationship**

- **Relationship**: 
    > Supports the 'prompt engineering is dead, context engineering is what matters now' framing, and explicitly invokes external validation: the report cites Gartner's July 2025 line that 'context engineering is in, and prompt engineering is out.' Redis's own framing goes further than a simple prompt-to-context handoff, arguing models themselves are 'no longer the constraint' and that infrastructure (context graphs, event-driven sync, governance tooling) is the real bottleneck, a framing that happens to justify Redis's product category.
- **Derivative Of**: 
    > Builds rhetorically on Gartner's 2025 'context engineering is in' advisory and the broader 2026 context-engineering discourse (including Anthropic's MCP donation to the Linux Foundation, cited in the report as a sign of 'hardening standards'). It is not a replication or extension of DataHub's report; the two appear to be independent vendor surveys that reach structurally similar belief-vs-execution conclusions, which is itself notable (two self-interested vendors converging on a 'buy infrastructure now' message) but means the 82% should not be read as corroborated across both.

**Audience Register**

- **Register**: 
    > enterprise IT buyer (the report explicitly surveys 'IT and AI infrastructure leaders' and is pitched at production AI/agent decision-makers, not individual practitioners or academics)

**Source Confidence**

- **Confidence**: conflicting_figures_found
- **Notes**: 
    > Redis's own report is internally rich with granular stats (dozens of percentages broken out by maturity stage) but discloses no methodology (no N, no respondent roles, no dates of fielding), which should discount confidence in all of its figures, including the ones that are real. Separately, the specific 82% figure widely cited alongside this report in secondary sources belongs to a different publisher's survey, not Redis's; any citation that attributes the 82% figure to Redis's 'State of Context Engineering 2026' report is incorrect.

**Overlap With Existing Content**

- **Already Cited**: no
- **New Angle**: 
    > Corrects the attribution: the 82% stat in article_ideas.md's 09-27 entry traces to a report other than this one (most likely the DataHub-style 'State of Context Management' report already flagged for its own 82%/83% internal discrepancy), not to Redis. It also adds a second, independently-commissioned vendor survey with its own headline gap-stat (97% belief vs. 4% built) and its own undisclosed methodology, useful as a second data point for the essay's broader point that these survey stats are vendor-manufactured and should not be treated as corroborating evidence just because multiple vendors cite similar-sounding numbers.

**Uncertain fields (excluded above):**

- date_published

---
