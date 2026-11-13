import React, { useState } from 'react';
import { profileData } from '../../data/profile';
import { copyToClipboard } from '../../lib/utils';
import { Copy, Check, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(profileData.socialLinks.email);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Collaborator'}`);
    const bodyEncoded = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${profileData.socialLinks.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setStatus('sent');
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden bg-void border-t border-white/5">
      {/* Background Ghost Watermark */}
      <span
        aria-hidden
        className="absolute bottom-0 right-0 font-display text-[18vw] text-white/[0.02] select-none pointer-events-none leading-none tracking-tight"
      >
        CONNECT
      </span>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section Label */}
        <p className="font-mono text-xs text-softgrey tracking-widest uppercase mb-6">
          007 — INITIATE CONVERSATION
        </p>

        {/* Massive Headline */}
        <div className="mb-16">
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase text-white tracking-tight leading-[0.88] mb-6">
            HAVE AN IDEA?<br />
            <span className="text-lime-acid">LET&apos;S BUILD IT.</span>
          </h2>
          <div className="w-16 h-1 bg-lime-acid mb-6" />
          <p className="font-sans text-sm md:text-base text-smoke/90 max-w-xl leading-relaxed">
            I am always interested in discussing software engineering opportunities, enterprise Java systems, full-stack builds, and practical problem solving.
          </p>
        </div>

        {/* Two-Column Editorial Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Direct channels & Instant Email CTA */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Interactive Email Box */}
            <div className="p-8 border border-white/10 bg-[#121410] flex flex-col justify-between gap-6">
              <div>
                <span className="font-mono text-xs text-softgrey uppercase tracking-widest block mb-2">
                  DIRECT EMAIL INBOX
                </span>
                <a
                  href={`mailto:${profileData.socialLinks.email}`}
                  className="font-mono text-lg sm:text-xl text-white hover:text-lime-acid transition-colors break-all block mb-4"
                >
                  {profileData.socialLinks.email}
                </a>
                <p className="font-sans text-xs text-softgrey leading-relaxed">
                  Click below to copy address or open directly in your preferred email client.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={handleCopyEmail}
                  className="font-mono text-xs uppercase tracking-widest px-4 py-2.5 bg-lime-acid text-void hover:bg-lime-dim transition-colors font-semibold flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>COPIED TO CLIPBOARD</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profileData.socialLinks.email}`}
                  className="font-mono text-xs uppercase tracking-widest px-4 py-2.5 border border-white/20 text-white hover:border-white transition-colors flex items-center gap-1.5"
                >
                  <span>COMPOSE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Developer Profiles */}
            <div className="p-6 border border-white/10 bg-[#121410] space-y-4">
              <span className="font-mono text-xs text-softgrey uppercase tracking-widest block">
                VERIFIED PROFILES
              </span>

              <div className="space-y-3">
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border border-white/10 hover:border-lime-acid/60 hover:text-lime-acid transition-all bg-void text-white font-mono text-xs tracking-wider uppercase group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-softgrey group-hover:text-lime-acid transition-colors" />
                    <span>GITHUB // @Tejram9</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-softgrey group-hover:text-lime-acid transition-colors" />
                </a>

                {profileData.socialLinks.linkedin && (
                  <a
                    href={profileData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 border border-white/10 hover:border-lime-acid/60 hover:text-lime-acid transition-all bg-void text-white font-mono text-xs tracking-wider uppercase group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-softgrey group-hover:text-lime-acid transition-colors" />
                      <span>LINKEDIN // Tejram Dudhapachare</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-softgrey group-hover:text-lime-acid transition-colors" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Message Dispatcher */}
          <div className="lg:col-span-7 p-8 md:p-10 border border-white/10 bg-[#121410]">
            <span className="font-mono text-xs text-softgrey uppercase tracking-widest block mb-2">
              QUICK DISPATCH
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight mb-6">
              SEND A MESSAGE DIRECTLY
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="font-mono text-xs text-softgrey uppercase tracking-wider block mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full p-3 bg-void border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-lime-acid transition-colors placeholder:text-softgrey/40"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-mono text-xs text-softgrey uppercase tracking-wider block mb-2">
                    YOUR EMAIL *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full p-3 bg-void border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-lime-acid transition-colors placeholder:text-softgrey/40"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs text-softgrey uppercase tracking-wider block mb-2">
                  PROJECT / INQUIRY DETAILS *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the idea, technical challenge, or opportunity..."
                  className="w-full p-3 bg-void border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-lime-acid transition-colors placeholder:text-softgrey/40 resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="font-mono text-xs uppercase tracking-widest bg-lime-acid text-void hover:bg-lime-dim px-8 py-3.5 font-bold transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT MESSAGE</span>
                </button>

                {status === 'sent' && (
                  <span className="font-mono text-xs text-lime-acid animate-fade-in">
                    Mail client opened ✓
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
