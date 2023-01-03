import * as React from 'react';
import { Card, Heading, Table, Row, Column } from '@/index';
import { action } from '@/utils/action';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';

// CSF format story
export const withPagination = () => {
  const values = ['basic', 'jump'];

  // to freeze the object for typescript

  return (
    <div className="d-flex flex-wrap">
      <Row>
        {values.map((v, index) => (
          <Column key={index} className="ml-10" size={5}>
            <Heading>{`paginationType: ${v}`}</Heading>
            <div className="vh-75">
              <Card shadow="light" className="h-100">
                <Table
                  data={data}
                  schema={schema}
                  withPagination={true}
                  paginationType={v}
                  onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
                />
              </Card>
            </div>
          </Column>
        ))}
      </Row>
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
  ];

  const values = ['basic', 'jump'];

  return (
    <div className="d-flex flex-wrap">
    <Row>
    {values.map((v, index) => (
      <Column key={index} className="ml-10" size={5}>
        <Heading>{\`paginationType: \${v}\`}</Heading>
        <div className="vh-75">
          <Card shadow="light" className="h-100">
            <Table
              data={data}
              schema={schema}
              withPagination={true}
              paginationType={v}
              onPageChange={newPage => console.log(\`on-page-change:- \${newPage}\`)}
            />
          </Card>
        </div>
      </Column>
    ))}
  </Row>
    </div>
  );
};
`;

export default {
  title: 'Components/Table/Variants/With Pagination',
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
