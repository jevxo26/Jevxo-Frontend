import { ServiceCardProps } from "@/types/home";

const ServiceCard = ({ service, active, onClick }: ServiceCardProps) => {
const Icon = service.icon;

  return (
    <button
      onClick={onClick}
      className={`relative rounded-2xl border p-5 text-left transition-all duration-300 w-full ${
        active
          ? "border-accent bg-[#999dbe72] dark:bg-[#1B2527] shadow-[0_0_25px_rgba(21,200,255,0.12)]"
          : "border-card-border bg-card hover:border-white/20"
      }`}
    >
      <div className="relative flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-3 mb-1">
            {/* Fixed: Using Lucide Icon instead of Next Image */}
            <div className="p-2 bg-muted rounded-2xl text-secondary">
              <Icon size={20} strokeWidth={3} />
            </div>

            <h3 className="text-foreground text-base font-medium leading-snug">
              {service.title}
            </h3>
          </div>

          <p className="mt-3 text-accent text-xs font-bold tracking-wider">
            {service.label}
          </p>
        </div>

        <div
          className={`absolute -right-2 -top-2 size-4 shrink-0 rounded-full border transition-colors ${
            active ? "bg-accent border-primary" : "bg-card border-primary"
          }`}
        />
      </div>
    </button>
  );
};

export default ServiceCard;
