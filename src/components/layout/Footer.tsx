import React from 'react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-void border-t border-white/5 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg text-white">
          TEJRAM<span className="text-lime-acid">.</span>
        </span>
        <p className="font-mono text-xs text-softgrey">
          © {year} Tejram Kisan Dudhapachare. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-softgrey hover:text-lime-acid transition-colors">GitHub</a>
          <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-softgrey hover:text-lime-acid transition-colors">LinkedIn</a>
          <a href={`mailto:${profileData.socialLinks.email}`} className="font-mono text-xs text-softgrey hover:text-lime-acid transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};
