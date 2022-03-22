import * as React from 'react';
import { Card, Table, InlineMessage } from '@/index';

const data = [
  {
    name: 'Asthma Outreach',
    firstName: 'Brooke',
    lastName: 'Heeran',
    lastUpdated: 'June 20, 2020',
    recipients: 11846,
  },
  {
    firstName: 'Frazer',
    lastName: 'Cathro',
    lastUpdated: 'June 19, 2020',
    name: 'HbA1c Test due',
    recipients: 12846,
  },
  {
    firstName: 'Lemmie',
    name: 'ER Education',
    lastName: 'Ciric',
    lastUpdated: 'May 19, 2020',
    recipients: 118467,
  },
];

export const InlineMessageWithinTable = () => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '30%',
      cellType: 'WITH_META_LIST',
      translate: (a) => ({
        title: a.name,
        metaList: [`${a.recipients} recipients`],
      }),
      sorting: false,
    },
    {
      name: 'lastUpdated',
      displayName: 'Last Updated on',
      width: '30%',
      sorting: false,
    },
    {
      name: 'user',
      displayName: 'Message',
      sorting: false,
      width: '40%',
      cellRenderer: () => <InlineMessage appearance="info" description="Patient profile updated." />,
    },
  ];

  return (
    <Card>
      <Table
        showMenu={false}
        type="data"
        data={data}
        schema={schema}
        withHeader={false}
        headerOptions={{
          withSearch: false,
        }}
      />
    </Card>
  );
};

const customCode = `
() => {
  const data = ${JSON.stringify(data.slice(0, 10), null, 4)};

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '30%',
      cellType: 'WITH_META_LIST',
      sorting: false,
      translate: (a) => ({
        title: a.name,
        metaList: [\`\${a.recipients} recipients\`]
      }),
    },
    {
      name: 'lastUpdated',
      displayName: 'Last Updated on',
      width: '30%',
      sorting: false,
    },
    {
      name: 'user',
      displayName: 'Message',
      sorting: false,
      width: '40%',
      cellRenderer: (props) => {
        const { data } = props;
        return (
          <InlineMessage appearance='info' description='Patient profile updated.' />
        );
      }
    }
  ];

  return (
    <Card>
      <Table
        showMenu={false}
        type="data"
        data={data}
        schema={schema}
        withHeader={false}
        headerOptions={{
          withSearch: false
        }}
      />
    </Card>
  );
};
`;

export default {
  title: 'Components/InlineMessage/Inline Message Within Table',
  component: InlineMessage,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
