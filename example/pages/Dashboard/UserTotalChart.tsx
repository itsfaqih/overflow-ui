import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { Card } from '../../../.';

interface UserTotalChartProps {
  data?: {
    color: string;
    name: string;
    value: number;
  }[];
}

export function UserTotalChart({ data }: UserTotalChartProps) {
  return (
    <Card className="px-6 py-6">
      <Card.Title className="text-center">Total users</Card.Title>
      <span className="block mt-3 text-5xl font-medium text-center text-gray-dark">
        1.385
      </span>
      <div className="relative w-full h-64 mt-4">
        <div className="absolute top-0 left-0 w-full h-full">
          <ResponsiveContainer height={250} width="100%">
            <PieChart>
              <Pie
                cx="50%"
                cy="50%"
                data={data}
                dataKey="value"
                fill="#82ca9d"
                innerRadius={50}
                label
                nameKey="name"
                outerRadius={80}
              >
                {data?.map((entry, index) => (
                  <Cell fill={entry.color} key={`cell-${index}`} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}

UserTotalChart.defaultProps = {
  data: [],
};
