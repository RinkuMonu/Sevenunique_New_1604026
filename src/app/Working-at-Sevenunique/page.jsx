import Criclegrowth from "@/components/criclegrowth";
import AllVitals from "@/components/WorkingatBairesDevPages/AllVitals";
import BaiContactSection from "@/components/WorkingatBairesDevPages/BaiFaqSection";
import BaiPortfolioSection from "@/components/WorkingatBairesDevPages/BaiPortfolioSection";
import BaireswaySection from "@/components/WorkingatBairesDevPages/BaireswaySection";
import BaiTestimonialSection from "@/components/WorkingatBairesDevPages/BaiTestimonialSection";
import ExperiencesSection from "@/components/WorkingatBairesDevPages/ExperiencesSection";
import PassionSection from "@/components/WorkingatBairesDevPages/PassionSection";
import RecognizedExcellenceSection from "@/components/WorkingatBairesDevPages/RecognizedExcellenceSection";
import HeroSectionW from "@/components/WorkingatBairesDevPages/Whero";
import WhyBairesdevSection from "@/components/WorkingatBairesDevPages/WhyBairesdevSection";

export default function LandingPage() {
  return (
    <div className="w-full bg-white">
      <HeroSectionW />
      <WhyBairesdevSection />
      <BaireswaySection />
      <RecognizedExcellenceSection />
      <BaiPortfolioSection />
      <PassionSection />
      <BaiTestimonialSection />
      <AllVitals />
      <ExperiencesSection />
      {/* done upper side*/}
      <BaiContactSection />
      <Criclegrowth />
    </div>
  );
}
