"use client";

import { useMemo } from "react";
import { Palette, Smartphone, Globe, TrendingUp } from "lucide-react";
import { motion, Variants } from "framer-motion";

import SectionTitle from "@/components/shared/SectionTitle";
import CenterCore from "@/components/ui/CenterCore";
import OrbitNode from "@/components/ui/OrbitNode";
import Decors1 from "@/components/ui/Decors/Decors1";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface StarItem {
  id: number;
  top: string;
  left: string;
  className: string;
  delay: string;
  duration: string;
}

interface OrbitNodeItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  style: React.CSSProperties;
  delay: number;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SIZE = 650;
const HALF = SIZE / 2;

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay },
  }),
};

// ---------------------------------------------------------------------------
// GrowthEngine
// ---------------------------------------------------------------------------

const GrowthEngine = () => {
  const stars = useMemo<StarItem[]>(() => {
    return Array.from({ length: 250 }).map((_, i) => {
      const random = Math.random();
      const size =
        random > 0.85
          ? "w-[3px] h-[3px]"
          : random > 0.4
            ? "w-[2px] h-[2px]"
            : "w-[1px] h-[1px]";
      const opacity =
        random > 0.7
          ? "opacity-30"
          : random > 0.3
            ? "opacity-20"
            : "opacity-10";

      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        className: `absolute bg-white rounded-full ${size} ${opacity} ${
          random > 0.8 ? "shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]" : ""
        } ${random > 0.75 ? "animate-pulse" : ""}`,
        delay: `${Math.random() * 4}s`,
        duration: `${2 + Math.random() * 4}s`,
      };
    });
  }, []);

  const orbitNodes: OrbitNodeItem[] = [
    {
      icon: <TrendingUp size={32} className="text-primary-hover" />,
      title: "Marketing",
      subtitle: "Growth Synergy",
      style: { top: 0, left: HALF, transform: "translate(-50%, -50%)" },
      delay: 0.55,
    },
    {
      icon: <Palette size={32} className="text-primary-hover" />,
      title: "Graphics",
      subtitle: "Visual Identity",
      style: { top: HALF + 25, left: 0, transform: "translate(-50%, -50%)" },
      delay: 0.65,
    },
    {
      icon: <Smartphone size={32} className="text-primary-hover" />,
      title: "App Dev",
      subtitle: "Mobile Solutions",
      style: { top: HALF + 25, left: SIZE, transform: "translate(-50%, -50%)" },
      delay: 0.75,
    },
    {
      icon: <Globe size={32} className="text-primary-hover" />,
      title: "Web Arch",
      subtitle: "High Performance",
      style: { top: SIZE, left: HALF, transform: "translate(-50%, -50%)" },
      delay: 0.85,
    },
  ];

  const diagonalLines = [35, -35].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    const reach = HALF * 1.05;
    const dx = reach * Math.sin(rad);
    const dy = reach * Math.cos(rad);
    return { deg, x1: HALF - dx, y1: HALF - dy, x2: HALF + dx, y2: HALF + dy };
  });

  return (
    <section className="relative px-4 md:px-6 pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-28 lg:pb-40 bg-background overflow-visible">
      {/* Grid Lines */}
      <div
        className="absolute inset-0 opacity-50 overflow-visible z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)," +
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "35px 40px",
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className={star.className}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="hidden md:block">
          <Decors1 />
        </div>

        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full flex flex-col items-center"
        >
          <SectionTitle
            title="The Jevxo Growth Engine"
            subtitle="A Unified Ecosystem where Strategy, Design, and technology work as one."
          />
        </motion.div>

        {/* Orbit Diagram */}
        <div className="relative mt-12 md:mt-20 lg:mt-28 w-full flex items-center justify-center h-[312px] md:h-[468px] lg:h-[650px]">
          <div
            className="absolute scale-[0.44] md:scale-[0.72] lg:scale-100"
            style={{
              width: SIZE,
              height: SIZE,
              transformOrigin: "center center",
            }}
          >
            {/* Ambient Glow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 950,
                height: 950,
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                background:
                  "radial-gradient(circle, rgba(29,78,216,0.30) 0%, transparent 66%)",
              }}
            />

            {/* SVG Axis Lines */}
            <motion.svg
              className="absolute inset-0 pointer-events-none"
              width={SIZE}
              height={SIZE}
              overflow="visible"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <line
                x1={HALF}
                y1={0}
                x2={HALF}
                y2={SIZE}
                stroke="#1B2527"
                strokeWidth="3"
              />
              <line
                x1={0}
                y1={HALF}
                x2={SIZE}
                y2={HALF}
                stroke="#1B2527"
                strokeWidth="3"
              />
              {diagonalLines.map(({ deg, x1, y1, x2, y2 }) => (
                <line
                  key={deg}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(27,103,255,0.28)"
                  strokeWidth="3"
                  strokeDasharray="10 7"
                />
              ))}
            </motion.svg>

            {/* Center Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.4,
              }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <CenterCore />
            </motion.div>

            {/* Orbit Nodes */}
            {orbitNodes.map((node) => (
              <motion.div
                key={node.title}
                variants={nodeVariants}
                initial="hidden"
                whileInView="show"
                custom={node.delay}
                viewport={{ once: true }}
              >
                <OrbitNode
                  icon={node.icon}
                  title={node.title}
                  subtitle={node.subtitle}
                  style={node.style}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-44 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};

export default GrowthEngine;
