
export type ProjectCategory = "all" | "frontend" | "backend" | "cybersecurity" | "databases" | "contests" | "others";

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  technologies: Technology[];
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
  tags?: string[];
}
