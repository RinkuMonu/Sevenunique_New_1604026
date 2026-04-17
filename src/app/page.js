import Image from "next/image";
import Header from "./Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import FeaturedSection from "@/components/FeaturedSection";
import Services from "@/components/Services";
import TalentProcess from "@/components/TalentProcess";
import Industries from "@/components/Industries";
import BlogInsights from "@/components/BlogInsights";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
     <Hero />
     <ClientLogos />
     <FeaturedSection />
     <Services />
     <TalentProcess />
     <Industries />
     <BlogInsights />
     <CTABand />
    </div>
  );
}
