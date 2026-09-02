export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  linkedin?: {
    label: string;
    url: string;
  };
  github?: {
    label: string;
    url: string;
  };
  website?: {
    label: string;
    url: string;
  };
}

export interface PersonalInfo {
  name: string;
  roleTitle: string;
  avatarUrl?: string;
  contact: ContactInfo;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectDetail {
  name: string;
  teamSize?: string;
  role?: string;
  link?: {
    label: string;
    url: string;
  };
  productUrl?: {
    label: string;
    url: string;
  };
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ExperienceEntry {
  company: string;
  role?: string;
  period: string;
  description?: string;
  bullets?: string[];
  projects?: ProjectDetail[];
}

export interface EducationEntry {
  school: string;
  period: string;
  degree: string;
  major: string;
  gpa?: string;
  grade?: string;
  details?: string;
}

export interface CVLabels {
  objective: string;
  skills: string;
  experience: string;
  education: string;
  responsibilities: string;
  technologies: string;
  description: string;
  teamSize: string;
  project: string;
  product: string;
  major: string;
  gpa: string;
  grade: string;
  phone: string;
  email: string;
  address: string;
  linkedin: string;
  github: string;
}

export interface CVData {
  id?: string;
  title?: string;
  language: 'vi' | 'en';
  labels: CVLabels;
  personalInfo: PersonalInfo;
  objective: string;
  skills: SkillCategory[];
  experiences: ExperienceEntry[];
  education: EducationEntry[];
}
