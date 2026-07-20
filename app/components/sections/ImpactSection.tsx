"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Users, Sprout, Hourglass, Smartphone } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const stats = [
  { value: "5K+", label: "Target Jangkauan", icon: <Smartphone size={64} />, desc: "Proyeksi impresi kampanye media sosial yang dilihat melalui jaringan KDJU & mitra." },
  { value: "100+", label: "Relawan & Delegasi", icon: <Users size={64} />, desc: "Gabungan panitia dan peserta yang terjun langsung untuk aksi nyata di lapangan." },
  { value: "200+", label: "Bibit Mangrove", icon: <Sprout size={64} />, desc: "Langkah konkrit restorasi pesisir pantai untuk mencegah abrasi berlanjut." },
  { value: "26", label: "Tahun Kontribusi", icon: <Hourglass size={64} />, desc: "Rekam jejak persaudaraan KDJU yang mengabdi dan berdampak positif." },
];

export default function ImpactSection() {
  const container = useRef(null);

  useGSAP(() => {

  }, { scope: container });

  // 3D Tilt Handlers
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transition = "transform 0.15s ease-out, box-shadow 0.3s ease";
    e.currentTarget.style.boxShadow = "var(--shadow-soft)";
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition = "transform 0.5s ease, box-shadow 0.3s ease";
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.boxShadow = "none";
  };

  return (
    <section id="impact" className="section" ref={container} style={{ position: "relative" }}>
      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>

        <div className="impact-header" style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            Kalkulasi <span className="gradient-text">Dampak</span>
          </h2>
          <p style={{ maxWidth: "45rem", margin: "0 auto", fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
            Setiap angka adalah representasi dari komitmen nyata kami. Lihat bagaimana partisipasi Anda akan menciptakan gelombang perubahan.
          </p>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          maxWidth: "900px",
          margin: "0 auto",
          perspective: "1500px"
        }}>
          {stats.map((stat, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="impact-stat-card glass" style={{
                padding: "3rem",
                borderRadius: "32px",
                border: "1px solid var(--glass-border)",
                display: "flex",
                flexDirection: isEven ? "row" : "row-reverse",
                alignItems: "center",
                gap: "3rem",
                position: "relative",
                overflow: "hidden", // Initial state for GSAP
                transition: "transform 0.5s ease, box-shadow 0.3s ease"
              }}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Subtle Background Gradient matching the alternate sides */}
                <div style={{
                  position: "absolute", top: 0, bottom: 0,
                  [isEven ? 'left' : 'right']: 0,
                  width: "50%",
                  background: "linear-gradient(90deg, rgba(147, 165, 49, 0.05) 0%, transparent 100%)",
                  transform: isEven ? "none" : "scaleX(-1)",
                  pointerEvents: "none"
                }} />

                <div className="impact-icon-wrapper" style={{
                  flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--accent-base)", position: "relative", zIndex: 1
                }}>
                  {stat.icon}
                </div>

                <div style={{ textAlign: isEven ? "left" : "right", position: "relative", zIndex: 1, width: "100%" }}>
                  <div style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 900, color: "var(--text-main)", lineHeight: 1, marginBottom: "0.5rem", letterSpacing: "-0.03em" }}>
                    {stat.value}
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "1rem" }}>
                    {stat.label}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .impact-stat-card {
            gap: 1.5rem !important;
            padding: 2rem 1.5rem !important;
          }
          .impact-icon-wrapper svg {
            width: 40px !important;
            height: 40px !important;
          }
          .impact-stat-card > div:last-child > div:first-child {
            font-size: 2rem !important;
          }
          .impact-stat-card > div:last-child > h3 {
            font-size: 1.1rem !important;
          }
          .impact-stat-card > div:last-child > p {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}
