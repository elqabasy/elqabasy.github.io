
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { Award } from 'lucide-react';

export interface BadgeItem {
  platform: string;
  badge: string;
  level: string;
  icon?: string;
}

interface BadgeCardProps {
  badge: BadgeItem;
  className?: string;
}

const getBadgeLevelColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'bg-green-100 text-green-800';
    case 'intermediate':
      return 'bg-blue-100 text-blue-800';
    case 'advanced':
      return 'bg-purple-100 text-purple-800';
    case 'expert':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const BadgeCard: React.FC<BadgeCardProps> = ({ badge, className }) => {
  return (
    <Card className={cn("p-4 flex flex-col items-center text-center transition-transform hover:scale-105", className)}>
      <div className="mb-2 text-portfolio-blue">
        {badge.icon ? 
          <DynamicIcon name={badge.icon as any} size={24} className="text-portfolio-blue" /> : 
          <Award size={24} />
        }
      </div>
      <h3 className="font-medium text-gray-800 mb-1">{badge.badge}</h3>
      <p className="text-sm text-gray-500">{badge.platform}</p>
      <Badge className={cn("mt-2", getBadgeLevelColor(badge.level))}>
        {badge.level}
      </Badge>
    </Card>
  );
};

export default BadgeCard;
