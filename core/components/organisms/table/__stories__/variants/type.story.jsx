import * as React from 'react';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/simpleSchema';
import { Card, Heading, Table, Row, Column } from '@/index';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';
import { action } from '@/utils/action';

// CSF format story
export const type = () => {
  const values = ['resource', 'data'];

  // to freeze the object for typescript

  return (
    <div className="d-flex flex-wrap">
      <Row>
        {values.map((v, index) => (
          <Column key={index} className="ml-10" size={5}>
            <Heading>{v}</Heading>
            <div className="vh-75">
              <Card shadow="light" className="h-100">
                <Table
                  type={v}
                  data={data}
                  schema={schema}
                  onRowClick={(rowData, rowIndex) =>
                    action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()
                  }
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
      width: 300,
      resizable: true,
      separator: true,
      tooltip: true,
      translate: a => ({
        title: \`\${a.firstName} \${a.lastName}\`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 350,
      resizable: true,
    },
  ];

  const values = ['resource', 'data'];

  return (
    <div className="d-flex flex-wrap">
    <Row>
    {values.map((v, index) => (
      <Column key={index} className="ml-10" size={5}>
        <Heading>{v}</Heading>
        <div className="vh-75">
          <Card shadow="light" className="h-100">
            <Table
              type={v}
              data={data}
              schema={schema}
              onRowClick={(rowData, rowIndex) =>
                action(\`on-row-click:- rowIndex: \${rowIndex} data: \${JSON.stringify(rowData)}\`)()
              }
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
  title: 'Components/Table/Variants/Type',
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
