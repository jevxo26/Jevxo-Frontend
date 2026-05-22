import { Services } from "@/types/home";
import { Brush, ChartNoAxesCombined, Globe, Smartphone } from "lucide-react";

export const SERVICES: Services[] = [
  {
    id: "web",
    title: "Web Development",
    multiplier: 1.5,
    label: "1.5X MULTIPLIER",
    icon: Globe,
  },
  {
    id: "app",
    title: "App Development",
    multiplier: 2.0,
    label: "2X MULTIPLIER",
    icon: Smartphone,
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    multiplier: 3.0,
    label: "3X MULTIPLIER",
    icon: ChartNoAxesCombined,
  },
  {
    id: "branding",
    title: "Branding & Design",
    multiplier: 1.8,
    label: "1.8X MULTIPLIER",
    icon: Brush,
  },
];
