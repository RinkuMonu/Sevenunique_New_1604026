"use client";

import { useEffect, useState } from "react";
import { Cookie, ShieldCheck, X } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setTimeout(() => {
        setShow(true);
      }, 800);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

 if (!show) return null;

return (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* TEXT */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <Cookie size={20} className="text-white flex-shrink-0" />

          <p className="text-white text-sm md:text-base font-medium">
            By clicking{" "}
            <span className="font-semibold">"Accept"</span> or continuing to use
            our site, you agree to our website's{" "}
            <a
              href="/privacy-policy"
              className="underline font-semibold hover:text-orange-400 transition"
            >
              Privacy Policy
            </a>.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecline}
            className="px-5 py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/10 transition"
          >
            Decline
          </button>

          <button
            onClick={handleAccept}
            className="px-6 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </div>
);
}