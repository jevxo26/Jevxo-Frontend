"use client";


import { motion, Variants } from "framer-motion";

import SectionTitle from "@/components/shared/SectionTitle";
import Decors5 from "@/components/ui/Decors/Decors5";
import { FEATURES } from "@/config/home/featuresData";


// ─── Animation Variants  ──────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardFadeUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};


// ─── Main Component ──────────────────────────────────────────────────────
const Features = () => {
  return (
    <section className="relative bg-background py-12 md:py-16 lg:py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="hidden md:block">
          <Decors5 />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Everything You Need"
            subtitle="Affordable plans that scale with your institution"
          />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12"
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardFadeUp}
              whileHover={{
                y: -8,
                scale: 1.015,
                borderColor: "rgba(46, 124, 246, 0.35)",
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              }}
              className="group p-8 flex flex-col justify-center items-center md:justify-start md:items-start rounded-3xl bg-card group-hover:bg-card/20 border border-card-border backdrop-blur-sm transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10 bg-primary/10 group-hover:bg-primary/25 group-hover:border-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm text-center md:text-left leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
