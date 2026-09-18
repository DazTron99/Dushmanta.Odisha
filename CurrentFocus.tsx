import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Flame } from 'lucide-react';
import { CURRENT_FOCUS_ITEMS } from '../data/portfolioData';

export const CurrentFocus: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-blue-500/30 relative overflow-hidden shadow-2xl shadow-blue-950/60">
          {/* Subtle Ambient Backdrop Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-600/15 via-red-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5" />
              <span>Daily Priorities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
              Currently Focused On
            </h2>
            <p className="mt-2 text-sm text-slate-300 light:text-slate-600">
              Where my daily hours, mental energy, and disciplined practice are invested right now.
            </p>
          </div>

          {/* 5 Focus Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
            {CURRENT_FOCUS_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-slate-900/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(37,99,235,0.3)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-base font-bold text-white light:text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-mono text-blue-400 light:text-blue-600 mb-2 font-medium">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                    {item.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 light:border-slate-200">
                  <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 light:text-blue-700 border border-blue-500/20">
                    {item.progress}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
