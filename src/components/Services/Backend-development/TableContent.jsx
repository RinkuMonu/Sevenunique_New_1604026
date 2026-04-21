"use client";

import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function TableContent() {
    const [open, setOpen] = useState(false);

    const items = [
        "BACKEND DEVELOPMENT SERVICES",
        "Backend case studies",
        "OUR BACKEND DEVELOPMENT TEAMS",
        "About BairesDev",
        "How we work",
        "Flexible engagement models",
        "BACKEND SOLUTIONS",
        "BACKEND DEVELOPMENT CAPABILITIES",
        "BACKEND DEVELOPMENT PROCESS",
        "Client testimonials",
        "Backend FAQ",
        "Useful Backend resources",
    ];

    return (
        <div className="w-fit">

            {/* BUTTON */}
            <div
                onClick={() => setOpen(!open)}
                className="cursor-pointer flex items-center gap-3 border px-4 py-2 rounded-lg w-fit bg-gray-100 shadow-sm hover:bg-gray-200"
            >
                {open ? (
                    <HiOutlineX className="text-orange-500 text-xl" />
                ) : (
                    <HiOutlineMenu className="text-orange-500 text-xl" />
                )}
                <span className="font-medium text-black">Table of Contents</span>
            </div>

            {/* DROPDOWN PANEL */}
            {open && (
                <div className=" mt-2 w-[300px] bg-white border rounded-xl shadow-lg p-4 z-50">

                    <ul className="space-y-3 text-sm text-gray-600">
                        {items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 hover:text-black cursor-pointer">
                                <span className="mt-[6px] w-1.5 h-1.5 bg-gray-400 rounded-full hover:bg-gray-500"></span>
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    );
}