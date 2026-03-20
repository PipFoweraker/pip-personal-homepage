---
title: "On A List of Lethalities"
url: "https://thezvi.wordpress.com/2022/06/13/on-a-list-of-lethalities/"
source: "feedly"
sourceTitle: "Don't Worry About the Vase"
author: "TheZvi"
published: 2022-06-13
saved: 2022-06-13
category: "rationality"
tags:
  - "Consumer Insights"
  - "Artificial Intelligence"
  - "Deep Learning"
  - "Machine Learning"
status: "unreviewed"
layout: "reading.njk"
contentType: "full"
---

Response to (Eliezer Yudkowsky): [A List of Lethalities](https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities).

_Author’s Note: I do not work in AI Safety, lack technical domain knowledge and in many ways am going to be wrong. I wasn’t going to write this to avoid potentially wasting too much time all around without having enough to offer, and for fear of making stupid errors, but it was clear that many people thought my response would be valuable. I thank those whose anonymous sponsorship of this post both paid for my time and made me update that the post was worth writing. I would be happy for this to happen again in the future._ 

Eliezer has at long last delivered the definitive list of Eliezer Rants About Why AGI Will Definitely Absolutely For Sure Kill Everyone Unless Something Very Unexpected Happens.

This is excellent. In the past we had to make do with makeshift scattershot collections of rants. Now they are all in one place, with a helpful classification system. Key claims are in bold. We can refer, consider and discuss them.

It would be an even better post if it were more logically organized, with dependencies pointed out and mapped and so on. 

One could also propose making it not full of rants, but I _don’t_ think that would be an improvement. The rants are _important._ The rants contain _data._ They reveal Eliezer’s cognitive state and his assessment of the state of play. _Not_ ranting would leave important bits out and give a meaningfully misleading impression. 

I am reminded of [this comment of mine](https://www.lesswrong.com/posts/ax695frGJEzGxFBK4/?commentId=HB3BL3Sa6MxSszqdq) that I dug out of the archives, [on another Eliezer post](https://www.lesswrong.com/posts/ax695frGJEzGxFBK4/?commentId=HB3BL3Sa6MxSszqdq) that was both useful and enthused with this kind of attitude:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa45a7349-7204-4895-aa90-fc9a784c88cc_807x775.png)

[](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa45a7349-7204-4895-aa90-fc9a784c88cc_807x775.png)

Most of this applies again. Eliezer says explicitly that the alternative post would have been orders of magnitude harder to write, and that the attitude is important information.

I would expand this. _Not only_ are the attitude and repetition important information in terms of allowing you to understand the algorithm generating the post and create a better Inner Eliezer, but they _also_ are importantly illustrating _the cognitive world in which Eliezer is operating._

The fact that _this is the post we got,_ as opposed to a different (in many ways better) post, is a reflection of the fact that our Earth is failing to understand what we are facing. It is failing to look the problem in the eye, let alone make real attempts at solutions.

Eliezer is not merely talking to _you, yes you_ (with notably rare exceptions) when he does this. He is also saying _model the world as if it really is forcing him to talk like this_.

The only point above that doesn’t seem to apply here is #9.

The core message remains the most important thing. Conveying the core message alone would be a big win. But here it _also_ matters that people grasp as many of the individual points as possible, especially whichever of them happens to be the one bottlenecking their understanding of the scope and difficulty of the problem or allowing them to rationalize. 

Thus there needs to be a second version of the document that _someone else_ writes that contains the properly organized details without the ranting, for when that is what is needed. 

In terms of timelines, only ‘endgame’ timelines (where endgame means roughly ‘once the first team gets the ability to create an AGI capable of world destruction’) are mentioned in this post, because they are a key part of the difficulty and ‘how long it takes to get there’ mostly isn’t. Talk of _when_ AGI will kill us is distinct from talk of _how_ or _why_ it will, or _whether_ it will be built. That stuff was the subject of that other post, and it _doesn’t really matter_ in this context.

It is central to the doom claim that once one group can build an AGI, other groups also rapidly gain this ability. This forces humanity to solve the problem both _on the first try_ and also _quickly,_ a combination that makes an otherwise highly difficult but potentially solvable problem all but impossible. I find this plausible but am in no way confident in it.

I will also be assuming as a starting point the ability of at least one group somewhere to construct an AGI on some unspecified time frame.

### **Goals**

The goal of the bulk of the post is both to give my reactions to the individual claims and to attempt to organize them into a cohesive whole, and to see where my model differs from Eliezer’s even after I get access to his.

Rather than put the resulting summary results at the bottom, I’m going to put them at the top where they’ll actually get read, then share my individual reasoning afterwards because actually reasoning this stuff out out loud seems like The Way.

### **Summary of List, Agreements and Disagreements**

Some of what the post is doing is saying ‘here is a particular thing people say that is stupid and wrong but that people use as an excuse, and here is the particular thing I say in response to that.’ I affirm these one by one below.

More centrally, the post is generated by a very consistent model of the situation, so having thought about each individual statement a summary here is more like an attempt to recreate the model generating the points rather than the points themselves.

To the extent that I am _wrong_ about the contents of the generative model, that seems important to clarify.

I would say my takeaways are here, noting they are in a different order than where they appear in the post:

M1. Creating a powerful unsafe AGI quickly kills everyone. No second chances.

M2. The only known pivotal acts that stop the creation of additional powerful AGIs all require a powerful AGI. Weak systems won’t get it done.

M3. AGI will happen mostly on schedule unless stopped by such a pivotal act, whether or not it is safe. So not only do we only get one chance to solve the problem of alignment, we don’t get much time. Within two years of the first group’s ability to build an (unsafe) AGI, five more groups can do so including Facebook. Whoops.

M4. Powerful AGI is dramatically different and safety strategies that work on weak AGIs won’t work on powerful ones.

M5. Most safety ideas and most safety work are known to be useless and have no value in terms of creating safe powerful AGIs. All the usual suspects don’t work for reasons that are listed, and there are many reasons the problem is extremely difficult.

M6. We have no plan for how to do anything useful. No one who isn’t Eliezer seems capable of even understanding the problems well enough to explain them, and no one who can’t explain the problems is capable of nontrivially useful AI Safety work.

M7 (_not explicitly said but follows and seems centrally important)_. Most attempts to create AI Safety instead end up creating AI capability work, and the entire attempt has so far been net negative, and is likely net negative even if you exclude certain large obviously negative projects.

M8. We have no idea what the hell is going on with these systems. Even if we did, that would break down once we started using observations while training AIs.

M9.The problem would _still_ be solvable if a failed attempt didn’t kill everyone and we had enough time. We get neither. Attempts that can’t kill you aren’t real attempts and don’t tell you if your solution works.

M10 (_let’s just say it_). Therefore, DOOM.

That is my summary. As Eliezer notes, different people will need to hear or learn different parts of this, and would write different summaries.

Based on this summary, which parts do I agree with? Where am I skeptical?

For all practical purposes I _fully agree_ with M1, M4, M5, M7 (!) and M9.

For all practical purposes I _mostly agree_ with M2, M6 and M8, but am less confident that the situations are as extreme as described. 

For M2 I hold out hope that an as-yet-unfound path could be found. 

For M6 I do not think we can be so confident there aren’t valuable others out there (although obviously not as many as we need/want).

For M8, I do not feel I am in a position to evaluate our future ability to look inside the inscrutable matrixes enough to have so little hope.

For M10, I agree that M10 follows from the M1-M9, and unconditionally agree that there is a highly unacceptable probability of doom even if all my optimistic doubts are right.

I am least convinced of M3. 

M3 matters a lot. M3 is stated most directly in Eliezer’s #4, where a proof is sketched:

> **#4**.  **We can’t just “decide not to build AGI”** because GPUs are everywhere, and knowledge of algorithms is constantly being improved and published; 2 years after the leading actor has the capability to destroy the world, 5 other actors will have the capability to destroy the world.

In particular, I question the assumption that incremental improvement in the knowledge of algorithms and access to GPUs is sure to be sufficient to generate AGI, or that there is no plausible hard step or secret sauce that could buy you a substantial lead without being published or stolen immediately in a way that invalidated that lead, and that there is no possibility of a flat out ‘competence gap’ or capacity gap of some kind that matters, and that essentially unlimited numbers of additional efforts will necessarily be close behind.

This also seems closely related to #22’s claim that there is a simple core to general intelligence, which I am also not yet convinced about.

Thus, I am neither convinced that doom is coming especially quickly, nor that it will involve an AGI that looks so much like our current AIs, nor am I convinced that the endgame window will be as short as the post assumes.

I do agree that this scenario is _possible,_ and has non-trivial probability mass. That is more than enough to make the current situation unacceptable, but it is important to note where one is and is not yet convinced.

I do agree that you likely don’t _know_ how much time you have, even if you think you may have more time.

I strongly agree that creating an aligned AI is harder, probably much harder, than creating an unaligned AI, that it requires additional work and additional time if it can be done at all, and that if it needs to be done both quickly and without retries chances of success seem extremely low.

I have a lot of other questions, uncertainties, brainstorms and disagreements in the detail section below, but those are the ones that _matter_ for the core conclusions and implications.

Even if those ‘optimistic doubts’ proved true, _mostly_ it doesn’t change what needs to be done or give us an idea of how to do it.

### **Preamble**

\-3: Yes, both the [orthogonality thesis](https://arbital.com/p/orthogonality/) and [instrumental convergence](https://arbital.com/p/instrumental_convergence/) are true.

\-2: When we say Alignment at this point we mean something that can carry out a pivotal task that prevents the creation of another AGI while having less than a 50% chance of killing a billion people. Anything short of mass death, and we’ll take it.

\-1: The problem is so difficult because we need to solve the problem on the first critical try on a highly limited time budget. The way humans typically solve hard problems involves taking time and failing a lot, which here would leave us very dead. If we had time (say 100 years) and unlimited retries the problem is still super hard but (probably?) eminently solvable by ordinary human efforts.

### **Section A**

> 1\. AGI will not be upper-bounded by human ability or human learning speed. Things much smarter than human would be able to learn from less evidence than humans require.
> 
> …
> 
> It is not naturally (by default, barring intervention) the case that everything takes place on a timescale that makes it easy for us to react.

Yes, obviously.

This is a remarkably soft-pedaling rant. Given sufficient processing power, anything the AGI can learn from what data it has is something it already knows. Any skill it can develop is a skill it already has.

> 2.  A cognitive system with sufficiently high cognitive powers, given any medium-bandwidth channel of causal influence, will not find it difficult to bootstrap to overpowering capabilities independent of human infrastructure.
> 
> …
> 
> Losing a conflict with a high-powered cognitive system looks at least as deadly as “everybody on the face of the Earth suddenly falls over dead within the same second”.

Yes, obviously.

If you don’t like the nanotech example (as some don’t), ignore it. It’s not important. A sufficiently intelligent system that is on the internet or can speak to humans simply wins, period. The question is what counts as sufficiently intelligent, not whether there is a way.

> 3.  We need to get alignment right on the ‘first critical try’ at operating at a ‘dangerous’ level of intelligence, where unaligned operation at a dangerous level of intelligence kills everybody on Earth and then we don’t get to try again.

Yes, obviously this is the default outcome.

If it’s smart enough to figure out how to do things that prevent other AGIs it is also almost certainly smart enough to figure out how to kill us and by default that is going to happen because it makes it easier to achieve the AGI’s goals whatever they are.

I can see arguments for why the chance you get a second shot is not zero, but it is very low.

> 4.  We can’t just “decide not to build AGI” because GPUs are everywhere, and knowledge of algorithms is constantly being improved and published; 2 years after the leading actor has the capability to destroy the world, 5 other actors will have the capability to destroy the world. 

This is NOT obvious to me.

This is making assumptions about what physically results in AGI and how information develops and spreads. I notice I don’t share those assumptions.

It seems like this is saying either that there are no ‘deep insights’ left before AGI, or that any such deep insights will either (A) inevitably happen in multiple places one after another or (B) will inevitably leak out quickly in a form that can be utilized.

It also says that there won’t be a big ‘competence gap’ between the most competent/advanced group and 6th such group, so within 2 years the others will have caught up. That there won’t be any kind of tacit knowledge or team skill or gap in resources or willingness to simply do the kind of thing in question at the sufficient level of scale, or what have you.

I do not see why this should be expected with confidence. 

Yes, we have seen AI situations in which multiple groups were working on the same problem, most recently image generation from a text prompt, and finished in similar time frames. It can happen, especially for incremental abilities that are mostly about who feels like spending compute and manpower on improving at a particular problem this year instead of last year or next year. And yes, we have plenty of situations in which multiple start-ups were racing for a new market, or multiple scientists were racing for some discovery, or whatnot.

We also have plenty of situations in which there was something that could have been figured out at any time, and it just kind of wasn’t for quite a while. Or where something was being done quite stupidly and badly for a very long time. Or where someone figured something out, tried to tell everyone about their innovation, and everyone both ignored them and didn’t figure it out on their own for a very long time.

Certainly a substantial general capacity advantage, or a capacity advantage in the place that turns out to matter, seems highly plausible to me. 

From his other writings it is clear that a lot of this is Eliezer’s counting on the code being stolen and that it will be possible to remove whatever safeties are in place. I agree with the need for real security to prevent this when the time comes and the worry that scale may make such security unrealistic and expensive, but also this assumes a kind of competence from the people knowing to steal the code, and also a competence that they can use what they steal, whereas I’m done assuming such competencies will exist at all.

I’m not saying the baseline scenario here is _impossible_ or even all that unlikely, but it seems quite possible for it not to be the case, or at least for the numbers quoted above to not be. 

That doesn’t solve the problem of the underlying dynamic. There is still _some_ time limit. Even if there is a good chance that you can indeed ‘decide not to build AGI’ for a while, there is still a continuous risk that you are wrong about that, and there are still internal pressures not to wait for other reasons, and all that.

> **5**.  **We can’t just build a very weak system**, which is less dangerous because it is so weak, and declare victory; because later there will be more actors that have the capability to build a stronger system and one of them will do so.  I’ve also in the past called this the ‘safe-but-useless’ tradeoff, or ‘safe-vs-useful’.  People keep on going “why don’t we only use AIs to do X, that seems safe” and the answer is almost always either “doing X in fact takes very powerful cognition that is not passively safe” or, even more commonly, “because restricting yourself to doing X will not prevent Facebook AI Research from destroying the world six months later”.

Fundamentally, yes. You either do a pivotal act that stops other AGIs from being constructed or you don’t. Doing one requires non-safe cognition. Not doing one means someone else creates non-safe cognition. No good.

> **6**.  **We need to align the performance of some large task, a ‘pivotal act’ that prevents other people from building an unaligned AGI that destroys the world.**  While the number of actors with AGI is few or one, they must execute some “pivotal act”, strong enough to flip the gameboard, using an AGI powerful enough to do that.  It’s not enough to be able to align a _weak_ system – we need to align a system that can do some single _very large thing._  The example I usually give is “burn all GPUs”.
> 
> …

Yes. I notice I skipped ahead to this a few times already. I probably would have moved the order around.

> It takes a lot of power to do something to the current world that prevents any other AGI from coming into existence; nothing which can do that is passively safe in virtue of its weakness.
> 
> **7\. There are no pivotal weak acts**.

I am not as convinced that there don’t exist pivotal acts that are importantly easier than directly burning all GPUs (after which I might or might not then burn most of the GPUs anyway). There’s no particular reason _humans_ can’t perform dangerous cognition _without_ AGI help and do some pivotal act on their own, our cognition is not exactly safe. But if I did have such an idea that I thought would work I wouldn’t write about it, and it most certainly wouldn’t be in the Overton window. Thus, I do not consider the failure of our public discourse to generate such an act to be especially strong evidence that no such act exists.

> 8.  The best and easiest-found-by-optimization algorithms for solving problems we want an AI to solve, readily generalize to problems we’d rather the AI not solve

Yes, obviously.

> **9**.  The builders of a safe system, by hypothesis on such a thing being possible, would need to operate their system in a regime where it has the _capability_ to kill everybody or make itself even more dangerous, but has been successfully designed to not do that.  **Running AGIs doing something pivotal are not passively safe,** they’re the equivalent of nuclear cores that require actively maintained design properties to not go supercritical and melt down.

Yes, obviously, for the combined human-AI system doing the pivotal thing. Again, one can imagine putting all the unsafe cognition ‘into the humans’ in some sense.

### **Section B.1**

> 10\. On anything like the standard ML paradigm, you would need to somehow generalize optimization-for-alignment you did in safe conditions, across a big distributional shift to dangerous conditions.
> 
> …
> 
> Powerful AGIs doing dangerous things that will kill you if misaligned, must have an alignment property that generalized far out-of-distribution from safer building/training operations that didn’t kill you.  This is where a huge amount of lethality comes from on anything remotely resembling the present paradigm.
> 
> …
> 
> _10a._ Note that anything substantially smarter than you poses a threat given _any_ realistic level of capability.  Eg, “being able to produce outputs that humans look at” is probably sufficient for a generally much-smarter-than-human AGI to [navigate its way out of the causal systems that are humans](https://www.yudkowsky.net/singularity/aibox), especially in the real world where somebody trained the system on terabytes of Internet text, rather than somehow keeping it ignorant of the latent causes of its source code and training environments.

Yes. 10 seems transparently and obviously true, yet it does need to be said explicitly.

I am labeling 10a because I consider it an important sub-claim, one that I am _highly_ confident is true. A much-smarter-than-human AGI capable of getting its text read by humans will be able to get those humans to do what it wants, period. This is one of those no-it-does-not-seem-wise-to-explain-why-I-am-so-confident-this-is-true situations so I won’t, but I am, again, very confident.

> 11\. There is no pivotal act this weak; **there’s no known case where you can entrain a safe level of ability on a safe environment where you can cheaply do millions of runs, and deploy that capability to save the world** and prevent the next AGI project up from destroying the world two years later.  Pivotal weak acts like this aren’t known, and not for want of people looking for them.
> 
> …
> 
> You don’t get 1000 failed tries at burning all GPUs – because people will notice, even leaving out the consequences of capabilities success and alignment failure.

There certainly isn’t a _publicly known_ such act that could possibly be implemented, and there has definitely been a lot of public searching for one. It doesn’t seem impossible that an answer exists and that those who find it don’t say anything for very good reasons. Or that ‘a lot of trying to do X and failing’ is surprisingly weak evidence that X is impossible, because the efforts are correlated in terms of their blind spots.

> **12**.  **Operating at a highly intelligent level is a drastic shift in distribution from operating at a less intelligent level**, opening up new external options, and probably opening up even more new internal choices and modes.  Problems that materialize at high intelligence and danger levels may fail to show up at safe lower levels of intelligence, or may recur after being suppressed by a first patch.

Yes, yes, we said that already.

> **13**.  **Many alignment problems of superintelligence will not naturally appear at pre-dangerous, passively-safe levels of capability**.  Consider the internal behavior ‘change your outer behavior to deliberately look more aligned and deceive the programmers, operators, and possibly any loss functions optimizing over you’.  This problem is one that will appear at the superintelligent level; if, being otherwise ignorant, we guess that it is among the _median_ such problems in terms of how _early_ it naturally appears in earlier systems, then around _half_ of the alignment problems of superintelligence will first naturally materialize _after_ that one first starts to appear.

On the headline statement, yes, yes, again, didn’t we say that already?

The example is definitely a danger at the superhuman level, but it seems like it is also a danger at the human level. [Have… you met humans](https://www.youtube.com/watch?v=jZNyqh8BPQI&ab_channel=OscarStinson)? Also have you met dogs and cats, definitely sub-human intelligences? This is not an especially ‘advanced’ trick.

This makes sense, because figuring out that a problem that _doesn’t_ exist at human levels _will_ exist at superhuman levels seems difficult by virtue of the people thinking about the problem being humans. We can figure out things that current systems maybe aren’t doing, like ‘pretend to be aligned to fool creators’ because _we are intelligent systems that do these things._ And that seems like a problem it would be _very easy_ to get to materialize early, in an actually safe system, because again existence proof and also it seems obvious _how_ to do it. That doesn’t mean I know how to solve the problem, but I can make it show up.

What are the problems that _don’t_ show up in sub-human AI systems and also don’t show up in humans because we can’t think of them? I don’t know. I can’t think of them. That’s why they don’t show up.

Thus, to the extent that we can talk about there being distinct alignment problems like this that one can try to anticipate and solve, the nasty ones that only show up in the one-shot final exam are going to be things that _we are not smart enough to think of_ and thus we can’t prepare for them. Which means we need a _general_ solution, or else we’re hoping there are no such additional problems.

> **14**.  **Some problems**, like ‘the AGI has an option that (looks to it like) it could successfully kill and replace the programmers to fully optimize over its environment’, **seem like their natural order of appearance could be that they first appear only in fully dangerous domains**.
> 
> …
> 
> Trying to train by gradient descent against that behavior, in that toy domain, is something I’d expect to produce not-particularly-coherent local patches to thought processes, which would break with near-certainty inside a superintelligence generalizing far outside the training distribution and thinking very different thoughts.  Also, programmers and operators themselves, who are used to operating in not-fully-dangerous domains, are operating out-of-distribution when they enter into dangerous ones; our methodologies may at that time break.

Being able to somehow take control and override the programmers to take control of the reward function is, again, something that humans essentially do all the time. It is coming. The question is will fixing it in a relatively safe situation lead to a general solution to the problem?

My presumption is that if someone goes in with the goal of ‘get this system to stop having the problem’ the solution found has almost zero chance of working in the dangerous domain. If your goal is to actually figure out what’s going on in a way that might survive, then maybe there’s _some_ chance? Still does not seem great. The thing we look to prevent may not meaningfully interact with the thing that is coming, at all.

> **15**.  **Fast capability gains seem likely, and may break lots of previous alignment-required invariants simultaneously.**  Given otherwise insufficient foresight by the operators, I’d expect a lot of those problems to appear approximately simultaneously after a sharp capability gain.  See, again, the case of human intelligence.

Yes.

When I said ‘yes’ above I wasn’t _at all_ relying on the example of human intelligence, or the details described later, but I’m going to quote it in full because this is the first time it seems like an especially valuable detailed explanation.

> We didn’t break alignment with the ‘inclusive reproductive fitness’ outer loss function, immediately after the introduction of farming – something like 40,000 years into a 50,000 year Cro-Magnon takeoff, as was itself running very quickly relative to the outer optimization loop of natural selection.  Instead, we got a lot of technology more advanced than was in the ancestral environment, including contraception, in one very fast burst relative to the speed of the outer optimization loop, late in the general intelligence game.  We started reflecting on ourselves a lot more, started being programmed a lot more by cultural evolution, and lots and lots of assumptions underlying our alignment in the ancestral training environment broke simultaneously. 
> 
> (People will perhaps rationalize reasons why this abstract description doesn’t carry over to gradient descent; eg, “gradient descent has less of an information bottleneck”.  My model of this variety of reader has an inside view, which they will label an outside view, that assigns great relevance to some other data points that are _not_ observed cases of an outer optimization loop producing an inner general intelligence, and assigns little importance to our one data point actually featuring the phenomenon in question.  When an outer optimization loop actually produced general intelligence, it broke alignment after it turned general, and did so relatively late in the game of that general intelligence accumulating capability and knowledge, almost immediately before it turned ‘lethally’ dangerous relative to the outer optimization loop of natural selection.  Consider skepticism, if someone is ignoring this one warning, especially if they are not presenting equally lethal and dangerous things that they say will go wrong instead.)

I both agree that the one data point is not being given enough respect, and also don’t think you need the data point. There are going to be a whole lot of things that are true about a system when the system is insufficiently intelligent/powerful that won’t be true when the system gets a lot more intelligent/powerful and some of them are things you did not realize you were relying upon. It’s going to be a problem.

### **Section B.2**

> 16\. Even if you train really hard on an exact loss function, that doesn’t thereby create an explicit internal representation of the loss function inside an AI that then continues to pursue that exact loss function in distribution-shifted environments
> 
> …
> 
> outer optimization even on a very exact, very simple loss function doesn’t produce inner optimization in that direction. 
> 
> This happens _in practice in real life,_ it is what happened in _the only case we know about_, and it seems to me that there are deep theoretical reasons to expect it to happen again

Yes. It won’t do that, not if your strategy is purely to train on the loss function. There is no reason to expect it to happen. So don’t do that. Need to do something else.

> 17\. In the current optimization paradigm there is no general idea of how to get particular inner properties into a system, or verify that they’re there, rather than just observable outer ones you can run a loss function over.

I think we have _some_ ability to verify if they are there? As in, Chris Olah and a few others have made enough progress that at least some current-paradigm systems for which they can identify some of the inner properties of the system, with expectation of more in the future. They have no idea how to choose or cause those properties that I know about, but there’s at least some hope for some observability.

If you can observe it, you can at least in theory train on it as well, although that risks training the AI to make your observation method stop working? As in, suppose you have a classifier program. From my conversations, it sounds like at least sometimes you can say ‘this node represents whether there is a curve here’ or whatever. If you can do that, presumably (at least in theory) you can then train or do some sort of selection on whether or not that sort of thing is present and in what form, and iterate, and you can have at least some say over how the thing you eventually get is structured within the range of things that could possibly emerge from your loss function, or something. There are other things I can think of to try as well, which of course are probably obvious nonsense, or worse nonsense just non-obvious enough to get us all killed, but you never know.

> 18\. There’s no reliable Cartesian-sensory ground truth (reliable loss-function-calculator) about whether an output is ‘aligned’, because some outputs destroy (or fool) the human operators and produce a different environmental causal chain behind the externally-registered loss function.

Yes, that is a thing. You are in fact hoping that it importantly _doesn’t_ optimize too well for what reward signal it gets and instead optimizes on your intent. That seems hard.

> **19**.  More generally, **there is no known way to use the paradigm of loss functions, sensory inputs, and/or reward inputs, to optimize anything within a cognitive system to point at particular things within the environment** – to point to _latent events and objects and properties in the environment,_ rather than _relatively shallow functions of the sense data and reward._

Yes, I did realize that you’d said this already, but also it’s seeming increasingly weird and like something you can overcome? As in, sure, you’ll need to do something innovative to make this work and it’s important to note that a lot of work has been done and no one’s done it yet and that is quite a bad sign, but… still?

> **20**.  Human operators are fallible, breakable, and manipulable.  **Human raters make systematic errors – regular, compactly describable, predictable errors**.  To _faithfully_ learn a function from ‘human feedback’ is to learn (from our external standpoint) an unfaithful description of human preferences, with errors that are not random (from the outside standpoint of what we’d hoped to transfer).  If you perfectly learn and perfectly maximize _the referent of_ rewards assigned by human operators, that kills them. It’s a fact about the territory, not the map – about the environment, not the optimizer – that the _best predictive_ explanation for human answers is one that predicts the systematic errors in our responses, and therefore is a psychological concept that correctly predicts the higher scores that would be assigned to human-error-producing cases.

I worry that there’s a leap in here and it’s taking the principle of ‘almost every possible AGI kills you’ too far. In general, I am _totally on board_ with the principle that almost every possible AGI kills you. Most of the time that the post says ‘so it kills you’ this is definitely the thing that happens next if the previous things did indeed take place.

If by ‘fool the operators’ we mean things like ‘take control of the operators and implant a chip in their head’ then yes, there is that, but that doesn’t seem like what is being described here. What is being described here is your friendly neighborhood AGI that wants you to like its output, to really like it, so it tells you what you will be happy to hear every time even if the results would be quite bad.

Does that kill you (as in, kill everyone)?

It certainly _could_ kill you. Certainly it will intentionally choose errors over correct answers in some situations. But so will humans. So will politicians. We don’t exactly make the best possible decisions or avoid bias in our big choices. This seems like a level of error that is often going to be survivable. It depends on how the humans rely on it and if the humans know to avoid situations in which this will get them killed.

I believe that if you gave Eliezer or myself the job of using an AGI that was aligned _exactly_ to the evaluations of its output by a realistically assembled team of human evaluators _on an individual answer basis,_ as in it wasn’t trained to play a long game to get stronger future evaluations and was merely responding to human bias, that this would be good enough for Eliezer’s threshold of alignment – we would be a favorite to successfully execute a pivotal act without killing a billion or more people.

That doesn’t mean this isn’t a problem. This is _much worse_ a scenario than if the AGI was somehow magically aligned to what we _should_ in some sense rate its output, and this is going to compound with other problems, but solving _every problem except this one_ does seem like it would bring us home.

> There’s something like a single answer, or a single bucket of answers, for questions like ‘What’s the environment really like?’ and ‘How do I figure out the environment?’ and ‘Which of my possible outputs interact with reality in a way that causes reality to have certain properties?’, where a simple outer optimization loop will straightforwardly shove optimizees into this bucket. 
> 
> When you have a wrong belief, reality hits back at your wrong predictions.  When you have a broken belief-updater, reality hits back at your broken predictive mechanism via predictive losses, and a gradient descent update fixes the problem in a simple way that can easily cohere with all the other predictive stuff. 
> 
> In contrast, when it comes to a choice of utility function, there are unbounded degrees of freedom and multiple reflectively coherent fixpoints.  Reality doesn’t ‘hit back’ against things that are locally aligned with the loss function on a particular range of test cases, but globally misaligned on a wider range of test cases.
> 
> …
> 
> 21\. The central result:  **Capabilities generalize further than alignment once capabilities start to generalize far**.

Yes, although not obviously. The explanation in this bullet point is very non-intuitive to me. That’s assuming I actually grok it correctly, which I _think_ I did after reflection but I’m not sure. It’s certainly not how I would think about or explain the conclusion at all, nor am I convinced the reasoning steps are right.

When you have a wrong belief that causes wrong predictions, you might or might not end up with a loss function that needs correction. It happens if the wrong predictions are inside the training set (or ancestral environment) and also have consequences that impact your loss function, which not all errors do. The argument is some combination of (A) that optimizing for local capabilities is more inclined to produce a generalizable solution than optimizing for local alignment, and (B) that you are likely to get alignment ‘wrong’ via aligning to a proxy measure in a way that will prove very wrong outside the training set and get you killed and will be in a utility function that will be fixed in place, whereas the capabilities can continue to adjust and improve in addition to your proxy measures being less likely to break.

Both arguments do seem largely right, or at least likely enough to be right that we should presume they are probably right in practice when it counts.

> **22**.  There’s a relatively simple core structure that explains why complicated cognitive machines work; which is why such a thing as general intelligence exists and not just a lot of unrelated special-purpose solutions; which is why capabilities generalize after outer optimization infuses them into something that has been optimized enough to become a powerful inner optimizer.  The fact that this core structure is simple and relates generically to [low-entropy high-structure environments](https://intelligence.org/2017/12/06/chollet/) is why humans can walk on the Moon.  **There is no analogous truth about there being a simple core of alignment,** especially not one that is _even easier_ for gradient descent to find than it would have been for natural selection to just find ‘want inclusive reproductive fitness’ as a well-generalizing solution within ancestral humans.  Therefore, capabilities generalize further out-of-distribution than alignment, once they start to generalize at all.

Probably, but seems overconfident. Certainly natural selection did not find one, but that is far from an impossibility proof. General intelligence turned out to be, in a broad sense, something that could be hill climbed towards, which wasn’t true for some sort of stricter alignment. Or at least, it is not true _yet._ This is one of those problems that seems like it kind of _didn’t come up_ for natural selection until quite recently.

A simple general core alignment, that fixes things properly in place in a way that matters, could easily have been _quite the large handicap_ over time until very recently by destroying degrees of freedom.

The same way that we don’t need to align our current weaker AIs in ways that would be relevant to aligning strong AIs, nor would there have been much direct benefit to doing so, the same seems like it should hold true for everything made by natural selection until humans, presumably until civilization, and plausibly until industrial civilization or even later than that. At what point were people ‘smart enough’ in some sense, with enough possible out-of-sample plays, where ‘want inclusive reproductive fitness’ as an explicit goal would have started to outcompete the alternatives rather than some of that being part of some sort of equilibrium situation?

(I mean, yes, we _do_ need to align _current_ AIs (that aren’t AGIs) operating in the real world and our failure to do so is causing major damage _now,_ but again at least this is a case of it being bad but not killing us _yet_._)_

It took natural selection quite a long time in some sense to find general intelligence. How many cycles has it had to figure out a simple core of alignment, provided one exists?

We don’t know about a simple core of alignment. One might well not exist even in theory, and it would be good for our plan not to be counting on finding one. Still, one might be out there to be found. Certainly one _on the level of complexity of general intelligence_ seems plausibly out there to be found slash seems highly likely _to not have already been found by natural selection_ if it existed, and I don’t feel our current level of work on the problem is conclusive either – it’s more like there are all these impossible problems it has to solve, which are all the other points, and that’s the primary reason to be pessimistic about this.

> **23**.  **Corrigibility is anti-natural to consequentialist reasoning**; “you can’t bring the coffee if you’re dead” for almost every kind of coffee.  We (MIRI) [tried and failed](https://www.lesswrong.com/posts/5bd75cc58225bf0670374f04/forum-digest-corrigibility-utility-indifference-and-related-control-ideas) to find a coherent formula for an agent that would let itself be shut down (without that agent actively trying to get shut down).  Furthermore, many anti-corrigible lines of reasoning like this may only first appear at high levels of intelligence.

Yes. I too have found this to be one of the highly frustrating things to watch people often choose not to understand, or pretend not to understand (or, occasionally, actually not understand).

Corrigibility really, really isn’t natural, it’s super weird, it very much does not want to happen. This problem is very hard, and failing to solve it makes all the other problems harder.

I want to emphasize here, like in a few other places, that 99%+ of all people need to take in the message ‘corrigibility is anti-natural and stupidly hard’ rather than the other way around.

However, I am in sharing my thoughts and reactions and models mode, and while 99% of people need to hear one thing the remaining people end up being rather important, so: while not fooling myself in any way that this isn’t close to impossible, the good news is that I still kind of see this as something that is _less impossible_ than some other impossible things, especially if we follow the highly useful ‘in the one case we know about’ principle and look at humans, we _do_ see some humans who are functionally kind of corrigible in the ways that matter here, and I don’t _think_ it involves having those humans believe a false thing (I mean they do, all humans do anyway, which could be doing a lot of the work, but that doesn’t seem like the central tech here).

The technology (in humans) is that the human values _the continued well-functioning of the procedure that generates the decision whether to shut them down_ more than they care about whether the shut down occurs in worlds where they are shut down. Perhaps because the fact that the humans are shutting them down is evidence that they should be shut down, whereas engineering the humans to shut them down wouldn’t provide that evidence.

They will still do things within the rules of the procedure to convince you not to shut them down, but if you manage to shut them down anyway, they will abide by that decision. And they will highly value passing this feature on to others.

This corrigibility usually has its limits, in particular it breaks down when you talk about making the human _dead_ or otherwise causing them to expect sufficiently dire consequences, either locally or globally.

Is the Constitution a suicide pact? It wouldn’t work if it wasn’t willing to be _a little bit_ a suicide pact. It’s also obviously not fully working in the sense that it isn’t a suicide pact, and almost no one has any intention of letting it become one in a sufficiently obvious pinch. As a fictional and therefore clean example, consider the movie [Black Panther](https://en.wikipedia.org/wiki/Black_Panther_\(film\)) – should you let yourself be challenged and shut down in this spot, given the consequences, because the rules are the rules, despite the person you’re putting in charge of those rules clearly having no inclination to care about those rules?

Thus, the utility function that combines ‘the system continuing to persevere is super important’ with the desire for other good outcomes is, under the hood, profoundly weird and rather incoherent, and very anti-natural to consequentialist reasoning. I have no doubt that the current methods would break down if tried in an AGI.

Which makes me wonder the extent to which the consequentialist reasoning is going too far and thus part of the problem that needs to be solved, but I don’t see how to get us out of this one yet, even in theory, without making things much worse.

In any case, I’m sure that is all super duper amateur hour compared to the infinite hours MIRI spent on this particular problem, so while I’m continuing my pattern of not giving up on the problem or declaring it unsolvable it is almost certainly not easy.

> **24**.  There are two fundamentally different approaches you can potentially take to alignment, which are unsolvable for two different sets of reasons; therefore, **by becoming confused and ambiguating between the two approaches, you can confuse yourself about whether alignment is necessarily difficult**. 
> 
> The first approach is to build a CEV-style Sovereign which wants exactly what we extrapolated-want and is therefore safe to let optimize all the future galaxies without it accepting any human input trying to stop it. 
> 
> The second course is to build corrigible AGI which doesn’t want exactly what we want, and yet somehow fails to kill us and take over the galaxies despite that being a convergent incentive there.

I am basically a CEV skeptic, in the sense that my model of Eliezer thinks it is impossible to implement on the first try but if you did somehow implement it then it would work. Whereas I think that not only is the problem impossible but also if you solved the impossible problem I am predicting a zero-expected-value outcome _anyway_. I don’t even think the impossible thing works _in theory,_ at least as currently theorized.

Whereas I’m a mild corrigibility optimist in the sense that I do recognize it’s an impossible problem but it does at least seem like a relatively solvable impossible problem even if attempts so far have not gotten anywhere.

I’m also not convinced that the get-it-right-on-first-try approach has to go through CEV, but details there are both beyond scope of the question here and also I’m likely very out of my depth, so I’ll leave that at that.

I haven’t experienced that much frustration on _this particular_ dilemma, where people don’t know if they’re trying to get things right on the first try or they’re trying to solve corrigibility, but that’s probably because I’ve never fully been ‘in the game’ on this stuff, so I consider that a blessing. I do not doubt the reports of these ambiguations.

### **Section B.3**

> **25**.  **We’ve got no idea what’s actually going on inside the giant inscrutable matrices and tensors of floating-point numbers**.  Drawing interesting graphs of where a transformer layer is focusing attention doesn’t help if the question that needs answering is “So was it planning how to kill us or not?”

Yes, at least for now this is my understanding as well.

I have never attempted to look inside a giant inscrutable matrix. Even if we did have _some_ idea what is going on inside in some ways, that does not tell us whether the machine is trying to kill us. And if we could look inside and tell, all we’d be doing is teaching the machine to figure out how to hide from our measurements that it was trying to kill us, or whatever else it was up to that we didn’t like, including hiding that it was hiding anything. So there’s that.

I have heard claims that interpretability is making progress, that we have _some_ idea about _some_ giant otherwise inscrutable matrices and that this knowledge is improving over time. I do not have the bandwidth that would be required to evaluate those claims and I don’t know how much usefulness they might have in the future.

> **26**.  Even if we did know what was going on inside the giant inscrutable matrices while the AGI was still too weak to kill us, this would just result in us dying with more dignity, if DeepMind refused to run that system and let Facebook AI Research destroy the world two years later.  **Knowing that a medium-strength system of inscrutable matrices is planning to kill us, does not thereby let us build a high-strength system of inscrutable matrices that isn’t planning to kill us**.

Yes to the bold part. It does tell us one machine _not_ to build, it certainly _helps,_ but it doesn’t tell us how to fix the problem even if we get that test right somehow.

The non-bold part depends on the two-years thesis being true, but follows logically if you think that FAIR is always within two years of DeepMind and so on.

I cannot think of any death I want less than to be killed by Facebook AI research. Please, seriously, _anyone else._

> **27**.  When you explicitly optimize against a detector of unaligned thoughts, you’re partially optimizing for more aligned thoughts, and partially optimizing for unaligned thoughts that are harder to detect.  **Optimizing against an interpreted thought optimizes against interpretability**.

Yes, obviously, I accidentally covered that already. I see why it had to be said out loud.

> **28**.  The AGI is smarter than us in whatever domain we’re trying to operate it inside, so we cannot mentally check all the possibilities it examines, and we cannot see all the consequences of its outputs using our own mental talent.  **A powerful AI searches parts of the option space we don’t, and we can’t foresee all its options**.

Yes to the bold text, obviously, and also yes to the implications by default.

If nothing else, an attempt to check the output of the AGI _means that we are checking the output of the AGI,_ and as I noted previously that means it can communicate with humans, and it is a strong part of my core model that this should be assumed to be sufficient for a sufficiently generally powerful non-aligned AGI to manipulate the humans more generally, no matter the situation in any particular domain, although I can see bandwidth limitations that could make this less obvious slash raise the bar a lot for what would count as sufficiently powerful.

We can’t check all the possibilities it examines, but is it obvious we can’t see the consequences of its outputs using our own mental talent? That is potentially a fundamentally easier problem than generating or evaluating the possibilities.

Consider mathematics, a classic place people attempt to do something ‘safe’ with AGI. It is _much_ easier to verify a proof than it is to generate that same proof, and requires a much lower level of intelligence and compute. It seems entirely plausible that the AGI is vastly better at math than Terrance Tao, can prove things in ways Tao didn’t consider while occasionally cheating a bit on one of the steps, but Tao can still look over the proofs and say ‘yes, that’s right’ when they are right and ‘no, that’s cheating’ when they aren’t, and be right.

There are plenty of more practical, more dangerous domains where that is also the case. Tons of problems are of the form ‘There was essentially zero hope that I would have generated this course of action, but now that you propose it I understand what it would do and why it is or isn’t a good idea.’

Nanotech and protein folding, which is used in the post as the canonical default unsafe thing to do, seem like areas where this is _not_ the case. There are plenty of times when _by far_ the most efficient thing to do, if you trust the AGI, is _not_ to check all the consequences of its output, and it is highly plausible that pivotal acts require trusting the AGI in this way for all solutions we have found so far. The existence of exceptions doesn’t ‘get us out’ of the core problem here, but it seems important to be precise.

> **29**.  The outputs of an AGI go through a huge, not-fully-known-to-us domain (the real world) before they have their real consequences.  **Human beings cannot inspect an AGI’s output to determine whether the consequences will be good**.

Yes, obviously, for outputs that are sufficiently relevant to our interests here, and we can’t use the ones where we _can_ know the consequences to know what would happen when we can’t. What we _can_ potentially do with outputs is sometimes know _what those particular outputs_ would do, at the cost of severe limitation, and also again _we are reading outputs of an AGI_ which is a very bad idea if it isn’t aligned.

> 30\. **There is no pivotal output of an AGI that is humanly checkable and can be used to safely save the world but only after checking it**; this is another form of pivotal weak act which does not exist.

This is the rub of the whole section. There exist outputs that are humanly checkable. There exist outputs that are humanly checkable but not in practice humanly generatable. The claim is that no combination of such outputs can enable a pivotal act.

If true, then performing a pivotal act requires trusting the AGI, which means we will have to trust the AGI, despite having no reason to think this would be anything but the worst possible idea and no path to making it otherwise.

It is clear that no one has figured out how to avoid this, or at least no one willing to talk about it, despite quite a bit of trying. It is highly plausible that there is no solution. I continue not to be _convinced_ there exists no solution.

I also know that if I thought I had such an act, it is highly plausible I would take one look at it and say ‘I am _not_ talking about that in public, absolutely not, no way in hell.’

> **31**.  A strategically aware intelligence can choose its visible outputs to have the consequence of deceiving you, including about such matters as whether the intelligence has acquired strategic awareness; **you can’t rely on behavioral inspection to determine facts about an AI which that AI might want to deceive you about**.  (Including how smart it is, or whether it’s acquired strategic awareness.)

Yes, obviously. Same as a human, except (when it matters most) smarter about it. And anything internal you observe also becomes an output that it can do this on, as well.

> **32**.  Human thought partially exposes only a partially scrutable outer surface layer.  Words only trace our real thoughts.  Words are not an AGI-complete data representation in its native style.  The underparts of human thought are not exposed for direct imitation learning and can’t be put in any dataset.  **This makes it hard and probably impossible to train a powerful system entirely on imitation of human words or other human-legible contents**, which are only impoverished subsystems of human thoughts; **_unless_ that system is powerful enough to contain inner intelligences figuring out the humans**, and at that point it is no longer really working as imitative human thought.

Yes, except perhaps for the last bit after the bold.

Humans themselves contain inner intelligences figuring out humans. Relative to other tasks we are remarkably good at this one. If your goal was to train a powerful system, and your method was to have the system do so on language while in some sense figuring out the humans, that doesn’t sound like it means you can’t be imitating human thought? Especially since if the goal was to imitate human words, you’d potentially want to be _imitating the human interpretations of humans_ rather than _correctly_ interpreting the humans, as the important thing, because you’re trying to model what a human would have done next in text and that requires knowing what words would bubble out of their system rather than understanding what’s _actually_ going on around them.

> **33**.  **The AI does not think like you do**, the AI doesn’t have thoughts built up from the same concepts you use, it is utterly alien on a staggering scale.  Nobody knows what the hell GPT-3 is thinking, not _only_ because the matrices are opaque, but because the _stuff within that opaque container_ is, very likely, incredibly alien – nothing that would translate well into comprehensible human thinking, even if we could see past the giant wall of floating-point numbers to what lay behind.

Yes. The AI does not think like you do, and 99% of people need to understand this.

But maybe it _kind of_ does? For two reasons.

One is that, again based on my discussions with Chris Olah, and another discussion I had with someone else working on interpretability, to the extent that they did look inside a giant inscrutable matrix it turned out to be surprisingly scrutable, and many of the neurons ‘meant something.’ That’s not as helpful as one would hope, but it _is_ an indication that some of the thinking isn’t alien for the larger values of alien. It’s still going to be _more alien_ than any other humans are thinking, but the scale may not be so staggering in the end.

Which plays into the second reason, which is #22, the claim that there is a core function to general intelligence, which implies the possibility that in some sense we are Not So Different as all that. That’s _compared to being completely alien and impossible to ever hope to decipher at all,_ mind you, not compared to obvious nonsense like ‘oh, you mean it’s like how it’s really hard to understand ancient Egyptians’ or something, yes it is going to be a lot, lot more alien than that.

I continue to be skeptical that getting a general intelligence is that easy, but if it _is_ that easy and follows this naturally, I wonder how much that implies it is (relatively) less alien.

### **Section B.4**

> **34**.  **Coordination schemes between superintelligences are not things that humans can participate in** (eg because humans can’t reason reliably about the code of superintelligences); a “multipolar” system of 20 superintelligences with different utility functions, plus humanity, has a natural and obvious equilibrium which looks like “the 20 superintelligences cooperate with each other but not with humanity”.

Yes. I am convinced that things like ‘oh we will be fine because the AGIs will want to establish proper rule of law’ or that we could somehow usefully be part of such deals are nonsense. I do think that the statement here on its own is _unconvincing_ for someone not already convinced who isn’t inclined to be convinced. I agree with it because I was already convinced, but unlike many points that should be shorter this one should have probably been longer.

> **35**.  Schemes for playing “different” AIs off against each other stop working if those AIs advance to the point of being able to coordinate via reasoning about (probability distributions over) each others’ code.  **Any system of sufficiently intelligent agents can probably behave as a single agent, even if you imagine you’re playing them against each other.**

Yes. Not automatically or definitely, but enough of a probably that these plans are non-starters even if they weren’t also non-starters for other reasons as well, which I think they are.

I at least somewhat remember when LessWrong was all about questions like this. That was a long time ago. A more civilized conversation from a more civilized age.

> 36\. **AI-boxing can only work on relatively weak AGIs; the human operators are not secure systems**.

Yes, the only way to keep a sufficiently strong AGI boxed is to not interact with its output in any way, and even then I wouldn’t be so sure. Stop thinking there is hope here, everyone, please. Alas, my expectation is that the argument here is not going to be convincing to anyone who wasn’t already convinced by now.

### **Section C**

> Okay, those are some significant problems, but lots of progress is being made on solving them, right?  There’s a whole field calling itself “AI Safety” and many major organizations are expressing Very Grave Concern about how “safe” and “ethical” they are?

Yeah, it’s not going so well. It is in fact going so incredibly poorly that so far the whole thing is quite plausibly vastly net negative, with most funding that has gone into “AI Safety” efforts serving as de facto capabilities research that both speeds things up and divides them and is only serving to get us killed faster. It is going so poorly that Eliezer is writing posts like this with _actual no idea_ what useful things could be done, and when I ask people what could be done if one literally was directing policy for the President of the United States I got essentially no useful suggestions beyond trying to hire away GPU designers (or AI researchers if you have the budget for that) to design solar panels. Which, sure, better than not doing that but that is not a good answer.

> **37\.** There’s a pattern that’s played out quite often, over all the times the Earth has spun around the Sun, in which some bright-eyed young scientist, young engineer, young entrepreneur, proceeds in full bright-eyed optimism to challenge some problem that turns out to be really quite difficult.  Very often the cynical old veterans of the field try to warn them about this, and the bright-eyed youngsters don’t listen, because, like, who wants to hear about all that stuff, they want to go solve the problem!  Then this person gets beaten about the head with a slipper by reality as they find out that their brilliant speculative theory is wrong, it’s actually really hard to build the thing because it keeps breaking, and society isn’t as eager to adopt their clever innovation as they might’ve hoped, in a process which eventually produces a new cynical old veteran.  Which, if not literally optimal, is I suppose a nice life cycle to nod along to in a nature-show sort of way. 
> 
> Sometimes you do something for the _first_ time and there _are_ no cynical old veterans to warn anyone and people can be _really_ optimistic about how it will go; eg the initial Dartmouth Summer Research Project on Artificial Intelligence in 1956:  “An attempt will be made to find how to make machines use language, form abstractions and concepts, solve kinds of problems now reserved for humans, and improve themselves. We think that a significant advance can be made in one or more of these problems if a carefully selected group of scientists work on it together for a summer.” 
> 
> This is _less_ of a viable survival plan for your _planet_ if the first major failure of the bright-eyed youngsters kills _literally everyone_ before they can predictably get beaten about the head with the news that there were all sorts of unforeseen difficulties and reasons why things were hard.  You don’t get any cynical old veterans, in this case, because everybody on Earth is dead. 
> 
> Once you start to suspect you’re in that situation, you have to do the Bayesian thing and update now to the view you will predictably update to later: realize you’re in a situation of being that bright-eyed person who is going to encounter Unexpected Difficulties later and end up a cynical old veteran – or would be, except for the part where you’ll be dead along with everyone else.  And become that cynical old veteran _right away,_ before reality whaps you upside the head in the form of everybody dying and you not getting to learn. 
> 
> **Everyone else seems to feel that, so long as reality hasn’t whapped them upside the head yet and smacked them down with the actual difficulties, they’re free to go on living out the standard life-cycle and play out their role in the script and go on being bright-eyed youngsters; there’s no cynical old veterans to warn them otherwise, after all, and there’s no proof that everything won’t go beautifully easy and fine, _given their bright-eyed total ignorance of what those later difficulties could be._**

I mostly agree with the central thing that’s being got at here in the end, but I think a lot of this is a misunderstanding of the proper role of Bright-Eyed Youngsters, so I want to kind of reason through this again.

If all the problems in the world were conveniently labeled with difficulty levels, or could be so assessed by the number of cynical old veterans sitting in their offices continuing to not solve the problem while writing enough papers to have tenure, and the way one solved problems was to accumulate Valuable Experience and Score Difficulty Points until the solving threshold was reached, then it would make sense that the purpose of a Bright-Eyed Youngster is to get smacked upside the head enough times to create a Cynical Old Veteran (COV). At which point perhaps they can make some progress and we can all praise the cycle of life.

Instead, I think the way that it works is that the COVs mostly _don’t_ solve such problems. Instead, the COVs are out of ideas of how to solve the problem, or have concluded the problem is hopeless, and write posts like Eliezer’s about why the problem is doomed to never be solved. And they spend some of their time mentoring Bright-Eyed Youngsters, explaining to them why their ideas won’t work and helping reality smack them upside the head more efficiently. When the youngster is actually on the right track, they often explain to them why their ideas are wrong anyway, and sometimes the youngster luckily does not listen. Also the veterans assign subproblems and determine who gets tenure.

Who actually solves problems? In general (not AGI specific) I am not going to bet on the Cynical Old Veterans too aggressively, especially the older and more cynical ones. Exactly how young or old to bet depends on the field – if AGI research is most similar to mathematics, presumably one should bet on quite young. If it’s other things, less young, but I’d assume still rather young.

You should update straight to ‘this particular problem of building an AGI is super difficult’ without requiring failed attempts, through reasoning out the nature of the problem, but my hunch is you want to in some senses remain a BEY anyway.  

The bright-eyed thing is a feature (and the young thing is _definitely_ a feature), because they make people actually try to solve problems for real. Most people don’t react to learning that AGI is as hard as it is (if they do ever learn that) by saying ‘all right, time to score as many dignity points as possible and work on the actually hard parts of this problem’ instead they either find a way to unlearn the thing as quietly and quickly as possible, or they ignore it and keep publishing, or they go do something else, or they despair. That’s typical, if you tell me a problem is impossible chances are I’ll find something else to do or start doing fake work. A response of ‘yes this is an impossible problem but I’ll solve it anyway’ seems great.

The structure implies any given unsolved problem is hard, including _for new problems._ Which doesn’t seem right in general – this particular problem is indeed hard but many unsolved problems seem hard to COVs but are easy in the face of an actual attempt. Often when you start on a new problem it turns out it really is easy, because there’s no selection against it being easy. Many problems turn out to be _shockingly_ easy in the face of a real attempt. It is exactly the youngsters who think the problem is easy because they see something unique about it that are most likely to actually solve it, even though they’re still presumably not realizing how hard it is, the same way that start-up founders usually have no idea what they’re signing up for but also that’s how they actually found start-ups. Which, when they work, then proceed to use reality to slap the COVs upside the head on the way out. Or science can advance one funeral at a time.

The difference here is that a Bright-Eyed Youngster (BEY) working on most problems will waste some resources but doesn’t do much real harm. In AGI there’s the danger they will literally kill everyone on the planet. That’s new. 

So far they haven’t killed everyone, but also BEYs are also failing to turn into skilled COVs because they don’t even have the opportunity to properly fail (and kill everyone). 

This does require some adjustments, especially once a BEY could potentially build an AGI. There’s some confusion here if the BEY is thinking they know how to do _safety_ versus thinking they know how to do an AGI at all (the most BEY of the BEYs don’t even realize safety is a problem) but mostly this still should refer to safety.. At which point, yes, you very much don’t want to trust that BEY’s safety idea, and if they want to succeed at safety they need to be able to do it without being told by reality that their first few answers were hopelessly naïve.

This could be an argument that you want to use more veteran people, who have a relatively bigger sense of these issues. They have a better relative chance to actually solve the problem in this situation. Failure to previously solve it isn’t evidence against them, because the problem won’t up until then have been something that could potentially be solved, and error correction is relatively important. When I became a Cynical Old Veteran of Magic: The Gathering, I was _much_ better about getting things right _on the first try_ than I used to be, while simultaneously being worse at truly innovating. Which may or may not be the trade-off you need.

The report is that true worthwhile COVs (other than Eliezer) don’t exist, there’s no one else sitting around _not_ pretending to do fake things but happy to teach you exactly why you’ll fail. Or so the report goes..

The Bayesian point stands. Ideally a BEY should update on a problem not having been solved despite much effort and conclude it is likely very hard, and not hide from all the particular things that need to be dealt with, yet continue to have the enthusiasm to work on the problem while behaving in useful ways _as if the problem will turn out to be easy for them in particular_ for some reason, if by ‘easy’ we mean just barely solvable, without actually _believing_ that they will solve it. 

Everyone being killed on the first attempt to solve the problem doesn’t tell you the difficulty level of the problem _aside from the fact that the first failed attempt kills everyone._ This seems like it goes double if in order to try and solve the problem you first need to solve another problem that is just now becoming solvable, since you can’t have a safe AGI without a way to make an AGI to begin with. So you have to think about the problem and figure it out that way. 

So yes, young warrior, you must forge a Sword of Good Enough and take it into the Dungeon of Ultimate Evil and find your way to the evil wizard and slay him. But if you take an actual Sword of Good Enough in and the wizard gets it, that’s it, everyone dies, world over.  It’s _probably_ going to involve overwhelming odds against you, I mean did you see the sign above the dungeon or hear the screams inside, things look pretty grim, but our evidence is based on reasoning out what is logically going to be in this high level a dungeon, because we’ve never had anyone run into the dungeon with an actual Sword of Good Enough and get smacked upside the head by reality, and we know this because if they had we’d all be dead now. 

And you can’t wait forever, because there are plenty of other people who think they’re heroes in a video game with save points and are going to try and speed run the damn thing, and it won’t be that long before one of them figures out how to forge a sword and gets us all killed, so ‘grind an absurd amount before entering’ means you never get a chance at all.

If there were a bunch of dead heroes to point to and people who ran away screaming to save their lives, then you could say ‘oh I guess I should update that this dungeon is pretty tough’ but without them the others get to fool themselves into thinking it might be that easy, and if it is then getting there late won’t get them the glory.

I remember starting my own start-up as a BEY (except founder, not researcher), noticing the skulls, and thinking the problem was almost certainly incredibly hard and also probably much harder than I thought it was (but much less more hard than my estimates than the gap for most founders, and I think this proved true although our _particular_ idea was bad and therefore unusually hard), and also that so what I had odds let’s do this anyway, and then I went out and did it again as more of a hybrid with a better idea that was relatively easier, but same principle. That doesn’t apply here, because there were attempts that went anywhere at all even at fully unsafe AGIs, and thus no failures or successes, resulting in zero successes but also zero veterans and zero skulls.

The problem comes from the BEY getting us all killed, by _actually attempting to win the game_ via a half-baked solution that has zero chance of working on multiple levels, in a way that would normally not matter but here is deadly because an AGI is involved. And sure, point taken, but as long as that’s not involved what’s the problem with BEYs going in and boldly working on new safety models only to have reality smack them upside the face a lot?

My Eliezer model says that what’s wrong with that is that _this causes them to do fake research,_ in the sense that it isn’t _actually_ trying to solve the problem slash has zero chance of being helpful except insofar as it has a chance of teaching them enough to turn them into cynical veterans, and there isn’t enough feedback to make them into veterans because reality isn’t going to smack them upside the head strongly enough until it actually kills everyone.

And also the problem that _most things people tell themselves are safety work are actually capability work_ and thus if you are not _actually_ doing the hard safety work you are far more likely to advance capability and make things worse than you are to have some amazing breakthrough.

Or even worse, the problem is that the BEYs will _actually succeed at the fake problem_ of alignment that _looks_ like it would work that they actually think they’ve solved it and they are willing to turn on an AGI.

Thus, what you actually need is a BEY who is aware of why the problem is impossible (in the [shut up and do the impossible sense](https://www.lesswrong.com/posts/nCvvhFBaayaXyuBiD/shut-up-and-do-the-impossible)) and thus starts work on the _real_ problems, and everyone else is far worse than worthless because of what we know about the shape of the problem and how people interact with it and what feedback it gives us – assuming that our beliefs on this are correct, and I say ‘our’ because I mostly think Eliezer is right.

Notice the implications here. If the premises here are correct, _and I believe they probably are,_ they seem to imply that ‘growing the field’ of AI Safety, or general ‘raising awareness’ of AI Safety, is quite likely to _be an actively bad idea,_ unless they lead to things that will help, which means either (A) people who actually get what they’re facing and/or (B) people who try to stop or slow down AGI development rather than trying to make it safer.

> **38**.  **It does not appear to me that the field of ‘AI safety’ is currently being remotely productive on tackling its enormous lethal problems.**  These problems are in fact out of reach; the contemporary field of AI safety has been selected to contain people who go to work in that field anyways.  Almost all of them are there to tackle problems on which they can appear to succeed and publish a paper claiming success; if they can do that and get funded, why would they embark on a much more unpleasant project of trying something harder that they’ll fail at, just so the human species can die with marginally more dignity?  This field is not making real progress and does not have a recognition function to distinguish real progress if it took place.  You could pump a billion dollars into it and it would produce mostly noise to drown out what little progress was being made elsewhere.

Yes, and again, _it seems like this is not saying the quiet part out loud._ The quiet part is ‘I say not being productive on tackling lethal problems but what I actually meant is they are making our lethal problems worse by accelerating them along and letting people fool themselves about the lethality of those problems, so until we have a better idea please stop.’

> **39**.  **I figured this stuff out using the** [**null string**](https://twitter.com/ESYudkowsky/status/1500863629490544645) **as input,** and frankly, I have a hard time myself feeling hopeful about getting real alignment work out of somebody who previously sat around waiting for somebody else to input a persuasive argument into them.  This ability to “notice lethal difficulties without Eliezer Yudkowsky arguing you into noticing them” currently is an opaque piece of cognitive machinery to me, I do not know how to train it into others.  It probably relates to ‘[security mindset](https://intelligence.org/2017/11/25/security-mindset-ordinary-paranoia/)‘, and a mental motion where you refuse to play out scripts, and being able to operate in a field that’s in a state of chaos.

Security mindset seems highly related, and the training thing here seems like it shouldn’t be that hard? Certainly it seems very easy compared to the problem the trained people will then need to solve, and I think Eliezer has de facto trained me a substantial amount in this skill through examples over the years. There was a time I didn’t have security mindset at all, and now I have at least _some_ such mindset, and _some_ ability to recognize lethal issues others are missing. He doesn’t say how many other people he knows who have the abilities referred to here, I’d be curious about that. Or whether he knows anyone who has acquired them over time.

If the class ‘AI researcher without this mindset’ is net negative, and one with it is net positive, then we need to get CFAR and/or others on the case. This problem seems more like ‘not that many people have made a serious attempt and it seems quite likely to be not impossible’ than ‘this seems impossible.’

If nothing else, a substantial number of other people do have security mindset, and you can presumably find them by looking at people who work in security, and presumably a bunch of them have thought about how to teach it?

> **40**.  “Geniuses” with nice legible accomplishments in fields with tight feedback loops where it’s easy to determine which results are good or bad right away, and so validate that this person is a genius, are (a) people who might not be able to do equally great work away from tight feedback loops, (b) people who chose a field where their genius would be nicely legible even if that maybe wasn’t the place where humanity most needed a genius, and (c) probably don’t have the mysterious gears simply because they’re _rare._ 
> 
> **You cannot just pay $5 million apiece to a bunch of legible geniuses from other fields and expect to get great alignment work out of them.** 
> 
> They probably do not know where the real difficulties are, they probably do not understand what needs to be done, _they cannot tell the difference between good and bad work_, and the funders also can’t tell without me standing over their shoulders evaluating everything, which I do not have the physical stamina to do. 
> 
> I concede that real high-powered talents, especially if they’re still in their 20s, genuinely interested, and have done their reading, are people who, yeah, fine, have higher probabilities of making core contributions than a random bloke off the street. But I’d have more hope – not significant hope, but _more_ hope – in separating the concerns of (a) credibly promising to pay big money retrospectively for good work to anyone who produces it, and (b) venturing prospective payments to somebody who is predicted to maybe produce good work later.

The problem with promising to pay big money retrospectively for good work is that, while an excellent idea, it doesn’t actually solve the motivation problem if the problem with getting ‘good work’ out of people is that the probability of success for ‘good work’ is very low.

Which is indeed the problem, as I understand Eliezer describing it and I think he’s largely right. Someone who enters the field who chooses to do real work has to recognize the need for ‘real’ work (he calls it ‘good’ above, sure), know what real work is and how to do it, and choose to attempt real work despite knowing that the default outcome that probably happens is that no good work results and thus the payoff is zero.

That is, unless there is some way to recognize a real failed _attempt_ to do real work and reward _that,_ but we don’t have a hopeful path for accurately doing that without actual Eliezer doing it, for which the stamina is unavailable..

The question then is, sure, paying the $5 million isn’t super likely to get good work out of any individual person. But it’s at least _kind of_ true that we have billions of dollars that wants to be put to work on AI Safety, that isn’t being spent because it can’t help but notice that spending more money on current AI Safety options isn’t going to generate positive amounts of dignity, and in fact likely generates negative amounts.

The real potential advantage of the $5-million-to-the-genius approach is not that the genius is a favorite to do useful work. The advantage is that if you select such people based on them understanding the true difficulty of the problem, which is reinforced by the willingness to cut them the very large check and also the individual attention paid to them before and after check writing to ensure they ‘get it,’ they may be likely to _first, do no harm._ It seems plausible, at least, that they would ‘fail with dignity’ when they inevitably fail, in ways that don’t make the situation _worse,_ because they are smart enough to at least not do that.

So you could be in a situation where paying 25 people $200k ends up being worse than doing nothing, while paying one promising genius $5 million is at least _better_ than doing nothing. And given the value of money versus the value of safety work, it’s a reasonable approximation to say that anything with positive value is worth spending a lot of money. If the bandwidth required has rival uses that’s another cost, but right now the alternative uses might be things we are happy to stop.

Another theory, of course, is that _introducing a genius to the questions surrounding AGI_ is a _deeply, deeply foolish_ thing to be doing. Their genius _won’t obviously transfer_ to knowing not to end up doing capabilities work or accidentally having (and sharing) good capabilities ideas, so the last thing you want to do is take the most capable people in the world at figuring things out and have them figure out the thing you least want anyone to figure out.

As far as I can tell, that’s the real crux here, and I don’t know which side of it is right?

> **41**.  **Reading this document cannot make somebody a core alignment researcher**.  That requires, not the ability to read this document and nod along with it, but the ability to spontaneously write it from scratch without anybody else prompting you; that is what makes somebody a peer of its author.  It’s guaranteed that some of my analysis is mistaken, though not necessarily in a hopeful direction. 
> 
> The ability to do new basic work noticing and fixing those flaws is the same ability as the ability to write this document before I published it, which nobody apparently did, despite my having had other things to do than write this up for the last five years or so. 
> 
> Some of that silence may, possibly, optimistically, be due to nobody else in this field having the ability to write things comprehensibly – such that somebody out there had the knowledge to write all of this themselves, if they could only have written it up, but they couldn’t write, so didn’t try.  I’m not particularly hopeful of this turning out to be true in real life, but I suppose it’s one possible place for a “positive model violation” (miracle).  The fact that, twenty-one years into my entering this death game, seven years into other EAs noticing the death game, and two years into even normies starting to notice the death game, it is still Eliezer Yudkowsky writing up this list, says that humanity still has only one gamepiece that can do that.  I knew I did not actually have the physical stamina to be a star researcher, I tried really really hard to replace myself before my health deteriorated further, and yet here I am writing this. 
> 
> That’s not what surviving worlds look like.

Yes, mostly. A lot of distinct claims to unpack here, which is why it is quoted in full.

Reading this document is different from being able to understand and recreate the arguments, or the ability to generate additional similar arguments on things that weren’t mentioned or in response to new objections or ideas.

The bolder claim is the idea that if you couldn’t have written something similar to this document yourself, you can’t usefully research AI Safety.

(Notice once again that this is saying that almost no one can usefully research AI Safety and that we’d likely be better off if most of the people doing so stopped trying, or at least/most worked on first becoming able to generate such a document rather than directly on the problem.)

On the question of writing ability?

I will say outright that yes, that is an important barrier here.

The chance of any given person, who could have otherwise generated the list, lacking the required writing ability. Writing ability on the level of Eliezer isn’t as rare as understanding of the problem on the level of Eliezer, but it is quite rare. How many people would have a similar chance to Eliezer of ‘pulling off’ HPMOR or the sequences purely in terms of writing quality, even if they understood the core material about as well?

Writing the list _in this way_ is a thing Eliezer gets to do that others mostly don’t get to do. If _someone else_ wrote up the list with this level of ranting and contempt, I would not expect that to go well, and that would reasonably lead someone else capable of writing it that way to not do so.

The job of someone else writing this list _properly_ is much harder. They would feel the need to write it ‘better’ in some ways which would make it longer, and also probably make it worse for at least several iterations. The job of _deciding to write it_ is much harder, requiring the author to get past a bunch of social barriers and modesty issues and so on. At best it would not be a fast undertaking.

One could reasonably argue that there’s a strong _anti-_correlation in skills here. How do you get good at writing? You write. A lot. All the time. There are no substitutions. And that’s a big time commitment.

So how many people in the broad AI Safety have _written enough words_ in the right forms to plausibly have the required writing ability here even in theory? There are at most a handful.

And of course, writing such a list is not a normal default social action so it doesn’t happen, and even Eliezer took forever to actually write the list and post it, and ended up deciding to post a self-described subpar version for want of ability to write a good one, despite knowing how important such a thing was and having all the required knowledge.

That does not mean there are people who, if imbued with the writing skill, could have written the list. It simply means we don’t have the Bayesian evidence to know.

I agree that, in the cases where Eliezer is right about the nearness and directness of the path to AGI, this is mostly not what surviving worlds look like, but also I’ve learned that everyone everywhere is basically incompetent at everything and also not trying to do it in the first place, and yet here we still are, so let’s not despair too much every time we get that prior confirmed again. If you told me a lot of the things I know now ten years ago I’d have also said ‘that’s not what surviving civilizations look like’ purely in terms of _ordinary_ ruin.

> **42**.  **There’s no plan.**  Surviving worlds, by this point, and in fact several decades earlier, have a plan for how to survive.  It is a written plan.  The plan is not secret.  In this non-surviving world, there are no candidate plans that do not immediately fall to Eliezer instantly pointing at the giant visible gaping holes in that plan.  Or if you don’t know who Eliezer is, you don’t even realize you need a plan, because, like, how would a human being possibly realize that without Eliezer yelling at them?

Yes, there is no plan. I would like to have a plan. Not having _any plan at all,_ of _any_ detail, that offers a path forward, is indeed not what surviving worlds usually look like.

Yet I am not convinced that surviving worlds involve a plan along the lines above.

You know who else doesn’t have a plan that Eliezer (you’d think I would say whoever the domain-equivalent of Eliezer is and that would work too, but honestly literal Eliezer would mostly work fine anyway) couldn’t point at the visible gaping holes in?

Yeah, with notably rare exceptions the answer is actual everyone else.

I do realize that the whole point is that the kind of complete incompetence and muddling through via trial and error we usually do won’t work on this one, so that offers little comfort in some sense, but the visible written plan that actually works available decades in advance is not how humans work. If anything, this feels like one of those reality-falsifying assumptions Eliezer is (wisely) warning everyone else _not_ to make about other aspects of the problem, in the sense that this is trying to make the solution run through a plan like that which _kind of_ is like assuming such a plan could possibly exist. Which in turn seems like it is either a very bold claim about the nature of humanity and planning, the nature of the problem and solution space (in a way that goes in a very different direction than the rest of the list), or more likely both.

This document wasn’t written until well after it _could_ have been written by Eliezer. Part of that is health issues, but also part of that clearly is that we wasted a bunch of time thinking we’d be able to offer better ideas and better plans and thus didn’t proceed with worse slash less ready ideas and plans as best we could. The new plan of not holding out as much for a better plan is indeed a better, if highly non-ideal, plan.

> Relatively few are aware even that they should, to look better, produce a _pretend_ plan that can fool EAs too ‘[modest](https://equilibriabook.com/toc/)‘ to trust their own judgments about seemingly gaping holes in what serious-looking people apparently believe.

Is this right? Should I have produced a pretend plan? Should I be pretending to write one here and now? Actually writing a bad one? How many people should have produced one? Do we _want_ to look better?

If everyone is being overly modest (and mostly they are) then there’s also a big danger of information cascades during this kind of creation of common knowledge. Everyone converging around our failure to make any progress and the situation being grim seems clearly right to me. Everyone converging around many other aspects of the problem space worries me more as I am not convinced by the arguments.

> **43**.  **This situation you see when you look around you is not what a surviving world looks like.**  The worlds of humanity that survive have plans.  They are not leaving to one tired guy with health problems the entire responsibility of pointing out real and lethal problems proactively.  Key people are taking internal and real responsibility for finding flaws in their own plans, instead of considering it their job to propose solutions and somebody else’s job to prove those solutions wrong.  That world started trying to solve their important lethal problems earlier than this.  Half the people going into string theory shifted into AI alignment instead and made real progress there.  When people suggest a planetarily-lethal problem that might materialize later – there’s a lot of people suggesting those, in the worlds destined to live, and they don’t have a special status in the field, it’s just what normal geniuses there do – they’re met with either solution plans or a reason why that shouldn’t happen, not an uncomfortable shrug and ‘How can you be sure that will happen’ / ‘There’s no way you could be sure of that now, we’ll have to wait on experimental evidence.’
> 
> A lot of those better worlds will die anyways.  It’s a genuinely difficult problem, to solve something like that on your first try.  But they’ll die with more dignity than this.

I go back and forth on what my relationship should be to the problem of AI Safety, and what the plan should be to address it both on a personal and general strategic level. I’ve come around largely to the perspective that my comparative advantage mostly lies elsewhere, and that many other aspects of our situation are both threatening to doom us even without or before AGI dooms us and also even their lesser consequences are why our world looks like it does (as in: not like one that is that likely to survive AGI when it happens). So it makes sense for me to mostly work on making the world/civilization more generally look like one that gets to survive in many ways, rather than directly attack the problem.

At other times I get to wondering if maybe I _should_ try to tackle the problem directly based on having been able to usefully attempt tackling of problems I should have had no business attempting to tackle. I do reasonably often get the sense that these problems have solutions and with the right partnerships and resources I could be able to have a chance of finding them. Who knows.

## **Conclusion**

I put the core conclusions at the _top_ rather than the bottom, on the theory that many/most people quite reasonably won’t read this far. I was on the fence, before being funded to do it, on whether writing this was a good idea given my current level of domain knowledge and the risk of wasting not only my own but other people’s time. Having written it, it seems like it is plausibly useful, so hopefully that turns out to be right. There are various secondary documents that could be produced that require a combination of writing skill and understanding of the problem and willingness to go ahead and write drafts of them, and it is not crazy that I might be the least terrible solution to that problem for some of them.
