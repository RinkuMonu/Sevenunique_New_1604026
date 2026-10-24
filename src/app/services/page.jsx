import ServicesHero from "@/components/Services/ServicesHero";
import ClientLogos from "@/components/ClientLogos";
import ServicesGrid from "@/components/Services/Servicegridcard";
import ServicesProcess from "@/components/Services/ServicesProcess";
import ServicesTechStack from "@/components/Services/ServicesTechStack";
import ServicesCaseStudies from "@/components/Services/ServicesCaseStudies";
import ServicesWhyChoose from "@/components/Services/ServicesWhyChoose";
import ServicesFAQ from "@/components/Services/ServicesFAQ";
import ServicesCTA from "@/components/Services/ServicesCTA";

export const metadata = {
  title: "Custom Software Development & AI Engineering Services | SevenUnique",
  description:
    "Explore full-spectrum custom software, generative AI, cloud backend, mobile app, and enterprise engineering services designed for scalable growth.",
  keywords: [
    "custom software development services",
    "AI development solutions",
    "cloud backend engineering",
    "mobile app development",
    "enterprise software development",
    "SevenUnique services",
  ],
  openGraph: {
    title: "Custom Software Development & AI Engineering Services | SevenUnique",
    description:
      "Explore full-spectrum custom software, generative AI, cloud backend, mobile app, and enterprise engineering services designed for scalable growth.",
    url: "https://www.sevenunique.com/services",
    siteName: "SevenUnique",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <ServicesHero />

      {/* 2. RECOGNIZED BY ORGANIZATIONS / CLIENT TRUST LOGOS */}
      <ClientLogos />

      {/* 3. INTERACTIVE SERVICES CATALOG & SEARCH */}
      <ServicesGrid />

      {/* 4. THE SEVENUNIQUE 4-STAGE DELIVERY FRAMEWORK */}
      <ServicesProcess />

      {/* 5. INTERACTIVE TECHNOLOGY STACK ECOSYSTEM */}
      <ServicesTechStack />

      {/* 6. PROVEN IMPACT & FEATURED CASE STUDIES */}
      <ServicesCaseStudies />

      {/* 7. WHY HIGH-GROWTH TEAMS CHOOSE SEVENUNIQUE */}
      <ServicesWhyChoose />

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <ServicesFAQ />

      {/* 9. BOTTOM CONVERSION CTA BANNER */}
      <ServicesCTA />
    </main>
  );
}
