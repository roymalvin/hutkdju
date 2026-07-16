"use client";

export default function FloatingWaterParticles({ color = "#0ea5e9" }: { color?: string }) {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}>
      {/* Particles coming out of the card */}
      <div className="water-particles-container" style={{ position: "absolute", width: "100%", height: "100%" }}>
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className={`wp wp-${i + 1}`} 
            style={{ 
              backgroundColor: color,
              boxShadow: `0 0 10px 2px ${color}` 
            }} 
          />
        ))}
      </div>

      <style>{`
        .wp {
          position: absolute;
          border-radius: 50%;
          opacity: 0;
        }

        /* Generate random animations for each particle */
        ${[...Array(15)].map((_, i) => {
          const pseudoRandom = (seed: number) => {
             const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
             return Number((x - Math.floor(x)).toFixed(3));
          };
          const size = 3 + pseudoRandom(1) * 5;
          const startX = -10 + pseudoRandom(2) * 120; // -10% to 110% (outside the box horizontally)
          const endX = startX + (pseudoRandom(3) - 0.5) * 150; // Drift even further sideways
          const startY = 80 + pseudoRandom(4) * 30; // Start near the bottom of the card
          
          return `
          .wp-${i + 1} {
            width: ${size}px;
            height: ${size}px;
            left: ${startX}%;
            top: ${startY}%;
            animation: floatWater${i} ${4 + pseudoRandom(5) * 4}s ease-in infinite;
            animation-delay: -${pseudoRandom(6) * 5}s;
          }
          
          @keyframes floatWater${i} {
            0% { transform: translateY(0) translateX(0) scale(0); opacity: 0; }
            20% { opacity: 0.8; transform: translateY(-50px) translateX(${(endX - startX) * 0.2}px) scale(1.2); }
            80% { opacity: 0.5; }
            100% { transform: translateY(-400px) translateX(${endX - startX}px) scale(0); opacity: 0; }
          }
          `;
        }).join('')}
      `}</style>
    </div>
  );
}
