import * as React from 'react';
import { BaseProps, extractBaseProps } from '@/utils/types';
import classNames from 'classnames';

export interface StackProps extends BaseProps {
  children: React.ReactNode;
}

export const Stack = (props: StackProps) => {
  const { children, className } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      Stack: true,
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

Stack.defaultProps = {};

export default Stack;
