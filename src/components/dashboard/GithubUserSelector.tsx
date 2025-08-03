
import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useGithub, GithubUsername } from '@/contexts/GithubContext';
import { Github } from 'lucide-react';

const GithubUserSelector = () => {
  const { currentUsername, setCurrentUsername } = useGithub();
  
  const handleUsernameChange = (value: string) => {
    setCurrentUsername(value as GithubUsername);
  };

  return (
    <div className="flex items-center space-x-2">
      <Github size={16} className="text-gray-600" />
      <span className="text-sm font-medium">GitHub Profile:</span>
      <Select
        value={currentUsername}
        onValueChange={handleUsernameChange}
      >
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Select username" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="elqabasy">elqabasy</SelectItem>
          <SelectItem value="mahros-alqabasy">mahros-alqabasy</SelectItem>
          <SelectItem value="alqabasy">alqabasy</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default GithubUserSelector;
