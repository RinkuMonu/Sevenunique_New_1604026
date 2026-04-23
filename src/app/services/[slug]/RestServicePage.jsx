import RestServiceHeroSection from "@/components/RestServiceHeroSection";
import TrustedStrip from "@/components/Services/Rest/TrustedStrip";
import AndroidServicesSection from "@/components/Services/Rest/AndroidServicesSection";
import KeyFactsSection from "@/components/Services/Rest/KeyFactsSection";
import BestPracticesSection from "@/components/Services/Rest/BestPracticesSection";
import GreenCtaStrip from "@/components/Services/Rest/GreenCtaStrip";
import WhyChooseSection from "@/components/Services/Rest/WhyChooseSection";
import ProcessSection from "@/components/Services/Rest/ProcessSection";
import FaqSection from "@/components/Services/Rest/FaqSection";
import DarkCtaStrip from "@/components/Services/Rest/DarkCtaStrip";

import { companyStripData } from "./rest-data";

export default function RestServicePage({ data }) {
  if (!data) return null;

  return (
    <>
     <RestServiceHeroSection data={data} />
      <TrustedStrip data={companyStripData} />

      {data.sections?.androidServices && (
        <AndroidServicesSection data={data?.sections.androidServices} />
      )}

      {data.sections?.keyFacts && (
        <KeyFactsSection data={data?.sections.keyFacts} />
      )}

      {data.sections?.bestPractices && (
        <BestPracticesSection data={data.sections.bestPractices} />
      )}

      <GreenCtaStrip />

      {data.sections?.whyChoose && (
        <WhyChooseSection data={data?.sections.whyChoose} />
      )}

      {data.sections?.process && (
        <ProcessSection data={data?.sections.process} />
      )}

      {data.sections?.faq && (
        <FaqSection data={data?.sections.faq} />
      )}

      <DarkCtaStrip />
    </>
  );
}