// Aquí deberías importar e incluir tu landing real, por ejemplo:
import { Box } from '@mui/material';
import Navbar from "../components/navbar";
import AiSolutionsBanner from "../components/home/ai_solutions_banner";
import AutoCarousel from "../components/home/auto_carousel";
import ResultsSection from "../components/home/results_section";
import ComplexitySection from "../components/home/complexity_section";
import WhyChooseSection from "../components/home/why_choose_section";
import SensorSolutionsSection from "../components/home/sensor_solutions_section";
import TestimonialsCaseStudySection from "../components/home/testimonials_case_study_section";
import HeroBanner from "../components/home/hero_banner";
  
export default function Home() {
  return (
    <Box sx={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <AiSolutionsBanner />
      <AutoCarousel
        speed={30}
        pauseOnHover={true}
      />
      <ResultsSection />
      <ComplexitySection />
      <WhyChooseSection />
      <SensorSolutionsSection />
      <TestimonialsCaseStudySection />
      <HeroBanner 
        bannerText="Bringing your machines back to their"
        buttonText="Start today"
        buttonRedirect="/canopy"
      />
    </Box>
  );
}
