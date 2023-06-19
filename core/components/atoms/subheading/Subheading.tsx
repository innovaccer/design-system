import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { HeadingAppearance, TextColor } from '@/common.type';

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
      Subheading: true,
      [`Subheading--${appearance}`]: !color && appearance,
      [`color-${color}`]: color,
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
