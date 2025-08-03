
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Achievement } from '@/types/achievement';
import { FileText, ExternalLink, Award, Trophy, Shield, Code, Milestone } from 'lucide-react';

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard = ({ achievement }: AchievementCardProps) => {
  const getCategoryIcon = () => {
    switch (achievement.category) {
      case 'contests':
        return <Trophy className="w-5 h-5 text-blue-500" />;
      case 'cybersecurity':
        return <Shield className="w-5 h-5 text-green-500" />;
      case 'certifications':
        return <Award className="w-5 h-5 text-purple-500" />;
      case 'hackathons':
        return <Code className="w-5 h-5 text-orange-500" />;
      case 'milestones':
        return <Milestone className="w-5 h-5 text-cyan-500" />;
      default:
        return <Trophy className="w-5 h-5" />;
    }
  };

  const getLinkIcon = () => {
    switch (achievement.link?.type) {
      case 'solution':
        return <FileText className="w-4 h-4" />;
      case 'certificate':
        return <Award className="w-4 h-4" />;
      case 'writeup':
        return <FileText className="w-4 h-4" />;
      case 'profile':
        return <ExternalLink className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md animate-fade-in flex flex-col justify-between">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          {getCategoryIcon()}
          <span className="capitalize">{achievement.category}</span>
          <span className="ml-auto text-gray-400">{achievement.formattedDate}</span>
        </div>
        <h3 className="text-xl font-bold">{achievement.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{achievement.description}</p>

        {achievement.tags && achievement.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {achievement.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-gray-100">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      {achievement.link && (
        <CardFooter className="pt-0">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="text-portfolio-blue border-portfolio-blue hover:bg-blue-50"
          >
            <a href={achievement.link.url} target="_blank" rel="noopener noreferrer">
              {getLinkIcon()}
              <span className="ml-2">{achievement.link.label}</span>
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default AchievementCard;
