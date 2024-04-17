import * as React from 'react';

import { Card, Heading, Table } from '@/index';
import { spacingData } from './Data';
import { spaceSchema } from './Schema';

export const spacing = () => {
  return (
    <div>
      <Heading size="xxl">Design Tokens</Heading>
      <br />
      <br />
      <Heading size="m">Spacing</Heading>
      <br />
      <Card className="h-100">
        <Table data={spacingData} schema={spaceSchema} />
      </Card>
    </div>
  );
};

export default {
  title: 'Styling/Design Tokens/Spacing',
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
