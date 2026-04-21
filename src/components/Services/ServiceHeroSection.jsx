function renderHighlightedHeading(heading) {
  if (!heading) return null;

  const match = heading.match(/\bAI\b/);

  if (!match || match.index === undefined) {
    return heading;
  }

  const start = match.index;
  const end = start + match[0].length;

  return (
    <>
      {heading.slice(0, start)}
      <span className="text-[#ff6433]">{heading.slice(start, end)}</span>
      {heading.slice(end)}
    </>
  );
}

export default function ServiceHeroSection({ data }) {
  const hero = data?.hero;

  if (!hero) return null;

  const breadcrumb = hero.breadcrumb || [];
  const rating = hero.rating || {};

  return (
    <section className="bg-[#f1f2f4] px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center gap-3 text-sm text-[#2c3444]">
          <span>Home</span>
          <span>{">"}</span>
          <span>{breadcrumb[0]}</span>
          <span>{">"}</span>
          <span className="font-semibold text-black">{breadcrumb[1]}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(340px,0.9fr)] lg:gap-12">
          <div className="lg:pr-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#24456f]">
              {hero.title}
            </p>

            <h1 className="max-w-4xl text-[42px] font-semibold leading-[1.08] text-[#111111] md:text-[58px]">
              {renderHighlightedHeading(hero.heading)}
            </h1>

            <p className="mt-8 max-w-4xl text-[18px] leading-[1.7] text-[#2f4057]">
              {hero.description}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div>
                <p className="text-[20px] font-semibold text-black">
                  {rating.platform}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-[20px] font-medium text-black">
                    {rating.score}
                  </span>
                  <span className="text-[16px] tracking-[0.2em] text-[#ff6433]">
                    {"*****"}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#2f4057]">{rating.reviews}</p>
              </div>

              <div className="hidden h-16 w-px bg-[#cfd5dd] md:block" />

              <div>
                <p className="max-w-[120px] text-lg font-semibold leading-tight text-[#4c3bff]">
                  {hero.label}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:border-l lg:border-[#cfd5dd] lg:pl-12">
            <div>
              <h2 className="mb-8 text-[24px] font-semibold leading-tight text-[#111111]">
                {hero.formTitle}
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="service-name"
                    className="mb-2 block text-[16px] font-medium text-[#26354a]"
                  >
                    Your name
                  </label>
                  <input
                    id="service-name"
                    type="text"
                    placeholder="Full name"
                    className="h-11 w-full rounded-[4px] border border-[#c9d0d8] bg-white px-4 text-[#111111] outline-none transition focus:border-[#ff6433]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service-email"
                    className="mb-2 block text-[16px] font-medium text-[#26354a]"
                  >
                    Your email
                  </label>
                  <input
                    id="service-email"
                    type="email"
                    placeholder="name@company.com"
                    className="h-11 w-full rounded-[4px] border border-[#c9d0d8] bg-white px-4 text-[#111111] outline-none transition focus:border-[#ff6433]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service-message"
                    className="mb-2 block text-[16px] font-medium text-[#26354a]"
                  >
                    What we can do for you?
                  </label>
                  <textarea
                    id="service-message"
                    rows={4}
                    placeholder="Tell us about your needs."
                    className="w-full rounded-[4px] border border-[#c9d0d8] bg-white px-4 py-3 text-[#111111] outline-none transition focus:border-[#ff6433]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-[8px] bg-[#ff6433] px-6 py-4 text-[17px] font-semibold text-white transition hover:bg-[#ef5728]"
                >
                  Jump-start Your Project
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
