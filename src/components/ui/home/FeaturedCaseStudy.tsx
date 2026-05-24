import { FeaturedCaseStudyProps } from "@/types/home";
import { ExternalLink } from "lucide-react";
import Image from "next/image";


const FeaturedCaseStudy = ({ image, icons }: FeaturedCaseStudyProps) => {
  return (
    <div className="h-full lg:col-span-2 rounded-3xl relative z-0 border-card-border card-gradient grid md:grid-cols-2 transition-all duration-500 hover:scale-102 hover:border-primary">
      {/* Left: Image */}
      <div className="relative bg-[#E9E9E9] rounded-3xl">
        <Image
          width={100}
          height={100}
          src={image}
          alt="LuxePay"
          className="w-full h-full rounded-t-3xl md:rounded-l-3xl md:rounded-t-none object-cover"
        />

        {/* Center Divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-[#256AF4]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-[#256AF4] flex items-center justify-center text-white">
            +
          </div>
        </div>

        {/* Tags */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-md bg-card text-xs tracking-wider font-medium">
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
      <div className="p-10 flex flex-col justify-between card-gradient rounded-b-3xl md:rounded-l-none md:rounded-r-3xl">
        <div>
          <p className="text-secondary text-xs tracking-[0.25em] font-semibold">
            FINTECH • CASE STUDY
          </p>
          <h3 className="mt-5 text-4xl font-semibold text-foreground">
            LuxePay Revolution
          </h3>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            A complete digital overhaul of a high-net-worth payment processor,
            resulting in a 40% reduction in churn...
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-5">
            {icons.map((icon, i) => (
              <Image
                width={25}
                height={25}
                key={i}
                src={icon}
                alt=""
                className="cursor-pointer"
              />
            ))}
          </div>
          <button className="size-11 rounded-full bg-muted/25 flex items-center justify-center border border-card/50 hover:cursor-pointer hover:scale-130 transition-transform duration-300">
            <ExternalLink size={18} className="text-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaseStudy;
