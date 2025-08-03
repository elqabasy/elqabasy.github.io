
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, Clock } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  // Get the badge class based on the primary tag
  const getTagClass = (tag: string) => {
    switch (tag) {
      case "cybersecurity":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "frontend":
        return "bg-green-100 text-green-800 border-green-200";
      case "contest":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in">
      <Link to={`/blog/${post.slug}`}>
        <CardHeader className="p-0 relative">
          {post.coverImage && (
            <div className="aspect-video relative overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className="absolute top-1 left-3 flex flex-wrap gap-2 z-10">
            {post.tags.slice(0, 3).map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className={cn("text-xs font-medium", getTagClass(tag))}
              >
                {tag === "cybersecurity" && "🔒 "}
                {tag === "frontend" && "💻 "}
                {tag === "contest" && "🏆 "}
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
      </Link>

      <CardContent className="p-5">
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-portfolio-blue transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 line-clamp-3 mb-3">
          {post.excerpt}
        </p>
      </CardContent>

      <CardFooter className="flex justify-between items-center p-5 pt-0 text-sm text-gray-500">
        <div className="flex items-center">
          <CalendarIcon size={14} className="mr-1" />
          <span>{post.date}</span>
        </div>

        <div className="flex items-center">
          <Clock size={14} className="mr-1" />
          <span>{post.readTime} min read</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
