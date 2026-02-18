import React from 'react';

const FinancialFitnessTraining = () => {
  return (
    <section id="training" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Financial Fitness Training
          </h2>
          <p className="text-xl font-semibold text-gray-600">
            A Staff Training Program by PeakInsights
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Program Overview */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <p className="text-gray-700 font-semibold text-lg leading-relaxed mb-6">
              PeakInsights' <span className="font-semibold text-[#1F4FA3]">Financial Fitness</span> program is a structured staff training and leadership development initiative. It is designed to cultivate financially confident, disciplined, and future-ready professionals.
            </p>

            <div className="bg-[#DCEAF7] p-6 rounded-xl border-l-4 border-[#1F4FA3] mb-6">
              <p className="text-gray-800 italic text-lg leading-relaxed">
                Leaders and high-performing teams make better decisions when they have clarity and control over their personal finances.
              </p>
            </div>

            <p className="text-gray-700 font-semibold text-lg leading-relaxed">
              Through practical, engaging sessions grounded in real-world Kenyan contexts, staff are equipped to:
            </p>
          </div>

          {/* Learning Objectives */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <ul className="space-y-3">
              {[
                "Master personal cashflow and budgeting",
                "Make informed debt and credit decisions",
                "Build sustainable saving and investment habits",
                "Plan for life goals, retirement, and wealth creation",
                "Develop financial discipline that supports professional growth"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-[#0F2A5F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 font-semibold text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Delivery */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <p className="text-gray-700 font-semibold text-lg leading-relaxed">
              The program is delivered through interactive workshops, leadership sessions, or cohort-based learning. Sessions are tailored to different staff levels, from emerging talent to senior leadership.
            </p>
          </div>

          {/* Organizational Impact */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <p className="text-gray-700 font-semibold text-lg leading-relaxed">
              The outcome is a workforce that is less financially stressed, more focused, and better equipped to contribute meaningfully to organizational performance.
            </p>
          </div>

          {/* Closing Statement */}
          <div className="bg-gradient-to-r from-[#0F2A5F] to-[#1F4FA3] rounded-2xl p-10 shadow-md">
            <p className="text-2xl md:text-3xl font-semibold text-white italic text-center">
              "Because financially stable people make better leaders and better organizations."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialFitnessTraining;