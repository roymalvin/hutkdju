"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Users, CalendarHeart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function GeneralAboutSection() {
  const container = useRef(null);

  useGSAP(() => {
    // Optional animation here
  }, { scope: container });

  return (
    <section id="general-about" className="section" ref={container} style={{ paddingTop: "6rem" }}>
      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>

        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            <span style={{ color: "var(--text-main)" }}>Mengenal Lebih </span>
            <span className="gradient-text">Dekat</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            Ketahui lebih dalam mengenai siapa kami dan mengapa acara peringatan ini sangat bermakna bagi kami.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>

          {/* KDJU Card */}
          <div className="glass" style={{
            padding: "3rem",
            borderRadius: "24px",
            border: "1px solid var(--glass-border)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem"
          }}>
            <div style={{
              height: "5rem",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <img src="/logo-kdju.png" alt="Logo KDJU" style={{ height: "100%", width: "auto", objectFit: "contain" }} />
            </div>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text-main)" }}>
              Apa itu KDJU?
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              Kamadhis Dharma Jaya UAJY (KDJU) adalah wadah kebersamaan dan kekeluargaan bagi mahasiswa Buddhis di lingkungan Universitas Atma Jaya Yogyakarta. KDJU berkomitmen kuat untuk membina moral, spiritual, dan kepedulian sosial para anggotanya agar membawa dampak positif bagi masyarakat.
            </p>
          </div>

          {/* HUT KDJU Card */}
          <div className="glass" style={{
            padding: "3rem",
            borderRadius: "24px",
            border: "1px solid var(--glass-border)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem"
          }}>
            <div style={{
              height: "5rem",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <img src="/logo-hut-kdju-26.png" alt="Logo HUT KDJU 26" style={{ height: "100%", width: "auto", objectFit: "contain" }} />
            </div>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text-main)" }}>
              Apa itu HUT KDJU?
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              HUT KDJU adalah program kerja tahunan dan acara terbesar yang diselenggarakan untuk memperingati hari terbentuknya KDJU. Acara ini bukan sekadar perayaan, melainkan sebuah aksi nyata berupa pengabdian masyarakat, pelestarian lingkungan, dan wadah mempererat persaudaraan.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
