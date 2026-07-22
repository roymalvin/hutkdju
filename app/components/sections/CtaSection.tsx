"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Handshake, UserPlus, Heart } from "lucide-react";

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

              <a
                href="/#features"
                className="btn-calm btn-calm-secondary"
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1.05rem",
                  width: "100%",
                  maxWidth: "280px"
                }}
              >
                <UserPlus size={20} /> Daftar Peserta
              </a>

              <a
                href="/dukungan"
                className="btn-calm btn-calm-secondary"
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1.05rem",
                  width: "100%",
                  maxWidth: "280px"
                }}
              >
                <Handshake size={20} /> Dukung Kami
              </a>

              <a 
                href="/#donors"
                className="btn-calm btn-calm-secondary" 
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1.05rem",
                  width: "100%",
                  maxWidth: "280px"
                }}
              >
                <Heart size={20} /> Berdonasi
              </a>

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
