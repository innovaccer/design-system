import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Modal, ModalHeader, ModalFooter, ModalBody, ModalDescription, Button, Paragraph } from '@/index';

import { updateKnob } from '@/utils/storybookEventEmitter';

export const small = () => {
  const open = boolean('open', true);
  const backdropClose = boolean('backdropClose', false);
  const dimension = 'small';

  const onClose = () => {
    updateKnob('open', false);
    action('on close triggered')();
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
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading',
        }}
        footer={
          <>
            <Button appearance="basic" onClick={action('Basic button click')}>
              Basic
            </Button>
            <Button appearance="primary" className="ml-4" onClick={action('Primary button click')}>
              Primary
            </Button>
          </>
        }
      >
        <ModalDescription
          title="Description Title"
          description="Adding a subheading clearly indicates the hierarchy of the information."
        />
        <ModalDescription description="Card Sections include supporting text like an article summary or a restaurant description." />
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(true);
  const dimension = 'small';
  const backdropClose = true;

  const onClose = () => {
    setOpen(!open);
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
        <Button appearance="primary" onClick={() => setOpen(true)}>Open</Button>
      </Paragraph>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading'
        }}
        footer={(
          <>
            <Button appearance="basic" onClick={()=>console.log('Basic button click')}>Basic</Button>
            <Button appearance="primary" className="ml-4" onClick={()=>console.log('Primary button click')}>Primary</Button>
          </>
        )}
      >
        <Text>Modal Body</Text>
        <ModalDescription
          title="Description Title"
          description="Adding a subheading clearly indicates the hierarchy of the information."
        />
        <ModalDescription
          description="Card Sections include supporting text like an article summary or a restaurant description."
        />
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/Variants/Dimesion/Small',
  component: Modal,
  subcomponents: { ModalHeader, ModalBody, ModalDescription, ModalFooter },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Modal',
        noHtml: true,
      },
    },
  },
};
