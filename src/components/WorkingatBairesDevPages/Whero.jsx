import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function HeroSectionW() {
  return (
    <>
      {/* Responsive UI update: align breadcrumb with mobile page gutters. */}
      <div className="mx-auto mt-5 flex max-w-6xl items-center gap-3 px-4 sm:mt-7 sm:px-6">
        <HomeIcon size={19} className="text-gray-700" />{" "}
        <FaAngleRight className="text-gray-700" />{" "}
        <span className="text-gray-800 font-semibold">Careers</span>
      </div>
      <section className="relative mx-auto mb-5 grid max-w-6xl grid-cols-1 items-center gap-8 overflow-x-clip px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-2 lg:gap-12">
        <div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
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
            className="inline-flex w-full items-center justify-center rounded bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 sm:w-auto"
          >
           Explore Job Opportunities

          </Link>
           <p className="text-gray-600 text-lg pt-7 leading-relaxed max-w-2xl mb-8">Build your future with Sevenunique and become part of a team focused on innovation, performance, and long-term success.</p>
        </div>
        {/* Responsive UI update: image participates in layout instead of covering mobile copy. */}
        <div className="flex min-w-0 justify-center overflow-hidden">
          <Image
            src="/images/loc-banner.png"
            width={500}
            height={600}
            className="h-auto w-full max-w-[500px] object-contain"
            style={{ height: "auto" }}
            priority
            alt="img"
          />
        </div>
      </section>
    </>
  );
}
