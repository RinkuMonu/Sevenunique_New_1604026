import TableContent from "@/components/Services/Backend-development/TableContent";
import CaseStudyHero from "@/components/Services/Backend-development/CaseStudyHero";
import ServiceHeroSection from "@/components/Services/ServiceHeroSection";
import TrustedClientsStrip from "@/components/Services/ai-development/TrustedClientsStrip";
import AIUseCasesSection from "@/components/Services/ai-development/AIUseCasesSection";
import AiTeamSection from "@/components/Services/ai-development/AiTeamSection";
import CtaBanner from "@/components/Services/ai-development/CtaBanner";
import TestimonialSection from "@/components/Services/ai-development/TestimonialSection";
import TestimonialHighlightSection from "@/components/Services/ai-development/TestimonialHighlightSection";
import CaseStudySection from "@/components/Services/CaseStudySection";
import { serviceData } from "../[slug]/data";


export default function Page() {
  const data = serviceData["backend-development"];

  return (
    <>
      <ServiceHeroSection data={data} />
      <CaseStudyHero />
      <TrustedClientsStrip clients={data.trustedClients} />
      <div className="bg-[#f5f6f7] px-6 py-10 md:px-10">
        <TableContent />
        <AIUseCasesSection useCases={data.useCases} />
        <AiTeamSection teamSection={data.teamSection} />
        <CtaBanner ctaBanner={data.ctaBanner} />
        <TestimonialSection testimonials={data.testimonials} />
      </div>
      <TestimonialHighlightSection testimonial={data.testimonialHighlight} />
      <CaseStudySection caseStudies={data.caseStudies} />
    </>
  );
}
