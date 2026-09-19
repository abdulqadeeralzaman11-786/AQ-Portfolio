import { Project, Language } from '../types';
import { X, ExternalLink, Tag, TrendingUp, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
}

export function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-card"
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="project-modal-close-btn"
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 pr-8">
          <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full inline-block mb-2">
            {lang === 'en' ? project.category : project.categoryUr}
          </span>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            {lang === 'en' ? project.title : project.titleUr}
          </h3>
        </div>

        {/* Metrics Banner if available */}
        {project.metrics && (
          <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-xs font-semibold text-emerald-800">
            <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{lang === 'en' ? `Key Outcome: ${project.metrics}` : `اہم نتیجہ: ${project.metrics}`}</span>
          </div>
        )}

        {/* Detailed Narrative */}
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed mb-6">
          <p className="font-medium text-slate-800">
            {lang === 'en' ? 'Project Overview:' : 'پروجیکٹ کا جائزہ:'}
          </p>
          <p>
            {lang === 'en' ? project.description : project.descriptionUr}
          </p>
          <p>
            {lang === 'en'
              ? 'Engineered by Abdul Qadeer Al Zaman with a focus on high reliability, fast rendering performance, accessible navigation, and clean maintainable code.'
              : 'عبد القدیر الزماں کی زیر نگرانی تیار کردہ، جس میں اعلیٰ کارکردگی، تیز رفتار نیویگیشن اور پائیدار کوڈ کو ترجیح دی گئی۔'}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Technologies Employed' : 'استعمال شدہ ٹیکنالوجیز'}</span>
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'en' ? 'Production Architecture' : 'پروڈکشن گریڈ سلوشن'}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            {lang === 'en' ? 'Done' : 'مکمل'}
          </button>
        </div>

      </div>
    </div>
  );
}
