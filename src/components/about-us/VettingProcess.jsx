"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
    {
        id: 1,
        count: 6,
        label: "Job application",
        desc: "We receive more than 2.5M+ applications from talented developers each year.",
    },
    {
        id: 2,
        count: 5,
        label: "Coding test",
        desc: "Candidates complete a timed algorithmic challenge to demonstrate core programming ability.",
    },
    {
        id: 3,
        count: 4,
        label: "Technical interview",
        desc: "A senior engineer assesses real-world problem-solving and system design skills.",
    },
    {
        id: 4,
        count: 3,
        label: "HR interview",
        desc: "Next, we screen professionalism, adaptability, and communication skills with a deep-dive HR interview.",
    },
    {
        id: 5,
        count: 2,
        label: "Test project",
        desc: "Finalists complete a real-world project evaluated on code quality, delivery, and communication.",
    },
];

const FUNNEL_WIDTHS = [260, 228, 196, 164, 128];
const ORANGE = "#f66135";

function PersonIcon({ color = "#5a5955", size = 18 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="12" cy="5.5" r="3" fill={color} />
            <path
                d="M5 21v-2a7 7 0 0 1 14 0v2"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
            />
            <line
                x1="12"
                y1="12"
                x2="12"
                y2="17"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="8.5"
                y1="14"
                x2="15.5"
                y2="14"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

function TrophyIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 21h8M12 17v4"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <path
                d="M5 3H3v4a4 4 0 0 0 4 4"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M19 3h2v4a4 4 0 0 1-4 4"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
            />
            <rect
                x="7"
                y="3"
                width="10"
                height="11"
                rx="2"
                fill="none"
                stroke="#fff"
                strokeWidth="1.8"
            />
        </svg>
    );
}

export default function VettingProcess() {
    const [active, setActive] = useState(0);
    const [animKey, setAnimKey] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActive((prev) => {
                const next = (prev + 1) % steps.length;
                setAnimKey((k) => k + 1);
                return next;
            });
        }, 2400);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(timerRef.current);
    }, []);

    const handleStepClick = (i) => {
        clearInterval(timerRef.current);
        setActive(i);
        setAnimKey((k) => k + 1);
    };

    const maxWidth = FUNNEL_WIDTHS[0];

    return (
        <section style={styles.section}>
            <h2 style={styles.heading}>
                Your Success Starts With Our Vetting Process
                <span style={styles.dot}>.</span>
            </h2>

            <div style={styles.layout}>
                {/* Funnel */}
                <div style={styles.funnelCol}>
                    {steps.map((step, i) => {
                        const isActive = i === active;
                        const w = FUNNEL_WIDTHS[i];
                        const offset = (maxWidth - w) / 2;

                        return (
                            <div
                                key={step.id}
                                style={styles.stepRow}
                                onClick={() => handleStepClick(i)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && handleStepClick(i)
                                }
                            >
                                {/* Step number */}
                                <span
                                    style={{
                                        ...styles.stepNum,
                                        color: isActive ? ORANGE : "#888",
                                        fontWeight: isActive ? "600" : "400",
                                    }}
                                >
                                    {step.id}
                                </span>

                                {/* Trapezoid bar */}
                                <div style={{ flex: 1, position: "relative" }}>
                                    <div
                                        style={{
                                            ...styles.bar,
                                            width: w,
                                            marginLeft: offset,
                                            background: isActive
                                                ? ORANGE
                                                : "rgba(120,118,112,0.18)",
                                            clipPath:
                                                "polygon(0% 0%, 100% 0%, 94% 100%, 6% 100%)",
                                            transition: "background 0.35s ease, width 0.3s ease",
                                        }}
                                    >
                                        {Array.from({ length: step.count }).map((_, fi) => (
                                            <PersonIcon
                                                key={fi}
                                                color={isActive ? "#fff" : "#6b6a65"}
                                                size={17}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Top 1% badge */}
                    <div style={styles.top1Wrap}>
                        <div style={{ width: 38, flexShrink: 0 }} />
                        <div
                            style={{
                                ...styles.top1Bar,
                                marginLeft: (maxWidth - 148) / 2,
                            }}
                        >
                            <TrophyIcon />
                            <span style={styles.top1Text}>Top 1%</span>
                        </div>
                    </div>
                </div>

                {/* Info panel */}
                <div style={styles.infoCol} key={animKey}>
                    <p style={styles.infoLabel}>
                        {active === steps.length - 1 ? "Done!" : steps[active].label}
                    </p>
                    <p style={styles.infoText}>
                        {active === steps.length - 1
                            ? "The top 1% of tech talent are hired and can start client delivery."
                            : steps[active].desc}
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}

const styles = {
    section: {
        background: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    },
    heading: {
        fontSize: "clamp(22px, 3vw, 34px)",
        fontWeight: "600",
        color: "#1a1a18",
        textAlign: "center",
        margin: "0 0 48px",
        letterSpacing: "-0.5px",
    },
    dot: {
        color: ORANGE,
    },
    layout: {
        display: "flex",
        gap: "clamp(32px, 6vw, 80px)",
        alignItems: "center",
        width: "100%",
        maxWidth: 780,
        flexWrap: "wrap",
        justifyContent: "center",
    },
    funnelCol: {
        flexShrink: 0,
        width: 300,
    },
    stepRow: {
        display: "flex",
        alignItems: "center",
        marginBottom: 8,
        cursor: "pointer",
        userSelect: "none",
    },
    stepNum: {
        fontSize: 20,
        width: 32,
        textAlign: "right",
        marginRight: 6,
        flexShrink: 0,
        transition: "color 0.3s ease, font-weight 0.3s ease",
    },
    bar: {
        height: 42,
        borderRadius: "3px 3px 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
    },
    top1Wrap: {
        display: "flex",
        alignItems: "center",
        marginTop: 6,
    },
    top1Bar: {
        width: 148,
        height: 46,
        background: ORANGE,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        clipPath: "polygon(0% 0%, 87% 0%, 100% 50%, 87% 100%, 0% 100%)",
    },
    top1Text: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
        letterSpacing: "0.3px",
    },
    infoCol: {
        flex: 1,
        minWidth: 220,
        maxWidth: 320,
        animation: "fadeSlideIn 0.4s ease both",
    },
    infoLabel: {
        fontSize: 22,
        fontWeight: "600",
        color: "#1a1a18",
        margin: "0 0 10px",
    },
    infoText: {
        fontSize: 15,
        color: "#3a3a38",
        lineHeight: 1.65,
        margin: 0,
    },
};