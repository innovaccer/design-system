import * as React from 'react';

import { Card, Heading, Table, Text } from '@/index';
import { getSchema, spaceSchema } from './Schema';
import { borderData, shadowData, gridBreakpointData } from './Data';
import Paragraph from '@/components/atoms/paragraph';

export const miscellaneous = () => {
  const borderSchema = getSchema('border', 'aA bB cC', 'p-3 w-50');
  const shadowSchema = getSchema('boxShadow', 'aA bB cC', 'p-7');
  return (
    <div>
      <Heading size="xxl">Design Tokens</Heading>
      <br />
      <br />
      <Heading size="m">Miscellaneous</Heading>
      <br />
      <Heading size="m">Border</Heading>
      <Card className="h-100 overflow-hidden">
        <Table data={borderData} schema={borderSchema} />
      </Card>
      <br />
      <Heading size="m">Shadow</Heading>
      <Card className="h-100 overflow-hidden">
        <Table data={shadowData} schema={shadowSchema} />
      </Card>
      <br />
      <Heading size="m">Grid breakpoints</Heading>
      <Card className="h-100 overflow-hidden">
        <Table data={gridBreakpointData} schema={spaceSchema} />
      </Card>
      <br />
      <Heading size="m">Grid Columns</Heading>
      <Paragraph appearance="default">
        The <Text weight="strong">--grid-columns</Text> token has a value of
        <Text weight="strong"> 12 </Text>
        which defines the maximum number of columns in a row.
      </Paragraph>
      <br />
    </div>
  );
};

export default {
  title: 'Design Tokens'
};
