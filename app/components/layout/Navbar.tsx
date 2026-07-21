"use client";

import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { name: "Beranda", href: "#hero" },
  {
    name: "Tentang",
    dropdown: [
      { name: "Tentang Kami", href: "#about" },
      { name: "Pencapaian", href: "#impact" },
      { name: "Susunan Panitia", href: "#committee" },
    ]
  },
  {
    name: "Kegiatan",
    dropdown: [
      { name: "Program Acara", href: "#features" },
      { name: "Memory Lane", href: "#documentation" },
    ]
  },
  {
    name: "Dukungan",
    dropdown: [
      { name: "Sponsorship", href: "#sponsorship" },
      { name: "Mitra Kolaborasi", href: "#partners" },
      { name: "Daftar Donatur", href: "#donors" },
    ]
  },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      // Hitung lebar scrollbar agar layar tidak bergeser/melebar saat di-hidden
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    
    return () => { 
      document.body.style.overflow = ""; 
      document.body.style.paddingRight = "";
    };
  }, [mobileOpen]);


  useGSAP(() => {
    if (mobileOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(".mobile-link",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.04, ease: "power2.out", delay: 0.1 }
      );
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
        style={{
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid var(--glass-border)" : "1px solid transparent"
        }}
      >
        <div className="container-main">
          <div style={{ display: "flex", alignItems: "center", justifyItems: "space-between", justifyContent: "space-between", height: "5rem" }}>
            {/* Logo */}
            <a
              href="#hero"
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", transition: "transform 0.3s" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <img src="/logo-kdju.png" alt="Logo KDJU" style={{ height: "2.5rem", width: "auto", objectFit: "contain" }} />
              <img src="/logo-hut-kdju-26.png" alt="Logo HUT KDJU 26" style={{ height: "4rem", width: "auto", objectFit: "contain" }} />
            </a>

            {/* Desktop Links */}
            <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {navLinks.map((link) => (
                <div key={link.name} className={link.dropdown ? "relative group" : ""}>
                  {link.href ? (
                    <a
                      href={link.href}
                      style={{
                        padding: "0.5rem 1rem", borderRadius: "9999px",
                        fontSize: "0.875rem", fontWeight: 500,
                        color: "var(--text-main)", textDecoration: "none",
                        transition: "all 0.3s", display: "inline-block"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-secondary)"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <div
                      style={{
                        padding: "0.5rem 1rem", borderRadius: "9999px",
                        fontSize: "0.875rem", fontWeight: 500,
                        color: "var(--text-main)", cursor: "pointer",
                        transition: "all 0.3s", display: "inline-flex", alignItems: "center", gap: "0.25rem"
                      }}
                      className="group-hover:bg-[var(--bg-secondary)]"
                    >
                      {link.name} <span className="text-[10px] opacity-70">▼</span>
                    </div>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="py-2 rounded-2xl shadow-xl overflow-hidden" style={{ background: "var(--nav-bg)", border: "1px solid var(--glass-border)", backdropFilter: "blur(20px)" }}>
                        {link.dropdown.map(sub => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            style={{
                              display: "block", padding: "0.5rem 1.25rem",
                              fontSize: "0.875rem", color: "var(--text-muted)",
                              textDecoration: "none", transition: "all 0.2s"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "var(--text-main)";
                              e.currentTarget.style.background = "var(--bg-secondary)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "var(--text-muted)";
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div style={{ marginLeft: "1rem" }}>
                <a
                  href="#donors"
                  className="btn-calm btn-gradient-solid"
                  style={{
                    padding: "0.5rem 1.25rem",
                    fontSize: "0.875rem",
                    display: "inline-flex"
                  }}
                >
                  Hubungi Kami
                </a>
              </div>
            </div>

            {/* Toggle & Mobile Menu Button */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ThemeToggle />
              <button
                className="nav-mobile-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  background: "transparent", border: "none", color: "var(--text-main)",
                  fontSize: "1.5rem", cursor: "pointer", padding: "0.5rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "2.5rem", height: "2.5rem"
                }}
              >
                {mobileOpen ? <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>✕</span> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          style={{
            position: "fixed", top: "5rem", left: 0, right: 0, bottom: 0, zIndex: 40,
            background: "var(--bg-main)",
            borderTop: "1px solid var(--glass-border)",
            display: "flex", flexDirection: "column",
            overflowY: "auto"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", width: "100%", paddingBottom: "2rem" }}>
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col w-full">
                {link.href ? (
                  <a
                    href={link.href}
                    className="mobile-link"
                    onClick={() => setMobileOpen(false)}
                    style={{ 
                      padding: "1.25rem 1.5rem", 
                      fontSize: "1.125rem", fontWeight: 600, color: "var(--text-main)", 
                      textDecoration: "none", borderBottom: "1px solid var(--glass-border)",
                      opacity: 0 
                    }}
                  >
                    {link.name}
                  </a>
                ) : (
                  <>
                    <div className="mobile-link" style={{ 
                      padding: "1.25rem 1.5rem 0.5rem 1.5rem", 
                      fontSize: "0.875rem", fontWeight: 700, color: "var(--accent-base)", 
                      textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0 
                    }}>
                      {link.name}
                    </div>
                    {link.dropdown?.map((sub, idx) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="mobile-link"
                        onClick={() => setMobileOpen(false)}
                        style={{ 
                          padding: "0.75rem 1.5rem 0.75rem 2.5rem", 
                          fontSize: "1rem", fontWeight: 500, color: "var(--text-main)", 
                          textDecoration: "none", 
                          borderBottom: idx === link.dropdown.length - 1 ? "1px solid var(--glass-border)" : "none",
                          opacity: 0 
                        }}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </>
                )}
              </div>
            ))}

            <div style={{ padding: "1.5rem" }}>
              <a
                href="#donors"
                className="mobile-link btn-calm btn-gradient-solid"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", textAlign: "center", padding: "1rem", 
                  fontSize: "1rem", borderRadius: "12px", opacity: 0
                }}
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
