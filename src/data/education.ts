
import { Certificate, Education, FeaturedCourse, Platform } from "@/types/education";

export const formalEducation: Education[] = [
  {
    id: "1",
    title: "Bachelor of Computer Science",
    institution: "Cairo University, Faculty of Computers & AI",
    location: "Cairo, Egypt",
    startDate: "2020",
    endDate: "2024",
    type: "formal",
    achievements: [
      "Specialization: Software Engineering & Cybersecurity",
      "Key Milestones: Dean's List (2022, 2023), Cybersecurity Club Lead",
      "Graduation Project: Blue Team Web Security Platform (A+)"
    ]
  },
  // {
  //   id: "2",
  //   title: "High School - STEM",
  //   institution: "STEM High School for Boys - 6th of October",
  //   location: "Cairo, Egypt",
  //   startDate: "2017",
  //   endDate: "2020",
  //   type: "formal",
  //   achievements: [
  //     "Graduated top 5%",
  //     "Mathematics and Computer Science Focus",
  //     "Science Fair Winner (2019)"
  //   ]
  // }
];

export const platforms: Platform[] = [
  {
    id: "amit",
    name: "AMIT Learning",
    icon: "GraduationCap",
    color: "#0056D2",
    itemCount: 1,
    itemType: "Tracks"
  },
  {
    id: "almdrasa",
    name: "Almdrasa",
    icon: "GraduationCap",
    color: "#0056c0",
    itemCount: 8,
    itemType: "Courses"
  },
  {
    id: "manara.tech",
    name: "Manara.tech",
    icon: "GraduationCap",
    color: "#0016c0",
    itemCount: 8,
    itemType: "Courses"
  },
  // {
  //   id: "tryhackme",
  //   name: "TryHackMe",
  //   icon: "Shield",
  //   color: "#1CB855",
  //   itemCount: 6,
  //   itemType: "Rooms"
  // },
  // {
  //   id: "udemy",
  //   name: "Udemy",
  //   icon: "BookOpen",
  //   color: "#A435F0",
  //   itemCount: 3,
  //   itemType: "Courses"
  // },
  // {
  //   id: "hackerrank",
  //   name: "HackerRank",
  //   icon: "Award",
  //   color: "#00EA64",
  //   itemCount: 2,
  //   itemType: "Certificates"
  // }
];

export const certificates: Certificate[] = [
  {
    id: "cert1",
    title: "Complete Red Team Path",
    platform: "HackTheBox",
    category: "cybersecurity",
    dateCompleted: "2023-11-20",
    certificateUrl: "/assets/certs/red-team.pdf",
    icon: "Shield"
  },
  {
    id: "cert2",
    title: "Advanced JavaScript",
    platform: "Udemy",
    category: "frontend",
    dateCompleted: "2023-08-15",
    certificateUrl: "/assets/certs/js-advanced.pdf",
    icon: "Code"
  },
  {
    id: "cert3",
    title: "Penetration Testing Fundamentals",
    platform: "TryHackMe",
    category: "cybersecurity",
    dateCompleted: "2023-05-10",
    certificateUrl: "/assets/certs/pentest.pdf",
    icon: "FileSearch"
  },
  {
    id: "cert4",
    title: "React & Redux Masterclass",
    platform: "Coursera",
    category: "frontend",
    dateCompleted: "2023-02-28",
    certificateUrl: "/assets/certs/react-redux.pdf",
    icon: "Code"
  },
  {
    id: "cert5",
    title: "Python for Data Science",
    platform: "Coursera",
    category: "cs-fundamentals",
    dateCompleted: "2022-12-05",
    certificateUrl: "/assets/certs/python-data.pdf",
    icon: "FileCode"
  },
  {
    id: "cert6",
    title: "Linux System Administration",
    platform: "TryHackMe",
    category: "backend",
    dateCompleted: "2022-09-18",
    certificateUrl: "/assets/certs/linux-admin.pdf",
    icon: "Terminal"
  }
];

export const featuredCourses: FeaturedCourse[] = [
  {
    id: "featured1",
    title: "Cybersecurity for Everyone",
    platform: "TryHackMe",
    category: "cybersecurity",
    description: "Gained hands-on experience in digital forensics, blue team operations, and security protocol analysis.",
    certificateUrl: "/assets/certs/cyber-everyone.pdf",
    icon: "Shield",
    platformIcon: "Shield"
  },
  {
    id: "featured2",
    title: "Full-Stack Web Development",
    platform: "Udemy",
    category: "frontend",
    description: "Comprehensive training in modern web technologies including React, Node.js, and database integration.",
    certificateUrl: "/assets/certs/fullstack.pdf",
    icon: "Code",
    platformIcon: "BookOpen"
  },
  {
    id: "featured3",
    title: "Machine Learning Specialization",
    platform: "Coursera",
    category: "cs-fundamentals",
    description: "Explored core ML algorithms, data preprocessing techniques, and practical applications in real-world scenarios.",
    certificateUrl: "/assets/certs/ml-specialization.pdf",
    icon: "Brain",
    platformIcon: "GraduationCap"
  }
];
