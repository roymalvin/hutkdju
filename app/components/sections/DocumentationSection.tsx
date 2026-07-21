"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Camera } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const col1 = [4, 2, 8];
const col2 = [1, 7, 3, 9]; // Center column
const col3 = [5, 6, 10];

export default function DocumentationSection() {
  const container = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Stagger fade in for all images
    gsap.fromTo(
      ".doc-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );

    // Parallax effect on columns (only on desktop where columns are side-by-side)
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(".doc-col-1",
        { y: 40 },
        {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );

      gsap.fromTo(".doc-col-2",
        { y: -40 },
        {
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );

      gsap.fromTo(".doc-col-3",
        { y: 60 },
        {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    });

  }, { scope: container });

  const renderImage = (num: number) => (
    <div
      key={num}
      className="doc-item relative overflow-hidden rounded-2xl glass-card group cursor-pointer mb-8"
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[var(--accent-blue)] mix-blend-screen pointer-events-none" />

      <Image
        src={`/images/documentation/HUT25_${num}.JPG`}
        alt={`Dokumentasi HUT 25 - ${num}`}
        width={600}
        height={800}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ width: "100%", height: "auto", display: "block" }}
        className="transform transition-transform duration-700 group-hover:scale-105"
        priority={num <= 3} // Priority load the first row
      />
    </div>
  );

  return (
    <section id="documentation" className="section relative overflow-hidden py-32" ref={container}>
      <div className="container-main relative z-10">

        {/* Header */}
        <div className="doc-header" style={{ textAlign: "center", position: "relative", zIndex: 20 }}>


          <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
            <span className="text-[var(--text-main)]">Momen Indah </span>
            <span className="gradient-text">HUT KDJU Ke-25</span>
          </h2>

          <p style={{ maxWidth: "42rem", margin: "0 auto", fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.7, textAlign: "center" }}>
            Mengingat kembali tawa, kebersamaan, dan semangat yang menyala di perayaan tahun lalu. Kita bawa semangat itu kembali tahun ini!
          </p>
        </div>

        {/* Masonry Grid */}
        <div ref={gridRef} className="doc-grid flex flex-col md:flex-row md:items-center" style={{ gap: "2rem" }}>

          {/* Column 1 */}
          <div className="doc-col-1 flex-1 flex flex-col">
            {col1.map(renderImage)}
          </div>

          {/* Column 2 */}
          <div className="doc-col-2 flex-1 flex flex-col">
            {col2.map(renderImage)}
          </div>

          {/* Column 3 */}
          <div className="doc-col-3 flex-1 flex flex-col">
            {col3.map(renderImage)}
          </div>

        </div>
      </div>

      {/* Background Ornaments */}
      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[60px] -z-10" style={{ background: "radial-gradient(circle, rgba(0, 163, 255, 0.05) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[60px] -z-10" style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)" }} />
      
      <style jsx>{`
        .doc-header {
          margin-bottom: 4rem;
        }
        .doc-grid {
          padding-top: 6rem;
          padding-bottom: 6rem;
        }
        
        @media (max-width: 768px) {
          .doc-header {
            margin-bottom: 2.5rem !important;
          }
          .doc-grid {
            padding-top: 2rem !important;
            padding-bottom: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
