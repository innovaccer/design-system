import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Paragraph, FullscreenModal, Label, Input, Textarea } from '@/index';

export const defaultWidth = () => {
  const [open, setOpen] = React.useState(true);

  const onClose = () => {
    setOpen(!open);
    action('on close triggered')();
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
      </Paragraph>
      <FullscreenModal
        open={open}
        dimension="medium"
        onClose={onClose}
        headerOptions={{
          heading: 'New group',
        }}
        footer={(
          <>
            <Button  onClick={action('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-4" onClick={action('Next button click')}>Create</Button>
          </>
        )}
      >
        <Label withInput={true} required={true}>Name</Label>
        <Input placeholder="Admin" className="mb-5"/>
        <Label withInput={true}>Description</Label>
        <Textarea placeholder="Write a description"/>
      </FullscreenModal>
    </div>
  );
};

const customCode = `() => {
    const [open, setOpen] = React.useState(true);

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
        <FullscreenModal
          open={open}
          dimension="medium"
          onClose={onClose}
          headerOptions={{
            heading: 'New group',
          }}
          footer={(
            <>
              <Button  onClick={console.log('Cancel button click')}>Cancel</Button>
              <Button appearance="primary" className="ml-4" onClick={console.log('Next button click')}>Create</Button>
            </>
          )}
        >
          <Label withInput={true} required={true}>Name</Label>
          <Input placeholder="Admin" className="mb-5"/>
          <Label withInput={true}>Description</Label>
          <Textarea placeholder="Write a description"/>
        </FullscreenModal>
      </div>
    );
}`;

export default {
  title: 'Components/FullscreenModal/Default Width',
  component: FullscreenModal,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'FullscreenModal',
        noHtml: true
      }
    }
  }
};
