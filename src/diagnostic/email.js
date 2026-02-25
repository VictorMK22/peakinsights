import emailjs from "@emailjs/browser";

export function sendAdvisoryEmail(payload) {
  return emailjs.send(
    "SERVICE_ID",
    "TEMPLATE_ID",
    {
      // Lead info
      user_name: payload.name,
      user_email: payload.email,
      company: payload.company,
      phone: payload.phone,

      // Diagnostic core
      score: payload.score,
      classification: payload.classification,
      summary: payload.summary,

      // Structured intelligence
      meaning: payload.sections?.meaning?.join("\n• "),
      importance: payload.sections?.importance?.join("\n• "),
      next_steps: payload.sections?.nextSteps?.join("\n• ")
    },
    "PUBLIC_KEY"
  );
}
