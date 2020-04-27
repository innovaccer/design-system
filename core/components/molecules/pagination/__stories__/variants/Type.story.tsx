import * as React from 'react';
import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Pagination, { PaginationType } from '../../Pagination';
import Text from '@/components/atoms/text';

// CSF format story
export const type = () => {
  const paginationTypes: PaginationType[] = ['basic', 'jump'];

  const page = number(
    'page',
    1
  );

  const totalPages = number(
    'totalPages',
    50
  );

  const style = {
    display: 'flex',
  };

  const innerStyle = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  };

  return (
    <div style={style}>
      {
        paginationTypes.map((displayType, ind) => {
          return (
            <div key={ind} style={innerStyle}>
              <Pagination
                type={displayType}
                page={page}
                totalPages={totalPages}
                onPageChange={pageNo => action(`No-change-action: ${pageNo}`)()}
              />
              <br />
              <Text weight="strong">{displayType}</Text>
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Molecules|Pagination/Variants',
  component: Pagination,
  parameters: {
    docs: {
      docPage: {
        title: 'Pagination'
      }
    }
  }
};
