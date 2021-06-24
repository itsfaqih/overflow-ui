import { ComponentProps } from 'react';

import { PopularCourses } from './PopularCourses';
import { UserRegisteredChart } from './UserRegisteredChart';
import { UserTotalChart } from './UserTotalChart';

export function Dashboard() {
  const usersData = {
    registered: [
      {
        name: '12 January 2021',
        'Registered user': 45,
      },
      {
        name: '13 January 2021',
        'Registered user': 18,
      },
      {
        name: '14 January 2021',
        'Registered user': 33,
      },
      {
        name: '15 January 2021',
        'Registered user': 16,
      },
      {
        name: '16 January 2021',
        'Registered user': 37,
      },
      {
        name: '17 January 2021',
        'Registered user': 40,
      },
      {
        name: '18 January 2021',
        'Registered user': 25,
      },
    ],
    total: [
      {
        color: '#5C5DD6',
        name: 'User',
        value: 1265,
      },
      {
        color: '#B65CD6',
        name: 'Content Writer',
        value: 78,
      },
      {
        color: '#D65C5C',
        name: 'Product Manager',
        value: 32,
      },
      {
        color: '#74D65C',
        name: 'Super Admin',
        value: 10,
      },
    ],
  };

  const popularCourses: ComponentProps<typeof PopularCourses>['data'] = [
    {
      number: '01',
      title: 'Administering Microsoft Exchange Server 2016/2019',
      thumbnail:
        'https://images.unsplash.com/photo-1592513813416-7b761a6682bf?h=100',
      participant_count: 612,
      principle: 'Microsoft',
    },
    {
      number: '02',
      title: 'Oracle Database 18c: New Features for Administrators',
      thumbnail:
        'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?h=100',
      participant_count: 495,
      principle: 'Oracle',
    },
    {
      number: '03',
      title: 'Designing and Implementing a Server Infrastructure',
      thumbnail:
        'https://images.unsplash.com/photo-1560732488-6b0df240254a?h=100',
      participant_count: 367,
      principle: 'Other',
    },
    {
      number: '04',
      title: 'Configuring Advanced Windows Server® 2012 Services',
      thumbnail:
        'https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?h=100',
      participant_count: 148,
      principle: 'Microsoft',
    },
    {
      number: '05',
      title: 'Certified Chief Information Security Officer',
      thumbnail:
        'https://images.unsplash.com/photo-1542762933-ab3502717ce7?h=100',
      participant_count: 90,
      principle: 'EC Council',
    },
  ];

  return (
    <div className="flex flex-col my-10 space-y-6 xl:space-y-0 xl:space-x-6 xl:flex-row">
      <div className="flex flex-wrap w-full space-y-6 xl:w-2/3">
        <div className="w-full">
          <UserRegisteredChart data={usersData.registered} />
        </div>
        <div className="w-full">
          <PopularCourses data={popularCourses} />
        </div>
      </div>
      <div className="space-y-6 xl:w-1/3">
        <UserTotalChart data={usersData.total} />
      </div>
    </div>
  );
}
