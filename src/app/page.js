import Image from "next/image";
import Header from "./Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import TestimonialSlider from "@/components/TestimonialSlider";
import TalentProcess from "@/components/TalentProcess";
import Industries from "@/components/Industries";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
     <Hero />
     <ClientLogos />
     <Services />
     <TestimonialSlider />
     <TalentProcess />
     <Industries />
     <CTABand />
    </div>
  );
}
