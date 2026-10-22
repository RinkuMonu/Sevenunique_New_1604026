import PressFooterInfo from "@/components/press-release/PressFooterInfo";
import GlobalCTA from "@/components/press-release/GlobalCTA";
import News from "./News";

export default function PressRelease() {
  return (
    <div>
      <News />
      <PressFooterInfo />
      <GlobalCTA />
    </div>
  );
}