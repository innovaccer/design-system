import * as React from 'react';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import { Card, Table, Menu, Avatar, Text } from '@/index';
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
    _selected: true,
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
    _selected: true,
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

export const resourceTable = () => {
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
    <Card className="overflow-hidden">
      <Table
        loaderSchema={loaderSchema}
        showMenu={false}
        type="resource"
        data={data}
        schema={schema}
        withHeader={true}
        withCheckbox={true}
        filterPosition="HEADER"
        filterList={{
          status: ['In Progress', 'Scheduled', 'Draft', 'Failed'],
        }}
        onSelect={(rowIndex, selected, selectedList, selectAll) =>
          action(
            `on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(
              selectedList
            )} selectAll: ${selectAll}`
          )()
        }
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
    </Card>
  );
};

const customCode = `
() => {
  const data = ${JSON.stringify(data.slice(0, 10), null, 4)};

  const statusAppearance = {
    'In Progress': 'info',
    'Scheduled': 'warning',
    'Draft': 'default',
    'Failed': 'alert'
  };

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '30%',
      cellType: 'WITH_META_LIST',
      sorting: false,
      translate: a => ({
        title: a.name,
        metaList: [\`\${a.recipients} recipients\`]
      }),
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
        { label: 'Failed', value: 'Failed' }
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.status === filter) return true;
        }
        return false;
      },
      translate: a => {
        const status = a.status;
        return ({
          title: status,
          statusAppearance: statusAppearance[status]
        });
      }
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
      cellRenderer: (props) => {
        const { data } = props;
        return (
          <div className="d-flex align-items-center justify-content-end flex-grow-1">
            <Avatar firstName={data.firstName} lastName={data.lastName} />
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
        );
      }
    }
  ];

  return (
    <Card className="overflow-hidden">
      <Table
        showMenu={false}
        type="resource"
        data={data}
        schema={schema}
        withHeader={true}
        withCheckbox={true}
        filterPosition="HEADER"
        onSelect={(rowIndex, selected, selectedList, selectAll) =>
          console.log(\`on-select:- rowIndex: \${rowIndex} selected: \${selected} selectedList: \${JSON.stringify(selectedList)} selectAll: \${selectAll}\`)
        }
        headerOptions={{
          withSearch: true
        }}
        filterList={{
          status: ['In Progress', 'Scheduled', 'Draft', 'Failed']
        }}
        onSearch={(currData, searchTerm) => {
          return currData.filter(d =>
            d.firstName.toLowerCase().match(searchTerm.toLowerCase())
            || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
            || d.name.toLowerCase().match(searchTerm.toLowerCase())
          );
        }}
        withPagination={true}
        paginationType="basic"
        pageSize={4}
        onPageChange={newPage => console.log(\`on-page-change:- \${newPage}\`)}
      />
    </Card>
  );
};
`;

export default {
  title: 'Components/Table/States/Resource Table',
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
