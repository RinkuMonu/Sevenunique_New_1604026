"use client";

export default function TestimonialSectionInAboutPage() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-4">
            Amazing opportunities await.
          </h2>

          <p className="text-gray-500 text-lg mb-8">
            See why others love it here — and why your referrals will too.
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[240px] md:h-[300px] lg:h-[340px]">
            <img
              src="https://assets.bairesdev.com//image/upload/c_limit,w_1920/dpr_auto/f_auto/q_auto/v1/www/static/dev_remote_mpu8f0?_a=BAVAfVDW0"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* GLASSDOOR BADGE */}
          <div className="absolute -top-10 left-6 bg-white px-5 py-3 rounded-xl shadow-lg z-20">
            <img
              src="https://assets.bairesdev.com//image/upload/c_limit,w_100/fl_sanitize/v1/www/core/talent_glassdoor_fhodhq.svg?_a=BAVAfVDW0"
              alt="glassdoor"
              className="h-6 object-contain"
            />
          </div>

          {/* CARD */}
          <div className="bg-gray-50 rounded-2xl shadow-2xl p-8 md:p-10 space-y-10">
            {/* ITEM */}
            <div className="relative">
              <span className="absolute -left-5 -top-3 text-orange-500 text-4xl font-bold">
                “
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                A great company with a wonderful work environment
              </h3>
              <p className="text-gray-600 mb-2">
                An excellent overall atmosphere with very helpful teammates and
                a lot of the best latest technologies, plus a professional
                growing opportunities.
              </p>
              <span className="text-sm text-gray-400">
                Infrastructure Engineer
              </span>
            </div>

            {/* ITEM */}
            <div className="relative">
              <span className="absolute -left-5 -top-3 text-orange-500 text-4xl font-bold">
                “
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Remote-first company that offers excellent benefits
              </h3>
              <p className="text-gray-600 mb-2">
                Employees have access to various learning platforms, allowing
                them to continuously enhance their skills...These benefits
                contribute to a positive work environment.
              </p>
              <span className="text-sm text-gray-400">Content Manager</span>
            </div>

            {/* ITEM */}
            <div className="relative">
              <span className="absolute -left-5 -top-3 text-orange-500 text-4xl font-bold">
                “
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Great company!
              </h3>
              <p className="text-gray-600 mb-2">
                They have an Experience Partner who is constantly asking about
                your feelings and helping you with blockers.
              </p>
              <span className="text-sm text-gray-400">
                Senior Software Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
