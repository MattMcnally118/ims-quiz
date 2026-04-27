import { useState, useMemo } from "react";
import { questions } from "./quizData";
import { supabase } from "./supabase";
import "./App.css";

const SECTIONS = [...new Set(questions.map((q) => q.section))];

function getSectionColor(section) {
  const map = {
    "IMS Overview": "#4E8B87",
    "Clarify & Confirm": "#5B8DB8",
    "Balanced Feedback": "#8B6BB1",
    "Discussion Skills": "#B87A3B",
    "Managing Differences": "#B85B5B",
    Crediting: "#5B9E6B",
    "IMS Generally": "#4E8B87",
    Reflection: "#888",
  };
  return map[section] || "#4E8B87";
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function scoreReflection(text, keywords) {
  if (!keywords?.length) return null;
  const lower = text.toLowerCase();
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  if (wordCount < 15) return "too_short";
  const matches = keywords.filter((kw) => lower.includes(kw)).length;
  if (matches >= 3) return "strong";
  if (matches >= 1) return "medium";
  return "weak";
}

async function saveResults(user, results) {
  if (!supabase || !user) return;
  const scored = results.filter((r) => r.firstAttempt !== "reflection");
  const correctCount = scored.filter((r) => r.firstAttempt === "correct").length;
  const partialCount = scored.filter((r) => r.firstAttempt === "partial").length;
  const incorrectCount = scored.filter((r) => r.firstAttempt === "incorrect").length;
  const retriedCount = scored.filter((r) => r.tookRetry).length;
  const pct =
    scored.length > 0
      ? Math.round(((correctCount + partialCount * 0.5) / scored.length) * 100)
      : 0;
  const { error } = await supabase.from("quiz_attempts").insert({
    name: user.name,
    email: user.email,
    score_pct: pct,
    correct_count: correctCount,
    partial_count: partialCount,
    incorrect_count: incorrectCount,
    retried_count: retriedCount,
    results,
  });
  if (error) console.error("Failed to save results:", error);
}

function RegisterScreen({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!email.trim() || !email.includes("@")) { setError("Please enter a valid email address."); return; }
    onSubmit({ name: name.trim(), email: email.trim() });
  };

  return (
    <div className="card welcome-card">
      <div className="welcome-emoji">👋</div>
      <h1>Before we begin</h1>
      <p className="welcome-subtitle">
        Enter your details so your results can be tracked and your coach can follow up.
      </p>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => { setName(e.target.value); setError(""); }}
          className="register-input"
          autoFocus
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          className="register-input"
        />
        {error && <p className="register-error">{error}</p>}
        <button type="submit" className="btn-primary">
          Continue →
        </button>
      </form>
    </div>
  );
}

function ProgressBar({ current, total }) {
  return (
    <div className="progress-bar-track">
      <div
        className="progress-bar-fill"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
}

function WelcomeScreen({ onStart }) {
  return (
    <div className="card welcome-card">
      <div className="welcome-emoji">🚀</div>
      <h1>IMS Mastery Challenge</h1>
      <p className="welcome-subtitle">
        Congratulations on completing your three-day IMS experience.
      </p>
      <p className="welcome-body">
        Most people leave training feeling inspired. The best leaders leave
        training and actually <em>change how they communicate</em>.
      </p>
      <p className="welcome-body">
        This challenge will test your awareness, judgement, and ability to apply
        IMS in real conversations. Mistakes mean your brain is learning — missed
        answers show you exactly where your next breakthrough lives.
      </p>
      <div className="welcome-sections">
        {SECTIONS.map((s) => (
          <span
            key={s}
            className="section-badge"
            style={{ background: getSectionColor(s) }}
          >
            {s}
          </span>
        ))}
      </div>
      <button className="btn-primary" onClick={onStart}>
        Let's go →
      </button>
    </div>
  );
}

function MultiSelectQuestion({ question, onSubmit }) {
  const shuffledOptions = useMemo(
    () => shuffleArray(question.options),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [question.id]
  );
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [firstAttemptResult, setFirstAttemptResult] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const correct = question.correct;

  const evaluate = (sel) => {
    const allCorrect =
      sel.length === correct.length && sel.every((s) => correct.includes(s));
    const someCorrect = !allCorrect && sel.some((s) => correct.includes(s));
    return allCorrect ? "correct" : someCorrect ? "partial" : "incorrect";
  };

  const handleSubmit = () => {
    if (selected.length === 0) return;
    const result = evaluate(selected);
    if (!firstAttemptResult) setFirstAttemptResult(result);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setSelected([]);
    setSubmitted(false);
    setRetryCount((r) => r + 1);
  };

  const handleNext = () => {
    onSubmit({
      firstAttempt: firstAttemptResult || evaluate(selected),
      tookRetry: retryCount > 0,
    });
  };

  const toggle = (opt) => {
    if (submitted) return;
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  const currentResult = submitted ? evaluate(selected) : null;
  const feedbackText =
    currentResult === "correct"
      ? question.feedback.correct
      : currentResult === "partial"
      ? question.feedback.partial
      : question.feedback.incorrect;

  return (
    <div>
      <p className="question-instruction">Select all that apply</p>
      <div className="options-list">
        {shuffledOptions.map((opt) => {
          const isSelected = selected.includes(opt);
          const isCorrect = correct.includes(opt);
          let cls = "option";
          if (submitted) {
            if (isCorrect) cls += " option-correct";
            else if (isSelected) cls += " option-wrong";
          } else if (isSelected) {
            cls += " option-selected";
          }
          return (
            <button key={opt} className={cls} onClick={() => toggle(opt)}>
              <span className="option-indicator">
                {submitted
                  ? isCorrect
                    ? "✓"
                    : isSelected
                    ? "✗"
                    : ""
                  : isSelected
                  ? "✓"
                  : ""}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {!submitted && (
        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={selected.length === 0}
        >
          Submit answer
        </button>
      )}

      {submitted && (
        <>
          <div
            className={`feedback-box ${
              currentResult === "correct"
                ? "feedback-great"
                : currentResult === "partial"
                ? "feedback-partial"
                : "feedback-miss"
            }`}
          >
            <p>{feedbackText}</p>
          </div>
          <div className="action-row">
            {currentResult === "correct" && (
              <button className="btn-primary" onClick={handleNext}>
                Next question →
              </button>
            )}
            {currentResult === "partial" && (
              <>
                <button className="btn-retry" onClick={handleRetry}>
                  ↩ Try again
                </button>
                <button className="btn-primary" onClick={handleNext}>
                  Next question →
                </button>
              </>
            )}
            {currentResult === "incorrect" && (
              <button className="btn-retry" onClick={handleRetry}>
                ↩ Try again
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function SingleSelectQuestion({ question, onSubmit }) {
  const shuffledOptions = useMemo(
    () => shuffleArray(question.options),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [question.id]
  );
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [firstAttemptResult, setFirstAttemptResult] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const correct = question.correct[0];

  const handleSubmit = () => {
    if (!selected) return;
    const result = selected === correct ? "correct" : "incorrect";
    if (!firstAttemptResult) setFirstAttemptResult(result);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setSelected(null);
    setSubmitted(false);
    setRetryCount((r) => r + 1);
  };

  const handleNext = () => {
    const result = selected === correct ? "correct" : "incorrect";
    onSubmit({
      firstAttempt: firstAttemptResult || result,
      tookRetry: retryCount > 0,
    });
  };

  const isCorrect = submitted && selected === correct;

  return (
    <div>
      <p className="question-instruction">Choose one answer</p>
      <div className="options-list">
        {shuffledOptions.map((opt) => {
          const isSelected = selected === opt;
          const isRight = correct === opt;
          let cls = "option";
          if (submitted) {
            if (isRight) cls += " option-correct";
            else if (isSelected) cls += " option-wrong";
          } else if (isSelected) {
            cls += " option-selected";
          }
          return (
            <button
              key={opt}
              className={cls}
              onClick={() => !submitted && setSelected(opt)}
            >
              <span className="option-indicator">
                {submitted
                  ? isRight
                    ? "✓"
                    : isSelected
                    ? "✗"
                    : ""
                  : isSelected
                  ? "●"
                  : ""}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {!submitted && (
        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={!selected}
        >
          Submit answer
        </button>
      )}

      {submitted && (
        <>
          <div
            className={`feedback-box ${
              isCorrect ? "feedback-great" : "feedback-miss"
            }`}
          >
            <p>
              {isCorrect
                ? question.feedback.correct
                : question.feedback.incorrect}
            </p>
          </div>
          <div className="action-row">
            {isCorrect ? (
              <button className="btn-primary" onClick={handleNext}>
                Next question →
              </button>
            ) : (
              <button className="btn-retry" onClick={handleRetry}>
                ↩ Try again
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function ReflectionQuestion({ question, onSubmit }) {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleSubmit = () => {
    if (text.trim().length < 10) return;
    const s = scoreReflection(text, question.keywords);
    setScore(s);
    setSubmitted(true);
  };

  const scoreFeedback =
    score && question.reflectionFeedback
      ? question.reflectionFeedback[score]
      : null;

  const scoreFeedbackClass =
    score === "strong"
      ? "feedback-great"
      : score === "medium"
      ? "feedback-partial"
      : "feedback-miss";

  return (
    <div>
      <p className="question-instruction">Take your time — write openly</p>
      <textarea
        className="reflection-input"
        rows={6}
        placeholder="Write your answer here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={submitted}
      />

      {!submitted && (
        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={text.trim().length < 10}
        >
          Submit &amp; see coaching feedback
        </button>
      )}

      {submitted && (
        <>
          {scoreFeedback && (
            <div className={`feedback-box ${scoreFeedbackClass}`}>
              <p>{scoreFeedback}</p>
            </div>
          )}
          <div className="feedback-box feedback-reflection">
            <p className="feedback-label">💡 Coaching perspective</p>
            <p>{question.modelAnswer}</p>
          </div>
          <button
            className="btn-primary"
            onClick={() =>
              onSubmit({
                firstAttempt: "reflection",
                tookRetry: false,
                reflectionScore: score,
                reflectionText: text,
              })
            }
          >
            Next question →
          </button>
        </>
      )}
    </div>
  );
}

function ScoreScreen({ results, user, saved, onRestart }) {
  const scored = results.filter((r) => r.firstAttempt !== "reflection");
  const correctCount = scored.filter((r) => r.firstAttempt === "correct").length;
  const partialCount = scored.filter((r) => r.firstAttempt === "partial").length;
  const incorrectCount = scored.filter((r) => r.firstAttempt === "incorrect").length;
  const retriedCount = scored.filter((r) => r.tookRetry).length;
  const reflections = results.filter((r) => r.firstAttempt === "reflection");

  const pct =
    scored.length > 0
      ? Math.round(((correctCount + partialCount * 0.5) / scored.length) * 100)
      : 0;

  let badge, badgeClass;
  if (pct >= 90) {
    badge = "🔥 IMS Master";
    badgeClass = "badge-gold";
  } else if (pct >= 70) {
    badge = "👏 Strong Practitioner";
    badgeClass = "badge-silver";
  } else if (pct >= 50) {
    badge = "💡 Growing Leader";
    badgeClass = "badge-bronze";
  } else {
    badge = "😅 Keep Practising";
    badgeClass = "badge-keep-going";
  }

  const needsReview = results.filter(
    (r) => r.firstAttempt !== "correct" && r.firstAttempt !== "reflection"
  );

  const bySection = needsReview.reduce((acc, r) => {
    if (!acc[r.section]) acc[r.section] = [];
    acc[r.section].push(r);
    return acc;
  }, {});

  return (
    <div className="card score-card">
      {user && (
        <p className="score-user">
          Results for <strong>{user.name}</strong>
          {saved && <span className="saved-indicator"> · ✓ Saved</span>}
        </p>
      )}
      <div className={`score-badge ${badgeClass}`}>{badge}</div>
      <div className="score-circle">
        <span className="score-pct">{pct}%</span>
        <span className="score-label">mastery score</span>
      </div>

      <div className="score-breakdown">
        <div className="score-row score-correct">
          <span>✓ Correct first attempt</span>
          <span>{correctCount}</span>
        </div>
        <div className="score-row score-partial">
          <span>~ Partial</span>
          <span>{partialCount}</span>
        </div>
        <div className="score-row score-incorrect">
          <span>✗ Missed</span>
          <span>{incorrectCount}</span>
        </div>
        {retriedCount > 0 && (
          <div className="score-row score-retried">
            <span>↩ Corrected on retry</span>
            <span>{retriedCount}</span>
          </div>
        )}
        <div className="score-row score-reflection">
          <span>💭 Reflections completed</span>
          <span>{reflections.length}</span>
        </div>
      </div>

      <p className="score-message">
        {pct >= 90
          ? "Exceptional! Now go use IMS in your next real conversation."
          : pct >= 70
          ? "Solid foundation. Review the questions below and practise daily."
          : "This is exactly where mastery begins. Review the sections below and come back."}
      </p>

      {needsReview.length > 0 && (
        <div className="review-section">
          <h3 className="review-heading">Questions to review</h3>
          {Object.entries(bySection).map(([section, qs]) => (
            <div key={section} className="review-section-group">
              <div
                className="review-section-label"
                style={{ background: getSectionColor(section) }}
              >
                {section}
              </div>
              {qs.map((r) => (
                <div key={r.questionId} className="review-item">
                  <div className="review-item-header">
                    <span
                      className={`review-result-tag ${
                        r.firstAttempt === "partial"
                          ? "tag-partial"
                          : "tag-missed"
                      }`}
                    >
                      {r.firstAttempt === "partial" ? "⚠ Partial" : "✗ Missed"}
                    </span>
                    {r.tookRetry && (
                      <span className="tag-retried">↩ Corrected on retry</span>
                    )}
                  </div>
                  <p className="review-q-text">{r.questionText}</p>
                  {r.correctAnswers && r.correctAnswers.length > 0 && (
                    <div className="review-answers">
                      <p className="review-answers-label">
                        Correct answer
                        {r.correctAnswers.length > 1 ? "s" : ""}:
                      </p>
                      {r.correctAnswers.map((a) => (
                        <p key={a} className="review-answer-item">
                          ✓ {a}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {reflections.length > 0 && (
        <div className="review-section">
          <h3 className="review-heading">Reflection quality</h3>
          {reflections.map((r) => (
            <div key={r.questionId} className="review-item">
              <span
                className={`review-result-tag ${
                  r.reflectionScore === "strong"
                    ? "tag-correct"
                    : r.reflectionScore === "medium"
                    ? "tag-partial"
                    : "tag-missed"
                }`}
              >
                {r.reflectionScore === "strong"
                  ? "🔥 Strong"
                  : r.reflectionScore === "medium"
                  ? "👏 Good start"
                  : r.reflectionScore === "too_short"
                  ? "💡 Too brief"
                  : "💡 Needs depth"}
              </span>
              <p className="review-q-text">{r.questionText}</p>
            </div>
          ))}
        </div>
      )}

      <button className="btn-secondary" onClick={onRestart}>
        Restart quiz
      </button>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("register");
  const [user, setUser] = useState(null);
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState([]);
  const [saved, setSaved] = useState(false);

  const q = questions[current];

  const handleAnswer = ({
    firstAttempt,
    tookRetry = false,
    reflectionScore = null,
    reflectionText = null,
  }) => {
    const newResult = {
      questionId: q.id,
      section: q.section,
      questionText: q.question,
      correctAnswers: q.correct || null,
      firstAttempt,
      tookRetry,
      reflectionScore,
      reflectionText,
    };
    const newResults = [...results, newResult];
    setResults(newResults);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setScreen("score");
      saveResults(user, newResults).then(() => setSaved(true));
    }
  };

  const restart = () => {
    setCurrent(0);
    setResults([]);
    setSaved(false);
    setScreen("register");
  };

  if (screen === "register")
    return <RegisterScreen onSubmit={(u) => { setUser(u); setScreen("welcome"); }} />;
  if (screen === "welcome")
    return <WelcomeScreen onStart={() => setScreen("quiz")} />;
  if (screen === "score")
    return <ScoreScreen results={results} user={user} saved={saved} onRestart={restart} />;

  return (
    <div className="quiz-layout">
      <div className="quiz-header">
        <span
          className="section-badge"
          style={{ background: getSectionColor(q.section) }}
        >
          {q.section}
        </span>
        <span className="question-counter">
          {current + 1} / {questions.length}
        </span>
      </div>
      <ProgressBar current={current + 1} total={questions.length} />

      <div className="card question-card">
        <h2 className="question-text">{q.question}</h2>

        {q.type === "multi-select" && (
          <MultiSelectQuestion key={q.id} question={q} onSubmit={handleAnswer} />
        )}
        {q.type === "single" && (
          <SingleSelectQuestion key={q.id} question={q} onSubmit={handleAnswer} />
        )}
        {q.type === "reflection" && (
          <ReflectionQuestion key={q.id} question={q} onSubmit={handleAnswer} />
        )}
      </div>
    </div>
  );
}
