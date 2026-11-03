import React from 'react';
import {
  Timer,
  BarChart2,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Bot,
  Sparkles,
  Search,
  Activity,
  Layers,
  Check,
} from 'lucide-react';

interface ProjectMockupProps {
  projectId: string;
  accentColor?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId }) => {
  if (projectId === 'focuspulse') {
    return (
      <div className="w-full h-full min-h-[260px] bg-space-950 p-4 md:p-5 flex flex-col justify-between font-sans border-b border-slate-800/80 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-subtle-grid bg-[size:16px_16px] opacity-30 pointer-events-none" />

        {/* Window controls & App Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-slate-400">FocusPulse // TrackX</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300">
              Session Active
            </span>
          </div>
        </div>

        {/* Center UI Layout */}
        <div className="grid grid-cols-12 gap-3 my-3 relative z-10">
          {/* Focus Timer Widget */}
          <div className="col-span-6 bg-space-900/90 rounded-xl p-3 border border-slate-800/80 flex flex-col items-center justify-center">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center my-1">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" stroke="#1e293b" strokeWidth="6" fill="none" />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#38bdf8"
                  strokeWidth="6"
                  strokeDasharray="264"
                  strokeDashoffset="66"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-sm md:text-base font-mono font-bold text-slate-100">25:00</span>
                <span className="text-[9px] uppercase font-mono text-cyan-400">Deep Flow</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
              <Timer className="w-3 h-3 text-cyan-400" />
              <span>Sprint #3 Completed</span>
            </div>
          </div>

          {/* Analytics & Tasks */}
          <div className="col-span-6 flex flex-col gap-2">
            {/* Chart preview */}
            <div className="bg-space-900/90 rounded-xl p-2.5 border border-slate-800/80 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1"><BarChart2 className="w-3 h-3 text-cyan-400" /> Chart.js Trends</span>
                <span className="text-emerald-400 font-semibold">+18%</span>
              </div>
              {/* Mini visual bar distribution */}
              <div className="flex items-end gap-1.5 h-12 pt-2 px-1">
                {[40, 65, 80, 50, 95, 75, 90].map((val, i) => (
                  <div key={i} className="flex-1 bg-space-800 rounded-t flex items-end overflow-hidden h-full">
                    <div
                      className="w-full bg-gradient-to-t from-cobalt-600 to-cyber-cyan rounded-t transition-all"
                      style={{ height: `${val}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Task list preview */}
            <div className="bg-space-900/90 rounded-xl p-2 border border-slate-800/80 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2 truncate">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate text-slate-300">SQLite Schema Migration</span>
              </div>
              <span className="text-[9px] font-mono text-slate-500">Done</span>
            </div>
          </div>
        </div>

        {/* Footer info pill */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60 relative z-10">
          <span>Python / Flask Core</span>
          <span className="text-cyan-400">Live on Render</span>
        </div>
      </div>
    );
  }

  if (projectId === 'suvidha4c') {
    return (
      <div className="w-full h-full min-h-[260px] bg-space-950 p-4 md:p-5 flex flex-col justify-between font-sans border-b border-slate-800/80 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
        <div className="absolute inset-0 bg-subtle-grid bg-[size:16px_16px] opacity-30 pointer-events-none" />

        {/* Window controls */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-slate-400">Suvidha4C // Citizen Gateway</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cobalt-950/80 border border-cobalt-800/60 text-cobalt-300">
            RBAC: Citizen / Provider
          </span>
        </div>

        {/* Center UI Layout */}
        <div className="grid grid-cols-12 gap-3 my-3 relative z-10">
          {/* Document with Security Watermark */}
          <div className="col-span-7 bg-space-900/90 rounded-xl p-3 border border-slate-800/80 relative overflow-hidden flex flex-col justify-between">
            {/* Diagonal Watermark simulation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -rotate-12 select-none opacity-15">
              <span className="text-xs font-mono font-bold tracking-widest text-cobalt-400 whitespace-nowrap">
                VERIFIED SUVIDHA4C • SECURE WATERMARK
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-medium text-slate-200">
                <FileText className="w-3.5 h-3.5 text-cobalt-400" /> Citizen Application
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="space-y-1.5 my-2">
              <div className="w-3/4 h-2 bg-slate-800 rounded" />
              <div className="w-full h-2 bg-slate-800/60 rounded" />
              <div className="w-1/2 h-2 bg-slate-800/40 rounded" />
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
              <span>Status: In Verification</span>
              <span className="text-emerald-400">Stage 3/4</span>
            </div>
          </div>

          {/* Scheme & College Predictor Module */}
          <div className="col-span-5 flex flex-col gap-2">
            <div className="bg-space-900/90 rounded-xl p-2.5 border border-slate-800/80 flex-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">College Match</div>
              <div className="text-xs font-semibold text-cobalt-300 mt-1">94.2% Probability</div>
              <div className="text-[10px] text-slate-400 mt-0.5">SGBAU Regional Quota</div>
            </div>

            <div className="bg-space-900/90 rounded-xl p-2 border border-slate-800/80 text-[10px] font-mono text-slate-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Spring Boot REST Active</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60 relative z-10">
          <span>React + TypeScript + Spring Boot</span>
          <span className="text-cobalt-400">Deployed on Render</span>
        </div>
      </div>
    );
  }

  if (projectId === 'civicserve') {
    return (
      <div className="w-full h-full min-h-[260px] bg-space-950 p-4 md:p-5 flex flex-col justify-between font-sans border-b border-slate-800/80 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
        <div className="absolute inset-0 bg-subtle-grid bg-[size:16px_16px] opacity-30 pointer-events-none" />

        {/* Window controls */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-slate-400">CivicServe // AI Matching</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/80 border border-violet-800/60 text-violet-300 font-semibold">
            🏆 4th Place Hackathon
          </span>
        </div>

        {/* Center UI Layout */}
        <div className="my-3 space-y-2.5 relative z-10">
          {/* Natural language query preview */}
          <div className="bg-space-900/90 rounded-xl p-2.5 border border-slate-800/80 flex items-center gap-2 text-xs">
            <Search className="w-3.5 h-3.5 text-violet-400 shrink-0" />
            <span className="text-slate-300 truncate">
              &quot;Main circuit breaker tripping in kitchen since morning&quot;
            </span>
          </div>

          {/* AI Semantic Decomposition */}
          <div className="bg-space-900/90 rounded-xl p-2.5 border border-slate-800/80 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-violet-400" />
              <span className="text-slate-200">OpenRouter LLM Parser:</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px]">
              <span className="px-1.5 py-0.5 rounded bg-space-800 text-violet-300 border border-violet-800/40">
                Category: Electrical
              </span>
              <span className="px-1.5 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-800/40">
                Priority: Urgent
              </span>
            </div>
          </div>

          {/* Matched Verified Worker Card */}
          <div className="bg-space-850/90 rounded-xl p-2.5 border border-violet-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-violet-600/30 border border-violet-500/40 flex items-center justify-center font-bold text-violet-300 text-xs">
                RK
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-100 flex items-center gap-1">
                  Ramesh K. <Check className="w-3 h-3 text-cyber-cyan" />
                </div>
                <div className="text-[10px] text-slate-400">Certified Electrician • 1.2 km away</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
              Instant Match
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60 relative z-10">
          <span>Prisma + Supabase PostgreSQL</span>
          <span className="text-violet-400">Vercel &amp; Render</span>
        </div>
      </div>
    );
  }

  // Default: Smart Krishi Sahayak
  return (
    <div className="w-full h-full min-h-[260px] bg-space-950 p-4 md:p-5 flex flex-col justify-between font-sans border-b border-slate-800/80 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
      <div className="absolute inset-0 bg-subtle-grid bg-[size:16px_16px] opacity-30 pointer-events-none" />

      {/* Window controls */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] font-mono text-slate-400">Smart Krishi Sahayak // Spring Boot</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/60 text-emerald-300">
          Java Backend
        </span>
      </div>

      {/* Center UI Layout */}
      <div className="grid grid-cols-12 gap-3 my-3 relative z-10">
        {/* AI Agro Advisory Chat */}
        <div className="col-span-7 bg-space-900/90 rounded-xl p-3 border border-slate-800/80 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-300 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> AI Crop Advisory Engine
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="bg-space-800/80 p-2 rounded-lg text-slate-300">
              <span className="text-emerald-400 font-mono text-[9px] block">CROP DIAGNOSTIC:</span>
              Cotton leaf spots identified: Early bacterial blight. Recommend copper oxychloride spray before rain.
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2">
            <span>Accuracy: High</span>
            <span className="text-emerald-400">Agronomy Verified</span>
          </div>
        </div>

        {/* Weather & Soil Sensor telemetry */}
        <div className="col-span-5 flex flex-col gap-2">
          <div className="bg-space-900/90 rounded-xl p-2.5 border border-slate-800/80">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Weather</span>
              <Activity className="w-3 h-3 text-emerald-400" />
            </div>
            <div className="text-sm font-bold text-slate-100 mt-1">29°C • 68% RH</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">Optimal Sowing Window</div>
          </div>

          <div className="bg-space-900/90 rounded-xl p-2 border border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-300">
            <span className="flex items-center gap-1"><Layers className="w-3 h-3 text-emerald-400" /> Spring Boot</span>
            <span className="text-emerald-400">REST 200 OK</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60 relative z-10">
        <span>Java + Spring Boot + AI</span>
        <span className="text-emerald-400">Vercel &amp; Render</span>
      </div>
    </div>
  );
};
