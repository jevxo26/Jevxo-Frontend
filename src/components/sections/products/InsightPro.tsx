import { BarChart3, Sparkles } from "lucide-react";
import Link from "next/link";

const InsightPro = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-12">
      {/* Left Content Area (Takes 5 columns on large screen) */}
      <div className="lg:col-span-5 flex flex-col items-start">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-card-border bg-card/40 text-[10px] font-bold uppercase tracking-wider text-accent mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          SAAS PLATFORM
        </div>

        {/* Product Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Jevxo <span className="text-accent">InsightPro™</span>
        </h3>

        <p className="text-muted text-sm md:text-base leading-relaxed mb-8">
          A unified marketing intelligence dashboard that synchronizes
          omni-channel data into actionable growth strategies. Powered by
          proprietary AI modeling for predictive ROI forecasting.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
          {/* Feature 1 */}
          <div>
            <BarChart3 className="text-accent mb-3" size={24} />
            <h4 className="text-foreground font-bold text-sm mb-2">
              Real-time Attribution
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              Track every touchpoint in the customer journey instantly.
            </p>
          </div>
          {/* Feature 2 */}
          <div>
            <Sparkles className="text-accent mb-3" size={24} />
            <h4 className="text-foreground font-bold text-sm mb-2">
              AI Forecasting
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              Predict campaign performance with 94% accuracy.
            </p>
          </div>
        </div>

        {/* CTA and Tech Stack */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
          <Link
            href="/demo"
            className="bg-foreground text-background font-bold px-6 py-3 rounded-xl transition-transform hover:scale-105 w-full sm:w-auto text-center"
          >
            Request Demo
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-muted text-xs font-bold uppercase tracking-wider">
              Tech Stack:
            </span>
            <div className="flex -space-x-2">
              {/* Placeholder Tech Avatars - Replace with actual Image components if you have logos */}
              <div className="w-8 h-8 rounded-full border-2 border-background bg-blue-100 flex items-center justify-center">
                🌐
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-background bg-green-100 flex items-center justify-center">
                ⚡
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-background bg-purple-100 flex items-center justify-center">
                ⚛️
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Visual Area (Takes 7 columns on large screen) */}
      <div className="lg:col-span-7 relative">
        {/* The Background Frame */}
        <div className="relative aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[500px] w-full bg-[#dbe8d9]/10 dark:bg-card border border-card-border rounded-3xl p-6 md:p-12 overflow-hidden flex items-center justify-center group">
          {/* Soft glow behind mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/20 blur-[100px] rounded-full pointer-events-none"></div>

          {/* The Mockup Box (Wireframe representation) */}
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#0b0f14] border border-card-border rounded-xl shadow-2xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
            {/* Mockup Top Bar */}
            <div className="h-10 border-b border-card-border flex items-center px-4 gap-2 bg-card/30">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
            </div>
            {/* Mockup Body (Placeholder blocks) */}
            <div className="p-6">
              <div className="h-8 w-1/3 bg-card rounded-md mb-6"></div>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="h-4 bg-card rounded col-span-1"></div>
                <div className="h-4 bg-card rounded col-span-2"></div>
                <div className="h-4 bg-card rounded col-span-1"></div>
              </div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 bg-card/50 rounded flex items-center px-4 justify-between"
                  >
                    <div className="h-3 w-1/4 bg-card-border rounded"></div>
                    <div className="h-3 w-1/6 bg-card-border rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Stat Badge */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12 bg-gray-800/90 backdrop-blur-md border border-gray-700 p-4 rounded-2xl shadow-xl transform translate-y-4 opacity-0 animate-[fade-in-up_1s_ease-out_0.5s_forwards]">
            <p className="text-gray-300 text-xs mb-1 font-medium">
              Conversion Rate
            </p>
            <p className="text-accent text-2xl font-black">+18.4%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightPro;
