// app/industries/page.jsx


import CTASection from "@/components/industries/CTASection";
import IndustryGrid from "@/components/industries/IndustryGrid";
import IndustryHero from "@/components/industries/IndustryHero";
import TechStack from "@/components/industries/TechStack";

export default function Page() {
  return (
    <>

      <IndustryHero />
      <IndustryGrid />
      <TechStack />
      <CTASection />
      
    </>
  );
}