import Image from "next/image";
import ellipse1 from "@/assets/ellipse1.png";
import techline5 from "@/assets/techline5.png";
import techline6 from "@/assets/techline6.png";

const Decors6 = () => (
  <>
    <div className="absolute top-20 -left-20 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
      <Image src={techline5} alt="" />
    </div>
    <div className="absolute -top-5 -left-40 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
      <Image src={ellipse1} alt="" className="w-50 rotate-270" />
    </div>
    <div className="absolute top-20 -right-20 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-right">
      <Image src={techline6} alt="" />
    </div>
    <div className="absolute top-55 -right-40 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-right">
      <Image src={ellipse1} alt="" className="w-50 rotate-180" />
    </div>
    <div className="absolute -bottom-30 -left-30 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-left">
      <Image src={ellipse1} alt="" className="w-70" />
    </div>
    <div className="absolute bottom-25 right-70 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-right">
      <Image src={ellipse1} alt="" className="w-50 rotate-90" />
    </div>
  </>
);

export default Decors6;
