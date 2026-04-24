"use client";
import React from "react";
import Link from "next/link";

export default function CTASection({ data }) {
    const displayName = data?.title
        ?.replace(/(development services|app development services|services)/gi, "")
        .trim();

    return (
        <section
            className="relative min-h-[220px] flex items-center px-10 md:px-16 py-14 bg-gradient-to-r from-black to-[#757575]"
        >
            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10 max-w-xl">
                <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-8">
                    See why top tech brands rely on us for {displayName}
                </h2>

                <Link href="/schedule-a-call-page">
                    <button
                        className="mt-8 inline-flex items-center justify-center bg-[#19b28c] hover:bg-[#149978] text-white font-semibold text-[14px] sm:text-[15px] px-6 sm:px-7 py-3 rounded-lg transition-colors duration-150"
                        onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow =
                            "0 0 20px rgba(25,178,140,0.5)")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.boxShadow = "none")
                        }
                    >
                        Let's Discuss Your {displayName} Project
                        <span>→</span>
                    </button>
                </Link>
            </div>
        </section>
    );
}