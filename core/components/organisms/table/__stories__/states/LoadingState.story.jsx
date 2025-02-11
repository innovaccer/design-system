import * as React from 'react';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';

export const loadingState = () => {
  const loading = true;
  const pageSize = 5;
  const withCheckbox = true;

  return (
    <div className="vh-50">
      <Card className="h-100 overflow-hidden">
        <Table
          loading={loading}
          pageSize={pageSize}
          withCheckbox={withCheckbox}
          loaderSchema={loaderSchema}
          data={[]}
          schema={[]}
          showMenu={true}
          withHeader={true}
          headerOptions={{
            withSearch: true,
          }}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Components/Table/States/Loading State',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        title: 'Loading State in Table',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
