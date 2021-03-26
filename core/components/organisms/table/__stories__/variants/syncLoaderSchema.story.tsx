import * as React from 'react';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import { boolean, number } from '@storybook/addon-knobs';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';

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
    <div
      style={{
        height: '350px',
        // overflow: 'hidden'
      }}
    >
      <Card className="h-100 overflow-hidden">
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
    </div>
  );
};

export default {
  title: 'Components/Table/Variants/Sync Loader Schema',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead']
        },
        noStory: true
      }
    }
  }
};
