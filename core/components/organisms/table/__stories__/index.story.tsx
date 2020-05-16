import * as React from 'react';
import Table from '../Table';

import data from './data';
import schema from './schema';

export const all = () => {
  return (
    <Table
      schema={schema}
      data={data}
      pageSize={15}
    />
  );
}

export default {
  title: 'Organisms|Table',
  component: Table
}