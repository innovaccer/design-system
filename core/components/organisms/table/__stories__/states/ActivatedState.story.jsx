import * as React from 'react';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import { Card, Table, Menu, Avatar, Text, Listbox, Heading, Divider } from '@/index';
import { AsyncTable, SyncTable } from '../_common_/types';
import { action } from '@/utils/action';

const data = [
  {
    name: 'Asthma Outreach',
    firstName: 'Brooke',
    lastName: 'Heeran',
    status: 'In Progress',
    lastUpdated: 'June 20, 2020',
    recipients: 11846,
    _activated: true,
  },
  {
    firstName: 'Frazer',
    lastName: 'Cathro',
    status: 'Scheduled',
    lastUpdated: 'June 19, 2020',
    name: 'HbA1c Test due',
    recipients: 12846,
  },
  {
    firstName: 'Lemmie',
    name: 'ER Education',
    lastName: 'Ciric',
    status: 'Draft',
    lastUpdated: 'May 19, 2020',
    recipients: 118467,
  },
  {
    firstName: 'Randy',
    lastName: 'Boatwright',
    name: 'Flu Vaccination',
    status: 'Failed',
    lastUpdated: 'March 19, 2020',
    recipients: 10846,
  },
  {
    firstName: 'Rolando',
    lastName: 'Cyples',
    name: 'Well-child Visit',
    status: 'In Progress',
    lastUpdated: 'April 19, 2020',
    recipients: 11847,
  },
  {
    firstName: 'Lem',
    lastName: 'Males',
    name: 'Annual wellness Visit',
    status: 'In Progress',
    lastUpdated: 'June 16, 2020',
    recipients: 118100,
  },
  {
    firstName: 'Sayres',
    lastName: 'Adelberg',
    name: 'Flu Vaccination',
    status: 'Draft',
    lastUpdated: 'Dec 19, 2020',
    recipients: 11848,
  },
  {
    firstName: 'Murray',
    lastName: 'Bravington',
    name: 'Well-child Visit',
    status: 'Draft',
    lastUpdated: 'April 19, 2020',
    recipients: 11890,
  },
];

export const activatedState = () => {
  const [tableData, setTableData] = React.useState(data);
  const [selectedRow, setSelectedRow] = React.useState(data[0]);

  const handleRowClick = (rowData, rowIndex) => {
    const updatedData = tableData.map((row, index) => ({
      ...row,
      _activated: index === rowIndex,
    }));
    setTableData(updatedData);
    setSelectedRow(rowData);
  };

  const statusAppearance = {
    'In Progress': 'info',
    Scheduled: 'warning',
    Draft: 'default',
    Failed: 'alert',
  };

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '30%',
      cellType: 'WITH_META_LIST',
      translate: (a) => ({
        title: a.name,
        metaList: [`${a.recipients} recipients`],
      }),
      sorting: false,
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      cellType: 'STATUS_HINT',
      sorting: false,
      filters: [
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Scheduled', value: 'Scheduled' },
        { label: 'Draft', value: 'Draft' },
        { label: 'Failed', value: 'Failed' },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.status === filter) return true;
        }
        return false;
      },
      translate: (a) => {
        const status = a.status;
        return {
          title: status,
          statusAppearance: statusAppearance[status],
        };
      },
    },
    {
      name: 'lastUpdated',
      displayName: 'Last Updated on',
      width: '30%',
      sorting: false,
    },
    {
      name: 'user',
      displayName: '',
      sorting: false,
      width: '20%',
      cellRenderer: (props) => (
        <div className="d-flex align-items-center justify-content-end flex-grow-1">
          <Avatar firstName={props.data.firstName} lastName={props.data.lastName} />
          <div className="ml-6">
            <Menu trigger={<Menu.Trigger appearance="transparent" />}>
              <Menu.List>
                <Menu.Item>
                  <Text>Edit</Text>
                </Menu.Item>
                <Menu.Item>
                  <Text>Delete</Text>
                </Menu.Item>
              </Menu.List>
            </Menu>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-secondary-lightest p-6">
      <Card className="overflow-hidden mr-4 d-flex justify-content-between">
        <Table
          className="w-50"
          loaderSchema={loaderSchema}
          showMenu={false}
          type="resource"
          data={tableData}
          schema={schema}
          withHeader={true}
          withCheckbox={true}
          filterPosition="HEADER"
          filterList={{
            status: ['In Progress', 'Scheduled', 'Draft', 'Failed'],
          }}
          onRowClick={handleRowClick}
          headerOptions={{
            withSearch: true,
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(
              (d) =>
                d.firstName.toLowerCase().match(searchTerm.toLowerCase()) ||
                d.lastName.toLowerCase().match(searchTerm.toLowerCase()) ||
                d.name.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withPagination={true}
          paginationType="basic"
          pageSize={4}
          onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
        />

        <Divider vertical />

        <div className="w-50 pt-6">
          <div className="d-flex align-items-center justify-content-between mb-5 ml-5">
            <Heading size="s">{selectedRow?.name}</Heading>
          </div>
          <Divider />

          <Card className="mx-5 mt-6" shadow="none">
            <Listbox type="resource" size="standard" showDivider={true}>
              <Listbox.Item>
                <div className="d-flex align-items-center">
                  <Text weight="strong" className="mr-4">
                    Name:
                  </Text>
                  <Text>{selectedRow.name}</Text>
                </div>
              </Listbox.Item>
              <Listbox.Item>
                <div className="d-flex align-items-center">
                  <Text weight="strong" className="mr-4">
                    Status:
                  </Text>
                  <Text>{selectedRow.status}</Text>
                </div>
              </Listbox.Item>
              <Listbox.Item>
                <div className="d-flex align-items-center">
                  <Text weight="strong" className="mr-4">
                    Last Updated:
                  </Text>
                  <Text>{selectedRow.lastUpdated}</Text>
                </div>
              </Listbox.Item>
              <Listbox.Item>
                <div className="d-flex align-items-center">
                  <Text weight="strong" className="mr-4">
                    Recipients:
                  </Text>
                  <Text>{selectedRow.recipients}</Text>
                </div>
              </Listbox.Item>
            </Listbox>
          </Card>
        </div>
      </Card>
    </div>
  );
};

const customCode = `
() => {
  const data = ${JSON.stringify(data.slice(0, 10), null, 4)};

  const [tableData, setTableData] = React.useState(data);
  const [selectedRow, setSelectedRow] = React.useState(data[0]);

  const handleRowClick = (rowData, rowIndex) => {
    const updatedData = tableData.map((row, index) => ({
      ...row,
      _activated: index === rowIndex,
    }));
    setTableData(updatedData);
    setSelectedRow(rowData);
  };

  const statusAppearance = {
    'In Progress': 'info',
    Scheduled: 'warning',
    Draft: 'default',
    Failed: 'alert',
  };

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '30%',
      cellType: 'WITH_META_LIST',
      translate: (a) => ({
        title: a.name,
        metaList: [\`\${a.recipients} recipients\`],
      }),
      sorting: false,
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      cellType: 'STATUS_HINT',
      sorting: false,
      filters: [
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Scheduled', value: 'Scheduled' },
        { label: 'Draft', value: 'Draft' },
        { label: 'Failed', value: 'Failed' },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.status === filter) return true;
        }
        return false;
      },
      translate: (a) => {
        const status = a.status;
        return {
          title: status,
          statusAppearance: statusAppearance[status],
        };
      },
    },
    {
      name: 'lastUpdated',
      displayName: 'Last Updated on',
      width: '30%',
      sorting: false,
    },
    {
      name: 'user',
      displayName: '',
      sorting: false,
      width: '20%',
      cellRenderer: (props) => (
        <div className="d-flex align-items-center justify-content-end flex-grow-1">
          <Avatar firstName={props.data.firstName} lastName={props.data.lastName} />
          <div className="ml-6">
            <Menu trigger={<Menu.Trigger appearance="transparent" />}>
              <Menu.List>
                <Menu.Item>
                  <Text>Edit</Text>
                </Menu.Item>
                <Menu.Item>
                  <Text>Delete</Text>
                </Menu.Item>
              </Menu.List>
            </Menu>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-secondary-lightest p-6">
      <Card className="overflow-hidden mr-4 d-flex justify-content-between">
        <Table
          className="w-50"
          showMenu={false}
          type="resource"
          data={tableData}
          schema={schema}
          withHeader={true}
          withCheckbox={true}
          filterPosition="HEADER"
          filterList={{
            status: ['In Progress', 'Scheduled', 'Draft', 'Failed'],
          }}
          onRowClick={handleRowClick}
          headerOptions={{
            withSearch: true,
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(
              (d) =>
                d.firstName.toLowerCase().match(searchTerm.toLowerCase()) ||
                d.lastName.toLowerCase().match(searchTerm.toLowerCase()) ||
                d.name.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withPagination={true}
          paginationType="basic"
          pageSize={4}
        />

        <Divider vertical />

        <div className="w-50 pt-6">
          <div className="d-flex align-items-center justify-content-between mb-5 ml-5">
            <Heading size="s">{selectedRow.name}</Heading>
          </div>
          <Divider />

          <Card className="mx-5 mt-6" shadow="none">
            <Listbox type="resource" size="standard" showDivider={true}>
              <Listbox.Item>
                <div className="d-flex align-items-center">
                  <Text weight="strong" className="mr-4">
                    Name:
                  </Text>
                  <Text>{selectedRow.name}</Text>
                </div>
              </Listbox.Item>
              <Listbox.Item>
                <div className="d-flex align-items-center">
                  <Text weight="strong" className="mr-4">
                    Status:
                  </Text>
                  <Text>{selectedRow.status}</Text>
                </div>
              </Listbox.Item>
              <Listbox.Item>
                <div className="d-flex align-items-center">
                  <Text weight="strong" className="mr-4">
                    Last Updated:
                  </Text>
                  <Text>{selectedRow.lastUpdated}</Text>
                </div>
              </Listbox.Item>
              <Listbox.Item>
                <div className="d-flex align-items-center">
                  <Text weight="strong" className="mr-4">
                    Recipients:
                  </Text>
                  <Text>{selectedRow.recipients}</Text>
                </div>
              </Listbox.Item>
            </Listbox>
          </Card>
        </div>
      </Card>
    </div>
  );
}
`;

export default {
  title: 'Components/Table/States/Activated State',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'States in Resource Table',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
