export default function BulletSection({ title, items }) {
    return (
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">{title}</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <li
                key={i}
                className="p-6 border border-line bg-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  