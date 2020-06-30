import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export type Size = 's' | 'm' | 'l' | 'xl' | 'xxl';

export type Appearance = 'default' | 'subtle' | 'disabled' | 'white';

export interface HeadingProps {
  /**
   * Text to be rendered
   */
  children: string;
  /**
   * Color of `Heading`
   * @default "default"
   */
  appearance?: Appearance;
  /**
   * size of `Heading`
   * @default "default"
   */
  size?: Size;
}

const sizeMap = {
  s: 'h5',
  m: 'h4',
  l: 'h3',
  xl: 'h2',
  xxl: 'h1',
};

export const Heading = (props: HeadingProps) => {
  const {
    appearance,
    size = 'm',
    children,
    ...rest
  } = props;

  const classes = classNames({
    Heading: true,
    [`Heading--${size}`]: size,
    [`Heading--${appearance}`]: appearance
  });

  return (
    <GenericText className={classes} componentType={sizeMap[size]} {...rest}>
      {children}
    </GenericText>
  );
};

Heading.defaultProps = {
  appearance: 'default',
  size: 'm'
};

Heading.displayName = 'Heading';

export default Heading;
