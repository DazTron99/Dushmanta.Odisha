import React from 'react';
import { motion } from 'motion/react';
import { Compass, Code, Zap, BookOpen, Sparkles, Rocket } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

const MILESTONE_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Compass,
  Code,
  Zap,
  BookOpen,
  Sparkles,
  Rocket,
};

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>Development Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            My Journey So Far
          </h2>
          <p className="mt-3 text-sm text-slate-300 light:text-slate-600 max-w-xl mx-auto">
            From the initial spark of curiosity to balancing Class 10 academic responsibilities and charting a lifelong commitment to software development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-slate-800 light:border-slate-300 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {JOURNEY_MILESTONES.map((milestone, idx) => {
            const Icon = MILESTONE_ICONS[milestone.icon] || Code;
            const isCurrent = milestone.isCurrent;

            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Node Bullet Marker on the Left Line */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md ${
                    isCurrent
                      ? 'bg-slate-950 border-red-500 text-red-400 shadow-[0_0_15px_#ef4444]'
                      : 'bg-slate-900 border-blue-500/50 text-blue-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Milestone Content Card */}
                <div
                  className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                    isCurrent
                      ? 'border-red-500/40 shadow-[0_0_30px_-5px_rgba(239,68,68,0.25)]'
                      : 'border-slate-800/80 light:border-slate-200 hover:border-blue-500/40'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-blue-400 font-semibold">
                      {milestone.period}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${
                        isCurrent
                          ? 'bg-red-500/20 text-red-300 border-red-500/40'
                          : 'bg-slate-800/80 light:bg-slate-100 text-slate-400 light:text-slate-600 border-slate-700/60 light:border-slate-200'
                      }`}
                    >
                      {milestone.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white light:text-slate-900 mb-1 group-hover:text-blue-400 transition-colors">
                    {milestone.title}
                  </h3>

                  <div className="text-xs font-medium text-slate-400 light:text-slate-500 mb-3">
                    {milestone.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
