import * as React from 'react';
import { Card, Table } from '@/index';
import { errorTemplate } from '@/components/organisms/grid/__stories__/_common_/errorTemplate';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';

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
        <Table
          schema={schema}
          data={[]}
          error={true}
          errorTemplate={() => errorTemplate}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Organisms|Table/Variants',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead']
        }
      }
    }
  }
};
