import SolutionCard from "@/components/ui/SolutionCard";
import { SOLUTIONS_DATA } from "@/config/solutions";

const Overview = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 mt-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-card-border bg-card/50 text-xs font-bold uppercase tracking-widest text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Our Ecosystem
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            <span className="text-primary drop-shadow-[0_0_25px_var(--primary-glow)]">
              Jevxo Solutions
            </span>
            <br />
            Overview
          </h2>

          <p className="text-primary text-base md:text-lg leading-relaxed max-w-2xl">
            A Unified Ecosystem where Strategy, Design, and Technology work as
            one. We build the digital empires of tomorrow.
          </p>
        </div>

        {/* CSS Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS_DATA.map((solution) => (
            <SolutionCard
              key={solution.id}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              iconColor={solution.iconColor}
              iconBg={solution.iconBg}
              tag={solution.tag}
              link={solution.link}
            />
          ))}
        </div>
      </div>

      {/* Background Subtle Gradient Glow (Optional, matching image vibe) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
};

export default Overview;
