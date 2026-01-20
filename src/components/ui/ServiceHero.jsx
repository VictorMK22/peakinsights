import { motion } from "framer-motion";

export default function ServiceHero({ eyebrow, title, subtitle }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-32 bg-fog"
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-medium mb-4">{eyebrow}</p>
        <h1 className="text-5xl font-semibold tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-xl text-slate max-w-3xl">
          {subtitle}
        </p>
      </div>
    </motion.section>
  );
}
