"use client";


const philosophyItems = [
  {
    title: "Angka 26",
    description: "Melambangkan peringatan Hari Ulang Tahun Keluarga Mahasiswa Buddhis (Kamadhis) Dharma Jaya UAJY yang ke-26. Angka ini menjadi simbol kedewasaan, pengalaman, dan perjalanan panjang organisasi dalam membina persaudaraan.",
    imageSrc: "/images/logo-parts/Angka%2026.png",
    alt: "Potongan Logo Angka 26"
  },
  {
    title: "Matahari Bersinar",
    description: "Melambangkan sumber kehangatan, harapan baru, dan pencerahan. Sinar kuning yang memancar merepresentasikan ajaran Buddha Dharma yang selalu menjadi landasan serta penerang bagi setiap langkah dan pengabdian Kamadhis Dharma Jaya UAJY di masa depan.",
    imageSrc: "/images/logo-parts/Matahari%20Bersinar.png",
    alt: "Potongan Logo Matahari"
  },
  {
    title: "Gelombang Air Biru",
    description: "Diwujudkan dalam bentuk gelombang air laut yang merepresentasikan pesisir Pantai. Warna biru dan aliran air ini melambangkan dinamika kehidupan, ketenangan, serta kebijaksanaan yang terus mengalir dan mampu beradaptasi dalam menghadapi berbagai rintangan, layaknya air yang selalu menemukan jalannya.",
    imageSrc: "/images/logo-parts/Gelombang%20Air%20Biru.png",
    alt: "Potongan Logo Gelombang Air"
  },
  {
    title: "Akar Mangrove",
    description: "Akar yang menancap ke bawah melambangkan fondasi persaudaraan organisasi yang semakin kokoh di usia ke-26.",
    imageSrc: "/images/logo-parts/Akar%20Mangrove.png",
    alt: "Potongan Logo Akar Mangrove"
  },
  {
    title: "Daun Mangrove",
    description: "Dedaunan yang bertumbuh ke atas melambangkan semangat kebangkitan (revival), kehidupan baru, dan komitmen KDJU untuk terus bertumbuh serta berkontribusi nyata dalam pemulihan ekosistem.",
    imageSrc: "/images/logo-parts/Daun%20Mangrove.png",
    alt: "Potongan Logo Daun Mangrove"
  }
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="section">
      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>

        <div style={{ textAlign: "center", marginBottom: "4rem" }} className="phil-title">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            <span style={{ color: "var(--text-main)" }}>Makna </span>
            <span className="gradient-text">Logo</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.125rem", maxWidth: "700px", margin: "0 auto" }}>
            Setiap elemen pada logo HUT KDJU 26 memiliki filosofi mendalam yang merepresentasikan perjalanan, harapan, dan komitmen organisasi.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem", maxWidth: "1000px", margin: "0 auto" }}>
          {philosophyItems.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="phil-row" style={{
                display: "flex",
                flexDirection: isEven ? "row" : "row-reverse",
                gap: "3rem",
                alignItems: "center"
              }}>
                {/* Teks */}
                <div className="phil-text glass" style={{
                  flex: 1,
                  padding: "2rem",
                  borderRadius: "20px",
                  border: "1px solid var(--glass-border)",
                  textAlign: isEven ? "left" : "right"
                }}>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "1rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "1.05rem" }}>
                    {item.description}
                  </p>
                </div>

                {/* Gambar (Kepingan Logo) */}
                <div className="phil-img-container" style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  padding: "2rem"
                }}>
                  {/* Efek glow di belakang gambar */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(circle at center, var(--accent-base) 0%, transparent 60%)",
                    opacity: 0.1, zIndex: -1,
                    borderRadius: "50%"
                  }} />

                  <div style={{
                    width: "100%", maxWidth: "300px", aspectRatio: "1/1",
                    position: "relative",
                    background: "var(--bg-secondary)",
                    borderRadius: "24px",
                    border: "1px dashed var(--glass-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                  }}>
                    <img
                      src={item.imageSrc}
                      alt={item.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        position: "relative",
                        zIndex: 1,
                        filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.1))"
                      }}
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0";
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .phil-row {
            flex-direction: column !important;
            text-align: left !important;
            gap: 2rem !important;
          }
          .phil-text {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
