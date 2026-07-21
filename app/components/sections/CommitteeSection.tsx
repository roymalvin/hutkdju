"use client";

import { useRef, useState, UIEvent, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Users } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const committeeMembers = [
  { name: "Natalia", npm: "240428269", role: "Penanggung Jawab" },
  { name: "Roy Malvin", npm: "240712848", role: "Ketua dan Sekretaris" },
  { name: "Stevany", npm: "240327977", role: "Bendahara" },
  { name: "Steffi Meilia", npm: "250428485", role: "Koor. Humas & Sponsorship" },
  { name: "Neola Cornelia", npm: "240908689", role: "Staf Humas & Sponsorship" },
  { name: "Thiona Neisha Nayaka", npm: "240327912", role: "Staf Humas & Sponsorship" },
  { name: "Stephanie Aprilia Lo", npm: "250328518", role: "Koor. Acara Revival Planting" },
  { name: "Rinita Ellysia", npm: "250328544", role: "Staf Acara Revival Planting" },
  { name: "Yuna", npm: "240428157", role: "Staf Acara Revival Planting" },
  { name: "Agnes Angelika Sanjaya Goey", npm: "240428147", role: "Staf Acara Revival Planting" },
  { name: "Celine Valencia", npm: "240612869", role: "Staf Acara Revival Planting" },
  { name: "Celine Sesavati Hwang", npm: "250428614", role: "Koor. Acara Birthday Party" },
  { name: "Kevin Syahputra", npm: "250613271", role: "Staf Acara Birthday Party" },
  { name: "Donny Chandra Wijaya", npm: "240612876", role: "Staf Acara Birthday Party" },
  { name: "Venessya Tangrestu", npm: "230908279", role: "Staf Acara Birthday Party" },
  { name: "Stella Olivia", npm: "241712967", role: "Staf Acara Birthday Party" },
  { name: "Freddie Justin", npm: "250220159", role: "Koor. Publikasi & Dokumentasi" },
  { name: "Alexander Phan", npm: "251713157", role: "Staf Publikasi & Dokumentasi" },
  { name: "Willy Susanto", npm: "240712761", role: "Staf Publikasi & Dokumentasi" },
  { name: "Olivia Prajna Gotami", npm: "230327569", role: "Staf Publikasi & Dokumentasi" },
  { name: "Theodoric Raymond", npm: "230908435", role: "Staf Publikasi & Dokumentasi" },
  { name: "Daniel Valentino Yonathan", npm: "250713197", role: "Koor. Perlengkapan & Konsumsi" },
  { name: "Chandra Winata Ng", npm: "250328529", role: "Staf Perlengkapan & Konsumsi" },
  { name: "Raymond Benedict Lee", npm: "250220197", role: "Staf Perlengkapan & Konsumsi" },
  { name: "Favin Viranolim", npm: "230327481", role: "Staf Perlengkapan & Konsumsi" },
  { name: "Keanedylan Genius Adijaya", npm: "230515035", role: "Staf Perlengkapan & Konsumsi" }
];

export default function CommitteeSection() {
  const container = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useGSAP(() => {
    // Initial jump to the middle section to allow scrolling left immediately
    setTimeout(() => {
      if (scrollRef.current) {
        const target = scrollRef.current;
        const cards = Array.from(target.children).filter(c => c.classList.contains('glass')) as HTMLElement[];
        if (cards.length > 0) {
          const middleIndex = committeeMembers.length; // start of the middle set
          const card = cards[middleIndex];
          const scrollPos = card.offsetLeft - target.clientWidth / 2 + card.offsetWidth / 2;
          target.style.scrollBehavior = "auto";
          target.scrollLeft = scrollPos;
          target.style.scrollBehavior = "smooth";
        }
      }
    }, 100);
  }, { scope: container });

  // Triple the array: Left buffer, Middle (active), Right buffer
  const extendedMembers = [...committeeMembers, ...committeeMembers, ...committeeMembers];

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const containerCenter = target.scrollLeft + target.clientWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    const cards = Array.from(target.children).filter(c => c.classList.contains('glass')) as HTMLElement[];
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < minDistance) {
            minDistance = distance;
            closestIndex = i;
        }
    }
    
    setActiveIndex(closestIndex % committeeMembers.length);

    // Debounced silent reset to the middle section for infinite bi-directional scrolling
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
        if (!scrollRef.current) return;
        const starget = scrollRef.current;
        
        // If we strayed into the first set (left) or third set (right)
        if (closestIndex < committeeMembers.length || closestIndex >= committeeMembers.length * 2) {
            const normalizedIdx = closestIndex % committeeMembers.length;
            const targetIdx = committeeMembers.length + normalizedIdx; // corresponding card in the middle set
            
            const allCards = Array.from(starget.children).filter(c => c.classList.contains('glass')) as HTMLElement[];
            const targetCard = allCards[targetIdx];
            if (targetCard) {
                const scrollPos = targetCard.offsetLeft - starget.clientWidth / 2 + targetCard.offsetWidth / 2;
                starget.style.scrollBehavior = "auto"; // disable smooth scroll for instant jump
                starget.scrollLeft = scrollPos;
                // re-enable smooth scroll after jump
                setTimeout(() => {
                   starget.style.scrollBehavior = "smooth";
                }, 50);
            }
        }
    }, 150); // wait until scrolling completely stops
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const target = scrollRef.current;
        const containerCenter = target.scrollLeft + target.clientWidth / 2;
        
        let closestIndex = 0;
        let minDistance = Infinity;
        const cards = Array.from(target.children).filter(c => c.classList.contains('glass')) as HTMLElement[];
        
        if (cards.length === 0) return;
        
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(containerCenter - cardCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        }
        
        // Normalize index to the middle set for continuous auto-play
        let nextIndex = closestIndex + 1;
        
        // If we hit the boundary of the right buffer, reset to the middle set silently before scrolling
        if (nextIndex >= committeeMembers.length * 2) {
            const equivalentCard = cards[closestIndex - committeeMembers.length];
            const offsetDiff = cards[closestIndex].offsetLeft - equivalentCard.offsetLeft;
            target.style.scrollBehavior = "auto";
            target.scrollLeft -= offsetDiff;
            target.style.scrollBehavior = "smooth";
            nextIndex -= committeeMembers.length;
        }

        // Scroll to the next card
        const nextCard = cards[nextIndex];
        if (nextCard) {
            const scrollPos = nextCard.offsetLeft - target.clientWidth / 2 + nextCard.offsetWidth / 2;
            target.scrollTo({ left: scrollPos, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="committee" className="section" ref={container} style={{ padding: "4rem 0", position: "relative" }}>
      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <h2
            className="committee-title"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}
          >
            <span style={{ color: "var(--text-main)" }}>Susunan </span>
            <span className="gradient-text">Kepanitiaan</span>
          </h2>

          <p
            className="committee-desc"
            style={{ maxWidth: "42rem", margin: "0 auto", fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}
          >
            Orang-orang hebat di balik layar yang berdedikasi penuh untuk menyukseskan acara HUT KDJU ke-26.
          </p>
        </div>

        {/* Slider */}
        <style>{`
          .committee-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="committee-scroll"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            overflowX: "auto",
            padding: "2rem calc(50vw - 140px) 4rem calc(50vw - 140px)",
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {extendedMembers.map((member, i) => {
            const isCenter = (i % committeeMembers.length) === activeIndex;
            return (
              <div
                key={i}
                className="glass committee-card"
                style={{
                  minWidth: "280px",
                  flex: "0 0 auto",
                  scrollSnapAlign: "center",
                  padding: "2rem 1.5rem",
                  borderRadius: "20px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  border: isCenter ? "1px solid var(--accent-base)" : "1px solid var(--glass-border)",
                  background: isCenter ? "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)" : "linear-gradient(135deg, rgba(255,255,255,0.02), transparent)",
                  transform: isCenter ? "scale(1.1)" : "scale(0.85)",
                  opacity: isCenter ? 1 : 0.4,
                  transition: "all 0.5s ease",
                  boxShadow: isCenter ? "0 10px 30px rgba(147, 165, 49, 0.2)" : "none",
                  transformOrigin: "center center"
                }}
              >
                <div className="icon-container" style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background: "var(--bg-accent-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-base)",
                  marginBottom: "1rem"
                }}>
                  <Users className="committee-icon" size={40} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.25rem", lineHeight: 1.3 }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
                    {member.npm}
                  </p>
                  <p className="committee-role" style={{ fontSize: "0.9rem", color: "var(--accent-base)", fontWeight: 600, lineHeight: 1.4 }}>
                    {member.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .committee-scroll {
            padding: 2rem calc(50vw - 90px) 4rem calc(50vw - 90px) !important;
            gap: 1.25rem !important; /* Kurangi jarak antar kartu */
          }
          .committee-card {
            min-width: 180px !important; /* Kartu jadi lebih ramping */
            padding: 1.5rem 1rem !important;
            gap: 0.5rem !important;
          }
          .icon-container {
            width: 64px !important;
            height: 64px !important;
            margin-bottom: 0.5rem !important;
          }
          :global(.committee-icon) {
            width: 28px !important;
            height: 28px !important;
          }
          .committee-card h3 {
            font-size: 1rem !important;
          }
          .committee-card p {
            font-size: 0.75rem !important;
          }
          .committee-role {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
