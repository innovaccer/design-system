import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { HeadingAppearance, TextColor } from '@/common.type';
import styles from '../typography.module.css';

export interface SubheadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
  /**
   * Text to be rendered
   * @type {string}
   */
  children: React.ReactText;
  /**
   * State of `Subheading`
   */
  appearance: HeadingAppearance;
  /**
   * Color of `Subheading`
   */
  color?: TextColor;
}

export const Subheading = (props: SubheadingProps) => {
  const { appearance, children, className, color, ...rest } = props;

  const classes = classNames(
    {
      [styles.Subheading]: true,
      [styles[`Subheading--${appearance}`]]: !color && appearance,
      [styles[`color-${color}`]]: color,
    },
    className
  );

  return (
    <GenericText data-test="DesignSystem-Subheading" {...rest} className={classes} componentType={'h4'}>
      {children}
    </GenericText>
  );
};

Subheading.displayName = 'Subheading';
Subheading.defaultProps = {
  appearance: 'default',
};

export default Subheading;
