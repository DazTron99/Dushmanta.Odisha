import React from 'react';
import { ArrowUp, Mail, Heart, GraduationCap, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Goals', href: '#goals' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-slate-800/80 light:border-slate-200 bg-[#060b14] light:bg-slate-100 text-slate-400 light:text-slate-600 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 border border-blue-400/40 text-white font-mono font-black text-base shadow-sm">
                DS
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#060b14]" />
              </div>
              <span className="text-lg font-bold text-white light:text-slate-900">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-blue-400 light:text-blue-600">
              Class 10 Student • Future Web Developer • Tech Enthusiast
            </p>
            <p className="text-xs text-slate-500 light:text-slate-500 mt-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-red-500" />
              Odisha, India
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-400 light:hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            type="button"
            id="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700/80 light:border-slate-300 bg-slate-900/80 light:bg-white text-xs font-semibold text-slate-200 light:text-slate-800 hover:text-white hover:border-red-500/50 hover:bg-slate-800 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-red-400 animate-bounce" />
          </button>
        </div>

        {/* Bottom divider and copyright */}
        <div className="pt-8 border-t border-slate-800/80 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Dushmanta Sahu. Built with authenticity and code.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Odisha, India</span>
            <span>•</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-blue-400 transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
