import * as React from 'react';
import { Button, Paragraph, Text, FullscreenModal } from '@/index';
import Heading from '@/components/atoms/heading';
import { action } from '@/utils/action';

export const customized = () => {
  const [open, setOpen] = React.useState(false);

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
        open={open}
        dimension="medium"
        onClose={onClose}
        header={
          <div className="ml-7">
            <Heading>Custom Heading component</Heading>
            <Text appearance="subtle">This is subheading</Text>
          </div>
        }
        footer={
          <>
            <Button appearance="basic" onClick={action('Basic button click')}>
              Cancel
            </Button>
            <Button appearance="primary" className="ml-4" onClick={action('Primary button click')}>
              Done
            </Button>
          </>
        }
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
        dimension="medium"
        onClose={onClose}
        header={(
          <div className="ml-7">
            <Heading>Custom Heading component</Heading>
            <Text appearance="subtle">This is subheading</Text>
          </div>
        )}
        footer={(
          <>
            <Button appearance="basic" onClick={ev => console.log('Basic button click', ev)}>
              Cancel
            </Button>
            <Button appearance="primary" className="ml-4" onClick={ev => console.log('Primary button click', ev)}>
              Done
            </Button>
          </>
        )}
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
  title: 'Components/Modal/FullscreenModal/Customized',
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
