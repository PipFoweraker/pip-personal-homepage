---
title: "Limits of Prediction Markets"
url: "https://www.lesswrong.com/posts/c3iQryHA4tnAvPZEv/limits-of-prediction-markets"
source: "feedly"
sourceTitle: "LessWrong"
author: "aphyer"
published: 2020-07-14
saved: 2020-07-15
category: "rationality"
tags:
  - "business"
  - "economy"
  - "personal finance"
  - "investing"
status: "unreviewed"
layout: "reading.njk"
contentType: "summary"
---

Published on July 14, 2020 7:24 AM GMT  
  

_(Disclaimers: I work in the financial industry, though not in a way related to prediction markets. Anything I write here is my opinion and not that of my employer. I wrote this late at night, so there may be mistakes in it. If they are pointed out I will try to correct them.)_

  

## **SECTION I: INTRODUCTION**

So there's an argument that I've seen a lot over the past few years, particularly in LW-adjacent circles, that goes something like this:

> You say you believe X is likely to happen. But prediction markets say X is likely not to happen. Since markets are efficient, you must be wrong. Or if you do know better than the market, why aren't you rich? Since you haven't bet on that market to make free money, you must be lying. Or stupid. Or both!

This post is dedicated to disagreeing with that argument, not from an anti-Efficient-Market Hypothesis position, but from a pro-Efficient-Market Hypothesis position. My position is:

> The argument above is pretty much sound if we are discussing mainstream financial markets. If someone claims to have better information than a mainstream financial market on the value of Google stock, or of copper, they ought to either use this knowledge to make a huge amount of money or stop talking about it. However, it is **not** true if we are discussing prediction markets. Current prediction markets are **so bad** in **so many different ways** that it simply is not surprising for people to know better than them, and it often is not possible for people to make money from knowing better.

I've been meaning to write this for a while, but got tipped over the edge by the recent post [here](http://lesswrong.com/posts/MgFDzAfCku9MSDLuw/six-economics-misconceptions-which-i-ve-resolved-over-the), which talks about the limitation of prediction markets being the correlation of the events they predict to other assets, and their consequent value as hedging instruments. That is...well...it's not **wrong** exactly, but there are **so many other problems** that are **so much bigger** that I felt it was worth laying (some of) them out.

Math follows. I will be focusing on PredictIt for this analysis. Other prediction markets may work a bit differently, but similar analysis is applicable to any of them. If you think the math is wrong I am happy to discuss/make changes, but I very much doubt any changes will materially alter the final message.

As of this writing PredictIt has Donald Trump at 40% to win the election (or, to put it another way, you can pay 40 cents for a share that pays out $1 if Trump wins). Suppose you think he is more/less likely to win. How likely/unlikely does it need to be for Trump to win for you to make money (in expectation)? Or, to put it another way, what range of probabilities for Trump to win are consistent with the prediction market values?

  

## **SECTION II: REASONBLY SIMPLE PROBLEMS**

**1: Spread.**

This is only a small problem, but it is non-zero. PredictIt will sell me 'Donald Trump wins' shares for 40 cents, but will sell me 'Donald Trump loses' shares for 61 cents (which, from a finance perspective, works out very similarly to letting me sell 'Donald Trump wins' shares for 39 cents). So if I think there is a 39.5% chance of Trump winning, there is no way for me to make money off of it: I can buy 'Trump wins' shares for 40 cents, or sell them for 39 cents, and if the true value is 39.5 cents both of these will lose me money.

The range of possible probabilities for which you cannot make money starts at **39-40%.**

**2: Transaction Fees.**

PredictIt charges a 10% fee on profits (see [https://www.predictit.org/support/how-to-trade-on-predictit](https://www.predictit.org/support/how-to-trade-on-predictit\).)). As far as I can tell, it does **not** net profits against losses before calculating these fees. That is to say, if I make two $100 bets at even odds, win one, and lose the other, PredictIt will charge me a $10 fee on my winnings on the bet I won, even though overall I have made no money.

So if I think there is a 50% chance of Trump winning, and spend $100 buying Trump Wins shares, instead of my expected final money being 50% \* $250 = $125 for a $25 profit, my expected final money is 50% \* ( $250 - $15 ) = $117.5 for a $17.50 profit.

After accounting for this, the range of possible probabilities for which you cannot make money is:

100(1000.40∗0.9)+10\=42.6

1−100(1000.61∗0.9)+10)\=36.5

**3: Withdrawal Fees.**

When I actually attempt to withdraw my money from PredictIt, PredictIt charges an additional 5% fee on the withdrawal, giving me only 95% of my money back. How important this fee is to any given bet varies depending on how many bets I make on PredictIt (if I am making multiple bets without withdrawing money the effective impact of the fee on any given bet is smaller), but for now let's assume that (like most people) I do not have a PredictIt account and would need to create one to make this bet, and then withdraw my winnings immediately afterwards. If so, my effective winnings shrink again as 5% of my money (not just my winnings, all the money I deposited) disappears to PredictIt.

After accounting for this, the range of possible probabilities for which you cannot make money is

1000.95∗(1000.40∗0.9)+10\=44.8

  

1−1000.95∗(1000.61∗0.9)+10)\=33.2

  
**4: Investment Interest Rate/Time Value of Money.**

The presidential election will not happen until November. Let us be generous and assume that PredictIt settles bets immediately thereafter (though their page for the bet states 'PredictIt may determine how and when to settle the market based on all information available to PredictIt at the relevant time' and 'PredictIt’s decisions and determinations under this rule shall be at PredictIt’s sole discretion and shall be final'). It is currently July. That means it will be ~4 months until the bet resolves, during which time your money will be tied up in PredictIt.

What else could you be doing with that money? Well, depending on who you are, you could be getting reasonably risk-free returns via e.g. Treasuries or bank accounts, but those interest rates are low. On the other hand, **your bet is de facto a loan to PredictIt as well as whatever bet you think you made.** If PredictIt suddenly goes bankrupt in a massive downturn, or if whoever runs it takes the money and flees to Dubai, you may not get paid back. So, what effective interest rate would you charge to loan PredictIt money in the current financial environment? How risky an investment is it? If you would charge it 5% per year (which I don't think is all that high by the standards of bonds in risky companies), then over those 4 months you could have made about 2% return without the prediction market involved.

(Side note: this effect is larger or smaller depending on what event you are considering and how far in the future it lies. There's some reason to expect that this will make prediction markets a little more efficient as the event they pertain to draws closer, but there are still quite a few other problems).

After accounting for this, the range of possible probabilities for which you cannot make money is:

1000.98∗0.95∗(1000.40∗0.9)+10\=45.7

1−1000.98∗0.95∗(1000.61∗0.9)+10)\=31.8

  
So at this point, the 40% probability we see for Trump to win on PredictIt is completely compatible with any probability from 31.8%-45.7%. This is already...rather a wide range. And this is before we encounter two rather larger issues:

  

## **SECTION III: HORRIBLE MESSY PROBLEMS**

**5: Taxes**

**Note: I am not a lawyer! I am particularly not a tax lawyer! This section is speculative, even more US-centric than the rest of this piece, may well be wrong, and even if it is right your tax situation may be different!**

As far as I can tell, PredictIt winnings are treated by the US government as income. This means two things: first, that if you win money on PredictIt the US government will tax it; and second, that if you lose money on PredictIt the US government will not let you net it against anything. So, just like PredictIt's fees did, taxes require you to have a much higher chance of winning in order to be net-positive.

If you have a good accountant and think you can net PredictIt losses against another tax bill, or avoid paying taxes on PredictIt winnings, this might not be applicable to you.

If we assume you pay a 15% tax rate (according to Google this is pretty close to the nationwide average), the range of possible probabilities for which you cannot make money is:

1000.98∗0.95∗(1000.40∗0.765)+23.5\=50.0

  

1−1000.98∗0.95∗(1000.61∗0.765)+23.5)\=27.9

  
And if we assume you are paying 35% income tax (which requires a high salary, but I suspect a lot of the people who we're hoping will come and correct the prediction market for us have high salaries...) then the range of possible probabilities is:

1000.98∗0.95∗(1000.40∗0.585)+41.5\=57.2

  

1−1000.98∗0.95∗(1000.61∗0.585)+41.5)\=21.8

  

So now we're fully compatible with Trump being anywhere from below a one-in-four to above a one-in-two chance! And then we encounter the really big one.

  
**6: Betting Limits**

Part of how markets work is that people who know better will eventually be able to command more of the money. If I am able to predict the price of Apple stock better than anyone else, I can multiply my money faster, I can use my track record to get other people to invest with me, and I can direct large quantities of money, which both makes me a lot of money and allows me to move the market to a more accurate valuation.

PredictIt places a limit of $800 on your position in any one bet.

At the **market level**, this means that you can no longer rely on small numbers of intelligent people to fix market prices for you. Since a small number of intelligent people can only mobilize at most $800 each, you are reliant on **lots of different people** intelligently picking the right price.

And at the **individual level**, this makes it difficult to make any amount of money that matters off a prediction market.

In a real financial market, people will invest large amounts of money. If a hedge fund pays ten million dollars a year hiring dozens of smart people to discover a way of making 1% excess return, so long as they are investing at least a billion dollars that is worth it. Therefore, in a real financial market, there is reason to expect that any analysis that can correct market prices will be done, even if it is difficult and expensive to do.

PredictIt can just about manage to let people who can correct market prices make enough money to merit creating an account there.

Recall that, even with zero taxes, the range of possible probabilities for which you could not make money was:

1000.98∗0.95∗(1000.40∗0.9)+10\=45.7

  

1−1000.98∗0.95∗(1000.61∗0.9)+10)\=31.8

But this is the range of probabilities for which you cannot make **any money at all.**

Suppose that you think Trump's chance to win is 50%. If you invest the maximum $800, you will end up with in expectation:

8∗0.5∗0.98∗0.95∗(1000.4∗0.9)+10)\=$875.14

which gives an expected profit of about $75, and that was without considering taxes.

If you face a 35% tax rate, and think Trump's chance to win is **literally zero**, after investing $800 you end up with:

8∗0.98∗0.95∗(1000.61∗0.9∗0.65)+45)\=$1049.44

making a profit of about $250 in exchange for **knowing with absolute certainty that an event a prediction market has at a 40% probability is guaranteed not to happen.**

This is not sufficient to merit dedicating time and effort to research.

  

## **SECTION IV: CONCLUSION**

If someone claims that they are absolutely certain Trump will/will not win the election, they should be able to make money on a prediction market from this prediction. However, they may not be able to make very much money at all, and even if they are quite confident that the prediction market is wrong it may not be worth their time. Assuming that this person should be willing to bet on their views on a prediction market may be merited, but even from a purely financial view it is a much closer affair than you may think.

If someone claims that Nate Silver and 538's analysis team know better than a prediction market what Trump's odds of winning the election are, they are **quite likely correct.** It is **not possible** with prediction markets in their current state for them to make money from that knowledge. If you dismiss this person because they haven't bet on prediction markets, you are actively wrong, you are making me and a system I believe is a good idea look bad by association, and I would like you to stop talking about this.

  
  
[Discuss](https://www.lesswrong.com/posts/c3iQryHA4tnAvPZEv/limits-of-prediction-markets#comments)
