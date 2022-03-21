import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, Button, Text, Paragraph, Message, List } from '@/index';

export const dialogs = () => {
  const [open, setOpen] = React.useState(true);
  const backdropClose = true;
  const dimension = 'medium';
  const onClose = () => {
    setOpen(!open);
    action('on close triggered')();
  };

  const data = [
    { Name: 'ER Education' },
    { Name: 'HbA1c Test Due' },
    { Name: 'Flu Vaccination' },
    { Name: 'Well-Child Visit' },
    { Name: 'Cervical Screening' },
    { Name: 'HbA1c Test Due' },
    { Name: 'Flu Vaccination' },
    { Name: 'Well-Child Visit' },
    { Name: 'Cervical Screening' },
    { Name: 'HbA1c Test Due' },
    { Name: 'Flu Vaccination' },
    { Name: 'Well-Child Visit' },
  ];

  const schema = [
    {
      name: 'data',
      displayName: 'data',
      cellRenderer: (props) => {
        return <Text className=" ml-4">{`${props.data.Name}`}</Text>;
      },
    },
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
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Cannot delete Leona Lucas',
        }}
        footer={
          <>
            <Button className="ml-4" onClick={action('Close button click')}>
              Close
            </Button>
          </>
        }
      >
        <div>
          <Message
            appearance="warning"
            description="Following 11 outreaches are currently scheduled using this sender's details."
          />
        </div>
        <div style={{ border: 'var(--border)', height: '185px' }} className="my-5 overflow-auto">
          <List data={data} schema={schema} size="compressed" />
        </div>
        <Text weight="strong" className="mt-2">
          What to do next?
        </Text>
        <br />
        <Text>You cannot delete this sender until the scheduled outreaches have been completed or cancelled.</Text>
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(true);
  const backdropClose = true;
  const dimension = 'medium';
  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered')();
  };

  const data = [{ Name:'ER Education' }, { Name:'HbA1c Test Due' } , { Name:'Flu Vaccination' }  , { Name:'Well-Child Visit' }, { Name:'Cervical Screening' }, { Name:'HbA1c Test Due' } , { Name:'Flu Vaccination' }  , { Name:'Well-Child Visit' }, { Name:'Cervical Screening' }, { Name:'HbA1c Test Due' } , { Name:'Flu Vaccination' }  , { Name:'Well-Child Visit' }];

  const schema = [
    {
      name: 'info',
      displayName: 'Info',
      cellRenderer: (props) => {
        return (
          <Text className=" ml-4">{\`\${props.data.Name}\`}</Text>
        );
      }
    },
  ];

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
      <Button appearance="primary" onClick={() => setOpen(true)}>Open</Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Cannot delete Leona Lucas',
        }}
        footer={(
          <>
            <Button className="ml-4" onClick={console.log('Close button click')}>Close</Button>
          </>
        )}
      >
        <div>
          <Message
            appearance="warning"
            description="Following 11 outreaches are currently scheduled using this sender's details."
          />
        </div>
        <div style={{ border: 'var(--border)', height:'185px' }} className="my-5 overflow-auto">
          <List
            data={data}
            schema={schema}
            size="compressed"
          />
        </div>
        <Text weight="strong" className="mt-2">What to do next?</Text><br/>
        <Text>
          You cannot delete this sender until the scheduled outreaches have been completed or cancelled.
        </Text>
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/Dialogs',
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
