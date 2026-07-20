"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Calendar, MapPin, Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const features = [
  {
    title: "Revival Planting X Tree of Heart",
    description: "Aksi nyata penanaman mangrove sebagai langkah mitigasi terhadap ancaman abrasi pesisir dan memulihkan ekosistem secara berkelanjutan.",
    gradient: "var(--accent-blue)",
    targetDate: "2026-09-20T11:00:00+07:00",
    dateLabel: "20 September 2026",
    time: "11.00 WIB",
    location: "Pantai Baros",
    registrationLink: "#"
  },
  {
    title: "Birthday Party",
    description: "Perayaan puncak usia ke-26 tahun yang dirancang untuk mempererat tali persaudaraan internal seluruh anggota dan alumni KDJU.",
    gradient: "var(--accent-blue)",
    targetDate: "2026-09-26T12:30:00+07:00",
    dateLabel: "26 September 2026",
    time: "12.30 WIB",
    location: "Ruang Seminar Kampus 3 UAJY",
    registrationLink: "#"
  },
];

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return false;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
      return true;
    };

    calculateTime();
    const interval = setInterval(() => {
      if (!calculateTime()) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) return (
    <div style={{ height: "5rem", marginTop: "2rem" }}></div>
  );

  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      marginTop: "2.5rem",
      background: "var(--bg-main)",
      border: "1px solid var(--glass-border)",
      borderRadius: "9999px",
      padding: "1rem 0.5rem",
    }}>
      {[
        { label: "Hari", value: timeLeft.days },
        { label: "Jam", value: timeLeft.hours },
        { label: "Menit", value: timeLeft.minutes },
        { label: "Detik", value: timeLeft.seconds },
      ].map((item, idx, arr) => (
        <div key={idx} style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "center", minWidth: "4rem" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main)", lineHeight: 1 }}>
              {item.value.toString().padStart(2, '0')}
            </div>
            <div style={{ fontSize: "0.6rem", color: "var(--accent-blue)", textTransform: "uppercase", fontWeight: 700, marginTop: "0.4rem", letterSpacing: "0.1em" }}>
              {item.label}
            </div>
          </div>
          {idx < arr.length - 1 && (
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--glass-border)", margin: "0 0.25rem", transform: "translateY(-0.5rem)" }}>
              :
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function FeatureCard({ feature, index }) {
  return (
    <div
      className="glass feature-card"
      style={{ display: "flex", flexDirection: "column", padding: "3rem", position: "relative", overflow: "hidden" }}
    >
      {/* Background Soft Glow in Card */}
      <div style={{
        position: "absolute", top: "-20%", right: "-20%", width: "150px", height: "150px",
        background: `radial-gradient(circle, ${feature.gradient} 0%, transparent 70%)`, opacity: 0.1, filter: "blur(40px)", pointerEvents: "none"
      }} />

      {/* Content */}
      <div style={{ flex: 1, zIndex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "1.25rem", gap: "0.75rem" }}>
          <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>
            {feature.title}
          </h3>
          
          {/* Date Label */}
          <div style={{
            padding: "0.5rem 1rem", borderRadius: "12px",
            background: "var(--bg-main)", color: "var(--text-main)",
            fontSize: "0.75rem", fontWeight: 700, border: "1px solid var(--glass-border)",
            display: "flex", alignItems: "center", gap: "0.4rem"
          }}>
            <Calendar size={14} style={{ color: feature.gradient }} /> {feature.dateLabel}
          </div>
        </div>
        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem", fontWeight: 400 }}>
          {feature.description}
        </p>

        {/* Location & Time Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", borderTop: "1px solid var(--glass-border)", paddingTop: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "1.125rem", color: "var(--text-main)", fontWeight: 500 }}>
            <MapPin size={22} style={{ color: feature.gradient }} />
            <span style={{ color: "var(--text-muted)" }}>{feature.location}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "1.125rem", color: "var(--text-main)", fontWeight: 500 }}>
            <Clock size={22} style={{ color: feature.gradient }} />
            <span style={{ color: "var(--text-muted)" }}>{feature.time}</span>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div style={{ zIndex: 1 }}>
        <Countdown targetDate={feature.targetDate} />
      </div>

      {/* Registration Button */}
      {feature.registrationLink && (
        <div style={{ zIndex: 1, marginTop: "1.5rem", display: "flex", justifyContent: "center" }}>
          <a 
            href={feature.registrationLink}
            className="btn-calm btn-calm-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Daftar Sekarang
          </a>
        </div>
      )}
    </div>
  );
}

export default function FeaturesSection() {
  const container = useRef(null);

  useGSAP(() => {
    

    
  }, { scope: container });

  return (
    <section id="features" className="section" ref={container} style={{ position: "relative", overflow: "hidden" }}>
      {/* Background Subtle Elements */}
      <div style={{
        position: "absolute", top: "20%", right: "-10%", width: "40vw", height: "40vw",
        background: "radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)", opacity: 0.05, filter: "blur(100px)", pointerEvents: "none"
      }} />

      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h2
            className="feature-title"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "var(--text-main)", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}
          >
            Langkah Nyata <span className="gradient-text">& Perayaan</span>
          </h2>

          <p
            className="feature-desc"
            style={{ maxWidth: "40rem", margin: "0 auto", fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 400 }}
          >
            Mengusung tema &quot;Roots of Revival&quot;, perayaan HUT KDJU 26 menyelaraskan rasa syukur
            organisasi dengan aksi nyata restorasi ekosistem pesisir.
          </p>
        </div>

        {/* Grid */}
        <div className="feature-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          gap: "3rem"
        }}>
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .feature-grid {
            display: flex !important;
            flex-wrap: nowrap !important;
            overflow-x: auto;
            justify-content: flex-start !important;
            padding-bottom: 2rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            gap: 1.5rem !important;
          }
          .feature-grid::-webkit-scrollbar {
            display: none;
          }
          .feature-card {
            flex: 0 0 90% !important;
            padding: 2.5rem 1.5rem !important;
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
}
