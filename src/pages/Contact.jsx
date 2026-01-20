export default function Contact() {
    return (
      <main className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-semibold mb-6">
          Let’s Build Something That Lasts
        </h1>
  
        <p className="text-slate max-w-2xl mb-12">
          Ready to take control of your business? Talk to a PeakInsights Advisor.
        </p>
  
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold mb-3">Contact Details</h3>
            <p className="text-slate">
              📍 Golden Mango Heights, 9th Floor<br />
              Wood Avenue, Nairobi<br /><br />
              📞 0725 228 572 | 0736 105 920<br />
              ✉️ advisory@peak-insights.com
            </p>
          </div>
  
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-line p-3"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-line p-3"
            />
            <textarea
              placeholder="How can we help?"
              rows="5"
              className="w-full border border-line p-3"
            />
            <button className="bg-ink text-white px-6 py-3 text-sm font-medium">
              Submit
            </button>
          </form>
        </div>
      </main>
    );
  }
  