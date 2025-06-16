import * as React from 'react';
import { Card, Heading, Table, Column, Row } from '@/index';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';

// CSF format story
export const toggleForHeaderRow = () => {
  const values = [true, false];

  return (
    <div className="d-flex flex-wrap">
      <Row>
        {values.map((v, index) => (
          <Column key={index} size={5} className="ml-10">
            <Heading>{`showHead: ${v}`}</Heading>
            <div className="vh-75">
              <Card className="h-100 overflow-hidden">
                <Table showHead={v} data={data} schema={schema} />
              </Card>
            </div>
          </Column>
        ))}
      </Row>
    </div>
  );
};

const customCode = `() => {
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
  ];

  const values = [true, false];

  return (
    <div className="d-flex flex-wrap">
    <Row>
    {values.map((v, index) => (
      <Column key={index} size={5} className="ml-10">
        <Heading>{\`showHead: \${v}\`}</Heading>
        <div className="vh-75">
          <Card className="h-100 overflow-hidden">
            <Table showHead={v} data={data} schema={schema} />
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
  title: 'Components/Table/Toggle For Header Row',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Toggle Option For Header Row',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
