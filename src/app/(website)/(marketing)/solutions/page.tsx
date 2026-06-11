import Overview from "@/components/sections/solutions/Overview";
import RoiGrowthEngine from "@/components/sections/solutions/ROIGrowthEngine";
import Stats from "@/components/sections/solutions/Stats";

const Solutions = () => {
  return (
    <div className="bg-grid-pattern relative inset-0">
      <Overview/>
      <RoiGrowthEngine/>
      <Stats/>
    </div>
  );
};

export default Solutions;