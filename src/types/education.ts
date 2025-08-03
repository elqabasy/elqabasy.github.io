
export type EducationCategory = "formal" | "certificate" | "course" | "bootcamp";
export type CourseCategory = "cybersecurity" | "software-engineering" | "frontend" | "backend" | "cs-fundamentals";

export interface Education {
  id: string;
  title: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
  type: EducationCategory;
  logo?: string;
}

export interface Certificate {
  id: string;
  title: string;
  platform: string;
  category: CourseCategory;
  dateCompleted: string;
  certificateUrl?: string;
  icon?: string;
  badgeText?: string;
}

export interface Platform {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  itemCount: number;
  itemType: string;
}

export interface FeaturedCourse {
  id: string;
  title: string;
  platform: string;
  category: CourseCategory;
  description: string;
  certificateUrl?: string;
  icon?: string;
  platformIcon?: string;
}
