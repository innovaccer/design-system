import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@/utils/action';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { Modal, ModalDescription, ModalHeader, ModalBody, ModalFooter, Button, Text, Paragraph } from '@/index';

export const layering = () => {
  const open = boolean('open', true);
  const openSecondOverlay = boolean('openSecondOverlay', false);
  const backdropClose = boolean('backdropClose', false);
  const dimension = select('dimension', ['small', 'medium', 'large'], 'medium');

  const onClose = () => {
    updateKnob('open', false);
    action('on close triggered')();
  };

  const onCloseSecondOverlay = () => {
    updateKnob('openSecondOverlay', false);
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
        closeOnEscape={true}
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
            <Button appearance="primary" className="ml-4" onClick={() => updateKnob('openSecondOverlay', true)}>
              Open
            </Button>
          </>
        }
      >
        <Text>Modal Body</Text>
        <ModalDescription
          title="Description Title"
          description="Adding a subheading clearly indicates the hierarchy of the information."
        />
        <ModalDescription description="Card Sections include supporting text like an article summary or a restaurant description." />
      </Modal>

      <Modal
        closeOnEscape={true}
        open={openSecondOverlay}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onCloseSecondOverlay}
        headerOptions={{
          heading: 'Heading Part Two',
          subHeading: 'Subheading Part Two',
        }}
        footer={
          <>
            <Button appearance="primary" className="ml-4" onClick={action('Primary button Two click')}>
              Primary
            </Button>
          </>
        }
      >
        <Text>Modal Part Two Body</Text>
        <ModalDescription description="Card Sections include supporting text like an article summary or a restaurant description." />
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(true);
  const [openSecondOverlay, setOpenSecondOverlay] = React.useState(false);
  const dimension = 'medium';
  const backdropClose = false;

  const onClose = () => {
    setOpen(!open);
  };

  const onCloseSecondOverlay = () => {
    setOpenSecondOverlay(!openSecondOverlay);
  }

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
        closeOnEscape={true}
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
            <Button appearance="primary" className="ml-4" onClick={()=> setOpenSecondOverlay(true)}>Open</Button>
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

      <Modal
        closeOnEscape={true}
        open={openSecondOverlay}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onCloseSecondOverlay}
        headerOptions={{
          heading: 'Heading Part Two',
          subHeading: 'Subheading Part Two',
        }}
        footer={
          <>
            <Button appearance="primary" className="ml-4" onClick={() => console.log('Primary button click')}>
              Primary
            </Button>
          </>
        }
      >
        <Text>Modal Part Two Body</Text>
        <ModalDescription description="Card Sections include supporting text like an article summary or a restaurant description." />
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/Layering',
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
