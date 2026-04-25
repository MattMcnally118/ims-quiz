export const questions = [
  // ── INTRO ──────────────────────────────────────────────────────────────────
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
        "👏 Great start — you got some of them. The full set is: Clarify & Confirm, Balanced Feedback, Discussion Skills, Manage a Difference, and Crediting. Make sure all five are locked in before you head into your next conversation.",
      incorrect:
        "💡 Not quite. The five skills are: Clarify & Confirm, Balanced Feedback, Discussion Skills, Manage a Difference, and Crediting. These are the foundation of everything you practised over three days.",
    },
  },

  // ── CLARIFY & CONFIRM ──────────────────────────────────────────────────────
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
        "👏 You captured part of it. The two key reasons are: (1) these skills apply in virtually every conversation, and (2) they prevent 90% of misunderstandings. The impact is massive.",
      incorrect:
        "💡 The real reasons are that these skills are used constantly AND they prevent 90% of misunderstandings. Practise them and watch the quality of your conversations transform.",
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
        "💡 Clarifying means to make clear, clear up, or shed light on. It's not about summarising (that's confirming) or challenging — it's about genuinely seeking to understand.",
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
        "💡 The four reasons to clarify are: to truly understand, to make an informed decision, to motivate others, and to take action. Winning arguments or filling silence are not IMS intents.",
    },
  },
  {
    id: 5,
    section: "Clarify & Confirm",
    type: "single",
    question:
      "What does RID stand for, and when do you need to clarify to overcome it?",
    options: [
      "Reject, Ignore, Disagree — when your immediate impulse is to do any of these",
      "React, Interrupt, Deflect — when emotions run high",
      "Respond, Inform, Direct — when you need to lead the conversation",
      "Rethink, Inquire, Decide — when you are unsure what to say",
    ],
    correct: [
      "Reject, Ignore, Disagree — when your immediate impulse is to do any of these",
    ],
    feedback: {
      correct:
        "🔥 Yes! RID = Reject, Ignore, Disagree. When that impulse hits, that's exactly the moment to pause and clarify so you understand the other person's perspective first.",
      partial: "",
      incorrect:
        "💡 RID stands for Reject, Ignore, Disagree. These are the impulses that get in the way of real listening. When you feel the urge to RID someone, that's your cue to clarify instead.",
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
        "💡 The five things that cause a RID impulse are: time pressure, ego, assumptions, hierarchy bias, and tapes/bias/perceptions. These are deeply human — everyone has them. The skill is noticing them.",
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
        "💡 You clarify by asking What and Why questions. These open probes encourage the other person to share more deeply. Closed questions close doors; open questions open minds.",
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
        "💡 To confirm means to validate or verify your understanding by stating back a short summary of what you heard. Importantly — confirming does NOT mean agreeing!",
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
        "💡 You've successfully confirmed when the OTHER person says 'yes' — confirming that you understood them. It's their signal, not your feeling, that counts.",
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
        "🔥 Critical distinction! Confirming = 'I understand what you're saying.' Agreeing = 'I accept your point.' You can fully understand someone and still hold a different view.",
      partial: "",
      incorrect:
        "💡 Confirming does NOT equal agreeing. This is one of the most important distinctions in IMS. You can confirm someone's view perfectly — and then respectfully disagree with it.",
    },
  },

  // ── BALANCED FEEDBACK ──────────────────────────────────────────────────────
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
        "🔥 Perfect! Balanced Feedback is specifically for constructive change — when behaviour, ideas or thinking need to shift. Emergencies and exceptional praise use different approaches.",
      partial:
        "👏 You're on the right track. Balanced Feedback applies when you want to change behaviour, modify an idea, or improve performance — constructively. It's not for emergencies or pure praise.",
      incorrect:
        "💡 Balanced Feedback is for constructive change: unsatisfactory behaviour you want improved willingly, non-feasible ideas you want refined, or thinking/behaviour/performance you want to shift positively.",
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
        "💡 Your intent is to effect change constructively — so they keep doing what works and change what doesn't. It's not about pointing out wrongs; it's about unlocking better performance.",
    },
  },
  {
    id: 13,
    section: "Balanced Feedback",
    type: "multi-select",
    question:
      "What are the steps to giving Balanced Feedback? (Select all that apply)",
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
        "🔥 Nailed it! Merit → Concern → Explore how to retain the merit AND eliminate the concern. Remember: many people skip the 'retain the merit' part — don't be one of them!",
      partial:
        "👏 Close! The three steps are: (1) State the merit, (2) State the concern, (3) Explore how to retain the merit AND eliminate the concern. Notice step 3 has TWO parts — both matter.",
      incorrect:
        "💡 Balanced Feedback has three steps: State the merit → State the concern → Explore ideas to both retain the merit AND eliminate the concern. The apology and softening compliment are not part of the model.",
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
        "💡 Merits are SPECIFIC; acknowledgements are general. Feedback only works when it's specific — vague praise doesn't tell someone what to keep doing. Acknowledgements aren't bad, they just don't belong inside Balanced Feedback.",
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
        "💡 The merit must be related to the concern to keep the feedback relevant and effective. If the merit and concern aren't connected, the feedback loses its integrity.",
    },
  },
  {
    id: 16,
    section: "Balanced Feedback",
    type: "single",
    question:
      "Should you use 'however' or 'but' to link the merit and the concern?",
    options: [
      "No — 'however' and 'but' cancel out everything said before them",
      "Yes — they clearly signal the transition to the concern",
      "Only 'however' is acceptable; 'but' is too blunt",
      "Either word is fine as long as your tone is warm",
    ],
    correct: [
      "No — 'however' and 'but' cancel out everything said before them",
    ],
    feedback: {
      correct:
        "🔥 You know your stuff! 'You did great work BUT…' — the 'but' erases the merit. Avoid it. Use a neutral link or simply pause and move to the concern without a connecting word that negates.",
      partial: "",
      incorrect:
        "💡 Do NOT use 'however' or 'but'. These words psychologically cancel everything before them. The merit disappears and all the person hears is the criticism. Find a different way to transition.",
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
        "💡 Close — the four legitimate exceptions are: emergencies, safety situations, policy situations, and minor self-correcting errors. 'In a hurry' or personal dislike don't qualify.",
      incorrect:
        "💡 Direct feedback is only OK in four scenarios: emergencies, safety situations, policy situations, and minor self-correcting errors. These are the exceptions, not the norm.",
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
        "🔥 Perfect sequence! Open → Explore → Close. Simple and powerful. Each step has its own skills and discipline.",
      partial: "",
      incorrect:
        "💡 The three steps are: Open the discussion, Explore ideas, Close the discussion. This structure keeps discussions productive rather than circular.",
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
        "👏 Good — but the three essentials are: actions agreed, time frames, and ownership. Make sure all three are explicit or the discussion will drift.",
      incorrect:
        "💡 A discussion close needs three things: actions agreed, time frames, and clear ownership. No follow-up email or motivational moment replaces these fundamentals.",
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
        "💡 The four exploration moves are: (1) offer suggestion/invite response, (2) invite suggestion/offer response, (3) temporarily alter restrictions, (4) build on others' ideas with acknowledgement. Voting and deferring to hierarchy are not IMS tools.",
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
        "👏 Exactly. Exploring ideas when the decision is already made is dishonest and wastes people's time. If it's decided, say so and move to Discussion Skills' close — or use a different skill.",
      partial: "",
      incorrect:
        "💡 You stop exploring ideas when the decision has already been made. Inviting input when the outcome is fixed is manipulative. Sensitive topics, disagreement, or time pressure don't automatically stop exploration.",
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
        "💡 The three signs a difference exists are: you can't find a merit, you're stuck in positions, and you have incompatible needs. Watch for these signals — they tell you which IMS skill to reach for.",
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
        "💡 Always clarify and confirm before managing a difference. You need to be sure the difference is real and that you understand both sides clearly. Acting on assumptions is a recipe for escalation.",
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
        "💡 Managing a difference means: (1) state what matters to you and why, (2) state what matters to them and why, (3) invite suggestions to bridge the gap. Insisting or escalating are last resorts, not the model.",
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
        "💡 When resolution isn't possible: terminate with respect, acknowledge their right to their view, state clearly what your decision is and why, and accept that agreeing to disagree is sometimes the outcome. Giving in or getting angry both erode the relationship.",
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
        "🔥 Exactly right! Credits are earned — for exceeding, consistently meeting, or improving in a struggle area. Giving them too freely (every day as a habit) diminishes their impact.",
      partial:
        "👏 Close — credits apply when someone: exceeds expectations, consistently meets expectations, or improves where they normally struggle. Over-crediting or using it for personal gain undermines the skill.",
      incorrect:
        "💡 Credits are earned in three situations: exceeding expectations, consistently meeting expectations, or improving where they normally struggle. They lose power when given too frequently or insincerely.",
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
        "👏 You got some — the three essentials are: what they did, what it took, and what it meant. The other options (future encouragement, comparisons) can actually dilute the credit.",
      incorrect:
        "💡 A powerful credit has three parts: what they did (specific behaviour), what it took (the effort or skill it required), and what it meant (the impact it had). All three give it substance and sincerity.",
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
        "🔥 Spot on — all four derailers identified! Incomplete, insincere, too frequent, or unearned credits all backfire. Each one undermines the trust and impact of the skill.",
      partial:
        "👏 Good — the four things that detract are: incomplete credit, insincerity, over-frequency, and giving it when it hasn't been earned. Delivery method (in person vs. written) isn't a derailer.",
      incorrect:
        "💡 Four things can weaken a credit: it's incomplete, it's not sincere, it's given too often, or it hasn't been earned. Protect the power of this skill by using it carefully.",
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
        "💡 The seven essentials for IMS mastery: use it consciously, be clear on your intent, keep it simple, practise and reflect daily, celebrate wins when it works, ask for feedback, and share the skills with others. Waiting until you're 'ready' means never starting.",
    },
  },

  // ── REFLECTION QUESTIONS ──────────────────────────────────────────────────
  {
    id: 30,
    section: "Reflection",
    type: "reflection",
    question: "What are the 3 most impactful things you have learnt from attending IMS?",
    modelAnswer:
      "There's no single right answer here — but the most powerful reflections tend to connect a specific skill to a real relationship or situation in your life. The best leaders identify: (1) a skill that will change how they handle conflict, (2) something that shifts how they listen, and (3) an insight about their own tendencies (like RID triggers or over-using acknowledgements instead of merits). What's yours?",
  },
  {
    id: 31,
    section: "Reflection",
    type: "reflection",
    question:
      "Which skill do you think will have the biggest impact on your leadership if you master it?",
    modelAnswer:
      "The skill that will move the needle most is usually the one you use least naturally. For many leaders it's Balanced Feedback (because most either avoid it or give it without the merit-retention step). For others it's Crediting (because they assume people know they're doing well). Reflect honestly — and then go practise that skill in your next three conversations.",
  },
  {
    id: 32,
    section: "Reflection",
    type: "reflection",
    question:
      "Give an example of when you used an IMS skill after the training. Describe the situation, how you used the skill, how you felt, and what the impact was.",
    modelAnswer:
      "A strong example includes: the specific skill used, the context (what was at stake), how you applied the steps, what was different about the outcome compared to how it might have gone before, and — crucially — how the other person responded. If you haven't had the chance yet, describe a situation coming up where you plan to use one of the skills.",
  },
  {
    id: 33,
    section: "Reflection",
    type: "reflection",
    question:
      "We would value your balanced feedback on how effective you think this quiz is.",
    modelAnswer:
      "A great balanced feedback response would include: a specific merit (what works well about the quiz and why), a specific concern (what could be improved and the impact of that gap), and ideas for how to retain the merit while addressing the concern. Notice — you're practising the very skill you just learned!",
  },
];
