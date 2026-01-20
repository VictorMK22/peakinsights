import ServiceHero from "../../components/ui/ServiceHero";
import BulletSection from "../../components/ui/BulletSection";
import ServiceCTA from "../../components/ui/ServiceCTA";

export default function FractionalCFO() {
  return (
    <>
      <ServiceHero
        eyebrow="FRACTIONAL CFO"
        title="Financial Leadership Without Compromise"
        subtitle="Your full-time CFO — at a fraction of the cost."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <p className="text-lg text-slate">
            Fast-growing businesses don’t fail because they lack ambition.
            They fail because they lack financial command.
          </p>
          <p className="mt-6 text-slate">
            Our Fractional CFOs give founders and CEOs clear numbers they
            can trust, forward-looking insight, and a financial partner
            at the leadership table.
          </p>
        </div>
      </section>

      <BulletSection
        title="What We Do"
        items={[
          "Weekly, monthly & board-level financial reporting",
          "Cashflow control, forecasting & scenario planning",
          "Tax planning & compliance oversight",
          "Financial modeling for growth, funding & expansion",
          "CEO & Board advisory",
          "Internal controls & risk management frameworks",
          "Financial literacy & decision-making training for teams",
        ]}
      />

      <section className="py-24 bg-fog">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <h3 className="text-2xl font-semibold mb-4">
            This Is Not Bookkeeping
          </h3>
          <p className="text-slate">
            We turn finance from a rear-view mirror into a navigation system.
            Numbers become decisions. Decisions become results.
          </p>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
