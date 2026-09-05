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
  portfolio?: {
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
  pageBreakBefore?: boolean;
  /** Cờ ẩn danh mục kỹ năng khỏi CV (vẫn lưu trong data) */
  hidden?: boolean;
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
  pageBreakBefore?: boolean;
  /** Cờ ẩn dự án khỏi CV (vẫn lưu trong data) */
  hidden?: boolean;
}

export interface ExperienceEntry {
  company: string;
  role?: string;
  period: string;
  description?: string;
  bullets?: string[];
  projects?: ProjectDetail[];
  pageBreakBefore?: boolean;
  /** Cờ ẩn công ty/kinh nghiệm khỏi CV (vẫn lưu trong data) */
  hidden?: boolean;
}

export interface EducationEntry {
  school: string;
  period: string;
  degree: string;
  major: string;
  gpa?: string;
  grade?: string;
  details?: string;
  pageBreakBefore?: boolean;
  /** Cờ ẩn học vấn khỏi CV (vẫn lưu trong data) */
  hidden?: boolean;
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
  portfolio?: string;
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
