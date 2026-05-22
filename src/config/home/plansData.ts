import { PlanItems } from "@/types/home";
import { CheckCircle2, GraduationCap, Home, Zap } from "lucide-react";

export const PLANS: PlanItems[] = [
  {
    name: "Essential",
    icon: GraduationCap,
    desc: "Perfect for growing schools and specialized academies.",
    features: [
      "Up to 250 students",
      "Basic Academic Records",
      "Attendance Tracking",
    ],
    buttonText: "Start Free",
    isFeatured: false,
  },
  {
    name: "Pro Management",
    icon: Home,
    desc: "Advanced tools for data-driven educational institutions.",
    features: [
      "Up to 1,000 students",
      "Full Finance & Analytics",
      "Parent/Teacher Portal",
      "Automated Scheduling",
    ],
    buttonText: "Upgrade to Pro",
    isFeatured: true,
  },
  {
    name: "Ultimate",
    icon: Zap,
    desc: "Custom ecosystem for large districts and universities.",
    features: [
      "Unlimited Students",
      "API Access & Webhooks",
      "Dedicated Account Manager",
    ],
    buttonText: "Contact Sales",
    isFeatured: false,
  },
];