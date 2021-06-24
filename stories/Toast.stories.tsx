import { ComponentProps } from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { Meta, Story } from '@storybook/react';
import { Toast } from '../src';

const meta: Meta = {
  title: 'Toast',
  component: Toast,
};

export default meta;

const Example = () => {
  const { addToast } = useToasts();
  return (
    <button
      onClick={() => addToast('This is the toast', { appearance: 'success' })}
    >
      Trigger Toast
    </button>
  );
};

const CustomizedToast = ({ ...props }) => <Toast className="m-2" {...props} />;

const Template: Story<ComponentProps<typeof Toast>> = args => {
  return (
    <ToastProvider
      components={{ Toast: CustomizedToast }}
      placement="top-right"
      transitionDuration={150}
      autoDismiss
    >
      <Example />
    </ToastProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
