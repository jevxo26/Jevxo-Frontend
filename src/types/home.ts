import { LucideIcon } from "lucide-react";

export interface StarItems {
  id: number;
  top: string;
  left: string;
  className: string;
  delay: string;
  duration: string;
}

export interface StatItems {
  id?: number;
  value: string;
  label: string;
}

export interface OrbitNodeItems {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  style: React.CSSProperties;
  delay?: number;
}

export interface Services {
  id: string;
  title: string;
  multiplier: number;
  label: string;
  icon: LucideIcon;
}

export interface ChartDataPoint {
  name: string;
  investment: number;
  projection: number;
  highlight: boolean;
}

export interface GlowingDotProps {
  cx?: number;
  cy?: number;
  payload?: ChartDataPoint;
}

export interface TickProps {
  x?: number;
  y?: number;
  payload?: { value: number | string };
}

export interface Service {
  icon: LucideIcon;
  title: string;
  label: string;
}

export interface ServiceCardProps {
  service: Service;
  active: boolean;
  onClick: () => void;
}

export interface TickPayload {
  value: number | string;
}

export interface CustomTickProps {
  x?: number | string;
  y?: number | string;
  payload?: TickPayload;
  label?: string;
  active?: boolean;
}

export interface TooltipItem {
  color?: string;
  name?: string;
  value?: string | number;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipItem[];
  label?: string;
}

export interface FeaturedCaseStudyProps {
  image: string;
  icons: string[];
}

export interface ShowcaseCardProps {
  image: string;
  title: string;
  icons: string[];
  description: string;
}