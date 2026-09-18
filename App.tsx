import React, { useState, useEffect } from 'react';
import { ThemeMode, Project, BackgroundSettings } from './types';
import { AnimatedBackground } from './components/AnimatedBackground';
import { AtmosphereControls } from './components/AtmosphereControls';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { CurrentFocus } from './components/CurrentFocus';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Journey } from './components/Journey';
import { Goals } from './components/Goals';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('ds_portfolio_theme') as ThemeMode | null;
    return saved === 'light' ? 'light' : 'dark';
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Background atmosphere state (default dreamy blur with constellations and gentle physics)
  const [bgSettings, setBgSettings] = useState<BackgroundSettings>({
    blurIntensity: 'dreamy',
    constellations: true,
    speed: 'gentle',
    gravityMode: 'repel',
    stardust: true,
  });
  const [pulseCount, setPulseCount] = useState(0);

  const handleTriggerPulse = () => {
    setPulseCount((c) => c + 1);
  };

  // Sync theme to root class, body style, and localStorage
  useEffect(() => {
    localStorage.setItem('ds_portfolio_theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scrollspy observer for active section detection
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'journey', 'goals', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollY >= top) {
            // Map education to about if desired, or keep as is
            const mappedSection = sections[i] === 'education' ? 'about' : sections[i];
            setActiveSection(mappedSection);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen relative selection:bg-red-500/30 selection:text-white transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#070d18] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
    }`}>
      {/* Short slick loading animation */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {/* Desktop subtle custom cursor */}
      <CustomCursor />

      {/* Canvas Animated Background: Red and White Balls with blurry bokeh & interactive features */}
      <AnimatedBackground
        theme={theme}
        settings={bgSettings}
        pulseTrigger={pulseCount}
      />

      {/* Floating Atmosphere Settings Dock */}
      <AtmosphereControls
        settings={bgSettings}
        onChangeSettings={(updates) => setBgSettings((prev) => ({ ...prev, ...updates }))}
        onTriggerPulse={handleTriggerPulse}
      />

      {/* Fixed Sticky Glass Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Education />
        <Skills />
        <CurrentFocus />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Journey />
        <Goals />
        <Stats />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Academic Resume Status Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
