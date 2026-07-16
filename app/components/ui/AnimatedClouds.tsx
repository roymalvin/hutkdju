"use client";
import { Cloud } from "lucide-react";

export default function AnimatedClouds({ color = "#ffffff", scaleMultiplier = 1, useGradient = false }: { color?: string, scaleMultiplier?: number, useGradient?: boolean }) {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "60%", pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          {useGradient && (
            <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          )}
        </defs>
      </svg>
      <div className="cloud-wrapper cw1" style={{ position: "absolute", top: "15%" }}>
        <Cloud fill={useGradient ? "url(#cloud-grad)" : color} color={color} size={48 * scaleMultiplier} opacity={0.15} />
      </div>
      <div className="cloud-wrapper cw2" style={{ position: "absolute", top: "40%" }}>
        <Cloud fill={useGradient ? "url(#cloud-grad)" : color} color={color} size={32 * scaleMultiplier} opacity={0.25} />
      </div>
      <div className="cloud-wrapper cw3" style={{ position: "absolute", top: "5%" }}>
        <Cloud fill={useGradient ? "url(#cloud-grad)" : color} color={color} size={64 * scaleMultiplier} opacity={0.1} />
      </div>
      <style>{`
        .cloud-wrapper {
          animation-name: driftClouds;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        /* Using negative delays so they are already on screen when loaded */
        .cw1 { animation-duration: 35s; animation-delay: -5s; }
        .cw2 { animation-duration: 25s; animation-delay: -15s; }
        .cw3 { animation-duration: 45s; animation-delay: -30s; }
        
        @keyframes driftClouds {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(450px); }
        }
      `}</style>
    </div>
  );
}
