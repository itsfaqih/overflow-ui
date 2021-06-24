import { ComponentProps } from 'react';

import { Card } from '../../../.';
import PopularCoursesItem from './PopularCoursesItem';

interface PopularCoursesProps {
  data?: ComponentProps<typeof PopularCoursesItem>[];
}

export function PopularCourses({ data }: PopularCoursesProps) {
  return (
    <Card className="px-8 py-6">
      <div className="flex justify-between">
        <Card.Title>Popular courses</Card.Title>
        <Card.Link>View All</Card.Link>
      </div>
      <div className="flex flex-col mt-8 space-y-6">
        {data?.map((item) => (
          <PopularCoursesItem key={item.number} {...item} />
        ))}
      </div>
    </Card>
  );
}

PopularCourses.defaultProps = {
  data: [],
};
