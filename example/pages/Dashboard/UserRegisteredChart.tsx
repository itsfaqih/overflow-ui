import { ComponentProps } from 'react';
import * as Icon from 'react-feather';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Card, Dropdown } from '../../../.';

interface UserRegisteredChartProps {
  data?: ComponentProps<typeof LineChart>['data'];
}

export function UserRegisteredChart({ data }: UserRegisteredChartProps) {
  return (
    <Card className="px-8 py-6">
      <div className="flex">
        <div>
          <Card.Title>Registered users</Card.Title>
          <div className="flex items-center mt-2 text-gray">
            <Icon.TrendingUp className="text-green-700" />
            <span className="ml-2 mr-1 text-gray-dark">+ 32</span> from last
            week
          </div>
        </div>
        <Dropdown className="ml-auto">
          <Dropdown.Button className="flex items-center text-gray-dark">
            WEEKLY
            <Icon.ChevronDown className="w-5 h-5 ml-1 text-gray" />
          </Dropdown.Button>
          <Dropdown.List>
            <Dropdown.Item>MONTHLY</Dropdown.Item>
            <Dropdown.Item>YEARLY</Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      </div>
      <div className="relative w-full h-64 mt-4">
        <div className="absolute top-0 left-0 w-full h-full">
          <ResponsiveContainer height={250} width="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                dataKey="Registered user"
                dot={{ strokeWidth: 7 }}
                stroke="#5C5DD6"
                strokeWidth={4}
                type="monotone"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}

UserRegisteredChart.defaultProps = { data: [] };
