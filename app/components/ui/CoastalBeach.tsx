"use client";
import { Sun } from "lucide-react";

export default function CoastalBeach({ color = "#eab308" }: { color?: string }) {
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
      
      {/* Sparkling Sand Dust */}
      <div className="sparkles-container" style={{ position: "absolute", width: "100%", height: "100%", top: 0, zIndex: 0 }}>
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className={`sparkle s-${i + 1}`} 
            style={{ 
              backgroundColor: color,
              boxShadow: `0 0 6px 1px ${color}` 
            }} 
          />
        ))}
      </div>

      {/* Sandy Beach / Coast at the bottom */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "150px", position: "absolute", bottom: 0, zIndex: 1 }}
      >
        <g opacity="0.95">
          {/* Back Sand Dune */}
          <path d="M-10,110 Q 30,30 120,60 L 120,110 Z" fill={color} opacity="0.4" />
          {/* Front Sand Dune / Beach */}
          <path d="M-10,110 Q 40,110 110,30 L 110,110 Z" fill={color} opacity="0.75" />
        </g>
      </svg>

      <style>{`
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          bottom: 20px;
          opacity: 0;
        }

        /* Generate random animations for each sparkle */
        ${[...Array(10)].map((_, i) => {
          const pseudoRandom = (seed: number) => {
             const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
             return Number((x - Math.floor(x)).toFixed(3));
          };
          const swayOffset = (pseudoRandom(1) - 0.5) * 40; // Random sway left or right
          return `
          .s-${i + 1} {
            left: ${pseudoRandom(2) * 100}%;
            top: ${10 + pseudoRandom(3) * 80}%;
            animation: 
              floatUp ${3 + pseudoRandom(4) * 4}s ease-in infinite,
              sway ${2 + pseudoRandom(5) * 2}s ease-in-out infinite alternate;
            animation-delay: -${pseudoRandom(6) * 5}s, -${pseudoRandom(7) * 2}s;
          }
          
          @keyframes floatSparkle${i} {
            0% { transform: translateY(0) translateX(0) scale(0); opacity: 0; }
            20% { opacity: 0.9; transform: translateY(-20px) translateX(${swayOffset * 0.2}px) scale(1); }
            80% { opacity: 0.5; }
            100% { transform: translateY(-150px) translateX(${swayOffset}px) scale(0); opacity: 0; }
          }
          `;
        }).join('')}
      `}</style>
    </div>
  );
}
