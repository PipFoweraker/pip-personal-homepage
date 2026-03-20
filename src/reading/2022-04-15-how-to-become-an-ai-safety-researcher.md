---
title: "How to become an AI safety researcher"
url: "https://www.lesswrong.com/posts/uKPtCoDesfawNfyJg/how-to-become-an-ai-safety-researcher"
source: "feedly"
sourceTitle: "LessWrong"
author: "peterbarnett"
published: 2022-04-15
saved: 2022-05-15
category: "rationality"
tags:
  - "Artificial Intelligence"
  - "Data Science"
  - "Deep Learning"
  - "Machine Learning"
status: "unreviewed"
layout: "reading.njk"
contentType: "summary"
---

Published on April 15, 2022 11:41 AM GMT  
  

_Crossposted from the_ [_EA Forum_](https://forum.effectivealtruism.org/posts/PH2pqsqgXQkfCdmkv/how-to-become-an-ai-safety-researcher)_._

_Reminder that you can listen to this post and other LessWrong posts on your podcast player with_ [_The Nonlinear Library_](https://pod.link/1587343144)_._

What skills do you need to work on AI safety? And what can we learn from the paths people have taken into the field? We were inspired by the [80,000 Hours podcast with Catherine Olsson and Daniel Ziegler](https://80000hours.org/podcast/episodes/olsson-and-ziegler-ml-engineering-and-safety/), which had great personal stories and advice about getting into AI safety, so we wanted to do it for a larger sample size.

_To better understand the lives and careers of AI safety researchers, I talked to eleven AI safety researchers in a variety of organizations, roles, and subfields. If you’re interested in getting into AI safety research, we hope this helps you be better informed about what pursuing a career in the field might entail, including things like:_

-   _How to develop research taste_
-   _Which specific technical skills to build_
-   _What non-technical skills you’ll need_

_The first section is about the general patterns we noticed, and the second section describes each person’s individual path._ 

Of note, the people we talked with are not a random sample of AI safety researchers, and it is also important to consider the effects of survivorship bias. However, we still think it's useful and informative to hear about how they got into the field and what skills they have found valuable.

_This post is part of a project I’ve been working on at_ [_Nonlinear_](http://nonlinear.org). 

# Paths into AI safety

## What degrees did people get?

Perhaps unsurprisingly, the researchers we talked to universally studied at least one STEM field in college, most commonly computer science or mathematics. Most had done research as undergraduates, although this often wasn’t in AI safety specifically; people often said that getting early research experience was valuable. 

**It is sometimes joked that the qualification needed for doing AI safety work is dropping out of a PhD program**, which three people here have done (not that we would exactly recommend doing this!). Aside from those three, almost everyone else is doing or has completed a PhD. These PhD programs were often but not universally, in machine learning, or else they were in related fields like computer science or cognitive science. 

All of the researchers we talked with had at least familiarity with Effective Altruism and/or Rationality, with most people being actively involved in at least one of these communities. For influential reading, _Superintelligence_ and writing by 80,000 Hours were each mentioned by three people as being particularly impactful on their decision to work on AI safety. It is worth noting that _Superintelligence_ was one of the main books about risks from AI when the people we talked with were becoming interested, but may not be the best book to recommend to people now. More recent books would include _Human Compatible_ by Stuart Russell, or _The Alignment Problem_ by Brian Christian. 

Finally, many of the safety researchers participated in a program designed for early-career researchers, such as those run by MIRI, [CHAI](https://humancompatible.ai/jobs#chai-internships), and [FHI](http://www.fhi.ox.ac.uk/vacancies/). 

## Skills 

The researchers interviewed described the utility of both technical skills (e.g. machine learning, linear algebra) and more general research skills (e.g. developing research taste, writing well). 

### What technical skills should you learn?

Technical AI safety research requires a strong understanding of the technical side of machine learning. By ‘technical’ here I basically mean skills related to programming and math. Indeed, a strong command of concepts in the field is important even for those engaged in less technical roles such as  field building and strategy. These skills still seem important for understanding the field, especially if you’re talking to technical researchers. Depending on the area you work on, some specific areas will be more useful than others. **If you want to do “hands-on” machine learning where you train models and run experiments, you should have strong machine learning skills, while if you specialize in more theoretical work, mathematical skills seem comparatively more useful.**

More specifically, as a minimal mathematical background, safety researchers should be very comfortable with **linear algebra, probability, and calculus.** It will also be very helpful to have a solid knowledge of basic programming, and have taken (at least) a machine learning/deep learning course. It isn’t as essential to take an “AI” course, as these are often focused on [“Good Old-Fahsioned AI”](https://en.wikipedia.org/wiki/Symbolic_artificial_intelligence).

For actual machine learning, you should be able to train and debug models. You should have a good understanding of the algorithms you are using and what the important hyperparameters do. Reinforcement learning is still a large part of some AI safety research, and so if you want to do this type of research it is important to understand how the RL algorithms work. It doesn’t seem _as_ important to be able to write out entire RL algorithms, because safety work will often use off-the-shelf implementations, but to be able to modify these algorithms you need to know what’s going on. 

If you want to do work involving writing machine learning code and running experiments, this is generally all done in **Python**. For machine learning libraries, most researchers use **PyTorch**, some people use tensorflow/keras and jax but this is much less common. For running experiments, and processing and visualizing data people use the standard options of **numpy, pandas, and matplotlib**. 

For NLP work, people use the **Huggingface transformers** library. NLP safety work can also involve collecting data from humans (in a way that standard NLP usually doesn’t), which means that frontend software development skills (**typescript, react**) are useful for making data collection websites. This seems less useful if you are working in another area where you don’t need to collect data yourself. But in general, better software engineering skills are always useful.

If you want to work on more theoretical AI safety rather than machine learning, these ML specific skills won’t be as useful, although coding and math definitely will be. For theoretical AI safety work, it seems useful to have a thorough knowledge over a reasonably broad range, especially in math. There is a mathematical skill of “given that I have this conjecture, how do I state a proof?”. Having knowledge of a lot of math can help with this because seemingly random math facts may be useful for constructing a proof. 

If you’re not specializing into ML, Ramana Kumar recommended having a strong background in math and computer science and then also having knowledge of a broad range of disciplines, including potentially: 

-   Economics
-   Certain parts of psychology
-   Areas of philosophy, specifically in philosophy of science, meaning and reference, knowledge (although this might be a minority view)
-   Dynamical systems and equilibria (possibly related to biology)
-   Cybernetics and information theory

This is quite a broad range of areas, but these seem like areas where we might find clues for a theory of agency or a theory of control. 

Ramana also mentioned that having some understanding of development and deployment dynamics of powerful AI, and also having an idea of what we mean by “good” on a societal level would be helpful for technical researchers. Technical researchers may not be very experienced in these areas and so can miss out on important knowledge. Andrew Critch’s [post on power dynamics](https://www.lesswrong.com/posts/WjsyEBHgSstgfXTvm/power-dynamics-as-a-blind-spot-or-blurry-spot-in-our) discusses this further. There may be sociological or sociotechnical research which is extremely helpful for AI safety. Further deconfusion work about AI safety could helpful, not just focused on solving the problem of AI safety but also in understanding _why there is a problem._

Dan Hendrycks stressed the utility of philosophy for doing AI safety research. Having this background can be helpful for translating from philosophical ideas into formal technical work. It may be best to learn philosophy during undergrad because courses often have a lot of discussions, so an online course would be comparatively less useful. Dan also suggests having an introductory background in a range of areas including complex systems, economics, finance (to learn how to make good bets), and business (especially as you start working with more people).

### What general research skills should you cultivate?

**Read a lot of papers**

**Many people we talked with said it is important to read a lot of papers; at least one paper a day, ideally more.** This is helpful for a few reasons:

-   It helps with actually understanding and staying up-to-date with what’s going on in the field
-   It will help you have new ideas about what to work on next
-   It builds the skill of quickly reading papers

**Enjoying reading papers is also potentially a good test for whether you’ll like doing AI safety research,** as you’ll see how interested you are in the area and the research process does involve reading a lot of papers. 

In addition to reading papers, you may have to do a lot of learning via reading textbooks and courses. Most of the value of reading things is lost if you don’t remember anything, so you should **take organized notes on things you want to remember or use some software like** [**Anki**](https://www.lesswrong.com/posts/cumc876woKaZLmQs5/lessons-i-ve-learned-from-self-teaching#Make_Sure_You_Remember_The_Content). Anki is a flashcard program which uses spaced repetition, you can use it to store and remember the important parts of papers you read. Using Anki may not be especially useful for remembering papers if you’re just trying to get a feel for a field instead of memorizing the whole paper. 

**Research taste**

One important skill or characteristic to develop is _research taste_. This is a hard concept to pin down, but it can be thought of as your “[ability to judge whether a research question is worth pursuing](https://rohinshah.com/faq-career-advice-for-ai-alignment-researchers/)”. There is a skill of **having ideas for what to research** and **knowing which of these ideas you should put your time into**. 

Research taste is often developed via mentorship. It can be very helpful to have a mentor who is an experienced researcher, and to try and deeply internalize the way they think. This can help develop taste initially, from which you can then branch out and be more independent.

Here are some additional tips on how to develop research taste:

-   Actually doing research. As you do more research you’ll get a feel for what ideas actually lead to good outcomes
-   Reading about other fields and paradigms. This can give you an idea of how people in other fields decide on research and give inspiration for your own work
-   [Knowing when to stop](https://cs.stanford.edu/~jsteinhardt/ResearchasaStochasticDecisionProcess.html)
-   Dedicate time (maybe every one or two days) for brainstorming
    -   You can often predict in advance where a project will go and what the likely bottlenecks are
-   Reading a lot (as mentioned above)
-   Finding people who seem to have good research taste and trying to understand what it is they’re doing. One strategy for this is described [here](https://jsteinhardt.stat.berkeley.edu/blog/film-study).
-   Think about the long-term for AI safety. What problems are going to disappear along the way? What problems are going to get bigger? What new problems are going to appear?
-   Chris Olah has a list of exercises for improving research taste [here](http://colah.github.io/notes/taste/).

There is also an important related skill of **trusting your own thoughts and ideas**. The field of AI safety is small and new enough that new people who understand some of the background often have valuable ideas. You don’t need permission from someone else to work on an idea you think is good. Some people think that the field is severely bottlenecked by good ideas, and so more people freely having and working on ideas is the way to fix this.

**Become comfortable working in a pre-paradigmatic field**

AI safety is often called a [pre-paradigmatic field](https://www.alignmentforum.org/posts/P3Yt66Wh5g7SbkKuT/how-to-get-into-independent-research-on-alignment-agency#Preparadigmicity), where there aren’t established frameworks or an established canon of facts. It might often feel like there’s nothing to build from, hard to know what problems are worthwhile, and hard for research to feel ‘grounded’. It is important to be able to function in this sort of environment. This is related to developing a research taste. 

The extent to which your research feels ‘pre-paradigmatic’ will depend on what specific area you go into. Areas closer to mainstream research such as safe RL, NLP, and robustness will fit more into an established paradigm. 

Here are various pieces of advice which seem helpful for working in pre-paradigmatic AI safety:

-   As with developing research taste, find a mentor who has experience in the field
-   If you’re stuck on a problem, look for the smallest thing which is still confusing, and then try to work out what is happening with that small piece. Alex Turner writes more about this [here](https://www.lesswrong.com/posts/e3Db4w52hz3NSyYqt/how-i-do-research).
-   Come up with lots and lots of examples, and then try to distill out all the good parts of these examples. Without examples things can quickly become ungrounded and not attached to anything real.
-   Make sure your theories [aren’t too _ad hoc_](https://www.lesswrong.com/posts/GhFoAxG49RXFzze5Y/what-s-so-bad-about-ad-hoc-mathematical-definitions). They need to be able to generalize and not just apply to a handful of cherry picked examples.
-   Reasoning about machine learning algorithms in the abstract without actually doing the experiments can lead you in directions which aren’t useful.
-   Learn to apply and repurpose knowledge from different fields and frames to a problem. This means it can be helpful to know a broad range of math because you never know which piece will come in handy. Additionally, if you’re familiar with a wide range of areas you’ll have more frames to apply to a problem.
-   Don’t get stuck down a math rabbit hole. Math can be useful for formalizing intuitions, but it can also be easy to feel like you’re making progress just because you’re doing cognitively satisfying and demanding math. It’s important to regularly step back and make sure what you’re working on is actually useful. Grinding equations is often not useful.
-   Work at different levels of abstraction, regularly ‘zooming out’ to think about the high level goal. Switch between trying to make progress on a problem and checking if this is actually a useful problem to work on.

This kind of research can also just be _really hard._ You can be working on extremely difficult problems, which often don’t give you much feedback on how you’re doing or where you’re going. Because of this, it can be easy to accidentally lose connection to the hard, important problem and instead work on something which is easier and seems similar but isn’t actually useful. One way to combat this is to have a robust theory of change for how the work you’re doing _right now_ is helpful for AI safety. 

**Formalizing intuitions**

One useful way to ‘stay grounded’ and make sure your work is tied to reality is to translate your informal models into mathematics or code. This can force you to precisely define the terms you’re working with, and to be rigorous with how you use them. 

This process of formalization is one of the skills that studying mathematics can help build. 

Even if the work you want to do is mostly empirical (like a lot of NLP is), it is still useful to have some formalization of what you’re doing and why it’s interesting.

Having a formal model of your intuitions is also useful for testing them. If you have an intuition about a problem and you can write it in code, then you can actually test if your intuition was correct. 

**Writing**

People are much more likely to read your work if:

-   You’ve actually written it up somewhere
-   You’ve written it up well

If you’re doing projects independently or to gain research experience, **make sure you have a deliverable**. This could be a well written blog post, a usable github repo, a research proposal, or anything that will actually show you’ve done the project. Especially if you’re entering the field, it’s good to have things you can put in your portfolio. This won’t be necessary advice if you’re already in the habit of writing blog posts, or if you are in academia where you have to write and publish papers.

What you write should also be well written; both for blog posts and academic papers. A lot of academic papers are not very good to read, so you can definitely **increase your impact by writing well**. It’s useful to have a model in your head of your reader and what you want to communicate to them. For blog posts especially, it can be helpful to use a lot of examples. Alex Turner recommends Pinker’s _The Sense of Style_ for improving one’s writing. Dan Hendrycks recommends [this video lecture](https://www.youtube.com/watch?v=vtIzMaLkCaM), and John Wentworth recommends writing _a lot._ 

Good figures and diagrams can be more informative than text, and so it is helpful to know the basics of tools like [Inkscape](https://inkscape.org/) or Adobe Illustrator. 

Although clear communication is acknowledged as important in the AI safety research community, this still seems to be underserved. There are ideas in AI safety which don’t have clear write ups, and so remain illegible to many people in the community and the wider world. It is important to be able to communicate your (or other people’s) ideas, give the appropriate context for understanding, and be able to correct common misunderstandings. Clearly communicating the ideas of others seems like a good way to build your own understanding and skills, spread important ideas, and to become part of the AI safety research community. 

## Specific Paths 

Below are some brief descriptions of the paths taken by researchers into the field of AI safety researchers took. 

**John Wentworth**

John was familiar with Rationality and AI safety in college, but they were not at the center of his attention. During his five year post-college stint as a data scientist, John developed a deep intellectual interest in the nature of [agency](https://plato.stanford.edu/entries/agency/) – though not initially in the context of AI. In 2018 he quit his startup job and coincidentally the [Embedded Agency Sequence](https://www.lesswrong.com/s/Rm6oQRJJmhGCcLvxh) came out which bore a striking resemblance in some respects to his personal research. That year he went to the MIRI Summer Fellowship and that Fall ended up getting a LTFF grant to work on AI safety with a focus on abstraction. You can read more about John’s thoughts about getting into independent alignment/agency [here](https://www.lesswrong.com/posts/P3Yt66Wh5g7SbkKuT/how-to-get-into-independent-research-on-alignment-agency).

**Alex Turner**

Alex read Eliezer Yudkowsky’s [_Harry Potter and the Methods of Rationality_](https://www.lesswrong.com/posts/HL6x8zHo9BkuK3tic/transcript-you-should-read-hpmor) (HPMOR) in 2016 during college, and then read _Superintelligence_ in 2017 while pursuing a PhD in artificial intelligence.  Bostrom’s book convinced him that AI safety was a big problem, and to further investigate whether safety was something that he was well suited to specialize into. After independently [studying a lot of math](https://www.lesswrong.com/s/KGYLvTqFiFE2CpHfJ) from the MIRI research guide and actively cultivating relationships with current safety researchers, Alex applied and was accepted to the [CHAI internship program](https://humancompatible.ai/jobs#chai-internships) in 2018. His previous PhD research was not related to AI safety, and so he changed his entire research focus, including changing his supervisor, to focus on safety. He is currently finishing up his PhD.

**Vael Gates**

After graduating from Cambridge with a Masters in psychology, Vael began a neuroscience PhD program at UC Berkeley in 2016. There, their interest in computational models of cognition led them to CHAI, which in turn introduced them to the world of  EA, Rationality, and AI safety. Aside from [one technical AI safety project](https://arxiv.org/pdf/1707.06354.pdf) Vael did not make safety a focus of their PhD thesis. Nonetheless, Vael remained interested in and passionate about the field and how it might be informed by social science. With few positions at this interdisciplinary junction, they decided to ‘make up a job’. Serving as a post-doctoral researcher at Stanford, Vael is currently working on projects at the intersection of AI safety and social science, while tackling community building projects on the side. They clarified that they should not be considered an AI safety researcher, but expect to be involved in the community-building aspect of the AI safety space.

**Justin Shovelain**

Justin began reading about AI safety and x-risk back around 2003, including writing by Yudkowsky and others on SL4 (a mailing list about topics such as transhumanism, AI safety, and x-risk). He went to university, choosing his courses based on what he thought would be useful for x-risk reduction (computer science, mathematics, physics). He started a PhD, and then contacted the Singularity Institute (which later became MIRI) and joined their Fellows Program. He stopped doing his PhD, and has continued to work on AI safety and x-risk ever since. He originally was working on AI safety technical research, but is now focused on strategy work at [Convergence](https://www.convergenceanalysis.org/), a research org he co-founded. 

**William Saunders**

William studied computer science in college, during which he read a lot of early rationalist and EA material.  He did a Master’s degree which wasn’t particularly related to AI safety, but did give an opportunity to learn about machine learning. From there he worked at Google for a year and a half and skilled up in ML. Only then did he begin working on AI safety directly, beginning with the [MIRI Summer Fellows Program](https://www.lesswrong.com/events/xFGQdgJndLcthgWoE/miri-summer-fellows-program) and an internship at the Future of Humanity Institute. From here he started a PhD in machine learning, but dropped out before writing a thesis. He then moved to the Bay Area to work on [amplification](https://openai.com/blog/amplifying-ai-training/) and [debate](https://openai.com/blog/debate/) as methods of alignment at Ought, and has since transitioned to OpenAI’s Alignment team.

**Ondrej Bajgar**

Ondrej studied math in college. During this time, he read Wait But Why’s article [_The AI Revolution_](https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html) and became convinced of  AI’s radical importance and so started independently learning about ML - though not about safety in particular. After graduating he continued to study ML, and ended up getting a job with IBM Watson working on text understanding and other related machine learning. As part of this job, he went to the large AI conferences and gradually became worried that the field was moving quickly without people paying attention to the long-term effects. He joined the FHI research scholars program, and then two years after that began a PhD in machine learning at Oxford which he is currently doing.

**Dan Hendrycks**

Dan was motivated to work exceptionally hard after reading Shelly Kagan’s [_The Limits of Morality_](https://campuspress.yale.edu/shellykagan/files/2016/01/Precis-of-The-Limits-of-Morality-1344xg3.pdf) in high school. In his first year of college, he was suggested to get into AI by Bastian Stern (now at Open Philanthropy), and so settled on this rather than quant trading. He did his undergrad in computer science, and then began his PhD in computer science at UC Berkeley. For his PhD he decided to focus on deep learning rather than reinforcement learning, which most of the safety community was focused on at the time. Since then he’s worked on research that defines problems and measures properties relevant for reliability and value learning. He is currently doing his PhD at UC Berkeley.

**Ethan Perez**

Ethan had a strong math background from competing in math competitions in high school. He then did computer science and software engineering at college. He was looking for impactful applications of this, and ran into 80,000 Hours suggesting that machine learning research could be impactful. He enjoyed his first machine learning research project, and progressed on to PhD. Over the course of his PhD he got more into safety relevant work, particularly after reading [AI Safety via Debate](https://arxiv.org/abs/1805.00899). He is currently finishing up his PhD at NYU.

[**Stephen Casper**](https://stephencasper.com/)

Stephen was interested in EA since highschool, and got involved with the EA club during university. He read _Superintelligence_, which caused him to change his focus from biology and bioinformatics to statistics and machine learning. He did research as an undergrad which was valuable for finding out what doing research is actually like, and that he wanted to continue doing research. He did an internship at CHAI, and is now doing his PhD at MIT.

**Scott Emmons**

Scott was interested in academic research since highschool, managing to do research in network science while still in highschool. He did his undergrad in math and computer science. In his first year of college he took an ethics course and read Singer’s _Practical Ethics_ which got him interested in utilitarianism. He read _Superintelligence_ as well as content from 80,000 Hours, which focused his generic interest in academic research into interest in AI safety specifically. He is now doing his PhD at UC Berkeley. 

**Ramana Kumar**

Ramana started reading LessWrong when it was getting started in 2008. He read [The Sequences](https://www.lesswrong.com/tag/original-sequences), and this introduced him to ideas around existential risk and AI alignment. He was doing a PhD in computer science related to formal verification and theorem proving, which wasn’t directly on AI but did have some links. While exploring different paths for doing AI alignment research he applied to join a MIRI workshop. He made a lot of connections at this workshop, and followed on with some research collaborations afterwards. One collaboration with Benya Fallenstein (who would later work at MIRI) received a grant from the Future of Life Institute to pursue this research. Around this time DeepMind was setting up their safety team, and Ramana was on their radar of potential researchers. He ended up joining the team in the second round of hires. He continues to work on AI alignment at DeepMind. 

_Thanks to everyone I talked to for this project, and to Aaron Bergman and Kat Woods for editing help._

  
  
[Discuss](https://www.lesswrong.com/posts/uKPtCoDesfawNfyJg/how-to-become-an-ai-safety-researcher#comments)
