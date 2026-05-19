import Image, { StaticImageData } from "next/image";

interface Service {
  icon: StaticImageData;
  title: string;
  label: string;
}

interface ServiceCardProps {
  service: Service;
  active: boolean;
  onClick: () => void;
}

const ServiceCard = ({ service, active, onClick }: ServiceCardProps) => (
  <button
    onClick={onClick}
    className={`relative rounded-2xl border p-5 text-left transition-all duration-300 w-full ${
      active
        ? "border-[#15C8FF] bg-[#0E232A] shadow-[0_0_25px_rgba(21,200,255,0.12)]"
        : "border-[#1E293B] bg-[#0C1014] hover:border-white/20"
    }`}
  >
    <div className="flex items-start justify-between gap-2">
      <div>
        <div className="flex items-center gap-3 mb-1">
          <Image
            width={100}
            height={100}
            src={service.icon}
            alt=""
            className="text-muted leading-none bg-[#1E293B] p-4 rounded-xl"
          />
          <h3 className="text-foreground text-base font-medium leading-snug">
            {service.title}
          </h3>
        </div>
        <p className="mt-3 text-[#15C8FF]/60 text-xs font-bold tracking-wider">
          {service.label}
        </p>
      </div>
      <div
        className={`mt-0.5 size-4 shrink-0 rounded-full border transition-colors ${active ? "bg-[#F7D047] border-[#F7D047]" : "border-white/20"}`}
      />
    </div>
  </button>
);

export default ServiceCard;
