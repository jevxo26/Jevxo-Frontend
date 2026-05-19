import Image from "next/image";
import techline3 from "@/assets/techline3.png";
import techline4 from "@/assets/techline4.png";
import ellipse1 from "@/assets/ellipse1.png";

const Decors4 = () => (
  <>
    <div className="absolute -bottom-10 md:right-0 lg:right-30 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
      <Image src={techline3} alt="" />
    </div>
    <div className="absolute md:-bottom-10 lg:-bottom-20 md:right-10 lg:right-50 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
      <Image src={ellipse1} alt="" className="rotate-180" />
    </div>
    <div className="absolute -top-15 lg:left-20 z-0 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
      <Image src={techline4} alt="" />
    </div>
  </>
);

export default Decors4;
