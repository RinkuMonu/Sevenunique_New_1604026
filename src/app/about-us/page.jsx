import AboutHero from "@/components/about-us/AboutHero";
import TeamShowcase from "@/components/about-us/TeamShowcase";

import ClientShowcase from "@/components/about-us/ClientShowcase";
import Testimonials from "@/components/about-us/Testimonials";
import AwardsSection from "@/components/about-us/AwardsSection";
import LeadershipHighlight from "@/components/about-us/LeadershipHighlight";
import MediaCoverage from "@/components/about-us/MediaCoverage";
import CultureSection from "@/components/about-us/CultureSection";
import TrustSection from "@/components/about-us/TrustSection";


export const metadata = {
  title: "About Us | Sevenunique",
  description:
    "Learn about Sevenunique, our mission, experienced team, and commitment to delivering innovative technology solutions.",
};


export default function AboutPage() {
  return (
    <>
      <AboutHero />
      
      
    
   
    
      <MediaCoverage />
   
    </>
  );
}