import TalentHero from "@/components/about-us/TalentHero";
import TrustedStrip from "@/components/Services/Rest/TrustedStrip";
import VettingProcess  from "@/components/about-us/VettingProcess";
import BenefitsSection from "@/components/about-us/BenefitsSection";
import TeamRolesSection from "@/components/about-us/TeamRolesSection";
import FlexibleWays from "@/components/about-us/FlexibleWays";
import DarkShowcase from "@/components/about-us/DarkShowcase";

export default function Page() {
    return (
        <>
            <TalentHero />
            <TrustedStrip />
            <VettingProcess />
            <BenefitsSection />
            <TeamRolesSection />
            <FlexibleWays />
            <DarkShowcase />
        </>
    );
}
