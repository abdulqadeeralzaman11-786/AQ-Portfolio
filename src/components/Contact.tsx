import { useState, FormEvent } from 'react';
import { Language, ThemeMode } from '../types';
import { personalDetails } from '../data/portfolioData';
import { Mail, Send, Check, Copy, Clock, MapPin, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

interface ContactProps {
  lang: Language;
  theme?: ThemeMode;
}

export function Contact({ lang, theme = 'dark' }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitted(true);
  };

  const handleOpenMailClient = () => {
    const mailtoUrl = `mailto:${personalDetails.email}?subject=${encodeURIComponent(
      subject || `Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Hello Abdul Qadeer,\n\n${message}\n\nBest regards,\n${name} (${email})`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className={`py-20 border-t transition-colors duration-300 ${
        isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200/80'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 border ${
              isDark
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                : 'bg-amber-50 border-amber-200/80 text-amber-800'
            }`}
          >
            <Mail className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'en' ? 'Get In Touch' : 'رابطہ قائم کریں'}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {lang === 'en' ? "Let's Connect & Collaborate" : 'آئیے مل کر کام کریں'}
          </h2>
          <p
            className={`mt-3 max-w-lg text-sm leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'en'
              ? 'Have a project in mind, a technical inquiry, or an opportunity? Reach out directly.'
              : 'کسی نئے پروجیکٹ، مشاورت یا تعاون کے سلسلے میں براہ راست رابطہ کریں۔'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`rounded-2xl p-6 shadow-sm border ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700/80 text-slate-200'
                  : 'bg-slate-50 border-slate-200/90 text-slate-800'
              }`}
            >
              <h3
                className={`text-base font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {lang === 'en' ? 'Contact Details' : 'رابطے کی معلومات'}
              </h3>

              <div className="space-y-4">
                {/* Mobile / Direct Call Box */}
                <div
                  className={`p-3.5 rounded-xl border ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-700'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <span className="text-xs text-slate-400 font-medium block mb-1">
                    {lang === 'en' ? 'Direct Mobile / WhatsApp' : 'موبائل نمبر اور واٹس ایپ'}
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`tel:${personalDetails.phone}`}
                      className={`text-xs sm:text-sm font-semibold truncate flex items-center gap-1.5 ${
                        isDark ? 'text-amber-400 hover:text-amber-300' : 'text-amber-700 hover:text-amber-800'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-500" />
                      <span>{personalDetails.phoneFormatted}</span>
                    </a>
                    <div className="flex items-center gap-1 shrink-0">
                      <a
                        href={personalDetails.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30 transition-colors flex items-center gap-1"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-3 h-3 text-emerald-400" />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        onClick={handleCopyPhone}
                        className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                          isDark
                            ? 'hover:bg-slate-800 text-slate-400'
                            : 'hover:bg-slate-100 text-slate-500'
                        }`}
                        title="Copy mobile number"
                        aria-label="Copy phone"
                      >
                        {copiedPhone ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Email Box */}
                <div
                  className={`p-3.5 rounded-xl border ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-700'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <span className="text-xs text-slate-400 font-medium block mb-1">
                    {lang === 'en' ? 'Direct Email Address' : 'براہ راست ای میل'}
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${personalDetails.email}`}
                      className={`text-xs sm:text-sm font-semibold truncate ${
                        isDark ? 'text-white hover:text-amber-400' : 'text-slate-900 hover:text-amber-700'
                      }`}
                    >
                      {personalDetails.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className={`p-1.5 rounded-md transition-colors shrink-0 cursor-pointer ${
                        isDark
                          ? 'hover:bg-slate-800 text-slate-400'
                          : 'hover:bg-slate-100 text-slate-500'
                      }`}
                      title="Copy email address"
                      aria-label="Copy email"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 text-xs">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span
                      className={`font-semibold block ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {lang === 'en' ? 'Location' : 'مقام'}
                    </span>
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {lang === 'en' ? personalDetails.location : personalDetails.locationUrdu}
                    </span>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-3 p-3 text-xs">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span
                      className={`font-semibold block ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {lang === 'en' ? 'Response Guarantee' : 'جواب کا وقت'}
                    </span>
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {lang === 'en' ? 'Usually responds within 12 - 24 hours' : 'عام طور پر 12 سے 24 گھنٹوں میں جواب دیا جاتا ہے'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Greeting Card */}
            <div
              className={`p-5 rounded-2xl border ${
                isDark
                  ? 'bg-amber-500/10 border-amber-500/20 text-amber-200'
                  : 'bg-amber-50/50 border-amber-200/70 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2 mb-2 font-bold text-sm">
                <MessageSquare className="w-4 h-4 text-amber-500" />
                <span className={isDark ? 'text-amber-300' : 'text-amber-900'}>
                  {lang === 'en' ? 'Quick Message' : 'براہ راست پیغام'}
                </span>
              </div>
              <p
                className={`text-xs leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {lang === 'en'
                  ? 'Feel free to discuss project scopes, engineering contracts, architecture reviews, or general technology queries.'
                  : 'پروجیکٹس، مشاورتی سیشنز یا کسی بھی قسم کی تکنیکی رہنمائی کے لیے بلا جھجھک پیغام بھیجیں۔'}
              </p>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div
            className={`lg:col-span-7 rounded-2xl p-6 sm:p-8 shadow-sm border ${
              isDark
                ? 'bg-slate-800/80 border-slate-700/80 text-slate-200'
                : 'bg-slate-50 border-slate-200/90 text-slate-800'
            }`}
          >
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3
                  className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {lang === 'en' ? 'Message Prepared!' : 'پیغام تیار ہے!'}
                </h3>
                <p
                  className={`text-sm max-w-md mx-auto leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {lang === 'en'
                    ? `Thank you, ${name}. Your message is ready. Click below to send it straight through your preferred email program to Abdul Qadeer.`
                    : `شکریہ ${name}! آپ کا پیغام تیار ہے۔ براہ راست ای میل کے ذریعے بھیجنے کے لیے نیچے دیے گئے بٹن پر کلک کریں۔`}
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleOpenMailClient}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5 text-slate-950" />
                    <span>{lang === 'en' ? 'Open in Email Client' : 'ای میل کلائنٹ میں کھولیں'}</span>
                  </button>

                  <button
                    onClick={handleResetForm}
                    className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
                      isDark
                        ? 'border-slate-700 text-slate-300 hover:bg-slate-700'
                        : 'border-slate-200 text-slate-700 hover:bg-white'
                    }`}
                  >
                    {lang === 'en' ? 'Send Another Message' : 'ایک اور پیغام بھیجیں'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className={`block text-xs font-semibold mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {lang === 'en' ? 'Your Name' : 'آپ کا نام'} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === 'en' ? 'e.g. Tariq Khan' : 'مثال: طارق خان'}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 ${
                        isDark
                          ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className={`block text-xs font-semibold mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {lang === 'en' ? 'Your Email' : 'آپ کا ای میل'} *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 ${
                        isDark
                          ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className={`block text-xs font-semibold mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {lang === 'en' ? 'Subject' : 'موضوع'}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={lang === 'en' ? 'Project inquiry / Web development' : 'ویب پروجیکٹ / مشاورت'}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                        : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className={`block text-xs font-semibold mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {lang === 'en' ? 'Message' : 'پیغام'} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === 'en' ? 'Describe your project or questions here...' : 'اپنے پروجیکٹ یا سوالات کی تفصیل یہاں درج کریں...'}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors resize-none focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                        : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{lang === 'en' ? 'Send Message to Abdul Qadeer' : 'عبد القدیر کو پیغام بھیجیں'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

