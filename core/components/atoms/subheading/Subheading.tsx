import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export type Appearance = 'default' | 'subtle' | 'disabled' | 'white';

export interface ISubheadingProps {
  /**
   * Text to be rendered
   * @type {string}
   */
  children: string;
  /**
   * Color of `subheading`
   * @default "default"
   */
  appearance?: Appearance;
}

const Subheading = (props: ISubheadingProps) => {
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

export default Subheading;
