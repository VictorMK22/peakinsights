import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ALL_QUESTIONS, OPTIONS } from "../diagnostic/data";
import { runDiagnostic } from "../diagnostic/engine";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";

export default function DiagnosticFlow() {
  const [answers, setAnswers] = useState({});

  const navigate = useNavigate();

  const totalQuestions = ALL_QUESTIONS.length;
  const isComplete = Object.keys(answers).length === totalQuestions;

  // handle dropdown change
  const handleChange = (id, value) => {
    setAnswers(prev => ({
      ...prev,
      [id]: Number(value)
    }));
  };

  // convert answers to array for engine
  const answerArray = useMemo(() => {
    return ALL_QUESTIONS.map(q => ({
      value: answers[q.id] ?? 0
    }));
  }, [answers]);

  // run diagnostic LIVE
  const result = useMemo(() => {
    return runDiagnostic(answerArray);
  }, [answerArray]);

  const progressPercent = Math.round(
    (Object.keys(answers).length / totalQuestions) * 100
  );

  const groupedQuestions = useMemo(() => {
    return ALL_QUESTIONS.reduce((acc, question) => {
      if (!acc[question.section]) {
        acc[question.section] = [];
      }
      acc[question.section].push(question);
      return acc;
    }, {});
  }, []);

  return (
    <>

      <MainHeader />

      <main className="container mx-auto mt-8 px-6 py-20">
        <div className="min-h-screen bg-slate-50 py-10 px-4">
          <div className="max-w-5xl mx-auto">

            {/* HEADER */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

              <h1 className="text-2xl font-bold text-center">
                Peakinsights Business Health Diagnostic
              </h1>

              <p className="text-center text-gray-600 mt-1">
                How Ready is Your Business to Grow, Scale and Profit?
              </p>

              {/* SCORE AREA */}
              <div className="text-center mt-6 text-base">

                <div>
                  <span className="font-semibold">Your Score:</span>
                  <span className="ml-2 text-indigo-600 font-bold text-lg">
                    {result.score}%
                  </span>
                </div>

                <div className="p-4">
                  <span className="font-semibold">Readiness Category:</span>
                  <span className="ml-2 font-semibold">
                    {result.icon} {result.title}
                  </span>
                </div>

                <div className="p-4">
                  <span className="font-semibold">Action:</span>
                  <span className="ml-2 ">
                    {result.summary}
                  </span>
                </div>

                <div className="p-4">
                  <span className="font-semibold">Advisory:</span>
                  {isComplete ? (
                    <button
                      onClick={() => {
                        localStorage.setItem("peak_result", JSON.stringify(result));
                        localStorage.setItem("peak_score", result.score);
                        navigate("/results");
                      }}
                      className="ml-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                      View Advisory Page →
                    </button>
                  ) : (
                    <span className="ml-2 text-gray-400">
                      Complete all questions to view advisory
                    </span>
                  )}
                </div>

              </div>

              {/* PROGRESS BAR */}
              <div className="mt-6 text-center flex justify-center">
                <div className="w-1/3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {Object.keys(answers).length} of {totalQuestions} answered
                  </div>
                </div>
              </div>

            </div>

            {/* QUESTIONS */}
            <div className="space-y-6">
              {Object.entries(groupedQuestions).map(([section, questions]) => (
                <div key={section} className="space-y-4">

                  {/* Section Header (shown once) */}
                  <h2 className="text-lg font-bold text-indigo-700 border-b pb-1">
                    {section}
                  </h2>

                  {/* Questions Under That Section */}
                  {questions.map((q) => {
                    const globalIndex = ALL_QUESTIONS.findIndex(item => item.id === q.id);

                    return (
                      <div
                        key={q.id}
                        className="bg-white rounded-xl shadow p-4 grid md:grid-cols-[3fr_1fr] gap-4 items-center"
                      >
                        <div>
                          <div className="text-gray-800">
                            {globalIndex + 1}. {q.text}
                          </div>
                        </div>

                        <select
                          className="border rounded-sm px-2 py-2 focus:ring-2 focus:ring-indigo-500"
                          value={answers[q.id] ?? ""}
                          onChange={e => handleChange(q.id, e.target.value)}
                        >
                          <option value="">Select</option>
                          {OPTIONS.map(opt => (
                            <option key={opt.label} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>

                      </div>
                    );
                  })}

                </div>
              ))}

            </div>

          </div>
        </div>
      </main>

      <Footer />

    </>

    
  );
}
