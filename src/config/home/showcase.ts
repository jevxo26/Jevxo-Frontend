const jsIcon = "/icons/js-icon.png";
const boxIcon = "/icons/box-icon.png";
const meshIcon = "/icons/mesh-icon.png";
const growthIcon = "/icons/growth-icon.png";
const terminalIcon = "/icons/terminal-icon.png";
const cloudIcon = "/icons/cloud-icon.png";
const luxePreview = "/luxe-preview.png";

const ICONS_1: string[] = [jsIcon, boxIcon, meshIcon];
const ICONS_2: string[] = [growthIcon, terminalIcon, cloudIcon];

interface ShowcaseItem {
  image: string;
  title: string;
  icons: string[];
  description: string;
}

export const SHOWCASE_CARDS: ShowcaseItem[] = [
  {
    image: "/images/nova-preview.png",
    title: "Project Nova",
    icons: ICONS_2,
    description:
      "Real-time AI monitoring dashboard for autonomous logistical fleets.",
  },
  {
    image: "/images/nova-preview.png",
    title: "Project Nova",
    icons: ICONS_2,
    description:
      "Real-time AI monitoring dashboard for autonomous logistical fleets.",
  },
  {
    image: "/images/nova-preview.png",
    title: "Project Nova",
    icons: ICONS_2,
    description:
      "Real-time AI monitoring dashboard for autonomous logistical fleets.",
  },
  {
    image: "/images/nova-preview.png",
    title: "Project Nova",
    icons: ICONS_2,
    description:
      "Real-time AI monitoring dashboard for autonomous logistical fleets.",
  },
];
