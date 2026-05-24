import { ArrowRight } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";


const Hero = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 mt-16 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent drop-shadow-[0_0_25px_rgba(34,211,238,0.3)] mb-6 leading-tight">
            Strategic Partnerships & <br className="hidden sm:block" />{" "}
            Ecosystem
          </h2>

          <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            Join our network of innovators, technology providers, and industry
            leaders to drive the next wave of digital transformation.
          </p>

          <PrimaryButton className="flex gap-2 items-center py-5">
            Become a Partner <ArrowRight size={20} />
          </PrimaryButton>
        </div>
      </div>

      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
};

export default Hero;
