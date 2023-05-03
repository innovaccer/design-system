import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Paragraph, Text, FullscreenModal } from '@/index';
import Heading from '@/components/atoms/heading';

export const layering = () => {
  const [open, setOpen] = React.useState(false);
  const [openSecondOverlay, setOpenSecondOverlay] = React.useState(false);
  const dimension = 'medium';
  const knobOpen = open;
  const knobSecondOpen = openSecondOverlay;

  const onClose = () => {
    setOpen(!open);
  };

  const onCloseSecondOverlay = () => {
    setOpenSecondOverlay(!openSecondOverlay);
  };

  const openModal = () => {
    setOpen(true);
  };

  const openSecondModal = () => {
    setOpenSecondOverlay(true);
  };

  return (
    <div>
      <Button appearance="primary" onClick={openModal}>
        Open Modal
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

      <Button className="m-8" appearance="primary" onClick={openModal}>
        Open Modal
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
  title: 'Overlays/FullscreenModal/Layering',
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
