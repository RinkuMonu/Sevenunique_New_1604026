import BackendServices from "@/components/Services/Backend-development/BackendServices";
import TableContent from "@/components/Services/Backend-development/TableContent";
import TrustedClientsStrip from "@/components/Services/ai-development/TrustedClientsStrip";
import BackendHero from "@/components/services/backend-development/BackendHero";


export default function Page() {
  return (
    <>
      <BackendHero />

      <TrustedClientsStrip />

      
      <div className="bg-[#f5f6f7] px-10 py-10">
        <TableContent />
      </div>
      <BackendServices />
    </>
  );
}