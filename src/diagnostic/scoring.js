export function calculateScore(answers) {
  if (!answers || answers.length === 0) {
    return { total: 0, normalized: 0 };
  }

  let total = 0;

  for (const a of answers) {
    total += Number(a.value || 0);
  }

  const normalized = Math.round((total / answers.length) * 100);

  return {
    total,
    normalized
  };
}
