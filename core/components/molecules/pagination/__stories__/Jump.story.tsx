import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Pagination from '../Pagination';

// CSF format story
export const PaginationWithJump = () => {
  const innerStyle = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  };

  return (
    <div className="d-flex">
      <div  style={innerStyle}>
        <Pagination
          type="jump"
          page={1}
          totalPages={50}
          onPageChange={pageNo => action(`Page changed: ${pageNo}`)()}
        />
      </div>
     </div>
  );
};

const customCode = `() => {
  const innerStyle = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  };

  return (
    <div className="d-flex">
      <div  style={innerStyle}>
        <Pagination
          type="jump"
          page={1}
          totalPages={50}
          onPageChange={(pageNo) => console.log(pageNo) }
        />
      </div>
     </div>
  );
}`;

export default {
  title: 'Components/Pagination/Pagination With Jump',
  component: Pagination,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Pagination',
        description:'Pagination with jump'
      }
    }
  }
};
