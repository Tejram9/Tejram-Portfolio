import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';
import { profileData } from '../../data/profile';
import { copyToClipboard } from '../../lib/utils';
import confetti from 'canvas-confetti';
import {
  Copy,
  Check,
  Github,
  Linkedin,
  MapPin,
  Send,
  MessageSquare,
  Sparkles,
  ExternalLink,
  MailCheck,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  const [generatedMailto, setGeneratedMailto] = useState('');

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(profileData.socialLinks.email);
    if (success) {
      setCopied(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleCopyDraft = async () => {
    const draftText = `Subject: ${formData.subject || `Inquiry from ${formData.name}`}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    const success = await copyToClipboard(draftText);
    if (success) {
      setCopiedDraft(true);
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
      setTimeout(() => setCopiedDraft(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subjectEncoded = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${profileData.socialLinks.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setGeneratedMailto(mailtoUrl);

    // Synchronous execution avoids Chrome popup blocker restrictions
    setIsSubmitting(false);
    setSubmitStatus('success');

    confetti({
      particleCount: 75,
      spread: 75,
      origin: { y: 0.7 },
    });

    // Attempt direct dispatch without popup blocker trigger
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.warn('Mailto direct link fallback:', err);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-space-950 hairline-border-t">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] bg-electric-500/08 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="08 //"
          eyebrow="Initiate Contact"
          title="Have an idea?"
          highlight="Let's build something meaningful."
          description="Whether you're interested in collaborating on full-stack projects, discussing backend systems, or offering an internship opportunity, my inbox is open."
          coordinateTag="DISPATCH // SHEGAON_MH"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Reachout, Quick Copy & Info */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="right" delay={0.1}>
            <Card className="p-7" glow="purple" tacticalBorder>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                I am currently open to student developer opportunities, hackathon teams, and software development internships.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-space-900 border border-space-750 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Direct Email Address
                </span>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-mono text-purple-300 truncate">
                    {profileData.socialLinks.email}
                  </span>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-space-800 hover:bg-space-750 text-slate-300 hover:text-white border border-space-750 transition-all flex items-center gap-1.5 text-xs font-mono shrink-0 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Quick Info Points */}
              <div className="mt-6 space-y-3 pt-6 border-t border-space-750 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{profileData.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-electric-400" />
                  <span>2nd Year CSE @ SSGMCE Shegaon</span>
                </div>
              </div>
            </Card>

            {/* Social Connectivity Card */}
            <Card className="p-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                Developer Profiles
              </h4>

              <div className="flex flex-col gap-3">
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-space-900 hover:bg-space-850 border border-space-750 hover:border-purple-500/50 text-slate-200 transition-all group focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-purple-400" />
                    <div>
                      <span className="text-sm font-medium block">GitHub</span>
                      <span className="text-[11px] font-mono text-slate-400">
                        @Tejram9 &bull; Repositories &amp; Contributions
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-purple-400 group-hover:translate-x-0.5 transition-transform">
                    &rarr;
                  </span>
                </a>

                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-space-900 hover:bg-space-850 border border-space-750 hover:border-purple-500/50 text-slate-200 transition-all group focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-purple-400" />
                    <div>
                      <span className="text-sm font-medium block">LinkedIn</span>
                      <span className="text-[11px] font-mono text-slate-400">
                        Professional Network Profile
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-purple-400 group-hover:translate-x-0.5 transition-transform">
                    &rarr;
                  </span>
                </a>
              </div>
            </Card>
            </ScrollReveal>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.15}>
            <Card className="p-7 md:p-9" glow="purple" tacticalBorder>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Opens formatted in your mail client or copy draft directly
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-800/60 text-purple-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {submitStatus === 'success' ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                    <MailCheck className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white">
                    Message Formatted &amp; Dispatched
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your email client should have opened with this message pre-filled. If it didn&apos;t open automatically, use the buttons below:
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    {generatedMailto && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={generatedMailto}
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                      >
                        Open Mail Client Again
                      </Button>
                    )}

                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleCopyDraft}
                      icon={copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    >
                      {copiedDraft ? 'Copied Draft to Clipboard!' : 'Copy Draft Message'}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSubmitStatus('idle')}
                    >
                      Write Another Note
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-3 rounded-xl bg-space-900 border border-space-750 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-sm placeholder:text-slate-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-space-900 border border-space-750 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-sm placeholder:text-slate-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Project Collaboration / Internship Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-space-900 border border-space-750 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-sm placeholder:text-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share your idea, questions, or opportunity details..."
                      className="w-full px-4 py-3 rounded-xl bg-space-900 border border-space-750 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-sm placeholder:text-slate-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      magnetic
                      disabled={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Formatting Dispatch...' : 'Send Message'}
                    </Button>
                    <span className="block text-[11px] font-mono text-slate-400 text-center mt-2">
                      Formats message &amp; opens in your preferred email client
                    </span>
                  </div>
                </form>
              )}
            </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
