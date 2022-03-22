import * as React from 'react';
import { action } from '@/utils/action';
import Pagination from '../Pagination';

export const BasicPagination = () => {
  return (
    <Pagination type="basic" page={1} totalPages={50} onPageChange={(pageNo) => action(`Page changed: ${pageNo}`)()} />
  );
};

const customCode = `() => {
  return (
    <Pagination
      type= "basic"
      page= {1}
      totalPages={50}
      onPageChange={pageNo => console.log(pageNo)}
    />
  );
}`;

export default {
  title: 'Components/Pagination/Basic Pagination',
  component: Pagination,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Pagination',
        description: 'Basic pagination',
      },
    },
  },
};
