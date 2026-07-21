"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutSection() {
  const container = useRef(null);

  useGSAP(() => {
    

    

  }, { scope: container });

  // 3D Tilt Handlers
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transition = "transform 0.15s ease-out, box-shadow 0.3s ease";
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
  };

  return (
    <section id="about" className="section" ref={container}>
      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className="bento-title">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            <span style={{ color: "var(--text-main)" }}>Apa itu </span>
            <span className="gradient-text">&quot;HUT KDJU 26&quot; ?</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.125rem" }}>
            Lebih dari sekadar perayaan, ini adalah aksi nyata untuk masa depan.
          </p>
        </div>

        <div className="bento-grid">
          
          {/* Card 1: Sejarah */}
          <div 
            className="glass bento-card card-large"
            onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.5s ease, box-shadow 0.3s ease" }}
          >
            <h3 className="bento-heading">Perjalanan Panjang</h3>
            <p className="bento-text">
              Program kerja tahunan untuk memperingati hari terbentuknya Kamadhis Dharma Jaya UAJY sejak tahun 2000. 
              Pada tahun ini, kami merayakan hari ulang tahun yang ke-26, tepatnya pada tanggal <strong>27 September 2026</strong>.
            </p>
          </div>

          {/* Card 2: Tema */}
          <div 
            className="glass bento-card card-highlight"
            onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.5s ease, box-shadow 0.3s ease" }}
          >
            <h3 className="bento-heading" style={{ color: "white" }}>Roots of Revival</h3>
            <p className="bento-text" style={{ color: "rgba(255,255,255,0.9)" }}>
              Merepresentasikan upaya menumbuhkan kembali fondasi keseimbangan ekosistem, layaknya kokohnya akar mangrove yang menjadi benteng pelindung pesisir dari ancaman abrasi.
            </p>
          </div>

          {/* Card 3: Roots */}
          <div 
            className="glass bento-card"
            onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.5s ease, box-shadow 0.3s ease" }}
          >
            <h3 className="bento-heading gradient-text">Makna &quot;Roots&quot;</h3>
            <p className="bento-text">
              Melambangkan ikatan persaudaraan KDJU yang semakin menancap kuat dan kokoh di usia ke-26 ini.
            </p>
          </div>

          {/* Card 4: Revival */}
          <div 
            className="glass bento-card"
            onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.5s ease, box-shadow 0.3s ease" }}
          >
            <h3 className="bento-heading gradient-text">Makna &quot;Revival&quot;</h3>
            <p className="bento-text">
              Adalah wujud aksi nyata kebangkitan untuk bergotong-royong memulihkan alam dan melestarikan lingkungan.
            </p>
          </div>

        </div>
      </div>

      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 1.5rem;
          max-width: 64rem;
          margin: 0 auto;
          perspective: 1500px;
        }

        .bento-card {
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
        }

        .bento-card:hover {
          box-shadow: var(--shadow-soft);
        }

        .card-large {
          grid-column: span 2;
        }

        .card-highlight {
          grid-column: span 1;
          grid-row: span 2;
          background: linear-gradient(135deg, var(--accent-base), var(--accent-dark)) !important;
          border: none;
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
        }

        .bento-heading {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.02em;
        }

        .bento-text {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1.05rem;
        }

        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .card-large, .card-highlight {
            grid-column: span 2;
            grid-row: auto;
          }
          .bento-card {
            padding: 1.5rem;
            gap: 0.75rem;
          }
          .bento-heading {
            font-size: 1.25rem;
          }
          .bento-text {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .bento-card {
            padding: 1.25rem;
          }
          .bento-heading {
            font-size: 1.1rem;
          }
          .bento-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
