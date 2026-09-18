import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Copy, Check, Send, MessageSquare, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = PERSONAL_INFO.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      setStatusMessage('Please fill in your name and message before continuing.');
      return;
    }

    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );

    const bodyContent = [
      `Hello Dushmanta,`,
      ``,
      formData.message.trim(),
      ``,
      `---`,
      `Sender Name: ${formData.name.trim()}`,
      `Sender Email: ${formData.email.trim() || 'Not provided'}`,
    ].join('\n');

    const body = encodeURIComponent(bodyContent);

    // Build the mailto URI
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setStatusMessage('Opening your default email app to deliver this note...');

    // Open user's email client directly
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatusMessage('Your email client was opened. You can review and click send there!');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 light:text-slate-600 max-w-xl mx-auto">
            Have a question, idea, or project suggestion? Feel free to reach out. I would love to connect with fellow learners and developers!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-blue-500/30 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white light:text-slate-900">
                    Direct Email
                  </h3>
                  <p className="text-xs text-slate-400 light:text-slate-500">
                    Personal Inbox
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 font-mono text-xs sm:text-sm text-blue-300 light:text-blue-700 break-all mb-4 select-all">
                {PERSONAL_INFO.email}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* Copy Button */}
                <button
                  type="button"
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 light:bg-slate-200 text-slate-200 light:text-slate-800 hover:bg-slate-700 light:hover:bg-slate-300 transition-colors border border-slate-700 light:border-slate-300"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                {/* Mailto Launch Button */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  id="mailto-direct-btn"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-md shadow-blue-900/30"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Location & Status Info */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 light:border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 light:text-slate-500 font-mono">Location</div>
                  <div className="text-sm font-semibold text-white light:text-slate-900">Odisha, India</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80 light:border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 light:text-slate-500 font-mono">Current Status</div>
                  <div className="text-sm font-semibold text-white light:text-slate-900">Class 10 Student &amp; Learner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 light:border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white light:text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-red-400" />
                  Send a Message
                </h3>
                <span className="text-[11px] font-mono text-slate-400 light:text-slate-500">
                  Direct Mailto Integration
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-600 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-white light:text-slate-900 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-600 mb-1.5"
                    >
                      Your Email (Optional)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-white light:text-slate-900 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-600 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Class 10 study tip or web dev collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-white light:text-slate-900 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-600 mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Write your note, question, or encouragement here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-white light:text-slate-900 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-y"
                  />
                </div>

                {/* Honest Helper Notice */}
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 light:text-blue-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Transparent Workflow:</strong> This form directly formats your note into an email addressed to <code>{PERSONAL_INFO.email}</code> in your default mail app, avoiding fake submission indicators.
                  </span>
                </div>

                {/* Feedback status */}
                {statusMessage && (
                  <div className="text-xs font-mono text-emerald-400 light:text-emerald-700 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-950/40 hover:shadow-red-600/30 transition-all duration-200 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Compose &amp; Open Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
