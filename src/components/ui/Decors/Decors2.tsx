import Image from "next/image";
import techline3 from "@/assets/techline3.png";
import techline4 from "@/assets/techline4.png";
import ellipse2 from "@/assets/ellipse2.png";

const Decors2 = () => (
  <>
    <div className="absolute -bottom-40 md:left-0 lg:-left-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-left">
      <Image src={techline4} alt="" className="rotate-360" />
    </div>
    <div className="absolute -top-60 lg:-right-20 md:right-0 z-100 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-right">
      <Image src={techline3} alt="" />
    </div>
    <div className="absolute lg:-bottom-80 md:-bottom-50 -right-20 z-100 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
      <Image src={ellipse2} alt="" />
    </div>
  </>
);

export default Decors2;
