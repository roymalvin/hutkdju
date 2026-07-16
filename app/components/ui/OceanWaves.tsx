"use client";

export default function OceanWaves({ color = "#0ea5e9", useGradient = false }: { color?: string, useGradient?: boolean }) {
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "200px", pointerEvents: "none", opacity: 0.6 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: 0,
        }}
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          {useGradient && (
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          )}
        </defs>
        <g>
          <use xlinkHref="#gentle-wave" x="48" y="0" fill={useGradient ? "url(#wave-grad)" : color} opacity="0.3" style={{ animation: "move-forever 7s cubic-bezier(.55,.5,.45,.5) infinite", animationDelay: "-2s" }} />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill={useGradient ? "url(#wave-grad)" : color} opacity="0.5" style={{ animation: "move-forever 10s cubic-bezier(.55,.5,.45,.5) infinite", animationDelay: "-3s" }} />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill={useGradient ? "url(#wave-grad)" : color} opacity="0.7" style={{ animation: "move-forever 13s cubic-bezier(.55,.5,.45,.5) infinite", animationDelay: "-4s" }} />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill={useGradient ? "url(#wave-grad)" : color} opacity="1.0" style={{ animation: "move-forever 20s cubic-bezier(.55,.5,.45,.5) infinite", animationDelay: "-5s" }} />
        </g>
      </svg>
      <style>{`
        @keyframes move-forever {
          0% { transform: translate3d(-90px, 0, 0); }
          100% { transform: translate3d(85px, 0, 0); }
        }
      `}</style>
    </div>
  );
}
