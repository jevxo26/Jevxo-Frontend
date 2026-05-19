import Image from "next/image";
import ellipse1 from "@/assets/ellipse1.png";
import techline4 from "@/assets/techline4.png";

const Decors5 = () => (
  <>
    <div className="absolute bottom-0 -left-10 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-left">
      <Image src={techline4} alt="" />
    </div>
    <div className="absolute -bottom-25 md:right-50 lg:right-80 z-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
      <Image src={ellipse1} alt="" className="rotate-270" />
    </div>
  </>
);

export default Decors5;
