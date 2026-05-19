import Image from "next/image";

const Decors2 = () => (
  <>
    <div className="absolute -bottom-40 md:left-0 lg:-left-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-left">
      <Image
        width={100}
        height={100}
        src="/decors/techline4.png"
        alt=""
        className="rotate-360"
      />
    </div>
    <div className="absolute -top-60 lg:-right-20 md:right-0 z-100 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-right">
      <Image width={100} height={100} src="/decors/techline3.png" alt="" />
    </div>
    <div className="absolute lg:-bottom-80 md:-bottom-50 -right-20 z-100 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
      <Image width={100} height={100} src="/decors/ellipse2.png" alt="" />
    </div>
  </>
);

export default Decors2;
