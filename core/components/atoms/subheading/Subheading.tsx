import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Appearance = 'default' | 'subtle' | 'disabled' | 'white';

export interface SubheadingProps extends BaseProps {
  /**
   * Text to be rendered
   * @type {string}
   */
  children: React.ReactText;
  /**
   * Color of `Subheading`
   * @default "default"
   */
  appearance?: Appearance;
}

export const Subheading = (props: SubheadingProps) => {
  const {
    appearance = 'default',
    children,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames({
    Subheading: true,
    [`Subheading--${appearance}`]: appearance
  }, className);

  return (
    <GenericText data-test="DesignSystem-Subheading"{...baseProps} className={classes} componentType={'h4'}>
      {children}
    </GenericText>
  );
};

Subheading.displayName = 'Subheading';

export default Subheading;
