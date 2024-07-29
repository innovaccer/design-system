import * as React from 'react';
import KeyElement from './KeyElement';
import ValueElement from './ValueElement';
import { BaseProps } from '@/utils/types';
import classNames from 'classnames';

export interface KeyValuePairProps extends BaseProps {
  /**
   * React Element to be added inside `KeyValuePair`
   */
  children: React.ReactNode;
}

export const KeyValuePair = (props: KeyValuePairProps) => {
  const { children, className } = props;

  const pairClassNames = classNames('m-0', className);

  return (
    <dl data-test="DesignSystem-KeyValuePair" {...props} className={pairClassNames}>
      {children}
    </dl>
  );
};

KeyValuePair.Key = KeyElement;
KeyValuePair.Value = ValueElement;

export default KeyValuePair;
