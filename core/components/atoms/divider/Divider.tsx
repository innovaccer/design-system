import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps, BaseHtmlProps } from '@/utils/types';
import styles from '@css/components/divider.module.css';

type DividerType = 'basic' | 'header';

export interface DividerProps extends BaseProps, BaseHtmlProps<HTMLHRElement> {
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
  const { vertical, appearance, className, ...rest } = props;

  const baseProps = extractBaseProps(props);

  const isDecorative =
    rest.role === 'none' ||
    rest.role === 'presentation' ||
    rest['aria-hidden'] === true ||
    rest['aria-hidden'] === 'true';

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
      {...rest}
      {...baseProps}
      className={DividerClass}
      {...(!isDecorative && { 'aria-orientation': vertical ? 'vertical' : 'horizontal' })}
    />
  );
};

Divider.displayName = 'Divider';
Divider.defaultProps = {
  appearance: 'basic',
  vertical: false,
};

export default Divider;
