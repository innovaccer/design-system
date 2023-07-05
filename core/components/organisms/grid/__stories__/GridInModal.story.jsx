import * as React from 'react';
import { Button, Modal, Grid, Text, GridCell } from '@/index';

export const Grid_In_Modal = () => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;

  const onClose = () => {
    setOpen(!open);
  };

  const gridData = [
    {
      fullname: 'Wadsworth Seden',
      gender: 'Male',
    },
    {
      fullname: 'Jakie Hapke',
      gender: 'Male',
    },
    {
      fullname: 'Louella Veneur',
      gender: 'Female',
    },
  ];

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        dimension="large"
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Patients',
        }}
        footer={
          <React.Fragment>
            <Button>Cancel</Button>
            <Button className="ml-4">Next</Button>
          </React.Fragment>
        }
        seperator={true}
      >
        <Grid
          data-test="modal-in-grid"
          totalRecords={5}
          pageSize={5}
          schema={[
            {
              name: 'fullName',
              displayName: 'Name',
              width: '50%',
              cellRenderer: ({ data }) => {
                return (
                  <div className="w-100">
                    <Text className="d-block">{data.fullname}</Text>
                    <Text className="d-block" size="small" appearance="subtle">
                      {data.fullname}
                    </Text>
                  </div>
                );
              },
            },
            {
              name: 'gender',
              displayName: 'Gender',
              width: '50%',
              cellRenderer: ({ data }) => {
                return (
                  <div className="w-100">
                    <Text className="d-block">{data.gender}</Text>
                    <Text className="d-block" size="small" appearance="subtle">
                      {data.gender}
                    </Text>
                  </div>
                );
              },
            },
          ]}
          data={gridData}
          showHead={true}
          showMenu={false}
          loading={false}
        />
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;
  const onClose = () => {
    setOpen(!open);
  };
  const gridData = [
    {
      fullname: 'Wadsworth Seden',
      gender: 'Male',
    },
    {
      fullname: 'Jakie Hapke',
      gender: 'Male',
    },
    {
      fullname: 'Louella Veneur',
      gender: 'Female',
    },
  ];
  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        dimension="large"
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Patients',
        }}
        footer={
          <React.Fragment>
            <Button>Cancel</Button>
            <Button className="ml-4">Next</Button>
          </React.Fragment>
        }
        seperator={true}
      >
        <Grid
          data-test="modal-in-grid"
          totalRecords={5}
          pageSize={5}
          schema={[
            {
              name: 'fullName',
              displayName: 'Name',
              width: '50%',
              cellRenderer: ({ data }) => {
                return (
                  <div className="w-100">
                    <Text className="d-block">{data.fullname}</Text>
                    <Text className="d-block" size="small" appearance="subtle">
                      {data.fullname}
                    </Text>
                  </div>
                );
              },
            },
            {
              name: 'gender',
              displayName: 'Gender',
              width: '50%',
              cellRenderer: ({ data }) => {
                return (
                  <div className="w-100">
                    <Text className="d-block">{data.gender}</Text>
                    <Text className="d-block" size="small" appearance="subtle">
                      {data.gender}
                    </Text>
                  </div>
                );
              },
            },
          ]}
          data={gridData}
          showHead={true}
          showMenu={false}
          loading={false}
        />
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/Grid/Grid In Modal',
  component: Grid,
  subcomponents: { GridCell },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Grid In Modal',
        noHtml: true,
      },
    },
  },
};
