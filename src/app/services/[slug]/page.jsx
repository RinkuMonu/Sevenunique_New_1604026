import { serviceData } from "./data";
import ServiceHeroSection from "@/components/Services/ServiceHeroSection";
import TrustedClientsStrip from "@/components/Services/ai-development/TrustedClientsStrip";
import TableContent from "@/components/Services/Backend-development/TableContent";
import AIUseCasesSection from "@/components/Services/ai-development/AIUseCasesSection";
import AiTeamSection from "@/components/Services/ai-development/AiTeamSection";
import CtaBanner from "@/components/Services/ai-development/CtaBanner";
import TestimonialSection from "@/components/Services/ai-development/TestimonialSection";
import TestimonialHighlightSection from "@/components/Services/ai-development/TestimonialHighlightSection";
import CaseStudySection from "@/components/Services/CaseStudySection";





export default async function ServicePage({ params }) {
  const { slug } = await params;

  const data =
    serviceData[slug] ||
    serviceData[`${slug}-development`];

  if (!data) {
    return <div className="p-10">No data found for: {slug}</div>;
  }

  return (
    <>
      <ServiceHeroSection data={data} />
      <TrustedClientsStrip clients={data.trustedClients} />
      <div className="bg-[#f5f6f7] px-6 py-10 md:px-10">
        <TableContent />
        <AIUseCasesSection useCases={data.useCases} />
        <AiTeamSection teamSection={data.teamSection} />
        <CtaBanner ctaBanner={data.ctaBanner} />
        <TestimonialSection testimonials={data.testimonials} />
      </div>
      {data.testimonialHighlight && (
        <TestimonialHighlightSection testimonial={data.testimonialHighlight} />
      )}
      {data.caseStudies && <CaseStudySection caseStudies={data.caseStudies} />}
    </>
  );
}
