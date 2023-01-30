import * as React from 'react';
import { BaseProps, extractBaseProps } from '@/utils/types';
import classNames from 'classnames';

export interface StackProps extends BaseProps {
  children: React.ReactNode;
  alignment: 'horizontal' | 'vertical';
}

export const Stack = (props: StackProps) => {
  const { children, className, alignment } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      Stack: true,
      ['flex-column']: alignment === 'vertical',
    },
    className
  );

  return (
    <ul data-test="DesignSystem-Stack" {...baseProps} className={classes}>
      {children}
    </ul>
  );
};

Stack.displayName = 'Stack';

Stack.defaultProps = {
  alignment: 'vertical',
};

export default Stack;
