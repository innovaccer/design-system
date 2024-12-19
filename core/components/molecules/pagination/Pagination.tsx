import * as React from 'react';
import { debounce } from 'throttle-debounce';
import { Text, MetricInput, Button } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { isNaturalNumber } from '@/utils/validators';
import styles from '@css/components/pagination.module.css';

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
   * Debounce duration to call in case of page jump
   */
  pageJumpDebounceDuration: number;
  /**
   *  Callback when page is changed
   */
  onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { type, totalPages, onPageChange, className, pageJumpDebounceDuration } = props;

  const baseProps = extractBaseProps(props);

  const [page, setPage] = React.useState<number>(props.page);
  const [init, setInit] = React.useState<boolean>(false);
  const [debounceCancelCounter, setDebounceCancelCounter] = React.useState<number>(0);

  const debouncePageChange = React.useCallback(debounce(pageJumpDebounceDuration, onPageChange), [
    debounceCancelCounter,
  ]);

  React.useEffect(() => {
    setPage(props.page);
  }, [props.page]);

  const wrapperClass = classNames(
    {
      [styles['Pagination']]: true,
      [styles[`Pagination--${type}`]]: type,
    },
    className
  );

  const nextButtonWrapperClass = classNames({
    [styles['Pagination-buttonWrapper']]: true,
    [styles['Pagination-buttonWrapper--next']]: true,
  });

  const prevButtonWrapperClass = classNames({
    [styles['Pagination-buttonWrapper']]: true,
    [styles['Pagination-buttonWrapper--previous']]: true,
  });

  React.useEffect(() => {
    if (init) {
      if (page >= 1 && page <= totalPages) {
        debouncePageChange(page);
      } else {
        /**
         * On removing a page number on UI via backspace, debounce malfunctions if page is not within desired range.
         * Hence, we remove the debounce function via cancel method.
         */
        debouncePageChange.cancel();
        /**
         * Since debouncePageChange is cached via React.useCallback,
         * cancel method above removes the single debounce function instance available.
         * To make a new instance available, we have to update the dependency object.
         */
        setDebounceCancelCounter((prev) => prev + 1);
      }
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

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isNaturalNumber(e.key)) {
      e.preventDefault();
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
          className={styles['Pagination-button']}
          data-test="DesignSystem-Pagination--FirstButton"
        />
        <Button
          onClick={() => onClickHandler('prev')}
          disabled={page <= 1}
          icon="navigate_before"
          data-test="DesignSystem-Pagination--PrevButton"
          className={`ml-4 mr-3 ${styles['Pagination-button']}`}
        />
      </div>
      {type === 'jump' && (
        <div className={styles['Pagination-pageIndex']}>
          <MetricInput
            name="page"
            className={styles['Pagination-MetricInput']}
            onChange={inputChangeHandler}
            value={`${isNaturalNumber(page) ? page : ''}`}
            data-test="DesignSystem-Pagination--Input"
            onKeyPress={onKeyPressHandler}
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
          className={`ml-3 mr-4 ${styles['Pagination-button']}`}
        />
        <Button
          onClick={() => onClickHandler('last')}
          disabled={page >= totalPages}
          appearance="transparent"
          icon="last_page"
          className={styles['Pagination-button']}
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
  pageJumpDebounceDuration: 750,
};

export default Pagination;
