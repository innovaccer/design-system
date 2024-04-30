import * as React from 'react';
import { action } from '@/utils/action';
import { Button, FullscreenModal, Label, Input, Textarea } from '@/index';

export const medium = () => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Full screen modal
      </Button>

      <FullscreenModal
        open={open}
        dimension="medium"
        onClose={onClose}
        headerOptions={{
          heading: 'New group',
        }}
        footer={
          <>
            <Button onClick={action('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-4" onClick={action('Next button click')}>
              Create
            </Button>
          </>
        }
      >
        <Label withInput={true} required={true}>
          Name
        </Label>
        <Input placeholder="Admin" className="mb-5" />
        <Label withInput={true}>Description</Label>
        <Textarea placeholder="Write a description" />
      </FullscreenModal>
    </div>
  );
};

const customCode = `() => {
    const [open, setOpen] = React.useState(false);

    const onClose = () => {
      setOpen(!open);
    };

    return (
      <div>
        <Button appearance="primary" onClick={() => setOpen(true)}>Open Full screen modal</Button>
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
  title: 'Components/Modal/FullscreenModal/Variants/Dimension/Medium',
  component: FullscreenModal,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'FullscreenModal',
        noHtml: true,
      },
    },
  },
};
