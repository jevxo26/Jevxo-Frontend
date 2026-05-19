import Image, { StaticImageData } from "next/image";

interface ShowcaseCardProps {
  image: StaticImageData;
  title: string;
  icons: StaticImageData[];
  description: string;
}

const ShowcaseCard = ({
  image,
  title,
  icons,
  description,
}: ShowcaseCardProps) => {
  return (
    <div className="rounded-[22px] overflow-hidden border border-[#77797C] bg-[#09111E] group transition-all duration-500 hover:-translate-y-1 hover:border-primary">
      {/* Image */}
      <div className="h-[250px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-linear-to-b from-[#13171B] to-[#1B1F24]">
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
        <p className="mt-3 text-foreground/45 leading-relaxed">{description}</p>

        {/* Icons */}
        <div className="flex items-center gap-4 mt-6">
          {icons.map((icon, i) => (
            <Image key={i} src={icon} alt="" className="w-5 cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
