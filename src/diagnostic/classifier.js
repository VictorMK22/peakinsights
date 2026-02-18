export function classify(score) {
    if (score >= 80) return "SCALE_READY";
    if (score >= 50) return "OPTIMIZE";
    return "CRITICAL";
  }
  