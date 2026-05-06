import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { HeadingAppearance, TextColor } from '@/common.type';
import styles from '@css/components/subheading.module.css';

export interface SubheadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
  /**
   * Text to be rendered
   * @type {string}
   */
  children: React.ReactText;
  /**
   * State of `Subheading`
   */
  appearance?: HeadingAppearance;
  /**
   * Color of `Subheading`
   */
  color?: TextColor;
  /**
   * HTML tag to render the subheading as.
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
}

export const Subheading = React.forwardRef<HTMLHeadingElement, SubheadingProps>((props, ref) => {
  const { appearance = 'default', as, children, className, color, ...rest } = props;

  const classes = classNames(
    {
      [styles.Subheading]: true,
      [styles[`Subheading--${appearance}`]]: !color && appearance,
      [`color-${color}`]: color,
    },
    className
  );

  const componentType = as || 'h4';

  return (
    <GenericText
      ref={ref}
      data-test="DesignSystem-Subheading"
      {...rest}
      className={classes}
      componentType={componentType}
    >
      {children}
    </GenericText>
  );
});

Subheading.displayName = 'Subheading';
Subheading.defaultProps = {
  appearance: 'default',
};

export default Subheading;
