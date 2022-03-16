import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, Button, Paragraph } from '@/index';

export const alerts = () => {
  const [open, setOpen] = React.useState(true);
  const backdropClose = false;
  const dimension = 'small';

  const onClose = () => {
    setOpen(!open);
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
          heading: 'Discard Changes',
        }}
        footer={
          <>
            <Button appearance="basic" onClick={action('Cancel button click')}>
              Cancel
            </Button>
            <Button appearance="alert" className="ml-3" onClick={action('Discard button click')}>
              Discard
            </Button>
          </>
        }
      >
        <Paragraph>
          You are about to discard all the saved filters. Once discarded, this action cannot be undone. Please be sure
          of it.
        </Paragraph>
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(true);
  const backdropClose = false;
  const dimension = 'small';

  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered')();
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
          heading: 'Discard Changes',
        }}
        footer={(
          <>
            <Button appearance="basic" onClick={console.log('Cancel button click')}>Cancel</Button>
            <Button appearance="alert" className="ml-3" onClick={console.log('Discard button click')}>Discard</Button>
          </>
        )}
      >
        <Paragraph>
            You are about to discard all the saved filters.
            Once discarded, this action cannot be undone.
            Please be sure of it.
        </Paragraph>
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/Alerts',
  component: Modal,
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
