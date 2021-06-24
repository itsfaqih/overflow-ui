import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, useModalState } from '../src';

const meta: Meta = {
  title: 'Modal',
  component: Modal,
};

export default meta;

const Template: Story<ComponentProps<typeof Modal>> = args => {
  const dialog = useModalState();

  return (
    <Modal modalState={dialog} {...args}>
      <Modal.Button>Open</Modal.Button>
      <Modal.Dialog>Modal Content</Modal.Dialog>
    </Modal>
  );
};

export const TextOnly = Template.bind({});
TextOnly.args = {};
