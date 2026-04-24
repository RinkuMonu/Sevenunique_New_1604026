import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function BaireswaySection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-14 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-lg aspect-square flex items-center justify-center">
          <Image
            src="https://assets.bairesdev.com//image/upload/c_limit,w_480/dpr_auto/f_auto/q_auto/v1/www/static/dev-maria_dmnth8?_a=BAVAfVDW0"
            width={400}
            height={500}
            className="object-cover w-full h-full rounded-lg"
            priority
            alt="img"
          />
        </div>
        <div className="rounded-lg aspect-square flex flex-col items-center gap-10 justify-center px-5">
          <span className="text-gray-700 text-3xl font-semibold">
            The BairesDev Way
          </span>
          <p className="text-gray-500 text-[15px] font-semibold">
            We do things differently. Our edge comes from our beliefs and how we
            bring them to life. This fuels our growth and plays a big role in
            what we look for when hiring, what we value, and why we stay.
          </p>
          <Link href="/culture" className="text-gray-800 flex justify-center items-center gap-4 font-bold">
            Discover our Culture <FaLongArrowAltRight />
          </Link>
        </div>
        <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
          <Image
            src="https://assets.bairesdev.com//image/upload/c_limit,w_480/dpr_auto/f_auto/q_auto/v1/www/static/dev-mauro_skr5md?_a=BAVAfVDW0"
            width={500}
            height={600}
            className="object-cover rounded-lg"
            priority
            alt="img"
          />
        </div>
      </div>
    </section>
  );
}
