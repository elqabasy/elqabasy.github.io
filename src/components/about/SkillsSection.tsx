
import { useState } from 'react';
import { Code } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { skills, categories } from '@/data/skills';

import type SkillCategory from '@/types/skills';
import { useIsMobile } from '@/hooks/use-mobile';

const SkillsSection = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const skillsData = {
    all: Object.values(skills).flat(),
    frontend: skills.frontend,
    backend: skills.backend,
    devtools: skills.devtools,
    security: skills.security,
    languages: skills.languages,
  };

  const getSkillsToDisplay = () => {
    if (activeCategory === 'all') {
      return Object.values(skills).flat();
    }
    return skills[activeCategory];
  };

  return (
    <section id="skills" className="py-16 bg-portfolio-light-bg scroll-mt-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center">
          <span className="bg-blue-100 p-2 rounded-lg mr-3">
            <Code className="h-6 w-6 text-portfolio-blue" />
          </span>
          Technical Expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as SkillCategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                ? 'bg-portfolio-blue text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {getSkillsToDisplay().map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              title={`${skill.name} - ${skill.years} ${skill.years === 1 ? 'year' : 'years'} experience (${isMobile})`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <Badge
                  variant="outline"
                  className={`text-xs ${skill.level === 'Advanced'
                    ? 'bg-green-100 text-green-800 border-green-400'
                    : skill.level === 'Intermediate'
                      ? 'bg-blue-100 text-blue-800 border-blue-400'
                      : 'bg-amber-100 text-amber-800 border-amber-400'
                    }`}
                >
                  {isMobile ? skill.level.substring(0, 3) : skill.level}
                  {/* {isMobile ? skill.level.substring(0, 5) : skill.level} */}
                </Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full ${skill.level === 'Advanced'
                    ? 'bg-green-500 w-[90%]'
                    : skill.level === 'Intermediate'
                      ? 'bg-blue-500 w-[60%]'
                      : 'bg-amber-500 w-[30%]'
                    }`}
                ></div>
              </div>
              <div
                className={`mt-2 text-xs ${skill.years >= 7
                  ? 'text-green-600'
                  : skill.years >= 4
                    ? 'text-blue-600'
                    : 'text-amber-600'
                  }`}
              >
                {skill.years} {skill.years === 1 ? 'year' : 'years'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
