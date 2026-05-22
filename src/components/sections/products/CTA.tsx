import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
    return (
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
          Ready to modernize your campus or enterprise?
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold px-8 py-4 rounded-xl transition-transform hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.25)]"
          >
            Get Free Personalized Demo <ArrowRight size={20} />
          </Link>

          <p className="text-muted text-xs sm:text-sm text-left max-w-[200px] leading-relaxed">
            Join over <strong className="text-foreground">4,500+</strong> modern
            schools and enterprises already using Jevxo.
          </p>
        </div>
      </div>
    );
};

export default CTA;