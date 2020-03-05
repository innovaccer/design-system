import * as React from 'react';
import GenericText from '../_text';
import classNames from 'classnames';

export type Appearance = 'default' | 'subtle' | 'disabled' | 'white';

export interface ISubheadingProps {
  children: string;
  appearance?: Appearance;
}

const Subheading: React.FunctionComponent<ISubheadingProps> = props => {
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
