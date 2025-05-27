import * as React from 'react';
import Text from '@/components/atoms/text';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { MessageAppearance } from '@/common.type';
import styles from '@css/components/statusHint.module.css';
import pageHeaderStyles from '@css/components/pageHeader.module.css';

export interface StatusHintProps extends BaseProps {
  /**
   * Describes label of the `Status Hint`
   */
  children: React.ReactText | React.ReactNode;
  /**
   * Color of Icon
   */
  appearance: MessageAppearance;
  /**
   * Trims label if it is too long
   */
  truncateLabel?: boolean;
  /**
   * Handler to be called when `Status Hint` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Handler to be called when mouse pointer enters `Status Hint`.
   */
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Handler to be called when mouse pointer leaves `Status Hint`.
   */
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const StatusHint = (props: StatusHintProps) => {
  const { appearance, children, onMouseEnter, onMouseLeave, onClick, truncateLabel, className } = props;

  const baseProps = extractBaseProps(props);

  const StatusHintClass = classNames(
    {
      [styles.StatusHint]: true,
      [pageHeaderStyles.StatusHint]: true,
    },
    className
  );

  const StatusHintIconClass = classNames({
    [styles['StatusHint-icon']]: true,
    [styles[`StatusHint--${appearance}`]]: appearance,
  });

  const StatusHintTextClass = classNames({
    ['ellipsis--noWrap']: truncateLabel,
  });

  const renderChildren = () => {
    if (typeof children === 'string' || typeof children === 'number') {
      return (
        <Text data-test="DesignSystem-StatusHint--Text" weight={'medium'} className={StatusHintTextClass}>
          {children}
        </Text>
      );
    }
    return children;
  };

  return (
    // TODO(a11y): fix accessibility
    /* eslint-disable */
    <div
      data-test="DesignSystem-StatusHint"
      {...baseProps}
      className={StatusHintClass}
      onClick={(e) => onClick && onClick(e)}
      onMouseEnter={(e) => onMouseEnter && onMouseEnter(e)}
      onMouseLeave={(e) => onMouseLeave && onMouseLeave(e)}
    >
      {/* eslint-enable */}
      <span data-test="DesignSystem-StatusHint--Icon" className={StatusHintIconClass} />
      {renderChildren()}
    </div>
  );
};

StatusHint.displayName = 'StatusHint';
StatusHint.defaultProps = {
  appearance: 'default',
};

export default StatusHint;
