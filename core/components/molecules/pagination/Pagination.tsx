import * as React from 'react';
import { Text, MetricInput, Button } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';

import classNames from 'classnames';

export type PaginationType = 'basic' | 'jump';

export interface PaginationProps extends BaseProps {
  /**
   * `Pagination` component type
   */
  type: PaginationType;
  /**
   * Total number of pages
   */
  totalPages: number;
  /**
   * Current page
   */
  page: number;
  /**
   *  Callback when page is changed
   */
  onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { type, totalPages, onPageChange, className } = props;

  const baseProps = extractBaseProps(props);

  const [page, setPage] = React.useState<number>(props.page);
  const [init, setInit] = React.useState<boolean>(false);

  React.useEffect(() => {
    setPage(props.page);
  }, [props.page]);

  const wrapperClass = classNames(
    {
      ['Pagination']: true,
      [`Pagination--${type}`]: type,
    },
    className
  );

  const nextButtonWrapperClass = classNames({
    ['Pagination-buttonWrapper']: true,
    ['Pagination-buttonWrapper--next']: true,
  });

  const prevButtonWrapperClass = classNames({
    ['Pagination-buttonWrapper']: true,
    ['Pagination-buttonWrapper--previous']: true,
  });

  React.useEffect(() => {
    if (init) {
      if (page >= 1 && page <= totalPages) onPageChange(page);
    }
  }, [page]);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const val = +e.target.value.trim();
    if (val >= 0 && val <= totalPages) {
      if (!init) setInit(true);
      setPage(val);
    }
  };

  const onClickHandler = (buttonType: 'prev' | 'next' | 'first' | 'last') => {
    setInit(true);
    switch (buttonType) {
      case 'first':
        setPage(1);
        break;
      case 'last':
        setPage(totalPages);
        break;
      case 'prev':
        if (page > 1) setPage(page - 1);
        break;
      case 'next':
        if (page < totalPages) setPage(page + 1);
        break;
    }
  };

  return (
    <div data-test="DesignSystem-Pagination" {...baseProps} className={wrapperClass}>
      <div className={prevButtonWrapperClass}>
        <Button
          onClick={() => onClickHandler('first')}
          disabled={page <= 1}
          appearance="transparent"
          icon="first_page"
          data-test="DesignSystem-Pagination--FirstButton"
        />
        <Button
          onClick={() => onClickHandler('prev')}
          disabled={page <= 1}
          icon="navigate_before"
          data-test="DesignSystem-Pagination--PrevButton"
          className="ml-4 mr-3"
        />
      </div>
      {type === 'jump' && (
        <div className="Pagination-pageIndex">
          <MetricInput
            name="page"
            className="Pagination-MetricInput"
            onChange={inputChangeHandler}
            value={`${page === 0 ? '' : page}`}
            data-test="DesignSystem-Pagination--Input"
          />
          <Text>{` of ${totalPages} pages`}</Text>
        </div>
      )}
      <div className={nextButtonWrapperClass}>
        <Button
          onClick={() => onClickHandler('next')}
          disabled={page >= totalPages}
          icon="navigate_next"
          data-test="DesignSystem-Pagination--NextButton"
          className="mr-4 ml-3"
        />
        <Button
          onClick={() => onClickHandler('last')}
          disabled={page >= totalPages}
          appearance="transparent"
          icon="last_page"
          data-test="DesignSystem-Pagination--LastButton"
        />
      </div>
    </div>
  );
};

Pagination.displayName = 'Pagination';
Pagination.defaultProps = {
  type: 'basic',
  page: 1,
  totalPages: 1,
};

export default Pagination;
