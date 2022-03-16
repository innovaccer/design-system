import * as React from 'react';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import { TableProps } from '@/index.type';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from './_common_/types';
import { action } from '@/utils/action';

const data = [
  {
    firstName: 'Brooke',
    lastName: 'Heeran',
    email: 'bheeran0@altervista.org',
    role: 'Administrator',
    manager: 'Seb Grant',
    last_login: 'May 5',
    status: 'Active',
  },
  {
    firstName: 'Frazer',
    lastName: 'Cathro',
    email: 'fcathro1@ucla.edu',
    role: 'Healthcoaches',
    manager: 'Mike Page',
    last_login: 'May 4',
    status: 'Active',
  },
  {
    firstName: 'Lemmie',
    lastName: 'Ciric',
    email: {
      title: 'lciric2@dmoz.org',
      metaList: ['First', 'Second'],
    },
    role: 'Administrator',
    manager: 'Seb Grant',
    last_login: 'April 5',
    status: 'Inactive',
  },
  {
    firstName: 'Randy',
    lastName: 'Boatwright',
    email: 'rboatwright3@arstechnica.com',
    role: 'Healthcoaches',
    manager: 'William Estrada',
    last_login: 'March 5',
    status: 'Active',
  },
  {
    firstName: 'Rolando',
    lastName: 'Cyples',
    email: 'rcyples4@biglobe.ne.jp',
    role: 'Administrator',
    manager: 'Seb Grant',
    last_login: 'May 10',
    status: 'Inactive',
  },
  {
    firstName: 'Lem',
    lastName: 'Males',
    email: 'lmales5@admin.ch',
    role: 'PCP Staff',
    manager: 'Seb Grant',
    last_login: 'June 5',
    status: 'Inactive',
  },
  {
    firstName: 'Sayres',
    lastName: 'Adelberg',
    email: 'sadelberg6@uol.com.br',
    role: 'Leadership',
    manager: 'William Estrada',
    last_login: 'May 5',
    status: 'Active',
  },
  {
    firstName: 'Murray',
    lastName: 'Bravington',
    email: 'mbravington7@drupal.org',
    role: 'Healthcoaches',
    manager: 'William Estrada',
    last_login: 'May 9',
    status: 'Active',
  },
  {
    firstName: 'Jena',
    lastName: 'Swatheridge',
    email: 'jswatheridge8@npr.org',
    role: 'Leadership',
    manager: 'Mike Page',
    last_login: 'Jan 5',
    status: 'Active',
  },
  {
    firstName: 'Annabel',
    lastName: 'Nelsey',
    email: 'anelsey9@google.com',
    role: 'Healthcoaches',
    manager: 'Mike Page',
    last_login: 'April 27',
    status: 'Inactive',
  },
];

export const selection = () => {
  const schema: TableProps['schema'] = [
    {
      name: 'name',
      displayName: 'Name',
      width: '30%',
      separator: true,
      translate: (a) => ({
        title: `${a.lastName}, ${a.firstName}`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
      cellType: 'AVATAR_WITH_TEXT',
      sorting: false,
    },
    {
      name: 'role',
      displayName: 'Role',
      width: 250,
      sorting: false,
    },
    {
      name: 'manager',
      displayName: 'Manager',
      width: 180,
      sorting: false,
    },
    {
      name: 'last_login',
      displayName: 'Last Login',
      width: 100,
      sorting: false,
    },
    {
      name: 'status',
      displayName: 'Status',
      width: 200,
      cellType: 'STATUS_HINT',
      sorting: false,
      translate: (a) => ({
        title: a.status,
        statusAppearance: a.status === 'Inactive' ? 'default' : 'success',
      }),
    },
  ];
  return (
    <Card>
      <Table
        loaderSchema={loaderSchema}
        type="resource"
        data={data}
        schema={schema}
        showMenu={false}
        withHeader={true}
        withCheckbox={true}
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
              d.lastName.toLowerCase().match(searchTerm.toLowerCase())
          );
        }}
        withPagination={true}
        pageSize={5}
        onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
      />
    </Card>
  );
};

const customCode = `
() => {
  const data = ${JSON.stringify(data.slice(0, 10), null, 4)};

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '30%',
      separator: true,
      translate: a => ({
        title: \`\${a.lastName}, \${a.firstName}\`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
      cellType: 'AVATAR_WITH_TEXT',
      sorting: false
    },
    {
      name: 'role',
      displayName: 'Role',
      width: 250,
      sorting: false
    },
    {
      name: 'manager',
      displayName: 'Manager',
      width: 180,
      sorting: false
    },
    {
      name: 'last_login',
      displayName: 'Last Login',
      width: 100,
      sorting: false
    },
    {
      name: 'status',
      displayName: 'Status',
      width: 200,
      cellType: 'STATUS_HINT',
      sorting: false,
      translate: a => ({
        title: a.status,
        statusAppearance: (a.status === 'Inactive') ? 'default' : 'success'
      }),
    },
  ];
  return (
      <Card>
        <Table
          type="resource"
          data={data}
          schema={schema}
          showMenu={false}
          withHeader={true}
          withCheckbox={true}
          onSelect={(rowIndex, selected, selectedList, selectAll) =>
            console.log(\`on-select:- rowIndex: \${rowIndex} selected: \${selected} selectedList: \${JSON.stringify(selectedList)} selectAll: \${selectAll}\`)
          }
          headerOptions={{
            withSearch: true
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(d =>
              d.firstName.toLowerCase().match(searchTerm.toLowerCase())
              || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withPagination={true}
          pageSize={5}
          onPageChange={newPage => console.log(\`on-page-change:- \${newPage}\`)}
        />
      </Card>
  );
};
`;

export default {
  title: 'Components/Table/Selection',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead'],
        },
      },
    },
  },
};
