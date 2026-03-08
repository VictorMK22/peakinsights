import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sendAdvisoryEmail } from "../diagnostic/email";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";

export default function Booking() {
  const navigate = useNavigate();

  const storedResult = localStorage.getItem("peak_result");
  const result = storedResult ? JSON.parse(storedResult) : null;
  const savedName = localStorage.getItem("peak_name") || "";
  const score = localStorage.getItem("peak_score") || "";

  const [form, setForm] = useState({
    name: savedName,
    email: "",
    company: "",
    phone: "",
    date: "",
    time: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  ];

  const phoneValid = /^\+254\d{9}$/.test(form.phone.replace(/\s/g, ""));

  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.company.trim() &&
    form.phone.trim() &&
    phoneValid &&
    form.date &&
    form.time;

  // ── EmailJS booking ──────────────────────────────────────────
  const handleEmailBook = async () => {
    if (status === "sending") return;
  
    if (!isValid) {
      if (!phoneValid) {
        return alert("Please enter a valid phone number in format +254XXXXXXXXX");
      }
      return alert("Please fill in all fields.");
    }
  
    setStatus("sending");
  
    try {
      await sendAdvisoryEmail({
        name: form.name,
        email: form.email,
        company: form.company,
        phone: form.phone,
        score: score,
        preferred_date: form.date,
        preferred_time: form.time,
        classification: result?.title || "",
        summary: result?.summary || "",
        sections: result?.sections || {},
      });
  
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  // ── WhatsApp booking ─────────────────────────────────────────
  const buildWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi PeakInsights! I'd like to book a Value Discovery Session.\n\n` +
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone}\n` +
      `Preferred Date: ${form.date}\nPreferred Time: ${form.time}\n` +
      `Business Score: ${score}%${result ? ` (${result.title})` : ""}` +
      `Summary: ${result?.summary || ""}`
    );
    return `https://wa.me/25473610520?text=${message}`;
  };

  const handleWhatsAppBook = () => {
    if (!isValid) return alert("Please fill in all fields.");
    window.open(buildWhatsApp(), "_blank");
  };

  return (
    <>
      <MainHeader />

      <main className="container mx-auto mt-8 px-6 py-20">
        <div className="min-h-screen bg-slate-50 py-12 px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10">

            <button
              onClick={() => navigate(-1)}
              className="text-sm text-indigo-600 hover:underline mb-6 inline-block"
            >
              ← Back to Results
            </button>

            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              📅 Book a Value Discovery Session
            </h1>
            <p className="text-gray-500 mb-8">
              Fill in your details, choose a date and time, then book via Email or WhatsApp.
            </p>

            {/* Status banners */}
            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6">
                ✅ Booking confirmed! — we'll be in touch within 24 hours.
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6">
                ❌ Something went wrong sending your email. Please try WhatsApp or try again.
              </div>
            )}

            <div className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Wanjiku"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. jane@mybusiness.co.ke"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company / Business Name</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="e.g. Wanjiku Enterprises"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. +254 712 345 678"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              {/* Date */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  min={today}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div> */}

              {/* Time */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time (EAT)</label>
                <select
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div> */}

              {/* Score preview */}
              {score && (
                <div className="bg-indigo-50 rounded-xl p-4 text-sm text-indigo-700">
                  📊 Your Business Score: <strong>{score}%</strong>
                  {result && <> — <strong>{result.title}</strong></>}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleEmailBook}
                  disabled={status === "sending" || status === "success"}
                  className="flex-1 bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition text-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "✉️ Book via Email"}
                </button>

                {/* <button
                  onClick={handleWhatsAppBook}
                  className="flex-1 bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition text-center"
                >
                  💬 Book via WhatsApp
                </button> */}
              </div>

              {/* <p className="text-xs text-gray-400 text-center pt-2">
                Sessions are 45–60 minutes · Free of charge · EAT timezone
              </p> */}

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}