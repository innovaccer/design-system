import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/card.module.css';

export interface CardHeaderProps extends BaseProps {
  /**
   * React component to be rendered inside `CardHeader`
   */
  children: React.ReactNode;
}

export const CardHeader = (props: CardHeaderProps) => {
  const { className, children } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles['Card-header']]: true,
    },
    className
  );

  return (
    <div data-test="DesignSystem-CardHeader" {...baseProps} className={classes}>
      {children}
    </div>
  );
};

CardHeader.displayName = 'CardHeader';

export default CardHeader;
