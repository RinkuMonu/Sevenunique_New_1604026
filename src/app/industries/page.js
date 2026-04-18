// app/industries/page.jsx

import IndustryHero from "@/components/Industries/IndustryHero";
import IndustryGrid from "@/components/Industries/IndustryGrid";
import TechStack from "@/components/Industries/TechStack";
import CTASection from "@/components/Industries/CTASection";

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