import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Landing() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const start = () => {
    if (!name.trim()) return alert("Please enter your name");

    // store name in localStorage (frontend only persistence)
    localStorage.setItem("peak_name", name);

    navigate("/diagnostic");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-xl">

        <h1 className="text-2xl font-bold mb-4">
          Hi {name || "(Your Name)"},
        </h1>

        <p className="mb-4 text-gray-600">
            Quick one — we’ve created a 2-minute Business Health Diagnostic 
            for SME founders in Kenya.
        </p>

        <p className="mb-4 text-gray-600">
            It helps uncover where you're losing money, missing profit 
            or getting stuck with scale.
        </p>

        <p className="font-medium mb-6">
            🔍 It’s free. Answer 5 quick questions and get your Business Score.
        </p>

        <div className="text-sm text-gray-600 mb-6">
            <p>✅ Your Business Readiness Score</p>
            <p>✅ A quick insight summary</p>
            <p>✅ A Value discovery session</p>
        </div>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border px-4 py-3 rounded-lg mb-4"
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={start}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg"
        >
          Click to Start →
        </button>

      </div>
    </div>
  );
}
