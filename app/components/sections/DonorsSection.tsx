"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Heart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Data donatur, semua setara
const donorsData = [
  "Kamadhis Alumni 2015", "PT Maju Lestari", "Keluarga Bapak Budi", 
  "Siti Rahayu", "Kelvin Wijaya", "CV Hijau Nusantara", "Diana Sari", 
  "Eko Purnomo", "Rina Wulandari", "Andi Pratama", "Mahasiswa UAJY 2022", 
  "Keluarga Kusuma", "Budi Santoso", "Komunitas Peduli Alam"
];

export default function DonorsSection() {
  const container = useRef(null);

  useGSAP(() => {
    

    
  }, { scope: container });

  return (
    <section id="donors" className="section" ref={container} style={{ padding: "4rem 0" }}>
      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          {/* Badge removed per user request */}

          <h2
            className="donor-title"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}
          >
            <span style={{ color: "var(--text-main)" }}>Terima kasih sudah </span>
            <span className="gradient-text">peduli dan berbagi</span>
          </h2>

          <p
            className="donor-desc"
            style={{ maxWidth: "42rem", margin: "0 auto", fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.7 }}
          >
            Sumbangsih Anda sangat berarti bagi kelestarian alam dan keberlangsungan KDJU. 
            Daftar orang baik yang telah berpartisipasi akan segera ditampilkan di sini.
          </p>
        </div>

        <div
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", maxWidth: "56rem", margin: "0 auto" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="glass donor-item" style={{
              
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.625rem 1.25rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 500,
              color: "var(--text-main)", border: "1px solid var(--glass-border)", boxShadow: "var(--shadow-sm)",
              background: "var(--card-bg)", transition: "all 0.4s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--shadow-soft)";
              e.currentTarget.style.background = "var(--bg-secondary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              e.currentTarget.style.background = "var(--card-bg)";
            }}
            >
              🌱 Coming Soon
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .donor-item {
            padding: 0.5rem 1rem !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
