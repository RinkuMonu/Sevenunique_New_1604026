"use client";

import { useEffect, useRef } from "react";

// Simple SVG avatar faces (placeholders that mimic real person silhouettes)
const AVATAR_COLORS = [
  "#92400E",
  "#1E3A5F",
  "#374151",
  "#7C2D12",
  "#1E40AF",
  "#064E3B",
];
const ORBITERS = [
  {
    orbitRadius: 90,
    speed: 0.002,
    size: 60,
    borderColor: "#D09EDE",
    avatarBg: "#FEF3C7",
    avatarSeed: "alpha",
    angle: 0,
  },
  {
    orbitRadius: 155,
    speed: 0.002,
    size: 56,
    borderColor: "#BFE88E",
    avatarBg: "#D1FAE5",
    avatarSeed: "bravo",
    angle: 60,
  },
  {
    orbitRadius: 220,
    speed: 0.002,
    size: 60,
    borderColor: "#72A6CF",
    avatarBg: "#FEE2E2",
    avatarSeed: "charlie",
    angle: 120,
  },
  {
    orbitRadius: 290,
    speed: 0.002,
    size: 56,
    borderColor: "#8B5CD6",
    avatarBg: "#EDE9FE",
    avatarSeed: "charlie",
    angle: 180,
  },
];

export default function OrbitAnimation() {
  const canvasRef = useRef(null);
  const orbitersRef = useRef(
    ORBITERS.map((o) => ({ ...o, angle: (o.angle * Math.PI) / 180 })),
  );
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load avatar images (using DiceBear for deterministic avatars)
    const avatarImages = [];
    let loadedCount = 0;
    const totalAvatars = ORBITERS.length;

    const startAnimation = () => {
      const dpr = window.devicePixelRatio || 1;

      const resize = () => {
        const parent = canvas.parentElement;
        if (!parent) return;
        const w = parent.clientWidth;
        const h = parent.clientHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };

      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(canvas);

      let lastTime = 0;
      let activeRingIndex = 0;
      let lastSwitch = 0;

      const draw = (time) => {
        const switchDelay = 1200;
        const delta = Math.min((time - lastTime) / 16, 3);
        lastTime = time;

        const w = canvas.width / dpr;
        const h = canvas.height / dpr;
        const cx = w * 0.55;
        const cy = h * 0.48;

        ctx.clearRect(0, 0, w, h);
        const ringColors = [
          "#6EC1A6", // green
          "#F59E0B", // orange
          "#60A5FA", // blue
          "#F87171", // red
          "#A78BFA", // purple
        ];
        // Draw orbit rings
        const rings = [90, 155, 220, 290];
        if (time - lastSwitch > switchDelay) {
          activeRingIndex = (activeRingIndex + 1) % rings.length;
          lastSwitch = time;
        }
        rings.forEach((r, index) => {
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);

          if (index === activeRingIndex) {
            // 🔥 active ring
            const activeColor = ringColors[activeRingIndex % ringColors.length];

            ctx.strokeStyle = activeColor;
            ctx.shadowColor = activeColor;
            ctx.lineWidth = 10;

            ctx.shadowColor = "#6EC1A6";
            ctx.shadowBlur = 0;
          } else {
            // 👇 normal ring
            ctx.strokeStyle = "rgba(200,200,210,0.25)";
            ctx.lineWidth = 10;
            ctx.shadowBlur = 0;
          }

          ctx.stroke();
        });


        // Update & draw orbiters
        const orbiters = orbitersRef.current;
        orbiters.forEach((orb, i) => {
          orb.angle += orb.speed * delta;

          const x = cx + orb.orbitRadius * Math.cos(orb.angle);
          const y = cy + orb.orbitRadius * Math.sin(orb.angle);
          const r = orb.size / 2;

          // Shadow
          ctx.save();
          ctx.shadowColor = "rgba(0,0,0,0.12)";
          ctx.shadowBlur = 10;

          // White background circle
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();

          ctx.restore();

          // Colored border
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.strokeStyle = orb.borderColor;
          ctx.lineWidth = 2.5;
          ctx.stroke();

          // Draw avatar image if loaded
          if (avatarImages[i]?.complete && avatarImages[i].naturalWidth > 0) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, r - 2, 0, Math.PI * 2);
            ctx.clip();
            ctx.drawImage(
              avatarImages[i],
              x - r + 2,
              y - r + 2,
              (r - 2) * 2,
              (r - 2) * 2,
            );
            ctx.restore();
          } else {
            // Fallback: draw a simple person silhouette
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, r - 2, 0, Math.PI * 2);
            ctx.clip();

            // Body background
            ctx.fillStyle = orb.avatarBg;
            ctx.fillRect(x - r, y - r, orb.size, orb.size);

            // Head
            const headR = r * 0.38;
            ctx.beginPath();
            ctx.arc(x, y - r * 0.15, headR, 0, Math.PI * 2);
            ctx.fillStyle = AVATAR_COLORS[i % AVATAR_COLORS.length];
            ctx.fill();

            // Shoulders
            ctx.beginPath();
            ctx.ellipse(x, y + r * 0.6, r * 0.6, r * 0.35, 0, Math.PI, 0);
            ctx.fillStyle = AVATAR_COLORS[i % AVATAR_COLORS.length];
            ctx.fill();

            ctx.restore();
          }
        });

        rafRef.current = requestAnimationFrame(draw);
      };

      rafRef.current = requestAnimationFrame(draw);

      return () => {
        cancelAnimationFrame(rafRef.current);
        ro.disconnect();
      };
    };

    // Try loading DiceBear avatars
    ORBITERS.forEach((orb, i) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = `https://api.dicebear.com/7.x/personas/svg?seed=${orb.avatarSeed}&backgroundColor=ffffff`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) startAnimation();
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === 1) startAnimation();
      };
      avatarImages[i] = img;
    });

    // Start even if images don't load
    const timeout = setTimeout(startAnimation, 300);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
