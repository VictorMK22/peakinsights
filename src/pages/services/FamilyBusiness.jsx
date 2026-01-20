import ServiceHero from "../../components/ui/ServiceHero";
import BulletSection from "../../components/ui/BulletSection";
import ServiceCTA from "../../components/ui/ServiceCTA";

export default function FamilyBusiness() {
  return (
    <>
      <ServiceHero
        eyebrow="FAMILY BUSINESS ADVISORY"
        title="Building Businesses That Survive Generations"
        subtitle="Transforming family enterprises into lasting legacies."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <p className="text-lg text-slate">
            Family businesses don’t collapse because of markets.
            They collapse because of unresolved internal dynamics.
          </p>
        </div>
      </section>

      <BulletSection
        title="Where Family Businesses Break"
        items={[
          "Poor succession planning",
          "Weak governance",
          "Unspoken conflict",
          "Blurred boundaries between family and business",
        ]}
      />

      <BulletSection
        title="Our Work Includes"
        items={[
          "Succession planning & leadership transition",
          "Governance frameworks & family constitutions",
          "Family council facilitation",
          "Business strategy & expansion support",
          "Wealth structuring & estate planning support",
          "Next-generation leadership development",
        ]}
      />

      <section className="py-24 bg-fog">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <p className="text-slate">
            Our goal is simple: protect the family, strengthen the business
            and preserve the legacy.
          </p>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
