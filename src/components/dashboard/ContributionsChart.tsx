
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ContributionsChartProps {
  contributions: { month: string; count: number }[];
}

const ContributionsChart: React.FC<ContributionsChartProps> = ({ contributions }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={contributions} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => [`${value} contributions`]} />
        <Bar dataKey="count" fill="#007BFF" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ContributionsChart;
