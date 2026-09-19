import { Project, SkillCategory, TimelineItem, HeroSlide, Qualification } from '../types';

export const personalDetails = {
  name: "Abdul Qadeer Al Zaman",
  nameUrdu: "عبد القدیر الزماں",
  title: "Software Engineer & Digital Solutions Specialist",
  titleUrdu: "سافٹ ویئر انجینئر اور ڈیجیٹل سلوشنز ایکسپرٹ",
  tagline: "Crafting robust web applications, scalable digital products, and clean user-centric solutions.",
  taglineUrdu: "جدید ویب ایپلی کیشنز، پائیدار ڈیجیٹل مصنوعات اور بہترین صارف تجربہ کی تعمیر۔",
  email: "abdulqadeeralzaman11@gmail.com",
  phone: "+923425075721",
  phoneFormatted: "+92 342 5075721",
  whatsappUrl: "https://wa.me/923425075721",
  location: "Dadyal, Mirpur, Azad Kashmir",
  locationUrdu: "ڈڈیال، میرپور، آزاد کشمیر",
  status: "Available for new projects & consulting",
  statusUrdu: "نئے پروجیکٹس اور مشاورت کے لیے دستیاب",
  yearsExperience: "4+",
  completedProjects: "25+",
  clientSatisfaction: "99%",
  about: `I am a passionate software engineer and digital builder dedicated to creating responsive, high-performance web systems and intuitive user experiences. With a strong multidisciplinary academic foundation in Computer Science, Pakistan Studies, and Education, I bring both technical precision and thoughtful analytical depth to every project.`,
  aboutUrdu: `میں ایک پرعزم سافٹ ویئر انجینئر اور ڈیجیٹل ڈیولپر ہوں جو تیز رفتار، محفوظ اور جدید ویب سسٹمز تیار کرنے میں مہارت رکھتا ہوں۔ کمپیوٹر سائنس، مطالعہ پاکستان اور تعلیم کے کثیر الجہتی تعلیمی پس منظر کے ساتھ، میں ہر پروجیکٹ میں تکنیکی مہارت اور تجزیاتی گہرائی پیش کرتا ہوں۔`
};

export const qualificationsData: Qualification[] = [
  {
    id: "qual-1",
    degree: "BS (Computer Science)",
    degreeUr: "بی ایس (کمپیوٹر سائنس)",
    institution: "University of Azad Jammu & Kashmir",
    institutionUr: "جامعہ آزاد جموں و کشمیر",
    location: "Azad Kashmir",
    locationUr: "آزاد کشمیر",
    field: "Computer Science, Software Engineering & Systems",
    fieldUr: "کمپیوٹر سائنس، سافٹ ویئر انجینئرنگ اور سسٹمز"
  },
  {
    id: "qual-2",
    degree: "M.Sc. Pakistan Studies",
    degreeUr: "ایم ایس سی پاکستان اسٹڈیز",
    institution: "MUST University Mirpur",
    institutionUr: "میرپور یونیورسٹی آف سائنس اینڈ ٹیکنالوجی (MUST)",
    location: "Mirpur, Azad Kashmir",
    locationUr: "میرپور، آزاد کشمیر",
    field: "Pakistan Studies, Social Dynamics & History",
    fieldUr: "مطالعہ پاکستان اور ملکی تاریخ"
  },
  {
    id: "qual-3",
    degree: "Master in Education (M.Ed)",
    degreeUr: "ماسٹر ان ایجوکیشن (ایم ایڈ)",
    institution: "Allama Iqbal Open University (AIOU) Islamabad",
    institutionUr: "علامہ اقبال اوپن یونیورسٹی، اسلام آباد",
    location: "Islamabad",
    locationUr: "اسلام آباد",
    field: "Educational Methods, Leadership & Pedagogy",
    fieldUr: "تعلیمی تدریس، جدید تدریسی طریقے اور ریسرچ"
  }
];

export const heroSlidesData: HeroSlide[] = [
  {
    id: "slide-1",
    badge: "Official Portfolio & Engineering Practice",
    badgeUr: "آفیشل پورٹ فولیو اور انجینئرنگ پریکٹس",
    title: "Abdul Qadeer Al Zaman",
    titleUr: "عبد القدیر الزماں",
    subtitle: "Software Engineer & Digital Solutions Specialist",
    subtitleUr: "سافٹ ویئر انجینئر اور ڈیجیٹل سلوشنز ایکسپرٹ",
    tagline: "Building resilient web applications, robust backend architectures, and delightful interactive experiences.",
    taglineUr: "جدید ویب ایپلی کیشنز، پائیدار بیک اینڈ آرکیٹیکچر اور بہترین یوزر انٹرفیس کی تعمیر۔",
    themeColor: "amber",
    actionPrimary: {
      label: "Start a Conversation",
      labelUr: "مجھ سے رابطہ کریں",
      action: "contact"
    },
    actionSecondary: {
      label: "View Full CV",
      labelUr: "مکمل سی وی دیکھیں",
      action: "resume"
    },
    stats: [
      { value: "4+", label: "Years Experience", labelUr: "سال کا تجربہ" },
      { value: "25+", label: "Delivered Solutions", labelUr: "مکمل پراجیکٹس" },
      { value: "99%", label: "Client Satisfaction", labelUr: "صارفین کا اطمینان" }
    ]
  },
  {
    id: "slide-2",
    badge: "Selected Project Showcase",
    badgeUr: "منتخب کام اور پراجیکٹس",
    title: "Enterprise & Modern Web Apps",
    titleUr: "انٹرپرائز اور جدید ویب ایپس",
    subtitle: "High-Performance Portals, Workflow Engines & E-Commerce",
    subtitleUr: "تیز رفتار پورٹلز، ورک فلو سسٹمز اور ای کامرس",
    tagline: "Proven track record of turning business workflows into automated, beautifully engineered cloud systems.",
    taglineUr: "کاروباری ضروریات کو جدید، خودکار اور محفوظ کلاؤڈ سسٹمز میں بدلنے کی شاندار صلاحیت۔",
    themeColor: "blue",
    actionPrimary: {
      label: "Explore All Projects",
      labelUr: "تمام پراجیکٹس دیکھیں",
      action: "projects"
    },
    actionSecondary: {
      label: "Contact Abdul Qadeer",
      labelUr: "عبد القدیر سے رابطہ",
      action: "contact"
    },
    highlights: [
      {
        title: "Workflow Automation",
        titleUr: "ورک فلو خودکاریت",
        desc: "40% faster task cycle across teams",
        descUr: "ٹیموں میں 40% تیز رفتار کام کی تکمیل"
      },
      {
        title: "OmniChannel Stores",
        titleUr: "ای کامرس سسٹمز",
        desc: "99.9% uptime & multi-currency payments",
        descUr: "99.9% اپ ٹائم اور محفوظ ادائیگیاں"
      },
      {
        title: "Telemetry Dashboards",
        titleUr: "اینالیٹکس ڈیش بورڈز",
        desc: "Interactive reporting for 100k+ records",
        descUr: "ایک لاکھ سے زائد ریکارڈز کی رپورٹنگ"
      }
    ]
  },
  {
    id: "slide-3",
    badge: "Technical Stack & Craftsmanship",
    badgeUr: "تکنیکی مہارت اور جدید ٹولز",
    title: "Modern, Type-Safe & Scalable",
    titleUr: "محفوظ، پائیدار اور جدید ٹیکنالوجی",
    subtitle: "React, TypeScript, Node.js, Express & Cloud Architecture",
    subtitleUr: "ری ایکٹ، ٹائپ اسکرپٹ، نوڈ اور جدید کلاؤڈ انفراسٹرکچر",
    tagline: "Adhering to strict web standards, zero-bloat modular architecture, and sub-second load times.",
    taglineUr: "صاف اور معیاری کوڈ، بہترین سیکیورٹی اور انتہائی تیز رفتار ویب رسپانس۔",
    themeColor: "emerald",
    actionPrimary: {
      label: "Examine Technical Stack",
      labelUr: "تکنیکی مہارتیں دیکھیں",
      action: "skills"
    },
    actionSecondary: {
      label: "View Curriculum Vitae",
      labelUr: "سی وی دیکھیں",
      action: "resume"
    },
    highlights: [
      {
        title: "Frontend Mastery",
        titleUr: "فرنٹ اینڈ آرکیٹیکچر",
        desc: "React 19, TypeScript, Tailwind CSS",
        descUr: "ری ایکٹ، ٹائپ اسکرپٹ، ٹیل ونڈ"
      },
      {
        title: "Backend & APIs",
        titleUr: "بیک اینڈ اور سسٹمز",
        desc: "Node.js, Express, REST & Databases",
        descUr: "نوڈ، ایکسپریس، اور ڈیٹا بیسز"
      },
      {
        title: "Best Practices",
        titleUr: "بہترین کوڈنگ اصول",
        desc: "Clean code, responsive & accessibility",
        descUr: "صاف کوڈ، مکمل رسپانس اور آسانی"
      }
    ]
  },
  {
    id: "slide-4",
    badge: "Global Remote & Contract Availability",
    badgeUr: "نئے پروجیکٹس کے لیے دستیابی",
    title: "Ready For Your Next Venture",
    titleUr: "اپنے اگلے ڈیجیٹل آئیڈیا کا آغاز کریں",
    subtitle: "Direct Consultation, Rapid Prototyping & Production Engineering",
    subtitleUr: "براہ راست مشاورت، تیز رفتار پروٹو ٹائپ اور مکمل ڈیولپمنٹ",
    tagline: "Let's discuss how we can build your software vision with clarity, speed, and uncompromising quality.",
    taglineUr: "آئیے مل کر آپ کے آئیڈیا کو ایک کامیاب اور معیاری سافٹ ویئر میں تبدیل کریں۔",
    themeColor: "purple",
    actionPrimary: {
      label: "Send a Message",
      labelUr: "پیغام بھیجیں",
      action: "contact"
    },
    actionSecondary: {
      label: "Copy Direct Email",
      labelUr: "ای میل کاپی کریں",
      action: "copyEmail"
    },
    stats: [
      { value: "24h", label: "Response Time", labelUr: "جواب کا وقت" },
      { value: "100%", label: "Remote Ready", labelUr: "ریموٹ کام کے لیے تیار" },
      { value: "Flexible", label: "Contract Terms", labelUr: "آسان شرائط" }
    ]
  }
];


export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    titleUr: "فرنٹ اینڈ ڈیولپمنٹ",
    iconName: "Layout",
    skills: [
      { name: "React / Next.js", level: 92, description: "Component-driven architecture, SSR & modern hooks" },
      { name: "TypeScript / JavaScript", level: 90, description: "Type-safe modular development & ES6+ idioms" },
      { name: "Tailwind CSS & Styling", level: 95, description: "Design systems, fluid responsiveness, animations" },
      { name: "State Management & Performance", level: 88, description: "Context API, Zustand, bundle optimization" }
    ]
  },
  {
    title: "Backend & Systems",
    titleUr: "بیک اینڈ اور سسٹمز",
    iconName: "Server",
    skills: [
      { name: "Node.js & Express", level: 86, description: "RESTful APIs, routing, middleware and security" },
      { name: "Databases (SQL & NoSQL)", level: 84, description: "PostgreSQL, MongoDB, schema design, queries" },
      { name: "Authentication & Security", level: 88, description: "JWT, OAuth 2.0, secure sessions, role management" },
      { name: "Cloud & Deployment", level: 82, description: "Docker, CI/CD pipelines, Cloud Run, Vercel" }
    ]
  },
  {
    title: "Methodology & Tools",
    titleUr: "طریقہ کار اور ٹولز",
    iconName: "Wrench",
    skills: [
      { name: "Git & Version Control", level: 92, description: "Branching strategies, code reviews, collaboration" },
      { name: "API Integration & Testing", level: 88, description: "Third-party APIs, Postman, automated tests" },
      { name: "UI/UX & Prototyping", level: 85, description: "Wireframing, accessibility (WCAG), user journeys" },
      { name: "Agile & Problem Solving", level: 90, description: "Iterative sprints, clean code, rapid debugging" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Enterprise Workflow Portal",
    titleUr: "انٹرپرائز ورک فلو پورٹل",
    category: "Full Stack Web App",
    categoryUr: "مکمل اسٹیک ویب ایپلی کیشن",
    description: "A centralized cloud portal for team productivity, automated document tracking, and real-time operational analytics.",
    descriptionUr: "ٹیم کی پیداواری صلاحیت، خودکار دستاویزات کی نگرانی اور لائیو تجزیات کے لیے کلاؤڈ پورٹل۔",
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    metrics: "40% faster task cycle",
    featured: true
  },
  {
    id: "proj-2",
    title: "OmniChannel E-Commerce Suite",
    titleUr: "ای کامرس ڈیجیٹل پلیٹ فارم",
    category: "E-Commerce & Payments",
    categoryUr: "ای کامرس اور ادائیگی نظام",
    description: "High-conversion modern storefront featuring multi-currency checkout, dynamic inventory synchronization, and instant search.",
    descriptionUr: "جدید آن لائن شاپنگ اسٹور جس میں فوری سرچ، انوینٹری سنکرونائزیشن اور محفوظ ادائیگی کے ذرائع شامل ہیں۔",
    tags: ["React", "Stripe API", "Tailwind CSS", "Zustand", "Express"],
    metrics: "99.9% uptime reliability",
    featured: true
  },
  {
    id: "proj-3",
    title: "Financial Intelligence Dashboard",
    titleUr: "فنانشل انٹیلیجنس ڈیش بورڈ",
    category: "Data & Analytics",
    categoryUr: "ڈیٹا اور تجزیات",
    description: "Interactive analytics suite with customized telemetry charts, budget forecasting, and exportable financial audit reports.",
    descriptionUr: "انٹرایکٹو چارٹس، بجٹ کی پیش گوئی اور برآمد کے قابل مالیاتی رپورٹوں پر مشتمل اینالیٹکس سسٹم۔",
    tags: ["TypeScript", "Recharts", "Tailwind CSS", "REST APIs"],
    metrics: "Processed 100k+ transactions",
    featured: true
  },
  {
    id: "proj-4",
    title: "Smart Task & Service Manager",
    titleUr: "اسمارٹ ٹاسک اور سروس منیجر",
    category: "Productivity Tool",
    categoryUr: "پیداواری ٹول",
    description: "Lightweight collaboration tool with offline-ready caching, Kanban workflows, and automated email notifications.",
    descriptionUr: "ٹیموں کے لیے ٹاسک مینجمنٹ سسٹم مع آف لائن صلاحیت اور نوٹیفکیشن سپورٹ۔",
    tags: ["React", "Web Storage API", "Tailwind CSS", "Lucide Icons"],
    metrics: "Used by 1,200+ users",
    featured: false
  }
];

export const timelineData: TimelineItem[] = [
  {
    period: "2023 - Present",
    role: "Senior Software Engineer & Consultant",
    roleUr: "سینئر سافٹ ویئر انجینئر اور کنسلٹنٹ",
    organization: "Independent Technology Practice",
    description: "Architecting end-to-end web applications, mentoring development teams, and consulting on modern cloud software.",
    descriptionUr: "جدید ویب ایپلی کیشنز کا آرکیٹیکچر، ڈیولپمنٹ ٹیموں کی رہنمائی اور کلاؤڈ سسٹمز پر تکنیکی مشاورت۔",
    highlights: [
      "Delivered 15+ production-grade web solutions for international clients",
      "Modernized legacy codebases with TypeScript and modular architectures",
      "Achieved sub-second initial page load times across client web portals"
    ]
  },
  {
    period: "2021 - 2023",
    role: "Full Stack Web Developer",
    roleUr: "فل اسٹیک ویب ڈیولپر",
    organization: "Digital Solutions Group",
    description: "Developed and maintained full-stack web platforms, integrated payment gateways, and engineered responsive user interfaces.",
    descriptionUr: "فل اسٹیک ویب پلیٹ فارمز کی ترقی، ادائیگیوں کے نظام کا انضمام، اور یوزر انٹرفیس کی تیاری۔",
    highlights: [
      "Engineered reusable UI component library reducing sprint delivery time by 30%",
      "Integrated secure third-party APIs and REST services with automated unit test suites",
      "Collaborated closely with designers and product managers to refine user flows"
    ]
  },
  {
    period: "2019 - 2021",
    role: "Junior Web Developer",
    roleUr: "جونیئر ویب ڈیولپر",
    organization: "Innovatech Labs",
    description: "Implemented front-end interfaces, bug fixes, performance audits, and database query optimizations.",
    descriptionUr: "فرنٹ اینڈ انٹرفیسز کی کوڈنگ، کارکردگی کے ٹیسٹ اور ڈیٹا بیس اصلاحات۔",
    highlights: [
      "Built clean, standards-compliant, mobile-first responsive web pages",
      "Implemented accessibility guidelines (WCAG) across public portals"
    ]
  }
];
