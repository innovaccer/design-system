import * as React from 'react';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/simpleSchema';
import { Card, Heading, Table } from '@/index';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';

// CSF format story
export const size = () => {
  const values = ['comfortable', 'standard', 'compressed', 'tight'];

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
  };
  // to freeze the object for typescript

  return (
    <div style={style}>
      {values.map((v, index) => (
        <div
          key={index}
          style={{
            margin: '20px',
            width: '45%',
          }}
        >
          <Heading>{v}</Heading>
          <div
            style={{
              height: '350px',
            }}
          >
            <Card shadow="light" className="h-100">
              <Table size={v} data={data} schema={schema} />
            </Card>
          </div>
        </div>
      ))}
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

  const values = ['comfortable', 'standard', 'compressed', 'tight'];

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  return (
    <div style={style}>
      {values.map((v, index) => (
        <div
          key={index}
          style={{
            margin: '20px',
            width: '45%',
          }}
        >
          <Heading>{v}</Heading>
          <div
            style={{
              height: '350px',
            }}
          >
            <Card shadow="light" className="h-100">
              <Table size={v} data={data} schema={schema} />
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};
`;

export default {
  title: 'Components/Table/Variants/Size',
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
