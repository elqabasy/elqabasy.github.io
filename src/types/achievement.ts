
export type AchievementCategory = "contests" | "cybersecurity" | "certifications" | "hackathons" | "milestones";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: AchievementCategory;
  date: string;
  formattedDate?: string;
  icon?: string;
  link?: {
    label: string;
    url: string;
    type: "solution" | "certificate" | "writeup" | "profile";
  };
  tags?: string[];
  spotlight?: boolean;
  badgeText?: string;
  image?: string;
}
