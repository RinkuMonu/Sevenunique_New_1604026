"use client";

import { useState, useRef, useEffect } from "react";

// ─── CONFIG — edit these to match your business ────────────
const BOT_NAME = "Nova";
const COMPANY_NAME = "SevenUnique";
const COMPANY_EMAIL = "hello@sevenunique.com";
const COMPANY_PHONE = "+91-XXXXXXXXXX";
const BRAND_PRIMARY = "#FF5B22";   // SevenUnique orange (from logo)
const BRAND_DARK = "#1a1a2e";

const SERVICES = [
  "🌐 Web Development",
  "📱 Mobile App Development",
  "📈 Digital Marketing / SEO",
  "🎨 UI/UX Design",
  "🤖 AI & Chatbot Solutions",
  "✨ Something else",
];

const TIME_SLOTS = [
  "Today, 4:00 PM",
  "Today, 6:00 PM",
  "Tomorrow, 11:00 AM",
  "Tomorrow, 3:00 PM",
  "I'll pick another time",
];

// Where captured leads get sent. Point this at your backend / CRM / Sheet.
const LEAD_API_ENDPOINT = "/api/leads"; // e.g. a Next.js API route you create

// Where free-text "ask anything" questions get sent once the lead flow is done.
// Build this as a Next.js API route (see notes at the bottom of this file) that
// calls the Anthropic API with COMPANY_KNOWLEDGE as context and returns
// { reply: "..." }. If this endpoint isn't available, the bot falls back to a
// simple local FAQ matcher below so it still answers basic questions offline.
const CHAT_API_ENDPOINT = "/api/chat";

// ── Local knowledge base used as a fallback / quick-match for common
//    questions so the bot still answers something useful even before you
//    wire up CHAT_API_ENDPOINT. Edit freely.
const COMPANY_KNOWLEDGE = [
  {
    keywords: ["service", "services", "what do you do", "offer", "what can you build", "top service"],
    answer:
      `We offer a wide range of services:\n\n**Top Services:**\n• AI Development\n• Web Development\n• Mobile App Development (Android & iOS)\n• Back-end Development\n• Front-end Development\n• Machine Learning\n• CMS Development\n• Cryptocurrency & Blockchain\n• QA Testing & Automation\n• UX/UI Design\n• eCommerce Development\n• SaaS Development\n• Data Engineering\n• Business Intelligence\n\n**Enterprise Services:**\n• Big Data, Cloud Applications, CRM Systems\n• Cybersecurity, DevOps, ERP Development\n• Backup Solutions, Digital Transformation\n\n**Engagement Models:**\n• Staff Augmentation, Dedicated Teams, Software Outsourcing\n\nWould you like to know more about any specific service?`,
  },
  {
    keywords: ["technology", "technologies", "tech stack", "framework", "language", "tools", "tech"],
    answer:
      `We work with **100+ technologies** across all major stacks:\n\n**Frontend:** React, Angular, Vue.js, Next.js, TypeScript, JavaScript\n**Backend:** Node.js, Python, Java, PHP, Django, Spring Boot, Ruby, Golang, .NET\n**Mobile:** Android, iOS, Swift, Kotlin, React Native, Flutter, Xamarin\n**Cloud:** AWS, Google Cloud, Microsoft Azure\n**DevOps:** Docker, Kubernetes, Terraform, GitHub Actions, Linux\n**Databases:** MongoDB, PostgreSQL, Redis\n**AI/Data:** TensorFlow, Machine Learning, Power BI, Pandas\n**Other:** Blockchain, Shopify, Salesforce, GraphQL, Cardano, C#, C++\n\nNeed experts in a specific technology? Our team can help!`,
  },
  {
    keywords: ["industry", "industries", "sector", "domain", "which industry", "field"],
    answer:
      `We have delivered **3500+ projects across 130+ sectors** including:\n\n**General Industries:**\nAgriculture, Automotive, Aviation, Banking, Construction, Education, Entertainment, Finance, Healthcare, Insurance, Martech, Oil and Gas, Real Estate, Retail, Startups, Supply Chain, Telecommunications, Travel and Hospitality\n\n**Fintech Products:**\n• AEPS Software\n• BBPS Software\n• DMT Software\n• Recharge Software\n• UTI / Pancard Software\n• Travel Software\n\nWe have experience in your industry too! Want to discuss your project?`,
  },
  {
    keywords: ["price", "pricing", "cost", "quote", "charges", "how much", "budget"],
    answer:
      `Pricing depends on project scope (features, timeline, complexity), so our team puts together a **custom quote** after a short discovery call. Want me to schedule one for you?`,
  },
  {
    keywords: ["contact", "email", "phone", "number", "reach", "call us"],
    answer: `You can reach us at **hello@sevenunique.com** or call **+91-8741886688**. Our team is available Monday–Saturday during business hours. I can also connect you directly — just share your details!`,
  },
  {
    keywords: ["location", "address", "office", "where are you", "based"],
    answer: `We're a global fintech & IT solutions company. For our exact office address, please check the Contact page or email **hello@sevenunique.com**.`,
  },
  {
    keywords: ["hour", "timing", "open", "available", "support hours", "working hours"],
    answer: `Our team is available **Monday–Saturday** during business hours (IST). Outside that, leave your details and we'll follow up on the next business day.`,
  },
  {
    keywords: ["who are you", "about", "what is sevenunique", "company info", "tell me about"],
    answer: `**SevenUnique Tech Solutions Pvt. Ltd.** is a fintech & IT company helping businesses grow with modern digital solutions. Since 2024, we've delivered **3500+ projects** across **130+ sectors**, working with companies from startups to Fortune 500 giants.\n\nWe specialise in AI, Web & Mobile Development, Digital Payments, and Enterprise Solutions.`,
  },
  {
    keywords: ["ai development", "artificial intelligence", "machine learning", "ml"],
    answer: `Our **AI & Machine Learning** services include:\n• Custom AI model development\n• Machine Learning solutions\n• Natural Language Processing (NLP)\n• Computer Vision\n• AI Chatbots & Virtual Assistants\n• Data Engineering & Business Intelligence\n• TensorFlow, Python, and cloud AI services\n\nWant to discuss your AI project? Our experts are ready!`,
  },
  {
    keywords: ["web development", "website", "web app"],
    answer: `Our **Web Development** services include:\n• Custom Website & Web App Development\n• Front-end (React, Next.js, Vue.js, Angular)\n• Back-end (Node.js, Python, Java, PHP)\n• eCommerce Development\n• CMS Development\n• SaaS Development\n• API Development & Integration\n\nWe build scalable, fast, and modern web solutions. Want a quote?`,
  },
  {
    keywords: ["mobile app", "android", "ios", "app development", "flutter", "react native"],
    answer: `Our **Mobile App Development** services include:\n• Android App Development (Kotlin, Java)\n• iOS App Development (Swift)\n• Cross-platform apps (React Native, Flutter)\n• Xamarin development\n\nWe've delivered hundreds of mobile apps across industries. Shall we discuss yours?`,
  },
  {
    keywords: ["blockchain", "cryptocurrency", "crypto", "web3"],
    answer: `Our **Blockchain & Cryptocurrency** services include:\n• Smart Contract Development\n• DeFi (Decentralised Finance) apps\n• Cryptocurrency Exchange platforms\n• NFT Marketplace Development\n• Cardano, Ethereum-based solutions\n\nInterested? Let's schedule a call with our blockchain team!`,
  },
  {
    keywords: ["career", "job", "hiring", "vacancy", "join", "work with you"],
    answer: `We're always looking for great talent! Check our **Job Opportunities** page or reach out to us at **hello@sevenunique.com**. We also have a **Talent Referral** program and **Our Circles Program** for community engagement.`,
  },
];


function localAnswer(text) {
  const lower = text.toLowerCase();
  for (const entry of COMPANY_KNOWLEDGE) {
    if (entry.keywords.some((k) => lower.includes(k))) return entry.answer;
  }
  return null;
}
// ─────────────────────────────────────────────────────────

const now = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const greetingMessage = () => ({
  id: 1,
  role: "assistant",
  content: `Hi! 👋 I'm **${BOT_NAME}**, ${COMPANY_NAME}'s assistant.\n\nLet's get you connected with our team. First — what's your name?`,
  time: now(),
});

// ── Icons ──
const RobotIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="13" rx="3" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <circle cx="8" cy="13" r="2" fill="currentColor" />
    <circle cx="16" cy="13" r="2" fill="currentColor" />
    <path d="M9 3h6M12 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 20v2M16 20v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
  </svg>
);

const TrashIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Format markdown-lite ──
const formatText = (text) =>
  text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState([greetingMessage()]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [badge, setBadge] = useState(0);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // ── Lead-capture flow state ──
  // step: ASK_NAME -> ASK_MOBILE -> ASK_SERVICE -> ASK_TIME -> CHAT (free Q&A)
  const [step, setStep] = useState("ASK_NAME");
  const [lead, setLead] = useState({ name: "", mobile: "", service: "", time: "" });
  const [optionSet, setOptionSet] = useState(null); // { type: 'service'|'time', options: [...] }

  // Input is only locked while we're waiting on a button click (service/time pick).
  // Once the lead flow finishes we move to step "CHAT" and re-enable typing.
  const inputLocked = optionSet !== null;
  const isChatMode = step === "CHAT";

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (open && !minimized) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, optionSet, open, minimized]);

  useEffect(() => {
    if (open && !minimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setBadge(0);
    }
  }, [open, minimized]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setBadge(1), 4000);
      return () => clearTimeout(t);
    }
  }, [open]);

  const addBotMessage = (content, opts) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), role: "assistant", content, time: now() },
    ]);
    if (opts) setOptionSet(opts);
  };

  const addUserMessage = (content) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), role: "user", content, time: now() },
    ]);
  };

  const botSay = (content, opts, delay = 600) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      addBotMessage(content, opts);
      if (!open || minimized) setBadge((n) => n + 1);
    }, delay);
  };

  // ── Clear chat: resets the whole flow back to the start ──
  const clearChat = () => {
    setMessages([greetingMessage()]);
    setStep("ASK_NAME");
    setLead({ name: "", mobile: "", service: "", time: "" });
    setOptionSet(null);
    setInput("");
    setShowClearConfirm(false);
    if (textareaRef.current) textareaRef.current.style.height = "44px";
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = Math.min(ta.scrollHeight, 100) + "px";
    }
  };

  const isValidMobile = (v) => {
    const digits = v.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 13;
  };

  const submitLead = (finalLead) => {
    console.log("LEAD CAPTURED:", finalLead);
    fetch(LEAD_API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalLead),
    }).catch((err) => console.error("Lead submission failed:", err));
  };

  // ── Ask the local KB first, then the backend for questions KB can't answer ──
  const answerFreeText = async (question) => {
    // Try local knowledge base FIRST — it has comprehensive services/technologies data
    const local = localAnswer(question);
    if (local) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        addBotMessage(local);
      }, 500);
      return;
    }

    // No local match — ask the backend AI
    setLoading(true);
    try {
      const res = await fetch(CHAT_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, lead }),
      });
      if (!res.ok) throw new Error("Chat API not available");
      const data = await res.json();
      setLoading(false);
      addBotMessage(
        data.reply || "Thanks for your question — our team will follow up shortly!"
      );
    } catch (err) {
      // Backend not available — give a helpful fallback
      setLoading(false);
      addBotMessage(
        `Thanks for asking! Our team will follow up with details. You can also reach us directly at **${COMPANY_EMAIL}** or call **+91-8741886688**.`
      );
    }
    if (!open || minimized) setBadge((n) => n + 1);
  };

  // ── Option button click (service / time) ──
  const pickOption = (value) => {
    if (!optionSet) return;
    addUserMessage(value);
    const type = optionSet.type;
    setOptionSet(null);

    if (type === "service") {
      const updated = { ...lead, service: value };
      setLead(updated);
      setStep("ASK_TIME");
      botSay(`Great choice. When's a good time for a quick call about ${value}?`, {
        type: "time",
        options: TIME_SLOTS,
      });
      return;
    }

    if (type === "time") {
      const finalLead = { ...lead, time: value };
      setLead(finalLead);

      if (value === "I'll pick another time") {
        botSay(
          `No problem! We've noted your interest in **${finalLead.service}**. Our team will call **${finalLead.mobile}** to find a time that works.\n\nMeanwhile, feel free to ask me anything about ${COMPANY_NAME}! 💬`
        );
      } else {
        botSay(
          `✅ All set, ${firstName(finalLead.name)}! Here's a quick summary:\n` +
          `• Service: **${finalLead.service}**\n` +
          `• Call scheduled: **${value}**\n` +
          `• We'll call you on: **${finalLead.mobile}**\n\n` +
          `Our team will reach out at the scheduled time. In the meantime, ask me anything! 💬`
        );
      }
      submitLead(finalLead);
      // Unlock free-text "ask anything" mode
      setStep("CHAT");
    }
  };

  const firstName = (n) => (n || "").trim().split(" ")[0] || "there";

  // ── Free-text send (name + mobile steps, plus post-flow "ask anything") ──
  const send = (text) => {
    const msg = (text || input).trim();
    if (!msg || loading || inputLocked) return;

    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "44px";
    addUserMessage(msg);

    if (step === "ASK_NAME") {
      // If it looks like a question/keyword, answer it first without advancing the flow
      const localReplyName = localAnswer(msg);
      if (localReplyName) {
        botSay(localReplyName);
        return;
      }
      if (msg.length < 2) {
        botSay("Please enter your full name so I can address you correctly 🙂");
        return;
      }
      const updated = { ...lead, name: msg };
      setLead(updated);
      setStep("ASK_MOBILE");
      botSay(`Nice to meet you, ${firstName(msg)}! Could you share your mobile number so our team can reach you?`);
      return;
    }

    if (step === "ASK_MOBILE") {
      // If it looks like a question/keyword, answer it without consuming the mobile step
      const localReplyMobile = localAnswer(msg);
      if (localReplyMobile) {
        botSay(localReplyMobile);
        return;
      }
      if (!isValidMobile(msg)) {
        botSay("That doesn't look like a valid number. Please enter a 10-digit mobile number.");
        return;
      }
      const updated = { ...lead, mobile: msg };
      setLead(updated);
      setStep("ASK_SERVICE");
      botSay("Got it! Which service are you interested in?", {
        type: "service",
        options: SERVICES,
      });
      return;
    }

    if (step === "CHAT") {
      // Free Q&A mode — answer using backend or local knowledge base
      answerFreeText(msg);
      return;
    }

    // During lead-capture steps (ASK_SERVICE / future steps), if user types
    // a question instead of clicking a button, try to answer it from the
    // local knowledge base so they're never left hanging.
    const localReply = localAnswer(msg);
    if (localReply) {
      botSay(localReply);
      return;
    }

    // Fallback (shouldn't normally hit this)
    botSay("Thanks for the message! Our team will follow up with you directly.");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <style>{`
        .su-chat * {
          box-sizing: border-box;
          font-family: 'Inter', system-ui, sans-serif;
          margin: 0;
          padding: 0;
        }
        .su-launcher {
          position: fixed; bottom: 170px; right: 30px; z-index: 9999;
          cursor: pointer; border: none; background: none; padding: 0;
        }
        .su-launcher-ring {
          width: 60px; height: 60px; border-radius: 50%;
          background: ${BRAND_PRIMARY};
          display: flex; align-items: center; justify-content: center; color: white;
          box-shadow: 0 6px 28px rgba(255,91,34,0.45), 0 2px 8px rgba(255,91,34,0.2);
          transition: transform 0.2s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s;
          position: relative;
        }
        .su-launcher-ring:hover { transform: scale(1.1); box-shadow: 0 10px 36px rgba(255,91,34,0.5); }
        .su-badge {
          position: absolute; top: -3px; right: -3px; min-width: 20px; height: 20px;
          background: #ef4444; border-radius: 10px; border: 2px solid #fff;
          font-size: 10px; font-weight: 700; color: white;
          display: flex; align-items: center; justify-content: center; padding: 0 4px;
          animation: su-pop 0.3s cubic-bezier(.34,1.56,.64,1);
        }
        @keyframes su-pop { from { transform: scale(0); } to { transform: scale(1); } }
        .su-window {
          position: fixed; bottom: 24px; right: 30px; width: 390px; height: 600px; max-height: calc(100vh - 48px);
          z-index: 9998; display: flex; flex-direction: column; border-radius: 20px; overflow: hidden;
          background: #ffffff;
          box-shadow: 0 32px 80px rgba(0,0,0,0.16), 0 8px 24px rgba(255,91,34,0.08), 0 0 0 1px rgba(0,0,0,0.05);
          animation: su-rise 0.32s cubic-bezier(.34,1.56,.64,1);
        }
        @keyframes su-rise { from { opacity: 0; transform: translateY(16px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .su-window.su-mini { max-height: 70px; }
        .su-header {
          background: ${BRAND_DARK}; padding: 14px 16px; display: flex; align-items: center; gap: 12px;
          flex-shrink: 0; position: relative;
        }
        .su-header::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, ${BRAND_PRIMARY}, #ff8c5a, ${BRAND_PRIMARY});
          background-size: 200% 100%; animation: su-shimmer 2.5s linear infinite;
        }
        @keyframes su-shimmer { from { background-position: 200% center; } to { background-position: -200% center; } }
        .su-avatar {
          width: 42px; height: 42px; border-radius: 50%; background: ${BRAND_PRIMARY};
          display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0; position: relative;
        }
        .su-avatar-pulse {
          position: absolute; inset: -3px; border-radius: 50%; border: 2px solid ${BRAND_PRIMARY};
          opacity: 0.4; animation: su-pulse 2s infinite;
        }
        @keyframes su-pulse { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.12); opacity: 0; } }
        .su-header-text { flex: 1; overflow: hidden; }
        .su-header-name { color: #fff; font-weight: 700; font-size: 15px; letter-spacing: -0.2px; }
        .su-header-sub { color: rgba(255,255,255,0.55); font-size: 11.5px; display: flex; align-items: center; gap: 5px; margin-top: 1px; }
        .su-online-dot { width: 7px; height: 7px; background: #4ade80; border-radius: 50%; animation: su-blink 2s infinite; }
        @keyframes su-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        .su-header-btns { display: flex; gap: 4px; align-items: center; }
        .su-hbtn {
          width: 30px; height: 30px; border-radius: 8px; background: rgba(255,255,255,0.08); border: none;
          cursor: pointer; color: rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center;
          transition: background 0.15s, color 0.15s;
        }
        .su-hbtn:hover { background: rgba(255,255,255,0.16); color: white; }
        .su-hbtn.su-clear-btn:hover { background: rgba(239, 68, 68, 0.25); color: #ff6b6b; }
        .su-clear-confirm {
          position: absolute; top: 70px; right: 12px; background: #1a1a2e;
          border: 1px solid rgba(255,91,34,0.3); border-radius: 12px; padding: 10px 14px; z-index: 10;
          display: flex; align-items: center; gap: 10px; box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          animation: su-pop 0.2s cubic-bezier(.34,1.56,.64,1); white-space: nowrap;
        }
        .su-clear-confirm span { color: rgba(255,255,255,0.8); font-size: 12px; }
        .su-clear-confirm-btns { display: flex; gap: 6px; }
        .su-confirm-yes {
          padding: 4px 10px; border-radius: 6px; background: #ef4444; color: white; border: none;
          cursor: pointer; font-size: 12px; font-weight: 600; transition: opacity 0.15s;
        }
        .su-confirm-yes:hover { opacity: 0.85; }
        .su-confirm-no {
          padding: 4px 10px; border-radius: 6px; background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.7);
          border: none; cursor: pointer; font-size: 12px; font-weight: 500; transition: background 0.15s;
        }
        .su-confirm-no:hover { background: rgba(255,255,255,0.18); }
        .su-ai-badge {
          display: inline-flex; align-items: center; gap: 4px; background: rgba(255,91,34,0.1); color: ${BRAND_PRIMARY};
          border: 1px solid rgba(255,91,34,0.2); border-radius: 20px; padding: 2px 8px; font-size: 10px;
          font-weight: 600; letter-spacing: 0.3px; text-transform: uppercase; margin-top: 4px;
        }
        .su-messages {
          flex: 1; overflow-y: auto; padding: 16px 14px; background: #f7f8fc;
          display: flex; flex-direction: column; gap: 14px; scroll-behavior: smooth;
        }
        .su-messages::-webkit-scrollbar { width: 4px; }
        .su-messages::-webkit-scrollbar-thumb { background: #ddd; border-radius: 4px; }
        .su-date-divider { display: flex; align-items: center; gap: 10px; color: #bbb; font-size: 11px; }
        .su-date-divider::before, .su-date-divider::after { content: ''; flex: 1; height: 1px; background: #e8e8f0; }
        .su-row { display: flex; align-items: flex-end; gap: 8px; }
        .su-row.user { flex-direction: row-reverse; }
        .su-msg-avatar {
          width: 30px; height: 30px; border-radius: 50%; background: ${BRAND_PRIMARY}; color: white;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px;
        }
        .su-msg-col { display: flex; flex-direction: column; max-width: 76%; gap: 3px; }
        .su-msg-col.user { align-items: flex-end; }
        .su-bubble { padding: 11px 15px; border-radius: 18px; font-size: 13.5px; line-height: 1.55; word-break: break-word; }
        .su-bubble.bot { background: #fff; color: #1a1a2e; border-bottom-left-radius: 4px; box-shadow: 0 1px 6px rgba(0,0,0,0.07); }
        .su-bubble.user { background: ${BRAND_PRIMARY}; color: white; border-bottom-right-radius: 4px; }
        .su-bubble.bot strong { color: ${BRAND_PRIMARY}; }
        .su-time { font-size: 10.5px; color: #c0c0d0; padding: 0 2px; }
        .su-typing {
          display: flex; gap: 5px; padding: 13px 16px; background: #fff; border-radius: 18px;
          border-bottom-left-radius: 4px; box-shadow: 0 1px 6px rgba(0,0,0,0.07); width: fit-content; align-items: center;
        }
        .su-dot { width: 7px; height: 7px; border-radius: 50%; background: ${BRAND_PRIMARY}; opacity: 0.6; animation: su-bounce 1.3s infinite; }
        .su-dot:nth-child(2) { animation-delay: 0.18s; }
        .su-dot:nth-child(3) { animation-delay: 0.36s; }
        @keyframes su-bounce { 0%, 60%, 100% { transform: translateY(0); opacity: 0.6; } 30% { transform: translateY(-7px); opacity: 1; } }
        .su-quick {
          padding: 10px 14px 12px; background: #f7f8fc; display: flex; flex-wrap: wrap; gap: 6px; border-top: 1px solid #eeeef6;
        }
        .su-qbtn {
          padding: 7px 13px; border-radius: 20px; border: 1.5px solid ${BRAND_PRIMARY}; background: white;
          color: ${BRAND_PRIMARY}; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.15s; white-space: nowrap;
        }
        .su-qbtn:hover { background: ${BRAND_PRIMARY}; color: white; }
        .su-input-area {
          padding: 10px 12px; background: white; border-top: 1px solid #eeeef6;
          display: flex; align-items: flex-end; gap: 8px; flex-shrink: 0;
        }
        .su-textarea {
          flex: 1; min-height: 44px; max-height: 100px; background: #f7f8fc; border: 1.5px solid #e8e8f2;
          border-radius: 12px; padding: 11px 14px; font-size: 13.5px; line-height: 1.45; resize: none; outline: none;
          color: #1a1a2e; font-family: 'Inter', sans-serif; transition: border-color 0.15s, background 0.15s; overflow-y: auto;
        }
        .su-textarea:focus { border-color: ${BRAND_PRIMARY}; background: white; }
        .su-textarea::placeholder { color: #b0b0c0; }
        .su-textarea:disabled { background: #ececf2; color: #aaa; }
        .su-send {
          width: 44px; height: 44px; border-radius: 12px; background: ${BRAND_PRIMARY}; border: none; cursor: pointer;
          color: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: opacity 0.15s, transform 0.15s; box-shadow: 0 4px 12px rgba(255,91,34,0.3);
        }
        .su-send:hover:not(:disabled) { opacity: 0.88; transform: scale(1.05); }
        .su-send:disabled { opacity: 0.35; cursor: not-allowed; box-shadow: none; }
        .su-footer {
          padding: 6px 0 7px; text-align: center; font-size: 10.5px; color: #c0c0d0; background: white;
          border-top: 1px solid #f2f2f8; letter-spacing: 0.1px;
        }
        .su-footer a { color: ${BRAND_PRIMARY}; text-decoration: none; font-weight: 500; }
        @media (max-width: 440px) {
          .su-window { left: 10px; right: 10px; width: auto; bottom: 88px; }
          .su-launcher { bottom: 18px; right: 18px; }
        }
      `}</style>

      <div className="su-chat">
        {!open && (
          <button
            className="su-launcher"
            onClick={() => { setOpen(true); setMinimized(false); }}
            aria-label={`Open chat with ${BOT_NAME}`}
          >
            <div className="su-launcher-ring">
              <RobotIcon size={26} />
              {badge > 0 && <span className="su-badge">{badge}</span>}
            </div>
          </button>
        )}

        {open && (
          <div className={`su-window ${minimized ? "su-mini" : ""}`}>
            <div className="su-header">
              <div className="su-avatar">
                <div className="su-avatar-pulse" />
                <RobotIcon size={20} />
              </div>

              <div className="su-header-text">
                <div className="su-header-name">{BOT_NAME} · {COMPANY_NAME}</div>
                {!minimized && (
                  <div className="su-header-sub">
                    <span className="su-online-dot" />
                    Online · {isChatMode ? "Ask me anything" : "Lead assistant"}
                  </div>
                )}
                {!minimized && (
                  <div className="su-ai-badge">
                    <SparkleIcon /> {isChatMode ? "Ask anything" : "Book a call instantly"}
                  </div>
                )}
              </div>

              <div className="su-header-btns">
                {!minimized && (
                  <button
                    className="su-hbtn su-clear-btn"
                    onClick={() => setShowClearConfirm((v) => !v)}
                    aria-label="Clear chat"
                    title="Clear chat"
                  >
                    <TrashIcon />
                  </button>
                )}
                <button
                  className="su-hbtn"
                  onClick={() => { setMinimized((m) => !m); setShowClearConfirm(false); }}
                  aria-label={minimized ? "Expand" : "Minimize"}
                >
                  <ChevronDown />
                </button>
                <button
                  className="su-hbtn"
                  onClick={() => { setOpen(false); setShowClearConfirm(false); }}
                  aria-label="Close"
                >
                  <XIcon />
                </button>
              </div>

              {showClearConfirm && (
                <div className="su-clear-confirm">
                  <span>Clear all messages?</span>
                  <div className="su-clear-confirm-btns">
                    <button className="su-confirm-yes" onClick={clearChat}>Clear</button>
                    <button className="su-confirm-no" onClick={() => setShowClearConfirm(false)}>Cancel</button>
                  </div>
                </div>
              )}
            </div>

            {!minimized && (
              <>
                <div className="su-messages">
                  <div className="su-date-divider">Today</div>

                  {messages.map((msg) => (
                    <div key={msg.id} className={`su-row ${msg.role === "user" ? "user" : ""}`}>
                      {msg.role === "assistant" && (
                        <div className="su-msg-avatar"><RobotIcon size={16} /></div>
                      )}
                      <div className={`su-msg-col ${msg.role === "user" ? "user" : ""}`}>
                        <div
                          className={`su-bubble ${msg.role === "user" ? "user" : "bot"}`}
                          dangerouslySetInnerHTML={{ __html: formatText(msg.content) }}
                        />
                        <span className="su-time">{msg.time}</span>
                      </div>
                    </div>
                  ))}

                  {loading && (
                    <div className="su-row">
                      <div className="su-msg-avatar"><RobotIcon size={16} /></div>
                      <div className="su-typing">
                        <div className="su-dot" /><div className="su-dot" /><div className="su-dot" />
                      </div>
                    </div>
                  )}

                  <div ref={bottomRef} />
                </div>

                {optionSet && (
                  <div className="su-quick">
                    {optionSet.options.map((opt) => (
                      <button key={opt} className="su-qbtn" onClick={() => pickOption(opt)}>
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                <div className="su-input-area">
                  <textarea
                    ref={(el) => { inputRef.current = el; textareaRef.current = el; }}
                    className="su-textarea"
                    placeholder={
                      inputLocked
                        ? "Choose an option above..."
                        : isChatMode
                          ? "Ask anything..."
                          : "Type your reply..."
                    }
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={onKeyDown}
                    rows={1}
                    disabled={loading || inputLocked}
                  />
                  <button
                    className="su-send"
                    onClick={() => send()}
                    disabled={!input.trim() || loading || inputLocked}
                    aria-label="Send message"
                  >
                    <SendIcon />
                  </button>
                </div>

                <div className="su-footer">
                  We respect your privacy · <a href={`mailto:${COMPANY_EMAIL}`}>Contact us directly</a>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

/* ============================================================
   OPTIONAL: real AI answers instead of the local keyword matcher
   ============================================================
   Create app/api/chat/route.js with something like:

   import Anthropic from "@anthropic-ai/sdk";
   const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

   export async function POST(req) {
     const { question, lead } = await req.json();
     const msg = await anthropic.messages.create({
       model: "claude-sonnet-4-6",
       max_tokens: 400,
       system:
         "You are Nova, SevenUnique's website assistant. Answer questions " +
         "about SevenUnique Tech Solutions (fintech & IT: web dev, mobile " +
         "apps, digital marketing/SEO, UI/UX, AI & chatbot solutions) " +
         "briefly and helpfully. If you don't know something specific, " +
         "direct them to hello@sevenunique.com.",
       messages: [{ role: "user", content: question }],
     });
     const reply = msg.content.find((b) => b.type === "text")?.text || "";
     return Response.json({ reply });
   }

   Then set ANTHROPIC_API_KEY in your environment. The component above
   already calls CHAT_API_ENDPOINT and falls back to the local FAQ matcher
   automatically if this route doesn't exist yet, so it works either way.
*/