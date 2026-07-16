"use client";

export default function ForestMist({ color = "#10b981" }: { color?: string }) {
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "180px", pointerEvents: "none", opacity: 0.9 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%", position: "absolute", bottom: 0 }}
      >
        <defs>
          <filter id="thick-fog-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <g id="pine-tree">
            {/* Trunk */}
            <rect x="-3" y="100" width="6" height="30" fill={color} />
            {/* 3-tier leaves, stretched taller */}
            <polygon points="0,-30 -15,20 -5,20 -25,60 -10,60 -35,100 35,100 10,60 25,60 5,20 15,20" fill={color} />
          </g>
        </defs>

        {/* Trees Background (Darker/Smaller) */}
        <g opacity="0.35">
          <use href="#pine-tree" x="15" y="30" transform="scale(0.5)" />
          <use href="#pine-tree" x="40" y="20" transform="scale(0.55)" />
          <use href="#pine-tree" x="70" y="35" transform="scale(0.45)" />
          <use href="#pine-tree" x="90" y="25" transform="scale(0.6)" />
          <use href="#pine-tree" x="120" y="40" transform="scale(0.5)" />
          <use href="#pine-tree" x="150" y="20" transform="scale(0.55)" />
          <use href="#pine-tree" x="180" y="30" transform="scale(0.5)" />
          <use href="#pine-tree" x="-10" y="40" transform="scale(0.6)" />
        </g>

        {/* Thick Fog Layer 1 (Removed) */}

        {/* Trees Foreground (Brighter/Larger) */}
        <g opacity="0.75">
          <use href="#pine-tree" x="5" y="45" transform="scale(0.8)" />
          <use href="#pine-tree" x="35" y="30" transform="scale(0.9)" />
          <use href="#pine-tree" x="65" y="50" transform="scale(0.75)" />
          <use href="#pine-tree" x="95" y="35" transform="scale(0.85)" />
          <use href="#pine-tree" x="125" y="55" transform="scale(0.7)" />
        </g>

        {/* Thick Fog Layer 2 (Removed) */}
      </svg>
    </div>
  );
}
