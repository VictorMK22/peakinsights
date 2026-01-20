export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24 space-y-20">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-semibold leading-tight">
          Built for Leaders Who Refuse to Plateau
        </h1>

        <blockquote className="border-l-4 border-primary pl-6 italic text-slate text-lg">
          “If you could get all the people in an organization rowing in the same
          direction, you could dominate any industry, in any market, against any
          competition, at any time.”
          <span className="block mt-3 font-medium not-italic">
            — Patrick Lencioni
          </span>
        </blockquote>

        <p className="text-slate text-lg">
          At PeakInsights, we work at the intersection of finance, strategy and
          legacy.
        </p>

        <p className="text-slate text-lg">
          For over a decade, our advisory work has helped organizations:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-slate text-lg">
          <li>Scale sustainably</li>
          <li>Compete effectively</li>
          <li>Build institutions that outlive their founders</li>
        </ul>

        <p className="text-slate text-lg">
          We exist to give businesses the intelligence, systems and clarity they
          need to win — not just now, but for generations.
        </p>
      </section>

      {/* Belief Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold">
          Our Belief
        </h2>

        <p className="text-slate text-lg">
          PeakInsights was built on a simple belief:
        </p>

        <p className="text-slate text-xl font-medium">
          A business without financial clarity, execution discipline and aligned
          leadership will never reach its true potential.
        </p>
      </section>

      {/* What We Do */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold">
          What We Do
        </h2>

        <p className="text-slate text-lg">
          For over a decade, our advisors have worked across African markets
          helping organizations:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-slate text-lg">
          <li>Professionalize operations</li>
          <li>Strengthen leadership and governance</li>
          <li>Build scalable financial systems</li>
          <li>Execute strategy with discipline</li>
          <li>Create institutions that outlive founders</li>
        </ul>

        <p className="text-slate text-lg font-medium">
          We don’t chase quick wins. We build enduring advantage.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 mx-auto gap-12 max-w-5xl">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="text-slate text-lg">
            Business partner of choice, powered by world-class advisors.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-slate text-lg">
            We unlock the potential of businesses by helping them create value so
            that they can thrive — for good.
          </p>
        </div>
      </section>

    </main>
  );
}
