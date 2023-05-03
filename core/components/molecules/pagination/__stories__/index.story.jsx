import * as React from 'react';
import { action } from '@/utils/action';
import Pagination from '../Pagination';

// CSF format story
export const all = () => {
  const paginationType = 'jump';

  const page = 1;

  const totalPages = 50;

  return (
    <Pagination
      type={paginationType}
      page={page}
      totalPages={totalPages}
      onPageChange={(pageNo) => action(`No-change-action: ${pageNo}`)()}
    />
  );
};

export default {
  title: 'Navigation/Pagination/All',
  component: Pagination,
};
