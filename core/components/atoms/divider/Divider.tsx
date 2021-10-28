import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

type DividerType = 'basic' | 'header';

export interface DividerProps extends BaseProps {
  /**
   * Determines if orientation of `Divider` is vertical
   */
  vertical: boolean;
  /**
   * Types of `Divider`
   * @default "basic"
   */
  appearance: DividerType;
}

export const Divider = (props: DividerProps) => {
  const { vertical, appearance, className } = props;

  const baseProps = extractBaseProps(props);

  const DividerClass = classNames(
    {
      ['Divider']: true,
      ['Divider--horizontal']: !vertical,
      ['Divider--vertical']: vertical,
      ['Divider--basic']: appearance !== 'header',
      ['Divider--header']: !vertical && appearance === 'header',
    },
    className
  );

  return <hr data-test="DesignSystem-Divider" {...baseProps} className={DividerClass} />;
};

Divider.displayName = 'Divider';
Divider.defaultProps = {
  appearance: 'basic',
  vertical: false,
};

export default Divider;
