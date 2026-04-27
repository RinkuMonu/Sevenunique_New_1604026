import Image from "next/image";
import Link from "next/link";

export default function ClientLogos() {
  return (
    <section className="bg-[#ffffff] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600 leading-snug mb-16">
          500+ companies rely on our{" "}
          <span className="underline decoration-[#f4622a] underline-offset-4">
            top 1% talent
          </span>{" "}
          to scale their dev teams
          <span className="text-[#f4622a]">.</span>
        </h2>

        {/* ROW 1 */}
        <div className="flex justify-center items-end gap-16 mb-10">
          
          <div className="flex flex-col items-center gap-0">
            <Image src="/logos/google-new.png" alt="Google" width={130} height={60} className="grayscale opacity-70"/>
            <Link href="#" className="text-xs text-[#f4622a]">Read case study</Link>
          </div>

          <div className="flex flex-col items-center gap-0">
            <Image src="/logos/nextroll-new.png" alt="NextRoll" width={120} height={60} className="grayscale opacity-70"/>
            <Link href="#" className="text-xs text-[#f4622a]">Watch testimonial ▶</Link>
          </div>

          <div className="flex flex-col items-center gap-0">
            <Image src="/logos/pintrest.png" alt="Pinterest" width={120} height={60} className="grayscale opacity-70"/>
            <Link href="#" className="text-xs text-[#f4622a]">Read case study</Link>
          </div>

        </div>

        {/* ROW 2 */}
        <div className="flex justify-center items-center gap-16 mb-10">
          <Image src="/logos/salesforce.png" alt="Salesforce" width={110} height={60} className="grayscale opacity-70"/>
          <Image src="/logos/adobe.png" alt="Adobe" width={110} height={60} className="grayscale opacity-70"/>
          <Image src="/logos/johnson.png" alt="Johnson" width={110} height={60} className="grayscale opacity-70"/>
        </div>

        {/* ROW 3 */}
        <div className="flex justify-center items-center gap-16">
          <Image src="/logos/rolls.png" alt="Rolls" width={120} height={60} className="grayscale opacity-70"/>
          <Image src="/logos/motorola.png" alt="Motorola" width={110} height={60} className="grayscale opacity-70"/>
          <Image src="/logos/hp.png" alt="HP" width={70} height={60} className="grayscale opacity-70"/>
        </div>

      </div>
    </section>
  );
}