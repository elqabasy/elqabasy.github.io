
export interface GithubStats {
  totalRepositories: number;
  totalCommits: number;
  languages: { name: string; percentage: number }[];
  topStarredProjects: { name: string; stars: number; url: string }[];
  contributions: { month: string; count: number }[];
}

export interface CybersecurityStats {
  tryHackMeRoomsCompleted: number;
  hackTheBoxMachinesOwned: number;
  ctfParticipations: number;
  badges: { platform: string; badge: string; level: string }[];
  weeklyStreak: number[];
}

export interface CompetitiveProgrammingStats {
  totalContests: number;
  highestRank: string;
  totalSolvedProblems: {
    [key: string]: number;
  };
  monthlyTrend: { month: string; solved: number }[];
}

export interface CertificationsStats {
  totalHours: number;
  certificatesCount: number;
  platforms: string[];
  topCourses: { title: string; platform: string; link: string }[];
}

export interface CommunityStats {
  youtube: {
    subscribers: number;
    totalViews: number;
  };
  linkedinFollowers: number;
  githubFollowers: number;
  postsPublished: number;
  videosUploaded: number;
}

export interface Stats {
  github: GithubStats;
  cybersecurity: CybersecurityStats;
  competitiveProgramming: CompetitiveProgrammingStats;
  certifications: CertificationsStats;
  community: CommunityStats;
}
