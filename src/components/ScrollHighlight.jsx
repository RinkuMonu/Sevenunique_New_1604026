"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollHighlight({ children, className = "" }) {
  const rowRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: "-30% 0px -30% 0px", threshold: 0.15 },
    );

    observer.observe(row);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={rowRef}
      data-active={isActive}
      className={`group ${className}`}
    >
      {children}
    </article>
  );
}
