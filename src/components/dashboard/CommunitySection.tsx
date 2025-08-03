
import React from 'react';
import { CommunityStats } from '@/types/stats';
import StatsCard from './StatsCard';
import SectionHeader from './SectionHeader';
import { Users, Youtube, Linkedin, Github, FileText, Video } from 'lucide-react';

interface CommunitySectionProps {
  data: CommunityStats;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ data }) => {
  return (
    <section className="mb-8">
      <SectionHeader
        title="Community Impact"
        description="Online presence and content sharing"
        icon={<Users size={24} />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="YouTube Subscribers"
          value={data.youtube.subscribers}
          icon={<Youtube size={24} className="text-red-500" />}
          subtitle={`${data.youtube.totalViews.toLocaleString()} total views`}
        />
        <StatsCard
          title="LinkedIn Followers"
          value={data.linkedinFollowers}
          icon={<Linkedin size={24} className="text-blue-600" />}
          color="blue"
        />
        <StatsCard
          title="GitHub Followers"
          value={data.githubFollowers}
          icon={<Github size={24} />}
          color="default"
        />
        <StatsCard
          title="Blog Posts"
          value={data.postsPublished}
          icon={<FileText size={24} />}
          color="green"
          subtitle="Published articles"
        />
        <StatsCard
          title="Videos"
          value={data.videosUploaded}
          icon={<Video size={24} />}
          color="purple"
          subtitle="Uploaded to YouTube"
        />
      </div>
    </section>
  );
};

export default CommunitySection;
