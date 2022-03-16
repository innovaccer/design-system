import * as React from 'react';
import { Card, Table, CardSubdued, Text } from '@/index';
import { AsyncTable, SyncTable } from './_common_/types';
import { TableProps } from '@/index.type';

export const nestedTableWithNestedCards = () => {
  const data = [
    {
      firstName: 'Brooke',
      lastName: 'Heeran',
      lastRun: 'Yesterday 3:14 PM',
      name: 'Risk Analysis',
      type: 'Batch Execution',
      status: 'Failed',
      statusType: 'Error',
      errorCode: 2204,
      className: 'File not found',
      errorMessage: 'Cannot fetch files',
    },
    {
      firstName: 'Frazer',
      lastName: 'Cathro',
      lastRun: 'Yesterday 11:15 AM',
      name: 'Quality',
      type: 'Batch Execution',
      status: 'Completed',
      statusType: 'Done',
      className: 'Executed',
    },
    {
      firstName: 'Lemmie',
      lastName: 'Ciric',
      lastRun: 'Yesterday 9:17 PM',
      name: 'Claims',
      type: 'Test Function',
      status: 'Completed',
      statusType: 'Done',
      className: 'Executed',
    },
  ];

  const schema: TableProps['schema'] = [
    {
      name: 'lastRun',
      displayName: 'Last Run',
      width: '25%',
    },
    {
      name: 'name',
      displayName: 'Name',
      width: '15%',
    },
    {
      name: 'type',
      displayName: 'Type',
      width: '20%',
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      cellType: 'STATUS_HINT',
      translate: (a) => ({
        title: a.status,
        statusAppearance: a.status === 'Failed' ? 'alert' : 'success',
      }),
      filters: [
        { label: 'Failed', value: 'failed' },
        { label: 'Completed', value: 'completed' },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.status.toLowerCase() === filter) return true;
        }
        return false;
      },
    },
    {
      name: 'user',
      displayName: 'User',
      width: '20%',
      translate: (a) => ({
        title: `${a.lastName}, ${a.firstName}`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
  ];

  const nestedRowRenderer = (props) => (
    <CardSubdued className="ml-7 mb-4 mt-3 mr-4">
      <div className="d-flex flex-row">
        <div style={{ width: '17%' }}>
          <Text weight="medium">Type</Text>
        </div>
        <Text>{props.data.type}</Text>
      </div>
      {props.data.errorCode && (
        <div className="d-flex flex-row">
          <div style={{ width: '17%' }}>
            <Text weight="medium">Error code</Text>
          </div>
          <Text>{props.data.errorCode}</Text>
        </div>
      )}
      <div className="d-flex flex-row">
        <div style={{ width: '17%' }}>
          <Text weight="medium">Class name</Text>
        </div>
        <Text>{props.data.className}</Text>
      </div>
      {props.data.errorMessage && (
        <div className="d-flex flex-row">
          <div style={{ width: '17%' }}>
            <Text weight="medium">Error message</Text>
          </div>
          <Text>{props.data.errorMessage}</Text>
        </div>
      )}
    </CardSubdued>
  );

  return (
    <Card>
      <Table
        data={data}
        schema={schema}
        withHeader={true}
        headerOptions={{
          withSearch: true,
          dynamicColumn: false,
        }}
        separator={false}
        showMenu={false}
        nestedRows={true}
        filterPosition="HEADER"
        nestedRowRenderer={nestedRowRenderer}
        filterList={{
          status: ['failed', 'completed'],
        }}
      />
    </Card>
  );
};

const customCode = `() => {
  const data = [
    {
      "firstName": "Brooke",
      "lastName": "Heeran",
      lastRun: "Yesterday 3:14 PM",
      "name": "Risk Analysis",
      "type": "Batch Execution",
      status: "Failed",
      statusType: "Error",
      errorCode: 2204,
      className: "File not found",
      errorMessage: "Cannot fetch files"

    },
    {
      "firstName": "Frazer",
      "lastName": "Cathro",
      lastRun: "Yesterday 11:15 AM",
      "name": "Quality",
      "type": "Batch Execution",
      status: "Completed",
      statusType: "Done",
      className: "Executed",
    },
    {
      "firstName": "Lemmie",
      "lastName": "Ciric",
      lastRun: "Yesterday 9:17 PM",
      "name": "Claims",
      "type": "Test Function",
      status: "Completed",
      statusType: "Done",
      className: "Executed",
    },
  ];

  const schema = [
    {
      name: 'lastRun',
      displayName: 'Last Run',
      width: '25%',
    },
    {
      name: 'name',
      displayName: 'Name',
      width: '15%',
    },
    {
      name: 'type',
      displayName: 'Type',
      width: '20%',
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      cellType: 'STATUS_HINT',
      translate: a => ({
        title: a.status,
        statusAppearance: (a.status === 'Failed') ? 'alert' : 'success'
      }),
      filters: [
        { label: 'Failed', value: 'failed' },
        { label: 'Completed', value: 'completed' },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.status.toLowerCase() === filter) return true;
        }
        return false;
      },
    },
    {
      name: 'user',
      displayName: 'User',
      width: '20%',
      translate: a => ({
        title: \`\${a.lastName}, \${a.firstName}\`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
  ];

  const nestedRowRenderer = (props) => {
    const {
      data,
      rowIndex
    } = props;
    if(rowIndex % 2){
      return false;
    }
    return (
      <CardSubdued className="ml-7 mb-4 mt-3 mr-4">
        <div className="d-flex flex-row">
          <div style={{ width: '17%' }}>
            <Text weight="medium">Type</Text>
          </div>
          <Text>{data.type}</Text>
        </div>
        {data.errorCode && (
          <div className="d-flex flex-row">
            <div style={{ width: '17%' }}>
              <Text weight="medium">Error code</Text>
            </div>
            <Text>{data.errorCode}</Text>
          </div>
        )}
        <div className="d-flex flex-row">
          <div style={{ width: '17%' }}>
            <Text weight="medium">Class name</Text>
          </div>
          <Text>{data.className}</Text>
        </div>
        {data.errorMessage && (
          <div className="d-flex flex-row">
            <div style={{ width: '17%' }}>
              <Text weight="medium">Error message</Text>
            </div>
            <Text>{data.errorMessage}</Text>
          </div>
        )}
      </CardSubdued>
    );
  }

  return (
    <Card>
      <Table
        data={data}
        schema={schema}
        withHeader={true}
        headerOptions={{
          withSearch: true,
          dynamicColumn: false
        }}
        separator={false}
        showMenu={false}
        nestedRows={true}
        filterPosition="HEADER"
        nestedRowRenderer={nestedRowRenderer}
        filterList={{
          status: ['failed', 'completed']
        }}
      />
    </Card>
  );
}`;

export default {
  title: 'Components/Table/Nested Table With Nested Cards',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Nested Table With Nested Cards',
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead'],
        },
      },
    },
  },
};
