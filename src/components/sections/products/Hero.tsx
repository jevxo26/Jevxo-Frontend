import Link from "next/link";
import { Compass, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Proprietary{" "}
            <span className="text-accent drop-shadow-[0_0_20px_var(--color-accent)]">
              Growth Engines
            </span>
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
            We don't just build software; we architect competitive advantages.
            Explore our suite of internal SaaS tools and high-performance
            frameworks designed for the modern enterprise.
          </p>

          {/* Header Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/products"
              className="flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-black font-semibold px-6 py-3 rounded-xl transition-colors w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            >
              <Compass size={20} />
              View All Products
            </Link>
            <button className="flex items-center gap-2 bg-card border border-card-border hover:bg-card-border/50 text-foreground font-semibold px-6 py-3 rounded-xl transition-colors w-full sm:w-auto justify-center">
              <PlayCircle size={20} />
              Watch Platform Overview
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
