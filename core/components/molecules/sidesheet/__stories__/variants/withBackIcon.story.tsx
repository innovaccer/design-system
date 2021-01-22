import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ModalHeader from '@/components/molecules/modalHeader';
import ModalDescription from '@/components/molecules/modalDescription';
import ModalFooter from '@/components/molecules/modalFooter';
import ModalBody from '@/components/molecules/modalBody';
import Button from '@/components/atoms/button';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { Heading, Text, Paragraph, Sidesheet } from '@/index';

export const withBackIcon = () => {
  const [screen, setScreen] = React.useState(2);
  const totalScreens = 4;

  const open = boolean('open', true);
  const seperator = boolean('seperator', false);
  const stickFooter = boolean('stick bottom', false);
  const backdropClose = boolean('backdropClose', false);
  const dimension = select(
    'dimension',
    ['regular', 'large'],
    'regular'
  );

  const onClose = () => {
    updateKnob('open', false);
    action('on close triggered')();
  };

  const backIconCallback = () => {
    action('back icon clicked')();
    setScreen(screen - 1);
  };

  const headerOptions = {
    backIconCallback,
    backIcon: screen > 1,
    heading: `Heading ${screen}`,
    subHeading: 'Subheading'
  };

  const options = {
    onClose,
    open,
    dimension,
    seperator,
    headerOptions,
    stickFooter,
    backdropClose,
    footer: (
      <>
        {screen < totalScreens && (
          <Button
            appearance="primary"
            className="mr-4"
            onClick={() => setScreen(screen + 1)}
          >
            Next
          </Button>
        )}
        {screen > 1 && (
          <Button
            appearance="basic"
            onClick={() => setScreen(screen - 1)}
          >
            Back
          </Button>
        )}
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
      </Paragraph>
      <Sidesheet {...options} >
        <Heading size="s">{`Screen ${screen}`}</Heading>
        <Text>Modal Body</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
      </Sidesheet>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(true);
  const [screen, setScreen] = React.useState(2);
  const totalScreens = 4;

  const onClose = () => {
    setOpen(!open);
  };

  const backIconCallback = (e) => {
    console.log('back icon clicked');
    setScreen(screen-1);
  };

  const headerOptions = {
    backIconCallback,
    backIcon: screen > 1,
    heading: \`Heading \${screen}\`,
    subHeading: 'Subheading'
  };

  const options = {
    onClose,
    open,
    headerOptions,
    stickFooter: true,
    backdropClose: true,
    footer: (
      <>
        {screen < totalScreens && (
          <Button
            appearance="primary"
            className="mr-4"
            onClick={() => setScreen(screen + 1)}
          >
            Next
          </Button>
        )}
        {screen > 1 && (
          <Button
            appearance="basic"
            onClick={() => setScreen(screen - 1)}
          >
            Back
          </Button>
        )}
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
      <Sidesheet {...options} >
        <Heading size="s">{\`Screen \${screen}\`}</Heading>
        <Text>Modal Body</Text>
        <ModalDescription {...modalDescriptionOptions} />
        <ModalDescription {...modalDescriptionOptionsWithoutTitle} />
      </Sidesheet>
    </div>
  );
}`;

export default {
  title: 'Molecules|Sidesheet',
  component: Sidesheet,
  subcomponents: { ModalHeader, ModalBody, ModalDescription, ModalFooter },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Modal',
        noHtml: true,
      }
    }
  }
};
