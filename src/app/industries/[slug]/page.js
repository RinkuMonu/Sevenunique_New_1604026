
import CTABanner from "@/components/industries/industriesDetails/CTABanner";
import TechStack from "@/components/industries/TechStack";
import Industries from "@/components/industries/industriesDetails/Industries";
import CTASection from "@/components/industries/CTASection";

import { industryData } from "@/data/industryData";
import Services from "@/components/industries/industriesDetails/Services";
import Hero from "@/components/industries/industriesDetails/Hero";
import Logos from "@/components/industries/industriesDetails/Logos";
import Benefits from "@/components/industries/industriesDetails/Benefits";
import Process from "@/components/industries/industriesDetails/Process";
import FAQ from "@/components/industries/industriesDetails/FAQ";


export default async function Page({ params }) {

  const { slug } = await params;
  console.log("slug", slug);

  const data = industryData[slug];
  // console.log(data);

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