import * as React from 'react';
import { Button, Text, Card, FullscreenModal, Input, Label } from '@/index';
import { List } from '@/index.type';

export const twoStepsWorkflow = () => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  const headerOptions = () => {
    if (page === 0) {
      return {
        heading: 'New Care Plan',
      };
    }
    return {
      heading: 'Name the care plan',
      backButton: true,
      backButtonCallback: () => setPage(0),
    };
  };

  const data = [
    { name: 'Cultural and language barriers', icon: 'close' },
    { name: 'Patient does not show emotion', icon: 'close' },
  ];

  const schema = [
    {
      name: 'name',
      displayName: 'name',
      width: '80%',
    },
    {
      name: 'icon',
      displayName: 'icon',
      width: '20%',
      minWidth: '10',
      cellType: 'ICON',
      align: 'right',
    },
  ];

  return (
    <div>
      <Button appearance="primary" onClick={openModal}>
        Open Full screen modal
      </Button>

      <FullscreenModal
        open={open}
        dimension="medium"
        onClose={onClose}
        headerOptions={headerOptions()}
        footer={
          <>
            {page === 0 && (
              <>
                <Button>Cancel</Button>
                <Button appearance="primary" onClick={() => setPage(1)} className="ml-4">
                  Continue
                </Button>
              </>
            )}
            {page === 1 && (
              <>
                <Button>Cancel</Button>
                <Button appearance="primary" className="ml-4">
                  Submit
                </Button>
              </>
            )}
          </>
        }
      >
        {page === 0 && (
          <div>
            <Text weight="strong" size="regular">
              Identify patient needs
            </Text>
            <br />
            <Text size="small">Identify the patient needs to create a care plan for the patient</Text>
            <Input placeholder="Add patient needs" size="regular" className="my-5" />
            <Label withInput={true}>2 selected</Label>
            <br />
            <Card className="w-100 " shadow="none">
              <List data={data} schema={schema} size="tight" />
            </Card>
          </div>
        )}
        {page === 1 && (
          <div>
            <Text size="regular">Give a meaningful and easy to understand name to the care plan.</Text>
            <br />
            <Label required={true} className="mt-5">
              Name
            </Label>
            <Input placeholder="Name" size="regular" className="mt-2" />
          </div>
        )}
      </FullscreenModal>
    </div>
  );
};

const customCode = `
() => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const onClose = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  const headerOptions = () => {
    if (page === 0) {
      return(
      {
        heading:'New Care Plan',
      }
      );
    }
    return(
    {
      heading: 'Name the care plan',
      backButton: true,
      backButtonCallback: () => setPage(0)
    }
    );
  };

  const data = [{ name:'Cultural and language barriers', icon: 'close' }, { name:'Patient does not show emotion', icon: 'close' }];

  const schema = [
    {
      name: 'name',
      displayName: 'name',
      width: '80%',
    },
    {
      name: 'icon',
      displayName: 'icon',
      width: '20%',
      minWidth:'10',
      cellType:'ICON',
      align:'right'
    },
  ];

  return (
    <div>
      <Button appearance="primary" onClick={openModal}>
        Open Full screen modal
      </Button>

      <FullscreenModal
        open={open}
        dimension="medium"
        onClose={onClose}
        headerOptions={headerOptions()}
        footer={(
          <>
            {page === 0 && (
              <>
                <Button>
                  Cancel
                </Button>
                <Button appearance="primary" onClick={() => setPage(1)} className="ml-4">
                  Continue
                </Button>
              </>
            )}
            {page === 1 && (
            <>
                <Button>
                  Cancel
                </Button>
                <Button appearance="primary" className="ml-4">
                  Submit
                </Button>
              </>
            )}
          </>
        )}

      >
        {page === 0 && (
          <div>
            <Text weight="strong" size="regular">Identify patient needs</Text><br/>
            <Text  size="small">Identify the patient needs to create a care plan for the patient</Text>
            <Input placeholder="Add patient needs" size="regular" className="my-5"/>
            <Label withInput={true}>2 selected</Label>
            <Card className="w-100" shadow="none">
              <List
                data={data}
                schema={schema}
                size="tight"
              />
            </Card>          
          </div>
        )}
        {page === 1 && (
          <div>
            <Text size="regular">Give a meaningful and easy to understand name to the care plan.</Text><br/>
            <Label required={true} className="mt-5">Name</Label>
            <Input placeholder="Name" size="regular" className="mt-2"/>
          </div>
        )}
      </FullscreenModal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/FullscreenModal/Two Steps Workflow',
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
