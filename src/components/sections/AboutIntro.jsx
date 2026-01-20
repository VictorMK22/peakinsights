export default function AboutIntro() {
    return (
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Built for Leaders Who Refuse to Plateau
            </h2>
            <p className="text-slate">
              We work at the intersection of finance, strategy and legacy —
              helping organizations scale sustainably and endure.
            </p>
          </div>
  
          <blockquote className="text-2xl italic text-steel">
            “If you could get all the people in an organization rowing in the same
            direction, you could dominate any industry.”
            <span className="block mt-4 text-sm not-italic text-slate">
              — Patrick Lencioni
            </span>
          </blockquote>
        </div>
      </section>
    );
  }
  