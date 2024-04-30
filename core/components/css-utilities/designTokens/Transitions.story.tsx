import * as React from 'react';
import { Card, Heading, Table } from '@/index';
import { spaceSchema } from './Schema';
import { transitionsCurveData, transitionsDurationData } from './Data';

export const transitions = () => {
  return (
    <div>
      <Heading size="xxl">Design Tokens</Heading>
      <br />
      <br />
      <Heading size="m">Transitions</Heading>
      <br />
      <Heading size="m">Transition curve</Heading>
      <Card className="h-100 overflow-hidden">
        <Table data={transitionsCurveData} schema={spaceSchema} />
      </Card>
      <br />
      <Heading size="m">Transition Duration</Heading>
      <Card className="h-100 overflow-hidden">
        <Table data={transitionsDurationData} schema={spaceSchema} />
      </Card>
      <br />
    </div>
  );
};

export default {
  title: 'Styling/Design Tokens/Transitions',
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
