import * as React from 'react';
import { action } from '@/utils/action';
import { Button, FullscreenModal, Label, Input, Radio, Icon, Text, Card } from '@/index';

export const large = () => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const data = [
    { iconName: 'message', textMessage: 'Text Message' },
    { iconName: 'chat_bubble', textMessage: 'Portal Message' },
    { iconName: 'email', textMessage: 'E-mail' },
    { iconName: 'markunread_mailbox', textMessage: 'Letter' },
    { iconName: 'mic', textMessage: 'Voice Recording' },
  ];

  const cardClassName = (index) => {
    const classname = 'd-flex flex-column align-items-center justify-content-center w-25 py-4';
    return classname.concat(index !== data.length - 1 && ' mr-4');
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Full screen modal
      </Button>
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
            <Button appearance="primary" className="ml-4" onClick={action('Next button click')}>
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
          <Radio label="Survey outreach" name="Outreach" size="regular" value="Survey outreach" className="ml-8" />
        </div>
        <Label withInput={true} className="mt-6">
          Name
        </Label>
        <Input placeholder="e.g. Annual Welness Visit outreach, etc." className="mb-5 w-50" />
        <Label withInput={true}>Medium</Label>
        <div className="d-flex">
          {data.map((obj, index) => {
            return (
              <Card key={index} shadow="none" className={cardClassName(index)}>
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
  };

  const data = [{ iconName: 'message', textMessage: 'Text Message' }, { iconName: 'chat_bubble', textMessage: 'Portal Message' }, { iconName: 'email', textMessage: 'E-mail' }, { iconName: 'markunread_mailbox', textMessage: 'Letter' }, { iconName: 'mic', textMessage: 'Voice Recording' }];

  const cardClassName = (index) => {
    const classname = 'd-flex flex-column align-items-center justify-content-center w-25 py-4'
    return classname.concat((index !== data.length-1) && " mr-4")
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Full screen modal</Button>
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
            <Button appearance="primary" className="ml-4" onClick={console.log('Next button click')}>Create</Button>
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
          <Radio label="Survey outreach" name="Outreach" size="regular" value="Survey outreach" className="ml-8" />
        </div>
        <Label withInput={true} className="mt-6">Name</Label>
        <Input placeholder="e.g. Annual Welness Visit outreach, etc." className="mb-5 w-50" />
        <Label withInput={true}>Medium</Label>
        <div className="d-flex">
          {
            data.map((obj, index) => {
              return(
                <Card key={index} shadow="none" 
                className={cardClassName(index)}
                >
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
  title: 'Components/Modal/FullscreenModal/Variants/Dimension/Large',
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
