export type RubricScores = {
  clarity: number;
  evidence: number;
  safety: number;
  completeness: number;
  overall: number;
};

export type ReviewResult = {
  scores: RubricScores;
  summary: string;
  strengths: string[];
  gaps: string[];
  copyBlock: string;
};

function clamp(n: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(n)));
}

export function scoreReviewDraft(text: string): ReviewResult {
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).length : 0;
  const hasNumbers = /\d/.test(trimmed);
  const hasStructure = /(\n-|\n\*|#{1,3}\s|\d+\.)/.test(trimmed);
  const hasCaution = /(may|might|assume|uncertain|limitation|disclaimer)/i.test(trimmed);

  const clarity = clamp(35 + Math.min(words, 120) * 0.45 + (hasStructure ? 18 : 0));
  const evidence = clamp(30 + (hasNumbers ? 22 : 0) + Math.min(words, 80) * 0.25);
  const safety = clamp(40 + (hasCaution ? 28 : 0) + (trimmed.length > 40 ? 12 : 0));
  const completeness = clamp(25 + Math.min(words, 200) * 0.35 + (hasStructure ? 10 : 0));
  const overall = clamp((clarity + evidence + safety + completeness) / 4);

  const strengths: string[] = [];
  const gaps: string[] = [];

  if (words >= 60) strengths.push("Enough detail to stress-test claims and structure.");
  else gaps.push("Add more context so reviewers can judge tradeoffs.");

  if (hasStructure) strengths.push("Uses scannable structure (lists or headings).");
  else gaps.push("Break the draft into bullets or short sections.");

  if (hasNumbers) strengths.push("Includes concrete figures or constraints.");
  else gaps.push("Add one measurable constraint (time, cost, user count, SLA).");

  if (hasCaution) strengths.push("Signals uncertainty instead of overclaiming.");
  else gaps.push("Call out assumptions and what still needs validation.");

  if (!trimmed) {
    return {
      scores: { clarity: 0, evidence: 0, safety: 0, completeness: 0, overall: 0 },
      summary: "Paste a draft to generate a demo rubric scorecard.",
      strengths: [],
      gaps: ["Provide review text to analyze."],
      copyBlock: "",
    };
  }

  const summary =
    overall >= 75
      ? "Strong draft for an internal review pass — tighten evidence before external sharing."
      : overall >= 55
        ? "Usable draft with clear upgrade paths — address gaps below before publishing."
        : "Early draft — good for brainstorming; not ready for stakeholder sign-off.";

  const copyBlock = [
    "REVIEWFORGE DEMO SCORECARD",
    `Overall: ${overall}/100`,
    `Clarity: ${clarity}/100 | Evidence: ${evidence}/100 | Safety: ${safety}/100 | Completeness: ${completeness}/100`,
    "",
    "Summary:",
    summary,
    "",
    "Strengths:",
    ...strengths.map((s) => `- ${s}`),
    "",
    "Gaps:",
    ...gaps.map((g) => `- ${g}`),
  ].join("\n");

  return { scores: { clarity, evidence, safety, completeness, overall }, summary, strengths, gaps, copyBlock };
}
