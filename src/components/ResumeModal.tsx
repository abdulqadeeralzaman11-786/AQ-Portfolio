import { Language } from '../types';
import { personalDetails, skillsData, timelineData, projectsData, qualificationsData } from '../data/portfolioData';
import { X, Printer, Download, Mail, MapPin, CheckCircle, ExternalLink, Phone, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export function ResumeModal({ isOpen, lang, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const savedPhoto = typeof window !== 'undefined' ? localStorage.getItem('abdul_qadeer_profile_photo') : null;

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="bg-white rounded-2xl max-w-3xl w-full my-8 p-6 sm:p-10 shadow-2xl border border-slate-200 relative overflow-hidden animate-in zoom-in-95 duration-200 print:shadow-none print:border-none print:m-0 print:p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top action bar (hidden during print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {lang === 'en' ? 'Curriculum Vitae' : 'پیشہ ورانہ دستاویز'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Print / Save PDF' : 'پرنٹ / پی ڈی ایف'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="space-y-8 text-slate-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-4">
              {savedPhoto && (
                <img
                  src={savedPhoto}
                  alt={personalDetails.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-600 shadow-sm shrink-0"
                />
              )}
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {personalDetails.name}
                </h1>
                <p className="font-urdu text-xl text-amber-800 font-semibold mt-1">
                  {personalDetails.nameUrdu}
                </p>
                <p className="text-sm font-semibold text-slate-700 mt-1">
                  {lang === 'en' ? personalDetails.title : personalDetails.titleUrdu}
                </p>
              </div>
            </div>

            <div className="text-xs space-y-1.5 sm:text-right text-slate-600">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <a href={`tel:${personalDetails.phone}`} className="hover:underline font-semibold text-slate-900">
                  {personalDetails.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${personalDetails.email}`} className="hover:underline font-medium text-slate-800">
                  {personalDetails.email}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalDetails.location}</span>
              </div>
              <div className="text-emerald-700 font-semibold">
                {personalDetails.status}
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {lang === 'en' ? 'Summary' : 'خلاصہ'}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {lang === 'en' ? personalDetails.about : personalDetails.aboutUrdu}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {lang === 'en' ? 'Professional Experience' : 'تجربہ'}
            </h2>
            <div className="space-y-6">
              {timelineData.map((t, idx) => (
                <div key={idx} className="border-l-2 border-slate-200 pl-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-900 text-sm">{t.role}</span>
                    <span className="font-medium text-slate-500">{t.period}</span>
                  </div>
                  <div className="text-xs font-medium text-amber-800 mb-2">{t.organization}</div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">{t.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                    {t.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Qualifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>{lang === 'en' ? 'Education & Academic Qualifications' : 'تعلیمی قابلیت و اسناد'}</span>
            </h2>
            <div className="space-y-4">
              {qualificationsData.map((qual) => (
                <div key={qual.id} className="border-l-2 border-amber-500 pl-4 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs gap-1">
                    <span className="font-bold text-slate-900 text-sm">
                      {lang === 'en' ? qual.degree : qual.degreeUr}
                    </span>
                    <span className="font-medium text-slate-500">
                      {lang === 'en' ? qual.location : qual.locationUr}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-amber-800 mt-0.5">
                    {lang === 'en' ? qual.institution : qual.institutionUr}
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {lang === 'en' ? qual.field : qual.fieldUr}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              {lang === 'en' ? 'Core Competencies & Tooling' : 'مہارتیں اور ٹولز'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {skillsData.map((cat, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="font-bold text-slate-900 block mb-2">{cat.title}</span>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] text-slate-700">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              {lang === 'en' ? 'Key Projects' : 'اہم پروجیکٹس'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {projectsData.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-slate-900 mb-1">{p.title}</div>
                  <p className="text-slate-600 leading-snug mb-2">{p.description}</p>
                  <div className="text-[10px] text-slate-500 font-mono">
                    {p.tags.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal footer */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end print:hidden">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            {lang === 'en' ? 'Close CV' : 'بند کریں'}
          </button>
        </div>
      </div>
    </div>
  );
}
