import Image from "next/image";

const Decors8 = () => (
  <>
    <div className="absolute md:top-0 md:left-0 lg:-top-10 lg:left-10 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
      <Image
        width={100}
        height={100}
        src="/decors/ellipse1.png"
        alt=""
        className="w-50 rotate-270"
      />
    </div>
    <div className="absolute md:-top-20 lg:-top-50 right-0 z-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-right">
      <Image width={100} height={100} src="/decors/ellipse4.png" alt="" />
    </div>
    <div className="absolute bottom-10 -left-15 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-left">
      <Image width={100} height={100} src="/decors/ellipse6.png" alt="" />
    </div>
    <div className="absolute bottom-20 md:right-10 lg:right-40 z-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
      <Image
        width={100}
        height={100}
        src="/decors/ellipse1.png"
        alt=""
        className="rotate-180 w-50"
      />
    </div>
    <div className="absolute md:bottom-15 lg:-bottom-25 left-0 z-20 pointer-events-none">
      <Image
        width={100}
        height={100}
        src="/decors/ellipse5.png"
        alt=""
        className="w-404"
      />
    </div>
  </>
);

export default Decors8;
