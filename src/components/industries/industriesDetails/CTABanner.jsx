import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-white">
      <div className="max-w-[1180px] m-auto ">
        
        {/* MAIN BOX */}
        <div className="relative flex items-center bg-[#22a06b] rounded-[24px] overflow-hidden min-h-[140px]">

          {/* LEFT IMAGE */}
          <div className="relative flex-shrink-0">
            <Image
            //   src="https://assets.bairesdev.com/image/upload/v1/www/core/silos_schedule-a-call-banner_o6a2fa"
            src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/core/silos_schedule-a-call-banner_o6a2fa?_a=BAVAfVDW0"
              alt="team"
              className="object-cover"
              height={160}
              width={200}
              priority
            />
          </div>

          {/* CONTENT */}
          <div className="flex-1 px-[40px]">
            <h3 className="text-white text-[24px] leading-[34px] font-semibold max-w-[650px]">
              From concept to completion. 100s of custom software solutions built since 2009.
            </h3>
          </div>

          {/* BUTTON */}
        <div className="pr-[30px]">
  <Link
    href="/schedule-a-call-page"
    className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 text-[15px] font-medium hover:bg-[#111] transition"
  >
    Schedule a Call
    <span className="text-lg">→</span>
  </Link>
</div>

        </div>

      </div>
    </section>
  );
}