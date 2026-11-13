import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';
import { profileData } from '../../data/profile';
import {
  GraduationCap,
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = profileData;

  return (
    <section id="education" className="py-28 relative overflow-hidden bg-space-950 hairline-border-t">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-purple-600/08 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-electric-500/06 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="02 //"
          eyebrow="Academic Dossier"
          title="Formal"
          highlight="Education."
          description="A rigorous computer science engineering curriculum reinforcing theoretical fundamentals with practical software craftsmanship."
          coordinateTag="SSGMCE_SGBAU // 2023-2027"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Academic Profile Card */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="right" delay={0.1} className="h-full">
            <Card className="p-7 md:p-10 h-full flex flex-col justify-between" glow="purple" tacticalBorder>
              <div>
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-space-750">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-900/60 to-space-900 border border-purple-500/50 flex items-center justify-center text-purple-300 shadow-[0_0_24px_rgba(168,85,247,0.3)] shrink-0">
                      <GraduationCap className="w-7 h-7 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-100 tracking-tight">
                        {education.degree}
                      </h3>
                      <p className="text-sm font-mono text-purple-400 font-semibold mt-0.5">
                        {education.major}
                      </p>
                    </div>
                  </div>

                  <Badge variant="purple" size="md">
                    {education.currentYear}
                  </Badge>
                </div>

                {/* Institution Details */}
                <div className="py-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-slate-100">
                        {education.institution}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
                        Affiliated with {education.university} &bull; {education.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono pl-8">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>Academic Term: 2023 &ndash; 2027 &bull; Second Year Active</span>
                  </div>
                </div>

                {/* Core Academic Subjects */}
                <div className="pt-5 border-t border-space-750">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3.5 font-semibold">
                    <BookOpen className="w-3.5 h-3.5 text-electric-400" />
                    <span>Foundational Coursework &amp; Laboratories</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {education.coreSubjects.map((subject) => (
                      <span
                        key={subject}
                        className="text-xs font-mono px-3.5 py-1.5 rounded-lg bg-space-900 text-slate-200 border border-space-750 hover:border-purple-500/50 hover:bg-space-850 transition-colors"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Status Banner */}
              <div className="mt-8 pt-6 border-t border-space-750 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Second Year CSE In Good Academic Standing</span>
                </span>
                <a
                  href={profileData.socialLinks.collegeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>College Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>
            </ScrollReveal>
          </div>

          {/* Academic Performance & Metric Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <ScrollReveal direction="left" delay={0.15} className="h-full">
            <Card className="p-7 md:p-9 flex-1 flex flex-col justify-between" glow="purple" tacticalBorder>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Cumulative GPA
                  </span>
                  <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                {/* Big CGPA metric */}
                <div className="my-6">
                  <div className="text-6xl sm:text-7xl font-display font-extrabold text-white tracking-[-0.04em]">
                    {education.cgpa}
                  </div>
                  <div className="text-xs font-mono text-emerald-400 mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SGBAU Scaled Performance Standard</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {education.cgpaNote} &mdash; maintained with rigor while building production-deployed full-stack systems and participating in technical hackathons.
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-6 border-t border-space-750 space-y-2.5">
                {education.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
