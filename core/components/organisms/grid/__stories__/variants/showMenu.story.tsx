import * as React from 'react';
import data from '../_common_/data';
import schema from '../_common_/simpleSchema';
import { Card, Heading, Grid } from '@/index';
import { GridProps } from '@/index.type';

// CSF format story
export const showMenu = () => {
  const values: GridProps['showMenu'][] = [true, false];

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  return (
    // @ts-ignore
    <div style={style}>
      {values.map((v, index) => (
        <div
          key={index}
          style={{
            margin: '20px',
            width: '45%'
          }}
        >
          <Heading>{`showMenu: ${v}`}</Heading>
          <Card
            shadow="light"
            style={{
              height: '350px',
            }}
          >
            <Grid
              showMenu={v}
              data={data}
              schema={schema}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Organisms|Grid/Variants',
  component: Grid
};
