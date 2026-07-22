import { Raleway } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "HUT KDJU",
  description:
    "Peringatan ulang tahun ke-26 Kamadhis Dharma Jaya UAJY. Mengusung tema Roots of Revival untuk aksi nyata pelestarian lingkungan dan mempererat persaudaraan.",
  keywords: ["hut kdju", "hutkdju", "kdju uajy", "kamadhis dharma jaya", "uajy", "kamadhis"],
};


import SmoothScroll from "./components/ui/SmoothScroll";
import TrailCursor from "./components/ui/TrailCursor";

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${raleway.variable} antialiased`}
      suppressHydrationWarning
    >
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {/* Global Soft Glow Background Blobs */}
          <div style={{
            position: "fixed", top: "10%", left: "-10%", width: "50vw", height: "50vw",
            background: "radial-gradient(circle, var(--accent-base) 0%, transparent 60%)", opacity: 0.15, filter: "blur(80px)", pointerEvents: "none", zIndex: -1
          }} />
          <div style={{
            position: "fixed", bottom: "-10%", right: "-5%", width: "60vw", height: "60vw",
            background: "radial-gradient(circle, var(--accent-blue) 0%, transparent 60%)", opacity: 0.15, filter: "blur(80px)", pointerEvents: "none", zIndex: -1
          }} />
          <TrailCursor />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
