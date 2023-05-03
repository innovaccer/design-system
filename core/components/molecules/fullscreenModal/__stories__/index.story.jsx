import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Paragraph, Text, FullscreenModal } from '@/index';
import Heading from '@/components/atoms/heading';

export const all = () => {
  const [open, setOpen] = React.useState(false);
  const dimension = 'medium';
  const knobOpen = open;

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button appearance="primary" onClick={openModal}>
        Open Modal
      </Button>

      <FullscreenModal
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
              children: 'Primary',
              appearance: 'primary',
              className: 'ml-4',
              onClick: action('primary action'),
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
    </div>
  );
};

const customCode = `
() => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };


  return (
    <div>
      <Button className="m-8" appearance="primary" onClick={openModal}>
        Open Modal
      </Button>

      <FullscreenModal
        open={open}
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
              children: 'Primary',
              appearance: 'primary',
              className: 'ml-4',
              onClick: ev => console.log('Primary button click', ev)
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
    </div>
  );
}`;

export default {
  title: 'Components/Modals/FullscreenModal/All',
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
