import React from 'react';

export const FallbackSculpture: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative select-none">
      {/* Background radial glow */}
      <div className="absolute w-72 h-72 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full bg-electric-500/15 blur-2xl pointer-events-none" />

      {/* SVG Kinetic Sculpture */}
      <svg
        className="w-72 h-72 md:w-96 md:h-96"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Orbit Ring with Dash Animation */}
        <ellipse
          cx="200"
          cy="200"
          rx="170"
          ry="65"
          transform="rotate(-25 200 200)"
          stroke="url(#ringGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          className="animate-[spin_40s_linear_infinite]"
        />

        {/* Counter Orbit Ring */}
        <ellipse
          cx="200"
          cy="200"
          rx="155"
          ry="55"
          transform="rotate(45 200 200)"
          stroke="#38bdf8"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          strokeDasharray="4 6"
          className="animate-[spin_30s_linear_infinite_reverse]"
        />

        {/* Third Orbit Ring in Solar Orange */}
        <ellipse
          cx="200"
          cy="200"
          rx="140"
          ry="75"
          transform="rotate(75 200 200)"
          stroke="#f97316"
          strokeWidth="1"
          strokeOpacity="0.5"
          strokeDasharray="3 5"
        />

        {/* Central Faceted Hexagonal Core */}
        <polygon
          points="200,120 270,160 270,240 200,280 130,240 130,160"
          fill="url(#coreGrad)"
          stroke="#c084fc"
          strokeWidth="2"
          filter="url(#glow)"
          opacity="0.85"
        />

        {/* Inner Octahedron Lattice */}
        <polygon
          points="200,145 245,200 200,255 155,200"
          fill="#0a0c16"
          stroke="#38bdf8"
          strokeWidth="1.5"
          opacity="0.9"
        />

        {/* Core Radiating Point */}
        <circle cx="200" cy="200" r="14" fill="#f97316" filter="url(#glow)" />
        <circle cx="200" cy="200" r="6" fill="#ffffff" />

        {/* Satellite Vertex Constellation Nodes */}
        <circle cx="90" cy="180" r="4" fill="#38bdf8" filter="url(#glow)" />
        <circle cx="310" cy="160" r="4.5" fill="#a855f7" filter="url(#glow)" />
        <circle cx="280" cy="290" r="3.5" fill="#f97316" filter="url(#glow)" />
        <circle cx="120" cy="270" r="4" fill="#c084fc" filter="url(#glow)" />
      </svg>
    </div>
  );
};
