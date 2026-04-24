import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function HeroSectionW() {
  return (
    <>
      <div className="max-w-6xl mx-auto flex items-center gap-5 mt-7">
        <HomeIcon size={19} className="text-gray-700" />{" "}
        <FaAngleRight className="text-gray-700" />{" "}
        <span className="text-gray-800 font-semibold">Careers</span>
      </div>
      <section className="max-w-6xl mx-auto px-1 py-10 md:py-14 flex relative mb-5 overflow-x-clip">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Innovate, from
            <br />
            <span className="text-orange-500">Anywhere.</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">
            Build your team from around the globe with the best software
            developers. Augment your workforce and create market-ready tech
            without the overhead.
          </p>
          <Link
            href="/schedule-a-call-page"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded text-sm transition-colors"
          >
            APPLY FOR A FREE CONSULTATION
          </Link>
        </div>
        <div className="mb-12  overflow-x-hidden">
          <Image
            src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/join-us-hero_y6nyxq?_a=BAVAfVDW0"
            width={900}
            height={900}
            className="object-cover object-right absolute -top-5"
            priority
            alt="img"
          />
        </div>
      </section>
    </>
  );
}
