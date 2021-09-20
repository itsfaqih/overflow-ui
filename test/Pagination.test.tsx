import { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Pagination } from '../src';

const Test = ({ numberOfPage }: { numberOfPage: number }) => {
  const [page, setPage] = useState(2);

  return (
    <Pagination currentPage={page} aria-label="Pagination">
      {Array(numberOfPage)
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

describe('Pagination', () => {
  it('renders a group of buttons', () => {
    const numberOfPage = 10;
    const { getAllByRole } = render(<Test numberOfPage={numberOfPage} />);
    const buttons = getAllByRole('button');

    expect(buttons.length).toBe(numberOfPage);
  });

  it('activates a button after clicking it', () => {
    const { getAllByRole } = render(<Test numberOfPage={5} />);
    const buttons = getAllByRole('button');

    const [firstButton] = buttons;

    fireEvent.click(firstButton);

    expect(firstButton.classList.contains('text-primary-500')).toBe(true);
    expect(firstButton.classList.contains('font-medium')).toBe(true);
  });
});
