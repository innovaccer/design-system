import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Modal, Button, Paragraph, Text } from '@/index';

export const confirmations = () => {
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
          heading: 'Edit filters',
        }}
        footer={
          <>
            <Button appearance="basic" onClick={action('Cancel button click')}>
              Cancel
            </Button>
            <Button appearance="primary" className="ml-3" onClick={action('Discard button click')}>
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
          heading: 'Edit filters',
        }}
        footer={(
          <>
            <Button appearance="basic" onClick={console.log('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-3" onClick={console.log('Discard button click')}>
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
  title: 'Components/Modal/Confirmations',
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
