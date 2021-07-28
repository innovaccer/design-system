import * as React from 'react';
import { Button, Paragraph, Text, Card, FullscreenModal, Input, Label } from '@/index';
import { List, TableProps } from '@/index.type';

export const twoStepsWorkflow = () => {
  const [open, setOpen] = React.useState(true);
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
      heading: 'Name the care Plan',
      backButton: true,
      backButtonCallback: () => setPage(0)
    }
    );
  };

  const data = [{ name:'Cultural and language barriers', icon: 'cancel' }, { name:'Patient does not show Emotion', icon: 'cancel' }];

  const schema: TableProps['schema'] = [
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

      <Button type="button" appearance="primary" onClick={openModal}>
        Open modal
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
                <Button type="button">
                  Cancel
                </Button>
                <Button type="button" appearance="primary" onClick={() => setPage(1)} className="ml-4">
                  Continue
                </Button>
              </>
            )}
            {page === 1 && (
            <>
                <Button type="button">
                  Cancel
                </Button>
                <Button type="button" appearance="primary" className="ml-4">
                  Continue
                </Button>
              </>
            )}
          </>
        )}

      >
        {page === 0 && (
          <>
            <Text weight="strong" size="regular">Identify patient needs</Text><br/>
            <Text  size="small">Identify the patient needs to create a care plan for the patient</Text>
            <Input placeholder="Add patient needs" size="tiny" className="my-5"/>
            <Text weight="strong" size="regular">2 Selected</Text><br/>
            <Card className="w-100" shadow="none">
              <List
                data={data}
                schema={schema}
                size="tight"
              />
            </Card>
          </>
        )}
        {page === 1 && (
          <>
            <Text size="small">Give a meaningful and easy to understand name to the care plan.</Text><br/>
            <Label required={true} className="mt-5">Name</Label>
            <Input placeholder="Name" size="tiny" className="mt-2"/>
          </>
        )}
      </FullscreenModal>
    </div>
  );
};

const customCode = `
() => {
  const [open, setOpen] = React.useState(true);
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
      heading: 'Name the care Plan',
      backButton: true,
      backButtonCallback: () => setPage(0)
    }
    );
  };

  const data = [{ name:'Cultural and language barriers', icon: 'cancel' }, { name:'Patient does not show Emotion', icon: 'cancel' }];

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

      <Button type="button" appearance="primary" onClick={openModal}>
        Open modal
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
                <Button type="button">
                  Cancel
                </Button>
                <Button type="button" appearance="primary" onClick={() => setPage(1)} className="ml-4">
                  Continue
                </Button>
              </>
            )}
            {page === 1 && (
            <>
                <Button type="button">
                  Cancel
                </Button>
                <Button type="button" appearance="primary" className="ml-4">
                  Continue
                </Button>
              </>
            )}
          </>
        )}

      >
        {page === 0 && (
          <>
            <Text weight="strong" size="regular">Identify patient needs</Text><br/>
            <Text  size="small">Identify the patient needs to create a care plan for the patient</Text>
            <Input placeholder="Add patient needs" size="tiny" className="my-5"/>
            <Text weight="strong" size="regular">2 Selected</Text><br/>
            <Card className="w-100" shadow="none">
              <List
                data={data}
                schema={schema}
                size="tight"
              />
            </Card>
          </>
        )}
        {page === 1 && (
          <>
            <Text size="small">Give a meaningful and easy to understand name to the care plan.</Text><br/>
            <Label required={true} className="mt-5">Name</Label>
            <Input placeholder="Name" size="tiny" className="mt-2"/>
          </>
        )}
      </FullscreenModal>
    </div>
  );
}`;

export default {
  title: 'Components/FullscreenModal/Two Steps Workflow',
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
