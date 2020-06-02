import * as React from 'react';
import { Card, Table } from '@/index';
import data from '../data';
import schema from '../statusSchema';

// CSF format story
export const statusMapper = () => {
  return (
    <Card
      shadow="light"
      style={{
        height: '350px',
      }}
    >
      <Table
        data={data}
        schema={schema}
        totalRecords={data.length}
        statusMapper={(val: string) => val === 'female' ? 'alert' : 'success'}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Table/Variants',
  component: Table
};
