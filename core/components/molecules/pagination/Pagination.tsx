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

  const [page, setPage] = React.useState<number>(props.page ? props.page : 1);
  const [init, setInit] = React.useState<boolean>(false);

  const wrapperClass = classNames({
    ['Pagination']: true,
    [`Pagination--${type}`]: type,
  });

  const nextButtonWrapperClass = classNames({
    ['Pagination-buttonWrapper']: true,
    ['Pagination-buttonWrapper--next']: true,

  });

  const prevButtonWrapperClass = classNames({
    ['Pagination-buttonWrapper']: true,
    ['Pagination-buttonWrapper--previous']: true,
  });

  React.useEffect(() => {
    if (init) onPageChange(page);
  }, [page]);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const val = parseInt(e.target.value.trim(), 10);
    if (!val || (val > 0 && val <= totalPages)) {
      setPage(val);
    }
  };

  const onClickHandler = (buttonType: 'prev' | 'next') => {
    switch (buttonType) {
      case 'prev':
        if (page > 1) setPage(page - 1);
        break;
      case 'next':
        if (page < totalPages) setPage(page + 1);
        break;
    }
    setInit(true);
  };

  const buttonHelper: string[] = [];
  if (type === 'basic') buttonHelper.push('mx-3');
  else buttonHelper.push('mx-4');

  return (
    <div className={wrapperClass}>
      <div className={prevButtonWrapperClass}>
        <Button
          onClick={() => setPage(1)}
          disabled={page === 1}
          appearance="transparent"
          size="large"
          icon="first_page"
        />
        <div className={['ml-4', ...buttonHelper].join(' ')}>
          <Button
            onClick={() => onClickHandler('prev')}
            disabled={page === 1}
            size="large"
            icon="navigate_before"
          />
        </div>
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
      <div className={nextButtonWrapperClass}>
        <div className={['mr-4', ...buttonHelper].join(' ')}>
          <Button
            onClick={() => onClickHandler('next')}
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
    </div >
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;
