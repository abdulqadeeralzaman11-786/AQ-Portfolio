import { useState, useEffect, useRef } from 'react';
import { Language, HeroSlide } from '../types';
import { heroSlidesData, personalDetails } from '../data/portfolioData';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
  FileText,
  Mail,
  Copy,
  Check,
  Sparkles,
  Layers,
  Code2,
  Briefcase,
  CheckCircle2,
  TrendingUp,
  ExternalLink
} from 'lucide-react';

interface FrontSlidesProps {
  lang: Language;
  onOpenResume: () => void;
}

export function FrontSlides({ lang, onOpenResume }: FrontSlidesProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slides = heroSlidesData;
  const currentSlide = slides[currentSlideIndex];
  const slideDuration = 6500; // 6.5s per slide

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [isPlaying, slides.length, currentSlideIndex]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleAction = (action?: string, href?: string) => {
    if (action === 'resume') {
      onOpenResume();
    } else if (action === 'copyEmail') {
      handleCopyEmail();
    } else if (action === 'contact') {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'projects') {
      const el = document.getElementById('projects');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'skills') {
      const el = document.getElementById('skills');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (href) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Dynamic theme gradients & badges based on slide
  const getThemeStyling = (theme: HeroSlide['themeColor']) => {
    switch (theme) {
      case 'blue':
        return {
          glow: 'from-blue-500/15 via-sky-500/10 to-transparent',
          badgeBg: 'bg-sky-500/10 border-sky-400/30 text-sky-300',
          accent: 'text-sky-400',
          btnPrimary: 'bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-sky-500/20',
          indicator: 'bg-sky-400',
          borderGlow: 'hover:border-sky-500/40',
          icon: Layers
        };
      case 'emerald':
        return {
          glow: 'from-emerald-500/15 via-teal-500/10 to-transparent',
          badgeBg: 'bg-emerald-500/10 border-emerald-400/30 text-emerald-300',
          accent: 'text-emerald-400',
          btnPrimary: 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-emerald-500/20',
          indicator: 'bg-emerald-400',
          borderGlow: 'hover:border-emerald-500/40',
          icon: Code2
        };
      case 'purple':
        return {
          glow: 'from-purple-500/15 via-violet-500/10 to-transparent',
          badgeBg: 'bg-purple-500/10 border-purple-400/30 text-purple-300',
          accent: 'text-purple-400',
          btnPrimary: 'bg-purple-500 hover:bg-purple-400 text-white font-semibold shadow-purple-500/20',
          indicator: 'bg-purple-400',
          borderGlow: 'hover:border-purple-500/40',
          icon: Briefcase
        };
      case 'amber':
      default:
        return {
          glow: 'from-amber-500/15 via-orange-500/10 to-transparent',
          badgeBg: 'bg-amber-500/10 border-amber-400/30 text-amber-300',
          accent: 'text-amber-400',
          btnPrimary: 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold shadow-amber-500/20',
          indicator: 'bg-amber-400',
          borderGlow: 'hover:border-amber-500/40',
          icon: Sparkles
        };
    }
  };

  const currentTheme = getThemeStyling(currentSlide.themeColor);
  const SlideIcon = currentTheme.icon;

  return (
    <div
      id="front-page-slider"
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-8"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Outer Glow Card Container */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl transition-all duration-500">
        
        {/* Animated Radial Backdrop */}
        <div
          className={`absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br ${currentTheme.glow} blur-3xl pointer-events-none transition-all duration-700`}
        />
        <div
          className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-tl ${currentTheme.glow} blur-3xl pointer-events-none transition-all duration-700`}
        />

        {/* Top Slider Navigation & Status Bar */}
        <div className="relative z-10 flex items-center justify-between px-6 sm:px-8 pt-6 pb-2 border-b border-slate-800/80">
          
          {/* Badge & Slide Tag */}
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${currentTheme.badgeBg} transition-colors duration-300`}
            >
              <SlideIcon className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? currentSlide.badge : currentSlide.badgeUr}</span>
            </span>

            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-md bg-slate-800/80 text-[11px] font-mono text-slate-400 border border-slate-700/50">
              SLIDE 0{currentSlideIndex + 1} / 0{slides.length}
            </span>
          </div>

          {/* Quick Slider Controls (Play/Pause, Counter, Arrows) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              id="slider-play-pause-btn"
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-all cursor-pointer"
              title={isPlaying ? 'Pause Auto-slide' : 'Resume Auto-slide'}
              aria-label="Toggle auto slide"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
            </button>

            <button
              onClick={handlePrev}
              id="slider-prev-btn"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
              aria-label="Previous Slide"
              title="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              id="slider-next-btn"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
              aria-label="Next Slide"
              title="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide Main Content Area */}
        <div className="relative z-10 px-6 sm:px-10 py-8 sm:py-12 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between">
          
          <div className="space-y-4">
            
            {/* Slide Title with Traditional Urdu Script */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {lang === 'en' ? currentSlide.title : currentSlide.titleUr}
              </h2>
              {currentSlide.id === 'slide-1' && (
                <p
                  className="font-urdu text-xl sm:text-2xl text-amber-400/95 font-semibold select-none pt-1"
                  dir="rtl"
                >
                  {personalDetails.nameUrdu}
                </p>
              )}
            </div>

            {/* Subtitle */}
            <p className={`text-base sm:text-xl font-semibold ${currentTheme.accent} tracking-tight`}>
              {lang === 'en' ? currentSlide.subtitle : currentSlide.subtitleUr}
            </p>

            {/* Tagline Description */}
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              {lang === 'en' ? currentSlide.tagline : currentSlide.taglineUr}
            </p>

            {/* Dynamic Interactive Cards / Stats / Highlights */}
            {currentSlide.stats && (
              <div className="pt-3 grid grid-cols-3 gap-3 max-w-xl">
                {currentSlide.stats.map((st, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 sm:p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 text-center backdrop-blur-sm"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {st.value}
                    </div>
                    <div className="text-[11px] font-medium text-slate-400 mt-0.5">
                      {lang === 'en' ? st.label : st.labelUr}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {currentSlide.highlights && (
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentSlide.highlights.map((hl, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:bg-slate-800/90 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${currentTheme.accent}`} />
                      <span>{lang === 'en' ? hl.title : hl.titleUr}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {lang === 'en' ? hl.desc : hl.descUr}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Bottom Actions & Slide Dots */}
          <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-t border-slate-800/80">
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleAction(currentSlide.actionPrimary.action, currentSlide.actionPrimary.href)}
                className={`px-5 py-2.5 rounded-xl ${currentTheme.btnPrimary} transition-all shadow-md flex items-center gap-2 text-xs sm:text-sm cursor-pointer`}
              >
                <span>
                  {lang === 'en'
                    ? currentSlide.actionPrimary.label
                    : currentSlide.actionPrimary.labelUr}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {currentSlide.actionSecondary && (
                <button
                  onClick={() =>
                    handleAction(
                      currentSlide.actionSecondary?.action,
                      currentSlide.actionSecondary?.href
                    )
                  }
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
                >
                  {currentSlide.actionSecondary.action === 'copyEmail' && copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 text-xs">
                        {lang === 'en' ? 'Email Copied!' : 'ای میل کاپی ہو گئی!'}
                      </span>
                    </>
                  ) : (
                    <>
                      {currentSlide.actionSecondary.action === 'resume' && (
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                      )}
                      {currentSlide.actionSecondary.action === 'contact' && (
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                      )}
                      {currentSlide.actionSecondary.action === 'copyEmail' && (
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                      )}
                      <span>
                        {lang === 'en'
                          ? currentSlide.actionSecondary.label
                          : currentSlide.actionSecondary.labelUr}
                      </span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Dot Selectors */}
            <div className="flex items-center gap-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlideIndex === idx
                      ? `w-8 ${currentTheme.indicator}`
                      : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  title={`Slide ${idx + 1}: ${slide.title}`}
                />
              ))}
            </div>

          </div>

        </div>

        {/* Active Slide Bottom Progress Line */}
        <div className="w-full h-1 bg-slate-800">
          <div
            className={`h-full ${currentTheme.indicator} transition-all duration-300`}
            style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
          />
        </div>

      </div>
    </div>
  );
}
