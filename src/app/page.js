import Image from "next/image";
import Header from "./Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import TalentProcess from "@/components/TalentProcess";
import Industries from "@/components/Industries";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
     <Header />
     <Hero />
     <ClientLogos />
     <Services />
     <TalentProcess />
     <Industries />
     <CTABand />
     <Footer />
    </div>
  );
}
