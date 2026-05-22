"use client";

import { motion, Variants } from "framer-motion";

import PrimaryButton from "@/components/ui/PrimaryButton";
import Decors7 from "@/components/ui/Decors/Decors7";
import { PLANS } from "@/config/home/plansData";
import { CheckCircle2 } from "lucide-react";

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
const Pricing = () => {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="hidden md:block">
          <Decors7 />
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24 relative z-0">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i * 0.12}
              viewport={{ once: true, amount: 0.2 }}
              className={`relative p-8 rounded-2xl border transition-all ${
                plan.isFeatured
                  ? "bg-card/80 rounded-3xl scale-105 md:scale-110 border-secondary/50 shadow-[0_0_40px_rgba(255,206,86,0.1)]"
                  : "bg-card border-card-border"
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-secondary rounded-b-full shadow-[0_0_15px_#FFCE56]" />
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${
                  plan.isFeatured ? "bg-muted/80" : "bg-muted/50"
                } flex items-center justify-center mb-8 border border-white/10`}
              >
                <plan.icon className="text-accent" size={24} />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {plan.name}
              </h3>
              <p className="text-muted text-sm mb-8 leading-relaxed">
                {plan.desc}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-12">
                {plan.features.map((feat, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    custom={i * 0.12 + 0.15 + idx * 0.07}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-foreground/80 text-sm"
                  >
                    <CheckCircle2 size={18} className="text-accent" />
                    {feat}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              {plan.isFeatured ? (
                <PrimaryButton className="w-full">Upgrade to Pro</PrimaryButton>
              ) : (
                <button className="w-full py-4 rounded-2xl font-bold transition-all border border-card-border bg-muted/25 hover:bg-muted/50 duration-300 text-foreground hover:cursor-pointer">
                  {plan.buttonText}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0.1}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-between gap-8 py-4 pb-8 md:pb-12 lg:pb-16"
        >
          <h2 className="text-3xl md:text-4xl text-center font-bold text-foreground">
            Ready to modernize your campus?
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <PrimaryButton>Get Free Personalised Demo</PrimaryButton>
            <p className="text-muted text-center max-w-xs">
              Join over 4,500+ modern schools already using EduFlow to transform
              education.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
