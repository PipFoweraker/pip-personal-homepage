---
title: "The Bullwhip Effect"
url: "https://www.lesswrong.com/posts/AwAAAtRpemBqyhDC2/the-bullwhip-effect"
source: "feedly"
sourceTitle: "LessWrong"
author: "aysajan"
published: 2021-07-13
saved: 2021-08-09
category: "rationality"
tags:
  - "supply chain"
status: "unreviewed"
layout: "reading.njk"
contentType: "summary"
---

Published on July 13, 2021 8:40 PM GMT  
  

## Background

In the 1990s, when Procter & Gamble was examining the supply chain order patterns for one of its best-selling products, Pampers diapers, they discovered an interesting phenomenon. As they expected, the sales at its retail stores fluctuated moderately. However, as they moved further up in the supply chain, they observed greater and greater amplification in order variabilities at the distributor's and supplier's sites. 

The supply chain phenomenon of this increasing variability of orders is called [the Bullwhip Effect](https://sloanreview.mit.edu/article/the-bullwhip-effect-in-supply-chains/). It was named after the behavior of a whip when one swings from the origin (e.g., the increased amplitude of the whip in the figure below). The bullwhip effect is used to describe the amplifying demand variation in response to consumer demand as we move up in the supply chain. In this post, I will discuss when and why this effect happens and when and why it does not. 

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/e13193735f29cd9f51b8da34f73f05e17b143af66752fd0a.png)

Bullwhip effect ([source](https://commons.wikimedia.org/w/index.php?curid=10414792))

As an example, consider a simple shoes supply chain with a retailer, wholesaler, distributor, and manufacturer. Each week, supply chain members engage in a non-coordinated multi-step activities:

-   The retailer observes the customer shoes demand of the current week, satisfies the demand with the available inventory, and places an order with the wholesaler based on consumer demand forecasting for the next week.
-   The retailer’s order request causes the wholesaler to fulfill the order with the available inventory and then place a new order with the distributor by forecasting the retailer's order next week.
-   Moving further up in the supply chain, the distributor fulfills the order request from the wholesaler and places an order with the manufacturer by forecasting the wholesaler's order next week.
-   Finally, the manufacturer fulfills the wholesaler’s order request.

We are interested in analyzing order patterns of different participants over time when they face varying consumer demand. In particular, we are interested in evaluating the degree of demand/order variability in the supply chain as we move up the supply chain (i.e., move further away from the consumer). Let’s assume the manufacturer has unlimited capacity such that he/she is always able to fulfill any order request from the distributor. At each stage, if any participant (except manufacturer) lacks of inventory to satisfy demand of immediate downstream, he/she records a back-order, which needs to be fulfilled first from the next order. We express the relationship between the supply chain members using a simple chain:

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/96c2346298761ad8ab0b8164a6d4251dd3bd855e3c974880.png)

A simple shoes supply chain

## The Model

Let’s unpack demand/order patterns for each participant by defining explicit variables on demand/order, time, and supply chain levels. We first consider a case with no back order. The key steps are:

-   The retailer observes d0(t) of consumer demand at week t and satisfies the demand.
-   The retailer then places an order of d1(t) according to the forecast of consumer demand for week t+1.
-   The wholesaler receives the order request of d1(t), fulfills it and places a new order d2(t) with the distributor.
-   Moving up the supply chain stream, the distributor fulfills the wholesaler’s order request of d2(t) and places an order of d3(t) with the manufacturer.
-   The manufacturer always fulfills the distributor’s order request.

Formally, dn(t) represents the demand/order quantity of the participant on level n at week t. For instance, d1(2) is the demand/order placed by the level 1 participant, i.e., the retailer, at week 2, d3(5) is the demand/order placed by the distributor at week 5, etc. To evaluate the degree of variation on demand/order, we need consumer demand d0(t)fluctuating over time, which serves as input. More generally, let's assume demand/order dn+1(t) for the (n+1)th upstream participant at time t is a function of demands dn(t), dn(t−1) of the immediate downstream:

dn+1(t)\=f(dn(t),dn(t−1))

A change ϵn(t) of demand dn(t) causes change in demand, thus order at the immediate upstream n+1:

∂f∂dn(t)\=limϵn(t)→0f(dn(t)+ϵn(t),dn(t−1))−f(dn(t),dn(t−1))ϵn(t)⟹f(dn(t)+ϵn(t),dn(t−1))≈f(dn(t),dn(t−1))+∂f∂dn(t)⋅ϵn(t)≈dn+1(t)+∂f∂dn(t)⋅ϵn(t)

We can use the ratio ϵn+1(t)ϵn(t) of demand variations to evaluate the impact of demand variability in the downstream on the demand in the immediate upstream:

ϵn+1(t)ϵn(t)\=∂f∂dn(t)

What does this ratio look like in the context of different types of function f? We consider two general cases:

_Case 1:_ Without back-order. For instance, supply chain members always have enough inventory to fulfill order requests from the downstream player, i.e., the orders are always fulfilled immediately without any lead time.

-   The amplification case. In this scenario we have ∂f∂dn(t)\>1. For instance,

f(dn(t),dn(t−1))\=dn(t)+\[dn(t)−dn(t−1)\]⟹∂f∂dn(t)\=2

As a result, we can expect the demand variability of an upstream is always greater than those of the downstream members. In our shoes supply chain example, even when consumer demand do not seem to vary much, there is increased variability in the retailer's order to wholesaler, wholesaler's order to distributor, etc (see figure below, with consumer demand ~ N(100,5)).

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/3c36b798eb48785f35cd82b16432b47a2fb9066e000d32c1.png)

Increasing variability of orders up in the shoe supply chain

-   The damping case. This scenario is associated with ∂f∂dn(t)<1. For instance, consider a two-step moving average function:

f(dn(t),dn(t−1))\=dn(t)+dn(t−1)2⟹∂f∂dn(t)\=12

Thus, we have a decreasing demand variability of the upstream players. In our shoes supply chain, compared to the consumer demand variability, we observe decreased variability in the retailer's order to wholesaler, wholesaler's order to distributor, etc (see figure below, with consumer demand ~ N(100,5)).

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/1add58bc65ffdb840f2331149cd072ebb08da79c0e1199c8.png)

Decreasing variability of orders up in the shoe supply chain

-   The no-change case with∂f∂dn(t)\=1. Let's consider naive forecasting model where a member orders exactly the same as the demand from the immediate downstream:

f(dn(t),dn(t−1))\=dn(t)⟹∂f∂dn(t)\=1

As a result, there is no change in demand variability up in the supply chain.

_Case 2:_ With back-order. In this instance, each player starts with an initial inventory and fulfill orders depending on the available inventory. If there is no inventory left, it will be back-ordered and fulfilled first from the order placed next period.

Formally, demand/order dn+1(t) for the (n+1)th upstream player is a function of demand dn(t) of the immediate downstream and  its own available inventory vn+1(t) at time t:

dn+1(t)\=f(dn(t),vn+1(t))

A change ϵn(t) of demand dn(t) causes change in demand/order at the immediate upstream:

∂f∂dn(t)\=limϵn(t)→0f(dn(t)+ϵn(t),vn+1(t))−f(dn(t),vn+1(t))ϵn(t)⟹f(dn(t)+ϵn(t),vn+1(t))≈f(dn(t),vn+1(t))+∂f∂dn(t)⋅ϵn(t)≈dn+1(t)+∂f∂dn(t)⋅ϵn(t)

Similarly, we can use the ratio ϵn+1(t)ϵn(t) to evaluate the impact of demand variability in the downstream on the demand in the immediate upstream:

ϵn+1(t)ϵn(t)\=∂f∂dn(t)

What does this ratio look like in the context of a specific function f? We consider a simple case:

f\=dn(t)+\[dn(t)−vn+1(t)\]+, where\[dn(t)−vn+1(t)\]+\={dn(t)−vn+1(t), if dn(t)\>vn+1(t)0, if dn(t)≤vn+1(t)

The first instance is associated with back-order and second one with no back-order. As a result, we have

∂f∂dn(t)\={2, if back-order1, if no back-order

Therefore, we have a non-decreasing demand variability up in the supply chain.

## Summary

The bullwhip effect in supply chain illustrates that even when the consumer demand does not vary much, there is an increased variability up in the supply chain. This post suggests that bullwhip effect is not always present in a supply chain and the degree of variability heavily depends on the demand forecasting model used by the supply chain participants. For instance, when a two-step moving average is used, the degree of variability decreases; when an exponential-smoothing model with a smoothing factor of 1 is used, the degree of variability amplifies, causing inefficiencies in inventory management, capacity planning, etc. From the perspective of each member in the supply chain, the member should share the demand data with the upstream participants so that they all have access to the same raw demand data to update their forecast.

_Source code is available at_ [https://github.com/AysajanE/bullwhip\_with\_dag](https://github.com/AysajanE/bullwhip_with_dag).

  
  
[Discuss](https://www.lesswrong.com/posts/AwAAAtRpemBqyhDC2/the-bullwhip-effect#comments)
