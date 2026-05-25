"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  X,
  Send,
} from "lucide-react";

import Link from "next/link";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Welcome to Sevenunique.\nHow can we help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      q: "Website",
      a: "We build modern business websites using React & Next.js.",
    },

    {
      q: "Mobile App",
      a: "We develop Android & iOS applications with secure backend systems.",
    },

    {
      q: "AI Solutions",
      a: "We provide AI chatbots, automation tools & OpenAI integrations.",
    },

    {
      q: "ERP Software",
      a: "We build ERP, CRM, HRMS & School Management software.",
    },
  ];

  const handleFAQ = (item) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: item.q,
      },

      {
        type: "bot",
        text: item.a,
      },
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userMsg,
      },
    ]);

    setInput("");

    setTimeout(() => {
      let reply =
        "Thank you for contacting Sevenunique.";

      const msg = userMsg.toLowerCase();

      if (msg.includes("website")) {
        reply =
          "We create scalable websites for startups and enterprises.";
      }

      else if (msg.includes("app")) {
        reply =
          "We build Android & iOS applications with modern UI.";
      }

      else if (msg.includes("ai")) {
        reply =
          "We provide AI chatbots & automation systems.";
      }

      else if (msg.includes("price")) {
        reply =
          "Pricing depends on project requirements. Schedule a consultation call.";
      }

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: reply,
        },
      ]);
    }, 600);
  };

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-[999] w-12 h-12 rounded-full bg-[#f4622a] hover:bg-[#df4e1f] shadow-xl text-white flex items-center justify-center transition-all duration-300"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* CHATBOX */}
      <div
        className={`fixed bottom-20 right-4 z-[999] w-[300px] max-w-[calc(100vw-20px)] bg-white rounded-[22px] shadow-2xl border border-[#ececec] overflow-hidden transition-all duration-500 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* HEADER */}
        <div className="bg-[#111] text-white p-3">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 bg-white flex items-center justify-center">
  <img
    src="/sevenLogo.png"
    alt="Sevenunique"
    className="w-full h-full object-cover"
  />
</div>

            <div>
              <h3 className="font-semibold text-[14px]">
                Sevenunique Support
              </h3>

              <p className="text-white/60 text-[11px]">
                Online
              </p>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="h-[330px] overflow-y-auto p-3 bg-[#fafafa]">

          {/* FAQ */}
          <div className="mb-4">

            <p className="text-[12px] font-semibold text-[#111] mb-2">
              Quick Questions
            </p>

            <div className="flex flex-wrap gap-2">

              {faqs.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleFAQ(item)}
                  className="px-3 py-1.5 rounded-full bg-white border border-[#e7e7e7] text-[11px] font-medium text-[#111] hover:bg-[#f4622a] hover:text-white transition-all duration-300"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>

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
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-[12px] leading-6 whitespace-pre-line ${
                    msg.type === "user"
                      ? "bg-[#f4622a] text-white rounded-br-sm"
                      : "bg-white text-[#111] border border-[#ececec] rounded-bl-sm font-medium"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-4 bg-[#fff4ef] border border-[#ffd9cc] rounded-2xl p-3">

            <h4 className="text-[13px] font-semibold text-[#111] mb-1">
              Need Consultation?
            </h4>

            <p className="text-[11px] text-[#555] leading-5 mb-3">
              Talk directly with our team.
            </p>

            <Link
              href="/schedule-a-call-page"
              className="w-full flex items-center justify-center gap-2 bg-[#f4622a] hover:bg-[#df4e1f] text-white py-2.5 rounded-xl text-[12px] font-medium transition-all duration-300"
            >
              <Phone size={14} />
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* INPUT */}
        <div className="p-3 border-t border-[#ececec] bg-white">

          <div className="flex items-center gap-2">

            <input
              type="text"
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }
              className="flex-1 h-10 px-3 rounded-xl border border-[#dcdcdc] bg-white text-[#111] text-[12px] placeholder:text-[#888] outline-none focus:border-[#f4622a]"
            />

            <button
              onClick={handleSend}
              className="w-10 h-10 rounded-xl bg-[#f4622a] hover:bg-[#df4e1f] text-white flex items-center justify-center transition-all duration-300"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}