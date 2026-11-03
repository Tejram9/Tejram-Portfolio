import React from 'react';

export const FallbackSculpture: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative select-none">
      {/* Background radial glow */}
      <div className="absolute w-72 h-72 rounded-full bg-cobalt-600/20 blur-3xl pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full bg-cyber-cyan/15 blur-2xl pointer-events-none" />

      {/* SVG Kinetic Sculpture */}
      <svg
        className="w-72 h-72 md:w-96 md:h-96"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
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
          stroke="#60a5fa"
          strokeWidth="1.2"
          strokeOpacity="0.5"
          strokeDasharray="4 6"
          className="animate-[spin_30s_linear_infinite_reverse]"
        />

        {/* Third Gyro Ring */}
        <ellipse
          cx="200"
          cy="200"
          rx="140"
          ry="70"
          transform="rotate(80 200 200)"
          stroke="#38bdf8"
          strokeWidth="1"
          strokeOpacity="0.35"
        />

        {/* Central Icosahedral Geometry Projection */}
        <g className="animate-pulse-subtle">
          {/* Main Facets */}
          <polygon
            points="200,105 275,160 200,215 125,160"
            fill="url(#coreGrad)"
            stroke="#93c5fd"
            strokeWidth="1.5"
            opacity="0.85"
            filter="url(#glow)"
          />
          <polygon
            points="200,215 275,160 245,260 200,295"
            fill="#1d4ed8"
            stroke="#60a5fa"
            strokeWidth="1.2"
            opacity="0.75"
          />
          <polygon
            points="200,215 125,160 155,260 200,295"
            fill="#1e40af"
            stroke="#60a5fa"
            strokeWidth="1.2"
            opacity="0.75"
          />
          {/* Top crystalline cap */}
          <polygon
            points="200,105 245,140 200,215 155,140"
            fill="#38bdf8"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.4"
          />
        </g>

        {/* Strategic Data Constellation Nodes */}
        <circle cx="280" cy="140" r="4" fill="#38bdf8" filter="url(#glow)" />
        <line x1="280" y1="140" x2="275" y2="160" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />

        <circle cx="110" cy="180" r="3.5" fill="#60a5fa" filter="url(#glow)" />
        <line x1="110" y1="180" x2="125" y2="160" stroke="#60a5fa" strokeWidth="1" strokeDasharray="2 2" />

        <circle cx="240" cy="275" r="4.5" fill="#38bdf8" filter="url(#glow)" />
        <circle cx="150" cy="275" r="3.5" fill="#818cf8" filter="url(#glow)" />
        <circle cx="200" cy="85" r="4" fill="#67e8f9" filter="url(#glow)" />

        {/* Center Node Spark */}
        <circle cx="200" cy="185" r="3" fill="#ffffff" filter="url(#glow)" />
      </svg>
    </div>
  );
};
