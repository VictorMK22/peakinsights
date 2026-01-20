export default function Section({ title, children, dark }) {
    return (
      <section className={`${dark ? "bg-ink text-white" : ""} py-24`}>
        <div className="max-w-7xl mx-auto px-6">
          {title && (
            <h2 className="text-3xl font-semibold mb-10">
              {title}
            </h2>
          )}
          {children}
        </div>
      </section>
    );
  }
  