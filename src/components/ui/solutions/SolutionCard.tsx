import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  tag: string;
  link: string;
}

const SolutionCard = ({
  title,
  description,
  icon: Icon,
  iconColor,
  iconBg,
  tag,
  link,
}: SolutionCardProps) => {
  return (
    <div className="group relative bg-card border border-card-border rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_var(--primary-glow)] flex flex-col h-full">
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${iconBg} ${iconColor} transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon size={24} strokeWidth={2} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-card-border/50">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary">
          {tag}
        </span>
        <Link
          href={link}
          className="flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors"
        >
          Learn More
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;
