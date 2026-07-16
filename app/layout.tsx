import { Raleway } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "HUT KDJU 26 — Roots of Revival",
  description:
    "Peringatan ulang tahun ke-26 Kamadhis Dharma Jaya UAJY. Mengusung tema Roots of Revival untuk aksi nyata pelestarian lingkungan dan mempererat persaudaraan.",
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
          <TrailCursor />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
