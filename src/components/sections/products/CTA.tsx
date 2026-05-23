import PrimaryButton from '@/components/ui/PrimaryButton';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
    return (
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
          Ready to modernize your campus or enterprise?
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <PrimaryButton className='flex gap-2 items-center py-5'>
            Get Free Personalized Demo <ArrowRight size={20} />
          </PrimaryButton>

          <p className="text-muted text-xs sm:text-sm text-left max-w-[200px] leading-relaxed">
            Join over <strong className="text-foreground">4,500+</strong> modern
            schools and enterprises already using Jevxo.
          </p>
        </div>
      </div>
    );
};

export default CTA;