"use client";

export default function TestimonialSectionInAboutPage() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      {/* Responsive UI update: testimonial cards now fit narrow screens without overflow. */}
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* LEFT SIDE */}
        <div>
          <h2 className="mb-4 text-3xl font-semibold leading-tight text-gray-800 sm:text-4xl md:text-5xl">
            Great opportunities await.
          </h2>

          <p className="mb-7 text-base text-gray-500 sm:text-lg">
            See why others love it here and why your referrals will too.
          </p>

          {/* IMAGE */}
          <div className="relative h-[220px] w-full sm:h-[260px] md:h-[300px] lg:h-[340px]">
            <img
              src="/images/working-person.png"
              alt="Team member working"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* GLASSDOOR BADGE */}
          <div className="absolute -top-7 left-4 z-20 rounded-xl bg-white px-4 py-2.5 shadow-lg sm:-top-10 sm:left-6 sm:px-5 sm:py-3">
            <img
              src="https://assets.bairesdev.com//image/upload/c_limit,w_100/fl_sanitize/v1/www/core/talent_glassdoor_fhodhq.svg?_a=BAVAfVDW0"
              alt="glassdoor"
              className="h-6 object-contain"
            />
          </div>

          {/* CARD */}
          <div className="space-y-8 rounded-2xl bg-gray-50 p-5 shadow-2xl sm:p-8 md:space-y-10 md:p-10">
            {/* ITEM */}
            <div className="relative">
              <span className="absolute -left-5 -top-3 text-orange-500 text-4xl font-bold">
                “
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
               A highly supportive company with a great work environment
              </h3>
              <p className="text-gray-600 mb-2">
                A positive workplace with helpful teammates, modern technologies, and strong opportunities for professional growth
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
                A remote-first company with strong benefits
              </h3>
              <p className="text-gray-600 mb-2">
                Employees get access to learning platforms to continuously improve their skills. These benefits support a work environment focused on growth and well-being.
              </p>
              <span className="text-sm text-gray-400">Content Manager</span>
            </div>

            {/* ITEM */}
            <div className="relative">
              <span className="absolute -left-5 -top-3 text-orange-500 text-4xl font-bold">
                “
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                A great company to work for!
              </h3>
              <p className="text-gray-600 mb-2">
              They provide an Experience Partner who regularly checks in on your well-being, along with a project account manager to help resolve any blockers.
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
