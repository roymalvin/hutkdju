"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Calendar, Users, Trophy, Heart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const timelineEvents = [
  {
    date: "TBA",
    title: "Open Donasi",
    description: "Pembukaan pengumpulan dana donasi untuk mendukung kegiatan.",
    icon: <Heart size={20} />,
    color: "var(--accent-base)"
  },
  {
    date: "TBA",
    title: "Close Donasi",
    description: "Batas akhir pengumpulan donasi.",
    icon: <Calendar size={20} />,
    color: "var(--text-muted)"
  },
  {
    date: "TBA",
    title: "Open Pendaftaran Revival Planting",
    description: "Pendaftaran peserta untuk kegiatan penanaman mangrove.",
    icon: <Users size={20} />,
    color: "var(--accent-blue)"
  },
  {
    date: "TBA",
    title: "Close Pendaftaran Revival Planting",
    description: "Penutupan pendaftaran kegiatan penanaman mangrove.",
    icon: <Calendar size={20} />,
    color: "var(--text-muted)"
  },
  {
    date: "TBA",
    title: "Open Pendaftaran Birthday Party",
    description: "Pendaftaran untuk menghadiri acara puncak perayaan HUT.",
    icon: <Trophy size={20} />,
    color: "var(--accent-base)"
  },
  {
    date: "TBA",
    title: "Close Pendaftaran Birthday Party",
    description: "Batas akhir pendaftaran acara puncak ulang tahun.",
    icon: <Calendar size={20} />,
    color: "var(--text-muted)"
  }
];

export default function TimelineSection() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(".timeline-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    const items = gsap.utils.toArray(".timeline-item");
    items.forEach((item: any, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    gsap.fromTo(".timeline-line",
      { scaleY: 0 },
      {
        scaleY: 1, duration: 1.5, ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1
        }
      }
    );

  }, { scope: container });

  return (
    <section id="timeline" className="section" ref={container}>
      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className="timeline-header">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            <span style={{ color: "var(--text-main)" }}>Linimasa </span>
            <span className="gradient-text">Kegiatan</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto" }}>
            Catat tanggal-tanggal penting ini agar tidak terlewat momen berharga bersama kami.
          </p>
        </div>

        <div className="timeline-container" style={{ position: "relative", maxWidth: "800px", margin: "0 auto", padding: "2rem 0" }}>
          {/* Garis Vertikal */}
          <div 
            className="timeline-line" 
            style={{ 
              position: "absolute", left: "50%", top: 0, bottom: 0, 
              width: "2px", background: "linear-gradient(to bottom, var(--accent-base), var(--accent-blue))",
              transformOrigin: "top", marginLeft: "-1px"
            }} 
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="timeline-item" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                  
                  {/* Bagian Kiri */}
                  <div style={{ width: "45%", textAlign: isEven ? "right" : "left", order: isEven ? 1 : 3 }}>
                    <div className="glass" style={{ padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--glass-border)", display: "inline-block", width: "100%", textAlign: "left" }}>
                      <span style={{ display: "inline-block", color: event.color, fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.5rem", padding: "0.25rem 0.75rem", borderRadius: "2rem", background: "var(--bg-secondary)" }}>
                        {event.date}
                      </span>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.5rem" }}>{event.title}</h3>
                      <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>{event.description}</p>
                    </div>
                  </div>

                  {/* Ikon Tengah */}
                  <div style={{ order: 2, zIndex: 2, display: "flex", justifyContent: "center", width: "10%" }}>
                    <div style={{ 
                      width: "3rem", height: "3rem", borderRadius: "50%", 
                      background: "var(--bg-main)", border: `2px solid ${event.color}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: event.color, boxShadow: "var(--shadow-sm)"
                    }}>
                      {event.icon}
                    </div>
                  </div>

                  {/* Ruang Kosong */}
                  <div style={{ width: "45%", order: isEven ? 3 : 1 }}></div>

                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 24px !important;
          }
          .timeline-item {
            flex-direction: column;
            align-items: flex-start !important;
          }
          .timeline-item > div:nth-child(1) { /* Konten Kiri (asli) */
            width: 100% !important;
            order: 2 !important;
            padding-left: 4rem;
          }
          .timeline-item > div:nth-child(2) { /* Ikon */
            width: 3rem !important;
            order: 1 !important;
            position: absolute;
            left: 0;
            margin-left: 0.5rem;
          }
          .timeline-item > div:nth-child(3) { /* Ruang Kosong */
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
