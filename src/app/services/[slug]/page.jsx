import { serviceData } from "./data";
import {restServiceData } from "./rest-data"

import ServiceHeroSection from "@/components/Services/ServiceHeroSection";
import BackendHero from "@/components/Services/Backend-development/BackendHero";
import BackendServices from "@/components/Services/Backend-development/BackendServices";
import CaseStudyHero from "@/components/Services/Backend-development/CaseStudyHero";
import TrustedClientsStrip from "@/components/Services/ai-development/TrustedClientsStrip";
import TableContent from "@/components/Services/Backend-development/TableContent";
import AIUseCasesSection from "@/components/Services/ai-development/AIUseCasesSection";
import AiTeamSection from "@/components/Services/ai-development/AiTeamSection";
import ServiceExpertsSection from "@/components/Services/ServiceExpertsSection";
import ServiceTrustMapSection from "@/components/Services/ServiceTrustMapSection";
import CtaBanner from "@/components/Services/ai-development/CtaBanner";
import TestimonialSection from "@/components/Services/ai-development/TestimonialSection";
import TestimonialHighlightSection from "@/components/Services/ai-development/TestimonialHighlightSection";
import CaseStudySection from "@/components/Services/CaseStudySection";
import ToolsTechSection from "@/components/Services/ToolsTechSection";
import EngagementSection from "@/components/EngagementSection";
import AwardsSectionFull from "@/components/AwardsSectionFull";
import UsefulAIResources from "@/components/UsefulAIResources";
import IndustrySection from "@/components/IndustrySection";
import ProcessSliderSection from "@/components/ProcessSliderSection";
import FAQSection from "@/components/FAQSection";
import RestServicePage from "./RestServicePage";
import WorkSection from "@/components/Services/WorkSection";
import ClientLogos from "@/components/ClientLogos";
import AiServicesSection from "@/components/Services/ai-development/Aiservicesweoffer";







export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Handle both direct slug and "-development" slug
  const normalizedSlug = serviceData[slug] ? slug : `${slug}-development`;

  const data = serviceData[normalizedSlug] || restServiceData?.[slug];

  if (!data) {
    return {
      title: "Service Not Found | SevenUnique",
      description: "The requested service could not be found.",
    };
  }

  return {
    title:
      data.seo?.title ||
      data.hero?.title ||
      "Services | SevenUnique",

    description:
      data.seo?.description ||
      data.hero?.description ||
      "Explore our software development services.",

    openGraph: {
      title:
        data.seo?.title ||
        data.hero?.title,

      description:
        data.seo?.description ||
        data.hero?.description,

      url: `https://www.sevenunique.com/services/${slug}`,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title:
        data.seo?.title ||
        data.hero?.title,

      description:
        data.seo?.description ||
        data.hero?.description,
    },
  };
}



// page.jsx logic update

export default async function ServicePage({ params }) {
  const { slug } = await params;
  
 if (restServiceData && restServiceData[slug]) {
    return <RestServicePage data={restServiceData[slug]} />;
  }
  const normalizedSlug =
    serviceData[slug] ? slug : `${slug}-development`;

  const data = serviceData[normalizedSlug];

  if (!data) {
    return <div className="p-10">No data found for: {slug}</div>;
  }

  return (
    <>
    {/* HERO */}
{normalizedSlug === "ai-development" ? (
  <ServiceHeroSection data={data} />
) : (
  <BackendHero data={data} />
)}



{normalizedSlug === "backend-development" && <CaseStudyHero />}
      {/* Responsive UI update: child sections control their own mobile gutters. */}
      <div className="overflow-x-hidden bg-[#f5f6f7]">
        {normalizedSlug !== "backend-development" && (
          <AIUseCasesSection useCases={data.useCases} />
        )}


{/* TRUSTED CLIENTS */}
{/* {data.sections?.trustedClientsStrip && (
  <TrustedClientsStrip clients={data.trustedClients} />
)} */}



      {/* <div className="bg-[#f5f6f7] px-6 py-10 md:px-10">
        <TableContent />
      </div> */}
{/* {normalizedSlug !== "ai-development" && data.backendServices && (
  <BackendServices servicesSection={data.backendServices} />
)} */}
{normalizedSlug !== "ai-development" && data.caseStudies && (
  <CaseStudySection caseStudies={data.caseStudies} />
)}




  {/* {data.aiServicesSection && (
  <AiServicesSection data={data.aiServicesSection} />
)} */}

        {/* {data.testimonialHighlight && (
          <TestimonialHighlightSection testimonial={data.testimonialHighlight} />
        )} */}

        {/* {normalizedSlug === "ai-development" ? (
          <AiTeamSection teamSection={data.teamSection} />
        ) : data.expertsSection ? (
          <ServiceExpertsSection expertsSection={data.expertsSection} />
        ) : data.teamSection ? (
          <AiTeamSection teamSection={data.teamSection} />
        ) : null} */}
        

        {normalizedSlug !== "ai-development" && data.companyTrustSection ? (
          <ServiceTrustMapSection section={data.companyTrustSection} />
        ) : null}

        

        {normalizedSlug !== "ai-development" && data.workSection ? (
  <WorkSection  data={data.workSection} />
) : null}


 {data.engagementData && (
          <EngagementSection engagementData={data.engagementData} />
        )}

{/* {normalizedSlug !== "ai-development" && data.industrySection && (
  <IndustrySection data={data.industrySection} />
)} */}
 <CtaBanner ctaBanner={data.ctaBanner} />

{normalizedSlug !== "ai-development" && data.processSection && (
  <ProcessSliderSection data={data.processSection} />
)}

        {normalizedSlug === "ai-development" && data.caseStudies && (
          <CaseStudySection caseStudies={data.caseStudies} />
        )}



       
{/* <ToolsTechSection toolsTech={data.toolsTech || defaultToolsTech} /> */}
        {/* <TestimonialSection testimonials={data.testimonials} /> */}

    
        <AwardsSectionFull />



<FAQSection data={data.faq} />
        <UsefulAIResources />
      </div>
    </>
  );
}
