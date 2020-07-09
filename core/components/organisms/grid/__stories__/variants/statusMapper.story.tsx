import * as React from 'react';
import { Card, Grid } from '@/index';
import data from '../_common_/data';
import schema from '../_common_/statusSchema';

// CSF format story
export const statusMapper = () => {
  return (
    <div
      style={{
        height: '350px',
      }}
    >
      <Card
        shadow="light"
        className="h-100"
      >
        <Grid
          data={data}
          schema={schema}
          totalRecords={data.length}
          statusMapper={(val: string) => val === 'female' ? 'alert' : 'success'}
        />
      </Card>
    </div >
  );
};

export default {
  title: 'Organisms|Grid/Variants',
  component: Grid
};
