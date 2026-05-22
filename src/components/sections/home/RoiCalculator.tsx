"use client";

import { useState, useMemo } from "react";
import { motion, Variants } from "framer-motion";

import SectionTitle from "@/components/shared/SectionTitle";
import Decors2 from "@/components/ui/Decors/Decors2";
import { SERVICES } from "@/config/home/servicesData";
import RoiBudget from "@/components/ui/RoiBudget";
import RoiServiceSelector from "@/components/ui/RoiServiceSelector";
import RoiChart from "@/components/ui/RoiChart";


const fmtK = (n: number) => (n === 0 ? "$0k" : `$${Math.round(n / 1000)}k`);

// ----------------- Animation Variants ------------------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

// ----------------- Main Component ------------------------------------------
const RoiCalculator = () => {
  const [budget, setBudget] = useState<number>(50000);
  const [activeServices, setActiveServices] = useState<Set<string>>(
    new Set(["web"]),
  );

  const blendedMultiplier = useMemo(() => {
    const selected = SERVICES.filter((s) => activeServices.has(s.id));
    if (!selected.length) return 1.5;
    return selected.reduce((sum, s) => sum + s.multiplier, 0) / selected.length;
  }, [activeServices]);

  const projectedRoi = Math.round(budget * blendedMultiplier);


  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-background">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="hidden md:block">
          <Decors2 />
        </div>

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle
            title="ROI Calculator"
            subtitle="Discover your potential return on investment with our services"
          />
        </motion.div>

        <div className="grid lg:grid-cols-[480px_1fr] gap-6 md:gap-10 mt-8 md:mt-12 overflow-hidden">
          {/* ── LEFT PANEL ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0.15}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Budget Box */}
            <RoiBudget />

            {/* Service Selector */}
            <RoiServiceSelector />
          </motion.div>

          {/* ── RIGHT PANEL: Chart ── */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            custom={0.3}
            viewport={{ once: true, amount: 0.2 }}
            className="relative px-1 py-4 md:p-8 flex flex-col rounded-2xl border border-card-border shadow-2xs card-gradient"
          >
            {/* Chart Header */}
            <div className="flex flex-col gap-4 mb-6">
              <h2 className="text-xl text-center md:text-left font-semibold text-foreground">
                12-Month Projection
              </h2>
              <div className="flex justify-center md:justify-end md:relative">
                <div className="rounded-2xl md:absolute md:-top-10 md:right-10 md:z-10 card-gradient border-y-2 border-[#A3A6A9] backdrop-blur px-12 py-2 text-center self-start">
                  <span className="block text-4xl font-extrabold text-[#efb60d] tabular-nums leading-none">
                    {fmtK(projectedRoi)}
                  </span>
                  <span className="block text-sm font-semibold text-[#efb60d]/80 mt-1">
                    Estimate return <br /> after 12 month
                  </span>
                </div>
              </div>
            </div>

            {/* Chart */}
            <RoiChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
