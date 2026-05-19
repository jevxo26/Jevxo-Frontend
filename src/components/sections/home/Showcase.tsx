"use client";

import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { StaticImageData } from "next/image";

import SectionTitle from "@/components/shared/SectionTitle";
import ShowcaseCard from "@/components/ui/ShowcaseCard";
import FeaturedCaseStudy from "@/components/ui/FeaturedCaseStudy";
import Decors3 from "@/components/ui/Decors/Decors3";

import jsIcon from "@/assets/icons/js-icon.png";
import boxIcon from "@/assets/icons/box-icon.png";
import meshIcon from "@/assets/icons/mesh-icon.png";
import growthIcon from "@/assets/icons/growth-icon.png";
import terminalIcon from "@/assets/icons/terminal-icon.png";
import cloudIcon from "@/assets/icons/cloud-icon.png";
import luxePreview from "@/assets/luxe-preview.png";
import novaPreview from "@/assets/nova-preview.png";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ShowcaseItem {
  image: StaticImageData;
  title: string;
  icons: StaticImageData[];
  description: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ICONS_1: StaticImageData[] = [jsIcon, boxIcon, meshIcon];
const ICONS_2: StaticImageData[] = [growthIcon, terminalIcon, cloudIcon];

const SHOWCASE_CARDS: ShowcaseItem[] = [
  {
    image: novaPreview,
    title: "Project Nova",
    icons: ICONS_2,
    description:
      "Real-time AI monitoring dashboard for autonomous logistical fleets.",
  },
  {
    image: novaPreview,
    title: "Project Nova",
    icons: ICONS_2,
    description:
      "Real-time AI monitoring dashboard for autonomous logistical fleets.",
  },
  {
    image: novaPreview,
    title: "Project Nova",
    icons: ICONS_2,
    description:
      "Real-time AI monitoring dashboard for autonomous logistical fleets.",
  },
  {
    image: novaPreview,
    title: "Project Nova",
    icons: ICONS_2,
    description:
      "Real-time AI monitoring dashboard for autonomous logistical fleets.",
  },
];

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardHover = {
  y: -8,
  scale: 1.015,
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
};

// ---------------------------------------------------------------------------
// Showcase
// ---------------------------------------------------------------------------

const Showcase = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-background">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="hidden md:block">
          <Decors3 />
        </div>

        {/* Header */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Our Showcase"
            subtitle="A glimpse into the empires we've built. Scroll to explore our portfolio."
          />
          <motion.button
            whileHover={{ x: 8, scale: 1.05, color: "#4f8ff7" }}
            whileTap={{ scale: 0.96 }}
            className="absolute right-0 top-5/4 -translate-y-1/2 md:flex items-center gap-2 text-primary font-medium hidden cursor-pointer hover:underline transition-all duration-300"
          >
            Explore All
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10"
        >
          {/* Featured */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.01,
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
            }}
            className="md:col-span-2"
          >
            <FeaturedCaseStudy icons={ICONS_1} image={luxePreview} />
          </motion.div>

          {/* Cards */}
          {SHOWCASE_CARDS.map((card, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={cardHover}>
              <ShowcaseCard
                image={card.image}
                title={card.title}
                icons={card.icons}
                description={card.description}
              />
            </motion.div>
          ))}

          {/* Mobile CTA */}
          <motion.button
            variants={fadeUp}
            whileHover={{ x: 6, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex md:hidden justify-center items-center gap-2 text-primary font-medium hover:underline"
          >
            Explore All
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
