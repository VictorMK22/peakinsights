import ServiceHero from "../../components/ui/ServiceHero";
import BulletSection from "../../components/ui/BulletSection";
import ServiceCTA from "../../components/ui/ServiceCTA";

export default function GrowthTransformation() {
  return (
    <>
      <ServiceHero
        eyebrow="GROWTH & TRANSFORMATION"
        title="Strategy That Actually Gets Executed"
        subtitle="Re-imagined strategy consulting for modern business."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <p className="text-lg text-slate">
            Most organizations don’t need another strategy document.
            They need clarity, alignment and execution discipline.
          </p>
        </div>
      </section>

      <BulletSection
        title="Where We Step In"
        items={[
          "When growth has stalled",
          "When the organization has outgrown its structure",
          "When execution is breaking down",
          "When turnaround or restructuring is unavoidable",
          "When leadership needs to reset direction",
        ]}
      />

      <BulletSection
        title="What We Deliver"
        items={[
          "Strategy design & execution roadmaps",
          "Change management & transformation leadership",
          "Operating model redesign",
          "Business turnaround & restructuring",
          "Process optimization & operational excellence",
          "Leadership development & culture transformation",
        ]}
      />

      <section className="py-24 bg-fog">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <p className="text-slate">
            Transformation is uncomfortable. We bring structure, courage
            and momentum — and we stay long enough to make it stick.
          </p>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
