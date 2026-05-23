"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Globe, Smartphone, TrendingUp, Pencil } from "lucide-react";

interface ServiceCard {
  id: number;
  title: string;
  multiplier: string;
  icon: React.ElementType;
  active?: boolean;
}



const services: ServiceCard[] = [
  {
    id: 1,
    title: "Web Development",
    multiplier: "1.5X MULTIPLIER",
    icon: Globe,
    active: true,
  },
  {
    id: 2,
    title: "App Development",
    multiplier: "2X MULTIPLIER",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Digital Marketing",
    multiplier: "3X MULTIPLIER",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Branding & Design",
    multiplier: "1.2X MULTIPLIER",
    icon: Pencil,
  },
];

const projectionData = [
  { month: "NOV", value: 18 },
  { month: "M2", value: 26 },
  { month: "M4", value: 38 },
  { month: "M6", value: 54 },
  { month: "M8", value: 74 },
  { month: "M10", value: 92 },
  { month: "M12", value: 112 },
];



const RoiGrowthEngine = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-12
        md:py-16
        lg:py-20
        bg-background
      "
    >

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          md:px-6
        "
      >
        {/* HEADER */}
        <div className="text-center">
          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              bg-gradient-to-r
              from-primary
              to-accent
              bg-clip-text
              text-transparent
            "
          >
            ROI Growth Engine
          </h2>

          <p
            className="
              mt-4
              text-sm
              md:text-base
              text-muted
              max-w-2xl
              mx-auto
            "
          >
            A Unified Ecosystem where Strategy, Design, and technology work as
            one.
          </p>
        </div>

        {/* MAIN GRID */}
        <div
          className="
            mt-8
            md:mt-12
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
          "
        >
          {/* LEFT PANEL */}
          <div
            className="
              rounded-[28px]
              border
              border-card-border
              bg-card/80
              backdrop-blur-xl
              p-5
              md:p-7
            "
          >
            {/* TOP */}
            <div className="flex items-start justify-between gap-6">
              <div>
                <p
                  className="
                    text-[11px]
                    md:text-xs
                    uppercase
                    tracking-[0.2em]
                    text-muted
                  "
                >
                  Your Budget
                </p>

                <h3
                  className="
                    mt-2
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-primary
                  "
                >
                  $50,000
                </h3>
              </div>

              <div className="text-right">
                <p
                  className="
                    text-[11px]
                    md:text-xs
                    uppercase
                    tracking-[0.2em]
                    text-muted
                  "
                >
                  Projected ROI
                </p>

                <h3
                  className="
                    mt-2
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-[#F7B32B]
                  "
                >
                  $75,000
                </h3>
              </div>
            </div>

            {/* SLIDER */}
            <div className="mt-10">
              <div className="relative h-[5px] rounded-full bg-white/10">
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[72%]
                    rounded-full
                    bg-primary
                  "
                />

                <div
                  className="
                    absolute
                    top-1/2
                    left-[72%]
                    size-4
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-primary
                    shadow-[0_0_20px_var(--color-primary-glow)]
                  "
                />
              </div>
            </div>

            {/* SERVICE GRID */}
            <div
              className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
              "
            >
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.id}
                    className={`
                      rounded-2xl
                      border
                      p-5
                      transition-all
                      duration-300
                      ${
                        service.active
                          ? "border-primary/40 bg-primary/10 shadow-[0_0_30px_rgba(46,124,246,0.12)]"
                          : "border-white/5 bg-white/[0.03]"
                      }
                    `}
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        size-10
                        rounded-xl
                        bg-white/5
                      "
                    >
                      <Icon
                        size={18}
                        className={
                          service.active ? "text-primary" : "text-white/70"
                        }
                      />
                    </div>

                    <h4
                      className="
                        mt-5
                        text-base
                        font-medium
                        text-foreground
                      "
                    >
                      {service.title}
                    </h4>

                    <p
                      className="
                        mt-2
                        text-[11px]
                        uppercase
                        tracking-wide
                        text-muted
                      "
                    >
                      {service.multiplier}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            className="
              relative
              rounded-[28px]
              border
              border-card-border
              bg-card/80
              backdrop-blur-xl
              p-5
              md:p-7
              shadow-[0_0_40px_rgba(0,0,0,0.25)]
            "
          >
            <h3
              className="
                text-2xl
                font-semibold
                text-foreground
              "
            >
              12-Month Projection
            </h3>

            {/* CHART */}
            <div className="mt-8 h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={projectionData}
                  margin={{
                    top: 10,
                    right: 10,
                    left: -20,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="projectionGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#F7B32B" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#F7B32B" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    stroke="rgba(255,255,255,0.05)"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{
                      fill: "rgba(255,255,255,0.4)",
                      fontSize: 12,
                    }}
                  />

                  <YAxis hide />

                  <Tooltip
                    cursor={{
                      stroke: "#F7B32B",
                      strokeDasharray: "4 4",
                    }}
                    contentStyle={{
                      background: "#13171b",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px",
                      color: "#fff",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#F7B32B"
                    strokeWidth={4}
                    fill="url(#projectionGradient)"
                    dot={{
                      r: 0,
                    }}
                    activeDot={{
                      r: 6,
                      fill: "#F7B32B",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* FLOATING ROI CARD */}
            <div
              className="
                absolute
                top-24
                right-8
                rounded-2xl
                border
                border-[#F7B32B]/20
                bg-[#2A2111]/80
                backdrop-blur-md
                px-5
                py-4
                shadow-[0_0_30px_rgba(247,179,43,0.18)]
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-wide
                  text-[#F7B32B]
                "
              >
                Estimated Return
              </p>

              <h4
                className="
                  mt-1
                  text-3xl
                  font-bold
                  text-[#F7B32B]
                "
              >
                75k
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiGrowthEngine;