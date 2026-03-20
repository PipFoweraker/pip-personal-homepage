---
title: "On the Diplomacy AI"
url: "https://thezvi.wordpress.com/2022/11/28/on-the-diplomacy-ai/"
source: "feedly"
sourceTitle: "Don't Worry About the Vase"
author: "TheZvi"
published: 2022-11-28
saved: 2022-12-02
category: "rationality"
tags:
  - "Artificial Intelligence"
  - "Games"
  - "Big Data"
  - "Deep Learning"
status: "unreviewed"
layout: "reading.njk"
contentType: "full"
---

The latest AI development is: [AI achieves human level in (blitz 5-minute-turn) full-communication anonymous online Diplomacy](https://twitter.com/moreisdifferent/status/1595128092875321346) ([paper](https://www.science.org/doi/10.1126/science.ade9097?cookieSet=1)). [Why not?](https://twitter.com/FormOfPlato/status/1595095880868282371)

[![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb1f9d45e-db99-41a5-b38b-c824fb9ef481_1258x1078.jpeg)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb1f9d45e-db99-41a5-b38b-c824fb9ef481_1258x1078.jpeg)

[![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fbc57541c-c98e-4504-8315-391412e7464b_901x451.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fbc57541c-c98e-4504-8315-391412e7464b_901x451.png)

I mean, aside from the obvious.

A take I saw multiple times was that AI labs, or at least Meta, were _intentionally going for the scariest possible thing,_ which is why you create the torment nexus, or in this case teach the AI to play Diplomacy. If you had to pick a game to _sound_ scary, you’d definitely pick Diplomacy.

The universal expectations for AI breakthroughs like this are:

1.  The particular breakthrough was not expected, and is scary. The techniques used worked better than we expected, which is scary.
2.  The details of the breakthrough involve someone figuring out why _this particular problem configuration_ was easier to solve than you would expect _relative to other problems and configurations_, and thus makes it less scary.
3.  We find that those details matter a lot for success, and that close variants would not be so easy. Other times we will find that those details allowed those creating the new thing to skip non-trivial but highly doable steps, that they could go back and do if necessary.

That is all exactly what we find here.

The actual AI, as I understand it, is a combination of a language model and a strategic engine.

The strategic engine, as I evaluated it based on a sample game with six bots and a human, seemed to me to be mediocre at tactics and lousy at strategy. Humans are bad at tactics (and often strategy) in games and Diplomacy is no exception. Diplomacy’s tactics a good match for a AI. Anticipating other players proved harder. The whole thing feels like it is ‘missing a step.’

An author of the paper, however, points out that this engine entered and won a No-Press (Gunboat) Diplomacy Tournament, and won it, with one expert saying it was top-5 in the world at that. Perhaps my threshold for tactics is unfair here, or I happen to disagree with the key decisions I examined, or I am sufficiently rusty (or uneducated?) that I am neglecting other considerations and reaching wrong conclusions.

See [the discussion section (of the Substack version](https://thezvi.substack.com/p/on-the-diplomacy-ai/comment/10791301)) for more details of Noam Brown’s objections and additional notes.

### What Makes the AI Good?

Where does the AI’s advantage come from? From my reading, which comes largely from [the sample game in this video](https://www.youtube.com/watch?v=u5192bvUS7k&ab_channel=DiploStrats), it comes from the particulars of the format, and not making some common and costly mistakes humans make. In particular:

1.  AI writes relatively long, detailed and explanatory communications to others.
2.  AI does not signal its intentions via failing to communicate with its victims.
3.  AI understands that the game ends after 1908 and modifies accordingly.
4.  AI keeps a close eye on strategic balance in order to maximize win percentage.
5.  AI uses its anonymity and one-shot nature to not retaliate after backstabs.
6.  AI knows what humans are like. Humans were not adjusted to bot behaviors.

When people say the AI ‘solved’ Diplomacy, it _really really didn’t._ What it did, which is still impressive, is _get a handle on the basics_ of Diplomacy, in this particular context where bots cannot be identified and are in the minority, and in particular where message detail is sufficiently limited that it can use an LLM to be able to communicate with humans reasonably and not be identified.

If this program entered the world championships, with full length turns, I would not expect it to do well in its current form, although I would not be shocked if further efforts could fix this (or if they proved surprisingly tricky).

Interestingly, this AI is programmed _not to mislead_ the player on purpose, although it will absolutely go back on its word if it feels like it. This is closer to correct than most players think but a huge weakness in key moments and is highly exploitable if someone knows this and is willing and able to ‘check in’ every turn.

The AI is thus heavily optimized for exactly the world in which it succeeded.

1.  Five minute turns limit human ability to think, plan and talk, whereas for a computer five minutes is an eternity. Longer time favors humans.
2.  Anonymity of bots prevents exploitation of their weaknesses if you can’t confidently identify who they are, and the time limit kept most players too busy to try and confidently figure this out. They also hadn’t had time to learn how the bots functioned and what to expect, even when they did ID them.
3.  One-shot nature of games allows players to ignore their reputations and changes the game theory, in ways that are not natural for humans.
4.  Limited time frame limits punishment for AI’s inability to think about longer term multi-polar dynamics, including psychological factors and game theoretically strange endgame decisions.
5.  Limited time frame means game ends abruptly in 1908 (game begins in 1901, each year is two movement turns, two retreats and a build) in a way that many players won’t properly backward chain for until rather late, and also a lot of players will psychologically be unable to ignore the longer term implications even though they are not scored. In the video I discuss, there is an abrupt ‘oh right game is going to end soon’ inflection point in 1907 by the human.
6.  Rank scoring plus ending after 1908 means it is right to backstab leaders and to do a kind of strange strategy where one is somewhat cooperating with players you are also somewhat fighting, and humans are really bad at this and in my experience they often _get mad at you for even trying._

### The Core Skill of Online Diplomacy is Talking a Lot

As the video’s narrator explains: The key to getting along with players in online Diplomacy is to be willing to talk to them in detail, and share your thoughts. Each player only has so much time and attention to devote to talking to six other players. Investing in someone is a sign you see a future with them, and letting them know how you are thinking helps them navigate the game overall and your future actions, and makes you a more attractive alliance partner.

Humans also have a strong natural tendency to talk a lot with those they want to ally with, and to be very curt with those they intend to attack or especially backstab (or that they recently attacked or backstabbed). This very much matches my experiences playing online. If a human suddenly starts sending much shorter messages or not talking to you at all, _you should assume you are getting stabbed._ If you do this to someone else, assume they expect a stabbing. Never take anyone for granted, including those you are about to stab.

This gives the AI a clear opportunity for big advantage. An AI can easily give complex and detailed answers to all six opponents at the same time, for the entire game, in a way a human cannot. That gives them a huge edge. Combine that with humans being relatively bad at Diplomacy tactics (and oh my, they’re quite bad), plus the bots being hidden and thus able to play for their best interests after being stabbed without everyone else _knowing this and thus stabbing them,_ and the dynamics of what actually scores points in a blitz game being counter-intuitive, and the AI has some pretty big edges to exploit.

The five minute turns clearly work to the AI’s advantage. The AI essentially suffers not at all from the time pressure, whereas five minutes is very little time for a human to think. I expect AI performance to degrade relative to humans with longer negotiation periods.

### Lessons From the Sample Game

The sample game is great, [featuring the player written about here](https://www.popularmechanics.com/culture/gaming/a34043608/winning-diplomacy-strategy-andrew-goff/). If you are familiar with Diplomacy or otherwise want more color, I recommend [watching the video](https://www.youtube.com/watch?v=u5192bvUS7k&ab_channel=DiploStrats).

The human player is Russia. He gets himself into big trouble early on by making two key mistakes. He gets _out_ of that trouble because the AI is not good at anticipating certain decisions, a key backstab happens exactly when needed, the player wins a key coin flip decision, and he shifts his strategy into exploiting the tendencies of the bots.

The first big mistake he makes is not committing a third unit to the north. Everything about the situation and his strategy screams to put a third unit in the north, at least an army and ideally a fleet, because the south does not require an additional commitment or does the additional commitment open up opportunity. Instead, without a third northern unit, Russia has nowhere to expand for a long time.

The second big mistake was violating his DMZ agreement with Austria by moving into Galicia. He did this because the AI failed to respond to him during the turn in question, and he was worried this indicated he was about to get stabbed, despite the stab not making a ton of tactical sense. Breaking the agreement with Austria led to a war that was almost fatal (or at least probably did, there’s some chance Austria does it anyway), without any prospect of things going well for Russia at any point.

Against a human, would this play have been reasonable? That depends on how reliable an indicator is radio silence, and how likely a human would be to buy it as an excuse. Against an AI, it does not make sense. The AI has no reason to not talk at all in this spot, regardless of its intentions. So it is strange that it did not respond here, it seems like a rather painful bug.

The cavalry saves us. Italy stabs Austria, while France moves against England.

Here is a tactical snapshot. I hate France’s tactical play, both its actual plays and the communications with Russia that are based on its tactics, dating back to at least 1903. The way I think about Diplomacy, the move here to Irish Sea needs to be accompanied by a convoy of Picardy into London or Wales. Fighting for Belgium here is, to me, both unnecessarily risky and silly.

An author of the paper challenged me on this in the comments, in response to which I explained my reasoning in detail. The author consulted an expert, who said that both moves were reasonable. Perhaps you need to attack this way some percentage of the time here for GTO (game theory optimal) reasons. I am curious to measure my actual skill level at Diplomacy tactics, but probably not curious enough to invest the hours necessary.

Italy does reasonable things. Austria being in Rumania and Ukraine is an existential threat, luckily Austria chooses a retreat here that makes little sense. Once you have Bulgaria against Turkey, you _really_ don’t want to give it up. Austria also lost three or so distinct guessing games here on the same turn. Finally I would note that Italy is surprisingly willing to lose the Ionian Sea to pick up the Aegean, and that if I am Turkey here there is zero chance I am moving Ankara anywhere but Black Sea.

My sense is also that the AI ‘plays it safe’ and does what it thinks is ‘natural’ more often than is game theory optimal. [This is confirmed by an author of the paper here](https://www.lesswrong.com/posts/3TCYqur9YzuZ4qhtq/meta-ai-announces-cicero-human-level-diplomacy-play-with?commentId=Ley8vsJ2wkDGdAzQS), along with other similar observations. The AI assumes it can ‘get away with’ everything because on the internet no one knows you are a bot or what you are up to, and makes decisions accordingly. A huge edge if you get away with it. A huge weakness if you do not.

[![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa0fe1ef9-b4da-431a-95c9-407e817704a7_1948x1726.png)](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa0fe1ef9-b4da-431a-95c9-407e817704a7_1948x1726.png)

One must also remember that Diplomacy players are weird, myself included. There is almost always a tactical way to punish an aggressive ‘natural’ or ‘correct’ play if you are willing to get punished hard by other moves. In this case, if Germany were to try to sneak into Picardy (PIC) here. So _any given_ decision could be one mixing up one’s play. My evaluations are more based on the whole of the eight years of play by six players.

The turn above, Spring 1904, is about where Russia pivots from acting like it is playing a normal full game against humans to understanding it is playing an eight-year game for rank order against bots, and he starts asking ‘what would a bot do?’ Things turn around quite a bit after that. His only slip beyond that is at about 42:00 when he worries he will ‘annoy Austria’ in a way that shouldn’t (and didn’t) apply to a bot.

The big exploit of the bots is simple. A bot is not going to retaliate later in the game for a backstab earlier in the game, or at least will retaliate far less. As things shift into the endgame, taking whatever tactical advantages present themselves becomes more and more attractive as an option. Bots will sometimes talk about ‘throwing their centers’ to another player as retaliation, or otherwise punishing an attacker or backstabber, but you know it is mostly talk.

If you play Diplomacy using pure Causal Decision Theory without credible precommitments, and it is a one-shot fully anonymous game, that can work. When you are identifiable (or even worse if someone can see your source code, as they could in a lot of MIRI or other old-school LW thought experiments), you are going to have a bad time.

### Diplomatic Decision Theory

The central decision theory question of Diplomacy is how one should respond when stabbed, and what this says about how one should act _before_ one is stabbed.

Responses run the whole range from shrugging it off to devoting the rest of one’s life to revenge. There is a reason people say Diplomacy ruins friendships. Reasonable people max out at ‘spend the rest of the game ensuring you lose’ and being less inclined to trust you in future games, but a lot of what keeps human systems working is that you never know for sure how far things might go.

When deciding whether to attack someone, a key consideration is how they are likely to react. If they are going to go kamikaze on you, you need to ensure you can handle that. If they are going to mostly shrug it off, even let you use your newly strong position to drive a better bargain, then it is open season whenever you have a tactical opening, and then there is everything in between.

The correct solution in a fully one-shot anonymous game, if you can pull it off, is _obviously_ to give people the impression you will strongly retaliate, then to not follow through on that under most circumstances. Humans, of course, have a hard time pulling this off.

Bots also have a hard time pulling this off in a credible way, for different reasons. The bots here mostly were free riders. Humans did not know what they were dealing with. So they gave bots an appropriately broad range of potential reactions. Then the bots got the benefits of not spending their resources on punishment. Once humans _did_ know what they were dealing with, and adjusted, things wouldn’t go so well there. If there were a variety of bots competing at that point, bots would have a hell of a time trying to represent that they would actually retaliate ‘properly.’

Thus, the ‘irrational’ flaws in humans grant them a distinct advantage in the default case, where identity is broadly (partially, at least) known and behaviors have a chance to adjust to what information is available.

AIs so far have essentially ‘gotten away with’ using Causal Decision Theory in these spots, despite its extreme vulnerability to exploitation. This contrasts with many much ‘dumber’ AIs of the past, such as those for Civilization, which were hardcoded with extreme retaliation functions that solve these issues, albeit at what could be a steep price. I wonder what will happen here with, for example, self-driving cars. If AIs are going to be operating in the real world more and more, where similar situations arise, they are going to have to get a better decision theory, or things are going to go very badly for them and also for us.

In this sense, the Hard Problem of Diplomacy has not yet been touched.

### Overall Takeaways and Conclusion

The actual results are a mixed bag of things that were surprisingly hard versus surprisingly easy. The easy was largely in ways that came down to how Meta was able to define the problem space. Communications generic and simple and quick enough to easily imitate and even surpass, no reputational or decision theoretic considerations, you can respond to existing metagame without it responding to you. Good times. The hard was in the tactical and strategic engines being lousy (relative to what I would have expected), which is more about Meta not caring or being skilled enough to make a better one rather than it being impossible.

Gwern notes that in June 2020 that Diplomacy AIs were a case of ‘the best NNs can’t even beat humans at a simplified Diplomacy shorn of all communication and negotiation and manipulation and deception aspects.’ I think this is selling the deceptive aspects of no-press (e.g. no communication) Diplomacy short, although it highlights that NNs have a terrible time anticipating human reactions in multiplayer settings, as well. Mostly it seems to me like a case of the people involved not trying all that hard, and in particular not being willing to do a bunch of kludges.

[This blog post from Gary Marcus and Ernest Davis gives the perspective that this shows that Ai is _not_ primarily about scaling](https://garymarcus.substack.com/p/what-does-meta-ais-diplomacy-winning), offering additional details on how Cicero works. There were a lot of distinct moving pieces that were deliberate human designs. This contrasts with Gwern’s claim that the scaling hypothesis predicted Diplomacy would fall whereas researchers working on the problem didn’t.

I think I come down more on Marcus’ side here in terms of how to update in response to the information. How it was done, in context, seems more important than who claimed it would get done how fast.

I do not get any points for predicting this would happen, since I did not think about the question in advance or make any predictions. It is impossible to go back and confidently say ‘I would have made the right prediction here’ after already knowing the answer. My guess is that if you’d asked, in the abstract, about Diplomacy in general, I would have said it was going to be hard, however if you’d told me the details of how these games were played I would have been much less skeptical.

I do know that I was somewhat confused how hard no-press Diplomacy was proving to be in previous attempts, or at least took it more as evidence no one was trying all that hard relative to how hard they tried at other problems.

I also note that there wasn’t much discussion that I saw of 2-player Diplomacy variations, of which there are several interesting ones, as a way of distinguishing between simultaneous play being difficult versus other aspects. Are Diplomacy actually surprisingly difficult? This would tell us. Perhaps I simply missed it.

Gwern’s conclusion [in the comments of this post](https://www.lesswrong.com/posts/3TCYqur9YzuZ4qhtq/meta-ai-announces-cicero-human-level-diplomacy-play-with) is that the main update from the Diplomacy AI is that Meta bothered to make a Diplomacy AI. This seems right to me, with the note that it should update us towards Meta being even more of a bad actor than we previously assumed. Also the note that previously Diplomacy had seemed to be proving surprisingly _hard_ in some aspects_,_ and that seems to have largely gone away now, so the update is indeed in the ‘somewhat scarier’ direction on net. Gwern [then offers background and timeline considerations](https://www.lesswrong.com/posts/3TCYqur9YzuZ4qhtq/meta-ai-announces-cicero-human-level-diplomacy-play-with?commentId=AAezCSkDRaJvrrzcK) from the scaling hypothesis perspective.

My big picture takeaway is that I notice I did not on net update much on this news, in any direction, as nothing was too shocking and the surprises often cancelled out.
