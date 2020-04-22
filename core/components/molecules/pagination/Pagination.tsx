import * as React from 'react';
import Button from '@/components/atoms/button';
import Text from '@/components/atoms/text';
import Input from '@/components/atoms/input';

import classNames from 'classnames';

export type PaginationType = 'basic' | 'jump';

export interface PaginationProps {
  /**
   * @default "basic"
   */
  type?: PaginationType;
  /**
   * Total number of pages
   */
  totalPages: number;
  /**
   * Current page
   */
  page?: number;
  /**
   *  Callback when page is changed
   */
  onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const {
    type = 'basic',
    totalPages,
    onPageChange
  } = props;

  const [page, setPage] = React.useState(props.page ? props.page : 1);

  const wrapperClass = classNames({
    ['Pagination']: true,
    [`Pagination--${type}`]: type
  });

  React.useEffect(() => {
    if (page) onPageChange(page);
  }, [page]);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const val = parseInt(e.target.value.trim(), 10);
    if (!val || (val > 0 && val <= totalPages)) {
      setPage(val);
    }
  };

  const buttonHelper: string[] = [];
  if (type === 'basic') buttonHelper.push('mx-3');
  else buttonHelper.push('mx-4');

  return (
    <div className={wrapperClass}>
      <Button
        onClick={() => setPage(1)}
        disabled={page === 1}
        appearance="transparent"
        size="large"
        icon="first_page"
      />
      <div className={['ml-4', ...buttonHelper].join(' ')}>
        <Button
          onClick={() => (page > 1 && setPage(page - 1))}
          disabled={page === 1}
          size="large"
          icon="navigate_before"
        />
      </div>
      {type === 'jump' && (
        <div className="Pagination-pageIndex">
          <Input
            name="page"
            type="number"
            size="large"
            clearButton={false}
            onChange={inputChangeHandler}
            value={`${page}`}
          />
          <Text>{` of ${totalPages} pages`}</Text>
        </div>
      )}
      <div className={['mr-4', ...buttonHelper].join(' ')}>
        <Button
          onClick={() => (page < totalPages && setPage(page + 1))}
          disabled={page === totalPages}
          size="large"
          icon="navigate_next"
        />
      </div>
      <Button
        onClick={() => setPage(totalPages)}
        disabled={page === totalPages}
        appearance="transparent"
        size="large"
        icon="last_page"
      />
    </div>
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;
