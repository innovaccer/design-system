import * as React from 'react';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from '../_common_/types';
import { action } from '@/utils/action';

export const withoutPagination = () => {
  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          data={[...Array(100)].map((_, index) => {
            return data[index % 10];
          })}
          schema={schema}
          withHeader={true}
          withCheckbox={true}
          withPagination={false}
          uniqueColumnName="email"
          onSelect={(rowIndex, selected, selectedList, selectAll) =>
            action(
              `on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(
                selectedList
              )} selectAll: ${selectAll}`
            )()
          }
          headerOptions={{
            withSearch: true,
            allowSelectAll: true,
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(
              (d) =>
                d.firstName.toLowerCase().match(searchTerm.toLowerCase()) ||
                d.lastName.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
        />
      </Card>
    </div>
  );
};

const customCode = `() => {
  const data = ${JSON.stringify(
    [...Array(100)].map((_, index) => {
      return data[index % 10];
    }),
    null,
    4
  )};

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '40%',
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

  const [error, setError] = React.useState(false);

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table
          error={error}
          data={data}
          schema={schema}
          withHeader={true}
          uniqueColumnName="email"
          withPagination={false}
          headerOptions={{
            withSearch: true,
            allowSelectAll: true,
          }}
          onSearch={(currData, searchTerm) => {
            console.log('onsearch called', searchTerm);
            setError(!error);
            return currData.filter(d =>
              d.firstName.toLowerCase().match(searchTerm.toLowerCase())
              || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withCheckbox={true}
          onSelect={(rowIndex, selected, selectedList, selectAll) => console.log(\`on-select:- rowIndex: \${rowIndex} selected: \${selected} selectedList: \${JSON.stringify(selectedList)} selectAll: \${selectAll}\`)}
          onPageChange={newPage => console.log(\`on-page-change:- \${newPage}\`)}
        />
      </Card>
    </div>
  );
};
`;

export default {
  title: 'Components/Table/Pagination/Without Pagination',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Table without Pagination',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
