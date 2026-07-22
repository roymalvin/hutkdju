"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Handshake, FileText, Check, Waves, Mountain, Trees, Sun, Flower2, Palmtree, ArrowRight } from "lucide-react";
import ParticleBackground from "../ui/ParticleBackground";
import OceanWaves from "../ui/OceanWaves";
import MountainWind from "../ui/MountainWind";
import ForestMist from "../ui/ForestMist";
import ValleyMeadow from "../ui/ValleyMeadow";
import CoastalBeach from "../ui/CoastalBeach";
import AnimatedClouds from "../ui/AnimatedClouds";
import AnimatedBirds from "../ui/AnimatedBirds";
import FloatingWaterParticles from "../ui/FloatingWaterParticles";
import QRCode from "react-qr-code";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const packages = [
  {
    name: "Samudra",
    theme: "Jangkar Ekosistem",
    price: "Rp 1.000.000",
    color: "#0ea5e9", // Deep Sky Blue for Ocean
    tag: "TERBAIK",
    icon: Waves,
    mascot: "🌊",
    features: [
      "Spanduk Eksklusif (Standing Banner)",
      "Penayangan Video Promosi Singkat",
      "Brosur/Sampel di Goodie Bag",
      "Logo di Banner Acara (Ukuran XL)",
      "Iklan Adlibs oleh MC (2 Kali)",
    ]
  },
  {
    name: "Gunung",
    theme: "Perlindungan Kokoh",
    price: "Rp 800.000",
    color: "#ef4444", // Red for Volcanic Mountain
    tag: "EKSKLUSIF",
    icon: Mountain,
    mascot: "⛰️",
    features: [
      "Penayangan Video Promosi Singkat",
      "Brosur/Sampel di Goodie Bag",
      "Logo di Banner Acara (Ukuran L)",
      "Posting Produk (Oleh Panitia)",
      "Iklan Adlibs oleh MC (1 Kali)",
    ]
  },
  {
    name: "Rimba",
    theme: "Pionir Pesisir",
    price: "Rp 600.000",
    color: "#10b981", // Emerald Green for Jungle
    tag: "PREMIUM",
    icon: Trees,
    mascot: "🌲",
    features: [
      "Logo di Banner Acara (Ukuran M)",
      "Posting Produk (Oleh Panitia)",
      "Link/Akun IG di Sosmed Resmi",
      "Logo di Aftermovie",
    ]
  },
  {
    name: "Lembah",
    theme: "Ketahanan Alam",
    price: "Rp 400.000",
    color: "#c4793d", // Even Lighter Brown (Tan/Terracotta) for Earth/Valley
    tag: "FAVORIT",
    icon: Flower2,
    mascot: "🌸",
    features: [
      "Logo di Banner Acara (Ukuran S)",
      "Logo di Publikasi (Ukuran M)",
      "Logo di Aftermovie",
    ]
  },
  {
    name: "Pesisir",
    theme: "Pondasi Pesisir",
    price: "Rp 250.000",
    color: "#fb923c", // Light Orange for Coast/Sunset
    tag: "STANDAR",
    icon: Palmtree,
    mascot: "🏖️",
    features: [
      "Logo di Publikasi (Ukuran S)",
      "Penyebutan Nama (Pembuka & Penutup)",
      "Logo di Aftermovie",
    ]
  }
];

export default function SponsorshipSection() {
  const container = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {



  }, { scope: container });

  return (
    <section id="sponsorship" className="section" ref={container} style={{ position: "relative" }}>

      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            className="sponsor-title"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}
          >
            <span style={{ color: "var(--text-main)" }}>Dukung </span>
            <span className="gradient-text">Pergerakan Kami</span>
          </h2>

          <p
            className="sponsor-desc"
            style={{ maxWidth: "42rem", margin: "0 auto", fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}
          >
            Mari menjadi bagian dari perubahan! Dukungan Anda akan dialokasikan langsung untuk operasional Revival Planting, serta mensukseskan Birthday Party.
          </p>

          <div
            className="sponsor-cta"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}
          >
            <a
              href="/proposal-sponsorship-kdju26.pdf"
              download
              className="btn-calm btn-gradient-solid"
            >
              <FileText size={20} /> Unduh Proposal Lengkap (PDF)
            </a>

            {/* QR Code Section */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ background: "white", padding: "1rem", borderRadius: "16px", display: "inline-block", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}>
                <QRCode value="https://hutkjdu.site/#partners" size={120} />
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", fontWeight: 500, textAlign: "center" }}>
                Scan untuk melihat<br/>Daftar Sponsor Resmi
              </p>
            </div>
          </div>
        </div>

        {/* Pricing/Sponsorship Grid */}
        <div className="sponsor-grid" style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          alignItems: "stretch"
        }}>
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div
                key={index}
                ref={el => {
                  if (el) cardRefs.current[index] = el;
                }}
                className="sponsor-card"
                style={{
                  flex: "1 1 300px",
                  maxWidth: "360px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  zIndex: (pkg.name === "Samudra" || pkg.name === "Gunung") ? 20 : 1 // Elevate premium cards
                }}
              >
                {/* External magical particles for Samudra */}
                {pkg.name === "Samudra" && <FloatingWaterParticles color={pkg.color} />}

                <div
                  className="glass"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "3.5rem 2rem 2.5rem 2rem",
                    position: "relative",
                    background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, ${pkg.color}15 100%)`,
                    backdropFilter: "blur(12px)",
                    zIndex: 10,
                    flexGrow: 1,
                    width: "100%",
                    boxShadow: (pkg.name === "Samudra" || pkg.name === "Gunung")
                      ? `0 0 30px 2px ${pkg.color}50, inset 0 0 15px 1px ${pkg.color}20`
                      : `0 0 25px 0px ${pkg.color}30`,
                    borderColor: pkg.color,
                    borderWidth: (pkg.name === "Samudra" || pkg.name === "Gunung") ? "1.5px" : "1px",
                    borderStyle: "solid"
                  } as React.CSSProperties}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", borderRadius: "inherit", pointerEvents: "none" }}>
                    {pkg.name === "Samudra" ? (
                      <>
                        <AnimatedClouds color={pkg.color} scaleMultiplier={1.8} />
                        <OceanWaves color={pkg.color} />
                      </>
                    ) : pkg.name === "Gunung" ? (
                      <>
                        <AnimatedClouds color={pkg.color} />
                        <MountainWind color={pkg.color} />
                      </>
                    ) : pkg.name === "Rimba" ? (
                      <div style={{ opacity: 0.55 }}>
                        <AnimatedBirds color={pkg.color} />
                        <ForestMist color={pkg.color} />
                      </div>
                    ) : pkg.name === "Lembah" ? (
                      <ValleyMeadow color={pkg.color} />
                    ) : pkg.name === "Pesisir" ? (
                      <CoastalBeach color={pkg.color} />
                    ) : (
                      <ParticleBackground color={pkg.color} intensity={5 - index} />
                    )}
                  </div>

                  {/* Floating Top Icon */}
                  <div className="floating-icon" style={{
                    position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)",
                    width: "60px", height: "60px",
                    background: pkg.color,
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "var(--shadow-sm)",
                    zIndex: 30,
                  }}>
                    <Icon className="icon-svg" size={32} color="#ffffff" />
                  </div>

                  {/* Header Row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                    <h3 className="pkg-title" style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-main)", margin: 0 }}>
                      {pkg.name}
                    </h3>
                    <span className="pkg-tag" style={{
                      background: pkg.color, color: "#ffffff",
                      padding: "0.25rem 0.75rem", borderRadius: "9999px",
                      fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.05em",
                      textTransform: "uppercase"
                    }}>
                      {pkg.tag}
                    </span>
                  </div>

                  <div style={{
                    fontSize: "1rem", color: "var(--foreground)", opacity: 0.8,
                    marginBottom: "2rem"
                  }}>
                    {pkg.theme}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#donors"
                    className="btn-calm"
                    style={{
                      display: "flex", width: "100%", justifyContent: "center",
                      background: pkg.color, color: "#ffffff",
                      marginBottom: "2rem", position: "relative", zIndex: 5
                    }}
                  >
                    Pilih Paket
                  </a>

                  {/* Features List */}
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "1rem" }}>
                    Anda akan mendapatkan:
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem", flexGrow: 1 }}>
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text-muted)", fontSize: "0.875rem" }}>
                        <span style={{ color: pkg.color, display: "flex", alignItems: "center", marginTop: "2px", background: `${pkg.color}20`, borderRadius: "50%", padding: "3px" }}>
                          <Check size={14} strokeWidth={3} />
                        </span>
                        <span style={{ lineHeight: 1.5 }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .sponsor-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 3.5rem !important; /* Jarak antar kartu cukup lebar untuk ikon melayang */
            padding-top: 2rem;
            padding-bottom: 2rem;
            
            /* Reset edge-to-edge styles */
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
            overflow-x: visible;
          }
          .sponsor-card {
            width: 100% !important;
            max-width: 100% !important;
            flex: none !important;
          }
          /* Perbaikan padding di mobile agar tidak sempit/kebesaran */
          .sponsor-card > .glass {
            padding: 2.5rem 1.5rem 2rem 1.5rem !important;
            border-radius: 20px;
          }
          /* Ikon melayang lebih ringkas */
          .floating-icon {
            width: 55px !important;
            height: 55px !important;
            top: -27.5px !important;
          }
          .icon-svg {
            width: 26px !important;
            height: 26px !important;
          }
          /* Tipografi yang disesuaikan */
          .pkg-title {
            font-size: 1.5rem !important;
          }
          .pkg-tag {
            font-size: 0.65rem !important;
            padding: 0.2rem 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
