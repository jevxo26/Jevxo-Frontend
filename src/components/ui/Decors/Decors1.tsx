import Image from "next/image";

const Decors1 = () => (
  <>
    <div className="absolute lg:-bottom-60 md:-bottom-40 -left-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-left">
      <Image
        width={100}
        height={100}
        src="/decors/techline2.png"
        alt=""
        className="rotate-360"
      />
      <Image
        width={100}
        height={100}
        src="/decors/ellipse1.png"
        alt=""
        className="absolute bottom-0"
      />
    </div>
    <div className="absolute top-0 -right-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-right">
      <Image width={100} height={100} src="/decors/techline1.png" alt="" />
    </div>
  </>
);

export default Decors1;
