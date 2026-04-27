export const questions = [
  // ── IMS OVERVIEW ──────────────────────────────────────────────────────────
  {
    id: 1,
    section: "IMS Overview",
    type: "multi-select",
    question: "What are the five skills you learnt at the IMS training?",
    options: [
      "Clarify & Confirm",
      "Balanced Feedback",
      "Discussion Skills",
      "Manage a Difference",
      "Crediting",
      "Active Listening",
      "Assertiveness",
    ],
    correct: [
      "Clarify & Confirm",
      "Balanced Feedback",
      "Discussion Skills",
      "Manage a Difference",
      "Crediting",
    ],
    feedback: {
      correct:
        "🔥 WOW — elite-level recall! The five IMS skills are Clarify & Confirm, Balanced Feedback, Discussion Skills, Manage a Difference, and Crediting. Each skill builds on the others to create genuinely effective communication.",
      partial:
        "👏 Great start — you got some of them. The full set is: Clarify & Confirm, Balanced Feedback, Discussion Skills, Manage a Difference, and Crediting. Make sure all five are locked in before your next conversation.",
      incorrect:
        "😅 Were you replying to emails during that session? The five IMS skills are: Clarify & Confirm, Balanced Feedback, Discussion Skills, Manage a Difference, and Crediting. These are the building blocks — worth memorising before your next difficult conversation.",
    },
  },

  // ── CLARIFY & CONFIRM ─────────────────────────────────────────────────────
  {
    id: 2,
    section: "Clarify & Confirm",
    type: "multi-select",
    question: "Why is it so important to clarify and confirm?",
    options: [
      "They are used all the time",
      "90% of misunderstandings can be avoided by using these skills",
      "They make you sound more intelligent",
      "They slow the conversation down so you can think",
    ],
    correct: [
      "They are used all the time",
      "90% of misunderstandings can be avoided by using these skills",
    ],
    feedback: {
      correct:
        "🔥 Spot on! These two skills are universal AND incredibly powerful — 90% of misunderstandings can be avoided simply by clarifying and confirming. That stat alone should motivate daily practice.",
      partial:
        "👏 You captured part of it. The two key reasons: (1) these skills apply in virtually every conversation, and (2) they prevent 90% of misunderstandings. The impact is massive.",
      incorrect:
        "💡 Almost — but we need both reasons! They apply in virtually every conversation AND they prevent 90% of misunderstandings. Ninety. Percent. That's not a rounding error, that's a transformation.",
    },
  },
  {
    id: 3,
    section: "Clarify & Confirm",
    type: "single",
    question: "What does 'clarify' mean?",
    options: [
      "Make clear, clear up, shed light on",
      "Summarise what the other person said",
      "Ask for more time to think",
      "Challenge someone's point of view",
    ],
    correct: ["Make clear, clear up, shed light on"],
    feedback: {
      correct:
        "👏 Perfect. To clarify is to make clear, clear up, or shed light on something. It's about illuminating understanding — yours and theirs.",
      partial: "",
      incorrect:
        "😅 'Clarify' means to make clear, shed light on, or clear something up — not summarise (that's confirming), not challenge. Think of it as turning on the lights in a conversation where everyone's fumbling in the dark.",
    },
  },
  {
    id: 4,
    section: "Clarify & Confirm",
    type: "multi-select",
    question: "When do you use clarifying (what's your intent)?",
    options: [
      "When you want to truly understand the other person's point of view",
      "When you want to make an informed decision",
      "When you want to motivate others",
      "When you want to take action on something",
      "When you want to win an argument",
      "When you want to fill silence",
    ],
    correct: [
      "When you want to truly understand the other person's point of view",
      "When you want to make an informed decision",
      "When you want to motivate others",
      "When you want to take action on something",
    ],
    feedback: {
      correct:
        "🔥 Elite-level answer! Intent is everything in IMS. You clarify when you want to understand, make informed decisions, motivate others, or take meaningful action.",
      partial:
        "👏 Good thinking — you got some of them. The four intents for clarifying are: (1) truly understand the other person's view, (2) make an informed decision, (3) motivate others, (4) take action on something.",
      incorrect:
        "💡 The four intents for clarifying: to truly understand, to make an informed decision, to motivate others, and to take action. 'Win arguments' and 'fill silence' didn't make the list — and that's very much the point.",
    },
  },
  {
    id: 5,
    section: "Clarify & Confirm",
    type: "single",
    question:
      "You're in a conversation and your gut reaction is to Reject, Ignore, or Disagree with what the other person just said. In IMS, this impulse is called a 'RID moment'. What should you do?",
    options: [
      "Pause and clarify — ask What and Why to understand their perspective first",
      "State your disagreement calmly and clearly so the conversation stays on track",
      "Take a moment to breathe, then respond once you've collected your thoughts",
      "Acknowledge what they said before offering your own perspective",
    ],
    correct: [
      "Pause and clarify — ask What and Why to understand their perspective first",
    ],
    feedback: {
      correct:
        "🔥 Exactly! The RID impulse is your signal to slow down and clarify — not react. Ask What and Why, understand their view first, and THEN decide how to respond. That pause is where great communication happens.",
      partial: "",
      incorrect:
        "😂 Ah, the classic RID trap! Your gut says react — IMS says clarify. When you feel the urge to Reject, Ignore, or Disagree, that's your cue to ask What and Why questions first. Understand before you respond. Every time.",
    },
  },
  {
    id: 6,
    section: "Clarify & Confirm",
    type: "multi-select",
    question: "What causes one to want to RID someone?",
    options: [
      "Time pressure",
      "Ego",
      "Assumptions",
      "Hierarchy bias",
      "Tapes / bias / perceptions",
      "Poor body language from the other person",
      "Lack of coffee",
    ],
    correct: [
      "Time pressure",
      "Ego",
      "Assumptions",
      "Hierarchy bias",
      "Tapes / bias / perceptions",
    ],
    feedback: {
      correct:
        "🔥 Perfect — all five triggers identified! Recognising what drives your RID impulse is the first step to overcoming it. Self-awareness is the superpower here.",
      partial:
        "👏 Good recall! The five RID triggers are: time pressure, ego, assumptions, hierarchy bias, and tapes/bias/perceptions. Knowing your personal triggers helps you catch them in the moment.",
      incorrect:
        "💡 Five RID triggers: time pressure, ego, assumptions, hierarchy bias, and tapes/bias/perceptions. (Lack of coffee is relatable but didn't make the official list.) Any of those ring a bell? They should — we all have them.",
    },
  },
  {
    id: 7,
    section: "Clarify & Confirm",
    type: "single",
    question: "How do you clarify? What type of questions do you ask?",
    options: [
      "Ask What and Why questions",
      "Ask closed yes/no questions",
      "Ask leading questions to guide them",
      "Ask hypothetical questions",
    ],
    correct: ["Ask What and Why questions"],
    feedback: {
      correct:
        "👏 Correct! What and Why questions are open probes — they invite the other person to expand and share, giving you the information you need to truly understand.",
      partial: "",
      incorrect:
        "😅 You clarify by asking What and Why — open questions that invite the other person to expand. Closed questions get yes/no. Open questions get understanding. Simple formula, profound impact.",
    },
  },
  {
    id: 8,
    section: "Clarify & Confirm",
    type: "single",
    question: "What does 'confirm' mean?",
    options: [
      "Validate, verify, substantiate — state back what you understood",
      "Agree with what the other person said",
      "Repeat their exact words back to them",
      "Write down what they said",
    ],
    correct: ["Validate, verify, substantiate — state back what you understood"],
    feedback: {
      correct:
        "🔥 Exactly right. Confirming is about validating your understanding — not agreeing. You state back a short summary of what you understood and check you got it right.",
      partial: "",
      incorrect:
        "💡 To confirm means to validate your understanding by stating back a short summary of what you heard. Critical note: confirming is NOT agreeing. You can confirm perfectly and still think they're completely wrong.",
    },
  },
  {
    id: 9,
    section: "Clarify & Confirm",
    type: "single",
    question: "How do you know you have successfully confirmed?",
    options: [
      "The other person says 'yes' and agrees you understood them",
      "You feel confident you know what they meant",
      "They stop talking",
      "You've repeated everything they said",
    ],
    correct: ["The other person says 'yes' and agrees you understood them"],
    feedback: {
      correct:
        "👏 Spot on! The test of a successful confirmation is the other person's 'yes' — their agreement that you got it right. Your internal confidence doesn't count here.",
      partial: "",
      incorrect:
        "😂 Spoiler: your gut feeling that you understood doesn't count! The test is the other person's 'yes'. Their signal, not your confidence. If they say 'well, not quite...' — back to clarifying you go.",
    },
  },
  {
    id: 10,
    section: "Clarify & Confirm",
    type: "single",
    question: "If you confirm someone's view, does that mean you agree with them?",
    options: [
      "No — confirming does NOT equal agreeing",
      "Yes — confirming means you accept their point",
      "Only if you follow it with positive feedback",
      "It depends on the situation",
    ],
    correct: ["No — confirming does NOT equal agreeing"],
    feedback: {
      correct:
        "🔥 Critical distinction! Confirming = 'I understand what you're saying.' Agreeing = 'I accept your point.' You can fully understand someone and still hold a completely different view.",
      partial: "",
      incorrect:
        "💡 One of the most important IMS distinctions: confirming does NOT equal agreeing. You can confirm someone's position with perfect accuracy and then respectfully, calmly, totally disagree with it.",
    },
  },

  // ── BALANCED FEEDBACK ─────────────────────────────────────────────────────
  {
    id: 11,
    section: "Balanced Feedback",
    type: "multi-select",
    question: "When do you give Balanced Feedback?",
    options: [
      "When you are not satisfied with someone's behaviour and want them to improve willingly",
      "When someone suggests an idea that isn't feasible and you want to modify it",
      "When you want to change someone's thinking, behaviour or performance constructively",
      "In emergencies or safety situations",
      "When you want to praise exceptional work",
    ],
    correct: [
      "When you are not satisfied with someone's behaviour and want them to improve willingly",
      "When someone suggests an idea that isn't feasible and you want to modify it",
      "When you want to change someone's thinking, behaviour or performance constructively",
    ],
    feedback: {
      correct:
        "🔥 Perfect! Balanced Feedback is specifically for constructive change — when behaviour, ideas or thinking need to shift. Emergencies and exceptional praise each have their own skills.",
      partial:
        "👏 You're on the right track. Balanced Feedback applies when you want to change behaviour, modify an idea, or improve performance — constructively. It's not for emergencies or pure praise.",
      incorrect:
        "😅 Balanced Feedback is for constructive change: unsatisfactory behaviour you want improved willingly, non-feasible ideas you want refined, or thinking/behaviour/performance you want to shift. Emergencies have their own lane. Exceptional praise? That's Crediting's territory.",
    },
  },
  {
    id: 12,
    section: "Balanced Feedback",
    type: "single",
    question: "What is your intent when giving Balanced Feedback?",
    options: [
      "To effect change constructively — keep what's working, improve what isn't",
      "To point out what someone did wrong",
      "To soften criticism so it doesn't hurt",
      "To document performance for HR purposes",
    ],
    correct: ["To effect change constructively — keep what's working, improve what isn't"],
    feedback: {
      correct:
        "👏 Exactly. Intent drives everything in IMS. Your intent with Balanced Feedback is constructive change — helping them keep the good stuff and improve the rest.",
      partial: "",
      incorrect:
        "💡 Intent is everything. With Balanced Feedback, your intent is constructive change — they keep doing what works AND improve what doesn't. It's not about pointing out flaws; it's about unlocking better performance.",
    },
  },
  {
    id: 13,
    section: "Balanced Feedback",
    type: "multi-select",
    question: "What are the steps to giving Balanced Feedback? (Select all that apply)",
    options: [
      "Specify the merit (what they're doing well or what's strong about the idea)",
      "Specify the concern (the gap, weakness or problem)",
      "Explore ideas to retain the merit AND eliminate the concern",
      "Start with an apology so they're not defensive",
      "End with a compliment to soften the blow",
    ],
    correct: [
      "Specify the merit (what they're doing well or what's strong about the idea)",
      "Specify the concern (the gap, weakness or problem)",
      "Explore ideas to retain the merit AND eliminate the concern",
    ],
    feedback: {
      correct:
        "🔥 Nailed it! Merit → Concern → Explore how to retain the merit AND eliminate the concern. Remember: many people forget that last bit has TWO parts — don't be a merit-forgetter!",
      partial:
        "👏 Close! The three steps are: (1) State the merit, (2) State the concern, (3) Explore how to retain the merit AND eliminate the concern. Notice step 3 has TWO parts — both matter equally.",
      incorrect:
        "😅 Three steps: Merit → Concern → Explore how to BOTH retain the merit AND eliminate the concern. Most people forget that last bit has two parts. The apology and softening compliment are not part of the model.",
    },
  },
  {
    id: 14,
    section: "Balanced Feedback",
    type: "single",
    question: "What is the difference between a merit and an acknowledgement?",
    options: [
      "Merits are specific; acknowledgements are general — and feedback only works when it's specific",
      "Merits are positive; acknowledgements are neutral",
      "Acknowledgements are more powerful because they feel genuine",
      "There is no real difference — both work equally well",
    ],
    correct: [
      "Merits are specific; acknowledgements are general — and feedback only works when it's specific",
    ],
    feedback: {
      correct:
        "🔥 Critical distinction mastered! 'You did a great job' = acknowledgement. 'The way you structured that argument made the risk completely clear' = merit. Specificity is what makes feedback land.",
      partial: "",
      incorrect:
        "🔍 Merits are SPECIFIC. Acknowledgements are general. Feedback needs enough specificity that someone knows exactly what to repeat. 'Great work!' tells them nothing. 'The way you structured your argument made the risk crystal clear' tells them everything.",
    },
  },
  {
    id: 15,
    section: "Balanced Feedback",
    type: "single",
    question: "Why does the merit have to be RELATED to the concern?",
    options: [
      "To make the feedback relevant and effective",
      "To soften the blow of the criticism",
      "Because that's the rule of the model",
      "To show you listened carefully",
    ],
    correct: ["To make the feedback relevant and effective"],
    feedback: {
      correct:
        "👏 Exactly. An unrelated merit feels like a compliment sandwich — hollow and manipulative. A related merit makes the feedback coherent and impactful.",
      partial: "",
      incorrect:
        "💡 A merit that doesn't relate to the concern feels like a compliment sandwich — and people see right through those immediately. Related merit = relevant, coherent feedback. Unrelated merit = suspicion.",
    },
  },
  {
    id: 16,
    section: "Balanced Feedback",
    type: "single",
    question:
      "When linking the merit and concern in Balanced Feedback, what's the guidance on using 'however' or 'but'?",
    options: [
      "It's preferable to avoid them — they tend to cancel out the merit in the listener's mind",
      "Either word works well — they clearly signal the transition to the concern",
      "Only 'however' is acceptable; 'but' tends to feel too blunt",
      "The word choice doesn't matter as long as your tone stays warm",
    ],
    correct: [
      "It's preferable to avoid them — they tend to cancel out the merit in the listener's mind",
    ],
    feedback: {
      correct:
        "🔥 Exactly right. 'You did great work BUT...' — and the merit quietly evaporates. It's a preference rather than a hard rule, but a well-founded one. Find a neutral transition instead.",
      partial: "",
      incorrect:
        "💡 The guidance is to avoid 'however' and 'but' where possible — they have a habit of cancelling out everything before them in the listener's mind. It's a preference, not a prohibition, but it makes a real difference.",
    },
  },
  {
    id: 17,
    section: "Balanced Feedback",
    type: "multi-select",
    question: "When is it OK to give direct (not balanced) feedback?",
    options: [
      "Emergencies",
      "Safety situations",
      "Policy situations",
      "Minor self-correcting errors",
      "When you don't like the person",
      "When you are in a hurry",
    ],
    correct: [
      "Emergencies",
      "Safety situations",
      "Policy situations",
      "Minor self-correcting errors",
    ],
    feedback: {
      correct:
        "👏 Perfect! Four clear exceptions: emergencies, safety, policy, and minor self-correcting errors. In all other cases, reach for Balanced Feedback.",
      partial:
        "💡 Close — the four legitimate exceptions are: emergencies, safety situations, policy situations, and minor self-correcting errors. 'In a hurry' is not on the list — sorry.",
      incorrect:
        "😅 Four exceptions to Balanced Feedback: emergencies, safety situations, policy situations, and minor self-correcting errors. 'I'm in a hurry' is not on the list. Busyness is not a bypass — it's a habit that erodes trust over time.",
    },
  },

  // ── DISCUSSION SKILLS ─────────────────────────────────────────────────────
  {
    id: 18,
    section: "Discussion Skills",
    type: "single",
    question: "What are the three steps in Discussion Skills?",
    options: [
      "Open the discussion → Explore ideas → Close the discussion",
      "State your position → Debate alternatives → Decide",
      "Clarify → Feedback → Agree",
      "Present → Question → Summarise",
    ],
    correct: ["Open the discussion → Explore ideas → Close the discussion"],
    feedback: {
      correct:
        "🔥 Perfect sequence! Open → Explore → Close. Simple and powerful. Miss the close and you get brilliant conversations that produce zero accountability.",
      partial: "",
      incorrect:
        "💡 Three steps: Open the discussion → Explore ideas → Close the discussion. This structure keeps discussions productive rather than circular — and that close step is the one most people skip.",
    },
  },
  {
    id: 19,
    section: "Discussion Skills",
    type: "multi-select",
    question: "What are the key components of CLOSING a discussion?",
    options: [
      "Actions agreed",
      "Time frames",
      "Ownership (who is responsible)",
      "A motivational close",
      "A written summary sent by email",
    ],
    correct: ["Actions agreed", "Time frames", "Ownership (who is responsible)"],
    feedback: {
      correct:
        "🔥 Nailed it! Actions + Time frames + Ownership = accountable closure. Without all three, discussions produce good intentions but not results.",
      partial:
        "👏 Good — but the three essentials are: actions agreed, time frames, and ownership. Make sure all three are stated out loud or the next meeting starts exactly where this one ended.",
      incorrect:
        "😅 Closing a discussion without actions, time frames, and clear ownership is just... a really pleasant chat. All three have to be explicit. No follow-up email or motivational moment replaces them.",
    },
  },
  {
    id: 20,
    section: "Discussion Skills",
    type: "multi-select",
    question: "What are the four ways to explore ideas in a discussion?",
    options: [
      "Offer a suggestion, invite a response",
      "Invite a suggestion, offer a response",
      "Temporarily alter restrictions (remove or impose) to drive innovation",
      "Build on someone else's idea and acknowledge the connection",
      "Vote on the best idea",
      "Ask the most senior person to decide",
    ],
    correct: [
      "Offer a suggestion, invite a response",
      "Invite a suggestion, offer a response",
      "Temporarily alter restrictions (remove or impose) to drive innovation",
      "Build on someone else's idea and acknowledge the connection",
    ],
    feedback: {
      correct:
        "🔥 All four! These exploration moves keep discussions generative and inclusive. Building on others' ideas with acknowledgement is especially powerful for team cohesion.",
      partial:
        "👏 Good effort — the four ways are: offer a suggestion & invite response, invite a suggestion & offer response, temporarily alter restrictions, and build on/acknowledge someone else's idea.",
      incorrect:
        "💡 Four exploration moves: offer suggestion & invite response, invite suggestion & offer response, temporarily alter restrictions, and build on others' ideas with acknowledgement. Voting and 'let's ask the boss' shut exploration down — they're not IMS tools.",
    },
  },
  {
    id: 21,
    section: "Discussion Skills",
    type: "single",
    question: "When do you NOT explore ideas?",
    options: [
      "When you have already made a decision",
      "When the topic is sensitive",
      "When you disagree with the other person",
      "When time is short",
    ],
    correct: ["When you have already made a decision"],
    feedback: {
      correct:
        "👏 Exactly. Exploring ideas when the decision is already made is dishonest and wastes people's time. If it's decided, say so — use Discussion Skills' close and move on.",
      partial: "",
      incorrect:
        "😂 You stop exploring ideas when the decision has already been made. Asking for input when the outcome is fixed is manipulative — and people always know. If it's decided, own it. Sensitive topics, disagreement, or time pressure don't automatically stop exploration.",
    },
  },

  // ── MANAGING DIFFERENCES ──────────────────────────────────────────────────
  {
    id: 22,
    section: "Managing Differences",
    type: "multi-select",
    question: "What are the three signs that a difference exists?",
    options: [
      "You can't find a merit",
      "You're stuck in positions",
      "You have incompatible needs",
      "The conversation is getting emotional",
      "The other person is speaking louder",
    ],
    correct: [
      "You can't find a merit",
      "You're stuck in positions",
      "You have incompatible needs",
    ],
    feedback: {
      correct:
        "🔥 All three! These are your diagnostic signals. When you spot them, shift from Balanced Feedback to Managing a Difference.",
      partial:
        "👏 Close — the three signs are: (1) can't find a merit, (2) stuck in positions, (3) incompatible needs. Emotion and volume can be symptoms but aren't the diagnostic criteria.",
      incorrect:
        "💡 Three diagnostic signals: you can't find a merit, you're stuck in positions, or you have incompatible needs. When you see them, stop trying Balanced Feedback — you've crossed into Managing a Difference territory.",
    },
  },
  {
    id: 23,
    section: "Managing Differences",
    type: "single",
    question:
      "Do you manage a difference the moment you sense a disagreement — before clarifying?",
    options: [
      "No — clarify and confirm first so you truly understand the difference",
      "Yes — address it immediately before it escalates",
      "Only if you're confident you know the other person's position",
      "It depends on how senior the other person is",
    ],
    correct: [
      "No — clarify and confirm first so you truly understand the difference",
    ],
    feedback: {
      correct:
        "👏 Correct! You never manage a difference you only assume you understand. Clarify and confirm first — then, once you're sure the difference is real, use Manage a Difference.",
      partial: "",
      incorrect:
        "😅 Always clarify and confirm before managing a difference. Managing a difference you only assume you understand is where really long, really circular arguments come from. Confirm the reality of the gap first.",
    },
  },
  {
    id: 24,
    section: "Managing Differences",
    type: "multi-select",
    question: "How do you manage a difference?",
    options: [
      "State what's important to you and why",
      "State what's important to them and why",
      "Invite suggestions as to how to manage the gap",
      "Insist on your position until they agree",
      "Escalate to a manager",
    ],
    correct: [
      "State what's important to you and why",
      "State what's important to them and why",
      "Invite suggestions as to how to manage the gap",
    ],
    feedback: {
      correct:
        "🔥 Perfect! State your needs, acknowledge theirs, then invite solutions together. This respects both parties and opens the door to creative resolution.",
      partial:
        "👏 Good — the three moves are: state what's important to you and why, state what's important to them and why, and invite suggestions to bridge the gap.",
      incorrect:
        "💡 Three moves: state what matters to you and why, state what matters to them and why, invite suggestions to bridge the gap. Insisting on your position isn't managing a difference — it IS the difference.",
    },
  },
  {
    id: 25,
    section: "Managing Differences",
    type: "multi-select",
    question:
      "What do you do if you are no longer willing or able to find a solution?",
    options: [
      "Terminate the conversation respectfully",
      "Acknowledge the difference and respect their differing view",
      "State what your decision is and why",
      "Agree to disagree if needed",
      "Give in to keep the peace",
      "Get angry to make your point",
    ],
    correct: [
      "Terminate the conversation respectfully",
      "Acknowledge the difference and respect their differing view",
      "State what your decision is and why",
      "Agree to disagree if needed",
    ],
    feedback: {
      correct:
        "🔥 Excellent! Terminating with dignity is a skill, not a failure. Acknowledge the difference, respect their view, be clear on your decision, and be willing to agree to disagree.",
      partial:
        "👏 Good thinking. The key moves when you can no longer find resolution: terminate respectfully, acknowledge the difference, state your decision and why, and accept that you may agree to disagree.",
      incorrect:
        "😅 When you're out of road: terminate respectfully, acknowledge their right to their view, state your decision clearly, and accept that agreeing to disagree is sometimes the honest outcome. Giving in to keep the peace? That's not resolution — that's a debt that comes due later.",
    },
  },

  // ── CREDITING ─────────────────────────────────────────────────────────────
  {
    id: 26,
    section: "Crediting",
    type: "multi-select",
    question: "When do you give a credit? (What situations warrant it?)",
    options: [
      "When someone exceeds expectations",
      "When someone consistently meets expectations",
      "When someone improves in an area they normally struggle with",
      "Every day as a motivational habit",
      "Whenever you want someone to like you",
    ],
    correct: [
      "When someone exceeds expectations",
      "When someone consistently meets expectations",
      "When someone improves in an area they normally struggle with",
    ],
    feedback: {
      correct:
        "🔥 Exactly right! Credits are earned — for exceeding, consistently meeting, or improving in a struggle area. Using them daily as a habit or to win favour? That's flattery — and people know the difference.",
      partial:
        "👏 Close — credits apply when someone: exceeds expectations, consistently meets expectations, or improves where they normally struggle. Over-crediting or using it for personal gain undermines the skill.",
      incorrect:
        "💡 Credits are earned in three situations: exceeding expectations, consistently meeting expectations, or improving where they normally struggle. Giving credits on a daily schedule or to get someone to like you? That's flattery — and people know the difference.",
    },
  },
  {
    id: 27,
    section: "Crediting",
    type: "multi-select",
    question: "What are the three components of a strong credit?",
    options: [
      "State WHAT they did",
      "State WHAT IT TOOK (the effort, quality or skill involved)",
      "State WHAT IT MEANT (the impact)",
      "End with an encouraging statement about the future",
      "Compare them positively to others on the team",
    ],
    correct: [
      "State WHAT they did",
      "State WHAT IT TOOK (the effort, quality or skill involved)",
      "State WHAT IT MEANT (the impact)",
    ],
    feedback: {
      correct:
        "🔥 All three components nailed! What they did + What it took + What it meant = a credit with real substance and lasting impact.",
      partial:
        "👏 You got some — the three essentials are: what they did, what it took, and what it meant. Future encouragement and comparisons can actually dilute the credit.",
      incorrect:
        "😅 A credit needs all three: what they did (specific), what it took (effort or skill), and what it meant (the impact). Missing any one turns a credit into a general comment — and general comments don't change behaviour.",
    },
  },
  {
    id: 28,
    section: "Crediting",
    type: "multi-select",
    question: "What can detract from a credit?",
    options: [
      "If it's incomplete (missing one of the three components)",
      "If it's not sincere",
      "If credits are given too frequently",
      "If the person hasn't truly earned it",
      "If it's given in front of others",
      "If it's given in writing rather than verbally",
    ],
    correct: [
      "If it's incomplete (missing one of the three components)",
      "If it's not sincere",
      "If credits are given too frequently",
      "If the person hasn't truly earned it",
    ],
    feedback: {
      correct:
        "🔥 Spot on — all four derailers identified! Incomplete, insincere, too frequent, or unearned credits all backfire. Each one quietly erodes the power of the skill.",
      partial:
        "👏 Good — the four things that detract are: incomplete credit, insincerity, over-frequency, and giving it when it hasn't been earned. Delivery method (in person vs. written) isn't a derailer.",
      incorrect:
        "💡 Four credit-killers: incomplete, insincere, too frequent, or unearned. Credits work because they're rare and true — protect that by being selective. Overuse them and watch people start tuning you out.",
    },
  },

  // ── IMS GENERALLY ─────────────────────────────────────────────────────────
  {
    id: 29,
    section: "IMS Generally",
    type: "multi-select",
    question:
      "What are the critical things that need to be in place for you to use IMS effectively?",
    options: [
      "Use it consciously",
      "Be clear on your intent",
      "Keep it simple",
      "Practise and reflect daily",
      "Celebrate your wins — when it works",
      "Ask for feedback",
      "Share and give others feedback and credits",
      "Only use it with difficult people",
      "Wait until you feel ready",
    ],
    correct: [
      "Use it consciously",
      "Be clear on your intent",
      "Keep it simple",
      "Practise and reflect daily",
      "Celebrate your wins — when it works",
      "Ask for feedback",
      "Share and give others feedback and credits",
    ],
    feedback: {
      correct:
        "🔥 WOW — you got every one! This is the mindset of someone who will actually change. Conscious practice, clear intent, simplicity, daily reflection, celebrating wins, asking for feedback, and sharing the skills — that's the formula.",
      partial:
        "👏 Great effort! The seven essentials are: use it consciously, be clear on intent, keep it simple, practise and reflect daily, celebrate wins, ask for feedback, and share/credit others. Every one matters.",
      incorrect:
        "😅 Seven essentials — and 'wait until you feel ready' didn't make the cut! Ready is a myth. The formula: conscious use, clear intent, keep it simple, practise daily, celebrate wins, ask for feedback, and share it with others. Start now.",
    },
  },

  // ── REFLECTION QUESTIONS ──────────────────────────────────────────────────
  {
    id: 30,
    section: "Reflection",
    type: "reflection",
    question: "What are the 3 most impactful things you have learnt from attending IMS?",
    keywords: ["clarif", "confirm", "feedback", "discussion", "differ", "credit", "rid", "merit", "concern", "listen", "intent", "skill", "communic"],
    reflectionFeedback: {
      too_short: "💡 You've made a start — but a strong reflection takes more than a sentence. What specifically changed for you? Which skills? Which relationships?",
      weak: "😅 Good effort — but try to name the specific skills or insights that stood out. The more concrete you are, the more useful this reflection becomes for your own growth.",
      medium: "👏 Good thinking — you're making real connections. To go deeper: can you name all three things specifically and explain why each one matters to you personally?",
      strong: "🔥 Excellent reflection! You're clearly thinking with IMS, not just about it. That depth of awareness is exactly what turns training into habit.",
    },
    modelAnswer:
      "The most powerful reflections connect a specific skill to a real relationship or situation. Strong leaders identify: (1) a skill that changes how they handle conflict, (2) something that shifts how they listen, and (3) an insight about their own tendencies (like their personal RID triggers, or over-using acknowledgements instead of merits).",
  },
  {
    id: 31,
    section: "Reflection",
    type: "reflection",
    question:
      "Which skill do you think will have the biggest impact on your leadership if you master it?",
    keywords: ["clarif", "confirm", "feedback", "discussion", "differ", "credit", "rid", "because", "impact", "improve", "skill", "when", "my"],
    reflectionFeedback: {
      too_short: "💡 Just a word or two isn't quite enough here — which skill, and more importantly, why? That 'why' is where the real insight lives.",
      weak: "😅 A strong answer names the specific skill AND explains why it will move the needle for you. What is it about that skill that connects to your real conversations or relationships?",
      medium: "👏 Good — you named the skill. Now push one step further: why this one? What does mastering it unlock for you specifically?",
      strong: "🔥 That's the kind of reflection that sticks. You know which skill will change things for you — now go use it deliberately in your next three conversations.",
    },
    modelAnswer:
      "The skill that will move the needle most is usually the one you use least naturally. For many leaders it's Balanced Feedback (most either avoid it or give it without the merit-retention step). For others it's Crediting (assuming people already know they're doing well). Reflect honestly — then practise that skill in your next three real conversations.",
  },
  {
    id: 32,
    section: "Reflection",
    type: "reflection",
    question:
      "Give an example of when you used an IMS skill after the training. Describe the situation, how you used the skill, how you felt, and what the impact was.",
    keywords: ["conversation", "situation", "said", "used", "applied", "felt", "impact", "result", "team", "colleague", "manager", "person", "skill", "clarif", "feedback", "credit", "different"],
    reflectionFeedback: {
      too_short: "💡 A great IMS example needs more space than that! Situation + skill used + how you applied it + impact. Try to flesh it out.",
      weak: "😅 You've touched on it — but the most useful examples are specific: what was the situation, which skill, what exactly you said or did, and what changed as a result.",
      medium: "👏 Good start — you've described a real situation. To make it even stronger, describe exactly how you applied the IMS steps and what the other person's response was.",
      strong: "🔥 That's a great example! Specific situation, clear skill application, real impact — this is exactly how mastery gets built: one real conversation at a time.",
    },
    modelAnswer:
      "A strong example includes: the specific skill used, the context (what was at stake), how you applied the steps, what was different about the outcome compared to how it might have gone before, and how the other person responded. If you haven't had the chance yet, describe a situation coming up where you plan to use one of the skills.",
  },
  {
    id: 33,
    section: "Reflection",
    type: "reflection",
    question:
      "We would value your balanced feedback on how effective you think this quiz is.",
    keywords: ["merit", "concern", "good", "work", "effective", "helpful", "could", "improve", "suggest", "better", "missing", "change", "strong", "weak"],
    reflectionFeedback: {
      too_short: "💡 That's the beginning of a thought — but Balanced Feedback needs more space. Try again: what's working (merit), what's the concern, and how would you improve it?",
      weak: "😅 Interesting — but did you notice that a Balanced Feedback response has three parts? A merit (what works), a concern (what could improve), and ideas for how to retain the merit while addressing the concern. Try applying the model to your own answer!",
      medium: "👏 You're getting there — you've identified something that works or something to improve. A complete Balanced Feedback has both a specific merit AND a specific concern, plus ideas for how to address the concern without losing the merit.",
      strong: "🔥 You actually used Balanced Feedback to give feedback on the Balanced Feedback quiz. That's either very meta or very mastered — we're going with mastered.",
    },
    modelAnswer:
      "A great Balanced Feedback response includes: a specific merit (what works well about the quiz and why), a specific concern (what could be improved and the impact of that gap), and ideas for how to retain the merit while addressing the concern. Notice — you just practised the very skill you learned!",
  },
];
