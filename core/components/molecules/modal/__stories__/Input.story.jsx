import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, Button, Paragraph, Navigation, Heading, Label, Dropdown } from '@/index';

export const inputModals = () => {
  const [open, setOpen] = React.useState(true);
  const backdropClose = false;

  const onClose = () => {
    setOpen(!open);
  };

  const options = [
    {
      label: 'Option1',
      value: 'Option1',
    },
    {
      label: 'Option2',
      value: 'Option2',
    },
  ];

  const data = [
    {
      label: 'Medicine',
      name: 'Tab1',
    },
    {
      label: 'Period',
      name: 'Tab2',
    },
    {
      label: 'Alias',
      name: 'Tab3',
    },
    {
      label: 'Priority',
      name: 'Tab4',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'Tab1',
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const subHeading = (
    <Navigation align="left" menus={data} active={active} onClick={onClickHandler} className="ml-5 mt-4" />
  );

  const header = (
    <div>
      <Heading className="ml-7 mb-3">Medication</Heading>
      {subHeading}
    </div>
  );

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
        dimension="large"
        backdropClose={backdropClose}
        onClose={onClose}
        header={header}
        footer={
          <>
            <Button appearance="basic" onClick={action('Cancel button click')}>
              Discard
            </Button>
            <Button appearance="primary" className="ml-4" onClick={action('Discard button click')}>
              Create operand
            </Button>
          </>
        }
        seperator={true}
      >
        <div className="my-5">
          <Label withInput={true} required={true}>
            Type
          </Label>
          <Dropdown options={options} className="w-50" />
          <Label withInput={true} className="mt-5">
            Active Date
          </Label>
          <Dropdown options={options} className="w-50" />
          <div className="d-flex pb-4">
            <div className="d-block w-75">
              <Label withInput={true} required={true} className="mt-5">
                Diagnosis Diseases
              </Label>
              <Dropdown options={options} />
            </div>
            <div className="ml-5 d-block w-25">
              <Label withInput={true} required={true} className="mt-5">
                Version
              </Label>
              <Dropdown options={options} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(true);
  const backdropClose =false;

  const onClose = () => {
    setOpen(!open);
    console.log('on close triggered')();
  };

  const options = [
    {
      label: 'Option1',
      value: 'Option1',
    },
    {
      label: 'Option2',
      value: 'Option2',
    }
  ];

  const data = [
    {
      label: 'Medicine',
      name: 'Tab1'
    },
    {
      label: 'Period',
      name: 'Tab2'
    },
    {
      label: 'Alias',
      name: 'Tab3'
    },
    {
      label: 'Priority',
      name: 'Tab4'
    }
  ];

  const [active, setActive] = React.useState({
    name: 'Tab1'
  });

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const subHeading = (
    <Navigation
      align="left"
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
      <Modal
        open={open}
        dimension="large"
        backdropClose={backdropClose}
        onClose={onClose}
        header={header}
        footer={(
          <>
            <Button appearance="basic" onClick={console.log('Cancel button click')}>Discard</Button>
            <Button appearance="primary" className="ml-4" onClick={console.log('Discard button click')}>
                Create operand
            </Button>
          </>
        )}
        seperator={true}
      >
        <div className="my-5">
          <Label withInput={true} required={true}>Type</Label>
          <Dropdown
              options={options}
              className="w-50"
          />
          <Label withInput={true} className="mt-5">Active Date</Label>
          <Dropdown
              options={options}
              className="w-50"
          />
          <div className="d-flex pb-4">
            <div className="d-block w-75">
              <Label withInput={true} required={true} className="mt-5">Diagnosis Diseases</Label>
              <Dropdown
                  options={options}
              />
            </div>
            <div className="ml-5 d-block w-25">
              <Label withInput={true} required={true} className="mt-5">Version</Label>
              <Dropdown
                  options={options}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/Input Modals',
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
