import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, Trash2, Image as ImageIcon, Check, Sparkles, X, Link as LinkIcon, User } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { Language, ThemeMode } from '../types';

interface ProfilePhotoUploaderProps {
  lang: Language;
  theme?: ThemeMode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showUploadButton?: boolean;
}

const STORAGE_KEY = 'abdul_qadeer_profile_photo';

export function ProfilePhotoUploader({
  lang,
  theme = 'dark',
  size = 'lg',
  showUploadButton = true,
}: ProfilePhotoUploaderProps) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isDark = theme === 'dark';

  // Load from localStorage on mount and listen to storage events
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPhotoUrl(saved);
      }
    } catch {
      // ignore
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setPhotoUrl(e.newValue);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Utility to compress image to prevent localStorage 5MB limit
  const processAndSaveImage = (file: File) => {
    setErrorMsg('');
    if (!file.type.startsWith('image/')) {
      setErrorMsg(lang === 'en' ? 'Please select a valid image file.' : 'براہ کرم ایک درست تصویر منتخب کریں۔');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_DIM = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_DIM) {
            height = Math.round((height * MAX_DIM) / width);
            width = MAX_DIM;
          }
        } else {
          if (height > MAX_DIM) {
            width = Math.round((width * MAX_DIM) / height);
            height = MAX_DIM;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
          try {
            localStorage.setItem(STORAGE_KEY, compressedDataUrl);
            setPhotoUrl(compressedDataUrl);
            setSuccessMsg(lang === 'en' ? 'Photo updated successfully!' : 'تصویر کامیابی سے تبدیل ہو گئی!');
            setTimeout(() => {
              setSuccessMsg('');
              setIsModalOpen(false);
            }, 1200);
          } catch {
            setErrorMsg(lang === 'en' ? 'Unable to save image (file too large).' : 'تصویر محفوظ نہیں ہو سکی (سائز بڑا ہے)۔');
          }
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processAndSaveImage(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    try {
      localStorage.setItem(STORAGE_KEY, urlInput.trim());
      setPhotoUrl(urlInput.trim());
      setSuccessMsg(lang === 'en' ? 'Photo updated!' : 'تصویر تبدیل ہو گئی!');
      setTimeout(() => {
        setSuccessMsg('');
        setIsModalOpen(false);
      }, 1000);
    } catch {
      setErrorMsg(lang === 'en' ? 'Failed to save photo URL.' : 'تصویر محفوظ کرنے میں مسئلہ پیش آیا۔');
    }
  };

  const handleRemovePhoto = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setPhotoUrl(null);
      setUrlInput('');
      setSuccessMsg(lang === 'en' ? 'Photo reset to default.' : 'تصویر واپس ڈیفالٹ پر سیٹ ہو گئی۔');
      setTimeout(() => {
        setSuccessMsg('');
        setIsModalOpen(false);
      }, 1000);
    } catch {
      // ignore
    }
  };

  // Dimensions based on size
  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-20 h-20 text-lg',
    lg: 'w-32 h-32 sm:w-36 sm:h-36 text-2xl',
    xl: 'w-40 h-40 sm:w-48 sm:h-48 text-3xl',
  }[size];

  return (
    <>
      <div className="flex flex-col items-center">
        {/* Main Photo Wrapper with Hover Overlay */}
        <div className="relative group">
          {/* Subtle Outer Glow Ring */}
          <div
            className={`absolute -inset-1 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 ${
              isDark ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500' : 'bg-gradient-to-r from-amber-400 to-orange-400'
            }`}
          />

          <div
            onClick={() => setIsModalOpen(true)}
            className={`relative rounded-full overflow-hidden border-4 shadow-xl cursor-pointer transition-all duration-300 group-hover:scale-[1.03] ${sizeClasses} ${
              isDark ? 'border-slate-800 bg-slate-900' : 'border-white bg-slate-100'
            }`}
            title={lang === 'en' ? 'Click to change or upload your photo' : 'اپنی تصویر لگانے یا تبدیل کرنے کے لیے کلک کریں'}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setIsModalOpen(true);
            }}
          >
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={personalDetails.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div
                className={`w-full h-full flex flex-col items-center justify-center font-bold tracking-wider ${
                  isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900 text-amber-400' : 'bg-gradient-to-br from-amber-100 to-amber-200 text-amber-800'
                }`}
              >
                <div className="relative flex flex-col items-center">
                  <User className="w-1/2 h-1/2 opacity-80 mb-0.5" />
                  <span className="text-[11px] font-mono tracking-normal uppercase opacity-90">
                    AQZ
                  </span>
                </div>
              </div>
            )}

            {/* Hover Camera Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-[2px]">
              <Camera className="w-6 h-6 text-amber-400 mb-1" />
              <span className="text-[10px] font-semibold text-center px-1">
                {lang === 'en' ? 'Upload Photo' : 'تصویر لگائیں'}
              </span>
            </div>
          </div>

          {/* Quick Camera Action Badge */}
          <button
            onClick={() => setIsModalOpen(true)}
            id="open-photo-modal-badge"
            className={`absolute bottom-0 right-0 p-2 rounded-full border shadow-lg transition-transform hover:scale-110 cursor-pointer ${
              isDark
                ? 'bg-amber-500 text-slate-950 border-slate-900 hover:bg-amber-400'
                : 'bg-slate-900 text-amber-400 border-white hover:bg-slate-800'
            }`}
            title={lang === 'en' ? 'Set / Change Picture' : 'اپنی تصویر لگائیں'}
            aria-label="Upload photo"
          >
            <Camera className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Optional Action Label Under Photo */}
        {showUploadButton && (
          <button
            onClick={() => setIsModalOpen(true)}
            id="open-photo-modal-btn"
            className={`mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border transition-all cursor-pointer ${
              isDark
                ? 'bg-slate-900/80 border-slate-700/80 text-amber-400 hover:bg-slate-800 hover:border-amber-500/50'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-amber-700'
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>{photoUrl ? (lang === 'en' ? 'Change My Picture' : 'اپنی تصویر تبدیل کریں') : (lang === 'en' ? 'Upload My Picture' : 'اپنی تصویر لگائیں')}</span>
          </button>
        )}
      </div>

      {/* Upload Picture Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className={`relative w-full max-w-md rounded-3xl border p-6 shadow-2xl transition-colors ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="flex items-center gap-2 mb-1">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">
                {lang === 'en' ? 'Set Your Profile Picture' : 'اپنی پروفائل تصویر لگائیں'}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              {lang === 'en'
                ? 'You can easily upload a photo from your phone/computer or paste an image link. It will be stored right here in your browser.'
                : 'آپ اپنے موبائل یا کمپیوٹر سے اپنی تصویر منتخب کر سکتے ہیں یا کسی بھی تصویر کا لنک درج کر سکتے ہیں۔'}
            </p>

            {/* Current Picture Preview */}
            <div className="flex flex-col items-center justify-center mb-6 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
              <div
                className={`w-24 h-24 rounded-full overflow-hidden border-2 mb-2 ${
                  isDark ? 'border-amber-500/50 bg-slate-800' : 'border-amber-400 bg-slate-100'
                }`}
              >
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                    <User className="w-10 h-10 mb-1 opacity-60" />
                    <span className="text-[10px]">No Photo</span>
                  </div>
                )}
              </div>
              <span className="text-[11px] text-slate-400">
                {photoUrl
                  ? (lang === 'en' ? 'Current Profile Image' : 'موجودہ تصویر')
                  : (lang === 'en' ? 'Default Placeholder' : 'ڈیفالٹ اوتار')}
              </span>
            </div>

            {/* Feedback Messages */}
            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Method 1: Choose File */}
            <div className="space-y-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                id="profile-file-input"
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>
                  {lang === 'en'
                    ? 'Upload from Device (Mobile / Computer)'
                    : 'موبائل یا کمپیوٹر سے تصویر منتخب کریں'}
                </span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 uppercase tracking-wider my-2">
                <div className="flex-1 h-px bg-slate-800" />
                <span>{lang === 'en' ? 'OR' : 'یا پھر'}</span>
                <div className="flex-1 h-px bg-slate-800" />
              </div>

              {/* Method 2: Image URL input */}
              <form onSubmit={handleUrlSubmit} className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300">
                  {lang === 'en' ? 'Paste Image URL' : 'تصویر کا ویب لنک (URL) درج کریں'}
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <LinkIcon className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://example.com/my-photo.jpg"
                      className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-semibold border border-slate-700 cursor-pointer transition-colors"
                  >
                    {lang === 'en' ? 'Set' : 'سیٹ'}
                  </button>
                </div>
              </form>

              {/* Remove Photo Action if custom photo exists */}
              {photoUrl && (
                <div className="pt-2 border-t border-slate-800 flex justify-end">
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors p-2 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Remove Custom Photo' : 'تصویر ہٹائیں (ڈیفالٹ بحال کریں)'}</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
