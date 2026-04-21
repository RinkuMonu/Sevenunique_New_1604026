import { serviceData } from "./data";
import ServiceHeroSection from "@/components/Services/ServiceHeroSection";
import TrustedClientsStrip from "@/components/Services/ai-development/TrustedClientsStrip";
import TestimonialHighlightSection from "@/components/Services/ai-development/TestimonialHighlightSection";
import AIUseCasesSection from "@/components/Services/ai-development/AIUseCasesSection";
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
      {data.sections?.trustedClientsStrip && <TrustedClientsStrip />}
      {data.useCases && <AIUseCasesSection useCases={data.useCases} />}
      {data.testimonialHighlight && (
        <TestimonialHighlightSection testimonial={data.testimonialHighlight} />
      )}
      {data.caseStudies && <CaseStudySection caseStudies={data.caseStudies} />}
    </>
  );
}
