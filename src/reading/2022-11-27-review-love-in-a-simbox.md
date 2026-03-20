---
title: "Review: LOVE in a simbox"
url: "https://bayesianinvestor.com/blog/index.php/2022/11/26/review-love-in-a-simbox/"
source: "feedly"
sourceTitle: "Bayesian Investor Blog"
author: "Peter"
published: 2022-11-27
saved: 2022-11-28
category: "rationality"
tags:
  - "Product Reviews"
  - "Artificial Intelligence"
status: "unreviewed"
layout: "reading.njk"
contentType: "full"
---

Blog post review: _LOVE in a simbox_.

Jake Cannell has a very interesting post on LessWrong called [LOVE in a simbox is all you need](https://www.lesswrong.com/posts/WKGZBCYAbZ6WGsKHc/love-in-a-simbox-is-all-you-need), with potentially important implications for AGI alignment. (LOVE stands for Learning Other’s Values or Empowerment.)

Alas, he organized it so that the most alignment-relevant ideas are near the end of a long-winded discussion of topics whose alignment relevance seems somewhat marginal. I suspect many people gave up before reaching the best sections.

I will summarize and review the post in roughly the opposite order, in hopes of appealing to a different audience. I’ll likely create a different set of misunderstandings from what Jake’s post has created. Hopefully this different perspective will help readers triangulate on some hypotheses that are worth further analysis.

### How to Box an AGI

I’ve been pessimistic about containing an AGI of unknown alignment.

Many discussions of keeping an AGI in a box focus on how to use the AGI as an oracle (possibly due to Eliezer’s mysterious [experiments](https://www.yudkowsky.net/singularity/aibox) being more colorful than the best proposals for testing an AGI in simulations?). (Is there a general tendency to focus too much on oracles? I’m reminded that OpenAI seems to have [underestimated GPT-3](https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators) by thinking of it as an oracle.)

I’ve been downplaying the value of testing AGIs in simulations, maybe because I over-generalized Eliezer’s arguments.

Jake proposes using simulation sandboxes (simboxes) to train AGIs and to test their alignment. The simboxes should be designed so that the AGIs have little chance of detecting that they’re in a simulation, and little evidence about what kind of a world might be running the simulation.

The AGI grows up in a toy world that contains other intelligent (but not exactly human?) agents. This world bears enough resemblance to ours that the AGI will face some test(s) of whether it’s aligned with those agents. The main communication with the real world happens when the AGI’s developers shut down the simbox and evaluate the results.

How well did the AGI cooperate with other agents? A properly designed simbox will generate clear evidence about whether an AGI will help other agents, or whether it will engage in world conquest. (The AGI’s intelligence will be evaluated at the same time.)

I’ll ask you to assume for now that the AGI has been designed so that there’s a decent chance that it can be aligned with humans. Then we can fairly safely train and test it in increasingly sophisticated simboxes (a new instance of the AGI in each simbox), and then finally train and release a final version in the real world. Ergo, alignment is easy!?!

### Simbox Design

How closely should the most sophisticated simboxes resemble the real world?

I’m fairly confident that toy worlds can be rich enough to train human-level AGI. I’ll assume that failures to reach human levels of generality imply a need for different AGI designs, and not much change to the simboxes.

My main concern is a trade-off between the realism needed to evaluate alignment, and the goal of ensuring that the AGI can’t break out of the simbox.

There’s a wide variety of threat models that we could worry about. A project that tries to defend against all of them is likely to be too slow for its results to matter.

For example, we could imagine that the AGI will send messages via whatever the developers use to evaluate the simulation results. Could those messages brainwash the developers? A sufficiently god-like AGI might manage to do this, even if it gets little evidence about what’s outside the simbox.

Jake argues that the worst case scenario is easier than this. The simbox likely won’t have enough compute to support a god-like AGI. The simbox environment won’t simulate the kind of technology that would suggest to the AGI that simulations are feasible. Simboxes might need to support devices with technology-like powers, but those devices should be based on magic, rather than technology. (Magic devices can generate simpler ways to test responses to technological dangers, without suggesting computing devices that could scale up to simulate a universe.)

Most of the simbox’s compute would be devoted to simulating other agents for the AGI to interact with. I presume these agents will be less capable than humans, but more capable than current video game NPCs.

### Simbox Caveats

My biggest concern with simboxes is that they won’t get enough compute to simulate a sufficiently realistic environment.

Part of Jake’s answer is observer driven simulation: if the simulation only computes whatever it identifies as needed for interactions with the AGI, then the compute needed scales sublinearly with the apparent size of the simulated world. I gather that computer games have some experience with this approach.

That’s not sufficient to satisfy my concerns. How many other agents does the AGI need to interact with in order for us to predict how it will act in the real world? A small village is likely enough to identify many types of psychopathy. We need something bigger to identify how an AGI will treat outgroups. What will be the AGI equivalent of the Dunbar number?

Evolution likely found the most efficient way to train intelligent agents, given the available environments. Yet AI researchers who pursue approaches other than simboxes are finding and creating environments that were unavailable to evolution. So I have little confidence that simboxes are competitive ways to train AGIs.

How big should the simulated universes look to the AGI? Some early tests could be done on a universe whose physics only supports village-sized societies. But I’m worried that simulations with few apparent resources would cause the AGI to be less ambitious than it will be in our world.

So it seems more likely that most simboxes should appear to have the physics to support astronomical amounts of compute. That risks having the AGI try to use planet-sized computing resources, presumably failing. Does that mean the AGI detects that it’s in a simulation, and tries to break out? Or is it likely that the simulation will detect this situation, and shut down as soon as the AGI tries to use too many resources? I’m guessing it will be natural to implement such a shut-down, largely as a byproduct of not having enough compute to do anything else.

I’m slightly worried that something about the simbox prevents the AGI from fooming within the simulation, yet it fooms when run outside of the simbox. My intuition says that this combination has less than a 1% chance of being true. I’ll ignore it for now, but flag that it deserves more thought if this simbox strategy gets implemented.

Some of Nate’s comments in [this post](https://www.lesswrong.com/posts/rP66bz34crvDudzcJ/decision-theory-does-not-imply-that-we-get-to-have-nice) suggest a belief that an AGI would be fairly certain whether or not it’s in a simulation, based on things like whether stock markets look like real stock markets, or whether the AGI can explain its origin.

That line of argument seems quite far-fetched, compared to more mundane reasons why a simbox might falsely indicate alignment. Humans can’t distinguish real stock markets from fake ones unless they develop expertise with real ones. That’s partly due to humans having too little compute. An AGI in a simbox won’t do much better than humans at that, because the simbox won’t have the compute to support a superhuman ability to model stock markets.

What would a simbox AGI think about its origins? Humans have an incomplete understanding of our origins. Doubts about those origins aren��t what lead us to wonder about being in a simulation. Also, magic could be designed to generate a coherent origin story.

I suspect that LessWrong has downplayed simulations because Eliezer has assumed that an AGI could become god-like within a simulation. That may have been slightly plausible 10 years ago. We’ve been steadily accumulating evidence since then that intelligence is compute-intensive. It’s time to reject that threat model as a distraction.

Jake writes:

> The larger challenge is avoiding judgmental eschatonic type philosophies and religions (e.g. Abrahamic).

I’m inclined to treat this as evidence that Jake has gone overboard in expecting AIs to resemble humans. In addition, the population sizes needed for Abrahamic religions to develop seem large enough to require a prohibitive amount of compute.

I’m fairly confident that researchers can prevent AGIs from breaking out of simboxes if that’s their top priority. When that priority gets traded off against other goals, I get moderately worried.

### Anthropmorphic AGI

So far I’ve glossed over the problem of achieving a AGI that looks close enough to being aligned that it’s worth testing. Jake’s claims here are less convincing.

Jake wants to train altruism into AGIs the way that evolution stumbled upon for causing humans to learn altruism as they mature.

The simboxes will be designed so that most of the AGI’s learning comes from interacting with other intelligent agents. Key parts of human values are learned as a byproduct of modeling the goals of other humans.

> Nor is it especially difficult to imagine how we could then approximately align the resulting AI: all one needs to do is replace the agent’s core utility function with a carefully weighted\[60\] average over its simulated utility functions of external agents.

Hmm. That likely depends on some optimistic assumptions about the AGI’s transparency. I’m nervous, but not nervous enough to reject the basic idea.

I also see some assumptions about the feasibility of modifying the AGI’s utility function. The utility function seems unlikely to be implemented in a way that makes this straightforward. Also, I expect the AGI will resist such changes if developers wait too long to try them. These concerns add a bit more to my doubts.

Jake mostly assumes(?) that humans are sufficiently aligned (with our genes? other humans?) that we don’t need to make AGIs much more aligned than humans are. That’s a pretty critical assumption, in that it subsumes some rather controversial beliefs about humans, about whether a small number of AGIs will take over the world, and about the extent to which AGIs will cooperate with each other against human interests.

Jake makes some decent arguments against the foom hypothesis. That provides some support for this critical assumption. But those arguments are hardly novel enough to shift the controversies by much.

I remained scared at the difficulty of figuring out who is closer to being correct here.

Simboxes seem likely to generate some evidence regarding whether a society of diverse AGIs will develop roughly equal power, or whether first-mover advantages will lead to a small number of AGIs taking over.

### Instincts

How does this alignment work? Part of Jake’s answer is that some of the most ancient parts of the brain have hardwired instincts, which are used to train a small number of key values in a neocortex that’s mostly a blank slate.

So far, so good.

That leaves some important questions about how to replicate those ancient instincts (or replace them with something better).

I accept that human altruism is mostly learned. Alas, that doesn’t tell us how much it relies on nudges from genes. Evolution spent potentially a half a billion years of search to find the best such nudges. That leaves us with enormous uncertainty about how hard it is to replicate those nudges in an AGI.

This risk could likely be handled with a sufficiently large number of iterations on simboxes, using trial and error to figure out what inductive biases are needed to replicate human-like instincts. This seems to imply a large proliferation of simboxes, requiring a possibly prohibitive amount of compute.

My intuitions say this is grounds for rejecting Jake’s training approach. Yet Jake sees a way to cheat:

> a 1000 GPU cluster will be able to run 100 to 1000 agents in parallel at real-time speed or greater—but only if they share the great majority of their RAM mind-state (skills, concepts, abilities, memories, etc)

Jake knows more about the relevant implementation difficulties that I do, so I’ll assume that something along these lines will make some sense. My intuition still predicts mind-boggling practical difficulties with trade-offs between the need for sharing mind-states and the need for testing a diverse set of instincts.

### Empowerment

One key instinct that’s likely needed for humans to become smart and agenty is the goal of empowerment.

The desire to increase one’s future influence is [instrumentally convergent](https://en.wikipedia.org/wiki/Instrumental_convergence) for a broad class of human-like agents. That plays an important enough role in the development of the human mind that it explains much of what humans value. Most of the details of human values involve strategies to empower humans.

Jake wants us to believe that an AGI that empowers humans is sufficiently aligned with us.

I’m willing to believe that empowerment captures more than 95% of human activity. That’s not quite sufficient to imply that an AGI will help me if it maximizes what it sees as empowering me.

If this training produces the same kind of altruism that humans have, the resulting AGI(s) will have some mix of pure altruism, plus a virtue signaling drive that looks like altruism.

The virtue signaling features seem to create risks of what Bostrom calls [Disneyland with no children](https://forum.effectivealtruism.org/posts/3d2SbKC3bgXyEuExF/how-worried-should-i-be-about-a-childless-disneyland): the AGI(s) cause a proliferation of beings that look like empowered humans, but who lack some key internal quality that’s hard to observe from the outside.

Jake concedes something weakly resembling this in a subsequent post on [empowerment (the “But our humanity” section)](https://www.greaterwrong.com/posts/JPHeENwRyXn9YFmXc/empowerment-is-all-we-need#But_our_humanity).

A key test of whether “LOVE in a Simbox” succeeds is how it handles mind uploading. Assume the training produces AGI(s) which love any entity that they classify as human, and that on any test that’s easy to perform, they seem to correctly distinguish between “human” and “agent that humans don’t value”. Does that tell me whether they’ll cooperate with me uploading my mind in a way that I want, yet not pressure me into uploading my mind unless I’m satisfied with the fidelity of the uploading process?

To the extent that the AGI(s) replicate human-style virtue signaling, they’ll be inclined to manipulate humans into believing that the AGI(s) are making the right choices about uploading, and it will be hard to predict whether they’re getting it right, or whether they’re doing the equivalent of tiling the universe with smiling faces.

I’m somewhat optimistic that this problem can be solved, but I don’t have a satisfactory explanation of how to solve it.

### Interpretability

How much interpretability does this approach require?

We can get some value from observing simbox results by simply looking at how an AGI interacts with other agents.

My comments above on empowerment suggest that it’s pretty important to examine internal mental states of the AGI(s).

Jake mentions “accessible inner monologues”, but leaves me confused about what enables that. I can imagine that AGI(s) will develop human-like inner monologues. Will it be practical for us to understand those monologues?

I don’t know whether the default outcome will be that those monologues translate readily into English. I expect accomplishing that would require significant effort. I would not be surprised if researchers have sufficient reasons other than safety to put in that effort, but I’d sure like to see a stronger argument for that than what my weak intuitions are saying.

Drexler’s [QNR paper](https://www.lesswrong.com/posts/FKE6cAzQxEK4QH9fC/qnr-prospects-are-important-for-ai-alignment-research) hints at ways that those monologues might be guided to be interpretable. I presume the QNR approach is harder if security concerns keep nearly all human literature out of the simbox (there’s another detail that seems tricky – how much fiction needs to be written by people with a security mindset in order to safely create many rich simbox environments?).

\[Greg Egan has a short story, [Crystal Nights](https://www.gregegan.net/MISC/CRYSTAL/Crystal.html), about a simbox that runs into problems with interpretability.\]

### Concluding Thoughts

This review has neglected at least one third of Jake’s post. I’ve possibly skipped some important parts, that I could review if I took enough time. But this review is already longer than I want a single post to be, and I’d hoped to post this a month ago, so I’ll stop here.

I see a fair amount of promise in Jake’s approach.

The default outcome seems to be failure, due to compute costs causing it to be either uncompetitive, or due to releasing AGIs into the real world with inadequate testing.

I suspect there’s a good deal of room to improve on Jake’s version of this general approach. If the security mindset is dialed up a lot, the risk/reward ratio might become fairly attractive.

Anthropomorphic training seems certain to make AGI more agenty than I’d consider ideal. So I want to give it lower priority than [Drexler’s CAIS approach](https://www.fhi.ox.ac.uk/reframing/) for now. But there’s large uncertainty about which approaches are feasible, so researchers ought to pursue many approaches in parallel.

My initial reaction to Jake’s post was quite positive.

His approach to simboxes seems valuable, and the post clarified my thoughts on this topic.

Yet the more I analyze the broader claims, the more doubts I have about whether they’re valuable.
