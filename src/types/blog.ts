
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  date: string;
  formattedDate?: string;
  readTime: number;
  tags: string[];
  author: {
    name: string;
    image?: string;
  };
}
