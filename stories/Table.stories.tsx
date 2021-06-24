import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, Badge, Table } from '../src';

const meta: Meta = {
  title: 'Table',
  component: Table,
};

export default meta;

const templateData = [
  {
    avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    name: 'Alice Synthesis Thirty',
    email: 'alice@underworld.io',
    title: 'Integrity Knight',
    division: 'Axiom Church',
    status: 'Alive',
    role: 'Player',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Kirigaya Kazuto',
    email: 'kirito@sao.io',
    title: 'Beater',
    division: 'Swort Art Online',
    status: 'Alive',
    role: 'Player',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
    name: 'Kirigaya Suguha',
    email: 'leafa@alfheim.io',
    title: 'Speedaholic',
    division: 'Alfheim Online',
    status: 'Alive',
    role: 'Player',
  },
];

const Template: Story<ComponentProps<typeof Table>> = args => (
  <Table {...args}>
    <Table.Head>
      <Table.Row>
        <Table.Heading align="center">#</Table.Heading>
        <Table.Heading>Name</Table.Heading>
        <Table.Heading>Title</Table.Heading>
        <Table.Heading>Status</Table.Heading>
        <Table.Heading colSpan={2}>Role</Table.Heading>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {templateData.map((data, i) => (
        <Table.Row key={i}>
          <Table.Cell align="center">{i + 1}</Table.Cell>
          <Table.Cell>
            <div className="flex items-center">
              <Avatar src={data.avatar} username={data.name} />
              <div className="flex flex-col ml-3">
                <span className="font-medium">{data.name}</span>
                <span className="text-coolGray-500">{data.email}</span>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <div className="flex flex-col">
              <span>{data.title}</span>
              <span className="text-coolGray-500">{data.division}</span>
            </div>
          </Table.Cell>
          <Table.Cell>
            <Badge variant="success">{data.status}</Badge>
          </Table.Cell>
          <Table.Cell>{data.role}</Table.Cell>
          <Table.Cell>
            <a href="#edit" className="font-medium text-primary-500">
              Edit
            </a>
            <a href="#delete" className="ml-4 font-medium text-red-500">
              Hapus
            </a>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export const Default = Template.bind({});
Default.args = {};

export const Striped = Template.bind({});
Striped.args = { variant: 'striped' };