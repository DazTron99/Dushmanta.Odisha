import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, Calendar, CheckCircle2, Mail, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg glass-panel bg-[#0c152a] border border-blue-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <FileText className="w-4 h-4" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Academic Resume Notice
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">
              <Calendar className="w-3.5 h-3.5" />
              <span>Milestone in Progress</span>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">
              Class 10 Academic Resume
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              As a dedicated high school student in Odisha, I prioritize authenticity. An official comprehensive curriculum vitae and academic credential sheet will be published here upon completion of my Class 10 board examinations.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5 text-xs text-slate-300">
              <div className="font-semibold text-blue-300 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                Current Resume Scope Includes:
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Class 10 Academic Coursework &amp; Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Self-Taught Frontend Web Development Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Verified Independent Coding Projects</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Need a personalized syllabus or learning roadmap overview right now? Feel free to send a direct message.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Requesting%20Dushmanta%20Sahu%20Academic%20Profile`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-md shadow-blue-900/40"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Request Learning Profile</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
