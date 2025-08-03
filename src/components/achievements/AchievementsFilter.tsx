
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AchievementCategory } from '@/types/achievement';
import { Trophy, Shield, Award, Code, Milestone } from 'lucide-react';

interface AchievementsFilterProps {
  activeFilter: AchievementCategory | "all";
  onFilterChange: (filter: AchievementCategory | "all") => void;
}

const AchievementsFilter = ({ activeFilter, onFilterChange }: AchievementsFilterProps) => {
  const categories = [
    { id: "all", label: "All", icon: null },
    { id: "contests", label: "Contests", icon: Trophy },
    { id: "cybersecurity", label: "Cybersecurity", icon: Shield },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "hackathons", label: "Hackathons", icon: Code },
    { id: "milestones", label: "Milestones", icon: Milestone }
  ];

  return (
    <div className="flex justify-center ">
      <Tabs defaultValue={activeFilter} onValueChange={(value) => onFilterChange(value as AchievementCategory | "all")}>
        <TabsList className="bg-white p-1 shadow-sm">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex items-center gap-2 px-4 py-2 data-[state=active]:text-portfolio-blue"
            >
              {category.icon && (
                <category.icon className="w-4 h-4" />
              )}
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default AchievementsFilter;
