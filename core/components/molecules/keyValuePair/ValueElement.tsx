import * as React from 'react';
import { Text } from '@/index';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type ValueElementProps = {
  /**
   * React Element to be added inside `ValueElement`
   */
  children?: React.ReactNode;
  /**
   * Specify value to be displayed in `ValueElement`
   */
  value?: string | number;
} & BaseProps;

export const ValueElement = (props: ValueElementProps) => {
  const { children, value, className } = props;

  const baseProps = extractBaseProps(props);

  const valueClassNames = classNames('m-0', className);

  if (children) {
    return (
      <dd data-test="DesignSystem-KeyValuePair-ValueElement" {...baseProps} className={valueClassNames}>
        {children}
      </dd>
    );
  }

  return (
    <dd data-test="DesignSystem-KeyValuePair-ValueElement" {...baseProps} className={valueClassNames}>
      {value && <Text>{value}</Text>}
    </dd>
  );
};

export default ValueElement;
