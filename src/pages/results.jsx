import { useState } from "react";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";

export default function Results() {
  const storedResult = localStorage.getItem("peak_result");
  const result = storedResult ? JSON.parse(storedResult) : null;

  if (!result) return <p className="text-center mt-10">No results available.</p>;

  const name = localStorage.getItem("peak_name") || "Founder";


  return (
    <>

      <MainHeader />
    
      <main className="container mx-auto mt-8 px-6 py-20">
        <div className="min-h-screen bg-slate-50 py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">

            {/* HEADER */}
            <div className="text-center border-b pb-6">
              <h1 className="text-xl text-gray-600">Hi {name},</h1>

              <p className="mt-4 text-gray-600">
                Thanks for completing the PeakInsights Business Diagnostic test.
              </p>

              <div className="mt-6 text-lg font-semibold">
                📊 Your Business Score: {result.score}%
              </div>

              <div className="mt-2">
                📌 Category: {result.title}
              </div>
            </div>

            {/* SECTIONS */}
            <div className="mt-10 space-y-10">

              {/* Meaning */}
              <Section
                title={result.sections.meaningTitle}
                items={result.sections.meaning}
              />

              {/* Importance */}
              <Section
                title={result.sections.importanceTitle}
                items={result.sections.importance}
              />

              {/* Next Steps */}
              <Section
                title={result.sections.nextStepsTitle}
                items={result.sections.nextSteps}
                highlight
              />

            </div>

            <a
              href={`https://wa.me/25436105920?text=Hi PeakInsights, I completed the Business Diagnostic and scored ${result.score}% (${result.title}). I’d like to book a value discovery session.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-[#1F4FA3] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0F2A5F] transition"
            >
              Book a Value Discovery Session →
            </a>

          </div>
        </div>
      </main>

      <Footer />

    </>

  );
}

function Section({ title, items, highlight }) {
  return (
    <div className={`${highlight ? "bg-indigo-50 p-6 rounded-xl" : ""}`}>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        {title}
      </h3>
      <ul className="space-y-3 text-gray-700 list-disc pl-6">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
