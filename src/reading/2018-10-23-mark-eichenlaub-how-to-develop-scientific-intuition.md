---
title: "Mark Eichenlaub: How to develop scientific intuition"
url: "https://kajsotala.fi/2018/10/mark-eichenlaub-how-to-develop-scientific-intuition/"
source: "feedly"
sourceTitle: "Kaj Sotala"
author: "Kaj Sotala"
published: 2018-10-23
saved: 2019-07-10
category: "rationality"
status: "unreviewed"
layout: "reading.njk"
contentType: "full"
---

Recently on the [CFAR](http://rationality.org/) alumni mailing list, someone asked a question about how to develop scientific intuition. In response, [Mark Eichenlaub](http://umdperg.pbworks.com/w/page/106851135/Mark%20Eichenlaub) posted an excellent and extensive answer, which was so good that I asked for permission to repost it in public. He graciously gave permission, so I’ve reproduced his message below. (He otherwise retains the rights to this, meaning that the standard CC license on my blog doesn’t apply to this post.)

* * *

From: **Mark Eichenlaub**  
Date: Tue, Oct 23, 2018 at 9:34 AM  
Subject: Re: \[CFAR Alumni\] Suggestions for developing scientific intuition

Sorry for the length, I recently finished a PhD on this topic. (After I wrote [the answer kerspoon linked](https://www.quora.com/Do-grad-school-students-remember-everything-they-were-taught-in-college-all-the-time/answer/Mark-Eichenlaub), I went to grad school to study the topic.) This is specifically about solving physics problems but hopefully speaks to intuition a bit more broadly in places.

I mostly think of intuition as the ability to quickly coordinate a large number of small heuristics. We know lots of small facts and patterns, and intuition is about matching the relevant ones onto the current situation. The little heuristics are often pretty local and small in scope.

For example, the other day I heard this physics problem:

You set up a trough with water in it. You hang just barely less than half of the trough off the edge of a table, so that it balances, but even a small force at the far end would make it tip over.

[![](http://kajsotala.fi/assets/2018/10/mark1-300x206.png)](http://kajsotala.fi/assets/2018/10/mark1.png)

You put a boat in the trough at the end over the table. The trough remains balanced.

[![](http://kajsotala.fi/assets/2018/10/mark2-300x196.png)](http://kajsotala.fi/assets/2018/10/mark2.png)

Then you slowly push the boat down to the other end of the trough, so that’s it’s in the part of the trough that hangs out from the table. What happens? (I.E. does the trough tip over?)

[![](http://kajsotala.fi/assets/2018/10/mark3-300x203.png)](http://kajsotala.fi/assets/2018/10/mark3.png)

The answer is ([rot13](https://rot13.com/)) Gur gebhtu qbrf abg gvc; vg erznvaf onynaprq (nf ybat nf gur zbirzrag bs gur obng vf fhssvpvragyl fybj fb gung rirelguvat erznvaf va rdhvyvoevhz).

I knew this “intuitively”, by which I mean I got it within a second or so of understanding the question, and without putting in conscious effort to thinking about it. (I wasn’t certain I was right until I had consciously thought it out, but I was reasonably confident within a second, and my intuition bore out.) I don’t think this was due to some sort of general intuition about problem solving, science, physics, mechanics, or even floating. It felt like I could solve the problem intuitively specifically because I had seen sufficiently-similar things that led me to the specific heuristic “a floating object spreads its weight out evenly over the bottom of the container it’s floating in.” Then I think of “having intuition” in physics as having maybe a thousand little rules like that and knowing when to call on which one.

For this particular heuristic, there is a classic problem asking what happens to the water level in a lake if you are in a boat with a rock, and you throw the rock into the water and it sinks to the bottom. One solution to that problem is that when the rock is on the bottom of the lake, it exerts more force on that part of the bottom of the lake than is exerted at other places. By contrast, when the rock is still in the boat, the only thing touching the bottom of the lake is water, and the water pressure is the same everywhere, so the weight of the rock is distributed evenly across the entire lake. The total force on the bottom of the lake doesn’t change between the two scenarios (because gravity pulls on everything just as hard either way), when the rock is sitting on the bottom of the lake and the force on the bottom of the lake is higher under the rock, it must be lower everywhere else to compensate. The pressure everywhere else is $\\rho g h$, so if that goes down, the level of the lake goes down. Conclusion: when you throw the rock overboard, the level of the lake goes down a bit. When I thought about that problem, I presumably built the “weight distributed evenly” heuristic. All I had to do was quickly apply it to the trough problem to solve that one as well.

And if someone else also had a background in physics but didn’t find the trough problem easy, it’s probably because they simply hadn’t happened to think about the boat problem, or some other similar problems, in the right way, and hadn’t come away with the heuristic about the weight of floating things being spread out evenly.

To me, this picture of intuition as small heuristics doesn’t look good for the idea of developing powerful intuition. The “weight gets spread out by floating” heuristic is not likely to transfer to much else. I’ve used it for two physics problems about floating things and, as far as I know, nothing else.

You can probably think of lots of similar heuristics. For example, “[conservation of expected evidence](https://www.lesswrong.com/posts/jiBFC7DcCrZjGmZnJ/conservation-of-expected-evidence)“. You might catch a mistake in someone’s reasoning, or an error in a long probability calculation you made, if you happen to notice that the argument or calculation violates conservation of expected evidence. The nice thing about this is that it can happen almost automatically. You don’t have to stop after every calculation or argument and think, “does this break conservation of expected evidence?”. Instead, you wind up learning some sorts of triggers that you associate with the principle that prime it in your mind, and then, if it becomes relevant to the argument, you notice that and cite the principle.

In this picture, building intuition is about learning a large number of these heuristics, along with their triggers.

However, while the individual small heuristics are often the easiest things to point to in an intuitive solution to a problem, I do think there are more general, and therefore more transferrable parts of intuition as well. I imagine that the paragraph I wrote explaining the solution to the boat problem will be largely incomprehensible to someone who hasn’t studied physics. That’s partially because it uses concepts they won’t have a rigorous understanding of (e.g. pressure), that it tacitly uses small heuristics it didn’t explain (e.g. that the reason the pressure is the same along the bottom of the lake is that if it weren’t, there would be horizontal forces that push the water around until the pressure did equalize in this way), partially that it made simplifications that it didn’t state and it might not be clear are justified (e.g. that the bottom of the lake is flat). More importantly, it relies on a general framework of Newtonian mechanics. For example, there are a number of tacit applications of Newton’s laws in the argument. For example, I stated that the total force on the bottom of the lake is the same whether the rock is resting on the bottom or floating in the boat “because gravity pulls on everything just as hard either way”, but these aren’t directly connected concepts. Gravity pulls the system (boat + water + rock) down just as hard no matter where the rock is. That system is not accelerating, so by Newton’s second law, the bottom of the lake pushes up on that system just as hard in each scenario. And by Newton’s third law, the system pushes down on the bottom of the lake just as hard in each scenario. So understanding the argument involves some fairly general heuristics such as “apply Newton’s second law to an object in equilibrium to show that two forces on it have equal magnitude” – a heuristic I’ve used hundreds of times, and “decide what objects to define as part of a system fluidly as you go through a problem” (in this case, switching from thinking about the rock as a system to thinking about rock+boat+water as a single system) – a skill I’ve used hundreds to thousands of times across all of physics. (My job is to teach high schoolers to be really good at solving problems like this, so I spend way more time on it than most people, so applying a heuristic specific to solving introductory physics problems in a thousand independent instances is realistic for me.)

Then there may be more meta-level skills and heuristics that you develop in solving problems. These could be things like valuing non-calculation solutions, or believing that persevering on a tough problem is worthwhile. It’s also important that intuition isn’t just about having lots of little heuristics. It’s about organizing them and calling the right one up at the right time. You’ll have to ask yourself the right sorts of questions to prompt yourself to find the right heuristics, and that’s probably a pretty general skill.

There is a fair amount of research on trying to understand what all these little heuristics are and how to develop them, but I’m mostly familiar with the research in physics.

In the [Quora answer kerspoon linked](https://www.quora.com/Do-grad-school-students-remember-everything-they-were-taught-in-college-all-the-time/answer/Mark-Eichenlaub), I cited George Lakoff, and I still that he’s a good source for understanding how we go about taking primitive sorts of concepts (e.g. “up” and “down”) and using and adapting them, via partial metaphor, to understanding more abstract things. For a specific example that’s well-argued, see:

Wittmann, Michael C., and Katrina E. Black. “Mathematical actions as procedural resources: An example from the separation of variables.” Physical Review Special Topics-Physics Education Research 11.2 (2015): 020114.

They argue that students understand the arithmetic action “separation of variables” via analogy to their physical understanding of taking things and physically moving them around. However, I think Wittman and Black’s work is incomplete. For example, it doesn’t explain why students using the motion analogy for separation of variables do it correctly – they could just as well use motion to encode algebraically-invalid rules. Also, they don’t explain how the analogy develops. They just catalog that it exists.

A foundational work in trying to understand the components of physical intuition is:

DiSessa, Andrea A. “Toward an epistemology of physics.” Cognition and instruction 10.2-3 (1993): 105-225.

This work establishes “phenomenological primitives”; little core heuristics such as “near is more”, which are templates for physical reasoning. Drawing from these templates, we might conclude that the nearer you are to a speaker, the louder the sound, or that the nearer you are to the sun, the hotter it will be (and therefore that summer is hot because the Earth is nearer the sun – a false but common and reasonable belief).

That’s a long and somewhat-obscure paper. I really like his student’s work

Sherin, Bruce L. “How students understand physics equations.” Cognition and instruction 19.4 (2001): 479-541.

Like Disessa, Sherin builds his own framework for what intuition is. His scope is more limited though, focusing solely on building and interpreting certain types of equations in a manner that combines “intuitive” physical ideas and mathematical templates. He spells this out in detail more in the paper, and it’s incredibly clear and well-argued. Probably my favorite paper in the field.

A more general reference that’s much more accessible than Disessa and more general an overview of cognition in physics than Sherin is  
“How Should We Think About How Our Students Think” by my advisor, Joe Redish [http://media.physics.harvard.edu/video/?id=COLLOQ\_REDISH\_093013](http://media.physics.harvard.edu/video/?id=COLLOQ_REDISH_093013) (video) [https://arxiv.org/abs/1308.3911](https://arxiv.org/abs/1308.3911) (paper).

The actual process of building new heuristics is also studied, but over all I don’t think we know all that much. See my friend Ben’s paper

Dreyfus, Benjamin W., Ayush Gupta, and Edward F. Redish. “Applying conceptual blending to model coordinated use of multiple ontological metaphors.” International Journal of Science Education 37.5-6 (2015): 812-838.

for an example of theory-building around how we create new intuitions. He calls on a framework from cognitive science called “conceptual blending” that is rather formal, but I think pretty entertaining to read.

A relevant search terms in the education literature:

“conceptual change”

but I find a lot of this literature to be hard-to-follow and not always a productive use of time to read.

On the applied side, I think the state of the art in evidence-backed approaches to building intuition, at least in physics, is modeling instruction. I’m not sure what the best introduction to modeling instruction is. They have a website that seems okay. Eric Brewe writes on it and he’s usually very good. The basic idea is to have students collaboratively participate in the building of the theories of physics they’re using (in a specific way, with guidance and direction from a trained instructor), which gets them to think about the “whys” involved with a particular theory or model in a way they usually wouldn’t.

I have written some about why I think things like checking the extreme cases of a formula are powerful intuition-building tools. A preprint is available here: [https://arxiv.org/pdf/1804.01639.pdf](https://arxiv.org/pdf/1804.01639.pdf)

However, I think it’s dangerous to have rules like “always check the dimensions of your answer”, “always check the extreme cases of a formula”, or even “always check that the numbers come out reasonable.” The reason is that having these things as procedures tends to encourage students to follow them by rote. A large part of the cognitive work involved isn’t in checking the extreme cases or the dimensions, but in realizing that in this particular situation, that would be a good thing to do. If you’re doing it only because an external prompt is telling you to, you aren’t building the appropriate meta-level habits. See [https://www.tandfonline.com/doi/abs/10.1080/09500693.2017.1308037](https://www.tandfonline.com/doi/abs/10.1080/09500693.2017.1308037) for an example of this effect.

See papers on “metarepresentation” by Disessa and/or Sherin for another example of generalizable skills related to intuition and problem solving.

Unfortunately, I don’t think writing books well or writing courses of individual study is something we know much about. I don’t know anyone who has a significant grant for that; the most I’ve ever seen on it is a poster here or there at a conference. Generally, grants are awarded for improving high school and college courses, or for professional development programs, supporting department or institution level changes at schools, etc. So adults who just want to learn on their own are not really served much by the research on the area. If you’re an adult who wants to self-study theoretical physics with an eye towards intuition, I recommend Leonard Susskind’s series of courses “The Theoretical Minimum” (the first three courses exist as books, the rest only as video lectures). He approaches mathematical topics with what I find an intuitive approach in most cases. Of course the Feynman lectures on physics are also very good.

I’ll be building an introduction to physics course at Art of Problem Solving, starting work sometime this winter. It might be available in the spring, although students will mostly be middle and high school students (but anyone is welcome to take our courses). I currently teach an advanced physics problem-solving course at AoPS called “PhysicsWOOT”. I try to support intuition-building practices there, but the main aim is in training these many small heuristics which students need to solve contest problems.

There should be something like modeling instruction for adult independent learners, but I don’t know of it.
