"use client";

import { useState, useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { STATS_DATA } from "@/config/home/statsData";
import { StarItems, StatItems } from "@/types/home";

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ value, label }: StatItems) => (
  <div className="text-center">
    <h3 className="text-2xl sm:text-4xl font-bold text-primary">{value}</h3>
    <p className="mt-1 text-[11px] sm:text-sm text-muted whitespace-nowrap">
      {label}
    </p>
  </div>
);

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay },
  }),
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const starsContainerRef = useRef<HTMLDivElement>(null);
  const orbitWrapperRef = useRef<HTMLDivElement>(null);

  // Generate Stars
  const [stars] = useState<StarItems[]>(() => {
    return Array.from({ length: 200 }, (_, i) => {
      const random = Math.random();

      const size =
        random > 0.85
          ? "w-[3px] h-[3px]"
          : random > 0.4
            ? "w-[2px] h-[2px]"
            : "w-[1px] h-[1px]";

      const opacity =
        random > 0.7
          ? "opacity-90"
          : random > 0.3
            ? "opacity-60"
            : "opacity-30";

      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        className: `absolute bg-white rounded-full ${size} ${opacity} ${random > 0.8 ? "shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]" : ""} ${random > 0.75 ? "animate-pulse" : ""}`,
        delay: `${Math.random() * 4}s`,
        duration: `${2 + Math.random() * 4}s`,
      };
    });
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    // Star Twinkling
    const starElements = starsContainerRef.current?.children;
    if (starElements) {
      Array.from(starElements).forEach((star, index) => {
        gsap.to(star, {
          opacity: Math.random() * 0.5 + 0.5,
          scale: Math.random() * 0.6 + 0.8,
          duration: 2.8 + Math.random() * 3.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.015,
        });
      });
    }

    // Orbit Animation - FIXED POSITION
    const orbitTween = gsap.to(".hero-orbit-container", {
      rotation: 360,
      duration: 28, // Slower = more premium
      ease: "none",
      repeat: -1,
    });

    // Scroll Parallax (Gentle)
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.2,
      onUpdate: (self) => {
        gsap.to(".hero-orbit-container", {
          y: self.progress * -45, // Reduced movement
          scale: 0.95 + self.progress * 0.12,
          ease: "none",
        });
      },
    });

    return () => {
      orbitTween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center pt-12"
    >
      {/* Stars Layer */}
      <div
        ref={starsContainerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      >
        {stars.map((star) => (
          <span
            key={star.id}
            className={star.className}
            style={{ top: star.top, left: star.left }}
          />
        ))}
      </div>

      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="relative z-30 w-full pt-16 lg:max-w-[62%] xl:max-w-3xl text-left">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent"
            >
              Stop Building Sites,
              <br className="hidden md:inline" /> Start Building Empires.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.35}
              className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
            >
              Transform your vision into a global digital empire with powerful
              SaaS infrastructure, seamless payments, and enterprise-grade
              tools.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.6}
              className="mt-10"
            >
              <PrimaryButton className="text-base px-12 py-6 rounded-2xl font-medium">
                Explore JEVXO
              </PrimaryButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.8}
              className="mt-16 w-full sm:w-fit rounded-3xl border border-card-border shadow-xl card-gradient backdrop-blur-2xl p-6 md:p-8 grid grid-cols-3 gap-8"
            >
              {STATS_DATA.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={1 + i * 0.1}
                >
                  <StatCard value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT ORBIT - FIXED POSITIONING */}
          <div className="relative lg:absolute lg:right-8 xl:right-12 lg:top-1/2 lg:-translate-y-1/2 z-20 pointer-events-none">
            <motion.div
              ref={orbitWrapperRef}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.4 }}
              className="hero-orbit-wrapper relative w-[280px] md:w-[380px] lg:w-[460px] xl:w-[520px]"
            >
              <div className="hero-orbit-container relative origin-center">
                {/* Glow */}
                <div className="orbit-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[88%] rounded-full" />

                <Image
                  width={800}
                  height={800}
                  src="/images/hero-orbit.png"
                  alt="JEVXO Hero Orbit"
                  className="relative w-full h-auto drop-shadow-[0_35px_70px_rgb(30,64,175,0.35)]"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};;

export default Hero;