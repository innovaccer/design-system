import * as React from 'react';
import { select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Pagination from '../Pagination';

// CSF format story
export const all = () => {
  const paginationType = select(
    'type',
    ['basic', 'jump'],
    undefined
  );

  const page = number(
    'page',
    1
  );

  const totalPages = number(
    'totalPages',
    50
  );

  return (
    <Pagination
      type={paginationType}
      page={page}
      totalPages={totalPages}
      onPageChange={pageNo => action(`No-change-action: ${pageNo}`)()}
    />
  );
};

export default {
  title: 'Molecules|Pagination',
  component: Pagination
};
