import * as React from 'react';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from '../_common_/types';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import { action } from '@/utils/action';

export const disabledRow = () => {
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
      disabled: true,
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
      disabled: true,
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      lastRun: 'Yesterday 4:26 PM',
      name: 'Risk Analysis',
      type: 'Batch Execution',
      status: 'Completed',
      statusType: 'Done',
      className: 'Executed',
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      lastRun: 'Yesterday 7:34 AM',
      name: 'Quality',
      type: 'Test Function',
      status: 'Failed',
      statusType: 'Error',
      errorCode: 2204,
      className: 'File not found',
      errorMessage: 'Cannot fetch files',
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

  return (
    <Card className="overflow-hidden">
      <Table
        loaderSchema={loaderSchema}
        size="compressed"
        showMenu={false}
        separator={false}
        data={data}
        schema={schema}
        withHeader={true}
        withCheckbox={true}
        headerOptions={{
          withSearch: true,
        }}
        onSearch={(currData, searchTerm) => {
          return currData.filter((record) => record.name.toLowerCase().match(searchTerm.toLowerCase()));
        }}
        withPagination={false}
        onSelect={(rowIndex, selected, selectedList, selectAll) =>
          action(
            `on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(
              selectedList
            )} selectAll: ${selectAll}`
          )()
        }
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
      errorMessage: "Cannot fetch files",
      disabled: true,
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
      disabled: true,
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      lastRun: 'Yesterday 4:26 PM',
      name: 'Risk Analysis',
      type: 'Batch Execution',
      status: 'Completed',
      statusType: 'Done',
      className: 'Executed',
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      lastRun: 'Yesterday 7:34 AM',
      name: 'Quality',
      type: 'Test Function',
      status: 'Failed',
      statusType: 'Error',
      errorCode: 2204,
      className: 'File not found',
      errorMessage: 'Cannot fetch files',
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

  return (
      <Card className="overflow-hidden">
        <Table
          showMenu={false}
          size="compressed"
          separator={false}
          data={data}
          schema={schema}
          withHeader={true}
          withCheckbox={true}
          headerOptions={{
            withSearch: true
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(record =>
              record.name.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          onSelect={(rowIndex, selected, selectedList, selectAll) =>
            console.log(\`on-select:- rowIndex: \${rowIndex} selected: \${selected} selectedList: \${JSON.stringify(selectedList)} selectAll: \${selectAll}\`)
          }
          withPagination={false}
        />
      </Card>
  );
}`;

export default {
  title: 'Components/Table/States/Disabled Row',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Disabled Row In Table',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
