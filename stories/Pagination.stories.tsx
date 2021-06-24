import { ComponentProps, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Pagination } from '../src';

const meta: Meta = {
  title: 'Pagination',
  component: Pagination,
};

export default meta;

const Template: Story<ComponentProps<typeof Pagination>> = args => {
  const [page, setPage] = useState(2);

  return (
    <Pagination currentPage={page} {...args}>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <Pagination.Button
            key={i}
            number={i + 1}
            onClick={() => setPage(i + 1)}
          />
        ))}
    </Pagination>
  );
};

export const Default = Template.bind({});
Default.args = {};
