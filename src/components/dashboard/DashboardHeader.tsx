
import React from 'react';
import { BarChart3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface DashboardHeaderProps {
  title?: string;
  description?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  title = "Statistics Dashboard", 
  description = "Visual insights into my technical journey and growth." 
}) => {
  return (
    <div className="mb-10">
      <div className="flex items-center space-x-3 mb-2">
        <BarChart3 size={28} className="text-portfolio-blue" />
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      </div>
      
      <p className="text-gray-600 text-lg mb-4 max-w-3xl">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
          GitHub
        </Badge>
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
          TryHackMe
        </Badge>
        <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
          Codeforces
        </Badge>
        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
          HackTheBox
        </Badge>
      </div>
    </div>
  );
};

export default DashboardHeader;
