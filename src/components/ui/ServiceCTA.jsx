import Button from "./Button";

export default function ServiceCTA() {
  return (
    <section className="py-24 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Take Control of Your Business?
        </h2>
        <Button text="Talk to a PeakInsights Advisor" inverted />
      </div>
    </section>
  );
}
