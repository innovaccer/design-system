import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { HeadingAppearance } from '../../../commonTypes';

export interface SubheadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
  /**
   * Text to be rendered
   * @type {string}
   */
  children: React.ReactText;
  /**
   * Color of `Subheading`
   */
  appearance: HeadingAppearance;
}

export const Subheading = (props: SubheadingProps) => {
  const { appearance, children, className, ...rest } = props;

  const classes = classNames(
    {
      Subheading: true,
      [`Subheading--${appearance}`]: appearance,
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
