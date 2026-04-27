import BlogCarouselSectionCricle from "@/components/blogsectionCricle";
import CirclesBenefits from "@/components/CirclesBenefits";
import ClientLogos from "@/components/ClientLogos";
import Criclegrowth from "@/components/criclegrowth";
import ExcellenceAwards from "@/components/ExcellenceAwards";
import { HeroAboutSection } from "@/components/HeroAboutSection";
import { IntroducingCircles } from "@/components/IntroducingCircles";
import CircleLeadersSection from "@/components/TechCardcircle";
import TestimonialCTA from "@/components/TestimonialctaCircle";
import TestimonialSectionCircle from "@/components/TestimonialSectionCircle";


export default function Home() {
  return (
    <main>
      <HeroAboutSection />
      <ClientLogos />
      <IntroducingCircles />
      <CirclesBenefits />
      <ExcellenceAwards />
      <TestimonialCTA />
      <CircleLeadersSection />
      <TestimonialSectionCircle />
      <BlogCarouselSectionCricle />
      <Criclegrowth />
    </main>
  );
}
