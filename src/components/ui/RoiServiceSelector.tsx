import { SERVICES } from "@/config/home/servicesData";
import { motion, Variants } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { useState } from "react";

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

// ─── Main Component ──────────────────────────────────────────────────────
const RoiServiceSelector = () => {
  const [activeServices, setActiveServices] = useState<Set<string>>(
    new Set(["web"]),
  );

  const toggleService = (id: string) => {
    setActiveServices((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        if (next.size > 1) next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="mt-10 border border-card-border shadow-2xs card-gradient p-4 md:p-6 rounded-2xl">
      <div className="flex items-center gap-2">
        <h3 className="text-muted font-semibold text-sm tracking-widest">
          SELECT SERVICES
        </h3>
        <div className="size-2 rounded-full bg-[#15C8FF]" />
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0.25 + i * 0.08}
            viewport={{ once: true }}
          >
            <ServiceCard
              service={s}
              active={activeServices.has(s.id)}
              onClick={() => toggleService(s.id)}
            />
          </motion.div>
        ))}
      </div>
      <button className="mt-6 mx-auto block px-5 py-2 rounded-xl bg-card border border-card-border text-muted hover:bg-card-gradient hover:cursor-pointer transition-colors">
        + MORE SERVICE
      </button>
    </div>
  );
};

export default RoiServiceSelector;
