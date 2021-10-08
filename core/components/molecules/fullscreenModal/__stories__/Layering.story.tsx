import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { Button, Paragraph, Text, FullscreenModal } from '@/index';
import Heading from '@/components/atoms/heading';

export const layering = () => {
  const [open, setOpen] = React.useState(true);
  const [openSecondOverlay, setOpenSecondOverlay] = React.useState(false);
  const dimension = select('dimension', ['medium', 'large'], 'medium');

  const knobOpen = boolean('open', open);
  const knobSecondOpen = boolean('openSecondOverlay', openSecondOverlay);

  const onClose = () => {
    setOpen(!open);
    action('on close triggered')();
    updateKnob('open', !open);
  };

  const onCloseSecondOverlay = () => {
    setOpenSecondOverlay(!openSecondOverlay);
    action('on close triggered')();
    updateKnob('openSecondOverlay', !openSecondOverlay);
  };

  const openModal = () => {
    setOpen(true);
    updateKnob('open', !open);
  };

  const openSecondModal = () => {
    setOpenSecondOverlay(true);
    updateKnob('openSecondOverlay', true);
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

      <Button appearance="primary" onClick={openModal}>
        Open modal
      </Button>

      <FullscreenModal
        closeOnEscape={true}
        open={knobOpen}
        dimension={dimension}
        onClose={onClose}
        headerOptions={{
          heading: 'This is modal Heading',
          subHeading: 'This is modal subheading',
        }}
        footerOptions={{
          actions: [
            {
              children: 'Basic',
              appearance: 'basic',
              onClick: action('basic action'),
            },
            {
              children: 'Open',
              appearance: 'primary',
              className: 'ml-4',
              onClick: openSecondModal,
            },
          ],
        }}
      >
        <Text>Fullscreen Modal Body</Text>
        <Heading size="s">Description Title</Heading>
        <Paragraph>Adding a subheading clearly indicates the hierarchy of the information.</Paragraph>
        <Paragraph>
          Card Sections include supporting text like an article summary or a restaurant description.
        </Paragraph>
      </FullscreenModal>

      <FullscreenModal
        closeOnEscape={true}
        open={knobSecondOpen}
        dimension={dimension}
        onClose={onCloseSecondOverlay}
        headerOptions={{
          heading: 'This is second modal Heading',
          subHeading: 'This is second modal subheading',
        }}
        footerOptions={{
          actions: [
            {
              children: 'Basic',
              appearance: 'basic',
              onClick: action('basic action'),
            },
          ],
        }}
      >
        <Text>Fullscreen Modal Body Type Two</Text>
        <Heading size="s">Description Title Second</Heading>
        <Paragraph>
          Card Sections include supporting text like an article summary or a restaurant description.
        </Paragraph>
      </FullscreenModal>
    </div>
  );
};

const customCode = `
() => {
  const [open, setOpen] = React.useState(false);
  const [openSecondOverlay, setOpenSecondOverlay] = React.useState(false);


  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  const onCloseSecondOverlay = () => {
    setOpenSecondOverlay(!openSecondOverlay);
  };

  const openSecondModal = () => {
    setOpenSecondOverlay(true);
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

      <Button className="m-8" appearance="primary" onClick={openModal}>
        Open modal
      </Button>

      <FullscreenModal
        open={open}
        closeOnEscape={true}
        onClose={onClose}
        headerOptions={{
          heading: 'This is modal Heading',
          subHeading: 'This is modal subheading'
        }}
        footerOptions={{
          actions: [
            {
              children: 'Basic',
              appearance: 'basic',
              onClick: ev => console.log('Basic button click', ev)
            },
            {
              children: 'Open',
              appearance: 'primary',
              className: 'ml-4',
              onClick: ev => openSecondModal()
            }
          ]
        }}
      >
        <Text>Fullscreen Modal Body</Text>
        <Heading size="s">Description Title</Heading>
        <Paragraph>
          Adding a subheading clearly indicates the hierarchy of the information.
        </Paragraph>
        <Paragraph>
          Card Sections include supporting text like an article summary or a restaurant description.
        </Paragraph>
      </FullscreenModal>

      <FullscreenModal
        closeOnEscape={true}
        open={openSecondOverlay}
        onClose={onCloseSecondOverlay}
        headerOptions={{
          heading: 'This is Second modal Heading',
          subHeading: 'This is Second modal subheading'
        }}
        footerOptions={{
          actions: [
            {
              children: 'Basic',
              appearance: 'basic',
              onClick: ev => console.log('Basic button click', ev)
            }
          ]
        }}
      >
        <Text>Second Fullscreen Modal Body</Text>
        <Heading size="s">Second Description Title</Heading>
      </FullscreenModal>
    </div>
  );
}`;

export default {
  title: 'Components/FullscreenModal/Layering',
  component: FullscreenModal,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'FullscreenModal',
        noHtml: true,
      },
    },
  },
};
