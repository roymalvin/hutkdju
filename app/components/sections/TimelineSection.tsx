"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const timelineEvents = [
  {
    date: "TBA",
    title: "Open Donation",
    description: "Pembukaan pengumpulan dana donasi untuk mendukung kegiatan Revival Planting.",
    color: "var(--accent-base)"
  },
  {
    date: "TBA",
    title: "Close Donation",
    description: "Penutupan pengumpulan donasi.",
    color: "var(--accent-base)"
  },
  {
    date: "TBA",
    title: "Open Registration for Revival Planting",
    description: "Pendaftaran peserta untuk kegiatan penanaman mangrove.",
    color: "var(--accent-base)"
  },
  {
    date: "TBA",
    title: "Close Registration for Revival Planting",
    description: "Penutupan pendaftaran kegiatan penanaman mangrove.",
    color: "var(--accent-base)"
  },
  {
    date: "TBA",
    title: "Open Registration for Birthday Party",
    description: "Pendaftaran untuk menghadiri acara puncak perayaan ulang tahun.",
    color: "var(--accent-base)"
  },
  {
    date: "TBA",
    title: "Close Registration for Birthday Party",
    description: "Batas akhir pendaftaran acara puncak ulang tahun.",
    color: "var(--accent-base)"
  }
];

export default function TimelineSection() {
  const container = useRef(null);

  useGSAP(() => {
    // Hitung posisi garis agar tepat di tengah ikon pertama dan terakhir
    const adjustLine = () => {
      if (!container.current) return;
      const icons = container.current.querySelectorAll('.timeline-icon');
      const track = container.current.querySelector('.timeline-line-track') as HTMLElement;
      const fill = container.current.querySelector('.timeline-line-fill') as HTMLElement;
      const timelineContainer = container.current.querySelector('.timeline-container') as HTMLElement;
      
      if (icons.length > 0 && track && fill && timelineContainer) {
        const containerRect = timelineContainer.getBoundingClientRect();
        const firstRect = icons[0].getBoundingClientRect();
        const lastRect = icons[icons.length - 1].getBoundingClientRect();
        
        const topOffset = firstRect.top + (firstRect.height / 2) - containerRect.top;
        const bottomOffset = containerRect.bottom - (lastRect.top + (lastRect.height / 2));
        
        track.style.top = `${topOffset}px`;
        track.style.bottom = `${bottomOffset}px`;
        fill.style.top = `${topOffset}px`;
        fill.style.bottom = `${bottomOffset}px`;
      }
    };

    // Jalankan kalkulasi posisi garis
    adjustLine();
    window.addEventListener("resize", adjustLine);
    ScrollTrigger.addEventListener("refresh", adjustLine);

    // 1. Animasi Header
    gsap.fromTo(".timeline-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          once: true // Hanya jalankan sekali
        }
      }
    );

    // 2. Animasi Garis Utama (Scrubbing)
    gsap.fromTo(".timeline-line-fill",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-line-track",
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1,
          onRefresh: adjustLine // Pastikan garis update saat ScrollTrigger me-refresh
        }
      }
    );

    // 3. Animasi Item (Kartu & Ikon)
    const items = gsap.utils.toArray(".timeline-item");
    items.forEach((item: any) => {
      const card = item.querySelector(".timeline-card");
      const icon = item.querySelector(".timeline-icon");
      const targetColor = icon.getAttribute("data-color");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "center 55%", // Munculkan tepat saat garis hampir mengenai tengah item
          toggleActions: "play none none reverse" // Mainkan saat di-scroll ke bawah, reverse (kembali semula) saat di-scroll ke atas
        }
      });

      // Animasi Icon: Berubah warna dan membesar sedikit saat tersentuh garis
      tl.to(icon, {
        borderColor: targetColor,
        color: targetColor,
        scale: 1.15,
        duration: 0.3,
        ease: "power2.out"
      }).to(icon, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(2)"
      })
      // Animasi Card Slide-Up
      .fromTo(card,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.5"
      );
    });

    return () => {
      window.removeEventListener("resize", adjustLine);
      ScrollTrigger.removeEventListener("refresh", adjustLine);
    };

  }, { scope: container });

  return (
    <section id="timeline" className="section" ref={container}>
      <div className="container-main" style={{ position: "relative", zIndex: 10, padding: "4rem 1rem" }}>

        {/* Header */}
        <div className="timeline-header" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            <span style={{ color: "var(--text-main)" }}>Linimasa </span>
            <span className="gradient-text">Kegiatan</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            Catat tanggal-tanggal penting ini agar tidak terlewat momen berharga bersama kami.
          </p>
        </div>

        {/* Timeline Content */}
        <div className="timeline-container">
          {/* Garis Latar & Isi */}
          <div className="timeline-line-track"></div>
          <div className="timeline-line-fill"></div>

          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className={`timeline-item ${isLeft ? 'layout-left' : 'layout-right'}`}>

                {/* Ikon Bulat (Awalnya abu-abu, dianimasikan ke warna asli) */}
                <div
                  className="timeline-icon"
                  data-color={event.color}
                  style={{
                    border: "3px solid var(--glass-border)",
                    color: "var(--text-muted)",
                    boxShadow: "var(--shadow-sm)"
                  }}
                >
                  {index + 1}
                </div>

                {/* Kartu Deskripsi */}
                <div className="timeline-content">
                  <div className="timeline-card glass">
                    <span
                      className="timeline-date"
                      style={{ color: event.color, background: "var(--bg-secondary)" }}
                    >
                      {event.date}
                    </span>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .section {
          background-color: transparent;
          overflow: hidden; /* Mencegah tumpahan horizontal */
        }

        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 1rem 0;
        }

        /* 
          =============================================
          1. PENDEKATAN MOBILE-FIRST (Default untuk Mobile)
          ============================================= 
        */

        .timeline-line-track, .timeline-line-fill {
          position: absolute;
          left: 24px; /* Posisi garis di kiri untuk mobile */
          width: 3px;
          border-radius: 4px;
          transform: translateX(-50%);
        }

        .timeline-line-track {
          background: var(--glass-border);
        }

        .timeline-line-fill {
          background: linear-gradient(to bottom, var(--accent-base), var(--accent-blue));
          transform-origin: top center;
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end; /* Paksa semua kartu ke kanan di mobile */
          width: 100%;
          margin-bottom: 2.5rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-icon {
          position: absolute;
          left: 24px; /* Posisi ikon selaras dengan garis */
          top: 50%;
          transform: translate(-50%, -50%);
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          background: var(--bg-main);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.1rem;
          z-index: 2;
        }

        .timeline-content {
          width: calc(100% - 64px); /* Sisa layar dipotong area garis/ikon */
        }

        .timeline-card {
          padding: 1.5rem;
          border-radius: 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--glass-border);
          box-shadow: 0 4px 20px -5px rgba(0,0,0,0.05);
          backdrop-filter: blur(8px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: left;
        }

        .timeline-date {
          display: inline-block;
          font-weight: 700;
          font-size: 0.8rem;
          margin-bottom: 0.75rem;
          padding: 0.25rem 0.875rem;
          border-radius: 2rem;
        }

        .timeline-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .timeline-card p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
          margin: 0;
        }


        /* 
          =============================================
          2. LAYOUT DESKTOP (Di atas 768px)
          ============================================= 
        */

        @media (min-width: 769px) {
          .timeline-line-track, .timeline-line-fill {
            left: 50%; /* Garis pindah ke tengah */
          }

          .timeline-icon {
            left: 50%; /* Ikon pindah ke tengah */
            width: 3.5rem;
            height: 3.5rem;
            font-size: 1.25rem;
          }

          .timeline-item {
            margin-bottom: 4rem;
          }

          /* Kartu berselang-seling Kiri - Kanan */
          .timeline-item.layout-left { justify-content: flex-start; }
          .timeline-item.layout-right { justify-content: flex-end; }

          .timeline-content {
            width: calc(50% - 3.5rem); /* Sisakan ruang agar tidak menabrak ikon */
          }

          .timeline-card {
            padding: 2.5rem;
            border-radius: 20px;
          }

          /* Merapikan teks sisi kiri agar menempel ke poros tengah */
          .timeline-item.layout-left .timeline-card {
            text-align: right;
          }

          .timeline-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px -10px rgba(0,0,0,0.1);
          }

          .timeline-card h3 {
            font-size: 1.35rem;
            margin-bottom: 0.75rem;
          }

          .timeline-date {
            font-size: 0.85rem;
            margin-bottom: 1rem;
            padding: 0.35rem 1rem;
          }

          .timeline-card p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}