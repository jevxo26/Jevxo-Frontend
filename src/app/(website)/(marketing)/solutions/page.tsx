import Overview from "@/components/sections/solutions/Overview";
import RoiGrowthEngine from "@/components/sections/solutions/ROIGrowthEngine";
import Stats from "@/components/sections/solutions/Stats";

const Solutions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <Overview/>
      <RoiGrowthEngine/>
      <Stats/>
    </div>
  );
};

export default Solutions;