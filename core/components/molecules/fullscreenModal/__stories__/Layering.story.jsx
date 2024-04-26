import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Paragraph, FullscreenModal } from '@/index';
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
        Open Full screen modal
      </Button>

      <FullscreenModal
        closeOnEscape={true}
        open={knobOpen}
        dimension={dimension}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading',
        }}
        footerOptions={{
          actions: [
            {
              children: 'Cancel',
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
        <div className="pb-6">
          <Heading className="pb-3" size="s">
            Description Title
          </Heading>
          <Paragraph>Adding a subheading clearly indicates the hierarchy of the information.</Paragraph>
        </div>
        <div className="pt-6">
          <Paragraph>
            Card sections include supporting text like an article summary or a healthcare service description.
          </Paragraph>
        </div>
      </FullscreenModal>

      <FullscreenModal
        closeOnEscape={true}
        open={knobSecondOpen}
        dimension={dimension}
        onClose={onCloseSecondOverlay}
        headerOptions={{
          heading: 'Second modal heading',
          subHeading: 'Second modal subheading',
        }}
        footerOptions={{
          actions: [
            {
              children: 'Cancel',
              appearance: 'basic',
              onClick: action('basic action'),
            },
          ],
        }}
      >
        <Heading size="s">Description title second</Heading>
        <Paragraph>
          Card sections include supporting text like an article summary or a healthcare service description.
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
        Open Full screen modal
      </Button>

      <FullscreenModal
        open={open}
        closeOnEscape={true}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading'
        }}
        footerOptions={{
          actions: [
            {
              children: 'Cancel',
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
        <div className="pb-6">
          <Heading className="pb-3" size="s">
            Description Title
          </Heading>
          <Paragraph>Adding a subheading clearly indicates the hierarchy of the information.</Paragraph>
        </div>
        <div className="pt-6">
          <Paragraph>
            Card sections include supporting text like an article summary or a healthcare service description.
          </Paragraph>
        </div>
      </FullscreenModal>

      <FullscreenModal
        closeOnEscape={true}
        open={openSecondOverlay}
        onClose={onCloseSecondOverlay}
        headerOptions={{
          heading: 'Second modal heading',
          subHeading: 'Second modal subheading'
        }}
        footerOptions={{
          actions: [
            {
              children: 'Cancel',
              appearance: 'basic',
              onClick: ev => console.log('Basic button click', ev)
            }
          ]
        }}
      >
        <Heading size="s">Second description title</Heading>
        <Text>Second fullscreen modal body</Text>
      </FullscreenModal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/FullscreenModal/Layering',
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
