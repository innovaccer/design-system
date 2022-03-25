import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, ModalDescription, ModalHeader, ModalBody, ModalFooter, Text, Paragraph } from '@/index';

export const noFooter = () => {
  const [open, setOpen] = React.useState(true);
  const backdropClose = false;
  const dimension = 'medium';

  const onClose = () => {
    setOpen(false);
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
      >
        <Text>Modal Body</Text>
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
  const dimension = 'medium';
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
  title: 'Components/Modal/No Footer',
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
