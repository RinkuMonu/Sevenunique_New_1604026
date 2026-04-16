import ContactCards from "../components/contactus/ContactCards";
import ContactHero from "../components/contactus/ContactHero";
import GlobalHero from "../components/contactus/GlobalHero";
import OfficesSection from "../components/contactus/OfficesSection";

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
   <ContactCards />
      <OfficesSection />
      <GlobalHero />
    </div>
  );
}