import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export type Appearance = 'default' | 'subtle' | 'disabled' | 'white';

export interface SubheadingProps {
  /**
   * Text to be rendered
   * @type {string}
   */
  children: string;
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
    ...rest
  } = props;

  const classes = classNames({
    Subheading: true,
    [`Subheading--${appearance}`]: appearance
  });

  return (
    <GenericText className={classes} componentType={'h4'} {...rest}>
      {children}
    </GenericText>
  );
};

Subheading.displayName = 'Subheading';

export default Subheading;
