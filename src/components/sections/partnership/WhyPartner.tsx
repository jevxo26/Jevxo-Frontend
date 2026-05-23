import { PARTNERSHIP_FEATURES } from "@/config/partnershipFeatures";


const WhyPartner = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-card/50 border border-card-border/50 rounded-3xl p-6 md:p-10 relative">
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
      </div>
    );
};

export default WhyPartner;