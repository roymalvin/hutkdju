"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MapPin, Mail, Phone } from "lucide-react";

const InstagramIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const footerLinks = {
  Navigasi: [
    { label: "Beranda", href: "#hero" },
    { label: "Acara", href: "#features" },
    { label: "Tentang", href: "#about" },
    { label: "Dampak", href: "#impact" }
  ],
  Partisipasi: [
    { label: "Sponsorship", href: "#sponsorship" },
    { label: "Donatur", href: "#donors" },
    { label: "Media Partner", href: "#cta" },
    { label: "Peserta Acara", href: "#cta" }
  ],
  Informasi: [
    { label: "Unduh Proposal", href: "#cta" },
    { label: "FAQ", href: "#faq" }
  ]
};

const socialIcons = [<InstagramIcon key="1" size={18} />];

export default function Footer() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(".footer-grid", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(".footer-bottom",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
  }, { scope: container });

  return (
    <footer ref={container} style={{ position: "relative", borderTop: "1px solid var(--glass-border)", overflow: "hidden", background: "var(--bg-main)" }}>

      <div className="container-main" style={{ position: "relative", zIndex: 10, paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div
          className="footer-grid"
          style={{
            opacity: 0,
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: "2.5rem",
            marginBottom: "4rem"
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem", textDecoration: "none" }}>
              <img src="/logo-kdju.png" alt="Logo KDJU" style={{ height: "2.5rem", width: "auto", objectFit: "contain" }} />
              <img src="/logo-hut-kdju-26.png" alt="Logo HUT KDJU 26" style={{ height: "4rem", width: "auto", objectFit: "contain" }} />
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Merayakan 26 tahun perjalanan KDJU. Bersama menumbuhkan fondasi kebaikan dan persaudaraan, layaknya akar mangrove yang menopang kehidupan.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href="https://instagram.com/hutkdju_official"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.5rem 1rem", borderRadius: "2rem",
                  border: "1px solid var(--glass-border)",
                  boxShadow: "var(--shadow-sm)",
                  color: "var(--text-main)", textDecoration: "none",
                  fontSize: "0.875rem", transition: "all 0.4s ease",
                  background: "var(--bg-secondary)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-soft)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                }}
              >
                <InstagramIcon size={18} />
                <span style={{ fontWeight: 500, letterSpacing: "0.5px" }}>@hutkdju_official</span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "1rem" }}>{title}</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.3s" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-base)"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 style={{ color: "var(--text-main)", fontSize: "0.875rem", fontWeight: 600, marginBottom: "1rem" }}>Hubungi Kami</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", padding: 0 }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                <span style={{ display: "flex", alignItems: "center", color: "var(--accent-base)" }}><MapPin size={20} /></span>
                <span>
                  <strong>Universitas Atma Jaya Yogyakarta</strong><br />
                  Jl. Babarsari No.44, Janti, Caturtunggal,<br />
                  Kec. Depok, Kabupaten Sleman,<br />
                  Daerah Istimewa Yogyakarta 55281
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-muted)", fontSize: "0.875rem" }}>
                <span style={{ display: "flex", alignItems: "center", color: "var(--accent-base)" }}><Mail size={20} /></span>
                <a href="mailto:kamadhisdharmajaya@gmail.com" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-base)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>
                  kamadhisdharmajaya@gmail.com
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-muted)", fontSize: "0.875rem" }}>
                <span style={{ display: "flex", alignItems: "center", color: "var(--accent-base)" }}><Phone size={20} /></span>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-base)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>
                  +62 812-3456-7890 (Humas)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            opacity: 0,
            paddingTop: "2rem", borderTop: "1px solid var(--glass-border)",
            display: "flex", flexDirection: "column", gap: "2rem"
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", textAlign: "center" }}>
              © {new Date().getFullYear()} HUT KDJU. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
