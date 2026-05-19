"use client";

import { useState, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { TooltipProps } from "recharts";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import ServiceCard from "@/components/ui/ServiceCard";
import SectionTitle from "@/components/shared/SectionTitle";
import Decors2 from "@/components/ui/Decors/Decors2";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Service {
  id: string;
  title: string;
  multiplier: number;
  label: string;
  icon: string;
}

interface ChartDataPoint {
  name: string;
  investment: number;
  projection: number;
  highlight: boolean;
}

interface GlowingDotProps {
  cx?: number;
  cy?: number;
  payload?: ChartDataPoint;
}

interface TickProps {
  x?: number;
  y?: number;
  payload?: { value: number | string };
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SERVICES: Service[] = [
  {
    id: "web",
    title: "Web Development",
    multiplier: 1.5,
    label: "1.5X MULTIPLIER",
    icon: "/icons/language.png",
  },
  {
    id: "app",
    title: "App Development",
    multiplier: 2.0,
    label: "2X MULTIPLIER",
    icon: "/icons/smartphone.png",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    multiplier: 3.0,
    label: "3X MULTIPLIER",
    icon: "/icons/trending_up.png",
  },
  {
    id: "branding",
    title: "Branding & Design",
    multiplier: 1.8,
    label: "1.8X MULTIPLIER",
    icon: "/icons/brush.png",
  },
];

const BUDGET_MIN = 10000;
const BUDGET_MAX = 200000;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const fmtK = (n: number) => (n === 0 ? "$0k" : `$${Math.round(n / 1000)}k`);

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const CustomYTick = ({ x = 0, y = 0, payload }: TickProps) => (
  <text
    x={x}
    y={y}
    dx={-8}
    dy={4}
    textAnchor="end"
    fill="#4B5569"
    fontSize={12}
    fontWeight={500}
  >
    {fmtK(Number(payload?.value ?? 0))}
  </text>
);

const CustomXTick = ({ x = 0, y = 0, payload }: TickProps) => (
  <text
    x={x}
    y={y}
    dy={18}
    textAnchor="middle"
    fill="#7A8499"
    fontSize={12}
    fontWeight={500}
  >
    {payload?.value}
  </text>
);

const GlowingDot = ({ cx, cy, payload }: GlowingDotProps) => {
  if (!payload?.highlight) return null;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      fill="#F7C93E"
      style={{ filter: "drop-shadow(0 0 8px rgba(247,201,62,0.9))" }}
    />
  );
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-primary/40 bg-[#060D18]/95 backdrop-blur px-4 py-3 text-sm shadow-xl">
      <p className="text-muted mb-1 font-medium">{label}</p>
      {payload.map((p, i) => (
        <p
          key={i}
          style={{ color: p.color as string }}
          className="font-semibold"
        >
          {p.name}: {fmt(Number(p.value))}
        </p>
      ))}
    </div>
  );
};

// ---------------------------------------------------------------------------
// RoiCalculator
// ---------------------------------------------------------------------------

const RoiCalculator = () => {
  const [budget, setBudget] = useState<number>(50000);
  const [activeServices, setActiveServices] = useState<Set<string>>(
    new Set(["web"]),
  );

  const toggleService = (id: string) => {
    setActiveServices((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        if (next.size > 1) next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const blendedMultiplier = useMemo(() => {
    const selected = SERVICES.filter((s) => activeServices.has(s.id));
    if (!selected.length) return 1.5;
    return selected.reduce((sum, s) => sum + s.multiplier, 0) / selected.length;
  }, [activeServices]);

  const projectedRoi = Math.round(budget * blendedMultiplier);

  const chartData = useMemo<ChartDataPoint[]>(() => {
    const months = ["Now", "M2", "M4", "M6", "M8", "M10", "M12"];
    return months.map((name, i) => {
      const t = i / (months.length - 1);
      return {
        name,
        investment: budget,
        projection: Math.round(budget + (projectedRoi - budget) * t),
        highlight:
          i === 0 || i === months.length - 2 || i === months.length - 1,
      };
    });
  }, [budget, projectedRoi]);

  const yMax = Math.ceil((projectedRoi * 1.35) / 35000) * 35000;
  const yTicks = [0, yMax * 0.25, yMax * 0.5, yMax * 0.75, yMax].map(
    Math.round,
  );
  const sliderPct = ((budget - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100;

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-background">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="hidden md:block">
          <Decors2 />
        </div>

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle
            title="ROI Calculator"
            subtitle="Discover your potential return on investment with our services"
          />
        </motion.div>

        <div className="grid lg:grid-cols-[480px_1fr] gap-6 md:gap-10 mt-8 md:mt-12 overflow-hidden">
          {/* ── LEFT PANEL ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0.15}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Budget Box */}
            <div className="rounded-2xl bg-linear-to-b from-[#02060B] to-[#171B21] border border-[#1E242B] p-4 md:p-6">
              <div className="flex items-center justify-between">
                <p className="text-muted font-semibold text-sm tracking-widest">
                  YOUR BUDGET
                </p>
                <div className="px-4 py-2 rounded-xl bg-linear-to-b from-[#02060B] to-[#171B21] border border-[#1E242B] text-[#15C8FF] font-bold tracking-wide">
                  {fmt(budget)}
                </div>
              </div>

              {/* Slider */}
              <div className="mt-5 relative">
                <div className="relative h-[6px] rounded-full bg-[#12354A]">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-[#15C8FF] transition-all"
                    style={{ width: `${sliderPct}%` }}
                  />
                  <div
                    className="absolute top-1/2 size-5 rounded-full bg-[#F7C93E] border-4 border-[#15C8FF] -translate-x-1/2 -translate-y-1/2 transition-all"
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

            {/* Service Selector */}
            <div className="mt-10 bg-linear-to-b from-[#02060B] to-[#171B21] border border-[#1E242B] p-4 md:p-6 rounded-2xl">
              <div className="flex items-center gap-2">
                <h3 className="text-muted font-semibold text-sm tracking-widest">
                  SELECT SERVICES
                </h3>
                <div className="size-2 rounded-full bg-[#15C8FF]" />
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {SERVICES.map((s, i) => (
                  <motion.div
                    key={s.id}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    custom={0.25 + i * 0.08}
                    viewport={{ once: true }}
                  >
                    <ServiceCard
                      service={s}
                      active={activeServices.has(s.id)}
                      onClick={() => toggleService(s.id)}
                    />
                  </motion.div>
                ))}
              </div>
              <button className="mt-6 mx-auto block px-5 py-2 rounded-xl bg-linear-to-b from-[#02060B] to-[#171B21] border border-[#1E242B] text-muted text-sm hover:bg-white/10 transition-colors">
                + MORE SERVICE
              </button>
            </div>
          </motion.div>

          {/* ── RIGHT PANEL: Chart ── */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            custom={0.3}
            viewport={{ once: true, amount: 0.2 }}
            className="relative px-1 py-4 md:p-8 flex flex-col rounded-2xl bg-linear-to-b from-[#02060B] to-[#171B21] border border-[#1E242B]"
          >
            {/* Chart Header */}
            <div className="flex flex-col gap-4 mb-6">
              <h2 className="text-xl text-center md:text-left font-semibold text-foreground">
                12-Month Projection
              </h2>
              <div className="flex justify-center md:justify-end md:relative">
                <div className="rounded-2xl md:absolute md:-top-10 md:right-10 md:z-10 bg-linear-to-b from-[#1B1E22] to-[#2C3033] border-y-2 border-[#A3A6A9] backdrop-blur px-12 py-2 text-center self-start">
                  <span className="block text-4xl font-extrabold text-[#F7C93E] tabular-nums leading-none">
                    {fmtK(projectedRoi)}
                  </span>
                  <span className="block text-sm text-[#F7C93E]/80 mt-1">
                    Estimate return <br /> after 12 month
                  </span>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="flex-1 min-h-[200px] md:min-h-[420px] bg-[#0C1014] rounded-lg p-3">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={chartData}
                  margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
                >
                  <defs>
                    <linearGradient
                      id="gradProjection"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#F7C93E"
                        stopOpacity={0.55}
                      />
                      <stop offset="95%" stopColor="#F7C93E" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid horizontal vertical={false} stroke="#151C27" />
                  <XAxis
                    dataKey="name"
                    axisLine
                    tickLine={false}
                    tick={<CustomXTick />}
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis
                    axisLine
                    tickLine={false}
                    tick={<CustomYTick />}
                    domain={[0, yMax]}
                    ticks={yTicks}
                    width={54}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="linear"
                    dataKey="projection"
                    stroke="none"
                    fill="url(#gradProjection)"
                    strokeWidth={0}
                    dot={false}
                    activeDot={false}
                    name="Projected Returns"
                    legendType="none"
                  />
                  <Line
                    type="linear"
                    dataKey="projection"
                    stroke="#F7C93E"
                    strokeWidth={2.5}
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(247,201,62,0.7))",
                    }}
                    dot={<GlowingDot />}
                    activeDot={{ r: 6, fill: "#F7C93E", strokeWidth: 0 }}
                    name="Projected Returns"
                    legendType="circle"
                  />
                  <Line
                    type="linear"
                    dataKey="investment"
                    stroke="#15C8FF"
                    strokeDasharray="5 6"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 5, fill: "#15C8FF", strokeWidth: 0 }}
                    name="Your Investment"
                    legendType="circle"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="mt-4 md:mt-6 flex flex-col-reverse text-center">
              <p className="text-xs text-foreground/35 pt-2">
                Estimates based on client performance
              </p>
              <div className="flex items-center justify-center gap-6 text-center border-b-2 border-[#374256] pb-2">
                <span className="flex items-center gap-2 text-xs text-muted">
                  <span className="inline-block w-3 h-3 bg-[#15C8FF] rounded-full" />
                  Your Investment
                </span>
                <span className="flex items-center gap-2 text-xs text-muted">
                  <span className="inline-block w-3 h-3 bg-[#F7C93E] rounded-full" />
                  Projected Returns
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
