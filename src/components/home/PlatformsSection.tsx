
import { Github, Flag, Youtube, Code } from 'lucide-react';

interface PlatformProps {
  icon: React.ReactNode;
  name: string;
  stats: string;
  link: string;
}

const PlatformCard = ({ icon, name, stats, link }: PlatformProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" >
      <div className="card p-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 mx-auto">
          {icon}
        </div>
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{stats}</p>
      </div>
    </a>
  );
};

const PlatformsSection = () => {
  return (
    <section className="py-16 bg-portfolio-light-bg">
      <div className="container">
        <h2 className="section-title text-center">Platforms & Achievements</h2>
        <p className="section-subtitle text-center mx-auto">
          Connect with me on these platforms and explore my achievements
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <PlatformCard
            icon={<Github size={32} className="text-gray-800" />}
            name="GitHub"
            stats="80+ repositories"
            link="https://github.com/elqabasy"

          />
          <PlatformCard
            icon={<Flag size={32} className="text-red-500" />}
            name="TryHackMe"
            stats="25+ Completed Rooms"
            link="https://tryhackme.com/mahros"
          />
          <PlatformCard
            icon={<Youtube size={32} className="text-red-600" />}
            name="YouTube"
            stats="Tech tutorials"
            link="https://www.youtube.com/@MahorsAL-Qabasy"
          />
          <PlatformCard
            icon={<Code size={32} className="text-yellow-500" />}
            name="LeetCode"
            stats="50+ problems solved"
            link="https://www.leetcode.com/mahros"
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
