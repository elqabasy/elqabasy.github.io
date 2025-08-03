
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  title: string;
  platform: string;
  link: string;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  platform,
  link,
  className,
}) => {
  return (
    <Card className={cn("p-4 hover:shadow-md transition-all", className)}>
      <div className="mb-3">
        <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{platform}</p>
      </div>
      
      <Button 
        onClick={() => window.open(link, '_blank')} 
        variant="outline" 
        className="w-full flex items-center justify-center gap-2"
      >
        <ExternalLink size={16} />
        View Certificate
      </Button>
    </Card>
  );
};

export default CourseCard;
