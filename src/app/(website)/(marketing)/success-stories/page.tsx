import KnowledgeInsights from "@/components/sections/success-stories/KnowledgeInsights";
import Newsletter from "@/components/sections/success-stories/Newsletter";
import Stories from "@/components/sections/success-stories/Stories";

const page = () => {
    return (
        <div className="bg-background">
            <KnowledgeInsights/>
            <Stories/>
            <Newsletter/>
        </div>
    );
};

export default page;