import { useState } from 'react';
import { Project, Language, ThemeMode } from '../types';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, FolderGit2, Sparkles, TrendingUp } from 'lucide-react';

interface ProjectsProps {
  lang: Language;
  theme?: ThemeMode;
}

export function Projects({ lang, theme = 'dark' }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isDark = theme === 'dark';

  return (
    <section
      id="projects"
      className={`py-20 border-t transition-colors duration-300 ${
        isDark ? 'bg-slate-900/70 border-slate-800/80' : 'bg-white border-slate-200/80'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${
              isDark
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'Selected Portfolio' : 'منتخب کام'}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {lang === 'en' ? 'Featured Work & Projects' : 'اہم کام اور پروجیکٹس'}
          </h2>
          <p
            className={`mt-3 max-w-xl text-sm leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'en'
              ? 'A curated selection of modern web applications, platforms, and utilities engineered by Abdul Qadeer Al Zaman.'
              : 'عبد القدیر الزماں کے تیار کردہ جدید ویب سسٹمز، ایپلی کیشنز اور ڈیجیٹل ٹولز کی ایک جھلک۔'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group rounded-2xl border p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${
                isDark
                  ? 'bg-slate-800/70 hover:bg-slate-800 border-slate-700/80 hover:border-amber-500/50 shadow-md'
                  : 'bg-slate-50/70 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
                      isDark
                        ? 'bg-slate-900/90 border-slate-700 text-slate-300'
                        : 'bg-white border-slate-200/80 text-slate-600'
                    }`}
                  >
                    {lang === 'en' ? project.category : project.categoryUr}
                  </span>
                  
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-slate-400 group-hover:text-amber-400 group-hover:border-amber-500/50'
                        : 'bg-white border-slate-200 text-slate-400 group-hover:text-slate-900 group-hover:border-slate-300'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <h3
                  className={`text-lg font-bold tracking-tight mb-2 transition-colors ${
                    isDark
                      ? 'text-white group-hover:text-amber-400'
                      : 'text-slate-900 group-hover:text-amber-700'
                  }`}
                >
                  {lang === 'en' ? project.title : project.titleUr}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {lang === 'en' ? project.description : project.descriptionUr}
                </p>
              </div>

              <div>
                {/* Metric if available */}
                {project.metrics && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-3">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{project.metrics}</span>
                  </div>
                )}

                {/* Tech Badges */}
                <div
                  className={`flex flex-wrap gap-1.5 pt-3 border-t ${
                    isDark ? 'border-slate-700/60' : 'border-slate-200/60'
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                        isDark
                          ? 'bg-slate-900/80 text-slate-300 border-slate-700'
                          : 'bg-white text-slate-600 border-slate-200/80'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}

