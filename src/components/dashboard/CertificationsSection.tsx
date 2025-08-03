
import React from 'react';
import { CertificationsStats } from '@/types/stats';
import StatsCard from './StatsCard';
import SectionHeader from './SectionHeader';
import { GraduationCap, Clock, CaptionsIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import CourseCard from './CourseCard';

interface CertificationsSectionProps {
  data: CertificationsStats;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ data }) => {
  return (
    <section className="mb-16">
      <SectionHeader
        title="Certifications & Learning"
        description="Educational achievements and professional development"
        icon={<GraduationCap size={24} />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Total Certificates"
          value={data.certificatesCount}
          icon={<CaptionsIcon size={24} />}
          color="blue"
        />
        <StatsCard
          title="Learning Hours"
          value={data.totalHours}
          icon={<Clock size={24} />}
          color="green"
          subtitle="Dedicated to skill development"
        />
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Learning Platforms</h3>
        <div className="flex flex-wrap gap-3">
          {data.platforms.map((platform) => (
            <Badge key={platform} variant="outline" className="px-4 py-2 bg-gray-50 text-sm">
              {platform}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Featured Certificates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.topCourses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              platform={course.platform}
              link={course.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
