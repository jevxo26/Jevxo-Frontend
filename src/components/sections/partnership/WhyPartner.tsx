import { Cpu, Handshake, TrendingUp } from 'lucide-react';

const PARTNERSHIP_FEATURES = [
  {
    id: "market-expansion",
    title: "Market Expansion",
    description:
      "Access new markets and enterprise-level clients through our established global network of decision-makers.",
    icon: TrendingUp,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
  },
  {
    id: "tech-integration",
    title: "Tech Integration",
    description:
      "Seamlessly integrate your technology with our proprietary Growth Engine and digital ecosystem solutions.",
    icon: Cpu,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
  {
    id: "joint-strategy",
    title: "Joint Strategy",
    description:
      "Develop combined value propositions and co-marketing campaigns to maximize impact and ROI.",
    icon: Handshake,
    iconColor: "text-[#f59e0b]", // Amber/Yellow matching the design
    iconBg: "bg-[#f59e0b]/10",
  },
];

const WhyPartner = () => {
    return (
      <div className="bg-card/30 border border-card-border/50 rounded-3xl p-8 md:p-12 lg:p-16 relative">
        {/* Sub-header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Why Partner With Us
          </h3>
          <p className="text-muted text-sm md:text-base">
            Accelerate growth through collaborative innovation and
            market-leading expertise.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PARTNERSHIP_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-card border border-card-border rounded-2xl p-8 hover:border-card-border/80 hover:bg-card-border/10 transition-all duration-300"
            >
              {/* Icon Box */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.iconBg} ${feature.iconColor}`}
              >
                <feature.icon size={24} strokeWidth={2} />
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default WhyPartner;