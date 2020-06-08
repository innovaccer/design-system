import * as React from 'react';
import { Card, Grid } from '@/index';
import loaderSchema from '../_common_/simpleLoaderSchema';

// CSF format story
export const withLoaderSchema = () => {
  return (
    <Card
      shadow="light"
      style={{
        height: '350px',
      }}
    >
      <Grid
        loading={true}
        loaderSchema={loaderSchema}
        data={[]}
        schema={[]}
        totalRecords={0}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Grid/Variants',
  component: Grid
};
