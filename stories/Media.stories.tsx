import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Media } from '../src';

const meta: Meta = {
  title: 'Media',
  component: Media,
};

export default meta;

const Template: Story<ComponentProps<typeof Media>> = args => (
  <Media {...args}>
    <Media.Thumbnail
      src="https://picsum.photos/200/300"
      alt="Descriptive text about the image"
    />
    <Media.Body>
      <Media.Title>Title</Media.Title>
      <Media.Desc>Write some description here...</Media.Desc>
    </Media.Body>
    <Media.Number>67</Media.Number>
  </Media>
);

export const Default = Template.bind({});
Default.args = {};
