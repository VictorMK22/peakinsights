const problems = [
    "Financial blindness",
    "Strategic drift",
    "Weak execution",
    "Founder dependency",
    "Governance gaps",
  ];
  
  export default function Problems() {
    return (
      <section className="py-24 bg-fog">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">
            We Fix What Truly Limits Growth
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((item, index) => (
              <div
                key={index}
                className="border border-line bg-white p-6"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  