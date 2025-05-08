import * as React from 'react';

import { Card, Heading, Table } from '@/index';
import { getSchema } from './Schema';
import { tokenColors } from './Data';
import { giveBgColor } from './Utilities';

export const colors = () => {
  React.useEffect(() => {
    const collection = document.getElementsByClassName('setBgColor');
    giveBgColor(collection);
  });

  const colorSchema = getSchema('backgroundColor', '', 'p-4');
  return (
    <div>
      <Heading size="xxl">Design Tokens</Heading>
      <br />
      <br />
      <Heading size="m">Colors</Heading>
      <br />
      {tokenColors.map((data, idx) => {
        const heading =
          idx !== 4 && idx !== 9
            ? data[0].token.slice(2)[0].toUpperCase() + data[0].token.slice(3)
            : idx === 4
              ? 'Neutral'
              : 'Others';
        return (
          <div className="mt-5 mb-5" key={idx}>
            <Heading size="s">{heading}</Heading>
            <br />
            <Card className="h-100 overflow-hidden">
              <Table data={data} schema={colorSchema} />
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Styling/Design Tokens/Colors',
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
