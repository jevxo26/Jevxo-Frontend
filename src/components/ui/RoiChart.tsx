import { SERVICES } from "@/config/home/servicesData";
import { ChartDataPoint, CustomTickProps, CustomTooltipProps, GlowingDotProps, TooltipItem } from "@/types/home";
import { useMemo, useState } from "react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ─── Formatters ────────────────────────────────────────────────────────────────
const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const fmtK = (n: number) => (n === 0 ? "$0k" : `$${Math.round(n / 1000)}k`);

// ─── Custom Y Tick ─────────────────────────────────────────────────────────────
const CustomYTick = ({ x = 0, y = 0, payload }: CustomTickProps) => (
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

const CustomXTick = ({ x = 0, y = 0, payload }: CustomTickProps) => (
  <text
    x={x}
    y={y}
    dy={18}
    textAnchor="middle"
    fill="#7A8499"
    fontSize={12}
    fontWeight={500}
  >
    {String(payload?.value ?? "")}
  </text>
);

// ─── Glowing Dot ───────────────────────────────────────────────────────────────
const GlowingDot = ({ cx = 0, cy = 0, payload }: GlowingDotProps) => {
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

// ─── Custom Tooltip ────────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-primary/40 bg-[#060D18]/95 backdrop-blur px-4 py-3 text-sm shadow-xl">
      <p className="text-muted mb-1 font-medium">{String(label ?? "")}</p>
      {payload.map((p: TooltipItem, i: number) => (
        <p
          key={i}
          style={{ color: p.color as string }}
          className="font-semibold"
        >
          {p.name}: {fmt(Number(p.value ?? 0))}
        </p>
      ))}
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────
const RoiChart = () => {
  const [budget, setBudget] = useState<number>(50000);
  const [activeServices, setActiveServices] = useState<Set<string>>(
    new Set(["web"]),
  );

  const blendedMultiplier = useMemo(() => {
    const selected = SERVICES.filter((s) => activeServices.has(s.id));
    if (!selected.length) return 1.5;
    return selected.reduce((sum, s) => sum + s.multiplier, 0) / selected.length;
  }, [activeServices]);

  const projectedRoi = Math.round(budget * blendedMultiplier);
  const yMax = Math.ceil((projectedRoi * 1.35) / 35000) * 35000;
  const yTicks = [0, yMax * 0.25, yMax * 0.5, yMax * 0.75, yMax].map(
    Math.round,
  );

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

  return (
    <div>
      {/* Chart Container */}
      <div className="flex-1 w-full h-[220px] md:h-[420px] bg-card rounded-lg p-3">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
          >
            <defs>
              <linearGradient id="gradProjection" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F7C93E" stopOpacity={0.55} />
                <stop offset="95%" stopColor="#F7C93E" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              horizontal
              vertical={false}
              stroke="#1E2A3B"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={(props) => <CustomXTick {...props} />}
              padding={{ left: 10, right: 10 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={(props) => <CustomYTick {...props} />}
              domain={[0, yMax]}
              ticks={yTicks}
              width={54}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
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
              type="monotone"
              dataKey="projection"
              stroke="#F7C93E"
              strokeWidth={2.5}
              style={{ filter: "drop-shadow(0 0 8px rgba(247,201,62,0.7))" }}
              dot={(props) => <GlowingDot {...props} />}
              activeDot={{ r: 6, fill: "#F7C93E", strokeWidth: 0 }}
              name="Projected Returns"
              legendType="circle"
            />

            <Line
              type="monotone"
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
    </div>
  );
};

export default RoiChart;
