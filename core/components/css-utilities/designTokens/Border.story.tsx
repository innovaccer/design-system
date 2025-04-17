import * as React from 'react';

import { Card, Heading, Table } from '@/index';
import { getSchema } from './Schema';
import { borderData, borderRadiusData, borderWidthData } from './Data';

export const border = () => {
  const borderSchema = getSchema('border', 'aA bB cC', 'p-3 w-50');
  const borderRadiusSchema = getSchema('border-radius', 'aA bB cC', 'p-3 w-50 border');
  const borderWidthSchema = getSchema('border-width', 'aA bB cC', 'p-3 w-50 border');

  return (
    <div>
      <Heading size="xxl" appearance="default">
        Design Tokens
      </Heading>
      <br />
      <Heading appearance="default" size="m">
        Border
      </Heading>
      <br />
      <Card className="h-100 overflow-hidden">
        <Table data={borderData} schema={borderSchema} />
      </Card>
      <br />
      <Heading appearance="default" size="m">
        Border Radius
      </Heading>
      <br />
      <Card className="h-100 overflow-hidden">
        <Table data={borderRadiusData} schema={borderRadiusSchema} />
      </Card>
      <br />
      <Heading appearance="default" size="m">
        Border Width
      </Heading>
      <br />
      <Card className="h-100 overflow-hidden">
        <Table data={borderWidthData} schema={borderWidthSchema} />
      </Card>
      <br />
    </div>
  );
};

export default {
  title: 'Styling/Design Tokens/Border',
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
