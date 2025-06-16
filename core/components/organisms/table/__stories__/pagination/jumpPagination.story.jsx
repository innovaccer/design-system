import * as React from 'react';
import { Card, Table } from '@/index';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';

// CSF format story
export const jumpPagination = () => {
  return (
    <div className="vh-50">
      <Card className="h-100 overflow-hidden">
        <Table data={data} pageSize={6} schema={schema} withPagination={true} paginationType={'jump'} />
      </Card>
    </div>
  );
};

const customCode = `
() => {
  const data = ${JSON.stringify(data, null, 4)};

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      resizable: true,
      separator: true,
      tooltip: true,
      translate: a => ({
        title: \`\${a.firstName} \${a.lastName}\`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
      filters: [
        { label: 'A-G', value: 'a-g' },
        { label: 'H-R', value: 'h-r' },
        { label: 'S-Z', value: 's-z' },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          switch (filter) {
            case 'a-g':
              if (a.firstName[0].toLowerCase() >= 'a' && a.firstName[0].toLowerCase() <= 'g') return true;
              break;
            case 'h-r':
              if (a.firstName[0].toLowerCase() >= 'h' && a.firstName[0].toLowerCase() <= 'r') return true;
              break;
            case 's-z':
              if (a.firstName[0].toLowerCase() >= 's' && a.firstName[0].toLowerCase() <= 'z') return true;
              break;
          }
        }
        return false;
      },
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 350,
      resizable: true,
      sorting: false,
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: 200,
      resizable: true,
      comparator: (a, b) => a.gender.localeCompare(b.gender),
      cellType: 'STATUS_HINT',
      translate: a => ({
        title: a.gender,
        statusAppearance: (a.gender === 'Female') ? 'alert' : 'success'
      }),
      filters: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.gender.toLowerCase() === filter) return true;
        }
        return false;
      },
    },
    {
      name: 'icon',
      displayName: 'Icon',
      width: 100,
      resizable: true,
      align: 'center',
      cellType: 'ICON',
      sorting: false,
      translate: _ => ({
        icon: 'event'
      })
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: 200,
      resizable: true,
      cellType: 'WITH_META_LIST',
      sorting: false,
      cellRenderer: props => {
        return (
          <>
            <Icon className="mr-5" name="event" />
            <GridCell
              {...props}
              schema={{
                ...props.schema,
                name: 'email'
              }}
            />
          </>
        );
      }
    },
  ];

  return (
    <div className="vh-50">
      <Card className="h-100 overflow-hidden">
        <Table
          data={data}
          pageSize={6}
          schema={schema}
          withPagination={true}
          paginationType={'jump'}
        />
      </Card>
    </div>
  );
};
`;

export default {
  title: 'Components/Table/Pagination/Jump Pagination',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Jump Pagination in Table',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
