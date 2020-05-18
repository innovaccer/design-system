import * as React from 'react';
import Table, { TableProps } from '../Table';

import data from './data';
import schema from './schema';

const fetchData: TableProps['fetchData'] = (val) => {
  const {
    page,
    pageSize
  } = val;

  return new Promise(resolve => {
    setTimeout(() => {
      const start = (page-1)*pageSize;
      const end = start + pageSize;
      const slicedData = data.slice(start, end);
      resolve({
        totalRecords: data.length,
        data: slicedData
      });
    }, 2000);
  })
}

export const all = () => {
  return (
    <Table
      schema={schema}
      data={data}
      pageSize={15}
      async={true}
      fetchData={fetchData}
    />
  );
}

export default {
  title: 'Organisms|Table',
  component: Table
}