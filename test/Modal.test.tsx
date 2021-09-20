import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Modal, useModalState } from '../src';

describe('Modal', () => {
  it('renders a button', () => {
    const Test = () => {
      const dialog = useModalState();

      return (
        <Modal modalState={dialog}>
          <Modal.Button>Open Modal</Modal.Button>
          <Modal.Dialog aria-label="Content">Modal Content</Modal.Dialog>
        </Modal>
      );
    };

    const { getByRole } = render(<Test />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Open Modal');
  });

  it("doesn't show the modal if the button not clicked", () => {
    const Test = () => {
      const dialog = useModalState();

      return (
        <Modal modalState={dialog}>
          <Modal.Button>Open Modal</Modal.Button>
          <Modal.Dialog aria-label="Content">Modal Content</Modal.Dialog>
        </Modal>
      );
    };
    const { container } = render(<Test />);
    const modal = container.querySelector('[role=dialog]');

    expect(modal).toBeNull();
  });

  it('opens the modal after clicking the button', () => {
    const Test = () => {
      const dialog = useModalState();

      return (
        <Modal modalState={dialog}>
          <Modal.Button>Open Modal</Modal.Button>
          <Modal.Dialog aria-label="Content">Modal Content</Modal.Dialog>
        </Modal>
      );
    };
    const { getByRole } = render(<Test />);

    fireEvent.click(getByRole('button'));

    const modal = getByRole('dialog');

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveStyle({ display: 'block' });
    expect(modal.textContent).toBe('Modal Content');
  });
});
