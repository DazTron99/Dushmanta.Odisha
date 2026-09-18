import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Terminal, Sparkles, Rocket, Target } from 'lucide-react';
import { GOALS_DATA } from '../data/portfolioData';

const GOAL_ICONS: Record<string, React.FC<{ className?: string }>> = {
  GraduationCap,
  Terminal,
  Sparkles,
  Rocket,
};

export const Goals: React.FC = () => {
  return (
    <section id="goals" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Forward Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Academic &amp; Technical Goals
          </h2>
          <p className="mt-3 text-sm text-slate-300 light:text-slate-600 max-w-xl mx-auto">
            Clear targets anchor my daily effort. Here is what I am actively working towards across academics, engineering, and product creation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOALS_DATA.map((goal, idx) => {
            const Icon = GOAL_ICONS[goal.icon] || Target;
            const isRed = goal.accent === 'red';

            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className={`glass-panel p-8 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  isRed
                    ? 'hover:border-red-500/50 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.25)]'
                    : 'hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.25)]'
                }`}
              >
                {/* Background Ambient Aura */}
                <div
                  className={`absolute -right-12 -top-12 w-36 h-36 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 opacity-40 group-hover:opacity-70 ${
                    isRed ? 'bg-red-500/20' : 'bg-blue-500/20'
                  }`}
                />

                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                      isRed
                        ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                        : 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase px-3 py-1 rounded-full border ${
                      isRed
                        ? 'bg-red-500/15 text-red-300 border-red-500/30'
                        : 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                    }`}
                  >
                    {goal.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2 group-hover:text-blue-400 transition-colors">
                  {goal.title}
                </h3>

                <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                  {goal.description}
                </p>

                <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 light:text-slate-500">Target Horizon:</span>
                  <span
                    className={`font-semibold ${
                      isRed ? 'text-red-400' : 'text-blue-400'
                    }`}
                  >
                    {goal.target}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
