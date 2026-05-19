"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

import eduImg from "@/assets/Video Animation.png";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SectionTitle from "@/components/shared/SectionTitle";
import Decors4 from "@/components/ui/Decors/Decors4";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface StatItem {
  label: string;
  value: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const STATS: StatItem[] = [
  { label: "School", value: "11k" },
  { label: "Students", value: "500k" },
  { label: "Average Roll", value: "100%" },
];

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
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

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

const Education = () => {
  return (
    <section className="relative bg-background py-12 md:py-16 lg:py-20">
      <div className="hidden md:block">
        <Decors4 />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Transform education with Jevxo Edu"
            subtitle="Complete school management solution that saves time, reduces costs, and improves educational outcomes."
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 my-8 flex-wrap"
        >
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <PrimaryButton>Start Free Trial</PrimaryButton>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2 rounded-xl font-semibold border-2 border-[#B8BCCB] bg-[#727E9D] backdrop-blur-md text-[#E6B86A] hover:bg-[#727E9D]/80 cursor-pointer transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            Watch video
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, transition: { duration: 0.35 } }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-12 md:mb-16 lg:mb-20"
        >
          <Image
            src={eduImg}
            alt="Office Environment"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3 } }}
              className="flex flex-col items-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-accent mb-1"
              >
                {stat.value}
              </motion.span>
              <span className="text-foreground font-semibold tracking-wide text-2xl">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
