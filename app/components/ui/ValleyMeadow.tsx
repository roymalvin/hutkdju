"use client";

export default function ValleyMeadow({ color = "#8b5cf6" }: { color?: string }) {
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.95, overflow: "hidden" }}>
      
      {/* Falling Petals (Bunga Berguguran) */}
      <div className="petals-container" style={{ position: "absolute", width: "100%", height: "100%", top: 0, zIndex: 0 }}>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className={`petal p-${i + 1}`} 
            style={{ 
              backgroundColor: color,
              boxShadow: `0 0 6px 1px ${color}80` 
            }} 
          />
        ))}
      </div>

      {/* Rolling Hills (Lembah) at the bottom */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "150px", position: "absolute", bottom: 0, zIndex: 1 }}
      >
        <g opacity="0.9">
          {/* Back Hill */}
          <path d="M-10,110 Q 25,30 65,80 T 120,110 Z" fill={color} opacity="0.3" />
          {/* Middle Hill */}
          <path d="M-20,110 Q 30,90 70,40 T 130,110 Z" fill={color} opacity="0.5" />
          {/* Front Hill */}
          <path d="M-10,110 Q 15,60 55,80 T 110,50 L 110,110 Z" fill={color} opacity="0.7" />
        </g>
      </svg>

      <style>{`
        .petal {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 10px 0 10px 0; /* Creates a leaf/petal shape */
          top: -20px;
          opacity: 0;
        }

        /* Generate random animations for each petal */
        ${[...Array(8)].map((_, i) => {
          const pseudoRandom = (seed: number) => {
             const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
             return Number((x - Math.floor(x)).toFixed(3));
          };
          const isLeft = i % 2 === 0;
          return `
          .p-${i + 1} {
            left: ${isLeft ? pseudoRandom(1) * 30 : 70 + pseudoRandom(2) * 30}%;
            animation: fall ${5 + pseudoRandom(3) * 5}s linear infinite;
            animation-delay: -${pseudoRandom(4) * 5}s;
            transform: scale(${0.5 + pseudoRandom(5) * 0.5}) rotate(${pseudoRandom(6) * 360}deg);
          }`;
        }).join('')}

        @keyframes fall {
          0% { transform: translateY(-20px) translateY(0) rotate(0deg) scale(0.8); opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { transform: translateY(400px) translateY(0) rotate(360deg) scale(0.8); opacity: 0; }
        }

        @keyframes fallRight {
          0% { transform: translateY(-20px) translateX(0) rotate(0deg) scale(0.8); opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { transform: translateY(400px) translateX(120px) rotate(720deg) scale(0.8); opacity: 0; }
        }

        @keyframes fallLeft {
          0% { transform: translateY(-20px) translateX(0) rotate(0deg) scale(0.8); opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { transform: translateY(400px) translateX(-120px) rotate(-720deg) scale(0.8); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
