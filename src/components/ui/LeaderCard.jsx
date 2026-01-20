import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LeaderCard({
  id,
  name,
  role,
  image,
  shortBio,
  fullBio,
  isOpen,
  onToggle,
}) {
  const bioRef = useRef(null);

  // Smooth scroll when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        bioRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 250);
    }
  }, [isOpen]);

  return (
    <div className="border border-line bg-white p-6 rounded-xl">
      <div className="flex gap-6 items-start">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-full border"
        />

        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-slate mb-3">{role}</p>
          <p className="text-slate">{shortBio}</p>

          <button
            onClick={onToggle}
            className="mt-3 text-sm font-medium underline hover:text-primary transition"
          >
            {isOpen ? "Read less" : "Read full bio"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={bioRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-6 space-y-4 text-slate"
          >
            {fullBio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
