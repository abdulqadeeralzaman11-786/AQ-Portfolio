import { Language, ThemeMode } from '../types';
import { personalDetails } from '../data/portfolioData';
import { Code2, Zap, ShieldCheck, MessagesSquare, MapPin, Mail, Sparkles, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

interface AboutProps {
  lang: Language;
  theme?: ThemeMode;
}

export function About({ lang, theme = 'dark' }: AboutProps) {
  const isDark = theme === 'dark';
  const principles = [
    {
      icon: Code2,
      title: lang === 'en' ? 'Clean Architecture' : 'صاف اور معیاری کوڈ',
      desc: lang === 'en' 
        ? 'Writing well-structured, maintainable, and type-safe code that scales effortlessly.'
        : 'ایسا کوڈ لکھنا جو آسان، مستحکم اور طویل مدتی استعمال کے لیے پائیدار ہو۔'
    },
    {
      icon: Zap,
      title: lang === 'en' ? 'Speed & Performance' : 'تیز رفتار اور کارکردگی',
      desc: lang === 'en'
        ? 'Optimizing load metrics, asset budgets, and rendering speeds for snappy responsiveness.'
        : 'سائٹ اور ایپ کی سپیڈ اور رسپانس ٹائم کو اعلیٰ ترین درجے پر رکھنا۔'
    },
    {
      icon: ShieldCheck,
      title: lang === 'en' ? 'Reliability & Security' : 'اعتماد اور سیکیورٹی',
      desc: lang === 'en'
        ? 'Adhering to strict web standards, robust validation, and bulletproof user flows.'
        : 'معیاری سیکیورٹی پروٹوکولز اور محفوظ صارف کا بہاؤ یقینی بنانا۔'
    },
    {
      icon: MessagesSquare,
      title: lang === 'en' ? 'Clear Collaboration' : 'بہترین ابلاغ اور تعاون',
      desc: lang === 'en'
        ? 'Transparent project updates, rapid iterations, and friendly client partnership.'
        : 'شفاف بات چیت، فوری فیڈ بیک اور کلائنٹس کے ساتھ بہترین دوستانہ رابطہ۔'
    }
  ];

  return (
    <section
      id="about"
      className={`py-20 border-t transition-colors duration-300 ${
        isDark ? 'bg-slate-900/60 border-slate-800/80 text-slate-200' : 'bg-white border-slate-200/80 text-slate-800'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${
              isDark
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'About Abdul Qadeer' : 'عبد القدیر کے بارے میں'}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {lang === 'en' ? 'Professional Background & Philosophy' : 'پیشہ ورانہ پس منظر اور اصول'}
          </h2>
          <p
            className={`mt-3 max-w-2xl text-base leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'en'
              ? 'Dedicated to bringing digital products from initial concept to high-impact reality.'
              : 'خیالات کو عملی اور کامیاب ڈیجیٹل مصنوعات میں تبدیل کرنے کے لیے پرعزم۔'}
          </p>
        </div>

        {/* Narrative & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story */}
          <div
            className={`lg:col-span-7 space-y-4 leading-relaxed text-base ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            <p
              className={`font-semibold text-lg ${
                isDark ? 'text-amber-400' : 'text-slate-900'
              }`}
            >
              {lang === 'en' ? 'Hello! I am Abdul Qadeer Al Zaman.' : 'خوش آمدید! میں عبد القدیر الزماں ہوں۔'}
            </p>
            <p className={lang === 'ur' ? 'font-urdu leading-loose text-lg' : ''}>
              {lang === 'en' ? personalDetails.about : personalDetails.aboutUrdu}
            </p>
            <p>
              {lang === 'en'
                ? 'Whether engineering custom enterprise management dashboards, building responsive client portals, or optimizing web applications for speed and search engines, my approach is always rooted in clarity, precision, and client satisfaction.'
                : 'خواہ انٹرپرائز سسٹمز ہوں، کسٹمر پورٹلز یا جدید ترین ویب سائٹس، میرا طریقہ کار ہمیشہ شفافیت، معیاری کارکردگی اور بروقت تکمیل پر مبنی ہوتا ہے۔'}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {['Frontend Architecture', 'Backend APIs', 'Responsive Design', 'TypeScript', 'Performance Audits'].map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium border ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 text-slate-300'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-3 h-3 text-amber-500" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Overview Card */}
          <div
            className={`lg:col-span-5 rounded-2xl p-6 shadow-xs border transition-colors ${
              isDark
                ? 'bg-slate-800/80 border-slate-700/80 text-slate-200'
                : 'bg-slate-50 border-slate-200/90 text-slate-800'
            }`}
          >
            <h3
              className={`text-base font-bold mb-4 pb-3 border-b ${
                isDark ? 'text-white border-slate-700' : 'text-slate-900 border-slate-200'
              }`}
            >
              {lang === 'en' ? 'Personal Details' : 'ذاتی تفصیلات'}
            </h3>

            <dl className="space-y-3.5 text-sm">
              <div>
                <dt className="text-xs text-slate-400 font-medium">
                  {lang === 'en' ? 'Full Name' : 'مکمل نام'}
                </dt>
                <dd
                  className={`font-semibold mt-0.5 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {personalDetails.name} ({personalDetails.nameUrdu})
                </dd>
              </div>

              <div>
                <dt className="text-xs text-slate-400 font-medium">
                  {lang === 'en' ? 'Direct Email' : 'ای میل'}
                </dt>
                <dd className="font-semibold mt-0.5">
                  <a
                    href={`mailto:${personalDetails.email}`}
                    className="text-amber-500 hover:text-amber-400 hover:underline flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{personalDetails.email}</span>
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs text-slate-400 font-medium">
                  {lang === 'en' ? 'Direct Mobile & WhatsApp' : 'موبائل نمبر اور واٹس ایپ'}
                </dt>
                <dd className="font-semibold mt-0.5 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${personalDetails.phone}`}
                    className="text-amber-500 hover:text-amber-400 hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{personalDetails.phoneFormatted}</span>
                  </a>
                  <a
                    href={personalDetails.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-xs flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs text-slate-400 font-medium">
                  {lang === 'en' ? 'Location' : 'مقام'}
                </dt>
                <dd
                  className={`font-medium mt-0.5 flex items-start gap-1.5 ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? personalDetails.location : personalDetails.locationUrdu}</span>
                </dd>
              </div>

              <div>
                <dt className="text-xs text-slate-400 font-medium">
                  {lang === 'en' ? 'Communication Languages' : 'زبانیں'}
                </dt>
                <dd
                  className={`font-medium mt-0.5 ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}
                >
                  English (Professional), Urdu (Native)
                </dd>
              </div>

              <div>
                <dt className="text-xs text-slate-400 font-medium">
                  {lang === 'en' ? 'Work Mode' : 'کام کا طریقہ کار'}
                </dt>
                <dd className="font-medium text-emerald-500 mt-0.5">
                  {lang === 'en' ? 'Remote / Hybrid / Contract' : 'ریموٹ / ہائبرڈ / کنٹریکٹ'}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-800/60 border-slate-700/60 hover:border-amber-500/40 hover:bg-slate-800'
                    : 'bg-white border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                    isDark
                      ? 'bg-slate-700 text-amber-400'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h4
                  className={`font-bold text-sm mb-1.5 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

