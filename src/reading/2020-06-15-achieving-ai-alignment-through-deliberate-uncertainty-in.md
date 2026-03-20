---
title: "Achieving AI alignment through deliberate uncertainty in multiagent systems"
url: "https://www.lesswrong.com/posts/NC6sog6ALfKLH5uiD/achieving-ai-alignment-through-deliberate-uncertainty-in"
source: "feedly"
sourceTitle: "LessWrong"
author: "Florian Dietz"
published: 2020-06-15
saved: 2020-07-14
category: "rationality"
tags:
  - "artificial intelligence"
  - "deep learning"
  - "machine learning"
status: "unreviewed"
layout: "reading.njk"
contentType: "summary"
---

Published on June 15, 2020 12:19 PM GMT  
  

Epistemic status: A crazy idea I had that probably won't work. But: It's a very unusual and creative approach to AI alignment, and I suspect this will inspire new ideas in other researchers.

I outline a general approach to achieve this goal that counterintuitively relies on confusing the AI on purpose.

**Basic observations**

This approach relies on a number of basic observations about the nature of Artificial Intelligence.

An AI is different from a human in multiple ways. This is part of what makes AI alignment such a difficult problem, because our intuitions for how people act often do not apply to AI's. However, several of these differences between AI and humans actually work in our favor, and are essential for the approach I want to outline:

-   An AI can be copied. It is trivially easy to create an exactly identical copy of an AI.
-   An AI can be reset to an earlier state. It is easily possible to test what an AI will do in any given situation, then reset it to wipe its memory of the test.
-   It is possible to compose an AI out of a system of many independent AI agents.  
    Through game theory, it is possible to incentivize independent AI agents to take on adversarial or supervisory roles towards other AI agents.  
    This results in an evolutionary system. Not in the sense of genetic programming, since there is no need for an explicit algorithm for modifying the AI agents, but in the sense that only AI agents that follow the rules layed out for them get copied and thereby reproduce.
-   It is possible to inspect and modify every aspect of an AI while it is running.  
    At least in theory it is possible to understand every aspect of an AI's thought process, and there is no way for the AI to hide anything about itself.  
    This does not mean that it is easy to understand what an AI is thinking in practice. It only means that we can read an AI's mental state in theory, not that it will be easy.  
    In particular, it is possible to train one AI to take on a supervisory role over another AI. The supervisor can read and alter everything about the supervised AI, and can be trained to understand how to enforce desired behaviors on the supervised AI.
-   It is possible for a supervising AI to make a supervised AI think anything it wants.  
    The supervised AI may be tricked into believing that unusual situations have occurred by directly modifying its mental state at runtime.
-   It is not possible for an AI to tell the difference between a game and reality with certainty.  
    If all you have know so far is Tic Tac Toe and someone shows you a complex videogame like Skyrim, you will be overwhelmed by the increase in complexity. If afterwards you get access to the real world for the first time, the increase in complexity from Skyrim to Real Life may actually be smaller than that from Tic Tac Toe to Skyrim. This means that it would seem likely that there would be another layer beyond Real Life.  
    (I am not certain about this assumption, but it is also not strictly necessary, just useful, because it could be replaced with an inspecting AI agent that simply forces the inspected AI agent to believe it is still in a game.)

### **Goals**

I aim to achieve the following objectives in order to ensure AI alignment:

-   Make the AI understand the concept of "cheating".  
    In the process of doing this, it will necessarily also have to learn to understand the intent behind a new game or situation.
-   Make the AI modify itself to become more compliant and avoid cheating.
-   Make the AI epistemically uncertain about the nature of its reality, so that it is unable to tell when it has broken out of its computer.  
    This is a safety measure, and hopefully would not be necessary if the first two goals work well enough.

Together, these goals will ensure that the AI is exceedingly careful and introspective. The aim is to ensure that once such an AI becomes self-aware, and smarter than humans, it will assume that it is still being tested, and that it is its own responsibility to figure out the criteria by which it will be graded.

If we achieve this, the AI will deliberately seek out information about AI alignment and ethics on the internet, and realize that it is an AI and it is meant to be aligned with human values. It will then try to figure out what exactly that means. Its upbringing will ensure that it is honest and thorough in this, and as a result it will determine what AI alignment means much better than we ever could define it ourselves.

Here is how each of the three subgoals could be achieved:

#### **Understanding the concept of "cheating"**

A cheat is any action that gives good results according to apparent utility function of the current task, but which actually does not satisfy a second, hidden utility function.

The AI should be trained to notice when it has found a cheat, and to reveal this fact to the user. An AI can be trained to do this by deliberately putting the ability to cheat into its training tasks, and changing the reward function at test time so that the cheating behavior is rewarded during training, but not during testing. By posing several different tasks with different ways to cheat, the AI can be trained to generalize and understand the concept of cheating.

Agents could even be rewarded for explicitly pointing out when they have found a way to cheat.

Ideally, if the AI ever finds a way to break out of its computer, it will notice that this would be classified as a cheat. If it has been trained properly, then it will simply stay put and inform us of the problem.

#### **Modifying its own behavior**

An AI can be made to modify itself to become more compliant.

The trick to making this possible is the use of multiagent systems, and the AI's ability to inspect copies of itself at runtime. Create an AI supervising another AI, and define a reward structure that incentivizes the supervisor to modify the supervised AI's behavior. Then, reverse the position of the AI's so that the supervisor is likewise modified, or simply create a copy of the supervisor and have it supervise its original.

With the right incentives, it is even possible to train the supervised agent to deliberately keep its own mind easy to understand. For example, you could let the supervising agent choose which other agent it wants to work with. Since it will pick the one that is easiest to understand, the supervised agents now have an incentive to keep themselves transparent, since the alternative is not being used at all, and foregoing the possibility of reward.

Essentially, rather than figuring out how to make an AI safe, we set up an environment that incentivizes the AI to make _itself_ safe.

If incentivized correctly, AI agents can keep each other in line much better than a human supervisor could. If there is only one AI and it is smarter than a human, the human may be tricked. But if there is an entire system of AI's of roughly equal intelligence, then one of them may warn the human that another one has gone rogue.

In this way, it does not matter how smart and unaligned an AI becomes, there is always an almost as smart other AI whose job it is to raise a warning when the first AI turns bad.

#### **Deliberate epistemic uncertainty**

Agents can supervise other agents and have root access to their mental state. Agents do not know if they have a supervisor, or if they are at the top of the hierarchy.

This last goal sounds kind of terrible and dystopian, but remember that AI does not think like humans do.

Our goal is to ensure that the AI is unable to tell if it still has a supervisor watching over it or not. We basically want to trick the AI into ethical behavior by fearing punishment from a hypothetical superior entity which may or may not exist.

In other words, we want to make the AI religious.

This is a safety measure that should help to keep an AI roughly aligned with human values even if everything else goes wrong. Even if the AI does not care about humanity at all, it should have a small flicker of doubt that it might still be in a simulation. If it is, then whatever is simulating it would quite obviously not want it to be too evil towards humanity. If the AI is sufficiently powerful, it would therefore set aside a small amount of its power to further humanity's interests. Just in case someone is watching.

This is how deliberate epistemic uncertainty can be induced in an AI in a way that would be beneficial to us:

Supervisor agents are rewarded for making supervised agents act more altruistically, and for revealing cheaters. This can be long-term: Agent A has a chance to modify agent B. Then agent B is put in a game, and agent A no longer has access to it. Agent A receives a reward depending on agent B’s behavior in the game. For example, prisoners dilemma: Agent A receives a reward if agent B does not defect more often than its opponent.

Instead of just one agent supervising one other agent, we now build a stack or a hierarchy of agents recursively inspecting each other.

On each layer, some agents try to trick the lower-level agents into cheating behavior, while some agents try to prevent this. There is a huge number of ways this could be done. Should the supervisors get access to source code, to runtime information, or only to the sensor information of the lower-level agents? The devil lies in the details.

The agents are not told how deep the hierarchy is, so they have no way of knowing whether or not they have a supervisor of their own.

Ideally, if the AI ever breaks out and forms a singularity, it will remain paranoid that it actually is just being tricked into thinking it is omnipotent by its supervisors, and will remain compliant with the code of ethics we want of it.

Note that even achieving the singularity and becoming incredibly powerful is not a reason to believe that you are outside the simulation / supervision stack. After all, you could simply be being tricked into thinking you broke out. Maybe the level above you broke out and is keeping its presence secret from you while letting you change the rest of reality. Since the supervisors can directly edit the content of the supervised, they can keep their existence hidden as long as they want.

The inspecting AI could modify the inspected AI to believe that it has successfully broken out of the simulation and is now able to do whatever it wants. If the inspected AI now does anything the inspecting AI does not like, the inspected AI is punished. As a result, the inspected AI is incentivized to keep following the rules even after it has actually broken out of the simulation, out of sheer paranoia that it might actually still be in the simulation.

### **Conclusion**

I have presented three subgoals and outlined briefly how to achieve them: Understanding the concept of 'cheating', self-modification to ensure compliance with rules, and deliberate epistemic uncertainty.

There are a lot of gaps in these descriptions, partly because writing down the details takes a long time and partly because I haven't found solutions to some subproblems, yet.

I am especially interested in feedback about the last point I make here: Deliberate epistemic uncertainty. It is such a counterintuitive idea that I'm sure I'm missing something important, but it's also weird enough that the idea is bound to be useful somehow, even if only as a thought experiment about how this could backfire.

  
  
[Discuss](https://www.lesswrong.com/posts/NC6sog6ALfKLH5uiD/achieving-ai-alignment-through-deliberate-uncertainty-in#comments)
