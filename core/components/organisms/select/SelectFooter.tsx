import { BaseProps } from '@/utils/types';
import * as React from 'react';

interface SelectFooterProps extends BaseProps {
  /**
   * Button / ButtonGroups to be added inside `ActionButton`
   */
  children?: React.ReactNode;
}

export const SelectFooter = (props: SelectFooterProps) => {
  const { children, ...rest } = props;
  return (
    <div className="Select-buttonWrapper" {...rest}>
      {children}
    </div>
  );
};

export default SelectFooter;
