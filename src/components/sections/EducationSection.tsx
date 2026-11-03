import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
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
    <section id="education" className="py-24 relative overflow-hidden bg-space-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="02 //"
          eyebrow="Academic Background"
          title="Formal"
          highlight="Education."
          description="A rigorous computer science engineering curriculum reinforcing theoretical fundamentals with practical software craftsmanship."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Academic Profile Card */}
          <div className="lg:col-span-8">
            <Card className="p-7 md:p-9 h-full flex flex-col justify-between" tacticalBorder>
              <div>
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cobalt-950/90 border border-cobalt-700/60 flex items-center justify-center text-cobalt-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-slate-100">
                        {education.degree}
                      </h3>
                      <p className="text-sm font-mono text-cobalt-400 font-semibold">
                        {education.major}
                      </p>
                    </div>
                  </div>

                  <Badge variant="cyan" size="md">
                    {education.currentYear}
                  </Badge>
                </div>

                {/* Institution Details */}
                <div className="py-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-semibold text-slate-100">
                        {education.institution}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        Affiliated with {education.university} • {education.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono pl-8">
                    <Calendar className="w-3.5 h-3.5 text-cobalt-400" />
                    <span>Expected Graduation: Class of 2027</span>
                  </div>
                </div>

                {/* Core Academic Subjects */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-cobalt-400" />
                    <span>Foundational Coursework &amp; Laboratories</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {education.coreSubjects.map((subject) => (
                      <span
                        key={subject}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg bg-space-800 text-slate-200 border border-slate-700/60"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Status Banner */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Second Year CSE In Good Academic Standing</span>
                </span>
                <a
                  href={profileData.socialLinks.collegeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cobalt-400 hover:text-cobalt-300 transition-colors"
                >
                  <span>College Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Card>
          </div>

          {/* Academic Performance & Metric Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Card className="p-7 flex-1 flex flex-col justify-between" glow="cobalt" tacticalBorder>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Cumulative GPA
                  </span>
                  <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                {/* Big CGPA metric */}
                <div className="my-6">
                  <div className="text-5xl md:text-6xl font-display font-extrabold text-slate-50 tracking-tight">
                    {education.cgpa}
                  </div>
                  <div className="text-xs font-mono text-emerald-400 mt-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SGBAU Scaled Performance</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {education.cgpaNote} — consistently maintained while building production-ready projects and participating in technical exhibitions.
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-6 border-t border-slate-800/80 space-y-2">
                {education.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cobalt-400 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
