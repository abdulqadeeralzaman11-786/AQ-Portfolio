export type Language = 'en' | 'ur';
export type ThemeMode = 'dark' | 'light';

export interface HeroSlide {
  id: string;
  badge: string;
  badgeUr: string;
  title: string;
  titleUr: string;
  subtitle: string;
  subtitleUr: string;
  tagline: string;
  taglineUr: string;
  themeColor: 'amber' | 'blue' | 'emerald' | 'purple';
  actionPrimary: {
    label: string;
    labelUr: string;
    href?: string;
    action?: 'contact' | 'resume' | 'projects' | 'skills' | 'copyEmail' | 'about';
  };
  actionSecondary?: {
    label: string;
    labelUr: string;
    href?: string;
    action?: 'contact' | 'resume' | 'projects' | 'skills' | 'copyEmail' | 'about';
  };
  stats?: {
    value: string;
    label: string;
    labelUr: string;
  }[];
  highlights?: {
    title: string;
    titleUr: string;
    desc: string;
    descUr: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  titleUr: string;
  category: string;
  categoryUr: string;
  description: string;
  descriptionUr: string;
  tags: string[];
  metrics?: string;
  featured?: boolean;
  link?: string;
}

export interface SkillCategory {
  title: string;
  titleUr: string;
  iconName: string;
  skills: {
    name: string;
    level: number;
    description: string;
  }[];
}

export interface TimelineItem {
  period: string;
  role: string;
  roleUr: string;
  organization: string;
  description: string;
  descriptionUr: string;
  highlights: string[];
}

export interface Qualification {
  id: string;
  degree: string;
  degreeUr: string;
  institution: string;
  institutionUr: string;
  location: string;
  locationUr: string;
  field: string;
  fieldUr: string;
}

