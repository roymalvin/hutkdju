"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ParticleBackground from "../ui/ParticleBackground";
import OceanWaves from "../ui/OceanWaves";
import MountainWind from "../ui/MountainWind";
import ForestMist from "../ui/ForestMist";
import ValleyMeadow from "../ui/ValleyMeadow";
import CoastalBeach from "../ui/CoastalBeach";
import AnimatedClouds from "../ui/AnimatedClouds";
import AnimatedBirds from "../ui/AnimatedBirds";
import FloatingWaterParticles from "../ui/FloatingWaterParticles";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Data dummy untuk Sponsor
const sponsors = [
  { name: "Coming Soon", package: "Samudra", color: "#0ea5e9", mascot: "🌊" },
  { name: "Coming Soon", package: "Gunung", color: "#ef4444", mascot: "⛰️" },
  { name: "Coming Soon", package: "Rimba", color: "#10b981", mascot: "🌲" },
  { name: "Coming Soon", package: "Lembah", color: "#c4793d", mascot: "🌸" },
  { name: "Coming Soon", package: "Pesisir", color: "#fb923c", mascot: "🏖️" }
];
// Gandakan array agar animasi scrolling infinite-nya tidak terputus (seamless)
const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

// Data dummy untuk Media Partner
const mediaPartners = [
  "Coming Soon", "Coming Soon", "Coming Soon", "Coming Soon", "Coming Soon"
];
// Gandakan array agar animasi scrolling infinite-nya tidak terputus (seamless)
const duplicatedMediaPartners = [...mediaPartners, ...mediaPartners, ...mediaPartners, ...mediaPartners];

export default function PartnersSection() {
  const container = useRef(null);

  useGSAP(() => {
    
  }, { scope: container });

  return (
    <section id="partners" className="section" ref={container} style={{ padding: "4rem 0", overflow: "hidden", position: "relative" }}>
      {/* Gradient overlays to fade the edges of the scrolling text */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "10rem", background: "linear-gradient(to right, var(--bg-main), transparent)", zIndex: 20, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "10rem", background: "linear-gradient(to left, var(--bg-main), transparent)", zIndex: 20, pointerEvents: "none" }} />
      
      <div className="container-main" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        {/* Removed main title per user request */}
      </div>

      {/* Sponsor Section */}
      <div style={{ marginBottom: "3rem" }}>
        <div className="container-main partner-title" style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          <h3 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "var(--text-main)", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
            Sponsor <span className="gradient-text">Resmi</span>
          </h3>
          <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
            Mitra luar biasa yang turut menyukseskan HUT KDJU 26
          </p>
        </div>
        <div style={{ overflow: "hidden", display: "flex", whiteSpace: "nowrap", position: "relative", zIndex: 10, padding: "3rem 0", marginTop: "-1rem" }}>
          <div className="animate-marquee" style={{ display: "flex", gap: "2rem", paddingRight: "2rem" }}>
            {duplicatedSponsors.map((partner, i) => (
              <div key={`sponsor-${i}`} className="glass" style={{
                position: "relative",
                padding: "1.5rem", borderRadius: "24px", fontSize: "1.5rem", fontWeight: 800,
                minWidth: "300px", height: "140px",
                color: "var(--text-main)", 
                border: `1px solid ${partner.color}50`, 
                boxShadow: `0 10px 30px ${partner.color}20`,
                background: "linear-gradient(135deg, var(--bg-secondary), var(--bg-main))", display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>
                {/* External magical particles for Samudra */}
                {partner.package === "Samudra" && <FloatingWaterParticles color={partner.color} />}
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", borderRadius: "inherit", pointerEvents: "none" }}>
                  {/* Trik transform scale agar efeknya terlihat 'versi kecil' di dalam kotak yang lebih kecil */}
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "200%", height: "200%", transform: "translate(-50%, -50%) scale(0.5)" }}>
                    {partner.package === "Samudra" ? (
                      <>
                        <AnimatedClouds color={partner.color} scaleMultiplier={1.8} />
                        <OceanWaves color={partner.color} />
                      </>
                    ) : partner.package === "Gunung" ? (
                      <>
                        <AnimatedClouds color={partner.color} />
                        <MountainWind color={partner.color} />
                      </>
                    ) : partner.package === "Rimba" ? (
                      <div style={{ opacity: 0.55 }}>
                        <AnimatedBirds color={partner.color} />
                        <ForestMist color={partner.color} />
                      </div>
                    ) : partner.package === "Lembah" ? (
                      <ValleyMeadow color={partner.color} />
                    ) : partner.package === "Pesisir" ? (
                      <CoastalBeach color={partner.color} />
                    ) : (
                      <ParticleBackground color={partner.color} intensity={5 - (i % 5)} />
                    )}
                  </div>
                </div>
                <span style={{ position: "relative", zIndex: 10 }}>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Divider */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "4rem", opacity: 0.1 }}>
        <div style={{ width: "min(600px, 80%)", height: "1px", background: "linear-gradient(90deg, transparent, var(--text-main), transparent)" }} />
      </div>

      {/* Media Partner Section */}
      <div>
        <div className="container-main" style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Media Partner
          </h4>
        </div>
        <div style={{ overflow: "hidden", display: "flex", whiteSpace: "nowrap", position: "relative", zIndex: 10.7, padding: "3rem 0", marginTop: "-1rem" }}>
          <div className="animate-marquee-reverse" style={{ display: "flex", gap: "1rem", paddingRight: "1rem" }}>
            {duplicatedMediaPartners.map((partner, i) => (
              <div key={`media-${i}`} className="glass" style={{
                padding: "1rem", borderRadius: "20px", fontSize: "1rem", fontWeight: 600,
                minWidth: "220px", height: "100px",
                color: "var(--text-muted)", border: "1px solid var(--glass-border)",
                background: "transparent", display: "inline-flex", alignItems: "center", justifyContent: "center"
              }}>
                📢 {partner}
              </div>
            ))}
          </div>
        </div>
      </div>



    </section>
  );
}
