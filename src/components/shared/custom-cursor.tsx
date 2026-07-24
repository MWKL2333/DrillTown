"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 12}px, ${mouseY - 12}px)`;
    };

    const onHover = () => cursor.classList.add("scale-150", "bg-[#7C3AED]/20", "border-[#7C3AED]");
    const offHover = () => cursor.classList.remove("scale-150", "bg-[#7C3AED]/20", "border-[#7C3AED]");

    const animate = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      trail.style.transform = `translate(${trailX - 4}px, ${trailY - 4}px)`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouse);
    document.querySelectorAll("a, button, [role=button], input, textarea, select")
      .forEach(el => {
        el.addEventListener("mouseenter", onHover);
        el.addEventListener("mouseleave", offHover);
      });

    animate();

    return () => {
      document.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-6 h-6 rounded-full border border-[#A855F7]/50 bg-[#A855F7]/10 transition-all duration-200 ease-out hidden md:block"
        style={{ transform: "translate(-100px, -100px)" }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-2 h-2 rounded-full bg-[#7C3AED] hidden md:block"
        style={{ transform: "translate(-100px, -100px)" }}
      />
    </>
  );
}
