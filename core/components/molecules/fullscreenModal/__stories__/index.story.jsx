import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Paragraph, FullscreenModal } from '@/index';
import Heading from '@/components/atoms/heading';

export const all = () => {
  const [open, setOpen] = React.useState(false);
  const dimension = 'medium';
  const knobOpen = open;
  const headingId = 'fullscreen-modal-a11y-heading';

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button appearance="primary" onClick={openModal}>
        Open Full screen modal
      </Button>

      <FullscreenModal
        open={knobOpen}
        dimension={dimension}
        onClose={onClose}
        aria-labelledby={headingId}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading',
          headingId,
        }}
        footerOptions={{
          actions: [
            {
              children: 'Cancel',
              appearance: 'basic',
              onClick: action('basic action'),
            },
            {
              children: 'Done',
              appearance: 'primary',
              className: 'ml-4',
              onClick: action('primary action'),
            },
          ],
        }}
      >
        <div className="pb-6">
          <Heading className="pb-3" size="s">
            Description Title
          </Heading>
          <Paragraph>Adding a subheading clearly indicates the hierarchy of the information.</Paragraph>
        </div>
        <div className="pt-6">
          <Paragraph>
            Card Sections include supporting text like an article summary or a healthcare service description.
          </Paragraph>
        </div>
      </FullscreenModal>
    </div>
  );
};

const customCode = `
() => {
  const [open, setOpen] = React.useState(false);
  const headingId = 'fullscreen-modal-a11y-heading';

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className="m-8" appearance="primary" onClick={openModal}>
        Open Full screen modal
      </Button>

      <FullscreenModal
        open={open}
        onClose={onClose}
        aria-labelledby={headingId}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading',
          headingId,
        }}
        footerOptions={{
          actions: [
            {
              children: 'Cancel',
              appearance: 'basic',
              onClick: ev => console.log('Basic button click', ev)
            },
            {
              children: 'Done',
              appearance: 'primary',
              className: 'ml-4',
              onClick: ev => console.log('Primary button click', ev)
            }
          ]
        }}
      >
        <div className="pb-6">
          <Heading className="pb-3" size="s">
           Description Title
          </Heading>
          <Paragraph>Adding a subheading clearly indicates the hierarchy of the information.</Paragraph>
        </div>
        <div className="pt-6">
          <Paragraph>
            Card Sections include supporting text like an article summary or a healthcare service description.
          </Paragraph>
        </div>
      </FullscreenModal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/FullscreenModal/All',
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
