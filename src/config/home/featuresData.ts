import { FeatureItems } from "@/types/home";
import {
  GraduationCap,
  Calendar,
  FileText,
  LineChart,
  LayoutGrid,
  CheckSquare,
  LucideIcon,
} from "lucide-react";

export const FEATURES: FeatureItems[] = [
  {
    title: "Student Management",
    desc: "Track attendance, grades, and progress",
    icon: GraduationCap,
  },
  {
    title: "Schedule Planning",
    desc: "Track attendance, grades, and progress",
    icon: Calendar,
  },
  {
    title: "Report Cards",
    desc: "Digital report card generation",
    icon: FileText,
  },
  {
    title: "Analytics",
    desc: "Performance insights and trends",
    icon: LineChart,
  },
  {
    title: "Course Management",
    desc: "Curriculum and syllabus tracking",
    icon: LayoutGrid,
  },
  {
    title: "Attendance Tracking",
    desc: "Real-time attendance system",
    icon: CheckSquare,
  },
];
