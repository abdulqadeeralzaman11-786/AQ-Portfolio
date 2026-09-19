import { useState } from 'react';
import { Language, ThemeMode } from '../types';
import { personalDetails } from '../data/portfolioData';
import { FrontSlides } from './FrontSlides';
import { ProfilePhotoUploader } from './ProfilePhotoUploader';
import { ArrowDown, Mail, Phone, MessageSquare, Copy, Check, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  lang: Language;
  theme: ThemeMode;
  onOpenResume: () => void;
}

export function Hero({ lang, theme, onOpenResume }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const isDark = theme === 'dark';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    if (personalDetails.phone) {
      navigator.clipboard.writeText(personalDetails.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center items-start overflow-hidden">
        {isDark ? (
          <>
            <div className="w-[700px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full -top-24 transform-gpu" />
            <div className="w-[600px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full top-32 -right-20 transform-gpu" />
          </>
        ) : (
          <>
            <div className="w-[640px] h-[380px] bg-amber-200/30 blur-[120px] rounded-full -top-24 transform-gpu" />
            <div className="w-[500px] h-[340px] bg-sky-200/25 blur-[130px] rounded-full top-20 -right-20 transform-gpu" />
          </>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Availability Status Badge */}
          <div
            id="hero-status-badge"
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold shadow-xs mb-5 transition-transform hover:scale-[1.02] ${
              isDark
                ? 'bg-emerald-950/60 border border-emerald-500/30 text-emerald-300'
                : 'bg-emerald-50 border border-emerald-200/70 text-emerald-800'
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{lang === 'en' ? personalDetails.status : personalDetails.statusUrdu}</span>
          </div>

          {/* User Profile Photo Uploader (User can set their own photo directly) */}
          <div className="mb-5">
            <ProfilePhotoUploader lang={lang} theme={theme} size="lg" showUploadButton={true} />
          </div>

          {/* Main Identity Title */}
          <h1
            id="hero-main-heading"
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-3xl ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {personalDetails.name}
          </h1>

          {/* Urdu Traditional Script Sub-heading */}
          <p
            id="hero-urdu-name"
            className="font-urdu text-2xl sm:text-3xl text-amber-500 font-semibold select-none mt-2 mb-3"
            dir="rtl"
          >
            {personalDetails.nameUrdu}
          </p>

          {/* Role & Core Pitch */}
          <p
            id="hero-role-title"
            className={`text-lg sm:text-xl font-semibold max-w-2xl mt-1 mb-2 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            {lang === 'en' ? personalDetails.title : personalDetails.titleUrdu}
          </p>

          <p
            id="hero-tagline"
            className={`text-base max-w-xl leading-relaxed mb-5 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'en' ? personalDetails.tagline : personalDetails.taglineUrdu}
          </p>

          {/* Direct Phone & WhatsApp Contact Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <a
              href={`tel:${personalDetails.phone}`}
              id="hero-phone-call-btn"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                isDark
                  ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/30'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-200'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{personalDetails.phoneFormatted}</span>
            </a>

            <a
              href={personalDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                isDark
                  ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>{lang === 'en' ? 'WhatsApp Chat' : 'واٹس ایپ رابطہ'}</span>
            </a>

            <button
              onClick={handleCopyPhone}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
              title="Copy mobile number"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">{lang === 'en' ? 'Copied' : 'کاپی ہو گیا'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>{lang === 'en' ? 'Copy Phone' : 'نمبر کاپی کریں'}</span>
                </>
              )}
            </button>

            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border ${
                isDark
                  ? 'bg-slate-800/90 text-slate-300 border-slate-700'
                  : 'bg-white text-slate-700 border-slate-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{lang === 'en' ? personalDetails.location : personalDetails.locationUrdu}</span>
            </div>
          </div>

          {/* Front Page Interactive Slides Showcase */}
          <div id="front-slides" className="w-full my-4">
            <FrontSlides lang={lang} onOpenResume={onOpenResume} />
          </div>

          {/* Quick Metrics Bar */}
          <div
            id="hero-metrics-bar"
            className={`w-full max-w-3xl grid grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl border shadow-sm mt-4 transition-colors ${
              isDark
                ? 'bg-slate-900/80 border-slate-800/80'
                : 'bg-white border-slate-200/90'
            }`}
          >
            <div
              className={`flex flex-col items-center justify-center p-2 text-center border-r ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <span
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {personalDetails.yearsExperience}
              </span>
              <span className="text-xs font-medium text-slate-400 mt-1">
                {lang === 'en' ? 'Years of Experience' : 'سال کا تجربہ'}
              </span>
            </div>

            <div
              className={`flex flex-col items-center justify-center p-2 text-center border-r ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <span
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {personalDetails.completedProjects}
              </span>
              <span className="text-xs font-medium text-slate-400 mt-1">
                {lang === 'en' ? 'Completed Projects' : 'مکمل پروجیکٹس'}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-500 tracking-tight">
                {personalDetails.clientSatisfaction}
              </span>
              <span className="text-xs font-medium text-slate-400 mt-1">
                {lang === 'en' ? 'Client Satisfaction' : 'صارفین کا اطمینان'}
              </span>
            </div>
          </div>

          {/* Subtle scroll down indicator */}
          <a
            href="#about"
            id="hero-scroll-indicator"
            className={`mt-10 transition-colors flex flex-col items-center gap-1.5 text-xs font-medium ${
              isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            <span>{lang === 'en' ? 'Explore Profile & Work' : 'مزید تفصیلات جانیے'}</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-amber-500" />
          </a>

        </div>
      </div>
    </section>
  );
}

