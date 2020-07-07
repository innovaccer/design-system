import * as React from 'react';
import loaderSchema from '../../../grid/__stories__/_common_/loaderSchema';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import { boolean, number } from '@storybook/addon-knobs';
import { Card, Grid, Table } from '@/index';

export const syncLoaderSchema = () => {
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
    true
  );

  const applySchema = boolean(
    'applySchema',
    false
  );

  const applyData = boolean(
    'applyData',
    false
  );

  return (
    <Card
      style={{
        height: '350px',
        // overflow: 'hidden'
      }}
    >
      <Table
        loading={loading}
        error={error}
        pageSize={pageSize}
        withCheckbox={withCheckbox}
        loaderSchema={applyLoaderSchema ? loaderSchema : []}
        data={applyData ? data : []}
        schema={applySchema ? schema : []}
        showMenu={true}
        withHeader={true}
        headerOptions={{
          withSearch: true
        }}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Table/Variants',
  component: Table,
  subcomponents: { Grid },
  parameters: {
    docs: {
      docPage: {
        props: {
          exclude: ['showHead']
        }
      }
    }
  }
};
