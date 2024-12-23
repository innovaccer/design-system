import { BaseProps } from '@/utils/types';
import * as React from 'react';
import styles from '@css/components/select.module.css';

interface SelectFooterProps extends BaseProps {
  /**
   * Button / ButtonGroups to be added inside `ActionButton`
   */
  children?: React.ReactNode;
}

export const SelectFooter = (props: SelectFooterProps) => {
  const { children, ...rest } = props;
  return (
    <div className={styles['Select-buttonWrapper']} {...rest}>
      {children}
    </div>
  );
};

export default SelectFooter;
