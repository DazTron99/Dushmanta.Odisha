import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Code2, Sparkles, Send, FileText, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentTitle = PERSONAL_INFO.rotatingTitles[titleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.rotatingTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-slate-900/60 dark:bg-slate-900/70 light:bg-white/90 backdrop-blur-md text-xs font-medium text-slate-300 light:text-slate-700 mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-blue-300 light:text-blue-700">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            Class 10 Student
          </span>
          <span className="text-slate-600 dark:text-slate-600 light:text-slate-300">•</span>
          <span className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-400 light:text-slate-600">
            <MapPin className="w-3 h-3 text-red-400" />
            Odisha, India
          </span>
        </motion.div>

        {/* Name Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-slate-400 light:text-slate-600 mb-2">
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white light:text-slate-900 mb-4">
            <span className="inline-block bg-gradient-to-r from-white via-slate-100 to-slate-300 light:from-slate-900 light:via-slate-800 light:to-blue-900 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Rotating/Typing Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-12 sm:h-16 flex items-center justify-center mb-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 light:text-blue-600 flex items-center gap-1">
            <span>{displayText}</span>
            <span className="inline-block w-0.5 h-6 sm:h-8 bg-red-500 animate-pulse ml-0.5" />
          </h2>
        </motion.div>

        {/* Sincere Authentic Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base sm:text-lg text-slate-300 light:text-slate-600 max-w-2xl leading-relaxed mb-8 text-center"
        >
          I am a Class 10 student from Odisha passionate about modern web technologies, coding, and creative problem solving. While my primary commitment is achieving academic excellence in school, I actively build coding projects and explore AI concepts to prepare for the future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
        >
          {/* Main Button 1: Explore My Work */}
          <button
            type="button"
            id="hero-cta-projects"
            onClick={() => scrollToSection('projects')}
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white shadow-lg shadow-blue-700/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] border border-blue-300/30 transition-all duration-200"
          >
            <Code2 className="w-4 h-4 text-blue-100 group-hover:rotate-12 transition-transform duration-200" />
            <span>Explore My Work</span>
          </button>

          {/* Main Button 2: Contact Me */}
          <button
            type="button"
            id="hero-cta-contact"
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-100 light:text-slate-800 border border-slate-700 light:border-slate-300 hover:border-red-500/60 hover:text-red-400 light:hover:text-red-600 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Send className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            <span>Contact Me</span>
          </button>

          {/* Third Subtle Button: Download Resume */}
          <button
            type="button"
            id="hero-cta-resume"
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-slate-400 light:text-slate-600 hover:text-blue-300 light:hover:text-blue-700 border border-dashed border-slate-700/80 light:border-slate-300 hover:border-blue-500/40 transition-all duration-200"
            title="View Resume Status"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>Academic Resume</span>
            <span className="px-1.5 py-0.5 text-[10px] rounded font-mono bg-blue-500/20 text-blue-300 light:text-blue-700 border border-blue-400/30">
              Roadmap
            </span>
          </button>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 sm:mt-20 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 light:text-slate-600">
            Scroll to discover
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="p-2 rounded-full border border-slate-700/60 light:border-slate-300 bg-slate-900/40 light:bg-white text-blue-400 light:text-blue-600 shadow-sm"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
