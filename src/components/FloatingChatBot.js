"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronUp ,
  Phone,
  X,
  Send,
  User,
  Briefcase,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  const [step, setStep] = useState(1);

  const [userData, setUserData] = useState({
    name: "",
    mobile: "",
    service: "",
  });

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Welcome to Sevenunique.\nBefore we connect you with our team, let's get a few details.",
    },
    {
      type: "bot",
      text: "What's your good name?",
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    "Website Development",
    "Mobile App Development",
    "AI Solutions",
    "ERP / CRM Software",
    "Fintech Solutions",
    "E-Commerce Development",
  ];

  const addMessage = (type, text) => {
    setMessages((prev) => [...prev, { type, text }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const value = input.trim();

    addMessage("user", value);

    // STEP 1 → NAME
    if (step === 1) {
      setUserData((prev) => ({
        ...prev,
        name: value,
      }));

      setTimeout(() => {
        addMessage(
          "bot",
          `Nice to meet you ${value} 👋\nPlease enter your mobile number.`
        );
      }, 500);

      setStep(2);
    }

    // STEP 2 → MOBILE
    else if (step === 2) {
      if (!/^[0-9]{10}$/.test(value)) {
        setTimeout(() => {
          addMessage(
            "bot",
            "Please enter a valid 10-digit mobile number."
          );
        }, 400);

        setInput("");
        return;
      }

      setUserData((prev) => ({
        ...prev,
        mobile: value,
      }));

      setTimeout(() => {
        addMessage(
          "bot",
          "Perfect ✅\nWhat service are you looking for?"
        );
      }, 500);

      setStep(3);
    }

    // STEP 3 → SERVICE
    else if (step === 3) {
      setUserData((prev) => ({
        ...prev,
        service: value,
      }));

      setTimeout(() => {
        addMessage(
          "bot",
          `Awesome 🚀\nOur ${value} team will contact you shortly.\n\nYou can also schedule a consultation call directly below.`
        );
      }, 500);

      setStep(4);
    }

    setInput("");
  };

  const handleServiceSelect = (service) => {
    addMessage("user", service);

    setUserData((prev) => ({
      ...prev,
      service,
    }));

    setTimeout(() => {
      addMessage(
        "bot",
        `Great choice ✅\nOur ${service} experts will connect with you shortly.\n\nYou can now schedule a consultation call.`
      );
    }, 500);

    setStep(4);
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-[999] w-14 h-14 rounded-full bg-[#f4622a] hover:bg-[#df4e1f] shadow-[0_15px_40px_rgba(244,98,42,0.35)] text-white flex items-center justify-center transition-all duration-300"
      >
      {open ? <X size={22} /> : <ChevronUp size={22} />}
      </button>

      {/* CHATBOX */}
      <div
        className={`fixed bottom-24 right-5 z-[999] w-[360px] max-w-[calc(100vw-20px)] bg-white rounded-[30px] shadow-[0_25px_80px_rgba(0,0,0,0.12)] border border-[#efefef] overflow-hidden transition-all duration-500 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* HEADER */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#111] to-[#1f1f1f] py-4 px-3">
          <div className="absolute top-0 right-0 w-28 h-28 bg-[#f4622a]/10 rounded-full blur-3xl" />

          <div className="relative flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-1">
              <img
                src="/sevenLogo.png"
                alt="Sevenunique"
                className="w-full h-full object-contain rounded-full "
              />
            </div>

            <div>
              <h3 className="text-white font-semibold text-[15px]">
                Sevenunique Support
              </h3>

              <p className="text-white/60 text-[12px] mt-0.5">
                Typically replies instantly
              </p>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="h-[340px] overflow-y-auto bg-[#fafafa] px-2 py-2">
          {/* SERVICE BUTTONS */}
          {step === 3 && (
            <div className="mb-5">
              <p className="text-[12px] font-semibold text-[#111] mb-3">
                Select Service
              </p>

              <div className="flex flex-wrap gap-2">
                {services.map((service, i) => (
                  <button
                    key={i}
                    onClick={() => handleServiceSelect(service)}
                    className="px-3 py-2 rounded-full bg-white border border-[#ececec] hover:border-[#f4622a] hover:bg-[#fff4ef] text-[11px] font-medium text-[#111] transition-all duration-300"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* MESSAGES */}
          <div className="space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-3xl text-[13px] leading-6 whitespace-pre-line ${
                    msg.type === "user"
                      ? "bg-[#f4622a] text-white rounded-br-md"
                      : "bg-white border border-[#ececec] text-[#111] rounded-bl-md shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* USER INFO CARD */}
          {step >= 2 && (
            <div className="mt-5 bg-white border border-[#ececec] rounded-2xl p-4">
              <h4 className="text-[13px] font-semibold text-[#111] mb-3">
                Your Details
              </h4>

              <div className="space-y-3">
                {userData.name && (
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#fff4ef] flex items-center justify-center">
                      <User size={16} className="text-[#f4622a]" />
                    </div>

                    <div>
                      <p className="text-[11px] text-gray-500">Name</p>
                      <p className="text-[13px] font-medium text-[#111]">
                        {userData.name}
                      </p>
                    </div>
                  </div>
                )}

                {userData.mobile && (
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#fff4ef] flex items-center justify-center">
                      <Phone size={16} className="text-[#f4622a]" />
                    </div>

                    <div>
                      <p className="text-[11px] text-gray-500">
                        Mobile Number
                      </p>
                      <p className="text-[13px] font-medium text-[#111]">
                        {userData.mobile}
                      </p>
                    </div>
                  </div>
                )}

                {userData.service && (
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#fff4ef] flex items-center justify-center">
                      <Briefcase
                        size={16}
                        className="text-[#f4622a]"
                      />
                    </div>

                    <div>
                      <p className="text-[11px] text-gray-500">
                        Selected Service
                      </p>
                      <p className="text-[13px] font-medium text-[#111]">
                        {userData.service}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* SCHEDULE CALL */}
          {step === 4 && (
            <div className="mt-5 bg-gradient-to-br from-[#fff4ef] to-[#fffaf8] border border-[#ffd8ca] rounded-[24px] p-5">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#f4622a] text-white flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <h4 className="text-[15px] font-semibold text-[#111] mb-1">
                    Consultation Ready
                  </h4>

                  <p className="text-[12px] text-[#555] leading-6 mb-4">
                    Our expert team will understand your requirements and guide you with the best solution.
                  </p>

                  <Link
                    href="/schedule-a-call-page"
                    className="inline-flex items-center gap-2 bg-[#f4622a] hover:bg-[#df4e1f] text-white px-4 py-3 rounded-xl text-[13px] font-medium transition-all duration-300"
                  >
                    <CalendarDays size={16} />
                    Schedule a Call
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* INPUT */}
        {step !== 4 && (
          <div className="p-2 border-t border-[#ececec] bg-white">
            <div className="flex items-center gap-2">
              <input
                type={step === 2 ? "number" : "text"}
                placeholder={
                  step === 1
                    ? "Enter your name..."
                    : step === 2
                    ? "Enter mobile number..."
                    : "Type here..."
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSend()
                }
                className="flex-1 h-12 px-4 rounded-2xl border border-[#e5e5e5] bg-[#fafafa] text-[#111] text-[13px] outline-none focus:border-[#f4622a]"
              />

              <button
                onClick={handleSend}
                className="w-12 h-12 rounded-2xl bg-[#f4622a] hover:bg-[#df4e1f] text-white flex items-center justify-center transition-all duration-300"
              >
                <Send size={17} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}