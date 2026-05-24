import { ShowcaseCardProps } from "@/types/home";
import Image from "next/image";


const ShowcaseCard = ({
  image,
  title,
  icons,
  description,
}: ShowcaseCardProps) => {
  return (
    <div className="rounded-[22px] overflow-hidden card-gradient border-card-border group transition-all duration-500 hover:-translate-y-1 hover:border-primary">
      {/* Image */}
      <div className="h-[250px] overflow-hidden">
        <Image
          width={100}
          height={100}
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6 card-gradient">
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
        <p className="mt-3 text-muted leading-relaxed">{description}</p>

        {/* Icons */}
        <div className="flex items-center justify-end gap-4 mt-4">
          {icons.map((icon, i) => (
            <Image
              width={25}
              height={25}
              key={i}
              src={icon}
              alt=""
              className="cursor-pointer bg-muted/50 rounded-2xl p-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
