import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export type Size = 'm' | 'l' | 'xl' | 'xxl';

export type Appearance = 'default' | 'subtle' | 'disabled' | 'white';

export interface IHeadingProps {
  children: string;
  appearance?: Appearance;
  size?: Size;
}

const sizeMap = {
  m: 'h4',
  l: 'h3',
  xl: 'h2',
  xxl: 'h1',
  '': 'h3'
};

const Heading: React.FunctionComponent<IHeadingProps> = props => {
  const {
    size = '',
    appearance = 'default',
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

export default Heading;
