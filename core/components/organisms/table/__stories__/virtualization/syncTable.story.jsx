import * as React from 'react';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import data from '@/components/organisms/grid/__stories__/_common_/infiniteData/infiniteList';
import schema from '@/components/organisms/grid/__stories__/_common_/infiniteData/infiniteSchema';
import { Card, Table, Button } from '@/index';
import { AsyncTable, SyncTable } from '../_common_/types';
import { action } from '@/utils/action';

export const syncTable = () => {
  const onDataExport = (data) => {
    action('Exporting data', data)();
  };

  const globalActionTrigger = (data) => {
    return <Button onClick={() => onDataExport(data)}>Export</Button>;
  };

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          data={data}
          schema={schema}
          withHeader={true}
          withCheckbox={true}
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
            globalActionRenderer: globalActionTrigger,
            allowSelectAll: true,
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(
              (d) =>
                d.firstName.toLowerCase().match(searchTerm.toLowerCase()) ||
                d.lastName.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withPagination={false}
          onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
          enableRowVirtualization={true}
          virtualRowOptions={{
            visibleRows: 30,
            buffer: 15,
          }}
        />
      </Card>
    </div>
  );
};

const customCode = `() => {
  const data = ${JSON.stringify(data, null, 4)};

  const schema = [
    {
      name: 'empID',
      displayName: 'ID',
      resizable: true,
      sorting: false,
      width: '1%',
    },
    {
      name: 'name',
      displayName: 'Name',
      width: '24%',
      resizable: true,
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
      width: '30%',
      resizable: true,
      sorting: false,
      cellType: 'WITH_META_LIST'
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '15%',
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
      width: '10%',
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
      width: '20%',
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

  const onDataExport = (data) => {
    console.log("Exporting data", data);
  }

  const globalActionTrigger = (data) => {
    return (<Button onClick={() => onDataExport(data)}>Export</Button>);
  } 

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table
          error={error}
          data={data}
          schema={schema}
          withHeader={true}
          uniqueColumnName="email"
          headerOptions={{
            withSearch: true,
            globalActionRenderer : globalActionTrigger,
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
          withPagination={false}
          onPageChange={newPage => console.log(\`on-page-change:- \${newPage}\`)}
          enableRowVirtualization={true}
          virtualRowOptions={{
            visibleRows: 30,
            buffer: 15,
          }}
        />
      </Card>
    </div>
  );
};
`;

export default {
  title: 'Components/Table/Virtualization/Sync Table',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Sync Table',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
