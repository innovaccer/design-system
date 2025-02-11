import * as React from 'react';
import { Table, Card } from '@/index';
import { AsyncTable, SyncTable } from './_common_/types';

export const all = () => {
  const data = [
    {
      firstName: 'Brooke',
      lastName: 'Heeran',
      email: 'bheeran0@altervista.org',
      gender: 'Female',
      status: 'Failed',
    },
    {
      firstName: 'Frazer',
      lastName: 'Cathro',
      email: 'fcathro1@ucla.edu',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Lemmie',
      lastName: 'Ciric',
      email: {
        title: 'lciric2@dmoz.org',
        metaList: ['First', 'Second'],
      },
      gender: 'Male',
      status: 'Completed',
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      email: 'rboatwright3@arstechnica.com',
      status: 'Completed',
      gender: 'Male',
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      email: 'rcyples4@biglobe.ne.jp',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Lem',
      lastName: 'Males',
      email: 'lmales5@admin.ch',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Sayres',
      lastName: 'Adelberg',
      email: 'sadelberg6@uol.com.br',
      gender: 'Male',
      status: 'Completed',
    },
    {
      firstName: 'Murray',
      lastName: 'Bravington',
      email: 'mbravington7@drupal.org',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Jena',
      lastName: 'Swatheridge',
      email: 'jswatheridge8@npr.org',
      gender: 'Female',
      status: 'Failed',
    },
    {
      firstName: 'Annabel',
      lastName: 'Nelsey',
      email: 'anelsey9@google.com',
      gender: 'Female',
      status: 'Completed',
    },
  ];

  const schema = [
    {
      name: 'firstName',
      displayName: 'Name',
      cellType: 'AVATAR_WITH_TEXT',
      width: '25%',
      translate: (a) => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
    },
    {
      name: 'email',
      displayName: 'Email',
      width: '25%',
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '25%',
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '25%',
    },
  ];

  return (
    <div className="vh-50">
      <Card className="h-100 overflow-hidden">
        <Table
          page={1}
          data={data}
          schema={schema}
          showMenu={true}
          withHeader={true}
          withPagination={true}
          pageSize={4}
          headerOptions={{
            withSearch: true,
          }}
        />
      </Card>
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      firstName: 'Brooke',
      lastName: 'Heeran',
      email: 'bheeran0@altervista.org',
      gender: 'Female',
      status: 'Failed',
    },
    {
      firstName: 'Frazer',
      lastName: 'Cathro',
      email: 'fcathro1@ucla.edu',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Lemmie',
      lastName: 'Ciric',
      email: {
        title: 'lciric2@dmoz.org',
        metaList: ['First', 'Second'],
      },
      gender: 'Male',
      status: 'Completed',
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      email: 'rboatwright3@arstechnica.com',
      status: 'Completed',
      gender: 'Male',
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      email: 'rcyples4@biglobe.ne.jp',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Lem',
      lastName: 'Males',
      email: 'lmales5@admin.ch',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Sayres',
      lastName: 'Adelberg',
      email: 'sadelberg6@uol.com.br',
      gender: 'Male',
      status: 'Completed',
    },
    {
      firstName: 'Murray',
      lastName: 'Bravington',
      email: 'mbravington7@drupal.org',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Jena',
      lastName: 'Swatheridge',
      email: 'jswatheridge8@npr.org',
      gender: 'Female',
      status: 'Failed',
    },
    {
      firstName: 'Annabel',
      lastName: 'Nelsey',
      email: 'anelsey9@google.com',
      gender: 'Female',
      status: 'Completed',
    },
  ];

  const schema = [
    {
      name: 'firstName',
      displayName: 'Name',
      cellType: 'AVATAR_WITH_TEXT',
      width: '25%',
      translate: (a) => ({
        title: \`\${a.firstName} \${a.lastName}\`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
    },
    {
      name: 'email',
      displayName: 'Email',
      width: '25%',
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '25%',
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '25%',
    },
  ];

  return (
    <div className="vh-50">
      <Card className="h-100 overflow-hidden">
        <Table
          page={1}
          data={data}
          schema={schema}
          showMenu={true}
          withHeader={true}
          withPagination={true}
          pageSize={4}
          headerOptions={{
            withSearch: true,
          }}
        />
      </Card>
    </div>
  );
}`;

export default {
  title: 'Components/Table/All',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
