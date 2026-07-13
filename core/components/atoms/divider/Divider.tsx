import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/divider.module.css';

type DividerType = 'basic' | 'header';

export type DividerProps = {
  /**
   * Determines if orientation of `Divider` is vertical
   */
  vertical?: boolean;
  /**
   * Types of `Divider`
   * @default "basic"
   */
  appearance?: DividerType;
  /**
   * Hides the divider from the accessibility tree when set to `true`
   */
  'aria-hidden'?: boolean | 'true' | 'false';
} & BaseProps;

export const Divider = (props: DividerProps) => {
  const { vertical = false, appearance = 'basic', className, 'aria-hidden': ariaHidden } = props;

  const baseProps = extractBaseProps(props);

  const DividerClass = classNames(
    {
      [styles['Divider']]: true,
      [styles['Divider--horizontal']]: !vertical,
      [styles['Divider--vertical']]: vertical,
      [styles['Divider--basic']]: !vertical && appearance !== 'header',
      [styles['Divider--header']]: !vertical && appearance === 'header',
    },
    className
  );

  return (
    <hr
      data-test="DesignSystem-Divider"
      {...baseProps}
      className={DividerClass}
      aria-orientation={vertical ? 'vertical' : 'horizontal'}
      aria-hidden={ariaHidden}
    />
  );
};

Divider.displayName = 'Divider';

export default Divider;
