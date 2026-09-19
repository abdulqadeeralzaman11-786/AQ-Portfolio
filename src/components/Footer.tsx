import { Language, ThemeMode } from '../types';
import { personalDetails } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
  theme?: ThemeMode;
}

export function Footer({ lang, theme = 'dark' }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 py-14 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 text-amber-400 font-bold text-xs flex items-center justify-center">
                AQ
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalDetails.name}
              </span>
            </div>
            <p className="font-urdu text-base text-amber-400/90 font-medium">
              {personalDetails.nameUrdu}
            </p>
            <p className="text-xs text-slate-400 max-w-sm mt-1">
              {lang === 'en'
                ? 'Engineering high quality web software & bespoke digital solutions.'
                : 'جدید ویب ٹیکنالوجیز اور معیاری سافٹ ویئر ڈیولپمنٹ۔'}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">
              {lang === 'en' ? 'About' : 'تعارف'}
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              {lang === 'en' ? 'Skills' : 'مہارتیں'}
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              {lang === 'en' ? 'Projects' : 'پروجیکٹس'}
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              {lang === 'en' ? 'Experience' : 'تجربہ'}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {lang === 'en' ? 'Contact' : 'رابطہ'}
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>{lang === 'en' ? 'Back to top' : 'اوپر جائیں'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>{lang === 'en' ? 'Official Website of Abdul Qadeer Al Zaman' : 'عبد القدیر الزماں کی آفیشل ویب سائٹ'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
