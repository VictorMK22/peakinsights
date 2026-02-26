import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";

export default function Results() {
  const navigate = useNavigate();
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
              <Section title={result.sections.meaningTitle} items={result.sections.meaning} />
              <Section title={result.sections.importanceTitle} items={result.sections.importance} />
              <Section title={result.sections.nextStepsTitle} items={result.sections.nextSteps} highlight />
            </div>

            {/* BOOKING CTA */}
            <div className="mt-12 border-t pt-8 text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Ready to take the next step?
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Book a free Business Health Advisory Session with our advisory team.
              </p>

              <button
                onClick={() => navigate("/booking")}
                className="bg-indigo-600 text-white px-12 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                📅 Book a Session
              </button>

              <p className="text-xs text-gray-400 mt-4">
                Sessions are 45–60 minutes · Free of charge · EAT timezone
              </p>
            </div>

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
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-3 text-gray-700 list-disc pl-6">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}