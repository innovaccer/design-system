import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, Button, Paragraph, HorizontalNav, Dropdown, Label } from '@/index';

export const leftAlignedNavigationTabs = () => {
  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
    });
  }

  const data = [
    {
      name: 'medicine',
      label: 'Medicine',
    },
    {
      name: 'period',
      label: 'Period',
    },
    {
      name: 'alias',
      label: 'Alias',
    },
    {
      name: 'priority',
      label: 'Priority',
    },
  ];

  const [open, setOpen] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'medicine',
  });

  const onClose = () => {
    setOpen(!open);
  };

  const onClickHandler = (menu) => {
    action(`menu-clicked: ${JSON.stringify(menu)}`)();
    setActive(menu);
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
      <Button
        appearance="primary"
        className="mt-3"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </Button>
      <Modal
        open={open}
        dimension="large"
        onClose={onClose}
        headerOptions={{
          heading: 'Medication',
        }}
        footer={
          <>
            <Button appearance="basic">Discard</Button>
            <Button appearance="primary" className="ml-4">
              Create
            </Button>
          </>
        }
      >
        <div className="pb-4" style={{ borderBottom: 'var(--border)' }}>
          <HorizontalNav menus={data} active={active} onClick={onClickHandler} />
        </div>
        <div className="pt-5 w-50">
          <Label withInput={true} required={true}>
            Type
          </Label>
          <Dropdown options={options} />
          <Label withInput={true} className="mt-6">
            Active Date
          </Label>
          <Dropdown options={options} />
          <Label withInput={true} className="mt-6" required={true}>
            Diagnosis Diseases
          </Label>
          <Dropdown options={options} />
        </div>
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
    });
  }

  const data = [
    {
      name: 'medicine',
      label: 'Medicine',
    },
    {
      name: 'period',
      label: 'Period',
    },
    {
      name: 'alias',
      label: 'Alias',
    },
    {
      name: 'priority',
      label: 'Priority',
    },
  ];

  const [open, setOpen] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'medicine'
  });

  const onClose = () => {
    setOpen(!open);
  };

  const onClickHandler = (menu) => {
    setActive(menu);
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
      <Button appearance="primary" className="mt-3" onClick={() => { setOpen(true) }}>Open</Button>
      <Modal
        open={open}
        dimension="large"
        onClose={onClose}
        headerOptions={{
          heading: 'Medication',
        }}
        footer={(
          <>
            <Button appearance="basic">Discard</Button>
            <Button appearance="primary" className="ml-4">Create</Button>
          </>
        )}
      >
        <div className="pb-4" style={{ borderBottom: 'var(--border)' }}>
          <HorizontalNav
            menus={data}
            active={active}
            onClick={onClickHandler}
          />
        </div>
        <div className="pt-5 w-50">
          <Label withInput={true} required={true}>Type</Label>
          <Dropdown
            options={options}
          />
          <Label withInput={true} className="mt-6">Active Date</Label>
          <Dropdown
            options={options}
          />
          <Label withInput={true} className="mt-6" required={true}>Diagnosis Diseases</Label>
          <Dropdown
            options={options}
          />
        </div>
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/HorizontalNav/Left Aligned Navigation Tabs',
  component: HorizontalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
        noHtml: true,
      },
    },
  },
};
