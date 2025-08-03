
import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "portfolio-site",
    title: "Personal Portfolio Site",
    description: "Modern responsive portfolio built with React, TypeScript, and Tailwind CSS.",
    categories: ["frontend"],
    technologies: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" }
    ],
    githubUrl: "https://github.com/mahros/portfolio",
    demoUrl: "https://mahros-alqabasy.com",
    featured: true,
    tags: ["Featured"]
  },
  {
    id: "clinic-management",
    title: "Clinic Management System",
    description: "Full-stack application for managing patient records, appointments, and medical history.",
    categories: ["frontend", "backend", "databases"],
    technologies: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "MySQL", icon: "mysql" }
    ],
    githubUrl: "https://github.com/mahros/clinic-management",
    caseStudyUrl: "/projects/clinic-management",
    tags: ["Healthcare", "Full-Stack"]
  },
  {
    id: "vulnerability-scanner",
    title: "Web Vulnerability Scanner",
    description: "Tool to detect common web vulnerabilities like XSS, SQL injection, and CSRF.",
    categories: ["cybersecurity", "backend"],
    technologies: [
      { name: "Python", icon: "python" },
      { name: "Flask", icon: "flask" }
    ],
    githubUrl: "https://github.com/mahros/vulnerability-scanner",
    tags: ["Security", "Blue Team"]
  },
  {
    id: "accounting-dashboard",
    title: "Accounting Dashboard",
    description: "Interactive dashboard for financial data visualization and reporting.",
    categories: ["frontend", "databases"],
    technologies: [
      { name: "React", icon: "react" },
      { name: "D3.js", icon: "d3" },
      { name: "Firebase", icon: "firebase" }
    ],
    demoUrl: "https://accounting-demo.mahros-alqabasy.com",
    tags: ["Data Visualization", "SaaS"]
  },
  {
    id: "competitive-programming",
    title: "Algorithm Visualizer",
    description: "Educational tool that visualizes algorithms used in competitive programming.",
    categories: ["frontend", "contests"],
    technologies: [
      { name: "JavaScript", icon: "javascript" },
      { name: "Canvas API", icon: "canvas" },
      { name: "HTML5", icon: "html5" }
    ],
    githubUrl: "https://github.com/mahros/algorithm-visualizer",
    demoUrl: "https://algo-visual.mahros-alqabasy.com",
    tags: ["Education", "Algorithms"]
  },
  {
    id: "network-monitor",
    title: "Network Traffic Monitor",
    description: "Tool for analyzing network packets and detecting suspicious activities.",
    categories: ["cybersecurity", "backend"],
    technologies: [
      { name: "Python", icon: "python" },
      { name: "pcap", icon: "pcap" }
    ],
    githubUrl: "https://github.com/mahros/network-monitor",
    tags: ["Security", "Monitoring"]
  },
  {
    id: "quiz-platform",
    title: "Interactive Quiz Platform",
    description: "Platform for creating and taking programming and cybersecurity quizzes.",
    categories: ["frontend", "backend"],
    technologies: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "MongoDB", icon: "mongodb" }
    ],
    demoUrl: "https://quiz.mahros-alqabasy.com",
    featured: true,
    tags: ["Featured", "Education"]
  },
  {
    id: "database-schema-designer",
    title: "Database Schema Designer",
    description: "Visual tool for designing and generating database schemas.",
    categories: ["frontend", "databases"],
    technologies: [
      { name: "Vue.js", icon: "vue" },
      { name: "SQL", icon: "sql" }
    ],
    githubUrl: "https://github.com/mahros/schema-designer",
    tags: ["Developer Tool"]
  },
  {
    id: "contest-tracker",
    title: "Programming Contest Tracker",
    description: "Application to track upcoming programming contests across different platforms.",
    categories: ["frontend", "contests"],
    technologies: [
      { name: "React", icon: "react" },
      { name: "REST API", icon: "api" }
    ],
    githubUrl: "https://github.com/mahros/contest-tracker",
    demoUrl: "https://contests.mahros-alqabasy.com",
    tags: ["Utility", "Contests"]
  },
  {
    id: "markdown-blog",
    title: "Markdown-Based Blog Engine",
    description: "Lightweight blog engine using Markdown files for content management.",
    categories: ["frontend", "backend"],
    technologies: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Markdown", icon: "markdown" }
    ],
    githubUrl: "https://github.com/mahros/markdown-blog",
    tags: ["Content", "Static Site"]
  }
];
