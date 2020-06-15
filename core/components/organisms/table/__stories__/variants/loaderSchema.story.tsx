import * as React from 'react';
import { Card } from '@/index';
import Table from '../../Table';
import loaderSchema from '../../../grid/__stories__/_common_/loaderSchema';

export const syncLoaderSchema = () => {
  return (
    <Card
      style={{
        height: '350px',
        // overflow: 'hidden'
      }}
    >
      <Table
        loaderSchema={loaderSchema}
        data={[]}
        schema={[]}
        pageSize={5}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Table/Variants',
  component: Table
};
