import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Button } from './Button';
import { Modal } from './Modal';

interface ResumeButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({
  variant = 'outline',
  size = 'md',
  className = '',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resumeUrl = (profileData.socialLinks as Record<string, string | undefined>).resumeUrl;

  const handleClick = (e: React.MouseEvent) => {
    if (!resumeUrl || resumeUrl.trim() === '') {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        href={resumeUrl && resumeUrl.trim() !== '' ? resumeUrl : undefined}
        external={Boolean(resumeUrl && resumeUrl.trim() !== '')}
        onClick={handleClick}
        icon={<Download className="w-3.5 h-3.5" />}
        magnetic
        className={className}
      >
        Download Resume
      </Button>

      {/* Information Modal when Resume PDF is awaiting user upload */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Resume Document Specification"
        subtitle="Verification & File Placement Guide"
        maxWidth="md"
      >
        <div className="space-y-4 text-slate-300 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-cobalt-950/60 border border-cobalt-800/60 flex items-start gap-3">
            <FileText className="w-5 h-5 text-cobalt-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-slate-100 font-display text-sm">
                Authentic Document Policy
              </h5>
              <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                In strict accordance with the ARISE competition integrity guidelines, fictional or generated resumes are never published.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
              Instructions to Activate Direct Download:
            </span>
            <ol className="list-decimal pl-4 space-y-1.5 text-xs text-slate-300 font-mono">
              <li>Place your official resume PDF file at: <code className="text-cyber-cyan bg-space-950 px-1 py-0.5 rounded">public/resume.pdf</code></li>
              <li>Or set <code className="text-cyber-cyan bg-space-950 px-1 py-0.5 rounded">socialLinks.resumeUrl = &apos;/resume.pdf&apos;</code> in <code className="text-slate-200">src/data/profile.ts</code></li>
            </ol>
          </div>

          <div className="pt-2 flex justify-end">
            <Button variant="secondary" size="sm" onClick={() => setIsModalOpen(false)}>
              Got it
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
