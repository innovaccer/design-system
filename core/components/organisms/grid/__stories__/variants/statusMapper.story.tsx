import * as React from 'react';
import { Card, Grid } from '@/index';
import data from '../_common_/data';
import schema from '../_common_/statusSchema';

// CSF format story
export const statusMapper = () => {
  return (
    <Card
      shadow="light"
      style={{
        height: '350px',
      }}
    >
      <Grid
        data={data}
        schema={schema}
        totalRecords={data.length}
        statusMapper={(val: string) => val === 'female' ? 'alert' : 'success'}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Grid/Variants',
  component: Grid
};
