import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { HeadingAppearance } from '../../../commonTypes';

export type HeadingSize = 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface HeadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
  /**
   * Text to be rendered
   */
  children: React.ReactText;
  /**
   * Color of `Heading`
   */
  appearance: HeadingAppearance;
  /**
   * size of `Heading`
   */
  size: HeadingSize;
}

const sizeMap = {
  s: 'h5',
  m: 'h4',
  l: 'h3',
  xl: 'h2',
  xxl: 'h1',
};

export const Heading = (props: HeadingProps) => {
  const { appearance, size, children, className, ...rest } = props;

  const classes = classNames(
    {
      Heading: true,
      [`Heading--${size}`]: size,
      [`Heading--${appearance}`]: appearance,
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
