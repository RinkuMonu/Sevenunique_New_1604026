"use client";

import { useEffect, useState } from "react";
import { Cookie, ShieldCheck, X } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

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
    <>
      {/* BACKDROP */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="relative w-full max-w-[620px] bg-white rounded-[36px] border border-gray-200 shadow-[0_20px_80px_rgba(0,0,0,0.12)] overflow-hidden animate-in zoom-in duration-300">
          
          {/* TOP DESIGN */}
          <div className="relative h-[170px] bg-gradient-to-br from-[#111] via-[#1d1d1d] to-[#2c2c2c] overflow-hidden">
            
            {/* CLOSE */}
            <button
              onClick={handleDecline}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white"
            >
              <X size={18} />
            </button>

            {/* CIRCLE */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute bottom-[-40px] right-[-20px] w-44 h-44 bg-white/10 rounded-full" />

            {/* ICON */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <div className="w-20 h-20 rounded-[26px] bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4">
                <Cookie size={36} className="text-white" />
              </div>

              <h2 className="text-white text-[32px] font-semibold">
                Cookie Preferences
              </h2>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-8 md:p-10">
            <p className="text-gray-500 leading-8 text-[16px] text-center max-w-[500px] mx-auto">
              We use cookies to personalize your experience,
              analyze website traffic and improve our services.
              By clicking <span className="font-medium text-black">Accept</span>,
              you agree to our cookie policy.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="rounded-2xl border border-gray-200 p-5 bg-[#fafafa]">
                <ShieldCheck
                  size={24}
                  className="text-black mb-3"
                />

                <h3 className="font-semibold text-[#111]">
                  Secure Experience
                </h3>

                <p className="text-sm text-gray-500 leading-6 mt-2">
                  Your data remains protected and encrypted.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5 bg-[#fafafa]">
                <Cookie
                  size={24}
                  className="text-black mb-3"
                />

                <h3 className="font-semibold text-[#111]">
                  Better Performance
                </h3>

                <p className="text-sm text-gray-500 leading-6 mt-2">
                  Cookies help us optimize website performance.
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={handleDecline}
                className="flex-1 h-[58px] rounded-2xl border border-gray-300 text-black font-medium hover:bg-gray-100 transition"
              >
                Decline
              </button>

              <button
                onClick={handleAccept}
                className="flex-1 h-[58px] rounded-2xl bg-black text-white font-medium hover:bg-gray-900 transition shadow-lg"
              >
                Accept Cookies
              </button>
            </div>

            {/* FOOTER */}
            <p className="text-center text-sm text-gray-400 mt-6">
              You can change your preferences anytime.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}