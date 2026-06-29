"use client";

import { useState, useRef, useEffect } from "react";

// ─── CONFIG ──────────────────────────────────────────
const BOT_NAME = "Nova";
const COMPANY_NAME = "SevenUnique";
const COMPANY_EMAIL = "hello@sevenunique.com";
const BRAND = "#FF5B22";
const DARK = "#1a1a2e";
// ─────────────────────────────────────────────────────

const QUICK_REPLIES = [
  "🚀 Our Services",
  "💰 Get a Quote",
  "🌐 Web Development",
  "📱 Mobile Apps",
  "📞 Contact Us",
];

// ── Icons ──────────────────────────────────────────────
const RobotIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="13" rx="3" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="8" cy="13" r="2" fill="currentColor"/>
    <circle cx="16" cy="13" r="2" fill="currentColor"/>
    <path d="M9 3h6M12 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M8 20v2M16 20v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MinusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// ── Helpers ────────────────────────────────────────────
const formatText = (text) =>
  text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");

const getTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// ── Component ──────────────────────────────────────────
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: `Hi there! 👋 I'm **Nova**, SevenUnique's AI assistant.\n\nI can answer questions about our services, help you get a quote, or connect you with our team. What can I help you with?`,
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [badge, setBadge] = useState(0);
  const [showQuick, setShowQuick] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const taRef = useRef(null);

  // Scroll to bottom
  useEffect(() => {
    if (open && !minimized) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, open, minimized]);

  // Focus on open
  useEffect(() => {
    if (open && !minimized) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setBadge(0);
    }
  }, [open, minimized]);

  // Show badge after 4s
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setBadge(1), 4000);
      return () => clearTimeout(t);
    }
  }, [open]);

  const resizeTextarea = () => {
    if (taRef.current) {
      taRef.current.style.height = "auto";
      taRef.current.style.height = Math.min(taRef.current.scrollHeight, 100) + "px";
    }
  };

  const send = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;

    setInput("");
    setShowQuick(false);
    if (taRef.current) taRef.current.style.height = "44px";

    const userMsg = { id: Date.now(), role: "user", content: msg, time: getTime() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "assistant", content: data.reply, time: getTime() },
      ]);

      if (!open || minimized) setBadge((n) => n + 1);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: `Sorry, I'm having trouble right now. Please email us at **${COMPANY_EMAIL}** and we'll get back to you shortly.`,
          time: getTime(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .su * { box-sizing: border-box; font-family: 'Inter', sans-serif; margin: 0; padding: 0; }

        /* Launcher */
        .su-btn {
          position: fixed; bottom: 28px; right: 28px; z-index: 99999;
          cursor: pointer; border: none; background: none; padding: 0;
        }
        .su-btn-inner {
          width: 62px; height: 62px; border-radius: 50%;
          background: ${BRAND};
          display: flex; align-items: center; justify-content: center; color: white;
          box-shadow: 0 6px 28px rgba(255,91,34,0.5);
          transition: transform 0.2s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s;
          position: relative;
        }
        .su-btn-inner:hover { transform: scale(1.1); box-shadow: 0 10px 36px rgba(255,91,34,0.6); }
        .su-badge {
          position: absolute; top: -3px; right: -3px;
          min-width: 20px; height: 20px;
          background: #ef4444; border-radius: 10px; border: 2px solid #fff;
          font-size: 10px; font-weight: 700; color: white;
          display: flex; align-items: center; justify-content: center; padding: 0 4px;
          animation: su-pop 0.3s cubic-bezier(.34,1.56,.64,1);
        }
        @keyframes su-pop { from { transform: scale(0); } to { transform: scale(1); } }

        /* Window */
        .su-win {
          position: fixed; bottom: 104px; right: 28px;
          width: 380px; max-height: 580px; z-index: 99998;
          display: flex; flex-direction: column;
          border-radius: 20px; overflow: hidden; background: #fff;
          box-shadow: 0 24px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.05);
          animation: su-rise 0.3s cubic-bezier(.34,1.56,.64,1);
        }
        @keyframes su-rise {
          from { opacity: 0; transform: translateY(16px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .su-win.mini { max-height: 70px; }

        /* Header */
        .su-head {
          background: ${DARK};
          padding: 14px 16px;
          display: flex; align-items: center; gap: 12px; flex-shrink: 0;
          position: relative;
        }
        .su-head::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, ${BRAND}, #ff9a6c, ${BRAND});
          background-size: 200%;
          animation: su-shine 2.5s linear infinite;
        }
        @keyframes su-shine { from { background-position: 200%; } to { background-position: -200%; } }

        .su-ava {
          width: 42px; height: 42px; border-radius: 50%;
          background: ${BRAND};
          display: flex; align-items: center; justify-content: center;
          color: white; flex-shrink: 0; position: relative;
        }
        .su-ava-ring {
          position: absolute; inset: -3px; border-radius: 50%;
          border: 2px solid ${BRAND}; opacity: 0.4;
          animation: su-pulse 2s infinite;
        }
        @keyframes su-pulse {
          0%,100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.14); opacity: 0; }
        }
        .su-head-info { flex: 1; }
        .su-head-name { color: #fff; font-weight: 700; font-size: 15px; }
        .su-head-status {
          color: rgba(255,255,255,0.55); font-size: 11.5px;
          display: flex; align-items: center; gap: 5px; margin-top: 2px;
        }
        .su-dot {
          width: 7px; height: 7px; background: #4ade80; border-radius: 50%;
          animation: su-blink 2s infinite;
        }
        @keyframes su-blink { 0%,100% { opacity:1; } 50% { opacity:0.3; } }

        .su-head-tag {
          display: inline-flex; align-items: center; gap: 3px;
          background: rgba(255,91,34,0.15); color: ${BRAND};
          border: 1px solid rgba(255,91,34,0.25);
          border-radius: 20px; padding: 2px 8px;
          font-size: 10px; font-weight: 600; letter-spacing: 0.3px;
          text-transform: uppercase; margin-top: 4px;
        }

        .su-head-btns { display: flex; gap: 4px; }
        .su-hbtn {
          width: 30px; height: 30px; border-radius: 8px;
          background: rgba(255,255,255,0.08); border: none;
          cursor: pointer; color: rgba(255,255,255,0.65);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s, color 0.15s;
        }
        .su-hbtn:hover { background: rgba(255,255,255,0.18); color: white; }

        /* Messages */
        .su-msgs {
          flex: 1; overflow-y: auto; padding: 16px 14px;
          background: #f7f8fc; display: flex; flex-direction: column;
          gap: 14px; scroll-behavior: smooth;
        }
        .su-msgs::-webkit-scrollbar { width: 4px; }
        .su-msgs::-webkit-scrollbar-thumb { background: #dde; border-radius: 4px; }

        .su-divider {
          display: flex; align-items: center; gap: 10px;
          color: #bbb; font-size: 11px;
        }
        .su-divider::before, .su-divider::after {
          content: ''; flex: 1; height: 1px; background: #e8e8f0;
        }

        .su-row { display: flex; align-items: flex-end; gap: 8px; }
        .su-row.u { flex-direction: row-reverse; }

        .su-msg-ava {
          width: 30px; height: 30px; border-radius: 50%;
          background: ${BRAND}; color: white;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }

        .su-col { display: flex; flex-direction: column; max-width: 76%; gap: 3px; }
        .su-col.u { align-items: flex-end; }

        .su-bub {
          padding: 11px 15px; border-radius: 18px;
          font-size: 13.5px; line-height: 1.55; word-break: break-word;
        }
        .su-bub.b {
          background: #fff; color: #1a1a2e;
          border-bottom-left-radius: 4px;
          box-shadow: 0 1px 6px rgba(0,0,0,0.07);
        }
        .su-bub.b strong { color: ${BRAND}; }
        .su-bub.u {
          background: ${BRAND}; color: white;
          border-bottom-right-radius: 4px;
        }
        .su-t { font-size: 10.5px; color: #c0c0d0; padding: 0 2px; }

        /* Typing */
        .su-typing {
          display: flex; gap: 5px; padding: 13px 16px;
          background: #fff; border-radius: 18px; border-bottom-left-radius: 4px;
          box-shadow: 0 1px 6px rgba(0,0,0,0.07); width: fit-content;
        }
        .su-td {
          width: 7px; height: 7px; border-radius: 50%;
          background: ${BRAND}; opacity: 0.6;
          animation: su-tdot 1.3s infinite;
        }
        .su-td:nth-child(2) { animation-delay: 0.18s; }
        .su-td:nth-child(3) { animation-delay: 0.36s; }
        @keyframes su-tdot {
          0%,60%,100% { transform: translateY(0); opacity: 0.6; }
          30% { transform: translateY(-7px); opacity: 1; }
        }

        /* Quick replies */
        .su-quick {
          padding: 10px 14px 12px; background: #f7f8fc;
          display: flex; flex-wrap: wrap; gap: 6px;
          border-top: 1px solid #eeeef6;
        }
        .su-qbtn {
          padding: 6px 12px; border-radius: 20px;
          border: 1.5px solid #e0dff8; background: white;
          color: ${DARK}; font-size: 12px; font-weight: 500;
          cursor: pointer; transition: all 0.15s; white-space: nowrap;
        }
        .su-qbtn:hover { border-color: ${BRAND}; background: ${BRAND}; color: white; }

        /* Input */
        .su-input {
          padding: 10px 12px; background: white;
          border-top: 1px solid #eeeef6;
          display: flex; align-items: flex-end; gap: 8px; flex-shrink: 0;
        }
        .su-ta {
          flex: 1; min-height: 44px; max-height: 100px;
          background: #f7f8fc; border: 1.5px solid #e8e8f2;
          border-radius: 12px; padding: 11px 14px;
          font-size: 13.5px; line-height: 1.45; resize: none;
          outline: none; color: #1a1a2e; font-family: 'Inter', sans-serif;
          transition: border-color 0.15s, background 0.15s;
        }
        .su-ta:focus { border-color: ${BRAND}; background: white; }
        .su-ta::placeholder { color: #b0b0c0; }

        .su-send {
          width: 44px; height: 44px; border-radius: 12px;
          background: ${BRAND}; border: none; cursor: pointer;
          color: white; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: opacity 0.15s, transform 0.15s;
          box-shadow: 0 4px 12px rgba(255,91,34,0.35);
        }
        .su-send:hover:not(:disabled) { opacity: 0.88; transform: scale(1.05); }
        .su-send:disabled { opacity: 0.35; cursor: not-allowed; box-shadow: none; }

        /* Footer */
        .su-foot {
          padding: 6px 0 7px; text-align: center;
          font-size: 10.5px; color: #c0c0d0; background: white;
          border-top: 1px solid #f2f2f8;
        }
        .su-foot a { color: ${BRAND}; text-decoration: none; font-weight: 500; }

        /* Mobile */
        @media (max-width: 440px) {
          .su-win { left: 10px; right: 10px; width: auto; bottom: 90px; }
          .su-btn { bottom: 18px; right: 18px; }
        }
      `}</style>

      <div className="su">
        {/* Launcher */}
        {!open && (
          <button
            className="su-btn"
            onClick={() => { setOpen(true); setMinimized(false); }}
            aria-label="Chat with Nova"
          >
            <div className="su-btn-inner">
              <RobotIcon size={26} />
              {badge > 0 && <span className="su-badge">{badge}</span>}
            </div>
          </button>
        )}

        {/* Chat Window */}
        {open && (
          <div className={`su-win ${minimized ? "mini" : ""}`}>

            {/* Header */}
            <div className="su-head">
              <div className="su-ava">
                <div className="su-ava-ring" />
                <RobotIcon size={20} />
              </div>
              <div className="su-head-info">
                <div className="su-head-name">{BOT_NAME} · {COMPANY_NAME}</div>
                {!minimized && (
                  <>
                    <div className="su-head-status">
                      <span className="su-dot" />
                      Online · AI-powered assistant
                    </div>
                    <div className="su-head-tag">✦ Powered by Claude AI</div>
                  </>
                )}
              </div>
              <div className="su-head-btns">
                <button className="su-hbtn" onClick={() => setMinimized(m => !m)} aria-label="Minimize">
                  <MinusIcon />
                </button>
                <button className="su-hbtn" onClick={() => setOpen(false)} aria-label="Close">
                  <XIcon />
                </button>
              </div>
            </div>

            {!minimized && (
              <>
                {/* Messages */}
                <div className="su-msgs">
                  <div className="su-divider">Today</div>

                  {messages.map((msg) => (
                    <div key={msg.id} className={`su-row ${msg.role === "user" ? "u" : ""}`}>
                      {msg.role === "assistant" && (
                        <div className="su-msg-ava"><RobotIcon size={15} /></div>
                      )}
                      <div className={`su-col ${msg.role === "user" ? "u" : ""}`}>
                        <div
                          className={`su-bub ${msg.role === "user" ? "u" : "b"}`}
                          dangerouslySetInnerHTML={{ __html: formatText(msg.content) }}
                        />
                        <span className="su-t">{msg.time}</span>
                      </div>
                    </div>
                  ))}

                  {loading && (
                    <div className="su-row">
                      <div className="su-msg-ava"><RobotIcon size={15} /></div>
                      <div className="su-typing">
                        <div className="su-td" /><div className="su-td" /><div className="su-td" />
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>

                {/* Quick Replies */}
                {showQuick && (
                  <div className="su-quick">
                    {QUICK_REPLIES.map((q) => (
                      <button key={q} className="su-qbtn" onClick={() => send(q)}>{q}</button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="su-input">
                  <textarea
                    ref={(el) => { inputRef.current = el; taRef.current = el; }}
                    className="su-ta"
                    placeholder="Ask me anything…"
                    value={input}
                    onChange={(e) => { setInput(e.target.value); resizeTextarea(); }}
                    onKeyDown={onKey}
                    rows={1}
                    disabled={loading}
                  />
                  <button
                    className="su-send"
                    onClick={() => send()}
                    disabled={!input.trim() || loading}
                    aria-label="Send"
                  >
                    <SendIcon />
                  </button>
                </div>

                <div className="su-foot">
                  AI may make mistakes ·{" "}
                  <a href={`mailto:${COMPANY_EMAIL}`}>Contact us directly</a>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}