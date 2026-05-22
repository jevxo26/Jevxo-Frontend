import Education from "@/components/sections/home/EducationEdu";
import Features from "@/components/sections/home/Features";
import FlexiblePricing from "@/components/sections/home/FlexiblePricing";
import GrowthEngine from "@/components/sections/home/GrowthEngine";
import Hero from "@/components/sections/home/Hero";
import Pricing from "@/components/sections/home/Pricing";
import RoiCalculator from "@/components/sections/home/RoiCalculator";
import Showcase from "@/components/sections/home/Showcase";

export default function Home() {
  return (
    <>
      <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
        <Hero />
        <GrowthEngine />
        <RoiCalculator />
        <Showcase />
        <Education />
        <Features />
        <FlexiblePricing />
        <Pricing />
      </div>
    </>
  );
}
