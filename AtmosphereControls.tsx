import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, Sparkles, Eye, Zap, Wind, Magnet, X, ChevronUp, RefreshCw } from 'lucide-react';
import { BackgroundSettings, BlurIntensity, MotionSpeed, GravityMode } from '../types';

interface AtmosphereControlsProps {
  settings: BackgroundSettings;
  onChangeSettings: (newSettings: Partial<BackgroundSettings>) => void;
  onTriggerPulse: () => void;
}

export const AtmosphereControls: React.FC<AtmosphereControlsProps> = ({
  settings,
  onChangeSettings,
  onTriggerPulse,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-30 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 sm:w-80 glass-panel bg-slate-950/90 dark:bg-slate-950/90 light:bg-white/95 rounded-2xl p-4 border border-blue-500/30 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 light:border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-white light:text-slate-900 tracking-tight">
                  Atmospheric Background
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close atmosphere settings"
                className="p-1 rounded-lg text-slate-400 hover:text-white light:hover:text-slate-900 hover:bg-slate-800 light:hover:bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3 space-y-3.5">
              {/* Blur Intensity Selector */}
              <div>
                <label className="flex items-center justify-between text-[11px] font-mono text-slate-400 light:text-slate-600 mb-1.5 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    Blur Intensity
                  </span>
                  <span className="text-blue-400 font-semibold capitalize">
                    {settings.blurIntensity}
                  </span>
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-900/90 light:bg-slate-100 border border-slate-800 light:border-slate-200">
                  {(['subtle', 'soft', 'dreamy'] as BlurIntensity[]).map((level) => {
                    const active = settings.blurIntensity === level;
                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => onChangeSettings({ blurIntensity: level })}
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-medium capitalize transition-all ${
                          active
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'
                        }`}
                      >
                        {level === 'dreamy' ? 'Dreamy 🌟' : level === 'soft' ? 'Soft ✨' : 'Subtle 🪐'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Constellation Lines Toggle */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-slate-300 light:text-slate-700 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Constellation Links
                </span>
                <button
                  type="button"
                  onClick={() => onChangeSettings({ constellations: !settings.constellations })}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                    settings.constellations ? 'bg-blue-600' : 'bg-slate-800 light:bg-slate-300'
                  }`}
                >
                  <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                      settings.constellations ? 'translate-x-4' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Speed Selector */}
              <div>
                <label className="flex items-center justify-between text-[11px] font-mono text-slate-400 light:text-slate-600 mb-1.5 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5 text-red-400" />
                    Drift Speed
                  </span>
                  <span className="text-red-400 font-semibold capitalize">
                    {settings.speed}
                  </span>
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-900/90 light:bg-slate-100 border border-slate-800 light:border-slate-200">
                  {(['calm', 'gentle', 'dynamic'] as MotionSpeed[]).map((spd) => {
                    const active = settings.speed === spd;
                    return (
                      <button
                        key={spd}
                        type="button"
                        onClick={() => onChangeSettings({ speed: spd })}
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-medium capitalize transition-all ${
                          active
                            ? 'bg-red-600 text-white shadow-sm'
                            : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'
                        }`}
                      >
                        {spd}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Gravity Mode */}
              <div>
                <label className="flex items-center justify-between text-[11px] font-mono text-slate-400 light:text-slate-600 mb-1.5 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Magnet className="w-3.5 h-3.5 text-purple-400" />
                    Mouse Physics
                  </span>
                  <span className="text-purple-400 font-semibold capitalize">
                    {settings.gravityMode}
                  </span>
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-900/90 light:bg-slate-100 border border-slate-800 light:border-slate-200">
                  {(['repel', 'attract', 'float'] as GravityMode[]).map((mode) => {
                    const active = settings.gravityMode === mode;
                    return (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => onChangeSettings({ gravityMode: mode })}
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-medium capitalize transition-all ${
                          active
                            ? 'bg-purple-600 text-white shadow-sm'
                            : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'
                        }`}
                      >
                        {mode}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Instant Energy Shockwave Trigger */}
              <button
                type="button"
                onClick={onTriggerPulse}
                className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white shadow-md shadow-red-950/30 flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Trigger Energy Burst</span>
              </button>
            </div>

            <div className="pt-2 border-t border-slate-800/80 light:border-slate-200 text-[10px] font-mono text-slate-400 light:text-slate-500 flex items-center justify-between">
              <span>Tip: Click anywhere to pulse shockwaves</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pill Toggle Button */}
      <button
        type="button"
        id="toggle-atmosphere-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle atmospheric background controls"
        className="group flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/90 border border-blue-500/30 hover:border-red-500/50 text-slate-200 light:text-slate-800 hover:text-white text-xs font-medium shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-200 active:scale-95"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
        </span>
        <span className="font-mono text-[11px] text-blue-300 light:text-blue-700 font-semibold">
          Blur: <span className="capitalize">{settings.blurIntensity}</span>
        </span>
        <Sliders className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 transition-colors" />
      </button>
    </div>
  );
};
