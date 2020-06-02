import * as React from 'react';
import { Card, Table } from '@/index';
import loaderSchema from '../simpleLoaderSchema';

// CSF format story
export const withLoaderSchema = () => {
  return (
    <Card
      shadow="light"
      style={{
        height: '350px',
      }}
    >
      <Table
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
  title: 'Organisms|Table/Variants',
  component: Table
};
