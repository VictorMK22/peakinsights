import { useParams } from "react-router-dom";
import { insights } from "../data/insightsData.js";

export default function InsightArticle() {
  const { slug } = useParams();
  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-2xl font-semibold">Article not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      {/* Article Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-semibold mb-4">
          {article.title}
        </h1>

        <div className="text-sm text-slate">
          {article.author} · {article.date} · {article.readTime}
        </div>
      </header>

      {/* Article Body */}
      <article className="space-y-6 text-lg text-slate leading-relaxed">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
