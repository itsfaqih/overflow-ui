import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Tabs } from '../src';

const Test = () => (
  <Tabs>
    <Tabs.Menu>
      <Tabs.Button>Tab 1</Tabs.Button>
      <Tabs.Button>Tab 2</Tabs.Button>
    </Tabs.Menu>
    <Tabs.Panel>Panel 1</Tabs.Panel>
    <Tabs.Panel>Panel 2</Tabs.Panel>
  </Tabs>
);

describe('Tabs', () => {
  it('renders tabs', () => {
    const { getAllByRole } = render(<Test />);

    expect(getAllByRole('tab').length).toBe(2);
  });

  it('shows only one of panels', () => {
    const { getByRole } = render(<Test />);

    expect(getByRole('tabpanel')).toBeInTheDocument();
  });

  it('activates a tab after clicking', () => {
    const { getByRole, getAllByRole } = render(<Test />);
    const tabs = getAllByRole('tab');

    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(tabs[1].getAttribute('aria-selected')).toBe('false');

    expect(getByRole('tabpanel').textContent).toBe('Panel 1');

    fireEvent.click(tabs[1]);

    expect(tabs[0].getAttribute('aria-selected')).toBe('false');
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');

    expect(getByRole('tabpanel').textContent).toBe('Panel 2');
  });
});
