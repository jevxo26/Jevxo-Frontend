import HomeBackground from "@/components/layouts/HomeBackground";

import Hero from "@/components/sections/home/Hero";
import GrowthEngine from "@/components/sections/home/GrowthEngine";
import RoiCalculator from "@/components/sections/home/RoiCalculator";
import Showcase from "@/components/sections/home/Showcase";
import Education from "@/components/sections/home/EducationEdu";
import Features from "@/components/sections/home/Features";
import FlexiblePricing from "@/components/sections/home/FlexiblePricing";
import Pricing from "@/components/sections/home/Pricing";

export default function Home() {
  return (
    <HomeBackground>
      <Hero />
      <GrowthEngine />
      <RoiCalculator />
      <Showcase />
      <Education />
      <Features />
      <FlexiblePricing />
      <Pricing />
    </HomeBackground>
  );
}
