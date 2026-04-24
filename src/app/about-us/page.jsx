import AboutHero from "@/components/about-us/AboutHero";
import TeamShowcase from "@/components/about-us/TeamShowcase";

import ClientShowcase from "@/components/about-us/ClientShowcase";
import Testimonials from "@/components/about-us/Testimonials";
import AwardsSection from "@/components/about-us/AwardsSection";
import LeadershipHighlight from "@/components/about-us/LeadershipHighlight";
import MediaCoverage from "@/components/about-us/MediaCoverage";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <TeamShowcase />
      <ClientShowcase />
      <Testimonials />
      <AwardsSection />
      <LeadershipHighlight />
      <MediaCoverage />
    </>
  );
}