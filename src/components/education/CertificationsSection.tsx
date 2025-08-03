
import { Platform } from '@/types/education';
import PlatformCard from './PlatformCard';
import { Award } from 'lucide-react';

interface CertificationsSectionProps {
  platforms: Platform[];
}

const CertificationsSection = ({ platforms }: CertificationsSectionProps) => {
  return (
    <section className="py-12 bg-gray-50" id="certifications">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center">
          <span className="bg-purple-100 p-2 rounded-lg mr-3">
            <Award className="h-6 w-6 text-purple-700" />
          </span>
          Online Learning & Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
