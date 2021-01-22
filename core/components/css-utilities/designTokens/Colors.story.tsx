import * as React from 'react';

import { Card, Heading, Subheading, Table } from '@/index';
import { colorSchema } from './Schema';
import { tokenColors } from './Data';

export const colors = () => {
  return (
    <div>
      <Heading size="xxl">Design Tokens</Heading>
      <br />
      <br />
      <Heading size="m">Colors</Heading>
      <br />
      {tokenColors.map((data, idx) => {
        return (
          <div
            style={{
              height: '350px',
            }}
            className="mt-5 mb-10"
            key={idx}
          >
            <Subheading>
              {idx !== 4 ? data[0].token.slice(2) : 'Neutral'}
            </Subheading>
            <Card className="h-100">
              <Table data={data} schema={colorSchema} />
            </Card>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Design Tokens',
  component: colors,
};
