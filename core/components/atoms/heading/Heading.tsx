import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export type Size = 'default' | 'm' | 'l' | 'xl' | 'xxl';

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
  m: 'h4',
  l: 'h3',
  xl: 'h2',
  xxl: 'h1',
  default: 'h3'
};

export const Heading = (props: HeadingProps) => {
  const {
    size = 'default',
    appearance = 'default',
    children,
    ...rest
  } = props;

  const classes = classNames({
    Heading: true,
    [`Heading--${size}`]: size !== 'default',
    [`Heading--${appearance}`]: appearance
  });

  return (
    <GenericText className={classes} componentType={sizeMap[size]} {...rest}>
      {children}
    </GenericText>
  );
};

export default Heading;
