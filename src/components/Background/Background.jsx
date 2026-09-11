import React, { useRef, useEffect, useState, useMemo, memo } from "react";

/* ============================================================
    BackgroundContainer — خلفية نجوم (Dark Mode Only)
    ============================================================ */

// مولّد أرقام عشوائية بـ seed ثابت — عشان النتائج تبقى نفسها كل مرة
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

// مواضع وأحجام وتوقيتات النجوم — ثابتة
function generateStarPositions(count, seed = 42) {
  const rng = seededRandom(seed);
  const heroCount = Math.max(3, Math.round(count * 0.15));

  return Array.from({ length: count }, (_, i) => {
    const isHero = i < heroCount;
    return {
      id: `star-${i}`,
      top: `${rng() * 100}%`,
      left: `${rng() * 100}%`,
      size: isHero ? rng() * 1.4 + 1.8 : rng() * 1.1 + 0.5,
      duration: rng() * 4 + 3.5,
      delay: rng() * 6,
      glow: isHero,
    };
  });
}

// ألوان النجوم الخاصة بالوضع الداكن فقط
const STAR_TINTS = [
  "rgba(255, 255, 255, 0.95)", // أبيض ناصع
  "rgba(226, 220, 255, 0.9)", // بنفسجي فاتح جدًا
  "rgba(210, 235, 255, 0.9)", // أزرق سماوي فاتح
];

// نحقن الـ keyframes مرة واحدة بس في الصفحة كلها
const KEYFRAMES_ID = "bg-star-twinkle-keyframes";
function ensureKeyframesInjected() {
  if (typeof document === "undefined") return;
  if (document.getElementById(KEYFRAMES_ID)) return;
  const styleEl = document.createElement("style");
  styleEl.id = KEYFRAMES_ID;
  styleEl.textContent = `
    @keyframes star-twinkle {
      0%, 100% { opacity: 0.15; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.1); }
    }
  `;
  document.head.appendChild(styleEl);
}

function BackgroundContainer({ count = 55, className = "", style = {} }) {
  const starRefs = useRef([]);
  const rafRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    ensureKeyframesInjected();
  }, []);

  // المواضع ثابتة
  const positions = useMemo(() => generateStarPositions(count), [count]);

  useEffect(() => {
    starRefs.current.length = positions.length;
  }, [positions.length]);

  const stars = useMemo(() => {
    const rng = seededRandom(42);
    return positions.map((p) => ({
      ...p,
      tint: STAR_TINTS[Math.floor(rng() * STAR_TINTS.length)],
    }));
  }, [positions]);

  // متابعة "تقليل الحركة"
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handlePointerMove = (e) => {
      const point = e.touches ? e.touches[0] : e;
      const nx = (point.clientX / window.innerWidth - 0.5) * 2;
      const ny = (point.clientY / window.innerHeight - 0.5) * 2;
      pointer.current.targetX = nx;
      pointer.current.targetY = ny;
    };

    const animate = () => {
      pointer.current.x += (pointer.current.targetX - pointer.current.x) * 0.05;
      pointer.current.y += (pointer.current.targetY - pointer.current.y) * 0.05;

      starRefs.current.forEach((el, i) => {
        if (!el) return;
        const depth = stars[i]?.glow ? 8 : 3;
        el.style.transform = `translate3d(${pointer.current.x * depth}px, ${pointer.current.y * depth}px, 0)`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion, stars]);

  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        ...style,
      }}
    >
      {stars.map((s, i) => (
        <div
          key={s.id}
          ref={(el) => (starRefs.current[i] = el)}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            backgroundColor: s.tint,
            boxShadow: s.glow
              ? `0 0 ${s.size * 4}px ${s.size * 0.8}px rgba(255,255,255,0.25)`
              : "none",
            animation: prefersReducedMotion
              ? "none"
              : `star-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            opacity: prefersReducedMotion ? 0.6 : undefined,
            willChange: "opacity, transform",
          }}
        />
      ))}
    </div>
  );
}

export default memo(BackgroundContainer);