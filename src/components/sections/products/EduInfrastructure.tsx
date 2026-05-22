"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const EduInfrastructure = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Left: Visual/Image Placeholder */}
          <div className="relative aspect-[4/3] w-full bg-[#63b3a6] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
            {/* Replace this div with your actual Next.js <Image /> component */}
            <div className="absolute inset-0 border-[1px] border-white/20 m-12 grid grid-cols-2">
              <div className="border-r border-b border-white/20"></div>
              <div className="border-b border-white/20"></div>
              <div className="border-r border-white/20"></div>
              <div></div>
            </div>
            <div className="text-white/50 font-medium z-10">
              Dashboard Wireframe
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border bg-[#f59e0b]/10 text-[10px] font-bold uppercase tracking-wider text-[#f59e0b] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
              EDTECH INFRASTRUCTURE
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Jevxo <span className="text-[#f59e0b]">Edu</span>
            </h2>

            <p className="text-muted text-base leading-relaxed mb-8">
              The complete school management solution that saves time, reduces
              costs, and improves educational outcomes. Scale your institution
              with high-performance management architecture.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="bg-card-border/10 border border-card-border rounded-xl p-5">
                <h4 className="text-[#f59e0b] text-2xl font-bold mb-1">11k+</h4>
                <p className="text-muted text-xs font-medium">
                  Schools Managed
                </p>
              </div>
              <div className="bg-card-border/10 border border-card-border rounded-xl p-5">
                <h4 className="text-cyan-500 text-2xl font-bold mb-1">500k+</h4>
                <p className="text-muted text-xs font-medium">
                  Active Students
                </p>
              </div>
            </div>

            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              {[
                "Advanced Analytics & Report Cards",
                "Dynamic Schedule Planning",
                "Automated Attendance Tracking",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 size={18} className="text-[#f59e0b]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/edu"
              className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold px-6 py-3 rounded-xl transition-colors shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            >
              Explore EduFlow <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EduInfrastructure;
