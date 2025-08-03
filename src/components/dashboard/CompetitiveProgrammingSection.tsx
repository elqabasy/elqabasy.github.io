
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { CompetitiveProgrammingStats } from '@/types/stats';
import StatsCard from './StatsCard';
import SectionHeader from './SectionHeader';
import { Code, Trophy, Star } from 'lucide-react';
import ChartContainer from './ChartContainer';

interface CompetitiveProgrammingSectionProps {
  data: CompetitiveProgrammingStats;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const CompetitiveProgrammingSection: React.FC<CompetitiveProgrammingSectionProps> = ({ data }) => {
  // Transform totalSolvedProblems object to array for pie chart
  const platformData = Object.entries(data.totalSolvedProblems).map(([name, value]) => ({
    name,
    value
  }));

  return (
    <section className="mb-16">
      <SectionHeader
        title="Competitive Programming"
        description="Problem-solving achievements across coding platforms"
        icon={<Code size={24} />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Total Contests"
          value={data.totalContests}
          icon={<Trophy size={24} />}
          color="blue"
        />
        <StatsCard
          title="Highest Rank"
          value={data.highestRank}
          icon={<Star size={24} />}
          color="yellow"
          subtitle="Best competition placement"
        />
        <StatsCard
          title="Problems Solved"
          value={Object.values(data.totalSolvedProblems).reduce((a, b) => a + b, 0)}
          icon={<Code size={24} />}
          color="green"
          subtitle="Across all platforms"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartContainer
          title="Problems by Platform"
          description="Distribution of solved problems across platforms"
          height={300}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value} problems`} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer
          title="Monthly Progress"
          description="Problems solved per month"
          height={300}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.monthlyTrend} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} problems`]} />
              <Line type="monotone" dataKey="solved" stroke="#007BFF" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-blue-800">Platform Breakdown</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(data.totalSolvedProblems).map(([platform, count]) => (
            <div key={platform} className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="font-medium text-gray-700">{platform}</h4>
              <p className="text-2xl font-bold text-blue-600">{count}</p>
              <p className="text-sm text-gray-500">problems solved</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgrammingSection;
