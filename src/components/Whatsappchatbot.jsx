"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppChat() {
  const whatsappNumber = "919660339514"; // Add country code

  return (
    <div className="fixed bottom-22 right-5 z-50 group">
      <span className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        Chat with us
      </span>

      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi%20Team,%20I%20am%20interested%20in%20your%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}