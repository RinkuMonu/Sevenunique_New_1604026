import Hero from "@/components/Industries/industriesDetails/Hero";
import Logos from "@/components/Industries/industriesDetails/Logos";
import Services from "@/components/Industries/industriesDetails/Services";
import Benefits from "@/components/Industries/industriesDetails/Benefits";
import Process from "@/components/Industries/industriesDetails/Process";
import FAQ from "@/components/Industries/industriesDetails/FAQ";
import CTABanner from "@/components/industries/industriesDetails/CTABanner";

export default function industriesDetails() {
  return (
    <main className="bg-white text-[#111]">
      <Hero />
      <Logos />
      <Services />
            <CTABanner />

      <Benefits />
      <Process />
      <FAQ />
      <CTABanner />
    </main>
  );
}