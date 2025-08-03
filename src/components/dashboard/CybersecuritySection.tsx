
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CybersecurityStats } from '@/types/stats';
import StatsCard from './StatsCard';
import SectionHeader from './SectionHeader';
import { ShieldCheck, Server, Award } from 'lucide-react';
import ChartContainer from './ChartContainer';
import BadgeCard from './BadgeCard';

interface CybersecuritySectionProps {
  data: CybersecurityStats;
}

const CybersecuritySection: React.FC<CybersecuritySectionProps> = ({ data }) => {
  // Transform weekly streak data for chart
  const weeklyStreakData = data.weeklyStreak.map((count, index) => ({
    day: `Day ${index + 1}`,
    challenges: count
  }));

  return (
    <section className="mb-16">
      <SectionHeader
        title="Cybersecurity Stats"
        description="Challenges completed and skills demonstrated"
        icon={<ShieldCheck size={24} />}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="TryHackMe Rooms"
          value={data.tryHackMeRoomsCompleted}
          color="blue"
        />
        <StatsCard
          title="HackTheBox Machines"
          value={data.hackTheBoxMachinesOwned}
          color="green"
        />
        <StatsCard
          title="CTF Participations"
          value={data.ctfParticipations}
          color="purple"
          subtitle="Capture The Flag competitions"
        />
      </div>

      {/* <ChartContainer
        title="Weekly Challenge Streak"
        description="Consecutive days with security challenges completed"
        height={250}
        className="mb-8"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyStreakData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value} challenges`]} />
            <Bar dataKey="challenges" fill="#8884d8" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer> */}

      <div>
        <h3 className="text-lg font-semibold mb-4">Earned Badges</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.badges.map((badge, index) => (
            <BadgeCard
              key={index}
              badge={{
                ...badge,
                icon: badge.platform === "TryHackMe" ? "Shield" : "Award"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CybersecuritySection;
