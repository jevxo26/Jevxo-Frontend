import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

interface StoryCard {
  id?: string;
  type: "article" | "whitepaper" | "quote" | "news";
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime?: string;
  image?: string;
  author?: string;
  logo?: string;
  badge?: string;
}


const StoryCard = ({ title, excerpt, category, date, image, logo }: StoryCard) => {
  return (
    <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 cursor-pointer">
      {image && (
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {logo && (
            <div className="absolute top-6 left-6 bg-white/90 text-black text-xs font-bold px-4 py-1.5 rounded-2xl">
              {logo}
            </div>
          )}
        </div>
      )}

      <div className="p-8">
        <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-amber-500 mb-3">
          <span>{category}</span>
          <span className="text-zinc-600">•</span>
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {date}
          </span>
        </div>

        <h3 className="text-2xl font-semibold text-white leading-tight mb-4 group-hover:text-amber-400 transition-colors">
          {title}
        </h3>

        <p className="text-zinc-400 leading-relaxed line-clamp-3">{excerpt}</p>

        <div className="mt-6 flex items-center text-amber-500 text-sm font-medium">
          Read more{" "}
          <ArrowRight
            size={16}
            className="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}
export default StoryCard;