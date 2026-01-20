import { NavLink, Link } from "react-router-dom";
import logo from '/src/assets/Logo .jpg';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="PeakInsights Advisory"
            className="h-12 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-ink transition ${
                isActive ? "text-ink" : "text-slate"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-ink transition ${
                isActive ? "text-ink" : "text-slate"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `hover:text-ink transition ${
                isActive ? "text-ink" : "text-slate"
              }`
            }
          >
            Insights
          </NavLink>

          <NavLink
            to="/leadership"
            className={({ isActive }) =>
              `hover:text-ink transition ${
                isActive ? "text-ink" : "text-slate"
              }`
            }
          >
            Leadership
          </NavLink>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="text-sm font-medium border border-ink px-4 py-2 hover:bg-ink hover:text-white transition"
        >
          Talk to an Advisor
        </Link>
      </div>
    </header>
  );
}
