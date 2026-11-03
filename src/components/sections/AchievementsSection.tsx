import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { achievementsData, leadershipRoles } from '../../data/achievements';
import {
  Trophy,
  Users,
  ShieldCheck,
} from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-space-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="06 //"
          eyebrow="Milestones & Community"
          title="Achievements &"
          highlight="Involvement."
          description="Competitive recognitions, project exhibitions, and technical advisory participation within the SSGMCE student ecosystem."
        />

        {/* Major Verified Competitive Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievementsData.map((item) => (
            <Card
              key={item.id}
              className="p-7 md:p-8 flex flex-col justify-between"
              glow="cobalt"
              tacticalBorder
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <Badge variant="cyan" size="md" icon={<Trophy className="w-3.5 h-3.5" />}>
                    {item.badge}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">
                    {item.dateOrYear}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-slate-100">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-cobalt-400 mt-1 font-semibold">
                  {item.organizationOrEvent}
                </p>

                <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                  {item.highlightText}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed">
                {item.description}
              </div>
            </Card>
          ))}
        </div>

        {/* Community & Leadership Roles (Subject to Confirmation / Editable) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-display font-bold text-slate-100 flex items-center gap-2">
                <Users className="w-5 h-5 text-cobalt-400" />
                <span>Student Community &amp; Technical Advisory</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Active campus club participation &amp; advisory roles (SSGMCE Shegaon)
              </p>
            </div>

            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-space-850 text-slate-400 border border-slate-800">
              Editable Registry
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipRoles.map((role, idx) => (
              <Card key={idx} className="p-6 bg-space-850/70" hoverEffect>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-cobalt-400">
                    {role.title}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-cyber-cyan" />
                </div>

                <h4 className="text-base font-semibold text-slate-100">
                  {role.organization}
                </h4>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {role.scope}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                  {role.statusNote}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
