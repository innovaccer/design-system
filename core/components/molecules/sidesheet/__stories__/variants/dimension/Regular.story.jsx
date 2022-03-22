import * as React from 'react';
import { action } from '@/utils/action';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { Text, Paragraph, Sidesheet, ModalDescription, Button } from '@/index';

export const regular = () => {
  const open = true;
  const seperator = false;
  const backIcon = false;
  const stickFooter = false;
  const backdropClose = false;

  const onClose = () => {
    updateKnob('open', false);
    action('on close triggered')();
  };

  const backIconCallback = () => {
    action('back icon clicked')();
  };

  const headerOptions = {
    backIcon,
    backIconCallback: backIcon ? backIconCallback : undefined,
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options = {
    onClose,
    open,
    seperator,
    headerOptions,
    stickFooter,
    backdropClose,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
        </Button>
        <Button appearance="basic">Basic</Button>
      </>
    ),
  };

  const modalDescriptionOptions = {
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    removePadding: true,
  };

  const modalDescriptionOptionsWithoutTitle = {
    description: 'Card Sections include supporting text like an article summary or a restaurant description.',
    removePadding: true,
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
      <Sidesheet {...options} dimension="regular">
        <Text>Modal Body</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
      </Sidesheet>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(true);

  const onClose = () => {
    setOpen(!open);
  };

  const headerOptions = {
    heading: 'Heading',
    subHeading: 'Subheading'
  };

  const options = {
    onClose,
    open,
    headerOptions,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">Primary</Button>
        <Button appearance="basic">Basic</Button>
      </>
    )
  };

  const modalDescriptionOptions = {
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    removePadding: true
  };

  const modalDescriptionOptionsWithoutTitle = {
    description: 'Card Sections include supporting text like an article summary or a restaurant description.',
    removePadding: true
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
      <Sidesheet {...options} dimension="regular">
        <Text>Modal Body</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
      </Sidesheet>
    </div>
  );
}`;

export default {
  title: 'Components/Sidesheet/Regular',
  component: Sidesheet,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Sidesheet',
        noHtml: true,
      },
    },
  },
};
