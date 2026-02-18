import { calculateScore } from "./scoring";
import { classify } from "./classifier";
import { RESULTS } from "./data";

export function runDiagnostic(answers) {
  if (!answers || !Array.isArray(answers)) {
    throw new Error("Invalid answers input");
  }

  const scoreData = calculateScore(answers);

  // Ensure normalized is a clean integer percentage
  const normalizedScore = Math.round(scoreData.normalized);

  const type = classify(normalizedScore);

  // Fallback protection
  const resultData = RESULTS[type] || RESULTS.CRITICAL;

  return {
    score: normalizedScore,
    type,
    maxScore: scoreData.maxScore,
    rawScore: scoreData.rawScore,
    ...resultData
  };
}
