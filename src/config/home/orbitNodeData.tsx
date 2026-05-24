import { TrendingUp, Palette, Smartphone, Globe } from "lucide-react";
import { OrbitNodeItems } from "@/types/home";

// ─── Constants ────────────────────────────────────────────────────────────
const SIZE = 650;
const HALF = SIZE / 2;


export const orbitNodes: OrbitNodeItems[] = [
  {
    icon: <TrendingUp size={32} className="text-primary-hover" />,
    title: "Marketing",
    subtitle: "Growth Synergy",
    style: { top: 0, left: HALF, transform: "translate(-50%, -50%)" },
    delay: 0.55,
  },
  {
    icon: <Palette size={32} className="text-primary-hover" />,
    title: "Graphics",
    subtitle: "Visual Identity",
    style: { top: HALF + 25, left: 0, transform: "translate(-50%, -50%)" },
    delay: 0.65,
  },
  {
    icon: <Smartphone size={32} className="text-primary-hover" />,
    title: "App Dev",
    subtitle: "Mobile Solutions",
    style: { top: HALF + 25, left: SIZE, transform: "translate(-50%, -50%)" },
    delay: 0.75,
  },
  {
    icon: <Globe size={32} className="text-primary-hover" />,
    title: "Web Arch",
    subtitle: "High Performance",
    style: { top: SIZE, left: HALF, transform: "translate(-50%, -50%)" },
    delay: 0.85,
  },
];