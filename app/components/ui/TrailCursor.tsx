'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function TrailCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
    }
  }, []);

  useEffect(() => {
    if (!isMounted || !cursorRef.current) return;

    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.3, ease: "power3.out" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.3, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMounted]);

  if (!isMounted || isTouchDevice) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999] overflow-hidden mix-blend-difference">
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 flex items-center justify-center"
        style={{
          width: "120px",
          height: "120px",
          transform: "translate(-100px, -100px)",
          willChange: "transform",
        }}
      >
        {/* Center Dot */}
        <div
          className="absolute rounded-full bg-white flex items-center justify-center overflow-hidden"
          style={{
            width: isHovering ? "60px" : "8px",
            height: isHovering ? "60px" : "8px",
            transition: "width 0.4s cubic-bezier(0.2, 1, 0.3, 1), height 0.4s cubic-bezier(0.2, 1, 0.3, 1)",
          }}
        >
          {isHovering && (
            <span style={{ color: "black", fontSize: "12px", fontWeight: "bold" }}>GO</span>
          )}
        </div>

        {/* Rotating Text */}
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{
            animation: "spin-cursor 10s linear infinite",
            opacity: isHovering ? 0 : 1,
            transform: `scale(${isHovering ? 1.5 : 1})`,
            transition: "all 0.4s cubic-bezier(0.2, 1, 0.3, 1)"
          }}
        >
          <svg viewBox="0 0 100 100" width="120" height="120">
            <defs>
              <path id="cursor-circle" d="
                M 50, 50
                m -33, 0
                a 33,33 0 1,1 66,0
                a 33,33 0 1,1 -66,0
              " />
            </defs>
            <text fill="white" fontSize="8.2" fontWeight="bold" letterSpacing="1.95">
              <textPath href="#cursor-circle" startOffset="0%">
                HUT KDJU 26 • ROOTS OF REVIVAL •
              </textPath>
            </text>
          </svg>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes spin-cursor {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}} />
      </div>
    </div>
  );
}
