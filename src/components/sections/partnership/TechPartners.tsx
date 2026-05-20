"use client";

import { ChevronDown } from "lucide-react";

const PARTNER_LOGOS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  // You can replace these with actual image paths later
  src: `/placeholder-logo-${i + 1}.svg`,
}));

export default function TechPartners() {


  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Our Technology Partners
          </h2>
          <p className="text-muted text-sm md:text-base">
            Powering empires with world-class technologies.
          </p>
        </div>

        {/* Logo Grid (6 columns on lg, 3 on md, 2 on sm) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-32">
          {PARTNER_LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="bg-card/40 border border-card-border rounded-2xl h-20 flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-card-border/20 hover:border-card-border/80 transition-all duration-300 cursor-pointer"
            >
              {/* Placeholder for Logo - Replace with Next.js <Image /> */}
              <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
