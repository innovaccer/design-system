import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import EmptyStateContext from './EmptyStateContext';
import styles from '@css/components/emptyState.module.css';

export interface EmptyActionProps extends BaseProps {
  /**
   * The content to be displayed within the component
   * Can be any renderable React Node.
   */
  children: React.ReactNode;
}

const EmptyStateActions = (props: EmptyActionProps) => {
  const { children, className, ...rest } = props;
  const contextProp = React.useContext(EmptyStateContext);

  const { size = 'standard' } = contextProp;

  const actionWrapperClasses = classNames(
    {
      [styles[`EmptyState-actions--${size}`]]: true,
      [styles['EmptyState-actions']]: true,
    },
    className
  );

  return (
    <div data-test="DesignSystem-EmptyState--Actions" className={actionWrapperClasses} {...rest}>
      {children}
    </div>
  );
};

export default EmptyStateActions;
