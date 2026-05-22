import { SERVICES } from "@/config/home/servicesData";
import { useMemo, useState } from "react";

const BUDGET_MIN = 10000;
const BUDGET_MAX = 200000;
const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

const RoiBudget = () => {
    const [budget, setBudget] = useState<number>(50000);
    const [activeServices, setActiveServices] = useState<Set<string>>(
        new Set(["web"]),
    );
    
    const sliderPct = ((budget - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100;
    
    const blendedMultiplier = useMemo(() => {
        const selected = SERVICES.filter((s) => activeServices.has(s.id));
        if (!selected.length) return 1.5;
        return selected.reduce((sum, s) => sum + s.multiplier, 0) / selected.length;
      }, [activeServices]);
     const projectedRoi = Math.round(budget * blendedMultiplier);
    
  return (
    <div className="rounded-2xl border border-card-border shadow-2xs card-gradient p-4 md:p-6">
      <div className="flex items-center justify-between">
        <p className="text-muted font-semibold text-sm tracking-widest">
          YOUR BUDGET
        </p>
        <div className="px-4 py-2 rounded-xl border border-card-border card-gradient text-accent font-bold tracking-wide">
          {fmt(budget)}
        </div>
      </div>

      {/* Slider */}
      <div className="mt-5 relative">
        <div className="relative h-[6px] rounded-full bg-[#12354A]">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-accent transition-all"
            style={{ width: `${sliderPct}%` }}
          />
          <div
            className="absolute top-1/2 size-5 rounded-full bg-[#F7C93E] border-4 border-accent -translate-x-1/2 -translate-y-1/2 transition-all"
            style={{ left: `${sliderPct}%` }}
          />
        </div>
        <input
          type="range"
          min={BUDGET_MIN}
          max={BUDGET_MAX}
          step={1000}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
          aria-label="Budget slider"
        />
      </div>

      {/* Projected ROI */}
      <div className="mt-8 border-t border-white/10 pt-5 text-center">
        <span className="text-muted tracking-[0.25em] text-sm flex items-center justify-center">
          PROJECTED ROI
          <span className="text-[#F7C93E] text-4xl font-bold ml-5 tabular-nums leading-none">
            {fmt(projectedRoi)}
          </span>
        </span>
      </div>
    </div>
  );
};

export default RoiBudget;
