import * as React from 'react';
import { Card, Table } from '@/index';
import { errorTemplate } from '../errorTemplate';

// CSF format story
export const withErrorTemplate = () => {
  return (
    <Card
      shadow="light"
      style={{
        height: '350px',
      }}
    >
      <Table
        data={[]}
        schema={[]}
        totalRecords={0}
        errorTemplate={() => errorTemplate}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Table/Variants',
  component: Table
};
