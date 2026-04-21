import Hero from "@/components/Industries/industriesDetails/Hero";
import Logos from "@/components/Industries/industriesDetails/Logos";
import Services from "@/components/Industries/industriesDetails/Services";
import Benefits from "@/components/Industries/industriesDetails/Benefits";
import Process from "@/components/Industries/industriesDetails/Process";
import FAQ from "@/components/Industries/industriesDetails/FAQ";
import CTABanner from "@/components/industries/industriesDetails/CTABanner";
import TechStack from "@/components/industries/TechStack";
import Industries from "@/components/industries/industriesDetails/Industries";
import CTASection from "@/components/industries/CTASection";

import { industryData } from "@/data/industryData";


export default async function Page({ params }) {
  
    const { slug } = await params;
    console.log("slug", slug);

      const data = industryData[slug];

        if (!data) return <div>Not Found</div>;


  
  return (
    <main className="bg-white text-[#111]">
      {/* <Hero /> */}
            <Hero data={data.hero} />

      <Logos />
      {/* <Services /> */}
      <Services data={data.services} />

      <CTABanner />
      {/* <Benefits /> */}
      <Benefits data={data.benefits} />

      {/* <Process /> */}

      <Process data={data.process} />

      <TechStack />

      <CTABanner />

      {/* <FAQ /> */}
      <FAQ data={data.faq} />

      <Industries />
      <CTASection />

    </main>
  );
}