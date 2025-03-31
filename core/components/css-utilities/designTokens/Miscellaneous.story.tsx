import * as React from 'react';

import { Card, Heading, Table, Text } from '@/index';
import { getSchema, spaceSchema } from './Schema';
import { shadowData, gridBreakpointData } from './Data';
import Paragraph from '@/components/atoms/paragraph';

export const miscellaneous = () => {
  const shadowSchema = getSchema('boxShadow', 'aA bB cC', 'p-7');

  return (
    <div>
      <Heading appearance="default" size="xxl">
        Design Tokens
      </Heading>
      <br />
      <br />
      <Heading appearance="default" size="m">
        Miscellaneous
      </Heading>
      <br />
      <Heading appearance="default" size="m">
        Shadow
      </Heading>
      <Card className="h-100 overflow-hidden">
        <Table data={shadowData} schema={shadowSchema} />
      </Card>
      <br />
      <Heading appearance="default" size="m">
        Grid breakpoints
      </Heading>
      <Card className="h-100 overflow-hidden">
        <Table data={gridBreakpointData} schema={spaceSchema} />
      </Card>
      <br />
      <Heading appearance="default" size="m">
        Grid Columns
      </Heading>
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
  title: 'Styling/Design Tokens/Miscellaneous',
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
