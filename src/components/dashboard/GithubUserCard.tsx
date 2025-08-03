
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { GithubFollower } from '@/types/github';

interface GithubUserCardProps {
  user: GithubFollower;
}

const GithubUserCard: React.FC<GithubUserCardProps> = ({ user }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-100">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={user.avatar_url} alt={user.login} />
          <AvatarFallback>{user.login.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium text-sm">{user.login}</h4>
        </div>
      </div>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => window.open(user.html_url, '_blank')}
      >
        View
      </Button>
    </div>
  );
};

export default GithubUserCard;
