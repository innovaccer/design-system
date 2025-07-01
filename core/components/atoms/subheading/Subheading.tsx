import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { HeadingAppearance, TextColor } from '@/common.type';
import styles from '@css/components/subheading.module.css';

export interface SubheadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
  /**
   * Text to be rendered
   * @type {string | number}
   */
  children: string | number;
  /**
   * State of `Subheading`
   * @default default
   */
  appearance?: HeadingAppearance;
  /**
   * Color of `Subheading`
   */
  color?: TextColor;
}

export const Subheading = React.forwardRef<HTMLHeadingElement, SubheadingProps>((props, ref) => {
  const { appearance = 'default', children, className, color, ...rest } = props;

  const classes = classNames(
    {
      [styles.Subheading]: true,
      [styles[`Subheading--${appearance}`]]: !color && appearance,
      [`color-${color}`]: color,
    },
    className
  );

  return (
    <GenericText ref={ref} data-test="DesignSystem-Subheading" {...rest} className={classes} componentType={'h4'}>
      {children}
    </GenericText>
  );
});

Subheading.displayName = 'Subheading';

export default Subheading;
