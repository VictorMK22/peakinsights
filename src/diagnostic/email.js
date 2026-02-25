import emailjs from "@emailjs/browser";

export function sendAdvisoryEmail(payload) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_ADVISORY_TEMPLATE_ID,
    {
      // Lead info
      name: payload.name,
      email: payload.email,
      company: payload.company,
      phone: payload.phone,

      // Diagnostic core
      score: payload.score,
      preferred_date: payload.preferred_date,
      preferred_time: payload.preferred_time,
      classification: payload.classification,
      summary: payload.summary,

      // Structured intelligence
      meaning: payload.sections?.meaning?.join("\n• "),
      importance: payload.sections?.importance?.join("\n• "),
      next_steps: payload.sections?.nextSteps?.join("\n• ")
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}
