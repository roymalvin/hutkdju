"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { Handshake, Sprout } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HeroSection() {
  const container = useRef(null);

  useGSAP(() => {




    // Floating background elements
    gsap.to(".bg-float-1", { y: -20, rotation: 10, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".bg-float-2", { y: 20, rotation: -15, duration: 5, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".bg-float-3", { x: -15, y: -10, rotation: 5, duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut" });

  }, { scope: container });

  return (
    <section
      id="hero"
      ref={container}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--bg-main)",
        backgroundImage: "radial-gradient(var(--glass-border) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }}
    >


      {/* Floating Background Emojis - Consistent SVG (Twemoji) */}
      <div className="bg-float-1" style={{ position: "absolute", top: "15%", left: "10%", opacity: 0.35, width: "4rem" }}>
        <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f420.svg" alt="🐠" style={{ width: "100%", height: "auto" }} />
      </div>
      <div className="bg-float-2" style={{ position: "absolute", top: "15%", right: "10%", opacity: 0.35, width: "4rem" }}>
        <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f41a.svg" alt="🐚" style={{ width: "100%", height: "auto" }} />
      </div>
      <div className="bg-float-3" style={{ position: "absolute", top: "45%", left: "5%", opacity: 0.2, width: "7rem" }}>
        <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f334.svg" alt="🌴" style={{ width: "100%", height: "auto", transform: "rotate(-5deg)" }} />
      </div>
      <div className="bg-float-1" style={{ position: "absolute", top: "50%", right: "5%", opacity: 0.2, width: "6rem" }}>
        <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f422.svg" alt="🐢" style={{ width: "100%", height: "auto", transform: "rotate(10deg)" }} />
      </div>
      <div className="bg-float-2" style={{ position: "absolute", bottom: "15%", left: "15%", opacity: 0.3, width: "4.5rem" }}>
        <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f33f.svg" alt="🌿" style={{ width: "100%", height: "auto" }} />
      </div>
      <div className="bg-float-3" style={{ position: "absolute", bottom: "15%", right: "15%", opacity: 0.3, width: "4.5rem" }}>
        <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f33a.svg" alt="🌺" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="container-main" style={{ position: "relative", zIndex: 10, paddingTop: "8rem", paddingBottom: "6rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

        {/* Title */}
        <h1
          className="hero-title"
          style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "1.5rem", maxWidth: "64rem" }}
        >
          <span style={{ color: "var(--text-main)" }}>Roots of Revival</span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-desc"
          style={{ fontSize: "1.25rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "48rem" }}
        >
          Menumbuhkan kembali fondasi keseimbangan ekosistem pesisir, layaknya kokohnya akar mangrove.
          Bersama kita memulihkan alam dan mempererat persaudaraan di usia KDJU yang ke-26.
        </p>

        {/* Buttons */}
        <div className="hero-buttons" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", marginBottom: "6rem" }}>
          <a
            href="#sponsorship"
            className="btn-calm bg-gradient-to-br from-[#b4c93f] to-[#00d4ff] text-white hover:from-[#b4c93f] hover:to-[#00d4ff]"
            style={{ padding: "1.25rem 3rem", fontSize: "1.125rem" }}
          >
            <Handshake size={20} style={{ marginRight: "0.5rem" }} /> Jadi Sponsor
          </a>
          <a
            href="#donors"
            className="btn-calm btn-calm-secondary"
            style={{ padding: "1.25rem 3rem", fontSize: "1.125rem" }}
          >
            <Sprout size={20} style={{ marginRight: "0.5rem" }} /> Berikan Donasi
          </a>
        </div>

        {/* Individual Glass Cards for Stats */}
        <div className="stat-grid" style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem",
          width: "100%", maxWidth: "64rem"
        }}>
          {[

            { value: "26", label: "Tahun Usia KDJU" },
            { value: "27", label: "September 2026" },
            { value: "2", label: "Rangkaian Acara" },
            { value: "1", label: "Tujuan" },
          ].map((stat, i) => (
            <div
              key={i}
              className="hero-stat-card glass"
              style={{
                padding: "2rem",
                minWidth: "160px",
                display: "flex", flexDirection: "column", alignItems: "center",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(12px)",
                borderRadius: "24px",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              <div style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--text-main)", lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center" }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "10rem", background: "linear-gradient(to top, var(--bg-section), transparent)", pointerEvents: "none" }} />

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-buttons {
            gap: 1rem !important;
          }
          .hero-buttons a {
            padding: 1rem 1.5rem !important;
            font-size: 0.95rem !important;
          }
          .stat-grid {
            gap: 1rem !important;
            padding: 0 1rem;
          }
          .hero-stat-card {
            width: calc(50% - 0.5rem) !important;
            min-width: 0 !important;
            padding: 1.25rem 0.5rem !important;
          }
          .hero-stat-card > div:first-child {
            font-size: 1.75rem !important;
          }
          .hero-stat-card > div:last-child {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </section>
  );
}
