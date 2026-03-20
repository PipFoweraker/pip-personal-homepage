---
title: "Can we achieve AGI Alignment by balancing multiple human objectives?"
url: "https://www.lesswrong.com/posts/HoQ8WaEHXdkaMbpzx/can-we-achieve-agi-alignment-by-balancing-multiple-human"
source: "feedly"
sourceTitle: "LessWrong"
author: "Ben Smith"
published: 2022-07-03
saved: 2022-08-02
category: "rationality"
tags:
  - "Artificial Intelligence"
  - "Machine Learning"
status: "unreviewed"
layout: "reading.njk"
contentType: "summary"
---

Published on July 3, 2022 2:51 AM GMT  
  

Can we improve alignment of hypothetical superintelligent AGI by shaping their reward functions on a balance of multiple human objectives?

Perhaps one important key to AGI Alignment is not to overthink it. If we want AGI to avoid certain misaligned outcomes, maybe the key is to simply to _design the reward function to be averse to those outcomes_.

We are a long, long way from fully describing human objectives and preferences, and yet, we've come a long way from being unable to describe them at all. In other words, we can describe human objectives and preferences imperfectly, in a way that is probably sufficient to give an agent that understands what a "human" is some objective with respect to the way humans would like to be treated.

Human objectives have been defined in many different ways, and I won't attempt to summarize them all here, but some notable examples are:

-   psychological definitions like the [Schwartz theory of basic values](https://www.frontiersin.org/articles/10.3389/fpsyg.2020.01723/), which posits "Conformity, Tradition, Security, Power, Achievement, Hedonism, Stimulation, Self-Direction, Universalism, and Benevolence".
-   behavioral definitions such as avoidance of pain and seeking of pleasure
-   Biological definitions like maintaining chemical homeostasis through adequate food, water, and sleep, and drives such as the sex drive

There are also a number of ways to _measure_ the fulfillment of human objectives used in psychology and other disciplines where it is necessary to objectively measure human objectives or needs. These include:

-   Physical: for some human objectives, it may be possible to physically observe e.g., lack of sleep
-   Behavioral: we can infer a human's objectives through their behavior. If a human walks to the kitchen fridge, or drives to a restaurant, these are clues the human seeks food
-   Revealed preferences: closely related to behavioral preferences, this term is often preferred in economic disciplines
-   Self-report: humans sometimes verbally self-report their own needs

Can we align AGI to human priorities by write a reward function that includes the fulfillment of some set of human objectives like the ones listed above? There are a number of possible objections, but of all the objections I anticipate, I also anticipate responses. Let's see how it might be done.

**"Which objectives do we align to?"**

The answer to this is quite simple: we align to some non-linear combination of all of them. Likely, we want a loss-averse function, inspired by biological homeostatic systems, where the further away from the target, or zero-point, we're predicted to be, the more our agent is motivated to pay attention to resolving it. and Various loss-averse functions have been previously defined. [Rolf (2020)](https://www.researchgate.net/profile/Matthias-Rolf/publication/344692999_The_Need_for_MORE_Need_Systems_as_Non-Linear_Multi-Objective_Reinforcement_Learning/links/5f89c94c299bf1b53e2c23bb/The-Need-for-MORE-Need-Systems-as-Non-Linear-Multi-Objective-Reinforcement-Learning.pdf) describes one particular loss-aversion function I believe has a lot of potential, the exponential loss aversion function:

V(r)\=−∑K−1k\=0\[exp(−rk)\]

The value of the combination of rewards across objectives is equal to the negative of the sum of negative exponential transforms of each reward. The effect of this function is to become extremely loss-averse as outcomes become more strongly negative.

A system designed this way can reduce misalignment due to [Goodharting](https://www.lesswrong.com/tag/goodhart-s-law); although setting, say, only a "fulfill human revealed preferences" target risks de-prioritizing humans' expressed preferences, an agent motivated to prioritize both would find some balance between them. It might not be the balance we want, but it would almost certainly be better than focusing solely on only revealed rather than expressed preferences (or vice versa).

There are significant technical challenges with implementing such a loss-averse function, including identifying an appropriate zero-point for each objective, and scaling each objective correctly relative to other objectives. However, none seem in-principle insurmountable.

**"Why would someone interested in \[x very specific goal\] build an AI system that caters to human objectives in general?"**

A paper-clip corporation aiming to build an AI to increase their paper-clip output might not be very interested in building an AI that improves human welfare in general.  In the tradition of low-impact AI, a multi-objective system can be configured with a "primary objective" and one or more safety objectives that are balanced against the primary objective. This would enable the construction of AI systems that balance a primary objective against safety objectives.

**"Aren't multiple-objective systems vulnerable to** [**wireheading**](https://www.lesswrong.com/tag/wireheading)**?"**

Yes, and this is an obstacle that would need solving. Multiple-objective systems might be particularly vulnerable to wireheading because, depending on the system's design, competing reward functions might de-facto function as competing agents aiming to neutralize the system's other reward functions in order to get more focus on their own functions. Although this area bears further scrutiny, it seems possible that any system with enough access to edit its own reward systems could wirehead enough to completely avoid the need to tangibly have impact on the world in order to achieve reward, a kind of benign misalignment. However, because [optimal policies tend to seek power](https://arxiv.org/abs/1912.01683), a wire-headed system might still seek power with harmfully misaligned consequences merely in order to ensure its own reward signal continues. 

However, "solving AGI Alignment" probably involves more than just "this one neat trick your local misaligned server cluster doesn't want you to know". It might need a whole series of designs and safeguards in order to maintain a well-aligned system. Multi-objective systems addresses part of the problem--how to balance safety objectives with primary objectives in absence of value drift--which then enable us to have more confidence that, if we can solve value drift, the pre-determined values we've chosen will be more dependable.

**"We don't know what the right balance is between the human objectives we know about; we've described them imperfectly"**

Although balancing a large multiplicity of human objectives is better than picking any single human objective to maximize, it still leaves us vulnerable to the outcome that probably, the system will not have precisely the balance that humans want to have. In some sense, this is unavoidable, because humans don't even agree on the right balance between priorities. We might hope for a system whose balance coincides with some sort of compromise between humans; hopefully subject to continual human supervision and refinement. Perhaps accepting human oversight into fine-tuning reward functions could itself become its own rewarded objective.

**"Why not simply tell a system to learn what human objectives are and aim for those?"**

Approaches such as inverse reinforcement learning attempt to learn human preferences and seek to fulfill them. This is probably a very promising approach, but it still leaves open the question: how do we measure what human preferences are? That requires multiple approaches; there is no one objectively correct balance between expressed and revealed preferences, for instance. By balancing a system's attention to different kinds of human objectives, or different ways of measuring them, we can get a better outcome.

**In summary**

It seems likely that by balancing multiple human objectives, we can align an AGI system much better than the system could ever be aligned had we hardcoded it to a single objective. Hardcoding multiple objectives can substantially reduce Goodharting misalignment. It won't completely solve the AGI Alignment problem, but loss-averse reward functions like the one described above, in a multi-objective context, could be part of a solution to avoiding the worst possible misalignment outcomes by ensuring that systems will at least avoid egregiously wrong outcomes.

  
  
[Discuss](https://www.lesswrong.com/posts/HoQ8WaEHXdkaMbpzx/can-we-achieve-agi-alignment-by-balancing-multiple-human#comments)
