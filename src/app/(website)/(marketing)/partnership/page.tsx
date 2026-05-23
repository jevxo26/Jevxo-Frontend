import BeAPartner from "@/components/sections/partnership/BeAPartner";
import Hero from "@/components/sections/partnership/Hero";
import TechPartners from "@/components/sections/partnership/TechPartners";
import WhyPartner from "@/components/sections/partnership/WhyPartner";

const page = () => {
    return (
        <div className="bg-background">
            <Hero/>
            <WhyPartner/>
            <TechPartners/>
            <BeAPartner/>
        </div>
    );
};

export default page;