import PrimaryButton from '@/components/ui/PrimaryButton';
import { ChevronDown } from 'lucide-react';

const BeAPartner = () => {

    return (
      <div className="max-w-4xl mx-auto relative">
        {/* Form Container */}
        <div className="bg-card backdrop-blur-xl border border-card-border rounded-3xl p-8 md:p-12 my-12 md:my-16 lg:my-20 shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Become a Partner
            </h3>
            <p className="text-muted text-sm">
              Submit your details and our ecosystem team will reach out to
              explore collaborative opportunities.
            </p>
          </div>

          <form className="space-y-6">
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/75">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full bg-muted/10 border border-card-border text-foreground text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/75">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full bg-muted/10 border border-card-border text-foreground text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted"
                  required
                />
              </div>
            </div>

            {/* Company & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/75">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Empire Tech Inc."
                  className="w-full bg-muted/10 border border-card-border text-foreground text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/75">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="john@empiretech.com"
                  className="w-full bg-muted/10 border border-card-border text-foreground text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted"
                  required
                />
              </div>
            </div>

            {/* Partnership Type Select */}
            <div className="space-y-2 relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/75">
                Partnership Type
              </label>
              <div className="relative">
                <select
                  className="w-full bg-muted/10 border border-card-border text-foreground text-sm rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:border-accent/50  focus:ring-1 focus:ring-accent/50 transition-all cursor-pointer"
                  defaultValue="technology"
                >
                  <option value="technology">Technology Integration</option>
                  <option value="agency">Agency Partner</option>
                  <option value="reseller">Reseller</option>
                  <option value="other">Other</option>
                </select>
                {/* Custom Arrow Icon */}
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/75 pointer-events-none"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/75">
                How can we collaborate?
              </label>
              <textarea
                placeholder="Tell us about your goals..."
                rows={4}
                className="w-full bg-muted/10 border border-card-border text-foreground text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <PrimaryButton className='w-full py-4'>Submit Application</PrimaryButton>
          </form>
        </div>
      </div>
    );
};

export default BeAPartner;