/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Language, ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ur' : 'en'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        isDark
          ? 'bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950'
          : 'bg-slate-50 text-slate-900 selection:bg-amber-200 selection:text-amber-950'
      }`}
    >
      {/* Navigation */}
      <Navbar
        lang={lang}
        theme={theme}
        onToggleLang={toggleLanguage}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          lang={lang}
          theme={theme}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <About lang={lang} theme={theme} />
        <Skills lang={lang} theme={theme} />
        <Projects lang={lang} theme={theme} />
        <Timeline lang={lang} theme={theme} />
        <Contact lang={lang} theme={theme} />
      </main>

      {/* Footer */}
      <Footer lang={lang} theme={theme} />

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        lang={lang}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

