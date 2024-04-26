import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, Button, Paragraph, Text } from '@/index';

export const confirmations = () => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;
  const dimension = 'medium';

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
          heading: 'Edit filters',
        }}
        footer={
          <>
            <Button appearance="basic" onClick={action('Cancel button click')}>
              Cancel
            </Button>
            <Button appearance="primary" className="ml-4" onClick={action('Discard button click')}>
              Create version
            </Button>
          </>
        }
      >
        <Paragraph>
          Currently, Version 1.0 is published. This will create a new version of the registry which will be saved as
          draft untill published.
          <br />
        </Paragraph>
        <br />
        <Text>Do you want to continue?</Text>
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;
  const dimension = 'medium';

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
          heading: 'Edit filters',
        }}
        footer={(
          <>
            <Button appearance="basic" onClick={console.log('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-4" onClick={console.log('Discard button click')}>
                Create version
            </Button>
          </>
        )}
      >
        <Paragraph>
          Currently, Version 1.0 is published.
          This will create a new version of the registry which will be saved as draft untill published.<br />
        </Paragraph><br/>
        <Text>Do you want to continue?</Text>
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/Modal/Confirmations',
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
