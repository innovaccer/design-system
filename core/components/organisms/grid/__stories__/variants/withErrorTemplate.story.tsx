import * as React from 'react';
import { Card, Grid } from '@/index';
import { errorTemplate } from '../_common_/errorTemplate';

// CSF format story
export const withErrorTemplate = () => {
  return (
    <Card
      shadow="light"
      style={{
        height: '350px',
      }}
    >
      <Grid
        data={[]}
        schema={[]}
        totalRecords={0}
        errorTemplate={() => errorTemplate}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Grid/Variants',
  component: Grid
};
