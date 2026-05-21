import { ChevronDown } from 'lucide-react';

const BeAPartner = () => {

    //   const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Add your form submission logic here
    //     console.log("Form Submitted!");
    //   };

    return (
      <div className="max-w-4xl mx-auto relative">
        {/* Background Glow Effects matching the image */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f59e0b]/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        {/* Form Container */}
        <div className="bg-[#121824]/80 backdrop-blur-xl border border-card-border rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
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
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full bg-[#0b0f14] border border-card-border text-foreground text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full bg-[#0b0f14] border border-card-border text-foreground text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                  required
                />
              </div>
            </div>

            {/* Company & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Empire Tech Inc."
                  className="w-full bg-[#0b0f14] border border-card-border text-foreground text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="john@empiretech.com"
                  className="w-full bg-[#0b0f14] border border-card-border text-foreground text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                  required
                />
              </div>
            </div>

            {/* Partnership Type Select */}
            <div className="space-y-2 relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Partnership Type
              </label>
              <div className="relative">
                <select
                  className="w-full bg-[#0b0f14] border border-card-border text-foreground text-sm rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all cursor-pointer"
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                How can we collaborate?
              </label>
              <textarea
                placeholder="Tell us about your goals..."
                rows={4}
                className="w-full bg-[#0b0f14] border border-card-border text-foreground text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-sm px-8 py-4 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(245,158,11,0.2)] mt-4"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    );
};

export default BeAPartner;