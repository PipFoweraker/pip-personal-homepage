---
title: "Can we simulate human evolution to create a somewhat aligned AGI?"
url: "https://www.lesswrong.com/posts/qdmfKbEaZeiZs3buq/can-we-simulate-human-evolution-to-create-a-somewhat-aligned"
source: "feedly"
sourceTitle: "LessWrong"
author: "Thomas Kwa"
published: 2022-03-28
saved: 2022-04-20
category: "rationality"
tags:
  - "Artificial Intelligence"
  - "Deep Learning"
  - "Machine Learning"
status: "unreviewed"
layout: "reading.njk"
contentType: "summary"
---

Published on March 28, 2022 10:55 PM GMT  
  

_Epistemic status: less than 20% chance that this is a good idea. I've spent about 25 hours thinking about this._

**TL;DR: If AI alignment is intractable, but human evolution is robust in producing something close to human values, we could try to simulate/mimic human evolution to create a superintelligent successor AI.  This plan would have various problems, especially training competitiveness.**

Many people I know put significant credence in the following three statements:

-   AI alignment is very difficult, and has a <<50% chance of success, largely because we have no idea how to put human values into an AI.
-   Even if AI alignment is intractable, we know of one process that definitely creates general intelligence with human values: the evolution and cultural development of humans.
-   Medium-sized perturbations to the human evolutionary process wouldn't destroy human values. I have heard MIRI people guess that an AI aligned with elephants, or with aliens that evolved in a similar environment to humans ("humanlike aliens"), would be much better than an AI with a random goal chosen through SGD, perhaps 50% as good as an AI aligned with human [CEV](https://www.lesswrong.com/tag/coherent-extrapolated-volition).

If you're one of these people, this post describes a different approach to making the future go well which you might find plausible. While alignment requires some way to specify human values and put them into an AI, a successor species plan requires creating a system that generates values similar to ours, from scratch, by some process similar to human evolution. The resulting superintelligence will not be totally aligned with human values. However, if the plan is sufficiently tractable while alignment is intractable, it may have higher expected value than aiming for aligned AI. I believe that such plans are neglected because many AI pessimists are uncomfortable thinking about this backup plan.

## How to create a successor AI by simulating evolution?

If we had infinite compute and perfect knowledge of the evolutionary history of humans, we could just simulate the evolution of humans and end up with simulated humans, who could then either become superintelligent through self-modification, or solve the AI alignment problem by thinking for thousands of subjective years, likely achieving human CEV. If we had infinite compute but not perfect knowledge, we could execute [Paul Christiano's plan](https://ai-alignment.com/sympathizing-with-ai-e11a4bf5ef6e) of simulating the entire evolutionary process of some intelligent aliens, and achieve humanlike-alien CEV.

Sadly, we have neither infinite compute nor perfect knowledge. In practice, plans to create a successor species should start by deciding which features involved in the evolutionary and cultural processes leading up to current human values are necessary to generate values at least ~50% as good as human CEV ("values-important"). For example, maybe it's necessary that brain architecture is determined by genes, that it's possible to infer others' mental states by interrogating them, or that humans pair-bond allowing romantic love. If there are few enough values-important features, we can design a training procedure with as many of the values-important features as possible, but which is still training-competitive. This will hopefully get us agents, which I refer to as "simulated aliens", which are somewhat aligned with humans.

Here's my sketch of a path towards a successor AI:

1.  Find likely values-important features in human evolution. (This step seems hard, but likely easier than alignment).
2.  Alignment looks intractable, so we develop a procedure (e.g. a series of RL environments) that replicates the evolution of social beings, that includes the most likely values-important features.
3.  We get further evidence that alignment is intractable, so we implement the training procedure.
4.  As the simulated agents approach human capability levels, we might modify or selectively breed them to be slightly closer to human values.
5.  The simulated agents evolve/train into superintelligences, break out of the simulation, and take over Earth before humans can develop a misaligned AI through other means.

## Will this actually work?

A few things have to be true for a successor AI plan to work, and I analyze each of these below.

1.  The CEV of humanlike aliens must be substantially closer to our values than unaligned goals, such that we think it's at least ~50% as good as creating an aligned AGI (where the baseline is an unaligned AGI). That is, human values must not be sensitive to the differences between human evolution and an infinite-compute simulation of human evolution based on our best knowledge.
2.  Developing this plan is more tractable than alignment, assuming it is possible.
3.  The training process must approximate alien CEV (and there's no interaction between the error here and the error from (1) that destroys all the value.)
4.  The plan is sufficiently training-competitive.
5.  The agent that is deployed doesn't create an unaligned AGI of its own.
6.  The plan does not involve humans developing dangerous capabilities that lead to unaligned AGI.

Overall, it seems fairly unlikely that a plan like this works, so I'm mostly posting this so that people can start thinking in the direction of related, better plans, or think about the underlying moral questions.

### 1\. Aren't human values fragile?

Complexity and fragility of value have been written about on LW since Eliezer's [values](https://www.lesswrong.com/s/3HyeNiEpvbQQaqeoH) [sequences](https://www.lesswrong.com/s/9bvAELWc8y2gYjRav):

> **Complexity of value** is the thesis that human values have high [Kolmogorov complexity](https://wiki.lesswrong.com/wiki/Kolmogorov_complexity); that our [preferences](https://wiki.lesswrong.com/wiki/preferences), the things we care about, cannot be summed by a few simple rules, or compressed. [**Fragility of value**](https://www.lesswrong.com/lw/y3/value_is_fragile/) is the thesis that losing even a small part of the rules that make up our values could lead to results that most of us would now consider as unacceptable (just like dialing nine out of ten phone digits correctly does not connect you to a person 90% similar to your friend). For example, all of our values _except_ novelty might yield a future full of individuals replaying only one optimal experience through all eternity.

[(from the LW wiki)](https://www.lesswrong.com/tag/complexity-of-value)

I think the successor AI plan is consistent with a weak version of value fragility, something like "our CEV cannot be summed up by a few simple rules". My view is roughly that while _an actual list of the things valued by human CEV_ is fragile (removing one small piece like novelty can remove most of the value of the future), the _process that produced human values_ is not necessarily fragile (making a small change to the evolutionary and cultural processes that created our values might retain most of the value of the future). I put significant credence on the possibility that reaching 50% of the value of human CEV requires fewer than 100 values-important features of human evolution. I consider the moral questions here very important, but I'm very confused about them and detailed reasoning about this position is outside the scope of this post.

However, a stronger value-fragility thesis could turn out to be true; if you take the Kolmogorov complexity claim in the quote literally, then human values cannot be compressed into any short program, even if the program is "simulate evolution with the top 100 value-important features". Maybe human values depend on a large number of incidental steps in evolution that we can't possibly identify, in which case your intuition that alien or elephant CEV is ok would be wrong, and this plan would be doomed.

### 2\. Will this be more tractable than alignment?

Unknown; it seems hard to identify which features of human evolution are important in creating human values, but AI pessimists claim that we have no idea how to solve alignment either. In any case, if we disregard plans for partially aligned successor AI, and continue to frame the problem of maximizing the expected value of the future as maximizing the probability of fully solving alignment, we could be leaving value on the table.

### 3\. Will the training process approximate alien CEV?

After we identify features of evolution that might be necessary to yield humanlike values, we need to actually design the training process, and decide which features to keep vs discard. Many features will probably add inefficiencies into the training process, so we will have to include enough value-important features that the AI is alien-aligned, but not so many that the plan is impractically uncompetitive. If you're really pessimistic about coordination, then maybe you think the version of the tradeoff we're heading for is that none of the value-important features of evolution are simulated and none of alien CEV is retained.

However, it might be possible to do better than alien CEV in some respects. Depending on the amount of compute and coordination we have, we might be able to do selective breeding on the last few generations for inclination to cooperate with aliens, wide moral circles, caution about AGI-like activities, etc. If performed for a short period at the end before they surpass humans, deception is probably not a huge concern. In an optimistic scenario, this has as much selection pressure as the process that turned wolves into dogs (thousands of bits), and so we only need the generators of humanlike values to _not be vanishingly unlikely_ in the space of agents generated by the simulation.

### 4\. Will this be competitive?

Probably not. 

First, note that simulating the evolution of an entire species is uncompetitive by [many orders of magnitude](https://docs.google.com/document/d/1IJ6Sr-gPeXdSJugFulwIpvavc0atjHGM82QjIfUSBGQ/edit#heading=h.cebevgwmadke). But real life evolution is extremely inefficient at creating intelligence in ways we can immediately fix:

-   Humans take ~20 years to grow up and produce children, while in simulation we can probably download memories onto newborn simulated aliens;
-   Humans must carry around an entire body with ~50 times the mass of the brain;
-   To prevent inbreeding depression, any isolated population must have >500 individuals;
-   (speculative) Evolution and SGD might be similar optimization algorithms in that they optimize locally, with the biggest difference being that evolution operates on the L1 norm, so we can probably replace evolution with steepest descent on the L1 norm and possibly by SGD.

These inefficiencies can all be removed in a simulation, so I'm confident that we can do basically the same thing as evolution with several orders of magnitude less compute. This is likely still not competitive enough, but we might find more competitive plans if the most compute-intensive parts of human evolution turn out to not be values-important. For example, perhaps at subhuman capability level, the aliens' values will become crystallized and we can train the aliens from elephant-level towards superintelligence using standard RL techniques.

That said, this plan will probably have a competitiveness disadvantage compared to totally unaligned AI, so we would have to have good enough coordination to make the successor AI. For example, if the successor AI plan takes 3x more compute than totally unaligned AGI and is technically simple, we might be able to coordinate around creating the successor AI anyway. If it's 1000x, maybe not.

### 5\. Won't the simulated aliens create unaligned AGI?

The successor AI is already an artificial superintelligence. It is possible that it will need to solve a version of the alignment problem itself, but this doesn't seem like an issue: if a superintelligence can't solve alignment, then we couldn't either. And the simulated aliens probably won't develop their own misaligned AIs before becoming superintelligent, because:

-   we can warn them that the alignment problem is hard
-   they can likely more easily self-modify to become superintelligent than design AGI from scratch 
-   we can construct the environment so they don't have an AI hardware overhang, or economic incentives towards AI capabilities
-   we can stop the simulation if we see them trying to develop AGIs

### 6\. Won't implementing this plan require dangerous capabilities?

It would be irresponsible to develop new, more capable RL architectures just for the successor AI plan. Other elements of the plan, like research into values-important features of human evolution, seem fine; and if the training procedure can be adapted to new RL architectures easily, only the actual implementation of the plan will involve cutting-edge capabilities. However, the risk from implementation seems large; due to the uncompetitiveness of the training process, the risk seems somewhat worse than the risk of whole brain emulation causing unaligned neuromorphic AI, which is already quite large.

If we're really lucky, there could be an RL architecture uniquely good at creating a successor species but that does not advance AGI timelines, but I wouldn't count on it. 

\---

_Thanks to Tamera Lanham, Sydney Von Arx, Malo Bourgon, John Wentworth, Oliver Habryka, Jack Ryan, Drake Thomas, and others for helpful feedback._

  
  
[Discuss](https://www.lesswrong.com/posts/qdmfKbEaZeiZs3buq/can-we-simulate-human-evolution-to-create-a-somewhat-aligned#comments)
