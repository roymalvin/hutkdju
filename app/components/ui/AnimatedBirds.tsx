"use client";

export default function AnimatedBirds({ color = "#ffffff", scaleMultiplier = 1 }: { color?: string, scaleMultiplier?: number }) {
  const FlyingBird = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`flap-bird ${className}`}>
      {/* A simple gliding bird shape (looks like a wide "V" or "M") */}
      <path d="M2 14 Q 7 5 12 12 Q 17 5 22 14" />
    </svg>
  );

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "60%", pointerEvents: "none", overflow: "hidden", zIndex: 1 }}>
      <div className="bird-wrapper b1" style={{ position: "absolute", top: "20%" }}>
        <FlyingBird size={24 * scaleMultiplier} />
      </div>
      <div className="bird-wrapper b2" style={{ position: "absolute", top: "10%" }}>
        <FlyingBird size={16 * scaleMultiplier} />
      </div>
      <div className="bird-wrapper b3" style={{ position: "absolute", top: "35%" }}>
        <FlyingBird size={28 * scaleMultiplier} />
      </div>
      <style>{`
        .bird-wrapper {
          animation-name: flyBird;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        
        /* Flapping motion for the bird to simulate flying */
        .flap-bird {
          animation: flapWings 0.6s ease-in-out infinite;
          transform-origin: center;
        }
        
        .b1 { animation-duration: 18s; animation-delay: 2s; }
        .b2 { animation-duration: 25s; animation-delay: 8s; }
        .b3 { animation-duration: 15s; animation-delay: 15s; }
        
        /* Give birds slightly different flapping speeds */
        .b3 .flap-bird { animation-duration: 0.5s; animation-delay: 0.1s; }
        
        /* Generate random animations for each bird */
        ${[...Array(5)].map((_, i) => {
          const pseudoRandom = (seed: number) => {
             const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
             return Number((x - Math.floor(x)).toFixed(3));
          };
          const startY = 10 + pseudoRandom(1) * 60;
          const endY = startY + (pseudoRandom(2) - 0.5) * 30; // Small vertical drift
          
          return `
          .bird-${i + 1} {
            top: ${startY}%;
            animation: flyBird${i} ${15 + pseudoRandom(3) * 15}s linear infinite;
            animation-delay: -${pseudoRandom(4) * 20}s;
            transform: scale(${0.4 + pseudoRandom(5) * 0.6});
          }
      `}).join('')}

        @keyframes flyBird {
          0% { transform: translateX(-50px); }
          100% { transform: translateX(450px); }
        }
        
        @keyframes flapWings {
          0% { transform: scaleY(1) translateY(0px); }
          50% { transform: scaleY(-0.6) translateY(4px); }
          100% { transform: scaleY(1) translateY(0px); }
        }
      `}</style>
    </div>
  );
}
