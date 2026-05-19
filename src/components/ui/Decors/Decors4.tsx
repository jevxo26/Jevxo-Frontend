import Image from "next/image";

const Decors4 = () => (
  <>
    <div className="absolute -bottom-10 md:right-0 lg:right-30 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
      <Image width={100} height={100} src="/decors/techline3.png" alt="" />
    </div>
    <div className="absolute md:-bottom-10 lg:-bottom-20 md:right-10 lg:right-50 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
      <Image
        width={100}
        height={100}
        src="/decors/ellipse1.png"
        alt=""
        className="rotate-180"
      />
    </div>
    <div className="absolute -top-15 lg:left-20 z-0 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
      <Image width={100} height={100} src="/decors/techline4.png" alt="" />
    </div>
  </>
);

export default Decors4;
