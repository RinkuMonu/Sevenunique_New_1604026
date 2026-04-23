import RestServiceHeroSection from "@/components/Services/RestServiceHeroSection";
import TrustedStrip from "@/components/Services/Rest/TrustedStrip";
import AndroidServicesSection from "@/components/Services/Rest/AndroidServicesSection";
import KeyFactsSection from "@/components/Services/Rest/KeyFactsSection";
import BestPracticesSection from "@/components/Services/Rest/BestPracticesSection"; 
import GreenCtaStrip from "@/components/Services/Rest/GreenCtaStrip";
import WhyChooseSection from "@/components/Services/Rest/WhyChooseSection";
import ProcessSection from "@/components/Services/Rest/ProcessSection";
import FaqSection from "@/components/Services/Rest/FaqSection";
import DarkCtaStrip from "@/components/Services/Rest/DarkCtaStrip";


export function RestServicePage({ data }) {
  return (
    <>
      <RestServiceHeroSection data={data} />
      <TrustedStrip />
      <AndroidServicesSection />
      <KeyFactsSection />
      <BestPracticesSection />
      <GreenCtaStrip />
      <WhyChooseSection />  
      <ProcessSection />
      <FaqSection />
      <DarkCtaStrip />
    </>
  );
  
}

