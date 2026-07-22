"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Phone, Mail, MessageCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const contacts = [
  {
    name: "Steffi Meilia",
    role: "Divisi Hubungan Masyarakat & Sponsorship",
    phone: "+62 853-6797-9930",
    icon: <MessageCircle size={24} className="text-[var(--accent-base)]" />
  },
  {
    name: "Thiona Neisha Nayaka",
    role: "Divisi Hubungan Masyarakat & Sponsorship",
    phone: "+62 856-4697-3273",
    icon: <MessageCircle size={24} className="text-[var(--accent-base)]" />
  }
];

export default function ContactPersonSection() {
  const container = useRef(null);

  useGSAP(() => {
    // Animasi munculnya kartu kontak
  }, { scope: container });

  return (
    <section id="contact" className="section" ref={container} style={{ paddingBottom: "6rem" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            <span style={{ color: "var(--text-main)" }}>Butuh Bantuan </span>
            <span className="gradient-text">Lebih Lanjut?</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            Silakan hubungi Contact Person kami di bawah ini untuk pertanyaan terkait donasi, kerjasama sponsorship, maupun hal lainnya.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="glass"
              style={{
                padding: "2rem",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid var(--glass-border)",
                background: "var(--bg-secondary)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                background: "var(--bg-main)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: "0 4px 20px -5px rgba(0,0,0,0.1)"
              }}>
                {contact.icon}
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.5rem" }}>
                {contact.name}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                {contact.role}
              </p>

              <a
                href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-calm btn-gradient-solid"
                style={{
                  padding: "0.75rem 1.5rem",
                  fontSize: "0.95rem",
                  width: "100%",
                  display: "inline-block",
                  borderRadius: "12px"
                }}
              >
                Hubungi WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
