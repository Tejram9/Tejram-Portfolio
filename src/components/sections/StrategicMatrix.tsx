import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import {
  Cpu,
  ShieldAlert,
  ArrowRight,
  Terminal,
  Sparkles,
} from 'lucide-react';

interface TacticalMove {
  coord: string;
  name: string;
  phase: 'Opening' | 'Middlegame' | 'Endgame';
  analogy: string;
  engineeringImplementation: string;
  tradeOffAnalysis: string;
  appliedIn: string;
}

const tacticalMoves: TacticalMove[] = [
  {
    coord: 'D4',
    name: 'Relational Schema Normalization',
    phase: 'Opening',
    analogy: 'Controlling central squares before launching piece attacks.',
    engineeringImplementation: 'Designing strict 3NF database schemas in MySQL/PostgreSQL with indexed foreign keys and composite unique constraints before writing a single controller.',
    tradeOffAnalysis: 'Slightly more upfront design time versus avoiding catastrophic schema migrations and denormalization anomalies later.',
    appliedIn: 'Suvidha4C & CivicServe',
  },
  {
    coord: 'E4',
    name: 'Stateless REST Contracts & DTOs',
    phase: 'Opening',
    analogy: 'Establishing pawn structure to dictate board mobility.',
    engineeringImplementation: 'Using strict TypeScript interfaces on the client and Spring Boot Request/Response DTOs with validation annotations (@NotNull, @Size) on the backend.',
    tradeOffAnalysis: 'Avoids leaky database entity abstractions to the client; keeps the frontend and backend decoupled.',
    appliedIn: 'Smart Krishi Sahayak & FocusPulse',
  },
  {
    coord: 'F3',
    name: 'Bounded AI Prompt Pipelines',
    phase: 'Middlegame',
    analogy: 'Knight maneuver into tactical outpost squares.',
    engineeringImplementation: 'Feeding user inputs through structured system prompts with JSON-schema output enforcement via OpenRouter LLMs, preventing prompt injection.',
    tradeOffAnalysis: 'Deterministic validation wrapper over raw unstructured LLM responses ensures zero runtime parsing crashes.',
    appliedIn: 'CivicServe (4th Place Hackathon)',
  },
  {
    coord: 'C5',
    name: 'Client-Side Document Privacy Watermarking',
    phase: 'Middlegame',
    analogy: 'Defensive piece coordination guarding the King.',
    engineeringImplementation: 'Rendering dynamic diagonal canvas watermarks and metadata stamps client-side before previewing citizen certificates to prevent unauthorized redistribution.',
    tradeOffAnalysis: 'Offloads CPU rendering from the backend while preserving privacy without heavy server-side image processing pipelines.',
    appliedIn: 'Suvidha4C',
  },
  {
    coord: 'H7',
    name: 'Decoupled Multi-Platform Deployment',
    phase: 'Endgame',
    analogy: 'Converting pawn structure advantage into decisive checkmate.',
    engineeringImplementation: 'Hosting client single-page apps on high-speed global edge networks (Vercel) while orchestrating Spring Boot and Python backend services on Render.',
    tradeOffAnalysis: 'Independent scaling, isolated fault domains, and zero-downtime continuous deployment on git push.',
    appliedIn: 'All 4 Featured Projects',
  },
];

export const StrategicMatrix: React.FC = () => {
  const [activeMove, setActiveMove] = useState<TacticalMove>(tacticalMoves[0]);

  return (
    <div className="mt-12 pt-10 border-t border-space-750">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-1.5">
            <Cpu className="w-4 h-4 text-electric-400" />
            <span>Strategic Systems Motif // Tactical Architecture</span>
          </div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-slate-100">
            The Engineering Chessboard
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Applying strategic anticipation to software: every preliminary architectural move prevents late-game system failure.
          </p>
        </div>

        <Badge variant="purple" size="md">
          Tactical Matrix
        </Badge>
      </div>

      {/* Interactive Tactical Coordinates Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Coordinate Buttons & Tactical Map */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 block">
            Select Tactical Move / Coordinate
          </span>

          {tacticalMoves.map((move) => {
            const isSelected = activeMove.coord === move.coord;
            return (
              <button
                key={move.coord}
                onClick={() => setActiveMove(move)}
                className={`p-3.5 rounded-xl text-left transition-all border flex items-center justify-between group ${
                  isSelected
                    ? 'bg-space-800 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.35)]'
                    : 'bg-space-850/80 border-space-750 hover:border-purple-500/40 hover:bg-space-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg font-mono font-bold text-xs flex items-center justify-center border transition-colors ${
                      isSelected
                        ? 'bg-gradient-to-br from-purple-600 to-electric-500 text-white border-purple-300 shadow-md'
                        : 'bg-space-900 text-slate-400 border-space-750 group-hover:text-purple-300'
                    }`}
                  >
                    {move.coord}
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-slate-200">
                      {move.name}
                    </h4>
                    <span className="text-[10px] font-mono text-purple-300/80">
                      Phase: {move.phase}
                    </span>
                  </div>
                </div>

                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected
                      ? 'text-purple-400 translate-x-1'
                      : 'text-slate-600 group-hover:text-slate-400'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right: Selected Tactical Spec Card */}
        <div className="lg:col-span-7">
          <Card className="p-6 md:p-8 h-full flex flex-col justify-between" glow="purple" tacticalBorder>
            <div>
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-space-750">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded-md bg-purple-950/80 border border-purple-800/80 text-purple-200 font-mono text-xs font-bold shadow-sm">
                    SQ {activeMove.coord}
                  </span>
                  <span className="text-xs font-mono text-electric-400 uppercase tracking-wider">
                    {activeMove.phase} Phase
                  </span>
                </div>

                <span className="text-xs font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                  Applied in {activeMove.appliedIn}
                </span>
              </div>

              <h4 className="text-lg md:text-xl font-display font-bold text-slate-100 mt-4">
                {activeMove.name}
              </h4>

              {/* Chess Analogy Callout */}
              <div className="mt-3 p-3.5 rounded-xl bg-space-900/90 border border-space-750 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <span className="font-mono text-purple-300 font-semibold block mb-0.5">
                    CHESS STRATEGIC PRINCIPLE:
                  </span>
                  <span className="text-slate-300 font-sans italic">
                    &quot;{activeMove.analogy}&quot;
                  </span>
                </div>
              </div>

              {/* Engineering Implementation */}
              <div className="mt-4 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>Engineering Execution</span>
                </span>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed pl-5 border-l-2 border-purple-500/50">
                  {activeMove.engineeringImplementation}
                </p>
              </div>

              {/* Trade-off Analysis */}
              <div className="mt-4 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-accent-orange" />
                  <span>System Trade-Off Analysis</span>
                </span>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed pl-5 border-l-2 border-accent-orange/50">
                  {activeMove.tradeOffAnalysis}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-space-750 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Strategy &rarr; Architecture &rarr; Production</span>
              <span className="text-purple-400">Tejram Dudhapachare</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
