import * as React from 'react';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';
import data from '@/components/organisms/grid/__stories__/_common_/nestedData.ts';
import { action } from '@/utils/action';

// CSF format story
export const withNestedRows = () => {
  const schema = [
    {
      name: 'id',
      displayName: 'Case and Patients',
      width: '25%',
    },
    {
      name: '',
      displayName: 'Address',
      width: '20%',
    },
    {
      name: '',
      displayName: 'Programs',
      width: '15%',
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '15%',
      cellType: 'STATUS_HINT',
      translate: (a) => ({
        title: a.status,
        statusAppearance: a.status === 'Enrolled' ? 'warning' : a.status === 'Completed' ? 'success' : 'alert',
      }),
    },
    {
      name: '',
      width: '25%',
      displayName: 'Referred on',
    },
  ];

  const nestedRowRenderer = (props) => {
    const { data, loading } = props;

    const nestedRowSchema = [
      {
        name: '',
        cellType: 'WITH_META_LIST',
        width: '25%',
        translate: (a) => ({
          title: a.name,
          metaList: [`${a.dob} (${a.age}), ${a.gender}`],
        }),
      },
      {
        name: 'address',
        cellType: 'DEFAULT',
        width: '20%',
      },
      {
        name: 'program',
        cellType: 'DEFAULT',
        width: '15%',
        translate: (a) => ({
          title: a.program,
        }),
      },
      {
        name: 'status',
        displayName: 'Status',
        width: '15%',
        cellType: 'STATUS_HINT',
        translate: (a) => ({
          title: a.status,
          statusAppearance: a.status === 'Enrolled' ? 'warning' : a.status === 'Completed' ? 'success' : 'alert',
        }),
      },
      {
        name: 'referredOn',
        width: '25%',
        displayName: 'Referred on',
      },
    ];

    return <Table loading={loading} showHead={false} schema={nestedRowSchema} data={data.patientList} />;
  };

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={nestedRowRenderer}
          onRowClick={(rowData, rowIndex) =>
            action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()
          }
        />
      </Card>
    </div>
  );
};

const customCode = `
() => {
  const data = ${JSON.stringify(data.slice(0, 10), null, 4)};

  const schema = [
    {
      name: 'id',
      displayName: 'Case and Patients',
      width: '25%',
    },
    {
      name: '',
      displayName: 'Address',
      width: '20%',
    },
    {
      name: '',
      displayName: 'Programs',
      width: '15%',
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '15%',
      cellType: 'STATUS_HINT',
      translate: (a) => ({
        title: a.status,
        statusAppearance: a.status === 'Enrolled' ? 'warning' : a.status === 'Completed' ? 'success' : 'alert',
      }),
    },
    {
      name: '',
      width: '25%',
      displayName: 'Referred on',
    },
  ];

  const nestedRowRenderer = (props) => {
    const { data, loading } = props;

    const nestedRowSchema = [
      {
        name: '',
        cellType: 'WITH_META_LIST',
        width: '25%',
        translate: (a) => ({
          title: a.name,
          metaList: [\`\${ a.dob } (\${ a.age }), \${ a.gender } \`],
        }),
      },
      {
        name: 'address',
        cellType: 'DEFAULT',
        width: '20%',
      },
      {
        name: 'program',
        cellType: 'DEFAULT',
        width: '15%',
        translate: (a) => ({
          title: a.program,
        }),
      },
      {
        name: 'status',
        displayName: 'Status',
        width: '15%',
        cellType: 'STATUS_HINT',
        translate: (a) => ({
          title: a.status,
          statusAppearance: a.status === 'Enrolled' ? 'warning' : a.status === 'Completed' ? 'success' : 'alert',
        }),
      },
      {
        name: 'referredOn',
        width: '25%',
        displayName: 'Referred on',
      },
    ];

    return (
      <Table loading={loading} showHead={false} schema={nestedRowSchema} data={data.patientList} />
    );
  };

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={nestedRowRenderer}
        />
      </Card>
    </div>
  );
  
  
};
`;

export default {
  title: 'Components/Table/Nesting/With Nested Rows',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Nested Table With Nested Rows',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
