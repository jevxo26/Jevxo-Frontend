import CTA from "@/components/sections/products/CTA";
import EduInfrastructure from "@/components/sections/products/EduInfrastructure";
import Estimator from "@/components/sections/products/Estimator";
import Hero from "@/components/sections/products/Hero";
import InsightPro from "@/components/sections/products/InsightPro";

const Products = () => {
    return (
        <div>
            <Hero/>
            <InsightPro/>
            <EduInfrastructure/>
            <Estimator/>
            <CTA/>
        </div>
    );
};

export default Products;