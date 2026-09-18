import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeSection: string;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Goals', href: '#goals' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Compute scroll percentage
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Scroll Progress Bar at the very top */}
      <div className="w-full h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-red-500 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(37,99,235,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg shadow-black/10 py-3'
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* DS Text Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            id="nav-logo"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 border border-blue-400/40 text-white font-mono font-black text-lg tracking-tighter shadow-sm transition-transform duration-300 group-hover:scale-105">
              DS
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#070d18] shadow-[0_0_8px_#ef4444]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight leading-none text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-blue-400 transition-colors">
                Dushmanta Sahu
              </span>
              <span className="text-[11px] font-mono text-slate-400 light:text-slate-600 leading-tight">
                Class 10 • Odisha
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-slate-900/60 dark:bg-slate-900/70 light:bg-white/80 backdrop-blur-md shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white light:text-slate-600 light:hover:text-slate-950'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-blue-600/90 shadow-[0_0_12px_rgba(37,99,235,0.6)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Theme Switcher & Contact Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              id="theme-toggle-button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="relative p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 light:bg-white/90 text-slate-200 light:text-slate-700 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600" />
              )}
            </button>

            {/* Quick Contact CTA (Desktop) */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              id="nav-cta-contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-md shadow-blue-900/30 hover:shadow-blue-600/40 border border-blue-400/30 transition-all duration-200 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-xl border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 bg-slate-900/70 text-slate-200 light:text-slate-800 hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden glass-panel border-b border-blue-500/20 px-6 py-5 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    id={`mobile-nav-link-${link.label.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold'
                        : 'text-slate-300 light:text-slate-700 hover:bg-slate-800/40 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" />}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-slate-800/60 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-900/30"
                >
                  Contact Dushmanta
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
