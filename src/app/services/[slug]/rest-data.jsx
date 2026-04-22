import RestServiceHeroSection from "@/components/Services/RestServiceHeroSection";
import CompanyStripSection from "@/components/Services/CompanyStrip";

export function RestServicePage({ data }) {
  return (
    <>
      <RestServiceHeroSection data={data} />
      <CompanyStripSection />
    </>
  );
  
}
export function CompanyStrip({ data }) {
  return <CompanyStripSection data={data} />;
}

