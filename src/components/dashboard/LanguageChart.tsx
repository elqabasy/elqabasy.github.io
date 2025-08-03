
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface LanguageChartProps {
  languages: { name: string; percentage: number }[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const LanguageChart: React.FC<LanguageChartProps> = ({ languages }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={languages}
          cx="50%"
          cy="50%"
          labelLine={true}
          outerRadius={100}
          fill="#8884d8"
          dataKey="percentage"
          nameKey="name"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <>
                <text 
                  x={x} 
                  y={y} 
                  fill="#fff" 
                  textAnchor={x > cx ? 'start' : 'end'} 
                  dominantBaseline="central"
                >
                  {`${(percent * 100).toFixed(0)}%`}
                </text>
                <text
                  x={x > cx ? cx + outerRadius + 10 : cx - outerRadius - 10}
                  y={y}
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                  fill="#333"
                  fontSize={12}
                >
                  {name}
                </text>
              </>
            );
          }}
        >
          {languages.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default LanguageChart;
