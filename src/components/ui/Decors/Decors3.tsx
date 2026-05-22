import Image from "next/image";

const Decors3 = () => (
  <>
    <div className="absolute top-130 md:-left-20 lg:-left-50 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-left">
      <Image
        width={100}
        height={100}
        src="/decors/ellipse2.png"
        alt=""
        className="rotate-180"
      />
    </div>
    <div className="absolute -bottom-30 md:right-50 lg:right-80 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom">
      <Image
        width={100}
        height={100}
        src="/decors/ellipse1.png"
        alt=""
        className="rotate-180"
      />
    </div>
    <div className="absolute md:-bottom-32 lg:bottom-10 md:right-0 lg:-right-10 z-0 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
      <Image width={100} height={100} src="/decors/techline3.png" alt="" />
    </div>
  </>
);

export default Decors3;
