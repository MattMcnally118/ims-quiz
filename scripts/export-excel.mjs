/**
 * Exports all IMS quiz results from Supabase to a styled Excel file.
 *
 * Usage:
 *   node scripts/export-excel.mjs
 *
 * Reads credentials from .env.local in the project root.
 * Output: ims-quiz-results.xlsx in the project root.
 */

import { createClient } from "@supabase/supabase-js";
import ExcelJS from "exceljs";
import { readFileSync, existsSync } from "fs";
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

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("Add SUPABASE_URL and SUPABASE_SERVICE_KEY to .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { persistSession: false },
});

const knowledgeQs = questions.filter((q) => q.type !== "reflection");
const reflectionQs = questions.filter((q) => q.type === "reflection");

function badge(pct) {
  if (pct >= 90) return "IMS Master";
  if (pct >= 70) return "Strong Practitioner";
  if (pct >= 50) return "Growing Leader";
  return "Keep Practising";
}

function resultLabel(r) {
  if (!r) return "";
  const retry = r.tookRetry ? " (retried)" : "";
  if (r.firstAttempt === "correct") return `Correct${retry}`;
  if (r.firstAttempt === "partial") return `Partial${retry}`;
  if (r.firstAttempt === "incorrect") return `Missed${retry}`;
  return "";
}

// ── Styling helpers ──────────────────────────────────────────────────────────

function headerStyle(bgHex) {
  return {
    font: { bold: true, color: { argb: "FFFFFFFF" }, size: 11 },
    fill: { type: "pattern", pattern: "solid", fgColor: { argb: bgHex } },
    alignment: { vertical: "middle", wrapText: true },
    border: {
      bottom: { style: "thin", color: { argb: "FFCCCCCC" } },
    },
  };
}

function applyResultStyle(cell, result) {
  if (!result) return;
  const val = typeof result === "string" ? result : result.firstAttempt;
  if (val.startsWith("Correct")) {
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFD4EDDA" } };
    cell.font = { color: { argb: "FF155724" } };
  } else if (val.startsWith("Partial")) {
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFF3CD" } };
    cell.font = { color: { argb: "FF856404" } };
  } else if (val.startsWith("Missed")) {
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF8D7DA" } };
    cell.font = { color: { argb: "FF721C24" } };
  }
  cell.alignment = { vertical: "middle" };
}


function freezeAndFilter(ws, rowCount) {
  ws.views = [{ state: "frozen", ySplit: 1 }];
  ws.autoFilter = { from: { row: 1, column: 1 }, to: { row: rowCount + 1, column: ws.columnCount } };
}

// ── Sheet builders ───────────────────────────────────────────────────────────

function summaryFields(attempt) {
  return [
    attempt.name,
    attempt.email,
    attempt.company || "",
    new Date(attempt.created_at).toLocaleDateString("en-CA"),
    attempt.score_pct,
    badge(attempt.score_pct),
    attempt.correct_count,
    attempt.partial_count,
    attempt.incorrect_count,
    attempt.retried_count,
  ];
}

const SUMMARY_HEADERS = [
  "Name", "Email", "Company", "Date Taken",
  "Score %", "Badge", "Correct (1st try)", "Partial (1st try)", "Missed", "Retried",
];

const SUMMARY_WIDTHS = [28, 34, 22, 14, 10, 22, 16, 16, 10, 10];

function buildSummarySheet(wb, rows) {
  const ws = wb.addWorksheet("Summary");

  ws.columns = SUMMARY_HEADERS.map((h, i) => ({ header: h, width: SUMMARY_WIDTHS[i] }));
  ws.getRow(1).height = 28;

  SUMMARY_HEADERS.forEach((_, i) => {
    const cell = ws.getRow(1).getCell(i + 1);
    Object.assign(cell, headerStyle("FF2A5F8F"));
  });

  rows.forEach((attempt) => {
    const row = ws.addRow(summaryFields(attempt));
    row.height = 22;

    // Score % — color by performance
    const scoreCell = row.getCell(5);
    const pct = attempt.score_pct;
    if (pct >= 90) {
      scoreCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFD4EDDA" } };
      scoreCell.font = { bold: true, color: { argb: "FF155724" } };
    } else if (pct >= 70) {
      scoreCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFF3CD" } };
      scoreCell.font = { bold: true, color: { argb: "FF856404" } };
    } else {
      scoreCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF8D7DA" } };
      scoreCell.font = { bold: true, color: { argb: "FF721C24" } };
    }

    row.eachCell((cell) => { cell.alignment = { vertical: "middle" }; });

    // Subtle alternating row
    if (ws.rowCount % 2 === 0) {
      row.eachCell((cell) => {
        if (!cell.fill || cell.fill.pattern !== "solid") {
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF7F9FC" } };
        }
      });
    }
  });

  freezeAndFilter(ws, rows.length);
}

function buildQuestionSheet(wb, rows) {
  const ws = wb.addWorksheet("Question Results");

  const qHeaders = knowledgeQs.map(
    (q) => `Q${q.id}: ${q.question.length > 55 ? q.question.slice(0, 55) + "…" : q.question}`
  );
  const allHeaders = [...SUMMARY_HEADERS, ...qHeaders];
  const allWidths = [...SUMMARY_WIDTHS, ...knowledgeQs.map(() => 22)];

  ws.columns = allHeaders.map((h, i) => ({ header: h, width: allWidths[i] }));
  ws.getRow(1).height = 36;

  // Two-tone header: teal for summary cols, darker for question cols
  allHeaders.forEach((_, i) => {
    const cell = ws.getRow(1).getCell(i + 1);
    const color = i < SUMMARY_HEADERS.length ? "FF2A5F8F" : "FF3D6B5E";
    Object.assign(cell, headerStyle(color));
    cell.alignment = { vertical: "middle", wrapText: true };
  });

  rows.forEach((attempt) => {
    const resultsByQId = {};
    (attempt.results || []).forEach((r) => { resultsByQId[r.questionId] = r; });

    const qValues = knowledgeQs.map((q) => resultLabel(resultsByQId[q.id]));
    const row = ws.addRow([...summaryFields(attempt), ...qValues]);
    row.height = 22;

    // Style summary score cell
    const scoreCell = row.getCell(5);
    const pct = attempt.score_pct;
    if (pct >= 90) {
      scoreCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFD4EDDA" } };
      scoreCell.font = { bold: true, color: { argb: "FF155724" } };
    } else if (pct >= 70) {
      scoreCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFF3CD" } };
      scoreCell.font = { bold: true, color: { argb: "FF856404" } };
    } else {
      scoreCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF8D7DA" } };
      scoreCell.font = { bold: true, color: { argb: "FF721C24" } };
    }

    // Color-code each question result cell
    knowledgeQs.forEach((_, qi) => {
      const cell = row.getCell(SUMMARY_HEADERS.length + qi + 1);
      applyResultStyle(cell, qValues[qi]);
    });

    row.eachCell((cell) => {
      if (!cell.alignment) cell.alignment = { vertical: "middle" };
    });
  });

  freezeAndFilter(ws, rows.length);
}

function buildReflectionSheet(wb, rows) {
  const ws = wb.addWorksheet("Reflections");

  const refHeaders = reflectionQs.flatMap((q) => [
    `Q${q.id}: ${q.question.length > 50 ? q.question.slice(0, 50) + "…" : q.question}`,
    `Q${q.id} Quality`,
  ]);
  const allHeaders = [...SUMMARY_HEADERS, ...refHeaders];
  const allWidths = [
    ...SUMMARY_WIDTHS,
    ...reflectionQs.flatMap(() => [55, 14]),
  ];

  ws.columns = allHeaders.map((h, i) => ({ header: h, width: allWidths[i] }));
  ws.getRow(1).height = 36;

  allHeaders.forEach((_, i) => {
    const cell = ws.getRow(1).getCell(i + 1);
    const color = i < SUMMARY_HEADERS.length ? "FF2A5F8F" : "FF6B4E8B";
    Object.assign(cell, headerStyle(color));
    cell.alignment = { vertical: "middle", wrapText: true };
  });

  const qualityColor = {
    strong: { fill: "FFD4EDDA", font: "FF155724" },
    medium: { fill: "FFFFF3CD", font: "FF856404" },
    weak: { fill: "FFF8D7DA", font: "FF721C24" },
    too_short: { fill: "FFF8D7DA", font: "FF721C24" },
  };

  const qualityLabel = {
    strong: "Strong",
    medium: "Good start",
    weak: "Needs depth",
    too_short: "Too brief",
  };

  rows.forEach((attempt) => {
    const resultsByQId = {};
    (attempt.results || []).forEach((r) => { resultsByQId[r.questionId] = r; });

    const refValues = reflectionQs.flatMap((q) => {
      const r = resultsByQId[q.id];
      return [r?.reflectionText || "", r?.reflectionScore || ""];
    });

    const row = ws.addRow([...summaryFields(attempt), ...refValues]);
    row.height = 40;

    // Style quality cells
    reflectionQs.forEach((_, qi) => {
      const textCell = row.getCell(SUMMARY_HEADERS.length + qi * 2 + 1);
      textCell.alignment = { vertical: "top", wrapText: true };

      const qualCell = row.getCell(SUMMARY_HEADERS.length + qi * 2 + 2);
      const rawScore = refValues[qi * 2 + 1];
      if (rawScore && qualityColor[rawScore]) {
        qualCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: qualityColor[rawScore].fill } };
        qualCell.font = { color: { argb: qualityColor[rawScore].font }, bold: true };
        qualCell.value = qualityLabel[rawScore] || rawScore;
      }
      qualCell.alignment = { vertical: "middle" };
    });
  });

  freezeAndFilter(ws, rows.length);
}

// ── Analysis sheet ───────────────────────────────────────────────────────────

function sectionTitle(ws, row, col, text, color = "FF2A5F8F") {
  const cell = ws.getRow(row).getCell(col);
  cell.value = text;
  cell.font = { bold: true, size: 13, color: { argb: "FFFFFFFF" } };
  cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: color } };
  cell.alignment = { vertical: "middle" };
  ws.getRow(row).height = 26;
}

function tableHeader(ws, row, cols, color = "FF3D6B5E") {
  cols.forEach((label, i) => {
    const cell = ws.getRow(row).getCell(i + 1);
    cell.value = label;
    Object.assign(cell, headerStyle(color));
    cell.alignment = { vertical: "middle", wrapText: true };
  });
  ws.getRow(row).height = 28;
}

function difficultyFill(pct) {
  if (pct >= 80) return { fill: "FFD4EDDA", font: "FF155724" }; // easy — mostly correct
  if (pct >= 55) return { fill: "FFFFF3CD", font: "FF856404" }; // moderate
  return { fill: "FFF8D7DA", font: "FF721C24" };                 // hard
}

function buildAnalysisSheet(wb, rows) {
  const ws = wb.addWorksheet("Analysis");
  ws.columns = [
    { width: 8 },   // A: Q#
    { width: 20 },  // B: Section
    { width: 58 },  // C: Question
    { width: 12 },  // D: Correct %
    { width: 12 },  // E: Partial %
    { width: 12 },  // F: Missed %
    { width: 12 },  // G: Retried %
    { width: 22 },  // H: Most Common Wrong Answer
  ];

  const total = rows.length;
  if (total === 0) return;

  // ── Per-question stats ───────────────────────────────────────────────────
  const qStats = knowledgeQs.map((q) => {
    let correct = 0, partial = 0, incorrect = 0, retried = 0;
    const wrongAnswerCounts = {};

    rows.forEach((attempt) => {
      const r = (attempt.results || []).find((x) => x.questionId === q.id);
      if (!r) return;
      if (r.firstAttempt === "correct") correct++;
      else if (r.firstAttempt === "partial") partial++;
      else if (r.firstAttempt === "incorrect") incorrect++;
      if (r.tookRetry) retried++;

      // Count wrong selections for partial/incorrect
      if (r.firstAttempt !== "correct" && r.firstAttemptSelections?.length) {
        r.firstAttemptSelections
          .filter((s) => !q.correct.includes(s))
          .forEach((s) => { wrongAnswerCounts[s] = (wrongAnswerCounts[s] || 0) + 1; });
      }
    });

    const topWrong = Object.entries(wrongAnswerCounts)
      .sort((a, b) => b[1] - a[1])[0];

    return {
      q,
      correct, partial, incorrect, retried,
      correctPct: Math.round((correct / total) * 100),
      partialPct: Math.round((partial / total) * 100),
      missedPct: Math.round((incorrect / total) * 100),
      retriedPct: Math.round((retried / total) * 100),
      // difficulty: higher = harder (missed fully weighted, partial half)
      difficulty: (incorrect + partial * 0.5) / total,
      topWrong: topWrong ? `"${topWrong[0]}" (${topWrong[1]}x)` : "",
    };
  });

  // ── Per-section stats ────────────────────────────────────────────────────
  const sectionNames = [...new Set(knowledgeQs.map((q) => q.section))];
  const sectionStats = sectionNames.map((name) => {
    const sQs = qStats.filter((s) => s.q.section === name);
    const avgCorrect = Math.round(sQs.reduce((a, s) => a + s.correctPct, 0) / sQs.length);
    const hardest = [...sQs].sort((a, b) => b.difficulty - a.difficulty)[0];
    return { name, avgCorrect, hardest, count: sQs.length };
  }).sort((a, b) => a.avgCorrect - b.avgCorrect); // hardest first

  // ── Reflection stats ─────────────────────────────────────────────────────
  const refStats = reflectionQs.map((q) => {
    const counts = { strong: 0, medium: 0, weak: 0, too_short: 0, missing: 0 };
    rows.forEach((attempt) => {
      const r = (attempt.results || []).find((x) => x.questionId === q.id);
      const key = r?.reflectionScore;
      if (key && counts[key] !== undefined) counts[key]++;
      else counts.missing++;
    });
    return { q, counts };
  });

  // ── Overall stats ────────────────────────────────────────────────────────
  const avgScore = Math.round(rows.reduce((a, r) => a + r.score_pct, 0) / total);
  const badgeCounts = { "IMS Master": 0, "Strong Practitioner": 0, "Growing Leader": 0, "Keep Practising": 0 };
  rows.forEach((r) => { badgeCounts[badge(r.score_pct)]++; });

  let currentRow = 1;

  // ════════════════════════════════════════════════════════════
  // SECTION 1: Overview
  // ════════════════════════════════════════════════════════════
  sectionTitle(ws, currentRow, 1, "  Overview", "FF2A5F8F");
  ws.mergeCells(currentRow, 1, currentRow, 8);
  currentRow++;

  const overviewRows = [
    ["Total participants", total],
    ["Average score", `${avgScore}%`],
    ["IMS Master  (≥90%)", `${badgeCounts["IMS Master"]} participant(s)`],
    ["Strong Practitioner  (≥70%)", `${badgeCounts["Strong Practitioner"]} participant(s)`],
    ["Growing Leader  (≥50%)", `${badgeCounts["Growing Leader"]} participant(s)`],
    ["Keep Practising  (<50%)", `${badgeCounts["Keep Practising"]} participant(s)`],
  ];

  overviewRows.forEach(([label, value]) => {
    const row = ws.getRow(currentRow);
    row.getCell(1).value = label;
    row.getCell(1).font = { bold: true, color: { argb: "FF333333" } };
    row.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF0F4FA" } };
    row.getCell(2).value = value;
    row.getCell(2).font = { color: { argb: "FF2A5F8F" }, bold: true };
    row.height = 20;
    currentRow++;
  });

  currentRow++; // blank row

  // ════════════════════════════════════════════════════════════
  // SECTION 2: Question difficulty ranking (hardest first)
  // ════════════════════════════════════════════════════════════
  sectionTitle(ws, currentRow, 1, "  Question Difficulty Ranking  (hardest → easiest)", "FF3D6B5E");
  ws.mergeCells(currentRow, 1, currentRow, 8);
  currentRow++;

  tableHeader(ws, currentRow, ["Q#", "Section", "Question", "Correct %", "Partial %", "Missed %", "Retried %", "Most Common Wrong Answer"], "FF3D6B5E");
  currentRow++;

  const sorted = [...qStats].sort((a, b) => b.difficulty - a.difficulty);
  sorted.forEach((s, idx) => {
    const row = ws.addRow([
      `Q${s.q.id}`,
      s.q.section,
      s.q.question,
      `${s.correctPct}%`,
      `${s.partialPct}%`,
      `${s.missedPct}%`,
      `${s.retriedPct}%`,
      s.topWrong,
    ]);
    row.height = 20;

    // Color Correct % cell
    const correctCell = row.getCell(4);
    const { fill, font } = difficultyFill(s.correctPct);
    correctCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: fill } };
    correctCell.font = { color: { argb: font }, bold: true };

    // Alternating row tint
    if (idx % 2 === 1) {
      [1, 2, 3, 5, 6, 7, 8].forEach((col) => {
        const cell = row.getCell(col);
        if (!cell.fill || cell.fill.pattern !== "solid" || cell.fill.fgColor?.argb === "FFFFFFFF") {
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF7F9FC" } };
        }
      });
    }

    row.eachCell((cell) => { if (!cell.alignment) cell.alignment = { vertical: "middle" }; });
    currentRow++;
  });

  currentRow++; // blank row

  // ════════════════════════════════════════════════════════════
  // SECTION 3: Section summary
  // ════════════════════════════════════════════════════════════
  sectionTitle(ws, currentRow, 1, "  Section Summary  (hardest → easiest)", "FF8B6BB1");
  ws.mergeCells(currentRow, 1, currentRow, 8);
  currentRow++;

  tableHeader(ws, currentRow, ["Section", "Avg Correct %", "# Questions", "Hardest Question", "", "", "", ""], "FF8B6BB1");
  currentRow++;

  sectionStats.forEach((s, idx) => {
    const row = ws.addRow([
      s.name,
      `${s.avgCorrect}%`,
      s.count,
      s.hardest ? `Q${s.hardest.q.id}: ${s.hardest.q.question.slice(0, 70)}` : "",
    ]);
    row.height = 20;

    const avgCell = row.getCell(2);
    const { fill, font } = difficultyFill(s.avgCorrect);
    avgCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: fill } };
    avgCell.font = { color: { argb: font }, bold: true };

    if (idx % 2 === 1) {
      [1, 3, 4].forEach((col) => {
        row.getCell(col).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF7F9FC" } };
      });
    }

    row.eachCell((cell) => { if (!cell.alignment) cell.alignment = { vertical: "middle" }; });
    currentRow++;
  });

  currentRow++; // blank row

  // ════════════════════════════════════════════════════════════
  // SECTION 4: Reflection quality
  // ════════════════════════════════════════════════════════════
  sectionTitle(ws, currentRow, 1, "  Reflection Quality Breakdown", "FFB87A3B");
  ws.mergeCells(currentRow, 1, currentRow, 8);
  currentRow++;

  tableHeader(ws, currentRow, ["Q#", "Question", "Strong", "Good Start", "Needs Depth", "Too Brief", "Not answered", ""], "FFB87A3B");
  currentRow++;

  refStats.forEach((s, idx) => {
    const row = ws.addRow([
      `Q${s.q.id}`,
      s.q.question,
      s.counts.strong || 0,
      s.counts.medium || 0,
      s.counts.weak || 0,
      s.counts.too_short || 0,
      s.counts.missing || 0,
    ]);
    row.height = 20;

    // Color the strong/weak cells
    const strongCell = row.getCell(3);
    if (s.counts.strong > 0) {
      strongCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFD4EDDA" } };
      strongCell.font = { color: { argb: "FF155724" }, bold: true };
    }
    const weakCell = row.getCell(5);
    if (s.counts.weak > 0) {
      weakCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF8D7DA" } };
      weakCell.font = { color: { argb: "FF721C24" } };
    }
    const shortCell = row.getCell(6);
    if (s.counts.too_short > 0) {
      shortCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF8D7DA" } };
      shortCell.font = { color: { argb: "FF721C24" } };
    }

    if (idx % 2 === 1) {
      [1, 2, 7].forEach((col) => {
        row.getCell(col).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF7F9FC" } };
      });
    }

    row.eachCell((cell) => { if (!cell.alignment) cell.alignment = { vertical: "middle" }; });
    currentRow++;
  });
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Fetching quiz attempts from Supabase…");
  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase error:", error.message);
    process.exit(1);
  }

  console.log(`Found ${data.length} quiz attempt(s).`);

  const wb = new ExcelJS.Workbook();
  wb.creator = "IMS Quiz Export";
  wb.created = new Date();

  buildSummarySheet(wb, data);
  buildQuestionSheet(wb, data);
  buildReflectionSheet(wb, data);
  buildAnalysisSheet(wb, data);

  const outPath = "ims-quiz-results.xlsx";
  await wb.xlsx.writeFile(outPath);
  console.log(`✓ Saved to ${outPath}`);
}

main();
