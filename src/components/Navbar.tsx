import { useState, useEffect } from 'react';
import { Language, ThemeMode } from '../types';
import { personalDetails } from '../data/portfolioData';
import { Menu, X, Mail, Globe, ArrowUpRight, Moon, Sun, Sparkles, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  theme: ThemeMode;
  onToggleLang: () => void;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export function Navbar({ lang, theme, onToggleLang, onToggleTheme, onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('abdul_qadeer_profile_photo');
      if (saved) setCustomPhoto(saved);
    } catch {}

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'abdul_qadeer_profile_photo') {
        setCustomPhoto(e.newValue);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'en' ? 'Slides' : 'سلائیڈز', href: '#front-slides' },
    { name: lang === 'en' ? 'About' : 'تعارف', href: '#about' },
    { name: lang === 'en' ? 'Expertise' : 'مہارتیں', href: '#skills' },
    { name: lang === 'en' ? 'Projects' : 'پروجیکٹس', href: '#projects' },
    { name: lang === 'en' ? 'Experience' : 'تجربہ', href: '#experience' },
    { name: lang === 'en' ? 'Contact' : 'رابطہ', href: '#contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-slate-950/85 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-3'
            : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-brand-logo"
          className="group flex items-center gap-3 focus:outline-none"
        >
          {customPhoto ? (
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-amber-500/80 shadow-md group-hover:scale-105 transition-transform duration-200">
              <img
                src={customPhoto}
                alt={personalDetails.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-extrabold flex items-center justify-center text-sm shadow-md transition-transform duration-200 group-hover:scale-105 border border-amber-300/30">
              AQ
            </div>
          )}
          <div className="flex flex-col">
            <span
              className={`font-bold text-base leading-tight tracking-tight transition-colors ${
                isDark
                  ? 'text-white group-hover:text-amber-400'
                  : 'text-slate-900 group-hover:text-amber-700'
              }`}
            >
              {personalDetails.name}
            </span>
            <span className="text-xs text-amber-500/90 font-medium font-urdu leading-tight">
              {personalDetails.nameUrdu}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              className={`text-sm font-medium transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all after:duration-200 ${
                isDark
                  ? 'text-slate-300 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Theme Switcher, Language Toggle, Resume, Contact) */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Theme Switcher */}
          <button
            id="nav-theme-toggle-btn"
            onClick={onToggleTheme}
            className={`p-2 rounded-lg border text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center ${
              isDark
                ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
            }`}
            title={isDark ? 'Switch to Crisp Light Mode' : 'Switch to Midnight Dark Mode'}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Language Switcher */}
          <button
            id="nav-lang-toggle-btn"
            onClick={onToggleLang}
            className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              isDark
                ? 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            }`}
            title={lang === 'en' ? 'Switch to Urdu' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'اردو' : 'English'}</span>
          </button>

          {/* Quick WhatsApp / Call */}
          <a
            href={personalDetails.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors flex items-center justify-center cursor-pointer"
            title="Chat on WhatsApp (+923425075721)"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          {/* Quick Resume View */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
              isDark
                ? 'border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-800'
                : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white'
            }`}
          >
            <span>{lang === 'en' ? 'CV' : 'سی وی'}</span>
            <ArrowUpRight className="w-3 h-3 text-amber-400" />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            id="nav-contact-cta"
            className="text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 transition-all shadow-sm flex items-center gap-1.5 hover:shadow-md cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Get In Touch' : 'رابطہ کریں'}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-theme-btn"
            onClick={onToggleTheme}
            className={`p-2 rounded-lg border text-xs ${
              isDark
                ? 'border-slate-800 bg-slate-900 text-amber-400'
                : 'border-slate-200 bg-slate-100 text-slate-700'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            id="mobile-lang-btn"
            onClick={onToggleLang}
            className={`p-2 text-xs font-bold rounded-lg ${
              isDark ? 'bg-slate-900 text-amber-400 border border-slate-800' : 'bg-slate-100 text-slate-700'
            }`}
          >
            {lang === 'en' ? 'اردو' : 'EN'}
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'text-slate-300 hover:bg-slate-900' : 'text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 ${
            isDark
              ? 'bg-slate-950 border-slate-800 text-slate-200'
              : 'bg-white border-slate-200 text-slate-800'
          }`}
        >
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-lg ${
                  isDark
                    ? 'hover:bg-slate-900 hover:text-white'
                    : 'hover:bg-slate-50 hover:text-slate-950'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div
              className={`pt-3 border-t flex flex-col gap-2 ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${personalDetails.phone}`}
                  className="py-2.5 px-3 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-300 font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'en' ? 'Call Now' : 'کال کریں'}</span>
                </a>
                <a
                  href={personalDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className={`w-full text-center py-2.5 px-4 rounded-xl border text-xs font-semibold ${
                  isDark
                    ? 'border-slate-700 text-slate-300 bg-slate-900'
                    : 'border-slate-200 text-slate-800 bg-white'
                }`}
              >
                {lang === 'en' ? 'View Curriculum Vitae (CV)' : 'سی وی دیکھیں'}
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>{lang === 'en' ? 'Get In Touch' : 'رابطہ کریں'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

