
// import { useGitHubStats } from '@/features/Github/useGithubStats';
import { Stats } from '@/types/stats';

const stats: Stats = {
  "github": {
    "totalRepositories": 42,
    "totalCommits": 1320,
    "languages": [
      { "name": "TypeScript", "percentage": 38 },
      { "name": "JavaScript", "percentage": 27 },
      { "name": "Python", "percentage": 15 },
      { "name": "C++", "percentage": 12 },
      { "name": "Bash", "percentage": 8 }
    ],
    "topStarredProjects": [
      { "name": "Cura Agent", "stars": 102, "url": "https://github.com/mahros-alqabasy/cura-agent" },
      { "name": "SnapItAll", "stars": 75, "url": "https://github.com/mahros-alqabasy/snapitall" }
    ],
    "contributions": [
      { "month": "Jan", "count": 90 },
      { "month": "Feb", "count": 110 },
      { "month": "Mar", "count": 135 },
      { "month": "Apr", "count": 210 },
      { "month": "May", "count": 175 }
    ]
  },
  "cybersecurity": {
    "tryHackMeRoomsCompleted": 34,
    "hackTheBoxMachinesOwned": 12,
    "ctfParticipations": 18,
    "badges": [
      { "platform": "TryHackMe", "badge": "Blue Team Junior", "level": "Intermediate" },
      { "platform": "HackTheBox", "badge": "Script Kiddie", "level": "Beginner" }
    ],
    "weeklyStreak": [5, 6, 4, 7, 3]
  },
  "competitiveProgramming": {
    "totalContests": 6,
    "highestRank": "Top 5 in Local ACPC",
    "totalSolvedProblems": {
      "Codeforces": 15,
      "AtCoder": 21,
      "LeetCode": 3
    },
    "monthlyTrend": [
      { "month": "Jan", "solved": 45 },
      { "month": "Feb", "solved": 38 },
      { "month": "Mar", "solved": 52 },
      { "month": "Apr", "solved": 60 },
      { "month": "May", "solved": 55 }
    ]
  },
  "certifications": {
    "totalHours": 461,
    "certificatesCount": 22,
    "platforms": ["Udemy", "Coursera", "EDX", "FreeCodeCamp", "Almdrasa", "AMIT", "Manara.tech", "WE"],
    "topCourses": [
      { "title": "Full-Stack Web Development", "platform": "AMIT", "link": "#" },
      { "title": "Introduction to Cybersecurity", "platform": "EasyLearn", "link": "#" },
      { "title": "CCNA: Cisco Certified Network Associate", "platform": "WE", "link": "#" }
    ]
  },
  "community": {
    "youtube": {
      "subscribers": 6,
      "totalViews": 621
    },
    "linkedinFollowers": 123,
    "githubFollowers": 6,
    "postsPublished": 13,
    "videosUploaded": 25
  }
};

export default stats;
