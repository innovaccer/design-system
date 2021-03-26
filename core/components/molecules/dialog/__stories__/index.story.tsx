import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { Paragraph } from '@/index';
import { action } from '@storybook/addon-actions';
import Dialog from '../Dialog';
import { updateKnob } from '@/utils/storybookEventEmitter';

export const all = () => {
  const open = boolean('open', true);
  const dimension = select(
    'dimension',
    ['small', 'medium', 'large'],
    'small'
  );

  const primaryButtonAppearance = select(
    'primaryButtonAppearance',
    ['basic', 'primary', 'success', 'alert', 'transparent'],
    'primary'
  );

  const secondaryButtonAppearance = select(
    'secondaryButtonAppearance',
    ['basic', 'primary', 'success', 'alert', 'transparent'],
    'basic'
  );

  const onClose = () => {
    updateKnob('open', false);
    action('on close triggered')();
  };

  const options = {
    open,
    onClose,
    dimension,
    primaryButtonAppearance,
    secondaryButtonAppearance,
    icon: 'pan_tool',
    heading: 'Heading',
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    primaryButtonLabel: 'Primary',
    primaryButtonCallback: action('primary click'),
    secondaryButtonLabel: 'Basic',
    secondaryButtonCallback: action('basic click')
  };

  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
      </Paragraph>
      <Dialog {...options} />
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(true);

  const onClose = () => {
    setOpen(!open);
  };

  const options = {
    open,
    onClose,
    icon: 'pan_tool',
    heading: 'Heading',
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    primaryButtonLabel: 'Primary',
    secondaryButtonLabel: 'Basic',
  };

  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br />
        <Button appearance="primary" onClick={() => setOpen(true)}>Open</Button>
      </Paragraph>
      <Dialog {...options} />
    </div>
  );
}`;

export default {
  title: 'Components/Dialog/All',
  component: Dialog,
  parameters: {
    docs: {
      docPage: {
        customCode,
        noHtml: true,
      }
    }
  }
};
