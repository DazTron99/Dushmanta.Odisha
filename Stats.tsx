import React from 'react';
import { motion } from 'motion/react';
import { BookMarked, MapPin, Flame, ShieldCheck } from 'lucide-react';
import { SAFE_STATS } from '../data/portfolioData';

const STAT_ICONS: Record<string, React.FC<{ className?: string }>> = {
  BookMarked,
  MapPin,
  Flame,
  ShieldCheck,
};

export const Stats: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAFE_STATS.map((stat, idx) => {
            const Icon = STAT_ICONS[stat.icon] || ShieldCheck;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-500">
                    {stat.label}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight mb-1">
                  {stat.value}
                </div>

                <div className="text-xs text-slate-400 light:text-slate-600 font-medium">
                  {stat.detail}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
