import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
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
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form fallback: generate mailto URI with user's inputted details
    const subjectEncoded = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${profileData.socialLinks.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 },
      });
      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-space-950">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cobalt-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="08 //"
          eyebrow="Initiate Contact"
          title="Have an idea?"
          highlight="Let's build something meaningful."
          description="Whether you're interested in collaborating on full-stack projects, discussing backend systems, or offering an internship opportunity, my inbox is open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Reachout, Quick Copy & Info */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-7" tacticalBorder>
              <h3 className="text-xl font-display font-bold text-slate-100 mb-2">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                I am currently open to student developer opportunities, hackathon teams, and software development internships.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-space-900 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Direct Email Address
                </span>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-mono text-cobalt-300 truncate">
                    {profileData.socialLinks.email}
                  </span>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-space-800 hover:bg-space-750 text-slate-300 hover:text-white border border-slate-700/60 transition-all flex items-center gap-1.5 text-xs font-mono shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
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
              <div className="mt-6 space-y-3 pt-6 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cobalt-400" />
                  <span>{profileData.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-cyber-cyan" />
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
                  className="flex items-center justify-between p-3 rounded-xl bg-space-900 hover:bg-space-800 border border-slate-800 hover:border-slate-700 text-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-cobalt-400" />
                    <div>
                      <span className="text-sm font-medium block">GitHub</span>
                      <span className="text-[11px] font-mono text-slate-500">
                        @Tejram9 • Repositories &amp; Contributions
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cobalt-400 group-hover:translate-x-0.5 transition-transform">
                    &rarr;
                  </span>
                </a>

                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-space-900 hover:bg-space-800 border border-slate-800 hover:border-slate-700 text-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-cobalt-400" />
                    <div>
                      <span className="text-sm font-medium block">LinkedIn</span>
                      <span className="text-[11px] font-mono text-slate-500">
                        Professional Network Profile
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cobalt-400 group-hover:translate-x-0.5 transition-transform">
                    &rarr;
                  </span>
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-7 md:p-9" tacticalBorder>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-100">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    Direct communication dispatch
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-space-900 border border-slate-800 text-cobalt-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {submitStatus === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-200">
                    Email Client Dispatched!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message draft has been formatted and opened in your email client. You can also copy my email directly at{' '}
                    <span className="font-mono text-emerald-400 font-semibold">
                      {profileData.socialLinks.email}
                    </span>
                    .
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Aditi Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-space-900 border border-slate-800 focus:border-cobalt-500 focus:ring-1 focus:ring-cobalt-500 text-slate-100 text-sm placeholder:text-slate-600 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="aditi@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-space-900 border border-slate-800 focus:border-cobalt-500 focus:ring-1 focus:ring-cobalt-500 text-slate-100 text-sm placeholder:text-slate-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Project Collaboration / Internship Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-space-900 border border-slate-800 focus:border-cobalt-500 focus:ring-1 focus:ring-cobalt-500 text-slate-100 text-sm placeholder:text-slate-600 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share your idea, questions, or opportunity details..."
                      className="w-full px-4 py-3 rounded-xl bg-space-900 border border-slate-800 focus:border-cobalt-500 focus:ring-1 focus:ring-cobalt-500 text-slate-100 text-sm placeholder:text-slate-600 outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Formatting Dispatch...' : 'Send Message'}
                    </Button>
                    <span className="block text-[11px] font-mono text-slate-500 text-center mt-2">
                      Launches formatted mailto or copies directly to clipboard
                    </span>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
