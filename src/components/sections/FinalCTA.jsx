import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-32 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-6">
          Let’s Build Something That Lasts
        </h2>
        <p className="text-gray-300 max-w-xl mb-8">
          Ready to take control of your business and build for the long term?
        </p>
        <Button text="Talk to a PeakInsights Advisor" inverted />
      </div>
    </section>
  );
}
