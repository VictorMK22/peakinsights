import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-medium mb-4">PEAKINSIGHTS ADVISORY</p>
        <h1 className="text-5xl font-semibold tracking-tight mb-6">
          We Build Businesses That Cannot Be Ignored.
        </h1>
        <p className="text-xl text-slate max-w-2xl mb-8">
          Clarity is power. Execution is leverage. Discipline is growth.
        </p>
        <Button text="Talk to a PeakInsights Advisor" />
      </div>
    </motion.section>
  );
}
