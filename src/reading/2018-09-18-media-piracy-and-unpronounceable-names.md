---
title: "Media Piracy and Unpronounceable Names"
url: "http://www.antipope.org/charlie/blog-static/2018/09/media-piracy-and-unpronounceab.html"
source: "feedly"
sourceTitle: "Charlie's Diary"
author: "Graydon"
published: 2018-09-18
saved: 2018-09-19
category: "books"
status: "unreviewed"
layout: "reading.njk"
contentType: "full"
---

By now, if you're one of Charlie's readers, you've probably absorbed the notion that security is a process. It's not easy to go from that to what it means in operant terms, but I lack sense so I'm going to try.

E-books get pirated automatically, inevitably, and with malicious intent. (The usual malice is to use the purportedly free ebook as a malware vector.) Thinking about what would have to be true in order to stop this is instructive; every ebook would have to have a unique identifier, you would have to have a unique identifier, and there would have to be some sort of central repository of transactions that kept records in perpetuity. It wouldn't be restricted to media purchases, because then you have to define "media purchase" (as distinct from "turnips"), which is hard, and if you did, someone could claim to be selling turnips when they were really selling media and cheat the system. So every transaction would have to be uniquely and permanently recorded.

This is bad; this is a tool for finding every donor to your political opponents, either last election or thirty years ago, once you have enough power to inflict harm on them. And once the list exists, it's indestructible; digital copying is cheap. Anything on a computer stays there forever. And because the computer is managed by human beings, adding or deleting transactions will be available for a suitable fee.

Building a system like that to get rid of media piracy is **not** a net win. In any way. (Yes, this does relate to a current EU political issue, but let's try to keep this abstract.)

Ashby's Law of Requisite Variety says you want to control a system, you have to provide matching variety for the variety of the system, constrain the variety of the system, or provide the control mechanism with a variety amplifier. ("variety" = the number of possible states in a system. Or maybe the amount of information in the system; dragging you into that increasingly fractal exploration of the meaning of meaning is not where I'm going with this.)

The implication, all-too-often missed, is that the variety amplifier is **also** a system. Which means you want it to be painfully simple, lest you find yourself stacking control systems on control systems into a tottery edifice of fail. Only it has to control something complicated.

This is where a basic principle comes in, for producing systems that work. Do not make simple things complicated, and do not make complicated things simple.

The single quickest way to make simple things complicated is to lump them together. The venerable Unix philosophy of building applications that do one thing, well, has a sound basis in systems theory. You still have to pick which applications you need but the effort involved in making the individual applications work is much easier.

So when it comes to transactional security, well. What are we really trying to do?

We want a system where you don't need to identify yourself to pay for something. (That gets us that global transaction database and all the nasty problems it creates.)

Inevitably, you **do** need to identify yourself if you want to dispute what you were sold. ("Ordered 12-axis milling machine. Paid for 12-axis milling machine. Received 12 gross Old People Hats in diverse colours. Do not want.")

Ah! So everybody needs some sort of cryptographic true name for transactional purposes.

No. Really, seriously, emphaticaly no, becuase any such thing creates that original global transaction database problem. We really don't want that. (We may have to torch a few credit rating agencies to prevent it, because those entities do want it; the extent to which they've achieved it gives them a great deal of money and power.) This would be even worse than the current practice of using your birthday as an identity token.

There's a rule about authenticating transactions and there's a rule about true names.

The true name rule is that you never, ever want it to be legible. (Not even to you!) You want to be the Wizard Iff of the Unpronouncable Name, with a true name that is impossible to know.

The transaction rule is that all transactions should be push transactions. You send an event. You don't establish any kind of waiting connection or do anything reversible or require both sides to reconcile a transaction history.

Credit cards do not do this; credit cards are a design that assumes humans, terrible communications, and an entire abscence of malice.

If you're buying something, there are in principle at least five parties.

There's the purchasing entity, there's the financial entity used by the purchaser, there's the controlling entity, there's the selling entity, and the selling entity's financial entity.

Even if you buy something with cash at the corner store; there's a government backing that cash. The controlling entity is any government involved for things like customs tarriffs or taxation. (VAT, HST, sales tax, etc.) There can easily be more than one.

Who needs to do what?

You, the purchasing entity, need to know how much you spent; you need to be able to prove you paid for a specific bill of goods to both the seller and at least one controlling entity. You need to be able to prove what the delivery requirement you contracted for was as a component of the transaction. You want to be able to do this without access to the seller's databases and without leaving information about yourself with the seller.

The selling entity needs to know how much it recieved and to associate that with a specific bill of goods and a delivery requirement. ("Someone sent us €116.83; why?" It's important to be able to answer this question.) The selling entity also needs to be able to prove recipts to at least one controlling entity.

The controlling entity needs to know what was sold (Maybe "clothing" is a different tariff category than "floatation device", but you wear a flotation device, so there's ambiguity), for how much, and between who. There has to be a capacity for a tax audit. (Sometimes the purchaser is BAE Systems!) (There often literally isn't that capacity for audit, these days. Too much volume, insufficient support for automation.)

Pretty much everyone involved has an interest in being able to prove that "this is a real transaction identifier" without knowing anything about the transaction. (Innovative cryptographers are not common because the problems are hard!)

Now, I think this stuff is fascinating, but getting into _how_ rather than _what_ is entirely inappropriate here.

So let's look at what a credit card purchase by a private individual looks like in a system that follows both rules: everything is a push; no one knows your true name.

You bring your collection of items that you've picked from the presented inventory to a checkout location. That might be a physical store; it might be an online store.

You push a goods request to the merchant. You are **not** creating a "we started talking about something" identifier; if you bind all of these steps together like that, you're created that global transaction database because things stop being events and start being tendencies. You want to look doubtfully and carefully at any perceived necessity to associate each step with the previous step, and at a requirement no one entity has all the steps. (There will need to be laws to keep it that way.)

The goods request you pushed includes some means of contacting you. (SMS, email, NFC phone crypto module, but under no circumstances a physical electronic token. Physical token security is six separate nightmares with progressively longer teeth.) This contact address can be, and should be, unique to this goods request. ("100 disposable SMS addresses for purchases" is just the sort of thing your mobile service provider wants to sell you.)

The checkout location has some means (cashier, scanning device, website commerical automation...) to generate a quote from your goods request, and it pushes the quote to your contact address. The quote comes with a payment target. The payment target is (likely) crypto-gable that your device can authenticate as the correct _kind_ of crypto gable, but not actually decode. The payment target includes the payment amount generated with the quote.

You push the plain-text amount and the payment target to your financial institution's "pay this" mechanism. If you flubbed the plain-text amount, the cross-check doesn't complete the payment; it pushes an error message to you. The financial institution **does** know how to read the payment target crypto-gabble and pushes the money to the receiving location in the payment target you got with the quote. (You never know what that was.)

When the receiver institution gets the money, they push the quote identifier and "payment completed" to the merchant. The merchant knows _nothing_ about what you did to pay; in principle, you might have weighed out rhenium powder in front of a grave and dignified older person whose financial institution then generated the transaction to the merchant's.

Your purchase is released or shipped. Ideally, the destination is handled the same way as the payment target; the merchant gets it as crypto gabble they can authenticate as the correct sort of crypto-gabble, but not outright read. They use their shipping service to get a quote back to know how much to charge you for shipping, and bundle that with the quote they sent you for the goods.

That's way less convenient than what happens now, becuase you have to respond three times; you have to push the goods request, the payment, and the destination as distinct events with different intermediaries. Why would you want to do that instead of the usual looks-like-five-steps "give us all the information and commit" -- what you want to buy, who you are, your payment details, where to send it, are you sure? -- that's generally used now?

Because you don't have to put any of your actual details out there. The merchant never knows who you bank with; they just know they sent a quote, and the quote got paid. The merchant never needs to use your home address as part of the authentication process for your credit card and their database never holds your credit card number. You never **have** a credit card number because all payment orders are one-time. Even with your bank, you didn't tell them your true name; you followed a push-only processes with the bank, at least two tokens you've got, and the (public!) name repository to generate a specific persistent identity _distinct from your true name_ with the bank. (You might want to consider a rule that no individual ever knows what a majority of the tokens involved in any name-referencing transaction are.)

If you need to dispute your goods received or dispute a charge, things get tricky; someone has to be able to unwrap multiple steps of the transaction. The pieces are all there, but often the pieces will be in different national jurisdictions. There probably ought to be a court system for this, so no commercial entity ever has the ability to open a majority of the individual push events in a complete transaction.

How to do this -- sensibly, publicly, without relying on secrecy in the algorithms and with tolerable convenience -- isn't easy. It won't fix book piracy, either.

But it would help a lot of other things.
