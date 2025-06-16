import * as React from 'react';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import editableSchema from '@/components/organisms/grid/__stories__/_common_/editableSchema';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from '../_common_/types';
import { action } from '@/utils/action';

export const bodyCell = () => {
  return (
    <div className="vh-50">
      <Card className="h-100 overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          data={data}
          schema={editableSchema}
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
          pageSize={4}
          onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
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
    width: '40%',
    resizable: true,
    tooltip: true,
    separator: true,
    translate: (a) => ({
      title: \`\${a.firstName} \${a.lastName}\`,
      firstName: a.firstName,
      lastName: a.lastName,
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
    name: 'customCell',
    displayName: 'Custom Cell',
    width: 200,
    resizable: true,
    cellRenderer: (props) => {
      const { loading } = props;

      if (loading) return <PlaceholderParagraph length="medium" />;

      const [weight, setWeight] = React.useState('');

      const onChangeWeight = (value) => {
        setWeight(value);
      };

      return <EditableInput placeholder="Add Weight" value={weight} onChange={onChangeWeight} size="tiny" />;
    },
  },
  {
    name: 'email',
    displayName: 'Email',
    width: 250,
    resizable: true,
    sorting: false,
    cellType: 'WITH_META_LIST',
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: 180,
    resizable: true,
    comparator: (a, b) => a.gender.localeCompare(b.gender),
    cellType: 'STATUS_HINT',
    translate: (a) => ({
      title: a.gender,
      statusAppearance: a.gender === 'Female' ? 'alert' : 'success',
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
    translate: () => ({
      icon: 'event',
    }),
  },
];


  const loaderSchema = ${JSON.stringify(loaderSchema, null, 4)};

  return (
    <div
      className="vh-50"
    >
      <Card className="h-100 overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          data={data}
          schema={schema}
          withHeader={true}
          headerOptions={{
            withSearch: true
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(d =>
              d.firstName.toLowerCase().match(searchTerm.toLowerCase())
              || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withCheckbox={true}
          onSelect={(rowIndex, selected, selectedList, selectAll) => console.log(\`on-select:- rowIndex: \${rowIndex} selected: \${selected} selectedList: \${JSON.stringify(selectedList)} selectAll: \${selectAll}\`)}
          withPagination={true}
          pageSize={4}
          onPageChange={newPage => console.log(\`on-page-change:- \${newPage}\`)}
        />
      </Card>
    </div>
  );
};
`;

export default {
  title: 'Components/Table/Custom Cell Renderer/Body Cell',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Custom Body Cell Renderer',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
