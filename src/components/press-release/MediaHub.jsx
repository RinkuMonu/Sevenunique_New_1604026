import PressHero from "@/components/press-release/PressHero";
import FeaturedNews from "@/components/press-release/FeaturedNews";
import PressGrid from "@/components/press-release/PressGrid";
import FeaturedSection from "@/components/FeaturedSection";
import NewsSection from "@/components/press-release/NewsSection";
import PressCards from "@/components/press-release/PressCards";
import PressFooterInfo from "@/components/press-release/PressFooterInfo";

import GlobalCTA from "@/components/press-release/GlobalCTA";
export default function MediaHub() {
    return (
        <div>
            <PressHero />
            <FeaturedNews />
            <PressGrid />
            <FeaturedSection />
            <NewsSection />
            <PressCards />
            <PressFooterInfo />
            <GlobalCTA />
        </div>
    );
}