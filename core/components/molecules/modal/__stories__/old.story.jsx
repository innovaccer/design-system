import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalDescription, Button, Text } from '@/index';

export const old = () => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;
  const dimension = 'medium';

  const onClose = () => {
    setOpen(false);
    action('on close triggered')();
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal open={open} dimension={dimension} backdropClose={backdropClose ? onClose : undefined}>
        <ModalHeader onClose={onClose} heading="Heading" subHeading="Subheading" />
        <ModalBody>
          <Text>Modal Body</Text>
          <ModalDescription
            title="Description Title"
            description="Adding a subheading clearly indicates the hierarchy of the information."
          />
          <ModalDescription description="Card Sections include supporting text like an article summary or a healthcare service description." />
        </ModalBody>
        <ModalFooter open={open}>
          <Button appearance="basic" onClick={action('Basic button click')}>
            Basic
          </Button>
          <Button appearance="primary" className="ml-4" onClick={action('Primary button click')}>
            Primary
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);
  const dimension = 'medium';

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={onClose}
      >
        <ModalHeader
          onClose={onClose}
          heading="Heading"
          subHeading="Subheading"
        />
        <ModalBody>
          <Text>Modal Body</Text>
          <ModalDescription
            title="Description Title"
            description="Adding a subheading clearly indicates the hierarchy of the information."
          />
          <ModalDescription
            description="Card Sections include supporting text like an article summary or a healthcare service description."
          />
        </ModalBody>
        <ModalFooter open={open}>
          <Button appearance="basic" onClick={()=>console.log('Basic button click')}>Basic</Button>
          <Button appearance="primary" className="ml-4" onClick={()=>console.log('Primary button click')}>Primary</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/Modal/Old',
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
