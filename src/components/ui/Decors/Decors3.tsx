import Image from "next/image";
import techline3 from "@/assets/techline3.png";
import ellipse1 from "@/assets/ellipse1.png";
import ellipse2 from "@/assets/ellipse2.png";

const Decors3 = () => (
  <>
    <div className="absolute top-130 md:-left-20 lg:-left-50 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-left">
      <Image src={ellipse2} alt="" className="rotate-180" />
    </div>
    <div className="absolute -bottom-30 md:right-50 lg:right-80 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom">
      <Image src={ellipse1} alt="" className="rotate-180" />
    </div>
    <div className="absolute md:-bottom-32 lg:bottom-10 md:right-0 lg:-right-10 z-0 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
      <Image src={techline3} alt="" />
    </div>
  </>
);

export default Decors3;
