import * as React from 'react';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from '../_common_/types';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import { action } from '@/utils/action';

export const disabledCheckbox = () => {
  const data = [
    {
      firstName: 'Brooke',
      lastName: 'Heeran',
      email: 'brooke.heeran@example.com',
      gender: 'Female',
      locked: true, // This row's checkbox will be disabled
    },
    {
      firstName: 'Frazer',
      lastName: 'Cathro',
      email: 'frazer.cathro@example.com',
      gender: 'Male',
      locked: false,
    },
    {
      firstName: 'Lemmie',
      lastName: 'Ciric',
      email: 'lemmie.ciric@example.com',
      gender: 'Male',
      locked: true, // This row's checkbox will be disabled
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      email: 'randy.boatwright@example.com',
      gender: 'Male',
      locked: false,
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      email: 'rolando.cyples@example.com',
      gender: 'Male',
      locked: false,
    },
  ];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: 300,
      translate: (a) => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 350,
      cellType: 'WITH_META_LIST',
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: 200,
      cellType: 'STATUS_HINT',
      translate: (a) => ({
        title: a.gender,
        statusAppearance: a.gender === 'Female' ? 'alert' : 'success',
      }),
    },
  ];

  return (
    <div>
      <Card className="h-100 overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          data={data}
          schema={schema}
          withHeader={true}
          withCheckbox={true}
          headerOptions={{
            withSearch: true,
            allowSelectAll: true,
            customSelectionLabel: 'user',
          }}
          isCheckboxDisabled={(rowData) => rowData.locked === true}
          onSelect={(rowIndex, selected, selectedList, selectAll) =>
            action(
              `on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(
                selectedList
              )} selectAll: ${selectAll}`
            )()
          }
          withPagination={false}
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
      email: 'brooke.heeran@example.com',
      gender: 'Female',
      locked: true, // This row's checkbox will be disabled
    },
    {
      firstName: 'Frazer',
      lastName: 'Cathro',
      email: 'frazer.cathro@example.com',
      gender: 'Male',
      locked: false,
    },
    {
      firstName: 'Lemmie',
      lastName: 'Ciric',
      email: 'lemmie.ciric@example.com',
      gender: 'Male',
      locked: true, // This row's checkbox will be disabled
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      email: 'randy.boatwright@example.com',
      gender: 'Male',
      locked: false,
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      email: 'rolando.cyples@example.com',
      gender: 'Male',
      locked: false,
    },
  ];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: 300,
      translate: (a) => ({
        title: \`\${a.firstName} \${a.lastName}\`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 350,
      cellType: 'WITH_META_LIST',
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: 200,
      cellType: 'STATUS_HINT',
      translate: (a) => ({
        title: a.gender,
        statusAppearance: a.gender === 'Female' ? 'alert' : 'success',
      }),
    },
  ];

  const loaderSchema = ${JSON.stringify(loaderSchema, null, 4)};

  return (
    <div>
      <Card className="h-100 overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          data={data}
          schema={schema}
          withHeader={true}
          withCheckbox={true}
          headerOptions={{
            withSearch: true,
            allowSelectAll: true,
            customSelectionLabel: 'user',
          }}
          isCheckboxDisabled={(rowData) => rowData.locked === true}
          onSelect={(rowIndex, selected, selectedList, selectAll) =>
            console.log(\`on-select:- rowIndex: \${rowIndex} selected: \${selected} selectedList: \${JSON.stringify(selectedList)} selectAll: \${selectAll}\`)
          }
          withPagination={false}
        />
      </Card>
    </div>
  );
}`;

export default {
  title: 'Components/Table/Selection/Disabled Checkbox',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Disabled Checkbox in Table',
        description:
          'Use `isCheckboxDisabled` prop to disable checkboxes for specific rows based on row data. The checkbox will be visually disabled and cannot be selected, but row actions (like clicking the row) will continue to work normally.',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
