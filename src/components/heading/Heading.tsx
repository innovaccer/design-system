import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { HeadingVariant, HeadingSize } from '@/common.type';

export interface HeadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
  /**
   * Text to be rendered
   */
  children: React.ReactText;
  /**
   * Defines the type of heading
   */
  element: HeadingVariant;
  /**
   * size of `Heading`
   */
  size: HeadingSize;
  /**
   * Makes `Heading` appearance as subtle
   */
  subtle?: boolean;
  /**
   * Makes `Heading` appearance as inverted
   */
  inverted?: boolean;
  /**
   * Makes `Heading` appearance as disabled
   */
  disabled?: boolean;
}

export const Heading = (props: HeadingProps) => {
  const { size, children, subtle, inverted, disabled, className, element, ...rest } = props;

  const classes = classNames(
    {
      ['Mds-Heading']: true,
      [`Mds-Heading--${size}`]: size,
      [`Mds-Heading--subtle`]: subtle,
      [`Mds-Heading--disabled`]: disabled,
      [`Mds-Heading--white`]: inverted,
    },
    className
  );

  return (
    <GenericText data-test="DesignSystem-Heading" {...rest} className={classes} componentType={element}>
      {children}
    </GenericText>
  );
};

Heading.displayName = 'Heading';
Heading.defaultProps = {
  // appearance: 'default',
  element: 'h3',
  size: 'medium',
};

export default Heading;
