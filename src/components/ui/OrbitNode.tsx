import { ReactNode, CSSProperties } from "react";

interface OrbitNodeProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  style: CSSProperties;
}

const OrbitNode = ({ icon, title, subtitle, style }: OrbitNodeProps) => (
  <div className="absolute z-30 flex flex-col items-center" style={style}>
    {/* Circle */}
    <div className="size-[88px] rounded-full border border-white/10 bg-[#1B2527] flex items-center justify-center shadow-[0_0_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.07)] transition-transform duration-300 hover:scale-105">
      {icon}
    </div>

    {/* Text */}
    <div className="mt-4 text-center whitespace-nowrap">
      <h3 className="text-foreground font-semibold text-[17px] tracking-wide leading-tight">
        {title}
      </h3>
      <p className="text-muted text-xs mt-1">{subtitle}</p>
    </div>
  </div>
);

export default OrbitNode;
