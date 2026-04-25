import { useState } from "react";
import { questions } from "./quizData";
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
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (opt) => {
    if (submitted) return;
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  const handleSubmit = () => {
    if (selected.length === 0) return;
    setSubmitted(true);
  };

  const correct = question.correct;
  const allCorrect =
    submitted &&
    selected.length === correct.length &&
    selected.every((s) => correct.includes(s));
  const someCorrect =
    submitted && !allCorrect && selected.some((s) => correct.includes(s));

  const feedbackText = allCorrect
    ? question.feedback.correct
    : someCorrect
    ? question.feedback.partial
    : question.feedback.incorrect;

  return (
    <div>
      <p className="question-instruction">Select all that apply</p>
      <div className="options-list">
        {question.options.map((opt) => {
          const isSelected = selected.includes(opt);
          const isCorrect = correct.includes(opt);
          let cls = "option";
          if (submitted) {
            if (isCorrect) cls += " option-correct";
            else if (isSelected && !isCorrect) cls += " option-wrong";
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
          <div className={`feedback-box ${allCorrect ? "feedback-great" : someCorrect ? "feedback-partial" : "feedback-miss"}`}>
            <p>{feedbackText}</p>
          </div>
          <button className="btn-primary" onClick={() => onSubmit(allCorrect ? "correct" : someCorrect ? "partial" : "incorrect")}>
            Next question →
          </button>
        </>
      )}
    </div>
  );
}

function SingleSelectQuestion({ question, onSubmit }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!selected) return;
    setSubmitted(true);
  };

  const correct = question.correct[0];
  const isCorrect = submitted && selected === correct;

  return (
    <div>
      <p className="question-instruction">Choose one answer</p>
      <div className="options-list">
        {question.options.map((opt) => {
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
          <div className={`feedback-box ${isCorrect ? "feedback-great" : "feedback-miss"}`}>
            <p>{isCorrect ? question.feedback.correct : question.feedback.incorrect}</p>
          </div>
          <button className="btn-primary" onClick={() => onSubmit(isCorrect ? "correct" : "incorrect")}>
            Next question →
          </button>
        </>
      )}
    </div>
  );
}

function ReflectionQuestion({ question, onSubmit }) {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (text.trim().length < 10) return;
    setSubmitted(true);
  };

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
          <div className="feedback-box feedback-reflection">
            <p className="feedback-label">💡 Coaching perspective</p>
            <p>{question.modelAnswer}</p>
          </div>
          <button className="btn-primary" onClick={() => onSubmit("reflection")}>
            Next question →
          </button>
        </>
      )}
    </div>
  );
}

function ScoreScreen({ results, onRestart }) {
  const scored = results.filter((r) => r !== "reflection");
  const correct = scored.filter((r) => r === "correct").length;
  const partial = scored.filter((r) => r === "partial").length;
  const incorrect = scored.filter((r) => r === "incorrect").length;
  const pct = scored.length > 0 ? Math.round(((correct + partial * 0.5) / scored.length) * 100) : 0;

  let badge, badgeClass;
  if (pct >= 90) { badge = "🔥 IMS Master"; badgeClass = "badge-gold"; }
  else if (pct >= 70) { badge = "👏 Strong Practitioner"; badgeClass = "badge-silver"; }
  else if (pct >= 50) { badge = "💡 Growing Leader"; badgeClass = "badge-bronze"; }
  else { badge = "😅 Keep Practising"; badgeClass = "badge-keep-going"; }

  return (
    <div className="card score-card">
      <div className={`score-badge ${badgeClass}`}>{badge}</div>
      <div className="score-circle">
        <span className="score-pct">{pct}%</span>
        <span className="score-label">mastery score</span>
      </div>
      <div className="score-breakdown">
        <div className="score-row score-correct">
          <span>✓ Correct</span><span>{correct}</span>
        </div>
        <div className="score-row score-partial">
          <span>~ Partial</span><span>{partial}</span>
        </div>
        <div className="score-row score-incorrect">
          <span>✗ Missed</span><span>{incorrect}</span>
        </div>
        <div className="score-row score-reflection">
          <span>💭 Reflections</span><span>{results.filter((r) => r === "reflection").length}</span>
        </div>
      </div>
      <p className="score-message">
        {pct >= 90
          ? "Exceptional! Now go use IMS in your next real conversation."
          : pct >= 70
          ? "Solid foundation. Review your missed answers and practise daily."
          : "This is exactly where mastery begins. Review the sections you struggled with and come back."}
      </p>
      <button className="btn-secondary" onClick={onRestart}>
        Restart quiz
      </button>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState([]);

  const q = questions[current];

  const handleAnswer = (result) => {
    const newResults = [...results, result];
    setResults(newResults);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setScreen("score");
    }
  };

  const restart = () => {
    setCurrent(0);
    setResults([]);
    setScreen("welcome");
  };

  if (screen === "welcome") return <WelcomeScreen onStart={() => setScreen("quiz")} />;
  if (screen === "score") return <ScoreScreen results={results} onRestart={restart} />;

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
