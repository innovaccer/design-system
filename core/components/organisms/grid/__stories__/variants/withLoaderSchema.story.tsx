import * as React from 'react';
import { Card, Grid } from '@/index';
import loaderSchema from '../_common_/simpleLoaderSchema';
import data from '../_common_/data';
import schema from '../_common_/simpleSchema';
import { boolean, number } from '@storybook/addon-knobs';

// CSF format story
export const withLoaderSchema = () => {
  const loading = boolean(
    'loading',
    true
  );

  const error = boolean(
    'error',
    false
  );

  const pageSize = number(
    'pageSize',
    5
  );

  const withCheckbox = boolean(
    'withCheckbox',
    true
  );

  const applyLoaderSchema = boolean(
    'applyLoaderSchema',
    false
  );

  const applySchema = boolean(
    'applySchema',
    true
  );

  const applyData = boolean(
    'applyData',
    true
  );

  return (
    <div
      style={{
        height: '350px',
        // overflow: 'hidden'
      }}
    >
      <Card
        className="h-100"
      >
        <Grid
          loading={loading}
          error={error}
          pageSize={pageSize}
          withCheckbox={withCheckbox}
          loaderSchema={applyLoaderSchema ? loaderSchema : []}
          data={applyData ? data : []}
          schema={applySchema ? schema : []}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Organisms|Grid/Variants',
  component: Grid
};
