import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { HeadingAppearance, TextColor } from '@/common.type';
import styles from '@css/components/heading.module.css';

export type HeadingSize = 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface HeadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
  /**
   * Text to be rendered
   */
  children: React.ReactText;
  /**
   * State of `Heading`
   */
  appearance: HeadingAppearance;
  /**
   * Size of `Heading`
   */
  size: HeadingSize;
  /**
   * Color of `Text`
   */
  color?: TextColor;
}

const sizeMap = {
  s: 'h5',
  m: 'h4',
  l: 'h3',
  xl: 'h2',
  xxl: 'h1',
};

export const Heading = (props: HeadingProps) => {
  const { appearance, size, children, className, color, ...rest } = props;

  const classes = classNames(
    {
      [styles.Heading]: true,
      [styles[`Heading--${size}`]]: size,
      [styles[`Heading--${appearance}`]]: !color && appearance,
      [`color-${color}`]: color,
    },
    className
  );

  return (
    <GenericText data-test="DesignSystem-Heading" {...rest} className={classes} componentType={sizeMap[size]}>
      {children}
    </GenericText>
  );
};

Heading.displayName = 'Heading';
Heading.defaultProps = {
  appearance: 'default',
  size: 'm',
};

export default Heading;
