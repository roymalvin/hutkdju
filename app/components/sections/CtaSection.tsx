"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FileText, UserPlus } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function CtaSection() {
  const container = useRef(null);

  useGSAP(() => {
    

    
  }, { scope: container });

  return (
    <section id="cta" className="section" ref={container} style={{ paddingBottom: "8rem" }}>
      <div className="container-main">
        <div className="cta-content" style={{
          padding: "5rem 0",
          textAlign: "center",
          position: "relative"
        }}>
          {/* Soft Glow Background */}
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%",
            background: "radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)", opacity: 0.15, filter: "blur(60px)", pointerEvents: "none"
          }} />

          <div style={{ position: "relative", zIndex: 10 }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--text-main)", marginBottom: "1.5rem", letterSpacing: "-0.03em" }}>
              Siap Menjadi Bagian dari <span className="gradient-text">Revival?</span>
            </h2>
            <p style={{ maxWidth: "40rem", margin: "0 auto", fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "3rem" }}>
              Pilih peran Anda sekarang. Mari berkolaborasi menciptakan dampak nyata dan merayakan kebangkitan KDJU yang ke-26 bersama-sama.
            </p>

            <div className="cta-buttons" style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              justifyContent: "center",
              alignItems: "center"
            }}>
              
              <button className="cta-btn" style={{
                background: "var(--accent-base)",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "9999px",
                fontSize: "1.05rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(147, 165, 49, 0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(147, 165, 49, 0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(147, 165, 49, 0.3)"; }}
              >
                <UserPlus size={20} /> Daftar Peserta
              </button>

              <button className="cta-btn" style={{
                background: "var(--bg-main)",
                color: "var(--text-main)",
                padding: "1rem 2rem",
                borderRadius: "9999px",
                fontSize: "1.05rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                border: "1px solid var(--glass-border)",
                cursor: "pointer",
                boxShadow: "var(--shadow-soft)",
                transition: "transform 0.3s ease, background 0.3s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "var(--bg-accent-subtle)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "var(--bg-main)"; }}
              >
                <FileText size={20} /> Unduh Proposal Sponsor
              </button>

            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .cta-buttons {
            gap: 1rem !important;
          }
          .cta-btn {
            padding: 1rem 1.5rem !important;
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
}
