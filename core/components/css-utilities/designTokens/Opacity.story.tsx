import * as React from 'react';
import { Card, Heading, Table } from '@/index';
import { opacityData } from './Data';
import { spaceSchema } from './Schema';

export const opacity = () => {
  return (
    <div>
      <Heading size="xxl">Design Tokens</Heading>
      <br />
      <br />
      <Heading size="m">Opacity</Heading>
      <br />
      <Card className="h-100">
        <Table data={opacityData} schema={spaceSchema} />
      </Card>
    </div>
  );
};

export default {
  title: 'Styling/Design Tokens/Opacity',
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
