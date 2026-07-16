"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ShoppingBag, Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const merchItems = [
  {
    name: "T-Shirt 'Roots of Revival'",
    price: "Rp 120.000",
    imagePlaceholder: "linear-gradient(135deg, #2b3a2a, #1a241a)",
    tag: "Best Seller"
  },
  {
    name: "Tote Bag Eksklusif",
    price: "Rp 65.000",
    imagePlaceholder: "linear-gradient(135deg, #1a2a3a, #0d151d)",
    tag: ""
  },
  {
    name: "Lanyard KDJU 26",
    price: "Rp 35.000",
    imagePlaceholder: "linear-gradient(135deg, #3a2a1a, #1d150d)",
    tag: "New"
  }
];

export default function MerchandiseSection() {
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

    tl.fromTo(".merch-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    tl.fromTo(".merch-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)" },
      "-=0.4"
    );

  }, { scope: container });

  return (
    <section id="merchandise" className="section" ref={container}>
      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className="merch-header">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "2rem", background: "rgba(147, 165, 49, 0.1)", border: "1px solid rgba(147, 165, 49, 0.2)", color: "var(--accent-base)", marginBottom: "1rem", fontSize: "0.875rem", fontWeight: 600 }}>
            <ShoppingBag size={16} /> Official Merchandise
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            <span style={{ color: "var(--text-main)" }}>Dukung </span>
            <span className="gradient-text">Acara Kami</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto" }}>
            Miliki merchandise eksklusif HUT KDJU 26. Seluruh keuntungan akan digunakan untuk mendukung kegiatan pelestarian lingkungan.
          </p>
        </div>

        <div className="merch-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {merchItems.map((item, idx) => (
            <div key={idx} className="merch-card glass" style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--glass-border)", display: "flex", flexDirection: "column", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = "translateY(-10px)";
                   e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = "translateY(0)";
                   e.currentTarget.style.boxShadow = "none";
                 }}>
              
              {/* Image Area */}
              <div style={{ width: "100%", height: "250px", background: item.imagePlaceholder, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.875rem", fontWeight: 500 }}>[Gambar {item.name}]</span>
                {item.tag && (
                  <div style={{ position: "absolute", top: "1rem", right: "1rem", padding: "0.25rem 0.75rem", borderRadius: "2rem", background: "var(--accent-base)", color: "white", fontSize: "0.75rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    {item.tag === "Best Seller" && <Star size={12} fill="currentColor" />} {item.tag}
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.5rem" }}>{item.name}</h3>
                <p style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--accent-base)", marginBottom: "1.5rem" }}>{item.price}</p>
                
                <a href="#" style={{ marginTop: "auto", display: "block", textAlign: "center", padding: "0.875rem", borderRadius: "12px", background: "var(--text-main)", color: "var(--bg-main)", fontWeight: 600, textDecoration: "none", transition: "background 0.3s ease" }}
                   onMouseEnter={(e) => e.currentTarget.style.background = "var(--text-muted)"}
                   onMouseLeave={(e) => e.currentTarget.style.background = "var(--text-main)"}>
                  Pre-Order Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
