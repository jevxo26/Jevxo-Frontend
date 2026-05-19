import Image from "next/image";

const Decors6 = () => (
  <>
    <div className="absolute top-20 -left-20 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
      <Image width={100} height={100} src="/decors/techline5.png" alt="" />
    </div>
    <div className="absolute -top-5 -left-40 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
      <Image
        width={100}
        height={100}
        src="/decors/ellipse1.png"
        alt=""
        className="w-50 rotate-270"
      />
    </div>
    <div className="absolute top-20 -right-20 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-right">
      <Image width={100} height={100} src="/decors/techline6.png" alt="" />
    </div>
    <div className="absolute top-55 -right-40 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-right">
      <Image
        width={100}
        height={100}
        src="/decors/ellipse1.png"
        alt=""
        className="w-50 rotate-180"
      />
    </div>
    <div className="absolute -bottom-30 -left-30 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-left">
      <Image
        width={100}
        height={100}
        src="/decors/ellipse1.png"
        alt=""
        className="w-70"
      />
    </div>
    <div className="absolute bottom-25 right-70 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-right">
      <Image
        width={100}
        height={100}
        src="/decors/ellipse1.png"
        alt=""
        className="w-50 rotate-90"
      />
    </div>
  </>
);

export default Decors6;
