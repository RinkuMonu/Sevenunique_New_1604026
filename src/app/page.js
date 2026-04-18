import Image from "next/image";
import Header from "./Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import FeaturedSection from "@/components/FeaturedSection";
import Services from "@/components/Services";
import TestimonialSlider from "@/components/TestimonialSlider";
import TalentProcess from "@/components/TalentProcess";
import Industries from "@/components/Industries";
import BlogInsights from "@/components/BlogInsights";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import AwardsSection from "@/components/AwardsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamMorphSection from "@/components/TeamMorphSection";
import ProcessTimelineSection from "@/components/ProcessTimelineSection";

export default function Home() {
  return (
    <div>
     <Hero />
     <ClientLogos />
     <FeaturedSection />
     <AwardsSection />
     <WhyChooseUs />
     <TeamMorphSection />
     <ProcessTimelineSection />
     <Services />
     <TestimonialSlider />
     <TalentProcess />
     <Industries />
     <BlogInsights />
     <CTABand />
    </div>
  );
}
