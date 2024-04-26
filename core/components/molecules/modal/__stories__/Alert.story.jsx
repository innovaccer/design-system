import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, Button, Paragraph } from '@/index';

export const alerts = () => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;
  const dimension = 'small';

  const onClose = () => {
    setOpen(!open);
    action('on close triggered')();
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
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
            <Button appearance="alert" className="ml-4" onClick={action('Discard button click')}>
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
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;
  const dimension = 'small';

  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered');
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
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
            <Button appearance="alert" className="ml-4" onClick={console.log('Discard button click')}>Discard</Button>
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
  title: 'Components/Modal/Modal/Alerts',
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
