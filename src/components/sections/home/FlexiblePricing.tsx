"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

import SectionTitle from "@/components/shared/SectionTitle";
import Decors6 from "@/components/ui/Decors/Decors6";
import { SliderMarker } from "@/types/home";

// ─── Constants ──────────────────────────────────────────────────────
const SLIDER_MARKERS: SliderMarker[] = [
  { label: "100", value: 100 },
  { label: "2.5K", value: 2500 },
  { label: "5K", value: 5000 },
  { label: "7.5K", value: 7500 },
  { label: "10K+", value: 10000 },
];

// ─── Animation Variants ──────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};


// ─── Main Component ──────────────────────────────────────────────────────
const FlexiblePricing = () => {
  const [students, setStudents] = useState<number>(750);
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const monthlyCost = (students * 1.66).toLocaleString();
  const annualSavings = (students * 3.2).toLocaleString();
  const sliderPercent = ((students - 100) / (10000 - 100)) * 100;

  return (
    <section className="relative bg-background py-12 md:py-16 lg:py-20 z-0">
      <div className="relative z-0 max-w-7xl mx-auto px-4 md:px-6">
        <div className="hidden md:block">
          <Decors6 />
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Flexible Pricing for Modern Schools"
            subtitle="Scale your institution with our high-performance management platform. Use the calculator below to find your perfect fit."
          />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.15 }}
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
          className="relative max-w-5xl mx-auto card-gradient border border-card-border rounded-3xl mt-8 md:mt-12 p-8 md:p-12 backdrop-blur-xl overflow-hidden"
        >
          {/* Top Row */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
          >
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl text-center md:text-left font-bold text-foreground mb-2">
                Interactive Savings Estimator
              </h3>
              <p className="text-muted text-sm text-center md:text-left">
                Real-time projection based on your student enrollment.
              </p>
            </motion.div>

            {/* Toggle */}
            <motion.div
              variants={fadeUp}
              className="bg-white/5 p-1 rounded-xl border border-card-border flex self-center md:self-auto"
            >
              {[
                { label: "Monthly", value: false },
                { label: "Yearly (Save 20%)", value: true },
              ].map(({ label, value }) => (
                <motion.button
                  key={label}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setIsYearly(value)}
                  className={`px-6 py-2 rounded-lg text-sm transition-all ${
                    isYearly === value
                      ? "bg-[#0DB9F2] text-black font-bold shadow-[0_0_20px_rgba(13,185,242,0.45)]"
                      : "text-muted"
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Slider Area */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex justify-center md:justify-between items-center flex-col md:flex-row md:items-end gap-4 mb-6">
              <span className="text-foreground/80 font-medium">
                How many students do you have?
              </span>
              <motion.div
                key={students}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="md:text-right text-center"
              >
                <span className="text-5xl font-bold text-accent">
                  {students}
                </span>
                <span className="text-muted ml-2">Students</span>
              </motion.div>
            </div>

            {/* Slider Track */}
            <div className="relative">
              <div className="relative h-[6px] rounded-full bg-muted">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-accent"
                  animate={{ width: `${sliderPercent}%` }}
                  transition={{ duration: 0.25 }}
                />
                <motion.div
                  className="absolute top-1/2 size-5 rounded-full bg-[#F7C93E] border-4 border-accent -translate-x-1/2 -translate-y-1/2"
                  animate={{ left: `${sliderPercent}%` }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ scale: 1.2 }}
                />
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
                aria-label="Number of students"
              />
            </div>

            {/* Markers */}
            <div className="flex justify-between text-muted text-xs mt-4">
              {SLIDER_MARKERS.map(({ label, value }) => (
                <motion.span
                  key={value}
                  whileHover={{ scale: 1.08 }}
                  onClick={() => setStudents(value)}
                  className={`cursor-pointer transition-colors duration-200 hover:text-accent ${
                    students === value ? "text-accent font-semibold" : ""
                  }`}
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Result Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Monthly Cost */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-card border border-card-border rounded-2xl p-4 md:p-8 text-center md:text-left backdrop-blur-xl"
            >
              <span className="flex gap-2 text-muted text-xs uppercase tracking-widest mb-4 justify-center md:justify-start">
                <Image
                  width={20}
                  height={20}
                  src="/icons/cost-icon.png"
                  alt=""
                />
                Estimated Monthly Cost
              </span>
              <motion.div
                key={monthlyCost}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-4xl font-bold text-accent mb-2"
              >
                ${monthlyCost}
              </motion.div>
              <span className="text-accent/80 font-semibold text-sm">
                Electric Blue Scalability
              </span>
            </motion.div>

            {/* Annual Savings */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-card border border-card-border rounded-2xl p-4 md:p-8 text-center md:text-left backdrop-blur-xl"
            >
              <span className="flex gap-2 text-muted text-xs uppercase tracking-widest mb-4 justify-center md:justify-start">
                <Image
                  width={20}
                  height={20}
                  src="/icons/savings-icon.png"
                  alt=""
                />
                Estimated Annual Savings
              </span>
              <motion.div
                key={annualSavings}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-4xl font-bold text-secondary mb-2"
              >
                Save ${annualSavings}
              </motion.div>
              <span className="text-secondary/80 font-semibold text-sm">
                With Premium Support Access
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlexiblePricing;
