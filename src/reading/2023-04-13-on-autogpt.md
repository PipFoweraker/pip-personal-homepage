---
title: "On AutoGPT"
url: "https://thezvi.wordpress.com/2023/04/13/on-autogpt/"
source: "feedly"
sourceTitle: "Don't Worry About the Vase"
author: "TheZvi"
published: 2023-04-13
saved: 2023-05-08
category: "rationality"
tags:
  - "Machine Learning"
status: "unreviewed"
layout: "reading.njk"
contentType: "full"
---

The primary talk of the AI world recently is about AI agents.

The trigger for this was [AutoGPT](https://github.com/Torantulino/Auto-GPT), now number one on GitHub, which allows you to turn GPT-4 (or GPT-3.5 for us clowns without proper access) into a prototype version of a self-directed agent.

We also have a paper out this week where a simple virtual world was created, populated by LLMs that were wrapped in code designed to make them simple agents, and then several days of activity were simulated, during which the AI inhabitants interacted, formed and executed plans, and it all seemed like the beginnings of a living and dynamic world. Game version hopefully coming soon.

How should we think about this? How worried should we be?

#### The Basics

I’ll reiterate the basics of what AutoGPT is, for those who need that, others can skip ahead. I talked briefly about this [in AI#6 under the heading ‘Your AI Not an Agent? There, I Fixed It](https://thezvi.substack.com/i/111749937/your-ai-not-an-agent-there-i-fixed-it).’

AutoGPT was created by game designer Toran Bruce Richards.

I previously incorrectly understood it as having been created by a non-coding VC over the course of a few days. The VC instead coded the similar program BabyGPT, by having the idea for how to turn GPT-4 into an agent. The VC had GPT-4 write the code to make this happen, and also ‘write the paper’ associated with it.

The concept works like this:

[![Image](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6b54cb0-baff-4afd-897f-f1b8542f8eb7_680x475.png "Image")](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6b54cb0-baff-4afd-897f-f1b8542f8eb7_680x475.png)

AutoGPT uses GPT-4 to generate, prioritize and execute tasks, using plug-ins for internet browsing and other access. It uses outside memory to keep track of what it is doing and provide context, which lets it evaluate its situation, generate new tasks or self-correct, and add new tasks to the queue, which it then prioritizes.

This quickly rose to become #1 on GitHub and [get lots of people super excited](https://twitter.com/heyBarsee/status/1646270998243581954). People are excited, people are building it tools, [there is a bitcoin wallet interaction available](https://twitter.com/NicerInPerson/status/1646079839567245312) if you never liked your bitcoins. AI agents offer very obvious promise, both in terms of mundane utility via being able to create and execute multi-step plans to do your market research and anything else you might want, and in terms of potentially being a path to AGI and getting us all killed, either with GPT-4 or a future model.

As with all such new developments, we have people saying it was inevitable and they knew it would happen all along, and others that are surprised. We have people excited by future possibilities, others not impressed because the current versions haven’t done much. Some see the potential, others the potential for big trouble, others both.

Also as per standard procedure, we should expect rapid improvements over time, both in terms of usability and underlying capabilities. There are any number of obvious low-hanging-fruit improvements available.

An example is someone noting ‘you have to keep an eye on it to ensure it is not caught in a loop.’ That’s easy enough to fix.

A common complaint is lack of focus and tendency to end up distracted. Again, the obvious things have not been tried to mitigate this. We don’t know how effective they will be, but no doubt they will at least help somewhat.

#### Yes, But What Has Auto-GPT Actually Accomplished?

So far? [Nothing, absolutely nothing, stupid, you so stupid](https://www.youtube.com/watch?v=KezvwARhBIc&ab_channel=sirstrongbad).

You can say [your ‘mind is blown’ by all the developments of the past 24 hours](https://twitter.com/JayScambler/status/1645603816111308800) all you want over and over, it still does not net out into having accomplished much of anything.

That’s not _quite_ fair.

Some people are reporting it has been useful as a way of generating market research, that it is good at this and faster than using the traditional GPT-4 or Bing interfaces. I saw a claim that it can have ‘complex conversations with customers,’ or a few other vague similar claims that weren’t backed up by ‘we are totally actually doing this now.’

Right now, AutoGPT has a tendency to get distracted or confused or caught in a loop, to leave things half-finished, to not be that robust of an agent, and other issues like that. Positive reports seem limited to things GPT-4 or Bing can essentially do anyway, with the agent wrapper perhaps cutting down somewhat on how often you have to poke the interface with a stick to keep it pointed in a reasonable direction. And perhaps the Auto version is already somewhat better there.

Other than that? I see a surprising amount of dead silence.

[Or, as Brian Jackson puts it](https://twitter.com/brianjjackson/status/1646146478463647744):

> I feel like maybe the people saying AutoGPT and ChatGPT can create “high-quality content” have different standards for content than I do.

No doubt most people are more interested in extracting mundane utility or trying things out than in bragging about or sharing the results on the internet. There is still a striking lack of internet bragging and results results sharing happening.

Do keep this in mind.

#### Just Think of the Potential

That does not mean that all the people saying AutoGPTs are the future are wrong.

AutoGPT’s list of real accomplishments won’t stay non-existent for long. Most everyone is still in the ‘wrap head around it’ stage or the basic setup and tool building stages. The UIs are terrible, many basic tools don’t yet exist, many basic improvements haven’t been made. What exists today is much worse than what will exist in two weeks, let alone two months or two years, even without other AI improvements.

So, what will future versions of this be able to do?

Certainly future versions will have better memories, better focus, better self-reflection, better plug-ins, better prioritization algorithms, better ways for humans to steer while things are progressing, better monitoring of sub-tasks, better UIs (e.g. [there is already a browser-based AgentGPT](https://twitter.com/ParentZap/status/1646120116898213889)), better configurability, better prompt engineering and so on, even with zero fundamental innovations or other AI advances.

This process will rapidly shed a light on what things are _actually_ hard for the underlying LLM to handle, and which things only require the right scaffolding.

It seems reasonable to expect a number of large step-jumps in capability for such systems as various parts improve.

One way to think about this is that AutoGPT is fundamentally constructed in terms of its ability to assign and execute sub-tasks, that are like recursive function calls until there is a subtask small enough that the system can execute directly. Once you start being able to reliably complete larger and more complex subtasks by asking, one can then batch _those_ and repeat, especially if the system has a good handle on what types of subtasks it can and can’t successfully assign. And so on. Also there’s clearly tons of tinkering to be done on lots of different levels to improve performance.

Woe to those who don’t extrapolate here. For example [this post warns](https://coinatory.com/2023/04/12/gpt-4-apps-babyagi-and-autogpt-could-have-disruptive-implications-for-crypto/?utm_source=TW&utm_medium=Coinatory+Twitter+Page+-+News+Link&utm_campaign=SNAP) that ‘AutoGPT could be disruptive for crypto’ due to their ability to be autonomous, a classic version of crypto’s default of making everything about them. It notes that right now anything created using the GPT API ‘can only be used once’ but if true that is the sort of thing that will inevitably change – one must learn to think ahead. That to me is exactly the wrong model of how to think about future developments.

I am highly uncertain, on many levels, where all of this caps out, or how far we might be able to take it how fast.

Should we encourage such work, or discourage it? How excited should we be? Should we be worried?

#### The Good, the Bad and the Agent Overhang

I have gained confidence in my position that all of this happening now is a good thing, both from the perspective of smaller risks like malware attacks, and from the perspective of potential existential threats. Seems worth going over the logic.

What we want to do is avoid what one might call an _agent overhang._

One might hope to execute our Plan A of having our AIs not be agents. Alas, even if technically feasible (which is not at all clear) that only can work if we don’t intentionally _turn them into_ agents via wrapping code around them. We’ve checked with actual humans about the possibility of kindly not doing that. Didn’t go great.

So, Plan B, then.

If we are definitely going to turn our AIs into agents in the future and there is no way to stop that, which is clearly the case, then better to first turn our _current_ AIs into agents _now._ That way, we won’t suddenly be dealing with highly capable AI agents at some point the future, we will instead gradually face more capable AI agents, such that we’ll hopefully get ‘fire alarms’ and other chances to error correct.

Our current LLMs like GPT-4 are not, in their base configurations, agents. They do not have goals. This is a severe limitation on what they are able to accomplish, and how well they can help us accomplish our own goals, whatever they might be, including using them to build more capable AIs or more capable systems that incorporate AIs.

Thus, one can imagine a future version of GPT-N, that is supremely superhuman at a wide variety of tasks, where we can ask it questions like ‘how do we make humans much smarter?’ or ‘how do we build an array of safe, efficient fusion power plants?’ or anything else we might want, and we don’t have to worry about it attempting to navigate a path through causal space towards its end goal, it will simply give us its best answer to the information on the level on which the question was intended.

Using this tool, we could perhaps indeed make ourselves smarter and more capable, then figure out how to build more general, more agentic AIs, figure out in what configuration we want to place the universe, and then get a maximally good future.

That does not mean that this is what would happen if we managed to not turn GPT-N into an agent first, or that getting to this result is easy. One must notice that _in order to predict the next token as well as possible_ the LMM will benefit from being able to simulate every situation, every person, and every causal element behind the creation of every bit of text in its training distribution, no matter what we then train the LMM to output to us (what mask we put on it) afterwards. The LLM will absolutely ‘know’ in some sense what it means to be an agent, and how to steer physical reality by charting a path through causal space.

Will that cause the LLM to act as if it were an agent _during the training run,_ seeking goals that arise out of the training run and thus almost certainly are only maximally fulfilled in ways that involve the LLM taking control of the future (and likely killing everyone), before we even get a chance to use RLHF on it? During the RLHF training run? Later on? At what level does this happen?

We don’t know. I could believe a wide variety of answers here.

What we _do_ know is that if you _intentionally turn the LLM into an agent,_ you are going to get, a lot earlier down the line, something that looks a lot more like an agent.

We also know that _humans who get their hands on these LLMs will do their best to turn them into agents_ as quickly and effectively as possible.

We don’t only know that. We also know that no matter how stupid you think an instruction would be to give to a self-directed AI agent, no matter how much no movie that starts this way could possibly ever end well, that’s _exactly_ one of the first things someone is going to try, except they’re going to go intentionally make it even worse than that.

Thus, for example, we already have ChaosGPT, told explicitly to cause mayhem, sow distrust and destroy the entire human race. This should at least partially answer your question of ‘why would an AI want to destroy humanity?’ it is because humans are going to tell it to do that.

That is in addition to all the people who will give their AutoGPT an instruction that _means well_ but actually translates to killing all the humans or at least take control over the future, since that is so obviously the easiest way to accomplish the thing, such as ‘bring about world peace and [end world hunger](https://twitter.com/SullyOmarr/status/1645828811680800768)’ (link goes to Sully hyping AutoGPT, saying ‘you give it a goal like end world hunger’) or ‘stop climate change’ or ‘deliver my coffee every morning at 8am sharp no matter what as reliably as possible.’ Or _literally almost anything else._

Seriously, if you find a genie I highly recommend not wishing for anything.

For now, AutoGPT is harmless. Let’s ensure that the moment it’s _mostly_ harmless, we promptly edit the Hitchhiker’s Guide entry.

Let’s therefore _run experiments_ of various sorts, so we know _exactly_ how much damage could be done, and in what ways, at every step.

One good idea is to use games to put such systems to the test.

#### Let’s Put an AI NPC in a Game and See if It Takes Over the World

> Marek Rosa: Interestingly, when people discuss LLMs and game NPCs, they mostly see only the conversational AI use case. But there is another option: using LLMs to control NPC’s behavior. This would let NPCs interact with the game world (observe and act) and even talk to other NPCs, creating a more sandbox experience.
> 
> [Alex Tabarrok](https://twitter.com/ATabarrok/status/1645202730221293568): Let’s Put an AI NPC in a Game and See if It Takes Over the World

I’d already been talking about this a bit in private conversations, as a demonstration.

Oh, you meant take over _the game world._

Still a good idea. Albeit tricky in practice.

Under some sets of initial conditions for both the game and the AI, an AI NPC would in the central sense _take over_ that world.

One must of course notice: Under some other sets of initial conditions, of course, such an AI would also take over _our_ world, since it can converse with humans inside the game, and can use that to break out of the game. So this experiment isn’t _entirely_ safe, if you make an AI capable of taking over the MMO (or other game) then there shouldn’t be _zero_ worry that it would also take over the real world, either as instrumental to taking over the game world, or for other reasons.

To be clear I’m not worried about that with anything you might build now, but when one sets out to create an AI capable of taking things over and seeking power, one must notice when your experiment is not ‘boxed’ or safe.

Getting back to the task at hand, let’s ask the interesting question, _under what sets of conditions_ should we expect the AI NPC to take over our game world? What would make this experiment interesting, without the path to victory going through power seeking in the real world?

I’m imagining something like an MMO, with the following conditions:

1.  An AI agent works on something like Auto-GPT, and is given a goal like ‘assemble as much gold as possible’ that isn’t directly _telling it to take over,_ that would be cheating, but where the actual solution is clearly taking over.
2.  Give the AI the ability to learn or know the game and how to execute within it, either via a plug-in that has a strong game-playing AI or some other way.
3.  Give the AI a way to actually power-seek beyond having one powerful character, so taking over is a viable option, and ensure it knows this option exists.

One solution that might be good for #3 is to allow account sign-ups and subscriptions to be paid for with in-game currency, and thereby let the AI get multiple accounts. Eve Online lets you do this. Each account lets the AI ‘turn a profit’ until the game world is saturated. Will the AI end up shutting out any competing players, so it can farm everything in the game worth farming?

Otherwise, you’ll need the AI to have some way to take over via either getting control of other NPCs, or getting control over the actions of human players. The first option here means giving those NPCs an interface where they can be controlled, presumably via letting the agentic AI converse with other NPCs that are also controlled by LLMs, and giving those LLMs sufficient memory aids that the impact does not fade too quickly, or to otherwise explicitly design the NPCs in ways that allows them to be hacked or taken over in-game. That seems like an interesting approach.

The other option is to expect the AI to take over _by talking to humans who play_ and using that to take over. Once again, I note that the best way to use that might not stop at the game’s edge, so _if it might work_ this isn’t a safe experiment. At current levels of LLM persuasiveness, I don’t see it happening. But it is certainly a good ARC-experiment-style trigger point, a challenge to be put out there where it wouldn’t totally shock me, if the world in question had enough associated levers of control, trade and influence in it.

The other option, of course, is a world explicitly designed with the ‘take over’ goal, like in Diplomacy, where the answer is yes, a good enough AI simply takes over and our current AI is at least as good at this as the strongest human. So one could design a game where power seeking and hiring NPC agents and taking things over is actually core gameplay, or at least a default option, and go from there, and see how far you can push this. Less interesting in some ways, I’d think less convincing and less alarming, still not a bad idea. Perhaps you want something in the middle, where a ‘natural human playthrough’ wouldn’t involve a take-over but there’s no inherent barriers or reasons not to do it.

The more realistic you can make your world, the more interesting and useful the results will be. Would your AI be able to take over Westworld? Would it be able to do that if the NPCs didn’t reset and lose their memories?

That’s all very half-baked for now. For now it’s more a call to explore experimental design space than anything else.

#### The AI Sims-Style World Experiment

[I mention Westworld because Pete points out](https://twitter.com/nonmayorpete/status/1645355224029356032) that Stanford and Google researchers [are trying to do this via a variant](https://arxiv.org/pdf/2304.03442.pdf) of Westworld, a show where you should definitely at least watch Season 1 if you haven’t yet, where the theme park (only very minor spoilers) is populated by ‘hosts’ that are AIs which play out pre-programmed scripts each day, while reacting to anything that happens and any information they learn, then get reset to do it again.

[![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F99f45f4a-3344-46de-9bc6-6b70c20a8c98_1240x384.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F99f45f4a-3344-46de-9bc6-6b70c20a8c98_1240x384.png)

So the researchers put a bunch of LLMs into a virtual world.

> If you wanted to turn ChatGPT into a Westworld host, what would you do?
> 
> Some ideas:
> 
> – Give it an identity, a body and the ability to act
> 
> – Let it remember things
> 
> – Let it develop new thoughts
> 
> – Let it plan its actions (and adjust as needed)
> 
> This is roughly what the researchers did.
> 
> They created little video game characters that could:
> 
> – Communicate with others and their environment
> 
> – Memorize and recall what they did and observed
> 
> – Reflect on those observations
> 
> – Form plans for each day

[![Image](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe7a23099-7b87-4bd0-868e-0b9f2d8a851c_1780x678.jpeg "Image")](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe7a23099-7b87-4bd0-868e-0b9f2d8a851c_1780x678.jpeg)

> They preloaded 25 characters with a starting persona, including:
> 
> – An identity (name, occupation, priorities)
> 
> – Information about other characters
> 
> – Relationships with other characters
> 
> – Some intention about how to spend their day
> 
> Then, they pressed play.

The characters then did a bunch of stuff based on their instructions and identities, including complex interactions that logically followed from those initial conditions. Things evolved over the course of several in-world days. [The paper is here](https://arxiv.org/abs/2304.03442). The world was actually pretty detailed.

[![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F51ec8367-f598-4dfa-b8b0-b86464ba781e_1273x673.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F51ec8367-f598-4dfa-b8b0-b86464ba781e_1273x673.png)

What they did not do, as far as I can tell, is attempt to incorporate an economy, incorporate various forms of selection, motivate long term goals or planning or the creation of subtasks, or give any impetus or dynamics that would lead too directly to resource maximization or power seeking.

This does seem like an excellent foundation to build upon. No doubt we will soon have commercial (and open sourced) projects that let you play around with such worlds, and probably also be a character in them, and people will start running experiments.

I expect it to be enlightening, and also fun as hell. And if you don’t think they’ll be hard at work on the very adult VR versions, followed by the even more adult physical world versions, our models of many things strongly disagree.

#### A Simpler Test Proposal

Perhaps we can stop making life a little tougher than it is?

> [Amjad Masad](https://twitter.com/amasad/status/1645602203015708673): The ultimate test for an LLM agent is to make money.

If LLM agents _can make money autonomously_, after paying costs, in a way that is not severely capped in scope and size, especially if it was done via legal means, then how far is it from that to them being able to compound those gains, and otherwise seek resources and power?

There are lots of details that matter here. How much direction did it need initially? How sustainable or adaptable is such a strategy, is it antifragile or is it fickle?

Seems important to think ahead here – is this a good fire alarm? Would anyone be willing to say in advance ‘if this happens, with the following qualifications, then that is scary and I will then start to worry about existential risks from such agents in the future when they get more capable?’

If you expect this to happen soon anyway, could you perhaps do that _now?_

If this isn’t a good trigger for what an Auto-GPT-style agent can do, what is your trigger, then? What would make you worry?

#### No True Agent

What does it mean to be an agent? Would an improved actually viable version of AutoGPT be an agent in the true sense?

[Sarah Constantin says no, in an excellent post explaining at length why she is not a doomer](https://sarahconstantin.substack.com/p/why-i-am-not-an-ai-doomer). I’d love for more people who disagree with me about things to be writing posts like this one. It is The Way.

She agrees that a sufficiently powerful and agentic, goal-driven AGI would be an existential risk, that this risk (conditional on creating such an AGI) would be very difficult and likely impossible to stop, and that building such a thing is physically possible.

What she _doesn’t_ buy is that we will get to such a thing any time soon, or that our near-term models are capable of it. Not in the 2020s, ‘likely not in the 2030s.’ I note that this does not seem like that much confidence in that much non-doomed time, the goalposts they have moved.

AutoGPT-style ‘agents’ are, in her model, not the droids we are looking for, or the droids we need to worry about. They are, at their best, only a deeply pale shadow.

She thinks that to be an x-risk, in addition to a more robust version of the world models LLMs _kind of sometimes_ have now, an AI will need a causal model, and a goal robustness across ontologies. She believes we are nowhere near creating either of these things.

I wish I was more convinced by these arguments.

Alas, to the extent that one needs the thing she is calling goal robustness, and it is distinct from what existing models have, I see wrapping procedures as being able to deliver this on the level that humans have it – not ‘I can do this in a day with no coding experience’ easy, but definitely the ‘the whole internet tinkering at this for years is going to figure this out’ level of easy. I do not think that _current AutoGPT_ has this, and I think this is a key and perhaps fatal weakness, but what we do here that is load bearing seems unlikely to me to be all that mysterious or impossible to duplicate.

As for causality, even if this is importantly currently missing, I don’t know how an entity can have a functioning world model that doesn’t include causality, and thus as world modeling improves I expect to ‘get’ causality in its load bearing sense here, and for it to happen without anyone having to ‘do it on purpose’ in any way from here, to the extent we can confirm its thingness.

Sarah has an intuition in her post that seems true and important, that humans kind of have two different modes.

1.  In our ‘normal’ mode we are mostly on a kind of auto-pilot. We are not ‘really thinking.’ More like we are going through motions, executing scripts, vibing.
2.  In our ‘causal’ or ‘actually thinking’ mode we actually pay attention to the situation, model it, attempt to find new solutions or insights and so on.

A human in mode one can do a lot of useful or profitable things, including most of the hours spent on most things by most humans. Everyone is in this mode quite a lot, one goal of expertise is kind of to get to the point where you can execute in this mode more, it is highly useful. That human can’t generate true surprises, in an important sense it isn’t a dangerous agent. It is a ‘dead player’ only capable of imitation.

So under this way of thinking, an AutoGPT combined with an LLM can plausibly generate streamlined execution of established lines of digital action that people can do in ‘normal’ mode. Which, again, includes _quite a lot of what we do all day,_ so it’s economically potentially super valuable if done well enough.

#### The Will to Profit

My perhaps even more central doubt of Sarah’s central hope (in general, not with regard only to AutoGPT) here seems to depend on her claim that _the financial incentives_ to solve these problems are not so strong.

Here I am confident she is wrong.

I can imagine the problems being harder and more profound than I expect, and taking longer, perhaps requiring much more innovation than I think. I can’t imagine _there being no payoff_ for solving them. I also can’t imagine people _not thinking there’s a big payoff_ to solving them. Solve them and you get a real agent. Real agents are super powerful, in a way that nothing else in the universe is powerful. Sarah’s model says this is the key to intelligence. Sure, it’s a _poisoned_ banana that kills you too, but the monkeys really go for that sort of thing, looks super profitable. Agents are the next big commercial white whale, whether or not we are close to making them properly work.

I do think there is _some_ hope that Sarah is describing key elements that LLMs and other current AIs lack, and that could be difficult to graft onto them under current paradigms. Not a lot, but some. If we do get this, I presume it will be because the solution was very difficult to find, not because no one went looking.

I could write so much more about the details here, they’re super interesting and I encourage [reading her whole post](https://sarahconstantin.substack.com/p/why-i-am-not-an-ai-doomer) if you have time.

#### What To Expect Next

AutoGPT is brand new. What predictions can we make about this class of thing?

This is where one gets into trouble and looks like an idiot. Predictions are hard, especially about the future, even in relatively normal situations. This is not a normal situation. So there’s super high uncertainty. Still, I will go make some predictions, because doing so is the virtuous and helpful thing to be doing.

I apologize for mostly not putting out actual units of time here, my brain is having a very hard time knowing when it should think in weeks versus months versus years. If I had to guess, the actual economically important impacts of such moves start roughly when they have access to GPT-4.5 or similar (or higher) with good bandwidth, or if that takes a long time then in something like a year?

All of this is rough, on the thinking-out-loud level. I hope to change my mind a lot quickly on a lot of it, in the sense that I hope I update when I get new info (rather than in the sense that I am predicting bad things, which mostly I don’t think I am here). The goal here is to be concrete, share intuitions, see what it sounds like out loud, what parts are nonsense when people think about them for five minutes or five hours, iterate and so on.

1.  In the short term, AutoGPT and its ilk will remain severely limited. The term ‘overhyped’ will be appropriate. Improvements will not lead to either a string of major incidents or major accomplishments.
2.  There will still be viable use cases, even relatively soon. They will consist of relatively bounded tasks with clear subtasks that are things that such systems are already known to be good at. What AutoGPT-style things will enable will not be creative solutions, it will be more like when you would have otherwise needed to manage going through a list of tasks or options manually, and now you can automate that process, which is still pretty valuable.
3.  Thus, the best and most successful AutoGPT-style agents people use to do tasks will, at least for a while, be less universal, less auto, and more bounded in both goals and methods. They will largely choose from a known ‘pool of tricks’ that are known to be things they can handle, if not exclusively then primarily. There will be a lot of tinkering, restricting, manual error-checking, explicit reflection steps and so on. Many will know when to interrupt the auto and ask for human help.
4.  There will be a phase where there is a big impact from Microsoft Copilot 365 (and Google Bard’s version of it, if that version is any good) during which it overshadows agent LLMs and other LLM wrapping attempts. Microsoft and Google will give us ‘known to be safe’ tools and most people will, mostly wisely, stick with that for a good while.
5.  Agent-style logic will be incorporated into the back end of those products over time, but will be sandboxed and rendered ‘safe’ the way the current product announcements work – it will use agent logic to produce a document or other output sometimes, or to propose an action, but there will always be a ‘human in the loop’ for a good while.
6.  Agents, with the proper scaffolding, restrictions, guidance and so on, will indeed prove in the longer run the proper way to get automation of medium complexity tasks or especially multi-step branching tasks, and also be good to employ when doing things like (or dealing with things like) customer relations or customer service. Risk management will be a major focus.
7.  There will be services that help you create agents that have a better chance of doing what you want and less of a chance of screwing things up, which will mostly be done via you talking to an agent, and a host of other similar things.
8.  A common interface will be that you ask your chatbot (your GPT4-N or Good Bing or Bard-Y or Claude-Z variant) to do something, and it will sometimes respond by spinning up an agent, or asking if you want to do that.
9.  We will increasingly get used to a growing class of actions that are now considered atomic, where we can make a request directly and it will go well.
10.  This will be part of an increasing bifurcation between those places where such systems can be trusted and the regulations and risks of liability allow them, versus those areas where this isn’t true. Finding ways to ‘let things be messy’ will be a major source of disruption.
11.  It will take a while to get seriously going, but once it does there will be increasing economic pressure to deploy more and more agents and to give them more and more authority, and assign them more and more things.
12.  There will be pressure to increasingly take those agents ‘off the leash’ in various ways, have them prioritize accomplishing their goals and care less about morality or damage that might be done to others.
13.  A popular form of agent will be one that assigns you, the user, tasks to do as part of its process. Many people will increasingly let such agents plan their days.
14.  Prompt injections will be a major problem for AutoGPT-style agents. Anyone who does not take this problem seriously and gives their system free internet access, or lets it read their emails, will have a high probability of regretting it.
15.  Some people will be deeply stupid, letting us witness the results. There will be incidents of ascending orders of magnitudes of money being lit on fire. We will not always hear about them, but we’ll hear about some of them. When they involve crypto or NFTs, I will find them funny and I will laugh.
16.  The incidents likely will include at least one system that was deployed at scale or distributed and used widely, when it really, really shouldn’t have been.
17.  These systems will perform much better when we get the next generation of underlying LLMs, and with the time for refinement that comes along with that. GPT-5 versions of these systems will be much more robust, and a lot scarier.
18.  Whoever is doing the ARC evaluations will not have a trivial job when they are examining things worthy of the name GPT-5 or GPT-5-level.
19.  The most likely outcome of such tests is that ARC notices things that everyone involved would have previously said make a model something you wouldn’t release, then everyone involved says they are ‘putting in safeguards’ of some kind, changes the goal posts, and releases anyway.
20.  We will, by the end of 2023, have the first agent GPTs that have been meaningfully ‘set loose’ on the internet, without any mechanism available for humans to control them or shut them down. Those paying attention will realize that we don’t actually have a good way to shut the next generation of such a thing down if it goes rogue. People will be in denial about the implications, and have absolutely zero dignity about the whole thing.
21.  The first popular online Sims-Westworlds, settings where many if not most or all non-human characters are agent-LLMs, will start coming out quickly, with early systems available within a few months at most, and the first popular and actually fun one within the year even if underlying LLM tech does not much advance. There will be lots of them in 2024, both single player and multiplayer, running the whole range from classrooms to very adult themes.
22.  Some of those worlds give us good data on agent LLMs and how much they go into power seeking mode. It will become clear that it is possible, if conditions are made to allow it, for an LLM agent to ‘take over’ a virtual world. Many will dismiss this saying that the world and agent had to be ‘designed for’ or that the tests are otherwise unfair. They won’t always be wrong but centrally they will be wrong.
23.  Versions of these worlds, in some form, will become the best known uses of VR, and VR will grow greatly in popularity as a result. There will be big pushes to go Actual Westworld, results will depend on tech things I don’t know about including robotics, and their progress, but even relatively bad versions will do.
24.  All of this will look silly and wrong and I’ll change my mind on a lot of it, likely by the end of May. Life comes at you fast these days. And that is assuming nothing else unexpected and crazier happens first, which is presumably going to be wrong as well.
