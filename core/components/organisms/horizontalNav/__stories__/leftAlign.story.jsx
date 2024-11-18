import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, Button, HorizontalNav, Select, Label, Heading } from '@/index';

export const leftAligned = () => {
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

  const [open, setOpen] = React.useState(false);
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

  const subHeading = <HorizontalNav menus={data} active={active} onClick={onClickHandler} className="ml-5 mt-4" />;

  const header = (
    <div>
      <Heading className="ml-7 mb-3">Medication</Heading>
      {subHeading}
    </div>
  );

  return (
    <div>
      <Button
        appearance="primary"
        className="mt-3"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        open={open}
        dimension="large"
        onClose={onClose}
        header={header}
        footer={
          <>
            <Button appearance="basic">Discard</Button>
            <Button appearance="primary" className="ml-4">
              Create
            </Button>
          </>
        }
      >
        <div className="py-5 w-50">
          <Label withInput={true} required={true}>
            Type
          </Label>
          <Select triggerOptions={{ withClearButton: false }} width="100%">
            <Select.List>
              {options.map((item, key) => {
                return (
                  <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select.List>
          </Select>
          <Label withInput={true} className="mt-6">
            Active Date
          </Label>
          <Select triggerOptions={{ withClearButton: false }} width="100%">
            <Select.List>
              {options.map((item, key) => {
                return (
                  <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select.List>
          </Select>
          <Label withInput={true} className="mt-6" required={true}>
            Diagnosis Diseases
          </Label>
          <Select triggerOptions={{ withClearButton: false }} width="100%">
            <Select.List>
              {options.map((item, key) => {
                return (
                  <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select.List>
          </Select>
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

  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'medicine'
  });

  const onClose = () => {
    setOpen(!open);
  };

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const subHeading = (
    <HorizontalNav
      menus={data}
      active={active}
      onClick={onClickHandler}
      className="ml-5 mt-4"
    />
  );

  const header = (
    <div>
      <Heading className="ml-7 mb-3">Medication</Heading>
      {subHeading}
    </div>
  );

  return (
    <div>
      <Button appearance="primary" className="mt-3" onClick={() => { setOpen(true) }}>Open Modal</Button>
      <Modal
        open={open}
        dimension="large"
        onClose={onClose}
        header={header}
        footer={(
          <>
            <Button appearance="basic">Discard</Button>
            <Button appearance="primary" className="ml-4">Create</Button>
          </>
        )}
        
      >
        <div className="py-5 w-50">
          <Label withInput={true} required={true}>Type</Label>
          <Select triggerOptions={{ withClearButton: false }} width="100%">
            <Select.List>
              {options.map((item, key) => {
                return (
                  <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select.List>
          </Select>
          <Label withInput={true} className="mt-6">Active Date</Label>
          <Select triggerOptions={{ withClearButton: false }} width="100%">
            <Select.List>
              {options.map((item, key) => {
                return (
                  <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select.List>
          </Select>
          <Label withInput={true} className="mt-6" required={true}>Diagnosis Diseases</Label>
            <Select triggerOptions={{ withClearButton: false }} width="100%">
            <Select.List>
              {options.map((item, key) => {
                return (
                  <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select.List>
          </Select>
        </div>
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/HorizontalNav/Left Aligned',
  component: HorizontalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Horizontal Nav inside a Standard Modal',
        noHtml: true,
      },
    },
  },
};
