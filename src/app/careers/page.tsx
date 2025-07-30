import CanopyFullScreenHero from "@/components/careersWeb/CanopyFullScreenHero";
import CanopyTestimonialsSection from "@/components/careersWeb/CanopyTestimonialsSection";
import CanopyValuesSection from "@/components/careersWeb/CanopyValuesSection";
import BenefitsPerksSection from "@/components/careersWeb/BenefitsPerksSection";
import TestimonialsCarousel from "@/components/careersWeb/TestimonialsCarousel";
import RecruitmentProcessSection from "@/components/careersWeb/RecruitmentProcessSection";
import DiversityInclusionSection from "@/components/careersWeb/DiversityInclusionSection";
import CanopyBlogPreview from "@/components/canopyWeb/CanopyBlogPreview";
import HeroBanner from "@/components/home/hero_banner";

export default function Careers() {
    return (
        <>
            <CanopyFullScreenHero />
            <CanopyValuesSection />
            <CanopyTestimonialsSection />
            <BenefitsPerksSection />
            <TestimonialsCarousel />
            <RecruitmentProcessSection />
            <DiversityInclusionSection />
            <CanopyBlogPreview
                title="Get a glimpse of the Jungle world"
                subtitle=""
                baseRoute="/careers"
            />
            <HeroBanner
                bannerText="Ready to join the Jungle team?"
                buttonText="Start today"
                buttonRedirect="/canopy"
            />
        </>
    );
}   