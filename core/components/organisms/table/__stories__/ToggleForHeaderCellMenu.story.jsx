import * as React from 'react';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/simpleSchema';
import { Card, Heading, Table, Row, Column } from '@/index';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';

// CSF format story
export const toggleForHeaderCellMenu = () => {
  const values = [true, false];

  // to freeze the object for typescript

  return (
    <div className="d-flex flex-wrap">
      <Row>
        {values.map((v, index) => (
          <Column size={5} key={index} className="ml-10">
            <Heading>{`showMenu: ${v}`}</Heading>
            <div className="vh-75">
              <Card className="h-100 overflow-hidden">
                <Table showMenu={v} data={data} schema={schema} />
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
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 350,
      resizable: true,
    },
  ];

  const values = [true, false];

  return (
    <div className="d-flex flex-wrap">
    <Row>
    {values.map((v, index) => (
      <Column size={5} key={index} className="ml-10">
        <Heading>{\`showMenu: \${v}\`}</Heading>
        <div className="vh-75">
          <Card className="h-100 overflow-hidden">
            <Table showMenu={v} data={data} schema={schema} />
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
  title: 'Components/Table/Toggle For Header Cell Menu',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Toggle Option For Header Cell Menu',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
