import { useState } from 'react';
import { Language, ThemeMode } from '../types';
import { skillsData } from '../data/portfolioData';
import { Layout, Server, Wrench, CheckCircle } from 'lucide-react';

interface SkillsProps {
  lang: Language;
  theme?: ThemeMode;
}

export function Skills({ lang, theme = 'dark' }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all');
  const isDark = theme === 'dark';

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-amber-500" />;
      case 'Server':
        return <Server className="w-5 h-5 text-sky-500" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-emerald-500" />;
    }
  };

  const displayedCategories = selectedCategory === 'all'
    ? skillsData
    : [skillsData[selectedCategory]];

  return (
    <section
      id="skills"
      className={`py-20 border-t transition-colors duration-300 ${
        isDark ? 'bg-slate-950 border-slate-800/80' : 'bg-slate-50/70 border-slate-200/80'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 border ${
              isDark
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                : 'bg-amber-50 border-amber-200/80 text-amber-700'
            }`}
          >
            {lang === 'en' ? 'Core Competencies' : 'بنیادی تکنیکی مہارتیں'}
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {lang === 'en' ? 'Technical Stack & Expertise' : 'ٹیکنیکل اسٹیک اور مہارت'}
          </h2>
          <p
            className={`mt-2 max-w-xl text-sm leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'en'
              ? 'A balanced blend of modern front-end craftsmanship, resilient backend systems, and agile engineering practices.'
              : 'جدید فرنٹ اینڈ ڈیزائن، محفوظ بیک اینڈ سسٹمز اور موثر ڈیولپمنٹ طریقوں کا مجموعہ۔'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? isDark
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900 text-white shadow-xs'
                : isDark
                  ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {lang === 'en' ? 'All Skills' : 'تمام مہارتیں'}
          </button>
          {skillsData.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(idx)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === idx
                  ? isDark
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-900 text-white shadow-xs'
                  : isDark
                    ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {lang === 'en' ? cat.title : cat.titleUr}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-2xl border p-6 shadow-sm flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                isDark
                  ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700 text-slate-200'
                  : 'bg-white border-slate-200/90 hover:border-slate-300 text-slate-800'
              }`}
            >
              <div>
                <div
                  className={`flex items-center gap-3 mb-6 pb-4 border-b ${
                    isDark ? 'border-slate-800' : 'border-slate-100'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isDark
                        ? 'bg-slate-800 border-slate-700'
                        : 'bg-slate-50 border-slate-200/60'
                    }`}
                  >
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3
                      className={`text-base font-bold leading-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {lang === 'en' ? category.title : category.titleUr}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {category.skills.length} {lang === 'en' ? 'Core areas' : 'شعبے'}
                    </span>
                  </div>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center text-xs font-semibold mb-1">
                        <span
                          className={`transition-colors ${
                            isDark
                              ? 'text-slate-200 group-hover:text-amber-400'
                              : 'text-slate-800 group-hover:text-amber-700'
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span className="text-slate-400 font-mono text-[11px]">{skill.level}%</span>
                      </div>
                      
                      {/* Progress bar */}
                      <div
                        className={`w-full h-1.5 rounded-full overflow-hidden mb-1.5 ${
                          isDark ? 'bg-slate-800' : 'bg-slate-100'
                        }`}
                      >
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isDark
                              ? 'bg-amber-500 group-hover:bg-amber-400'
                              : 'bg-slate-800 group-hover:bg-amber-600'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`mt-6 pt-4 border-t text-xs flex items-center gap-1.5 ${
                  isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-400'
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>{lang === 'en' ? 'Production Tested Experience' : 'عملی تجربہ سے تصدیق شدہ'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

