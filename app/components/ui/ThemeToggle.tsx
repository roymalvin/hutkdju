"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: "2.5rem", height: "2.5rem" }} />; // Placeholder to avoid layout shift
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      style={{
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
        boxShadow: "var(--shadow-sm)",
        color: "var(--text-main)",
        cursor: "pointer",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        transition: "all 0.4s ease",
        transform: "translateY(0)"
      }}
      aria-label="Toggle Dark Mode"
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-soft)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
      onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(1px)"; e.currentTarget.style.boxShadow = "none"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-soft)"; }}
    >
      <div
        style={{ 
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.5s ease-in-out"
        }}
      >
        {isDark ? <Moon size={20} /> : <Sun size={20} />}
      </div>
    </button>
  );
}
