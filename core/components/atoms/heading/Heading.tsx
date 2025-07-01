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
  children: string | number;
  /**
   * State of `Heading`
   */
  appearance?: HeadingAppearance;
  /**
   * Size of `Heading`
   */
  size?: HeadingSize;
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

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { appearance = 'default', size = 'm', children, className, color, ...rest } = props;

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
    <GenericText ref={ref} data-test="DesignSystem-Heading" {...rest} className={classes} componentType={sizeMap[size]}>
      {children}
    </GenericText>
  );
});

Heading.displayName = 'Heading';

export default Heading;
