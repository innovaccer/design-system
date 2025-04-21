import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, Button, Text, Message, List } from '@/index';
import './style.css';

export const dialogs = () => {
  const [open, setOpen] = React.useState(false);
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
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
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
        <div className="my-5 overflow-auto border Modal-list">
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

const customCode = `/*
// styles.css
.Modal-list {
    height: var(--spacing-440);
}
*/

() => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = true;
  const dimension = 'medium';
  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered');
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
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
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
        <div className="my-5 overflow-auto border Modal-list">
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
  title: 'Components/Modal/Modal/Dialogs',
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
