import PowerForecastingBanner from "@/components/toucanWeb/ai_solutions_banner";
import AccuracyAutomationSection from "@/components/toucanWeb/accuracy_automation_section";
import PowerForecastingSection from "@/components/toucanWeb/power_forecasting_section";
import TestimonialSection from "@/components/toucanWeb/testimonial_section";
import PowerForecastingCardsSection from "@/components/toucanWeb/power_forecasting_cards_section";
import HowToGetStartedSection from "@/components/toucanWeb/how_to_get_started_section";
import ToucanFAQSection from "@/components/toucanWeb/toucan_faq_section";
import CanopyBlogPreview from "@/components/canopyWeb/CanopyBlogPreview";
import HeroBanner from "@/components/home/hero_banner";

export default function Toucan() {
    return (
        <>
            <PowerForecastingBanner />
            <AccuracyAutomationSection />
            <PowerForecastingSection />
            <TestimonialSection />
            <PowerForecastingCardsSection />
            <HowToGetStartedSection />
            <ToucanFAQSection />
            <CanopyBlogPreview
                title="Últimos artículos"
                subtitle="Descubre los últimos artículos de Toucan"
                baseRoute="/toucan"
            />
            <HeroBanner
                bannerText="Next-level understanding of your future production"
                buttonText="Start today"
                buttonRedirect="/canopy"
            />
        </>
    )
}   