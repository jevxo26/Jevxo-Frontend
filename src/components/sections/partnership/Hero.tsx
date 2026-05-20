import Link from "next/link";
import { ArrowRight, TrendingUp, Cpu, Handshake } from "lucide-react";


const Hero = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)] mb-6 leading-tight">
            Strategic Partnerships & <br className="hidden sm:block" />{" "}
            Ecosystem
          </h2>

          <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            Join our network of innovators, technology providers, and industry
            leaders to drive the next wave of digital transformation.
          </p>

          <Link
            href="/partner"
            className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold px-8 py-3.5 rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
          >
            Become a Partner <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
};

export default Hero;
