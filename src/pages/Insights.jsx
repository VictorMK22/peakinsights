import { Link } from "react-router-dom";
import { insights } from "../data/insightsData.js";

export default function Insights() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <header className="max-w-3xl mb-16">
        <h1 className="text-4xl font-semibold mb-6">Insights</h1>
        <p className="text-slate">
          Our thinking on finance, strategy and building institutions that last.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        {insights.map((article) => (
          <article
            key={article.slug}
            className="border border-line p-6"
          >
            <h2 className="text-2xl font-semibold mb-3">
              {article.title}
            </h2>
            <p className="text-slate mb-4">{article.excerpt}</p>
            <Link
              to={`/insights/${article.slug}`}
              className="text-sm font-medium underline"
            >
              Read article
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
