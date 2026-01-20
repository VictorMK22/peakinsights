import ServicesOverview from "../components/sections/ServicesOverview";
import FinalCTA from "../components/sections/FinalCTA";

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="py-32 bg-fog">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-semibold mb-6">
            Our Advisory Services
          </h1>
          <p className="text-slate text-lg">
            We don’t give advice. We build systems, discipline and leadership
            that win.
          </p>
        </div>
      </section>

      {/* Executive Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 max-w-4xl space-y-12">

          {/* Fractional CFO */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Fractional CFO Advisory
            </h2>
            <p className="text-lg text-slate font-medium">
              Financial Leadership Without Compromise
            </p>
            <p className="text-slate">
              Fast-growing businesses don’t fail because they lack ambition.
              They fail because they lack financial command.
            </p>
            <p className="text-slate">
              Our Fractional CFOs give founders and CEOs clear numbers they can
              trust, forward-looking insight, control over cash, risk and growth,
              and a financial partner at the leadership table.
            </p>
            <p className="text-slate font-medium">
              This is not bookkeeping. This is strategic financial leadership.
            </p>
          </div>

          {/* Growth & Transformation */}
          <div className="space-y-6 pt-12 border-t">
            <h2 className="text-2xl font-semibold">
              Growth & Transformation Advisory
            </h2>
            <p className="text-lg text-slate font-medium">
              Strategy That Actually Gets Executed
            </p>
            <p className="text-slate">
              We partner with organizations ready to break through stagnation and
              execute bold transformation.
            </p>
            <p className="text-slate">
              Most organizations don’t need another strategy document. They need
              clarity, alignment and execution discipline.
            </p>
            <p className="text-slate font-medium">
              Transformation is uncomfortable. We bring structure, courage and
              momentum.
            </p>
          </div>

          {/* Family Business */}
          <div className="space-y-6 pt-12 border-t">
            <h2 className="text-2xl font-semibold">
              Family Business Advisory
            </h2>
            <p className="text-lg text-slate font-medium">
              Building Businesses That Survive Generations
            </p>
            <p className="text-slate">
              Family businesses are powerful and fragile. They don’t collapse
              because of markets — they collapse because of unresolved internal
              dynamics.
            </p>
            <p className="text-slate">
              We help families address these issues before they become crises,
              without destroying relationships.
            </p>
            <p className="text-slate font-medium">
              Protect the family, strengthen the business and preserve the legacy.
            </p>
          </div>

        </div>
      </section>

      {/* Service Cards */}
      <ServicesOverview />

      {/* CTA */}
      <FinalCTA />
    </>
  );
}

