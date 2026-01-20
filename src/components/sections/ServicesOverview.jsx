import { Link } from "react-router-dom";

export default function ServicesOverview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12">
          Our Advisory Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Service
            title="Fractional CFO"
            desc="Financial leadership without compromise."
            link="/services/fractional-cfo"
          />
          <Service
            title="Growth & Transformation"
            desc="Strategy that actually gets executed."
            link="/services/growth-transformation"
          />
          <Service
            title="Family Business Advisory"
            desc="Building businesses that survive generations."
            link="/services/family-business"
          />
        </div>
      </div>
    </section>
  );
}

function Service({ title, desc, link }) {
  return (
    <div className="border border-line p-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate mb-4">{desc}</p>
      <Link to={link} className="text-sm font-medium underline">
        Learn more
      </Link>
    </div>
  );
}
