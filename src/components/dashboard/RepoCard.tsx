
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RepoCardProps {
  name: string;
  stars: number;
  url: string;
}

const RepoCard: React.FC<RepoCardProps> = ({ name, stars, url }) => {
  return (
    <Card className="p-4 hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-800">{name}</h3>
        <div className="flex items-center text-amber-500">
          <Star size={18} className="mr-1" />
          <span className="text-gray-700">{stars}</span>
        </div>
      </div>

      <Button
        onClick={() => window.open(url, '_blank')}
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
      >
        <Github size={16} />
        View on GitHub
      </Button>
    </Card>
  );
};

export default RepoCard;
