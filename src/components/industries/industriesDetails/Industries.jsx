// components/Industries.jsx

import Image from "next/image";
import Link from "next/link";

const cards = [
    {
        type: "large",
        img: "https://assets.bairesdev.com/image/upload/v1/www/core/kinesso_1126045bae.svg",
        title: "Kinesso",
    },
    {
        img: "https://assets.bairesdev.com/image/upload/v1/www/core/univision_3f375eaf13.svg",
    },
    {
        img: "https://assets.bairesdev.com/image/upload/v1/www/core/ap_c4189f7945.svg",
        label: "Entertainment",
    },
    {
        img: "https://assets.bairesdev.com/image/upload/v1/www/core/rga_b558c3dfe0.svg",
    },
    {
        img: "https://assets.bairesdev.com/image/upload/v1/www/core/iwave_5932d0fb62.svg",
    },
];

export default function Industries() {
    return (
        <section className="bg-[#f6f7f9] py-[80px]">
            {/* Responsive UI update: compact padding, header, and cards for mobile. */}
            <div className="mx-4 max-w-[1200px] rounded-2xl bg-white p-5 shadow-lg sm:mx-6 sm:p-8 lg:mx-auto lg:p-10">

                {/* HEADER */}
                <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-12 lg:flex-row lg:items-end">
                    <h2 className="max-w-[600px] text-3xl font-semibold leading-tight text-[#1f2933] sm:text-4xl lg:text-[42px] lg:leading-[52px]">
                        Beyond agriculture: 100+ industries covered.
                    </h2>

                 <Link
  href="/industries"
  className="text-[#f45d2d] border-b-2 border-[#f45d2d] pb-1 flex items-center gap-2 hover:gap-3 transition w-fit"
>
  View all industries →
</Link>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

                    {/* LARGE CARD */}
                    <div className="group flex min-h-56 flex-col justify-between rounded-xl bg-black p-6 sm:col-span-2 sm:row-span-2 lg:min-h-0">

                        <Image
                            src={cards[0].img}
                            alt=""
                            width={140}
                            height={60}
                            className="object-contain brightness-0 invert"
                        />

                        <div className="flex justify-end">
                            <span className="text-white border-b border-white pb-1 flex items-center gap-2 text-sm">
                                Read the full case study →
                            </span>
                        </div>
                    </div>

                    {/* SMALL CARDS */}
                    {cards.slice(1).map((card, i) => (
                        <div
                            key={i}
                            className="relative bg-[#f3f4f6] rounded-xl p-5 h-[140px] flex flex-col justify-between border group hover:bg-black transition overflow-hidden"
                        >

                            {/* TOP */}
                            <div className="flex justify-between items-center">
                                <Image
                                    src={card.img}
                                    alt=""
                                    width={120}
                                    height={50}
                                    className="object-contain grayscale group-hover:brightness-0 group-hover:invert transition"
                                />

                                <span className="text-[#f45d2d]">→</span>
                            </div>

                            {/* DEFAULT LABEL */}
                            {card.label && (
                                <p className="text-gray-500 group-hover:text-white text-sm font-medium transition">
                                    {card.label}
                                </p>
                            )}

                            {/* HOVER TEXT */}
                            <div className="absolute bottom-4 left-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                                <p className="text-white text-sm font-medium flex items-center gap-2">
                                    Read case study →
                                </p>
                            </div>

                        </div>
                    ))}

                </div>



            </div>
        </section>
    );
}
