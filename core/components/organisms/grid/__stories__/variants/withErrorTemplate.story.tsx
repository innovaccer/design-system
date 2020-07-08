import * as React from 'react';
import { Card, Grid } from '@/index';
import { errorTemplate } from '../_common_/errorTemplate';

// CSF format story
export const withErrorTemplate = () => {
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
          data={[]}
          schema={[]}
          totalRecords={0}
          errorTemplate={() => errorTemplate}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Organisms|Grid/Variants',
  component: Grid
};
