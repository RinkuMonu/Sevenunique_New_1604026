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
          Innovate, Build & Grow 
            <br />
            <span className="text-orange-500">with Sevenunique .</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">
          Join a team that is passionate about technology, creativity, and innovation. At Sevenunique, we provide opportunities to work on modern web platforms, mobile applications, enterprise solutions, and scalable digital products for startups, businesses, and growing brands.<br />
We believe in a collaborative and growth-focused work culture where ideas are valued, learning never stops, and every team member contributes to building impactful digital experiences. Whether you are a developer, designer, marketer, or strategist, you’ll get the chance to work on exciting projects, enhance your skills, and grow your career with a forward-thinking technology company.


          </p>
          <Link
            href="/schedule-a-call-page"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded text-sm transition-colors"
          >
           Explore Job Opportunities

          </Link>
           <p className="text-gray-600 text-lg pt-7 leading-relaxed max-w-2xl mb-8">Build your future with Sevenunique and become part of a team focused on innovation, performance, and long-term success.</p>
        </div>
        <div className="overflow-x-hidden">
          <Image
            src="/images/loc-banner.png"
            width={500}
            height={600}
            className="object-cover absolute top-10"
            priority
            alt="img"
          />
        </div>
      </section>
    </>
  );
}
