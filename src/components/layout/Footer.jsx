import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-fog mt-24 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12 text-sm">
        {/* Brand */}
        <div>
          <h4 className="font-semibold mb-3">PeakInsights Advisory</h4>
          <p className="text-slate">
            We build businesses that scale, endure and dominate.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="text-slate hover:text-ink transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-slate hover:text-ink transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/insights"
                className="text-slate hover:text-ink transition"
              >
                Insights
              </Link>
            </li>
            <li>
              <Link
                to="/leadership"
                className="text-slate hover:text-ink transition"
              >
                Leadership
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-slate">
            Golden Mango Heights, 9th Floor
            <br />
            Wood Avenue, Nairobi
            <br />
            <a
              href="mailto:advisory@peak-insights.com"
              className="hover:underline"
            >
              advisory@peak-insights.com
            </a>
          </p>
        </div>

        {/* Tagline */}
        <div>
          <h4 className="font-semibold mb-3">Your Partner in Growth</h4>
          <p className="text-slate">
            Clarity. Execution. Discipline.
          </p>
        </div>
      </div>
    </footer>
  );
}
