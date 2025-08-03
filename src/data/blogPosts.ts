
import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'exploring-bug-bounty-recon',
    title: 'Exploring Bug Bounty Recon: Tools & Techniques',
    excerpt: 'A hands-on walkthrough of reconnaissance strategies and scripts for bug bounty beginners. Includes bash scripts, tool selection recommendations, and methodology tips.',
    date: '2024-03-15',
    readTime: 8,
    tags: ['cybersecurity', 'bugbounty', 'recon'],
    author: {
      name: 'Mahros AL-Qabasy',
      image: '/placeholder.svg'
    },
    coverImage: '/writeups-images/bugbounty-recon.png'
  },
  {
    id: '2',
    slug: 'optimizing-react-apps-web-vitals',
    title: 'Optimizing React Apps for Web Vitals',
    excerpt: 'Practical approaches to boost React performance, diagnose slow renders, and maintain accessibility. Step-by-step code examples included.',
    date: '2024-02-28',
    readTime: 12,
    tags: ['frontend', 'react', 'performance'],
    author: {
      name: 'Mahros AL-Qabasy',
      image: '/writeups-images/react-app-image.jpg'
    },
    coverImage: '/writeups-images/react-app-image.jpg'
  },
  {
    id: '3',
    slug: 'div2-codeforces-greedy-problems',
    title: 'Div2 Codeforces: 3 Hard Greedy Problems Explained',
    excerpt: 'Analysis and code for three tough greedy challenges from recent contests. Learn the tricks to quickly identify and implement optimal solutions.',
    date: '2024-01-10',
    readTime: 15,
    tags: ['contest', 'algorithms', 'codeforces'],
    author: {
      name: 'Mahros AL-Qabasy',
      image: '/placeholder.svg'
    },
    coverImage: '/writeups-images/cybersecurity.jpg'
  },
  {
    id: '4',
    slug: 'hackthebox-bank-heist',
    title: 'HackTheBox Writeup: Bank Heist Machine Walkthrough',
    excerpt: 'Step-by-step compromise of a difficult HTB box. From initial enumeration to privilege escalation, including bash command snippets and vulnerability explanations.',
    date: '2023-12-05',
    readTime: 20,
    tags: ['cybersecurity', 'htb', 'pentest'],
    author: {
      name: 'Mahros AL-Qabasy',
      image: '/placeholder.svg'
    },
    coverImage: '/writeups-images/cybersecurity.jpg'
  },
  {
    id: '5',
    slug: 'dark-mode-tailwind-patterns',
    title: 'Dark Mode in Tailwind: Implementation Patterns',
    excerpt: 'Compare three dark mode strategies for Tailwind apps: CSS toggling, class-based switching, and OS-level detection. Includes code snippets and performance notes.',
    date: '2023-10-04',
    readTime: 10,
    tags: ['frontend', 'tailwind', 'darkmode'],
    author: {
      name: 'Mahros AL-Qabasy',
      image: '/placeholder.svg'
    },
    coverImage: '/writeups-images/cybersecurity.jpg'
  },
  {
    id: '6',
    slug: 'icpc-nationals-bitmasking',
    title: 'ICPC Nationals: Bitmasking and DP Pitfalls',
    excerpt: 'A recap of how to use Bitmask Dynamic Programming in timed contest settings, and common pitfalls to avoid. With annotated code samples and optimization tips.',
    date: '2023-09-11',
    readTime: 18,
    tags: ['contest', 'dp', 'algorithms'],
    author: {
      name: 'Mahros AL-Qabasy',
      image: '/placeholder.svg'
    },
    coverImage: '/writeups-images/cybersecurity.jpg'
  },
  {
    id: '7',
    slug: 'effective-ctf-strategies',
    title: 'Effective CTF Strategies for Beginners',
    excerpt: 'A guide to approaching Capture The Flag competitions, focusing on reconnaissance, web exploitation, and basic reverse engineering concepts.',
    date: '2023-08-22',
    readTime: 14,
    tags: ['cybersecurity', 'ctf', 'beginner'],
    author: {
      name: 'Mahros AL-Qabasy',
      image: '/placeholder.svg'
    },
    coverImage: '/placeholder.svg'
  },
  {
    id: '8',
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    excerpt: 'Deep dive into how React Server Components work, their benefits for performance, and practical examples of implementing them in modern React applications.',
    date: '2023-07-15',
    readTime: 16,
    tags: ['frontend', 'react', 'performance'],
    author: {
      name: 'Mahros AL-Qabasy',
      image: '/placeholder.svg'
    },
    coverImage: '/placeholder.svg'
  }
];
