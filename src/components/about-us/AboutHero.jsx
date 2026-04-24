"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { GoHome } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutHero() {
  const pathRef = useRef(null);
  const wrapRef = useRef(null);
  const orangeRef = useRef(null);
  const svgRef = useRef(null);
  const bottomRef = useRef(null); // invisible marker above bottom section — NOT inside AOS

  useEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    const orange = orangeRef.current;
    const svg = svgRef.current;
    const bottom = bottomRef.current;
    if (!path || !wrap || !orange || !svg || !bottom) return;

    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });

    const footer = document.querySelector("footer") || document.querySelector("[data-footer]");

    const build = () => {
      const wrapRect = wrap.getBoundingClientRect();
      const orangeRect = orange.getBoundingClientRect();
      const bottomRect = bottom.getBoundingClientRect();
      const scrollY = window.scrollY;

      const svgTopDoc = wrapRect.top + scrollY;

      let endDoc;
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        endDoc = footerRect.top + scrollY;
      } else {
        endDoc = document.documentElement.scrollHeight - 200;
      }

      const svgHeight = endDoc - svgTopDoc;
      const svgWidth = wrapRect.width;

      svg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
      svg.style.height = `${svgHeight}px`;

      const startX = orangeRect.right - wrapRect.left;
      const startY = (orangeRect.top + scrollY + orangeRect.height / 2) - svgTopDoc + 28;
      const rightX = svgWidth * 0.72;
      const midY = (bottomRect.top + scrollY) - svgTopDoc; // marker sits exactly where line turns
      const endY = svgHeight;
      const leftX = -52;

      path.setAttribute("d", `M${startX} ${startY} H${rightX} V${midY} H${leftX} V${endY}`);

      [
        { sel: ".dot-1-c", cx: startX, cy: startY },
        { sel: ".dot-2-c", cx: leftX, cy: midY },
        { sel: ".dot-3-c", cx: leftX, cy: endY },
      ].forEach(({ sel, cx, cy }) => {
        const el = svg.querySelector(sel);
        if (!el) return;
        el.setAttribute("cx", cx);
        el.setAttribute("cy", cy);
        el.style.transformOrigin = `${cx}px ${cy}px`;
      });

      return path.getTotalLength();
    };

    // Build path, measure total length, hide fully
    const len = build();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    path.style.transition = "none";

    // Force reflow so browser registers the hidden state
    path.getBoundingClientRect();

    // Animate: draw the full line slowly over 6 seconds with a linear ease
    // so each segment slides in at a constant, steady pace
    path.style.transition = "stroke-dashoffset 6s linear 0.4s";
    path.style.strokeDashoffset = "0";

    // Dots appear at timed intervals matching when line reaches them
    // Segment lengths (approximate fractions of total path):
    //   start→right: ~8%  → ~0.5s into animation
    //   right→left corner: ~50% → ~3s
    //   left→footer bottom: 100% → ~6s
    const d1 = svg.querySelector(".dot-1-c");
    const d2 = svg.querySelector(".dot-2-c");
    const d3 = svg.querySelector(".dot-3-c");

    const t1 = setTimeout(() => { if (d1) d1.style.opacity = "1"; }, 500);
    const t2 = setTimeout(() => { if (d2) d2.style.opacity = "1"; }, 3000);
    const t3 = setTimeout(() => { if (d3) d3.style.opacity = "1"; }, 6200);

    // Rebuild on resize (keep geometry correct, re-trigger animation from current progress)
    const onResize = () => { build(); };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-20 lg:px-32">
      <style>{`
        .dot-1-c, .dot-2-c, .dot-3-c {
          opacity: 0;
          transition: opacity 0.4s ease;
        }
      `}</style>

      {/* Increased max-width from 960px to 1440px */}
      <div className="max-w-[1440px] mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <GoHome />
          <span>›</span>
          <span className="text-gray-800 font-medium">About Us</span>
        </div>

        {/* Label */}
        <p className="text-[11px] tracking-[0.25em] text-gray-400 uppercase mb-6 font-medium">
          About BairesDev
        </p>

        <div ref={wrapRef} className="relative" style={{ overflow: "visible" }}>

          {/* SVG — absolute, tall, covers wrap top → footer top */}
          <svg
            ref={svgRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              pointerEvents: "none",
              overflow: "visible",
              zIndex: 0,
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={pathRef}
              d=""
              stroke="#f15c2d"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle className="dot-1-c" cx="0" cy="0" r="7" fill="#f15c2d" />
            <circle className="dot-2-c" cx="0" cy="0" r="7" fill="#f15c2d" />
            <circle className="dot-3-c" cx="0" cy="0" r="9" fill="#f15c2d" />
          </svg>

          {/* TOP: headline + orange text */}
          <div className="max-w-[700px] relative z-10">
            <h1 className="text-[36px] md:text-[46px] font-extrabold text-[#0f172a] leading-[1.15] mb-9">
              For over a decade we've partnered with technology leaders to
              rapidly scale their teams and meet their business challenges.
            </h1>
            <p ref={orangeRef} className="text-[#f15c2d] text-[20px] font-bold inline-block">
              We think we're pretty good at it
            </p>
          </div>

          {/* Vertical gap — the line travels through this space */}
          <div className="h-80" />

          {/* Invisible marker — measures where line turns, outside any AOS wrapper */}
          <div ref={bottomRef} style={{ height: 0, visibility: "hidden" }} />

          {/* BOTTOM: "From humble beginnings" + image */}
          <div className="grid md:grid-cols-2 gap-14 items-center relative z-10">

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
            >
              <h2 className="text-[34px] md:text-[42px] font-extrabold text-[#0f172a] mb-6 leading-tight">
                From humble beginnings
                <br />
                to global partner.
              </h2>
              <p className="text-gray-500 text-[16px] leading-8 mb-8 max-w-[500px]">
                Founded in Buenos Aires, Argentina in 2009 by Nacho De Marco
                and Paul Azorin. With a mission to connect the top 1% Latin
                American developers with companies needing top-quality software
                solutions.
              </p>
              <p className="text-[20px] font-bold text-[#0f172a]">
                We were fully remote
              </p>
              <p className="text-[#f15c2d] text-[20px] font-bold">
                before fully remote was trendy.
              </p>
            </div>

            <div className="flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="200">
              <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
                <Image
                  src="/images/team.png.png"
                  alt="Founders"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
          {/* Since then section */}
          <div
            className="mt-24 mb-8"
            data-aos="fade-up"
            data-aos-delay="1200"  // ⬅️ clearly after everything
            data-aos-duration="1000"
          >
            <h2 className="text-[40px] md:text-[56px] font-bold text-[#0f172a] tracking-tight">
              Since then...
            </h2>
          </div>


          {/* STATS SECTION — ALIGNED WITH LINE */}
          <div className="grid md:grid-cols-2 gap-14 items-center mt-20 relative z-10">

            {/* LEFT CONTENT (aligned with line) */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-[36px] md:text-[44px] font-bold text-[#0f172a] leading-tight">
                We've delivered over{" "}
                <span className="text-[#f15c2d]">1,200</span>
                <br />
                projects for over{" "}
                <span className="text-[#f15c2d]">500</span>
                <br />
                different companies...
              </h2>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="flex justify-center md:justify-end"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="relative w-full max-w-[600px] h-[400px]">
                <Image
                  src="/logos/office1.jpg"
                  alt="Team working"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}