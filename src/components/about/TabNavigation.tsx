
import { useState } from 'react';
import { BookOpen, Code, Trophy, Eye } from 'lucide-react';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('education');
  
  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <button 
        onClick={() => scrollToSection('education')}
        className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${
          activeTab === 'education' 
            ? 'bg-blue-100 text-portfolio-blue' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <BookOpen size={18} />
        <span className="font-medium">Education</span>
      </button>
      
      <button 
        onClick={() => scrollToSection('skills')}
        className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${
          activeTab === 'skills' 
            ? 'bg-blue-100 text-portfolio-blue' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <Code size={18} />
        <span className="font-medium">Skills</span>
      </button>
      
      <button 
        onClick={() => scrollToSection('achievements')}
        className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${
          activeTab === 'achievements' 
            ? 'bg-blue-100 text-portfolio-blue' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <Trophy size={18} />
        <span className="font-medium">Contests & Awards</span>
      </button>
      
      <button 
        onClick={() => scrollToSection('goals')}
        className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${
          activeTab === 'goals' 
            ? 'bg-blue-100 text-portfolio-blue' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <Eye size={18} />
        <span className="font-medium">Vision</span>
      </button>
    </div>
  );
};

export default TabNavigation;
