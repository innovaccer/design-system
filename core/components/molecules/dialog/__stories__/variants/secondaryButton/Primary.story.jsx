import { useState } from 'react';
import { action } from '@/utils/action';
import Dialog from '../../../Dialog';
import { Paragraph } from '@/index';

export const primary = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const options = {
    open,
    onClose,
    icon: 'pan_tool',
    heading: 'Heading',
    title: 'Description Title/Variants',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    primaryButtonLabel: 'Primary',
    primaryButtonCallback: action('primary click'),
    secondaryButtonLabel: 'Secondary',
    secondaryButtonCallback: action('secondary click'),
  };

  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
      </Paragraph>
      <Dialog secondaryButtonAppearance="primary" {...options} />
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);

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
    secondaryButtonAppearance: 'primary',
    primaryButtonLabel: 'Primary',
    secondaryButtonLabel: 'Secondary',
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
  title: 'Components/Dialog (Deprecated)/Variants/SecondaryButton/Primary',
  component: Dialog,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Dialog',
        noHtml: true,
        isDeprecated: true,
      },
    },
  },
};
