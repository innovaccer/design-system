import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, ModalDescription, ModalHeader, ModalBody, ModalFooter, Button, Text } from '@/index';

export const layering = () => {
  const [open, setOpen] = React.useState(false);
  const [openSecondOverlay, setOpenSecondOverlay] = React.useState(false);
  const backdropClose = true;
  const dimension = 'medium';

  const onClose = () => {
    setOpen(false);
    action('on close triggered')();
  };

  const onCloseSecondOverlay = () => {
    setOpenSecondOverlay(false);
    action('on close triggered')();
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
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
            <Button appearance="primary" className="ml-4" onClick={() => setOpenSecondOverlay(true)}>
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
        <ModalDescription description="Card Sections include supporting text like an article summary or a healthcare service description." />
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
        <ModalDescription description="Card Sections include supporting text like an article summary or a healthcare service description." />
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);
  const [openSecondOverlay, setOpenSecondOverlay] = React.useState(false);
  const dimension = 'medium';
  const backdropClose = true;

  const onClose = () => {
    setOpen(!open);
  };

  const onCloseSecondOverlay = () => {
    setOpenSecondOverlay(!openSecondOverlay);
  }

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
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
          description="Card Sections include supporting text like an article summary or a healthcare service description."
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
        <ModalDescription description="Card Sections include supporting text like an article summary or a healthcare service description." />
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/Modal/Layering',
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
