export default function TrackRecord() {
    return (
      <section className="py-24 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <Stat value="5,000+" label="Businesses Supported" />
          <Stat value="USD 25B+" label="Value Unlocked" />
          <Stat value="2x" label="Sales Growth in 30 Months" />
          <Stat value="Africa-wide" label="Impact" />
        </div>
      </section>
    );
  }
  
  function Stat({ value, label }) {
    return (
      <div>
        <p className="text-3xl font-semibold">{value}</p>
        <p className="text-sm text-gray-300">{label}</p>
      </div>
    );
  }
  