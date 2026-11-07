import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';
import { achievementsData, leadershipRoles } from '../../data/achievements';
import {
  Trophy,
  Users,
  ShieldCheck,
} from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-28 relative overflow-hidden bg-space-950 hairline-border-t">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-cobalt-600/06 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="06 //"
          eyebrow="Milestones & Community"
          title="Achievements &"
          highlight="Involvement."
          description="Competitive recognitions, project exhibitions, and technical advisory participation within the SSGMCE student ecosystem."
          coordinateTag="AWARDS // SSGMCE_HACKATHONS"
        />

        {/* Major Verified Competitive Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievementsData.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction={idx === 0 ? 'right' : 'left'}
              delay={idx * 0.1}
              className="h-full"
            >
              <Card
                className="p-7 md:p-9 flex flex-col justify-between h-full"
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

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-100 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-cobalt-400 mt-1 font-semibold">
                    {item.organizationOrEvent}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-normal">
                    {item.highlightText}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed font-mono">
                  {item.description}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Community & Leadership Roles (Subject to Confirmation / Editable) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-xl font-display font-bold text-slate-100 flex items-center gap-2.5">
                <Users className="w-5 h-5 text-cobalt-400" />
                <span>Student Community &amp; Technical Advisory</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Active campus club participation &amp; advisory roles (SSGMCE Shegaon)
              </p>
            </div>

            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-space-900 text-slate-400 border border-slate-800 self-start sm:self-auto">
              Editable Registry
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipRoles.map((role, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.08} className="h-full">
                <Card className="p-6 h-full flex flex-col justify-between" hoverEffect tacticalBorder>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-semibold text-cobalt-400">
                        {role.title}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-cyber-cyan" />
                    </div>

                    <h4 className="text-base font-semibold text-slate-100 font-display">
                      {role.organization}
                    </h4>

                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {role.scope}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                    {role.statusNote}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
