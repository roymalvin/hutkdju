"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HelpCircle, ChevronDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const faqs = [
  {
    question: "Apa itu HUT KDJU?",
    answer: "HUT KDJU (Hari Ulang Tahun Kamadhis Dharma Jaya UAJY) adalah acara perayaan tahunan untuk memperingati berdirinya organisasi kami. Pada peringatan ke-26 ini, kami mengadakan serangkaian kegiatan mulai dari pengabdian pelestarian lingkungan hingga puncak perayaan."
  },
  {
    question: "Apa itu Revival Planting X Tree of Heart?",
    answer: "Revival Planting X Tree of Heart adalah salah rangkaian acara dari HUT KDJU 26 berupa penanaman bibit mangrove di daerah pesisir. Tujuannya adalah untuk memulihkan ekosistem dan mencegah ancaman abrasi secara berkelanjutan."
  },
  {
    question: "Siapa Tree of Heart?",
    answer: "Tree of Heart (ToH) adalah organisasi lingkungan yang bergerak lebih dari sekadar menanam pohon. Mereka tidak hanya merawat dan memastikan setiap pohon dapat tumbuh dengan baik, tetapi juga berdedikasi tinggi untuk memberdayakan serta memperhatikan kesejahteraan masyarakat di sekitarnya."
  },
  {
    question: "Siapa saja yang bisa mengikuti acara Birthday Party?",
    answer: "Acara puncak Birthday Party diselenggarakan sebagai wadah keakraban internal kampus. Oleh karena itu, sasaran peserta untuk acara ini terdiri dari mahasiswa serta tamu undangan."
  },
  {
    question: "Bagaimana cara menyalurkan donasi?",
    answer: "Anda dapat menyalurkan donasi dengan mengklik tombol 'Berikan Donasi' yang akan mengarahkan Anda ke form donasi resmi kami."
  },
  {
    question: "Hingga kapan pendaftaran Sponsorship dibuka?",
    answer: "Kami masih menerima kerja sama sponsorship hingga H-14 dari rangkaian acara pertama (sekitar tanggal 6 September 2026). Untuk detail lebih lanjut, Anda dapat langsung menghubungi divisi Sponsorship kami."
  },
  {
    question: "Apakah donatur bisa ikut serta dalam penanaman mangrove (Revival Planting X Tree of Heart)?",
    answer: "Tentu saja! Donatur yang ingin terlibat langsung dalam aksi penanaman mangrove di Pantai Baros dapat ikut serta dengan mendaftarkan diri sebagai volunteer kegiatan. Dengan mendaftar sebagai peserta, donatur dapat berkontribusi langsung dalam menjaga ekosistem pesisir bersama kami di lokasi."
  },
  {
    question: "Kapan dan di mana rangkaian acara HUT KDJU 26 diselenggarakan?",
    answer: "Terdapat dua kegiatan utama dalam perayaan tahun ini. Kegiatan \"Revival Planting X Tree of Heart\" (penanaman mangrove) akan dilaksanakan pada Minggu, 20 September 2026 di Pantai Baros. Sementara acara puncak \"Birthday Party\" akan diadakan pada Sabtu, 26 September 2026 di Ruang Seminar Kampus 3 UAJY."
  },
  {
    question: "Selain menanam mangrove, apa saja kegiatan selama berada di Pantai Baros?",
    answer: "Peserta tidak hanya menanam mangrove, tetapi juga akan mendapatkan materi edukasi ekosistem , serta sesi berbagi wawasan lingkungan. Selain itu, akan ada sesi games outbound untuk mempererat keakraban peserta."
  },
  {
    question: "Apakah ada barang khusus yang wajib dibawa oleh peserta Revival Planting X Tree of Heart?",
    answer: "Ya! Selaras dengan nilai pelestarian lingkungan, acara ini menerapkan komitmen eco-friendly. Seluruh panitia dan peserta diwajibkan untuk membawa botol minum (tumbler) masing-masing, meminimalisir penggunaan plastik sekali pakai, serta menjaga kebersihan lokasi secara ketat."
  },
  {
    question: "Apakah panitia menyediakan transportasi menuju Pantai Baros?",
    answer: "Ya, peserta tidak perlu khawatir mengenai transportasi. Titik kumpul berada di Kampus UAJY, dan panitia telah menyediakan bus untuk berangkat bersama-sama menuju Pantai Baros serta kembali lagi ke kampus setelah acara selesai."
  },
  {
    question: "Ke mana saya harus menghubungi jika memiliki pertanyaan lebih lanjut?",
    answer: "Untuk informasi atau pertanyaan lebih lanjut, Anda dapat langsung menghubungi Contact Person kami melalui WhatsApp di nomor 0895-2911-0136."
  }
];

export default function FaqSection() {
  const container = useRef(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useGSAP(() => {



  }, { scope: container });

  return (
    <section id="faq" className="section" ref={container} style={{ position: "relative" }}>
      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          {/* Badge removed per user request */}

          <h2
            className="faq-title"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}
          >
            <span style={{ color: "var(--text-main)" }}>Ada </span>
            <span className="gradient-text">Pertanyaan?</span>
          </h2>

          <p
            className="faq-desc"
            style={{ maxWidth: "42rem", margin: "0 auto", fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.7 }}
          >
            Kami telah merangkum beberapa pertanyaan yang sering diajukan mengenai acara ini.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list" style={{ maxWidth: "48rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass faq-item"
              style={{

                borderRadius: "16px",
                overflow: "hidden",
                background: "var(--card-bg)"
              }}
            >
              <button
                className="faq-btn"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%", padding: "1.5rem", display: "flex", justifyContent: "space-between",
                  alignItems: "center", background: "none", border: "none", cursor: "pointer",
                  textAlign: "left"
                }}
              >
                <span className="faq-question" style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--text-main)" }}>
                  {faq.question}
                </span>
                <div className="faq-icon" style={{
                  width: "2rem", height: "2rem", borderRadius: "50%",
                  background: "var(--bg-accent-subtle)", display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--accent-base)", transition: "transform 0.3s",
                  border: "none", boxShadow: "var(--shadow-sm)",
                  transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  flexShrink: 0
                }}>
                  <ChevronDown size={16} />
                </div>
              </button>

              <div style={{
                height: openIndex === i ? "auto" : 0,
                opacity: openIndex === i ? 1 : 0,
                overflow: "hidden",
                transition: "all 0.3s ease-in-out"
              }}>
                <div className="faq-answer-inner" style={{ padding: "0 1.5rem 1.5rem 1.5rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .faq-list {
            padding: 0 0.5rem;
          }
          .faq-btn {
            padding: 1.25rem 1rem !important;
            gap: 1rem !important;
          }
          .faq-question {
            font-size: 1rem !important;
            line-height: 1.4 !important;
          }
          .faq-icon {
            width: 1.75rem !important;
            height: 1.75rem !important;
          }
          .faq-answer-inner {
            padding: 0 1rem 1.25rem 1rem !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
}
