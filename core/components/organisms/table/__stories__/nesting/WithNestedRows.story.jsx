import * as React from 'react';
import { Card, Table } from '@/index';
import { nestedRowRenderer } from '@/components/organisms/grid/__stories__/_common_/nestedRowRenderer';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import { action } from '@/utils/action';

// CSF format story
export const withNestedRows = () => {
  schema[0].width = 400;

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
      name: 'name',
      displayName: 'Name',
      width: 300,
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
      cellType: 'WITH_META_LIST'
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
        icon: 'events'
      })
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: 200,
      resizable: true,
      separator: true,
      sorting: false,
      cellRenderer: (props) => {
        const {
          loading
        } = props;

        if (loading) return <></>;

        return (
          <Button appearance={'primary'}>Button</Button>
        );
      }
    },
  ];

  const nestedRowRenderer = (props) => {
    const {
      schema,
      data,
      loading,
      rowIndex,
      expanded
    } = props;

    if (rowIndex % 2) {
      return false;
    }
    return (
      <div>
        <Divider className='ml-5' />
        <List
          loading={loading}
          schema={schema}
          data={[data]}
        />
      </div>
    );
  }

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table
          data={data}
          schema={schema}
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
          exclude: ['showHead'],
        },
      },
    },
  },
};
