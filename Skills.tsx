import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  Palette,
  FileCode2,
  Smartphone,
  Layers,
  Cpu,
  Sparkles,
  Brain,
  Video,
  Compass,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Code,
  Palette,
  FileCode2,
  Smartphone,
  Layers,
  Cpu,
  Sparkles,
  Brain,
  Video,
  Compass,
};

type FilterCategory = 'all' | 'frontend' | 'core' | 'tools' | 'creative';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeFilter === 'all') return true;
    return skill.category === activeFilter;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Technical &amp; Creative Tooling
          </h2>
          <p className="mt-3 text-sm text-slate-300 light:text-slate-600 max-w-xl mx-auto">
            Honest reflection of my current capabilities categorized by active practice. No inflated claims—just disciplined, foundational learning.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Status Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-xs font-mono">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 light:text-blue-700">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <strong>Building</strong> — Practicing in projects regularly
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 light:text-amber-700">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <strong>Learning</strong> — Actively studying fundamentals
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 light:text-red-700">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <strong>Exploring</strong> — Researching concepts &amp; future tools
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Disciplines' },
            { id: 'frontend', label: 'Web & UI' },
            { id: 'core', label: 'Programming Logic' },
            { id: 'tools', label: 'Tools & AI' },
            { id: 'creative', label: 'Creative & Media' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              id={`skill-filter-${tab.id}`}
              onClick={() => setActiveFilter(tab.id as FilterCategory)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:bg-slate-800 border border-slate-800 light:border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = ICON_MAP[skill.iconName] || Code;
              const isHovered = hoveredSkill === skill.name;

              let badgeColor = 'bg-blue-500/20 text-blue-300 border-blue-500/40';
              let barGradient = 'from-blue-500 to-blue-400';
              if (skill.status === 'Learning') {
                badgeColor = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
                barGradient = 'from-amber-500 to-amber-400';
              } else if (skill.status === 'Exploring') {
                badgeColor = 'bg-red-500/20 text-red-300 border-red-500/40';
                barGradient = 'from-red-500 to-red-400';
              }

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`glass-panel p-6 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                    isHovered
                      ? 'border-blue-400/60 shadow-[0_0_30px_-5px_rgba(37,99,235,0.35)] -translate-y-1.5'
                      : 'border-slate-800/80 light:border-slate-200'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon & Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-white group-hover:bg-blue-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${badgeColor}`}
                      >
                        {skill.status}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors mb-2">
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Highlights and Progress Bar */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {skill.highlights.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 light:bg-slate-100 text-slate-400 light:text-slate-600 border border-slate-800/80 light:border-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Dedicated Progress Tracker */}
                    <div className="pt-3 border-t border-slate-800/80 light:border-slate-200">
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 light:text-slate-500 mb-1.5">
                        <span>Familiarity Level</span>
                        <span className="text-blue-300 light:text-blue-600 font-semibold">
                          {skill.levelPercent}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 light:bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.levelPercent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className={`h-full bg-gradient-to-r ${barGradient} rounded-full`}
                        />
                      </div>
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
