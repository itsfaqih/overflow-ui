import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Table } from '../src';

const templateData = [
  {
    name: 'Alice Synthesis Thirty',
    email: 'alice@underworld.io',
    title: 'Integrity Knight',
    division: 'Axiom Church',
    status: 'Alive',
    role: 'Player',
  },
  {
    name: 'Kirigaya Kazuto',
    email: 'kirito@sao.io',
    title: 'Beater',
    division: 'Swort Art Online',
    status: 'Alive',
    role: 'Player',
  },
  {
    name: 'Kirigaya Suguha',
    email: 'leafa@alfheim.io',
    title: 'Speedaholic',
    division: 'Alfheim Online',
    status: 'Alive',
    role: 'Player',
  },
];

const Test = () => (
  <Table>
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
          <Table.Cell>{data.status}</Table.Cell>
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

describe('Table', () => {
  it('renders a table', () => {
    const { getByRole } = render(<Test />);

    expect(getByRole('table')).toBeInTheDocument();
  });

  it('renders its row groups', () => {
    const { getAllByRole } = render(<Test />);

    expect(getAllByRole('rowgroup').length).toBe(2);
  });

  it('renders the rows', () => {
    const { getAllByRole } = render(<Test />);

    expect(getAllByRole('row').length).toBe(templateData.length + 1);
  });

  it('renders the content of the head', () => {
    const { getAllByRole } = render(<Test />);

    expect(getAllByRole('columnheader').length).toBe(5);
  });

  it('renders the content of the body', () => {
    const { getAllByRole } = render(<Test />);

    expect(getAllByRole('cell').length).toBe(6 * templateData.length);
  });
});
