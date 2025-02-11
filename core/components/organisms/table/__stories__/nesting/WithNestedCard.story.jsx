import * as React from 'react';
import { Card, Table, CardSubdued, Text, Column, Row, Button } from '@/index';
import { AsyncTable, SyncTable } from '../_common_/types';
import { action } from '@/utils/action';

export const withNestedCards = () => {
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

  const nestedRowRenderer = (props) => (
    <CardSubdued className="mb-4 mt-3 mr-4 ml-9">
      <Row>
        <Column size={2}>
          <Text weight="medium">Type</Text> <br />
          <Text weight="medium">Error code</Text> <br />
          <Text weight="medium">Class name</Text> <br />
          <Text weight="medium">Error message</Text>
        </Column>
        <Column>
          <Text>{props.data.type}</Text> <br />
          <Text>{props.data.errorCode}</Text> <br />
          <Text>{props.data.className}</Text> <br />
          <Text>{props.data.errorMessage}</Text>
        </Column>
      </Row>
    </CardSubdued>
  );

  const onDataExport = (data) => {
    action('Exporting data', data)();
  };

  const globalActionTrigger = (data) => {
    return (
      <div className="d-flex">
        <Button onClick={() => onDataExport(data)}>Export</Button>
        <Button className="ml-4" appearance="primary" onClick={() => onDataExport(data)}>
          Add to simulation
        </Button>
      </div>
    );
  };

  return (
    <Card className="overflow-hidden">
      <Table
        data={data}
        schema={schema}
        withHeader={true}
        headerOptions={{
          withSearch: true,
          dynamicColumn: false,
          globalActionRenderer: globalActionTrigger,
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
      errorMessage: "Cannot fetch files",
      _expandNestedRow: true,
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
      _expandNestedRow: true,
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

  const onDataExport = (data) => {
    console.log('Exporting data', data);
  };

  const globalActionTrigger = (data) => {
    return (
      <div className="d-flex">
        <Button onClick={() => onDataExport(data)}>Export</Button>
        <Button className="ml-4" appearance="primary" onClick={() => onDataExport(data)}>
          Add to simulation
        </Button>
      </div>
    );
  };

  const nestedRowRenderer = (props) => {
    const {
      data,
      rowIndex
    } = props;
    if(rowIndex % 2){
      return false;
    }
    return (
      <CardSubdued className="mb-4 mt-3 mr-4 ml-9">
        <Row>
          <Column size={2}>
            <Text weight="medium">Type</Text> <br />
            <Text weight="medium">Error code</Text> <br />
            <Text weight="medium">Class name</Text> <br />
            <Text weight="medium">Error message</Text>
          </Column>
          <Column>
            <Text>{props.data.type}</Text> <br />
            <Text>{props.data.errorCode}</Text> <br />
            <Text>{props.data.className}</Text> <br />
            <Text>{props.data.errorMessage}</Text>
          </Column>
        </Row>
      </CardSubdued>
    );
  }

  return (
    <Card className="overflow-hidden">
      <Table
        data={data}
        schema={schema}
        withHeader={true}
        headerOptions={{
          withSearch: true,
          dynamicColumn: false,
          globalActionRenderer : globalActionTrigger
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
  title: 'Components/Table/Nesting/With Nested Cards',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Nested Table With Nested Cards',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
