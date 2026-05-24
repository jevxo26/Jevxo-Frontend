import { Compass, PlayCircle } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Galaxy from "@/components/ui/Galaxy";

const Hero = () => {
  return (
    <section className="relative bg-background overflow-hidden min-h-[500px] flex items-center justify-center">
      {/* 🌌 background layer: galaxy component */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Galaxy />
      </div>

      {/* 📝 foreground layer: content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20 mt-16 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
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
            <PrimaryButton className="flex gap-2 py-4">
              <Compass size={20} />
              View All Products
            </PrimaryButton>
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
