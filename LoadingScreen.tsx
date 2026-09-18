import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onFinish: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [phase, setPhase] = useState<'logo' | 'name' | 'exit'>('logo');

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onFinish();
      return;
    }

    const t1 = setTimeout(() => {
      setPhase('name');
    }, 450);

    const t2 = setTimeout(() => {
      setPhase('exit');
    }, 1150);

    const t3 = setTimeout(() => {
      onFinish();
    }, 1550);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
          onClick={onFinish}
          title="Click to skip"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070d18] text-white cursor-pointer select-none"
        >
          {/* Subtle glowing ambient behind logo */}
          <div className="absolute w-72 h-72 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* DS Logo glyph */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 border border-blue-400/30 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              <span className="text-3xl font-extrabold tracking-tighter text-white font-mono">
                DS
              </span>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse" />
            </motion.div>

            {/* Name Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: phase === 'name' ? 1 : 0, y: phase === 'name' ? 0 : 12 }}
              transition={{ duration: 0.35 }}
              className="mt-6 text-center"
            >
              <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Dushmanta Sahu
              </h1>
              <p className="mt-1 text-xs tracking-widest uppercase font-mono text-blue-400/90">
                Class 10 Student • Future Web Developer
              </p>
            </motion.div>

            {/* Minimal line progress indicator */}
            <div className="w-36 h-0.5 bg-slate-800 rounded-full mt-7 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut', repeat: Infinity }}
                className="w-full h-full bg-gradient-to-r from-blue-500 via-red-500 to-blue-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
