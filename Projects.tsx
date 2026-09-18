import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, ExternalLink, Github, Eye, Sparkles, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

type CategoryFilter = 'all' | 'web' | 'ai' | 'experiments' | 'coming-soon';

const CATEGORY_TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'ai', label: 'AI Concepts' },
  { id: 'experiments', label: 'UI Experiments' },
  { id: 'coming-soon', label: 'Coming Soon' },
];

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<CategoryFilter>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase &amp; Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Learning Projects &amp; Prototypes
          </h2>
          <p className="mt-3 text-sm text-slate-300 light:text-slate-600 max-w-xl mx-auto">
            Real code explorations, student prototypes, and future concepts. Marked transparently as learning experiments rather than commercial contracts.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              id={`project-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id as CategoryFilter)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-105'
                  : 'bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:bg-slate-800 border border-slate-800 light:border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isLearning = project.status === 'Learning Project';
              const isConcept = project.status === 'Concept';
              const isComingSoon = project.status === 'Coming Soon';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="glass-panel rounded-2xl border border-slate-800/80 light:border-slate-200 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)] transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  {/* Card Body */}
                  <div className="p-6">
                    {/* Top Status & Accent */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${
                          isLearning
                            ? 'bg-blue-500/15 text-blue-300 border-blue-500/40'
                            : isConcept
                            ? 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                            : 'bg-red-500/15 text-red-300 border-red-500/40'
                        }`}
                      >
                        {project.status}
                      </span>
                      {project.isFeatured && (
                        <span className="flex items-center gap-1 text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                          <Sparkles className="w-2.5 h-2.5" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors mb-2">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 light:bg-slate-100 text-slate-400 light:text-slate-600 border border-slate-800/60 light:border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 py-3.5 border-t border-slate-800/80 light:border-slate-200 bg-slate-900/40 light:bg-slate-50 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          onClick={(e) => e.stopPropagation()}
                          title="View on GitHub"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 light:hover:bg-slate-200 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.id === 'personal-portfolio' && (
                        <span
                          title="Live Applet"
                          className="p-1.5 rounded-lg text-red-400 hover:text-red-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
