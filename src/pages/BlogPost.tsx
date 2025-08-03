
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // If post not found, redirect to blog index
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        {/* Post Header */}
        <div className="bg-white border-b">
          <div className="container py-8">
            <div className="mb-6">
              <Button variant="outline" size="sm" asChild>
                <Link to="/blog" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to all articles
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 gap-4 sm:gap-8">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author.name}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        {post.coverImage && (
          <div className="container my-8">
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        {/* Post Content */}
        <div className="container my-8">
          <div className="max-w-3xl mx-auto prose lg:prose-lg">
            {/* This is where the full content would go */}
            <p className="lead text-xl">{post.excerpt}</p>
            
            <p>
              This is a placeholder for the full blog post content. In a real implementation, 
              this would be markdown or HTML content rendered from the database or CMS.
            </p>
            
            <p>
              For now, this is just a mockup showing how the blog post page would be structured.
              The actual content would be much more detailed and formatted properly.
            </p>
            
            <h2>Example Heading</h2>
            <p>
              Additional paragraphs would go here with proper formatting, images, code blocks,
              and other content types as needed.
            </p>
            
            <pre>
              <code>
                {`// Example code block
function exampleCode() {
  return "This would be nicely formatted in a real blog";
}`}
              </code>
            </pre>
          </div>
        </div>
        
        {/* Related Posts - could be added in the future */}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
