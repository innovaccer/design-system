import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Paragraph, FullscreenModal, Label, Input, Radio, Icon, Text, Card } from '@/index';

export const largeWidth = () => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
    action('on close triggered')();
  };

  const data = [
    { iconName: 'message', textMessage: 'Text Message' },
    { iconName: 'chat_bubble', textMessage: 'Portal Message' },
    { iconName: 'email', textMessage: 'E-mail' },
    { iconName: 'markunread_mailbox', textMessage: 'Letter' },
    { iconName: 'mic', textMessage: 'Voice Recording' },
  ];

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
      <FullscreenModal
        open={open}
        dimension="large"
        onClose={onClose}
        headerOptions={{
          heading: 'New outreach',
        }}
        footer={
          <>
            <Button onClick={action('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-3" onClick={action('Next button click')}>
              Create
            </Button>
          </>
        }
      >
        <Label withInput={true}>Type</Label>
        <div className="d-flex">
          <Radio
            defaultChecked={true}
            label="Message outreach"
            name="Outreach"
            size="regular"
            value="Message outreach"
          />
          <Radio label="Surevey outreach" name="Outreach" size="regular" value="Surevey outreach" className="ml-8" />
        </div>
        <Label withInput={true} className="mt-6">
          Name
        </Label>
        <Input placeholder="e.g. Annual Welness Visit outreach, etc." className="mb-5 w-50" />
        <Label withInput={true}>Medium</Label>
        <div className="d-flex">
          {data.map((obj, index) => {
            return (
              <Card
                key={index}
                shadow="none"
                style={{ height: '85px', width: '110px' }}
                className="mr-4 d-flex flex-column align-items-center justify-content-center"
              >
                <Icon name={obj.iconName} size={25} />
                <Text className="pt-5" size="small" weight="strong">
                  {obj.textMessage}
                </Text>
              </Card>
            );
          })}
        </div>
      </FullscreenModal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered')();
  };

  const data = [{ iconName: 'message', textMessage: 'Text Message' }, { iconName: 'chat_bubble', textMessage: 'Portal Message' }, { iconName: 'email', textMessage: 'E-mail' }, { iconName: 'markunread_mailbox', textMessage: 'Letter' }, { iconName: 'mic', textMessage: 'Voice Recording' }];

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
        dimension="large"
        onClose={onClose}
        headerOptions={{
          heading: 'New outreach',
        }}
        footer={(
          <>
            <Button onClick={console.log('Cancel button click')}>Cancel</Button>
            <Button appearance="primary" className="ml-3" onClick={console.log('Next button click')}>Create</Button>
          </>
        )}
      >
        <Label withInput={true}>Type</Label>
        <div className="d-flex">
          <Radio
            defaultChecked={true}
            label="Message outreach"
            name="Outreach"
            size="regular"
            value="Message outreach"
          />
          <Radio label="Surevey outreach" name="Outreach" size="regular" value="Surevey outreach" className="ml-8" />
        </div>
        <Label withInput={true} className="mt-6">Name</Label>
        <Input placeholder="e.g. Annual Welness Visit outreach, etc." className="mb-5 w-50" />
        <Label withInput={true}>Medium</Label>
        <div className="d-flex">
          {
            data.map((obj, index) => {
              return(
                <Card key={index} shadow="none" style={{ height:'85px', width:'110px' }} className="mr-4 d-flex flex-column align-items-center justify-content-center">
                  <Icon name={obj.iconName} size={25}/>
                  <Text className="pt-5" size="small" weight="strong">
                    {obj.textMessage}
                  </Text>
                </Card>
              );
            })
          }
        </div>
      </FullscreenModal>
    </div>
  );
}`;

export default {
  title: 'Components/FullscreenModal/Large Width',
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
