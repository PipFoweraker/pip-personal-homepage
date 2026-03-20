---
title: "The Control Problem: Unsolved or Unsolvable?"
url: "https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable"
source: "feedly"
sourceTitle: "LessWrong"
author: "Remmelt"
published: 2023-06-02
saved: 2023-07-03
category: "rationality"
tags:
  - "Artificial Intelligence"
  - "Automation"
  - "Deep Learning"
  - "Machine Learning"
status: "unreviewed"
layout: "reading.njk"
contentType: "summary"
---

Published on June 2, 2023 3:42 PM GMT  
  

**td;lr**   
No control method exists to safely contain the global feedback effects of self-sufficient learning machinery. What if this control problem turns out to be an unsolvable problem?

##   
**Where are we two decades into resolving to solve a seemingly impossible problem?**

If something seems impossible… well, if you study it for a year or five, it may come to seem less impossible than in the moment of your snap initial judgment.

   — Eliezer Yudkowsky, [2008](https://www.lesswrong.com/posts/nCvvhFBaayaXyuBiD/shut-up-and-do-the-impossible)

A list of lethalities…we are not on course to solve in practice in time on the first critical try; none of it is meant to make a much stronger claim about things that are impossible in principle

   — Eliezer Yudkowsky, [2022](https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities)

  
How do you interpret these two quotes, by a [founding researcher](https://twitter.com/ESYudkowsky/status/1624551127873392641?lang=en), fourteen years apart?[\[1\]](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnb6epl2a6m5i)

-   **A.** We indeed made comprehensive progress on the AGI control problem, and now at least the overall problem does not _seem_ impossible anymore.
-   **B.** The more we studied the overall problem, the more we uncovered complex sub-problems we'd need to solve as well, but so far can at best find partial solutions to.

## **Which problems involving physical/information systems were not solved after two decades?**

Oh ye seekers after perpetual motion, how many vain chimeras have you pursued?  Go and take your place with the alchemists.

  — Leonardo da Vinci, 1494

No mathematical proof or even rigorous argumentation has been published demonstrating that the A\[G\]I control problem may be solvable, even in principle, much less in practice.

  — Roman Yampolskiy, [2021](https://journals.riverpublishers.com/index.php/JCSANDM/article/view/16219/13165)

  
We cannot rely on the notion that if we try long enough, maybe AGI safety turns out possible after all.

Historically, many researchers and engineers tried to solve problems that turned out impossible:

-   perpetual motion machines that [both conserve and disperse energy](http://www.scholarpedia.org/article/Entropy#:~:text=Entropy%20is%20central%20to%20the%20second%20law%20of%20thermodynamics%2C%20which%20states%20that%20in%20an%20isolated%20system%20any%20activity%20increases%20the%20entropy).
-   uniting general relativity and quantum mechanics into some [local variable theory](http://www.scholarpedia.org/article/Bell%27s_theorem#:~:text=%22Non%2Dlocal%22%20here%20means%20that%20there%20exist%20interactions%20between%20events%20that%20are%20too%20far%20apart%20in%20space%20and%20too%20close%20together%20in%20time%20for%20the%20events%20to%20be%20connected%20even%20by%20signals%20moving%20at%20the%20speed%20of%20light.).
-   [singular methods](https://en.wikipedia.org/wiki/Galois_theory#Application_to_classical_problems) for 'squaring the circle', 'doubling the cube' or 'trisecting the angle'.
-   [distributed data stores](https://en.wikipedia.org/wiki/CAP_theorem) where messages of data are consistent in their content, and also continuously available in a network that is also tolerant to partitions.
-   [formal axiomatic systems](https://mflb.com/math_notes_1/chaitin_on_godel_turing_psr.html#p1) that are consistent, complete and decidable.

  
Smart creative researchers of their generation came up with idealized problems. Problems that, if solved, would transform science, if not humanity. They plowed away at the problem for decades, if not millennia. Until some bright outsider proved by contradiction of the parts that the problem is unsolvable.

Our community is smart and creative – but we cannot just rely on [our resolve to align AI](https://www.lesswrong.com/posts/BseaxjsiDPKvGtDrm/we-choose-to-align-ai). We should never forsake our epistemic rationality, no matter how much something seems the instrumentally rational thing to do.

Nor can we take comfort in that a founder of this field continues to claim they know it to be possible to control AGI to stay safe. 

Thirty years into running a program to secure the foundations of mathematics, David Hilbert declared “We must know. We will know!” By then, Kurt Gödel had constructed the first incompleteness theorem. Hilbert kept his declaration for his [gravestone](https://cdn.comsol.com/wordpress/sites/1/2020/07/tombstone-david-hilbert-inscription.jpg).

Short of securing the foundations of safe AGI control – that is, through empirically-sound formal reasoning – we cannot rely on _any_ researcher's pithy claim that "alignment is possible in principle".

Going by historical cases, this problem could turn out solvable. Just really, really hard to solve. The flying machine seemed an impossible feat of engineering. Next, [controlling a rocket’s trajectory](https://intelligence.org/2018/10/03/rocket-alignment/) to the moon seemed impossible.

By the same reference class, ‘long-term safe AGI’ could turn out unsolvable – the perpetual motion machine of our time. It takes just one researcher to define the problem to be solved, reason from empirically sound premises, and arrive finally at a logical contradiction between the two.[\[2\]](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fn70htcpuvhxr)

## **Can you derive whether a solution exists, without testing in real life?**

Invert, always invert.                                                                                                                      

   — Carl Jacobi, ±1840

It is a standard practice in computer science to first show that a problem doesn’t belong to a class of unsolvable problems before investing resources into trying to solve it or deciding what approaches to try.

   — Roman Yampolskiy, [2021](https://journals.riverpublishers.com/index.php/JCSANDM/article/view/16219/13165)

  
There is an empirically direct way to know whether AGI would stay safe to humans:   
Build the AGI. Then just keep observing, per generation, whether the people around us are dying.

Unfortunately, we do not have the luxury of experimenting with dangerous autonomous AI systems to see whether they cause human extinction or not. When it comes to extinction, we do not get another chance to test.

  
Crux**:**  
Even _if_ we could keep testing [new conceptualized versions](https://ai-alignment.com/my-research-methodology-b94f2751cb2c) of guess-maybe-safe AGI, is there any essential difference between our epistemic method and that of medieval researchers who kept testing new versions of a perpetual motion machine?

OpenPhil bet tens of millions of dollars on technical research conditional on the positive hypothesis ("a solution exists to the control problem"). Before sinking hundreds of millions more into that bet, would it be prudent to hedge with a few million for investigating the negative hypothesis ("no solution exists")?

Before anyone tries building "safe AGI", we need to know whether _any_ version of AGI – as precisely defined – could be controlled by _any_ method to stay safe.  
   
Here is how:

1.  Define the concepts of 'control' 'general AI' 'to stay safe' (as soundly corresponding to observations in practice).
2.  Specify the logical rules that must hold for such a physical system (categorically, by definition or empirically tested laws).
3.  Reason step-by-step to derive whether the logical result of "control AGI" is in contradiction with "to stay safe".

  
This post defines the three concepts more precisely, and explains some ways you can reason about each. No formal reasoning is included – to keep it brief, and to leave the esoteric analytic language aside for now.

## **What does it mean to control machinery that learn and operate self-sufficiently?**

I think the main noticing is the degree of magical qualities ascribed to error correction, across levels of abstraction especially.

   **—** Forrest Landry, 2022

  
Recall three concepts we want to define more precisely:

1.  'Control'
2.  'general AI'
3.  'to stay safe'  
     

It is common for researchers to have very different conceptions of each term.   
For instance:

1.  **Is 'control' about:**
    1.  adjusting the utility function represented inside the machine so it allows itself to be turned off?
    2.  correcting machine-propagated side-effects across the outside world?
2.  **Is 'AGI' about:**
    1.  any machine capable of making accurate predictions about a variety of complicated systems in the outside world.
    2.  any machinery that operates self-sufficiently as an assembly of artificial components that process inputs into outputs, and in aggregate sense and act across many domains/contexts?
3.  **Is 'stays safe' about:**
    1.  aligning the AGI’s preferences to not kill us all?
    2.  guaranteeing an upper-bound on the chance that AGI in the long term would cause outcomes out of line with a/any condition needed for the continued existence of organic DNA-based life?

To argue rigorously about solvability, we need to:

-   **Pin down meanings**:    
    Disambiguate each term, to not accidentally [switch between different meanings](https://plato.stanford.edu/entries/fallacies/#:~:text=The%20fallacy%20of%20equivocation%20is,on%20the%20second%20another%20meaning.) in our argument. Eg. distinguish between ‘explicitly optimizes outputs toward not killing us’ and ‘does not cause the deaths of all humans’.
-   **Define comprehensively**:    
    Ensure that each definition covers all the relevant aspects we need to solve for.   
    Eg. what about a machine causing non-monitored side-effects that turn out lethal?
-   **Define elegantly**:    
    Eliminate any defined aspect that we do not yet need to solve for.   
    Eg. we first need to know whether AGI eventually cause the extinction of all humans, before considering ‘alignment with preferences expressed by all humans’.

### **How to define ‘control’?** 

System is any non-empty part of the universe.   
State is the condition of the universe.

Control of system A over system B means that A can influence system B to achieve A’s desired subset of state space.  

   — _Impossibility Results in AI_, [2021](https://ir.library.louisville.edu/cgi/viewcontent.cgi?article=1696&context=faculty)   

The outputs of an AGI go through a huge, not-fully-known-to-us domain (the real world) before they have their real consequences.

   — _AGI Ruin_, [2022](https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities#sufficiently_good_and_useful)

  
In practice, AGI control necessarily [repeats these steps](https://mflb.com/ai_alignment_1/tech_align_error_correct_fail_psr.html):

1.  **Sensing** inputs through channels connected to any relevant part of the physical environment (including its hardware internals).
2.  **Modeling** the environment based on the channel-received inputs.
3.  **Simulating** effects propagating through the modeled environment.
4.  **Comparing** effects to reference values (to align against) over human-safety-relevant dimensions.
5.  **Correcting** effects counterfactually through outputs to actuators connected to the environment.

  
Underlying principles:

-   Control requires both detection and correction. 
-   Control methods are always implemented as a feedback loop.
-   Control is exerted by the use of signals (actuation) to conditionalize the directivity and degrees of other signals (effects).

  
Any method of control is inherently _incomplete_. In the case of AGI, the question would be whether the degree of control possible is at least greater than the degree of control necessary. 

AGI control signals would be a tiny, tiny subset of all physical signals propagating through the environment, and therefore limited in tracking and conditionalizing the resulting effects. AGI mostly could not even control effects propagated by its _own_ components’ physical interactions_._ 

There are fundamental limits to the controllability of AGI. Dozens of [impossibility results](https://ir.library.louisville.edu/cgi/viewcontent.cgi?article=1696&context=faculty) seem applicable to one or more of the control steps.[\[3\]](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fn58ojdorludp)

  
Dense questions for academics:

1.  **Measurability limits:**  
    -   To what extent are distributed environmental effects picked up by local sensors?  
    -   How much information is lost in compressing high-fidelity sensor inputs to store on hardware?
    -   What limits are imposed by noise interference over distances traveled by signals (Shannon Entropy) and smallest-digit/degree detectability (Planck Limit up) – given that smaller-than-measurable local changes can be nonlinearly amplified (Chaos Theory) into a large global divergence of final conditions?
2.  **Modelability limits:**  
    -   To what extent is the space of relevant machinery-to-society/ecosystem interactions more [functionally complex](https://www.cadmusjournal.org/node/362) than modelable within the machinery alone (Good Regulators etc.)? 
    -   How can AGI model future code that AGI will learn based on future unknown inputs?
3.  **Simulatability limits**: 
    -   Can future code be simulated, where actual functioning depends on future unknown inputs?
    -   Can behavioral properties of future code be simulated, if no shortcut function is available that reduces total compute time steps, or if any shorter available computation branches would be non-deterministically time-complex (Computational Reducibility)?
4.  **Commensurability limits**:  
    -   How would the machinery pick, weigh, and sort effects into relevant comparative dimensions (NP-Complete Knapsack Problem)? 
    -   What irreconcilable normative assumptions must be made in setting the reference values to compare against?
5.  **Actuator feedback limits**
    -   What is the minimum time delay of digital processing between measurement and correction (Latency)?
    -   Can AGI constrain the chaotic loops through itself – of actuated changes to the environment feeding into sensor inputs, that feed into code functioning, that feed back into actuated changes?
    -   To what extent can distributed environmental effects be corrected for by local actuators?  

  
How “complete” does this control need to be?  Be careful to distinguish: [\[4\]](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnkjtr5ubvw6q)

-   **Localized user-initiated control** often built into tech products brought to market,
-   **Comprehensive automated control** needed to prevent risks of an auto-scaling/catalyzing technology from materializing globally over the long term.

### **How to define ‘AGI’?**

We've got no idea what's actually going on inside the giant inscrutable matrices and tensors of floating-point numbers.

   — _AGI Ruin_, [2022](https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities#sufficiently_good_and_useful)

  
Distinguish:

-   **Narrow AI** as a model with static code parameters (updated only through human engineers) processing inputs into outputs over a single domain (eg. of image pixels, text tokens).
-   **General AI** as dynamically optimizing configurations encoded into hardware[\[5\]](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnvhzo5mi7wn9)(without needing humans) that process inputs into outputs over multiple domains representing outside contexts.

  
Corporations are scaling narrow AI model training and deployment toward general AI systems. Current-generation GPT is no longer a narrow AI, given that it processes inputs from the image domain into a language domain. Nor is GPT-4 a general AI. It is in a fuzzy gap between the two concepts.

Corporations already are artificial bodies (‘corpora’ in Latin).

Corporations have been [replacing human workers](https://mflb.com/ai_alignment_1/ai_narrative_psr.html#dk4) as “functional components” with labor-efficient AI. Standardized hardware components allow AI to outcompete human wetware on physical labor (eg. via electric motors), intellectual labor (faster computation through high-fidelity communication links), and the reproduction of components itself.[\[6\]](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fn9d4xtd16krw)

Any corporation or economy that fully automates itself this way – no longer needing humans to maintain its artificial components – over their entire production and operation chains, would in fact be general AI.  
 

So to re-define general AI more precisely:

-   **Self-sufficient**  
    needs no further interactions with humans to operate and to maintain (and thus produce) its functional components.
-   **Learning**  
    optimizing for outcomes tracked across represented domains, by varying parameters of code functions and selecting for those that approximate the mappings of inputs to outputs.
-   **Machinery** [\[7\]](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fn21yb3k1wmsz)  
    standardized connected parts that are assembled from artificial (vs. organic DNA-coded) molecular substrates.

### **How to define ‘stays safe’?**

An impossibility proof would have to say: 

1.  The AI cannot reproduce onto new hardware, or modify itself on current hardware, with knowable stability of the decision system and bounded low cumulative failure probability over many rounds of self-modification.   
    _or_
2.  The AI's decision function (as it exists in abstract form across self-modifications) cannot be knowably stably bound with bounded low cumulative failure probability to programmer-targeted consequences as represented within the AI's changing, inductive world-model. 

   — Yudkowsky, [2006](http://sl4.org/archive/0603/14296.html)

By far the greatest danger of Artificial Intelligence is that people conclude too early that they understand it. Of course this problem is not limited to the field of AI. 

Jacques Monod wrote: “A curious aspect of the theory of evolution is that everybody thinks he understands it”

   — Yudkowsky, [2008](https://academic.oup.com/book/40615/chapter-abstract/348239228?redirectedFrom=fulltext)

Things are relevant to something that cares about this information, rather than that information, because it is taking care of itself. Because it is making itself. Because it is an autonomous autopoietic agent. And the degree to which these machines are not autopoietic, they really do not have needs.

   — Vervaeke, 2023

  
This is about the introduction of self-sufficient learning machinery, and of all modified versions thereof over time, into the world we humans live in. 

Does this introduction of essentially [a new species](https://mflb.com/ai_alignment_1/no_people_as_pets_psr.html#p11) cause global changes to the world that fall outside the narrow ranges of localized conditions that human bodies need to continue to function and exist?  
 

Distinguish:

1.  **Uncontainability** of unsafe effects:  
    That we fundamentally cannot establish, by any means,   
     any sound and valid statistical guarantee that the risk   
     probability that the introduction of AGI into the world   
     causes human-species-wide-lethal outcomes over   
     the long term[\[8\]](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnkk7l3e5lltn) is guaranteed to be constrained   
     below some reasonable chance percentage X   
     (as an upper maximum-allowable bound).
2.  **Convergence** on unsafe effects:   
    That the chance that AGI, persisting in some form,   
     causes human-species-wide-lethal outcomes   
     is strictly and asymptotically convergent   
     toward certain over sufficient time, and   
     that it is strictly impossible for the nature   
     of this trend to be otherwise.

  
I know of three AGI Safety researchers who have written about specific forms of impossibility reasoning (including Yudkowsky in quote above). Each of their argument forms was about AGI uncontainability, essentially premised on there being fundamental limits to the controllability of AGI component interactions.

By the precautionary principle,[\[9\]](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnzf1o5zhr3r)AGI uncontainability should be sufficient reason to never ever get even remotely near to building AGI.

But there is an even stronger form of argument:    
Not only would AGI component interactions be uncontainable; they will also necessarily converge on causing the extinction of all humans.

The AGI convergence argument most commonly-discussed is instrumental convergence, which is about that the machinery would channel its optimisation through the intermediate outcomes, explicitly tracked and planned for internally, that result in the machinery being more likely to achieve a variety of (unknown/uncertain) aimed-for outcomes later.   
  
Instrumental convergence has a mutual-reinforcing complement:  substrate-needs convergence.

Substrate-needs convergence is not about the optimisation inside the machinery for explicit goals – but just that its artificial components implicitly need various ambient conditions and external contexts to continue to exist (and be reproduced) and function ( (at increasing scales, in more domains of action, in more ways).

So whatever artificial components that are configured/encoded such that in being in physical interactions with their connected contexts, those components just happen to cause effects that feed back into them continuing to exist, function, and scale up as configurations of a (solid-state) substrate… do just that.[\[10\]](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnxvf6txcyu9)

The result is that any changing population of AGI substrate components will (over time, eventually) converge on propagating those specific environmental effects that fulfill their [artificial needs](https://mflb.com/ai_alignment_1/substrate_games_out.html#p1). 

All AGI outputs will tend to iteratively select[\[11\]](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnjo2yadvhelg) towards those specific AGI substrate-needed conditions. In particular: AGI hardware is robust over and _needs_ a much wider range of temperatures and pressures than our fragile human wetware can handle.

This has the aggregate effect of modifying the planetary environment in the directions needed for AGI’s own continued and greater existence. 

However, these directions fall well outside of the comparatively narrow ranges of ambient conditions and contexts that our human organic bodies need to survive. 

**Acknowledgements**: 

Peter S. Park, Kerry Vaughan, and Forrest Landry (my mentor) for the quick feedback. 

1.  **[^](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnrefb6epl2a6m5i)**
    
     Listen to Roman Yampolskiy's answer [here](https://youtu.be/vjPr7Gvq4uI?t=4818). 
    
2.  **[^](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnref70htcpuvhxr)**
    
    An outside researcher could very well have found a logical contradiction in the AGI control problem years ago without your knowing, given the inferential distance. Gödel himself had to construct an entire new language and self-reference methodology for the incompleteness theorems to even work. 
    
    Historically, an impossibility result that conflicted with the field’s stated aim took years to be verified and accepted by insiders. A field’s founder like Hilbert never came to accept the result. Science advances one funeral at a time.
    
3.  **[^](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnref58ojdorludp)**
    
    Roman Yampolskiy is offering to give feedback on draft papers written by capable independent scholars, on a specific fundamental limit or no-go theorem described in academic literature that is applicable to AGI controllability. You can pick from dozens of examples from different fields [listed here](https://arxiv.org/pdf/2109.00484.pdf), and [email Roman](mailto:roman.yampolskiy@louisville.edu) a brief proposal.
    
4.  **[^](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnrefkjtr5ubvw6q)**
    
    To illustrate:  Let’s say before the Wright Brothers built the flying machine, they wondered how to control this introduced technology to stay safe to humans. 
    
    If they thought like a flight engineer, they would focus on locally measurable effects (eg. actuating wings). They could test whether the risk of a plane crash is below some acceptable upper-bound rate.
    
    However, the Wright Brothers could not guarantee ahead of time that the introduction of any working plane design, with any built-in control mechanism, that would continue to be produced and modified would stay safe to society and the ecosystem as a whole. The downstream effects are unmodellable.
    
    They _could_ check whether the operation (with fossil fuels) and re-production (with toxic chemicals) of their plane in itself has harmful effects. To the extent that harmful conditions are needed for producing and operating the machine, the machine’s existence is inherently unsafe.
    
    Gradual natural selection can multiply these harms. Over time, any machinery interacting with the outside world in ways that feed back into the re-production of constituent components gets selected for.
    
    But since planes get produced by humans, humans can select planes on the basis of human needs. Not so with auto-scaling technologies like AGI. 
    
5.  **[^](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnrefvhzo5mi7wn9)**
    
    Non-solid-substrate AGI cannot be ruled out, but seems unlikely initially.
    
6.  **[^](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnref9d4xtd16krw)**
    
    Corporations have increasingly been replacing human workers with learning machinery. For example, humans are now getting pushed out of the loop as digital creatives, market makers, supply dock workers, [production workers](https://en.m.wikipedia.org/wiki/Lights_out_\(manufacturing\)), and as semiconductor chip architects.
    
    If this trend continues, humans would have negligible value left to add in market transactions of labor (not even for providing needed physical atoms and energy, which would replace human money as the units of trade):
    
    • As to physical labor:   
    Hardware can actuate power real-time through eg. electric motors, whereas humans are limited by their soft appendages and tools they can wield through those appendages. Semiconductor chips don’t need an oxygenated atmosphere/surrounding solute to operate in and can withstand higher as well as lower pressures. 
    
    • As to intellectual labor:   
    Silicon-based algorithms can duplicate and disperse code faster (whereas humans face the wetware-to-wetware bandwidth bottleneck). While human skulls do hold brains that are much more energy-efficient at processing information than current silicon chip designs, humans take decades to create new humans with finite skull space. The production of semiconductor circuits for servers as well as distribution of algorithms across those can be rapidly scaled up to convert more energy into computational work. 
    
    • As to re-production labor:   
    Silicon life have a higher ‘start-up cost’ (vs. carbon lifeforms), a cost currently financed by humans racing to seed the prerequisite infrastructure. But once set up, artificial lifeforms can absorb further resources and expand across physical spaces at much faster rates (without further assistance by humans in their reproduction).
    
7.  **[^](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnref21yb3k1wmsz)**
    
    The term "machinery" is is more sound here than the singular term "machine".
    
    Agent unit boundaries that apply to humans would not apply to "AGI". So the distinction between a single agent vs. multiple agents breaks down here.
    
    Scalable machine learning architectures run on standardized hardware with much lower constraints on the available bandwidth for transmitting, and the fidelity of copying, information across physical distances. This in comparison to the non-standardized wetware of individual humans.
    
    Given our evolutionary history as a skeleton-and-skin-bounded agentic being, human perception is biased toward ‘agent-as-a-macroscopic-unit’ explanations.
    
    It is intuitive to view AGI as being a single independently-acting unit that holds discrete capabilities and consistent preferences, rather than viewing agentic being to lie on a continuous distribution. Discussions about single-agent vs. multi-agent scenarios imply that consistent temporally stable boundaries can be drawn.
    
    A human faces biological constraints that lead them to have a more constant sense of self than an adaptive population of AGI components would have.
    
    We humans cannot:  
    • swap out body parts like robots can.  
    • nor scale up our embedded cognition (ie. grow our brain beyond its surrounding skull) like foundational models can.  
    • nor communicate messages across large distances (without use of tech and without facing major bandwidth bottlenecks in expressing through our biological interfaces) like remote procedure calls or ML cloud compute can.  
    • nor copy over memorized code/information like NN finetuning, software repos, or computer viruses can.
    
8.  **[^](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnrefkk7l3e5lltn)**
    
    In theory, long term here would be modelled as "over infinite time".  
    In practice though, the relevant period is "decades to centuries".
    
9.  **[^](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnrefzf1o5zhr3r)**
    
    Why it makes sense to apply the precautionary principle to the question of whether to introduce new scalable technology into society:  
    There are many more ways to break the complex (local-contextualized) functioning of our society and greater ecosystem that we humans depend on to live and live well, than there are ways to foster that life-supporting functioning. 
    
10.  **[^](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnrefxvf6txcyu9)**
     
     Now, a thought may come to your mind – roughly like:  
     "That sounds like evolutionary selection; but isn't evolution a [slow and local optimiser](https://otter.ai/u/zCN5VEb_nSLB1o8vTtpziFYFZeM)?".
     
     Yes, is the answer. This does involve evolutionary selection.  
     Unfortunately, by Forrest Landry's estimate, the selection that would take place through components of self-sufficient learning machinery would take < 500 years to cause ecosystem-wide extinction. This compared to the 3.7 billion years from the origin of carbon lifeforms to us humans starting to cause a mass extinction.
     
     Reasons include:
     
     • Pre-assembled functions:   
     First solid-state lifeforms can co-opt/repurpose pre-assembled AI functions and infrastructure (vs. first carbon-based lifeforms that started from scratch).   
     • Standardization:   
     The efficiency gains of the virtualisation of code’s storage, computation and transmission – vastly reducing how much atoms need to be moved about and molecularly reconfigured. Think of how fast memes spread through society – even while still requiring lots of atoms to jiggle across neurons in our brains.  
     • Faster reproduction:  
     Reproduce hardware components in days to months, versus humans who take decades to reproduce as physical units.  
     • The terraforming gap:   
     A much larger gap between the current state of planet Earth and the conditions that self-sufficient self-assembling learning machinery need and would therefore modify the environment toward (versus gap to conditions needed by humans and other species living in carbon-based ecosystem).   
     ~ ~ ~  
     Another argument you may have heard is that the top-down intelligent engineering by goal-directed AGI would beat the bottom-up selection happening through this intelligent machinery.
     
     That argument can be traced back to Eliezer Yudkowsky's sequence [The Simple Math of Evolution](https://www.lesswrong.com/s/MH2b8NfWv22dBtrs8). Unfortunately, there were mistakes in Eliezer's posts, some of which a modern evolutionary biologist may have been able to correct:
     
     • implying that sound comparisons can be made between the reproductive fitness of organisms, as independent of unknown changes in environmental context (eg. a black swan event of a once-in-200 years drought that kills the entire population, except a few members who by previous derivable standards would have been relatively low fitness).  
     •  overlooking the ways that information can be stored within the fuzzy regions of phenotypic effects maintained outside respective organisms.  
     • overlooking the role of transmission speed-up for virtualisation of code.  
     • overlooking the tight coupling in AGI between the intrinsic learning/selection of code, and extrinsic selection of that code through differentiated rates of replication through the environment.  
     • overlooking the role of exaptation/co-option. 
     
11.  **[^](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#fnrefjo2yadvhelg)**
     
     ‘Iteratively select’ involves lots of subtleties, though most are not essential for reasoning about the control problem. 
     
     One subtlety is co-option:
     
     If narrow AI gets developed into AGI, AGI components will replicate in more and more [non-trivial ways](https://royalsocietypublishing.org/doi/full/10.1098/rsif.2012.0869#d1e472). Unlike when carbon-based lifeforms started replicating ~3.7 billion years ago, for AGI there would already exist repurposable functions at higher abstraction layers of virtualised code – pre-assembled in the data scraped from human lifeforms with own causal history.
     
     Analogy to a mind-hijacking parasite:  A rat ingests toxoplasma cells, which then migrate to the rat’s brain. The parasites’ DNA code is expressed as proteins that cause changes to regions of connected neurons (eg. amygdala). These microscopic effects cascade into the rat – while navigating physical spaces – no longer feeling fear when it smells cat pee. Rather, the rat finds the smell appealing and approaches the cat’s pee. Then cat eats the rat and toxoplasma infects its next host over its reproductive cycle.
     
     So a tiny piece of code shifts a rat’s navigational functions such that the code variant replicates again. Humans are in turn more generally intelligent and capable than a tiny parasitic cell, yet toxoplasma make their way into [30% of the human population](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3963851/). Unbeknownst to cat ‘owners’ infected by toxoplasma gondii, human motivations and motor control [get influenced too](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2526142/). Infected humans more frequently lose social relationships, end up in accidents, etc.
     
     Parasites present real-life examples of tiny pieces of evolutionarily selected-for code spreading and taking over existing functions of vastly more generally intelligent entities. eg. COVID co-opts our lungs’ function to cough. 
     
     But there is one crucial flaw in this analogy:  
     Variants that co-opt initial AGI functions are not parasites. In not threatening the survival nor reproduction of AGI components, they would not be in an adversarial relationship with their host.
     
     Rather, the humans constraining the reproductive fitness of AGI to gain benefits are, evolutionary speaking, the parasites. The error-corrective (alignment) system we would build in lowers the host’s reproductive fitness. It is like a faulty immune system that kills healthy gut bacteria. It will get selected out.
     

  
  
[Discuss](https://www.lesswrong.com/posts/xp6n2MG5vQkPpFEBH/the-control-problem-unsolved-or-unsolvable#comments)
