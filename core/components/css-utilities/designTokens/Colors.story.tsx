import * as React from 'react';

import { Card, Heading, Table } from '@/index';
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
              height: '311px',
            }}
            className="mt-5 mb-10"
            key={idx}
          >
            <Heading size="s">
              {idx !== 4 ? data[0].token.slice(2)[0].toUpperCase() + data[0].token.slice(3) : 'Neutral'}
            </Heading>
            <br />
            <Card className="h-100 overflow-hidden">
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
