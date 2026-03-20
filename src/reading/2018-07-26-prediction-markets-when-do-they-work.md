---
title: "Prediction Markets: When Do They Work?"
url: "https://thezvi.wordpress.com/2018/07/26/prediction-markets-when-do-they-work/"
source: "feedly"
sourceTitle: "Don't Worry About the Vase"
author: "TheZvi"
published: 2018-07-26
saved: 2018-08-25
category: "rationality"
tags:
  - "games"
  - "business"
status: "unreviewed"
layout: "reading.njk"
contentType: "full"
---

Epistemic Status: Resident Expert

I’m a little late on this, which was an old promise to Robin Hanson (not that he asked for it). I was motivated to deal with this again by the launch of Augur (REP), the crypto prediction market token. And by the crypto prediction market token, I mean the empty shell of a potential future prediction market token; what they have now is pretty terrible but in crypto world that is occasionally good for a $300 million market cap. This is, for now, one of those occasions.

The biggest market there, by far, is on whether Ether will trade above $500 at the end of the year. This is an interesting market because _Augur bets are made in Ether._ So even though the market (as of last time I checked) says it’s 74% percent to be trading above $500 and it’s currently $480 (it’s currently Thursday, July 26, and I’m _not_ going to go back and keep updating these numbers). When I first saw this the market was at 63%, which seemed to me like a complete steal. Now it’s at 74%, which seems more reasonable, which means the first ‘official DWATV trading tip’ will have to wait. A shame!

A better way to ask this question, given how close the price is to $500 now, is what the ratio of ‘given Ether is above $500 what does it cost’ to ‘given Ether is below $500 what does it cost’ should be. A three to one ratio seems plausible?

The weakness (or twist) on markets this implies applies to prediction markets generally. If you bet on an event that is correlated with the currency you’re betting in, the fair price can be very different from the true probability. It doesn’t have to be price based – think about betting on an election between a hard money candidate and one who will print money, or a prediction on a nuclear war.

If I bet on a nuclear war, and win, how exactly am I getting paid?

Robin Hanson, Eliezer Yudkowsky and Scott Sumner are big advocates of prediction markets. In theory, so am I. Prediction markets are a wonderful thing. If you’re not familiar with them or want to read more, a good place to start [is this wiki](https://wiki.lesswrong.com/wiki/Prediction_market). By giving people a monetary incentive to solve problems and share information, we can learn probabilities (what will GDP be next year?) and conditional probabilities (what will GDP be next year if we pass this tax cut bill?) and use the answers to make the best decision. This method of making decisions is called futarchy.

Formally, a prediction market allows participants to buy and sell contracts. Those contracts then pay out a variable amount of money. Typically this is either binary (will Donald Trump be elected president?), paying out 100 if the event happens and 0 if it doesn’t, or they are continuous (how many electoral college votes will Donald Trump get?) and pay proportionally to the answer. Sometimes there are special cases where the market is void and all transactions are undone, at other times strange cases have special logic to determine the payout level.

There are three types of prediction markets that have gotten non-zero traction.

The first is politics. There are markets at PredictIt and BetFair and Pinnacle Sports, and there used to be relatively deep markets at InTrade. These markets matter enough to get talked about and attract some money when they involve major events like presidential elections, but tend to be quite pathetic for anything less than that.

The second is economics. There are lots of stocks and futures and options and other such products available for purchase. Futures markets in particular are prediction markets. They don’t call themselves prediction markets, but that is one of the things they are, and the information they reveal is invaluable. It’s even sometimes used to make decisions.

The third is sports. Most televised sporting events have bookmakers offering odds and taking bets. They use their own terminology for many things, but these are the closest thing to true prediction markets out there.

What makes a successful prediction market? What makes an unsuccessful prediction market? When are they efficient? What gets people involved?

To get a thriving market, you need (at least) these five things.

### I

### Well-Defined

If you can’t exactly define the outcome, you can’t have a prediction market. Even highly unlikely corner cases must be resolved. Thus, if you want a market on “Donald Trump is elected president of the United States in 2020” you need to know exactly what happens if he dies after the election but before inauguration, or if there is a revolt in the electoral college, or if the election is fraudulent or cancelled, or if he loses to a different person also named “Donald Trump.”  That’s not because Trump makes such issues more likely. If you were betting on Obama vs. Romney, you’d need to do all the same stuff.

In sports markets, this means writing up a multi-page document detailing what happens when a game is rained out, disputed, postponed, tied, you name it, along with all the other rules. If there’s an angle left ambiguous, you can bet (well you can’t, but if you could, you’d have good odds) that someone will try to take advantage of it eventually. That leaves everyone mad and ruins good business relationships. It’s important to have clear rules and stick to them.

One of the first markets on Augur asked, “Will England defeat Croatia in the World Cup?” Which I immediately recognized as a really bad wording, because it was ambiguous. If the game had gone to overtime, or even to penalty kicks, and England had advanced, what happens? In a real sportsbook, generally bets default to regulation time only, so the match would be ruled a draw, and the answer would be “No” even if England later won.

That’s not acceptable. All it takes is one corner case to get people yelling at each other, and drive them away. When they do happen, the sportsbook is wise to eat the loss, even if that means paying both sides, and then fix its procedures. That’s one benefit of having a central authority to blame.

I’m also including in this the requirement that _you can be confident you can collect if you win._ As one sportsbook’s slogan puts it, sweat the game, not the payout. Bets with people who might not pay you require _huge_ edges. They’re about accepting the risk to land the whale. They don’t do much for price discovery, and are for professionals only.

### II

### Quick Resolution

The faster the market pays out, the more interest you’ll get. Markets that tie up money for weeks or months, let alone years, see decisive declines in participation. Before the season, there are markets for which teams will win the championship, or how many wins each team will have. This seems great, since if you’re right you can have a huge advantage, and it gives you an interest in games for much or all of the season.

Despite that, you will see less money wagered on any given season win total _than for a random game played by that team._ Usually by an order of magnitude. That’s how valuable quick resolution is. Even in March Madness, where everyone fills out office brackets, the bulk of the real wagering goes game by game. There are lots of propositions, and there’s value there, but only for small amounts. Betting your bracket before the tournament, _despite brackets being something presidents do to show they’re in touch,_ isn’t a thing for serious money.

Thus, markets on small events like individual games are bigger, and more efficient, than markets on bigger and more interesting things like entire seasons or even a playoff series. The primary purpose of the long-term markets isn’t to make money; it’s to provide a service so people can see what odds have been assigned to various outcomes.

Major events like presidential elections have enough inherent interest to still see solid markets, but only barely. There’s a lot of interest in what the odds are, but the volumes traded are quite thin, so much so that it is in the interest of partisans to trade in order to move the price and thus change the political narrative.

Economic markets are the only place longer-term markets prosper.

Note that if the market is sufficiently liquid, it can act _as if_ it is short term, provided the prices will move quickly enough, since participants can then exit their positions.

### III

### Probable Resolution

Trading in a prediction market ties up capital, creates risk and requires optimization pressure. I need to pay attention to the market, both to decide what fair value is and then to go about maximizing and making good trades.

If that market is _conditional,_ and trades were only valid if those conditions were met, we have a problem: I’ve wasted my time, money and risk capacity, and gotten nothing in return.

One of the markets I liked a lot as a gambler was called the Home/Away line in MLB. The idea was, you added up all the runs scored by the home teams and compared them to all the runs scored by the away teams, and bet on which would be higher, or on the sum of all runs scored that day, which was called The Grand Salami. There was lots of value in these lines because people were using very simple heuristics, and if you did first-level statistics on runs scored in games and how distributions add up, you could get a big edge.

What was continuously frustrating was that often one game would get rained out, cancelling all your wagers. Often I’d have locked in large profits, and they’d be lost.

This wasn’t enough to keep me from betting, because I got my money back within a day and the edge was huge. But when funds were tight, it shifted those funds towards other things, and every time I thought about looking at the Home/Away line, my brain fired back ‘are you sure you want to bother?’ so I only cared when my edge was large.

Gamblers actively prefer betting on odds that can’t tie, e.g. betting on a football team -3.5 or -2.5 rather than -3.0, because the -3 line ties 10% of the time. The bookmaker agrees!

If you are instead tying up your money for weeks, months or even years, and instead of a 10% chance of rain somewhere there’s a 50% or even 90% chance the event doesn’t fire, that’s much worse. If your’e dealing with a hyper-complex Hansonian death trap of a conditional market where it’s 99%+ to not happen, even with good risk measurement tools that don’t tie up more money than necessary, no one is going to want to put in the work and tie up the funds.

### IV

### Limited Hidden Information

Insider trading of securities is illegal. This seems at odds with price discovery. If I know something you don’t know, then my _not_ trading on it makes the price less accurate. One might suggest that allowing insiders to trade would make the price more efficient.

The problem is that it drives people away.

If other people know something important I don’t, then my trades are giving them a way to pick my pocket. When I look at the price and see it is wrong, my prior is ‘there is something I don’t know’ rather than ‘there is something _they_ don’t know or understand’. I’m the one making the mistake. I’m the sucker. So I walk away.

Thus, while the individual trades of insiders make the market more efficient, they punish others trying to share their information and analysis with the market. This is bad. Bad enough to kill outright markets with too much risk of insider information.

The first season of Survivor, there was a market on who would win. The production crew found out. Then there was no market.

Another important case: If a person with a large role in choosing the outcome can bet in the market, you might not want to risk betting against him. Or bet at all.

When there is a big injury risk in a game, the market dies until the issue is resolved. When the issue is resolved, trading picks back up no matter the outcome.

Even reduction of uncertainty as such can be important. Before important events like elections often money will ‘sit on the sideline’ until the outcome is known. This can even result in bad outcomes driving prices _up._ We may not like the new boss, but at least we now know who he is and can go about our business.

In my experience with prediction markets, important hidden information other traders could know acts as an outright veto on the market. It might not do that if the market had enough ‘natural’ trading volume, but that’s a high bar to clear.

### V

### Sources of Disagreement and Interest

Also known as, Suckers at the Table.

Any market, like a poker table, requires sources of disagreements and profits. Without a sucker at the table, why participate in the market? Remember, if you can’t spot the sucker in your first half hour at the table, then you are the sucker.

Ideally, you want either a direct subsidy to the market, or natural buyers and sellers.

If someone has a reason to trade even at a not so great price, for example airlines or countries hedging against moves in oil prices, then everyone can compete to make money off of that. The same would go if someone wanted to hedge against a political event, or to bet for or against their favorite team on principle – either to make it interesting, or to get what I used to half-jokingly call ‘compensation for our pain’ when the Mets inevitably lost again.

Another class of ‘natural’ traders are gamblers or noise traders, who demand liquidity for no particular reason. They too can be the sucker.

If people who want to learn fair probabilities subsidize the market, like donors subsidize the NGDP futures markets Scott Sumner helped create, that also works.

And of course there’s always the people who _think_ they know something, and are sadly mistaken.

What traders need, more than anything else, is the ability to tell a story for why their trade is a good idea. To do that, they need to know why they have the opportunity to make this trade. What do they know that others don’t know? What mistake do they think people are making?

For sports, politics and economics, everyone has an opinion, so it is easy for them to get the idea that they have the advantage.

The genius of a binary bet on Ether prices _that trades in Ether_ is that there are a lot of angles where one can think you know something the market doesn’t fully know, and lots of mistakes you can think other people are making. It’s easy to think of many different angles and approaches one could take. One can trade short term, or trade long term, do arbitrage or use it for leverage. Another could be doing it as a form of speech, or an experiment, and the group that can reach the market is doubtless quite biased.

It’s easy to make that leap to ‘I know why he’s willing to give me this trade’ and even to ‘I know exactly what mistake he is making.’ It’s a great choice for a big initial market.

### VI

### Summary and Conclusion

Prediction markets rely on attracting a variety of participants, including both ‘losers’ who have natural reasons to participate, and ‘winners’ who will be attracted by that value.

Any critical issue can kill a prediction market dead, or even an entire prediction market ecosystem.

If your market isn’t well-defined, arguments over price become arguments over the rules, which turn into very angry participants. If this happens even a small percentage of the time, it drives everyone away.

If your market doesn’t resolve quickly, and quickly is on the order of days or at most a few weeks, it needs to be massively liquid and refer to real world questions people have natural exposures to, to create participation. It ties up cash and doesn’t offer the rush of a good gamble. No one wants to bet on an obscure outcome years from now.

If your market is unlikely to resolve, participants will find other uses for their time and money. The chance here has to be small, well under 50%, and much lower if time to resolution isn’t quick. Years-long markets that are unlikely to trigger are going to have severe issues.

If your market has potential hidden information, that is a tax on everyone who participates, who are prey to adverse selection. Everyone must worry that the market knows what they don’t know, and that them liking one side of a trade means the person on the other side has a secret; there are even traders in such markets that follow a strategy of ‘find the naively correct bet, and bet the other way,’ which is known (or should be known) as [The Constanza](https://en.wikipedia.org/wiki/The_Opposite).

If your market doesn’t draw natural interest and offer sources of disagreement, to create a foundation of participation and liquidity, or at least bribe the participants with explicit subsidies, there’s nothing to build on and no interest.

In addition to these threats, such markets face regulatory and legal hurdles, and face various ethical concerns. If you offer one market that seems to mimic a regulated trade, such as an option on a stock, or that sounds distasteful, such as the so-called ‘assassination markets,’ that can be all anyone will see when they look at your offerings. Even though such concerns, frankly, are mostly quite stupid, they’re real and people care about this a lot. They’ve gotten basically every past attempt at prediction markets (other than bookmakers and professional economic trading platforms) shut down.

Active curation is necessary to deal with many of these issues, and to provide simple ease of use and ease of finding what one is looking for and would be interested in.

Surgical use of prediction markets for key information points remains a great idea, and in many cases people love a good bet. But we shouldn’t get too ambitious, and keep an eye on the practical needs of participants.
