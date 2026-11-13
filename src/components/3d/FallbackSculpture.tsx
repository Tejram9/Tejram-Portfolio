import React from 'react';

export const FallbackSculpture: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative select-none overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(213,255,0,0.08) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* SVG Node Network */}
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      >
        <defs>
          <style>{`
            @keyframes dash {
              0% { stroke-dashoffset: 300; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes dashRev {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -300; }
            }
            @keyframes pulseNode {
              0%, 100% { opacity: 0.6; r: 4; }
              50% { opacity: 1; r: 5.5; }
            }
            @keyframes rotateSlow {
              from { transform: rotate(0deg); transform-origin: 150px 150px; }
              to { transform: rotate(360deg); transform-origin: 150px 150px; }
            }
            @keyframes rotateSlowRev {
              from { transform: rotate(0deg); transform-origin: 150px 150px; }
              to { transform: rotate(-360deg); transform-origin: 150px 150px; }
            }
            .ring1 { animation: rotateSlow 20s linear infinite; }
            .ring2 { animation: rotateSlowRev 28s linear infinite; }
            .line-anim { animation: dash 3s ease-in-out infinite alternate; stroke-dasharray: 300; }
            .line-anim-rev { animation: dashRev 4s ease-in-out infinite alternate; stroke-dasharray: 300; }
            .node-pulse { animation: pulseNode 2s ease-in-out infinite; }
            .node-pulse-delay { animation: pulseNode 2s ease-in-out 0.7s infinite; }
            .node-pulse-delay2 { animation: pulseNode 2s ease-in-out 1.4s infinite; }
          `}</style>
          <filter id="limeglow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2a2e28" />
            <stop offset="60%" stopColor="#1A1C18" />
            <stop offset="100%" stopColor="#0d0f0d" />
          </radialGradient>
        </defs>

        {/* Outer orbit ring */}
        <ellipse
          className="ring1"
          cx="150" cy="150" rx="118" ry="45"
          stroke="#D5FF00" strokeWidth="1" strokeOpacity="0.35"
          strokeDasharray="4 6"
        />

        {/* Middle ring tilted */}
        <ellipse
          className="ring2"
          cx="150" cy="150" rx="95" ry="90"
          transform="rotate(60 150 150)"
          stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.15"
          strokeDasharray="3 5"
        />

        {/* Connector lines between nodes */}
        <line className="line-anim" x1="92" y1="90" x2="150" y2="150" stroke="#D5FF00" strokeWidth="0.8" strokeOpacity="0.5" />
        <line className="line-anim-rev" x1="208" y1="90" x2="150" y2="150" stroke="#D5FF00" strokeWidth="0.8" strokeOpacity="0.5" />
        <line className="line-anim" x1="230" y1="175" x2="150" y2="150" stroke="#D5FF00" strokeWidth="0.8" strokeOpacity="0.4" />
        <line className="line-anim-rev" x1="70" y1="175" x2="150" y2="150" stroke="#D5FF00" strokeWidth="0.8" strokeOpacity="0.4" />
        <line className="line-anim" x1="150" y1="230" x2="150" y2="150" stroke="#D5FF00" strokeWidth="0.8" strokeOpacity="0.3" />
        <line className="line-anim-rev" x1="92" y1="90" x2="208" y2="90" stroke="#8A8C85" strokeWidth="0.6" strokeOpacity="0.3" />
        <line className="line-anim" x1="230" y1="175" x2="150" y2="230" stroke="#8A8C85" strokeWidth="0.6" strokeOpacity="0.3" />
        <line className="line-anim-rev" x1="70" y1="175" x2="150" y2="230" stroke="#8A8C85" strokeWidth="0.6" strokeOpacity="0.3" />

        {/* Central core hexagon */}
        <polygon
          points="150,118 176,134 176,166 150,182 124,166 124,134"
          fill="url(#coreGrad)"
          stroke="#D5FF00"
          strokeWidth="1.2"
          strokeOpacity="0.7"
          filter="url(#limeglow)"
        />
        {/* Inner diamond */}
        <polygon
          points="150,130 162,150 150,170 138,150"
          fill="#1A1C18"
          stroke="#D5FF00"
          strokeWidth="1"
          strokeOpacity="0.9"
        />
        {/* Core center dot */}
        <circle cx="150" cy="150" r="4" fill="#D5FF00" filter="url(#limeglow)" />
        <circle cx="150" cy="150" r="2" fill="#ffffff" />

        {/* Orbital node points */}
        <circle className="node-pulse" cx="92" cy="90" r="4" fill="#D5FF00" filter="url(#limeglow)" />
        <circle className="node-pulse-delay" cx="208" cy="90" r="4" fill="#D5FF00" filter="url(#limeglow)" />
        <circle className="node-pulse-delay2" cx="230" cy="175" r="3.5" fill="#D5FF00" filter="url(#limeglow)" />
        <circle className="node-pulse" cx="70" cy="175" r="3.5" fill="#D5FF00" filter="url(#limeglow)" />
        <circle className="node-pulse-delay" cx="150" cy="230" r="4" fill="#D5FF00" filter="url(#limeglow)" />
        <circle cx="92" cy="90" r="8" fill="#D5FF00" fillOpacity="0.08" />
        <circle cx="208" cy="90" r="8" fill="#D5FF00" fillOpacity="0.08" />
        <circle cx="230" cy="175" r="7" fill="#D5FF00" fillOpacity="0.08" />
        <circle cx="70" cy="175" r="7" fill="#D5FF00" fillOpacity="0.08" />
        <circle cx="150" cy="230" r="8" fill="#D5FF00" fillOpacity="0.08" />
      </svg>
    </div>
  );
};
