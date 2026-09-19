import { Language, ThemeMode } from '../types';
import { timelineData } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

interface TimelineProps {
  lang: Language;
  theme?: ThemeMode;
}

export function Timeline({ lang, theme = 'dark' }: TimelineProps) {
  const isDark = theme === 'dark';

  return (
    <section
      id="experience"
      className={`py-20 border-t transition-colors duration-300 ${
        isDark ? 'bg-slate-950 border-slate-800/80' : 'bg-slate-50/70 border-slate-200/80'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 border ${
              isDark
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                : 'bg-white border-slate-200 text-slate-600'
            }`}
          >
            {lang === 'en' ? 'Track Record' : 'پیشہ ورانہ سفر'}
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {lang === 'en' ? 'Professional Experience' : 'تجربہ اور کیریئر'}
          </h2>
          <p
            className={`mt-2 max-w-lg text-sm leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'en'
              ? 'A proven progression of architecting web solutions and delivering impactful software systems.'
              : 'جدید ویب سسٹمز کی تعمیر اور سافٹ ویئر ڈیولپمنٹ میں مسلسل ترقی کا ریکارڈ۔'}
          </p>
        </div>

        {/* Timeline Items */}
        <div
          className={`space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-5 before:w-0.5 ${
            isDark ? 'before:bg-slate-800' : 'before:bg-slate-200'
          }`}
        >
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative pl-10 sm:pl-14 group">
              {/* Timeline dot */}
              <div
                className={`absolute left-1.5 sm:left-3 top-1.5 w-4 h-4 rounded-full border-4 transition-colors shadow-xs ${
                  isDark
                    ? 'bg-slate-950 border-amber-500 group-hover:border-amber-400'
                    : 'bg-white border-slate-900 group-hover:border-amber-600'
                }`}
              />

              <div
                className={`rounded-2xl border p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-900/90 border-slate-800/90 hover:border-slate-700 text-slate-200'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 text-slate-800'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-md border ${
                      isDark
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                        : 'bg-amber-50 border-amber-200/80 text-amber-700'
                    }`}
                  >
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {item.organization}
                  </span>
                </div>

                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {lang === 'en' ? item.role : item.roleUr}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {lang === 'en' ? item.description : item.descriptionUr}
                </p>

                <div
                  className={`space-y-2 pt-2 border-t ${
                    isDark ? 'border-slate-800' : 'border-slate-100'
                  }`}
                >
                  {item.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className={`flex items-start gap-2 text-xs ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

