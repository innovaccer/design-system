import * as React from 'react';
import { Card } from '@/index';
import Table from '../../Table';
import loaderSchema from '../../../grid/__stories__/_common_/loaderSchema';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';

export const sync = () => {
  return (
    <Card
      style={{
        height: '350px',
        // overflow: 'hidden'
      }}
    >
      <Table
        loaderSchema={loaderSchema}
        data={data}
        schema={schema}
        withHeader={true}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Table/Variants',
  component: Table
};
