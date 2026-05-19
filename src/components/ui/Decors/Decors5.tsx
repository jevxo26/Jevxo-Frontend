import Image from "next/image";

const Decors5 = () => (
  <>
    <div className="absolute bottom-0 -left-10 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-left">
      <Image width={100} height={100} src="/decors/techline4.png" alt="" />
    </div>
    <div className="absolute -bottom-25 md:right-50 lg:right-80 z-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
      <Image
        width={100}
        height={100}
        src="/decors/ellipse1.png"
        alt=""
        className="rotate-270"
      />
    </div>
  </>
);

export default Decors5;
