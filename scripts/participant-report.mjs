/**
 * Generates a printable HTML report for one participant, found by name.
 *
 * Usage:
 *   SEARCH_NAME="Jane Smith" node scripts/participant-report.mjs
 *
 * Reads credentials from .env.local in the project root.
 * Output: participant-report.html (open in browser → Print → Save as PDF)
 */

import { createClient } from "@supabase/supabase-js";
import { writeFileSync, readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { questions } from "../src/quizData.js";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Load .env.local if present
const envPath = resolve(ROOT, ".env.local");
if (existsSync(envPath)) {
  readFileSync(envPath, "utf8")
    .split("\n")
    .forEach((line) => {
      const [key, ...rest] = line.split("=");
      if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
    });
}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const SEARCH_NAME = process.env.SEARCH_NAME;
if (!SEARCH_NAME) {
  console.error('Set the name first: SEARCH_NAME="First Last" node scripts/participant-report.mjs');
  process.exit(1);
}

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("Add SUPABASE_URL and SUPABASE_SERVICE_KEY to .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { persistSession: false },
});

function badge(pct) {
  if (pct >= 90) return { label: "🔥 IMS Master", color: "#c8860a" };
  if (pct >= 70) return { label: "👏 Strong Practitioner", color: "#5B8DB8" };
  if (pct >= 50) return { label: "💡 Growing Leader", color: "#5B9E6B" };
  return { label: "😅 Keep Practising", color: "#888" };
}

function resultTag(r) {
  if (!r) return '<span style="color:#aaa">—</span>';
  const retry = r.tookRetry ? ' <span style="font-size:0.75em;color:#888">(corrected on retry)</span>' : "";
  if (r.firstAttempt === "correct") return `<span style="color:#2d7a2d">✓ Correct${retry}</span>`;
  if (r.firstAttempt === "partial") return `<span style="color:#b87a00">~ Partial${retry}</span>`;
  if (r.firstAttempt === "incorrect") return `<span style="color:#b84040">✗ Missed${retry}</span>`;
  return "";
}

function reflectionQuality(score) {
  const map = {
    strong: "🔥 Strong",
    medium: "👏 Good start",
    too_short: "💡 Too brief",
    weak: "💡 Needs depth",
  };
  return map[score] || score || "—";
}

const SECTION_COLORS = {
  "IMS Overview": "#4E8B87",
  "Clarify & Confirm": "#5B8DB8",
  "Balanced Feedback": "#8B6BB1",
  "Discussion Skills": "#B87A3B",
  "Managing Differences": "#B85B5B",
  Crediting: "#5B9E6B",
  "IMS Generally": "#4E8B87",
  Reflection: "#888",
};

function buildHtml(attempt) {
  const resultsByQId = {};
  (attempt.results || []).forEach((r) => { resultsByQId[r.questionId] = r; });

  const { label: badgeLabel, color: badgeColor } = badge(attempt.score_pct);
  const date = new Date(attempt.created_at).toLocaleDateString("en-CA", {
    year: "numeric", month: "long", day: "numeric",
  });

  const knowledgeQs = questions.filter((q) => q.type !== "reflection");
  const reflectionQs = questions.filter((q) => q.type === "reflection");

  const sections = [...new Set(knowledgeQs.map((q) => q.section))];

  const sectionBlocks = sections.map((section) => {
    const sQs = knowledgeQs.filter((q) => q.section === section);
    const color = SECTION_COLORS[section] || "#4E8B87";
    const rows = sQs.map((q) => {
      const r = resultsByQId[q.id];
      const firstSel = r?.firstAttemptSelections?.length
        ? r.firstAttemptSelections.join("; ")
        : "—";
      const correctAns = q.correct.join("; ");
      return `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;font-size:0.9em;vertical-align:top">Q${q.id}: ${q.question}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;font-size:0.9em;vertical-align:top;white-space:nowrap">${resultTag(r)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;font-size:0.85em;color:#555;vertical-align:top">${firstSel}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;font-size:0.85em;color:#2d7a2d;vertical-align:top">${correctAns}</td>
        </tr>`;
    }).join("");

    return `
      <div style="margin-bottom:24px">
        <div style="background:${color};color:#fff;padding:6px 14px;border-radius:6px;display:inline-block;font-weight:600;font-size:0.85em;margin-bottom:8px">${section}</div>
        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.06)">
          <thead>
            <tr style="background:#f5f5f5">
              <th style="padding:8px 12px;text-align:left;font-size:0.8em;color:#555;font-weight:600">Question</th>
              <th style="padding:8px 12px;text-align:left;font-size:0.8em;color:#555;font-weight:600">Result</th>
              <th style="padding:8px 12px;text-align:left;font-size:0.8em;color:#555;font-weight:600">First selection</th>
              <th style="padding:8px 12px;text-align:left;font-size:0.8em;color:#555;font-weight:600">Correct answer(s)</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }).join("");

  const reflectionBlocks = reflectionQs.map((q) => {
    const r = resultsByQId[q.id];
    return `
      <div style="margin-bottom:20px;background:#fff;border-radius:8px;padding:16px;box-shadow:0 1px 4px rgba(0,0,0,0.06)">
        <p style="margin:0 0 6px;font-weight:600;font-size:0.9em">Q${q.id}: ${q.question}</p>
        <p style="margin:0 0 8px;font-size:0.8em;color:#888">Quality: ${reflectionQuality(r?.reflectionScore)}</p>
        <p style="margin:0;font-size:0.9em;color:#333;background:#f9f9f9;padding:10px 12px;border-radius:6px;border-left:3px solid #4E8B87">${r?.reflectionText || "<em>No response recorded</em>"}</p>
      </div>`;
  }).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>IMS Quiz Results — ${attempt.name}</title>
<style>
  @media print {
    body { margin: 0; }
    .no-print { display: none; }
  }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #f4f4f4; margin: 0; padding: 32px 16px; color: #2a2a2a; }
  .container { max-width: 900px; margin: 0 auto; }
  .header { background: #fff; border-radius: 12px; padding: 32px; margin-bottom: 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.08); display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; }
  .score-circle { text-align: center; width: 110px; height: 110px; border-radius: 50%; border: 4px solid ${badgeColor}; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; }
  .score-pct { font-size: 2em; font-weight: 700; color: ${badgeColor}; line-height: 1; }
  .score-label { font-size: 0.7em; color: #888; }
</style>
</head>
<body>
<div class="container">

  <div class="no-print" style="background:#fffbe6;border:1px solid #f0c040;padding:12px 16px;border-radius:8px;margin-bottom:16px;font-size:0.9em">
    <strong>To save as PDF:</strong> File → Print → "Save as PDF" (or press ⌘P on Mac / Ctrl+P on Windows)
  </div>

  <div class="header">
    <div>
      <div style="font-size:0.75em;color:#888;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.05em">IMS Mastery Challenge — Results</div>
      <h1 style="margin:0 0 4px;font-size:1.8em">${attempt.name}</h1>
      <p style="margin:0 0 4px;color:#555;font-size:0.9em">${attempt.email}${attempt.company ? ` · ${attempt.company}` : ""}</p>
      <p style="margin:0 0 16px;color:#888;font-size:0.85em">Completed ${date}</p>
      <div style="display:inline-block;background:${badgeColor};color:#fff;padding:6px 16px;border-radius:20px;font-weight:600;font-size:0.9em">${badgeLabel}</div>
    </div>
    <div class="score-circle">
      <span class="score-pct">${attempt.score_pct}%</span>
      <span class="score-label">mastery</span>
    </div>
  </div>

  <div style="background:#fff;border-radius:12px;padding:20px 24px;margin-bottom:24px;box-shadow:0 1px 4px rgba(0,0,0,0.08);display:flex;gap:32px;flex-wrap:wrap">
    <div style="text-align:center">
      <div style="font-size:1.8em;font-weight:700;color:#2d7a2d">${attempt.correct_count}</div>
      <div style="font-size:0.8em;color:#555">Correct (first try)</div>
    </div>
    <div style="text-align:center">
      <div style="font-size:1.8em;font-weight:700;color:#b87a00">${attempt.partial_count}</div>
      <div style="font-size:0.8em;color:#555">Partial</div>
    </div>
    <div style="text-align:center">
      <div style="font-size:1.8em;font-weight:700;color:#b84040">${attempt.incorrect_count}</div>
      <div style="font-size:0.8em;color:#555">Missed</div>
    </div>
    <div style="text-align:center">
      <div style="font-size:1.8em;font-weight:700;color:#4E8B87">${attempt.retried_count}</div>
      <div style="font-size:0.8em;color:#555">Corrected on retry</div>
    </div>
  </div>

  <h2 style="margin:0 0 16px;font-size:1.1em;color:#444">Knowledge Questions (Q1–Q29)</h2>
  ${sectionBlocks}

  <h2 style="margin:24px 0 16px;font-size:1.1em;color:#444">Reflections (Q30–Q33)</h2>
  ${reflectionBlocks}

</div>
</body>
</html>`;
}

async function main() {
  console.log(`Searching for participant: "${SEARCH_NAME}"…`);

  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("*")
    .ilike("name", `%${SEARCH_NAME}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error:", error.message);
    process.exit(1);
  }

  if (!data || data.length === 0) {
    console.error(`No quiz attempt found matching "${SEARCH_NAME}".`);
    console.log('Try: SEARCH_NAME="First Last" node scripts/participant-report.mjs');
    process.exit(1);
  }

  if (data.length > 1) {
    console.log(`Found ${data.length} matches — using most recent:`);
    data.forEach((d) => console.log(`  ${d.name} (${d.email}) — ${d.created_at}`));
  }

  const attempt = data[0];
  const safeName = attempt.name.toLowerCase().replace(/\s+/g, "-");
  const outPath = `${safeName}-report.html`;

  writeFileSync(outPath, buildHtml(attempt));
  console.log(`✓ Report saved to ${outPath}`);
  console.log(`  Open in your browser, then File → Print → Save as PDF to share.`);
}

main();
