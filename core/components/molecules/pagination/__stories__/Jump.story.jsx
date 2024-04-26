import * as React from 'react';
import { action } from '@/utils/action';
import Pagination from '../Pagination';

// CSF format story
export const PaginationWithJump = () => {
  return (
    <div className="d-flex">
      <div className="d-flex flex-column align-items-center">
        <Pagination
          type="jump"
          page={1}
          totalPages={50}
          onPageChange={(pageNo) => action(`Page changed: ${pageNo}`)()}
        />
      </div>
    </div>
  );
};

const customCode = `() => {
  return (
    <div className="d-flex">
      <div className="d-flex flex-column align-items-center">
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
        description: 'Pagination with jump',
      },
    },
  },
};
