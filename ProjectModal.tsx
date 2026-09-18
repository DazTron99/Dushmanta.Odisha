import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop with strong blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl max-h-[90vh] flex flex-col glass-panel bg-[#0b1426] border border-blue-500/30 rounded-2xl shadow-2xl shadow-blue-950/80 overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Project Inspection
              </span>
            </div>
            <button
              type="button"
              id="close-project-modal-btn"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Title & Status Pill */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className={`text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${
                    project.status === 'Learning Project'
                      ? 'bg-blue-500/15 text-blue-300 border-blue-500/40'
                      : project.status === 'Concept'
                      ? 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                      : 'bg-red-500/15 text-red-300 border-red-500/40'
                  }`}
                >
                  {project.status}
                </span>
                <span className="text-xs font-mono text-slate-400">• High School Project</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-blue-400 font-medium">
                {project.tagline}
              </p>
            </div>

            {/* Long Narrative */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Overview &amp; Motivation
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  Key Highlights &amp; Scope
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="text-red-400 mt-0.5">▸</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Technologies &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Future Planned Improvements */}
            {project.futureImprovements && project.futureImprovements.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-300 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-red-400" />
                  Planned Future Improvements
                </h4>
                <ul className="space-y-1.5">
                  {project.futureImprovements.map((imp) => (
                    <li key={imp} className="flex items-start gap-2 text-xs text-slate-300">
                      <ArrowRight className="w-3 h-3 text-red-400 mt-0.5 shrink-0" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Modal Footer Controls */}
          <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/60 flex flex-wrap items-center justify-between gap-3">
            <div className="text-[11px] font-mono text-slate-400">
              Creator: Dushmanta Sahu (Odisha)
            </div>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Code</span>
                </a>
              )}
              {project.id === 'personal-portfolio' ? (
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white shadow-md shadow-blue-900/40 hover:bg-blue-500 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Currently Viewing Live</span>
                </button>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700/60 cursor-not-allowed">
                  <span>Demo Concept Preview</span>
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
