import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Code2, Sparkles, BookOpen, MapPin, Compass, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const INTEREST_CARDS = [
  {
    id: 'student',
    title: 'Student',
    role: 'Class 10 Scholar',
    icon: GraduationCap,
    accent: 'blue',
    description:
      'Committed high school student in Odisha, maintaining daily discipline across mathematics, sciences, and upcoming board examinations.',
    tags: ['Class 10', 'Board Syllabus', 'Academic Focus', 'Odisha'],
  },
  {
    id: 'developer',
    title: 'Developer',
    role: 'Future Software Engineer',
    icon: Code2,
    accent: 'red',
    description:
      'Passionate about writing semantic HTML, modern responsive CSS/Tailwind, and JavaScript logic to build accessible web experiences.',
    tags: ['Semantic HTML5', 'Modern CSS', 'JavaScript', 'Responsive UI'],
  },
  {
    id: 'creator',
    title: 'Creator',
    role: 'UI & Digital Craftsman',
    icon: Sparkles,
    accent: 'blue',
    description:
      'Designing clean, student-friendly digital layouts with thoughtful typography, micro-interactions, and balanced negative space.',
    tags: ['UI/UX Design', 'Visual Hierarchy', 'Clean Layouts', 'Detail Oriented'],
  },
  {
    id: 'learner',
    title: 'Learner',
    role: 'Curiosity Explorer',
    icon: BookOpen,
    accent: 'red',
    description:
      'Always exploring how computational algorithms, modern web standards, and emerging AI technologies work under the hood.',
    tags: ['AI Prompting', 'Algorithmic Thinking', 'Self-Taught', 'Tech Trends'],
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Curious Mind. Focused Student. Future Developer.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white light:text-slate-900">
                  Genuine &amp; Grounded Journey
                </h3>
                <p className="text-xs font-mono text-slate-400 light:text-slate-600">
                  Odisha, India • Class 10 High School
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                My name is <strong className="text-white light:text-slate-900 font-semibold">Dushmanta Sahu</strong>. I live in the vibrant state of Odisha, India. As a Class 10 student, I believe that building a stellar future in technology starts with doing justice to the present—giving my complete dedication to my high school studies while dedicating deliberate hours to computer science and programming.
              </p>
              <p>
                Rather than fabricating inflated credentials or commercial experience, I present myself authentically: a young student who fell in love with how lines of code turn into interactive, beautiful software that anyone in the world can access.
              </p>
              <p>
                My mindset revolves around first-principles understanding: mastering the DOM before relying on abstraction, understanding responsive layout mathematics before adopting heavy dependencies, and using artificial intelligence as an intellectual catalyst rather than a crutch.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 light:border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                <div className="text-xs font-mono text-slate-400 light:text-slate-500">Education</div>
                <div className="text-sm font-semibold text-white light:text-slate-900 mt-0.5">Class 10</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                <div className="text-xs font-mono text-slate-400 light:text-slate-500">Origin</div>
                <div className="text-sm font-semibold text-white light:text-slate-900 mt-0.5">Odisha, India</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800 light:border-slate-200 col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-slate-400 light:text-slate-500">Ambition</div>
                <div className="text-sm font-semibold text-blue-400 light:text-blue-600 mt-0.5">Software Engineer</div>
              </div>
            </div>
          </div>

          {/* Quick Pillars Sidebar */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-blue-500">
              <h4 className="text-base font-bold text-white light:text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Current Priority
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                Excelling in the Class 10 board curriculum with focus on Mathematics, Science, and logical reasoning—the bedrock of computer science.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-red-500">
              <h4 className="text-base font-bold text-white light:text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Future Ambition
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                Advancing into computer science engineering, mastering full-stack web architectures, and engineering high-impact tools that help communities.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-slate-400">
              <h4 className="text-base font-bold text-white light:text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white light:bg-slate-800" />
                Creative &amp; AI Curiosity
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                Exploring generative AI interfaces, design systems, and video editing to articulate technological ideas visually and effectively.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Animated Interest Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTEREST_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isRed = card.accent === 'red';

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass-panel p-6 rounded-2xl border transition-all duration-300 group flex flex-col justify-between ${
                  isRed
                    ? 'hover:border-red-500/50 hover:shadow-[0_0_25px_-5px_rgba(239,68,68,0.3)]'
                    : 'hover:border-blue-500/50 hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.3)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isRed
                          ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                          : 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                        isRed
                          ? 'bg-red-500/15 text-red-300 border border-red-500/30'
                          : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                      }`}
                    >
                      {card.role}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white light:text-slate-900 mb-2 group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 light:border-slate-200">
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/60 light:bg-slate-100 text-slate-400 light:text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
