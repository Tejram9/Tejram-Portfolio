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
  Check,
} from 'lucide-react';

interface ProjectMockupProps {
  projectId: string;
  accentColor?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId }) => {
  if (projectId === 'focuspulse') {
    return (
      <div className="w-full h-full min-h-[260px] bg-space-950 p-4 md:p-5 flex flex-col justify-between font-sans border-b border-space-750 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-subtle-grid bg-[size:16px_16px] opacity-25 pointer-events-none" />

        {/* Window controls & App Header */}
        <div className="flex items-center justify-between pb-3 border-b border-space-750 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-orange/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-slate-400">FocusPulse // TrackX</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 border border-purple-800/60 text-purple-300">
              Session Active
            </span>
          </div>
        </div>

        {/* Center UI Layout */}
        <div className="grid grid-cols-12 gap-3 my-3 relative z-10">
          {/* Focus Timer Widget */}
          <div className="col-span-6 bg-space-900/90 rounded-xl p-3 border border-space-750 flex flex-col items-center justify-center">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center my-1">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" stroke="#141624" strokeWidth="6" fill="none" />
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
                <span className="text-sm md:text-base font-mono font-bold text-white">25:00</span>
                <span className="text-[9px] uppercase font-mono text-electric-400">Deep Flow</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
              <Timer className="w-3 h-3 text-electric-400" />
              <span>Sprint #3 Completed</span>
            </div>
          </div>

          {/* Analytics & Tasks */}
          <div className="col-span-6 flex flex-col gap-2">
            {/* Chart preview */}
            <div className="bg-space-900/90 rounded-xl p-2.5 border border-space-750 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1"><BarChart2 className="w-3 h-3 text-purple-400" /> Chart.js Trends</span>
                <span className="text-emerald-400 font-semibold">+18%</span>
              </div>
              {/* Mini visual bar distribution */}
              <div className="flex items-end gap-1.5 h-12 pt-2 px-1">
                {[40, 65, 80, 50, 95, 75, 90].map((val, i) => (
                  <div key={i} className="flex-1 bg-space-800 rounded-t flex items-end overflow-hidden h-full">
                    <div
                      className="w-full bg-gradient-to-t from-purple-600 via-purple-500 to-electric-400 rounded-t transition-all"
                      style={{ height: `${val}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Task list preview */}
            <div className="bg-space-900/90 rounded-xl p-2 border border-space-750 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2 truncate">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate text-slate-300">SQLite Schema Migration</span>
              </div>
              <span className="text-[9px] font-mono text-slate-500">Done</span>
            </div>
          </div>
        </div>

        {/* Footer info pill */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-space-750 relative z-10">
          <span>Python / Flask Core</span>
          <span className="text-electric-400 font-semibold">Live on Render</span>
        </div>
      </div>
    );
  }

  if (projectId === 'suvidha4c') {
    return (
      <div className="w-full h-full min-h-[260px] bg-space-950 p-4 md:p-5 flex flex-col justify-between font-sans border-b border-space-750 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
        <div className="absolute inset-0 bg-subtle-grid bg-[size:16px_16px] opacity-25 pointer-events-none" />

        {/* Window controls */}
        <div className="flex items-center justify-between pb-3 border-b border-space-750 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-orange/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-slate-400">Suvidha4C // Citizen Gateway</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 border border-purple-800/60 text-purple-300">
            Multi-Role RBAC
          </span>
        </div>

        {/* Dynamic Canvas Watermarking Simulation Visual */}
        <div className="my-3 relative rounded-xl bg-space-900/90 border border-space-750 p-3.5 relative overflow-hidden z-10">
          {/* Simulated Diagonal Watermark Ribbon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 rotate-[-18deg]">
            <span className="text-sm font-mono tracking-widest text-purple-300 border-2 border-purple-400 px-4 py-1">
              SUVIDHA4C • VERIFIED COPY ONLY
            </span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-space-750 text-xs">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-purple-400" />
              <span className="font-semibold text-slate-200">Income_Certificate_2026.pdf</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Client Watermarked
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-3 text-[11px]">
            <div className="p-2 rounded bg-space-850/80 border border-space-750">
              <span className="text-[9px] font-mono text-slate-500 block">Status</span>
              <span className="text-purple-300 font-medium">Under Review</span>
            </div>
            <div className="p-2 rounded bg-space-850/80 border border-space-750">
              <span className="text-[9px] font-mono text-slate-500 block">Officer</span>
              <span className="text-slate-300 font-medium">Desk #4 (Verified)</span>
            </div>
            <div className="p-2 rounded bg-space-850/80 border border-space-750">
              <span className="text-[9px] font-mono text-slate-500 block">SLA</span>
              <span className="text-emerald-400 font-medium">Within 24h</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-space-750 relative z-10">
          <span>Spring Boot REST + MariaDB</span>
          <span className="text-purple-400 font-semibold">Live on Render</span>
        </div>
      </div>
    );
  }

  if (projectId === 'civicserve') {
    return (
      <div className="w-full h-full min-h-[260px] bg-space-950 p-4 md:p-5 flex flex-col justify-between font-sans border-b border-space-750 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
        <div className="absolute inset-0 bg-subtle-grid bg-[size:16px_16px] opacity-25 pointer-events-none" />

        {/* Window controls */}
        <div className="flex items-center justify-between pb-3 border-b border-space-750 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-orange/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-slate-400">CivicServe // AI Match</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 border border-purple-800/60 text-purple-300">
            🏆 4th Place Hackathon
          </span>
        </div>

        {/* OpenRouter Natural Language Prompt Parsing Visual */}
        <div className="my-3 space-y-2 relative z-10">
          {/* Simulated User Input */}
          <div className="bg-space-900/90 rounded-xl p-2.5 border border-space-750 flex items-start gap-2 text-xs">
            <Search className="w-3.5 h-3.5 text-electric-400 shrink-0 mt-0.5" />
            <div className="text-[11px] text-slate-300 truncate">
              &quot;Main breaker trips whenever the geyser starts. Urgent electrician near Ward 5.&quot;
            </div>
          </div>

          {/* AI Extracted JSON entities */}
          <div className="bg-space-900/90 rounded-xl p-2.5 border border-purple-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono text-purple-300">OpenRouter AI Entity Extraction</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px]">
              <span className="px-1.5 py-0.5 rounded bg-space-800 text-purple-300 border border-purple-800/40">
                Category: Electrical
              </span>
              <span className="px-1.5 py-0.5 rounded bg-orange-950/60 text-accent-orange border border-orange-800/40 font-semibold">
                Priority: Urgent
              </span>
            </div>
          </div>

          {/* Matched Verified Worker Card */}
          <div className="bg-space-850/90 rounded-xl p-2.5 border border-purple-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-electric-500 flex items-center justify-center font-bold text-white text-xs">
                RK
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-100 flex items-center gap-1">
                  Ramesh K. <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="text-[10px] text-slate-400">Certified Electrician &bull; 1.2 km away</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
              Instant Match
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-space-750 relative z-10">
          <span>Prisma + Supabase PostgreSQL</span>
          <span className="text-purple-400 font-semibold">Vercel &amp; Render</span>
        </div>
      </div>
    );
  }

  // Default: Smart Krishi Sahayak
  return (
    <div className="w-full h-full min-h-[260px] bg-space-950 p-4 md:p-5 flex flex-col justify-between font-sans border-b border-space-750 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
      <div className="absolute inset-0 bg-subtle-grid bg-[size:16px_16px] opacity-25 pointer-events-none" />

      {/* Window controls */}
      <div className="flex items-center justify-between pb-3 border-b border-space-750 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent-orange/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] font-mono text-slate-400">Smart Krishi Sahayak // Spring Boot</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/60 text-emerald-300">
          Java 17 Core
        </span>
      </div>

      {/* Agronomic AI Decision Support Visual */}
      <div className="my-3 space-y-2 relative z-10">
        <div className="bg-space-900/90 rounded-xl p-3 border border-emerald-500/30 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono text-emerald-400 font-semibold">Cotton Leaf Curl Diagnosis</span>
              <span className="text-[10px] font-mono text-slate-400">Confidence: 94%</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              &quot;Observed upward leaf curling and vein thickening. Recommended: Neem oil foliar spray (5ml/L) &amp; regulate irrigation intervals.&quot;
            </p>
          </div>
        </div>

        {/* Parameters Grid */}
        <div className="grid grid-cols-3 gap-2 text-[11px]">
          <div className="p-2 rounded bg-space-900/80 border border-space-750 flex items-center justify-between">
            <span className="text-slate-400 text-[10px]">Soil pH</span>
            <span className="font-mono font-bold text-slate-200">6.8 (Optimal)</span>
          </div>
          <div className="p-2 rounded bg-space-900/80 border border-space-750 flex items-center justify-between">
            <span className="text-slate-400 text-[10px]">Moisture</span>
            <span className="font-mono font-bold text-emerald-400">62%</span>
          </div>
          <div className="p-2 rounded bg-space-900/80 border border-space-750 flex items-center justify-between">
            <span className="text-slate-400 text-[10px]">Temp</span>
            <span className="font-mono font-bold text-accent-orange">29°C</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-space-750 relative z-10">
        <span>Spring Boot + MySQL Relational</span>
        <span className="text-emerald-400 font-semibold">Live on Vercel</span>
      </div>
    </div>
  );
};
