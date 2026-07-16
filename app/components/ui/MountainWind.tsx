"use client";

export default function MountainWind({ color = "#ef4444" }: { color?: string }) {
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "180px", pointerEvents: "none", opacity: 0.7 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: 0,
        }}
      >
        <defs>
          <filter id="fog-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        {/* Fast Wind Lines */}
        <g className="wind-layer">
          <line x1="-30" y1="20" x2="-5" y2="20" stroke={color} strokeWidth="0.5" strokeOpacity="0.4" className="wind-line w1" strokeLinecap="round" />
          <line x1="-20" y1="35" x2="0" y2="35" stroke={color} strokeWidth="0.8" strokeOpacity="0.7" className="wind-line w2" strokeLinecap="round" />
          <line x1="-40" y1="50" x2="-15" y2="50" stroke={color} strokeWidth="0.4" strokeOpacity="0.3" className="wind-line w3" strokeLinecap="round" />
          <line x1="-25" y1="65" x2="-10" y2="65" stroke={color} strokeWidth="0.6" strokeOpacity="0.5" className="wind-line w4" strokeLinecap="round" />
          <line x1="-35" y1="80" x2="-5" y2="80" stroke={color} strokeWidth="0.3" strokeOpacity="0.6" className="wind-line w5" strokeLinecap="round" />
          <line x1="-15" y1="45" x2="-5" y2="45" stroke={color} strokeWidth="0.5" strokeOpacity="0.8" className="wind-line w6" strokeLinecap="round" />
        </g>
        
        {/* Small Mountains at the bottom */}
        <g className="mountains">
          {/* Back mountain range (tallest) */}
          <path d="M-5,105 L25,10 L45,45 L75,5 L105,105 Z" fill={color} opacity="0.2" />
          {/* Middle mountain range */}
          <path d="M-10,105 L30,35 L55,60 L85,25 L110,105 Z" fill={color} opacity="0.4" />
          {/* Front mountain range (shortest) */}
          <path d="M10,105 L45,50 L70,75 L95,45 L105,105 Z" fill={color} opacity="0.6" />
        </g>
        
        {/* Fog / Mist */}
        <g className="fog" filter="url(#fog-blur)" fill="#ffffff">
          <ellipse cx="15" cy="95" rx="35" ry="8" opacity="0.3" className="fog-1" />
          <ellipse cx="65" cy="100" rx="45" ry="10" opacity="0.2" className="fog-2" />
          <ellipse cx="95" cy="90" rx="30" ry="6" opacity="0.25" className="fog-3" />
        </g>
      </svg>
      <style>{`
        .wind-line {
          animation-name: blowWind;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .w1 { animation-duration: 6s; animation-delay: 0s; }
        .w2 { animation-duration: 5s; animation-delay: 1.5s; }
        .w3 { animation-duration: 7s; animation-delay: 0.5s; }
        .w4 { animation-duration: 6.5s; animation-delay: 2.5s; }
        .w5 { animation-duration: 8s; animation-delay: 4s; }
        .w6 { animation-duration: 4.5s; animation-delay: 3s; }
        
        @keyframes blowWind {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(150px); opacity: 0; }
        }
        
        .fog-1 { animation: driftFog 12s ease-in-out infinite alternate; }
        .fog-2 { animation: driftFog 16s ease-in-out infinite alternate-reverse; }
        .fog-3 { animation: driftFog 14s ease-in-out infinite alternate; }
        
        @keyframes driftFog {
          0% { transform: translateX(-15px); }
          100% { transform: translateX(15px); }
        }
      `}</style>
    </div>
  );
}
