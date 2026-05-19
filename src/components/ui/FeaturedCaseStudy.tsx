import { ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface FeaturedCaseStudyProps {
  image: StaticImageData;
  icons: StaticImageData[];
}

const FeaturedCaseStudy = ({ image, icons }: FeaturedCaseStudyProps) => {
  return (
    <div className="h-full lg:col-span-2 rounded-3xl relative z-0 border border-[#77797C] bg-[#09111E] grid md:grid-cols-2 transition-all duration-500 hover:scale-102 hover:border-primary">
      {/* Left: Image */}
      <div className="relative bg-[#E9E9E9] rounded-3xl">
        <Image
          src={image}
          alt="LuxePay"
          className="w-full h-full rounded-t-3xl md:rounded-l-3xl object-cover"
        />

        {/* Center Divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-[#256AF4]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-[#256AF4] flex items-center justify-center text-white">
            +
          </div>
        </div>

        {/* Tags */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-md bg-[#555555] text-white text-xs tracking-wider font-medium">
            LEGACY UI
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-md bg-primary text-white text-xs tracking-wider font-medium">
            JEVXO REVAMP
          </span>
        </div>
      </div>

      {/* Right: Content */}
      <div className="p-10 flex flex-col justify-between bg-linear-to-b from-[#0A0E13] to-[#1B1F24] rounded-b-3xl md:rounded-r-3xl">
        <div>
          <p className="text-[#F7D047] text-xs tracking-[0.25em] font-semibold">
            FINTECH • CASE STUDY
          </p>
          <h3 className="mt-5 text-4xl font-semibold text-foreground">
            LuxePay Revolution
          </h3>
          <p className="mt-5 text-foreground/45 text-lg leading-relaxed max-w-[450px]">
            A complete digital overhaul of a high-net-worth payment processor,
            resulting in a 40% reduction in churn...
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-5">
            {icons.map((icon, i) => (
              <Image key={i} src={icon} alt="" className="cursor-pointer" />
            ))}
          </div>
          <button className="size-11 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
            <ExternalLink size={18} className="text-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaseStudy;
