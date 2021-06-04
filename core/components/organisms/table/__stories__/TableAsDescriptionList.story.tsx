import React from 'react';
import { Card, List, Text, Avatar, Button } from '@/index';
import { TableProps } from '@/index.type';
import { AsyncTable, SyncTable } from './_common_/types';
import { action } from '@storybook/addon-actions';
import { GridCellProps } from '@/components/organisms/grid/GridCell';

export const tableAsDescriptionList = () => {
  const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'jonathandoe@gamil.com',
      owner: true
    },
    {
      firstName: 'Katty',
      lastName: 'Perry',
      email: 'kattyperry21@gamil.com',
      edit: true
    },
    {
      firstName: 'Daniel',
      lastName: 'Low',
      email: 'daniellow02@yahoo.com',
      view: true
    },
  ];

  const schema: TableProps['schema'] = [
    {
      name: 'info',
      displayName: 'Info',
      width: '100%',
      cellRenderer: (props: GridCellProps) => {

        const renderRights = () => {
          if (props.data.owner) {
            return <Text appearance="subtle" className="pr-5">owner</Text>;
          }

          if (props.data.edit || props.data.view) {
            const rights = props.data.edit ? 'edit' : 'view';
            return (
              <Button
                icon="keyboard_arrow_down"
                iconAlign="right"
                appearance="transparent"
                onClick={e => e.stopPropagation()}
              >
                {`can ${rights}`}
              </Button>
            );
          }

          return null;
        };

        return (
          <div className="d-flex align-items-center justify-content-between flex-grow-1">
            <div className="d-flex align-items-center">
              <Avatar firstName={props.data.firstName} lastName={props.data.lastName} />
              <div className="d-flex flex-column ml-4">
                <Text>{`${props.data.firstName} ${props.data.lastName}`}</Text>
                <Text size="small" appearance="subtle">{props.data.email}</Text>
              </div>
            </div>
            {renderRights()}
          </div>
        );
      }
    },
  ];

  return (
    <Card>
      <Text size="large" weight="strong" className="ml-5">Sharing Test Manual</Text>
      <List
        type="resource"
        withHeader={true}
        headerOptions={{
          withSearch: true,
          dynamicColumn: false
        }}
        separator={false}
        showMenu={false}
        data={data}
        schema={schema}
        withPagination={false}
        onSearch={(currData, searchTerm) => {
          return currData.filter(d =>
            d.firstName.toLowerCase().match(searchTerm.toLowerCase())
            || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
          );
        }}
        onRowClick={(rowData, rowIndex) =>
          action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()
        }
      />
    </Card>
  );
};

const customCode = `() => {
  const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'jonathandoe@gamil.com',
      owner: true
    },
    {
      firstName: 'Katty',
      lastName: 'Perry',
      email: 'kattyperry21@gamil.com',
      edit: true
    },
    {
      firstName: 'Daniel',
      lastName: 'Low',
      email: 'daniellow02@yahoo.com',
      view: true
    },
  ];

  const schema = [
    {
      name: 'info',
      displayName: 'Info',
      width: '100%',
      cellRenderer: (props) => {

        const renderRights = () => {
          if (props.data.owner) {
            return <Text appearance="subtle" className="pr-5">owner</Text>;
          }

          if (props.data.edit || props.data.view) {
            const rights = props.data.edit ? 'edit' : 'view';
            return (
              <Button
                icon="keyboard_arrow_down"
                iconAlign="right"
                appearance="transparent"
                onClick={e => e.stopPropagation()}
              >
                {\`\can \${rights}\`}
              </Button>
            );
          }

          return null;
        };

        return (
          <div className="d-flex align-items-center justify-content-between flex-grow-1">
            <div className="d-flex align-items-center">
              <Avatar firstName={props.data.firstName} lastName={props.data.lastName} />
              <div className="d-flex flex-column ml-4">
                <Text>{\`\${props.data.firstName} \${props.data.lastName}\`}</Text>
                <Text size="small" appearance="subtle">{props.data.email}</Text>
              </div>
            </div>
            {renderRights()}
          </div>
        );
      }
    },
  ];

  return (
      <Card>
        <Text size="large" weight="strong" className="ml-5">Sharing Test Manual</Text>
        <List
          type="resource"
          withHeader={true}
          headerOptions={{
            withSearch: true,
            dynamicColumn: false
          }}
          separator={false}
          showMenu={false}
          data={data}
          schema={schema}
          withPagination={false}
          onSearch={(currData, searchTerm) => {
            return currData.filter(d =>
              d.firstName.toLowerCase().match(searchTerm.toLowerCase())
              || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          onRowClick={(rowData, rowIndex) =>
            console.log(\`o\n-row-click:- rowIndex: \${rowIndex} data: \${JSON.stringify(rowData)}\`)
          }
        />
      </Card>
  );
}`;

export default {
  title: 'Components/Table/Table As Description List',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Table as Option List',
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead'],
        },
      }
    }
  }
};
