import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Education &amp; Growth Timeline
          </h2>
          <p className="mt-3 text-sm text-slate-300 light:text-slate-600 max-w-xl mx-auto">
            A structured path from foundational school logic to high-school examination readiness and forward-looking computer science ambitions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Track Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/30 via-red-500/40 to-blue-500/20 -translate-x-1/2 pointer-events-none" />

          {/* Left Vertical Line for Mobile */}
          <div className="md:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/30 via-red-500/40 to-blue-500/20 pointer-events-none" />

          <div className="space-y-12">
            {EDUCATION_DATA.map((node, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = node.status === 'Current Focus';
              const isCompleted = node.status === 'Completed';

              return (
                <motion.div
                  key={node.grade}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-transform duration-300 shadow-lg ${
                        isCurrent
                          ? 'bg-slate-950 border-red-500 shadow-[0_0_20px_#ef4444] scale-110'
                          : isCompleted
                          ? 'bg-blue-950 border-blue-400 text-blue-300 shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                          : 'bg-slate-900 border-slate-700 text-slate-500'
                      }`}
                    >
                      {isCurrent ? (
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                        </span>
                      ) : isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      ) : (
                        <Clock className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Content Box */}
                  <div
                    className={`ml-14 md:ml-0 w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] ${
                      isEven ? 'md:text-left md:pr-4' : 'md:text-left md:pl-4'
                    }`}
                  >
                    <div
                      className={`glass-panel p-6 rounded-2xl relative border transition-all duration-300 group hover:-translate-y-1 ${
                        isCurrent
                          ? 'border-red-500/50 shadow-[0_0_30px_-5px_rgba(239,68,68,0.25)]'
                          : 'border-slate-800/80 light:border-slate-200 hover:border-blue-500/40'
                      }`}
                    >
                      {/* Active Current Tag */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-extrabold text-white light:text-slate-900">
                            {node.grade}
                          </span>
                          <span className="text-xs font-mono text-slate-400 light:text-slate-500">
                            • {node.phase}
                          </span>
                        </div>
                        {isCurrent ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-red-500/20 text-red-400 border border-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                            <Sparkles className="w-3 h-3" />
                            Active Grade
                          </span>
                        ) : (
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                              isCompleted
                                ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                                : 'bg-slate-800 text-slate-400 border border-slate-700'
                            }`}
                          >
                            {node.status}
                          </span>
                        )}
                      </div>

                      <div className="text-sm font-semibold text-blue-400 light:text-blue-600 mb-2">
                        {node.focus}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                        {node.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 light:border-slate-200">
                        {node.keyTopics.map((topic) => (
                          <span
                            key={topic}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 light:bg-slate-100 text-slate-400 light:text-slate-600 border border-slate-800/60 light:border-slate-200"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
