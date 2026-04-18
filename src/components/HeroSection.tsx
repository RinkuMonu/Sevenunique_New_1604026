import ContactForm from "./ContactForm";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between px-12 pt-8 pb-12 gap-12">
      {/* Left content */}
      <div className="flex-1 max-w-2xl">
        {/* Label */}
        <p className="text-xs font-bold tracking-[0.18em] uppercase text-gray-500 mb-4">
          .NET Development Services
        </p>

        {/* Heading */}
        <h1 className="text-5xl xl:text-6xl font-black text-gray-950 leading-[1.08] tracking-tight mb-6">
          Work with .NET experts trusted by the world&apos;s top tech teams.
        </h1>

        {/* Description */}
        <p className="text-base text-gray-600 leading-relaxed mb-10 max-w-xl">
          Our .NET specialists have successfully delivered hundreds of projects
          for global brands and leading enterprises. All of our .NET developers
          are seniors with extensive experience building complex cloud and web
          solutions.
        </p>

        {/* Social proof row */}
        <div className="flex items-center gap-0">
          {/* Clutch */}
          <div className="flex flex-col gap-1 pr-8 border-r border-gray-300">
            <span className="text-2xl font-black text-gray-950 tracking-tight">
              Clutch
            </span>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-950">4.9/5</span>
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-orange-500 fill-orange-500"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500">60 client reviews</span>
            </div>
          </div>

          {/* .NET Core badge */}
          <div className="pl-8">
            <div className="flex items-center gap-1">
              <span className="text-3xl font-black text-[#6b2fa0]">.</span>
              <span className="text-3xl font-black text-[#6b2fa0]">NET</span>
            </div>
            <p className="text-sm font-semibold text-[#6b2fa0] tracking-wide">
              Core
            </p>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="w-full lg:w-auto lg:min-w-[380px] xl:min-w-[420px]">
        <ContactForm />
      </div>
    </section>
  );
}
